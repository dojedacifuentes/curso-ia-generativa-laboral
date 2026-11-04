// Las exigencias de la guía técnica del SENCE como preguntas, con su sección, su página y la respuesta del curso a la fecha de la
// comparación. Escribe el HTML con que se crea el Google Doc (estilos en línea, porque Docs ignora las clases).
//
//   node scripts/sence-preguntas.mjs     escribe entregables/sence/Preguntas-Guia-SENCE.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const J = (...p) => JSON.parse(fs.readFileSync(path.join(RAIZ, ...p), 'utf8'));
const G = J('data', 'sence', 'guia-tecnica.json'), K = J('data', 'sence', 'comparacion.json'), Q = J('data', 'sence', 'preguntas.json');

const RESPUESTA = { V: ['Sí', '#BBF7D0'], P: ['En parte', '#FDE68A'], F: ['No', '#FCA5A5'], SD: ['Sin datos', '#E5E7EB'] };
const COLORES = ['#BE3455', '#1D4ED8', '#0F766E', '#7C3AED', '#B45309', '#BE185D', '#0369A1', '#4D7C0F', '#6D28D9', '#B91C1C', '#0E7490', '#A16207', '#374151', '#15803D'];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const bloques = G.bloques.map(b => ({ ...b, filas: b.filas.filter(f => Q[f.id]) })).filter(b => b.filas.length);
const filas = bloques.flatMap(b => b.filas);
const faltan = Object.keys(K.filas).filter(id => !Q[id]);
if (faltan.length || filas.length !== Object.keys(K.filas).length) throw new Error(`Preguntas que no calzan: ${faltan.join(', ')}`);
const cuenta = r => filas.filter(f => K.filas[f.id].r === r).length;
const celda = (t, o = '') => `<td${o}>${t}</td>`;

const cuerpo = bloques.map((b, i) => {
  const color = COLORES[i % COLORES.length];
  return `<h2 style="color:${color}">${esc(b.titulo)}</h2>
<table border="1" cellpadding="4" style="border-collapse:collapse;width:100%">
<tr bgcolor="${color}" style="color:#fff">${['Pregunta', 'Guía', '¿Se cumple hoy?'].map(x => `<th>${x}</th>`).join('')}</tr>
${b.filas.map(f => { const [r, c] = RESPUESTA[K.filas[f.id].r]; return `<tr>${celda(esc(Q[f.id]))}${celda(`Sec. ${f.sec}, p. ${f.pag}`)}${celda(`<b>${r}</b>`, ` bgcolor="${c}"`)}</tr>`; }).join('\n')}
</table>`;
}).join('\n');

const html = `<html><head><meta charset="utf-8"></head><body>
<h1 style="color:#BE3455">Las exigencias de la guía del SENCE en preguntas</h1>
<p>Curso IA generativa para entornos laborales. Cada pregunta resume, con palabras propias, una exigencia de la guía técnica para revisar solicitudes de franquicia tributaria. Para citar, usa el texto original en la sección y página indicadas. La respuesta refleja el aula y la planilla al ${K.fecha}.</p>
<table border="1" cellpadding="6" style="border-collapse:collapse;width:100%"><tr>${['V', 'P', 'F', 'SD'].map(r => `<td bgcolor="${RESPUESTA[r][1]}" align="center"><b>${RESPUESTA[r][0]}: ${cuenta(r)}</b></td>`).join('')}</tr></table>
${cuerpo}
</body></html>
`;
const salida = path.join(RAIZ, 'entregables', 'sence', 'Preguntas-Guia-SENCE.html');
fs.writeFileSync(salida, html);
console.log(`✓ ${path.relative(RAIZ, salida)} · ${filas.length} preguntas en ${bloques.length} bloques · ${Math.round(html.length / 1024)} KB`);
