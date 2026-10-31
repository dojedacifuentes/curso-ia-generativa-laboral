# Actividades de aplicación práctica · M1-AE2 · Prompts efectivos

## Actividad 1 · Tres pedidos de la bandeja de Camila
cubre: H1, C1, C2
fuentes: F-M1-12, F-H-15
entrega: tarea

### Instrucción general

En esta actividad vas a escribir un prompt para cada pendiente de Camila y a mejorarlo con al menos una iteración, para practicar la estructura de rol, contexto, tarea y formato. Es una actividad formativa: no lleva nota. La subes como tarea en el aula, en el texto de la entrega o en un documento adjunto, y, antes de enviarla, revisas tu trabajo con la rúbrica de autoevaluación del final. Trabajas solo con datos de prueba.

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

### Lo que entregas

Subes en la tarea, para cada uno de los tres pendientes, la versión 1 y la versión 2 del prompt con sus partes marcadas, las dos respuestas y
dos o tres líneas que expliquen qué falló en la primera, qué cambiaste y por qué la segunda le sirve más a Camila. Suma tu autoevaluación: el nivel que marcaste en cada criterio de la rúbrica, con una línea que lo justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Incluye rol, contexto, tarea y formato en el prompt | Tus tres prompts tienen las cuatro partes marcadas y cada una cumple su función: el contexto dice para quién es el texto y para qué se usará, y el formato fija la forma, el largo o el tono. | Marcaste las partes, pero en algún prompt una parte no cumple su función o falta. | Te faltan partes en dos o más prompts, o no las marcaste. |
| Obtiene una respuesta útil tras iterar al menos una vez | Cada pendiente tiene una versión 2 que cambia el componente que falló, y la respuesta final se podría usar con pocos cambios. | Tienes versión 2 en los tres pendientes, pero en alguno no cambiaste lo que falló o la respuesta final necesita muchos ajustes. | Te falta la iteración en uno o más pendientes. |
| Restricciones y fidelidad a los datos | Cada prompt trae una restricción pertinente y tus respuestas finales no agregan datos ni categorías que no entregaste. | Te falta la restricción en algún prompt o una respuesta final agrega algo que no estaba. | No pusiste restricciones y varias respuestas agregan datos. |
| Explicación de la mejora | Para cada pendiente explicas qué falló en la primera respuesta, qué cambiaste y por qué la segunda le sirve más a Camila. | Explicas la mejora solo en algunos pendientes o no dices qué falló. | No explicas la mejora. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Actividad 2 · Una plantilla para la tarea que más repites
cubre: H1, H2, C1, C2
fuentes: F-M1-12, F-M1-13
entrega: tarea

### Instrucción general

Esta actividad es el Hito 1 de tu proyecto del curso: la tarea de tu cargo que elijas aquí es la que vas a seguir mejorando con IA en los módulos siguientes, hasta medir sus resultados en el módulo 6. En ella vas a convertir un prompt que funciona en una plantilla que puedas reutilizar en una tarea que repites en tu cargo. Es una actividad formativa: no lleva nota. La subes como tarea en el aula, en un documento de texto o en PDF con las versiones, las respuestas y la ficha de tu biblioteca, y, antes de enviarla, revisas tu trabajo con la rúbrica de autoevaluación del final. Solo lo ven tú y el facilitador, porque trabajas con casos reales de tu trabajo.

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

### Lo que entregas

Subes en la tarea las versiones del prompt que probaste, con la respuesta de cada una; la plantilla final con sus corchetes; la respuesta que
obtuviste con el segundo caso, y la ficha de la plantilla en tu biblioteca. Ninguna de las copias debe tener datos personales ni
confidenciales. Suma tu autoevaluación: el nivel que marcaste en cada criterio de la rúbrica, con una línea que lo justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Incluye rol, contexto, tarea y formato en el prompt | Tu plantilla final tiene las cuatro partes y el contexto describe una situación de tu cargo. | Tu plantilla tiene las cuatro partes, pero el contexto es genérico o una parte no cumple su función. | A tu plantilla final le falta una o más partes. |
| Obtiene una respuesta útil tras iterar al menos una vez | Tienes al menos dos versiones con su respuesta, tu nota de iteración explica qué ajuste hizo funcionar el prompt y la respuesta con el segundo caso se podría usar con pocos cambios. | Tienes dos versiones, pero tu nota no explica el ajuste o la respuesta con el segundo caso necesita muchos cambios. | Tienes una sola versión o no la probaste con el segundo caso. |
| Plantilla reutilizable y ficha | Tus corchetes cubren todo lo que cambia de una vez a otra y tu ficha tiene sus seis campos completos. | Te queda algún dato fijo que debería ir entre corchetes o faltan campos en tu ficha. | No tienes plantilla con corchetes ni ficha. |
| Cuidado de los datos | Ni tus copias ni tu plantilla tienen datos personales o confidenciales. | Cambiaste los datos personales, pero queda algún dato interno de la empresa que convenía quitar. | Tus copias o tu plantilla conservan nombres, RUT, teléfonos o montos reales. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Referencias bibliográficas

- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
