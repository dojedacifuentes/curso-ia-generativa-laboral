// Mapa del aula Moodle: qué recurso va en cada sección, en qué orden y con qué tipo de actividad de Moodle (criterios 30-10).
// Sale de data/curso.json, actividades/, casos/ y foros/. Uso: node scripts/mapa-aula.mjs → docs/MAPA-AULA-MOODLE.md
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const leer = rel => (fs.existsSync(path.join(RAIZ, rel)) ? fs.readFileSync(path.join(RAIZ, rel), 'utf8').replace(/\r\n/g, '\n') : '');
const titulo = md => (/^# (.+)$/m.exec(md)?.[1] || '').trim().replace(/^M\d-C\d · /, '');
const actividades = id => [...leer(`actividades/${id}.md`).matchAll(/^## (?:Actividad|Autoevaluación) (\d) · (.+)$/gm)].map(m => m[2].trim());
const casos = n => fs.readdirSync(path.join(RAIZ, 'casos')).filter(f => new RegExp(`^M${n}-C\\d\\.md$`).test(f)).sort().map(f => titulo(leer(`casos/${f}`)));
const PEND = ' *(pendiente)*';
// Hitos del proyecto del curso: la actividad 2 de estos AE (data/hitos.json, opción 1 del 30-10)
const HITO = Object.fromEntries(Object.entries(JSON.parse(leer('data/hitos.json'))).filter(([k]) => !k.startsWith('_')).map(([, v]) => [v.ae, v.hito]));

// Horas por módulo (hoja «Resumen horas»)
const HORAS = Object.fromEntries(leer('data/planilla/Resumen horas.tsv').split('\n').map(l => l.split('\t')).filter(c => /^\d(\.0)?$/.test(c[0]) && Number(c[2])).map(c => [Number(c[0]), Number(c[2])]));
const TOTAL = Object.values(HORAS).reduce((a, b) => a + b, 0);
const nEval = f => { const t = leer(`evaluaciones/${f}`); if (!t) return 0; const e = JSON.parse(t); return e.items ? e.items.length : e.casos.reduce((a, c) => a + c.items.length, 0); };

let md = `# Mapa del aula Moodle

Orden de cada sección del aula en formacion.empoderatech.com (Moodle 5.3) y tipo de actividad de Moodle de cada recurso. Sigue la
estructura de curso asincrónico que pide SENCE y las observaciones de la docente del 31-10: contenidos, material interactivo,
autoevaluaciones con respuesta modelo (no se envían), casos de aplicación con entrega y revisión docente, resumen, glosario y
evaluación de cada módulo, evaluación final y contacto entre facilitador y estudiantes. Curso de ${TOTAL} horas.

| Recurso | Tipo en Moodle | Nota |
|---|---|---|
| Video de bienvenida y de resumen del módulo | Página con el video | No |
| Evaluación diagnóstica del módulo | Cuestionario (espacio reservado hasta que esté) | No |
| Contenido de cada tema (Rise) | Paquete SCORM | No |
| Quiz juego de cada tema | Paquete SCORM, con retroalimentación por respuesta | No |
| Autoevaluaciones 1 y 2 de cada tema | Página con la consigna, la rúbrica de autoevaluación y la respuesta modelo; no se envía y el estudiante la marca como hecha | No |
| Caso de aplicación (práctica evaluada) | Página para leer el caso y, debajo, la tarea «Entrega y revisión docente»: el estudiante sube su documento y el docente sube la nota con rúbrica, sus comentarios y el documento revisado | Sí (30 %) |
| Foro de casos del módulo | Foro: resultados de los casos, preguntas para conversar y consultas | No |
| Infografía animada del módulo | Paquete SCORM | No |
| Glosario del módulo | Glosario con buscador | No |
| Evaluación del módulo | Cuestionario: casos con alternativas y retroalimentación en cada una | Sí (40 %) |
| Evaluación final del curso | Cuestionario: cuatro casos integradores | Sí (30 %) |
| Guía del facilitador y mapa del aula | Archivos en una sección oculta para estudiantes | — |

## Sección inicial · Bienvenida

- Portada del curso (${TOTAL} horas, ruta de los seis módulos), «Cómo avanzas» e insignias.
- Avisos, con la docente: Natalia Hernández · natalia@empoderatech.cl.
- Inducción al curso${PEND}.
- Foro de interacción del curso (presentación y consultas generales).

`;
for (const m of curso.modulos) {
  md += `## Módulo ${m.n} · ${m.nombre} (${HORAS[m.n]} horas)

**Competencia del módulo:** ${m.competencia}

- Video de bienvenida del módulo.
- Evaluación diagnóstica del módulo${PEND}.
`;
  for (const a of m.aes) {
    const [a1, a2] = actividades(a.id);
    md += `- **${a.tema}.** Aprendizaje esperado: ${a.texto}
  - Aprende: Rise «${a.tema}» (SCORM).
  - Practica: quiz juego «${a.tema}» (SCORM).
`
      + (a1 ? `  - Aplica en tu trabajo · autoevaluación 1: ${a1} (no se envía; respuesta modelo).
` : '')
      + (a2 ? `  - Aplica en tu trabajo · autoevaluación 2: ${a2} (no se envía; respuesta modelo${HITO[a.id] ? `; ${HITO[a.id]} del proyecto del curso` : ''}).
` : '');
  }
  const cs = casos(m.n);
  if (cs.length) md += '- Práctica evaluada:\n' + cs.map(c => `  - Caso de aplicación: ${c} (página) y su «Entrega y revisión docente» (tarea con rúbrica).
`).join('') + `- Foro de casos del módulo ${m.n}.
`;
  else md += `- Foro del módulo ${m.n} (avances del proyecto y consultas).
`;
  md += `- Resumen del módulo: infografía animada (SCORM), video de resumen y glosario del módulo.
- Evaluación del módulo ${m.n}: ${nEval(`M${m.n}.json`)} preguntas con casos y alternativas.

`;
}
md += `## Evaluación final

- Evaluación final del curso: cuatro casos integradores y ${nEval('Final.json')} preguntas, una por aprendizaje esperado, con
  retroalimentación en cada alternativa. Pauta de corrección en la guía del facilitador.

## Sección oculta para estudiantes · Para el facilitador

- Guía del facilitador: cómo se evalúa el curso, pauta de corrección de los casos y de las evaluaciones, pauta de referencia de las
  44 autoevaluaciones y moderación de los foros. La ve el rol docente, incluido quien revisa el curso para SENCE.
- Mapa del aula.
`;
fs.writeFileSync(path.join(RAIZ, 'docs', 'MAPA-AULA-MOODLE.md'), md);
const codigos = md.match(/\bM\d-(?:AE|T|C)\d\b|\bP\d\d\b/g);
console.log(`docs/MAPA-AULA-MOODLE.md${codigos ? ' · ⚠ códigos: ' + [...new Set(codigos)].join(' ') : ''}`);
