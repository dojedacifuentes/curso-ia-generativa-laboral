# Actividades de aplicación práctica · M1-AE2 · Prompts efectivos

## Autoevaluación 1 · Tres pedidos de la bandeja de Camila
cubre: H1, C1, C2
fuentes: F-M1-12, F-H-15
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a escribir un prompt para cada pendiente de Camila y a mejorarlo con al menos una iteración, para practicar la estructura de rol, contexto, tarea y formato. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Trabajas solo con datos de prueba.

### Situación

Camila abre el correo de la oficina y tiene tres pendientes, todos con datos de prueba. El primero es un párrafo del instructivo de
rendición de gastos que debe resumir para dos personas nuevas del equipo: «Las rendiciones se entregan a contabilidad dentro de los
cinco días hábiles siguientes al gasto, con la boleta o factura original y el formulario firmado por la jefatura directa. Los gastos
de movilización se rinden en el mismo formulario, indicando origen y destino». El segundo es un mensaje que escribió apurada y le
quedó informal: «Hola! Seguimos esperando la orden de compra 2045 firmada, ¿la mandan o no?». El tercero son cinco consultas que
llegaron al correo: una pregunta por el pago de una factura, otra pide una copia de un contrato, otra avisa un cambio de cuenta
bancaria, otra pide una reunión con la gerenta y otra pregunta por el estado de un pedido.

Quiere un prompt para cada pendiente y que la respuesta le sirva de verdad. La guía de Google para Gemini propone escribir con rol,
tarea, contexto y formato, y conversar con el asistente para ir afinando el resultado [@F-M1-12]. Vas a trabajar solo con estos datos
de prueba porque, con el ajuste de actividad encendido, revisores humanos pueden leer algunas conversaciones de Gemini [@F-H-15].

### Lo que vas a hacer

Vas a escribir un prompt para resumir, uno para reescribir y uno para clasificar, y a mejorarlos con al menos una iteración.

1. Escribe la versión 1 del prompt para resumir el instructivo, con rol, contexto, tarea y formato, y marca cada parte entre corchetes, así: [rol], [contexto], [tarea], [formato].
2. Haz lo mismo para reescribir el mensaje al proveedor en tono cordial y para clasificar las cinco consultas en categorías que tú defines antes, por ejemplo «Pagos y facturas», «Documentos», «Agenda» y «Otro».
3. Agrega una restricción a cada prompt cuando haya riesgo de que el asistente invente o se alargue, por ejemplo «usa solo el texto que te pego».
4. Envía cada prompt en Gemini o en el asistente que uses y revisa la respuesta: si es genérica, si el tono no corresponde, si es larga o si agrega datos.
5. Ajusta el componente que falló y vuelve a enviar. Itera al menos una vez en cada prompt, aunque la primera respuesta te parezca buena.

### Lo que preparas

Deja listas, para cada uno de los tres pendientes, la versión 1 y la versión 2 del prompt con sus partes marcadas, las dos respuestas y
dos o tres líneas que expliquen qué falló en la primera, qué cambiaste y por qué la segunda le sirve más a Camila.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Incluye rol, contexto, tarea y formato en el prompt | Tus tres prompts tienen las cuatro partes marcadas y cada una cumple su función: el contexto dice para quién es el texto y para qué se usará, y el formato fija la forma, el largo o el tono. | Marcaste las partes, pero en algún prompt una parte no cumple su función o falta. | Te faltan partes en dos o más prompts, o no las marcaste. |
| Obtiene una respuesta útil tras iterar al menos una vez | Cada pendiente tiene una versión 2 que cambia el componente que falló, y la respuesta final se podría usar con pocos cambios. | Tienes versión 2 en los tres pendientes, pero en alguno no cambiaste lo que falló o la respuesta final necesita muchos ajustes. | Te falta la iteración en uno o más pendientes. |
| Restricciones y fidelidad a los datos | Cada prompt trae una restricción pertinente y tus respuestas finales no agregan datos ni categorías que no entregaste. | Te falta la restricción en algún prompt o una respuesta final agrega algo que no estaba. | No pusiste restricciones y varias respuestas agregan datos. |
| Explicación de la mejora | Para cada pendiente explicas qué falló en la primera respuesta, qué cambiaste y por qué la segunda le sirve más a Camila. | Explicas la mejora solo en algunos pendientes o no dices qué falló. | No explicas la mejora. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Pendiente 1 · Resumir el instructivo**

- Versión 1: «[rol] Eres asistente administrativa de una constructora. [contexto] Este párrafo es del instructivo de rendición de gastos y lo van a leer dos personas nuevas del equipo que rinden gastos por primera vez. [tarea] Resúmelo. [formato] Que quede claro. [restricción] Usa solo el texto que te pego.» Respuesta: un párrafo de seis líneas que repite casi todo el instructivo con otras palabras.
- Versión 2: igual, pero con «[formato] Tres viñetas de una línea, en segunda persona». Respuesta:
  - Entrega tu rendición a contabilidad dentro de cinco días hábiles desde el gasto.
  - Adjunta la boleta o factura original y el formulario firmado por tu jefatura directa.
  - Rinde la movilización en el mismo formulario, con origen y destino.
- Mejora: el formato «claro» no le decía al asistente qué forma darle, y salió un párrafo tan largo como el original. Cambié solo el formato: ahora las personas nuevas leen tres pasos en segundos y no se perdió ningún requisito.

**Pendiente 2 · Reescribir el mensaje al proveedor**

- Versión 1: «[rol] Eres asistente administrativa de una constructora. [contexto] Le escribo a un proveedor que todavía no envía firmada la orden de compra 2045, y quiero mantener una buena relación. [tarea] Reescribe en tono cordial este mensaje: "Hola! Seguimos esperando la orden de compra 2045 firmada, ¿la mandan o no?". [formato] Correo breve. [restricción] Mantén el número de la orden y no agregues plazos ni fechas.» Respuesta: un correo de unas 120 palabras que empieza con «Junto con saludarle cordialmente y esperando que se encuentre muy bien…».
- Versión 2: igual, pero con «[formato] Máximo 60 palabras, con asunto, saludo con dos puntos y una sola petición». Respuesta: «Asunto: Orden de compra 2045 firmada. Estimados: ¿podrían enviarnos la orden de compra 2045 firmada? La necesitamos para continuar con el registro. Muchas gracias por su ayuda. Saludos cordiales, Camila Soto».
- Mejora: la primera sonaba cordial, pero era tan larga que el pedido se perdía. Ajusté solo el formato; la segunda conserva la orden 2045, no agrega plazos y se lee de una vez.

**Pendiente 3 · Clasificar las cinco consultas**

- Versión 1: «[rol] Eres asistente administrativa de una constructora. [contexto] Ordeno las consultas que llegan al correo de la oficina para responderlas por tema. [tarea] Clasifica estas cinco consultas en Pagos y facturas, Documentos, Agenda y Otro. [formato] Tabla de dos columnas: consulta y categoría. [restricción] Usa solo estas categorías.» Respuesta: puso la consulta por el estado del pedido en una categoría nueva, «Pedidos».
- Versión 2: igual, con la restricción ampliada: «Usa solo estas categorías. Si una consulta no calza en ninguna, va en Otro». Respuesta:

| Consulta | Categoría |
|---|---|
| Pregunta por el pago de una factura | Pagos y facturas |
| Pide una copia de un contrato | Documentos |
| Avisa un cambio de cuenta bancaria | Pagos y facturas |
| Pide una reunión con la gerenta | Agenda |
| Pregunta por el estado de un pedido | Otro |

- Mejora: la primera respuesta inventó una categoría que Camila no usa en su planilla. Ajusté solo la restricción, diciendo qué hacer con lo que no calza, y la tabla quedó con las cuatro categorías definidas.

**Errores frecuentes**

- Un contexto que repite la tarea, o un formato que solo dice «claro», sin forma ni largo.
- Una versión 2 que cambia todo el prompt, con lo que no se sabe qué ayudó, o no iterar porque «la primera ya estaba bien».
- Dejar pasar un resumen que agrega plazos o documentos que el instructivo no trae, o una clasificación con una categoría nueva.

## Autoevaluación 2 · Una plantilla para la tarea que más repites
cubre: H1, H2, C1, C2
fuentes: F-M1-12, F-M1-13
entrega: autoevaluacion

### Instrucción general

Esta actividad es el Hito 1 de tu proyecto del curso: la tarea de tu cargo que elijas aquí es la que vas a seguir mejorando con IA en los módulos siguientes, hasta medir sus resultados en el módulo 6. En ella vas a convertir un prompt que funciona en una plantilla que puedas reutilizar en una tarea que repites en tu cargo. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y datos de clientes por datos inventados.

### Situación

En tu cargo hay alguna tarea de resumir, reescribir o clasificar que se repite cada semana: responder un tipo de consulta, resumir
actas, ordenar solicitudes o pasar unas notas a un correo formal. Esa es la candidata para tu biblioteca personal de prompts y para tu proyecto del curso, así que elige una que de verdad quieras mejorar. La guía
de Google publica prompts de ejemplo por cargo, con las partes que cambian entre corchetes para personalizarlos [@F-M1-12]. La de
Microsoft advierte que llegar al resultado suele requerir un ida y vuelta, y que el mismo prompt puede dar resultados distintos
[@F-M1-13]. Por eso tu plantilla se prueba con dos casos antes de guardarla.

### Lo que vas a hacer

Vas a pasar de un prompt que funciona a una plantilla que puedas reutilizar.

1. Elige la tarea y reúne dos casos reales de ella, por ejemplo dos correos o dos actas. Haz una copia de cada uno sin nombres, RUT, teléfonos ni montos reales, y respeta lo que diga tu empresa sobre el uso de estos asistentes.
2. Escribe la versión 1 del prompt con rol, contexto, tarea y formato, más una restricción si hace falta, y pruébala con el primer caso en el asistente que uses.
3. Revisa la respuesta, identifica qué componente falló y ajústalo. Repite hasta que la respuesta te sirva, cambiando una cosa a la vez.
4. Convierte la mejor versión en plantilla: reemplaza por [corchetes] todo lo que cambia de una vez a otra.
5. Llena los corchetes con el segundo caso y pruébala en una conversación nueva, para comprobar que también funciona con él.
6. Guárdala en tu biblioteca con sus seis campos: nombre, tarea, plantilla, cuándo usarla, notas de iteración, y herramienta y fecha.

### Lo que preparas

Deja listas las versiones del prompt que probaste, con la respuesta de cada una; la plantilla final con sus corchetes; la respuesta que
obtuviste con el segundo caso, y la ficha de la plantilla en tu biblioteca. Ninguna de las copias debe tener datos personales ni
confidenciales.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Incluye rol, contexto, tarea y formato en el prompt | Tu plantilla final tiene las cuatro partes y el contexto describe una situación de tu cargo. | Tu plantilla tiene las cuatro partes, pero el contexto es genérico o una parte no cumple su función. | A tu plantilla final le falta una o más partes. |
| Obtiene una respuesta útil tras iterar al menos una vez | Tienes al menos dos versiones con su respuesta, tu nota de iteración explica qué ajuste hizo funcionar el prompt y la respuesta con el segundo caso se podría usar con pocos cambios. | Tienes dos versiones, pero tu nota no explica el ajuste o la respuesta con el segundo caso necesita muchos cambios. | Tienes una sola versión o no la probaste con el segundo caso. |
| Plantilla reutilizable y ficha | Tus corchetes cubren todo lo que cambia de una vez a otra y tu ficha tiene sus seis campos completos. | Te queda algún dato fijo que debería ir entre corchetes o faltan campos en tu ficha. | No tienes plantilla con corchetes ni ficha. |
| Cuidado de los datos | Ni tus copias ni tu plantilla tienen datos personales o confidenciales. | Cambiaste los datos personales, pero queda algún dato interno de la empresa que convenía quitar. | Tus copias o tu plantilla conservan nombres, RUT, teléfonos o montos reales. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Como cada persona elige una tarea de su cargo, este es un ejemplo resuelto: el de Camila, asistente administrativa en una constructora. Eligió registrar y clasificar en su planilla las facturas, órdenes de compra y contratos que llegan a la oficina, porque le toma tiempo todas las semanas. Probó con dos copias sin datos sensibles: una factura de «Proveedor A» y una orden de compra a «Proveedor B», con números y montos inventados.

**Versiones con el primer caso**

- Versión 1: «[rol] Eres asistente administrativa de una constructora. [contexto] Registro en una planilla los documentos que llegan a la oficina. [tarea] Con el texto de este documento, llena una fila para la planilla. [formato] Tabla con las columnas Fecha, Tipo, Proveedor, Número y Observaciones.» Respuesta: llenó la fila, pero en Observaciones escribió «pagar antes del 05-12», una fecha que la factura no traía.
- Versión 2: agregó solo una restricción: «Usa solo el texto del documento; si un dato no aparece, escribe "no indica"». Respuesta: dejó de inventar la fecha, pero en Tipo escribió «factura electrónica de compra».
- Versión 3: agregó solo los tipos permitidos: «En Tipo usa solo: factura, orden de compra o contrato». Respuesta: la fila quedó lista para pegar en la planilla.

**Plantilla final**

«[rol] Eres asistente administrativa de una constructora. [contexto] Registro en una planilla los documentos que llegan a la oficina: facturas, órdenes de compra y contratos. [tarea] Con el texto de este documento, llena una fila para la planilla: [texto del documento, copiado sin datos sensibles]. [formato] Tabla de una fila con las columnas Fecha, Tipo, Proveedor, Número y Observaciones; Observaciones en máximo 15 palabras. [restricciones] En Tipo usa solo: factura, orden de compra o contrato. Usa solo el texto del documento; si un dato no aparece, escribe "no indica".»

**Segundo caso, en una conversación nueva.** Con la copia de la orden de compra, la respuesta fue una fila con la fecha, «orden de compra», «Proveedor B», el número y «Arriendo de andamios por un mes». Se podía pegar sin cambios.

**Ficha en la biblioteca**

| Campo | Contenido |
|---|---|
| Nombre | Registrar documento |
| Tarea | Clasificar y pasar a tabla |
| Plantilla | La de arriba, con [texto del documento, copiado sin datos sensibles] |
| Cuándo usarla | Cuando llega una factura, una orden de compra o un contrato que hay que anotar en la planilla, siempre con una copia sin datos sensibles |
| Notas de iteración | «No indica» evitó que inventara fechas; la lista cerrada de tipos evitó nombres raros en la columna Tipo |
| Herramienta y fecha | Gemini en la app del celular, 30 de octubre |

**Qué debe tener la tuya.** Una tarea real que repites en tu cargo, porque es la que vas a seguir en el resto del curso. Al menos dos versiones con su respuesta, cambiando una cosa a la vez, y una nota que diga qué ajuste hizo funcionar el prompt. Un contexto que describa tu situación de trabajo, no uno genérico. Corchetes en todo lo que cambia de una vez a otra, sin ningún dato del primer caso fijo en la plantilla. La prueba con el segundo caso en una conversación nueva, la ficha con sus seis campos y copias sin nombres, RUT, teléfonos ni montos reales.

**Errores frecuentes**

- Un rol sin contexto, como «eres un asistente útil», que deja al asistente adivinando la audiencia.
- Una nota de iteración que dice «la mejoré» sin decir qué cambió, o probar el segundo caso en la misma conversación, con la memoria del primero.
- Dejar fijo en la plantilla un dato del primer caso, como el nombre del proveedor.

## Referencias bibliográficas

- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
