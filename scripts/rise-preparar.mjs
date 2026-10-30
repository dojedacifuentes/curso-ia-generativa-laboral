// Prepara los datos para corregir un Rise con los criterios del 28-10 y 29-10: citas APA en el texto, competencia del módulo y
// aprendizaje esperado textuales, título sin código y «Referencias bibliográficas». El Rise lleva solo el contenido: quiz,
// actividades, infografía y glosario son recursos aparte.
// Uso: node scripts/rise-preparar.mjs M1-AE1  → entregables/rise/M1-AE1/rise-datos.json (lo aplica scripts/lib/rise-aplicar.js en el editor)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cargar, resolverCitas } from './referencias-apa.mjs';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AE = process.argv[2] || 'M1-AE1';
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const modulo = curso.modulos.find(m => m.aes.some(a => a.id === AE));
const ae = modulo.aes.find(a => a.id === AE);
const leer = f => fs.readFileSync(path.join(RAIZ, f), 'utf8').replace(/\r\n/g, '\n');
const apa = cargar();

// Cuerpo del contenido sin «Ideas clave» ni «Referencias bibliográficas»
const sinRefs = md => md.replace(/^## (Ideas clave|Referencias bibliográficas)\b[\s\S]*?(?=^## |(?![\s\S]))/gm, '');
const contenido = sinRefs(leer(`contenido/M${modulo.n}/${AE}.md`));

// Citas: cada marca se numera, se resuelve en el contenido completo (las letras 2026a/b quedan como en el Doc) y se guarda con
// el texto que la precede como ancla.
let k = 0;
const marcado = contenido.replace(/\[(n)?@[^\]]+\]/g, m => `⟦${k++}⟧${m}`);
const { texto: resuelto, refs, falta } = resolverCitas(marcado, apa);
if (falta.length) throw new Error(`Sin entrada APA: ${falta.join(', ')}`);
const cita = {};
for (const m of resuelto.matchAll(/⟦(\d+)⟧(\([^)]*\))/g)) cita[m[1]] = m[2];

const plano = s => s.replace(/\*\*|\*/g, '').replace(/\s+/g, ' ');
const anclas = [];
k = 0;
for (const parrafo of contenido.split(/\n\s*\n/)) {
  const partes = parrafo.split(/(\[(?:n)?@[^\]]+\])/);
  for (let i = 1; i < partes.length; i += 2) {
    const antes = plano(partes.slice(0, i).filter((_, j) => j % 2 === 0).join('')).replace(/^.*?(?:^|[:;.?!»] )(?=[^:;.?!]*$)/, '').trimEnd();
    // Últimas palabras antes de la marca (unas 6), sin cortar una palabra por la mitad
    const ancla = antes.split(' ').slice(-6).join(' ');
    anclas.push({ ancla, cita: cita[k++] });
  }
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enLinea = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/(https?:\/\/[^\s<]+[^\s<.,;)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
const refsHTML = refs.map(r => `<p>${enLinea(r.texto)}</p>`).join('');
// Introducción de la portada: primer párrafo de P01, sin marcas
const p01 = contenido.split(/^## P01[^\n]*\n/m)[1].split(/^## /m)[0];
const intro = plano(p01.split(/\n\s*\n/).find(p => p.trim() && !/^(cubre|fuentes|bloque):/m.test(p)) || '')
  .replace(/\s*\[(?:n)?@[^\]]+\]/g, '').trim();
const datos = {
  ae: AE,
  tema: ae.tema,
  competencia: modulo.competencia,
  aprendizaje: ae.texto,
  intro,
  anclas,
  referencias: refsHTML,
};
const dir = path.join(RAIZ, 'entregables', 'rise', AE);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'rise-datos.json'), JSON.stringify(datos, null, 1));
console.log(`${AE}: ${anclas.length} citas en el texto, ${refs.length} referencias → entregables/rise/${AE}/rise-datos.json`);
