// Armador del aula en el Moodle de Empoderatech (formacion.empoderatech.com, Moodle 5.3, tema Moove). Se carga en una pestaña del
// curso con la sesión del usuario (input file + eval) y usa los formularios de Moodle y su API AJAX, como los armadores de las aulas
// de la licitación. Los datos salen de scripts/moodle-aula.mjs (entregables/moodle/aula.json); los SCORM y PDF entran por input
// file y quedan en window.__archivos[nombre] (máx. 10 MB por llamada).
//   armarInicio(cid, aula)           → sección 0: portada, cómo avanzar, foro de interacción, glosario y espacios reservados
//   armarModulo(cid, aula, n)        → sección n: resumen del módulo, temas (Rise, quiz, foro de la actividad 1, tarea 2), casos,
//                                      foro del módulo, infografía y espacios reservados; rúbricas de Moodle en foros y tareas
//   armarFacilitador(cid, aula)      → última sección, oculta: guía del facilitador y mapa del aula
// Todo es idempotente por nombre: si una actividad ya existe en su sección, no se repite. Los avances van a window.__log.
(() => {
  const log = (m) => { (window.__log = window.__log || []).push(m); };
  const sk = () => M.cfg.sesskey;
  const P = (h) => new DOMParser().parseFromString(h, 'text/html');
  const call = async (methodname, args) => {
    const r = await (await fetch(`/lib/ajax/service.php?sesskey=${sk()}&info=${methodname}`, { method: 'POST', body: JSON.stringify([{ index: 0, methodname, args }]) })).json();
    if (r[0].error) throw new Error(`${methodname}: ${r[0].exception?.message}`);
    return r[0].data;
  };
  const estado = async (cid) => JSON.parse(await call('core_courseformat_get_state', { courseid: cid }));
  const seccion = (st, n) => st.section.find((x) => x.number === n);
  const cmsDe = (st, n) => { const s = seccion(st, n); const by = Object.fromEntries(st.cm.map((c) => [c.id, c])); return s.cmlist.map((id) => by[id]); };
  const archivo = (ruta) => {
    const nombre = ruta.split('/').pop().normalize('NFC');
    const f = Object.entries(window.__archivos || {}).find(([k]) => k.normalize('NFC') === nombre)?.[1];
    if (!f) throw new Error(`sin archivo cargado: ${nombre}`);
    return f;
  };

  // ---------- formularios ----------
  const errores = (o) => [...o.querySelectorAll('.invalid-feedback, .error, .errormessage, .alert-danger')].map((e) => e.textContent.trim()).filter(Boolean).join(' | ');
  async function formulario(url) {
    const d = P(await (await fetch(url)).text());
    const f = [...d.querySelectorAll('form.mform')].find((x) => x.querySelector('[name=sesskey]'));
    if (!f) throw new Error(`sin formulario en ${url} (${d.querySelector('.errormessage')?.textContent?.trim() || ''})`);
    const fd = new FormData(f);
    for (const [k, v] of [...fd.entries()]) if (v instanceof File) fd.delete(k);
    for (const k of ['cancel', 'submitbutton']) fd.delete(k);
    for (const k of [...fd.keys()]) if (/^completionexpected|^(allowsubmissionsfromdate|duedate|cutoffdate|gradingduedate)\[/.test(k)) fd.delete(k);
    return { d, f, fd };
  }
  async function subir(d, file, itemid) {
    const repo = (d.documentElement.innerHTML.match(/"id":"?(\d+)"?,[^{}]*?"type":"upload"/) || [])[1] || '4';
    const up = new FormData();
    up.append('repo_upload_file', file, file.name); up.append('sesskey', sk()); up.append('repo_id', repo); up.append('itemid', itemid);
    up.append('savepath', '/'); up.append('title', file.name); up.append('ctx_id', M.cfg.contextid); up.append('overwrite', '1');
    const u = await (await fetch('/repository/repository_ajax.php?action=upload', { method: 'POST', body: up })).json();
    if (u.error) throw new Error(`subida ${file.name}: ${u.error}`);
  }
  // completitud: 2 = automática según las condiciones de cada tipo
  const COMPLETAR = {
    label: { completion: '0' },
    page: { completion: '2', completionview: '1' },
    resource: { completion: '2', completionview: '1' },
    glossary: { completion: '2', completionview: '1' },
    scorm: { completion: '2', 'completionstatusrequired[4]': '4', completionstatusallscos: '1' },
    forum: { completion: '2', completiondiscussionsenabled: '1', completiondiscussions: '1' },
    'forum-modulo': { completion: '2', completionpostsenabled: '1', completionposts: '1' },
    assign: { completion: '2', completionsubmit: '1' },
    quiz: { completion: '2', completionusegrade: '1' },
  };
  function completitud(fd, clave) {
    for (const k of [...fd.keys()]) if (/^completion(?!unlocked)/.test(k)) fd.delete(k);
    for (const [k, v] of Object.entries(COMPLETAR[clave] || { completion: '0' })) fd.set(k, v);
  }
  async function enviar(f, fd, que) {
    fd.set('submitbutton2', 'Guardar cambios y regresar al curso');
    const r = await fetch(f.action, { method: 'POST', body: fd });
    if (!/course\/(view|section)\.php/.test(r.url)) throw new Error(`${que}: ${errores(P(await r.text())) || `no se guardó (${r.url})`}`);
  }
  async function crear(cid, n, tipo, campos, { file, clave, visible = true } = {}) {
    const { d, f, fd } = await formulario(`/course/modedit.php?add=${tipo}&type=&course=${cid}&section=${n}&return=0&sr=0`);
    completitud(fd, clave || tipo);
    fd.set('visible', visible ? '1' : '0');
    for (const [k, v] of Object.entries(campos)) fd.set(k, v);
    if (file) await subir(d, file, fd.get(tipo === 'scorm' ? 'packagefile' : 'files'));
    await enviar(f, fd, `${tipo} «${campos.name || 'etiqueta'}»`);
  }
  const intro = (html, mostrar = false) => ({ 'introeditor[text]': html, 'introeditor[format]': '1', showdescription: mostrar ? '1' : '0' });

  // ---------- rúbricas (calificación avanzada) ----------
  // Moodle crea el área de calificación al guardar la actividad con el método «rubric»; aquí se define la rúbrica y queda lista.
  // area: 'forum' (foro completo) o 'submissions' (tarea). manage.php pide contexto, componente y área.
  async function definirRubrica(cmid, area, rub) {
    const comp = area === 'forum' ? 'mod_forum' : 'mod_assign';
    const ctx = /"contextid":(\d+)/.exec(await (await fetch(`/mod/${comp.slice(4)}/view.php?id=${cmid}`)).text())?.[1];
    if (!ctx) throw new Error(`sin contexto para ${cmid}`);
    const man = P(await (await fetch(`/grade/grading/manage.php?contextid=${ctx}&component=${comp}&area=${area}`)).text());
    if (man.querySelector('.gradingform_rubric')) return 'ya existe';
    const enlace = [...man.querySelectorAll('a')].map((a) => a.getAttribute('href') || '').find((h) => /grading\/form\/rubric\/edit\.php/.test(h));
    if (!enlace) throw new Error(`sin editor de rúbrica en ${cmid}`);
    const { f, fd } = await formulario(new URL(enlace, location.origin).href);
    for (const k of [...fd.keys()]) if (/^rubric\[criteria\]/.test(k)) fd.delete(k);
    fd.set('name', rub.nombre);
    fd.set('description_editor[text]', '<p>Logrado 100 %, parcial 60 % y no logrado 0 % del peso de cada criterio. Se aprueba con 60 % o más.</p>');
    fd.set('description_editor[format]', '1');
    rub.criterios.forEach((c, i) => {
      const k = `rubric[criteria][NEWID${i + 1}]`;
      fd.set(`${k}[sortorder]`, String(i + 1));
      fd.set(`${k}[description]`, `${c.descripcion} (${c.peso} %)`);
      c.niveles.forEach((l, j) => { fd.set(`${k}[levels][NEWID${j + 1}][score]`, String(l.score)); fd.set(`${k}[levels][NEWID${j + 1}][definition]`, l.definicion); });
    });
    for (const o of ['sortlevelsasc', 'lockzeropoints', 'alwaysshowdefinition', 'showdescriptionteacher', 'showdescriptionstudent', 'showscoreteacher', 'showscorestudent', 'enableremarks', 'showremarksstudent']) fd.set(`rubric[options][${o}]`, '1');
    fd.set('saverubric', 'Guardar rúbrica y dejarla lista');
    const r = await fetch(f.action, { method: 'POST', body: fd });
    const o = P(await r.text());
    if (/rubric\/edit\.php/.test(r.url) && errores(o)) throw new Error(`rúbrica ${cmid}: ${errores(o)}`);
    return 'lista';
  }
  window.definirRubrica = definirRubrica;

  // ---------- piezas ----------
  const DISPLAY = { popup: '0', skipview: '2', hidebrowse: '1', hidetoc: '3', nav: '0', displayattemptstatus: '0', displaycoursestructure: '0', width: '100', height: '720', forcenewattempt: '0', maxattempt: '0' };
  const scorm = (cid, n, x, alto, conNota) => crear(cid, n, 'scorm', { name: x.name, scormtype: 'local', ...intro(x.intro, true), ...DISPLAY, height: String(alto), grademethod: '1', maxgrade: conNota ? '100' : '0', whatgrade: '0' }, { file: archivo(x.zip) });
  const etiqueta = (cid, n, html, nombre) => crear(cid, n, 'label', { name: nombre, 'introeditor[text]': html, 'introeditor[format]': '1' });
  const pagina = (cid, n, nombre, html, { visible = true, resumen = '' } = {}) => crear(cid, n, 'page', { name: nombre, ...intro(resumen ? `<p>${resumen}</p>` : '', !!resumen), 'page[text]': html, 'page[format]': '1', display: '5', printintro: '0', printlastmodified: '0' }, { visible });
  async function foro(cid, n, x, { rubricaDe, clave = 'forum', resumen } = {}) {
    await crear(cid, n, 'forum', {
      name: x.name, ...intro(x.intro), type: 'general', forcesubscribe: '0', maxattachments: '5', maxbytes: '10485760',
      ...(rubricaDe ? { 'grade_forum[modgrade_type]': 'point', 'grade_forum[modgrade_point]': '100', advancedgradingmethod_forum: 'rubric', gradepass_forum: '60' } : {}),
    }, { clave });
    if (resumen) log(resumen);
  }
  const tarea = (cid, n, x) => crear(cid, n, 'assign', {
    name: x.name, ...intro(x.intro), assignsubmission_onlinetext_enabled: '1', assignsubmission_file_enabled: '1', assignsubmission_file_maxfiles: '5',
    assignsubmission_onlyoffice_enabled: '0', assignsubmission_comments_enabled: '1', assignfeedback_comments_enabled: '1', submissiondrafts: '0', requiresubmissionstatement: '0', sendnotifications: '0', sendlatenotifications: '0', sendstudentnotifications: '1',
    'grade[modgrade_type]': 'point', 'grade[modgrade_point]': '100', advancedgradingmethod_submissions: 'rubric', gradepass: '60',
  });

  async function nombreSeccion(cid, n, nombre, resumenHtml, visible = true) {
    const st = await estado(cid); const s = seccion(st, n);
    const { f, fd } = await formulario(`/course/editsection.php?id=${s.id}&sr=0`);
    fd.set('name', nombre); fd.set('summary_editor[text]', resumenHtml); fd.set('summary_editor[format]', '1');
    for (const k of [...fd.keys()]) if (k === 'usedefaultname') fd.delete(k);
    fd.set('submitbutton', 'Guardar cambios');
    const r = await fetch(f.action, { method: 'POST', body: fd });
    if (!/course\/(view|section)\.php/.test(r.url)) throw new Error(`sección ${n}: ${errores(P(await r.text())) || r.url}`);
    if (!visible) await call('core_courseformat_update_course', { action: 'section_hide', courseid: cid, ids: [String(s.id)] });
  }

  // ---------- idempotencia y rúbricas pendientes ----------
  const existe = async (cid, n, nombre) => cmsDe(await estado(cid), n).some((c) => c.name === nombre);
  async function paso(cid, n, nombre, fn) { if (await existe(cid, n, nombre)) { log(`= ${nombre}`); return; } await fn(); log(`+ ${nombre}`); }
  async function rubricaDe(cid, n, nombre, area, rub) {
    const c = cmsDe(await estado(cid), n).find((x) => x.name === nombre);
    if (!c) throw new Error(`no está «${nombre}»`);
    log(`  rúbrica ${await definirRubrica(c.id, area, rub)}: ${nombre}`);
  }

  // ---------- secciones ----------
  window.armarInicio = async (cid, aula) => {
    const I = aula.inicio;
    await nombreSeccion(cid, 0, 'Bienvenida', '');
    await paso(cid, 0, 'Portada del curso', () => etiqueta(cid, 0, I.portada, 'Portada del curso'));
    await paso(cid, 0, 'Cómo avanzas', () => etiqueta(cid, 0, I.comoAvanzar, 'Cómo avanzas'));
    await paso(cid, 0, I.reservados.induccion.name, () => pagina(cid, 0, I.reservados.induccion.name, I.reservados.induccion.html, { visible: false }));
    await paso(cid, 0, I.reservados.diagnostica.name, () => pagina(cid, 0, I.reservados.diagnostica.name, I.reservados.diagnostica.html, { visible: false }));
    await paso(cid, 0, I.foro.name, () => foro(cid, 0, I.foro, { clave: 'forum-modulo' }));
    await paso(cid, 0, I.glosario.name, () => crear(cid, 0, 'glossary', { name: I.glosario.name, ...intro(I.glosario.intro, true), displayformat: 'dictionary', 'scale[modgrade_type]': 'none', assessed: '0' }));
    log('FIN inicio');
  };

  window.armarModulo = async (cid, aula, n) => {
    const m = aula.modulos.find((x) => x.n === n); const R = m.reservados;
    await nombreSeccion(cid, n, `Módulo ${n}: ${m.nombre}`, m.resumen);
    await paso(cid, n, R.bienvenida.name, () => pagina(cid, n, R.bienvenida.name, R.bienvenida.html, { visible: false }));
    await paso(cid, n, R.diagnostica.name, () => pagina(cid, n, R.diagnostica.name, R.diagnostica.html, { visible: false }));
    for (const [i, a] of m.aes.entries()) {
      const tit = `Tema ${i + 1}: ${a.tema}`;
      await paso(cid, n, tit, () => etiqueta(cid, n, a.banda, tit));
      await paso(cid, n, a.rise.name, () => scorm(cid, n, a.rise, 760, false));
      await paso(cid, n, a.quiz.name, () => scorm(cid, n, a.quiz, 700, true));
      await paso(cid, n, a.act1.name, () => foro(cid, n, a.act1, { rubricaDe: true }));
      await rubricaDe(cid, n, a.act1.name, 'forum', a.act1.rubrica);
      await paso(cid, n, a.act2.name, () => tarea(cid, n, a.act2));
      await rubricaDe(cid, n, a.act2.name, 'submissions', a.act2.rubrica);
    }
    if (m.casos.length) {
      await paso(cid, n, 'Casos de aplicación', () => etiqueta(cid, n, m.etiquetas.casos, 'Casos de aplicación'));
      for (const c of m.casos) await paso(cid, n, c.name, () => pagina(cid, n, c.name, c.html));
    }
    await paso(cid, n, 'Conversa', () => etiqueta(cid, n, m.etiquetas.foro, 'Conversa'));
    await paso(cid, n, m.foro.name, () => foro(cid, n, m.foro, { rubricaDe: true, clave: 'forum-modulo' }));
    await rubricaDe(cid, n, m.foro.name, 'forum', m.foro.rubrica);
    await paso(cid, n, 'Resumen del módulo', () => etiqueta(cid, n, m.etiquetas.resumen, 'Resumen del módulo'));
    await paso(cid, n, m.infografia.name, () => scorm(cid, n, m.infografia, 760, false));
    await paso(cid, n, R.resumenVideo.name, () => pagina(cid, n, R.resumenVideo.name, R.resumenVideo.html, { visible: false }));
    await paso(cid, n, R.evaluacion.name, () => pagina(cid, n, R.evaluacion.name, R.evaluacion.html, { visible: false }));
    log(`FIN módulo ${n}`);
  };

  window.armarFacilitador = async (cid, aula) => {
    const F = aula.facilitador; const n = aula.modulos.length + 1;
    await nombreSeccion(cid, n, F.nombre, F.resumen, false);
    for (const x of F.archivos) await paso(cid, n, x.name, () => crear(cid, n, 'resource', { name: x.name, ...intro(''), display: '0', printintro: '0' }, { file: archivo(x.pdf), clave: 'label' }));
    log('FIN facilitador');
  };

  // Vuelve a escribir el texto de las páginas de casos (p. ej. tras cambiar la vista del estudiante)
  window.actualizarCasos = async (cid, aula) => {
    const st = await estado(cid);
    for (const m of aula.modulos) for (const c of m.casos) {
      const cm = st.cm.find((x) => x.name === c.name); if (!cm) { log(`no está «${c.name}»`); continue; }
      const { f, fd } = await formulario(`/course/modedit.php?update=${cm.id}&return=0`);
      fd.set('page[text]', c.html); fd.set('page[format]', '1');
      await enviar(f, fd, `caso ${cm.id}`); log(`~ ${c.name}`);
    }
    log('FIN casos');
  };

  // Vuelve a escribir nombre y enunciado de las tareas (actividad 2), las etiquetas de cada tema y «Cómo avanzas» (p. ej. al marcar
  // los hitos del proyecto). La tarea se busca por el título de la actividad, así que sirve aunque cambie el sufijo del nombre.
  window.actualizarTextos = async (cid, aula) => {
    const st = await estado(cid);
    const editarCm = async (cm, campos) => {
      const { f, fd } = await formulario(`/course/modedit.php?update=${cm.id}&return=0`);
      for (const [k, v] of Object.entries(campos)) fd.set(k, v);
      await enviar(f, fd, `editar ${cm.id}`);
    };
    for (const m of aula.modulos) for (const [i, a] of m.aes.entries()) {
      const t = st.cm.find((x) => x.module === 'assign' && x.name.startsWith(`Actividad 2: ${a.act2.titulo}`));
      if (t) { await editarCm(t, { name: a.act2.name, 'introeditor[text]': a.act2.intro, 'introeditor[format]': '1' }); log(`~ ${a.act2.name}`); } else log(`no está la tarea de ${a.id}`);
      const e = st.cm.find((x) => x.module === 'label' && x.name === `Tema ${i + 1}: ${a.tema}`);
      if (e) await editarCm(e, { 'introeditor[text]': a.banda, 'introeditor[format]': '1' });
    }
    const c = st.cm.find((x) => x.module === 'label' && x.name === 'Cómo avanzas');
    if (c) { await editarCm(c, { 'introeditor[text]': aula.inicio.comoAvanzar, 'introeditor[format]': '1' }); log('~ Cómo avanzas'); }
    log('FIN textos');
  };

  // Vuelve a escribir la portada de cada módulo (resumen de la sección) y agrega la tarjeta de insignias tras «Cómo avanzas»
  window.actualizarPortadas = async (cid, aula) => {
    for (const m of aula.modulos) { await nombreSeccion(cid, m.n, `Módulo ${m.n}: ${m.nombre}`, m.resumen); log(`~ portada módulo ${m.n}`); }
    if (aula.inicio.insignias) {
      await paso(cid, 0, 'Insignias del curso', () => etiqueta(cid, 0, aula.inicio.insignias, 'Insignias del curso'));
      const st = await estado(cid); const s0 = seccion(st, 0); const cms = cmsDe(st, 0);
      const ins = cms.find((c) => c.name === 'Insignias del curso'); const i = cms.findIndex((c) => c.name === 'Cómo avanzas');
      if (ins && i >= 0 && cms[i + 1] && cms[i + 1].id !== ins.id) await call('core_courseformat_update_course', { action: 'cm_move', courseid: cid, ids: [String(ins.id)], targetsectionid: String(s0.id), targetcmid: String(cms[i + 1].id) });
    }
    log('FIN portadas');
  };

  // ---------- cambios del 31-10 (observaciones de Natalia) ----------
  // Actividades 1 y 2 formativas (tarea sin nota, rúbrica de autoevaluación en el enunciado); casos como tarea evaluada con rúbrica;
  // foro del módulo → foro de casos sin nota; glosario y evaluación por módulo; horas en los nombres; sección de evaluación final.
  const borrar = (cid, ids) => ids.length ? call('core_courseformat_update_course', { action: 'cm_delete', courseid: cid, ids: ids.map(String) }) : null;
  const alFinal = (cid, sid, cmid) => call('core_courseformat_update_course', { action: 'cm_move', courseid: cid, ids: [String(cmid)], targetsectionid: String(sid) });
  async function editar(cmid, campos, completar) {
    const { f, fd } = await formulario(`/course/modedit.php?update=${cmid}&return=0`);
    if (completar) completitud(fd, completar);
    for (const [k, v] of Object.entries(campos)) fd.set(k, v);
    await enviar(f, fd, `editar ${cmid}`);
  }
  const SIN_NOTA = { 'grade[modgrade_type]': 'none', advancedgradingmethod_submissions: '' };
  const tareaFormativa = (cid, n, x) => crear(cid, n, 'assign', {
    name: x.name, ...intro(x.intro), assignsubmission_onlinetext_enabled: '1', assignsubmission_file_enabled: '1', assignsubmission_file_maxfiles: '5',
    assignsubmission_onlyoffice_enabled: '0', assignsubmission_comments_enabled: '1', assignfeedback_comments_enabled: '1', submissiondrafts: '0', requiresubmissionstatement: '0', sendnotifications: '0', sendlatenotifications: '0', sendstudentnotifications: '1',
    ...SIN_NOTA,
  });
  const tareaCaso = (cid, n, c) => tarea(cid, n, { name: c.name, intro: c.html });
  async function glosarioModulo(cid, n, g) {
    await paso(cid, n, g.name, () => crear(cid, n, 'glossary', { name: g.name, ...intro(g.intro, true), displayformat: 'dictionary', 'scale[modgrade_type]': 'none', assessed: '0' }));
    const cm = cmsDe(await estado(cid), n).find((c) => c.name === g.name);
    const vista = await (await fetch(`/mod/glossary/view.php?id=${cm.id}&mode=letter&hook=ALL`)).text();
    if (!/No se encontraron entradas|No entries found/i.test(vista)) { log(`= entradas de ${g.name}`); return cm.id; }
    const { d, f, fd } = await formulario(`/mod/glossary/import.php?id=${cm.id}`);
    await subir(d, g.xmlTexto ? new File([g.xmlTexto], g.xml.split('/').pop(), { type: 'text/xml' }) : archivo(g.xml), fd.get('file'));
    fd.set('dest', 'current'); fd.set('catsincl', '0'); fd.set('submitbutton', 'Guardar cambios');
    const r = await fetch(f.action, { method: 'POST', body: fd }); const t = await r.text();
    const res = P(t).querySelector('.generaltable, table')?.textContent?.replace(/\s+/g, ' ').trim() || '';
    log(`+ entradas de ${g.name}: ${res.slice(0, 120)}`);
    await call('core_courseformat_update_course', { action: 'cm_show', courseid: cid, ids: [String(cm.id)] }).catch(() => {});
    return cm.id;
  }
  // Prohíbe a Estudiante escribir entradas en un glosario (como en el glosario del curso, 30-10)
  async function glosarioSoloLectura(cmid) {
    const ctx = /"contextid":(\d+)/.exec(await (await fetch(`/mod/glossary/view.php?id=${cmid}`)).text())?.[1];
    await fetch(`/admin/roles/permissions.php?contextid=${ctx}&roleid=5&capability=mod/glossary:write&prevent=1&confirm=1&sesskey=${sk()}`);
  }
  window.glosarioSoloLectura = glosarioSoloLectura;

  // Evaluación con cuestionario de Moodle: crea el cuestionario (o reutiliza el que ya está en la sección con ese nombre), importa
  // el GIFT de aula.json en su banco de preguntas y agrega todas las preguntas en el orden del archivo. `x.preguntas` cuenta también
  // las descripciones de los casos de la final.
  async function evaluacionQuiz(cid, n, x) {
    const cmQuiz = async () => cmsDe(await estado(cid), n).find((c) => c.module === 'quiz' && c.name === x.name);
    let cm = await cmQuiz();
    if (!cm) {
      await crear(cid, n, 'quiz', { name: x.name, ...intro(x.intro, true), grade: '100', gradepass: '60', attempts: '2', grademethod: '1', questionsperpage: '0', shuffleanswers: '1', preferredbehaviour: 'deferredfeedback' }, { clave: 'quiz', visible: false });
      cm = await cmQuiz(); log(`+ ${x.name}`);
    }
    const slots = () => fetch(`/mod/quiz/edit.php?cmid=${cm.id}`).then((r) => r.text()).then((t) => P(t).querySelectorAll('li.slot').length);
    if (await slots() >= x.preguntas) { log(`= preguntas de ${x.name}`); return cm.id; }
    // banco: importar si está vacío
    const idsBanco = async () => [...new Set([...P(await (await fetch(`/question/edit.php?cmid=${cm.id}&qperpage=1000`)).text()).querySelectorAll('input[type=checkbox][name^=q]')].map((i) => /^q(\d+)$/.exec(i.name)?.[1]).filter(Boolean))];
    let ids = await idsBanco();
    if (!ids.length) {
      const { d, f, fd } = await formulario(`/question/bank/importquestions/import.php?cmid=${cm.id}`);
      await subir(d, new File([x.giftTexto], `${x.name}.txt`, { type: 'text/plain' }), fd.get('newfile'));
      fd.set('format', 'gift'); fd.set('catfromfile', '0'); fd.set('contextfromfile', '0'); fd.set('submitbutton', 'Importar');
      const r = await fetch(f.action, { method: 'POST', body: fd }); const o = P(await r.text());
      const err = errores(o); if (err) throw new Error(`importar ${x.name}: ${err}`);
      ids = await idsBanco(); log(`  importadas ${ids.length} preguntas en ${x.name}`);
    }
    ids.sort((a, b) => Number(a) - Number(b));
    const fd = new FormData(); fd.set('cmid', String(cm.id)); fd.set('sesskey', sk()); fd.set('addonpage', '0'); fd.set('appendqnumstring', 'addquestionlist'); fd.set('add', '1');
    ids.forEach((id) => fd.set(`q${id}`, '1'));
    await fetch(`/mod/quiz/edit.php?cmid=${cm.id}`, { method: 'POST', body: fd });
    const total = await slots(); log(`  ${total} preguntas en ${x.name}`);
    if (total < x.preguntas) throw new Error(`${x.name}: quedaron ${total} de ${x.preguntas}`);
    return cm.id;
  }
  window.evaluacionQuiz = evaluacionQuiz;

  window.cambios31Evaluacion = async (cid, aula, n) => {
    const m = aula.modulos.find((x) => x.n === n);
    const reservado = cmsDe(await estado(cid), n).find((c) => c.module === 'page' && c.name === `Evaluación del módulo ${n}`);
    if (reservado) { await borrar(cid, [reservado.id]); log(`- espacio reservado ${reservado.name}`); }
    const id = await evaluacionQuiz(cid, n, m.evaluacion);
    await call('core_courseformat_update_course', { action: 'cm_show', courseid: cid, ids: [String(id)] });
    log(`FIN evaluación módulo ${n}`);
  };

  // Sección «Evaluación final» antes de «Para el facilitador»
  window.cambios31Final = async (cid, aula) => {
    const F = aula.final; const nf = aula.modulos.length + 1;
    let st = await estado(cid);
    if (seccion(st, nf)?.title !== F.seccion) {
      await fetch(`/course/changenumsections.php?courseid=${cid}&insertsection=${nf}&sesskey=${sk()}&numsections=1&sectionreturn=0`);
      log('+ sección Evaluación final');
    }
    await nombreSeccion(cid, nf, F.seccion, F.resumen);
    const id = await evaluacionQuiz(cid, nf, F.evaluacion);
    await call('core_courseformat_update_course', { action: 'cm_show', courseid: cid, ids: [String(id)] });
    log('FIN evaluación final');
  };

  // Sección del facilitador: reemplaza la guía y el mapa por los PDF nuevos (las partes antiguas de la guía se quitan)
  window.cambios31Facilitador = async (cid, aula) => {
    const F = aula.facilitador; const st = await estado(cid);
    const s = st.section.find((x) => x.title === F.nombre); if (!s) throw new Error('sin sección del facilitador');
    await nombreSeccion(cid, s.number, F.nombre, F.resumen, false);
    const viejos = cmsDe(st, s.number).filter((c) => c.module === 'resource');
    await borrar(cid, viejos.map((c) => c.id)); viejos.forEach((c) => log(`- ${c.name}`));
    for (const x of F.archivos) { await crear(cid, s.number, 'resource', { name: x.name, ...intro(''), display: '0', printintro: '0' }, { file: archivo(x.pdf), clave: 'label' }); log(`+ ${x.name}`); }
    log('FIN facilitador 31-10');
  };

  // Libro de calificaciones (31-10): casos 30 %, evaluaciones de módulo 40 %, final 30 %, formativas 0 %. La categoría de hitos
  // pasa a ser la de casos; la de pitch y portafolio se borra (sus tareas ya no tienen nota). Cada caso y cada cuestionario se
  // asigna a su categoría con el campo «gradecat» de su formulario.
  window.cambios31Notas = async (cid) => {
    const st = await estado(cid);
    const quizzes = st.cm.filter((c) => c.module === 'quiz');
    const { d } = await formulario(`/course/modedit.php?update=${quizzes[0].id}&return=0`);
    const cats = Object.fromEntries([...d.querySelectorAll('select[name=gradecat] option')].map((o) => [o.textContent.trim(), o.value]));
    log(`  categorías: ${Object.keys(cats).join(' | ')}`);
    const catHitos = Object.entries(cats).find(([t]) => /^Hitos|^Casos de aplicación/.test(t))?.[1];
    const catPitch = Object.entries(cats).find(([t]) => /^Pitch/.test(t))?.[1];
    const catEval = Object.entries(cats).find(([t]) => /^Evaluaciones de módulo/.test(t))?.[1];
    const catFinal = Object.entries(cats).find(([t]) => /^Evaluación final/.test(t))?.[1];
    // categoría de casos
    {
      const { f, fd } = await formulario(`/grade/edit/tree/category.php?courseid=${cid}&id=${catHitos}`);
      fd.set('fullname', 'Casos de aplicación (práctica evaluada)'); fd.set('submitbutton', 'Guardar cambios');
      await fetch(f.action, { method: 'POST', body: fd }); log('~ categoría: Casos de aplicación (práctica evaluada)');
    }
    for (const c of st.cm.filter((x) => x.module === 'assign' && x.name.startsWith('Caso de aplicación:'))) { await editar(c.id, { gradecat: catHitos }); log(`  ${c.name.slice(0, 60)} → casos`); }
    for (const c of quizzes) { await editar(c.id, { gradecat: /final/i.test(c.name) ? catFinal : catEval }); log(`  ${c.name} → ${/final/i.test(c.name) ? 'final' : 'evaluaciones de módulo'}`); }
    // Borrar categoría: el menú de acciones guarda el destino ya confirmado en data-modal-destination del enlace «Borrar»
    if (catPitch) {
      const t = P(await (await fetch(`/grade/edit/tree/index.php?id=${cid}`)).text());
      const a = [...([...t.querySelectorAll('tr.category')].find((tr) => /^Pitch/.test(tr.textContent.trim()))?.querySelectorAll('a') || [])].find((e) => e.textContent.trim() === 'Borrar');
      if (a) { await fetch(new URL(a.dataset.modalDestination, `${location.origin}/grade/edit/tree/`).href); log('- categoría Pitch y portafolio'); }
    }
    // pesos
    const arbol = P(await (await fetch(`/grade/edit/tree/index.php?id=${cid}`)).text());
    const fila = (re) => [...arbol.querySelectorAll('tr.category')].find((tr) => re.test(tr.textContent))?.querySelector('input[name^=weight_]')?.name.replace('weight_', '');
    const pesos = [[/Casos de aplicación/, 30], [/Evaluaciones de módulo/, 40], [/Evaluación final/, 30], [/Actividades formativas/, 0]];
    const fd = new FormData(); fd.set('sesskey', sk());
    for (const [re, w] of pesos) { const id = fila(re); if (!id) { log(`! sin fila de peso ${re}`); continue; } fd.set(`weightoverride_${id}`, '1'); fd.set(`weight_${id}`, String(w)); }
    await fetch(`/grade/edit/tree/index.php?id=${cid}`, { method: 'POST', body: fd });
    log('FIN notas 31-10');
  };

  // Finalización del curso: todas las actividades visibles con finalización y nota del curso de 60 % o más
  window.cambios31Finalizacion = async (cid) => {
    const st = await estado(cid); const visibles = new Set(st.cm.filter((c) => c.visible && c.module !== 'label').map((c) => String(c.id)));
    const { d, f } = await formulario(`/course/completion.php?id=${cid}`);
    const fd = new FormData(); for (const i of f.querySelectorAll('input[type=hidden]')) fd.append(i.name, i.value);
    let n = 0;
    for (const i of f.querySelectorAll('input[type=checkbox][name^="criteria_activity["]')) { const id = /\[(\d+)\]/.exec(i.name)[1]; if (visibles.has(id)) { fd.set(i.name, '1'); n++; } }
    fd.set('criteria_grade', '1'); fd.set('criteria_grade_value', '60'); fd.set('overall_aggregation', '1'); fd.set('activity_aggregation', '1');
    fd.set('submitbutton', 'Guardar cambios');
    const r = await fetch(f.action, { method: 'POST', body: fd }); const o = P(await r.text());
    log(`~ finalización del curso: ${n} actividades + nota 60 % ${errores(o) ? '· ' + errores(o) : ''}`);
  };

  // ---------- diseño del 31-10 ----------
  // Fotos de los banners: van como archivo del editor (resumen de la sección o texto de la etiqueta) y el HTML las nombra con
  // @@PLUGINFILE@@/<archivo>. aula.imagenes trae cada JPG en base64.
  const imagen = (aula, nombre) => new File([Uint8Array.from(atob(aula.imagenes[nombre]), (c) => c.charCodeAt(0))], nombre, { type: 'image/jpeg' });
  async function seccionConFoto(cid, n, nombre, html, aula, foto) {
    const st = await estado(cid); const s = seccion(st, n);
    const { d, f, fd } = await formulario(`/course/editsection.php?id=${s.id}&sr=0`);
    if (foto) await subir(d, imagen(aula, foto), fd.get('summary_editor[itemid]'));
    fd.set('name', nombre); fd.set('summary_editor[text]', html); fd.set('summary_editor[format]', '1');
    for (const k of [...fd.keys()]) if (k === 'usedefaultname') fd.delete(k);
    fd.set('submitbutton', 'Guardar cambios');
    const r = await fetch(f.action, { method: 'POST', body: fd });
    if (!/course\/(view|section)\.php/.test(r.url)) throw new Error(`sección ${n}: ${errores(P(await r.text())) || r.url}`);
  }
  async function etiquetaConFoto(cmid, html, aula, foto) {
    const { d, f, fd } = await formulario(`/course/modedit.php?update=${cmid}&return=0`);
    completitud(fd, 'label');
    if (foto) await subir(d, imagen(aula, foto), fd.get('introeditor[itemid]'));
    fd.set('introeditor[text]', html); fd.set('introeditor[format]', '1');
    await enviar(f, fd, `etiqueta ${cmid}`);
  }

  window.diseno31Modulo = async (cid, aula, n) => {
    const m = aula.modulos.find((x) => x.n === n); const R = m.reservados;
    await seccionConFoto(cid, n, m.seccion, m.resumen, aula, m.banner); log(`~ portada con foto del módulo ${n}`);
    const cms = cmsDe(await estado(cid), n);
    const etq = async (nombre, html, alternativos = []) => {
      const e = cms.find((c) => c.module === 'label' && [nombre, ...alternativos].includes(c.name));
      if (e) await editar(e.id, { name: nombre, 'introeditor[text]': html, 'introeditor[format]': '1' }); else await etiqueta(cid, n, html, nombre);
    };
    await etq('Empieza aquí', m.etiquetas.empieza);
    if (m.casos.length) await etq('Práctica evaluada', m.etiquetas.casos, ['Casos de aplicación']);
    await etq(m.casos.length ? 'Foro de casos' : 'Foro del módulo', m.etiquetas.foro, ['Conversa']);
    await etq('Resumen del módulo', m.etiquetas.resumen);
    await etq('Evaluación del módulo', m.etiquetas.evaluacion);
    log(`~ encabezados del módulo ${n}`);
    for (const [tipo, nombre] of [['bienvenida', R.bienvenida.name], ['resumen', R.resumenVideo.name]]) {
      const pg = cms.find((c) => c.module === 'page' && c.name === nombre);
      if (pg && m.videos[tipo]) { await editar(pg.id, { 'introeditor[text]': m.videos[tipo], 'introeditor[format]': '1', showdescription: '1' }, 'page'); log(`~ video embebido: ${nombre}`); }
    }
    await window.ordenar31Modulo(cid, aula, n);
    log(`FIN diseño módulo ${n}`);
  };

  window.diseno31Inicio = async (cid, aula) => {
    const cms = cmsDe(await estado(cid), 0);
    const port = cms.find((c) => c.name === 'Portada del curso');
    if (port) { await etiquetaConFoto(port.id, aula.inicio.portada, aula, 'curso.jpg'); log('~ portada del curso con foto'); }
    const st = await estado(cid); const F = aula.final;
    const sf = st.section.find((s) => s.title === F.seccion);
    if (sf) { await seccionConFoto(cid, sf.number, F.seccion, F.resumen, aula, null); log('~ cierre del curso'); }
    log('FIN diseño inicio y cierre');
  };

  // Deja la sección en el orden de `nombres` (cada uno se mueve al final, en orden); los que no están en la lista quedan arriba
  async function ordenar(cid, n, nombres) {
    const st = await estado(cid); const s = seccion(st, n); const cms = cmsDe(st, n);
    for (const nombre of nombres) { const cs = cms.filter((x) => x.name === nombre); for (const c of cs) await alFinal(cid, s.id, c.id); if (!cs.length) log(`  (no está para ordenar: ${nombre})`); }
  }

  window.cambios31Inicio = async (cid, aula) => {
    const I = aula.inicio; const st = await estado(cid); const cms = cmsDe(st, 0);
    const fuera = cms.filter((c) => I.quitar.includes(c.name));
    await borrar(cid, fuera.map((c) => c.id)); fuera.forEach((c) => log(`- ${c.name}`));
    const avisos = cms.find((c) => c.module === 'forum' && /^Avisos/.test(c.name));
    // Avisos sin finalización: el foro de avisos no admite «requerir calificación»
    if (avisos) { await editar(avisos.id, { 'introeditor[text]': I.avisos.intro, 'introeditor[format]': '1', showdescription: '1' }, 'label'); log('~ Avisos: docente'); }
    const como = cms.find((c) => c.name === 'Cómo avanzas'); if (como) { await editar(como.id, { 'introeditor[text]': I.comoAvanzar, 'introeditor[format]': '1' }); log('~ Cómo avanzas'); }
    const port = cms.find((c) => c.name === 'Portada del curso'); if (port) { await editar(port.id, { 'introeditor[text]': I.portada, 'introeditor[format]': '1' }); log('~ Portada del curso'); }
    // nombre del curso con las horas
    const { f, fd } = await formulario(`/course/edit.php?id=${cid}`);
    fd.set('fullname', aula.curso.fullname); fd.set('saveandreturn', 'Guardar cambios y regresar');
    const r = await fetch(f.action, { method: 'POST', body: fd });
    log(/course\/view\.php/.test(r.url) ? `~ nombre del curso: ${aula.curso.fullname}` : `! nombre del curso no se guardó (${r.url})`);
    log('FIN inicio 31-10');
  };

  window.cambios31Modulo = async (cid, aula, n) => {
    const m = aula.modulos.find((x) => x.n === n);
    await nombreSeccion(cid, n, m.seccion, m.resumen);
    let st = await estado(cid); let cms = cmsDe(st, n);
    const busca = (pred) => cms.find(pred);
    for (const [i, a] of m.aes.entries()) {
      // actividad 1: de foro a tarea formativa
      await paso(cid, n, a.act1.name, () => tareaFormativa(cid, n, a.act1));
      const viejo1 = busca((c) => c.module === 'forum' && c.name.startsWith(`Actividad 1: ${a.act1.titulo}`));
      if (viejo1) { await borrar(cid, [viejo1.id]); log(`- ${viejo1.name}`); }
      // actividad 2: la misma tarea, sin nota y con el texto nuevo
      const t2 = busca((c) => c.module === 'assign' && (c.name.startsWith(`Actividad 2: ${a.act2.titulo}`) || c.name === a.act2.name));
      if (t2) { await editar(t2.id, { name: a.act2.name, 'introeditor[text]': a.act2.intro, 'introeditor[format]': '1', ...SIN_NOTA }, 'assign'); log(`~ ${a.act2.name}`); } else log(`! no está la actividad 2 de «${a.tema}»`);
      const banda = busca((c) => c.module === 'label' && c.name === `Tema ${i + 1}: ${a.tema}`);
      if (banda) await editar(banda.id, { 'introeditor[text]': a.banda, 'introeditor[format]': '1' });
    }
    // casos: de página a tarea evaluada con rúbrica
    for (const c of m.casos) {
      await paso(cid, n, c.name, () => tareaCaso(cid, n, c));
      await rubricaDe(cid, n, c.name, 'submissions', c.rubrica);
      const pag = busca((x) => x.module === 'page' && x.name === `Caso: ${c.titulo}`);
      if (pag) { await borrar(cid, [pag.id]); log(`- ${pag.name}`); }
    }
    // etiquetas
    const etq = async (viejo, nuevo, html) => {
      const e = busca((c) => c.module === 'label' && (c.name === viejo || c.name === nuevo));
      if (e) await editar(e.id, { name: nuevo, 'introeditor[text]': html, 'introeditor[format]': '1' });
      else await etiqueta(cid, n, html, nuevo);
    };
    if (m.casos.length) await etq('Casos de aplicación', 'Práctica evaluada', m.etiquetas.casos);
    await etq('Conversa', m.casos.length ? 'Foro de casos' : 'Foro del módulo', m.etiquetas.foro);
    await etq('Resumen del módulo', 'Resumen del módulo', m.etiquetas.resumen);
    await etq('Evaluación del módulo', 'Evaluación del módulo', m.etiquetas.evaluacion);
    // foro del módulo → foro de casos, sin nota
    const fm = busca((c) => c.module === 'forum' && (/^Foro del módulo \d+: qué/.test(c.name) || c.name === m.foro.name));
    if (fm) { await editar(fm.id, { name: m.foro.name, 'introeditor[text]': m.foro.intro, 'introeditor[format]': '1', 'grade_forum[modgrade_type]': 'none', advancedgradingmethod_forum: '' }, 'forum-modulo'); log(`~ ${m.foro.name}`); }
    else await paso(cid, n, m.foro.name, () => foro(cid, n, m.foro, { clave: 'forum-modulo' }));
    // glosario del módulo
    await glosarioModulo(cid, n, m.glosario);
    // espacio reservado de la evaluación del módulo: se reemplaza por el cuestionario (cambios31Evaluacion)
    log(`FIN módulo ${n} 31-10`);
  };

  window.cambios31Todo = async (cid, aula, n) => {
    await window.cambios31Modulo(cid, aula, n);
    await window.cambios31Evaluacion(cid, aula, n);
    await window.ordenar31Modulo(cid, aula, n);
    const g = cmsDe(await estado(cid), n).find((c) => c.module === 'glossary');
    if (g) { await glosarioSoloLectura(g.id); log('  glosario sin escritura para estudiantes'); }
  };

  // Orden final de la sección del módulo
  window.ordenar31Modulo = async (cid, aula, n) => {
    const m = aula.modulos.find((x) => x.n === n); const R = m.reservados;
    const lista = ['Empieza aquí', R.bienvenida.name, R.diagnostica.name];
    m.aes.forEach((a, i) => lista.push(`Tema ${i + 1}: ${a.tema}`, a.rise.name, a.quiz.name, a.act1.name, a.act2.name));
    if (m.casos.length) lista.push('Práctica evaluada', ...m.casos.map((c) => c.name));
    lista.push(m.casos.length ? 'Foro de casos' : 'Foro del módulo', m.foro.name, 'Resumen del módulo', m.infografia.name, R.resumenVideo.name, m.glosario.name, 'Evaluación del módulo', m.evaluacion.name);
    await ordenar(cid, n, lista);
    log(`FIN orden módulo ${n}`);
  };

  // Carga de archivos: un input propio; cada file_upload suma sus archivos a window.__archivos
  window.prepararCarga = () => {
    let i = document.getElementById('cc-archivos');
    if (!i) { i = document.createElement('input'); i.type = 'file'; i.multiple = true; i.id = 'cc-archivos'; i.style.cssText = 'position:fixed;top:0;left:0;z-index:99999'; document.body.appendChild(i); }
    i.onchange = () => { window.__archivos = window.__archivos || {}; for (const f of i.files) window.__archivos[f.name] = f; };
    return 'listo';
  };
  log('armador Empoderatech cargado');
})();
