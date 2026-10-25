// Planilla (TSV por hoja en data/planilla/) → data/curso.json
// Uso: node scripts/importar-planilla.mjs
// Para refrescar los TSV desde Drive: descargar la planilla como .xlsx y correr scripts/xlsx2tsv.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(RAIZ, 'data', 'planilla');

function hoja(nombre) {
  const filas = fs.readFileSync(path.join(DIR, nombre + '.tsv'), 'utf8').split('\n').map(l => l.split('\t'));
  const i = filas.findIndex(f => f[0] === 'ID AE' || f[0] === 'ID');
  const cab = filas[i];
  return filas.slice(i + 1).filter(f => f[0]).map(f => Object.fromEntries(cab.map((c, k) => [c, (f[k] ?? '').trim()])));
}

// «a; b; c» → [{codigo:'S1', texto:'a'}, …]
const partir = (texto, letra) =>
  texto.replace(/\.$/, '').split(/;\s*/).filter(Boolean).map((t, k) => ({ codigo: `${letra}${k + 1}`, texto: t.trim() }));

// «C1 Describe… C2 Ejemplifica…» → [{codigo:'C1', texto:'Describe…'}, …]
const criterios = texto =>
  [...texto.matchAll(/(C\d+)\s+(.+?)(?=\s+C\d+\s|$)/g)].map(m => ({ codigo: m[1], texto: m[2].trim() }));

const num = v => Number(String(v).replace(',', '.'));

const estructura = hoja('Estructura');
const matriz = Object.fromEntries(hoja('Matriz coherencia').map(f => [f['ID AE'], f]));
const recursos = hoja('Recursos');
const casos = hoja('Casos y proyecto');

const modulos = [];
for (const f of estructura) {
  const n = num(f['Módulo']);
  let m = modulos.find(x => x.n === n);
  if (!m) {
    m = { n, nombre: f['Nombre del módulo'], competencia: f['Competencia del módulo'], aes: [] };
    modulos.push(m);
  }
  const id = f['ID AE'];
  const mz = matriz[id];
  if (!mz) throw new Error(`${id} no está en «Matriz coherencia»`);
  m.aes.push({
    id,
    tema: f['Tema (propuesta)'],
    texto: f['Aprendizaje esperado'],
    bloom: f['Nivel taxonómico (Bloom)'],
    saber: partir(f['Saber (conocimientos)'], 'S'),
    saber_hacer: partir(f['Saber hacer (habilidades)'], 'H'),
    saber_ser: partir(f['Saber ser (actitudes)'], 'A'),
    criterios: criterios(mz['Criterios de evaluación']),
    tecnica: f['Técnica metodológica'],
    rise: f['Rise asociado'],
    pantallas: num(f['Pantallas Rise']),
    quiz: f['Quiz formativo (15 min)'],
    instrumentos: mz['Instrumentos'],
  });
}
for (const m of modulos) {
  m.recursos = recursos.filter(r => num(r['Módulo']) === m.n).map(r => ({
    id: r.ID, orden: num(r.Orden), tipo: r.Tipo, titulo: r['Recurso / título'], aes: r['AE que trabaja'],
    minutos: num(r['Duración (min)']), formato: r['Formato / herramienta'],
  }));
  m.casos = casos.filter(c => num(c['Módulo']) === m.n).map(c => ({
    id: c.ID, tipo: c.Tipo, titulo: c['Título'], aes: c.AE, descripcion: c['Descripción / qué documentar'],
    verificacion: c['Estado de verificación'], entregable: c.Entregable,
  }));
}

const salida = { titulo: 'IA generativa para entornos laborales', fuente: 'Planilla Estructura_inicial_contenido_IA_generativa (Drive 1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM)', modulos };
fs.writeFileSync(path.join(RAIZ, 'data', 'curso.json'), JSON.stringify(salida, null, 2) + '\n');
const aes = modulos.flatMap(m => m.aes);
console.log(`${modulos.length} módulos · ${aes.length} AE · ${aes.reduce((s, a) => s + a.pantallas, 0)} pantallas · ${modulos.reduce((s, m) => s + m.recursos.length, 0)} recursos`);
