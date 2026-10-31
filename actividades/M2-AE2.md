# Actividades de aplicación práctica · M2-AE2 · Prompting avanzado para textos

## Autoevaluación 1 · La plantilla de respuestas de Rosa
cubre: H1, C1
fuentes: F-M2-11, F-M2-10
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a armar la plantilla de respuestas de Rosa con al menos dos técnicas de prompting y a probarla con tres consultas, para obtener respuestas parecidas cada vez. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. La información del centro y las consultas son ficticias.

### Situación

Rosa es recepcionista de un centro médico. Todos los días responde por correo las mismas consultas de pacientes: a qué hora atienden, qué documentos tienen que traer y cómo cambiar una hora. Cuando le pide ayuda a Gemini, cada respuesta sale distinta: a veces con saludo y a veces sin él, a veces larga y otras cortante, y una vez el asistente prometió una hora disponible que nadie había confirmado. Quiere una plantilla que le dé respuestas parecidas cada vez.

La información del centro es ficticia y es la única que la plantilla puede usar: atención de lunes a viernes de 8:00 a 19:00 y sábado de 9:00 a 13:00; para cualquier atención se trae la cédula de identidad y, para exámenes, la orden médica; las horas se cambian llamando a la recepción o respondiendo el correo de confirmación. Las consultas de prueba tampoco son de pacientes reales.

### Lo que vas a hacer

Vas a armar la plantilla de Rosa con al menos dos de estas técnicas, ejemplos, restricciones o encadenamiento de pasos, y a probarla. Los ejemplos ayudan a fijar el formato y el tono si son variados y quedan separados de las instrucciones [@F-M2-11], y las restricciones dicen qué hacer, qué no hacer y cuál es el largo máximo [@F-M2-10].

1. Escribe la plantilla con las secciones ROL, TAREA, RESTRICCIONES, EJEMPLOS, INFORMACIÓN DISPONIBLE y CONSULTA, y marca con corchetes lo que cambia cada vez.
2. Pon al menos tres restricciones que se puedan comprobar, como un máximo de 70 palabras, el registro formal de usted y la regla «si la respuesta no está en la información disponible, di que lo consultarás y responderás pronto».
3. Agrega dos ejemplos de consulta y respuesta con el mismo formato, distintos entre sí: uno sobre el horario y otro sobre los documentos para un examen.
4. Prueba la plantilla con tres consultas inventadas: «¿Atienden el sábado en la tarde?», «¿Qué tengo que llevar para un examen de sangre?» y «Necesito cambiar mi hora del jueves, ¿pueden llamarme?».
5. Revisa si cada respuesta cumple las restricciones y si alguna agregó algo que no estaba en la información disponible.

### Lo que preparas

Deja listas la plantilla final, las tres respuestas que obtuviste y un párrafo breve que nombre las técnicas que usaste y diga qué problema resolvió cada una en las respuestas de Rosa.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Aplica al menos dos técnicas (ejemplos, restricciones, encadenamiento) | Tu plantilla trae al menos dos técnicas reconocibles y bien aplicadas: los ejemplos son variados, tienen el mismo formato y están separados de las instrucciones, y las restricciones se pueden comprobar. | Trae dos técnicas, pero una está mal aplicada: ejemplos casi iguales o con formatos distintos, o restricciones que no se pueden comprobar. | Tu plantilla trae una sola técnica o ninguna. |
| Estructura de la plantilla | Tiene las secciones pedidas y separa las partes fijas de los campos variables, marcados con corchetes. | Te falta una sección o dejaste campos variables sin marcar. | Tu plantilla no tiene una estructura reconocible. |
| Prueba con las tres consultas | Presentas las tres respuestas, revisas cada una contra las restricciones y ninguna agrega información que no estaba disponible. | Presentas las tres respuestas, pero no las revisas o alguna agrega información sin que lo detectes. | Te faltan respuestas o no probaste la plantilla. |
| Explicación de las técnicas | Tu párrafo nombra las técnicas usadas y dice qué problema de las respuestas de Rosa resolvió cada una. | Nombras las técnicas, pero no dices qué problema resolvió cada una. | No escribiste el párrafo. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Plantilla final**

```
ROL: Eres recepcionista de un centro médico y respondes por correo las consultas de pacientes.
TAREA: Responde la CONSULTA usando solo la INFORMACIÓN DISPONIBLE.
RESTRICCIONES:
- Máximo 70 palabras.
- Registro formal, de usted; tono cordial.
- Empieza con "Estimado(a) paciente:" y cierra con "Saludos cordiales, [nombre de quien responde], Recepción".
- Si la respuesta no está en la INFORMACIÓN DISPONIBLE, di que lo consultarás y responderás pronto.
- No prometas horas, llamadas ni plazos que no estén en la información.
EJEMPLOS:
<ejemplo>
Consulta: ¿Hasta qué hora atienden los viernes?
Respuesta: Estimado(a) paciente: los viernes atendemos de 8:00 a 19:00. Saludos cordiales, [nombre de quien responde], Recepción.
</ejemplo>
<ejemplo>
Consulta: ¿Qué llevo para un examen de orina?
Respuesta: Estimado(a) paciente: para su examen debe traer su cédula de identidad y la orden médica. Saludos cordiales, [nombre de quien responde], Recepción.
</ejemplo>
INFORMACIÓN DISPONIBLE: Atención de lunes a viernes de 8:00 a 19:00 y sábado de 9:00 a 13:00. Para cualquier atención se trae la cédula de identidad y, para exámenes, la orden médica. Las horas se cambian llamando a la recepción o respondiendo el correo de confirmación.
CONSULTA: [texto de la consulta]
```

**Las tres respuestas**

1. «¿Atienden el sábado en la tarde?»: «Estimado(a) paciente: el sábado atendemos de 9:00 a 13:00, por lo que en la tarde no hay atención. De lunes a viernes atendemos de 8:00 a 19:00. Saludos cordiales, Rosa, Recepción.»
2. «¿Qué tengo que llevar para un examen de sangre?»: «Estimado(a) paciente: para su examen debe traer su cédula de identidad y la orden médica. Saludos cordiales, Rosa, Recepción.»
3. «Necesito cambiar mi hora del jueves, ¿pueden llamarme?»: «Estimado(a) paciente: puede cambiar su hora llamando a la recepción o respondiendo el correo de confirmación. Sobre su solicitud de llamada, lo consultaré y le responderé pronto. Saludos cordiales, Rosa, Recepción.»

Revisión: las tres tienen menos de 70 palabras, están de usted y traen el saludo y el cierre fijos. Ninguna inventa un horario de sábado en la tarde, ninguna agrega indicaciones como el ayuno, que no están en la información, y la tercera no promete una llamada ni una hora nueva.

**Técnicas usadas.** «Usé ejemplos y restricciones. Los dos ejemplos, uno de horario y otro de documentos, tienen el mismo formato y van separados con etiquetas: fijaron el saludo, el cierre y el largo, que antes cambiaban en cada respuesta. Las restricciones fijaron el máximo de 70 palabras y el registro de usted, y la regla de "lo consultaré" evitó que el asistente prometiera una hora o una llamada que nadie había confirmado.»

**Errores frecuentes**

- Dos ejemplos casi iguales, como dos consultas de horario, o ejemplos con formatos distintos entre sí.
- Restricciones vagas, como «sé amable», o la consulta de prueba escrita dentro de la plantilla en vez de un campo [texto de la consulta].
- No detectar que una respuesta promete «la llamaremos hoy» o un horario que no existe.

## Autoevaluación 2 · Tu plantilla, versión 1 y versión 2
cubre: H1, C2
fuentes: F-M2-09, F-M2-08
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a convertir un texto que escribes seguido en tu cargo en una plantilla y a medir si da textos consistentes entre una versión y otra. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y datos de clientes por datos inventados.

### Situación

En tu cargo hay textos que se repiten: la respuesta a una consulta frecuente, el aviso semanal, la confirmación de un pedido, el seguimiento de un pago. Elige uno que escribas seguido y conviértelo en una plantilla probada. Para los ejemplos y los casos de prueba usa datos inventados o una copia de textos anteriores en la que hayas cambiado nombres, montos y cualquier dato sensible.

### Lo que vas a hacer

Vas a diseñar tu plantilla y a medir si da textos consistentes. Como la misma indicación puede dar respuestas distintas [@F-M2-08], la consistencia no se comprueba con una sola prueba: se comprueba probando la plantilla varias veces con los mismos casos y comparando las versiones [@F-M2-09].

1. Escribe la versión 1 de tu plantilla con secciones separadas (ROL, TAREA, RESTRICCIONES, EJEMPLOS y DATOS) y corchetes en lo que cambia cada vez, y guárdala en tu bitácora con un nombre y su número de versión.
2. Prepara tres casos de prueba: uno simple, uno en que falte un dato y uno difícil, como un cliente molesto o un pedido con un faltante.
3. Usa la plantilla con cada caso dos veces, siempre en un chat nuevo, y revisa los seis resultados con los mismos criterios de formato, largo, tono y registro, exactitud y vacíos.
4. Identifica el criterio que más falla y cambia solo eso para hacer la versión 2.
5. Prueba la versión 2 con los mismos tres casos, dos veces cada uno, y compara las dos tablas.

### Lo que preparas

Deja listas las dos versiones de la plantilla, tus tres casos de prueba y la tabla de criterios con los resultados de cada versión. Cierra con una línea que diga qué cambiaste en la versión 2, qué mejoró y con cuál versión te quedas.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Obtiene textos consistentes entre versiones | Los seis resultados de la versión que elegiste tienen el mismo formato, respetan el largo y el tono pedidos y no traen datos inventados. | La mayoría de tus resultados es consistente, pero alguno se sale del formato, del largo o del tono. | Tus resultados varían mucho entre sí o traen datos inventados. |
| Diseño de la prueba | Tienes tres casos de prueba (uno simple, uno con un dato faltante y uno difícil), cada uno usado dos veces en un chat nuevo y con los mismos casos en las dos versiones. | Te faltan pruebas, repetiste en el mismo chat o cambiaste los casos entre versiones. | No tienes casos de prueba o probaste una sola vez. |
| Cambio controlado entre versiones | Tu versión 2 cambia una sola cosa, ligada al criterio que más falló, y la línea de cierre dice qué mejoró y con cuál versión te quedas. | Tu versión 2 cambia varias cosas a la vez o la línea de cierre no dice qué mejoró. | No tienes versión 2. |
| Dato faltante y cuidado de los datos | El caso con un dato faltante sale marcado o consultado en vez de completado, y tus ejemplos y casos usan datos inventados o cambiados. | El caso con un dato faltante sale completado en alguna de las pruebas. | El dato faltante se inventa en las pruebas o tus casos conservan datos sensibles. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Como cada persona trabaja con un texto de su cargo, este es un ejemplo resuelto: el de Andrés, encargado de bodega, con los avisos de despacho que envía cada semana a los clientes. Los clientes y los pedidos son inventados.

**Versión 1 · «Aviso de despacho v1»**

```
ROL: Eres encargado de bodega de una distribuidora y escribes avisos de despacho a clientes.
TAREA: Escribe el aviso de despacho con los DATOS, siguiendo el formato de los EJEMPLOS.
RESTRICCIONES:
- Máximo 60 palabras.
- Registro formal, de usted; tono cordial.
- Usa solo los DATOS.
- Cierra con "Saludos cordiales, Bodega Central".
EJEMPLOS:
<ejemplo>
Entrada: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
Salida: Asunto: Despacho pedido 312. Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
</ejemplo>
<ejemplo>
Entrada: pedido 320, llega el viernes 22, cliente Minimarket Doña Rosa, faltan 2 cajas que llegan el lunes 25.
Salida: Asunto: Despacho pedido 320. Estimados Minimarket Doña Rosa: su pedido 320 llegará el viernes 22. Dos cajas llegarán el lunes 25. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
</ejemplo>
DATOS: pedido [número], llega el [día y fecha], cliente [nombre del cliente], [faltantes, si hay].
```

**Versión 2 · «Aviso de despacho v2»:** igual a la versión 1, con una sola restricción nueva: «Si falta un dato, escribe [FALTA] en su lugar; no lo inventes».

**Casos de prueba**

1. Simple: pedido 455, llega el miércoles 20, cliente Distribuidora Sur.
2. Con un dato faltante: pedido 461, cliente Comercial Andes, sin fecha de llegada confirmada.
3. Difícil: pedido 470, cliente molesto porque su pedido anterior llegó tarde; llega el jueves 21 y faltan 3 cajas que llegan el martes 26.

**Tabla de criterios** (cada caso, dos veces, en un chat nuevo)

| Criterio | Versión 1 | Versión 2 |
|---|---|---|
| Formato correcto | 6 de 6 | 6 de 6 |
| Largo respetado | 5 de 6 | 6 de 6 |
| Tono y registro | 6 de 6 | 6 de 6 |
| Datos exactos | 5 de 6 | 6 de 6 |
| Marcó lo que faltaba | 1 de 2 | 2 de 2 |

En la versión 1, una de las pruebas del caso 2 inventó «llegará el viernes». El criterio que más falló fue el del dato faltante, y por eso la versión 2 cambia solo eso.

**Línea de cierre.** «En la versión 2 agregué solo la regla de [FALTA]; el caso sin fecha dejó de salir con una fecha inventada y todos los resultados quedaron dentro del largo. Me quedo con la versión 2.»

**Qué debe tener la tuya.** Una plantilla con secciones separadas y corchetes en lo que cambia, guardada con nombre y número de versión. Tres casos de prueba: uno simple, uno con un dato faltante y uno difícil, cada uno probado dos veces en un chat nuevo, y los mismos casos en las dos versiones. Una tabla con los mismos criterios para las dos versiones y una versión 2 que cambie una sola cosa, la que ataca el criterio que más falló. Y casos con datos inventados o cambiados, en los que el dato faltante sale marcado o consultado, no completado.

**Errores frecuentes**

- Declarar que la plantilla es consistente sin mostrar los seis resultados en la tabla.
- Repetir las pruebas en el mismo chat, o cambiar los casos al probar la versión 2.
- Reescribir media plantilla en la versión 2, con lo que no se sabe qué produjo la mejora.

## Referencias bibliográficas

- Anthropic. (s. f.). *Prompting best practices*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
