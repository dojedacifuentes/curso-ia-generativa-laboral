# IA generativa para entornos laborales

Curso e-learning de 6 módulos, 22 aprendizajes esperados (AE) y 88 horas, producido a partir de la planilla
«Estructura_inicial_contenido_IA_generativa». Este repositorio tiene todo: la planilla convertida en datos, las fuentes, el
contenido base, los quiz, las infografías, los casos reales, los scripts que generan y auditan, y un panel para verlo y rastrearlo.

## La planilla de origen

Todo el curso se rastrea hasta la planilla «Estructura_inicial_contenido_IA_generativa»: módulos, competencias, AE, saberes,
criterios, los 101 recursos con sus horas, casos, evaluación, cumplimiento de la RE 2.484 y pendientes. Está en tres lugares:
- en este repo, `data/planilla/Estructura_inicial_contenido_IA_generativa.xlsx` (copia del 25-10-2026);
- en Drive, carpeta «0 Planilla de origen»: [hoja de cálculo](https://docs.google.com/spreadsheets/d/1F5qgZLYTQjOgJOXPuCIaULKLBGVlgSdrLeokTpgxCR0/edit) y [.xlsx](https://drive.google.com/file/d/1Oh09aEp8waXC9m8gQ3_muVcqtWxFRq6B/view);
- la original, de Natalia: [Estructura_inicial_contenido_IA_generativa](https://docs.google.com/spreadsheets/d/1v_NCRQGZnajDLesIw8haIMrw4551q6C8Om6AOM8RoHM/edit).

La original manda. Si cambia, se descarga como .xlsx, se convierte con `node scripts/xlsx2tsv.mjs` y se corre
`node scripts/importar-planilla.mjs`; después se reemplazan las copias.

## El panel

`panel/` arma un sitio estático con la metodología, la matriz, la trazabilidad (código de la planilla → pantalla → fuente →
pregunta del quiz), los 101 recursos, los casos, las fuentes, los pendientes, la auditoría y los documentos del flujo.
Vercel lo publica en cada push a `main` (ver `vercel.json`): **https://curso-ia-generativa-laboral.vercel.app**

```bash
npm install
npm run panel
```

El sitio queda en `panel/dist`. Para verlo en el computador: `npx http-server panel/dist`.

## Dónde está cada cosa

| Carpeta | Qué tiene |
|---|---|
| `data/` | La planilla de origen (`planilla/Estructura_inicial_contenido_IA_generativa.xlsx`), su conversión por hoja (`planilla/*.tsv`), `curso.json` y los ids de Drive |
| `investigacion/` | Fuentes del contenido y fichas de verificación de los casos |
| `contenido/` | Contenido base por AE, pantalla por pantalla |
| `quiz/` | Preguntas de los 22 quiz |
| `infografias/` | Datos de las 6 infografías |
| `casos/` | Los 11 casos con empresas reales |
| `scripts/` | Importar, validar, generar, compilar y auditar |
| `entregables/` | Lo generado: Docs, PDF, SCORM, HTML, GIFT, PNG, auditoría |
| `docs/` | Formatos, revisión de fondo, pendientes, proceso y auditoría |
| `.claude/skills/` | Las instrucciones que usa Claude en cada etapa |

## Flujo

1. `node scripts/importar-planilla.mjs`: planilla → `data/curso.json`
2. Investigación en `investigacion/` (solo fuentes abiertas y leídas)
3. Contenido en `contenido/` y `node scripts/validar-contenido.mjs`
4. `node scripts/quiz-juego.mjs`: quiz en SCORM 1.2, HTML y GIFT
5. `node scripts/infografias.mjs`: infografías HTML y PNG
6. Casos en `investigacion/casos/` y `casos/`, con `node scripts/validar-casos.mjs`
7. `node scripts/compilar-contenidos.mjs`: Docs, páginas y PDF
8. Subida a Drive (skill `curso-drive`)
9. `node scripts/auditar.mjs`: auditoría en 10 capas contra la planilla

Las reglas completas están en [WORKFLOW.md](WORKFLOW.md) y los formatos en `FORMATO-CONTENIDO-BASE.md` y `docs/FORMATO-*.md`.
