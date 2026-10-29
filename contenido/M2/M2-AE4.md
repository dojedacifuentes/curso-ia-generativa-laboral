# M2-AE4 · Planillas de cálculo con IA

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-49, F-H-20
bloque: Texto + imagen

Las planillas de cálculo están en casi cualquier oficina: inventarios, registros de facturas, asistencia, gastos. Escribir una fórmula puede costar si no lo haces seguido, y ahí la IA ayuda: le describes lo que necesitas y te propone la fórmula. El problema es que una fórmula equivocada no avisa, porque entrega un número que parece correcto.

El aprendizaje esperado es este: Resolver análisis en planillas de cálculo con fórmulas generadas por IA, verificando su exactitud. Al final deberías poder generar una fórmula correcta para un problema concreto, comprobar el resultado con datos de prueba y corregir los errores que encuentres.

Si en tu trabajo tienes Gemini dentro de Hojas de cálculo de Google o Copilot dentro de Excel, puedes usarlos, pero son funciones de pago: Gemini en Hojas de cálculo viene con el plan Google AI Pro, y Copilot en Excel, con los planes pagados de Microsoft 365 [@F-H-49; @F-H-20]. Por eso este tema usa un camino gratuito. Pides la fórmula a Gemini en el chat, la pegas en Hojas de cálculo de Google y la compruebas con datos de práctica. Si usas Excel, los pasos son casi los mismos.

Vas a trabajar con una planilla de inventario de Andrés, con datos ficticios. Lo que aprendas sirve igual para una planilla como la de Camila, que registra facturas, órdenes de compra y contratos. Y hay una idea que te va a acompañar en todo el tema: como viste en el tema 1, un asistente puede entregar una respuesta errónea con total seguridad, así que aquí la IA propone y tú compruebas.

## P02 · Cómo se arma una fórmula
cubre: S1
fuentes: F-M2-16, F-M2-15
bloque: Texto + imagen de una planilla con celdas rotuladas

Antes de pedir fórmulas, conviene repasar cómo se leen. Una planilla tiene columnas, nombradas con letras, y filas, numeradas. Cada celda se nombra por su columna y su fila: D2 es la columna D, fila 2. Un **rango** es un grupo de celdas, como C2:C7, que va de C2 a C7; la ayuda de Google lo llama intervalo [@F-M2-15]. Una fórmula siempre empieza con el signo =, y =D2*E2, por ejemplo, multiplica lo que hay en D2 por lo que hay en E2. Una **función** es una operación con nombre, como SUMAR.SI o BUSCARV, y lo que va entre sus paréntesis son sus argumentos.

En la ayuda de Google en español, los argumentos se separan con punto y coma: =SUMAR.SI(C2:C7;"EPP";F2:F7) [@F-M2-16]. Según la configuración regional de la planilla, el separador puede ser la coma. Un error común es copiar una fórmula que la IA entregó con comas en una planilla que usa punto y coma, o al revés. La fórmula no funciona aunque esté bien pensada, y no es un error de lógica, sino de escritura. Lo más simple es decirle al asistente desde el principio qué separador usa tu planilla.

:::comprueba
¿Qué hace la fórmula =D3*E3?
- a) Suma las columnas D y E completas
- **b) Multiplica el valor de la celda D3 por el de la celda E3**
- c) Busca el valor D3 en la columna E
Retroalimentación: La fórmula empieza con = y opera con dos celdas de la fila 3: las unidades de D3 por el precio de E3.
:::

## P03 · Tus datos de práctica
cubre: S3, H1
fuentes: F-M2-20
bloque: Tabla + actividad (copiar en la planilla)

Vas a trabajar con una tabla pequeña de datos de práctica: datos ficticios, pocos y conocidos, con los que puedes calcular a mano el resultado correcto. Así, cuando una fórmula dé un número, sabrás si está bien. Cópiala en una hoja nueva de Hojas de cálculo de Google desde la celda A1, y escribe los números sin punto de miles: 3500 y no 3.500. EPP significa elementos de protección personal.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Código | Producto | Categoría | Unidades | Precio unitario |
| 2 | P01 | Guantes de seguridad | EPP | 40 | 3500 |
| 3 | P02 | Casco | EPP | 12 | 9900 |
| 4 | P03 | Cinta de embalaje | Embalaje | 150 | 1200 |
| 5 | P04 | Caja mediana | Embalaje | 80 | 800 |
| 6 | P05 | Zapatos de seguridad | EPP | 8 | 24990 |
| 7 | P06 | Film stretch | Embalaje | 25 | 6500 |

Hay dos razones para no partir con la planilla real. La investigación sobre errores en planillas muestra que son comunes y no triviales [@F-M2-20], y probar primero con una tabla en que conoces las respuestas permite detectarlos antes de que lleguen a un informe. Además, una tabla ficticia evita pegar información de tu empresa en el chat. Cuando pases a tu planilla real, trabaja sobre una copia sin datos sensibles. Este método de datos de práctica es una recomendación del curso.

:::actividad Prepara tu planilla
1. Copia la tabla en una hoja nueva y nómbrala «Práctica M2».
2. Revisa celda por celda que cada valor quedó igual.
:::

## P04 · Referencias relativas, absolutas y mixtas
cubre: S1, C1
fuentes: F-M2-18, F-M2-15
bloque: Texto + imagen animada de una fórmula copiada hacia abajo

Cuando copias una fórmula a otra celda, sus referencias pueden moverse o quedarse fijas, y esa diferencia explica muchos errores. La referencia **relativa** es la predeterminada y cambia al copiar: si en F2 escribes =D2*E2 y la copias a F3, queda =D3*E3, que es justo lo que necesitas para cada producto. La referencia **absoluta** no cambia, porque el signo $ delante de la columna y de la fila la ancla: $D$2 sigue siendo D2 donde la copies. Entre ambas está la mixta, que fija solo la columna ($D2) o solo la fila (D$2). En Excel, la tecla F4 recorre los tres tipos [@F-M2-18].

La absoluta se usa cuando algo no debe moverse, como un rango que todas las fórmulas tienen que mirar completo. Mira qué pasa con una suma por categoría que se copia de I2 a I3:

| Fórmula en I2 | Al copiarla a I3 |
|---|---|
| =SUMAR.SI(C2:C7;H2;F2:F7) | =SUMAR.SI(C3:C8;H3;F3:F8): el rango se movió |
| =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7) | =SUMAR.SI($C$2:$C$7;H3;$F$2:$F$7): el rango quedó fijo |

En la segunda fórmula, H2 es relativa a propósito: cada fila del resumen tiene que mirar su propia categoría. La ayuda de Google recomienda lo mismo para BUSCARV, con referencias absolutas para que el intervalo no se mueva al copiar [@F-M2-15]. Antes de copiar cualquier fórmula, pregúntate qué debe moverse y qué no. Lo que no debe moverse lleva $.

## P05 · SUMAR.SI: sumar con una condición
cubre: S1, C1
fuentes: F-M2-16
bloque: Texto + ejemplo guiado

SUMAR.SI suma solo los valores que cumplen una condición. Su forma es =SUMAR.SI(intervalo; criterio; [intervalo_suma]). El intervalo es dónde se revisa la condición, por ejemplo, la columna de categorías. El criterio es la condición: si es texto, va entre comillas dobles, como "EPP", y si es un número puede llevar un operador, como ">100". El intervalo_suma es lo que se suma; va entre corchetes porque es opcional, y si no lo pones se suman las celdas del primer intervalo.

| Pregunta | Fórmula | Resultado |
|---|---|---|
| ¿Cuántas unidades de EPP hay? | =SUMAR.SI(C2:C7;"EPP";D2:D7) | 60 |
| ¿Cuántas unidades suman los productos con más de 100 unidades? | =SUMAR.SI(D2:D7;">100") | 150 |

Compruébalo a mano. Las unidades de EPP son 40 + 12 + 8 = 60, y el único producto con más de 100 unidades es la cinta, con 150.

SUMAR.SI admite un solo criterio [@F-M2-16]. Si necesitas dos condiciones a la vez, por ejemplo EPP y más de 10 unidades, hace falta otra función: pídesela a la IA diciendo que tienes dos condiciones, y compruébala igual.

:::error Criterio de texto sin comillas
=SUMAR.SI(C2:C7;EPP;D2:D7), sin comillas, no busca la palabra «EPP»: la planilla la interpreta de otra forma y el resultado falla. Los criterios de texto van entre comillas dobles.
:::

## P06 · BUSCARV: traer un dato de otra columna
cubre: S1, C1
fuentes: F-M2-15
bloque: Texto + ejemplo guiado

BUSCARV busca un valor en la primera columna de un rango y devuelve el valor de la misma fila en la columna que le indiques [@F-M2-15]. Sirve, por ejemplo, para escribir un código y obtener su precio. Su forma es =BUSCARV(valor_buscado; intervalo; índice; está_ordenado).

El valor_buscado es lo que buscas, como el código P05. El intervalo es la tabla donde buscar, y su primera columna tiene que ser la que contiene ese valor. El índice es el número de la columna del intervalo que quieres traer, contado desde la primera columna del intervalo y no desde la A de la hoja. En está_ordenado escribes FALSO para pedir una coincidencia exacta.

Con tus datos de práctica, =BUSCARV("P05";A2:E7;5;FALSO) devuelve 24990. El intervalo A2:E7 tiene cinco columnas: Código, Producto, Categoría, Unidades y Precio unitario, en ese orden. El índice 5 trae el precio; con índice 4 traería las unidades, que son 8.

La ayuda de Google destaca dos detalles. BUSCARV devuelve solo la primera coincidencia, así que si un código está repetido verás un solo resultado. Y si omites el último argumento, la función supone VERDADERO y busca una coincidencia aproximada, que exige que la primera columna esté ordenada; si no lo está, el resultado puede ser incorrecto. Por eso se recomienda escribir siempre FALSO [@F-M2-15].

:::comprueba
En =BUSCARV("P03";A2:E7;2;FALSO), ¿qué devuelve la fórmula?
- a) 150
- **b) Cinta de embalaje**
- c) Embalaje
Retroalimentación: El índice 2 trae la segunda columna del intervalo, que es Producto. Para las unidades, el índice sería 4.
:::

## P07 · Cómo pedirle una fórmula a la IA
cubre: S2
fuentes: F-M2-10, F-M2-15
bloque: Texto + imagen de un prompt con sus partes destacadas

La IA no ve tu planilla. Si pides «una fórmula para sumar los EPP», tiene que adivinar dónde están los datos. La documentación de los proveedores recomienda dar instrucciones específicas, con contexto de referencia y el formato de respuesta que esperas [@F-M2-10], y en una fórmula eso significa describir con precisión cómo está armada tu tabla:

| Dile… | Ejemplo |
|---|---|
| Qué programa usas y en qué idioma | «Hojas de cálculo de Google, en español» |
| Qué separador usa | «Usa punto y coma para separar argumentos» |
| Qué hay en cada columna y desde qué fila | «A: código; C: categoría; F: valor total; datos de la fila 2 a la 7» |
| Dónde va la fórmula y adónde la copiarás | «Va en I2 y la voy a copiar a I3» |
| Qué resultado esperas | «La suma del valor total de la categoría escrita en H2» |
| Cómo vienen los datos | «Puede haber espacios de más en los códigos» |
| Qué formato quieres | «Solo la fórmula y una explicación de cada argumento» |

Decir dónde va la fórmula y hacia dónde la vas a copiar le permite al asistente decidir qué referencias deben ser absolutas. Avisar si los datos pueden venir sucios también importa, porque un espacio de más o un número guardado como texto rompen las búsquedas [@F-M2-15]. Puedes pegar las primeras filas de tu tabla de práctica, que son ficticias; con tu planilla real, basta con los encabezados.

Todo eso cabe en una plantilla que puedes guardar en tu biblioteca de prompts: «Uso [programa] en español, con [separador] como separador. Mis datos están en [rango]: [qué hay en cada columna]. Necesito una fórmula para [resultado], que va en [celda] y que voy a copiar a [celdas]. Entrega la fórmula y explica cada argumento».

## P08 · Problema 1: el valor total de cada producto
cubre: H1, C1, S2
fuentes: F-M2-18, F-M2-08
bloque: Proceso paso a paso + actividad

Andrés necesita saber cuánto vale en pesos el stock de cada producto, es decir, las unidades por el precio unitario.

1. Pide la fórmula a Gemini: «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En la columna D tengo unidades y en la E, precio unitario, de la fila 2 a la 7. Necesito en la columna F el valor total de cada producto. La fórmula va en F2 y la copiaré hasta F7. Entrega la fórmula y explica cada parte».
2. Escribe en F1 el encabezado «Valor total».
3. Pega la fórmula en F2. La respuesta esperada es =D2*E2.
4. Cópiala hasta F7, arrastrando la esquina de la celda o con copiar y pegar.
5. Comprueba con un cálculo a mano al menos dos filas.

Para la fila 2, el cálculo es 40 × 3500 = 140000, y para la fila 6, 8 × 24990 = 199920. Estos son los resultados esperados en toda la columna:

| Fila | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Valor total | 140000 | 118800 | 180000 | 64000 | 199920 | 162500 |

Aquí la referencia relativa trabaja a tu favor: al copiar, cada fila multiplica sus propias celdas [@F-M2-18]. Si el asistente te da una fórmula escrita de otra manera, no la descartes de inmediato; léela, pídele que explique cada parte y compruébala con los resultados de la tabla [@F-M2-08].

:::actividad Revisa la copia
Haz clic en F5 y mira la fórmula en la barra de fórmulas. Tiene que decir =D5*E5; si dice otra cosa, la copia no se hizo bien. Revisar la fórmula, y no solo el resultado, es lo que hace la diferencia.
:::

## P09 · Verificar con datos de prueba
cubre: S3, C2, A1
fuentes: F-M2-20, F-M2-19
bloque: Proceso (process block) en 4 pasos

Comprobar una fórmula es más que mirar si el número se ve razonable. Este curso propone un método de cuatro pasos con datos de prueba:

1. Calcula a mano uno o dos casos; si la fórmula da otra cosa, hay un error.
2. Prueba un caso extremo: cambia por un momento un dato a 0 o deja una celda vacía, y mira si el resultado cambia como esperabas o si aparece un error.
3. Cambia un dato y observa. Si subes las unidades de P01 de 40 a 41, el valor total debería subir exactamente 3500; si no cambia, la fórmula no está mirando esa celda.
4. Revisa la fórmula celda por celda: haz clic en algunas celdas copiadas y lee si apuntan a las celdas correctas.

El último paso tiene respaldo en la investigación. Después de años de estudios sobre errores en planillas, la técnica que ha mostrado eficacia es la inspección celda por celda [@F-M2-20]. Los programas también ayudan: Excel, por ejemplo, marca las fórmulas que no siguen el patrón de sus vecinas, los rangos que omiten celdas con datos y las referencias a celdas vacías [@F-M2-19]. Después de cada prueba, devuelve los datos a su valor original. Esa costumbre de no aceptar un resultado que no comprobaste es lo que llamamos **rigor numérico**.

:::error «Si no aparece un mensaje de error, la fórmula está bien»
Los errores más peligrosos no muestran ningún aviso: entregan un número equivocado con buen aspecto. Un mensaje de error es fácil de ver; una suma que omite una fila, no.
:::

## P10 · Problema 2: una tabla resumen con SUMAR.SI
cubre: H1, C1
fuentes: F-M2-16, F-M2-18
bloque: Proceso paso a paso + actividad

La jefatura de Andrés quiere una tabla pequeña con el valor total del stock por categoría. Para armarla, escribe en H1 «Categoría» y en I1 «Valor total», y debajo, en H2 y H3, los nombres Embalaje y EPP.

1. Pide la fórmula a Gemini con la plantilla de la pantalla 7: «… En C tengo la categoría y en F el valor total, de la fila 2 a la 7. En H2 y H3 tengo los nombres de las categorías. Necesito en I2 la suma del valor total de la categoría de H2. Voy a copiar la fórmula a I3».
2. Pega la fórmula en I2 y cópiala a I3.
3. Calcula a mano los resultados esperados.
4. Compara, y aunque los dos coincidan, revisa la fórmula de I3: los rangos tienen que seguir siendo C2:C7 y F2:F7.

Los resultados esperados son 406500 para Embalaje (180000 + 64000 + 162500) y 458720 para EPP (140000 + 118800 + 199920). La fórmula que esperas es =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7), con los rangos fijos y la categoría relativa, porque al copiarla a I3 tiene que pasar a H3, la siguiente categoría [@F-M2-16; @F-M2-18]. Los rangos de datos, en cambio, no deben moverse.

:::actividad ¿Qué te propuso la IA?
Anota en tu bitácora la fórmula exacta que te dio Gemini y si usó el signo $ en los rangos. Si no lo usó, la siguiente pantalla te muestra qué puede pasar.
:::

## P11 · Error de referencia: el rango que se mueve
cubre: C2, S1
fuentes: F-M2-18, F-M2-15
bloque: Escenario + comparación antes y después

Supón que la IA te dio la fórmula sin el signo $: =SUMAR.SI(C2:C7;H2;F2:F7). En I2, para Embalaje, da 406500, que es correcto. Pero al copiarla a I3 se convierte en =SUMAR.SI(C3:C8;H3;F3:F8). El rango bajó una fila y dejó fuera la fila 2, que es un EPP, los guantes. El resultado es 318720 en vez de 458720.

Lo engañoso es que la primera fila del resumen está bien. Si solo compruebas I2, no ves el error, y el número de I3 parece razonable: ningún mensaje avisa. Por eso un error común es comprobar solo la primera celda. Los errores de referencia aparecen al copiar, así que siempre se revisa al menos una celda copiada y se lee su fórmula en la barra [@F-M2-18].

La corrección es fijar los rangos con $, para que no se muevan al copiar: =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7). La ayuda de Google recomienda lo mismo para BUSCARV, como viste en la pantalla 4 [@F-M2-15].

:::actividad Provoca el error y corrígelo
En tu hoja de práctica, escribe en I2 la fórmula sin $ y cópiala a I3. Comprueba que I3 da 318720 y no 458720. Luego corrige la fórmula con $, cópiala de nuevo y anota en tu bitácora la fórmula antes y después, y cómo detectaste el error.
:::

## P12 · Problema 3: buscar un precio con BUSCARV
cubre: H1, C1
fuentes: F-M2-15
bloque: Proceso paso a paso + actividad

Andrés quiere escribir un código en una celda y ver al lado el precio de ese producto, para responder rápido a ventas.

1. En K1 escribe «Código buscado», en L1 «Precio» y en K2 el código P05.
2. Pide la fórmula a Gemini: «Uso Hojas de cálculo de Google en español, con punto y coma. En A2:A7 tengo códigos de producto y en E2:E7, precios. Quiero que en L2 aparezca el precio del código que escribo en K2. Necesito coincidencia exacta. Entrega la fórmula y explica cada argumento».
3. Pega la fórmula en L2. La respuesta esperada es =BUSCARV(K2;$A$2:$E$7;5;FALSO).
4. Comprueba que el precio de P05 sea 24990, el mismo de la tabla.
5. Prueba otros códigos en K2: P01 tiene que dar 3500, P04 tiene que dar 800 y P09, que no existe, tiene que mostrar un error de valor no encontrado [@F-M2-15].

El código P09 es un dato de prueba a propósito: con él compruebas que la fórmula no inventa un precio cuando el código no está. La misma idea sirve en un registro de facturas como el de Camila, donde buscar un número de factura que no existe debería dar un error y no el monto de otra.

:::actividad Lee la explicación con lupa
Compara la explicación de Gemini con lo que viste en la pantalla 6. Revisa si dijo que el índice 5 corresponde a la quinta columna del intervalo y si explicó por qué el último argumento es FALSO. Anota cualquier parte de la explicación que no coincida.
:::

## P13 · Errores de lógica en BUSCARV
cubre: C2
fuentes: F-M2-15
bloque: Pestañas (tabs) con cuatro errores

Un **error de lógica** es una fórmula bien escrita que no hace lo que necesitas. Con BUSCARV hay cuatro frecuentes, y los cuatro aparecen en la ayuda de Google [@F-M2-15].

El primero es omitir el último argumento. =BUSCARV(K2;$A$2:$E$7;5) parece igual a la fórmula correcta, pero sin FALSO busca una coincidencia aproximada, y si la primera columna no está ordenada puede devolver el dato de otro producto sin avisar. No des por hecho que la IA siempre lo incluye: una fórmula sin FALSO puede funcionar con tus datos de práctica, que están ordenados, y fallar con otros. Revisa el último argumento cada vez.

El segundo es un índice mayor que las columnas del intervalo. =BUSCARV(K2;$A$2:$E$7;6;FALSO) pide la sexta columna, pero A:E tiene cinco, y el resultado es el error #REF!.

El tercero es contar el índice desde la A de la hoja. Si el intervalo empieza en B, como B2:E7, la columna B es la 1, y el índice 5 que en A2:E7 traía el precio ahora pide una columna que no existe en el intervalo.

El cuarto son los datos sucios. Si en la tabla el código quedó escrito «P05 », con un espacio al final, buscar «P05» no lo encuentra y aparece un error de valor no encontrado. También fallan los números o las fechas guardados como texto.

:::comprueba
=BUSCARV(K2;$A$2:$E$7;6;FALSO) muestra #REF!. ¿Qué lo corrige?
- a) Cambiar FALSO por VERDADERO
- **b) Usar un índice que exista en el intervalo, por ejemplo 5 para el precio**
- c) Quitar los signos $
Retroalimentación: El error #REF! aparece porque el índice 6 es mayor que las cinco columnas de A2:E7. El índice debe estar dentro del intervalo.
:::

## P14 · Leer los mensajes de error
cubre: S3, C2, H1
fuentes: F-M2-19, F-M2-15
bloque: Tabla + tarjetas (flashcards)

Cuando una fórmula falla de forma visible, la planilla muestra un valor de error. Cada uno da una pista de qué revisar, aunque los nombres cambian un poco entre programas [@F-M2-15; @F-M2-19]:

| Error | Qué suele significar | Qué revisar |
|---|---|---|
| #N/A en Sheets, #N/D en Excel | No se encontró el valor buscado | Si el valor existe, o si hay espacios de más o números como texto |
| #REF! | Una referencia no es válida, por ejemplo un índice mayor que las columnas del intervalo | El índice de BUSCARV y los rangos |
| #VALUE! en Sheets, #¡VALOR! en Excel | Se mezclan tipos de datos distintos, como texto donde se espera un número | Celdas con texto en una columna de números |
| #¡DIV/0! en Excel | Se está dividiendo por cero o por una celda vacía | La celda del divisor |
| #¿NOMBRE? en Excel | El nombre de la función está mal escrito | Que la función esté bien escrita, por ejemplo BUSCARV |

Puedes pegar el error en el chat y preguntar qué significa: «Mi fórmula =BUSCARV(K2;$A$2:$E$7;6;FALSO) da #REF!. ¿Por qué?». La explicación te orienta, pero la compruebas tú con la tabla. En Excel para Windows existe además «Evaluar fórmula», que muestra paso a paso cómo se calcula una fórmula anidada; no está disponible en el celular [@F-M2-19].

:::comprueba
Andrés escribe P02 en K2 y aparece #N/A. En la tabla, el código P02 existe. ¿Qué revisa primero?
- a) Que el índice no sea mayor que las columnas
- **b) Que el código de la tabla no tenga espacios de más o esté guardado de otra forma**
- c) Que la función esté bien escrita
Retroalimentación: #N/A indica que no encontró el valor. Si el código existe, lo más probable es que haya una diferencia invisible, como un espacio al final.
:::

## P15 · Filtros para revisar subconjuntos
cubre: H1, S3
fuentes: F-M2-17
bloque: Proceso paso a paso + actividad

Los **filtros** ocultan las filas que no quieres ver, sin borrarlas [@F-M2-17]. Sirven para trabajar con una parte de los datos y también para comprobar el resultado de una fórmula. En Hojas de cálculo de Google se crean así:

1. Selecciona tu tabla de datos, de A1 a F7.
2. Ve a Datos > Crear un filtro; aparece un ícono en cada encabezado.
3. En el encabezado Categoría, filtra por valores y deja marcado solo EPP.
4. Ahora ves solo los guantes, el casco y los zapatos.

Con el filtro puesto, suma a mano los valores totales visibles: 140000 + 118800 + 199920. Si da 458720, lo mismo que tu fórmula en I3, tienes dos caminos distintos que llegan al mismo número, y esa es una de las mejores defensas contra una fórmula que parece correcta. También puedes ordenar la tabla por una columna, por ejemplo por unidades de menor a mayor, para ver de inmediato qué productos tienen poco stock. Si necesitas mirar los datos de distintas formas, las vistas de filtro permiten guardar y compartir varios filtros [@F-M2-17]. Cuando termines, quita el filtro para volver a ver todas las filas.

:::actividad Dos caminos, un resultado
Filtra la categoría Embalaje y suma a mano los valores visibles. Compara con tu fórmula en I2 y anota en tu bitácora si coinciden y, si no, cuál de los dos caminos tenía el error.
:::

## P16 · Pide la explicación, pero no la creas a ciegas
cubre: S2, A2, C2
fuentes: F-M2-07, F-M2-08
bloque: Texto + escenario o conversación de ejemplo

Pedirle a la IA que explique cada argumento de la fórmula es una buena práctica: te ayuda a entenderla y a ver si apunta a lo que necesitas. Pero la explicación también es texto generado. Un modelo puede dar una respuesta errónea con seguridad, incluso con un razonamiento que parece lógico y que justifica la respuesta incorrecta [@F-M2-07], y los propios proveedores piden revisar lo que entregan sus asistentes [@F-M2-08]. Por eso la explicación se compara con lo que sabes:

| La IA dice… | Tú compruebas… |
|---|---|
| «El índice 4 trae el precio» | Cuentas las columnas del intervalo: la 4 es Unidades, no Precio |
| «Esta fórmula suma todos los EPP» | Filtras EPP y sumas a mano |
| «No hace falta el último argumento» | Recuerdas que sin FALSO la coincidencia es aproximada |

Una explicación ordenada no prueba que la fórmula sea correcta. Lo que lo prueba es que el resultado coincida con un cálculo que hiciste tú. A esa actitud se le llama **desconfianza metódica**: no rechazar la ayuda de la IA, pero no aceptar un resultado hasta comprobarlo.

:::ejemplo La explicación convincente
Andrés pidió una fórmula para el precio del código de K2. Gemini le dio =BUSCARV(K2;A2:E7;4;FALSO) y explicó que «el índice 4 corresponde al precio unitario». La explicación sonaba segura. Andrés probó con P05 y el resultado fue 8, las unidades. Contó las columnas, corrigió el índice a 5 y le avisó al asistente para que revisara su explicación.
:::

## P17 · Rigor numérico y desconfianza metódica
cubre: A1, A2
fuentes: F-M2-20, F-M1-02
bloque: Texto + lista de verificación (checklist)

Los errores en planillas son comunes y no triviales; así lo resume la investigación sobre el tema [@F-M2-20]. Cuando una planilla alimenta un pedido, un pago a un proveedor o un informe a la jefatura, un error se convierte en un problema real. Por eso el rigor numérico, que es cuidar que cada número sea exacto y que puedas explicar de dónde sale, va junto con la desconfianza metódica ante lo que propone la IA. Antes de usar una fórmula generada con IA, revisa esta lista:

- [ ] Le di a la IA el programa, el separador, las columnas, las filas y la celda de destino.
- [ ] Entiendo qué hace cada argumento de la fórmula.
- [ ] Calculé a mano al menos un caso y coincide.
- [ ] Revisé una celda copiada, y las referencias que no debían moverse tienen $.
- [ ] Probé un caso que no debería encontrarse o un dato en 0.
- [ ] Comprobé con un camino distinto, como un filtro.
- [ ] Revisé los avisos de error de la planilla.
- [ ] No pegué en el chat datos personales ni información confidencial: usé datos ficticios, una copia sin datos sensibles o solo los encabezados.

El último punto importa siempre, porque usar un asistente de IA casi siempre implica compartir con el proveedor lo que le escribes [@F-M1-02]. Si tu empresa tiene reglas sobre qué información se puede usar en estas herramientas, esas reglas mandan.

:::comprueba
Gemini le entrega a Andrés una fórmula y le dice que «está verificada». ¿Qué hace Andrés?
- a) La usa en la planilla real, porque el asistente la verificó
- **b) La prueba con sus datos de práctica antes de usarla**
- c) Pide otra fórmula a un segundo asistente y usa la que se repita
Retroalimentación: El asistente puede afirmar algo con seguridad y estar equivocado. La verificación la hace quien usa la fórmula, con datos de resultado conocido.
:::

## P18 · Cierre: resuelve un problema completo
cubre: C1, C2, H1
fuentes: F-M2-16, F-M2-15
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema pediste fórmulas a la IA con contexto concreto, las pegaste en Hojas de cálculo de Google y las comprobaste con datos de práctica. Trabajaste con referencias relativas y absolutas, SUMAR.SI, BUSCARV y filtros, y aprendiste a reconocer dos familias de errores: los de referencia, como el rango que se mueve o el índice fuera del intervalo, y los de lógica, como la coincidencia aproximada o los datos sucios [@F-M2-16; @F-M2-15].

Una fórmula correcta no es la que entrega la IA, sino la que tú comprobaste con datos de resultado conocido. Para cerrar, vas a resolver de principio a fin dos preguntas de la jefatura de Andrés. Si en tu trabajo llevas una planilla, después repite el ejercicio con una copia sin datos sensibles.

:::actividad Dos preguntas de la jefatura
La jefatura pregunta cuántas unidades hay en total de los productos que cuestan más de 5000 pesos, y cuántas unidades quedan del producto P03. Para cada pregunta, pide la fórmula a Gemini con la plantilla de la pantalla 7 y pégala en tu hoja de práctica. Calcula a mano el resultado esperado antes de mirar el de la fórmula, compara y, si no coinciden, encuentra el error y corrígelo. Anota en tu bitácora la fórmula final y cómo la comprobaste.

Resultados para comprobar: los productos con precio sobre 5000 son el casco (12), los zapatos (8) y el film (25), que suman 45 unidades; del P03 quedan 150 unidades.
:::

## Ideas clave

1. Las funciones de IA dentro de Sheets y Excel son de pago; la práctica gratuita es pedir la fórmula en el chat, pegarla en Hojas de cálculo de Google y comprobarla.
2. Una fórmula empieza con =, usa celdas y rangos, y separa sus argumentos con punto y coma o con coma según la configuración de la planilla.
3. Las referencias relativas cambian al copiar y las absolutas ($) no: lo que no debe moverse se fija con $.
4. SUMAR.SI suma con un criterio (texto entre comillas, números con operadores); BUSCARV busca en la primera columna y trae el valor de la columna indicada, y necesita FALSO para una coincidencia exacta.
5. Para pedir una fórmula, se le dice a la IA el programa, el separador, qué hay en cada columna, desde qué fila, dónde va la fórmula y si los datos pueden venir sucios.
6. Se verifica con datos de prueba: cálculo a mano, casos extremos, cambio de un dato, un camino distinto como un filtro y revisión celda por celda.
7. Los errores más peligrosos no muestran aviso: un rango desplazado o un índice equivocado entregan un número con buen aspecto.

## Referencias bibliográficas

- Google. (s. f.-a). *BUSCARV*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093318?hl=es
- Google. (s. f.-b). *Ordenar y filtrar tus datos*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3540681?hl=es
- Google. (s. f.-c). *Planes Google AI*. Google One. https://one.google.com/intl/es-419_cl/about/google-ai-plans/
- Google. (s. f.-d). *SUMAR.SI*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093583?hl=es
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- Microsoft. (s. f.-a). *Cambiar entre referencias relativas, absolutas y mixtas*. Microsoft Support. https://support.microsoft.com/es-es/office/cambiar-entre-referencias-relativas-absolutas-y-mixtas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- Microsoft. (s. f.-b). *Compara todos los planes y precios de Microsoft 365*. https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- Microsoft. (s. f.-c). *Detectar errores en las fórmulas*. Microsoft Support. https://support.microsoft.com/es-es/office/detectar-errores-en-las-fórmulas-3a8acca5-1d61-4702-80e0-99a36a2822c1
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Panko, R. R. (2000). *Spreadsheet errors: What we know. What we think we can do*. arXiv. https://arxiv.org/abs/0802.3457
