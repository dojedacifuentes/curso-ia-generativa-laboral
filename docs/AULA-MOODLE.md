# Aula Moodle del curso (30-10)

Curso **«IA generativa para entornos laborales»** en https://formacion.empoderatech.com/course/view.php?id=2 (Moodle 5.3, tema
Moove con la marca Empoderatech). Nombre corto `IA-GENERATIVA-LABORAL`, categoría «Categoría 1», visible (pedido del usuario),
formato por temas con todas las secciones en una página, finalización de actividades activada.

## Cómo se arma

1. `node scripts/compilar-contenidos.mjs` (lo que ve el estudiante, sin códigos ni remisiones).
2. `node scripts/moodle-aula.mjs` → `entregables/moodle/aula.json`: etiquetas con la marca, textos de actividades, casos y foros con
   estilos en línea (Moodle quita los `<style>`), rúbricas leídas de las tablas de cada actividad y foro, y rutas de los SCORM.
   Se detiene si falta un archivo, si una rúbrica no suma 100 % o si aparece un código interno.
3. `node scripts/moodle-imagen.mjs` → `entregables/moodle/curso-imagen.png` (imagen del curso en el catálogo).
4. En el Chrome del usuario, con su sesión, en `course/view.php?id=2`: un `<input type=file>` propio, `file_upload` del armador
   (`scripts/lib/moodle-armador.js`), de `aula.json`, de los SCORM (quiz e infografías juntos; cada Rise por separado, pesa ~5,4 MB)
   y de los PDF del facilitador. `eval` del armador y `aula = JSON.parse(...)`.
5. `armarInicio(2, aula)`, `armarModulo(2, aula, n)` para n = 1…6 y `armarFacilitador(2, aula)`. Son idempotentes: lo que ya existe
   en su sección (mismo nombre) no se repite, así que si algo se corta se vuelve a correr.

## Estructura

- **Bienvenida:** portada (curso y ruta de los 6 módulos), «Cómo avanzas» (los 4 pasos de cada tema), Avisos, foro de interacción
  del curso, glosario (267 términos importados del XML; 12 se repetían entre módulos y Moodle no acepta duplicados), e inducción y
  evaluación diagnóstica del curso como espacios reservados ocultos.
- **Módulo n:** resumen de la sección con la competencia y los temas; video de bienvenida y diagnóstica (reservados, ocultos); por
  tema: etiqueta con el aprendizaje esperado y los pasos, **Contenido** (Rise SCORM), **Quiz** (SCORM con nota), **Actividad 1**
  (foro propio con rúbrica de Moodle) y **Actividad 2** (tarea con rúbrica de Moodle); casos de aplicación (páginas); foro del
  módulo «qué, por qué y para qué» con rúbrica de participación; infografía animada (SCORM); video de resumen y evaluación del
  módulo (reservados, ocultos).
- **Para el facilitador** (sección oculta: la ve el rol docente, incluido el evaluador SENCE): guía del facilitador con las pautas
  de corrección y mapa del aula, en PDF.

## Ajustes

- SCORM en la misma ventana, sin página de entrada (`skipview` 2, se nota con rol estudiante), sin índice ni barra de navegación
  (`hidetoc` 3, `nav` 0), ancho 100 %. Rise sin nota (`maxgrade` 0), se completa al terminarlo; quiz con nota 0-100.
- Rúbricas: cada criterio con su peso como puntaje (logrado = peso, parcial = 60 % del peso, no logrado = 0); nota máxima 100,
  aprueba con 60. Visibles para el estudiante con definiciones y puntajes.
- Finalización: páginas y glosario al verlos; SCORM al completarlos; foro de actividad al abrir un hilo; foro del módulo y foro
  general al publicar; tarea al entregar; etiquetas sin casilla.
- Cambio del 30-10: la actividad 1 de cada tema tiene **su propio foro** (un foro de Moodle da una sola nota por estudiante); el
  foro del módulo queda para la consigna y los casos. Textos de actividades, foros y guía ajustados.

## Pendiente

Videos (bienvenida, resumen, inducción), evaluaciones diagnósticas y del módulo, y evaluación final: hoy son espacios reservados
ocultos que se reemplazan cuando estén. Matricular al evaluador SENCE con rol docente (lo decide el usuario).
