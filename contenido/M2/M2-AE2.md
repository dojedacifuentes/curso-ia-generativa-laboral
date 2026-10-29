# M2-AE2 · Prompting avanzado para textos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M2-08, F-M2-09
bloque: Texto + actividad

En el tema anterior escribiste correos, minutas e informes con un buen prompt y ajustaste el resultado conversando. Eso funciona, pero tiene un problema: si mañana repites el pedido, el texto puede salir distinto. La misma indicación puede dar respuestas diferentes, y en una oficina se nota cuando el mismo tipo de correo sale cada semana con otro formato o con otro tono [@F-M2-08].

El aprendizaje esperado es este: Aplicar técnicas de prompting avanzado (ejemplos, restricciones, encadenamiento) para mejorar la calidad y consistencia de textos profesionales. Al final deberías poder aplicar al menos dos de esas técnicas y obtener textos consistentes entre versiones, comprobándolo con pruebas y no con una impresión.

El tema funciona como un laboratorio de prompts. En cada técnica vas a ver una versión «antes» y otra «después», las vas a probar en Gemini y vas a comparar los resultados. Como la salida de un modelo no es determinista, la documentación de los proveedores recomienda justamente eso: probar las indicaciones y medir cómo se comportan [@F-M2-09]. Al terminar tendrás plantillas que podrás reutilizar en las tareas que se repiten en tu cargo, como Camila con las respuestas a proveedores o Andrés con los avisos a clientes.

Un prompt avanzado no es un prompt más largo. Es uno que da resultados parecidos cada vez que lo usas, con la calidad que necesitas.

:::actividad Abre tu bitácora de laboratorio
Crea un documento o una nota en el celular con el título «Laboratorio de prompts». Ahí vas a registrar cada versión de tus prompts y lo que obtuviste con cada una.
:::

## P02 · Del buen prompt al prompt confiable
cubre: S1, C2
fuentes: F-M2-09, F-M2-10
bloque: Texto + tabla comparativa

En el módulo 1 armaste prompts con rol, contexto, tarea y formato, y eso mejora mucho la primera respuesta. Pero cuando un texto se repite, como la respuesta a una consulta frecuente, el aviso semanal o la confirmación de un pedido, necesitas algo más: que salga igual de bien todas las veces.

Hay cuatro herramientas para lograrlo. Las tres primeras son técnicas que se aplican dentro del prompt; la cuarta es la forma de guardarlas para usarlas de nuevo.

| Técnica | Qué problema resuelve | Ejemplo de uso |
|---|---|---|
| Ejemplos (few-shot) | El formato o el tono cambia en cada respuesta | Mostrar dos avisos bien escritos para que imite el patrón |
| Restricciones | El texto sale largo, con datos inventados o con un estilo que no sirve | «Máximo 80 palabras, sin emojis, solo con los datos entregados» |
| Encadenamiento | La tarea es compleja y sale mal de una vez | Primero extraer los hechos, después redactar, después revisar |
| Plantilla reutilizable | Cada vez escribes el prompt desde cero | Un texto guardado con partes fijas y espacios para los datos |

Un error común es dar por listo un prompt porque funcionó una vez. Una buena respuesta puede ser suerte. Como la salida no es determinista, la documentación de los proveedores recomienda probar las indicaciones con casos variados y diseñarlas de forma iterativa, ajustando según lo que resulta [@F-M2-09; @F-M2-10]. Un prompt se vuelve confiable después de probarlo varias veces y con casos distintos.

:::comprueba
Cada vez que Andrés pide el aviso semanal de inventario, la respuesta sale con un formato distinto. ¿Qué técnica le conviene probar primero?
- a) Pedir que el texto sea más creativo
- **b) Incluir ejemplos de avisos con el formato que necesita**
- c) Escribir el prompt en mayúsculas
Retroalimentación: Los ejemplos orientan el formato, el tono y la estructura, y mejoran la consistencia entre respuestas.
:::

## P03 · Cómo funciona el laboratorio
cubre: A1, A2, C2
fuentes: F-M2-10, F-M2-09
bloque: Proceso (process block) en 5 pasos + tabla de bitácora

El diseño de prompts es iterativo: se empieza simple y se agregan detalles según los resultados [@F-M2-10]. Para que esa iteración te enseñe algo, conviene hacerla con orden. Este es el método del laboratorio:

1. Escribe la versión 1 del prompt y guárdala en tu bitácora con un nombre.
2. Pruébala siempre con los mismos dos o tres casos de prueba, por ejemplo, tres consultas distintas de proveedores [@F-M2-09].
3. Anota qué salió bien y qué no, con criterios fijos: formato, largo, tono y datos exactos.
4. Cambia una sola cosa y guarda la versión 2.
5. Compara las versiones con los mismos casos y quédate con la mejor.

El paso 4 es una recomendación del curso. No es la única forma de trabajar, pero hace que la comparación sea justa: si cambias muchas cosas a la vez y el resultado mejora, no sabrás cuál de ellas lo produjo. Tu bitácora puede ser una tabla simple:

| Versión | Qué cambié | Caso 1 | Caso 2 | Caso 3 | ¿Mejoró? |
|---|---|---|---|---|---|
| v1 | — | Largo | Bien | Inventó una fecha | — |
| v2 | Agregué «usa solo los datos entregados» | Largo | Bien | Bien | Sí, en datos |

Eso es el **orden metodológico**: versiones con nombre, casos de prueba fijos, un cambio a la vez y un registro de lo que pasó. Andrés, por ejemplo, guarda sus prompts como «aviso-despacho-v1», «v2» y «v3»; cuando una versión nueva empeora algo, vuelve a la anterior sin tener que recordar cómo era. Sin registro, mejorar un prompt depende de la memoria.

## P04 · Técnica 1: ejemplos (few-shot)
cubre: S1, C1
fuentes: F-M2-11, F-M2-10
bloque: Texto + imagen de un prompt con ejemplos destacados

**Few-shot**, que en español sería «con pocos ejemplos», significa incluir en el prompt uno o varios ejemplos de entrada y salida para que el modelo capte el patrón y lo imite. La entrada son los datos de un caso; la salida, el texto que esperas obtener con ellos.

La documentación de los proveedores coincide en que los ejemplos son una de las formas más confiables de orientar el formato, el tono y la estructura de una respuesta, y en que mejoran la consistencia [@F-M2-11]. Para que funcionen, tienen que parecerse a los casos reales que vas a pedir y ser variados, de modo que cubran situaciones distintas y el modelo no copie un solo caso. Además, todos deben tener el mismo formato y quedar separados de las instrucciones con una etiqueta clara, como «EJEMPLO 1» [@F-M2-10; @F-M2-11].

Sobre cuántos ejemplos usar no hay una regla fija. Una guía sugiere de tres a cinco [@F-M2-11]; otra advierte que demasiados pueden hacer que el modelo los copie de más [@F-M2-10]. Para textos breves, este curso propone partir con dos o tres, y tu laboratorio te dirá si hacen falta más.

Para armar ejemplos tampoco necesitas copiar correos reales con nombres, teléfonos o direcciones de clientes. El modelo imita la forma y no necesita los datos verdaderos, así que puedes inventarlos.

:::ejemplo Un ejemplo de entrada y salida
ENTRADA: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
SALIDA: «Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central».
:::

## P05 · Laboratorio 1: antes y después con ejemplos
cubre: S1, C1, C2
fuentes: F-M2-11, F-M2-09
bloque: Comparación antes y después + actividad

Andrés envía cada semana avisos de despacho a clientes y quiere que todos tengan el mismo formato. Su primera versión era esta: «Escribe un aviso para el cliente Distribuidora Sur: su pedido 455 llega el miércoles 20». Al repetirla, a veces salía con asunto y a veces sin él, a veces con tres párrafos y otras con uno, y una vez agregó «¡Gracias por preferirnos!». En la segunda versión sumó dos ejemplos, separados de la instrucción:

```
Escribe un aviso de despacho siguiendo el formato de los ejemplos. Usa solo los datos de la entrada.
EJEMPLO 1
Entrada: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
Salida: Asunto: Despacho pedido 312. Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
EJEMPLO 2
Entrada: pedido 320, llega el viernes 22, cliente Minimarket Doña Rosa, faltan 2 cajas que llegan el lunes 25.
Salida: Asunto: Despacho pedido 320. Estimados Minimarket Doña Rosa: su pedido 320 llegará el viernes 22. Dos cajas llegarán el lunes 25. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
AHORA
Entrada: pedido 455, llega el miércoles 20, cliente Distribuidora Sur.
```

Fíjate en que el segundo ejemplo no es igual al primero: trae un faltante. Así el modelo aprende qué hacer en ese caso, que en una bodega es frecuente. Son los ejemplos variados y bien separados los que mejoran la consistencia; dos ejemplos casi idénticos le enseñarían menos [@F-M2-11; @F-M2-09].

:::actividad Prueba las dos versiones
Pega la primera versión en Gemini tres veces, cada una en un chat nuevo, y luego haz lo mismo con la segunda. Anota en tu bitácora cuántas veces salió el asunto, cuántas veces se mantuvo la despedida y si alguna agregó algo que no estaba.
:::

## P06 · Cuando los ejemplos fallan
cubre: S1, C2
fuentes: F-M2-10, F-M2-11
bloque: Texto + escenario

Los ejemplos son poderosos, y por eso también pueden llevar a errores. El más frecuente es que el modelo copie de más. Si todos los ejemplos dicen «lunes», puede poner «lunes» aunque la entrada diga otro día. Las guías advierten que demasiados ejemplos, o ejemplos muy parecidos, llevan a este **sobreajuste**: el modelo copia detalles en vez de aplicar el patrón [@F-M2-10]. Por eso es un error creer que mientras más ejemplos, mejor. Conviene empezar con pocos y variados, y agregar uno solo cuando las pruebas muestran que falta cubrir un caso.

El segundo problema son los ejemplos que se contradicen. Si uno termina con «Saludos cordiales» y otro con «Atentamente», el modelo no sabe cuál usar; por eso el formato debe ser idéntico entre ejemplos [@F-M2-10]. El tercero aparece cuando los ejemplos están mezclados con las instrucciones, porque el modelo puede confundir un ejemplo con un dato real; para evitarlo sirven etiquetas como «EJEMPLO 1» y «AHORA» [@F-M2-11]. El último es usar ejemplos que no se parecen a lo que pides: si el ejemplo es un aviso de despacho y necesitas responder un reclamo, el patrón no sirve.

Un buen conjunto de ejemplos, entonces, es corto, variado, parejo en el formato y fácil de distinguir del resto del prompt.

:::comprueba
Andrés incluyó dos ejemplos y en ambos el pedido llegaba completo. Cuando pide un aviso con un faltante, el modelo lo omite. ¿Qué le conviene hacer?
- a) Quitar los ejemplos
- **b) Cambiar un ejemplo por uno que incluya un faltante**
- c) Agregar diez ejemplos más de pedidos completos
Retroalimentación: Los ejemplos deben ser variados y cubrir los casos reales. Si ningún ejemplo tiene faltantes, el modelo no sabe cómo mostrarlos.
:::

## P07 · Técnica 2: restricciones
cubre: S1, C1
fuentes: F-M2-10, F-M1-14
bloque: Texto + tabla por tipo de restricción

Una **restricción** es un límite claro que el texto debe cumplir. Las guías de los proveedores recomiendan decir qué hacer y qué no, fijar un largo máximo e indicar el formato de la respuesta [@F-M2-10]. En textos de oficina, las más útiles son de seis tipos:

| Tipo | Ejemplo |
|---|---|
| Largo | «Máximo 80 palabras», «tres viñetas», «una página» |
| Formato | «Con asunto», «en tabla de tres columnas», «párrafos de dos oraciones» |
| Registro y tono | «Formal, de usted, cordial» |
| Contenido permitido | «Usa solo los datos que te entrego» |
| Contenido prohibido | «Sin emojis», «sin promesas de plazos», «sin signos de exclamación» |
| Qué hacer si falta algo | «Si falta un dato, escribe [FALTA]» |

Cuando puedas, di qué hacer en vez de solo qué no hacer [@F-M1-14]. «Escribe en párrafos cortos» funciona mejor que «no escribas párrafos largos», porque le da al modelo una dirección.

Las restricciones son especialmente útiles para la exactitud. «Usa solo los datos que te entrego», junto con la regla de [FALTA], le da al modelo una alternativa a completar con datos inventados. Y hay una condición para que sirvan: que puedas comprobar si se cumplieron. «Que sea breve» es difícil de medir; «máximo 90 palabras» se cuenta.

:::ejemplo Una restricción que evita problemas
Camila notó que, al responder a proveedores que preguntaban por un pago, el asistente agregaba frases como «le confirmamos que el pago se hará esta semana». Sumó la restricción «No agregues fechas, montos ni compromisos de pago que no estén en mis datos». Desde entonces, el texto solo dice lo que la gerenta ya aprobó.
:::

## P08 · Laboratorio 2: antes y después con restricciones
cubre: S1, C1, C2
fuentes: F-M2-10, F-M2-03
bloque: Comparación antes y después + actividad

Camila tuvo una reunión con la ejecutiva de un proveedor para ordenar las fechas de facturación, y quiere enviarle un correo de agradecimiento. Su primera versión fue «Escribe un correo de agradecimiento después de una reunión con un proveedor». El resultado típico fue un texto de 200 palabras, con frases genéricas, un nombre de empresa inventado y un saludo con coma. En la segunda versión separó los datos y las restricciones:

```
Escribe un correo de agradecimiento después de una reunión con un proveedor.
DATOS: reunión el jueves 14 con la Sra. Muñoz, ejecutiva del proveedor de hormigón; acordamos que enviarán cada factura junto con su guía de despacho.
RESTRICCIONES:
Máximo 90 palabras.
Registro formal, de usted, tono cordial.
Incluye asunto y saludo con dos puntos.
Menciona solo el acuerdo que te doy, sin agregar otros.
No uses frases como "es un placer" ni signos de exclamación.
Cierra con "Saludos cordiales," y mi nombre: Camila Soto.
```

Con las restricciones en líneas separadas, el prompt es más fácil de leer para ti y para el modelo, y más fácil de cambiar después [@F-M2-10]. Cada una, además, se puede comprobar: las palabras se cuentan, el saludo se mira y el acuerdo se compara con lo que se habló en la reunión. Las de asunto y saludo vienen de las recomendaciones sobre el correo que viste en el tema 1 [@F-M2-03].

:::actividad Mide el efecto
Prueba la primera y la segunda versión dos veces cada una, en chats nuevos. Cuenta las palabras de cada resultado, revisa si cumple cada restricción y anota en tu bitácora cuántas cumplió cada versión.
:::

## P09 · Técnica 3: encadenamiento de pasos
cubre: S1, C1, A1
fuentes: F-M2-10, F-M2-11
bloque: Proceso (process block) en 3 pasos

El **encadenamiento** divide una tarea compleja en pasos, y la salida de un paso alimenta al siguiente [@F-M2-10]. En vez de pedir todo de una vez, pides una cosa, la revisas y usas ese resultado en el pedido que sigue. Una cadena típica para textos tiene tres eslabones:

1. Primero extraes los hechos: «De estas notas, lista solo los hechos: fechas, cifras, nombres y acuerdos».
2. Después redactas con ellos: «Con esta lista de hechos, redacta el informe».
3. Al final revisas y mejoras: «Revisa el informe contra estos criterios. Señala qué no cumple y entrega una versión corregida».

El tercer paso se conoce como autocorrección: el borrador se revisa contra criterios claros y se entrega una versión mejorada [@F-M2-11].

Podrías pensar que dividir no hace falta, si los modelos actuales ya razonan bastante por su cuenta. La documentación de un proveedor lo explica: encadenar sirve sobre todo para revisar los resultados intermedios [@F-M2-11]. Si la lista de hechos del primer paso trae un error, lo detectas antes de que se convierta en un párrafo bien escrito. Un solo prompt es más rápido, pero si sale mal no sabes dónde falló, y mezcla lo que hay que verificar con lo que hay que redactar. La cadena toma un poco más de tiempo y te deja ver y corregir cada paso. Por eso el encadenamiento es orden metodológico aplicado: cada paso tiene una tarea, un resultado y una revisión.

## P10 · Laboratorio 3: una cadena de tres pasos
cubre: S1, C1, A1
fuentes: F-M2-11, F-M2-05
bloque: Proceso paso a paso + actividad

Andrés tiene notas desordenadas de su semana y necesita un informe ejecutivo para su jefatura. Las notas, ficticias, dicen: «lunes faltaron cajas, 2 pedidos atrasados. miércoles llegó proveedor nuevo, cajas ok. jueves 1 pedido atrasado por camión. total semana 38 despachos. idea: tener 30 cajas de reserva». Si pide todo de una vez, con «Haz un informe ejecutivo con estas notas», el resultado mezcla todo y, a veces, cambia una cifra. Con la cadena, el trabajo queda así:

1. «Lista solo los hechos de estas notas, uno por línea: qué pasó, cuándo y cuántos. No redactes». Andrés revisa la lista contra las notas: que estén los tres atrasados y que el total sea 38.
2. «Con esta lista, redacta un informe ejecutivo de media página para mi jefatura: resultado de la semana, por qué importa y recomendación. Usa solo estos hechos».
3. «Revisa el informe: ¿empieza por el resultado?, ¿cada cifra está en la lista?, ¿la recomendación es clara? Señala qué no cumple y entrega una versión corregida».

El segundo paso sigue la estructura del informe ejecutivo del tema 1: resultado, por qué importa y qué hacer [@F-M2-05]. Un error frecuente es saltarse la revisión del primer paso y pegar la lista directamente en el segundo. Entonces la cadena pierde su ventaja: un error de la lista llega intacto al informe, y ahora suena convincente [@F-M2-11].

:::actividad Compara el camino corto y el largo
Haz el caso con un solo prompt y luego con la cadena. En tu bitácora, anota en cuál detectaste antes un error y cuál resultado necesitó menos correcciones tuyas.
:::

## P11 · Combinar técnicas según el problema
cubre: C1, S1
fuentes: F-M2-11, F-M2-10
bloque: Tabla + actividad de clasificación

Las técnicas se combinan. Un mismo prompt puede traer ejemplos, una lista de restricciones y ser parte de una cadena [@F-M2-11; @F-M2-10]. La pregunta útil no es cuántas técnicas usar, sino cuál ataca el problema que tienes.

| Si el problema es… | Prueba primero… |
|---|---|
| El formato cambia en cada respuesta | Ejemplos |
| El tono no es el que necesitas | Ejemplos con el tono correcto |
| El texto sale largo o con elementos que no quieres | Restricciones |
| Aparecen datos que no diste | Restricción «usa solo estos datos» y regla de [FALTA] |
| La tarea tiene muchas partes y sale desordenada | Encadenamiento |
| Hay errores que se pasan sin notar | Encadenamiento con un paso de revisión |

Tampoco sirve sumar técnicas por si acaso: las que no resuelven tu problema solo alargan el prompt y lo hacen más difícil de mantener. Usa la que ataca lo que falla y comprueba en el laboratorio si mejoró.

:::actividad Elige la técnica
Para cada problema, decide si conviene usar ejemplos, restricciones o encadenamiento. La respuesta sugerida va al final de cada línea.
1. Las respuestas a reclamos salen a veces formales y a veces informales. → Ejemplos
2. El resumen de un instructivo de rendición de gastos sale de dos páginas y lo necesitas en cinco viñetas. → Restricciones
3. Necesitas pasar de la transcripción de una reunión a una minuta revisada. → Encadenamiento
4. El asistente agrega un descuento que nadie ofreció. → Restricciones
5. El aviso semanal cambia de estructura cada semana. → Ejemplos
:::

## P12 · Plantillas reutilizables
cubre: S1, H1
fuentes: F-M2-09, F-M1-12
bloque: Texto + imagen de una plantilla con secciones

Cuando un prompt funciona, conviene guardarlo como **plantilla**: un texto con partes fijas, que no cambian, y campos variables, que completas cada vez. La guía de instrucciones de Google para Gemini marca con corchetes lo que hay que personalizar, por ejemplo [nombre del cliente] [@F-M1-12].

La documentación de OpenAI propone ordenar un prompt en secciones: la identidad o rol, las instrucciones, los ejemplos y el contexto, que son los datos de cada vez, separadas con encabezados o etiquetas [@F-M2-09]. Una plantilla para textos de oficina puede verse así:

```
ROL: Eres [cargo] en [tipo de empresa].
TAREA: Redacta [género: correo / aviso / minuta] para [audiencia].
RESTRICCIONES:
Máximo [número] palabras.
Registro [formal / semiformal], tono [cordial / neutro].
Usa solo los DATOS. Si falta algo, escribe [FALTA].
EJEMPLO:
[un ejemplo de entrada y salida]
DATOS:
[los datos de este caso]
```

Las palabras en mayúsculas no cambian; lo que está entre corchetes se completa en cada uso. Así la plantilla guarda lo que aprendiste en el laboratorio, y la próxima vez no partes de cero, sino de la versión que ya probaste.

:::ejemplo La plantilla de Camila
En el Hito 1, Camila guardó en su biblioteca el prompt «Correo de seguimiento de pago», con el que responde a los proveedores que preguntan cuándo se pagará una factura. Ahora lo convirtió en plantilla: cada vez cambia solo el proveedor, el número de factura y la fecha de pago que confirmó la gerenta. Los correos le salen parecidos y le toma menos tiempo revisarlos.
:::

## P13 · Laboratorio 4: diseña tu plantilla
cubre: H1, A1
fuentes: F-M2-09, F-M2-11
bloque: Actividad (completar plantilla)

Ahora vas a diseñar una plantilla para un texto que se repite en tu cargo: una respuesta a consultas frecuentes, un aviso, una confirmación o un seguimiento. Para que tengas un modelo, esta es una plantilla de respuesta a consultas de clientes. Fíjate en cómo las etiquetas separan las secciones y en que las restricciones le dicen al asistente qué hacer cuando no tiene la respuesta.

```
ROL: Eres asistente de atención en [tipo de negocio].
TAREA: Responde la CONSULTA del cliente.
RESTRICCIONES:
Máximo 70 palabras.
Formal, de usted, cordial.
Responde solo con la INFORMACIÓN DISPONIBLE. Si la respuesta no está ahí, di que lo consultarás y responderás pronto.
Sin emojis. Cierra con "Saludos cordiales," y [nombre].
EJEMPLO:
Consulta: ¿Atienden el sábado?
Información: sábado de 10:00 a 14:00.
Respuesta: Estimado cliente: sí, atendemos el sábado de 10:00 a 14:00. Saludos cordiales, [nombre].
INFORMACIÓN DISPONIBLE: [horarios, precios, plazos]
CONSULTA: [texto del cliente]
```

Lo que se completa cada vez son la consulta y la información disponible. Las restricciones y la estructura quedan fijas, y por eso la plantilla da resultados parecidos. Las guías de los proveedores recomiendan precisamente usar etiquetas consistentes para separar instrucciones, contexto y datos [@F-M2-11; @F-M2-09].

:::actividad Completa tu plantilla
1. Elige el texto repetitivo de tu cargo.
2. Escribe la plantilla con las secciones ROL, TAREA, RESTRICCIONES, EJEMPLO y DATOS.
3. Marca con corchetes los campos variables.
4. Guárdala en tu bitácora como «v1».
:::

## P14 · Cómo evaluar la consistencia
cubre: H1, C2
fuentes: F-M2-09, F-M2-08
bloque: Texto + tabla de evaluación

Una plantilla es **consistente** cuando entrega textos con la misma calidad y el mismo formato, aunque cambien los datos y aunque la uses varias veces. Como la misma indicación puede dar respuestas distintas, la única forma de saberlo es probar [@F-M2-08; @F-M2-09].

Prepara tres casos de prueba distintos: uno simple, uno con un dato que falta y uno difícil, por ejemplo, un cliente molesto. Usa la plantilla con cada caso dos veces, en chats nuevos, para que la conversación anterior no influya, y revisa cada resultado con los mismos criterios:

| Criterio | Pregunta |
|---|---|
| Formato | ¿Tiene las partes pedidas, en el orden pedido? |
| Largo | ¿Respeta el máximo de palabras? |
| Tono y registro | ¿Es el que pediste? |
| Exactitud | ¿Todos los datos están en la información entregada? |
| Vacíos | ¿Marcó [FALTA] o dijo que consultaría, en vez de inventar? |

Seis resultados, tres casos por dos intentos, te dan una idea razonable de cómo se comporta la plantilla. Ese número es una recomendación del curso para una prueba rápida, no una regla.

:::error Probar solo con el caso fácil
Si pruebas la plantilla con un caso en que todo está claro, siempre saldrá bien. Los problemas aparecen con los datos incompletos y las situaciones difíciles: por eso uno de tus casos tiene que ser difícil.
:::

## P15 · Laboratorio 5: compara versiones
cubre: C2, H1, A2
fuentes: F-M2-09, F-M2-10
bloque: Comparación antes y después + actividad

Ahora vas a mejorar tu plantilla con datos, no con impresiones [@F-M2-09]. Mira primero cómo lo hizo Andrés con su plantilla de avisos de despacho. Probó cada versión con sus tres casos, dos veces cada uno, y anotó los resultados, que son ficticios:

| Criterio | v1 (sin ejemplos) | v2 (con 2 ejemplos) | v3 (con ejemplos y regla de [FALTA]) |
|---|---|---|---|
| Formato correcto | 3 de 6 | 6 de 6 | 6 de 6 |
| Largo respetado | 4 de 6 | 5 de 6 | 6 de 6 |
| Datos exactos | 5 de 6 | 5 de 6 | 6 de 6 |
| Marcó lo que faltaba | 0 de 2 | 1 de 2 | 2 de 2 |

La v2 resolvió el formato y la v3 resolvió los datos que faltaban. Como cada versión cambió una sola cosa, Andrés sabe qué produjo cada mejora, y se queda con la v3. Si una versión nueva no hubiera mejorado, también habría aprendido algo: volvería a la anterior y probaría otro cambio [@F-M2-10]. La mejora continua incluye descartar.

:::actividad Tu comparación
1. Prueba tu plantilla v1 con tus tres casos, dos veces cada uno.
2. Llena la tabla de criterios.
3. Identifica el criterio que más falla y elige la técnica que lo ataca, como viste en la pantalla 11.
4. Haz la v2 cambiando solo eso, pruébala igual y compara.
:::

## P16 · La prueba de alguien sin contexto
cubre: A2, H1
fuentes: F-M2-11, F-M1-12
bloque: Texto + escenario

La documentación de Anthropic propone una prueba simple: muéstrale tu prompt a una colega que no sabe nada de la tarea [@F-M2-11]. Si ella no entendería qué se pide, el modelo probablemente tampoco. El asistente no conoce tu trabajo; solo sabe lo que está escrito.

En esa revisión conviene mirar cuatro cosas: si se entiende qué texto hay que producir y para quién, si hay palabras que solo entiende tu equipo, como siglas o nombres internos, si las restricciones se contradicen entre sí y si queda claro qué es ejemplo y qué es dato real. Es fácil caer en la idea de que «si lo entiendo yo, lo entiende el modelo». Tú conoces el contexto y llenas los vacíos sin darte cuenta; el modelo no puede hacerlo, y lo que no está escrito en el prompt no existe para él.

También puedes pedirle al asistente que mejore tu prompt, como sugiere la guía de instrucciones de Google para Gemini: «Revisa esta plantilla. ¿Qué instrucción es ambigua? ¿Qué falta para que el resultado sea siempre igual de bueno?» [@F-M1-12]. Sus propuestas son eso, propuestas: pruébalas en el laboratorio antes de aceptarlas.

:::ejemplo La sigla que nadie entendía
La plantilla de Andrés decía «avisar si hay OC pendiente». Una colega de ventas le preguntó qué era «OC». Andrés lo cambió por «orden de compra pendiente», y los avisos dejaron de salir con interpretaciones raras.
:::

## P17 · Orden y mejora continua
cubre: A1, A2
fuentes: F-M2-09, F-M2-10
bloque: Texto + lista de verificación (checklist)

Las plantillas no se terminan nunca del todo. Cambian tus tareas, cambian los casos y cambian los modelos. La documentación de OpenAI recomienda volver a probar las indicaciones cuando se cambia de modelo, porque el comportamiento puede variar [@F-M2-09], y la de Google insiste en que el diseño de prompts es iterativo [@F-M2-10]. Estos hábitos te ayudan a sostener el orden y la mejora en el tiempo:

- [ ] Cada plantilla tiene un nombre claro y un número de versión.
- [ ] Guardo junto a la plantilla sus casos de prueba y anoto qué cambié en cada versión y por qué.
- [ ] Separo con etiquetas las partes fijas de los datos.
- [ ] Cuando un resultado falla en el trabajo, lo agrego como caso de prueba.
- [ ] Vuelvo a probar mis plantillas cuando el asistente se actualiza o cuando cambio de asistente.
- [ ] Reviso cada cierto tiempo si una plantilla sigue sirviendo o si la tarea cambió.

Andrés aplicó el cuarto hábito cuando un cliente le respondió que el aviso no decía la dirección de entrega. Agregó ese caso a sus pruebas y una restricción nueva, «Incluye la dirección de entrega si está en los datos», y guardó la plantilla como v4.

:::comprueba
Gemini se actualizó y tu plantilla empezó a dar textos más largos. ¿Qué haces primero?
- a) Escribir una plantilla nueva desde cero
- **b) Volver a probarla con tus casos de prueba y ajustar la restricción de largo**
- c) Dejar de usar plantillas
Retroalimentación: Cuando cambia el modelo, se vuelve a probar con los mismos casos. Así ves qué cambió y ajustas solo lo necesario.
:::

## P18 · Cierre: dos plantillas para tu biblioteca
cubre: C1, C2, H1
fuentes: F-M2-09, F-M2-11
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema aplicaste tres técnicas. Los ejemplos fijan el formato y el tono, las restricciones ponen límites que se pueden comprobar y el encadenamiento divide una tarea para revisar cada paso [@F-M2-11]. Guardaste lo aprendido en plantillas reutilizables y mediste su consistencia comparando versiones con los mismos casos de prueba [@F-M2-09].

En el Hito 1 armaste tu primera biblioteca de prompts. Ahora vas a sumarle dos plantillas probadas para tu cargo, que son las que más tiempo te van a ahorrar en las tareas que se repiten. Una plantilla que pasó tus pruebas es una herramienta de trabajo; una que no probaste es solo un buen intento.

:::actividad Tu biblioteca de prompts, versión 2
Agrega a tu biblioteca:
1. Una plantilla con ejemplos y restricciones para un texto que se repite, como un aviso, una respuesta o un seguimiento.
2. Una cadena de pasos para un texto más complejo, como una minuta desde notas o un informe desde datos.

Para cada una, guarda la versión final con su número, tus tres casos de prueba, la tabla de criterios con los resultados de al menos dos versiones y una línea que diga qué técnica aplicaste y qué mejoró.
:::

## Ideas clave

1. La misma indicación puede dar respuestas distintas: un prompt es confiable solo cuando se probó varias veces y con casos variados.
2. Los ejemplos (few-shot) orientan formato, tono y estructura; deben ser pertinentes, variados, con el mismo formato y separados de las instrucciones. No hay un número fijo, y demasiados pueden hacer que el modelo los copie de más.
3. Las restricciones fijan qué hacer y qué no, el largo y el formato; las mejores son las que se pueden comprobar.
4. El encadenamiento divide la tarea en pasos (extraer, redactar, revisar) y permite detectar errores en los resultados intermedios.
5. Una plantilla reutilizable separa las partes fijas de los campos variables y guarda lo aprendido en el laboratorio.
6. La consistencia se evalúa con casos de prueba fijos, criterios claros y versiones que cambian una cosa a la vez.
7. Las plantillas se vuelven a probar cuando cambian la tarea, los casos o el modelo: es un proceso de mejora continua.

## Referencias bibliográficas

- Anthropic. (s. f.-a). *Mejores prácticas de prompting*. Claude Docs. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Anthropic. (s. f.-b). *Prompting best practices*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Carnegie Mellon University. (s. f.). *Executive summaries*. Student Academic Success Center. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- Google. (s. f.). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
- Rodríguez-Rodríguez, M. N. y García-Sánchez, S. (s. f.). *Redacción del correo electrónico en español e inglés: breves recomendaciones*. Universidad de Las Palmas de Gran Canaria. https://iatext.ulpgc.es/sites/default/files/recomendaciones_correo_electronico_0.pdf
