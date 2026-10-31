# Actividades de aplicación práctica · M1-AE3 · Parámetros de generación

## Autoevaluación 1 · Precisión o variedad en dos encargos de Camila
cubre: H1, C1, C2
fuentes: F-M1-13, F-M1-15
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a elegir un ajuste para dos encargos de Camila, comparar varias salidas de una misma consigna y quedarte con la mejor de cada encargo. Así practicas cómo orientar al asistente hacia la precisión o hacia la variedad según el objetivo. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Trabajas con datos de prueba.

### Situación

Camila tiene dos encargos con objetivos opuestos. El primero es resumir un contrato para la columna «Observaciones» de su planilla de
registro, donde caben unas dos líneas. Para practicar usa este texto de prueba: «Contrato de arriendo de una grúa horquilla entre la
constructora y Arriendos del Valle, por tres meses desde el 1 de noviembre, con pago mensual contra factura y mantención a cargo del
arrendador». El segundo es proponer asuntos para un correo de seguimiento de pago a un proveedor, que no suenen a reclamo.

Ya sabe que el mismo pedido puede darle una respuesta distinta en cada intento [@F-M1-13]. También sabe que las guías de los
proveedores recomiendan poca variación para tareas con una respuesta acotada y más variación cuando se buscan resultados diversos o
creativos [@F-M1-15]. Si su app no tiene control de temperatura, orienta la variación con la instrucción, el largo que pide y las
versiones que genera.

### Lo que vas a hacer

Vas a elegir un ajuste para cada encargo, comparar salidas y quedarte con la mejor.

1. Para cada encargo, decide antes de pedir si hay una respuesta correcta o te sirve elegir entre opciones, qué largo necesitas y si vas a regenerar. Escribe tu elección en una frase que diga qué ajuste usas y por qué calza con el objetivo.
2. Escribe un prompt para resumir el contrato y envíalo tres veces en Gemini o en el asistente que uses, cada vez en una conversación nueva: con una instrucción de precisión («Responde solo con la información del texto que te pego. Si algo no aparece, escribe “no indica”. Usa frases cortas y no agregues ejemplos»), con una de creatividad («Propón cinco opciones muy distintas entre sí») y con la de precisión más un límite de 30 palabras.
3. Escribe un prompt para los asuntos con la instrucción de creatividad y genera tres salidas con él, regenerando o en conversaciones nuevas, sin cambiar nada.
4. Anota las seis salidas en una tabla de registro, con el prompt, lo que cambiaste y un resumen de cada salida, y evalúa exactitud, cumplimiento de la tarea, formato y largo, tono y utilidad con bien, regular o mal.
5. Elige la mejor salida de cada encargo y justifícala con la frase «Elijo la versión __ porque __», diciendo también por qué descartaste las otras.

### Lo que preparas

Deja listas las dos frases con el ajuste que elegiste para cada encargo, la tabla de registro con las seis salidas y su evaluación, y las
dos elecciones justificadas.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Elige un parámetro adecuado al objetivo y lo justifica | Cada encargo tiene un ajuste (instrucción, largo y número de versiones) que calza con su objetivo, y tu frase explica el porqué con ese objetivo. | Tus ajustes son razonables, pero tu frase no los justifica con el objetivo, o el ajuste de un encargo no calza. | No escribiste frases de ajuste o tus ajustes no calzan con ninguno de los dos objetivos. |
| Registro y comparación de salidas | Las seis salidas están en tu tabla de registro, evaluadas con los cinco criterios, y las de cada encargo salen de la misma consigna cambiando una sola cosa. | Te faltan salidas o criterios en la tabla, o entre salidas cambiaste más de una cosa. | No tienes tabla o comparaste consignas distintas. |
| Compara salidas de una misma consigna y selecciona la mejor con fundamento | Eliges una salida por encargo con la frase «Elijo la versión __ porque __», apoyada en criterios de la tabla, y explicas por qué descartaste las otras. | Eliges una salida por encargo, pero tu fundamento es general o no explicas los descartes. | No eliges o eliges sin dar razones. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Ajuste de cada encargo**

- Resumen del contrato: «Uso una instrucción de precisión, un máximo de 30 palabras y una sola versión, porque hay una respuesta correcta, lo que dice el contrato, y en la columna "Observaciones" caben unas dos líneas».
- Asuntos del correo: «Uso una instrucción de creatividad, asuntos cortos y tres salidas para elegir, porque no hay un solo asunto correcto y me sirve comparar opciones que no suenen a reclamo».

**Tabla de registro**

Consigna del resumen: «Resume este contrato para la columna "Observaciones" de mi planilla de registro: [texto del contrato]». Consigna de los asuntos: «Propón cinco opciones muy distintas entre sí de asunto para un correo de seguimiento de pago a un proveedor. No deben sonar a reclamo».

| N.º | Qué cambié | Salida (resumen) | Exactitud | Cumplimiento | Formato y largo | Tono | Utilidad |
|---|---|---|---|---|---|---|---|
| 1 | Resumen con instrucción de precisión | Grúa horquilla, Arriendos del Valle, tres meses desde el 1 de noviembre, pago mensual contra factura, mantención del arrendador, más dos líneas «Garantía: no indica» y «Renovación: no indica» | Bien | Regular | Regular: unas 40 palabras | Bien | Regular |
| 2 | Resumen con instrucción de creatividad | Cinco frases; una dice «arriendo trimestral con pago flexible» | Mal: «pago flexible» no está | Mal: pedí un resumen, no opciones | Mal | Bien | Mal |
| 3 | Resumen con precisión y máximo 30 palabras | «Arriendo de grúa horquilla a Arriendos del Valle por tres meses desde el 1 de noviembre. Pago mensual contra factura; mantención a cargo del arrendador.» | Bien | Bien | Bien: cabe en dos líneas | Bien | Bien |
| 4 | Asuntos, primera salida | Incluye «¡Su pago está en camino!» | Regular: promete algo | Bien | Bien | Regular | Regular |
| 5 | Asuntos, regenerado sin cambios | Incluye «Factura pendiente: necesitamos respuesta urgente» | Bien | Bien | Bien | Mal: suena a reclamo | Regular |
| 6 | Asuntos, en una conversación nueva sin cambios | Incluye «Estado de pago de su factura N.º [número]» | Bien | Bien | Bien | Bien | Bien |

**Elecciones**

- «Elijo la versión 3 porque conserva el plazo de tres meses, la fecha de inicio, la forma de pago y la mantención, y cabe en dos líneas. Descarto la 1 porque es exacta pero larga y suma líneas que no sirven en la columna, y la 2 porque agrega "pago flexible", que el contrato no dice.»
- «Elijo el asunto "Estado de pago de su factura N.º [número]", de la salida 6, porque dice de qué se trata y no suena a reclamo. Descarto "¡Su pago está en camino!" porque promete algo que no está confirmado, y "necesitamos respuesta urgente" porque suena a reclamo.»

**Errores frecuentes**

- Pedir creatividad para el resumen, o justificar el ajuste con «porque sí» o «porque sale mejor».
- Anotar solo la salida ganadora, cambiar la instrucción y el largo a la vez, o repetir en la misma conversación en vez de abrir una nueva.
- Elegir con «me gustó más», o quedarse con un resumen que perdió la fecha o el plazo sin notarlo.

## Autoevaluación 2 · La configuración de una tarea de tu cargo
cubre: H1, C1, C2
fuentes: F-M1-15, F-M1-13
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a definir la configuración de una tarea de tu cargo, ponerla a prueba con varias salidas y dejarla escrita como regla en tu biblioteca de prompts. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y datos de clientes por datos inventados.

### Situación

Ahora el experimento es con una tarea de tu trabajo que ya tengas en tu biblioteca de prompts o que hagas seguido: un aviso al equipo,
el resumen de un procedimiento, la respuesta a un cliente o una lluvia de ideas para una actividad del área. Google recomienda
experimentar con los ajustes hasta encontrar los adecuados para cada tarea [@F-M1-15]. Microsoft, por su parte, aconseja indicar en el
prompt la extensión que esperas, por ejemplo con un límite de palabras [@F-M1-13]. Vas a hacer las dos cosas con tu tarea, usando una
copia sin datos sensibles o datos de prueba.

### Lo que vas a hacer

Vas a definir la configuración de tu tarea, ponerla a prueba y dejarla escrita como regla.

1. Escribe el objetivo de la tarea en una frase y responde tres preguntas: si hay una respuesta correcta, cuánto espacio tienes según dónde se va a leer y si te sirve elegir entre opciones.
2. Con esas respuestas, elige tu configuración de partida (instrucción de precisión o de creatividad, largo pedido y cuántas versiones vas a generar) y justifícala en una frase.
3. Prepara la consigna y obtén al menos tres salidas en el asistente que uses, en el celular o en el computador, cambiando una sola cosa entre ellas: el largo, la instrucción o nada, si vas a regenerar. Abre una conversación nueva cada vez.
4. Registra todas las salidas en tu tabla y evalúalas con cinco criterios: exactitud, cumplimiento de la tarea, formato y largo, tono y utilidad.
5. Elige la mejor con fundamento, escribe la regla de configuración que vas a usar para esa tarea y agrégala como nota en la plantilla de tu biblioteca.

### Lo que preparas

Deja listos el objetivo con las respuestas a las tres preguntas, la configuración de partida con su justificación, la tabla con tres
salidas o más, tu elección con el porqué y la nota que agregaste a tu biblioteca.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Elige un parámetro adecuado al objetivo y lo justifica | Escribiste el objetivo en una frase, respondiste las tres preguntas y tu configuración de partida calza con esas respuestas; la justificación está escrita con tus palabras. | Tu configuración es razonable, pero no se desprende de tus respuestas o la justificación es genérica. | No tienes configuración de partida o no calza con el objetivo. |
| Registro y comparación de salidas | Tienes tres salidas o más de la misma consigna, en conversaciones nuevas, cambiando una sola cosa, y todas están evaluadas con los cinco criterios. | Tienes tres salidas, pero cambiaste más de una cosa entre ellas o te faltan criterios en la tabla. | Tienes menos de tres salidas o no tienes tabla. |
| Compara salidas de una misma consigna y selecciona la mejor con fundamento | Tu elección nombra el criterio que decidió y, si la mejor salida no fue la de tu configuración de partida, lo dices y ajustas la regla. | Elegiste, pero tu fundamento es general o no se conecta con la tabla. | No elegiste una salida. |
| Regla en tu biblioteca y cuidado de los datos | Escribiste la regla de configuración y la agregaste como nota en tu plantilla, y tu prueba usa una copia sin datos sensibles o datos de prueba. | Escribiste la regla, pero no quedó en la plantilla o es vaga. | No tienes regla o tu prueba usa datos sensibles. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Como cada persona trabaja con una tarea de su cargo, este es un ejemplo resuelto: el de Andrés, encargado de bodega, con el aviso de inventario que ya tenía en su biblioteca.

**Objetivo y tres preguntas.** Objetivo: avisar al equipo, por el grupo del celular, que el viernes hay inventario y la bodega cierra a las 15:00.

- ¿Hay una respuesta correcta? Sí: el día, la hora y el motivo tienen que ser exactos.
- ¿Cuánto espacio tengo? Poco: el equipo lo lee en el celular y tiene que verlo completo de una vez.
- ¿Me sirve elegir entre opciones? No: necesito una sola versión correcta.

**Configuración de partida.** «Instrucción de precisión ("usa solo estos datos"), máximo 60 palabras y una sola versión, porque los datos tienen que ser exactos y el aviso se lee en el celular.»

**Tabla de registro.** Misma consigna con datos de prueba, en conversaciones nuevas, cambiando solo el largo.

| N.º | Qué cambié | Salida (resumen) | Exactitud | Cumplimiento | Formato y largo | Tono | Utilidad |
|---|---|---|---|---|---|---|---|
| 1 | Máximo 40 palabras | Dice que el viernes hay inventario, pero no trae la hora de cierre | Regular | Mal | Bien | Bien | Mal |
| 2 | Máximo 60 palabras | Fecha, hora de cierre y motivo, en tres líneas | Bien | Bien | Bien | Bien | Bien |
| 3 | Máximo 120 palabras | Trae todo, más una explicación de por qué se hace inventario | Bien | Regular | Regular: muy largo para el grupo | Bien | Regular |

**Elección.** «Elijo la versión 2 porque tiene fecha, hora y motivo, y se lee en el celular sin bajar. La de 40 palabras perdió la hora de cierre, el dato más importante, y la de 120 es demasiado larga para el grupo. La mejor salida coincidió con mi configuración de partida, así que la mantengo.»

**Regla en la biblioteca.** Nota agregada a la plantilla «Aviso de cierre de bodega»: «Para avisos al equipo: instrucción de precisión, máximo 60 palabras, una sola versión y sin regenerar. Revisar siempre que estén el día y la hora».

**Qué debe tener la tuya.** El objetivo en una frase y las tres preguntas respondidas, con una configuración que salga de esas respuestas: precisión si hay datos, cifras o categorías; variedad si buscas ideas; un largo según dónde se va a leer. Al menos tres salidas de la misma consigna, en conversaciones nuevas y cambiando una sola cosa, todas evaluadas con los cinco criterios. Una elección que nombre el criterio que decidió; si ganó otra salida que la de partida, dilo y ajusta la regla. Y una regla concreta guardada en tu plantilla, probada con una copia sin datos sensibles.

**Errores frecuentes**

- Responder las tres preguntas y luego elegir una configuración que no se desprende de ellas.
- Cambiar el prompt completo entre una salida y otra.
- Una regla vaga, como «usar precisión», o una prueba con datos sensibles.

## Referencias bibliográficas

- Google. (2026, 13 de octubre). *Estrategias de diseño de instrucciones*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
