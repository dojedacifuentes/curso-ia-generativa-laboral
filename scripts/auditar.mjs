// Auditoría de todo lo producido para el curso contra la planilla inicial.
// Revisa, capa por capa, que cada pieza exista, esté completa, calce con la planilla y esté al día con su fuente.
// Solo lee: no corrige ni sube nada.
//
//   node scripts/auditar.mjs            escribe docs/AUDITORIA.md, entregables/auditoria/auditoria.json y AUDITORIA.html
//   node scripts/auditar.mjs --consola  solo muestra el resumen
//
// Drive se audita desde data/drive-inventario.json (foto de la carpeta de Drive tomada con el conector; ver «Capa 8»).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rel = (...p) => path.join(RAIZ, ...p);
const existe = (...p) => fs.existsSync(rel(...p));
const leer = (...p) => fs.readFileSync(rel(...p), 'utf8').replace(/\r\n/g, '\n');
const mtime = (...p) => fs.statSync(rel(...p)).mtimeMs;
const palabras = t => t.split(/\s+/).filter(w => /\p{L}/u.test(w)).length;
const fecha = ms => new Date(ms).toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' });
const HOLGURA = 2000; // ms: un derivado escrito en el mismo segundo que su fuente no cuenta como atrasado

const curso = JSON.parse(leer('data', 'curso.json'));
const MODULOS = curso.modulos;
const AES = MODULOS.flatMap(m => m.aes.map(a => ({ ...a, modulo: m.n })));
const AE = Object.fromEntries(AES.map(a => [a.id, a]));
const RECURSOS = MODULOS.flatMap(m => m.recursos.map(r => ({ ...r, modulo: m.n })));
const CASOS = MODULOS.flatMap(m => m.casos.filter(c => c.tipo === 'Caso de aplicación').map(c => ({ ...c, modulo: m.n })));
// Empresas de los casos reales, tomadas de los títulos de la hoja «Casos y proyecto»
const EMPRESAS = ['Morgan Stanley', 'Avianca', 'Air Canada', 'Octopus Energy', 'Vodafone', 'Deloitte', 'Samsung', 'Coca-Cola', 'Johansson',
  'Getty', 'Stability AI', 'Klarna', 'Duolingo'];
const codigosDe = a => [...a.saber, ...a.saber_hacer, ...a.saber_ser, ...a.criterios];

// ---------- registro de chequeos ----------
// estado: ok | aviso | error | pendiente (pendiente = aún no se produce, no es un defecto)
const CAPAS = [];
let capa;
function nuevaCapa(id, titulo, explica) { capa = { id, titulo, explica, chequeos: [] }; CAPAS.push(capa); }
function chequeo(id, titulo, porque, fn) {
  const errores = [], avisos = [], pendientes = [], evidencia = [];
  const r = { error: m => errores.push(m), aviso: m => avisos.push(m), pendiente: m => pendientes.push(m), ev: m => evidencia.push(m) };
  try { fn(r); } catch (e) { errores.push(`el chequeo falló: ${e.message}`); }
  const estado = errores.length ? 'error' : avisos.length ? 'aviso' : pendientes.length ? 'pendiente' : 'ok';
  capa.chequeos.push({ id: `${capa.id}.${id}`, titulo, porque, estado, errores, avisos, pendientes, evidencia });
}

// ---------- lectores ----------
function hoja(nombre) {
  const filas = leer('data', 'planilla', nombre + '.tsv').split('\n').map(l => l.split('\t'));
  const i = filas.findIndex(f => f[0] === 'ID AE' || f[0] === 'ID' || f[0] === 'Módulo');
  const cab = filas[i];
  return filas.slice(i + 1).filter(f => f[0]).map(f => Object.fromEntries(cab.map((c, k) => [c.trim(), (f[k] ?? '').trim()])));
}
const num = v => Number(String(v).replace(',', '.'));

// Contenido base: pantallas, códigos, fuentes y secciones de un AE
function leerContenido(id) {
  const archivo = path.join('contenido', id.split('-')[0], `${id}.md`);
  if (!existe(archivo)) return null;
  const md = leer(archivo);
  const bloques = md.split(/^## /m).slice(1);
  const pantallas = bloques.filter(b => /^P\d\d · /.test(b)).map(b => ({
    id: b.slice(0, 3), titulo: b.split('\n')[0].slice(6).trim(),
    cubre: (/^cubre:\s*(.+)$/m.exec(b)?.[1] || '').split(/,\s*/).filter(Boolean),
    fuentes: (/^fuentes:[ \t]*(F-.+)$/m.exec(b)?.[1] || '').split(/,\s*/).filter(Boolean),
    bloque: /^bloque:\s*\S/m.test(b),
    palabras: palabras(b.replace(/^.*\n/, '').replace(/^(cubre|bloque|fuentes):.*$/gm, '')),
  }));
  const seccion = t => bloques.find(b => b.startsWith(t)) || null;
  return { archivo, md, pantallas, seccion };
}

// Fuentes registradas en investigacion/*.md
function leerFuentes() {
  const fuentes = new Map();
  const dir = rel('investigacion');
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const md = leer('investigacion', f);
    for (const b of md.split(/^(?=### F-)/m).slice(1)) {
      const id = /^### (F-[A-Z0-9]+-\d+)/.exec(b)?.[1];
      if (!id) continue;
      const campo = n => new RegExp(`^- ${n}:\\s*(.+)$`, 'm').exec(b)?.[1]?.trim() || '';
      const entrada = { id, archivo: `investigacion/${f}`, url: campo('URL'), tipo: campo('Tipo'), fecha: campo('Fecha de publicación') || campo('Fecha de la página \\(si la tiene\\)'),
        respalda: campo('Respalda'), sirve: campo('Sirve para') };
      if (fuentes.has(id)) entrada.duplicada = fuentes.get(id).archivo;
      fuentes.set(id, entrada);
    }
  }
  return fuentes;
}

// Quiz: preguntas con etiquetas, alternativas y retroalimentación
function leerQuiz(id) {
  if (!existe('quiz', `${id}.md`)) return null;
  const md = leer('quiz', `${id}.md`);
  const preguntas = md.split(/^(?=\d+\. )/m).slice(1).map(b => {
    const cab = /^\d+\.\s*\*\(([^)]+)\)\*\s*([\s\S]+?)\n\s*- /.exec(b);
    const etiquetas = cab ? cab[1].split(/\s*·\s*/) : [];
    const opciones = [...b.matchAll(/^\s*- (\*\*)?[a-d]\)\s*(.+?)(\*\*)?\s*$/gm)].map(m => ({ texto: m[2], ok: !!m[1] }));
    return { cab: !!cab, enunciado: cab?.[2] || '', pantalla: etiquetas.find(e => /^P\d\d$/.test(e)),
      codigos: etiquetas.filter(e => !/^P\d\d$/.test(e)), opciones, retro: /\*Retroalimentación:\*\s*\S/.test(b) };
  });
  return { md, preguntas, campos: ['Misión', 'Cuándo', 'Insignia', 'Estilo', 'Ilustración'].filter(c => !md.includes(`**${c}:**`)) };
}

// Fichas de investigación de casos y casos redactados
function leerCaso(id) {
  const ficha = existe('investigacion', 'casos', `${id}.md`) ? leer('investigacion', 'casos', `${id}.md`) : null;
  const caso = existe('casos', `${id}.md`) ? leer('casos', `${id}.md`) : null;
  return {
    ficha, caso,
    estado: ficha && /^Estado:\s*(.+)$/m.exec(ficha)?.[1]?.trim(),
    fuentes: ficha ? [...ficha.matchAll(/^###\s+(F-[A-Z0-9]+-\d+)\b/gm)].map(m => m[1]) : [],
    primarias: ficha ? (ficha.match(/^- Tipo:\s*primaria/gmi) || []).length : 0,
  };
}

const drive = existe('data', 'drive-inventario.json') ? JSON.parse(leer('data', 'drive-inventario.json')) : null;
const driveIds = existe('data', 'drive.json') ? JSON.parse(leer('data', 'drive.json')) : {};
const FUENTES = leerFuentes();
const CONT = Object.fromEntries(AES.map(a => [a.id, leerContenido(a.id)]));
const QUIZ = Object.fromEntries(AES.map(a => [a.id, leerQuiz(a.id)]));
const CASO = Object.fromEntries(CASOS.map(c => [c.id, leerCaso(c.id)]));
const FUENTES_CASOS = new Set(Object.values(CASO).flatMap(c => c.fuentes)); // los AE pueden remitir a un caso verificado

// =====================================================================================================
nuevaCapa('C0', 'Planilla → data/curso.json',
  'La planilla «Estructura_inicial_contenido_IA_generativa» es la fuente de verdad. Se descargó como TSV por hoja (data/planilla/) y '
  + 'scripts/importar-planilla.mjs la convierte en data/curso.json, que leen todos los generadores y validadores. Esta capa comprueba '
  + 'que esa copia esté completa, que calce con la planilla y que los totales de la planilla cuadren entre sí.');

chequeo('1', 'Las hojas de la planilla están descargadas', 'Sin las 10 hojas no se puede cruzar nada.', r => {
  const hojas = ['Léeme', 'Parámetros', 'Estructura', 'Matriz coherencia', 'Recursos', 'Casos y proyecto', 'Evaluación', 'Resumen horas', 'Cumplimiento RE 2484', 'Pendientes'];
  for (const h of hojas) existe('data', 'planilla', `${h}.tsv`) ? r.ev(`${h}.tsv`) : r.error(`falta data/planilla/${h}.tsv`);
  // La planilla misma viaja con el proyecto (repo, zip y panel), no solo su conversión
  existe('data', 'planilla', 'Estructura_inicial_contenido_IA_generativa.xlsx') ? r.ev('copia .xlsx de la planilla')
    : r.aviso('falta la copia de la planilla: data/planilla/Estructura_inicial_contenido_IA_generativa.xlsx');
});

chequeo('2', 'data/curso.json repite la hoja «Estructura» sin cambios',
  'Si alguien editó la planilla o curso.json a mano, los validadores estarían comparando contra otra cosa.', r => {
  const est = hoja('Estructura');
  const ids = est.map(f => f['ID AE']);
  if (ids.length !== AES.length) r.error(`la hoja tiene ${ids.length} AE y curso.json ${AES.length}`);
  for (const f of est) {
    const a = AE[f['ID AE']];
    if (!a) { r.error(`${f['ID AE']} está en la planilla y no en curso.json`); continue; }
    if (a.texto !== f['Aprendizaje esperado']) r.error(`${a.id}: el texto del AE cambió`);
    if (a.tema !== f['Tema (propuesta)']) r.error(`${a.id}: el tema cambió`);
    if (a.pantallas !== num(f['Pantallas Rise'])) r.error(`${a.id}: pantallas ${a.pantallas} en curso.json y ${f['Pantallas Rise']} en la planilla`);
    const sab = f['Saber (conocimientos)'].replace(/\.$/, '').split(/;\s*/).filter(Boolean).length;
    if (sab !== a.saber.length) r.error(`${a.id}: ${sab} saberes en la planilla y ${a.saber.length} en curso.json`);
  }
  const mz = hoja('Matriz coherencia');
  for (const f of mz) {
    const a = AE[f['ID AE']];
    const n = [...f['Criterios de evaluación'].matchAll(/C\d+\s/g)].length;
    if (a && n !== a.criterios.length) r.error(`${a.id}: ${n} criterios en la Matriz y ${a.criterios.length} en curso.json`);
  }
  r.ev(`${AES.length} AE comparados en texto, tema, pantallas, saberes y criterios`);
  const dPlan = Math.max(...['Estructura', 'Matriz coherencia', 'Recursos', 'Casos y proyecto'].map(h => mtime('data', 'planilla', `${h}.tsv`)));
  if (mtime('data', 'curso.json') + HOLGURA < dPlan) r.aviso('curso.json es más antiguo que los TSV: correr node scripts/importar-planilla.mjs');
});

chequeo('3', 'Totales del curso: 6 módulos, 22 AE, 338 pantallas, 101 recursos',
  'Son las cifras que declara la planilla («Léeme» y «Resumen horas»).', r => {
  const pant = AES.reduce((s, a) => s + a.pantallas, 0);
  const tot = { módulos: [MODULOS.length, 6], AE: [AES.length, 22], pantallas: [pant, 338], recursos: [RECURSOS.length, 101],
    'casos de aplicación': [CASOS.length, 11], 'hitos del proyecto': [MODULOS.flatMap(m => m.casos).filter(c => c.tipo === 'Hito proyecto').length, 9] };
  for (const [k, [v, esperado]] of Object.entries(tot)) v === esperado ? r.ev(`${v} ${k}`) : r.error(`${v} ${k}; se esperaban ${esperado}`);
});

chequeo('4', 'Las horas cuadran: recursos de cada módulo = horas objetivo (RE 2.484 IV.2.2 c)',
  'La resolución exige que la duración total y el desglose horario coincidan. Se recalcula desde la hoja «Recursos».', r => {
  const recursos = hoja('Recursos');
  const resumen = hoja('Resumen horas').filter(f => /^\d/.test(f['Módulo']));
  let total = 0;
  for (const f of resumen) {
    const n = num(f['Módulo']);
    const min = recursos.filter(x => num(x['Módulo']) === n && x['Cuenta en horas'] === 'Sí').reduce((s, x) => s + num(x['Duración (min)']), 0);
    total += min;
    const obj = num(f['Min objetivo']);
    Math.abs(min - obj) < 0.01 ? r.ev(`M${n}: ${min} min = ${obj / 60} h`) : r.error(`M${n}: los recursos suman ${min} min y el objetivo es ${obj}`);
  }
  total === 5280 ? r.ev(`total ${total / 60} h`) : r.error(`el curso suma ${total / 60} h y deben ser 88`);
});

chequeo('5', 'Cada recurso y caso apunta a AE que existen', 'Un AE mal escrito en «Recursos» dejaría un recurso huérfano.', r => {
  for (const x of [...RECURSOS, ...MODULOS.flatMap(m => m.casos)])
    for (const a of String(x.aes).split(/;\s*/).filter(a => a && a !== '—')) if (!AE[a]) r.error(`${x.id}: el AE ${a} no existe`);
  r.ev(`${RECURSOS.length} recursos y ${MODULOS.flatMap(m => m.casos).length} casos e hitos revisados`);
});

// =====================================================================================================
nuevaCapa('C1', 'Investigación y fuentes',
  'Antes de redactar, cada módulo tuvo una investigación con fuentes abiertas y leídas (investigacion/M<n>.md y HERRAMIENTAS-*.md). '
  + 'Cada fuente tiene un id F-… que luego se cita en las pantallas. Esta capa revisa que el registro esté completo y que lo citado exista.');

chequeo('1', 'Cada fuente tiene URL, tipo, fecha, qué respalda y para qué sirve',
  'Es la ficha mínima que pide WORKFLOW.md para poder rastrear una afirmación.', r => {
  const porArchivo = {};
  for (const f of FUENTES.values()) {
    porArchivo[f.archivo] = (porArchivo[f.archivo] || 0) + 1;
    if (f.duplicada) r.error(`${f.id} está repetida en ${f.archivo} y ${f.duplicada}`);
    const falta = ['url', 'tipo', 'fecha', 'respalda'].filter(k => !f[k]);
    if (falta.length) r.error(`${f.id}: falta ${falta.join(', ')}`);
    if (f.url && !/https?:\/\//.test(f.url)) r.error(`${f.id}: la URL no es un enlace`);
    if (!f.sirve && !f.archivo.includes('HERRAMIENTAS')) r.aviso(`${f.id}: sin «Sirve para»`);
  }
  for (const [a, n] of Object.entries(porArchivo)) r.ev(`${a}: ${n} fuentes`);
  r.ev(`${FUENTES.size} fuentes en total`);
});

chequeo('2', '«Sirve para» nombra AE y códigos que existen', 'Detecta fuentes asignadas a un contenido que no está en la planilla.', r => {
  let refs = 0;
  for (const f of FUENTES.values()) for (const m of f.sirve.matchAll(/(M\d-AE\d)\s+((?:[SHAC]\d+(?:,\s*)?)+)/g)) {
    const a = AE[m[1]];
    if (!a) { r.error(`${f.id}: ${m[1]} no existe`); continue; }
    for (const c of m[2].split(/,\s*/).filter(Boolean)) { refs++; if (!codigosDe(a).some(x => x.codigo === c)) r.error(`${f.id}: ${m[1]} no tiene el código ${c}`); }
  }
  r.ev(`${refs} referencias AE·código revisadas`);
});

chequeo('3', 'Fuentes registradas que nadie cita', 'No es un error, pero una fuente sin uso puede ser investigación que no llegó al contenido.', r => {
  const citadas = new Set([
    ...Object.values(CONT).filter(Boolean).flatMap(c => c.pantallas.flatMap(p => p.fuentes)),
    ...Object.values(CONT).filter(Boolean).flatMap(c => [...c.md.matchAll(/F-[A-Z0-9]+-\d+/g)].map(m => m[0])),
  ]);
  const sinUso = [...FUENTES.keys()].filter(f => !citadas.has(f));
  r.ev(`${FUENTES.size - sinUso.length} de ${FUENTES.size} fuentes se citan en el contenido base`);
  if (sinUso.length) r.aviso(`${sinUso.length} sin citar: ${sinUso.join(', ')}`);
});

// =====================================================================================================
nuevaCapa('C2', 'Contenido base por AE (22)',
  'contenido/M<n>/M<n>-AE<k>.md es la fuente única de cada AE: de ahí salen el Rise (lo arma Natalia), el quiz, la infografía, los Docs y '
  + 'los PDF. El formato está en FORMATO-CONTENIDO-BASE.md. Esta capa repite las reglas de validar-contenido.mjs y suma las reglas del '
  + 'WORKFLOW que ese validador no mira.');

const CRUCE = [];
for (const a of AES) {
  const c = CONT[a.id];
  const cods = codigosDe(a);
  const porCodigo = {};
  chequeo(a.id, `${a.id} · ${a.tema}`, `Pide ${a.pantallas} pantallas y cubrir ${cods.length} códigos (S/H/A/C) de la planilla.`, r => {
    if (!c) { r.error(`falta ${path.join('contenido', `M${a.modulo}`, `${a.id}.md`)}`); return; }
    if (!c.md.startsWith(`# ${a.id} · ${a.tema}`)) r.error(`el título no es «# ${a.id} · ${a.tema}»`);
    c.pantallas.length === a.pantallas ? r.ev(`${c.pantallas.length} pantallas, como pide la planilla`) : r.error(`${c.pantallas.length} pantallas; la planilla pide ${a.pantallas}`);
    if (!c.md.replace(/\s+/g, ' ').includes(a.texto)) r.error('el texto del AE no aparece igual que en la planilla');
    c.pantallas.forEach((p, k) => {
      if (p.id !== `P${String(k + 1).padStart(2, '0')}`) r.error(`${p.id} fuera de orden`);
      if (!p.cubre.length) r.error(`${p.id}: sin «cubre:» (toda pantalla trabaja un código)`);
      for (const x of p.cubre) { if (!cods.some(y => y.codigo === x)) r.error(`${p.id}: el código ${x} no está en la planilla`); (porCodigo[x] ||= []).push(p.id); }
      if (!p.fuentes.length) r.aviso(`${p.id}: sin «fuentes:»`);
      for (const f of p.fuentes) if (!FUENTES.has(f) && !FUENTES_CASOS.has(f)) r.error(`${p.id}: cita ${f}, que no está en investigacion/`);
      if (!p.bloque) r.aviso(`${p.id}: sin «bloque:» (sugerencia para el Rise)`);
      if (p.palabras < 120 || p.palabras > 420) r.aviso(`${p.id}: ${p.palabras} palabras (rango 120-420)`);
    });
    const sin = cods.filter(x => !porCodigo[x.codigo]);
    sin.length ? sin.forEach(x => r.error(`sin cubrir ${x.codigo}: «${x.texto}»`)) : r.ev(`${cods.length}/${cods.length} códigos cubiertos`);
    for (const s of ['Ideas clave', 'Glosario', 'Conexión con el proyecto', 'Fuentes']) if (!c.seccion(s)) r.error(`falta la sección «${s}»`);
    const glos = (c.seccion('Glosario') || '').match(/^- \*\*/gm)?.length || 0;
    glos >= 5 ? r.ev(`${glos} términos de glosario`) : r.aviso(`glosario con ${glos} términos`);
    const secF = c.seccion('Fuentes') || '';
    for (const f of new Set(c.pantallas.flatMap(p => p.fuentes))) if (!secF.includes(f)) r.error(`${f} se cita pero no está en la sección «Fuentes»`);
    // Los hitos de la planilla que trabajan este AE se nombran en «Conexión con el proyecto»; los casos no (criterios 28-10)
    const con = c.seccion('Conexión con el proyecto') || '';
    for (const x of MODULOS.flatMap(m => m.casos).filter(x => x.tipo === 'Hito proyecto' && x.aes.split(/;\s*/).includes(a.id))) {
      const clave = `Hito ${/Hito (\d+[a-d]?)/.exec(x.titulo)?.[1]}`;
      con.includes(clave) ? r.ev(`«Conexión» nombra ${clave}`) : r.aviso(`«Conexión con el proyecto» no nombra ${clave} (${x.tipo})`);
    }
    // Criterios 28-10: los casos con empresas reales van solo en casos/; el contenido base no los nombra
    const cuerpo = c.md.split(/^## Fuentes/m)[0];
    if (/^:::ejemplo Caso real\b/m.test(cuerpo)) r.error('tiene un recuadro «Caso real» (los casos van solo en su recurso)');
    for (const e of EMPRESAS) if (new RegExp(`\\b${e}\\b`, 'i').test(cuerpo)) r.error(`nombra «${e}», empresa de un caso (los casos van solo en su recurso)`);
    if (/\bM\d-C\d\b/.test(cuerpo)) r.error('nombra el id de un caso');
    if (!/Camila|Andrés/.test(cuerpo)) r.aviso('no aparece ningún personaje recurrente (Camila o Andrés)');
    const pend = (cuerpo.match(/pilotear|antes de publicar|falta confirmar|por confirmar/gi) || []).length;
    if (pend) r.aviso(`${pend} marcas de «pilotear / revisar antes de publicar» en el texto (ver docs/PENDIENTES-VERIFICACION.md)`);
  });
  CRUCE.push({ ae: a, porCodigo });
}


// =====================================================================================================
nuevaCapa('C3', 'Quiz formativo juego SCORM (22)',
  'quiz/M<n>-AE<k>.md tiene las 8 preguntas de cada AE; scripts/quiz-juego.mjs genera el juego HTML, el paquete SCORM 1.2 y el GIFT '
  + '(entregables/quiz/<AE>/). Formato en docs/FORMATO-QUIZ.md. Cada pregunta remite a una pantalla del contenido base: es la '
  + '«acción remedial» que pide la planilla.');

for (const a of AES) {
  const q = QUIZ[a.id], c = CONT[a.id];
  chequeo(a.id, `Quiz ${a.id}`, `La planilla pide: ${a.quiz}`, r => {
    if (!q) { r.error(`falta quiz/${a.id}.md`); return; }
    if (q.campos.length) r.error(`faltan campos de portada: ${q.campos.join(', ')}`);
    q.preguntas.length === 8 ? r.ev('8 preguntas') : r.error(`${q.preguntas.length} preguntas; deben ser 8`);
    const usados = new Set();
    const pant = new Map((c?.pantallas || []).map(p => [p.id, p]));
    q.preguntas.forEach((p, k) => {
      const n = `pregunta ${k + 1}`;
      if (!p.cab) { r.error(`${n}: etiquetas mal escritas`); return; }
      if (!p.pantalla) r.error(`${n}: no remite a una pantalla (acción remedial)`);
      else if (!pant.has(p.pantalla)) r.error(`${n}: remite a ${p.pantalla}, que no existe en el contenido`);
      for (const x of p.codigos) { usados.add(x); if (!codigosDe(a).some(y => y.codigo === x)) r.error(`${n}: el código ${x} no es de ${a.id}`); }
      // la pantalla a la que remite debería trabajar al menos uno de los códigos de la pregunta
      const pp = pant.get(p.pantalla);
      if (pp && p.codigos.length && !p.codigos.some(x => pp.cubre.includes(x))) r.aviso(`${n}: remite a ${p.pantalla}, que no cubre ${p.codigos.join('/')}`);
      const ok = p.opciones.filter(o => o.ok).length;
      if (p.opciones.length < 2 || p.opciones.length > 4) r.error(`${n}: ${p.opciones.length} alternativas`);
      if (ok !== 1) r.error(`${n}: ${ok} correctas`);
      if (!p.retro) r.error(`${n}: sin retroalimentación`);
      if (palabras(p.enunciado) > 45) r.aviso(`${n}: enunciado de ${palabras(p.enunciado)} palabras (máx. 45)`);
      for (const o of p.opciones) if (palabras(o.texto) > 25) r.aviso(`${n}: alternativa de ${palabras(o.texto)} palabras (máx. 25)`);
    });
    const faltan = a.criterios.filter(x => !usados.has(x.codigo));
    faltan.length ? r.error(`ningún ítem evalúa ${faltan.map(x => x.codigo).join(', ')}`) : r.ev(`evalúa ${a.criterios.map(x => x.codigo).join(', ')}`);
    // derivados
    const dir = path.join('entregables', 'quiz', a.id);
    const fuente = Math.max(mtime('quiz', `${a.id}.md`), c ? mtime(c.archivo) : 0);
    for (const f of [`${a.id}-Quiz-Juego.html`, `${a.id}-Quiz-Juego-SCORM.zip`, `${a.id}-Quiz-Moodle.gift`]) {
      if (!existe(dir, f)) { r.error(`falta ${dir}/${f}`); continue; }
      if (mtime(dir, f) + HOLGURA < fuente) r.aviso(`${f} es anterior a su fuente: volver a correr quiz-juego.mjs`);
    }
    if (existe(dir, `${a.id}-Quiz-Juego-SCORM.zip`)) {
      const zip = fs.readFileSync(rel(dir, `${a.id}-Quiz-Juego-SCORM.zip`)).toString('latin1');
      zip.includes('imsmanifest.xml') && zip.includes('index.html') ? r.ev('SCORM con imsmanifest.xml e index.html') : r.error('el SCORM no tiene imsmanifest.xml o index.html');
    }
    if (existe(dir, `${a.id}-Quiz-Moodle.gift`)) {
      const n = (leer(dir, `${a.id}-Quiz-Moodle.gift`).match(/^::/gm) || []).length;
      n === 8 ? r.ev('GIFT con 8 preguntas') : r.error(`el GIFT tiene ${n} preguntas`);
    }
  });
}

// =====================================================================================================
nuevaCapa('C4', 'Infografías por módulo (6)',
  'infografias/M<n>.json es la fuente de cada infografía (recursos «Complemento» de la planilla); scripts/infografias.mjs la convierte '
  + 'en HTML y PNG. Cada bloque remite con «ver» a las pantallas donde se desarrolla.');

for (const m of MODULOS) {
  const rec = m.recursos.find(x => x.tipo === 'Complemento');
  chequeo(`M${m.n}`, `Infografía M${m.n}`, `Recurso ${rec?.id}: ${rec?.titulo}`, r => {
    if (!existe('infografias', `M${m.n}.json`)) { r.error(`falta infografias/M${m.n}.json`); return; }
    const j = JSON.parse(leer('infografias', `M${m.n}.json`));
    j.recurso === rec?.id ? r.ev(`recurso ${j.recurso}`) : r.error(`dice recurso ${j.recurso}; la planilla tiene ${rec?.id}`);
    rec?.titulo.includes(j.titulo) ? r.ev(`título «${j.titulo}» igual que en la planilla`) : r.aviso(`título «${j.titulo}» distinto del de la planilla`);
    const refs = JSON.stringify(j).match(/M\d-AE\d P\d\d/g) || [];
    for (const ref of refs) {
      const [ae, p] = ref.split(' ');
      if (!AE[ae]) r.error(`«ver» ${ref}: el AE no existe`);
      else if (!CONT[ae]?.pantallas.some(x => x.id === p)) r.error(`«ver» ${ref}: la pantalla no existe`);
      else if (AE[ae].modulo !== m.n) r.aviso(`«ver» ${ref} es de otro módulo`);
    }
    r.ev(`${refs.length} remisiones a pantallas`);
    for (const ext of ['html', 'png']) {
      const f = path.join('entregables', 'infografias', `M${m.n}-Infografia.${ext}`);
      if (!existe(f)) r.error(`falta ${f}`);
      else if (mtime(f) + HOLGURA < mtime('infografias', `M${m.n}.json`)) r.aviso(`${ext.toUpperCase()} anterior al JSON: volver a correr infografias.mjs`);
    }
  });
}

// =====================================================================================================
nuevaCapa('C5', 'Casos de aplicación con empresas reales (11)',
  'Cada caso de la hoja «Casos y proyecto» tiene una ficha de verificación (investigacion/casos/<id>.md, con fuentes primarias y '
  + '«lo que NO se puede afirmar») y el caso redactado para el estudiante (casos/<id>.md). Formato en docs/FORMATO-CASO.md.');

for (const k of CASOS) {
  const c = CASO[k.id];
  chequeo(k.id, k.titulo.replace(/^Caso /, ''), `AE: ${k.aes}. ${k.entregable}`, r => {
    if (!c.ficha) { r.error(`falta la ficha investigacion/casos/${k.id}.md`); return; }
    /^(Verificado|Verificado con ajustes|Descartado)$/.test(c.estado || '') ? r.ev(`estado: ${c.estado}`) : r.error('la ficha no declara un estado válido');
    c.primarias ? r.ev(`${c.fuentes.length} fuentes, ${c.primarias} primarias`) : r.error('sin fuentes primarias');
    for (const s of ['Hechos verificados', 'Lo que NO se puede afirmar']) if (!c.ficha.includes(`## ${s}`)) r.error(`la ficha no tiene «${s}»`);
    if (c.estado === 'Descartado') { r.aviso('caso descartado: hay que reemplazarlo en la planilla'); return; }
    if (!c.caso) { r.error(`falta casos/${k.id}.md`); return; }
    for (const s of ['1. Contexto', '2. Qué pasó', '3. Análisis guiado', '4. Aplicación a tu proyecto', '5. Autocorrección', '6. Para el foro', 'Fuentes'])
      if (!new RegExp(`^## ${s.replace('.', '\\.')}`, 'm').test(c.caso)) r.error(`falta la sección «${s}»`);
    for (const f of new Set([...c.caso.matchAll(/F-[A-Z0-9]+-\d+/g)].map(m => m[0]))) if (!c.fuentes.includes(f)) r.error(`cita ${f}, que no está en su ficha`);
    for (const ae of k.aes.split(/;\s*/)) if (!c.caso.includes(ae)) r.aviso(`no nombra ${ae}`);
    r.ev(`${palabras(c.caso.split(/^## Fuentes/m)[0])} palabras`);
    for (const [d, ext] of [['docs', 'html'], ['html', 'html'], ['pdf', 'pdf']]) {
      const f = path.join('entregables', 'casos', d, `${k.id}.${ext}`);
      if (!existe(f)) r.pendiente(`falta compilar ${f}`);
      else if (mtime(f) + HOLGURA < mtime('casos', `${k.id}.md`)) r.aviso(`${f} es anterior al caso`);
    }
  });
}

// =====================================================================================================
nuevaCapa('C6', 'Documentos compilados (Docs y PDF)',
  'scripts/compilar-contenidos.mjs arma, desde el contenido base, un HTML por AE para Google Docs (entregables/docs), un HTML de lectura '
  + '(entregables/por-ae), un PDF por AE y el documento completo. Esta capa revisa que estén todos y que no sean anteriores al contenido.');

chequeo('1', 'Un Doc, una página y un PDF por AE, al día con el contenido', 'Un PDF anterior al .md muestra una versión vieja.', r => {
  for (const a of AES) {
    const c = CONT[a.id];
    if (!c) continue;
    for (const f of [path.join('entregables', 'docs', `${a.id}.html`), path.join('entregables', 'por-ae', `${a.id}.html`), path.join('entregables', 'pdf', `${a.id}.pdf`)]) {
      if (!existe(f)) r.error(`falta ${f}`);
      else if (mtime(f) + HOLGURA < mtime(c.archivo)) r.aviso(`${f} (${fecha(mtime(f))}) es anterior a ${c.archivo} (${fecha(mtime(c.archivo))})`);
    }
  }
  for (const f of ['Contenidos-completos.md', 'Contenidos-completos.html', 'pdf/Contenidos-completos.pdf']) existe('entregables', f) ? r.ev(f) : r.error(`falta entregables/${f}`);
  r.ev(`${AES.length} AE revisados`);
});

chequeo('2', 'El documento completo trae los 22 AE', 'Comprueba que la compilación no se cortó.', r => {
  if (!existe('entregables', 'Contenidos-completos.md')) return r.error('no existe');
  const md = leer('entregables', 'Contenidos-completos.md');
  const faltan = AES.filter(a => !md.includes(`## ${a.id} · `));
  faltan.length ? r.error(`faltan ${faltan.map(a => a.id).join(', ')}`) : r.ev('22 AE presentes');
  const masNuevo = Math.max(...AES.filter(a => CONT[a.id]).map(a => mtime(CONT[a.id].archivo)));
  if (mtime('entregables', 'Contenidos-completos.md') + HOLGURA < masNuevo) r.aviso('hay contenidos más nuevos que el documento completo');
});

// =====================================================================================================
nuevaCapa('C7', 'Correspondencia de fondo y pendientes declarados',
  'Lo que un script no puede juzgar (si un código está trabajado de verdad, si el Bloom calza, si la técnica es la que pide la planilla) '
  + 'se revisó a mano en docs/CORRESPONDENCIA-FONDO.md. Lo que hay que probar en las aplicaciones o en la normativa está en '
  + 'docs/PENDIENTES-VERIFICACION.md. Esta capa los resume para que no se pierdan.');

chequeo('1', 'Revisión cualitativa: 6 preguntas por AE', 'Un «Parcial» o «No» es una brecha de fondo frente a la planilla.', r => {
  if (!existe('docs', 'CORRESPONDENCIA-FONDO.md')) return r.error('falta docs/CORRESPONDENCIA-FONDO.md');
  const filas = leer('docs', 'CORRESPONDENCIA-FONDO.md').split('\n').filter(l => /^\| M\d-AE\d \|/.test(l)).map(l => l.split('|').slice(1, -1).map(s => s.trim()));
  const vistos = new Set(filas.map(f => f[0]));
  for (const a of AES) if (!vistos.has(a.id)) r.error(`${a.id} no tiene revisión de fondo`);
  const nombres = ['Códigos', 'Bloom', 'Técnica', 'Criterios', 'Alcance', 'Quiz'];
  for (const f of filas) f.slice(1).forEach((v, i) => {
    if (/^No/.test(v)) r.error(`${f[0]} · ${nombres[i]}: ${v}`);
    else if (/Parcial/.test(v)) r.aviso(`${f[0]} · ${nombres[i]}: ${v}`);
  });
  r.ev(`${filas.length} AE revisados a mano`);
});

chequeo('2', 'Pendientes de verificación abiertos', 'Son cosas que se deben comprobar antes de publicar; no bloquean la entrega del contenido base.', r => {
  if (!existe('docs', 'PENDIENTES-VERIFICACION.md')) return r.aviso('falta docs/PENDIENTES-VERIFICACION.md');
  const md = leer('docs', 'PENDIENTES-VERIFICACION.md');
  for (const s of md.split(/^## /m).slice(1)) {
    const n = (s.match(/^\| [A-Z]?\d+ \|/gm) || []).length;
    if (n) r.pendiente(`${s.split('\n')[0]}: ${n}`);
  }
});

// =====================================================================================================
nuevaCapa('C8', 'Google Drive',
  'Los entregables se subieron a la carpeta «Curso IA generativa para entornos laborales · Recursos». La auditoría no entra a Drive: '
  + 'lee data/drive-inventario.json, una foto de la carpeta tomada con el conector de Drive. Compara qué hay arriba con lo local, '
  + 'busca duplicados y avisa si lo subido es anterior a la última versión local.');

const cont = a => [path.join('contenido', `M${a.modulo}`, `${a.id}.md`)];
const conQuiz = a => [...cont(a), path.join('quiz', `${a.id}.md`)];
const ESPERADO_DRIVE = [
  { nombre: 'Docs del contenido base', carpeta: driveIds.docs, local: a => path.join('entregables', 'docs', `${a.id}.html`), titulo: a => `${a.id} · ${a.tema}`, fuente: cont },
  { nombre: 'PDF del contenido base', carpeta: driveIds.pdf, local: a => path.join('entregables', 'pdf', `${a.id}.pdf`), titulo: a => `${a.id}.pdf`, fuente: cont },
  { nombre: 'Quiz SCORM', carpeta: driveIds.quiz_scorm, local: a => path.join('entregables', 'quiz', a.id, `${a.id}-Quiz-Juego-SCORM.zip`), titulo: a => `${a.id}-Quiz-Juego-SCORM.zip`, fuente: conQuiz },
  { nombre: 'Quiz HTML', carpeta: driveIds.quiz_html, local: a => path.join('entregables', 'quiz', a.id, `${a.id}-Quiz-Juego.html`), titulo: a => `${a.id}-Quiz-Juego.html`, fuente: conQuiz },
  { nombre: 'Quiz GIFT', carpeta: driveIds.quiz_gift, local: a => path.join('entregables', 'quiz', a.id, `${a.id}-Quiz-Moodle.gift`), titulo: a => `${a.id}-Quiz-Moodle.gift`, fuente: conQuiz },
];

if (!drive) {
  chequeo('0', 'Foto de Drive', 'Sin ella no se puede auditar Drive.', r => r.pendiente('falta data/drive-inventario.json (se toma con el conector de Drive)'));
} else {
  const archivos = id => (drive.carpetas[id]?.archivos || []).filter(f => !f.mimeType.includes('folder'));
  chequeo('0', 'Foto de Drive', 'Indica de cuándo es lo que se compara.', r => {
    r.ev(`tomada el ${fecha(Date.parse(drive.generado))} · ${Object.keys(drive.carpetas).length} carpetas`);
    for (const [id, c] of Object.entries(drive.carpetas)) r.ev(`${c.titulo}: ${c.archivos.length} elementos`);
  });
  for (const e of ESPERADO_DRIVE) chequeo(e.nombre.replace(/\s+/g, '-'), `${e.nombre} en Drive`, 'Uno por AE, sin duplicados y subido después del último cambio de su fuente (contenido o quiz).', r => {
    if (!e.carpeta || !drive.carpetas[e.carpeta]) return r.error(`la carpeta ${e.carpeta} no está en la foto`);
    const lista = archivos(e.carpeta);
    for (const a of AES) {
      const iguales = lista.filter(f => f.titulo === e.titulo(a));
      if (!iguales.length) { r.error(`falta «${e.titulo(a)}»`); continue; }
      if (iguales.length > 1) r.aviso(`«${e.titulo(a)}» está ${iguales.length} veces`);
      const subido = Math.max(...iguales.map(f => Date.parse(f.modificado)));
      const fuente = Math.max(...e.fuente(a).filter(f => existe(f)).map(f => mtime(f)));
      if (subido + 60000 < fuente) r.aviso(`${a.id}: lo de Drive (${fecha(subido)}) es anterior al último cambio de su fuente (${fecha(fuente)})`);
      if (!existe(e.local(a))) r.aviso(`${a.id}: está en Drive pero no en ${e.local(a)}`);
    }
    const sobran = lista.filter(f => !AES.some(a => e.titulo(a) === f.titulo) && !/^Contenidos-completos./.test(f.titulo));
    if (sobran.length) r.aviso(`archivos que no corresponden a un AE: ${sobran.map(f => f.titulo).join(', ')}`);
    r.ev(`${lista.length} archivos en la carpeta`);
  });
  chequeo('planilla', 'La planilla de origen está en Drive', 'Todo el curso se rastrea hasta ella: su copia y el .xlsx van en «0 Planilla de origen».', r => {
    const lista = archivos(driveIds.planilla_carpeta);
    if (!driveIds.planilla_carpeta || !drive.carpetas[driveIds.planilla_carpeta]) return r.pendiente('la carpeta «0 Planilla de origen» no está en la foto de Drive');
    lista.some(f => f.mimeType === 'application/vnd.google-apps.spreadsheet') ? r.ev('copia en Google Sheets') : r.error('falta la copia en Google Sheets');
    lista.some(f => /\.xlsx$/.test(f.titulo)) ? r.ev('copia .xlsx') : r.error('falta el .xlsx');
  });
  chequeo('ids', 'Los ids de data/drive.json existen en Drive', 'drive.json es el registro que usan los scripts para reemplazar versiones.', r => {
    const todos = new Set(Object.values(drive.carpetas).flatMap(c => c.archivos.map(f => f.id)).concat(Object.keys(drive.carpetas)));
    for (const [ae, id] of Object.entries(driveIds.docs_por_ae || {})) if (!todos.has(id)) r.error(`${ae}: el Doc ${id} no está en la foto`);
    r.ev(`${Object.keys(driveIds.docs_por_ae || {}).length} Docs registrados`);
  });
  chequeo('info', 'Infografías en Drive', 'HTML y PNG de cada módulo.', r => {
    const lista = archivos(driveIds.infografias);
    for (const m of MODULOS) for (const ext of ['html', 'png']) {
      const t = `M${m.n}-Infografia.${ext}`, f = lista.filter(x => x.titulo === t);
      if (!f.length) r.error(`falta ${t}`);
      else if (Date.parse(f[0].modificado) + 60000 < mtime('infografias', `M${m.n}.json`)) r.aviso(`${t}: Drive es anterior al último cambio de infografias/M${m.n}.json`);
    }
    r.ev(`${lista.length} archivos`);
  });
  chequeo('casos', 'Casos de aplicación en Drive', 'Los casos se suben al terminar los 11.', r => {
    const carpeta = Object.entries(drive.carpetas).find(([, c]) => /Casos/i.test(c.titulo));
    if (!carpeta) return r.pendiente('todavía no hay carpeta de casos en Drive');
    const lista = Object.entries(drive.carpetas).filter(([id, c]) => id === carpeta[0] || c.padre === carpeta[0]).flatMap(([, c]) => c.archivos);
    for (const k of CASOS) if (!lista.some(f => f.titulo.includes(k.id))) r.pendiente(`${k.id} no está subido`);
    r.ev(`${lista.length} elementos en «${carpeta[1].titulo}»`);
  });
}

// =====================================================================================================
nuevaCapa('C9', 'Avance frente a los 101 recursos de la planilla',
  'Cruza cada fila de la hoja «Recursos» con lo producido. «Hecho» = el entregable existe y pasa sus chequeos. «Insumo listo» = el '
  + 'contenido base trae lo que ese recurso necesita, pero el recurso en sí (Rise, página de Moodle, guion de video) aún no se arma. '
  + '«Pendiente» = no se ha empezado. Los Rise los arma Natalia a partir del contenido base.');

const estadoDe = id => CAPAS.flatMap(c => c.chequeos).find(c => c.id === id)?.estado;
const AVANCE = RECURSOS.map(x => {
  const aes = String(x.aes).split(/;\s*/).filter(a => AE[a]);
  const m = x.modulo;
  let estado = 'Pendiente', nota = 'Aún no se produce';
  const sano = ids => ids.every(i => ['ok', 'aviso', 'pendiente'].includes(estadoDe(i)));
  switch (x.tipo) {
    case 'Rise':
      if (sano(aes.map(a => `C2.${a}`))) { estado = 'Insumo listo'; nota = 'Contenido base validado; el Rise lo arma Natalia'; }
      break;
    case 'Quiz formativo':
      if (sano(aes.map(a => `C3.${a}`))) { estado = 'Hecho'; nota = 'Juego HTML + SCORM 1.2 + GIFT'; }
      break;
    case 'Complemento':
      if (sano([`C4.M${m}`])) { estado = 'Hecho'; nota = 'Infografía HTML + PNG'; }
      break;
    case 'Caso de aplicación': {
      const id = /Caso (M\d-C\d)/.exec(x.titulo)?.[1];
      const e = estadoDe(`C5.${id}`);
      if (e === 'ok' || e === 'aviso') { estado = 'Hecho'; nota = `Caso verificado (${CASO[id]?.estado})`; }
      else if (e === 'pendiente') { estado = 'Hecho'; nota = 'Caso escrito; falta compilar Doc/PDF'; }
      else if (CASO[id]?.ficha) { estado = 'En curso'; nota = 'Ficha de verificación sin caso redactado'; }
      else { estado = 'En curso'; nota = 'En investigación'; }
      break;
    }
    case 'Resumen y glosario':
      if (MODULOS.find(z => z.n === m).aes.every(a => CONT[a.id]?.seccion('Ideas clave') && CONT[a.id]?.seccion('Glosario'))) { estado = 'Insumo listo'; nota = 'Ideas clave y glosario en el contenido base; falta la página de Moodle'; }
      break;
    case 'Hito proyecto':
      if (aes.every(a => CONT[a]?.seccion('Conexión con el proyecto'))) { estado = 'Insumo listo'; nota = '«Conexión con el proyecto» en el contenido; faltan enunciado y rúbrica del hito'; }
      break;
    case 'Video': {
      // carpeta de la skill curso-video-modulo; el .srt se exporta al final, así que marca el video terminado
      const dir = `videos/M${m}-${/resumen/i.test(x.titulo) ? 'resumen' : 'bienvenida'}`;
      if (existe(dir, 'subtitulos.srt')) { estado = 'Hecho'; nota = `Video, .srt y slides (${dir})`; }
      else if (existe(dir, 'guion.md')) { estado = 'En curso'; nota = `Guion en ${dir}; falta el video`; }
      else if (/resumen/i.test(x.titulo)) { estado = 'Insumo listo'; nota = 'Ideas clave disponibles; falta el guion y el video'; }
      else nota = 'Falta el guion y el video';
      break;
    }
    case 'Evaluación sumativa': nota = 'Falta el banco GIFT por criterios'; break;
    case 'Foro': nota = 'Falta la consigna del foro (los casos traen «Para el foro»)'; break;
    case 'Inducción/Diagnóstica': nota = 'Falta video de inducción, guía del participante y diagnóstica'; break;
  }
  return { ...x, estado, nota };
});

chequeo('1', 'Estado de cada recurso', 'Muestra qué parte de las 88 h ya tiene su recurso.', r => {
  const porEstado = {};
  for (const x of AVANCE) { const k = porEstado[x.estado] ||= { n: 0, min: 0 }; k.n++; k.min += x.minutos; }
  for (const [e, v] of Object.entries(porEstado)) r.ev(`${e}: ${v.n} recursos · ${(v.min / 60).toFixed(1)} h`);
  const pend = AVANCE.filter(x => x.estado === 'Pendiente');
  if (pend.length) r.pendiente(`${pend.length} recursos sin empezar (${[...new Set(pend.map(x => x.tipo))].join(', ')})`);
});

// =====================================================================================================
// Salida
const todos = CAPAS.flatMap(c => c.chequeos);
const cuenta = e => todos.filter(c => c.estado === e).length;
const resumen = { generado: new Date().toISOString(), chequeos: todos.length, ok: cuenta('ok'), aviso: cuenta('aviso'), error: cuenta('error'), pendiente: cuenta('pendiente') };
const ICONO = { ok: '✓', aviso: '!', error: '✗', pendiente: '…' };

console.log(`Auditoría · ${resumen.chequeos} chequeos · ✓ ${resumen.ok} · ! ${resumen.aviso} · ✗ ${resumen.error} · … ${resumen.pendiente}`);
for (const c of CAPAS) {
  const malos = c.chequeos.filter(x => x.estado === 'error');
  console.log(`${malos.length ? '✗' : '✓'} ${c.id} ${c.titulo} · ${c.chequeos.length} chequeos${malos.length ? ` · ${malos.length} con error` : ''}`);
  for (const x of malos) x.errores.slice(0, 4).forEach(e => console.log(`   ${x.id}: ${e}`));
}
if (process.argv.includes('--consola')) process.exit(resumen.error ? 1 : 0);

const datos = { resumen, capas: CAPAS, avance: AVANCE.map(({ id, modulo, tipo, titulo, aes, minutos, estado, nota }) => ({ id, modulo, tipo, titulo, aes, minutos, estado, nota })),
  cruce: CRUCE.map(({ ae, porCodigo }) => ({ ae: ae.id, codigos: codigosDe(ae).map(c => ({ codigo: c.codigo, texto: c.texto, pantallas: porCodigo[c.codigo] || [] })) })) };
fs.mkdirSync(rel('entregables', 'auditoria'), { recursive: true });
fs.writeFileSync(rel('entregables', 'auditoria', 'auditoria.json'), JSON.stringify(datos, null, 2) + '\n');

// ---------- Markdown ----------
const lista = (x, campo, pre) => x[campo].map(m => `  - ${pre} ${m}`).join('\n');
let md = `# Auditoría del curso «${curso.titulo}»

Generado con \`node scripts/auditar.mjs\` el ${fecha(Date.now())}. Solo lee: no corrige nada.
Fuente de verdad: planilla «Estructura_inicial_contenido_IA_generativa» (Drive 1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM).

**Resultado:** ${resumen.chequeos} chequeos · ✓ ${resumen.ok} sin observaciones · ! ${resumen.aviso} con avisos · ✗ ${resumen.error} con errores · … ${resumen.pendiente} pendientes.

- **✗ error:** algo no calza con la planilla o con el formato, o falta un archivo que debería existir.
- **! aviso:** funciona, pero conviene mirarlo (un derivado desactualizado, una pantalla corta, un «Parcial» de fondo).
- **… pendiente:** todavía no se produce; no es un defecto.

## Cómo está armado el proyecto

\`\`\`
Planilla (Drive) ──xlsx2tsv──► data/planilla/*.tsv ──importar-planilla──► data/curso.json   (C0)
                                                                              │
investigacion/M<n>.md, HERRAMIENTAS-*.md  (fuentes F-…, abiertas y leídas)    │   (C1)
                                   │                                          │
                                   ▼                                          ▼
                     contenido/M<n>/M<n>-AE<k>.md  ◄── validar-contenido ── códigos S/H/A/C   (C2)
                                   │
        ┌──────────────┬───────────┼──────────────┬──────────────────────┐
        ▼              ▼           ▼              ▼                      ▼
   quiz/*.md     infografias/  compilar-     «Conexión con el     investigacion/casos/ → casos/
   quiz-juego    infografias   contenidos    proyecto» (hitos)    validar-casos            (C5)
   (C3)          (C4)          (C6)
        │              │           │                                     │
        └──────────────┴───────────┴──────────── Google Drive ───────────┘                 (C8)
\`\`\`

| Carpeta | Qué contiene |
|---|---|
| \`data/planilla/\` | Las 10 hojas de la planilla en TSV |
| \`data/curso.json\` | Módulos → AE → saber (S), saber hacer (H), saber ser (A), criterios (C), pantallas, quiz, recursos y casos |
| \`investigacion/\` | ${FUENTES.size} fuentes con id F-…, qué respaldan y para qué AE sirven; \`casos/\` = fichas de verificación |
| \`contenido/\` | ${AES.length} contenidos base, ${AES.reduce((s, a) => s + (CONT[a.id]?.pantallas.length || 0), 0)} pantallas |
| \`quiz/\` | ${Object.values(QUIZ).filter(Boolean).length} quiz de 8 preguntas |
| \`infografias/\` | ${MODULOS.filter(m => existe('infografias', `M${m.n}.json`)).length} infografías (JSON) |
| \`casos/\` | ${CASOS.filter(k => CASO[k.id].caso).length} de ${CASOS.length} casos redactados |
| \`entregables/\` | Lo generado: docs/, por-ae/, pdf/, quiz/, infografias/, casos/ |
| \`docs/\` | Formatos, correspondencias, pendientes y esta auditoría |

## Avance frente a la hoja «Recursos»

| Estado | Recursos | Horas |
|---|---|---|
${Object.entries(AVANCE.reduce((o, x) => { (o[x.estado] ||= { n: 0, min: 0 }).n++; o[x.estado].min += x.minutos; return o; }, {})).map(([e, v]) => `| ${e} | ${v.n} | ${(v.min / 60).toFixed(1)} |`).join('\n')}

| Tipo | Hecho | Insumo listo | En curso | Pendiente |
|---|---|---|---|---|
${[...new Set(AVANCE.map(x => x.tipo))].map(t => `| ${t} | ${['Hecho', 'Insumo listo', 'En curso', 'Pendiente'].map(e => AVANCE.filter(x => x.tipo === t && x.estado === e).length || '').join(' | ')} |`).join('\n')}

`;
for (const c of CAPAS) {
  md += `## ${c.id} · ${c.titulo}\n\n${c.explica}\n\n| | Chequeo | Resultado |\n|---|---|---|\n`;
  md += c.chequeos.map(x => `| ${ICONO[x.estado]} | ${x.id} ${x.titulo} | ${x.errores.length ? `${x.errores.length} errores` : ''}${x.avisos.length ? ` ${x.avisos.length} avisos` : ''}${x.pendientes.length ? ` ${x.pendientes.length} pendientes` : ''}${x.estado === 'ok' ? x.evidencia.slice(0, 2).join(' · ') : ''} |`).join('\n') + '\n\n';
  const conDetalle = c.chequeos.filter(x => x.errores.length || x.avisos.length || x.pendientes.length);
  if (conDetalle.length) md += '<details><summary>Detalle</summary>\n\n' + conDetalle.map(x => `- **${x.id} ${x.titulo}**\n${[lista(x, 'errores', '✗'), lista(x, 'avisos', '!'), lista(x, 'pendientes', '…')].filter(Boolean).join('\n')}`).join('\n') + '\n\n</details>\n\n';
}
md += `## Anexo · Detalle de los 101 recursos\n\n| ID | Módulo | Tipo | Recurso | Min | Estado | Nota |\n|---|---|---|---|---|---|---|\n`
  + AVANCE.map(x => `| ${x.id} | M${x.modulo} | ${x.tipo} | ${x.titulo.replace(/\|/g, '/')} | ${x.minutos} | ${x.estado} | ${x.nota} |`).join('\n') + '\n';
fs.writeFileSync(rel('docs', 'AUDITORIA.md'), md);

// ---------- HTML (autocontenido, para compartir) ----------
const plantilla = leer('scripts', 'lib', 'auditoria.html');
fs.writeFileSync(rel('entregables', 'auditoria', 'AUDITORIA.html'),
  plantilla.replace('/*DATOS*/', () => JSON.stringify({ ...datos, curso: curso.titulo, fuentes: FUENTES.size }).replace(/</g, '\\u003c')));
console.log('Escrito: docs/AUDITORIA.md · entregables/auditoria/auditoria.json · entregables/auditoria/AUDITORIA.html');
process.exit(resumen.error ? 1 : 0);
