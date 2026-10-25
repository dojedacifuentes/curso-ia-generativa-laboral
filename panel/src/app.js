// Panel del curso · lee datos.json (generado por panel/build.mjs) y pinta cada vista según el hash de la URL.
const $ = s => document.querySelector(s);
const h = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const fmtMin = m => { const hh = Math.floor(m / 60), mm = Math.round(m % 60); return hh ? `${hh} h${mm ? ` ${mm} min` : ''}` : `${mm} min`; };
const horas = m => (m / 60).toLocaleString('es-CL', { maximumFractionDigits: 1 });
const ext = (url, txt, cls = 'btn') => url ? `<a class="${cls}" href="${h(url)}" target="_blank" rel="noopener">${txt} ↗</a>` : `<span class="${cls}" aria-disabled="true">${txt}</span>`;
const loc = (url, txt, cls = 'btn') => url ? `<a class="${cls}" href="${h(url)}" target="_blank" rel="noopener">${txt}</a>` : `<span class="${cls}" aria-disabled="true">${txt}</span>`;
const est = e => `<span class="est ${h(String(e).replace(/\s+/g, '-'))}">${h(e)}</span>`;
const chipCod = (c, extra = '') => `<span class="chip ${h(c[0])} ${extra}" title="${h(nombreTipo(c))}">${h(c)}</span>`;
const nombreTipo = c => ({ S: 'Saber', H: 'Saber hacer', A: 'Saber ser', C: 'Criterio de evaluación' })[c[0]] || '';
const peor = list => list.includes('error') ? 'error' : list.includes('aviso') ? 'aviso' : list.includes('pendiente') ? 'pendiente' : 'ok';
const ESTADOS_REC = ['Hecho', 'Insumo listo', 'En curso', 'Pendiente'];
const COLOR_REC = { 'Hecho': 'var(--ok)', 'Insumo listo': 'var(--insumo)', 'En curso': 'var(--aviso)', 'Pendiente': 'var(--pend)' };
const guardar = (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} };
const recordar = (k, d) => { try { return localStorage.getItem(k) ?? d } catch (e) { return d } };

let D;
const filtros = { recAgrupar: recordar('panel-rec-agrupar', 'estado'), recModulo: 'todos', recTexto: '', fuGrupo: 'todas', fuCitada: 'todas', fuTexto: '',
  matModulo: 'todos', trzModulo: '1', audEstado: 'no-ok', penTexto: '' };

const VISTAS = [
  ['metodologia', 'Metodología'], ['matriz', 'Matriz'], ['trazabilidad', 'Trazabilidad'], ['recursos', 'Recursos'], ['casos', 'Casos'],
  ['fuentes', 'Fuentes'], ['pendientes', 'Pendientes'], ['auditoria', 'Auditoría'], ['documentos', 'Documentos'],
];

async function iniciar() {
  try { D = await (await fetch('datos.json', { cache: 'no-cache' })).json(); }
  catch (e) { $('#vista').innerHTML = `<p class="vacio-txt">No pude cargar datos.json. Genera el panel con <code>npm run panel</code>.</p>`; return; }
  document.title = `Panel · ${D.curso.titulo}`;
  $('#titulo-curso').textContent = D.curso.titulo;
  $('#top-links').innerHTML = [ext(D.repo, 'Repositorio'), ext(D.drive, 'Drive'), ext(D.planilla, 'Planilla'),
    `<button class="btn" id="tema" type="button" title="Cambiar tema claro u oscuro">◐ Tema</button>`].join('');
  $('#tema').addEventListener('click', () => {
    const r = document.documentElement, oscuro = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    r.dataset.theme = oscuro ? 'light' : 'dark'; guardar('panel-tema', r.dataset.theme);
  });
  const gen = new Date(D.generado).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
  const aud = D.auditoria ? new Date(D.auditoria.resumen.generado).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' }) : '—';
  $('#pie').innerHTML = `<span>Panel generado el ${h(gen)} desde el repositorio.</span><span>Auditoría del ${h(aud)}.</span>
    <span>Fuente de verdad: la planilla. Los cambios se hacen en el repo y el panel se regenera solo.</span>`;
  addEventListener('hashchange', pintar);
  document.addEventListener('input', alCambiar);
  document.addEventListener('change', alCambiar);
  document.addEventListener('click', alClic);
  pintar();
}

function ruta() {
  const [v, ...resto] = decodeURIComponent(location.hash.slice(1)).split('/');
  return { vista: VISTAS.some(x => x[0] === v) || v === 'ae' ? v : 'metodologia', arg: resto.join('/') };
}
function pintar() {
  const { vista, arg } = ruta();
  const activa = vista === 'ae' ? 'matriz' : vista;
  const cuenta = { matriz: D.cifras.aes, recursos: D.cifras.recursos, casos: D.cifras.casos, fuentes: D.fuentes.length,
    pendientes: D.pendientes.verificacion.length + D.pendientes.planilla.length };
  $('#nav').innerHTML = VISTAS.map(([id, t]) => `<a href="#${id}" ${id === activa ? 'aria-current="page"' : ''}>${t}${cuenta[id] ? `<span class="n">${cuenta[id]}</span>` : ''}</a>`).join('');
  const html = { metodologia: vMetodologia, matriz: vMatriz, ae: vAE, trazabilidad: vTrazabilidad, recursos: vRecursos, casos: vCasos,
    fuentes: vFuentes, pendientes: vPendientes, auditoria: vAuditoria, documentos: vDocumentos }[vista](arg);
  $('#vista').innerHTML = html;
  if (vista === 'documentos') cargarDoc(arg);
  if (vista === 'fuentes' && arg) { const el = document.getElementById(`f-${arg}`); if (el) { el.open = true; el.scrollIntoView({ block: 'center' }); } }
  else if (vista === 'auditoria' && arg) document.getElementById(`capa-${arg}`)?.scrollIntoView({ block: 'start' });
  else scrollTo(0, 0);
  const nav = $('#nav [aria-current]'); nav?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
}
function repintar(sel, fn) { const el = $(sel); if (el) el.innerHTML = fn(); }

function alCambiar(e) {
  const k = e.target.dataset.filtro;
  if (!k) return;
  filtros[k] = e.target.value;
  ({ recModulo: () => repintar('#rec-cuerpo', recCuerpo), recTexto: () => repintar('#rec-cuerpo', recCuerpo),
    fuGrupo: () => repintar('#fu-cuerpo', fuCuerpo), fuCitada: () => repintar('#fu-cuerpo', fuCuerpo), fuTexto: () => repintar('#fu-cuerpo', fuCuerpo),
    penTexto: () => repintar('#pen-cuerpo', penCuerpo) })[k]?.();
}
function alClic(e) {
  const b = e.target.closest('[data-set]');
  if (b) {
    const [k, v] = b.dataset.set.split('=');
    filtros[k] = v;
    if (k === 'recAgrupar') guardar('panel-rec-agrupar', v);
    b.parentElement.querySelectorAll('[data-set]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    ({ recAgrupar: () => repintar('#rec-cuerpo', recCuerpo), matModulo: () => repintar('#mat-cuerpo', matCuerpo),
      trzModulo: () => repintar('#trz-cuerpo', trzCuerpo), audEstado: () => repintar('#aud-cuerpo', audCuerpo) })[k]?.();
    return;
  }
  const c = e.target.closest('[data-cod]');
  if (c) { resaltarCodigo(c.dataset.cod, c); return; }
  const fila = e.target.closest('tr[data-href]');
  if (fila && !e.target.closest('a')) location.hash = fila.dataset.href;
}
const seg = (k, opciones) => `<div class="seg" role="group">${opciones.map(([v, t]) =>
  `<button type="button" data-set="${k}=${h(v)}" aria-pressed="${String(filtros[k]) === String(v)}">${h(t)}</button>`).join('')}</div>`;

// ================= Metodología =================
function vMetodologia() {
  const c = D.cifras;
  const ej = ejemploCadena();
  const eslabones = [
    ['Competencia', 'Lo que el módulo debe lograr, según la planilla.', ej.mod],
    ['Aprendizaje esperado', 'Cada módulo se divide en AE con su nivel de Bloom y su técnica.', ej.ae],
    ['Código S · H · A · C', 'Saberes, saber hacer, saber ser y criterios de evaluación del AE.', ej.cod],
    ['Pantalla', 'Cada pantalla declara qué códigos cubre.', ej.pant],
    ['Fuente', 'Cada afirmación de hecho cita una fuente abierta y leída.', ej.fuente],
    ['Pregunta de quiz', 'Evalúa códigos y remite a la pantalla que los trabaja.', ej.preg],
    ['Auditoría', 'Comprueba que cada eslabón exista y calce con la planilla.', ej.aud],
  ];
  return `
  <section class="hero">
    <span class="eyebrow">Cómo se produce este curso</span>
    <h1>De la planilla a cada pantalla, con cada paso a la vista</h1>
    <p class="lead">Todo nace de la planilla del curso y se puede rastrear: cada aprendizaje esperado se descompone en códigos, cada código
      se trabaja en pantallas que citan sus fuentes, se evalúa en el quiz y queda revisado por la auditoría.</p>
    <div class="cifras">
      ${[[c.modulos, 'módulos'], [c.aes, 'aprendizajes esperados'], [c.pantallas, 'pantallas'], [c.fuentes, 'fuentes leídas'], [c.preguntas, 'preguntas de quiz'],
        [c.casos, 'casos reales'], [c.recursos, 'recursos en la planilla'], [`${horas(c.minutos)} h`, 'de curso']].map(([n, t]) => `<div class="cifra"><b>${n}</b><span>${t}</span></div>`).join('')}
    </div>
  </section>

  <section class="sec">
    <div class="sec-cab"><div><h2>La cadena de trazabilidad</h2>
      <p>Así se conecta cada pieza con la planilla. El ejemplo de cada eslabón es real y sale del repositorio.</p></div>
      <a class="btn prim" href="#ae/${h(ej.aeId)}">Ver el ejemplo completo: ${h(ej.aeId)}</a></div>
    <div class="cadena">${eslabones.map(([t, d, e]) => `<div class="eslabon"><b>${t}</b><small>${d}</small><span class="ej">${h(e)}</span></div>`).join('')}</div>
  </section>

  <section class="sec">
    <div class="sec-cab"><div><h2>El flujo, paso a paso</h2>
      <p>Qué se hace en cada etapa, qué entra y qué sale, con qué regla se escribe, qué script la genera o valida y qué capa de la auditoría la controla.</p></div></div>
    <div class="pasos">${D.metodologia.map(pasoHTML).join('')}</div>
  </section>

  <section class="sec">
    <div class="sec-cab"><div><h2>Reglas que no se negocian</h2><p>Resumen de las reglas del flujo. Cada una remite al documento donde está escrita.</p></div></div>
    <div class="reglas">${REGLAS.map(([t, d, doc]) => `<div class="card regla"><b>${t}</b><p>${d}</p><a href="#documentos/${doc}">Leer la regla →</a></div>`).join('')}</div>
  </section>

  <section class="sec">
    <div class="sec-cab"><div><h2>Lo que falta producir</h2><p>Recursos de la planilla que todavía no tienen su pieza, por tipo.</p></div><a class="btn" href="#recursos">Ver los 101 recursos</a></div>
    ${avanceHTML()}
  </section>`;
}
const REGLAS = [
  ['La planilla manda', 'Nada fuera de sus saberes y criterios. Cada código del AE queda cubierto por al menos una pantalla y ninguna pantalla queda sin código.', 'workflow'],
  ['Fuente abierta y leída', 'Toda afirmación de hecho cita una fuente que se abrió y leyó: normativa, ayuda oficial, academia o prensa con fecha. Lo no verificado va a pendientes.', 'workflow'],
  ['Cada pantalla se declara', 'Cada pantalla dice qué cubre (cubre:), qué cita (fuentes:) y qué bloque de Rise usa (bloque:).', 'formato-contenido-base'],
  ['El quiz remite', 'Cada pregunta evalúa códigos del AE y manda a repasar una pantalla que trabaja esos códigos. Todos los criterios se evalúan.', 'docs-formato-quiz'],
  ['Empresas reales, solo verificadas', 'Los casos con empresas se verifican en fuente primaria. En el contenido base solo aparecen dentro de un recuadro «Caso real».', 'docs-formato-caso'],
  ['Audiencia real', 'Personas cesantes o que buscan empleo y personas que ya trabajan. Herramientas gratuitas, en el celular, en español de Chile y con tuteo.', 'workflow'],
  ['Personajes recurrentes', 'Camila y Andrés acompañan todo el curso, con Rosa y Paula en algunos módulos. Son ficticios.', 'docs-personajes'],
  ['Nada se borra en Drive', 'Lo que se reemplaza pasa a «Versiones anteriores». Los ids quedan anotados en data/drive.json.', 'docs-leeme-drive'],
  ['Lo derivado va al día', 'Quiz, Docs y PDF deben ser posteriores a su fuente. La auditoría avisa cuando algo quedó atrasado.', 'docs-auditoria'],
];
function ejemploCadena() {
  const ae = D.aes['M1-AE1'] || Object.values(D.aes)[0];
  const cod = ae.codigos.find(c => c.pantallas.length && c.preguntas.length) || ae.codigos[0];
  const p = ae.pantallas.find(x => x.id === cod.pantallas[0]);
  const fu = p?.fuentes[0] && D.fuentes.find(f => f.id === p.fuentes[0]);
  const q = ae.quiz.preguntas.find(x => x.n === cod.preguntas[0]);
  const mod = D.modulos.find(m => m.n === ae.modulo);
  return { aeId: ae.id, mod: `Módulo ${mod.n} · ${mod.nombre}`, ae: `${ae.id} · ${ae.tema}`, cod: `${cod.codigo} · ${cod.texto}`,
    pant: p ? `${p.id} · ${p.titulo}` : '—', fuente: fu ? `${fu.id} · ${fu.titulo}` : '—', preg: q ? `Pregunta ${q.n} → remite a ${q.pantalla}` : '—',
    aud: `${ae.auditoria.map(k => k.id).join(' · ')}: ${peor(ae.auditoria.map(k => k.estado))}` };
}
function pasoHTML(p) {
  const ctl = p.control;
  const ctlTxt = ctl ? `${est(ctl.estado)} <span class="muted">${ctl.total} chequeos · ${ctl.ok} ok${ctl.aviso ? ` · ${ctl.aviso} avisos` : ''}${ctl.error ? ` · ${ctl.error} errores` : ''}${ctl.pendiente ? ` · ${ctl.pendiente} pendientes` : ''}</span>` : '—';
  return `<article class="card paso">
    <div class="paso-n">${p.n}</div>
    <div>
      <div class="paso-cab"><h3>${h(p.nombre)} <small>${h(p.rol)}</small></h3><span class="pildora"><b>${h(p.cifra)}</b></span></div>
      <p>${h(p.que)}</p>
      <dl class="paso-meta">
        <div><dt>Entra</dt><dd>${p.entra.map(x => `<span class="mono">${h(x)}</span>`).join(' · ')}</dd></div>
        <div><dt>Sale</dt><dd>${p.sale.map(x => `<span class="mono">${h(x)}</span>`).join(' · ')}</dd></div>
        <div><dt>Regla</dt><dd>${p.regla ? `<a href="#documentos/${h(p.regla)}">${h(D.documentos.find(d => d.id === p.regla)?.titulo || p.regla)}</a>` : '—'}</dd></div>
        <div><dt>Script</dt><dd>${p.script ? `<a href="${h(p.scriptUrl)}" target="_blank" rel="noopener" class="mono">${h(p.script)}</a>` : '<span class="muted">Manual, con la skill</span>'}</dd></div>
        <div><dt>Skill de Claude</dt><dd>${p.skill ? `<a href="#documentos/skill-${h(p.skill)}" class="mono">${h(p.skill)}</a>` : '—'}</dd></div>
        <div><dt>Control · ${h(p.capa)}</dt><dd><a href="#auditoria/${h(p.capa)}" style="text-decoration:none">${ctlTxt}</a></dd></div>
      </dl>
      ${p.vista ? `<div class="btns" style="margin-top:12px"><a class="btn" href="#${h(p.vista)}">Ver en el panel →</a></div>` : ''}
    </div>
  </article>`;
}
function avanceHTML() {
  const total = D.recursos.reduce((s, r) => s + (/^S/i.test(r.cuentaHoras) ? r.minutos : 0), 0) || 1;
  const por = e => D.recursos.filter(r => r.estado === e && /^S/i.test(r.cuentaHoras)).reduce((s, r) => s + r.minutos, 0);
  const tipos = [...new Set(D.recursos.map(r => r.tipo))];
  return `<div class="card pad sec">
    <div class="barra">${ESTADOS_REC.map(e => `<i style="width:${por(e) / total * 100}%;background:${COLOR_REC[e]}" title="${e}: ${horas(por(e))} h"></i>`).join('')}</div>
    <div class="leyenda">${ESTADOS_REC.map(e => `<span><i style="background:${COLOR_REC[e]}"></i>${e}: <b>${horas(por(e))} h</b></span>`).join('')}</div>
    <div class="tabla-wrap"><table><thead><tr><th>Tipo de recurso</th>${ESTADOS_REC.map(e => `<th>${e}</th>`).join('')}<th>Total</th></tr></thead><tbody>
      ${tipos.map(t => { const rs = D.recursos.filter(r => r.tipo === t); return `<tr><td>${h(t)}</td>${ESTADOS_REC.map(e => `<td class="num-ok">${rs.filter(r => r.estado === e).length || '·'}</td>`).join('')}<td class="num-ok"><b>${rs.length}</b></td></tr>`; }).join('')}
    </tbody></table></div></div>`;
}

// ================= Matriz =================
function vMatriz(arg) {
  if (arg) filtros.matModulo = arg;
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">Planilla → hoja «Matriz coherencia»</span><h1>Matriz del curso</h1>
      <p>Competencia de cada módulo, sus aprendizajes esperados y cómo está cada uno: códigos cubiertos por pantallas, preguntas del quiz y estado en la auditoría. Toca un AE para ver su trazabilidad completa.</p></div>
      ${seg('matModulo', [['todos', 'Todos'], ...D.modulos.map(m => [m.n, `M${m.n}`])])}</div>
    <div class="leyenda"><span>${chipCod('S1')} saber</span><span>${chipCod('H1')} saber hacer</span><span>${chipCod('A1')} saber ser</span><span>${chipCod('C1')} criterio</span><span><span class="chip vacio">S2</span> sin pantalla</span></div>
    <div id="mat-cuerpo" class="sec">${matCuerpo()}</div>
  </section>`;
}
function matCuerpo() {
  return D.modulos.filter(m => filtros.matModulo === 'todos' || String(m.n) === String(filtros.matModulo)).map(m => `
    <div class="mod">
      <div class="mod-cab"><div><span class="mod-n">MÓDULO ${m.n} · ${horas(m.minutos)} h</span><h2>${h(m.nombre)}</h2><p><b>Competencia:</b> ${h(m.competencia)}</p></div>
        ${m.infografia?.png ? `<a href="${h(m.infografia.png)}" target="_blank" rel="noopener" title="Infografía del módulo ${m.n}"><img class="thumb" src="${h(m.infografia.png)}" alt="Infografía del módulo ${m.n}" loading="lazy"></a>` : ''}</div>
      <div class="tabla-wrap"><table><thead><tr><th>AE</th><th>Aprendizaje esperado</th><th>Bloom · técnica</th><th>Códigos</th><th>Pantallas</th><th>Quiz</th><th>Auditoría</th></tr></thead><tbody>
      ${m.aes.map(id => { const a = D.aes[id]; return `<tr class="clic" data-href="ae/${h(id)}">
        <td><a class="ae-id" href="#ae/${h(id)}">${h(id)}</a></td>
        <td class="ae-txt"><b>${h(a.tema)}</b><div class="sub">${h(a.texto)}</div></td>
        <td><b>${h(a.bloom)}</b><div class="sub">${h(a.tecnica)}</div></td>
        <td><div class="chips">${a.codigos.map(c => chipCod(c.codigo, c.pantallas.length ? '' : 'vacio')).join('')}</div></td>
        <td class="num-ok">${a.pantallas.length}/${h(a.pantallasPlan)}</td>
        <td class="num-ok">${a.quiz.preguntas.length}/8</td>
        <td>${est(peor(a.auditoria.map(k => k.estado)))}</td></tr>`; }).join('')}
      </tbody></table></div>
    </div>`).join('');
}

// ================= Detalle de un AE =================
function vAE(id) {
  const a = D.aes[id];
  if (!a) return `<p class="vacio-txt">No existe el AE ${h(id)}. <a href="#matriz">Volver a la matriz</a></p>`;
  const ids = Object.keys(D.aes), i = ids.indexOf(id);
  const mod = D.modulos.find(m => m.n === a.modulo);
  const recs = a.recursos.map(r => D.recursos.find(x => x.id === r)).filter(Boolean);
  const casos = a.casos.map(c => D.casos.find(x => x.id === c)).filter(Boolean);
  const titulo = p => a.pantallas.find(x => x.id === p)?.titulo || '';
  return `<section class="ae-cab">
    <div class="fila"><div class="miga"><a href="#matriz">Matriz</a> › <a href="#matriz/${mod.n}">Módulo ${mod.n} · ${h(mod.nombre)}</a> › <span>${h(id)}</span></div>
      <div class="ae-nav">${i > 0 ? `<a class="btn" href="#ae/${ids[i - 1]}">← ${ids[i - 1]}</a>` : ''}${i < ids.length - 1 ? `<a class="btn" href="#ae/${ids[i + 1]}">${ids[i + 1]} →</a>` : ''}</div></div>
    <span class="eyebrow">${h(id)} · ${h(a.rise)}</span>
    <h1>${h(a.tema)}</h1>
    <p class="lead">${h(a.texto)}</p>
    <div class="pildoras"><span class="pildora">Bloom: <b>${h(a.bloom)}</b></span><span class="pildora">Técnica: <b>${h(a.tecnica)}</b></span>
      <span class="pildora">Pantallas: <b>${a.pantallas.length} de ${h(a.pantallasPlan)}</b></span><span class="pildora">Tiempo directo: <b>${fmtMin(a.minutos)}</b></span>
      <span class="pildora">Auditoría: ${est(peor(a.auditoria.map(k => k.estado)))}</span></div>
    <div class="btns">${loc(a.enlaces.porAe, 'Leer el contenido', 'btn prim')}${ext(a.enlaces.doc, 'Google Doc')}${ext(a.enlaces.pdf, 'PDF')}
      ${loc(a.enlaces.quizJuego, '▶ Jugar el quiz')}${loc(a.enlaces.scorm, 'SCORM')}${loc(a.enlaces.gift, 'GIFT')}${ext(a.enlaces.md, 'Contenido en GitHub')}${ext(a.enlaces.quizMd, 'Quiz en GitHub')}</div>
  </section>

  <section class="sec">
    <div class="sec-cab"><div><h2>Trazabilidad del AE</h2><p>Cada fila es un código de la planilla; cada columna, una pantalla. Toca un código para ver solo sus pantallas y preguntas.</p></div>
      <button class="btn" type="button" data-cod="">Ver todo</button></div>
    <div class="card pad grilla-wrap">${grillaAE(a, true)}</div>
    <div class="tabla-wrap"><table><thead><tr><th>Código</th><th>Qué pide la planilla</th><th>Pantallas que lo trabajan</th><th>Preguntas que lo evalúan</th></tr></thead><tbody>
      ${a.codigos.map(c => `<tr><td><button type="button" class="chip ${c.codigo[0]}" data-cod="${h(c.codigo)}" style="cursor:pointer">${h(c.codigo)}</button><div class="sub">${nombreTipo(c.codigo)}</div></td>
        <td>${h(c.texto)}</td>
        <td><div class="chips">${c.pantallas.map(p => `<span class="chip P" title="${h(titulo(p))}">${p}</span>`).join('') || '<span class="chip vacio">sin pantalla</span>'}</div></td>
        <td><div class="chips">${c.preguntas.map(n => `<span class="chip Q">Preg ${n}</span>`).join('') || '<span class="muted">—</span>'}</div></td></tr>`).join('')}
    </tbody></table></div>
  </section>

  <div class="dos">
    <section class="sec"><h2>Pantallas</h2>
      <div class="pantallas">${a.pantallas.map(p => `<div class="pant" data-cubre="${h(p.cubre.join(' '))}">
        <span class="pid">${p.id}</span>
        <div><b>${h(p.titulo)}</b> ${p.casoReal ? '<span class="real">Caso real</span>' : ''}<div class="bl">${h(p.bloque)}</div>
          <div class="chips">${p.cubre.map(c => chipCod(c)).join('')}${p.fuentes.map(f => `<a class="chip F" href="#fuentes/${h(f)}" title="${h(D.fuentes.find(x => x.id === f)?.titulo || '')}">${h(f)}</a>`).join('')}</div></div>
      </div>`).join('')}</div>
    </section>
    <div class="sec">
      <section class="sec"><h2>Quiz formativo</h2>
        ${a.quiz.mision ? `<p class="muted"><b>Misión:</b> ${h(a.quiz.mision)}</p>` : ''}
        <div class="pregs">${a.quiz.preguntas.map(q => `<details class="preg" data-cubre="${h(q.codigos.join(' '))}"><summary><span class="qn">${q.n}</span>
          <div>${h(q.enunciado)} <span class="flecha"></span><div class="chips" style="margin-top:5px">${q.codigos.map(c => chipCod(c)).join('')}${q.pantalla ? `<span class="chip P" title="${h(titulo(q.pantalla))}">→ ${q.pantalla}</span>` : ''}</div></div></summary>
          <div class="det"><div class="ok"><b>Correcta:</b> ${h(q.correcta)}</div>${q.retro ? `<div class="muted">${h(q.retro)}</div>` : ''}
            ${q.pantalla ? `<div>Si falla, repasa <b>${q.pantalla} · ${h(titulo(q.pantalla))}</b></div>` : ''}</div></details>`).join('')}</div>
      </section>
      <section class="card pad sec"><h3>Lo que pide la planilla</h3>
        <div class="lista">
          <div><b>Actividades que lo trabajan</b><div class="sub muted">${h(a.actividades) || '—'}</div></div>
          <div><b>Instrumentos</b><div class="sub muted">${h(a.instrumentos) || '—'}</div></div>
          <div><b>Quiz pedido</b><div class="sub muted">${h(a.quizPlan) || '—'}</div></div>
          ${a.actitudes ? `<div><b>Actitudes</b><div class="sub muted">${h(a.actitudes)}</div></div>` : ''}
        </div></section>
      <section class="card pad sec"><h3>Recursos, casos e hitos de este AE</h3>
        <div class="lista">${recs.map(r => `<div class="fila"><span class="t"><span class="mono muted">${r.id}</span> ${h(r.titulo)}<div class="sub muted">${h(r.tipo)} · ${fmtMin(r.minutos)}</div></span>${est(r.estado)}</div>`).join('')}
          ${casos.map(c => `<div class="fila"><span class="t"><span class="mono muted">${c.id}</span> ${h(c.titulo)}<div class="sub muted">${h(c.tipo)}</div></span>${c.estado ? `<span class="pildora">${h(c.estado)}</span>` : ''}</div>`).join('')}</div></section>
      <section class="card pad sec"><h3>Auditoría de este AE</h3>${a.auditoria.map(k => `<div><div class="fila"><span class="t"><span class="mono muted">${k.id}</span> ${h(k.titulo)}</span>${est(k.estado)}</div>
        ${k.mensajes.map(m => `<div class="msg ${m.e}">${h(m.t)}</div>`).join('')}</div>`).join('')}</section>
    </div>
  </div>`;
}
function grillaAE(a, interactiva) {
  return `<table class="grilla"><thead><tr><th class="cod"></th>${a.pantallas.map(p => `<th title="${h(p.titulo)}">${p.id.slice(1)}</th>`).join('')}<th class="cab-q" title="Preguntas del quiz">Quiz</th></tr></thead><tbody>
    ${a.codigos.map(c => `<tr class="${c.codigo[0]}" data-fila="${h(c.codigo)}"><th class="cod">${interactiva ? `<button type="button" class="chip ${c.codigo[0]} ${c.pantallas.length ? '' : 'vacio'}" data-cod="${h(c.codigo)}" style="cursor:pointer">${h(c.codigo)}</button>` : chipCod(c.codigo, c.pantallas.length ? '' : 'vacio')}</th>
      ${a.pantallas.map(p => `<td class="c ${p.cubre.includes(c.codigo) ? 'si' : ''}" title="${h(`${c.codigo} en ${p.id} · ${p.titulo}`)}"></td>`).join('')}
      <td class="q" title="Preguntas que evalúan ${h(c.codigo)}">${c.preguntas.length || '·'}</td></tr>`).join('')}
  </tbody></table>`;
}
function resaltarCodigo(cod) {
  document.querySelectorAll('[data-cubre]').forEach(el => el.classList.toggle('apagado', !!cod && !el.dataset.cubre.split(' ').includes(cod)));
  document.querySelectorAll('[data-fila]').forEach(el => el.classList.toggle('apagado', !!cod && el.dataset.fila !== cod));
}

// ================= Trazabilidad =================
function vTrazabilidad() {
  const todos = Object.values(D.aes);
  const cods = todos.flatMap(a => a.codigos);
  const crit = cods.filter(c => c.codigo[0] === 'C');
  const citadas = D.fuentes.filter(f => f.grupo === 'contenido' && f.citadaEn.length).length;
  const conRemite = todos.flatMap(a => a.quiz.preguntas.filter(q => q.pantalla && a.pantallas.find(p => p.id === q.pantalla)?.cubre.some(c => q.codigos.includes(c)))).length;
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">Planilla ↔ contenido ↔ quiz</span><h1>Trazabilidad</h1>
      <p>La matriz de cobertura de cada AE: filas = códigos de la planilla, columnas = pantallas del contenido, última columna = preguntas del quiz que evalúan ese código.</p></div></div>
    <div class="cifras">
      <div class="cifra"><b>${cods.filter(c => c.pantallas.length).length}/${cods.length}</b><span>códigos cubiertos por al menos una pantalla</span></div>
      <div class="cifra"><b>${crit.filter(c => c.preguntas.length).length}/${crit.length}</b><span>criterios evaluados en el quiz</span></div>
      <div class="cifra"><b>${conRemite}/${D.cifras.preguntas}</b><span>preguntas que remiten a una pantalla que trabaja su código</span></div>
      <div class="cifra"><b>${citadas}/${D.cifras.fuentes}</b><span>fuentes citadas en el contenido</span></div>
    </div>
    <div class="fila">${seg('trzModulo', D.modulos.map(m => [m.n, `Módulo ${m.n}`]))}
      <div class="leyenda"><span><i style="background:var(--saber)"></i>saber</span><span><i style="background:var(--hacer)"></i>saber hacer</span><span><i style="background:var(--ser)"></i>saber ser</span><span><i style="background:var(--crit)"></i>criterio</span></div></div>
    <div id="trz-cuerpo" class="sec">${trzCuerpo()}</div>
  </section>`;
}
function trzCuerpo() {
  const m = D.modulos.find(x => String(x.n) === String(filtros.trzModulo)) || D.modulos[0];
  return `<p class="muted"><b>Módulo ${m.n} · ${h(m.nombre)}.</b> ${h(m.competencia)}</p>` + m.aes.map(id => { const a = D.aes[id]; return `
    <div class="card pad sec"><div class="fila"><span class="t"><a class="ae-id" href="#ae/${h(id)}">${h(id)}</a> <b>${h(a.tema)}</b><div class="sub muted">${h(a.texto)}</div></span>
      <span class="pildora">${a.pantallas.length} pantallas · ${a.quiz.preguntas.length} preguntas</span></div>
      <div class="grilla-wrap">${grillaAE(a, false)}</div></div>`; }).join('');
}

// ================= Recursos =================
function vRecursos() {
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">Planilla → hoja «Recursos»</span><h1>Los ${D.cifras.recursos} recursos del curso</h1>
      <p>Cada recurso de la planilla con su estado según lo que hay en el repositorio. «Insumo listo» significa que el contenido base existe y falta armar la pieza final (por ejemplo, el Rise).</p></div></div>
    ${avanceHTML()}
    <div class="herr">${seg('recAgrupar', [['estado', 'Por estado'], ['modulo', 'Por módulo'], ['tipo', 'Por tipo'], ['responsable', 'Por responsable']])}
      <select data-filtro="recModulo" aria-label="Módulo"><option value="todos">Todos los módulos</option>${D.modulos.map(m => `<option value="${m.n}" ${String(filtros.recModulo) === String(m.n) ? 'selected' : ''}>Módulo ${m.n}</option>`).join('')}</select>
      <input type="search" data-filtro="recTexto" placeholder="Buscar recurso, AE o tipo…" value="${h(filtros.recTexto)}" aria-label="Buscar recurso"></div>
    <div id="rec-cuerpo">${recCuerpo()}</div>
  </section>`;
}
function recCuerpo() {
  const t = filtros.recTexto.toLowerCase();
  const rs = D.recursos.filter(r => (filtros.recModulo === 'todos' || String(r.modulo) === String(filtros.recModulo))
    && (!t || `${r.id} ${r.titulo} ${r.tipo} ${r.aes.join(' ')} ${r.nota} ${r.responsable}`.toLowerCase().includes(t)));
  const clave = { estado: r => r.estado, modulo: r => `Módulo ${r.modulo}`, tipo: r => r.tipo, responsable: r => r.responsable || 'Sin responsable' }[filtros.recAgrupar];
  const grupos = filtros.recAgrupar === 'estado' ? ESTADOS_REC : [...new Set(rs.map(clave))];
  if (!rs.length) return '<p class="vacio-txt">Ningún recurso coincide con el filtro.</p>';
  return `<div class="tablero">${grupos.map(g => { const lista = rs.filter(r => clave(r) === g); if (!lista.length && filtros.recAgrupar !== 'estado') return '';
    return `<div class="col"><div class="col-cab"><b>${h(g)}</b><small>${lista.length} · ${horas(lista.reduce((s, r) => s + r.minutos, 0))} h</small></div>
      ${lista.map(r => `<div class="rec"><div class="rec-cab"><span>${r.id} · M${r.modulo}</span><span>${fmtMin(r.minutos)}</span></div>
        <b>${h(r.titulo)}</b>
        <div class="chips"><span class="chip">${h(r.tipo)}</span>${r.aes.map(x => `<a class="chip Q" href="#ae/${x}">${x}</a>`).join('')}${filtros.recAgrupar !== 'estado' ? est(r.estado) : ''}</div>
        ${r.nota ? `<div class="nota">${h(r.nota)}</div>` : ''}${r.responsable && filtros.recAgrupar !== 'responsable' ? `<div class="nota">Responsable: ${h(r.responsable)}</div>` : ''}</div>`).join('') || '<p class="muted" style="padding:4px">—</p>'}
    </div>`; }).join('')}</div>`;
}

// ================= Casos =================
function vCasos() {
  const apl = D.casos.filter(c => c.tipo === 'Caso de aplicación');
  const hitos = D.casos.filter(c => c.tipo !== 'Caso de aplicación');
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">Planilla → hoja «Casos y proyecto»</span><h1>Casos reales e hitos del proyecto</h1>
      <p>Cada caso se verificó en fuente primaria antes de redactarse. La ficha registra los hechos verificados y lo que no se puede afirmar.</p></div></div>
    <div class="casos">${apl.map(c => `<article class="card caso">
      <div class="fila"><span class="mono muted">${c.id} · ${c.aes.map(x => `<a href="#ae/${x}">${x}</a>`).join(', ')}</span>${c.estado ? `<span class="pildora"><b>${h(c.estado)}</b></span>` : ''}</div>
      <h3>${h(c.titulo)}</h3>
      ${tituloDistinto(c) ? `<div class="ojo">La planilla todavía dice: «${h(c.tituloPlanilla)}»</div>` : ''}
      <p class="muted" style="font-size:.88rem">${h(c.entregable)}</p>
      <div class="chips"><span class="chip">${c.fuentes.length} fuentes</span><span class="chip">${c.primarias} primarias</span>${c.auditoria.map(k => est(k.estado)).join('')}</div>
      ${c.auditoria.flatMap(k => k.mensajes).map(m => `<div class="msg ${m.e}">${h(m.t)}</div>`).join('')}
      <div class="btns">${loc(c.enlaces.html, 'Leer el caso', 'btn prim')}${ext(c.enlaces.doc, 'Doc')}${ext(c.enlaces.pdf, 'PDF')}${ext(c.enlaces.ficha, 'Ficha de verificación')}</div>
    </article>`).join('')}</div>
  </section>
  <section class="sec"><h2>Hitos del proyecto aplicado</h2>
    <div class="tabla-wrap"><table><thead><tr><th>Hito</th><th>Qué se entrega</th><th>AE</th><th>Evaluación</th></tr></thead><tbody>
      ${hitos.map(c => `<tr><td class="mono">${c.id}</td><td><b>${h(c.titulo.replace(/^Proyecto aplicado · /, ''))}</b><div class="sub">${h(c.descripcion)}</div></td>
        <td><div class="chips">${c.aes.map(x => `<a class="chip Q" href="#ae/${x}">${x}</a>`).join('')}</div></td><td class="sub">${h(c.entregable)}</td></tr>`).join('')}
    </tbody></table></div>
  </section>
  <section class="sec"><h2>Sistema de evaluación</h2>
    <div class="tabla-wrap"><table><thead><tr><th>Instrumento</th><th>Cantidad</th><th>Tipo</th><th>Momento</th><th>Retroalimentación</th><th>Ponderación</th></tr></thead><tbody>
      ${D.evaluacion.map(f => `<tr><td><b>${h(f.Instrumento)}</b><div class="sub">${h(f['Observación'])}</div></td><td class="num-ok">${h(String(f.Cantidad).replace(/\.0$/, ''))}</td><td>${h(f.Tipo)}</td><td>${h(f.Momento)}</td><td class="sub">${h(f['Retroalimentación'])}</td>
        <td class="num-ok">${Math.round(Number(f['Ponderación total'] || 0) * 100)} %</td></tr>`).join('')}
    </tbody></table></div>
  </section>`;
}

// La planilla titula «Caso M3-C2 · …» y el caso redactado «M3-C2 · …»: se comparan sin ese prefijo
const sinPrefijo = t => String(t || '').replace(/^(Caso\s+)?M\d-C\d\s*·\s*/, '').trim().toLowerCase();
const tituloDistinto = c => c.tituloPlanilla && sinPrefijo(c.tituloPlanilla) !== sinPrefijo(c.titulo);

// ================= Fuentes =================
function vFuentes() {
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">investigacion/</span><h1>Fuentes</h1>
      <p>Todas las fuentes registradas, con lo que respaldan y dónde se citan. Cada pantalla del contenido remite a estas fichas.</p></div></div>
    <div class="herr">${seg('fuGrupo', [['todas', 'Todas'], ['contenido', 'Contenido'], ['casos', 'Casos']])}
      <select data-filtro="fuCitada" aria-label="Citadas"><option value="todas">Citadas y sin citar</option><option value="si">Solo citadas</option><option value="no">Solo sin citar</option></select>
      <input type="search" data-filtro="fuTexto" placeholder="Buscar id, título, organismo o tema…" value="${h(filtros.fuTexto)}" aria-label="Buscar fuente"></div>
    <div id="fu-cuerpo">${fuCuerpo()}</div>
  </section>`;
}
function fuCuerpo() {
  const t = filtros.fuTexto.toLowerCase();
  const marcada = ruta().vista === 'fuentes' ? ruta().arg : '';
  const fs = D.fuentes.filter(f => (filtros.fuGrupo === 'todas' || f.grupo === filtros.fuGrupo)
    && (filtros.fuCitada === 'todas' || (filtros.fuCitada === 'si') === f.citadaEn.length > 0)
    && (!t || `${f.id} ${f.titulo} ${f.tipo} ${f.respalda} ${f.sirve}`.toLowerCase().includes(t)));
  const archivos = [...new Set(fs.map(f => f.archivo))];
  if (!fs.length) return '<p class="vacio-txt">Ninguna fuente coincide con el filtro.</p>';
  return archivos.map(ar => { const lista = fs.filter(f => f.archivo === ar); return `<div class="sec" style="margin-bottom:18px">
    <div class="fila"><h3 class="mono" style="font-size:.95rem">${h(ar)}</h3><span class="muted">${lista.length} fuentes</span></div>
    <div class="card">${lista.map(f => `<details class="fuente ${f.id === marcada ? 'marcada' : ''}" id="f-${h(f.id)}"><summary>
      <span class="fid">${h(f.id)}</span><span><b>${h(f.titulo)}</b><div class="tip">${h(f.tipo)}${f.fecha ? ` · ${h(f.fecha)}` : ''}</div></span>
      <span class="chips">${f.citadaEn.length ? f.citadaEn.slice(0, 4).map(c => `<span class="chip Q">${c.ae}${c.pantalla ? ` ${c.pantalla}` : ''}</span>`).join('') + (f.citadaEn.length > 4 ? `<span class="chip">+${f.citadaEn.length - 4}</span>` : '') : '<span class="chip vacio">sin citar</span>'}</span></summary>
      <div class="cuerpo">${f.respalda ? `<div><b>Respalda:</b> ${h(f.respalda)}</div>` : ''}${f.sirve ? `<div><b>Sirve para:</b> ${h(f.sirve)}</div>` : ''}
        ${f.citadaEn.length ? `<div><b>Se cita en:</b> <span class="chips">${f.citadaEn.map(c => `<a class="chip Q" href="#ae/${c.ae}">${c.ae}${c.pantalla ? ` ${c.pantalla}` : ''}</a>`).join('')}</span></div>` : ''}
        <div class="btns">${ext(f.url, 'Abrir la fuente')}</div></div></details>`).join('')}</div></div>`; }).join('');
}

// ================= Pendientes =================
function vPendientes() {
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">Para organizar el trabajo</span><h1>Pendientes</h1>
      <p>Todo lo que falta en un solo lugar: lo que hay que probar antes de publicar, las decisiones abiertas de la planilla, los avisos de la auditoría y los recursos sin empezar.</p></div>
      <input type="search" data-filtro="penTexto" placeholder="Buscar en los pendientes…" value="${h(filtros.penTexto)}" aria-label="Buscar pendiente" style="font:inherit;padding:6px 10px;border:1px solid var(--line);border-radius:8px;background:var(--panel);color:var(--ink);min-width:min(260px,100%)"></div>
    <div id="pen-cuerpo" class="sec">${penCuerpo()}</div>
  </section>`;
}
function penCuerpo() {
  const t = filtros.penTexto.toLowerCase();
  const pasa = s => !t || s.toLowerCase().includes(t);
  const ver = D.pendientes.verificacion.filter(p => pasa(`${p.id} ${p.que} ${p.pantallas} ${p.grupo}`));
  const pla = D.pendientes.planilla.filter(p => pasa(`${p.pendiente} ${p.porque} ${p.quien} ${p.estado}`));
  const aud = (D.auditoria?.capas || []).flatMap(c => c.chequeos.filter(k => k.estado !== 'ok').map(k => ({ ...k, capa: c.id }))).filter(k => pasa(`${k.id} ${k.titulo} ${k.mensajes.map(m => m.t).join(' ')}`));
  const sin = D.recursos.filter(r => r.estado === 'Pendiente').filter(r => pasa(`${r.id} ${r.titulo} ${r.tipo} ${r.nota}`));
  const grupos = [...new Set(ver.map(p => p.grupo))];
  const md = s => h(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  return `
  <div class="cifras"><div class="cifra"><b>${ver.length}</b><span>por probar o verificar</span></div><div class="cifra"><b>${pla.length}</b><span>decisiones de la planilla</span></div>
    <div class="cifra"><b>${aud.length}</b><span>avisos de la auditoría</span></div><div class="cifra"><b>${sin.length}</b><span>recursos sin empezar</span></div></div>
  <section class="sec"><h2>Antes de publicar: probar y verificar</h2>
    ${grupos.map(g => `<div class="card pad sec"><h3>${h(g)}</h3><div class="lista">${ver.filter(p => p.grupo === g).map(p => `<div><div class="fila"><span class="t"><span class="mono muted">${h(p.id)}</span> ${md(p.que)}</span></div>
      <div class="sub muted" style="margin-top:4px">Pantallas: ${md(p.pantallas)} · Marcado en: ${md(p.marcado)}</div></div>`).join('')}</div></div>`).join('') || '<p class="muted">Nada.</p>'}
    <div class="btns"><a class="btn" href="#documentos/docs-pendientes-verificacion">Ver el documento completo</a></div>
  </section>
  <section class="sec"><h2>Decisiones abiertas de la planilla</h2>
    <div class="tabla-wrap"><table><thead><tr><th>#</th><th>Pendiente</th><th>Por qué importa</th><th>Quién</th><th>Estado</th></tr></thead><tbody>
      ${pla.map(p => `<tr><td class="mono">${h(p.n)}</td><td>${h(p.pendiente)}</td><td class="sub">${h(p.porque)}</td><td>${h(p.quien)}</td><td>${est(p.estado || '—')}</td></tr>`).join('')}
    </tbody></table></div></section>
  <section class="sec"><h2>Avisos de la auditoría</h2>
    <div class="card pad"><div class="lista">${aud.map(k => `<div><div class="fila"><span class="t"><a class="mono" href="#auditoria/${k.capa}">${h(k.id)}</a> ${h(k.titulo)}</span>${est(k.estado)}</div>
      ${k.mensajes.slice(0, 6).map(m => `<div class="msg ${m.e}">${h(m.t)}</div>`).join('')}${k.mensajes.length > 6 ? `<div class="sub muted">y ${k.mensajes.length - 6} más</div>` : ''}</div>`).join('') || '<p class="muted">Sin avisos.</p>'}</div></div></section>
  <section class="sec"><h2>Recursos sin empezar</h2>
    <div class="tabla-wrap"><table><thead><tr><th>Recurso</th><th>Tipo</th><th>Módulo</th><th>Duración</th><th>Qué falta</th></tr></thead><tbody>
      ${sin.map(r => `<tr><td><span class="mono muted">${r.id}</span> ${h(r.titulo)}</td><td>${h(r.tipo)}</td><td class="num-ok">M${r.modulo}</td><td class="num-ok">${fmtMin(r.minutos)}</td><td class="sub">${h(r.nota)}</td></tr>`).join('')}
    </tbody></table></div></section>`;
}

// ================= Auditoría =================
function vAuditoria() {
  const a = D.auditoria;
  if (!a) return '<p class="vacio-txt">No hay auditoría en el repositorio. Corre <code>node scripts/auditar.mjs</code>.</p>';
  const r = a.resumen;
  return `<section class="sec">
    <div class="sec-cab"><div><span class="eyebrow">scripts/auditar.mjs</span><h1>Auditoría</h1>
      <p>Revisa en 10 capas todo lo producido contra la planilla. Se genera en el computador (mide si cada derivado está al día con su fuente) y se sube al repositorio con el resto.</p></div>
      ${loc(a.informe, 'Abrir el informe completo', 'btn prim')}</div>
    <div class="cifras"><div class="cifra"><b>${r.chequeos}</b><span>chequeos</span></div><div class="cifra"><b style="color:var(--ok)">${r.ok}</b><span>bien</span></div>
      <div class="cifra"><b style="color:var(--aviso)">${r.aviso}</b><span>avisos</span></div><div class="cifra"><b style="color:var(--error)">${r.error}</b><span>errores</span></div>
      <div class="cifra"><b style="color:var(--pend)">${r.pendiente}</b><span>pendientes</span></div></div>
    <div class="herr">${seg('audEstado', [['no-ok', 'Solo lo que falta'], ['todos', 'Todos los chequeos']])}</div>
    <div id="aud-cuerpo" class="sec">${audCuerpo()}</div>
  </section>`;
}
function audCuerpo() {
  return D.auditoria.capas.map(c => { const ks = c.chequeos.filter(k => filtros.audEstado === 'todos' || k.estado !== 'ok'); return `
    <div class="card pad sec" id="capa-${h(c.id)}"><div class="fila"><span class="t"><span class="mono muted">${h(c.id)}</span> <b style="font-family:var(--f-tit);font-size:1.08rem">${h(c.titulo)}</b></span>${est(c.control.estado)}</div>
      <p class="muted" style="font-size:.9rem;max-width:90ch">${h(c.explica)}</p>
      <div class="lista">${ks.map(k => `<details><summary class="fila"><span class="t"><span class="mono muted">${h(k.id)}</span> ${h(k.titulo)} <span class="flecha"></span></span>${est(k.estado)}</summary>
        <div style="padding:6px 0 0"><div class="sub muted">${h(k.porque)}</div>${k.mensajes.map(m => `<div class="msg ${m.e}">${h(m.t)}</div>`).join('')}
        ${k.evidencia.length ? `<div class="chips" style="margin-top:6px">${k.evidencia.slice(0, 12).map(e => `<span class="chip">${h(e)}</span>`).join('')}</div>` : ''}</div></details>`).join('') || `<p class="muted">Los ${c.chequeos.length} chequeos de esta capa están bien.</p>`}</div>
    </div>`; }).join('');
}

// ================= Documentos =================
function vDocumentos(id) {
  const docs = D.documentos, actual = docs.find(d => d.id === id) || docs[0];
  const grupos = [...new Set(docs.map(d => d.grupo))];
  return `<section class="sec"><div class="sec-cab"><div><span class="eyebrow">Flujo, reglas, formatos y skills</span><h1>Documentos</h1>
      <p>Las reglas con que se produce el curso, tal como están en el repositorio. Las skills son las instrucciones que usa Claude para cada etapa.</p></div></div>
    <div class="docs">
      <nav class="card docs-nav" aria-label="Documentos">${grupos.map(g => `<div><h4>${h(g)}</h4>${docs.filter(d => d.grupo === g).map(d =>
        `<a href="#documentos/${d.id}" ${d.id === actual.id ? 'aria-current="true"' : ''}>${h(d.titulo)}</a>`).join('')}</div>`).join('')}
        <div><h4>Carpetas en Drive</h4>${D.driveCarpetas.filter(c => /^\d/.test(c.titulo)).map(c => `<a href="${h(c.url)}" target="_blank" rel="noopener">${h(c.titulo)} <span class="muted">· ${c.archivos}</span> ↗</a>`).join('')}</div>
      </nav>
      <article class="card prosa" id="doc-cuerpo" data-doc="${h(actual.id)}"><p class="muted">Cargando ${h(actual.titulo)}…</p></article>
    </div></section>`;
}
async function cargarDoc(id) {
  const d = D.documentos.find(x => x.id === id) || D.documentos[0];
  const el = $('#doc-cuerpo');
  try {
    const html = await (await fetch(`docs/${d.id}.html`)).text();
    if (el.dataset.doc !== d.id) return;
    el.innerHTML = `<div class="fila" style="margin-bottom:8px"><span class="mono muted">${h(d.ruta)}</span>${ext(d.github, 'Ver en GitHub')}</div>${html}`;
    el.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
  } catch (e) { el.innerHTML = `<p class="muted">No pude cargar el documento. ${ext(d.github, 'Verlo en GitHub')}</p>`; }
}

iniciar();
