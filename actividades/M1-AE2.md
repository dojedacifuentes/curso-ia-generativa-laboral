# Actividades de aplicación práctica · M1-AE2 · Prompts efectivos

## Actividad 1 · Tres pedidos de la bandeja de Camila
cubre: H1, C1, C2
fuentes: F-M1-12, F-H-15

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

1. Escribe la versión 1 del prompt para resumir el instructivo, con rol, contexto, tarea y formato, y marca cada parte entre corchetes, como en los ejemplos del tema: [rol], [contexto], [tarea], [formato].
2. Haz lo mismo para reescribir el mensaje al proveedor en tono cordial y para clasificar las cinco consultas en categorías que tú defines antes, por ejemplo «Pagos y facturas», «Documentos», «Agenda» y «Otro».
3. Agrega una restricción a cada prompt cuando haya riesgo de que el asistente invente o se alargue, por ejemplo «usa solo el texto que te pego».
4. Envía cada prompt en Gemini o en el asistente que uses y revisa la respuesta con la tabla de diagnóstico del tema: si es genérica, si el tono no corresponde, si es larga o si agrega datos.
5. Ajusta el componente que falló y vuelve a enviar. Itera al menos una vez en cada prompt, aunque la primera respuesta te parezca buena.

### Lo que entregas

Entregas, para cada uno de los tres pendientes, la versión 1 y la versión 2 del prompt con sus partes marcadas, las dos respuestas y
dos o tres líneas que expliquen qué falló en la primera, qué cambiaste y por qué la segunda le sirve más a Camila.

### Cómo se revisa

Esta actividad se revisa con dos criterios. El primero es «Incluye rol, contexto, tarea y formato en el prompt.»: se da por logrado si
los tres prompts tienen las cuatro partes marcadas y cada una cumple su función. El contexto dice para quién es el texto y para qué se
usará, y el formato fija la forma, el largo o el tono. El segundo es «Obtiene una respuesta útil tras iterar al menos una vez.»: se da
por logrado si cada pendiente tiene una segunda versión que cambia el componente que falló y si la respuesta final se podría usar con
pocos cambios. El resumen no agrega requisitos que el instructivo no trae, el correo conserva la orden de compra 2045 y suena cordial,
y la clasificación usa solo tus categorías.

## Actividad 2 · Una plantilla para la tarea que más repites
cubre: H1, H2, C1, C2
fuentes: F-M1-12, F-M1-13

### Situación

En tu cargo hay alguna tarea de resumir, reescribir o clasificar que se repite cada semana: responder un tipo de consulta, resumir
actas, ordenar solicitudes o pasar unas notas a un correo formal. Esa es la candidata para tu biblioteca personal de prompts. La guía
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

Entregas las versiones del prompt que probaste, con la respuesta de cada una; la plantilla final con sus corchetes; la respuesta que
obtuviste con el segundo caso, y la ficha de la plantilla en tu biblioteca. Ninguna de las copias debe tener datos personales ni
confidenciales.

### Cómo se revisa

Se usan los mismos dos criterios de la actividad anterior. «Incluye rol, contexto, tarea y formato en el prompt.» se da por logrado si
la plantilla final tiene las cuatro partes y el contexto describe una situación de tu cargo, no una genérica. «Obtiene una respuesta
útil tras iterar al menos una vez.» se da por logrado si hay al menos dos versiones del prompt, si la nota de iteración explica qué
ajuste lo hizo funcionar y si la respuesta con el segundo caso se podría usar con pocos cambios. También se mira que los corchetes
cubran todo lo que varía y que la plantilla no conserve datos reales.

## Referencias bibliográficas

- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
