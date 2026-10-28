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
    if (casos && CASOS.test(linea)) res.push(['error', `línea ${k + 1}: menciona un caso («${linea.match(CASOS)[0]}»)`]);
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
