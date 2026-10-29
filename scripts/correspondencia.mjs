// Cruce estructural contenido ↔ planilla: escribe docs/CORRESPONDENCIA.md
// Uso: node scripts/correspondencia.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const MIN_PANTALLA = 7.5;
const ok = b => (b ? '✓' : '✗');

const filas = [], detalle = [];
let totalPant = 0, totalMin = 0, fallas = 0;
for (const m of curso.modulos) for (const ae of m.aes) {
  const md = fs.readFileSync(path.join(RAIZ, 'contenido', `M${m.n}`, `${ae.id}.md`), 'utf8').replace(/\r\n/g, '\n');
  const bloques = md.split(/^## /m).slice(1);
  const pant = bloques.filter(b => /^P\d\d · /.test(b));
  const porCodigo = {};
  for (const p of pant) {
    const id = p.slice(0, 3);
    for (const c of (/^cubre:\s*(.+)$/m.exec(p)?.[1] || '').split(/,\s*/)) (porCodigo[c] ||= []).push(id);
  }
  const codigos = [...ae.saber, ...ae.saber_hacer, ...ae.saber_ser, ...ae.criterios];
  const sinCubrir = codigos.filter(c => !porCodigo[c.codigo]);
  const textoAE = md.replace(/\s+/g, ' ').includes(ae.texto);
  const minDis = pant.length * MIN_PANTALLA;
  const recursosAE = m.recursos.filter(r => r.aes.split(/;\s*/).includes(ae.id) && /Hito|Caso/.test(r.tipo));
  // Criterios 29-10: sin «Conexión con el proyecto»; el hito se trabaja en las actividades de aplicación práctica del AE.
  // Criterios 28-10: el caso no se nombra (es un recurso aparte)
  const conActividades = fs.existsSync(path.join(RAIZ, 'actividades', `${ae.id}.md`));
  const nombra = recursosAE.map(r => {
    const hito = r.tipo === 'Hito proyecto';
    const clave = hito ? (/Hito (\d+[a-d]?)/.exec(r.titulo)?.[1]) : (/Caso (M\d-C\d)/.exec(r.titulo)?.[1]);
    const ok = clave ? (hito ? conActividades : !md.includes(clave)) : false;
    return { r, clave: hito ? `Hito ${clave} con actividades` : `${clave} sin nombrar`, ok };
  });
  const cajas = t => (md.match(new RegExp(`^:::${t}`, 'gm')) || []).length;
  const fuentes = new Set([...md.matchAll(/^fuentes:[ \t]*(F-.+)$/gm)].flatMap(x => x[1].split(/,\s*/)));
  const bien = textoAE && pant.length === ae.pantallas && !sinCubrir.length && nombra.every(x => x.ok);
  if (!bien) fallas++;
  totalPant += pant.length; totalMin += minDis;
  filas.push(`| ${ae.id} | ${ok(textoAE)} | ${pant.length}/${ae.pantallas} ${ok(pant.length === ae.pantallas)} | ${minDis} / ${ae.pantallas * MIN_PANTALLA} | `
    + `${codigos.length - sinCubrir.length}/${codigos.length} ${ok(!sinCubrir.length)} | ${nombra.map(x => `${x.clave} ${ok(x.ok)}`).join(', ') || '—'} | `
    + `${cajas('comprueba')} / ${cajas('error')} / ${cajas('actividad')} | ${fuentes.size} |`);
  detalle.push(`### ${ae.id} · ${ae.tema}\n\n- **Bloom:** ${ae.bloom} · **Técnica:** ${ae.tecnica}\n- **Quiz que pide la planilla:** ${ae.quiz}\n`
    + `- **Instrumentos:** ${ae.instrumentos}\n\n| Código | Contenido de la planilla | Pantallas que lo trabajan |\n|---|---|---|\n`
    + codigos.map(c => `| ${c.codigo} | ${c.texto} | ${(porCodigo[c.codigo] || ['**sin cubrir**']).join(', ')} |`).join('\n') + '\n');
}

const out = `# Correspondencia contenido ↔ planilla

Generado con \`node scripts/correspondencia.mjs\` el ${new Date().toISOString().slice(0, 10)}. Fuente: planilla «Estructura_inicial_contenido_IA_generativa»
(hojas Estructura, Matriz coherencia, Recursos y Casos y proyecto) importada en \`data/curso.json\`.

**Resultado:** ${fallas === 0 ? 'todo calza' : `${fallas} AE con diferencias`} · ${totalPant} pantallas (la planilla pide ${curso.modulos.flatMap(m => m.aes).reduce((s, a) => s + a.pantallas, 0)})
· ${totalMin / 60} h de Rise con ${MIN_PANTALLA} min por pantalla.

## Resumen por AE

| AE | Texto del AE igual | Pantallas | Min Rise (diseñado / planilla) | Códigos S/H/A/C cubiertos | Hito con actividades y casos sin nombrar | Comprueba / error / actividad | Fuentes citadas |
|---|---|---|---|---|---|---|---|
${filas.join('\n')}

## Detalle: qué pantallas trabajan cada contenido y criterio

${detalle.join('\n')}`;
fs.writeFileSync(path.join(RAIZ, 'docs', 'CORRESPONDENCIA.md'), out);
console.log(`docs/CORRESPONDENCIA.md · ${fallas} AE con diferencias · ${totalPant} pantallas`);
