# IA generativa para entornos laborales

Curso e-learning de 6 módulos, 22 aprendizajes esperados (AE) y 88 horas, producido a partir de la planilla
«Estructura_inicial_contenido_IA_generativa». Este repositorio tiene todo: la planilla convertida en datos, las fuentes, el
contenido base, los quiz, las infografías, los casos reales, los scripts que generan y auditan, y un panel para verlo y rastrearlo.

## El panel

`panel/` arma un sitio estático con la metodología, la matriz, la trazabilidad (código de la planilla → pantalla → fuente →
pregunta del quiz), los 101 recursos, los casos, las fuentes, los pendientes, la auditoría y los documentos del flujo.
Vercel lo publica en cada push a `main` (ver `vercel.json`).

```bash
npm install
npm run panel
```

El sitio queda en `panel/dist`. Para verlo en el computador: `npx http-server panel/dist`.

## Dónde está cada cosa

| Carpeta | Qué tiene |
|---|---|
| `data/` | La planilla por hoja (`planilla/*.tsv`), `curso.json` y los ids de Drive |
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
