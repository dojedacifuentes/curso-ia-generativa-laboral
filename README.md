# IA generativa para entornos laborales

Curso e-learning de 6 módulos, 22 aprendizajes esperados (AE) y 88 horas, producido a partir de la planilla
«Estructura_inicial_contenido_IA_generativa». Este repositorio tiene todo: la planilla convertida en datos, las fuentes, el
contenido base, los quiz, las infografías, los casos reales, las prácticas, las evaluaciones, los foros, la guía del facilitador,
el generador del aula Moodle, los guiones de los videos, los scripts que generan y auditan, y un panel para verlo y rastrearlo.

## Estado

**Al 03-11-2026: la versión 1 tiene el primer visto bueno del cliente** en el contenido, las secciones y la estructura, y **empieza
la fase 2**: ajustar el curso a la nueva guía técnica del SENCE con que se revisan y aprueban las solicitudes de cursos por
franquicia tributaria.

- Qué aprobó el cliente, la bitácora y los pendientes: [ESTADO.md](ESTADO.md).
- La auditoría completa de la guía del SENCE, con la tabla de verdad para comparar el curso: [docs/SENCE-TABLA-DE-VERDAD.md](docs/SENCE-TABLA-DE-VERDAD.md), también en Word.
- Su resumen punto por punto: [docs/SENCE-GUIA-TECNICA-FT.md](docs/SENCE-GUIA-TECNICA-FT.md).
- La versión aprobada queda congelada en la etiqueta
  [`v1.0-visto-bueno-cliente`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/tree/v1.0-visto-bueno-cliente); lo que
  cambie después se ve en la [comparación con `main`](https://github.com/dojedacifuentes/curso-ia-generativa-laboral/compare/v1.0-visto-bueno-cliente...main).
- En el panel, la vista «Estado» es la portada: https://curso-ia-generativa-laboral.vercel.app

## La planilla de origen

Todo el curso se rastrea hasta la planilla «Estructura_inicial_contenido_IA_generativa»: módulos, competencias, AE, saberes,
criterios, los 101 recursos con sus horas, casos, evaluación, cumplimiento de la RE 2.484 y pendientes. Está en tres lugares:
- en este repo, `data/planilla/Estructura_inicial_contenido_IA_generativa.xlsx` (copia del 25-10-2026);
- en Drive, carpeta «0 Planilla de origen»: [hoja de cálculo](https://docs.google.com/spreadsheets/d/1F5qgZLYTQjOgJOXPuCIaULKLBGVlgSdrLeokTpgxCR0/edit) y [.xlsx](https://drive.google.com/file/d/1Oh09aEp8waXC9m8gQ3_muVcqtWxFRq6B/view);
- la original, de Natalia: [Estructura_inicial_contenido_IA_generativa](https://docs.google.com/spreadsheets/d/1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM/edit).

La original manda. Si cambia, se descarga como .xlsx, se convierte con `node scripts/xlsx2tsv.mjs` y se corre
`node scripts/importar-planilla.mjs`; después se reemplazan las copias.

## El panel

`panel/` arma un sitio estático con el estado del proyecto (fases, versión aprobada, guía del SENCE punto por punto y bitácora,
leídos de `ESTADO.md` y `docs/SENCE-GUIA-TECNICA-FT.md`), la metodología, la matriz, la trazabilidad (código de la planilla →
pantalla → fuente → pregunta del quiz), los 101 recursos, los casos, las fuentes, los pendientes, la auditoría y los documentos
del flujo y de cada decisión.
Vercel lo publica en cada push a `main` (ver `vercel.json`): **https://curso-ia-generativa-laboral.vercel.app**

```bash
npm install
npm run panel
```

El sitio queda en `panel/dist`. Para verlo en el computador: `npx http-server panel/dist`.

## Dónde está cada cosa

| Carpeta | Qué tiene |
|---|---|
| `data/` | La planilla de origen (`planilla/Estructura_inicial_contenido_IA_generativa.xlsx`), su conversión por hoja (`planilla/*.tsv`), `curso.json`, los ids de Drive y la auditoría de la guía del SENCE (`sence/guia-tecnica.json`) |
| `investigacion/` | Fuentes del contenido y fichas de verificación de los casos |
| `contenido/` | Contenido base por AE, pantalla por pantalla |
| `quiz/` | Preguntas de los 22 quiz |
| `infografias/` | Datos de las 6 infografías |
| `casos/` | Los 10 casos reales del aula, su rúbrica y los descartados (`casos/descartados/`) |
| `actividades/` | Las 44 prácticas autoevaluadas (2 por AE), con instrucción general, rúbrica y respuesta modelo |
| `evaluaciones/` | Diagnósticas, evaluaciones de módulo y evaluación final |
| `foros/` | Consignas de los foros de cada módulo y del foro de interacción |
| `guia-facilitador/` | Pautas de corrección por AE y moderación de foros |
| `glosario/` | Glosario de cada módulo |
| `pitch/` | El pitch del proyecto, práctica evaluada del módulo 6 |
| `videos/` | Guion, slides y subtítulos de los videos de cada módulo y del video de inducción (el audio y el video no se suben) |
| `scripts/` | Importar, validar, generar, compilar, armar el aula Moodle y auditar |
| `entregables/` | Lo generado: Docs, PDF, SCORM, HTML, GIFT, PNG, el aula Moodle (`moodle/aula.json`), los Rise, la auditoría y el Word de la guía del SENCE (`sence/`) |
| `docs/` | Criterios fechados, observaciones de Natalia, aula Moodle, guía del SENCE, formatos, revisión de fondo, proceso y auditoría |
| `.claude/skills/` | Las instrucciones que usa Claude en cada etapa |

## Flujo

1. `node scripts/importar-planilla.mjs`: planilla → `data/curso.json`
2. Investigación en `investigacion/` (solo fuentes abiertas y leídas)
3. Contenido en `contenido/` y `node scripts/validar-contenido.mjs`
4. `node scripts/quiz-juego.mjs`: quiz en SCORM 1.2, HTML y GIFT
5. `node scripts/infografias.mjs`: infografías HTML y PNG
6. Casos en `investigacion/casos/` y `casos/`, con `node scripts/validar-casos.mjs`
7. `node scripts/compilar-contenidos.mjs`: Docs, páginas y PDF
8. `node scripts/rise-generar.mjs <AE>` y armado en Rise EU, exportados en SCORM 1.2 (`entregables/rise/LEEME.md`)
9. Videos de bienvenida y resumen por módulo e inducción en `videos/` (skill `curso-video-modulo`: voz y avatar de EVA, slides HTML, Python + ffmpeg)
10. Subida a Drive (skill `curso-drive`)
11. `node scripts/moodle-aula.mjs`: `entregables/moodle/aula.json`, que el armador `scripts/lib/moodle-armador.js` monta en el aula (`docs/AULA-MOODLE.md`)
12. `node scripts/auditar.mjs`: auditoría en 10 capas contra la planilla
13. `node scripts/sence-auditoria.mjs`: Word y Markdown de la tabla de verdad de la guía del SENCE, desde `data/sence/guia-tecnica.json`

Cada decisión que cambia el curso queda en un documento fechado (`docs/CRITERIOS-<fecha>.md` u `docs/OBSERVACIONES-NATALIA-<fecha>.md`)
y en la bitácora de [ESTADO.md](ESTADO.md).

Las reglas completas están en [WORKFLOW.md](WORKFLOW.md) y los formatos en `FORMATO-CONTENIDO-BASE.md` y `docs/FORMATO-*.md`.
