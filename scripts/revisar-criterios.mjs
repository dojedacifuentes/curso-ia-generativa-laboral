// Revisa los criterios del 28-10 (docs/CRITERIOS-28-10.md) en todo lo que ve el estudiante:
// audiencia solo de personas que trabajan, sin mención a los casos fuera de casos/, máximo 2 fuentes y 1 recuadro por pantalla,
// y un estilo con menos listas, tablas y negritas.
// Uso: node scripts/revisar-criterios.mjs [M1 | M1-AE1 …]   (sin argumentos: todo)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const TEXTOS_PLANILLA = curso.modulos.flatMap(m => m.aes.flatMap(a => [a.texto, ...a.saber_hacer.map(h => h.texto)]));

// Quien estudia busca trabajo o no trabaja
const AUDIENCIA = /cesant|desemplead|búsqueda de (trabajo|empleo)|\bbusca(s|ndo)? (un )?(trabajo|empleo)|si buscas\b|al que aspir|\baspiras\b|no trabajas|no tienes (trabajo|empleo)|sin (un )?empleo actual|\bpostulas\b|\bpostular\b|tu postulación|tus postulaciones|carta de presentación|para empleadores|entrevista de trabajo|avisos? de empleo|bolsa de empleo|cuando consigas/i;
// Pide revisión a mano: puede ser una tarea de RR. HH. (válida) o quien estudia como postulante (no va)
const AUDIENCIA_REVISAR = /postula|currículum|curriculum|\bCV\b|entrevista|empleador/i;
// Casos de empresas reales: solo en casos/
const CASOS = /Morgan Stanley|Avianca|Air Canada|Octopus|Vodafone|Deloitte|Eindhoven|Coca-Cola|Johansson|Getty|Stability AI|Klarna|Duolingo|Samsung|\bM\d-C\d\b|F-M\dC\d-\d+|caso real|casos? del módulo|casos? de aplicación|siguiente parada:[^\n]*caso/i;
const NOMBRES_CASOS = /Morgan Stanley|Avianca|Air Canada|Octopus|Vodafone|Deloitte|Eindhoven|Coca-Cola|Johansson|Getty|Stability AI|Klarna|Duolingo|Samsung|Md-Cd/i;

const filtro = process.argv.slice(2);
const pasa = id => !filtro.length || filtro.some(f => id.startsWith(f));
const leer = f => fs.readFileSync(f, 'utf8');
const listar = (dir, ext) => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(ext)).map(f => path.join(dir, f)) : [];
const sinPlanilla = t => TEXTOS_PLANILLA.reduce((s, x) => s.split(x).join(' '), t);

let errores = 0, avisos = 0;
const out = [];
function revisarTexto(id, texto, { casos = true, audiencia = true } = {}) {
  const res = [];
  sinPlanilla(texto).split('\n').forEach((linea, k) => {
    if (audiencia && AUDIENCIA.test(linea)) res.push(['error', `línea ${k + 1}: audiencia («${linea.match(AUDIENCIA)[0]}»)`]);
    else if (audiencia && AUDIENCIA_REVISAR.test(linea)) res.push(['aviso', `línea ${k + 1}: revisar audiencia («${linea.match(AUDIENCIA_REVISAR)[0]}»)`]);
    // Los foros pueden decir que ahí se responde la pregunta de los casos, pero sin nombrarlos (casos: 'nombres')
    const re = casos === 'nombres' ? NOMBRES_CASOS : CASOS;
    if (casos && re.test(linea)) res.push(['error', `línea ${k + 1}: menciona un caso («${linea.match(re)[0]}»)`]);
  });
  return res;
}

// Contenido base
for (const f of listar(path.join(RAIZ, 'contenido'), '').flatMap(d => listar(d, '.md'))) {
  const id = path.basename(f, '.md');
  if (!pasa(id)) continue;
  const md = leer(f);
  const res = revisarTexto(id, md.split(/^## Fuentes/m)[0]);
  for (const p of md.split(/^## /m).slice(1).filter(b => /^P\d{2} · /.test(b))) {
    const t = p.split('\n')[0].slice(0, 3);
    const fu = /^fuentes:[ \t]*(.+)$/m.exec(p);
    const nf = fu ? fu[1].split(/,\s*/).filter(Boolean).length : 0;
    if (nf > 2) res.push(['error', `${t}: ${nf} fuentes (máximo 2)`]);
    const cuerpo = p.replace(/^.*\n/, '').replace(/^(cubre|bloque|fuentes):.*$/gm, '');
    const recuadros = (cuerpo.match(/^:::[a-z]/gm) || []).length;
    if (recuadros > 1) res.push(['error', `${t}: ${recuadros} recuadros (máximo 1)`]);
    const lineas = cuerpo.split('\n');
    const grupos = re => lineas.filter((l, k) => re.test(l) && !re.test(lineas[k - 1] ?? '')).length;
    const listas = grupos(/^\s*(- |\d+\. )/) - (cuerpo.match(/^:::comprueba/m) ? 1 : 0);
    if (listas > 1) res.push(['aviso', `${t}: ${listas} listas (máximo 1)`]);
    if (grupos(/^\|/) > 1) res.push(['aviso', `${t}: más de 1 tabla`]);
    const rotulos = lineas.filter(l => /^\s*(- |\d+\. )\*\*[^*]+:\*\*/.test(l)).length;
    if (rotulos) res.push(['aviso', `${t}: ${rotulos} viñetas con rótulo en negrita`]);
    const negritas = (cuerpo.replace(/^- \*\*[a-d]\)/gm, '').match(/\*\*[^*]+\*\*/g) || []).length;
    if (negritas > 3) res.push(['aviso', `${t}: ${negritas} negritas (máximo 2)`]);
    if (/^\*\*[^*]+:\*\*/m.test(cuerpo)) res.push(['aviso', `${t}: rótulo en negrita al comienzo de línea`]);
  }
  out.push([`contenido ${id}`, res]);
}

// Quiz, infografías, guiones de video
for (const f of listar(path.join(RAIZ, 'quiz'), '.md')) {
  const id = path.basename(f, '.md');
  if (pasa(id)) out.push([`quiz ${id}`, revisarTexto(id, leer(f))]);
}
for (const f of listar(path.join(RAIZ, 'infografias'), '.json')) {
  const id = path.basename(f, '.json');
  if (pasa(id)) out.push([`infografía ${id}`, revisarTexto(id, leer(f))]);
}
for (const d of listar(path.join(RAIZ, 'videos'), '')) {
  const g = path.join(d, 'guion.md');
  const id = path.basename(d);
  if (fs.existsSync(g) && pasa(id)) out.push([`guion ${id}`, revisarTexto(id, leer(g))]);
}
// Vista del estudiante (criterios 30-10): ni códigos internos ni remisiones a pantallas o secciones
function vistaEstudiante(t, donde) {
  const r = [];
  const cod = t.match(/\bM\d-(?:AE|T|C)\d\b|\bP[01]\d\b(?! (?:tiene|da|de|en K))|\bpantallas? \d+|\bF-[A-Z0-9]+-\d+\b(?!\])/g);
  if (cod) r.push(['error', `${donde}: códigos a la vista: ${[...new Set(cod)].join(' ')}`]);
  const rem = t.match(/la sección «|en la pantalla|como viste en (?:el|la) (?:tema|módulo|sección)/gi);
  if (rem) r.push(['error', `${donde}: remisión: ${[...new Set(rem)].join(' · ')}`]);
  return r;
}
// Actividades de aplicación práctica (criterios 29-10): audiencia, sin casos, 2 por AE, marcas = «fuentes:»
const marcas = t => [...t.matchAll(/\[n?@([^\]]+)\]/g)].flatMap(m => m[1].split(/;\s*@?/).map(x => x.replace(/^@/, '').trim()));
for (const f of listar(path.join(RAIZ, 'actividades'), '.md')) {
  const id = path.basename(f, '.md');
  if (!pasa(id)) continue;
  const md = leer(f);
  const res = revisarTexto(id, md.split(/^## Referencias bibliográficas/m)[0]);
  const acts = md.split(/^## (?:Actividad|Autoevaluación) \d/m).slice(1);
  if (acts.length !== 2) res.push(['error', `${acts.length} actividades (deben ser 2)`]);
  acts.forEach((a, k) => {
    const fu = /^fuentes:[ \t]*(.+)$/m.exec(a);
    const enLinea = new Set(fu ? fu[1].split(/,\s*/).filter(Boolean) : []), enTexto = new Set(marcas(a));
    for (const x of enLinea) if (!enTexto.has(x)) res.push(['error', `actividad ${k + 1}: ${x} sin marca en el texto`]);
    for (const x of enTexto) if (!enLinea.has(x)) res.push(['error', `actividad ${k + 1}: la marca [@${x}] no está en «fuentes:»`]);
    if (!/^cubre:\s*\S/m.test(a)) res.push(['error', `actividad ${k + 1}: falta «cubre:»`]);
    // Criterios 30-10: instrucción general, rúbrica visible (pesos 100 %) y entrega en foro (act. 1) o tarea (act. 2)
    for (const s of ['Instrucción general', 'Situación', 'Lo que vas a hacer', 'Lo que entregas', 'Rúbrica']) if (!new RegExp(`^### ${s}`, 'm').test(a)) res.push(['error', `actividad ${k + 1}: falta «### ${s}»`]);
    if (/^### Cómo se revisa/m.test(a)) res.push(['error', `actividad ${k + 1}: «Cómo se revisa» va en la guía del facilitador`]);
    const ent = (/^entrega:\s*(\w+)/m.exec(a) || [])[1];
    if (ent !== (k === 0 ? 'foro' : 'tarea')) res.push(['error', `actividad ${k + 1}: «entrega:» debe ser ${k === 0 ? 'foro' : 'tarea'}`]);
    const rub = (a.split(/^### Rúbrica/m)[1] || '').split(/^### /m)[0];
    const pesos = [...rub.matchAll(/^\|[^|]+\|\s*(\d+)\s*%\s*\|/gm)].reduce((t, m) => t + Number(m[1]), 0);
    if (pesos !== 100) res.push(['error', `actividad ${k + 1}: los pesos de la rúbrica suman ${pesos} %`]);
    res.push(...vistaEstudiante(a.replace(/^(cubre|fuentes|entrega):.*$/gm, ''), `actividad ${k + 1}`));
  });
  out.push([`actividades ${id}`, res]);
}
// Guía del facilitador y foros (criterios 30-10): sin códigos ni remisiones
for (const dir of ['guia-facilitador', 'foros']) for (const f of listar(path.join(RAIZ, dir), '.md')) {
  const id = path.basename(f, '.md');
  if (pasa(id)) out.push([`${dir} ${id}`, [...revisarTexto(id, leer(f), { casos: 'nombres' }), ...vistaEstudiante(leer(f), id)]]);
}
// Glosario: sin audiencia vieja ni casos
for (const f of listar(path.join(RAIZ, 'glosario'), '.md')) {
  const id = path.basename(f, '.md');
  if (pasa(id)) out.push([`glosario ${id}`, revisarTexto(id, leer(f))]);
}
// Casos: pueden nombrar su empresa, pero no suponer que quien estudia no trabaja
for (const f of listar(path.join(RAIZ, 'casos'), '.md')) {
  const id = path.basename(f, '.md');
  if (pasa(id)) out.push([`caso ${id}`, revisarTexto(id, leer(f), { casos: false })]);
}

for (const [nombre, res] of out) {
  const e = res.filter(r => r[0] === 'error').length, a = res.length - e;
  errores += e; avisos += a;
  console.log(`${e ? '✗' : '✓'} ${nombre}${res.length ? ` · ${e} errores · ${a} avisos` : ''}`);
  for (const [tipo, txt] of res) console.log(`   ${tipo}: ${txt}`);
}
console.log(`\n${out.length} piezas · ${errores} errores · ${avisos} avisos`);
process.exit(errores ? 1 : 0);
