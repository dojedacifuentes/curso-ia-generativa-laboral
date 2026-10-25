// Quiz formativo por AE como juego (HTML que funciona sin internet + paquete SCORM 1.2 + GIFT para Moodle).
// Fuente: quiz/M<n>-AE<k>.md (formato en docs/FORMATO-QUIZ.md). Plantilla: scripts/lib/quiz-juego.html (viene de la
// licitación TD 2026, adaptada a 8 niveles y a la acción remedial «Repasa: pantalla Pxx»).
//
//   node scripts/quiz-juego.mjs                 todos los quiz que existan
//   node scripts/quiz-juego.mjs M1-AE1 M1-AE2   solo esos
//   node scripts/quiz-juego.mjs --solo-validar  revisa las fuentes sin escribir nada
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { crearZip } from './lib/zip.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const AES = Object.fromEntries(curso.modulos.flatMap(m => m.aes.map(a => [a.id, { ...a, modulo: m }])));
const ITEMS = 8;
const ICONOS = 'estrella ok mal play repetir bandera niveles combo bateria comodin sonido silencio candado trofeo diana escudo escalar doc engranaje bd entrada transformar salida paquete rombo ruta bicho enviar chip llaves chat chispa numeral barras on'.split(' ');
const FECHA_ZIP = new Date(2026, 9, 24, 12, 0, 0);
const FUENTES = [
  ['Plex Sans', 400, 'ibm-plex-sans-latin-400-normal.woff2'], ['Plex Sans', 600, 'ibm-plex-sans-latin-600-normal.woff2'],
  ['Plex Sans', 700, 'ibm-plex-sans-latin-700-normal.woff2'], ['Plex Mono', 400, 'ibm-plex-mono-latin-400-normal.woff2'],
  ['Plex Mono', 600, 'ibm-plex-mono-latin-600-normal.woff2'], ['Plex Mono', 700, 'ibm-plex-mono-latin-600-normal.woff2'],
];

const plano = t => t.replace(/\*\*|`/g, '').replace(/(^|\s)\*([^*]+)\*/g, '$1$2').trim();

// Títulos de pantalla del contenido base: P01 → «Qué vas a lograr en este tema»
function pantallas(id) {
  const md = fs.readFileSync(path.join(RAIZ, 'contenido', id.split('-')[0], `${id}.md`), 'utf8');
  return Object.fromEntries([...md.matchAll(/^## (P\d\d) · (.+)$/gm)].map(m => [m[1], m[2].trim()]));
}

function leerQuiz(id) {
  const archivo = `quiz/${id}.md`;
  const ae = AES[id];
  if (!ae) throw new Error(`${archivo}: ${id} no existe en la planilla`);
  const md = fs.readFileSync(path.join(RAIZ, archivo), 'utf8').replace(/\r\n/g, '\n');
  const err = m => { throw new Error(`${archivo}: ${m}`); };
  const campo = n => (new RegExp(`^\\*\\*${n}:\\*\\*\\s*(.+)$`, 'm').exec(md) || err(`falta «**${n}:** …»`))[1].trim();
  const mision = plano(campo('Misión')).replace(/\.$/, '');
  const cuando = plano(campo('Cuándo'));
  const ins = /^\*\*Insignia:\*\*\s*(.+?)\s*·\s*\*\*Siguiente parada:\*\*\s*(.+)$/m.exec(md) || err('falta «**Insignia:** … · **Siguiente parada:** …»');
  const est = /^\*\*Estilo:\*\*\s*acento (#[0-9a-fA-F]{6})\s*·\s*acento2 (#[0-9a-fA-F]{6})\s*·\s*fondo (circuito|neuronas)\s*·\s*lema (.+)$/m.exec(md)
    || err('falta «**Estilo:** acento #rrggbb · acento2 #rrggbb · fondo circuito|neuronas · lema …»');
  const ilu = /^\*\*Ilustración:\*\*\s*(flujo|chat)\s*\|\s*(.+)$/m.exec(md) || err('falta «**Ilustración:** flujo|chat | Etiqueta (icono) · … (3 nodos)»');
  const nodos = ilu[2].split(/\s*·\s*/).map(n => /^(.+?)\s*\((\w+)\)$/.exec(n) || err(`nodo de ilustración mal escrito: «${n}»`)).map(m => [m[1], m[2]]);
  if (nodos.length !== 3) err('la ilustración lleva exactamente 3 nodos');
  for (const [, ico] of nodos) if (!ICONOS.includes(ico)) err(`ícono «${ico}» no existe (usa: ${ICONOS.join(', ')})`);

  const pant = pantallas(id);
  const codigos = new Set([...ae.saber, ...ae.saber_hacer, ...ae.saber_ser, ...ae.criterios].map(c => c.codigo));
  const bloques = md.split(/^(?=\d+\. )/m).slice(1);
  if (bloques.length !== ITEMS) err(`trae ${bloques.length} preguntas y deben ser ${ITEMS}`);
  const usados = new Set();
  const preguntas = bloques.map((b, k) => {
    const n = k + 1;
    const cab = /^\d+\.\s*\*\(([^)]+)\)\*\s*([\s\S]+?)\n\s*- /.exec(b) || err(`pregunta ${n}: debe empezar con «${n}. *(C1 · S2 · P05)* enunciado»`);
    const etiquetas = cab[1].split(/\s*·\s*/);
    const p = etiquetas.find(e => /^P\d\d$/.test(e)) || err(`pregunta ${n}: falta la pantalla a la que remite (Pnn)`);
    if (!pant[p]) err(`pregunta ${n}: la pantalla ${p} no existe en contenido/${id}`);
    const cods = etiquetas.filter(e => e !== p);
    if (!cods.length) err(`pregunta ${n}: falta al menos un código S/H/A/C`);
    for (const c of cods) { if (!codigos.has(c)) err(`pregunta ${n}: el código ${c} no es de ${id}`); usados.add(c); }
    const opciones = [...b.matchAll(/^\s*- (\*\*)?[a-d]\)\s*(.+?)(\*\*)?\s*$/gm)].map(m => ({ texto: plano(m[2]), ok: !!m[1] }));
    if (opciones.length < 2 || opciones.length > 4) err(`pregunta ${n}: tiene ${opciones.length} alternativas (2 a 4)`);
    const correctas = opciones.filter(o => o.ok).length;
    if (correctas !== 1) err(`pregunta ${n}: tiene ${correctas} correctas (debe ser 1, en negrita)`);
    const retro = /\*Retroalimentación:\*\s*([\s\S]+?)\s*$/.exec(b) || err(`pregunta ${n}: falta «*Retroalimentación:* …»`);
    return {
      ae: id, codigos: cods, pantalla: p,
      enunciado: plano(cab[2].replace(/\s+/g, ' ')),
      opciones: opciones.map(o => o.texto), correcta: opciones.findIndex(o => o.ok),
      retro: plano(retro[1].replace(/\s+/g, ' ')),
      remite: `Pantalla ${p} del ${ae.rise.replace(/ · .*/, '')}: «${pant[p]}».`,
    };
  });
  for (const c of ae.criterios) if (!usados.has(c.codigo)) err(`ninguna pregunta evalúa el criterio ${c.codigo}`);
  return {
    id, ae, mision, cuando, insignia: plano(ins[1]).replace(/\.$/, ''), siguiente: plano(ins[2]).replace(/\.$/, ''),
    estilo: { fondo: est[3], acento: est[1], acento2: est[2], lema: plano(est[4]), heroe: { tipo: ilu[1], nodos } }, preguntas,
  };
}

const fuentesCss = FUENTES.map(([fam, peso, f]) => `@font-face{font-family:"${fam}";font-style:normal;font-weight:${peso};font-display:swap;src:url(data:font/woff2;base64,${fs.readFileSync(path.join(RAIZ, 'scripts', 'fuentes', f)).toString('base64')}) format("woff2")}`).join('\n');
const plantilla = fs.readFileSync(path.join(RAIZ, 'scripts', 'lib', 'quiz-juego.html'), 'utf8');
const xml = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const manifiesto = (id, titulo) => `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${id}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata><schema>ADL SCORM</schema><schemaversion>1.2</schemaversion></metadata>
  <organizations default="ORG-${id}">
    <organization identifier="ORG-${id}"><title>${xml(titulo)}</title>
      <item identifier="ITEM-${id}" identifierref="RES-${id}" isvisible="true"><title>${xml(titulo)}</title></item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="RES-${id}" type="webcontent" adlcp:scormtype="sco" href="index.html"><file href="index.html"/></resource>
  </resources>
</manifest>
`;
// GIFT: escapar ~ = # { } : \ y dejar <, >, & como entidades
const gesc = t => t.replace(/\\/g, '\\\\').replace(/([~=#{}:])/g, '\\$1').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const gift = q => `// ${q.id} · ${q.ae.tema} · quiz formativo (generado por scripts/quiz-juego.mjs)\n$CATEGORY: IA-generativa-laboral/Formativos/${q.id}\n\n`
  + q.preguntas.map((p, k) => `::${q.id}-P${k + 1} (${p.codigos.join(' ')})::${gesc(p.enunciado)} {\n`
    + p.opciones.map((o, i) => `${i === p.correcta ? '=' : '~'}${gesc(o)}`).join('\n') + `\n####${gesc(p.retro + ' ' + p.remite)}\n}\n`).join('\n');

const args = process.argv.slice(2);
const soloValidar = args.includes('--solo-validar');
const pedidos = args.filter(a => !a.startsWith('--'));
const disponibles = fs.existsSync(path.join(RAIZ, 'quiz')) ? fs.readdirSync(path.join(RAIZ, 'quiz')).filter(f => /^M\d-AE\d\.md$/.test(f)).map(f => f.slice(0, -3)) : [];
const ids = pedidos.length ? pedidos : disponibles.sort();
let fallas = 0;
for (const id of ids) {
  let q;
  try { q = leerQuiz(id); } catch (e) { console.log(`✗ ${e.message}`); fallas++; continue; }
  if (soloValidar) { console.log(`✓ quiz/${id}.md · ${q.preguntas.length} preguntas · insignia «${q.insignia}»`); continue; }
  const datos = { curso: id, cursoNombre: curso.titulo, modulo: q.ae.modulo.n, quiz: q.ae.id, tema: q.ae.tema, aes: q.ae.id, mision: q.mision,
    cuando: q.cuando, insignia: q.insignia, siguiente: q.siguiente, estilo: q.estilo, preguntas: q.preguntas };
  const titulo = `${id} · ${q.ae.tema} · Quiz formativo`;
  const pagina = plantilla.replace('__TITULO__', () => xml(titulo)).replace('/*FUENTES*/', () => fuentesCss)
    .replace('/*DATA*/', () => JSON.stringify(datos).replace(/</g, '\\u003c'));
  const dir = path.join(RAIZ, 'entregables', 'quiz', id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${id}-Quiz-Juego.html`), pagina);
  const zip = crearZip([{ nombre: 'imsmanifest.xml', contenido: manifiesto(`${id}-QUIZ-JUEGO`, titulo) }, { nombre: 'index.html', contenido: pagina }], { fecha: FECHA_ZIP });
  fs.writeFileSync(path.join(dir, `${id}-Quiz-Juego-SCORM.zip`), zip);
  fs.writeFileSync(path.join(dir, `${id}-Quiz-Moodle.gift`), gift(q));
  console.log(`✓ ${id} · ${q.preguntas.length} preguntas · HTML ${Math.round(Buffer.byteLength(pagina) / 1024)} KB · SCORM ${Math.round(zip.length / 1024)} KB`);
}
if (fallas) process.exit(1);
