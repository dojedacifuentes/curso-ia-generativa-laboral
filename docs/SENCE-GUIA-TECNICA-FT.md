# Guía técnica del SENCE para revisar solicitudes de cursos FT (fase 2)

Registro de la directriz con que empieza la fase 2 del curso y primera lectura de la versión 1 contra ella. **Esta lectura no
cambia nada del curso todavía:** los cambios se acuerdan con Natalia, se escriben como criterios fechados y se anotan en la
bitácora de [ESTADO.md](../ESTADO.md) cuando se aplican.

## El documento

| Dato | Detalle |
|---|---|
| Nombre | Guía técnica para organismos ejecutores de capacitación. Revisión de solicitudes de cursos financiables mediante Franquicia Tributaria del SENCE |
| Qué hace | Desarrolla y operacionaliza los criterios de admisibilidad legal, admisibilidad formal y evaluación técnica de la Resolución Exenta N.° 2.484 de 2026 |
| Extensión | 21 páginas, 20 secciones; sus ejemplos son referenciales |
| Cómo llegó | OTIC SOFOFA la envió a sus proveedores el 03-11-2026 y Natalia la reenvió al equipo ese mismo día |
| Archivo | `guia_tecnica_revision_de_solicitudes_ft.pdf`, en el Drive del equipo; no se copia a este repositorio |
| Relación con la planilla | Parece ser la Guía Técnica que la planilla tenía por obtener (hoja Pendientes, fila 3), por confirmar. El Anexo Técnico con indicadores, medios de verificación y estándares no llegó con ella: las 6 filas «Depende del Anexo Técnico» se pueden avanzar con esta guía, sin darlas por cerradas |

**Auditoría completa:** la guía se auditó página por página en [SENCE-TABLA-DE-VERDAD.md](SENCE-TABLA-DE-VERDAD.md), con la tabla de verdad que sirve de vara para comparar el curso. Este documento queda como primera lectura.

## Qué revisa el SENCE

1. **Admisibilidad legal.** Si falla un requisito, la solicitud no sigue: finalidad formativa ligada al trabajo, que no sea una
   actividad recreativa, un proceso de aprendizaje estructurado (no solo contenidos para leer o ver), que lo normativo desarrolle
   una competencia, mínimo 8 horas, un facilitador identificado con su función formativa, al menos una instancia obligatoria de
   interacción, retroalimentación o acompañamiento, y una evaluación de aprendizajes.
2. **Admisibilidad formal.** Campos completos, componentes sin contradicciones, duración total igual al desglose, modalidad bien
   identificada y sin información insuficiente.
3. **Evaluación técnica.** El diseño completo, en la secuencia participantes → competencia → aprendizajes esperados → contenidos →
   técnicas → actividades → evaluación → duración → recursos. La pregunta de fondo es si el diseño permite desarrollar y verificar
   la competencia laboral declarada.

En los cursos e-learning, todo lo que declare la solicitud debe poder comprobarse en la plataforma (sección 18 de la guía).

## Primera lectura contra la versión 1 (03-11-2026)

Estados: **Parece cubierto** (el curso ya lo tiene; falta confirmarlo y declararlo bien), **Por revisar** (hay que comprobarlo con
evidencia), **Brecha probable** (es probable que pida cambios) y **En la solicitud** (no depende del aula ni del repositorio).

| Sección | Punto | Qué pide la guía | Hoy en el curso | Primera lectura | Estado |
|---|---|---|---|---|---|
| 2.1 y 7 | Participantes y competencia | Describir las funciones de los participantes, su necesidad laboral y el desempeño que se fortalece; la competencia como acción + objeto + contexto de trabajo | Seis competencias en la hoja «Estructura» (`data/curso.json`); audiencia de personas que trabajan en tareas administrativas y de productividad ([CRITERIOS-28-10](CRITERIOS-28-10.md)) | Las competencias ya traen acción, objeto y contexto laboral. Falta redactar «Características de los participantes» como pide la guía; la copia de la planilla en el repo todavía describe el público anterior y M6-AE1 dice «uno al que aspira» | Por revisar |
| 2.2 | Finalidad no recreativa | El propósito principal es formativo y laboral | Nombre, competencias y aprendizajes esperados sobre tareas de trabajo | Nada que cambiar a primera vista | Parece cubierto |
| 2.3 | Proceso estructurado | Intervención formativa y evaluación, no solo acceso a contenidos | Por tema: contenido en Rise, quiz juego y dos prácticas autoevaluadas; por módulo: práctica evaluada con revisión docente, foro de casos, resumen y evaluación | El curso combina estudio, práctica, revisión docente y evaluación | Parece cubierto |
| 2.4 | Contenido normativo | Lo normativo debe desarrollar una competencia aplicable, no solo informar | Privacidad, licencias y derechos se aplican en casos y prácticas | Se trabaja aplicado, como en el ejemplo admisible de la guía | Parece cubierto |
| 2.5, 3.3 y 11 | Duración y desglose | Mínimo 8 h; total igual al desglose; distribución que se pueda reconstruir por aprendizaje esperado; sin tiempos insuficientes ni excesivos | 88 h; hoja «Resumen horas» con diferencia 0 por módulo (16, 16, 16, 16, 12 y 12 h) | El desglose es anterior a los cambios del 31-10 al 02-11 (prácticas autoevaluadas, módulo 4 con dos casos, pitch, diagnósticas, evaluaciones de módulo y final, video de inducción): hay que recalcularlo, y la guía lo muestra por aprendizaje esperado, no solo por módulo | Brecha probable |
| 2.6 y 12 | Facilitador | Quién es, su formación y experiencia en el tema y con adultos, y su función: qué hace, sobre qué aprendizaje, por qué canal y en qué momento | Docente Natalia Hernández en el aula; guía del facilitador con pautas por tema y moderación de foros (`guia-facilitador/`) | Faltan sus antecedentes y una tabla de su función por aprendizaje esperado. La planilla tenía el facilitador «por definir» | Brecha probable |
| 2.7 y 13 | Interacción y retroalimentación | Al menos una instancia obligatoria; foro, correo o chat solos no bastan; actividad + responsable + evidencia + retroalimentación + registro | «Entrega y revisión docente» de los 10 casos y del pitch: tarea con rúbrica, nota, comentarios y archivo de retroalimentación del docente, obligatoria para terminar el curso | Calza con el ejemplo adecuado de la guía. Hay que declararla así en la solicitud y no presentar los foros como acompañamiento | Parece cubierto |
| 2.8, 14, 15 y 16 | Evaluación de aprendizajes | Para cada aprendizaje esperado: evidencia, instrumento, criterios, ponderación y condición de aprobación; la selección múltiple sola puede no verificar un aprendizaje de aplicar | Evaluación de cada módulo con 9 o 10 preguntas de selección múltiple sobre situaciones de trabajo (5 %), práctica evaluada con rúbrica (5 % por módulo) y evaluación final con 4 casos y 22 preguntas de selección múltiple (40 %); escala 1,0 a 7,0, aprueba con 60 % | El instrumento de más peso es de selección múltiple y las prácticas autoevaluadas no llevan nota, así que varios aprendizajes se verifican solo con alternativas. Falta la tabla aprendizaje → evidencia → instrumento → criterio → ponderación → aprobación | Brecha probable |
| 3.1 y 3.2 | Campos y consistencia | Todo completo y sin contradicciones entre competencia, aprendizajes, contenidos, técnicas, actividades y evaluación | Matriz de coherencia de la planilla; la auditoría del repo comprueba la cobertura de los 22 aprendizajes esperados | Revisar la planilla contra el aula de hoy antes de llenar la solicitud | Por revisar |
| 3.4 | Modalidad | Bien identificada y coherente con cómo se describe el curso | E-learning asincrónico en Moodle, sin sesiones en vivo, a ritmo propio | Coherente | Parece cubierto |
| 3.5 | Sin contradicciones | Que un mismo dato no aparezca distinto en dos partes (por ejemplo, el peso de una evaluación) | La nota del aula (final 40 % y 10 % por módulo, 02-11) no es la de la hoja «Evaluación» de la planilla (en la copia del repo: sumativas 40 %, hitos 15 %, pitch 15 %, final 30 %); el 02-11 el nombre del curso en el aula pasó a «Inteligencia artificial (IA) generativa para entornos laborales (88 horas)» | Hay que dejar una sola versión de la ponderación y del nombre en la planilla, la solicitud y el aula | Brecha probable |
| 6 | Coherencia curricular | Relación directa entre participantes, competencia, aprendizajes, contenidos, actividades y evaluación | Matriz de coherencia y vista de trazabilidad del panel | Revisarla completa cuando se cierren los puntos de duración y evaluación | Por revisar |
| 8 y 9 | Aprendizajes y contenidos | Aprendizajes verificables, con contenidos suficientes, en secuencia y con profundidad acorde a las horas | 22 aprendizajes esperados con saberes y criterios, cubiertos por 338 pantallas | Comprobar que cada aprendizaje de aplicar tenga contenido de procedimiento y ejercicios, no solo conceptos | Por revisar |
| 10 | Técnicas y actividades | Explicar qué hace el participante, cómo eso desarrolla el aprendizaje y qué retroalimentación da el facilitador | Una técnica por aprendizaje esperado en la planilla; 44 prácticas con instrucción general y rúbrica; casos con revisión docente | La solicitud tiene que describir cada técnica con participante, producto y retroalimentación, no solo nombrarla | Por revisar |
| 17 | Recursos y equipamiento | Los recursos declarados alcanzan para hacer las actividades diseñadas | Herramientas con plan gratuito (Gemini como asistente principal), celular o computador con internet y el aula Moodle | Declarar el software, el equipo y el acceso que piden las prácticas | Por revisar |
| 18 y 19 | Verificación en la plataforma | Estructura, actividades, participación, progresión, intervención del facilitador, interacción, retroalimentación, evaluaciones, resultados y registros | Curso 2 en formacion.empoderatech.com con finalización, libro de calificaciones, rúbricas y retroalimentación; cuentas de docente y de estudiante de prueba | Falta la cuenta del evaluador SENCE y comprobar en el aula cada cosa que diga la solicitud | Por revisar |
| 20 | Costos | Costos coherentes con modalidad, participantes, duración, facilitadores, plataforma y materiales | Lo arma el OTEC en la solicitud | Fuera del aula y del repositorio | En la solicitud |

## Cómo se trabaja la fase 2

1. **Revisión punto por punto** de la tabla anterior, con evidencia del repositorio y del aula. Cada punto cambia de estado aquí y en
   la hoja «Cumplimiento RE 2484» de la planilla.
2. **Acuerdo con Natalia** sobre qué se cambia: ella define la estructura del curso.
3. **Cambios con el método de la fase 1:** un documento de criterios fechado (`docs/CRITERIOS-<fecha>.md`), commits que lo nombran y
   una fila en la bitácora de [ESTADO.md](../ESTADO.md).
4. **Control:** auditoría y panel al día. La diferencia con la versión 1 se ve en GitHub, comparando la etiqueta
   `v1.0-visto-bueno-cliente` con `main`.
