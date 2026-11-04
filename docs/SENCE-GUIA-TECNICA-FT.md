# Guía técnica del SENCE para revisar solicitudes de cursos FT (fase 2)

Registro de la directriz con que empieza la fase 2 del curso y resumen por punto de la versión 1 contra ella. **Este resumen no
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

**Auditoría completa:** la guía se auditó página por página en [SENCE-TABLA-DE-VERDAD.md](SENCE-TABLA-DE-VERDAD.md), y ahí está también la comparación con el aula del 03-11. Este documento queda como primera lectura y **manda lo que diga la tabla**: en particular, las entregas de los casos y del pitch no son obligatorias para terminar el curso (AL-24), y la cuenta del evaluador ya existe.

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

## Puntos de la guía contra la versión 1 (actualizado con la comparación del 03-11-2026)

Estados, resumidos desde las filas de la tabla de verdad: **Falla** (al menos una exigencia central es falsa), **Parcial** (se cumple en parte), **Cumple** y **Sin datos**. El detalle de cada fila manda sobre este resumen.

| Sección | Punto | Qué pide la guía | Hoy en el curso | Resultado de la comparación | Estado |
|---|---|---|---|---|---|
| 2.1 y 7 | Participantes y competencia | Describir las funciones de los participantes, su necesidad laboral y el desempeño que se fortalece; la competencia como acción + objeto + contexto de trabajo | Seis competencias en la hoja «Estructura» (`data/curso.json`); audiencia de personas que trabajan en tareas administrativas y de productividad ([CRITERIOS-28-10](CRITERIOS-28-10.md)) | Falta el texto de «Características de los participantes»: funciones, necesidad laboral y desempeño (AL-02 a AL-05). Hay seis competencias de módulo y ninguna del curso (AL-06). Corrección: C-20 y C-16 | Falla |
| 2.2 | Finalidad no recreativa | El propósito principal es formativo y laboral | Nombre, competencias y aprendizajes esperados sobre tareas de trabajo | El propósito es laboral (AL-07) | Cumple |
| 2.3 | Proceso estructurado | Intervención formativa y evaluación, no solo acceso a contenidos | Por tema: contenido en Rise, quiz juego y dos prácticas autoevaluadas; por módulo: práctica evaluada con revisión docente, foro de casos, resumen y evaluación | El aula tiene un proceso claro, pero se puede terminar sin la intervención docente y la planilla describe otro proceso (AL-09 y AL-10). Corrección: C-01 y C-23 | Parcial |
| 2.4 | Contenido normativo | Lo normativo debe desarrollar una competencia aplicable, no solo informar | Privacidad, licencias y derechos se aplican en casos y prácticas | M3-AE4 y M4-AE3 aplican la norma, pero la rúbrica no mide el fundamento normativo y en M4-AE1 solo hay selección múltiple (AL-14). Corrección: C-10, C-11 y C-15 | Parcial |
| 2.5, 3.3 y 11 | Duración y desglose | Mínimo 8 h; total igual al desglose; distribución que se pueda reconstruir por aprendizaje esperado; sin tiempos insuficientes ni excesivos | 88 h; hoja «Resumen horas» con diferencia 0 por módulo (16, 16, 16, 16, 12 y 12 h) | La planilla da 88 h con 11 casos; sin M4-C3 suma 86,5 h. No hay desglose por aprendizaje esperado y 36 de 44 prácticas no tienen minutos, así que el total real no se conoce (AF-04, AF-05 y DU-02 a DU-08). Corrección: C-21 | Falla |
| 2.6 y 12 | Facilitador | Quién es, su formación y experiencia en el tema y con adultos, y su función: qué hace, sobre qué aprendizaje, por qué canal y en qué momento | Docente Natalia Hernández en el aula; guía del facilitador con pautas por tema y moderación de foros (`guia-facilitador/`) | Faltan sus antecedentes de formación y experiencia (AL-17 y AL-18) y su función por aprendizaje esperado (AL-19 a AL-22). La idoneidad queda sin datos (bloque FA). Corrección: C-22 | Falla |
| 2.7 y 13 | Interacción y retroalimentación | Al menos una instancia obligatoria; foro, correo o chat solos no bastan; actividad + responsable + evidencia + retroalimentación + registro | «Entrega y revisión docente» de los 10 casos y del pitch: tarea con rúbrica, nota, comentarios y archivo de retroalimentación del docente, que hoy no es requisito para terminar el curso | La tarea sigue el modelo de la guía, pero no es obligatoria: para finalizar bastan 7 foros, 50 SCORM y 60 puntos de 1.800, que son 3,3 % de la nota (AL-24 e IN-07). Corrección: C-01 | Falla |
| 2.8, 14, 15 y 16 | Evaluación de aprendizajes | Para cada aprendizaje esperado: evidencia, instrumento, criterios, ponderación y condición de aprobación; la selección múltiple sola puede no verificar un aprendizaje de aplicar | Evaluación de cada módulo con 9 o 10 preguntas de selección múltiple sobre situaciones de trabajo (5 %), práctica evaluada con rúbrica (5 % por módulo) y evaluación final con 4 casos y 22 preguntas de selección múltiple (40 %); escala 1,0 a 7,0, aprueba con 60 % | En 12 de 22 aprendizajes esperados el producto del verbo no llega al docente y solo 11,25 % de la nota mide un producto propio. Los cuestionarios muestran la respuesta en el primer intento (EV-01, EV-03, EV-04, EV-12 y EV-14). Corrección: C-10, C-11, C-03 y C-12 | Falla |
| 3.1 y 3.2 | Campos y consistencia | Todo completo y sin contradicciones entre competencia, aprendizajes, contenidos, técnicas, actividades y evaluación | Matriz de coherencia de la planilla; la auditoría del repo comprueba la cobertura de los 22 aprendizajes esperados | El insumo está incompleto y la Matriz cita instrumentos que no existen, con una columna de contenidos errada (AF-01 y AF-03). Corrección: C-23 y C-27 | Falla |
| 3.4 | Modalidad | Bien identificada y coherente con cómo se describe el curso | E-learning asincrónico en Moodle, sin sesiones en vivo, a ritmo propio | Coherente con cómo funciona el curso (AF-06 y AF-07). Falta usar el nombre exacto del formulario | Cumple |
| 3.5 | Sin contradicciones | Que un mismo dato no aparezca distinto en dos partes (por ejemplo, el peso de una evaluación) | La nota del aula (final 40 % y 10 % por módulo, 02-11) no es la de la hoja «Evaluación» de la planilla (en la copia del repo: sumativas 40 %, hitos 15 %, pitch 15 %, final 30 %); el 02-11 el nombre del curso en el aula pasó a «Inteligencia artificial (IA) generativa para entornos laborales (88 horas)» | Planilla y aula se contradicen en público, pesos, instrumentos, casos y horas, y hay tres nombres del curso (AF-08 y AF-09). Corrección: C-23 y C-07 | Falla |
| 6 | Coherencia curricular | Relación directa entre participantes, competencia, aprendizajes, contenidos, actividades y evaluación | Matriz de coherencia y vista de trazabilidad del panel | La cadena se corta en participantes, evaluación, duración y recursos. La Matriz no tiene participantes y se puede aprobar solo con alternativas (CU-10 y CU-12 en falso). Corrección: C-10, C-20 y C-23 | Parcial |
| 8 y 9 | Aprendizajes y contenidos | Aprendizajes verificables, con contenidos suficientes, en secuencia y con profundidad acorde a las horas | 22 aprendizajes esperados con saberes y criterios, cubiertos por 338 pantallas | Todos tienen contenidos en orden lógico. Hay ajustes en M1-AE3 y partes del texto sin criterio, y sin piloto no se sabe si la profundidad calza con las horas (bloques AE y CT). Corrección: C-15 y C-21 | Parcial |
| 10 | Técnicas y actividades | Explicar qué hace el participante, cómo eso desarrolla el aprendizaje y qué retroalimentación da el facilitador | Una técnica por aprendizaje esperado en la planilla; 44 prácticas con instrucción general y rúbrica; casos con revisión docente | El aula explica las actividades, pero lo que se declararía es una línea por aprendizaje y las 44 prácticas no tienen intervención activa del facilitador (bloque TM). Corrección: C-26 | Parcial |
| 17 | Recursos y equipamiento | Los recursos declarados alcanzan para hacer las actividades diseñadas | Herramientas con plan gratuito (Gemini como asistente principal), celular o computador con internet y el aula Moodle | El laboratorio de Make pide computador, la ruta por celular no está probada y no hay lista de software, equipo y cuentas (RC-01 a RC-03). Corrección: C-24 | Parcial |
| 18 y 19 | Verificación en la plataforma | Estructura, actividades, participación, progresión, intervención del facilitador, interacción, retroalimentación, evaluaciones, resultados y registros | Curso 2 en formacion.empoderatech.com con finalización, libro de calificaciones, rúbricas y retroalimentación; cuentas de docente, de estudiante de prueba y de evaluador | Estructura, actividades y registros se pueden comprobar. Intervención, interacción y retroalimentación no tienen uso real: 0 entregas y foros sin abrir. La cuenta del evaluador existe (bloque LM). Corrección: C-04, C-05 y C-06 | Parcial |
| 20 | Costos | Costos coherentes con modalidad, participantes, duración, facilitadores, plataforma y materiales | Lo arma el OTEC en la solicitud | No hay desglose de costos que comparar (bloque CS). Corrección: C-25 | Sin datos |

## Cómo se trabaja la fase 2

1. **Revisión punto por punto** de la tabla anterior, con evidencia del repositorio y del aula. Cada punto cambia de estado aquí y en
   la hoja «Cumplimiento RE 2484» de la planilla.
2. **Acuerdo con Natalia** sobre qué se cambia: ella define la estructura del curso.
3. **Cambios con el método de la fase 1:** un documento de criterios fechado (`docs/CRITERIOS-<fecha>.md`), commits que lo nombran y
   una fila en la bitácora de [ESTADO.md](../ESTADO.md).
4. **Control:** auditoría y panel al día. La diferencia con la versión 1 se ve en GitHub, comparando la etiqueta
   `v1.0-visto-bueno-cliente` con `main`.
