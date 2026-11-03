# Guía técnica del SENCE: auditoría y tabla de verdad

> Versión 2.0 del 03-11-2026. Generado con `node scripts/sence-auditoria.mjs` desde `data/sence/guia-tecnica.json` y `data/sence/comparacion.json`: se corrige allá, no aquí. El Word está en `entregables/sence/`.

Documento de trabajo del equipo. Resume y ordena la guía con palabras propias: no la reemplaza ni reemplaza a la Resolución Exenta 2.484. Ante cualquier duda, manda el texto original en la página indicada.

## Resultado de la comparación

**Hoy el curso no pasaría la admisibilidad legal, y casi todo lo que la frena se arregla sin rehacer el contenido.**

De las 26 filas excluyentes, 7 son falsas. Seis son textos de la solicitud que nadie ha escrito: participantes y antecedentes del facilitador. La séptima es una falla real del aula: hoy se puede finalizar el curso sin ninguna revisión docente y con 3,3 % de la nota.

La falla de fondo está en la evaluación: en 12 de los 22 aprendizajes esperados el producto que pide el verbo no llega al docente, y en los otros 10 llega en parte. Ese producto casi siempre existe, pero queda en una práctica que nadie recibe. Solo 11,25 % de la nota mide un producto propio de la persona.

La planilla ya no describe el aula. Una solicitud armada con ella se contradiría con lo que el SENCE encuentre en Moodle en pesos, instrumentos, público y horas.

Lo que sostiene el curso está bien: finalidad laboral, estructura, contenidos, ponderaciones del libro de calificaciones, registros y las 11 tareas con rúbrica.

De 133 filas comparables: 25 verdaderas, 69 parciales, 28 falsas y 11 sin datos. De las 26 excluyentes, 7 son falsas. Moodle no se modificó.

| Bloque | V | P | F | SD | Filas |
| --- | --- | --- | --- | --- | --- |
| AL · Admisibilidad legal | 9 | 10 | 7 | 0 | 26 |
| AF · Admisibilidad formal | 2 | 2 | 6 | 0 | 10 |
| CU · Coherencia curricular | 2 | 8 | 2 | 0 | 12 |
| CM · Competencia | 1 | 4 | 0 | 0 | 5 |
| AE · Aprendizajes esperados | 1 | 7 | 0 | 0 | 8 |
| CT · Contenidos | 2 | 4 | 0 | 0 | 6 |
| TM · Técnicas y actividades | 0 | 6 | 0 | 0 | 6 |
| DU · Duración y horas | 0 | 2 | 6 | 0 | 8 |
| FA · Facilitador | 0 | 0 | 0 | 7 | 7 |
| IN · Interacción, retroalimentación y acompañamiento | 1 | 6 | 1 | 0 | 8 |
| EV · Evaluación de los aprendizajes | 1 | 9 | 5 | 0 | 15 |
| RC · Recursos y equipamiento | 0 | 2 | 1 | 0 | 3 |
| LM · Verificación en el aula | 6 | 8 | 0 | 0 | 14 |
| CS · Costos | 0 | 1 | 0 | 4 | 5 |

### Las diez brechas

| N.° | Brecha | Qué pasa | Si es falso | Filas | Arreglo |
| --- | --- | --- | --- | --- | --- |
| 1 | La revisión docente no es obligatoria | Para finalizar el curso solo se exige publicar en 7 foros, completar 50 SCORM y llegar a 60 puntos de 1.800, que son 3,3 % de la nota. Las 11 tareas no están entre los requisitos. | Inadmisible | AL-24, AL-25, IN-07, AL-10 | C-01 |
| 2 | Faltan textos excluyentes de la solicitud | No está escrito qué funciones cumplen los participantes, qué necesidad laboral tienen ni qué desempeño se fortalece. Tampoco los antecedentes de la facilitadora. | Inadmisible | AL-02 a AL-05, AL-17, AL-18 | C-20, C-22 |
| 3 | Las horas no cuadran | La planilla suma 88 h con 11 casos y el aula tiene 10: sin ese caso da 86,5 h. El total real no se conoce, porque 36 de 44 prácticas, las 6 infografías y 5 diagnósticas no tienen minutos, y no hay desglose por aprendizaje esperado. | Observada | AF-04, AF-05, DU-02, DU-03, DU-04, DU-06, DU-07, DU-08 | C-21 |
| 4 | La planilla y el aula se contradicen | Evaluación final 30 % contra 40 %, hitos con tutor contra prácticas sin envío, público cesante contra personas que trabajan, instrumentos que ya no existen y tres nombres del curso. | Observada | AF-03, AF-08, AF-09, LM-01 | C-23, C-07 |
| 5 | La evaluación no demuestra 12 aprendizajes esperados | En 12 de 22 el producto que pide el verbo no llega al docente. En todo el curso nadie ve un flujo automatizado, una imagen, un audio ni un clip. Solo 11,25 % de la nota mide un producto propio. | Insuficiente | EV-01, EV-12, EV-14, CU-12, EV-04 | C-10, C-14 |
| 6 | Los cuestionarios se pueden pasar sin saber | El primer intento muestra la respuesta correcta y el segundo va enseguida, con las mismas preguntas. También en la evaluación final, que vale 40 %, donde además la correcta es la alternativa más larga en las 22 preguntas. | No lo dice | EV-03 | C-03, C-12 |
| 7 | La rúbrica es igual para todos los casos | No trae los criterios de cada aprendizaje esperado, da una sola nota para dos aprendizajes y deja aprobar sin el producto (75 %) o con todo en Parcial (60 %). En el pitch ocurre lo mismo. | No lo dice | EV-03, EV-04, EV-12 | C-11 |
| 8 | No hay huella del facilitador | Los 7 foros están sin abrir, la cuenta docente no registra acceso y nadie ha hecho el ciclo completo de entrega, revisión y retroalimentación. | No lo dice | LM-06, LM-07, LM-08, LM-13, IN-05 | C-04, C-05 |
| 9 | Las herramientas no calzan con lo prometido | La Inducción promete herramientas que funcionan en el celular, pero el laboratorio de Make pide computador, la ruta por celular no está probada y hay verificaciones abiertas. | Puede observarse | RC-01, RC-03 | C-24 |
| 10 | Faltan datos para juzgar | No hay antecedentes de la facilitadora ni desglose de costos: 11 filas siguen sin dato. | Faltan antecedentes | FA-01 a FA-08, CS-01, CS-02, CS-04, CS-06 | C-22, C-25 |

### Lo que ya está bien

| Tema | Qué se comprobó | Filas |
| --- | --- | --- |
| Finalidad y estructura | Los 22 aprendizajes esperados apuntan a tareas de trabajo y el aula los ordena en una secuencia de proceso. | AL-01, AL-07, CU-06, LM-02 |
| Contenidos | Cada aprendizaje esperado tiene su Rise, su quiz juego y dos prácticas, todos en el aula y en orden lógico. | AE-04, CT-01, CT-04, CU-07 |
| Duración mínima y modalidad | 88 horas declaradas y e-learning asincrónica coherente con cómo funciona el curso. | AL-15, AF-06, AF-07 |
| Ponderaciones | Pesos 40 + 60 que suman 100, y lo que explican las páginas del aula coincide con el libro de calificaciones. | EV-11, LM-09 |
| Actividad con facilitador | Las 11 tareas «Entrega y revisión docente» siguen el modelo de la guía: producto, responsable, rúbrica, comentarios y registro. | AL-23, IN-03 |
| Trazabilidad | Registros sin borrado e informes de participación, progreso y calificaciones disponibles. | LM-04, LM-05, LM-11 |

## Decisiones que abren el trabajo

| N.° | Tema | Pregunta | Recomendación | Quién | Abre | Referencia |
| --- | --- | --- | --- | --- | --- | --- |
| D-01 | Competencia del curso | ¿Se declara una competencia general del curso o las seis de módulo? | Revisar qué admite el formulario y escribir una general, dejando las seis como módulos. El ítem de la guía va en singular. | Natalia | C-16 | O-05 |
| D-02 | Qué exige terminar el curso | ¿Basta con recibir nota o hay que aprobar cada tarea? | Exigir las 11 tareas con «Recibir una calificación» y las 7 evaluaciones, y fijar la nota del curso en 1.080 puntos, que es 60 %. Pedir aprobar cada tarea obliga a abrir un segundo intento (C-02). | Natalia | C-01, C-02 | AL-24, IN-07 |
| D-03 | Cómo entra el desempeño | ¿Los productos de los aprendizajes esperados se piden en las 11 entregas que ya existen o en tareas nuevas? | Dentro de las 11 entregas: casi todos los productos ya existen como prácticas o hitos, la estructura aprobada por el cliente no cambia y no crece la carga de revisión. | Natalia | C-10, C-11 | EV-14, EV-15 |
| D-04 | Peso del desempeño | ¿Cómo se evita aprobar sin la práctica evaluada? | La guía no fija un porcentaje. Hay dos caminos: que la práctica evaluada pese más de 40 %, porque con 40 la selección múltiple aún da 60, o exigir aprobar cada tarea con segundo intento. Hoy pesa 30 % y solo 11,25 % mide un producto propio. | Natalia | C-14 | CU-12, O-02 |
| D-05 | Plan Formativo o curso independiente | ¿La solicitud se vincula a PF1823 o va como curso independiente? | Definirlo primero: si es Plan Formativo, las horas las fija él y el desglose se arma distinto. | Natalia | C-21 | Pendiente 4 de la planilla |
| D-06 | Facilitador y carga | ¿Quién queda como facilitador autorizado y cuántas personas atiende? | Definirlo antes de presentar: la planilla anota que la RE no permite sustituirlo. Con 100 participantes son 1.100 revisiones: calcular si una persona alcanza con 72 horas hábiles de plazo. | Natalia | C-22 | Pendiente 5 de la planilla, O-14 |
| D-07 | Versión de la guía | ¿Esta es la Guía Técnica oficial? ¿Hay un Anexo Técnico aparte? | Consultar a OTIC SOFOFA o al SENCE antes de cerrar la evaluación: esta comparación puede cambiar si hay indicadores que no conocemos. | Natalia | — | O-01, O-06 |
| D-08 | Fecha de inicio | ¿A qué fecha se mueve el inicio del 23-11? | Hay que moverla: la planilla anota hasta 20 días corridos de revisión, que se reinician con cada reingreso, y la solicitud todavía no existe. Calcularla desde la fecha real de presentación. | Natalia y Accenture | C-07 | Pendiente 6 de la planilla |
| D-09 | Portafolio | ¿El portafolio sigue en M6-AE3? | Sacarlo del texto o darle una entrega: hoy el aprendizaje esperado lo nombra y nadie lo recibe. | Natalia | C-15 | M6-AE3 |

## Plan de corrección

Nada de esto está aplicado.

**Orden de trabajo:** Decisiones D-01 a D-09 → C-10, C-11 y C-14 → C-01 y C-02 → C-06 → C-05 → C-21 → C-23 → C-27 → C-07.

| N.° | Grupo | Prior. | Tema | Qué hacer | Dónde | Depende de | Cierra |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-01 | Configuración del aula | 1 | Revisión docente obligatoria | Sumar a la finalización del curso las 11 tareas, las 6 evaluaciones de módulo y la final. Cambiar la calificación requerida de 60 a 1.080, porque Moodle compara puntos y el total es 1.800. En cada tarea, marcar «Recibir una calificación» con «Cualquier calificación». Decir en Avisos, Inducción, Cómo avanzas, guía del participante y mapa que las tareas son obligatorias. | Finalización del curso (/course/completion.php?id=2) y cada tarea. Primero hay que desbloquear los criterios: borra la finalización de curso de todas las cuentas, no la de actividades ni las notas. Hacerlo antes de C-05, porque la prueba vuelve a bloquearlos. | D-02 | AL-10, AL-24 a AL-25, IN-01, IN-04, IN-07, EV-14 |
| C-02 | Configuración del aula | 2 | Segundo intento en las tareas | Si se quiere corregir y reenviar: en los ajustes de entrega, subir «Intentos permitidos» y luego elegir cómo se otorgan. Hoy hay un valor guardado que no opera con un intento máximo. | Ajustes de cada tarea, sección «Configuración de entrega» | D-02 | IN-06 |
| C-03 | Configuración del aula | 2 | Reglas de los cuestionarios con nota | Moodle no tiene una opción que muestre la respuesta solo al agotar los intentos. Elegir una de tres: un solo intento con retroalimentación completa; dos intentos con banco aleatorio de preguntas y espera entre ellos; o dos intentos con revisión limitada a la nota y retroalimentación después de una fecha de cierre. Las 80 preguntas revelan la correcta en su retroalimentación, que fue un pedido de Natalia. | Ajustes de cada cuestionario, «Opciones de revisión» y «Restricciones extra sobre los intentos» | Natalia elige | EV-03 |
| C-04 | Configuración del aula | 2 | Foros abiertos por la docente | Corregir los mensajes de apertura y publicarlos con la cuenta de Natalia. Hoy el de M3 nombra a Samsung, el de M4 dice tres casos y nombra a Getty, y el del foro general tiene un espacio por completar. | docs/APERTURA-FOROS.md y foros 6, 34, 65, 96, 128, 154 y 177 |   | LM-06 a LM-07 |
| C-05 | Configuración del aula | 2 | Prueba completa con cuenta de estudiante | Hacer un ciclo real después de C-01, C-06 y C-11: la estudiante de prueba entrega y publica en un foro, la docente revisa con rúbrica, comenta y responde, la estudiante ve nota y comentarios, y se comprueba finalización e informes. Probar también una nota bajo 60: Moodle puede dejar esa actividad como reprobada. | Una tarea por módulo, con la cuenta de prueba | C-01, C-06, C-11 | IN-04 a IN-06, IN-08, EV-13, LM-06 a LM-08, LM-10, LM-13 |
| C-06 | Configuración del aula | 2 | Insignias de módulo | Quitar los 55 criterios que apuntan a actividades borradas y sumar las tareas actuales. Hoy nadie puede ganar esas insignias y la tarea programada puede dejarlas inactivas al primer intento, aunque el aula promete «insignias que puedes ganar». Revisar el estado y la condición de las 6 antes de editar. | /badges/criteria.php?id=1 a 6, deshabilitando antes el acceso | C-01 | LM-12 |
| C-07 | Configuración del aula | 3 | Nombre, fechas y cuenta del evaluador | Usar un solo nombre del curso en Moodle, planilla y solicitud; ajustar las fechas del curso a la fecha real y definir qué cuenta recibe el SENCE: hoy el evaluador tiene dos roles. Mover el inicio al futuro después de terminar las pruebas. | Ajustes del curso y Participantes | D-08 | AF-09 |
| C-10 | Evaluación | 1 | El producto del aprendizaje entra a la entrega | Pedir en las 11 entregas lo que la ficha de cada aprendizaje esperado marca como faltante, y declarar en cada caso qué aprendizajes cubre. Los 12 sin producto son la primera prioridad. En M4 basta cambiar la instrucción: Moodle ya recibe cualquier tipo de archivo, hasta 5 por entrega. Para un clip pesado, ofrecer un enlace como en el pitch. | casos/*.md, pitch/Pitch-del-proyecto.md y tareas 190, 191, 199, 200, 208, 209, 217, 218, 225, 226 y 318 | D-03 | AL-14, AL-20, CU-01 a CU-04, CU-09, CU-11 a CU-12, CM-03, AE-06 a AE-07, EV-01 a EV-02, EV-04, EV-12, EV-14 a EV-15, LM-12 |
| C-11 | Evaluación | 2 | Rúbrica propia de cada caso | Reescribir las 11 rúbricas (10 casos y pitch) con los criterios C de los aprendizajes que cubren, de 100 puntos y mínimo 60, separando puntajes si un caso cubre dos. Una rúbrica de Moodle solo suma: para que no se apruebe sin el producto, ese criterio debe pesar más de 40 o debe quedar una regla docente escrita. Revisar antes las líneas «cubre» de los casos, que declaran criterios que no piden. Sumar fundamento normativo en M3-C2. | casos/RUBRICA.md, pitch y rúbricas de las tareas. Se editan a mano: sin notas se pueden cambiar, pero el armador no las sobrescribe. | D-03 | AL-14, CU-04, CU-09, TM-04, EV-03 a EV-04, EV-08, EV-12, EV-14 a EV-15 |
| C-12 | Evaluación | 2 | Alternativas parejas | Reescribir alternativas para que la correcta no sea la más larga: las 22 de la final y 29 de 30 en M1, M2 y M3. Para aplicarlo: revisar que no haya intentos, sacar las preguntas viejas del cuestionario y del banco, importar y comprobar 10, 10, 10 y 26 espacios. El armador no reemplaza preguntas. | evaluaciones/*.json y cuestionarios 305, 203, 212 y 221 |   | EV-03 |
| C-13 | Evaluación | 3 | Ítems con errores | Corregir F-14 (voz clonada que el plan gratuito del caso no incluye), F-22 (64 solicitudes frente a unas 160 del caso), M4-E09 (mide créditos de Flow y no el criterio), M1-E02 y F-01 (no miden ejemplificar) y M5-E04 (mide el plan de una herramienta). Se aplica igual que C-12. | evaluaciones/Final.json, M1.json, M4.json y M5.json |   | AE-06, EV-01, EV-03 |
| C-14 | Evaluación | 2 | Peso de la práctica evaluada | Según D-04: subir la práctica evaluada sobre 40 % o exigir aprobar cada tarea. Actualizar las páginas que lo explican. | Libro de calificaciones y páginas de Avisos, Inducción y tareas | D-04 | CU-11 a CU-12, EV-15 |
| C-15 | Contenido del aula | 2 | Aprendizajes esperados por ajustar | Reescribir M1-AE3: la temperatura queda en una práctica opcional y el AE la exige. Revisar M1-AE1 y M5-AE1 (verbo bajo la competencia), M3-AE4 (falta criterio para evaluar resultados; bases de tratamiento de la nueva ley), M3-AE3, M4-AE1, M4-AE3 y M5-AE3 (partes del texto sin criterio), M4-AE1 («uso comercial» sin fuente), M4-AE3 (dato biométrico sin el requisito legal), M6-AE1 («al que aspira») y M6-AE3 (portafolio; el Rise enseña 6 partes y la tarea pide 4). Cambiar contenido obliga a rearmar y reexportar el Rise. | Planilla, data/curso.json, contenido y etiquetas del aula | D-09 | AL-14, AE-01 a AE-03, AE-08, CT-02 a CT-03, CT-06, LM-12 |
| C-16 | Contenido del aula | 1 | Competencias | Escribir la competencia general del curso, si se decide, y corregir M1 («interactuar»), M2 («optimizar») y M3 («acelerar») con verbos observables. Precisar el objeto en M6. | Planilla, data/curso.json y resúmenes de sección del aula | D-01 | AL-06, CU-05, CM-01, CM-03 a CM-05 |
| C-17 | Contenido del aula | 3 | Textos que quedaron atrás | Glosario M6 («Demo Day»); «al que aspira» en M6-AE1, M5-AE1 y M1-P1; Rise M6-AE3 (Demo Day y «no pondera»); Rise M4-AE2 y M4-AE4, que mandan entregar lo que hoy no se recibe; M3-C1 y M3-C2 («En el Hito 3 entregas un informe»); «tutor» en M6-E05 y M6-AE2; M6-AE2 P03 y su quiz, que enseñan lo contrario de M6-E06 y F-21; el mapa del aula (correo .cl, inducción y diagnósticas pendientes). En M3-AE4, confirmar el estado del proyecto que posterga la Ley 21.719 antes de presentar. | Glosario 234, contenido, Rise y docs/MAPA-AULA-MOODLE.md |   | CT-02, EV-10, LM-12 |
| C-18 | Contenido del aula | 2 | Pauta de retroalimentación | Agregar a la guía del facilitador ejemplos de retroalimentación para los 10 casos y el pitch, con fortalezas, errores y aspectos por corregir. Hoy los 44 ejemplos son de prácticas que nadie envía. | guia-facilitador/ y PDF de la sección «Para el facilitador» | C-11 | IN-06 |
| C-20 | Solicitud y planilla | 1 | Características de los participantes | Escribir el ítem: funciones que realizan, necesidad laboral del grupo y aspecto del desempeño que se fortalece. Sacar de la planilla el público antiguo. | Planilla, hoja Léeme, y borrador de la solicitud |   | AL-02 a AL-05, AF-01 a AF-02, AF-08, CU-01 a CU-02, CU-10 |
| C-21 | Solicitud y planilla | 1 | Desglose horario | Hacer el piloto de tiempos. Dar minutos a las 36 prácticas, las 6 infografías, las 5 diagnósticas y el foro general; separar la evaluación de M6 de la final; ajustar los videos a su duración real (30 min 20 s frente a 36 declarados); decidir dónde se cuenta lo que se repite en Rise e hito y cómo se declara el período de medición de M6. Con eso armar el desglose por aprendizaje esperado y por actividad que sume 88 h. Va después de C-10, porque cambia lo que se entrega. | Planilla, hojas Parámetros, Recursos, Resumen horas y columna de minutos de la Matriz | D-05, C-10 | AF-04 a AF-05, AF-08, CU-02, CT-05, DU-01 a DU-08 |
| C-22 | Solicitud y planilla | 1 | Ficha del facilitador | Reunir antecedentes de formación y experiencia, en el tema y con personas adultas, y describir por aprendizaje esperado la acción, la actividad, el canal y el momento. | Borrador de la solicitud y guía del facilitador | D-06 | AL-16 a AL-22, AF-01 a AF-02, TM-05, FA-01 a FA-04, FA-06 a FA-08 |
| C-23 | Solicitud y planilla | 1 | Planilla al día | Poner en la planilla y en data/curso.json lo que tiene el aula: ponderación 40 y 60, instrumentos reales en vez de «Rúbrica P1», sin M4-C3, M3-C2 con Eindhoven, sin tutor ni Demo Day. Corregir la fórmula de la Matriz: su columna de contenidos muestra actitudes en los 22 aprendizajes. Actualizar la hoja «Cumplimiento RE 2484» y volver a importar. | Planilla de Natalia, data/planilla/ y data/curso.json | C-21 | AL-09 a AL-10, AL-16, AL-19, AL-21 a AL-22, AL-24, AF-02 a AF-03, AF-08 a AF-09, CU-08, CU-10, IN-01 a IN-02, IN-04, IN-07, EV-05 a EV-07, EV-09 a EV-10, EV-13, LM-01, LM-12, LM-14 |
| C-24 | Solicitud y planilla | 2 | Recursos y herramientas | Hacer la lista de herramientas, cuentas, planes y equipos por módulo. Corregir la promesa de que las herramientas funcionan en el celular y resolver las verificaciones H1 a H5 y H10. | Inducción del aula, planilla (Léeme y pendiente 17), docs/PENDIENTES-VERIFICACION.md y solicitud |   | CU-02, AE-05, CT-02, CT-06, TM-01, RC-01 a RC-03, LM-12, CS-05 |
| C-25 | Solicitud y planilla | 2 | Costos | Armar el desglose en pesos y relacionar cada costo con el diseño. Revisar la propuesta a Accenture, que cita la RE 1.560 derogada. | Planilla, pendientes 9 y 15 |   | AF-01 a AF-02, CS-01 a CS-02, CS-04 a CS-06 |
| C-26 | Solicitud y planilla | 2 | Técnicas con sus cinco elementos | Reemplazar la línea de técnica por una descripción con actividad, participante, aprendizaje, producto e intervención del facilitador. Decir qué rol tienen las prácticas autoevaluadas. | Planilla, hoja Estructura, y borrador de la solicitud |   | AF-10, CU-08, TM-02 a TM-06, RC-02 |
| C-27 | Solicitud y planilla | 2 | Formulario, ficha por aprendizaje y borrador | Conseguir el formulario del sistema, completar la ficha de los 22 aprendizajes esperados con la cadena evidencia, instrumento, criterio, ponderación y aprobación, y escribir el borrador de la solicitud. | Portal del SENCE y sección «Ficha por aprendizaje esperado» de este documento | C-10, C-11, C-14 | AF-01, CU-10, EV-04 a EV-06, EV-08, LM-14 |

## Ficha por aprendizaje esperado

| AE | Verbo | Nivel | Ítems | Peso selección | Peso rúbrica | ¿Llega el producto? | Docente interviene en | Min. directos | Qué falta |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M1-AE1 | Explicar | Comprender | 2 + 1 | 2,8 % | 0,0 % | No | No | 135 | Pedir los 3 usos y 2 límites en una entrega. C2 (ejemplificar) no tiene ítem que lo mida. Es de nivel Comprender: la guía no prohíbe selección múltiple aquí. |
| M1-AE2 | Formular | Aplicar | 3 + 1 | 3,3 % | 1,3 % | No | M1-C1 | 135 | El docente no recibe el prompt ni sus versiones. Pedir la plantilla antes y después del ajuste. |
| M1-AE3 | Ajustar | Aplicar | 2 + 1 | 2,8 % | 1,3 % | No | M1-C1 | 135 | M1-C1 no pide comparar salidas de una misma consigna. La temperatura queda en una práctica opcional: ajustar el texto del aprendizaje. |
| M1-AE4 | Validar | Evaluar | 3 + 1 | 3,3 % | 2,5 % | En parte | M1-C2 | 142.5 | Llegan la tabla y la versión corregida. Falta revisar sesgos en M1-C2. |
| M2-AE1 | Redactar | Aplicar | 3 + 1 | 3,3 % | 1,3 % | No | M2-C1 | 150 | Llegan una plantilla y una regla, ningún texto final. Decidir qué géneros se piden: correo, minuta o informe. |
| M2-AE2 | Aplicar | Aplicar | 3 + 1 | 3,3 % | 1,3 % | En parte | M2-C1 | 150 | M2-C1 pide dos restricciones, que son una técnica, y no compara versiones. |
| M2-AE3 | Estructurar | Aplicar | 2 + 1 | 2,8 % | 1,3 % | No | M2-C2 | 142.5 | Las 6 láminas quedan en una práctica. Pedirlas en M2-C2. |
| M2-AE4 | Resolver | Evaluar | 2 + 1 | 2,8 % | 1,3 % | No | M2-C2 | 150 | El docente recibe un dato, no la fórmula ni sus pruebas. Pedirlas en M2-C2. |
| M3-AE1 | Utilizar | Aplicar | 3 + 1 | 3,3 % | 0,0 % | En parte | M3-C1, sin declarar | 150 | El registro de fuentes ya llega en M3-C1. Faltan las preguntas y la segunda herramienta, y declararlo en el caso. |
| M3-AE2 | Contrastar | Analizar | 2 + 1 | 2,8 % | 1,3 % | En parte | M3-C1 | 150 | Se demuestra en lo principal. La rúbrica debe traer sus criterios. |
| M3-AE3 | Organizar | Aplicar | 2 + 1 | 2,8 % | 0,0 % | No | No | 142.5 | El informe del Hito 3 no se entrega. Pedirlo en un caso de M3. |
| M3-AE4 | Evaluar | Evaluar | 3 + 1 | 3,3 % | 3,8 % | En parte | M3-C1, M3-C2 | 150 | Falta criterio para evaluar resultados de la IA y fundamento normativo en la rúbrica. |
| M4-AE1 | Seleccionar | Analizar | 3 + 1 | 3,3 % | 0,0 % | En parte | M4-C2, sin declarar | 127.5 | M4-C2 ya pide comparar opciones de voz con su licencia. Declararlo y ampliarlo a imagen o video. |
| M4-AE2 | Producir | Aplicar | 3 + 1 | 3,3 % | 1,3 % | No | M4-C1 | 127.5 | Ninguna imagen llega. Pedir la pieza con su brief. |
| M4-AE3 | Generar | Aplicar | 2 + 1 | 2,8 % | 2,5 % | No | M4-C2 | 120 | La locución y la pista no llegan: el docente ve una tabla de voces y un mensaje. |
| M4-AE4 | Elaborar | Crear | 2 + 1 | 2,8 % | 1,3 % | No | M4-C1 | 127.5 | C1 dice «entrega un clip» y ninguna tarea lo pide. Moodle ya lo admite. |
| M5-AE1 | Identificar | Analizar | 3 + 1 | 3,5 % | 2,5 % | En parte | M5-C1, M5-C2 | 127.5 | El caso ubica una tarea ajena. Pedir la matriz con tres tareas del cargo. |
| M5-AE2 | Construir | Crear | 3 + 1 | 3,5 % | 0,0 % | No | No | 120 | Nadie ve un flujo. Pedir capturas, pruebas y ficha (práctica 2). |
| M5-AE3 | Incorporar | Evaluar | 3 + 1 | 3,5 % | 2,5 % | En parte | M5-C1, M5-C2 | 120 | Llegan fragmentos. Pedir el plan de contingencia y el efecto del control. |
| M6-AE1 | Diagnosticar | Analizar | 3 + 1 | 3,5 % | 1,7 % | En parte | Pitch | 90 | El pitch pide línea base e indicador, no meta ni viabilidad. Quitar «uno al que aspira». |
| M6-AE2 | Implementar | Crear | 3 + 1 | 3,5 % | 1,7 % | No | Pitch | 90 | El pitch cuenta el flujo, no lo muestra. Pedir la evidencia del Hito 6b. |
| M6-AE3 | Evaluar | Evaluar | 3 + 1 | 3,5 % | 1,7 % | En parte | Pitch | 82.5 | Las cifras se declaran sin registro. Resolver el portafolio. |

## Cómo se comparó

- El aula Moodle, leída el 03-11 con sesión de administrador y sin cambiar nada: configuración de finalización, libro de calificaciones, las 11 tareas, los 13 cuestionarios, las rúbricas, los foros, los informes y las insignias.
- La planilla de Natalia en vivo, que coincide con la copia del repositorio.
- Los 22 aprendizajes esperados, leídos uno por uno contra la guía: contenido, prácticas, casos, ítems con nota, tema normativo y herramientas.
- Nuestras anotaciones (ESTADO, criterios, observaciones, acta y pendientes) y el texto de la guía, releído sección por sección.
- Tres revisiones independientes que intentaron rebatir los dictámenes con los archivos originales y con el código de Moodle 5.3: los resultados ya incorporan lo que encontraron.

1. V solo si hay evidencia que se pueda abrir. Ante la duda entre dos resultados, el más exigente.
2. Si la fila dice «cada uno», basta un aprendizaje esperado que falle para que no sea V, y el hallazgo lo nombra.
3. Aún no existe la solicitud, así que en las filas de Solicitud y Ambas se juzga el insumo con que se llenará: la planilla, data/curso.json y el aula. Si el aula está bien y la planilla dice otra cosa, la fila queda en P, salvo que el objeto de la fila sea la contradicción misma: ahí es F.
4. Lo estático (estructura, actividades, registros) es V si está configurado y se puede abrir. Lo que depende de que alguien lo use (intervención, retroalimentación, resultados) queda en P mientras nadie lo haya usado.
5. F si lo que la fila pide no está escrito en ningún insumo o si falla en la mayoría de los casos. P si falla en una parte.
6. SD solo si falta aquello con que se compara: no es una falla del curso, pero tampoco cuenta como cumplido.
7. En cada aprendizaje esperado se mira si el producto que pide su verbo llega al docente: Sí, En parte o No. Ninguno llega hoy completo y con rúbrica propia.

### Anotaciones nuestras que esta comparación corrige

| Dónde | Qué decía | Qué es cierto |
| --- | --- | --- |
| docs/AULA-MOODLE.md, cambios del 02-11 | La finalización del curso se recalculó, entra la tarea del pitch y se exige 60 % de nota. | No se aplicó: Moodle tiene los criterios bloqueados y siguen en 57 actividades, sin ninguna tarea. Y el mínimo son 60 puntos de 1.800, no 60 %. |
| docs/SENCE-GUIA-TECNICA-FT.md, sección 2.7 y 13 | Las entregas de los casos y del pitch son la instancia obligatoria. | Ninguna entrega es requisito para terminar. |
| ESTADO.md, docs/AULA-MOODLE.md y docs/SENCE-GUIA-TECNICA-FT.md | Falta crear la cuenta del evaluador cuando haya nombre y correo. | La cuenta existe, con rol de profesor sin edición y de estudiante, y registra acceso el 02-11. |
| ESTADO.md, pendientes | Lista sacar M4-C3 de la planilla junto a otros cambios, sin advertir su efecto en las horas. | Sacarlo abre un descuadre de 90 minutos: la suma de la planilla baja a 86,5 h. |
| Planilla, hoja Cumplimiento RE 2484 | La instancia obligatoria está cubierta por los hitos con retroalimentación y la duración coincide con el desglose. | Los hitos son prácticas sin envío y el desglose no calza con el aula. |
| docs/MAPA-AULA-MOODLE.md y scripts/mapa-aula.mjs | Correo natalia@empoderatech.cl, e inducción y diagnósticas pendientes. | El correo termina en .com, y la inducción y las 6 diagnósticas ya están en el aula. |

## La guía

La guía técnica explica con qué criterios el SENCE revisa las solicitudes de cursos por franquicia tributaria bajo la Resolución Exenta 2.484 de 2026. Baja esa resolución a preguntas concretas y a ejemplos de lo que pasa y de lo que no pasa.

El curso ya tiene el primer visto bueno del cliente, pero quien decide si se financia con franquicia es el SENCE. Un curso puede gustarle al cliente y aun así quedar inadmisible. Esta auditoría deja escrito, una sola vez y con su página, todo lo que la guía pide, para comparar después el aula y la solicitud contra una vara fija.

**Alcance.** Esta auditoría revisó las 21 páginas y las 20 secciones de la guía. La comparación con el curso está en las secciones 1 a 5 y en la tabla de verdad.

147 enunciados en 15 bloques: 133 se comparan con el curso y 26 son excluyentes. 18 modelos y 18 hallazgos.

## Cómo leer la tabla

- **Tipo.** Requisito: lo que debe existir o decirse. Criterio: lo que el SENCE analizará. Límite: lo que no basta o no cuenta. Modelo: patrón tomado de un ejemplo de la guía, que orienta sin obligar al pie de la letra. Aclaración y Afirmación: precisan cómo se lee la guía y no se comparan. Lo que sale solo de un ejemplo va como Modelo si muestra lo que sí y como Límite si muestra lo que no.
- **Dónde.** Dónde se comprueba. Solicitud: el formulario del SENCE, que hoy se alimenta de la planilla. Aula: Moodle. Ambas: debe estar declarado y además existir en el aula.
- **Si es falso.** Inadmisible: la revisión termina. Observada, Debe corregirse, Insuficiente, Puede observarse, No se acredita y Faltan antecedentes: las palabras con que la guía lo dice. No lo dice: la guía no escribe la consecuencia; se trata como riesgo de observación.
- **V/F.** V: verdadero, con evidencia que se pueda abrir. P: parcial. F: falso. SD: sin datos para juzgar. La sección 5 trae las reglas.
- **Arreglo.** Código de la corrección que cierra la fila, en el plan de la sección 3.

## Enunciados destacados

1. **Pasar la admisibilidad no aprueba el curso: solo abre la evaluación técnica.** Son dos puertas y la segunda es la exigente. Una solicitud puede tener todo lo formal en orden y caer porque su evaluación no verifica la competencia. Hay que diseñar pensando en la segunda puerta. *Qué lo prueba:* Bloques de admisibilidad en verdadero y, además, los de evaluación técnica. *(Guía, pp. 3 y 8; filas PR-03.)*
2. **Basta un requisito legal falso para que la solicitud quede inadmisible y no se revise lo demás.** Los ocho requisitos no se compensan entre sí. Un curso excelente con el facilitador mal descrito ni siquiera llega a la evaluación técnica. Por eso el bloque AL se compara primero. *Qué lo prueba:* Todas las filas del bloque AL, una por una. *(Guía, p. 7; filas PR-04.)*
3. **Un curso no puede ser solo contenido para leer o ver: debe haber intervención formativa y evaluación.** Es la frontera entre capacitación y autoaprendizaje, y un curso asincrónico con paquetes SCORM es el que está más cerca de ella. La diferencia la hace lo que ocurre entre el contenido y la nota. *Qué lo prueba:* Descripción del proceso en la solicitud y secuencia real de cada módulo en el aula. *(Guía, p. 4; filas AL-09 a AL-11.)*
4. **Nombrar a un facilitador no basta: hay que decir qué hará, sobre qué aprendizaje, por qué canal y cuándo.** El SENCE busca a una persona que interviene en el aprendizaje, no a quien administra la plataforma. Es un requisito excluyente, y en la etapa técnica se mira además si sus antecedentes calzan con esa función. *Qué lo prueba:* Antecedentes del facilitador y descripción de su función en la solicitud. *(Guía, p. 6; filas AL-16 a AL-23.)*
5. **Estar disponible no es acompañar: foro, correo, chat o mesa de ayuda no acreditan por sí solos.** Es el error natural de un curso asincrónico: declarar canales en vez de actividades. La guía pide hechos formativos, no vías de contacto abiertas. *Qué lo prueba:* La instancia obligatoria se describe como actividad, no como canal. *(Guía, pp. 6 y 16; filas AL-25, IN-01 e IN-03.)*
6. **Un acompañamiento bien descrito reúne cinco elementos: actividad + responsable + evidencia + retroalimentación + registro.** Es el ejemplo que la guía da por adecuado y lo más parecido a una receta que trae. Cada instancia obligatoria debería poder leerse con esos cinco elementos, y el aula tiene que mostrarlos. *Qué lo prueba:* Recorrido en el aula con una cuenta de prueba: los cinco elementos a la vista. *(Guía, p. 16; filas IN-04 a IN-08.)*
7. **Para cada aprendizaje esperado debe poder reconstruirse su evidencia, instrumento, criterio, ponderación y condición de aprobación.** El diseño se juzga completo, pero la evaluación debe poder seguirse aprendizaje por aprendizaje. Si a uno le falta su cadena, no hay cómo mostrar que se verificó. Con 22 aprendizajes esperados, es la tabla más larga que hay que construir. *Qué lo prueba:* Ficha por aprendizaje esperado con los seis eslabones completos. *(Guía, p. 17; filas EV-04.)*
8. **Preguntas de selección múltiple sobre conceptos pueden no bastar para demostrar que alguien sabe aplicar.** El instrumento debe estar a la altura del verbo. Si el aprendizaje dice aplicar, la guía sugiere mostrar desempeño: un caso resuelto, una simulación o una estrategia, con criterios para valorarlos. *Qué lo prueba:* Instrumento de cada aprendizaje esperado de aplicar, comparado con su verbo. *(Guía, p. 18; caso parecido en la p. 11; filas CU-12 y EV-14.)*
9. **La competencia se escribe como acción + objeto o resultado + contexto o condición de desempeño.** De esa frase cuelga todo lo demás: define qué hay que enseñar y qué hay que evaluar. Una competencia vaga deja sin referencia a los aprendizajes, a las actividades y a la evaluación. *Qué lo prueba:* Separar los tres elementos en cada competencia declarada. *(Guía, p. 11; filas CM-04.)*
10. **Que la suma cuadre no alcanza: la distribución de horas debe ser razonable y poder reconstruirse.** El SENCE preguntará cómo se usan las horas, no solo cuántas son. Cada cambio en el aula mueve el desglose, así que las horas se recalculan al final de cada cambio. *Qué lo prueba:* Horas por aprendizaje esperado y por actividad, que sumen el total y calcen con el aula. *(Guía, p. 14; filas DU-02, DU-04 y DU-07.)*
11. **Un mismo dato no puede decir dos cosas en dos partes.** La guía lo ejemplifica con el peso de una evaluación. Cada vez que el diseño cambia en un lugar y no en otro nace una contradicción, y con varias fuentes vivas el riesgo es real. *Qué lo prueba:* Nombre, horas, modalidad, ponderaciones y facilitador iguales en toda la solicitud, y de ahí en la planilla y el aula. *(Guía, p. 8; filas AF-08 y AF-09.)*
12. **Lo que la solicitud declara, el aula debe mostrarlo.** La solicitud es una promesa que se comprueba. Prometer retroalimentación individual obliga a que la plataforma deje ver la actividad, la entrega, la intervención, la retroalimentación y el registro. *Qué lo prueba:* Revisión de la solicitud contra el aula, punto por punto. *(Guía, pp. 19-20; filas LM-01, LM-12 y LM-13.)*
13. **Si un instrumento está bien descrito en la solicitud, su comprobación queda para la plataforma; si no está descrito, se puede observar.** Dice cuánto hay que escribir. No hace falta copiar cada instrumento en la solicitud, pero sí explicar qué es, para qué sirve, con qué criterios se aplica y cuánto pesa. *Qué lo prueba:* Cada instrumento con finalidad, criterios y ponderación en la solicitud. *(Guía, p. 20; filas LM-14.)*
14. **La pregunta de fondo es si el diseño «permite razonablemente desarrollar y verificar la competencia laboral declarada» (guía técnica, p. 9).** Resume toda la guía y sirve para decidir en caso de duda: una pieza del curso vale en la medida en que ayuda a desarrollar la competencia o a demostrar que se logró. *Qué lo prueba:* Lectura completa del diseño con esa pregunta en mente. *(Guía, p. 9; filas CU-03.)*

## Tabla de verdad

### PR · Cómo funciona la revisión

Secciones 1, 2, 3, 4, 5 y cierre. Estas filas no se comparan con el curso: explican las reglas del juego. Están aquí para que nadie lea mal el resultado de una etapa.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PR-01 | 1 | 3 | La guía orienta a los OTEC sobre cómo presentar sus solicitudes y con qué criterios se revisarán en admisibilidad y evaluación técnica, conforme a la RE 2.484 de 2026. | Afirmación | — | — | — | — |   |   |
| PR-02 | 1 | 3 | La admisibilidad legal mira si la actividad puede ser capacitación financiable con franquicia; la formal, si la información alcanza para evaluarla después. | Afirmación | — | — | — | — |   |   |
| PR-03 | 1 y 4 | 3, 8 | Superar la admisibilidad solo deja pasar a la evaluación técnica; no significa que el curso esté aprobado. | Afirmación | — | — | — | — |   |   |
| PR-04 | 2 | 7 | Si falla cualquiera de los requisitos legales, la solicitud es inadmisible y su revisión se detiene. | Afirmación | — | — | — | — |   |   |
| PR-05 | 3.2 | 7 | En admisibilidad formal no se juzga si los componentes son óptimos: solo que sean consistentes y evaluables. | Afirmación | — | — | — | — |   |   |
| PR-06 | 2.5, 2.8 y 4 | 5, 6, 8 | La admisibilidad comprueba que algo exista; la evaluación técnica analiza su coherencia, suficiencia, idoneidad, pertinencia y proporción. La proporcionalidad de las horas y la calidad del instrumento se dejan para esa etapa. | Afirmación | — | — | — | — |   |   |
| PR-07 | 5 | 9 | La evaluación técnica no revisa cada componente por separado: analiza el diseño completo. | Afirmación | — | — | — | — |   |   |
| PR-08 | 5.1 | 9 | Revisa al menos diez ámbitos: coherencia curricular; aprendizajes y contenidos; técnicas y actividades; duración y horas; facilitador; interacción, retroalimentación y acompañamiento, cuando corresponda; evaluación; materiales, recursos, infraestructura y equipamiento; plataformas y trazabilidad en e-learning; y costos. | Afirmación | — | — | — | — |   |   |
| PR-09 | Cierre | 21 | Los ejemplos de la guía son solo referenciales y orientadores. | Afirmación | — | — | — | — |   |   |

### AL · Admisibilidad legal

Secciones 2.1 a 2.8. Es el primer filtro y no admite compensación: si un requisito falla, la solicitud queda inadmisible. Por eso se compara primero. Lo legal se lee en lo que la solicitud describe; el cruce con el aula va en el bloque LM. Las filas del facilitador y de la interacción son las más exigentes para un curso asincrónico, porque piden describir a una persona que interviene.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AL-01 | 2.1 | 3 | La solicitud apunta a desarrollar o perfeccionar conocimientos, habilidades o competencias para el trabajo: empleabilidad, productividad, adaptación a la tecnología o desempeño. | Requisito | Solicitud | Inadmisible | Nombre, competencia y finalidad declarada | V | Las 6 competencias y los 22 aprendizajes esperados apuntan a tareas de trabajo: correos, informes, planillas, investigación y automatización. |   |
| AL-02 | 2.1 | 3 | El ítem «Características de los participantes» deja reconocer con claridad la finalidad formativa del curso y cómo se relaciona con el trabajo de quienes participan. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: finalidad y relación con el trabajo | F | El ítem no está escrito. La planilla (hoja Léeme) conserva el público cesante y a su lado una línea de Natalia que lo corrige; la hoja Cumplimiento sigue con el público antiguo. | C-20 |
| AL-03 | 2.1 | 3 | El ítem «Características de los participantes» dice qué funciones cumple el público del curso. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: funciones | F | El ítem no está escrito. Hay insumo suelto: una línea en Léeme, una lista de tareas en los criterios del 28-10 y cuatro cargos en el aula. Nada dice qué funciones cumple el público. | C-20 |
| AL-04 | 2.1 | 3 | Ese ítem señala la necesidad laboral del grupo. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: necesidad laboral | F | La necesidad laboral del grupo no está escrita en los documentos del curso. La propuesta a Accenture no se pudo revisar. | C-20 |
| AL-05 | 2.1 | 3 | Ese ítem señala qué aspecto del desempeño se quiere fortalecer. | Requisito | Solicitud | Inadmisible | Ítem de la solicitud: desempeño a fortalecer | F | Tampoco está escrito qué aspecto del desempeño se fortalece. Se deduce de las competencias, pero la guía pide declararlo. | C-20 |
| AL-06 | 2.1 | 3-4 | El ítem «Competencia a desarrollar» expresa el desempeño esperado como una acción que la persona podrá hacer en su trabajo al terminar. | Requisito | Solicitud | Inadmisible | Ítem «Competencia a desarrollar» | P | Hay seis competencias de módulo con acción y contexto, pero ninguna del curso, y el ítem va en singular (O-05). | C-16 |
| AL-07 | 2.2 | 4 | El propósito predominante no es la recreación, la convivencia, la integración, el esparcimiento ni el bienestar sin una finalidad real de capacitación laboral. | Límite | Solicitud | Inadmisible | Nombre, competencia, aprendizajes y contenidos | V | El propósito es laboral. El quiz juego es un recurso de método que no pesa en la nota del curso. |   |
| AL-08 | 2.2 | 4 | Usar dinámicas recreativas como recurso del método no vuelve inadmisible un curso por sí solo: lo que cuenta es que su propósito principal sea formativo y laboral. | Aclaración | — | — | Sirve para ubicar juegos e insignias como recurso del método | — |   |   |
| AL-09 | 2.3 | 4 | La solicitud describe un proceso formativo estructurado y no se limita a entregar contenidos, dejarlos disponibles o pedir que se revisen por cuenta propia. | Requisito | Solicitud | Inadmisible | Descripción del proceso en la solicitud | P | El aula tiene una secuencia clara: por tema, contenido, quiz y dos prácticas; por módulo, casos con entrega, foro, resumen y evaluación. La planilla describe otro proceso: hitos con tutor y casos autocorregidos, sin las prácticas. | C-23 |
| AL-10 | 2.3 | 4 | Quien participa no solo lee o mira contenidos: el proceso incluye intervención formativa. | Requisito | Solicitud | Inadmisible | Actividades con intervención del facilitador, descritas | P | La intervención existe (11 tareas con revisión docente), pero se puede terminar el curso sin pasar por ella. | C-01, C-23 |
| AL-11 | 2.3 | 4 | El proceso incluye evaluación de aprendizajes. | Requisito | Solicitud | Inadmisible | Evaluación descrita en la solicitud | V | 7 cuestionarios con nota y 11 tareas con rúbrica, todos en el libro de calificaciones. |   |
| AL-12 | 2.4 | 5 | Si el curso aborda una ley, un reglamento, un protocolo, un procedimiento u otra obligación normativa, su diseño desarrolla una competencia aplicable al trabajo. | Requisito | Solicitud | Inadmisible | Aprendizajes y casos sobre datos personales, licencias y derechos | V | No es un curso de cumplimiento normativo: la Ley 21.719 y las licencias se usan para decidir en el trabajo. |   |
| AL-13 | 2.4 | 5 | La acción no se agota en informar, difundir, registrar una lectura, acreditar que se tomó conocimiento o cumplir una formalidad. | Límite | Solicitud | Inadmisible | Actividades y evaluación de esos temas, como se describen | V | Ninguna actividad se agota en informar o en dejar constancia de lectura. |   |
| AL-14 | 2.4 | 5 | Un tema normativo se plantea como aplicación de la norma, con evaluación del aprendizaje, y no como su sola identificación. | Modelo | Solicitud | Inadmisible | Verbos de los aprendizajes sobre datos, licencias y derechos | P | M3-AE4 y M4-AE3 aplican la norma en casos e ítems con nota, pero la rúbrica común no mide el fundamento normativo. En M5-AE3 la Ley 21.719 aparece solo como contexto (P05). En M4-AE1 la Ley 17.336 y las licencias tienen solo selección múltiple. | C-10, C-11, C-15 |
| AL-15 | 2.5 | 5 | La duración es de al menos 8 horas cronológicas, salvo que un Plan Formativo SENCE, una norma sectorial u otra regulación especial fije otra. | Requisito | Solicitud | Inadmisible | Duración total declarada | V | 88 horas en el aula y en la planilla. Si se presenta ligado a un Plan Formativo, la duración la fija él. |   |
| AL-16 | 2.6 | 6 | La solicitud identifica quién es responsable de intervenir en la formación. | Requisito | Solicitud | Inadmisible | Identificación del facilitador | P | Avisos e Inducción nombran a Natalia Hernández como docente y su cuenta tiene rol de profesor. La planilla sigue en «falta identificar» (pendiente 5). | C-22, C-23 |
| AL-17 | 2.6 | 6 | Señala sus antecedentes de formación y experiencia en la temática del curso. | Requisito | Solicitud | Inadmisible | Antecedentes en el tema | F | No hay antecedentes de formación ni de experiencia en el tema en la planilla, el repositorio ni el aula. | C-22 |
| AL-18 | 2.6 | 6 | Señala sus antecedentes de formación y experiencia en la capacitación de personas adultas. | Requisito | Solicitud | Inadmisible | Antecedentes formando adultos | F | No hay antecedentes de capacitación de personas adultas. | C-22 |
| AL-19 | 2.6 | 6 | Describe qué acción realizará esa persona. | Requisito | Solicitud | Inadmisible | Función formativa: acción | P | El aula y la guía del facilitador dicen qué hace: revisa con rúbrica, califica y comenta. La planilla describe otra cosa: hitos con tutor. | C-22, C-23 |
| AL-20 | 2.6 | 6 | Describe sobre qué actividad o aprendizaje esperado intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: actividad o aprendizaje | P | Los casos y el pitch declaran 17 de 22 aprendizajes esperados. El docente ve algo del producto en 10 y en 12 no lo recibe. No está declarado por aprendizaje. | C-22, C-10 |
| AL-21 | 2.6 | 6 | Describe por qué canal intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: canal | P | En el aula el canal es la tarea «Entrega y revisión docente», con los foros para las consultas. La planilla declara otro: hitos con tutor y casos con autocorrección. | C-22, C-23 |
| AL-22 | 2.6 | 6 | Describe en qué momento del proceso intervendrá. | Requisito | Solicitud | Inadmisible | Función formativa: momento | P | En el aula: al cierre de cada módulo, hasta 72 horas hábiles, y foros en menos de 24. No hay fechas y el curso va a ritmo propio, así que ese momento no está definido. La planilla habla de hitos. | C-22, C-23 |
| AL-23 | 2.6 | 6 | Hay intervención ligada al aprendizaje: no basta con nombrar a una persona ni con darle tareas administrativas, técnicas o de soporte. | Límite | Solicitud | Inadmisible | Intervenciones atadas a una actividad de aprendizaje | V | La función está ligada al aprendizaje: corrige con rúbrica, califica y comenta. No son tareas de soporte. |   |
| AL-24 | 2.7 | 6 | El proceso contempla al menos una instancia obligatoria de interacción, de retroalimentación o de acompañamiento. | Requisito | Solicitud | Inadmisible | Instancia declarada como obligatoria | F | Lo único obligatorio es publicar en 7 foros, completar 50 SCORM y llegar a 60 puntos de 1.800, que son 3,3 % de la nota. Las 11 tareas no son requisito. La guía no dice si un foro obligatorio con consigna basta (O-04): se toma la lectura exigente. | C-01, C-23 |
| AL-25 | 2.7 | 6 | Esa instancia no se reduce a tener a disposición un correo, un chat, una mesa de ayuda u otra vía de consulta. | Límite | Solicitud | Inadmisible | La instancia descrita es una actividad, no un canal | P | La instancia diseñada es una tarea con producto y revisión, pero no es obligatoria: quien no entrega solo pasa por los foros. | C-01 |
| AL-26 | 2.8 | 6 | El curso contempla una evaluación destinada a comprobar los aprendizajes alcanzados. | Requisito | Solicitud | Inadmisible | Evaluación declarada | V | Evaluaciones de módulo, final y tareas con rúbrica. Escala de 1,0 a 7,0, aprueba con 60 %. |   |
| AL-27 | 2.8 | 6 | Esa evaluación no consiste solo en encuestas de satisfacción, listas de asistencia, declaraciones de haber participado o constancias de lectura o de toma de conocimiento. | Límite | Solicitud | Inadmisible | Instrumentos declarados | V | Los instrumentos son cuestionarios y rúbricas; no dependen de encuestas ni declaraciones. |   |

### AF · Admisibilidad formal

Secciones 3.1 a 3.5 y 4. Este filtro no mide calidad sino orden: que la solicitud esté completa, sea específica y no se contradiga. Aquí caen los datos que cambiaron en un lugar y no en otro.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AF-01 | 3.1 | 7 | Están completos todos los campos y antecedentes que pide el sistema. | Requisito | Solicitud | No lo dice | Formulario sin campos vacíos | F | Aún no hay solicitud y el insumo ya está incompleto: faltan participantes, antecedentes del facilitador y costos. No se ha visto el formulario, así que la lista puede crecer. | C-20, C-22, C-25, C-27 |
| AF-02 | 3.1 | 7 | La información es lo bastante específica para entender las características del curso. | Requisito | Solicitud | No lo dice | Lectura por alguien ajeno al curso | P | La planilla detalla aprendizajes, contenidos y técnicas. Le faltan participantes, función del facilitador y costos, y está desactualizada. | C-20, C-22, C-23, C-25 |
| AF-03 | 3.2 | 7 | Competencia, aprendizajes esperados, contenidos, técnicas, actividades e instrumentos de evaluación no se contradicen de forma manifiesta. | Requisito | Solicitud | Observada | Matriz de coherencia contra el aula | F | La Matriz cita instrumentos que el aula no tiene («Rúbrica P1», «Análisis de caso C3») y su columna de contenidos muestra las actitudes en los 22 aprendizajes, por una fórmula corrida. | C-23 |
| AF-04 | 3.3 | 7 | La duración total declarada coincide con el desglose horario de la solicitud. | Requisito | Solicitud | Observada | Suma del desglose contra el total | F | La planilla da 88 h con diferencia 0, pero cuenta 11 casos y el aula tiene 10: sacando M4-C3 la suma baja a 86,5 h. Además el aula tiene actividades sin minutos, así que su total real no se conoce. | C-21 |
| AF-05 | 3.3 | 7 | El desglose se muestra por aprendizaje esperado y suma exactamente el total. | Modelo | Solicitud | Observada | Horas por aprendizaje esperado | F | No hay desglose por aprendizaje esperado. La Matriz atribuye solo Rise y quiz: 2.865 de 5.280 minutos (54,3 %). | C-21 |
| AF-06 | 3.4 | 7 | La modalidad es una de las tres previstas (presencial, e-learning sincrónica o e-learning asincrónica) y está bien identificada. | Requisito | Solicitud | No lo dice | Campo modalidad | V | E-learning asincrónica en la planilla, y el aula funciona así aunque ninguna página lo nombre. Falta usar el nombre exacto del formulario (O-17). |   |
| AF-07 | 3.4 | 7-8 | La modalidad es coherente con la forma en que se describe el desarrollo del curso. | Requisito | Solicitud | Observada | Descripción del curso en la solicitud | V | Sin horarios ni sesiones: todo ocurre en Moodle y a ritmo propio, como se declara. |   |
| AF-08 | 3.5 | 8 | No hay contradicciones, inconsistencias manifiestas ni falta de información que impidan entender el diseño o evaluarlo. | Requisito | Solicitud | Observada | Lectura cruzada de solicitud, planilla y aula | F | Planilla y aula se contradicen en público, pesos, instrumentos, casos y horas. Una solicitud hecha con la planilla no describe el aula. | C-20, C-21, C-23 |
| AF-09 | 3.5 | 8 | Un mismo dato no aparece con valores distintos en dos partes (el ejemplo es el peso de una evaluación). | Límite | Solicitud | Observada | Nombre, horas, modalidad, pesos y facilitador iguales en toda la solicitud | F | Es el ejemplo de la guía: la evaluación final vale 30 % en la planilla y 40 % en el aula; cada evaluación de módulo, 8 % y 5 %. El nombre del curso aparece en tres versiones. | C-23, C-07 |
| AF-10 | 4 | 8 | La solicitud desarrolla técnicas metodológicas: la admisibilidad comprueba que existan. | Requisito | Solicitud | No lo dice | Técnicas descritas en la solicitud | P | La planilla trae una línea de técnica por aprendizaje esperado. El desarrollo está en las actividades, no en lo que se declararía. | C-26 |

### CU · Coherencia curricular

Secciones 5 y 6. La evaluación técnica lee el diseño como una sola cadena. Un eslabón suelto, aunque sea bueno, debilita toda la solicitud.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CU-01 | 2.1 | 4 | La competencia es coherente con las características de los participantes y se desarrolla en aprendizajes esperados, técnicas y evaluación. La guía deja esta revisión para la evaluación técnica. | Criterio | Solicitud | No lo dice | Lectura cruzada de esos cuatro elementos | P | Las competencias conversan con quien trabaja en tareas administrativas, pero falta el texto de participantes y las de M4, M5 y M6 no se comprueban con lo evaluado. | C-20, C-10 |
| CU-02 | 5 | 9 | Hay coherencia en toda la secuencia: participantes, competencia, aprendizajes esperados, contenidos, técnicas, actividades, evaluación, duración y recursos. | Criterio | Solicitud | No lo dice | Matriz de coherencia de punta a punta | P | La cadena se corta en el primer eslabón, porque falta el texto de participantes, y en la evaluación, la duración y los recursos. | C-20, C-10, C-21, C-24 |
| CU-03 | 5 | 9 | Mirado completo, el diseño permite de forma razonable desarrollar la competencia y comprobar que se logró. | Criterio | Ambas | No lo dice | Lectura completa del diseño con esa pregunta | P | El diseño permite desarrollar la competencia. Comprobarla, no del todo: nadie ve una imagen, un audio, un clip ni un flujo. | C-10 |
| CU-04 | 6 | 9 | Los componentes están relacionados entre sí y cada uno aporta al desarrollo de la competencia. | Criterio | Solicitud | No lo dice | Ningún componente queda suelto | P | Contenidos y prácticas aportan a su aprendizaje. Varios casos declaran en su línea «cubre» criterios que no piden y omiten otros que sí piden. | C-10, C-11 |
| CU-05 | 6 | 10 | La competencia responde qué debe hacer la persona. | Criterio | Solicitud | No lo dice | Una respuesta para la competencia | P | M4 y M5 dicen qué hace la persona. M1 («interactuar»), M2 («optimizar») y M3 («acelerar») no se pueden observar. | C-16 |
| CU-06 | 6 | 10 | Los aprendizajes esperados responden qué aprenderá la persona, paso a paso, para llegar a la competencia. | Criterio | Solicitud | No lo dice | Progresión de los aprendizajes | V | 22 aprendizajes esperados en una secuencia de proceso que lleva a cada competencia, sin un ascenso parejo de nivel. |   |
| CU-07 | 6 | 10 | Los contenidos responden qué conocimientos y habilidades necesita dominar. | Criterio | Solicitud | No lo dice | Una respuesta para los contenidos | V | Cada aprendizaje tiene saberes, habilidades y actitudes, y su Rise (338 pantallas en total). |   |
| CU-08 | 6 | 10 | Las técnicas y actividades responden con qué desarrollará los aprendizajes. | Criterio | Solicitud | No lo dice | Una respuesta para las técnicas y actividades | P | En el aula cada tema tiene Rise, quiz y dos prácticas, y cada módulo sus casos o el pitch. La planilla responde con otras actividades: 11 casos y 9 hitos con tutor, sin prácticas. | C-23, C-26 |
| CU-09 | 6 | 10 | La evaluación responde cómo se comprobará que los alcanzó. | Criterio | Solicitud | No lo dice | Una respuesta para la evaluación | P | Responde con cuestionarios y tareas, pero en 12 aprendizajes esperados lo que lleva nota no muestra el producto del verbo. | C-10, C-11 |
| CU-10 | 6 | 10 | La solicitud muestra una relación directa entre características laborales de los participantes, competencia, aprendizajes, contenidos, actividades y evaluación. | Requisito | Solicitud | No lo dice | Relación explícita entre los seis elementos | F | La Matriz no tiene columna de participantes, su columna de contenidos está errada y cita instrumentos que ya no existen. | C-20, C-23, C-27 |
| CU-11 | 6 | 10 | Se observa una relación entre el trabajo de la persona, lo que aprende, la actividad que hace y lo que finalmente se evalúa. | Modelo | Solicitud | No lo dice | Por aprendizaje: trabajo, actividad y evaluación | P | El proyecto parte de la tarea del cargo, pero 70 % de la nota son preguntas sobre casos ajenos y solo 11,25 % mide un producto propio. | C-10, C-14 |
| CU-12 | 6 | 11 | La evaluación comprueba la aplicación de la competencia y no solo conocimiento conceptual. | Límite | Ambas | Observada | Qué desempeño muestra la persona en cada evaluación | F | Las 80 preguntas con nota son situaciones y ninguna es de pura definición, y 30 % va con rúbrica. Pero se puede aprobar solo con alternativas y en 12 aprendizajes el producto no llega al docente. La guía no dice si esas preguntas bastan (O-02). | C-10, C-14 |

### CM · Competencia

Secciones 7. La competencia es la referencia de todo lo demás. Si está mal escrita, los aprendizajes, las actividades y la evaluación no tienen contra qué medirse.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CM-01 | 7 | 11 | La competencia dice qué será capaz de hacer la persona al terminar la capacitación. | Requisito | Solicitud | Debe corregirse | Texto de la competencia | P | Las seis competencias de módulo lo dicen; falta la del curso (O-05). | C-16 |
| CM-02 | 7 | 11 | Se relaciona con el contexto laboral de la persona. | Requisito | Solicitud | No lo dice | Contexto de trabajo en el texto | V | Las seis nombran el contexto laboral. |   |
| CM-03 | 4 | 8 | La competencia es coherente y suficiente dentro del diseño. | Criterio | Solicitud | No lo dice | Competencia contra el resto del diseño | P | En M4 y M5 ningún instrumento verifica la acción, y en M6 solo un relato de tres minutos. La competencia de M1 no nombra lo que pide M1-AE3. | C-10, C-16 |
| CM-04 | 7 | 11 | Tiene la estructura acción + objeto o resultado + contexto o condición de desempeño. | Requisito | Solicitud | Debe corregirse | Los tres elementos, separados | P | Las seis tienen los tres elementos en la forma. En M1 el objeto es la herramienta y la condición es una finalidad; en M2 el contexto es genérico. | C-16 |
| CM-05 | 7 | 11 | No es una fórmula genérica del tipo conocer + herramienta, que no deja ver el desempeño. | Límite | Solicitud | Debe corregirse | Verbo de desempeño observable | P | Ninguna es «conocer + herramienta», pero M1 se le acerca, y «optimizar» y «acelerar» nombran un efecto que nada mide. | C-16 |

### AE · Aprendizajes esperados

Secciones 8. Son los eslabones que llevan a la competencia. Cada uno debe tener contenidos y actividades asociados y poder evaluarse. Si no se puede decir qué hará la persona para demostrarlo, falta precisarlo.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AE-01 | 8 | 11 | Cada aprendizaje esperado describe un desempeño parcial que hay que alcanzar para desarrollar la competencia. | Requisito | Solicitud | No lo dice | Cada aprendizaje contra su competencia | P | Casi todos lo cumplen. M1-AE3 exige ajustar la temperatura, que queda en una práctica opcional. | C-15 |
| AE-02 | 8 | 12 | Cada uno aporta directamente al logro de la competencia. | Requisito | Solicitud | No lo dice | Relación con la competencia | P | Aportan en general. M1-AE1 funciona como requisito previo de los demás. | C-15 |
| AE-03 | 8 | 12 | Cada uno describe algo que se puede verificar. | Requisito | Solicitud | No lo dice | Verbo y producto observable | P | En M1-AE3 la temperatura no se verifica. M3-AE4, M3-AE3, M4-AE1, M4-AE3, M5-AE3 y M6-AE3 tienen partes del texto sin criterio C. | C-15 |
| AE-04 | 8 | 12 | Cada uno tiene contenidos asociados. | Requisito | Ambas | No lo dice | Contenido del aprendizaje en el aula | V | 22 de 22 tienen su Rise en el aula. |   |
| AE-05 | 8 | 12 | Cada uno tiene actividades que permiten desarrollarlo. | Requisito | Ambas | No lo dice | Actividades del aprendizaje en el aula | P | Todos tienen quiz y dos prácticas. Queda abierto M5-AE2, cuyo laboratorio no se ha probado. | C-24 |
| AE-06 | 8 | 12 | Cada uno se puede evaluar. | Requisito | Ambas | No lo dice | Instrumento que lo evalúa | P | Cada criterio C tiene un ítem etiquetado, pero M4-AE4:C1 y M1-AE1:C2 no tienen uno que los mida, y en 12 aprendizajes no se ve el producto. | C-10, C-13 |
| AE-07 | 8 | 12 | Para cada uno se puede responder qué hará la persona para demostrar que lo logró; si no, probablemente falta operacionalizarlo. | Criterio | Solicitud | No lo dice | Ficha por aprendizaje esperado | P | En todos se puede decir qué hará la persona, pero en 12 esa demostración queda en prácticas que nadie recibe. | C-10 |
| AE-08 | 6 | 11 | Los aprendizajes y las actividades están al nivel de la competencia: una competencia de aplicar no se sostiene con un aprendizaje de conocer y una lectura. | Modelo | Solicitud | Observada | Verbos de competencia, aprendizajes y actividades | P | Por nivel declarado, 21 de 22 están en Aplicar o más. M1-AE1 (explicar) queda bajo su competencia; el verbo principal de M5-AE1 (identificar) también, aunque está etiquetado Analizar. | C-15 |

### CT · Contenidos

Secciones 9. No se cuenta cuánto contenido hay, sino si alcanza para hacer lo que el aprendizaje pide. Un curso rico en conceptos puede quedar corto si el aprendizaje dice aplicar.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CT-01 | 9 | 12 | Los contenidos están asociados a cada aprendizaje esperado y se relacionan con la competencia. | Requisito | Ambas | No lo dice | Cruce aprendizaje y contenido | V | 22 de 22 tienen contenidos propios ligados a su competencia. |   |
| CT-02 | 9 | 12 | Son suficientes para desarrollar el aprendizaje. | Requisito | Ambas | No lo dice | Contenido contra lo que se pide hacer | P | Faltan piezas en M1-AE3 (temperatura), M3-AE4 (bases de tratamiento de la nueva ley), M4-AE1 («uso comercial» sin fuente), M4-AE3 (dato biométrico), M5-AE2 (laboratorio sin probar), M6-AE2 (P03 enseña lo contrario de lo que se califica) y M6-AE3 (6 partes frente a 4). | C-15, C-17, C-24 |
| CT-03 | 9 | 12 | Se vinculan con la finalidad del curso. | Requisito | Solicitud | No lo dice | Contenidos contra finalidad laboral | P | 21 de 22. En M1-AE3, 4 de 16 pantallas tratan top-p, API y versiones de modelos, lejos del trabajo administrativo. | C-15 |
| CT-04 | 9 | 12 | Siguen una secuencia lógica. | Requisito | Ambas | No lo dice | Orden de temas y módulos | V | Secuencia lógica. Observación: dato personal se define en M3-AE4 y antes el curso usa una regla práctica con ejemplos, lo que es razonable. |   |
| CT-05 | 9 | 12 | Su profundidad es compatible con las horas declaradas. | Requisito | Ambas | No lo dice | Profundidad contra horas del aprendizaje | P | Sin piloto no se puede saber si calza: unas 8 horas de lectura y 98 actividades dentro de los Rise frente a 42,25 horas declaradas con tarifa plana. | C-21 |
| CT-06 | 9 | 13 | Si el aprendizaje pide aplicar, hay contenidos para aplicar (estructura, técnicas, ejercicios) y no solo definiciones, historia o tipos. | Límite | Ambas | Insuficiente | Pasos, técnicas y ejercicios en esos temas | P | 21 de 22 traen procedimiento y ejercicios. En M1-AE3 el ajuste de temperatura queda en una práctica opcional y sin probar (H5). | C-15, C-24 |

### TM · Técnicas y actividades

Secciones 10. Nombrar técnicas no prueba nada. El SENCE quiere leer qué hace la persona, qué produce y cómo interviene el facilitador.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TM-01 | 10 | 13 | Las técnicas y actividades permiten de verdad desarrollar los aprendizajes esperados. | Criterio | Ambas | No lo dice | Técnica y actividades por aprendizaje | P | Desarrollan 21 de 22. Queda M5-AE2, cuyo laboratorio no se ha probado. | C-24 |
| TM-02 | 10 | 13 | La solicitud no se queda en una lista de técnicas (exposición, lectura, foro, estudio de caso, trabajo en grupo). | Límite | Solicitud | Insuficiente | Texto de técnicas en la solicitud | P | La columna Técnica de la planilla es una línea por aprendizaje («Exposición interactiva en Rise + ejemplos guiados»). El detalle existe en las actividades, fuera de lo que se declararía. | C-26 |
| TM-03 | 10 | 13 | Explica qué hará la persona participante. | Requisito | Solicitud | Insuficiente | Acción del participante por actividad | P | El aula lo dice paso a paso. Lo que se declararía no: la planilla no trae las 44 prácticas. | C-26 |
| TM-04 | 10 | 13 | Explica cómo esa actividad aporta al aprendizaje esperado. | Requisito | Solicitud | Insuficiente | Relación actividad y aprendizaje | P | Las prácticas van ligadas a su tema, pero las líneas «cubre» de los casos no calzan con lo que piden, como en M1-C1. | C-26, C-11 |
| TM-05 | 10 | 13 | Declara cómo el facilitador retroalimentará y acompañará, para acreditar ese proceso. | Requisito | Ambas | Insuficiente | Forma y momento de la retroalimentación | P | Está declarado en las 11 tareas (72 horas hábiles) y en los foros (24 horas hábiles). En las 44 prácticas el facilitador solo actúa a demanda por foro. | C-22, C-26 |
| TM-06 | 10 | 14 | En cada actividad se distinguen cinco elementos: actividad, participante, aprendizaje asociado, producto e intervención del facilitador. | Modelo | Solicitud | No lo dice | Los cinco elementos por actividad | P | Los cinco elementos están en 11 actividades. En las 44 prácticas el facilitador actúa solo a demanda por foro y la solicitud no lo declara. | C-26 |

### DU · Duración y horas

Secciones 11. Las horas son el dato que más se desordena cuando el diseño cambia. La guía pide que se puedan reconstruir, no solo sumar, y que tengan sentido frente a lo que se pide hacer.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DU-01 | 11 | 14 | La duración guarda relación con la complejidad de la competencia, la cantidad y profundidad de los aprendizajes, los contenidos, la metodología, las actividades prácticas y la evaluación. | Requisito | Solicitud | No lo dice | Justificación de las horas totales | P | No hay justificación escrita de las horas. M4-AE1 quedó sin práctica con tiempo desde que salió M4-C3. | C-21 |
| DU-02 | 11 | 14 | La distribución permite ejecutar el proceso de forma razonable: no basta con que la suma sea correcta. | Criterio | Solicitud | Puede observarse | Horas por módulo, aprendizaje y actividad | F | La planilla pone 48 % en Rise y nada en 36 prácticas, donde está gran parte del trabajo: la distribución no describe cómo se hace el curso. | C-21 |
| DU-03 | 11 | 14-15 | No hay diferencias entre las horas totales y el desglose, tampoco en la suma de las actividades. | Requisito | Solicitud | Debe corregirse | Total contra suma por aprendizaje y actividad | F | La planilla sigue diciendo 88 con diferencia 0, y sin M4-C3 su suma da 86,5 h. El total real del aula no se conoce y puede pasar de 88 h. | C-21 |
| DU-04 | 11 | 14 | La duración de cada actividad se puede reconstruir. | Requisito | Ambas | Observada | Parámetros de tiempo por tipo de actividad | F | Sin minutos: 36 de 44 prácticas, las 6 infografías que exige la finalización, 5 diagnósticas y el foro general. La evaluación de M6 y la final comparten 60 minutos. Los videos duran 30 min 20 s y se declaran 36. | C-21 |
| DU-05 | 11 | 14 | Ningún aprendizaje complejo tiene un tiempo claramente insuficiente. | Requisito | Solicitud | Puede observarse | Horas de los aprendizajes más complejos | P | M4-AE1 tiene 127,5 minutos y ninguna práctica con tiempo; M4-AE4 pide dos clips. M6-AE3 supone que el flujo lleva semanas en uso y ese período no tiene horas. Sin desglose no se puede descartar. | C-21 |
| DU-06 | 11 | 14 | No hay tiempos excesivos sin actividades formativas que los respalden. | Requisito | Solicitud | Puede observarse | Minutos de cada actividad con su respaldo | F | 42,25 h de Rise frente a unas 8 h de lectura, sin piloto (pendiente 13). Dentro de los Rise hay 98 actividades, pero sus minutos no están respaldados. | C-21 |
| DU-07 | 11 | 14 | Se puede reconstruir cómo se reparte en la práctica la carga horaria, sin contradicciones. | Criterio | Ambas | Observada | Hoja «Resumen horas» contra el aula de hoy | F | No se puede reconstruir: la planilla no calza con el aula y hay tiempos que se pisan, como el informe de M3-AE3, que cae en su Rise y en el Hito 3. | C-21 |
| DU-08 | 11 | 15 | La metodología y las actividades explican cómo se usan las horas declaradas. | Modelo | Solicitud | Observada | Texto de metodología | F | Los minutos son tarifas planas: nada explica cómo se usan las horas de cada aprendizaje esperado. | C-21 |

### FA · Facilitador

Secciones 12. Aquí ya no basta con que el facilitador exista: se juzga si sus antecedentes calzan con lo que va a hacer. Y lo que puede hacer limita lo que el curso puede prometer.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FA-01 | 12 | 15 | Su formación y/o experiencia permite relacionarlo razonablemente con la temática del curso. | Criterio | Solicitud | Faltan antecedentes | Antecedentes contra temática | SD | No hay antecedentes de la facilitadora para juzgar. | C-22 |
| FA-02 | 12 | 15 | También con las actividades que debe desarrollar. | Criterio | Solicitud | Faltan antecedentes | Antecedentes contra actividades | SD | Sin antecedentes no se puede relacionar con las actividades: 11 tareas y 7 foros. | C-22 |
| FA-03 | 12 | 15 | También con la orientación del aprendizaje. | Criterio | Solicitud | Faltan antecedentes | Experiencia orientando a adultos | SD | Sin antecedentes no se puede relacionar con la orientación del aprendizaje. | C-22 |
| FA-04 | 12 | 15 | Y con la evaluación, cuando le corresponda. | Criterio | Solicitud | Faltan antecedentes | Experiencia evaluando con rúbrica | SD | Sin antecedentes no se puede relacionar con la evaluación: califica 30 % de la nota. | C-22 |
| FA-05 | 12 | 15 | No se pide un título profesional específico, salvo que una norma sectorial lo determine. | Aclaración | — | — | — | — |   |   |
| FA-06 | 12 | 15 | La persona es idónea para la función formativa declarada y sus acciones apoyan el proceso de aprendizaje. | Criterio | Solicitud | No lo dice | Función declarada contra antecedentes y acciones | SD | La función está descrita en el aula, no en lo que se declararía (AL-19), y la idoneidad depende de los antecedentes. | C-22 |
| FA-07 | 12 | 15 | Hay una correspondencia reconocible entre sus antecedentes y su función (formación afín, experiencia en el tema y experiencia facilitando capacitación laboral). | Modelo | Solicitud | Faltan antecedentes | Antecedentes y función, lado a lado | SD | Faltan la formación afín, la experiencia en IA generativa y la experiencia facilitando capacitación laboral. | C-22 |
| FA-08 | 12 | 16 | La experiencia general como capacitador, sin relación con la materia, no alcanza para mostrar idoneidad en lo que debe orientar o evaluar. | Límite | Solicitud | Faltan antecedentes | Antecedentes en la materia del curso | SD | Falta mostrar la relación con la materia: los módulos 4 y 5 son técnicos. | C-22 |

### IN · Interacción, retroalimentación y acompañamiento

Secciones 13. En e-learning esta es la diferencia entre un curso y un repositorio. La guía exige una actividad concreta y deja fuera los canales abiertos, incluido el foro por sí solo.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IN-01 | 13 | 16 | El acompañamiento no se apoya por sí solo en correo, foro, chat, mesa de ayuda o canal de consultas. | Límite | Ambas | No se acredita | Lo declarado no depende de un canal abierto | P | La instancia real son las tareas, pero no son obligatorias: quien no entrega solo pasa por los foros. | C-01, C-23 |
| IN-02 | 13 | 16 | Está identificada una actividad formativa concreta. | Requisito | Ambas | No se acredita | Actividad con nombre en solicitud y aula | P | En el aula son 11 actividades concretas: las tareas «Entrega y revisión docente». La planilla nombra otras, los hitos, que en el aula no se entregan. | C-23 |
| IN-03 | 13 | 16 | La solicitud no se queda en decir que el tutor estará disponible para responder dudas: eso muestra disponibilidad, pero no necesariamente intervención. | Límite | Solicitud | Insuficiente | El texto habla de acciones | V | No se queda en disponibilidad: hay entrega, rúbrica, nota y plazo. |   |
| IN-04 | 13 | 16 | Cada participante entrega un producto en un punto definido del curso. | Modelo | Ambas | No lo dice | Tarea de entrega en el aula | P | El aula pide 10 casos y el pitch al cierre de cada módulo, pero no exige entregarlos y aún no hay entregas. La planilla pone la entrega en los hitos. | C-01, C-05, C-23 |
| IN-05 | 13 | 16 | El facilitador revisa ese producto. | Modelo | Ambas | No lo dice | Revisión del docente en la tarea | P | Tarea y rúbrica están listas, pero nadie las ha usado: 0 entregas y la cuenta docente no registra acceso. | C-05 |
| IN-06 | 13 | 16 | Entrega retroalimentación individual por la plataforma, con fortalezas, errores y aspectos por corregir. | Modelo | Ambas | No lo dice | Comentario individual en la tarea | P | Comentarios, archivo y rúbrica están activos, sin ningún uso real. La guía del facilitador da una pauta general y 44 ejemplos para las prácticas, ninguno para los casos ni el pitch. Con un intento máximo, corregir no permite reenviar. | C-05, C-18, C-02 |
| IN-07 | 13 | 16 | La actividad es obligatoria. | Modelo | Ambas | No lo dice | Requisito de finalización del curso | F | Ninguna tarea es requisito de finalización y ninguna página dice que sea obligatoria: el aula solo avisa que lo no entregado cuenta como 0. | C-01, C-23 |
| IN-08 | 13 | 16 | Queda registrada en la plataforma. | Modelo | Ambas | No lo dice | Registro de entrega y retroalimentación | P | Entrega, comentarios, rúbrica y nota quedarían en la tarea, en el historial y en los registros, que no se borran. Está configurado, pero sin entregas no hay registro que mostrar. | C-05 |

### EV · Evaluación de los aprendizajes

Secciones 14, 15 y 16. Es el bloque con más consecuencias: tiene que demostrar que cada aprendizaje y la competencia se alcanzaron. Si los instrumentos no muestran desempeño, no alcanza con que lo demás esté bien.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV-01 | 14 | 16 | La evaluación permite comprobar que la persona alcanzó los aprendizajes esperados. | Requisito | Ambas | No lo dice | Cobertura de todos los aprendizajes | F | Todos los criterios C tienen un ítem etiquetado, pero en 12 de 22 aprendizajes esperados el producto del verbo no llega al docente, y en los otros 10 llega en parte. | C-10, C-13 |
| EV-02 | 14 | 16 | En conjunto, permite comprobar la competencia del curso. | Requisito | Ambas | Observada | Evaluaciones en conjunto contra la competencia | P | La final integra los 22 con 4 casos ajenos. Las competencias de M4 y M5 no se ven en ninguna entrega y la de M6 solo en un relato. | C-10 |
| EV-03 | 2.8 y 4 | 6, 8 | Cada instrumento es pertinente, suficiente y de calidad técnica para lo que evalúa. | Criterio | Ambas | No lo dice | Cada instrumento contra lo que debe verificar | F | El primer intento muestra la respuesta y hay 2 intentos sin espera, en las 7 evaluaciones. Por caracteres, la correcta es la más larga en 22 de 22 de la final y, con empates, en 9, 10 y 10 de 10 en M1, M2 y M3. La rúbrica de casos es genérica y se aprueba sin el producto. | C-03, C-12, C-13, C-11 |
| EV-04 | 14 | 17 | Para cada aprendizaje esperado se puede reconstruir la cadena: evidencia, instrumento, criterio de evaluación, ponderación y condición de aprobación. | Requisito | Ambas | No lo dice | Ficha por aprendizaje con los seis eslabones | F | Falta el eslabón evidencia en los 12 aprendizajes sin producto. Tampoco se lee por aprendizaje: el caso da un puntaje para dos, la rúbrica no trae sus criterios y las preguntas no dicen qué miden. | C-10, C-11, C-27 |
| EV-05 | 14 | 17 | La solicitud indica qué se evaluará. | Requisito | Solicitud | Puede observarse | Objeto de cada evaluación | P | El aula lo dice por instrumento. La planilla apunta a instrumentos antiguos y falta decirlo por aprendizaje esperado. | C-23, C-27 |
| EV-06 | 14 | 17 | Indica qué hará la persona participante. | Requisito | Solicitud | No lo dice | Tarea de la persona en cada evaluación | P | Los casos y las evaluaciones lo dicen. En la planilla son hitos que ya no se entregan. | C-23, C-27 |
| EV-07 | 14 | 17 | Indica con qué instrumento se evaluará. | Requisito | Solicitud | Puede observarse | Instrumento por evaluación | P | Aula: cuestionarios y rúbricas. Planilla: «Rúbrica P1» y otros que no existen. | C-23 |
| EV-08 | 14 | 17 | Indica qué criterios se aplicarán. | Requisito | Ambas | Puede observarse | Criterios o rúbrica | P | Los criterios C están en data/curso.json, pero la rúbrica de casos no los usa. | C-11, C-27 |
| EV-09 | 14 | 17 | Indica cómo se calificará, con su escala o puntaje y su mínimo de aprobación. | Requisito | Ambas | Puede observarse | Escala, puntaje y mínimo | P | El aula lo define: 1,0 a 7,0 con 4,0 al 60 % y rúbrica de 100 puntos con mínimo 60. La planilla lo deja provisional y trae otra rúbrica. | C-23 |
| EV-10 | 14 | 17 | Indica cuál es la ponderación. | Requisito | Ambas | Puede observarse | Pesos en la solicitud y en el libro de calificaciones | P | El aula la explica y calza con el libro, salvo el Rise de M6-AE3, que dice que el pitch no pondera. La planilla trae otra: sumativas 40, hitos 15, pitch 15 y final 30. | C-23, C-17 |
| EV-11 | 14 | 17 | Las ponderaciones suman 100 %. | Modelo | Ambas | No lo dice | Suma de los pesos | V | 40 + 6 × 10 = 100, comprobado en el libro de calificaciones. |   |
| EV-12 | 15 | 18 | Hay correspondencia verificable entre aprendizaje, actividad, evidencia e instrumento: un aprendizaje de aplicar, un caso, un producto de la persona y una rúbrica con criterios y puntajes (100 puntos y mínimo de 60 en el ejemplo). | Modelo | Ambas | No lo dice | El modelo aplicado a los aprendizajes de aplicar | F | Ningún aprendizaje esperado la cumple completa. En 10 el producto llega en parte y la rúbrica no es la suya; en 12 no llega. | C-10, C-11 |
| EV-13 | 2.7 y 6 | 6, 10 | El facilitador evalúa la actividad o aplica el instrumento. | Modelo | Ambas | No lo dice | Quién califica cada instrumento | P | El docente califica 11 tareas, que son 30 % de la nota, sin ningún uso real aún; 70 % es automático. La planilla le asigna otros instrumentos. | C-05, C-23 |
| EV-14 | 16 | 18 | Si el aprendizaje es de aplicar, el instrumento comprueba esa capacidad: no se limita a selección múltiple sobre conceptos. | Límite | Ambas | Insuficiente | Instrumento de cada aprendizaje de aplicar | F | En los aprendizajes de aplicar o más sin producto (M1-AE2, M1-AE3, M2-AE1, M2-AE3, M2-AE4, M3-AE3, M4-AE2, M4-AE3, M4-AE4, M5-AE2 y M6-AE2) la nota sale de alternativas o de una entrega que no lo muestra. Las preguntas son situaciones, pero la guía no dice si eso basta (O-02). | C-10, C-11, C-01 |
| EV-15 | 16 | 18 | Para corregirlo se incorpora un instrumento de desempeño (resolver un caso, una simulación, analizar respuestas o elaborar una estrategia) con criterios para valorar el desempeño esperado. | Modelo | Ambas | No lo dice | Caso, simulación o producto con rúbrica | P | Hay instrumento con rúbrica en 30 % de la nota y declarado para 17 de 22, pero solo 11,25 % del curso mide el producto de la persona. | C-10, C-11, C-14 |

### RC · Recursos y equipamiento

Secciones 17. La pregunta es simple: con lo declarado, ¿se puede hacer lo diseñado? En un curso de IA eso incluye las herramientas, el acceso y el equipo que piden las prácticas.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RC-01 | 17 | 19 | Los recursos declarados permiten hacer las actividades y las evaluaciones propuestas. | Requisito | Solicitud | Puede observarse | Lista de recursos contra actividades | P | El laboratorio de Make pide computador y la ruta por celular depende de H1 y H2, sin confirmar. Gamma y Canva tienen tope de uso. H3, H4, H5 y H10 siguen abiertas. | C-24 |
| RC-02 | 17 | 19 | Las técnicas metodológicas muestran cómo se usarán los materiales, herramientas y equipamiento declarados. | Requisito | Solicitud | No lo dice | Uso de cada herramienta en las técnicas | P | Las prácticas dicen cómo usar cada herramienta. La planilla no lo recoge para la solicitud. | C-24, C-26 |
| RC-03 | 17 | 19 | Si hay ejercicios con software, se declaran el software, el computador, sus características técnicas y el acceso. | Modelo | Solicitud | Puede observarse | Herramientas, equipo, requisitos y acceso | F | Ni la planilla ni el aula declaran software, equipo, características y cuentas: la Inducción solo pide navegador e internet. Cada práctica nombra sus herramientas, pero no hay lista. | C-24 |
| RC-04 | 17 | 19 | A un curso sobre todo conceptual no se le exigen recursos que no vienen al caso. | Aclaración | — | — | — | — |   |   |

### LM · Verificación en el aula

Secciones 18 y 19. En e-learning el aula es la evidencia. Todo lo que diga la solicitud puede comprobarse dentro de la plataforma, con sus registros. La lista de la guía es abierta: puede mirarse más.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LM-01 | 18 | 19 | Lo declarado en la solicitud corresponde con lo que después se puede comprobar en la plataforma. | Requisito | Ambas | No lo dice | Solicitud contra aula, punto por punto | P | Aún no hay solicitud. Si se armara con la planilla, el revisor buscaría 11 casos, hitos revisados por un tutor y una final de 30 %, y el aula muestra otra cosa. | C-23 |
| LM-02 | 18 | 19 | El aula deja comprobar la estructura del curso. | Criterio | Aula | No lo dice | Secciones y orden | V | 9 secciones y 213 actividades, ordenadas por módulo y tema. |   |
| LM-03 | 18 | 19 | Deja comprobar las actividades. | Criterio | Aula | No lo dice | Actividades visibles y configuradas | V | Están las 44 prácticas, los 10 casos y el pitch, 50 SCORM, 11 tareas, 13 cuestionarios, 8 foros y 6 glosarios. |   |
| LM-04 | 18 | 19 | Deja comprobar la participación. | Criterio | Aula | No lo dice | Informes de participación | V | Informes de registros, actividad y participación disponibles, con huella real de la cuenta del evaluador. Se leyeron como administrador: confirmarlos con la cuenta que reciba el SENCE. |   |
| LM-05 | 18 | 19 | Deja comprobar la progresión. | Criterio | Aula | No lo dice | Finalización de actividades | V | 155 actividades con seguimiento e informes de progreso y de finalización. El seguimiento funciona; lo que falla es qué se exige (AL-24). |   |
| LM-06 | 18 | 19 | Deja comprobar la intervención del facilitador. | Criterio | Aula | No lo dice | Comentarios y notas del docente | P | Las herramientas están, pero no hay nada que ver: 0 entregas, foros sin abrir y la cuenta docente sin acceso. El único mensaje del curso es del administrador. | C-04, C-05 |
| LM-07 | 18 | 19 | Deja comprobar la interacción. | Criterio | Aula | No lo dice | Foros y entregas con respuesta | P | Los 7 foros tienen 0 debates: faltan los mensajes de apertura y al menos una conversación de prueba. | C-04, C-05 |
| LM-08 | 18 | 19 | Deja comprobar la retroalimentación. | Criterio | Aula | No lo dice | Retroalimentación en tareas y cuestionarios | P | Comentarios y archivo de retroalimentación están activos en las 11 tareas, sin ningún ejemplo real. | C-05 |
| LM-09 | 18 | 19 | Deja comprobar las evaluaciones. | Criterio | Aula | No lo dice | Cuestionarios y tareas calificadas | V | 7 cuestionarios con nota, 6 diagnósticas y 11 tareas con rúbrica en el aula. Se leyeron como administrador. |   |
| LM-10 | 18 | 19 | Deja comprobar los resultados. | Criterio | Aula | No lo dice | Libro de calificaciones | P | El libro está configurado con categorías, pesos, escala de 1,0 a 7,0 e informe del calificador, pero no se comprobó ningún resultado real. | C-05 |
| LM-11 | 18 | 19 | Deja comprobar los registros de trazabilidad. | Criterio | Aula | No lo dice | Registros del curso | V | Registros configurados para no borrarse e historial de calificaciones activo. El complemento SENCE 4.1.2 está instalado, sin cursos vigentes aún. |   |
| LM-12 | 18 | 20 | La plataforma contiene de verdad cada componente que se declaró como parte del diseño. | Requisito | Ambas | No lo dice | Cada componente declarado, visible en el aula | P | Casi todo lo que dicen las páginas está en el aula. No se comprobaría: los hitos con entrega, el portafolio, las insignias de módulo, la promesa del celular y lo que la planilla declara y ya no existe. | C-06, C-10, C-15, C-17, C-23, C-24 |
| LM-13 | 18 | 20 | Si se promete retroalimentación individual, la plataforma deja ver la actividad, la entrega, la intervención del facilitador, la retroalimentación y su registro. | Modelo | Aula | No lo dice | Recorrido con cuenta de prueba: los cinco rastros | P | Actividad, entrega, facilitador, retroalimentación y registro están configurados en las 11 tareas. Falta una pasada completa que lo demuestre. | C-05 |
| LM-14 | 19 | 20 | La solicitud explica qué instrumento usará, qué evalúa y cómo se calificará, y describe su finalidad, criterios y ponderación: así queda como verificación pendiente y no como falta de información. | Criterio | Solicitud | Puede observarse | Descripción de cada instrumento | P | El aula tiene instrumento, finalidad, criterios y ponderación, pero no ordenados por aprendizaje esperado ni en una planilla al día. | C-23, C-27 |
| LM-15 | 19 | 20 | Que un instrumento o registro no esté reproducido en la solicitud no significa automáticamente que no exista: si está bien declarado, el SENCE puede terminar de comprobarlo en la plataforma. | Aclaración | — | — | — | — |   |   |

### CS · Costos

Secciones 20. No se mide si es caro o barato, sino si cada costo se explica por el diseño. Si el diseño cambia, los costos declarados también deben revisarse.

| Fila | Sección | Pág. | Enunciado que debe ser verdadero | Tipo | Dónde | Si es falso | Qué lo prueba | V/F | Hallazgo y evidencia | Arreglo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CS-01 | 20 | 20 | Los costos declarados corresponden con las características técnicas de la capacitación. | Requisito | Solicitud | No lo dice | Presupuesto contra diseño | SD | No hay desglose de costos. Solo la propuesta a Accenture, que cita una norma derogada. | C-25 |
| CS-02 | 20 | 21 | Corresponden con elementos como la modalidad, el número de participantes, la duración, los facilitadores, la infraestructura, los materiales, el equipamiento, las plataformas y las actividades. | Criterio | Solicitud | No lo dice | Cada ítem de costo con su elemento del diseño | SD | Sin desglose no se puede relacionar con la modalidad, los participantes, la duración o la plataforma. | C-25 |
| CS-03 | 20 | 20-21 | No se compara con el mercado ni se observa un curso solo porque un costo parezca alto o bajo. | Aclaración | — | — | — | — |   |   |
| CS-04 | 20 | 21 | No se declara un costo de infraestructura que no aparezca en el diseño. | Límite | Solicitud | Puede observarse | Infraestructura declarada | SD | Sin desglose. El curso no usa infraestructura física. | C-25 |
| CS-05 | 20 | 21 | Toda actividad que requiera equipamiento lo tiene declarado. | Límite | Solicitud | Puede observarse | Equipamiento de las actividades | P | Las herramientas están nombradas en cada práctica y la Inducción pide computador o celular, pero no hay una lista única ni costos que la respalden. | C-24, C-25 |
| CS-06 | 20 | 21 | Cada costo tiene una relación identificable con la ejecución del curso. | Límite | Solicitud | Puede observarse | Relación de cada costo con la ejecución | SD | Sin desglose. | C-25 |

## Modelos de la guía

| N.° | Modelo | Lo que sí | Lo que no | Guía |
| --- | --- | --- | --- | --- |
| M-01 | Finalidad y desempeño | Para qué se capacita (finalidad laboral) + qué podrá hacer la persona (desempeño) | Una finalidad sin desempeño, o un desempeño sin necesidad laboral detrás | 2.1, p. 4 |
| M-02 | Tema normativo | Aplicar la norma, con evaluación del aprendizaje | Solo identificar la norma | 2.4, p. 5 |
| M-03 | Ejemplo de instancia obligatoria | Actividad en la plataforma + evaluada por el facilitador + retroalimentación en la plataforma | Correo, chat, mesa de ayuda u otro canal disponible | 2.7, p. 6 |
| M-04 | Desglose de horas | Horas por aprendizaje esperado que suman exactamente el total, y metodología que explica su uso | Un desglose cuya suma no coincide con el total | 3.3 y 11, pp. 7 y 15 |
| M-05 | Cadena curricular | Participantes + competencia + aprendizaje + actividad + evaluación, con relación observable entre el trabajo y lo evaluado | Competencia de aplicar con aprendizaje de conocer, lectura y cuestionario de definiciones | 6, pp. 10-11 |
| M-06 | Competencia | Acción + objeto o resultado + contexto o condición de desempeño | Conocer + nombre de una herramienta | 7, p. 11 |
| M-07 | Aprendizaje operacionalizado | Aprendizaje + actividad + evidencia + evaluación con rúbrica y criterios | No poder decir qué hará la persona para demostrarlo | 8, p. 12 |
| M-08 | Contenido para aplicar | Conceptos + estructura o procedimiento + técnicas + ejercicios de aplicación | Solo definición, historia y tipos | 9, p. 13 |
| M-09 | Descripción de una técnica | Actividad + participante + aprendizaje asociado + producto + intervención del facilitador | Lista de técnicas sin explicación | 10, pp. 13-14 |
| M-10 | Idoneidad del facilitador | Formación afín + experiencia en el tema + experiencia como facilitador | Experiencia general como capacitador, sin la materia | 12, pp. 15-16 |
| M-11 | Ejemplo de acompañamiento | Actividad + responsable + evidencia + retroalimentación + registro | Decir que el tutor estará disponible | 13, p. 16 |
| M-12 | Cadena de evaluación | Aprendizaje → evidencia → instrumento → criterio → ponderación → condición de aprobación | Un aprendizaje sin alguno de esos eslabones | 14, p. 17 |
| M-13 | Evaluación coherente | Aprendizaje de aplicar + caso + producto de la persona + rúbrica con criterios + puntaje máximo y mínimo (100 y 60 en el ejemplo) | Instrumento que no permite ver el desempeño | 15, p. 18 |
| M-14 | Cómo corregir una evaluación insuficiente | Agregar resolución de caso, simulación, análisis de respuestas o elaboración de una estrategia, con criterios | Selección múltiple sobre conceptos para un aprendizaje de aplicar | 16, p. 18 |
| M-15 | Recursos para software | Software + computador + características técnicas + acceso | Actividades que piden algo que no está declarado | 17, p. 19 |
| M-16 | Promesa comprobable | Actividad + entrega + intervención + retroalimentación + registro, a la vista en la plataforma | Declarar algo que la plataforma no deja ver | 18, p. 20 |
| M-17 | Verificación pendiente | Instrumento descrito en la solicitud (finalidad, criterios, ponderación), que se comprueba en el aula | Falta de información: no se explica qué instrumento se usa, qué evalúa ni cómo se califica | 19, p. 20 |
| M-18 | Costo coherente | Cada costo se explica por un elemento del diseño | Infraestructura fuera del diseño, equipamiento no declarado o costo sin relación con la ejecución | 20, p. 21 |

## Hallazgos de la auditoría

| N.° | Gravedad | Tema | Hallazgo | Qué hacer | Referencia |
| --- | --- | --- | --- | --- | --- |
| O-01 | Alta | El Anexo Técnico no llegó | La planilla anota que la RE 2.484 remite la evaluación técnica a dos documentos: una Guía Técnica y un Anexo Técnico con criterios, indicadores, medios de verificación y estándares. La guía recibida no nombra ningún anexo ni trae indicadores o estándares, y su título no es exactamente el que anota la planilla. | Confirmar con OTIC SOFOFA o el SENCE si esta es la Guía Técnica que cita la resolución y si existe un Anexo Técnico aparte. Mientras tanto, tratar esta tabla como mínimo, no como lista cerrada. | Toda la guía; planilla, hojas Léeme y Pendientes (fila 3) |
| O-02 | Alta | Selección múltiple sobre casos | La guía cuestiona la selección múltiple sobre conceptos para un aprendizaje de aplicar. No dice qué pasa con preguntas de selección múltiple construidas sobre situaciones o casos. | Tratarlo como riesgo: decidir con Natalia y, si hay duda, consultar antes de presentar. | 16, p. 18 |
| O-03 | Alta | Ponderación por aprendizaje o por evaluación | La cadena pide ponderación para cada aprendizaje esperado, pero el ejemplo pondera evaluaciones (1, 2 y final) y el ejemplo completo de la sección 15 no trae ponderación. No dice qué hacer cuando una evaluación cubre varios aprendizajes. | Armar la ficha por aprendizaje y mostrar en qué evaluación se mide y cuánto pesa esa evaluación. | 14 y 15, pp. 17 y 18 |
| O-04 | Alta | El foro como actividad | El foro aparece como medio insuficiente y como técnica que no basta enumerar, pero la guía no dice si un foro con consigna, revisión y retroalimentación del facilitador puede ser la actividad concreta. | No apoyar la instancia obligatoria en foros. Si se usan, describirlos con los cinco elementos del acompañamiento. | 10 y 13, pp. 13 y 16 |
| O-05 | Alta | Una competencia o varias | La guía razona casi siempre con la competencia del curso, en singular (en la p. 3 nombra competencias en plural, al definir la finalidad). No dice cómo se declara un curso largo organizado en módulos con competencia propia. | Revisar qué permite el formulario y definir si hace falta una competencia general del curso. | 2.1, 5 y 7, pp. 3, 9 y 11 |
| O-06 | Media | Documento sin fecha ni firma | No trae fecha, número, versión ni firma. Según los metadatos del PDF se generó el 02-11-2026, y cada página lleva una marca de CamScanner sobre el pie. | Buscar la versión oficial en sence.cl o pedirla a OTIC SOFOFA y anotar cuál se usó. Si aparece otra, comparar y actualizar esta tabla. | Todas las páginas |
| O-07 | Media | Reglas que solo están en ejemplos | La guía dice que sus ejemplos son referenciales, pero varias precisiones aparecen solo ahí: el desglose por aprendizaje, la retroalimentación con fortalezas y errores, o la rúbrica de 100 puntos con mínimo de 60. | Tratarlas como lo que el revisor espera ver, sin leerlas como obligación literal. En la tabla van como Modelo si muestran lo que sí y como Límite si muestran lo que no. | pp. 7, 16, 17 y 21 |
| O-08 | Media | Cuántas instancias bastan | La sección 2.7 pide al menos una instancia de interacción, de retroalimentación o de acompañamiento. La 5.1 y el título de la 13 las suman, y la 10 pide declarar las formas de retroalimentación y acompañamiento. No dice si en la etapa técnica basta una forma ni cuántas instancias son suficientes en un curso largo. | Fijar un criterio propio, proporcional a las horas, y justificarlo. La planilla anota que la RE mira también la suficiencia (IV.3 e). | 2.7, 5.1, 10 y 13, pp. 6, 9, 13 y 16 |
| O-09 | Media | Desglose por aprendizaje o por actividad | El ejemplo de la sección 3.3 desglosa por aprendizaje esperado y el de la sección 11 habla también de actividades. No fija un único formato. | Preparar los dos desgloses y que cuadren entre sí. | 3.3 y 11, pp. 7, 14 y 15 |
| O-10 | Media | Sin parámetros de tiempo | No da parámetros para estimar tiempos en e-learning asincrónico ni cifras de lo insuficiente o lo excesivo: queda a criterio de quien revisa. | Mantener a la vista los parámetros propios (por ejemplo, minutos por pantalla) y su respaldo. La planilla tiene pendiente un piloto de tiempos. | 11, p. 14 |
| O-11 | Media | Qué pasa si falla lo formal | Para lo legal, la guía dice que la revisión termina. Para lo formal solo hay ejemplos que dicen observada o por corregir: no escribe una regla general ni si se corrige en el mismo trámite. | Revisar la RE 2.484. La planilla anota que cada reingreso reinicia el plazo completo (IV.1.1). | 3, pp. 7-8 |
| O-12 | Media | Técnicas en la admisibilidad | La sección 4 incluye el desarrollo de técnicas metodológicas entre lo que se verifica en admisibilidad, pero no aparece como requisito propio en las secciones 2 ni 3. | Tratarlo como exigible desde la admisibilidad (fila AF-10). | 4, p. 8 |
| O-13 | Media | Formación y experiencia | La sección 2.6 pide antecedentes de formación y experiencia; la sección 4 habla de formación y experiencia, y la 12 de formación y/o experiencia. | Declarar las dos cosas cuando se pueda: es la lectura segura. | 2.6, 4 y 12, pp. 6, 8 y 15 |
| O-14 | Media | Un responsable o un equipo | Habla de la persona responsable, en singular, aunque entre los elementos de costos nombra facilitadores en plural. No trata equipos ni reemplazos. | Definir bien a la persona antes de presentar: la planilla anota que la RE no permite sustituir al facilitador autorizado (VI.2) y que hay que confirmar si se pueden declarar varios. | 2.6 y 20, pp. 6 y 21 |
| O-15 | Media | Con qué acceso se mira el aula | La guía ubica la revisión de la plataforma dentro de la evaluación técnica y como algo posterior a lo declarado, pero no dice con qué acceso ni si el aula debe estar completa al presentar. Además, la lista de lo verificable es abierta. | Tener el aula completa y una cuenta para el revisor antes de presentar. La planilla anota que la RE exige mantener el acceso operativo (III.2). | 5.1, 18 y 19, pp. 9, 19 y 20 |
| O-16 | Baja | Existencia o descripción | En el índice, la sección 2.3 habla de la existencia de un proceso de aprendizaje; en el cuerpo, de su descripción y de que sea estructurado. | Tomar la lectura exigente: tiene que existir, ser estructurado y estar descrito en la solicitud. | 2.3, pp. 1 y 4 |
| O-17 | Baja | Nombre de la modalidad | La guía dice e-learning asincrónica; la planilla anota «A distancia o e-learning – asincrónica» según la resolución. | Usar el nombre exacto del formulario del sistema. | 3.4, p. 7 |
| O-18 | Baja | Erratas | Hay detalles de edición sin efecto en los requisitos: una lista que termina en coma (p. 6), el primer elemento de una lista convertido en título y sin frase que la presente (p. 10), una palabra sin tilde (p. 13) y títulos que varían entre índice y cuerpo (5.1 y 8). | Ninguna. Se dejan anotados para que nadie los lea como exigencias. | pp. 1, 6, 9, 10, 11 y 13 |

## Cruce con la RE 2.484

Armado con la hoja «Cumplimiento RE 2484» de la planilla, que resume la resolución.

| Guía | RE 2.484 | Fila de la hoja | Qué agrega la guía |
| --- | --- | --- | --- |
| 2.1 | IV.2.1 a) | 1 | Dice qué debe contener «Características de los participantes» y que la competencia exprese una acción en el trabajo |
| 2.2 | IV.2.1 b) | 2 | Aclara que lo lúdico como recurso no vuelve inadmisible un curso |
| 2.3 | IV.2.1 c) | 3 | Pide intervención formativa además de evaluación |
| 2.4 | IV.2.1 d) | 4 | Distingue aplicar de identificar |
| 2.5 | IV.2.1 e) y II.2 | 5 | Separa el mínimo de 8 h (admisibilidad) de la proporcionalidad (evaluación técnica) |
| 2.6 | IV.2.1 f) y II.1.b.2 | 6 | Antecedentes en el tema y con adultos; función con acción, aprendizaje, canal y momento |
| 2.7 | IV.2.1 g) | 7 | La disponibilidad de un canal no cuenta |
| 2.8 | IV.2.1 h) | 8 | Lista lo que no es evaluación de aprendizajes |
| 2 (cierre) | IV.2.1 (cierre) | 9 | Nada nuevo: confirma la inadmisibilidad |
| 3.1 | IV.2.2 a) | 10 | Pide además que la información sea específica |
| 3.2 | IV.2.2 b) | 11 | Aclara que aquí no se juzga si es óptimo |
| 3.3 | IV.2.2 c) | 12 | Ejemplo de desglose por aprendizaje esperado |
| 3.4 | IV.2.2 d) y II.1.b.2 | 13 | La modalidad debe calzar con la descripción del curso |
| 3.5 | IV.2.2 e) | 14 | Ejemplo con el peso de una evaluación |
| 5 a 9 | IV.3 a) | 15 | Secuencia completa, pregunta por nivel, estructura de la competencia, reglas para aprendizajes y contenidos |
| 10 | IV.3 b) | 16 | Cinco elementos para describir una actividad |
| 11 | IV.3 c) | 17 | Qué evitar y cuándo se observa |
| 12 | IV.3 d) y II.1.b.2 | 18 | No exige un título: mira la idoneidad para la función |
| 13 | IV.3 e) | 19 | Suma el foro a los medios insuficientes y da la fórmula de cinco elementos |
| 14 a 16 | IV.3 f) | 20 | Cadena de seis eslabones por aprendizaje y límite a la selección múltiple conceptual |
| 17 | IV.3 g) | 21 | Pregunta clave y ejemplo con software |
| 18 y 19 | III.2 | 22 y 23 | Lista de lo verificable y diferencia entre falta de información y verificación pendiente |
| 20 | IV.3.1 | 24 | Qué se puede observar y qué no |
