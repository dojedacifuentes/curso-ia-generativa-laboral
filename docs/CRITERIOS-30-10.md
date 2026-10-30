# Criterios del 30-10: estructura SENCE, rúbricas, guía del facilitador, foros y vista sin códigos

Base: «Estructura cursos asincrónicos – requisitos diseñador» (Codifica Consultores) y decisiones del usuario del 30-10 (plan en
`docs/PLAN-SENCE-30-10.md`). SENCE evalúa el curso; **el evaluador tendrá perfil docente** en Moodle, así que ve lo mismo que el
facilitador.

## 1. Actividades de aplicación práctica (`actividades/M<n>-AE<k>.md`)

Se mantienen las 2 por AE (44), y las 44 se evalúan con rúbrica. Formato de cada actividad:

```
## Actividad 1 · Título
cubre: H1, H2, C1
fuentes: F-…, F-…
entrega: foro                ← actividad 1 = foro del módulo; actividad 2 = tarea

### Instrucción general
### Situación
### Lo que vas a hacer
### Lo que entregas
### Rúbrica
```

- **Instrucción general** (prosa, 3 a 5 frases): qué vas a hacer y para qué; dónde se entrega; en qué formato; que se evalúa con la
  rúbrica de abajo; y cuándo responde el facilitador.
  - Actividad 1 → se publica en el **foro del módulo** (el aporte lo ven el facilitador y el curso; como usa datos ficticios, no
    hay problema de privacidad). El facilitador responde en el foro dentro de 24 horas hábiles.
  - Actividad 2 → se sube como **tarea** en el aula (solo la ven la persona y el facilitador, porque trabaja con una tarea real de
    su cargo). El facilitador la revisa con la rúbrica y deja su retroalimentación en un plazo de hasta 72 horas.
- **Lo que entregas**: se ajusta para decir dónde se entrega (foro o tarea).
- **Rúbrica**: tabla con 3 o 4 criterios, la misma escala que la rúbrica general de la planilla:

  `| Criterio | Peso | Logrado (100 %) | Parcial (60 %) | No logrado (0 %) |`

  Los pesos suman 100 %. Los criterios salen de los criterios de evaluación C de la planilla que trabaja la actividad (lo que ya
  decía «Cómo se revisa») y de lo que se entrega. Cada nivel describe lo observable, sin respuestas tipo. Bajo la tabla, una
  frase: «La actividad se aprueba con 60 % o más.»
- **Se quita «### Cómo se revisa»** de la actividad: lo que decía sobre la respuesta esperada («Lo esperable es que…») pasa a la
  pauta de corrección de la guía del facilitador. El estudiante ve la rúbrica, no las respuestas tipo.
- Sin códigos a la vista: las remisiones «pantalla 4» o «P13» pasan al nombre de la sección («la sección «Laboratorio de
  prompts»»), tomado del título de esa pantalla en `contenido/`.

## 2. Guía del facilitador (`guia-facilitador/M<n>-AE<k>.md`, `guia-facilitador/Foros.md`)

Documento para el facilitador y el evaluador (perfil docente); en Moodle va oculto para estudiantes o restringido al rol docente.
Por AE:

```
# Guía del facilitador · <tema del AE>

## Actividad 1 · Título
### Dónde se entrega y cuándo responder
### Pauta de corrección
### Retroalimentación sugerida
```

- **Pauta de corrección**: por cada criterio de la rúbrica, la respuesta tipo o lo que debe aparecer para «Logrado», y los errores
  frecuentes que llevan a «Parcial» o «No logrado».
- **Retroalimentación sugerida**: uno o dos ejemplos de comentario breve, en tuteo, para «Logrado» y para «Parcial».
- Sin códigos de AE ni de pantalla en el texto (sí se puede nombrar el tema y la sección).

## 3. Foros (`foros/M<n>.md` y `foros/General.md`)

- Un foro por módulo, con la consigna **qué, por qué y para qué** (qué aprendí o qué hice, por qué importa en mi trabajo, para qué
  lo voy a usar), que conecta la competencia del módulo con el cargo de cada persona. Recibe además las publicaciones de la
  actividad 1 de cada AE del módulo y la pregunta «Para el foro» de los casos del módulo.
- Un foro general de interacción, abierto todo el curso: presentación y consultas.
- Formato: `# Foro …`, `### Instrucción general`, `### Consigna`, `### Cómo participar`, `### Rúbrica de participación` (misma
  escala), y la moderación en `guia-facilitador/Foros.md` (respuesta del tutor en menos de 24 horas hábiles, según la planilla).

## 4. Vista del estudiante sin códigos

Ningún recurso que ve el estudiante o el evaluador muestra códigos internos (M1-AE1, M1-T1, M1-C1, P01, «pantalla 14», F-…,
«cubre:»). Los nombres de archivo en Drive y las fuentes del repo sí los conservan. Al generar:

- quiz: «Pantalla P03 del Rise M1-T1: «X»» → «Repasa la sección «X» del tema «Tema»»; portada con módulo y tema, sin código;
- infografía animada: pie sin código ni pantallas; es la **única** infografía que se entrega (la estática sale de Drive);
- actividades y casos: sin la línea de metadatos (cubre, cita, bloque) y sin códigos en títulos ni texto (`M5-AE1` → «el tema
  «Potencial de automatización»»);
- glosario: secciones por tema, sin código.

Control: `node scripts/revisar-criterios.mjs` y la auditoría fallan si aparece un código en lo que ve el estudiante.

## Estilo

Español de Chile, tuteo, frases cortas y prosa (criterios del 28-10). Las rúbricas son tablas por naturaleza; el resto, sin
subtítulos ni viñetas de más.
