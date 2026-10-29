// Valida los casos de aplicación: casos/<id>.md contra su ficha investigacion/casos/<id>.md y la planilla (data/curso.json).
// Uso: node scripts/validar-casos.mjs [M1-C1 …]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const CASOS = Object.fromEntries(curso.modulos.flatMap(m => m.casos.filter(c => c.tipo === 'Caso de aplicación').map(c => [c.id, { ...c, modulo: m }])));
const AES = Object.fromEntries(curso.modulos.flatMap(m => m.aes.map(a => [a.id, a])));
const APA = JSON.parse(fs.readFileSync(path.join(RAIZ, 'investigacion', 'referencias-apa.json'), 'utf8'));
const SECCIONES = ['1. Contexto', '2. Qué pasó', '3. Análisis guiado', '4. Aplicación a tu proyecto', '5. Autocorrección', '6. Para el foro', 'Referencias bibliográficas'];
const palabras = t => t.split(/\s+/).filter(w => /\p{L}/u.test(w)).length;

const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(CASOS);
let fallas = 0;
for (const id of ids) {
  const errores = [], avisos = [];
  const c = CASOS[id];
  if (!c) { console.log(`✗ ${id}: no es un caso de la planilla`); fallas++; continue; }
  const fFicha = path.join(RAIZ, 'investigacion', 'casos', `${id}.md`), fCaso = path.join(RAIZ, 'casos', `${id}.md`);
  if (!fs.existsSync(fFicha)) { console.log(`✗ ${id}: falta investigacion/casos/${id}.md`); fallas++; continue; }
  const ficha = fs.readFileSync(fFicha, 'utf8').replace(/\r\n/g, '\n');
  const estado = /^Estado:\s*(.+)$/m.exec(ficha)?.[1]?.trim();
  if (!/^(Verificado|Verificado con ajustes|Descartado)$/.test(estado || '')) errores.push('la ficha no dice «Estado: Verificado | Verificado con ajustes | Descartado»');
  const fuentes = new Set([...ficha.matchAll(/^###\s+(F-[A-Z0-9]+-\d+)\b/gm)].map(m => m[1]));
  const primarias = (ficha.match(/^- Tipo:\s*primaria/gmi) || []).length;
  if (!primarias && estado !== 'Descartado') errores.push('la ficha no tiene ninguna fuente primaria');
  for (const s of ['Hechos verificados', 'Lo que NO se puede afirmar']) if (!ficha.includes(`## ${s}`)) errores.push(`la ficha no tiene «## ${s}»`);
  if (!fs.existsSync(fCaso)) { errores.push(`falta casos/${id}.md`); }
  else {
    const md = fs.readFileSync(fCaso, 'utf8').replace(/\r\n/g, '\n');
    const secciones = md.split(/^## /m).slice(1);
    for (const s of SECCIONES) if (!secciones.some(b => b.startsWith(s))) errores.push(`falta la sección «${s}»`);
    for (const m of md.matchAll(/^fuentes:\s*(F-.+)$/gm)) for (const f of m[1].split(/,\s*/)) if (!fuentes.has(f)) errores.push(`la fuente ${f} no está en la ficha`);
    const fs2 = secciones.find(b => b.startsWith('Referencias bibliográficas')) || '';
    // Criterios 29-10: la sección trae la referencia APA (la escribe referencias-apa.mjs --escribir); se busca por su URL
    for (const m of md.matchAll(/^fuentes:\s*(F-.+)$/gm)) for (const f of m[1].split(/,\s*/)) if (!(APA[f] && fs2.includes(APA[f].url))) errores.push(`la fuente ${f} no está en «Referencias bibliográficas» (node scripts/referencias-apa.mjs --escribir)`);
    const aesCaso = c.aes.split(/;\s*/);
    const cubre = /^cubre:\s*(.+)$/m.exec(secciones.find(b => b.startsWith('3. Análisis guiado')) || '')?.[1] || '';
    if (!cubre) errores.push('«3. Análisis guiado» no tiene «cubre:»');
    for (const ref of cubre.split(/,\s*/).filter(Boolean)) {
      const [ae, cod] = ref.split(':');
      if (!aesCaso.includes(ae)) errores.push(`cubre ${ref}: ${ae} no es un AE de este caso (${c.aes})`);
      else if (![...AES[ae].saber, ...AES[ae].saber_hacer, ...AES[ae].saber_ser, ...AES[ae].criterios].some(x => x.codigo === cod)) errores.push(`cubre ${ref}: ${cod} no existe en ${ae}`);
    }
    for (const ae of aesCaso) if (!md.includes(ae)) errores.push(`no nombra el AE ${ae}`);
    const preguntas = ((secciones.find(b => b.startsWith('3. Análisis guiado')) || '').replace(/^.*\n/, '').match(/^\d+\.\s/gm) || []).length;
    if (preguntas < 5 || preguntas > 7) avisos.push(`análisis guiado con ${preguntas} preguntas (5 a 6)`);
    const total = palabras(md.split('## Referencias bibliográficas')[0]);
    if (total < 900 || total > 2200) avisos.push(`${total} palabras (rango 900-2200)`);
    console.log(`${errores.length ? '✗' : '✓'} ${id} · ${estado} · ${fuentes.size} fuentes (${primarias} primarias) · ${preguntas} preguntas · ${total} palabras`);
  }
  if (!fs.existsSync(fCaso)) console.log(`✗ ${id} · ${estado}`);
  errores.forEach(e => console.log(`   error: ${e}`));
  avisos.forEach(a => console.log(`   aviso: ${a}`));
  if (errores.length) fallas++;
}
process.exit(fallas ? 1 : 0);
