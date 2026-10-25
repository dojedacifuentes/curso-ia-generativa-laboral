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
- Audiencia: personas cesantes o en búsqueda de empleo, y personas que ya trabajan. Los ejemplos usan cargos y tareas comunes, sin
  suponer un empleo actual ni licencias pagadas. Las herramientas deben tener plan gratuito y usarse desde el celular.
- Español de Chile, tuteo, frases cortas. Sin cifras ni casos reales sin fuente: los casos con empresas reales van en su propio recurso
  (hoja «Casos y proyecto»), una vez verificados.
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
## Glosario               → glosario del módulo («- **Término**: definición»)
## Conexión con el proyecto → hito del módulo
## Fuentes                → lista de los ids citados: «- F-M1-01 · Organismo (año). Título. URL»
```

Toda pantalla con afirmaciones de hecho lleva `fuentes:`. Solo se citan ids que existen en `investigacion/`, y ahí cada fuente
ya se abrió y se leyó (ver `WORKFLOW.md`).

## Qué se deriva de cada parte

| Derivado | Sale de | Cómo |
|---|---|---|
| Rise (Natalia) | Las pantallas P01…Pnn | Una pantalla = una sección o lección del Rise; `bloque:` sugiere el tipo de bloque |
| Quiz juego SCORM (8 ítems) | Pantallas + recuadros `:::error` | Cada ítem lleva `remite: Pxx`: la pantalla a la que vuelve quien falla (acción remedial). Se genera con `quiz-juego` |
| Infografía del módulo (HTML) | `Ideas clave` de los AE del módulo | Generador HTML → PNG con paleta neutra |
| Video de bienvenida | Texto de los AE + `Conexión con el proyecto` | Guion de 3 minutos (unas 400 palabras) |
| Video de resumen | `Ideas clave` de los AE del módulo | Guion de 3 minutos |
| Resumen y glosario | `Ideas clave` + `Glosario` | Página de Moodle + XML de glosario |
| Evaluación sumativa | Criterios C1…Cn + pantallas | Banco GIFT con categoría por AE |

## Control

`node scripts/validar-contenido.mjs` revisa, por AE:
- número de pantallas;
- que cada código exista en la planilla;
- cobertura del 100 % de los códigos;
- que el texto del AE esté igual;
- que haya ideas clave, glosario y fuentes;
- extensión de cada pantalla.
