# Formato del contenido base

Un archivo por aprendizaje esperado: `contenido/M<n>/M<n>-AE<k>.md`. Es la **fuente única**. El Rise (lo arma Natalia), los quiz,
los guiones de video, la infografía, el glosario y la evaluación sumativa salen de aquí. Si algo está mal en un derivado, se corrige
aquí y se vuelve a generar.

## De dónde sale lo que se escribe

Solo de la planilla, importada a `data/curso.json` con `node scripts/importar-planilla.mjs`. Cada AE trae contenidos con código:

| Código | Columna de la planilla | Ejemplo M1-AE1 |
|---|---|---|
| S1…Sn | Saber (conocimientos), partido por «;» | S3 = tokens y contexto |
| H1…Hn | Saber hacer (habilidades) | H2 = probar un asistente con una tarea simple |
| A1…An | Saber ser (actitudes) | A1 = Curiosidad crítica |
| C1…Cn | Criterios de evaluación (hoja Matriz coherencia) | C2 = Ejemplifica al menos 3 usos y 2 límites… |

Reglas:
- **Todo código se cubre** en al menos una pantalla. **No hay pantallas sin código**: si un tema no está en la planilla, no entra.
- El texto del AE va igual que en la planilla.
- Pantallas: exactamente las de la columna «Pantallas Rise» (M1-AE1 = 16).
- La técnica metodológica de la planilla manda el tipo de pantallas. Por ejemplo, «exposición interactiva + ejemplos guiados» pide un
  ejemplo laboral en casi todas.
- Audiencia (cambio del 28-10): **solo personas que están trabajando**, que usan IA en tareas administrativas y de productividad. Los
  ejemplos hablan de su cargo actual. Las herramientas siguen siendo gratuitas y usables desde el celular. Detalle en
  `docs/CRITERIOS-28-10.md`.
- Español de Chile, tuteo, frases cortas. Sin cifras sin fuente. Los casos con empresas reales van solo en su propio recurso
  (`casos/`): el contenido no los nombra.
- Máximo 2 fuentes y 1 recuadro por pantalla; prosa antes que listas (ver `docs/CRITERIOS-28-10.md` §5). Control:
  `node scripts/revisar-criterios.mjs`.
- Personajes de ejemplo ficticios y recurrentes: no son empresas ni personas reales.

## Estructura del archivo

```
# M1-AE1 · Fundamentos de IA generativa

## P01 · Título de la pantalla
cubre: S1, C1
fuentes: F-M1-01, F-H-03      ← ids de investigacion/M1.md o HERRAMIENTAS.md que respaldan lo que se afirma
bloque: Texto + imagen        ← sugerencia para Natalia (tipo de bloque de Rise)

Texto de la pantalla (unas 200–300 palabras).

:::ejemplo Título             ← caso laboral breve
:::
:::error Título               ← error o creencia equivocada frecuente (alimenta los distractores del quiz)
:::
:::clave                      ← idea que hay que llevarse
:::
:::actividad Título           ← lo que la persona hace en esa pantalla
:::
:::comprueba                  ← pregunta de verificación dentro del Rise (knowledge check)
Pregunta
- a) …
- **b) correcta**
Retroalimentación: …
:::

## P02 · …
…
## Ideas clave            → video de resumen del módulo e infografía
## Referencias bibliográficas → lista APA 7 con enlaces; la escribe `node scripts/referencias-apa.mjs --escribir`

(29-10: sin «Glosario», que va en `glosario/M<n>.md`, ni «Conexión con el proyecto». En el texto, cada afirmación lleva su marca
`[@F-M1-02]` y el compilador la convierte en la cita APA: ver `docs/CRITERIOS-29-10.md` §1.)
```

Toda pantalla con afirmaciones de hecho lleva `fuentes:`. Solo se citan ids que existen en `investigacion/`, y ahí cada fuente
ya se abrió y se leyó (ver `WORKFLOW.md`).

## Qué se deriva de cada parte

| Derivado | Sale de | Cómo |
|---|---|---|
| Rise (Natalia) | Las pantallas P01…Pnn | Una pantalla = una sección o lección del Rise; `bloque:` sugiere el tipo de bloque |
| Quiz juego SCORM (8 ítems) | Pantallas + recuadros `:::error` | Cada ítem lleva `remite: Pxx`: la pantalla a la que vuelve quien falla (acción remedial). Se genera con `quiz-juego` |
| Infografía del módulo (HTML) | `Ideas clave` de los AE del módulo | Generador HTML → PNG con paleta neutra |
| Video de bienvenida | Texto de los AE + actividades de aplicación práctica | Guion de 3 minutos (unas 400 palabras) |
| Video de resumen | `Ideas clave` de los AE del módulo | Guion de 3 minutos |
| Resumen y glosario | `Ideas clave` + `glosario/M<n>.md` | Documento «Glosario» (Doc, PDF) + XML de glosario de Moodle |
| Actividades de aplicación práctica | `actividades/M<n>-AE<k>.md` (2 por AE) | Doc y PDF por AE con la marca |
| Evaluación sumativa | Criterios C1…Cn + pantallas | Banco GIFT con categoría por AE |

## Control

`node scripts/validar-contenido.mjs` revisa, por AE:
- número de pantallas;
- que cada código exista en la planilla;
- cobertura del 100 % de los códigos;
- que el texto del AE esté igual;
- que haya ideas clave, glosario y fuentes;
- extensión de cada pantalla.
