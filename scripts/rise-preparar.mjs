// Prepara los datos para corregir un Rise con los criterios del 28-10 y 29-10: citas APA en el texto, competencia del módulo y
// aprendizaje esperado textuales, actividades de aplicación práctica y «Referencias bibliográficas».
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

// Cuerpo del contenido sin «Ideas clave» ni «Referencias bibliográficas»; actividades sin su lista de referencias
const sinRefs = md => md.replace(/^## (Ideas clave|Referencias bibliográficas)\b[\s\S]*?(?=^## |(?![\s\S]))/gm, '');
const contenido = sinRefs(leer(`contenido/M${modulo.n}/${AE}.md`));
const actividades = sinRefs(leer(`actividades/${AE}.md`));

// Citas: cada marca se numera, se resuelve en el documento completo (contenido + actividades, para que las letras 2026a/b
// sean las mismas) y se guarda con el texto que la precede como ancla.
let k = 0;
const marcado = (contenido + '\n' + actividades).replace(/\[(n)?@[^\]]+\]/g, m => `⟦${k++}⟧${m}`);
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
// Las marcas de las actividades usan las mismas citas del documento completo (mismas letras), en el orden en que aparecen
let kAct = k;
const resolverEn = md => md.replace(/\[(n)?@[^\]]+\]/g, () => cita[kAct++]);

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enLinea = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/(https?:\/\/[^\s<]+[^\s<.,;)])/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
const html = md => md.trim().split(/\n\s*\n/).map(b => {
  const lineas = b.split('\n');
  if (lineas.every(l => /^\d+\.\s/.test(l))) return `<ol>${lineas.map(l => `<li><p>${enLinea(l.replace(/^\d+\.\s/, ''))}</p></li>`).join('')}</ol>`;
  if (lineas.every(l => /^- /.test(l))) return `<ul>${lineas.map(l => `<li><p>${enLinea(l.slice(2))}</p></li>`).join('')}</ul>`;
  return `<p>${enLinea(lineas.join(' '))}</p>`;
}).join('');

// Actividades: título, situación, lo que vas a hacer, lo que entregas, cómo se revisa
const acts = actividades.split(/^## /m).slice(1).filter(b => /^Actividad \d/.test(b)).map(b => {
  const titulo = b.split('\n')[0].trim();
  const secciones = b.split(/^### /m).slice(1).map(s => {
    const [h, ...resto] = s.split('\n');
    return { titulo: h.trim(), html: html(resolverEn(resto.join('\n'))) };
  });
  return { titulo, secciones };
});

const refsHTML = refs.map(r => `<p>${enLinea(r.texto)}</p>`).join('');
const datos = {
  ae: AE,
  competencia: modulo.competencia,
  aprendizaje: ae.texto,
  modulo: `Módulo ${modulo.n} · ${modulo.nombre}`,
  anclas,
  actividades: acts,
  referencias: refsHTML,
  glosario: 'https://docs.google.com/document/d/1F5Gw44BWnBgswFx1KowRAEHnVs8PNYCmDZ3IfSFlFZM/edit?usp=sharing',
};
const dir = path.join(RAIZ, 'entregables', 'rise', AE);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'rise-datos.json'), JSON.stringify(datos, null, 1));
console.log(`${AE}: ${anclas.length} citas en el texto, ${acts.length} actividades, ${refs.length} referencias → entregables/rise/${AE}/rise-datos.json`);
