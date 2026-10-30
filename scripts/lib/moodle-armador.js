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

  // Carga de archivos: un input propio; cada file_upload suma sus archivos a window.__archivos
  window.prepararCarga = () => {
    let i = document.getElementById('cc-archivos');
    if (!i) { i = document.createElement('input'); i.type = 'file'; i.multiple = true; i.id = 'cc-archivos'; i.style.cssText = 'position:fixed;top:0;left:0;z-index:99999'; document.body.appendChild(i); }
    i.onchange = () => { window.__archivos = window.__archivos || {}; for (const f of i.files) window.__archivos[f.name] = f; };
    return 'listo';
  };
  log('armador Empoderatech cargado');
})();
