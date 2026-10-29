// Valida el contenido base contra la planilla (data/curso.json).
// Uso: node scripts/validar-contenido.mjs [M1-AE1 …]   (sin argumentos: todos los archivos de contenido/)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const AES = Object.fromEntries(curso.modulos.flatMap(m => m.aes.map(a => [a.id, a])));

const PALABRAS_MIN = 120, PALABRAS_MAX = 420;
// Criterios 29-10: sin «Glosario» (va en glosario/M<n>.md) ni «Conexión con el proyecto»; las fuentes se citan con marcas APA
const SECCIONES = ['Ideas clave', 'Referencias bibliográficas'];
const APA = JSON.parse(fs.readFileSync(path.join(RAIZ, 'investigacion', 'referencias-apa.json'), 'utf8'));
const marcas = t => [...t.matchAll(/\[n?@([^\]]+)\]/g)].flatMap(m => m[1].split(/;\s*@?/).map(x => x.replace(/^@/, '').trim()));
// Palabras que no van en un texto para el estudiante
const PROHIBIDAS = [/\b(texto|criterios?|lectura) oficial(es)?\b/i, /\btextual(es|mente)?\b/i, /\bliteral(mente)?\b/i, /\bplan formativo\b/i];

const pedidos = process.argv.slice(2);
const archivos = pedidos.length
  ? pedidos.map(id => path.join(RAIZ, 'contenido', id.split('-')[0], `${id}.md`))
  : fs.readdirSync(path.join(RAIZ, 'contenido')).flatMap(d => fs.readdirSync(path.join(RAIZ, 'contenido', d)).map(f => path.join(RAIZ, 'contenido', d, f))).filter(f => f.endsWith('.md'));

// Ids de fuentes registradas en investigacion/*.md y en las fichas de casos investigacion/casos/*.md («### F-M1-01 · …», «### F-M1C2-01 · …»)
const DIR_INV = path.join(RAIZ, 'investigacion');
const FUENTES = new Set([DIR_INV, path.join(DIR_INV, 'casos')].filter(d => fs.existsSync(d))
  .flatMap(d => fs.readdirSync(d).filter(f => f.endsWith('.md')).map(f => path.join(d, f)))
  .flatMap(f => [...fs.readFileSync(f, 'utf8').matchAll(/^###\s+(F-[A-Z0-9]+-\d+)\b/gm)].map(m => m[1])));

let fallas = 0;
for (const archivo of archivos) {
  const id = path.basename(archivo, '.md');
  const ae = AES[id];
  const errores = [], avisos = [];
  if (!ae) { console.log(`✗ ${id}: no existe en la planilla`); fallas++; continue; }
  const md = fs.readFileSync(archivo, 'utf8');

  const codigos = new Map([...ae.saber, ...ae.saber_hacer, ...ae.saber_ser, ...ae.criterios].map(c => [c.codigo, c.texto]));
  const cubiertos = new Set();
  const citadas = new Set();
  const bloques = md.split(/^## /m).slice(1);
  const pantallas = bloques.filter(b => /^P\d{2} · /.test(b));
  const otras = bloques.filter(b => !/^P\d{2} · /.test(b)).map(b => b.split('\n')[0].trim());

  if (!md.startsWith(`# ${id} · ${ae.tema}`)) errores.push(`el título debe ser «# ${id} · ${ae.tema}»`);
  if (pantallas.length !== ae.pantallas) errores.push(`${pantallas.length} pantallas; la planilla pide ${ae.pantallas}`);
  if (!md.replace(/\s+/g, ' ').includes(ae.texto)) errores.push('el texto del aprendizaje esperado no aparece igual que en la planilla');

  pantallas.forEach((p, k) => {
    const titulo = p.split('\n')[0];
    const esperado = `P${String(k + 1).padStart(2, '0')}`;
    if (!titulo.startsWith(esperado)) errores.push(`«${titulo}» debería ser ${esperado}`);
    const cubre = /^cubre:\s*(.+)$/m.exec(p);
    if (!cubre) { errores.push(`${titulo}: falta la línea «cubre:»`); return; }
    for (const c of cubre[1].split(/,\s*/)) {
      if (!codigos.has(c)) errores.push(`${titulo}: el código ${c} no existe en la planilla`);
      cubiertos.add(c);
    }
    if (!/^bloque:\s*\S/m.test(p)) avisos.push(`${titulo}: falta «bloque:»`);
    const fu = /^fuentes:[ \t]*(F-.+)$/m.exec(p);
    if (!fu) avisos.push(`${titulo}: sin «fuentes:»`);
    else for (const f of fu[1].split(/,\s*/)) {
      if (!FUENTES.has(f)) errores.push(`${titulo}: la fuente ${f} no está en investigacion/`);
      if (!APA[f]) errores.push(`${titulo}: la fuente ${f} no tiene referencia APA (node scripts/referencias-apa.mjs --borrador)`);
      citadas.add(f);
    }
    // Toda fuente de «fuentes:» se cita en el texto con su marca, y toda marca está en «fuentes:»
    const enTexto = new Set(marcas(p)), enLinea = new Set(fu ? fu[1].split(/,\s*/) : []);
    for (const f of enLinea) if (!enTexto.has(f)) errores.push(`${titulo}: ${f} está en «fuentes:» pero no tiene marca [@${f}] en el texto`);
    for (const f of enTexto) if (!enLinea.has(f)) errores.push(`${titulo}: la marca [@${f}] no está en «fuentes:»`);
    const cuerpo = p.replace(/^.*\n/, '').replace(/^(cubre|bloque|fuentes):.*$/gm, '');
    const palabras = cuerpo.split(/\s+/).filter(w => /\p{L}/u.test(w)).length;
    if (palabras < PALABRAS_MIN || palabras > PALABRAS_MAX) avisos.push(`${titulo}: ${palabras} palabras (rango ${PALABRAS_MIN}-${PALABRAS_MAX})`);
  });

  for (const [c, t] of codigos) if (!cubiertos.has(c)) errores.push(`sin cubrir ${c}: «${t}»`);
  for (const s of SECCIONES) if (!otras.includes(s)) errores.push(`falta la sección «${s}»`);
  const seccionRefs = bloques.find(b => b.startsWith('Referencias bibliográficas')) || '';
  for (const f of citadas) if (APA[f] && !seccionRefs.includes(APA[f].url)) errores.push(`${f} se cita pero no está en «Referencias bibliográficas» (node scripts/referencias-apa.mjs --escribir)`);
  for (const re of PROHIBIDAS) {
    const m = md.split('## Fuentes')[0].match(re);
    if (m) errores.push(`palabra que no va para el estudiante: «${m[0]}»`);
  }
  // El glosario del AE vive en glosario/M<n>.md
  const gl = fs.existsSync(path.join(RAIZ, 'glosario', `${id.split('-')[0]}.md`)) ? fs.readFileSync(path.join(RAIZ, 'glosario', `${id.split('-')[0]}.md`), 'utf8') : '';
  const glosario = ((gl.split(/^## /m).find(b => b.startsWith(id + ' ')) || '').match(/^- \*\*/gm) || []);
  if (glosario.length < 5) avisos.push(`glosario/${id.split('-')[0]}.md: ${glosario.length} términos para ${id}`);

  const total = pantallas.join(' ').split(/\s+/).filter(w => /\p{L}/u.test(w)).length;
  const marca = errores.length ? '✗' : '✓';
  console.log(`${marca} ${id} · ${pantallas.length}/${ae.pantallas} pantallas · ${cubiertos.size}/${codigos.size} códigos cubiertos · ${total} palabras · ${glosario.length} términos`);
  errores.forEach(e => console.log(`   error: ${e}`));
  avisos.forEach(a => console.log(`   aviso: ${a}`));
  if (errores.length) fallas++;
}
process.exit(fallas ? 1 : 0);
