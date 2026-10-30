// Mapa del aula Moodle: qué recurso va en cada sección, en qué orden y con qué tipo de actividad de Moodle (criterios 30-10).
// Sale de data/curso.json, actividades/, casos/ y foros/. Uso: node scripts/mapa-aula.mjs → docs/MAPA-AULA-MOODLE.md
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const curso = JSON.parse(fs.readFileSync(path.join(RAIZ, 'data', 'curso.json'), 'utf8'));
const leer = rel => (fs.existsSync(path.join(RAIZ, rel)) ? fs.readFileSync(path.join(RAIZ, rel), 'utf8').replace(/\r\n/g, '\n') : '');
const titulo = md => (/^# (.+)$/m.exec(md)?.[1] || '').trim().replace(/^M\d-C\d · /, '');
const actividades = id => [...leer(`actividades/${id}.md`).matchAll(/^## Actividad (\d) · (.+)$/gm)].map(m => m[2].trim());
const casos = n => fs.readdirSync(path.join(RAIZ, 'casos')).filter(f => new RegExp(`^M${n}-C\\d\\.md$`).test(f)).sort().map(f => titulo(leer(`casos/${f}`)));
const PEND = ' *(pendiente)*';

let md = `# Mapa del aula Moodle

Orden de cada sección del aula en formacion.empoderatech.com (Moodle 5.3) y tipo de actividad de Moodle de cada recurso. Sigue la
estructura de curso asincrónico que pide SENCE: contenidos, material interactivo, aplicativos con rúbrica, casos, resumen,
evaluación del módulo y contacto entre facilitador y estudiantes. Los recursos marcados como pendientes se agregan cuando estén.

| Recurso | Tipo en Moodle | Archivo |
|---|---|---|
| Rise de cada tema | Paquete SCORM | Drive «12 Rise · SCORM 1.2 para Moodle» |
| Quiz formativo de cada tema | Paquete SCORM | Drive «3 Quiz juego SCORM» |
| Infografía animada del módulo | Paquete SCORM | Drive «4 Infografías» |
| Actividad 1 de cada tema | Foro propio de la actividad, dentro del tema, calificado con rúbrica | Drive «10 Actividades de aplicación práctica» |
| Actividad 2 de cada tema | Tarea con calificación avanzada por rúbrica | Drive «10 Actividades de aplicación práctica» |
| Caso de aplicación | Página o archivo PDF; su pregunta va al foro del módulo | Drive «5 Casos de aplicación» |
| Foros | Foro (uno por módulo y uno general) | Drive «13 Foros» |
| Glosario | Glosario, importando el XML | Drive «11 Glosario» |
| Guía del facilitador | Archivo en una sección oculta para estudiantes | Drive «14 Guía del facilitador» |

## Sección inicial · Bienvenida al curso

- Video de inducción, guía del participante y evaluación diagnóstica${PEND}.
- Foro de interacción del curso (presentación y consultas).
- Glosario del curso.

`;
for (const m of curso.modulos) {
  md += `## Módulo ${m.n} · ${m.nombre}\n\n**Competencia del módulo:** ${m.competencia}\n\n- Video de bienvenida del módulo${PEND}.\n`;
  for (const a of m.aes) {
    const [a1, a2] = actividades(a.id);
    md += `- **${a.tema}.** Aprendizaje esperado: ${a.texto}\n  - Contenido: Rise «${a.tema}» (SCORM).\n  - Quiz formativo «${a.tema}» (SCORM).\n`
      + (a1 ? `  - Actividad 1 · ${a1} (foro de la actividad, con rúbrica).\n` : '')
      + (a2 ? `  - Actividad 2 · ${a2} (tarea con rúbrica).\n` : '');
  }
  const cs = casos(m.n);
  if (cs.length) md += cs.map(c => `- Caso de aplicación: ${c}.\n`).join('');
  md += `- Foro del módulo ${m.n}: qué, por qué y para qué.\n- Resumen del módulo: infografía animada (SCORM) y video de resumen${PEND}.\n- Evaluación del módulo${PEND}.\n\n`;
}
md += `## Cierre del curso

- Evaluación final aplicativa, con pauta de evaluación y pauta de corrección${PEND}.

## Sección oculta para estudiantes · Facilitador

- Guía del facilitador (pautas de corrección de las 44 actividades y moderación de los foros). La ve el rol docente, incluido quien
  revisa el curso para SENCE.
`;
fs.writeFileSync(path.join(RAIZ, 'docs', 'MAPA-AULA-MOODLE.md'), md);
const codigos = md.match(/\bM\d-(?:AE|T|C)\d\b|\bP\d\d\b/g);
console.log(`docs/MAPA-AULA-MOODLE.md${codigos ? ' · ⚠ códigos: ' + [...new Set(codigos)].join(' ') : ''}`);
