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

## Configuración del curso (30-10, segunda parte)

- **Aviso de bienvenida** del equipo docente, fijado en Avisos.
- **Glosario:** los estudiantes no pueden agregar entradas (capacidad `mod/glossary:write` prohibida para Estudiante en el glosario).
- **Libro de calificaciones** (agregación natural, la única activa en el sitio), según la hoja «Evaluación» de la planilla:
  Hitos del proyecto M1–M5 15 %, Pitch y portafolio (hitos 6c y 6d) 15 %, Evaluaciones de módulo 40 %, Evaluación final 30 %,
  Actividades formativas 0 % (Rise, quiz, infografías, actividades 1, actividades 2 que no son hito, hitos 6a y 6b y foros). Las
  categorías de evaluaciones de módulo y final están vacías hasta que se carguen.
- **Escala 1,0 a 7,0** como letras del curso (4,0 desde 60 %; sobre 60 % se redondea a la media nota más cercana; bajo 60 %,
  1,0 + 3·p/60 con corte en medias notas); las notas se muestran como «Letra (porcentaje)».
- **Finalización del curso (corregido el 03-11):** lo real en Moodle son 57 actividades (7 foros y 50 SCORM), ninguna tarea ni cuestionario, y 60 puntos de un total de 1.800, que son 3,3 % de la nota, no 60 %. Ver `docs/SENCE-TABLA-DE-VERDAD.md`, corrección C-01. Lo que se quiso dejar fue: completar las 113 actividades visibles con finalización y nota del curso de 60 % o más. Al
  agregar las evaluaciones, sumarlas a los criterios.
- **Insignias** (`scripts/moodle-insignias.mjs`, imágenes en `entregables/moodle/insignias/`): una por módulo (ids 1 a 6, al
  completar todas las actividades visibles del módulo) y una de curso completado (id 7, al finalizar el curso). Activas. Tarjeta
  «Insignias que puedes ganar» en la bienvenida.
- **Portada de cada módulo** con una barra de seis segmentos que marca en qué módulo está la persona.
- **Estilos y animaciones** (`scripts/lib/moodle-estilos.css`): van al final del «SCSS sin procesar» del tema Moove, entre los
  comentarios `cc-ia-generativa`, limitados a `body.course-2`. Tarjetas que se elevan, íconos y botones de avance con la marca,
  fundido al bajar (animación por scroll, sin relleno final para no tapar los menús), arcos que respiran y brillo en la insignia
  de hito. El botón de avance dice «Tu avance» en vez de «Pendiente de hacer» (que se leía como si al aula le faltara algo) y el índice tiene un botón «Índice del curso» para abrirlo y otro «Cerrar». En el CSS los textos no ASCII van con escapes (`\00CD`), porque el compilador del tema descartaba el bloque. Respeta «reducir movimiento». El navegador puede mostrar el CSS anterior hasta recargar sin caché.

## Cambios del 31-10 (observaciones de Natalia)

La docente revisó la estructura en la planilla «Acta de compromisos», pestaña «Estructura moodle»
(`docs/OBSERVACIONES-NATALIA-31-10.md`). El usuario pidió que primara lo que ella dice. Quedó así:

- **Horas:** el curso se llama «IA generativa para entornos laborales (88 horas)» y cada módulo lleva sus horas en el título y
  en la portada (16 h los módulos 1 a 4, 12 h los módulos 5 y 6; hoja «Resumen horas» de la planilla).
- **Bienvenida:** «Cómo avanzas» tiene tres pasos por tema (Aprende, Practica, Aplica en tu trabajo) y nombra la práctica evaluada,
  el foro de casos, el resumen con video y glosario, la evaluación del módulo, la final y los videos. Avisos muestra a la docente
  (Natalia Hernández · natalia@empoderatech.cl). Se quitaron la evaluación diagnóstica y el glosario del curso.
- **Actividades formativas 1 y 2 de cada tema:** tarea con entrega, sin nota, con la rúbrica de autoevaluación en el enunciado
  (Lo logré / Lo logré en parte / Aún no). La actividad 1 dejó de ser foro (se borró su foro) y ya no invita a compartir en un foro.
- **Casos de aplicación = práctica evaluada:** tarea con entrega calificada por el facilitador con la rúbrica de `casos/RUBRICA.md`
  (análisis 30 %, uso de lo aprendido 25 %, aplicación al proyecto 25 %, datos 10 %, comunicación 10 %). Se borraron las páginas
  de casos. El módulo 6 no tiene casos.
- **Foro del módulo:** sale «qué, por qué y para qué»; queda el «Foro de casos del módulo N» (sin nota) para resultados de los
  casos, preguntas para conversar y consultas. En el módulo 6, «Foro del módulo 6» para los avances del proyecto.
- **Glosario del módulo:** uno por módulo con buscador (XML `entregables/glosario/Glosario-M<n>-Moodle.xml`), sin escritura
  para estudiantes.
- **Evaluación del módulo:** cuestionario de Moodle (2 intentos, nota más alta, aprueba con 60 %) con casos y alternativas y
  retroalimentación en cada alternativa. Fuente `evaluaciones/M<n>.json` → GIFT en `entregables/moodle/evaluaciones/`.
- **Evaluación final:** sección propia antes de «Para el facilitador», cuestionario con cuatro casos integradores y 22 preguntas,
  una por aprendizaje esperado (`evaluaciones/Final.json`).
- **Guía del facilitador y mapa del aula:** nuevas, con «Cómo se evalúa el curso», la pauta de los casos y de las evaluaciones y
  la pauta de referencia de las actividades formativas.
- **Nota del curso:** casos 30 %, evaluaciones de módulo 40 %, evaluación final 30 %; lo formativo no pondera.

Funciones del armador para estos cambios: `cambios31Inicio`, `cambios31Todo(cid, aula, n)` (módulo, evaluación, orden y
glosario sin escritura), `cambios31Final`, `cambios31Facilitador`.

## Diseño del 31-10 (ideas del curso de referencia aprobado por SENCE)

El usuario mostró un curso aprobado por SENCE con el reglamento antiguo (Moodle de Aspasia, curso 48, «Habilidades Digitales para la
Empleabilidad»): cada módulo cuenta el reto de un personaje, muestra la «herramienta desbloqueada», tiene el video dentro de la
sección y encabezados con ícono por bloque, y cierra con las herramientas que la persona se lleva. Se tomaron las ideas, no su
diseño, con la marca Empoderatech:

- **Portada de cada módulo** con foto de los clips de Flow de los videos (`entregables/moodle/banners/`, fuente en
  `videos/M<n>-bienvenida/media/`), «El reto de <personaje>» y su pregunta, y debajo «Lo que te llevas» (el hito del proyecto) y la
  competencia del módulo. Textos en `data/retos.json`. La foto va en el área de archivos del resumen de la sección.
- **Portada del curso** con foto (`curso.jpg`).
- **Encabezados de bloque** con ícono Lucide (`scripts/lib/iconos-lucide/`): Empieza aquí, Práctica evaluada, Foro de casos, Resumen
  del módulo y Evaluación del módulo.
- **Videos de bienvenida y de resumen** se ven dentro de la sección (reproductor de Drive en la descripción de la página).
- **Cierre del curso** en la sección «Evaluación final»: lo que la persona se lleva de cada módulo y su siguiente tarea.

Funciones del armador: `diseno31Modulo(cid, aula, n)` y `diseno31Inicio(cid, aula)`.

## Autoevaluaciones y entrega de casos (31-10, segunda vuelta)

Pedido del usuario: las actividades formativas deben verse como autoevaluación, sin envío, con indicaciones y respuestas modelo, y
decirlo en el nombre; los casos deben tener en Moodle un espacio para subir el documento y donde el docente sube la nota y la
revisión.

- **Autoevaluación 1 y 2 de cada tema:** página (no tarea) con el aviso «Autoevaluación: no se envía ni lleva nota», la consigna,
  «Lo que preparas», la rúbrica de autoevaluación y la **respuesta modelo** plegada (`<details>`), que se abre al terminar.
  Finalización manual: el estudiante la marca como hecha. Fuente: sección `### Respuesta modelo` de `actividades/<AE>.md`
  (`entrega: autoevaluacion`). Se borraron las 44 tareas «Actividad formativa N».
- **Casos de aplicación:** dos piezas seguidas. La página «Caso de aplicación: …» para leerlo y la tarea **«Entrega y revisión
  docente: …»** (la misma tarea de antes, con su rúbrica y su categoría de notas), con entrega de archivo, comentarios y archivos de
  retroalimentación del docente activados.
- Función del armador: `autoevaluaciones31(cid, aula, n)`; después `diseno31Modulo` para encabezados, temas y orden.

## Índice, microanimaciones y auditoría (31-10, cierre)

- **Índice del curso** pegado al borde izquierdo (antes se abría a 175 px y tapaba el contenido): regla en `moodle-estilos.css`.
- **Microanimaciones** (mismo archivo, al final del bloque `cc-ia-generativa`; todas respetan «reducir movimiento»): zoom lento y
  barrido de luz en las portadas con foto, cursor que parpadea en «El reto de…», pulso de luz en el módulo actual de la barra de
  avance, degradado en movimiento e ícono que respira en los encabezados de bloque, destello en «Lo que te llevas», chips de vidrio
  esmerilado, respuesta modelo con flecha y apertura suave, check que se dibuja en el aviso de autoevaluación, ícono de subir que se
  mueve en la entrega de casos y giro de los íconos de actividad al pasar el mouse. Se reconocen por un trozo de su estilo en línea
  (`[style*=...]`), así que no hubo que tocar el contenido. Ojo: tras guardar el SCSS, la primera carga del CSS puede venir de la
  revisión anterior; se confirma recargando.
- **Auditoría** (`auditoria31(cid, aula)` del armador): orden de cada módulo contra `aula.json`, 2 videos embebidos por módulo,
  foto de portada que carga, ocultos esperados y textos viejos en la página del curso y en cada página, tarea, foro y cuestionario.
  Resultado del 31-10: sin hallazgos (solo el texto interno «Pendiente de hacer» del botón de Moodle, que el CSS muestra como «Tu
  avance»).
- Las actividades se llaman «Autoevaluación N · …» también en los archivos fuente (`actividades/`, `guia-facilitador/`).

## Cambios del 02-11 (antes de la reunión con Accenture; criterios en `docs/CRITERIOS-02-11.md`)

Hechos desde el PC 1 (el PC 2 no alcanzó a aplicar nada), con las funciones nuevas del armador (`notas02`, `practica02`, `quitar02`,
`textos02`, `induccion02`) cargado desde raw.githubusercontent con el commit del día.

- **Ponderación:** evaluación final 40 %; una categoría «Módulo n» (10 %) por módulo con su evaluación del módulo (50 %) y su práctica
  evaluada (50 % repartido entre los casos; en el módulo 6, el pitch). «Excluir calificaciones vacías» desmarcado en la raíz y en todas
  las categorías: lo que no se entrega cuenta como 0. Las categorías «Casos de aplicación (práctica evaluada)» y «Evaluaciones de
  módulo» del 31-10 quedaron vacías y se borraron; «Actividades formativas» sigue en 0. Textos nuevos en Avisos («Cómo se calcula tu
  nota»), «Cómo avanzas», los encabezados «Práctica evaluada» y «Evaluación del módulo», cada tarea de entrega («Esta entrega vale
  2,5 %…»), la guía del facilitador y el mapa.
- **Módulo 4 con dos casos:** se borraron la página y la tarea de «Licencias y datos de entrenamiento (Getty Images v. Stability AI)»
  (`quitar02`); el caso pasó a `casos/descartados/` y salió del foro de casos y de la guía.
- **Módulo 6: el pitch es la práctica evaluada.** Página «Pitch de tu proyecto» (`pitch/Pitch-del-proyecto.md`) y tarea «Entrega y
  revisión docente: Pitch de tu proyecto» con entrega de archivo (video o audio; tipos `.mp4,.mov,.webm,.m4v,.mp3,.m4a,.wav,.ogg` más
  guion en `.pdf,.docx,.txt`; hasta 2 archivos; tamaño máximo = límite del curso) y cuadro de texto para un enlace, rúbrica propia
  (6 criterios, suma 100), comentarios y archivo de retroalimentación del docente, categoría «Módulo 6». Encabezado «Práctica
  evaluada» nuevo en el módulo. El foro «Demo Day: foro del módulo 6» pasó a llamarse **«Foro del módulo 6»** (avance del proyecto y
  consultas; el pitch no va al foro). El quiz juego de «Resultados y aprendizajes» se regeneró sin la mención al Demo Day
  (`quizJuego01`). Trampa: el campo de tipos de archivo de la tarea es un grupo del formulario: va como
  `assignsubmission_file_filetypes[filetypes]`, no como `assignsubmission_file_filetypes` (Moodle responde «Cannot access offset of
  type string on string»).
- **Inducción al curso:** la página dejó de ser un espacio reservado y muestra la guía del participante (`guiaParticipante()` del
  generador), visible, después de «Cómo avanzas» (`induccion02`). **Video de inducción** (02-11, misma tarde): `videos/Induccion/`,
  2:19, voz de la presentadora (una toma, tiempos de palabra de HeyGen), presentadora a cámara en intro y cierre (21 s de render),
  capturas reales del aula en vista de estudiante (1536×639, índice lateral oculto) dentro de marcos de navegador, diagrama de la
  ponderación y consejos; marca Empoderatech, subtítulos incrustados y `.srt`. Alojado en la página «Inducción al curso» con
  `video01(2, aula, 0, 'induccion')` (archivo `Induccion.mp4` en la descripción, visible en la página del curso; la guía del
  participante queda debajo). Pendiente: subirlo a Drive carpeta 15. **Versión 2 (misma tarde):** cada captura entra cuando la
  voz nombra lo que muestra (paneles por frase: portada → ruta → guía → avisos; tema → prácticas → página de práctica; bloque de
  práctica evaluada → caso → «Agregar entrega» → rúbrica → pitch; infografía → glosario → evaluación; foro de casos → foro de
  interacción → calificaciones). Al capturar se vio que la descripción de las 6 evaluaciones de módulo todavía decía «No pondera
  en tu nota del curso»: corregido en `evaluaciones/M<n>.json` («Vale la mitad de la nota del módulo…») y aplicado con
  `introEvaluaciones01`. Nota: alguien renombró el curso a «Inteligencia artificial (IA) generativa para entornos laborales
  (88 horas)» durante la tarde del 02-11; el generador sigue usando el título de la planilla.
- **PDF de la guía del facilitador y del mapa** regenerados con la ponderación nueva (Chrome headless; con la carpeta del proyecto
  falla por la coma del nombre: imprimir en una carpeta temporal y copiar) y reemplazados en la sección «Para el facilitador» con
  `cambios31Facilitador`.
- **Finalización del curso:** `cambios31Finalizacion` quiso recalcularla, pero no tuvo efecto (comprobado el 03-11): Moodle tiene los
  criterios bloqueados y siguen sin ninguna tarea. Además esa función escribe 60 como nota y son puntos, no porcentaje: no reutilizarla.
- **Cuentas:** desde Administración del sitio › Usuarios › Agregar un usuario, con «Generar contraseña y notificar al usuario» (el
  correo saliente del sitio funciona: prueba enviada desde futuro@empoderatech.com), sin escribir contraseñas: **Natalia Hernández**
  (`natalia.hernandez`, correo natalia@empoderatech.com desde el 02-11 (la contraseña inicial llegó al provisorio dojedacifuentes+docente@gmail.com; ella entra con «¿Olvidó su contraseña?»), rol Profesor) y **Camila Rojas** (`camila.rojas`,
  dojedacifuentes+estudiante@gmail.com, rol Estudiante), matriculadas con la matrícula manual (`enrol/manual/manage.php`, el servicio
  `enrol_manual_enrol_users` no está disponible por AJAX). Las contraseñas llegan a esos correos; al primer ingreso Moodle pide
  cambiarlas. Para pasarle la cuenta a Natalia: cambiar el correo en su perfil y que ella use «¿Olvidó su contraseña?».

## Pendiente

Video de inducción en Drive (carpeta 15) y en `videos/ENTREGA-VIDEOS.md` ya anotado. Rise de «Resultados y aprendizajes» (M6-AE3): todavía dice que el pitch se comparte en el Demo Day del foro; corregir el contenido, rearmar en Rise EU y reexportar. Insignia del módulo 6: revisar que sus criterios incluyan la tarea del pitch. Guía del facilitador y mapa en PDF dentro del aula y en Drive: regenerar con `compilar-contenidos.mjs` (con PDF) y reemplazar con `cambios31Facilitador`. Docs de Drive (actividades, casos, foros, guía) desactualizados desde el 31-10. Cuenta del evaluador SENCE (rol Profesor sin permiso de edición) cuando el usuario dé nombre y correo. `revisar-criterios.mjs` reporta 57 errores antiguos (espera «Actividad» en las prácticas, que desde el 01-11 se llaman «Práctica autoevaluada»; y «caso real» en los foros): actualizar el control.
