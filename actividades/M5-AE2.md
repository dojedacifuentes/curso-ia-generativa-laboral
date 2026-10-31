# Actividades de aplicación práctica · M5-AE2 · Flujos simples con IA

## Actividad 1 · Los pedidos de ventas a la bodega
cubre: H1, C1, C2
fuentes: F-H-94, F-M5-10
entrega: tarea

### Instrucción general

Vas a construir con datos de prueba un flujo que lee correos de pedidos, saca con IA el producto y la cantidad y deja una fila en una
planilla, y lo vas a someter a un plan de pruebas. Así aprendes a armar un flujo y a encontrar sus fallas antes de usarlo en serio.
Es una actividad formativa: no lleva nota. La subes como tarea en el aula, con tus capturas, tu plan de pruebas y tus correcciones, y,
antes de enviarla, revisas tu trabajo con la rúbrica de autoevaluación del final.

### Situación

Marta, de ventas, le escribe a Andrés varias veces por semana para pedirle que separe productos para los despachos de sus clientes. Andrés copia
cada pedido a mano en su planilla y a veces se le pasa uno. Quiere un flujo que lea esos correos, saque con IA el producto y la
cantidad, y deje una fila nueva en la planilla. Tú vas a armarlo con datos de prueba, en una cuenta de práctica y no en un correo del
trabajo.

Hay dos caminos. Con un computador, usa Make: su plan gratuito da 1.000 créditos al mes y, si se acaban, los escenarios se detienen
[@F-H-94]. Con solo el celular, usa una acción programada de Gemini que cada mañana te liste los correos de prueba con su producto y su
cantidad, y anota tú las filas después de revisarlas.

### Lo que vas a hacer

1. En tu cuenta de práctica, crea la planilla «Pedidos de ventas (prueba)» con las columnas Fecha, Remitente, Asunto y Análisis de la IA, y envíate cuatro correos inventados con asunto «[PRUEBA] Pedido»: uno con un producto y una cantidad claros, uno con dos productos, uno sin cantidad y uno sin «[PRUEBA]» en el asunto.
2. Dibuja el flujo en una tabla de cuatro pasos, con lo que recibe y entrega cada uno: disparador de Gmail, condición «el asunto contiene [PRUEBA]», acción con IA y fila nueva en la planilla.
3. Constrúyelo con un nombre claro, como «Pedidos de ventas · v1». En la instrucción para la IA pide «Producto: … · Cantidad: …» y que escriba «sin dato» si el correo no lo trae.
4. Antes de mapear, escribe a mano tu propio correo de práctica en el campo Remitente y corre el flujo con dos correos de prueba. Mira qué pasa en la planilla.
5. Corrige ese campo mapeándolo desde el paso de Gmail y vuelve a correr la prueba.
6. Arma un plan de pruebas con los cuatro correos, con el resultado esperado de cada uno, córrelo y marca con una X lo que no coincida.
7. Corrige cada falla, vuelve a correr solo la prueba que falló y anota qué cambiaste y en qué versión del flujo.

El paso 4 es un error a propósito. Un texto escrito a mano se repite igual en cada ejecución, mientras que un campo mapeado trae el
dato real de cada evento [@F-M5-10]. Verlo una vez en tu propia planilla te ayuda a reconocerlo después. Si usas el camino del
celular, el error equivalente es pedirle a Gemini un remitente fijo en el texto de la acción: haz la misma prueba y corrígela.

### Lo que entregas

Subes en la tarea una captura de la tabla del flujo, una captura del flujo armado y una de la planilla antes y después de
corregir el remitente, todas con datos de prueba. Suma tu plan de pruebas completo, con la columna de lo obtenido y las X, y dos o
tres líneas por cada falla con lo que cambiaste. Suma tu autoevaluación: el nivel que marcaste en cada criterio de la rúbrica, con una
línea que lo justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Diseña el flujo | Tu tabla tiene los cuatro pasos, con lo que recibe y lo que entrega cada uno. | Están los cuatro pasos, pero a alguno le falta lo que recibe o lo que entrega. | No hay tabla del flujo, o no se distinguen sus pasos. |
| Construye un flujo funcional | Tus capturas muestran un flujo de tres a cinco pasos que se activa con los correos de prueba, y cada fila trae el remitente, el asunto y el análisis de su propio correo, con el antes y el después del remitente. | Tu flujo se activa, pero alguna fila trae datos que no son de su correo o te falta la captura del antes o del después. | Tus capturas no muestran que el flujo se active, o el flujo no tiene entre tres y cinco pasos. |
| Prueba el flujo | Tu plan incluye los cuatro correos, con el resultado esperado y el obtenido de cada uno, y marca con X lo que no coincide. | El plan está, pero te falta un correo, lo esperado o lo obtenido, o alguna diferencia no está marcada. | No hay plan de pruebas, o solo probaste los correos que salen bien. |
| Corrige las fallas | Cada falla marcada tiene lo que cambiaste, en qué versión y una nueva prueba que muestra que se resolvió. | Las fallas tienen su corrección, pero alguna no tiene versión o no la volviste a probar. | Las fallas quedan sin corrección. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Actividad 2 · Un flujo para una tarea de tu cargo
cubre: H1, C1, C2
fuentes: F-M5-06, F-M5-11
entrega: tarea

### Instrucción general

Vas a convertir en un flujo de prueba la tarea que elegiste en tu matriz del tema anterior, y a buscar a propósito los casos en que
falla. Es el prototipo que después vas a supervisar y llevar a tu proyecto final. Es una actividad formativa: no lleva nota. La subes
como tarea en el aula, en un documento con la tabla, las capturas, el plan de pruebas y la ficha, y, antes de enviarla, revisas tu
trabajo con la rúbrica de autoevaluación del final. Solo lo ven tú y el facilitador, porque trabajas con una tarea real de tu cargo.

### Situación

En el tema anterior marcaste en tu matriz la tarea que automatizarías primero. Ahora la vas a convertir en un flujo de prueba. Tu
flujo todavía no tiene controles humanos, así que trabajas en una cuenta de práctica, con datos inventados o con copias de documentos
de tu trabajo a las que les quitaste nombres, RUT, teléfonos, montos reales y cualquier otro dato sensible. Si en tu empresa ya hay
una herramienta de automatización, pregunta antes si puedes usarla para esto.

La guía de automatización de la Universidad de Bath pide probar la mayor cantidad posible de escenarios antes de poner un flujo en
marcha [@F-M5-06]. Por eso la mitad de esta actividad es buscar a propósito los casos en que tu flujo podría fallar.

### Lo que vas a hacer

1. Describe tu tarea en una línea: qué la inicia, con qué datos trabaja y qué entrega.
2. Diseña el flujo en una tabla de tres a cinco pasos, con lo que recibe y entrega cada uno. Al menos un paso usa IA y otro usa correo, planilla o calendario, y cada paso usa solo datos de los anteriores.
3. Revisa el límite del plan gratuito de la herramienta que elijas, Make, las acciones programadas de Gemini o, si no las tienes, las tareas programadas de ChatGPT, y ajusta el diseño si hace falta.
4. Construye el flujo con un nombre que diga su propósito y su versión, y conecta solo tu cuenta de práctica después de leer qué permisos pide.
5. Prepara al menos cinco casos de prueba con tus datos de práctica: los casos normales, uno que la condición debe detener y uno casi vacío para ver si la IA inventa.
6. Corre las pruebas, abre el historial de ejecuciones en cada falla, ubica el paso que falló, corrige la causa y vuelve a probar.
7. Completa la ficha del flujo con nombre, propósito, disparador, pasos, datos, dependencias y pruebas.

En Zapier, por ejemplo, el historial muestra el paso que falló con su mensaje de error y, una vez corregida la causa, permite volver a
ejecutar lo que falló para no perder datos [@F-M5-11]. Busca la opción equivalente en tu herramienta y úsala en vez de adivinar.

### Lo que entregas

Subes en la tarea la tabla del flujo, capturas del flujo armado y de un resultado correcto, tu plan de pruebas con lo
esperado y lo obtenido, y la ficha del flujo. Ninguna captura debe mostrar datos reales de la empresa ni de personas. Suma tu
autoevaluación: el nivel que marcaste en cada criterio de la rúbrica, con una línea que lo justifique.

### Rúbrica de autoevaluación

Antes de entregar, revisa tu trabajo con esta rúbrica y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Diseña el flujo | Tu tabla tiene de tres a cinco pasos con lo que recibe y entrega cada uno; uno usa IA, otro usa correo, planilla o calendario, y cada paso usa solo datos de los anteriores. | La tabla está, pero a algún paso le falta lo que recibe o entrega, o un paso usa datos que no vienen de los anteriores. | No hay diseño, o tu flujo no tiene un paso con IA y otro con correo, planilla o calendario. |
| Construye un flujo funcional | Tus capturas muestran que el disparador se activa y que cada paso recibe los datos correctos del anterior, sin datos reales de la empresa ni de personas. | Tu flujo corre, pero las capturas no muestran todos los pasos o algún dato llega mal al paso siguiente. | Tus capturas no muestran el flujo funcionando, o muestran datos reales de la empresa o de personas. |
| Prueba y corrige fallas | Tienes al menos cinco casos con lo esperado y lo obtenido, incluido uno que debe detenerse y uno casi vacío, y cada falla tiene su causa, lo que cambiaste y la prueba repetida. | Tienes cinco casos, pero te falta el que debe detenerse o el casi vacío, o alguna falla no tiene causa o prueba repetida. | Tienes menos de cinco casos, o no corregiste las fallas. |
| Documenta el flujo | Tu ficha tiene nombre, propósito, disparador, pasos, datos, dependencias y pruebas, y registra la cuenta conectada y el límite del plan gratuito. | La ficha está, pero le faltan uno o dos campos, o no registra las dependencias. | No hay ficha. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de entregar.

## Referencias bibliográficas

- Make. (s. f.). *Pricing*. https://www.make.com/pricing
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026a, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637
- Zapier. (2026b, 18 de junio). *Send data between steps by mapping fields*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496343026701
