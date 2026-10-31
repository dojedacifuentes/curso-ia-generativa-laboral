# Actividades de aplicación práctica · M5-AE1 · Potencial de automatización

## Autoevaluación 1 · Las tareas de Rosa en la recepción
cubre: H1, C1, C2
fuentes: F-H-14, F-M5-06
entrega: autoevaluacion

### Instrucción general

Vas a revisar las tareas de Rosa para decidir cuáles conviene automatizar primero y cuáles no, con la matriz de impacto y riesgo. Así
practicas con un caso ficticio el análisis que después harás con tu propio cargo. Es una autoevaluación: no se envía ni lleva nota.
Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación.

### Situación

Rosa es recepcionista de un centro médico. La coordinadora le pidió que revise qué partes de su trabajo podrían hacerse con ayuda de
un flujo automatizado, y Rosa anotó en su celular lo que hace en una semana normal. Estas son sus notas, sin nombres de pacientes:
«Contesto el teléfono y agendo horas. Cada tarde llamo o escribo a los pacientes que tienen hora al día siguiente para recordársela.
Recibo a cada paciente en el mesón y reviso que sus datos estén al día. Respondo correos con preguntas que se repiten, como el horario
o qué hay que llevar a un examen. Al final del día anoto en una planilla las horas que quedaron sin usar. Cada viernes le mando a la
coordinadora un resumen de esas horas. Ordeno los formularios en papel en el archivador. Cuando un paciente llega molesto porque el
médico va atrasado, lo calmo y le aviso al médico».

Las notas son ficticias, así que puedes pegarlas en un asistente sin exponer datos de nadie. Vas a trabajar con Gemini, que tiene app
gratuita para Android y para iPhone [@F-H-14].

### Lo que vas a hacer

1. Pega las notas de Rosa en Gemini y escribe: «Lista las tareas concretas de esta persona. Escribe cada una con un verbo y un objeto. No agregues tareas que las notas no permitan suponer».
2. Revisa la lista contra las notas: quita lo que Gemini haya inventado y agrega lo que falte. Deja entre 8 y 12 tareas.
3. Para cada tarea, anota qué la inicia, con qué datos trabaja, si sus pasos siguen reglas, qué entrega y cada cuánto se repite.
4. Marca como candidatas al menos tres tareas que se repiten, siguen reglas y trabajan con información, y descarta las que dependen del trato en persona o deciden algo sobre alguien.
5. Antes de priorizar, pregúntate si alguna candidata se puede eliminar o simplificar.
6. Responde para cada candidata, con sí o no, las tres preguntas de impacto (¿se repite seguido, cada día o cada semana?, ¿me quita tiempo que podría usar en algo más valioso?, ¿mejora algo para otras personas si se hace más rápido o sin errores?) y las tres de riesgo (¿usa datos personales o información confidencial?, si sale mal, ¿afecta a una persona, a dinero o a un plazo importante?, ¿sería difícil darse cuenta del error a tiempo?). Dos o tres sí indican impacto o riesgo alto. Ubica cada candidata en la matriz con sus cuatro cuadrantes: «Empieza aquí» (impacto alto y riesgo bajo), «Con supervisión» (impacto alto y riesgo alto), «Si sobra tiempo» (impacto bajo y riesgo bajo) y «No automatices» (impacto bajo y riesgo alto). Puedes armarla como una tabla en Google Sheets desde el celular.
7. Escribe un fundamento de una o dos líneas por tarea y pídele a Gemini que actúe como una jefatura exigente y te haga una pregunta por tarea, sin cambiar tu clasificación.

El paso 5 no es un trámite. La secuencia que propone la guía de automatización de la Universidad de Bath es eliminar, simplificar y
solo después automatizar [@F-M5-06]. En las notas de Rosa hay al menos una tarea que conviene mirar con esa pregunta antes de pensar en
un flujo. Fíjate también en los recordatorios a pacientes: se repiten y siguen reglas, pero usan nombres, teléfonos y horas de
atención, así que el riesgo pesa tanto como el impacto.

### Lo que preparas

Deja lista una tabla con las tareas de Rosa, las tres o más candidatas marcadas, la respuesta de sí o no a cada pregunta de impacto y
de riesgo, el cuadrante de cada una y su fundamento. Agrega al final dos o tres líneas sobre qué pregunta de Gemini te hizo cambiar
algo y por qué, o por qué decidiste mantener tu clasificación.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Identifica tareas automatizables | Tu lista tiene entre 8 y 12 tareas con verbo y objeto, todas sostenidas por las notas, y al menos tres candidatas que se repiten, siguen reglas y trabajan con información. | Tienes tres candidatas, pero alguna no cumple una de las tres condiciones, o tu lista trae tareas que las notas no permiten suponer. | Tienes menos de tres candidatas, o tus candidatas dependen del trato en persona. |
| Ubica las candidatas en la matriz | Cada candidata tiene sus seis respuestas de sí o no y su cuadrante calza con ellas. | Te falta alguna respuesta o el cuadrante de una candidata no calza con sus respuestas. | No hay matriz, o los cuadrantes no se apoyan en las respuestas. |
| Fundamenta la priorización | Cada fundamento nombra el cuadrante y da una razón de impacto y otra de riesgo, con un dato de las notas. | Tus fundamentos nombran el cuadrante, pero alguno no da razón para uno de los criterios o no usa un dato de las notas. | No hay fundamentos o son genéricos, como «porque es importante». |
| Revisa antes de automatizar | Muestras que te preguntaste si alguna candidata se podía eliminar o simplificar, y explicas en dos o tres líneas qué cambió o por qué mantuviste tu clasificación tras la pregunta de Gemini. | Haces solo una de las dos cosas, o tu explicación no da una razón. | No aparece la revisión de eliminar o simplificar ni la reflexión sobre Gemini. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Tareas de Rosa y su anatomía**

| Tarea | Qué la inicia | Datos | ¿Sigue reglas? | Entrega | Frecuencia | ¿Candidata? |
|---|---|---|---|---|---|---|
| Contestar el teléfono | Una llamada | Lo que dice el paciente | No | Una respuesta | Varias veces al día | No: trato en persona |
| Agendar horas | Un paciente pide hora | Nombre, teléfono, horario libre | En parte | Una hora en la agenda | Varias veces al día | No por ahora: se hace conversando |
| Recordar la hora del día siguiente a los pacientes | Es la tarde | Nombre, teléfono y hora de cada paciente | Sí | Un llamado o mensaje | Cada día | Sí |
| Recibir a cada paciente en el mesón | Llega un paciente | — | No | Atención en persona | Varias veces al día | No: trato en persona |
| Revisar que los datos del paciente estén al día | Llega un paciente | Datos personales | En parte | Ficha corregida | Varias veces al día | No: se hace con el paciente delante |
| Responder correos con preguntas que se repiten | Llega un correo | Pregunta general (horario, exámenes) | Sí | Un correo de respuesta | Cada día | Sí |
| Anotar en la planilla las horas sin usar | Termina el día | Horas sin usar, sin nombres | Sí | Una fila en la planilla | Cada día | Sí |
| Enviar a la coordinadora el resumen de horas sin usar | Es viernes | La planilla de la semana | Sí | Un resumen | Cada semana | Sí |
| Ordenar los formularios en papel | Se acumulan formularios | Papel | Sí | Archivador ordenado | Cada semana | No: trabaja con objetos |
| Calmar al paciente molesto y avisar al médico | El médico va atrasado | Lo que pasa en la sala | No | Paciente atendido y médico avisado | Varias veces por semana | No: trato en persona |

**Antes de priorizar.** El resumen del viernes se puede eliminar: si la coordinadora tiene acceso a la planilla de horas sin usar, basta
con un enlace. Los formularios en papel se pueden simplificar pasándolos a un formulario digital, antes de pensar en un flujo.

**Matriz**

| Candidata | Impacto: ¿se repite? / ¿quita tiempo? / ¿mejora para otros? | Riesgo: ¿datos personales? / ¿afecta persona, dinero o plazo? / ¿difícil notarlo? | Cuadrante |
|---|---|---|---|
| Recordar la hora a los pacientes | Sí / Sí / Sí → alto | Sí / Sí / Sí → alto | Con supervisión |
| Responder correos con preguntas que se repiten | Sí / Sí / Sí → alto | No / Sí / No → bajo | Empieza aquí |
| Anotar las horas sin usar | Sí / No / Sí → alto | No / No / No → bajo | Empieza aquí |
| Enviar el resumen del viernes | Sí / No / No → bajo | No / No / No → bajo | Si sobra tiempo (mejor eliminarlo) |

**Fundamentos**

- Recordatorios: «Con supervisión: Rosa los hace cada tarde y ayudan a que los pacientes no falten, pero usan nombres, teléfonos y horas,
  y una hora equivocada se descubre recién cuando el paciente llega».
- Correos repetidos: «Empieza aquí: llegan a diario con las mismas preguntas, y la respuesta no usa datos del paciente; el error se nota
  porque la respuesta sale de un texto fijo».
- Horas sin usar: «Empieza aquí: se anota cada día y le sirve a la coordinadora, y la planilla no lleva nombres ni datos de pacientes».
- Resumen del viernes: «Si sobra tiempo: es semanal y no usa datos personales, pero un enlace a la planilla lo reemplaza».

**Reflexión sobre Gemini.** Gemini preguntó: «Si la respuesta sobre qué llevar a un examen está mal, ¿quién lo nota?». Mantuve los
correos en «Empieza aquí», pero agregué que las respuestas deben salir de un texto aprobado por la coordinadora.

**Errores frecuentes**

- Dejar los recordatorios en «Empieza aquí» porque son simples, sin contar los nombres, teléfonos y horas de los pacientes.
- Marcar como candidata ordenar los formularios en papel, que no trabaja con información digital, o dejar en la lista una tarea que
  Gemini agregó y las notas no mencionan.
- Escribir fundamentos como «porque ahorra tiempo», que hablan solo del impacto y no dan la razón de riesgo.

## Autoevaluación 2 · La matriz de tu propio cargo
cubre: H1, C1, C2
fuentes: F-M5-01, F-M5-16
entrega: autoevaluacion

### Instrucción general

Vas a mapear las tareas de tu propio cargo y priorizar con la matriz de impacto y riesgo las que conviene automatizar. Esta matriz es
la base del flujo que construirás en el tema siguiente; si la tarea de tu proyecto del curso queda entre las candidatas, empieza por
ella. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y
revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT,
montos y datos de clientes por datos inventados.

### Situación

Ahora el cargo es el tuyo. La OIT estudia la exposición a la IA generativa tarea por tarea, y concluye que lo más probable es que se
automaticen algunas tareas y quede tiempo para otras, más que desaparezcan ocupaciones completas [@F-M5-01]. Esta actividad te pide
mirar tu trabajo de esa forma: qué tareas haces, cuáles se repiten igual y cuáles necesitan tu criterio o tu trato con las personas.

Para armar el mapa bastan tus propias notas o tu descripción de cargo. No uses planillas ni documentos internos con nombres, RUT o
teléfonos de clientes, proveedores o compañeros, y respeta lo que diga tu empresa sobre el uso de asistentes de IA.

### Lo que vas a hacer

1. Escribe en una nota lo que haces en una semana normal, con tus palabras y sin datos de la empresa ni de personas.
2. Pide a Gemini, o al asistente que autorice tu empresa, la lista de tus tareas con un verbo y un objeto, sin agregar nada que tus notas no permitan suponer, y corrígela tú.
3. Deja entre 8 y 12 tareas y marca la anatomía de cada una: qué la inicia, qué datos usa, si sigue reglas, qué entrega y cada cuánto se repite.
4. Elige al menos tres candidatas, y si puedes cinco, y revisa si alguna se puede eliminar o simplificar antes de automatizarla.
5. Responde las tres preguntas de impacto y las tres de riesgo de cada candidata y ubícalas en la matriz.
6. Escribe un fundamento por tarea, ponlo a prueba con la pregunta de la jefatura exigente y ajusta lo que haga falta.
7. Marca la tarea que automatizarías primero y explica por qué.

Si alguna candidata toca decisiones sobre personas, como asignar turnos o aprobar un beneficio, ten presente la Ley 21.719: reconoce el
derecho a no ser objeto de decisiones basadas en el tratamiento automatizado de los datos que afecten significativamente a una persona
[@F-M5-16]. Esas tareas suelen terminar en «No automatices» o, en el mejor caso, en «Con supervisión» con la decisión en manos de una
persona.

### Lo que preparas

Deja listos tu mapa de tareas, tu matriz con al menos tres candidatas y sus fundamentos, y un párrafo sobre la tarea que elegiste para
empezar: en qué cuadrante quedó, quién gana si se automatiza y qué harías con el tiempo que quede. Esta matriz es la base del flujo que
vas a construir en el tema siguiente.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Mapea las tareas del cargo | Tu mapa tiene entre 8 y 12 tareas reales de tu cargo, con verbo y objeto y su anatomía completa, sin datos de clientes, proveedores ni compañeros. | Tu mapa corresponde a tu cargo, pero hay tareas vagas, sin verbo y objeto, o a varias les falta parte de la anatomía. | Tu mapa no describe tareas de tu cargo, o trae datos de clientes, proveedores o compañeros. |
| Identifica tareas automatizables | Al menos tres candidatas se repiten, siguen reglas y trabajan con información, y revisaste si alguna se podía eliminar o simplificar. | Tienes tres candidatas, pero alguna no cumple una de las tres condiciones, o te falta la revisión de eliminar o simplificar. | Tienes menos de tres candidatas. |
| Prioriza con la matriz y fundamenta | Cada candidata tiene sus seis respuestas, su cuadrante calza con ellas y su fundamento da una razón de impacto y otra de riesgo. | Todas tus candidatas están en la matriz, pero te falta alguna respuesta, un cuadrante no calza o un fundamento no da las dos razones. | No hay matriz, o los cuadrantes no tienen respuestas ni fundamento. |
| Elige por dónde empezar | Tu párrafo dice el cuadrante, quién gana y qué harías con el tiempo; la tarea está en «Empieza aquí» o, si está en «Con supervisión», explicas qué parte queda en manos de una persona. | Tu párrafo elige una tarea, pero omite uno de sus elementos, o la tarea está en «Con supervisión» sin decir qué parte decide una persona. | No eliges una tarea, o eliges una de «No automatices» sin justificarlo. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Este es un ejemplo resuelto con el cargo de Andrés, encargado de bodega en una distribuidora. Tu matriz será distinta, porque parte de
tu propio cargo.

**Mapa de tareas.** Andrés dejó ocho tareas: registrar en la planilla la mercadería recibida; avisar a los vendedores cuando un producto
baja del mínimo; avisar a los clientes cuando un despacho se atrasa; enviar el reporte semanal a la jefatura; armar los turnos del
equipo; revisar las cajas dañadas; resolver problemas con los transportistas, y preparar el reporte diario de movimientos. Por ejemplo,
el aviso de atraso se inicia cuando un despacho queda atrasado, usa el número de pedido, la empresa cliente y la nueva fecha, sigue
reglas, entrega un correo al cliente y se repite varias veces por semana. Revisar cajas y resolver problemas con transportistas quedan
fuera: trabajan con objetos o con trato en persona.

**Eliminar y simplificar.** Antes de automatizar el reporte diario, Andrés le preguntó a su jefatura qué parte usaba: solo el resumen
del viernes. Eliminó el reporte diario y simplificó el semanal a cinco datos.

**Matriz**

| Candidata | Impacto | Riesgo | Cuadrante |
|---|---|---|---|
| Registrar la mercadería recibida | Alto: se repite a diario, le quita tiempo y otros usan el stock (3 sí) | Bajo: sin datos personales; un error descuadra el stock, pero se nota pronto (1 sí) | Empieza aquí |
| Avisar a vendedores cuando un producto baja del mínimo | Alto (3 sí): evita que un vendedor ofrezca algo que no hay | Bajo (0 sí): sin datos personales y el error se nota el mismo día | Empieza aquí |
| Avisar a clientes cuando un despacho se atrasa | Alto (3 sí): se repite, le quita tiempo y el cliente se entera a tiempo | Alto (2 sí): afecta un plazo del cliente y una fecha equivocada es difícil de ver | Con supervisión |
| Enviar el reporte semanal | Bajo (1 sí): se repite, pero ya simplificado toma poco | Bajo (0 sí) | Si sobra tiempo |
| Armar los turnos del equipo | Bajo (1 sí) | Alto (3 sí): datos de compañeros y efecto en sus vidas | No automatices |

Un fundamento de Andrés: «Ubico el aviso a vendedores en Empieza aquí porque se repite a diario y evita que ofrezcan productos sin
stock, y su riesgo es bajo porque no usa datos personales y, si falla, el error se nota el mismo día».

**Por dónde empieza.** Lo conversó con su jefatura y eligió el aviso de atraso a clientes, que es la parte de su problema que más
reclamos trae. Quedó en «Con supervisión»: la IA redacta el borrador, pero él revisa el pedido y la fecha y decide el envío. Ganan los
clientes, que se enteran antes, y él usaría el tiempo en resolver la causa de los atrasos con los transportistas.

**Qué debe tener la tuya.** Revisa que tu mapa tenga entre 8 y 12 tareas reales, cada una con verbo, objeto y su anatomía, y sin datos de
personas. Debe haber al menos tres candidatas que se repiten, siguen reglas y trabajan con información, una nota sobre qué eliminaste o
simplificaste, las seis respuestas de cada candidata y un fundamento con una razón de impacto y otra de riesgo. Si la tarea que eliges
está en «Con supervisión», di qué parte decide una persona.

**Errores frecuentes**

- Escribir tareas vagas o como metas, como «mejorar la atención», o copiar la descripción de cargo sin bajarla a tareas.
- Dejar todas las candidatas en «Empieza aquí» sin mirar el riesgo, o con fundamentos que solo hablan de ahorro de tiempo.
- Elegir para empezar una tarea que decide sobre personas, como asignar turnos, sin dejar esa decisión en manos de alguien.

## Referencias bibliográficas

- Gmyrek, P., Berg, J. y Bescond, D. (2023). *Generative AI and jobs: A global analysis of potential effects on job quantity and quality (ILO Working Paper 96)*. OIT. https://doi.org/10.54394/FHEM8239
- Google. (s. f.). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idLey=21719
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
