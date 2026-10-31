# Actividades de aplicación práctica · M1-AE1 · Fundamentos de IA generativa

## Autoevaluación 1 · El semáforo de la semana de Camila
cubre: H1, H2, C1
fuentes: F-M1-02, F-M1-09
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a decidir qué tareas de Camila conviene apoyar con un asistente de IA generativa y a probar una de ellas, para poner en práctica lo que sabes de cómo funciona el modelo y de sus límites. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Trabajas con datos inventados.

### Situación

Es lunes en la oficina de la constructora y Camila tiene seis tareas por delante: responder a un proveedor que pregunta por el pago
de su factura, resumir el instructivo de rendición de gastos para dos personas nuevas del equipo, confirmar el horario vigente de
una oficina pública donde debe hacer un trámite, elegir a quién del equipo le toca cubrir la recepción durante las vacaciones de una
compañera, preparar una ilustración simple para un aviso interno sobre el orden de la oficina y pasar a una tabla una ficha de
proveedor que trae RUT, dirección y cuenta bancaria.

Quiere saber cuáles puede apoyar con un asistente de IA generativa y cuáles no. Para decidir, parte de lo que viste en el tema. El
asistente produce un contenido nuevo a partir de los patrones de sus datos de entrenamiento, eligiendo continuaciones probables, sin
comprender el mundo como lo hace una persona [@F-M1-02]. Además, puede dar una respuesta incorrecta con total seguridad y no conoce lo
que pasó después de su fecha de corte, salvo que use herramientas como la búsqueda web [@F-M1-09].

### Lo que vas a hacer

Vas a decidir por Camila y a probar una de las tareas con datos de prueba.

1. Clasifica las seis tareas en el semáforo (verde, amarillo o rojo) y escribe, para cada una, una frase que explique el color con lo que sabes de cómo funciona el modelo: si trabaja sobre un texto que ella le entrega, si depende de un dato que puede venir inventado o desactualizado, o si afecta a una persona o expone datos.
2. Indica qué tipo de modelo usarías en las tareas verdes y amarillas: de lenguaje, de imagen, de audio o una herramienta multimodal.
3. Elige una tarea verde y pruébala en Gemini o en ChatGPT con su plan gratuito, en el celular o en el computador. Como no tienes los documentos de Camila, inventa los datos: por ejemplo, unos apuntes ficticios sobre la factura, con un número y una fecha que no existan.
4. Compara la respuesta con lo que le entregaste y anota qué hizo bien, qué agregó que no estaba y qué corregirías antes de usarla.
5. Escribe un párrafo breve, con tus palabras, que le explique a Camila cómo produjo el asistente esa respuesta y por qué igual tiene que revisarla.

### Lo que preparas

Deja listo el semáforo con las seis tareas, su color, el tipo de modelo y la frase que justifica cada decisión; el pedido que usaste en
la prueba, la respuesta que recibiste y tus anotaciones de la comparación, y el párrafo de explicación, de cinco a ocho líneas.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Describe correctamente el funcionamiento y los tipos de IA generativa | Tu párrafo explica con tus palabras cómo genera el asistente su respuesta y con qué información trabaja, y lo conecta con la necesidad de revisarla. | Tu párrafo menciona el funcionamiento del modelo, pero de forma incompleta o confusa, o no lo conecta con la revisión. | No tienes párrafo o no explicas cómo produce el asistente su respuesta. |
| Semáforo justificado | Las seis tareas tienen color y cada una trae una frase que se apoya en el funcionamiento o en los límites del modelo. | Las seis tareas tienen color, pero algunas de tus frases no se apoyan en el funcionamiento del modelo o te quedaron tareas sin frase. | Te faltan tareas en el semáforo o no justificaste los colores. |
| Tipo de modelo | Cada tarea verde o amarilla tiene un tipo de modelo que corresponde a la salida que se busca. | Te falta el tipo de modelo en alguna tarea o uno no corresponde a su salida. | No indicaste tipos de modelo o la mayoría no corresponde a la salida. |
| Prueba con datos inventados | Tu prueba usa datos inventados, incluye el pedido y la respuesta, y tu comparación anota lo que hizo bien, lo que agregó y al menos una cosa que revisar. | Hiciste la prueba, pero te falta el pedido o la respuesta, o tu comparación no señala nada que revisar. | No hiciste la prueba o usaste datos reales de personas. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Semáforo de la semana de Camila**

| Tarea | Color | Tipo de modelo | Por qué |
|---|---|---|---|
| Responder al proveedor que pregunta por el pago de su factura | Verde | De lenguaje | El asistente redacta a partir de los apuntes que Camila le entrega; ella revisa número, fecha y cualquier compromiso antes de enviar. |
| Resumir el instructivo de rendición de gastos | Verde | De lenguaje | Trabaja sobre un texto que ella le pega; el riesgo es que agregue requisitos que el instructivo no trae, y eso se controla comparando. |
| Confirmar el horario vigente de la oficina pública | Amarillo | De lenguaje, con búsqueda web | El horario no está en un texto que ella entrega: el modelo puede inventarlo o darlo desactualizado por su fecha de corte. Se confirma en el sitio oficial. |
| Elegir quién cubre la recepción durante las vacaciones | Rojo | — | Es una decisión sobre personas: el modelo no conoce al equipo y puede repetir sesgos de sus datos. La decide Camila con su jefatura. |
| Ilustración para el aviso sobre el orden de la oficina | Verde | De imagen | Es una pieza nueva y sin datos sensibles; se revisa que no traiga texto mal escrito dentro de la imagen. |
| Pasar a tabla la ficha de proveedor con RUT, dirección y cuenta bancaria | Rojo | — | Pegarla en el asistente expone datos sensibles al proveedor de la herramienta. Se pasa a mano o con una copia sin esos datos. |

**Prueba con datos inventados.** Pedido en Gemini: «Eres asistente administrativa de una constructora. Con estos apuntes, redacta una respuesta breve y cordial para un proveedor que pregunta por el pago de su factura. Apuntes: factura 9999 del 3 de octubre, ingresada a contabilidad el 10 de octubre, en revisión; la fecha de pago la confirma la gerenta». Respuesta: «Estimado proveedor: le informo que su factura 9999, del 3 de octubre, fue ingresada a contabilidad el 10 de octubre y se encuentra en revisión. El pago se realizará dentro de los próximos 30 días. Quedo atenta a cualquier consulta».

Comparación: lo hizo bien, porque usó el número y las dos fechas sin cambiarlos y el tono es cordial. Agregó «dentro de los próximos 30 días», un plazo que no estaba en los apuntes. Antes de usarlo, borraría esa frase y escribiría que avisaré la fecha cuando la confirme la gerenta.

**Párrafo para Camila.** «Camila, el asistente no buscó tu factura ni sabe cómo paga la constructora. Armó el correo fragmento a fragmento, eligiendo continuaciones probables según los patrones de los muchos textos con que fue entrenado, y usó los datos que le pegaste. Por eso suena bien, y por eso mismo le salió natural agregar "dentro de 30 días", una frase típica de estos correos que tú nunca le diste. Puede equivocarse con total seguridad y no avisa cuando inventa. Antes de enviar, compara cada número, fecha y compromiso con tus apuntes.»

**Errores frecuentes**

- Poner el horario de la oficina pública en verde, o la ficha del proveedor en verde «porque solo es pasar a tabla».
- Justificar los colores con frases como «porque es fácil» o «porque es importante», que no dicen nada del modelo.
- Escribir que el asistente «busca la respuesta» o «entiende» lo que se le pide, o decir solo «hay que revisar» sin explicar por qué.

## Autoevaluación 2 · Tres usos y dos límites en tu cargo
cubre: H1, H2, C2
fuentes: F-M1-02, F-M1-09
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a pasar por el semáforo las tareas de tu propio cargo y a probar una de ellas, para identificar usos concretos de la IA generativa y los límites que tendrías que controlar. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y datos de clientes por datos inventados.

### Situación

Ahora el escenario es tu propio trabajo. Piensa en una semana normal de tu cargo: los correos que respondes, los documentos que lees
o preparas, los registros que llevas y los avisos que envías. Algunas de esas tareas se pueden apoyar con un asistente y otras no
conviene delegarlas.

Como trabajas con información real, ten presente que usar un asistente de IA generativa casi siempre implica compartir datos con el
proveedor [@F-M1-02]. Por eso vas a practicar con una copia sin datos sensibles y respetando lo que diga tu empresa sobre el uso de
estas herramientas.

### Lo que vas a hacer

Vas a revisar tus propias tareas con el semáforo y a probar una de ellas.

1. Anota las tareas que hiciste la semana pasada y pásalas por el semáforo, preguntándote en cada una quién se da cuenta si la respuesta está mal y cuánto cuesta el error.
2. De las tareas en verde o amarillo, elige tres usos concretos para un asistente de IA generativa y anota qué tipo de modelo necesita cada uno.
3. Toma una de esas tareas y haz una copia del documento o del correo con que trabajarías, borrando o cambiando nombres, RUT, teléfonos y montos.
4. Pruébala en Gemini o en ChatGPT con un pedido simple, como un resumen en tres viñetas, y compara la respuesta con el original línea por línea.
5. Escribe dos límites que tendrías que cuidar en esas tareas y cómo los controlarías. Piensa en la alucinación, el sesgo y la fecha de corte: el asistente puede responder mal con aparente seguridad y no conoce lo posterior a su entrenamiento, salvo que busque en internet [@F-M1-09].

### Lo que preparas

Deja listos tu lista de tareas con su color en el semáforo; los tres usos con el tipo de modelo de cada uno; la copia que usaste, ya sin
datos sensibles, junto con el pedido, la respuesta y lo que encontraste al comparar, y los dos límites con su forma de control.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Ejemplifica al menos 3 usos en tareas laborales | Presentas tres usos que son tareas concretas de tu cargo, cada uno con el tipo de modelo que necesita. | Presentas tres usos, pero alguno es general o no trae el tipo de modelo, o solo dos son concretos. | Presentas menos de dos usos concretos. |
| Ejemplifica al menos 2 límites con su control | Nombras dos límites propios de la IA generativa y cada uno trae un control que puedes hacer en tu trabajo. | Nombras dos límites, pero uno no es propio de la IA generativa o su control es vago. | Nombras un límite o ninguno, o no propones controles. |
| Semáforo de tus tareas | Todas las tareas de tu lista tienen color y cada tarea en rojo trae un motivo claro. | Te quedaron tareas sin color o tareas en rojo sin motivo. | No tienes lista de tareas con su color. |
| Prueba con una copia sin datos sensibles | Tu copia no tiene nombres, RUT, teléfonos ni montos reales, e incluye el pedido, la respuesta y lo que encontraste al compararla con el original. | Tu copia está limpia, pero te falta el pedido, la respuesta o la comparación. | No hiciste la prueba o tu copia conserva datos sensibles. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Como cada persona tiene su propio cargo, este es un ejemplo resuelto: el de Andrés, encargado de bodega en una distribuidora.

**Semáforo de su semana**

| Tarea | Color | Motivo |
|---|---|---|
| Aviso al equipo: inventario del viernes y cierre a las 15:00 | Verde | El asistente redacta con los datos que Andrés le da, y si algo sale mal el equipo lo nota de inmediato. |
| Afiche sobre el uso de calzado de seguridad | Verde | Es una pieza nueva, sin datos sensibles; se revisa la imagen antes de imprimirla. |
| Resumen del reporte semanal de stock para su jefatura | Amarillo | Una cifra cambiada no se nota a simple vista y la jefatura decide compras con ella. |
| Correo al proveedor de cajas por un pedido atrasado | Verde | Lo redacta a partir de sus notas; Andrés revisa número de pedido y fechas. |
| Decidir a quién del equipo le toca el turno del sábado | Rojo | Decide sobre personas y el modelo no conoce al equipo. |
| Responder a un cliente por su deuda pendiente | Rojo | Expone datos del cliente y montos, y un error dañaría la relación. |

**Tres usos**

1. Redactar los avisos al equipo a partir de la fecha, la hora y el motivo: modelo de lenguaje.
2. Hacer la imagen del afiche de calzado de seguridad: modelo de imagen.
3. Resumir en tres viñetas el reporte semanal de stock, para la jefatura que lo lee en el celular: modelo de lenguaje.

**Prueba.** Andrés copió su reporte, cambió los nombres de los clientes y dejó solo cifras de práctica. Pidió: «Resume este reporte en tres viñetas para mi jefatura. Usa solo los datos del texto». Al comparar línea por línea encontró que el resumen decía 210 cajas de guantes y el reporte decía 120, y que omitía el producto con stock bajo. Corrigió la cifra y agregó el producto a mano.

**Dos límites y su control**

- Alucinación o cifras cambiadas en el resumen del stock. Control: antes de enviar, comparo cada cifra del resumen con la planilla de inventario.
- Sesgo en las imágenes: el afiche puede mostrar solo a hombres jóvenes, cuando el equipo de bodega tiene mujeres y hombres de distintas edades. Control: pido en el prompt personas diversas y reviso la imagen con una compañera del equipo antes de imprimirla.

**Qué debe tener la tuya.** Tareas reales de tu semana, todas con su color, y cada tarea en rojo con un motivo claro: decide sobre personas, expone datos o el error sería grave y difícil de ver. Tres usos concretos de tu cargo, no generales, cada uno con su tipo de modelo. Una copia realmente limpia, sin nombres, RUT, teléfonos ni montos reales, y una comparación línea por línea que diga qué encontraste. Dos límites propios de la IA generativa (alucinación, sesgo, fecha de corte o errores de texto en las imágenes), cada uno con un control que de verdad puedas hacer: con qué documento o con quién confirmas.

**Errores frecuentes**

- Usos generales como «escribir textos» o «buscar información», en vez de tareas concretas de tu semana.
- Límites que no son del modelo, como «no tengo tiempo» o «mi jefatura no lo permite», o controles vagos como «revisar bien».
- Poner tareas en rojo solo porque «son importantes», sin decir qué riesgo tienen.

## Referencias bibliográficas

- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- OpenAI. (2026). *¿Dice ChatGPT la verdad?* OpenAI Help Center. https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
