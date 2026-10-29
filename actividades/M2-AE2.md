# Actividades de aplicación práctica · M2-AE2 · Prompting avanzado para textos

## Actividad 1 · La plantilla de respuestas de Rosa
cubre: H1, C1
fuentes: F-M2-11, F-M2-10

### Situación

Rosa es recepcionista de un centro médico. Todos los días responde por correo las mismas consultas de pacientes: a qué hora atienden, qué documentos tienen que traer y cómo cambiar una hora. Cuando le pide ayuda a Gemini, cada respuesta sale distinta: a veces con saludo y a veces sin él, a veces larga y otras cortante, y una vez el asistente prometió una hora disponible que nadie había confirmado. Quiere una plantilla que le dé respuestas parecidas cada vez.

La información del centro es ficticia y es la única que la plantilla puede usar: atención de lunes a viernes de 8:00 a 19:00 y sábado de 9:00 a 13:00; para cualquier atención se trae la cédula de identidad y, para exámenes, la orden médica; las horas se cambian llamando a la recepción o respondiendo el correo de confirmación. Las consultas de prueba tampoco son de pacientes reales.

### Lo que vas a hacer

Vas a armar la plantilla de Rosa con al menos dos técnicas del tema y a probarla. Los ejemplos ayudan a fijar el formato y el tono si son variados y quedan separados de las instrucciones [@F-M2-11], y las restricciones dicen qué hacer, qué no hacer y cuál es el largo máximo [@F-M2-10].

1. Escribe la plantilla con las secciones ROL, TAREA, RESTRICCIONES, EJEMPLOS, INFORMACIÓN DISPONIBLE y CONSULTA, y marca con corchetes lo que cambia cada vez.
2. Pon al menos tres restricciones que se puedan comprobar, como un máximo de 70 palabras, el registro formal de usted y la regla «si la respuesta no está en la información disponible, di que lo consultarás y responderás pronto».
3. Agrega dos ejemplos de consulta y respuesta con el mismo formato, distintos entre sí: uno sobre el horario y otro sobre los documentos para un examen.
4. Prueba la plantilla con tres consultas inventadas: «¿Atienden el sábado en la tarde?», «¿Qué tengo que llevar para un examen de sangre?» y «Necesito cambiar mi hora del jueves, ¿pueden llamarme?».
5. Revisa si cada respuesta cumple las restricciones y si alguna agregó algo que no estaba en la información disponible.

### Lo que entregas

Entregas la plantilla final, las tres respuestas que obtuviste y un párrafo breve que nombre las técnicas que usaste y diga qué problema resolvió cada una en las respuestas de Rosa.

### Cómo se revisa

Esta actividad se revisa con el criterio «Aplica al menos dos técnicas (ejemplos, restricciones, encadenamiento)». Se da por logrado cuando la plantilla trae al menos dos técnicas reconocibles y bien aplicadas: por ejemplo, dos ejemplos variados, con formato idéntico y separados con etiquetas, junto con restricciones que se pueden comprobar. También se mira que la plantilla separe las partes fijas de los campos variables y que las respuestas a la consulta de los sábados en la tarde no inventen un horario.

## Actividad 2 · Tu plantilla, versión 1 y versión 2
cubre: H1, C2
fuentes: F-M2-09, F-M2-08

### Situación

En tu cargo hay textos que se repiten: la respuesta a una consulta frecuente, el aviso semanal, la confirmación de un pedido, el seguimiento de un pago. Elige uno que escribas seguido y conviértelo en una plantilla probada. Para los ejemplos y los casos de prueba usa datos inventados o una copia de textos anteriores en la que hayas cambiado nombres, montos y cualquier dato sensible.

### Lo que vas a hacer

Vas a diseñar tu plantilla y a medir si da textos consistentes. Como la misma indicación puede dar respuestas distintas [@F-M2-08], la consistencia no se comprueba con una sola prueba: se comprueba probando la plantilla varias veces con los mismos casos y comparando las versiones [@F-M2-09].

1. Escribe la versión 1 de tu plantilla con las secciones del tema y guárdala en tu bitácora con un nombre y su número de versión.
2. Prepara tres casos de prueba: uno simple, uno en que falte un dato y uno difícil, como un cliente molesto o un pedido con un faltante.
3. Usa la plantilla con cada caso dos veces, siempre en un chat nuevo, y revisa los seis resultados con los mismos criterios de formato, largo, tono y registro, exactitud y vacíos.
4. Identifica el criterio que más falla y cambia solo eso para hacer la versión 2.
5. Prueba la versión 2 con los mismos tres casos, dos veces cada uno, y compara las dos tablas.

### Lo que entregas

Entregas las dos versiones de la plantilla, tus tres casos de prueba y la tabla de criterios con los resultados de cada versión. Cierra con una línea que diga qué cambiaste en la versión 2, qué mejoró y con cuál versión te quedas.

### Cómo se revisa

Esta actividad se revisa con el criterio «Obtiene textos consistentes entre versiones». Se da por logrado cuando los seis resultados de la versión elegida tienen el mismo formato, respetan el largo y el tono pedidos y no traen datos inventados, y cuando la tabla muestra que esa consistencia se comprobó con los mismos casos en las dos versiones. Se mira también que entre la versión 1 y la 2 haya cambiado una sola cosa, para que se pueda saber qué produjo la mejora, y que el caso con un dato faltante salga marcado o consultado en vez de completado al azar.

## Referencias bibliográficas

- Anthropic. (s. f.). *Prompting best practices*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
