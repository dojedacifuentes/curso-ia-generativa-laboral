// Panel del curso: arma un sitio estático (panel/dist) con la metodología, la matriz y su trazabilidad,
// leyendo lo que hay en el repo. Vercel lo corre en cada push (vercel.json → npm run panel).
//
//   node panel/build.mjs     escribe panel/dist (index.html, datos.json, docs/*.html y copias de entregables)
//
// No corre la auditoría: usa entregables/auditoria/auditoria.json tal como quedó en el último commit,
// porque en un checkout nuevo las fechas de los archivos no sirven para medir qué está atrasado.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(RAIZ, 'panel', 'dist');
const rel = (...p) => path.join(RAIZ, ...p);
const existe = (...p) => fs.existsSync(rel(...p));
const leer = (...p) => fs.readFileSync(rel(...p), 'utf8').replace(/\r\n/g, '\n');
const json = (...p) => JSON.parse(leer(...p));

const REPO = 'https://github.com/dojedacifuentes/curso-ia-generativa-laboral';
const gh = ruta => `${REPO}/blob/main/${ruta.split('/').map(encodeURIComponent).join('/')}`;
const PLANILLA = 'https://docs.google.com/spreadsheets/d/1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM/edit';

// ---------- planilla ----------
function hoja(nombre, primera) {
  const filas = leer('data', 'planilla', nombre + '.tsv').split('\n').map(l => l.split('\t'));
  const i = filas.findIndex(f => primera.includes(f[0]?.trim()));
  if (i < 0) return [];
  const cab = filas[i].map(c => c.trim());
  return filas.slice(i + 1).filter(f => f[0]?.trim()).map(f => Object.fromEntries(cab.map((c, k) => [c, (f[k] ?? '').trim()])));
}
const curso = json('data', 'curso.json');
const MODULOS = curso.modulos;
const AES = MODULOS.flatMap(m => m.aes.map(a => ({ ...a, modulo: m.n })));
const matriz = Object.fromEntries(hoja('Matriz coherencia', ['ID AE']).map(f => [f['ID AE'], f]));
const recursosPlanilla = Object.fromEntries(hoja('Recursos', ['ID']).map(f => [f.ID, f]));
const evaluacion = hoja('Evaluación', ['Instrumento']).filter(f => f.Instrumento && !/^Total/.test(f.Instrumento));
const pendPlanilla = hoja('Pendientes', ['#']).map(f => ({ n: f['#'].replace(/\.0$/, ''), pendiente: f.Pendiente, porque: f['Por qué importa'],
  quien: f['Quién'], estado: f.Estado }));
const num = v => Number(String(v).replace(',', '.')) || 0;

// ---------- la planilla misma: qué es, qué hojas tiene y qué alimenta cada una ----------
const XLSX = 'Estructura_inicial_contenido_IA_generativa.xlsx';
const ALIMENTA = {
  'Léeme': ['Qué es el curso, audiencia, normativa, modelo de tiempos y criterios de diseño', null],
  'Parámetros': ['Minutos por pantalla, quiz, foro, video y caso: de aquí salen todas las horas', null],
  'Resumen horas': ['La coherencia de horas por módulo que exige la RE 2.484 (diferencia 0)', null],
  'Estructura': ['data/curso.json: módulos, AE, saberes S/H/A, técnica, Rise y pantallas', 'matriz'],
  'Matriz coherencia': ['Criterios C, actividades, instrumentos y minutos directos de cada AE', 'trazabilidad'],
  'Recursos': ['Los 101 recursos con su tipo, AE, duración, responsable y estado', 'recursos'],
  'Casos y proyecto': ['Los 11 casos con empresas reales y los 9 hitos del proyecto', 'casos'],
  'Evaluación': ['El sistema de evaluación y sus ponderaciones', 'casos'],
  'Cumplimiento RE 2484': ['Cada exigencia de la RE 2.484 cruzada con el diseño', null],
  'Pendientes': ['Decisiones abiertas antes de la versión definitiva', 'pendientes'],
};
const leeme = leer('data', 'planilla', 'Léeme.tsv').split('\n').map(l => l.split('\t')).filter(f => f.length > 1 && f[0].trim() && f[1].trim())
  .map(([k, v]) => ({ k: k.trim(), v: v.trim() }));
const planilla = {
  titulo: 'Estructura_inicial_contenido_IA_generativa',
  subtitulo: leer('data', 'planilla', 'Léeme.tsv').split('\n')[1]?.trim() || '',
  leeme,
  hojas: fs.readdirSync(rel('data', 'planilla')).filter(f => f.endsWith('.tsv')).map(f => {
    const nombre = f.slice(0, -4), lineas = leer('data', 'planilla', f).split('\n');
    return { nombre, titulo: lineas[0]?.split('\t')[0].trim(), nota: lineas[1]?.split('\t')[0].trim(), lineas: lineas.filter(l => l.trim()).length,
      alimenta: ALIMENTA[nombre]?.[0] || '', vista: ALIMENTA[nombre]?.[1] || null, github: gh(`data/planilla/${f}`) };
  }).sort((a, b) => Object.keys(ALIMENTA).indexOf(a.nombre) - Object.keys(ALIMENTA).indexOf(b.nombre)),
  parametros: hoja('Parámetros', ['Parámetro']).map(f => ({ parametro: f['Parámetro'], descripcion: f['Descripción'], valor: f.Valor, unidad: f.Unidad })),
  horas: hoja('Resumen horas', ['Módulo']).filter(f => /^\d/.test(f['Módulo'])).map(f => ({ modulo: f['Módulo'].replace(/\.0$/, ''), nombre: f.Nombre,
    objetivo: num(f['Min objetivo']), disenados: num(f['Min diseñados']), diferencia: num(f['Diferencia (min)']), pantallas: num(f['Pantallas Rise']),
    aes: num(f['N° AE']), coherente: f['¿Coherente?'] })),
  cumplimiento: hoja('Cumplimiento RE 2484', ['#']).map(f => ({ n: f['#'].replace(/\.0$/, ''), seccion: f['Sección RE 2.484'], etapa: f.Etapa,
    exigencia: f.Exigencia, como: f['Cómo la cubre este diseño'], donde: f['Dónde verificarlo'], estado: f.Estado, riesgo: f.Riesgo })),
  xlsx: existe('data', 'planilla', XLSX) ? `planilla/${XLSX}` : null,
  xlsxGithub: existe('data', 'planilla', XLSX) ? gh(`data/planilla/${XLSX}`) : null,
};

// ---------- Drive ----------
const driveIds = existe('data', 'drive.json') ? json('data', 'drive.json') : {};
const inventario = existe('data', 'drive-inventario.json') ? json('data', 'drive-inventario.json') : { carpetas: {} };
const urlDrive = f => !f ? null : f.mimeType === 'application/vnd.google-apps.folder' ? `https://drive.google.com/drive/folders/${f.id}`
  : f.mimeType === 'application/vnd.google-apps.document' ? `https://docs.google.com/document/d/${f.id}/edit`
  : `https://drive.google.com/file/d/${f.id}/view`;
const enCarpeta = (carpeta, titulo) => urlDrive((inventario.carpetas[carpeta]?.archivos || []).find(f => f.titulo === titulo));
const docUrl = id => id ? `https://docs.google.com/document/d/${id}/edit` : null;
const carpetaUrl = id => id ? `https://drive.google.com/drive/folders/${id}` : null;
Object.assign(planilla, {
  original: PLANILLA, copia: driveIds.planilla_copia ? `https://docs.google.com/spreadsheets/d/${driveIds.planilla_copia}/edit` : null,
  xlsxDrive: driveIds.planilla_xlsx ? `https://drive.google.com/file/d/${driveIds.planilla_xlsx}/view` : null, carpeta: carpetaUrl(driveIds.planilla_carpeta),
});

// ---------- auditoría (tal como quedó en el repo) ----------
const auditoria = existe('entregables', 'auditoria', 'auditoria.json') ? json('entregables', 'auditoria', 'auditoria.json') : null;
const chequeos = auditoria ? auditoria.capas.flatMap(c => c.chequeos.map(k => ({ ...k, capa: c.id }))) : [];
const mensajes = k => [...k.errores.map(t => ({ t, e: 'error' })), ...k.avisos.map(t => ({ t, e: 'aviso' })), ...k.pendientes.map(t => ({ t, e: 'pendiente' }))];
const estadoCapa = id => {
  const ks = chequeos.filter(k => k.capa === id);
  const n = e => ks.filter(k => k.estado === e).length;
  return { total: ks.length, ok: n('ok'), aviso: n('aviso'), error: n('error'), pendiente: n('pendiente'),
    estado: n('error') ? 'error' : n('aviso') ? 'aviso' : n('pendiente') ? 'pendiente' : 'ok' };
};
const avance = Object.fromEntries((auditoria?.avance || []).map(r => [r.id, r]));
const cruce = Object.fromEntries((auditoria?.cruce || []).map(c => [c.ae, c]));

// ---------- fuentes ----------
function leerFuentes(dir, grupo) {
  const out = [];
  if (!existe(dir)) return out;
  for (const f of fs.readdirSync(rel(dir)).filter(f => f.endsWith('.md')).sort()) {
    const md = leer(dir, f);
    for (const b of md.split(/^(?=### F-)/m).slice(1)) {
      const cab = /^### (F-[A-Z0-9]+-\d+)\s*·?\s*(.*)$/m.exec(b);
      if (!cab) continue;
      const campo = n => new RegExp(`^- ${n}:\\s*([\\s\\S]+?)(?=\\n- [A-ZÁÉÍÓÚ][^:\\n]{1,40}:|\\n\\n|\\n#|$)`, 'm').exec(b)?.[1]?.replace(/\s*\n\s*/g, ' ').trim() || '';
      out.push({ id: cab[1], titulo: cab[2].trim(), archivo: `${dir}/${f}`, grupo, url: campo('URL'), tipo: campo('Tipo'),
        fecha: campo('Fecha de publicación') || campo('Fecha de la página \\(si la tiene\\)'), respalda: campo('Respalda'), sirve: campo('Sirve para'),
        citadaEn: [] });
    }
  }
  return out;
}
const FUENTES = [...leerFuentes('investigacion', 'contenido'), ...leerFuentes('investigacion/casos', 'casos')];
const FUENTE = Object.fromEntries(FUENTES.map(f => [f.id, f]));

// ---------- contenido y quiz por AE ----------
function leerContenido(id) {
  const archivo = `contenido/${id.split('-')[0]}/${id}.md`;
  if (!existe(archivo)) return { archivo, pantallas: [] };
  const md = leer(archivo);
  const pantallas = md.split(/^## /m).slice(1).filter(b => /^P\d\d · /.test(b)).map(b => ({
    id: b.slice(0, 3), titulo: b.split('\n')[0].slice(6).trim(),
    cubre: (/^cubre:\s*(.+)$/m.exec(b)?.[1] || '').split(/,\s*/).filter(Boolean),
    fuentes: (/^fuentes:[ \t]*(F-.+)$/m.exec(b)?.[1] || '').split(/,\s*/).filter(Boolean),
    bloque: (/^bloque:\s*(.+)$/m.exec(b)?.[1] || '').trim(),
    casoReal: /^:::ejemplo Caso real/m.test(b),
  }));
  return { archivo, pantallas };
}
function leerQuiz(id) {
  const archivo = `quiz/${id}.md`;
  if (!existe(archivo)) return { archivo, preguntas: [] };
  const md = leer(archivo);
  const campo = c => new RegExp(`\\*\\*${c}:\\*\\*\\s*(.+)`).exec(md)?.[1]?.trim() || '';
  const preguntas = md.split(/^(?=\d+\. )/m).slice(1).map(b => {
    const cab = /^(\d+)\.\s*\*\(([^)]+)\)\*\s*([\s\S]+?)\n\s*- /.exec(b);
    const etiquetas = cab ? cab[2].split(/\s*·\s*/) : [];
    const opciones = [...b.matchAll(/^\s*- (\*\*)?[a-d]\)\s*(.+?)(\*\*)?\s*$/gm)].map(m => ({ texto: m[2], ok: !!m[1] }));
    return { n: Number(cab?.[1]), enunciado: (cab?.[3] || '').replace(/\s+/g, ' ').trim(), pantalla: etiquetas.find(e => /^P\d\d$/.test(e)) || null,
      codigos: etiquetas.filter(e => !/^P\d\d$/.test(e)), correcta: opciones.find(o => o.ok)?.texto || '',
      retro: (/\*Retroalimentación:\*\s*(.+)/.exec(b)?.[1] || '').trim() };
  }).filter(p => p.n);
  return { archivo, mision: campo('Misión'), insignia: campo('Insignia'), preguntas };
}

const tipoCodigo = c => ({ S: 'saber', H: 'saber_hacer', A: 'saber_ser', C: 'criterio' })[c[0]];
const RECURSOS = MODULOS.flatMap(m => m.recursos.map(r => ({ ...r, modulo: m.n })));
const TODOS_CASOS = MODULOS.flatMap(m => m.casos.map(c => ({ ...c, modulo: m.n })));
const aesDe = s => String(s || '').split(/;\s*/).map(x => x.trim()).filter(x => /^M\d-AE\d$/.test(x));

const aes = {};
for (const a of AES) {
  const cont = leerContenido(a.id);
  const quiz = leerQuiz(a.id);
  const m = matriz[a.id] || {};
  for (const p of cont.pantallas) for (const f of p.fuentes) FUENTE[f]?.citadaEn.push({ ae: a.id, pantalla: p.id });
  const codigos = [...a.saber, ...a.saber_hacer, ...a.saber_ser, ...a.criterios].map(c => ({
    codigo: c.codigo, tipo: tipoCodigo(c.codigo), texto: c.texto,
    pantallas: cont.pantallas.filter(p => p.cubre.includes(c.codigo)).map(p => p.id),
    preguntas: quiz.preguntas.filter(q => q.codigos.includes(c.codigo)).map(q => q.n),
  }));
  const id = a.id;
  aes[id] = {
    id, modulo: a.modulo, tema: a.tema, texto: a.texto, bloom: a.bloom, tecnica: a.tecnica, rise: a.rise,
    pantallasPlan: a.pantallas, quizPlan: a.quiz, instrumentos: a.instrumentos,
    actividades: m['Actividades que lo trabajan'] || '', actitudes: m['Contenidos (saber hacer)'] || '',
    minutos: num(m['Min directos AE (Rise + quiz)']), cobertura: m.Cobertura || '',
    codigos, pantallas: cont.pantallas, quiz: { mision: quiz.mision, insignia: quiz.insignia, preguntas: quiz.preguntas },
    recursos: RECURSOS.filter(r => aesDe(r.aes).includes(id)).map(r => r.id),
    casos: TODOS_CASOS.filter(c => aesDe(c.aes).includes(id)).map(c => c.id),
    enlaces: {
      md: gh(cont.archivo), quizMd: existe(quiz.archivo) ? gh(quiz.archivo) : null,
      doc: docUrl(driveIds.docs_por_ae?.[id]), pdf: enCarpeta(driveIds.pdf, `${id}.pdf`),
      porAe: existe('entregables', 'por-ae', `${id}.html`) ? `entregables/por-ae/${id}.html` : null,
      quizJuego: existe('entregables', 'quiz', id, `${id}-Quiz-Juego.html`) ? `entregables/quiz/${id}/${id}-Quiz-Juego.html` : null,
      scorm: existe('entregables', 'quiz', id, `${id}-Quiz-Juego-SCORM.zip`) ? `entregables/quiz/${id}/${id}-Quiz-Juego-SCORM.zip` : null,
      gift: existe('entregables', 'quiz', id, `${id}-Quiz-Moodle.gift`) ? `entregables/quiz/${id}/${id}-Quiz-Moodle.gift` : null,
      scormDrive: enCarpeta(driveIds.quiz_scorm, `${id}-Quiz-Juego-SCORM.zip`),
    },
    auditoria: chequeos.filter(k => k.id === `C2.${id}` || k.id === `C3.${id}`).map(k => ({ id: k.id, titulo: k.titulo, estado: k.estado, mensajes: mensajes(k) })),
  };
}
// Fuentes de casos que cite el contenido (desde el 28-10 el contenido no cita casos)
for (const a of AES) {
  const archivo = `contenido/${a.id.split('-')[0]}/${a.id}.md`;
  if (!existe(archivo)) continue;
  for (const f of new Set(leer(archivo).match(/F-M\dC\d-\d+/g) || [])) if (FUENTE[f] && !FUENTE[f].citadaEn.some(x => x.ae === a.id)) FUENTE[f].citadaEn.push({ ae: a.id, pantalla: null });
}

// ---------- casos e hitos ----------
const casos = TODOS_CASOS.map(c => {
  const ficha = existe('investigacion', 'casos', `${c.id}.md`) ? leer('investigacion', 'casos', `${c.id}.md`) : null;
  const titulo = existe('casos', `${c.id}.md`) ? /^# (.+)$/m.exec(leer('casos', `${c.id}.md`))?.[1]?.trim() : null;
  const fuentes = ficha ? [...ficha.matchAll(/^###\s+(F-[A-Z0-9]+-\d+)\b/gm)].map(x => x[1]) : [];
  return {
    id: c.id, tipo: c.tipo, modulo: c.modulo, tituloPlanilla: c.titulo, titulo: titulo || c.titulo, aes: aesDe(c.aes), descripcion: c.descripcion,
    entregable: c.entregable, verificacionPlanilla: c.verificacion,
    estado: ficha ? /^Estado:\s*(.+)$/m.exec(ficha)?.[1]?.trim() || '' : null,
    fuentes, primarias: ficha ? (ficha.match(/^- Tipo:\s*primaria/gmi) || []).length : 0,
    enlaces: c.tipo !== 'Caso de aplicación' ? {} : {
      md: existe('casos', `${c.id}.md`) ? gh(`casos/${c.id}.md`) : null, ficha: ficha ? gh(`investigacion/casos/${c.id}.md`) : null,
      html: existe('entregables', 'casos', 'html', `${c.id}.html`) ? `entregables/casos/html/${c.id}.html` : null,
      doc: docUrl(driveIds.docs_por_caso?.[c.id]), pdf: enCarpeta(driveIds.casos_pdf, `${c.id}.pdf`),
    },
    auditoria: chequeos.filter(k => k.id === `C5.${c.id}`).map(k => ({ id: k.id, estado: k.estado, mensajes: mensajes(k) })),
  };
});

// ---------- recursos (planilla + estado según el repo) ----------
const recursos = RECURSOS.map(r => {
  const p = recursosPlanilla[r.id] || {};
  const a = avance[r.id] || {};
  return { id: r.id, modulo: r.modulo, orden: r.orden, tipo: r.tipo, titulo: r.titulo, aes: aesDe(r.aes), minutos: r.minutos, formato: r.formato,
    cuentaHoras: p['Cuenta en horas'] || '', responsable: p.Responsable || '', estadoPlanilla: p.Estado || '',
    estado: a.estado || 'Pendiente', nota: a.nota || '' };
});

// ---------- infografías ----------
const infografias = MODULOS.map(m => {
  const j = existe('infografias', `M${m.n}.json`) ? json('infografias', `M${m.n}.json`) : null;
  const base = `entregables/infografias/M${m.n}-Infografia`;
  return { modulo: m.n, recurso: j?.recurso || null, titulo: j?.titulo || null, tipo: j?.tipo || null,
    png: existe(`${base}.png`) ? `${base}.png` : null, html: existe(`${base}.html`) ? `${base}.html` : null,
    json: j ? gh(`infografias/M${m.n}.json`) : null, drive: enCarpeta(driveIds.infografias, `M${m.n}-Infografia.png`) };
});

// ---------- pendientes de verificación (docs/PENDIENTES-VERIFICACION.md) ----------
const verificacion = [];
if (existe('docs', 'PENDIENTES-VERIFICACION.md')) {
  let grupo = '';
  for (const l of leer('docs', 'PENDIENTES-VERIFICACION.md').split('\n')) {
    const g = /^## \d+\.\s*(.+)$/.exec(l);
    if (g) { grupo = g[1].trim(); continue; }
    const f = /^\|\s*([HNF]\d+)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/.exec(l);
    if (f) verificacion.push({ grupo, id: f[1], que: f[2], pantallas: f[3], marcado: f[4] });
  }
}

// ---------- documentos (flujo, reglas, formatos, skills) ----------
const DOCS = [
  ['Flujo y reglas', 'WORKFLOW.md', 'Workflow: orden de trabajo y reglas'],
  ['Flujo y reglas', 'docs/PROCESO.md', 'Proceso de producción y publicación'],
  ['Flujo y reglas', 'PLAYBOOK-PRODUCCION.md', 'Playbook: qué pide la planilla'],
  ['Formatos', 'FORMATO-CONTENIDO-BASE.md', 'Formato del contenido base'],
  ['Formatos', 'docs/FORMATO-QUIZ.md', 'Formato del quiz'],
  ['Formatos', 'docs/FORMATO-INFOGRAFIA.md', 'Formato de las infografías'],
  ['Formatos', 'docs/FORMATO-CASO.md', 'Formato de los casos'],
  ['Formatos', 'docs/PERSONAJES.md', 'Personajes recurrentes'],
  ['Formatos', 'docs/BRIEF-REDACCION.md', 'Brief de redacción'],
  ['Revisión', 'docs/CORRESPONDENCIA.md', 'Correspondencia con la planilla'],
  ['Revisión', 'docs/CORRESPONDENCIA-FONDO.md', 'Revisión de fondo por AE'],
  ['Revisión', 'docs/PENDIENTES-VERIFICACION.md', 'Pendientes de verificación'],
  ['Revisión', 'docs/AUDITORIA.md', 'Auditoría (texto)'],
  ['Revisión', 'docs/LEEME-DRIVE.md', 'Léeme de la carpeta de Drive'],
  ...(existe('.claude', 'skills') ? fs.readdirSync(rel('.claude', 'skills')).filter(s => existe('.claude', 'skills', s, 'SKILL.md')).sort()
    .map(s => ['Skills de Claude', `.claude/skills/${s}/SKILL.md`, `Skill ${s}`]) : []),
].filter(([, ruta]) => existe(ruta));
const slug = ruta => ruta.replace(/^\.claude\/skills\//, 'skill-').replace(/\/SKILL\.md$/, '').replace(/\.md$/, '').replace(/[^\w-]+/g, '-').toLowerCase();
const documentos = DOCS.map(([grupo, ruta, titulo]) => ({ id: slug(ruta), grupo, ruta, titulo, github: gh(ruta) }));

// ---------- metodología: pasos del flujo, con su regla, su script y su control ----------
const nFuentes = FUENTES.filter(f => f.grupo === 'contenido').length;
const nPantallas = Object.values(aes).reduce((s, a) => s + a.pantallas.length, 0);
const nPreguntas = Object.values(aes).reduce((s, a) => s + a.quiz.preguntas.length, 0);
const casosApl = casos.filter(c => c.tipo === 'Caso de aplicación');
const doc = ruta => documentos.find(d => d.ruta === ruta)?.id || null;
const metodologia = [
  { n: 0, id: 'planilla', nombre: 'Planilla', rol: 'Fuente de verdad',
    que: 'La planilla «Estructura_inicial_contenido_IA_generativa» define módulos, AE, saberes (S/H/A), criterios (C), recursos y horas. Se baja como TSV por hoja y se convierte en data/curso.json, que leen todos los scripts.',
    entra: ['Planilla de Google (10 hojas)'], sale: ['data/planilla/*.xlsx', 'data/planilla/*.tsv', 'data/curso.json'], script: 'scripts/importar-planilla.mjs',
    regla: doc('PLAYBOOK-PRODUCCION.md'), skill: 'curso-produccion', capa: 'C0', vista: 'planilla',
    cifra: `${MODULOS.length} módulos · ${AES.length} AE · ${RECURSOS.length} recursos` },
  { n: 1, id: 'investigacion', nombre: 'Investigación', rol: 'Evidencia',
    que: 'Cada afirmación de hecho se respalda en una fuente abierta y leída: normativa y organismos públicos, ayuda oficial de las herramientas, academia y prensa con fecha. Cada fuente dice qué respalda y para qué códigos sirve.',
    entra: ['data/curso.json'], sale: ['investigacion/M<n>.md', 'investigacion/HERRAMIENTAS-*.md'], script: null,
    regla: doc('WORKFLOW.md'), skill: 'curso-contenido-base', capa: 'C1', vista: 'fuentes', cifra: `${nFuentes} fuentes` },
  { n: 2, id: 'contenido', nombre: 'Contenido base', rol: 'Pantallas por AE',
    que: 'Cada AE se redacta en pantallas (Pnn). Cada pantalla declara qué códigos de la planilla cubre (cubre:), qué fuentes cita (fuentes:) y qué bloque de Rise usa (bloque:). Todos los códigos quedan cubiertos.',
    entra: ['data/curso.json', 'investigacion/'], sale: ['contenido/M<n>/M<n>-AE<k>.md'], script: 'scripts/validar-contenido.mjs',
    regla: doc('FORMATO-CONTENIDO-BASE.md'), skill: 'curso-contenido-base', capa: 'C2', vista: 'trazabilidad', cifra: `${nPantallas} pantallas` },
  { n: 3, id: 'quiz', nombre: 'Quiz formativo', rol: 'Evaluación por AE',
    que: 'Ocho preguntas por AE. Cada una se etiqueta con los códigos que evalúa y la pantalla a la que remite si se responde mal (acción remedial). Se genera el juego en SCORM 1.2, HTML sin LMS y GIFT para Moodle.',
    entra: ['quiz/M<n>-AE<k>.md', 'contenido/'], sale: ['entregables/quiz/<AE>/'], script: 'scripts/quiz-juego.mjs',
    regla: doc('docs/FORMATO-QUIZ.md'), skill: 'curso-quiz-infografias', capa: 'C3', vista: 'matriz', cifra: `${nPreguntas} preguntas` },
  { n: 4, id: 'infografias', nombre: 'Infografías', rol: 'Una por módulo',
    que: 'Una infografía por módulo, con el recurso y el título de la planilla. Cada bloque remite a las pantallas donde se trabaja el tema. Se genera en HTML y PNG.',
    entra: ['infografias/M<n>.json'], sale: ['entregables/infografias/'], script: 'scripts/infografias.mjs',
    regla: doc('docs/FORMATO-INFOGRAFIA.md'), skill: 'curso-quiz-infografias', capa: 'C4', vista: 'recursos', cifra: `${infografias.filter(i => i.png).length} infografías` },
  { n: 5, id: 'casos', nombre: 'Casos reales', rol: 'Empresas verificadas',
    que: 'Cada caso con empresa real se verifica en fuente primaria (ficha con hechos verificados y lo que no se puede afirmar) y luego se redacta para el estudiante. Son un recurso aparte: desde el 28-10 el contenido base, los quiz, las infografías y los videos no los nombran, para que cambiar un caso no obligue a cambiar todo.',
    entra: ['Hoja «Casos y proyecto»'], sale: ['investigacion/casos/', 'casos/', 'entregables/casos/'], script: 'scripts/validar-casos.mjs',
    regla: doc('docs/FORMATO-CASO.md'), skill: 'curso-casos-reales', capa: 'C5', vista: 'casos', cifra: `${casosApl.length} casos` },
  { n: 6, id: 'compilacion', nombre: 'Docs y PDF', rol: 'Documentos para revisar',
    que: 'El contenido de cada AE se compila en un Google Doc, una página HTML y un PDF, más un documento completo con los 22 AE. Es lo que revisa el equipo y lo que usa Natalia para armar los Rise.',
    entra: ['contenido/', 'casos/'], sale: ['entregables/docs/', 'entregables/por-ae/', 'entregables/pdf/'], script: 'scripts/compilar-contenidos.mjs',
    regla: doc('docs/PROCESO.md'), skill: 'curso-produccion', capa: 'C6', vista: 'matriz', cifra: `${AES.length} Docs + PDF` },
  { n: 7, id: 'revision', nombre: 'Revisión de fondo', rol: 'Calidad pedagógica',
    que: 'Se revisa cada AE con seis preguntas (texto del AE, saberes, criterios, técnica, Bloom, audiencia) y se registra lo que falta probar a mano antes de publicar.',
    entra: ['contenido/', 'quiz/'], sale: ['docs/CORRESPONDENCIA-FONDO.md', 'docs/PENDIENTES-VERIFICACION.md'], script: 'scripts/correspondencia.mjs',
    regla: doc('docs/CORRESPONDENCIA-FONDO.md'), skill: 'curso-auditoria', capa: 'C7', vista: 'pendientes', cifra: `${verificacion.length} por probar` },
  { n: 8, id: 'drive', nombre: 'Publicación en Drive', rol: 'Copia para el equipo',
    que: 'Los entregables se suben a la carpeta del curso en Drive, ordenada del 1 al 9. Las versiones reemplazadas se mueven a «Versiones anteriores», nunca se borran. Los ids quedan en data/drive.json.',
    entra: ['entregables/'], sale: ['Carpeta de Drive', 'data/drive.json', 'data/drive-inventario.json'], script: null,
    regla: doc('docs/LEEME-DRIVE.md'), skill: 'curso-drive', capa: 'C8', vista: null, cifra: `${Object.keys(inventario.carpetas).length} carpetas` },
  { n: 9, id: 'auditoria', nombre: 'Auditoría y avance', rol: 'Control final',
    que: 'Un verificador revisa en 10 capas todo lo producido contra la planilla: estructura, cobertura de códigos, fuentes, quiz, casos, documentos, Drive y avance de los 101 recursos.',
    entra: ['Todo el repo'], sale: ['entregables/auditoria/', 'docs/AUDITORIA.md'], script: 'scripts/auditar.mjs',
    regla: doc('docs/AUDITORIA.md'), skill: 'curso-auditoria', capa: 'C9', vista: 'auditoria', cifra: auditoria ? `${auditoria.resumen.chequeos} chequeos` : '' },
].map(p => ({ ...p, control: p.capa ? estadoCapa(p.capa) : null, scriptUrl: p.script ? gh(p.script) : null,
  skillUrl: p.skill ? gh(`.claude/skills/${p.skill}/SKILL.md`) : null }));

// ---------- módulos ----------
const modulos = MODULOS.map(m => ({
  n: m.n, nombre: m.nombre, competencia: m.competencia, aes: m.aes.map(a => a.id),
  minutos: recursos.filter(r => r.modulo === m.n && /^S/i.test(r.cuentaHoras)).reduce((s, r) => s + r.minutos, 0),
  infografia: infografias.find(i => i.modulo === m.n),
}));

// ---------- salida ----------
const datos = {
  generado: new Date().toISOString(),
  repo: REPO, planilla: PLANILLA, drive: carpetaUrl(driveIds.carpeta?.id),
  curso: { titulo: curso.titulo },
  cifras: { modulos: MODULOS.length, aes: AES.length, pantallas: nPantallas, fuentes: nFuentes, fuentesCasos: FUENTES.length - nFuentes,
    preguntas: nPreguntas, casos: casosApl.length, hitos: casos.length - casosApl.length, recursos: recursos.length,
    minutos: recursos.filter(r => /^S/i.test(r.cuentaHoras)).reduce((s, r) => s + r.minutos, 0) },
  metodologia, planillaInfo: planilla, modulos, aes, recursos, casos, infografias, evaluacion, fuentes: FUENTES,
  pendientes: { verificacion, planilla: pendPlanilla },
  auditoria: auditoria && { resumen: auditoria.resumen, informe: existe('entregables', 'auditoria', 'AUDITORIA.html') ? 'entregables/auditoria/AUDITORIA.html' : null,
    capas: auditoria.capas.map(c => ({ id: c.id, titulo: c.titulo, explica: c.explica, control: estadoCapa(c.id),
      chequeos: c.chequeos.map(k => ({ id: k.id, titulo: k.titulo, porque: k.porque, estado: k.estado, mensajes: mensajes(k), evidencia: k.evidencia })) })) },
  driveCarpetas: Object.entries(inventario.carpetas).filter(([, c]) => !/^Versiones anteriores/.test(c.titulo))
    .map(([id, c]) => ({ id, titulo: c.titulo, padre: c.padre, url: carpetaUrl(id), archivos: c.archivos.filter(f => !f.mimeType.includes('folder')).length }))
    .sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { numeric: true })),
  documentos,
};

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'docs'), { recursive: true });
for (const f of ['index.html', 'app.js', 'estilos.css']) fs.copyFileSync(path.join(RAIZ, 'panel', 'src', f), path.join(DIST, f));
fs.writeFileSync(path.join(DIST, 'datos.json'), JSON.stringify(datos));
for (const d of documentos) fs.writeFileSync(path.join(DIST, 'docs', `${d.id}.html`), marked.parse(leer(d.ruta).replace(/^---\n[\s\S]*?\n---\n/, '')));
// Entregables que se pueden abrir o jugar desde el panel
for (const dir of ['quiz', 'infografias', 'por-ae', 'casos/html', 'auditoria'])
  if (existe('entregables', dir)) fs.cpSync(rel('entregables', dir), path.join(DIST, 'entregables', dir), { recursive: true });
// La planilla de origen, para descargarla desde el panel
if (planilla.xlsx) { fs.mkdirSync(path.join(DIST, 'planilla'), { recursive: true }); fs.copyFileSync(rel('data', 'planilla', XLSX), path.join(DIST, 'planilla', XLSX)); }

const kb = Math.round(fs.statSync(path.join(DIST, 'datos.json')).size / 1024);
console.log(`✓ panel/dist · ${AES.length} AE · ${nPantallas} pantallas · ${nPreguntas} preguntas · ${FUENTES.length} fuentes · ${recursos.length} recursos · ${documentos.length} documentos · datos.json ${kb} KB`);
