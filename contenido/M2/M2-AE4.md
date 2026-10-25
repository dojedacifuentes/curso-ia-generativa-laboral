# M2-AE4 · Planillas de cálculo con IA

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-49, F-H-20, F-M2-07
bloque: Texto + lista con viñetas

Las planillas de cálculo están en casi todos los trabajos: inventarios, ventas, asistencia, gastos. Escribir una fórmula puede costar
si no la usas seguido, y ahí la IA ayuda: le describes lo que necesitas y te propone la fórmula. El problema es que una fórmula
equivocada no avisa: entrega un número que parece correcto.

**Aprendizaje esperado:** Resolver análisis en planillas de cálculo con fórmulas generadas por IA, verificando su exactitud.

Al terminar, deberías poder:
- generar una fórmula correcta para el problema planteado;
- comprobar el resultado con datos de prueba y corregir los errores.

**Cómo vas a practicar, sin pagar.** Las funciones de IA que trabajan **dentro** de las planillas son de pago: Gemini en Hojas de
cálculo de Google requiere el plan Google AI Pro, y Copilot en Excel viene en los planes pagados de Microsoft 365. Por eso este tema
usa un camino gratuito: **pides la fórmula a Gemini en el chat, la pegas en Hojas de cálculo de Google (Google Sheets) y la compruebas
con datos de práctica.** Si usas Excel, los pasos son casi los mismos.

Trabajarás con la planilla de inventario de **Andrés**, con datos ficticios.

:::clave
En este tema, la IA propone y tú compruebas. Un asistente puede entregar una fórmula errónea con total seguridad, e incluso con una
explicación que parece lógica.
:::

## P02 · Cómo se arma una fórmula
cubre: S1
fuentes: F-M2-18, F-M2-16, F-M2-15
bloque: Texto + imagen de una planilla con celdas rotuladas

Antes de pedir fórmulas, repasa cómo se leen.

- Una planilla tiene **columnas** (letras: A, B, C) y **filas** (números: 1, 2, 3). Cada **celda** se nombra por su columna y su fila:
  **D2** es la columna D, fila 2.
- Un **rango** (la ayuda de Google lo llama intervalo) es un grupo de celdas: **C2:C7** va de C2 a C7.
- Una **fórmula** empieza con el signo **=**. Por ejemplo, **=D2*E2** multiplica lo que hay en D2 por lo que hay en E2.
- Una **función** es una operación con nombre, como **SUMAR.SI** o **BUSCARV**. Lo que va entre paréntesis son sus **argumentos**.

**El separador de argumentos.** En la ayuda de Google en español, los argumentos se separan con **punto y coma**:
=SUMAR.SI(C2:C7;"EPP";F2:F7). Según la configuración regional de la planilla, el separador puede ser **coma**. Si la IA te da una
fórmula con comas y la planilla marca error, cambia las comas por punto y coma, o al revés. Mejor aún: pídele desde el inicio el
separador que usa tu planilla.

:::error Copiar la fórmula con el separador equivocado
Algunas páginas de ayuda muestran las fórmulas con comas, y la IA también puede proponerlas así. Si tu planilla usa punto y coma, la fórmula no
funciona aunque esté bien pensada. No es un error de lógica: es de escritura.
:::

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

Vas a trabajar con una tabla pequeña de **datos de práctica**: datos ficticios, pocos y conocidos, con los que puedes calcular a mano
el resultado correcto. Así, cuando la fórmula dé un número, sabrás si está bien.

Abre una hoja nueva en Hojas de cálculo de Google y copia esta tabla desde la celda A1. **Escribe los números sin punto de miles**:
3500 y no 3.500.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **1** | Código | Producto | Categoría | Unidades | Precio unitario |
| **2** | P01 | Guantes de seguridad | EPP | 40 | 3500 |
| **3** | P02 | Casco | EPP | 12 | 9900 |
| **4** | P03 | Cinta de embalaje | Embalaje | 150 | 1200 |
| **5** | P04 | Caja mediana | Embalaje | 80 | 800 |
| **6** | P05 | Zapatos de seguridad | EPP | 8 | 24990 |
| **7** | P06 | Film stretch | Embalaje | 25 | 6500 |

EPP significa elementos de protección personal.

¿Por qué datos de práctica y no la planilla real? Porque la investigación sobre errores en planillas muestra que son comunes y no
triviales. Probar primero con una tabla en que conoces las respuestas es una forma de detectarlos antes de que lleguen a un informe.
Usar datos ficticios, además, evita pegar información de una empresa en el chat. Este método de datos de práctica es una
recomendación del curso.

:::actividad Prepara tu planilla
1. Copia la tabla en una hoja nueva.
2. Revisa celda por celda que cada valor quedó igual.
3. Nombra la hoja «Práctica M2».
:::

## P04 · Referencias relativas, absolutas y mixtas
cubre: S1, C1
fuentes: F-M2-18, F-M2-15
bloque: Texto + imagen animada de una fórmula copiada hacia abajo

Cuando copias una fórmula a otra celda, sus referencias pueden moverse o quedarse fijas. Esa diferencia explica muchos errores.

| Tipo | Cómo se escribe | Qué pasa al copiar hacia abajo |
|---|---|---|
| **Relativa** | D2 | Cambia: en la fila siguiente pasa a D3 |
| **Absoluta** | $D$2 | No cambia: sigue siendo D2 |
| **Mixta** | $D2 o D$2 | Fija solo la columna o solo la fila |

La referencia **relativa** es la predeterminada, y casi siempre es lo que quieres: si en F2 escribes =D2*E2 y la copias a F3, queda
=D3*E3, que es justo lo que necesitas para cada producto.

La **absoluta** se usa cuando algo **no debe moverse**: un rango que todas las fórmulas tienen que mirar completo, o una celda con un
valor fijo. El signo **$** delante de la columna y de la fila la ancla. En Excel, la tecla F4 recorre los tipos de referencia.

| Fórmula en I2 | Copiada a I3 |
|---|---|
| =SUMAR.SI(C2:C7;H2;F2:F7) | =SUMAR.SI(C3:C8;H3;F3:F8) ← el rango se movió |
| =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7) | =SUMAR.SI($C$2:$C$7;H3;$F$2:$F$7) ← el rango quedó fijo |

En la segunda fórmula, H2 es relativa a propósito: cada fila del resumen debe mirar su propia categoría.

:::clave
Pregúntate: al copiar esta fórmula, **¿qué debe moverse y qué no?** Lo que no debe moverse, lleva $.
:::

## P05 · SUMAR.SI: sumar con una condición
cubre: S1, C1
fuentes: F-M2-16
bloque: Texto + ejemplo guiado

**SUMAR.SI** suma solo los valores que cumplen una condición. Su forma es:

**=SUMAR.SI(intervalo; criterio; [intervalo_suma])**

- **intervalo:** dónde se revisa la condición. Por ejemplo, la columna de categorías.
- **criterio:** la condición. Si es texto, va **entre comillas dobles**: "EPP". Si es un número, puede llevar un operador: ">100".
- **intervalo_suma:** qué se suma. Es opcional (por eso va entre corchetes): si no lo pones, se suman las celdas del primer intervalo.

Ejemplos con tus datos de práctica:

| Pregunta | Fórmula | Resultado |
|---|---|---|
| ¿Cuántas unidades de EPP hay? | =SUMAR.SI(C2:C7;"EPP";D2:D7) | 60 |
| ¿Cuántas unidades hay de productos con más de 100 unidades? | =SUMAR.SI(D2:D7;">100") | 150 |

Compruébalo a mano: las unidades de EPP son 40 + 12 + 8 = 60. El único producto con más de 100 unidades es la cinta (150).

SUMAR.SI admite **un solo criterio**. Si necesitas dos condiciones a la vez (por ejemplo, EPP y más de 10 unidades), hace falta otra
función. Pídeselo a la IA diciendo que tienes dos condiciones, y compruébalo igual.

:::error Criterio de texto sin comillas
=SUMAR.SI(C2:C7;EPP;D2:D7), sin comillas, no busca la palabra «EPP»: la planilla la interpreta de otra forma y el resultado falla.
Los criterios de texto van entre comillas dobles.
:::

## P06 · BUSCARV: traer un dato de otra columna
cubre: S1, C1
fuentes: F-M2-15
bloque: Texto + ejemplo guiado

**BUSCARV** busca un valor en la **primera columna** de un rango y devuelve el valor de **la misma fila** en la columna que le
indiques. Sirve, por ejemplo, para escribir un código y obtener su precio.

**=BUSCARV(valor_buscado; intervalo; índice; está_ordenado)**

- **valor_buscado:** lo que buscas, por ejemplo el código P05.
- **intervalo:** la tabla donde buscar. Su primera columna debe ser la que contiene lo que buscas.
- **índice:** el número de la columna del intervalo que quieres traer. Se cuenta desde la primera columna del intervalo, no desde la
  A de la hoja.
- **está_ordenado:** escribe **FALSO** para una coincidencia exacta.

Con tus datos de práctica:

**=BUSCARV("P05";A2:E7;5;FALSO)** → 24990

El intervalo A2:E7 tiene cinco columnas: Código (1), Producto (2), Categoría (3), Unidades (4) y Precio unitario (5). El índice 5 trae
el precio. Con índice 4 traería las unidades: 8.

Dos detalles de la ayuda de Google que importan:
- BUSCARV devuelve **solo la primera coincidencia**. Si un código está repetido, verás un solo resultado.
- Si **omites** el último argumento, la función supone VERDADERO: busca una coincidencia **aproximada**, que exige que la primera
  columna esté ordenada. Si no lo está, el resultado puede ser incorrecto. La recomendación es usar FALSO.

:::comprueba
En =BUSCARV("P03";A2:E7;2;FALSO), ¿qué devuelve la fórmula?
- a) 150
- **b) Cinta de embalaje**
- c) Embalaje
Retroalimentación: El índice 2 trae la segunda columna del intervalo, que es Producto. Para las unidades, el índice sería 4.
:::

## P07 · Cómo pedirle una fórmula a la IA
cubre: S2
fuentes: F-M2-10, F-M2-08, F-M2-12, F-M2-15
bloque: Texto + imagen de un prompt con sus partes destacadas

La IA no ve tu planilla. Si pides «una fórmula para sumar los EPP», tiene que adivinar dónde están los datos. Para recibir una
fórmula que funcione a la primera, dale **contexto concreto** y pide un **formato de salida definido**:

| Dile… | Ejemplo |
|---|---|
| Qué programa usas y en qué idioma | «Hojas de cálculo de Google, en español» |
| Qué separador usa | «Usa punto y coma para separar argumentos» |
| Qué hay en cada columna y desde qué fila | «A: código; C: categoría; F: valor total; datos de la fila 2 a la 7» |
| Dónde va la fórmula | «La fórmula va en I2 y la voy a copiar a I3» |
| Qué resultado esperas | «La suma del valor total de la categoría escrita en H2» |
| Cómo vienen los datos | «Puede haber espacios de más en los códigos» |
| Qué formato quieres | «Solo la fórmula y una explicación de cada argumento» |

Entregar datos de referencia reduce las respuestas inventadas. Puedes pegar las primeras filas de tu tabla de práctica, que son
ficticias.

Avisar si los datos pueden venir «sucios» es importante: un espacio de más o un número guardado como texto rompen las búsquedas.

**Plantilla para pedir fórmulas:**
«Uso [programa] en español, con [separador] como separador. Mis datos están en [rango]: [qué hay en cada columna]. Necesito una
fórmula para [resultado], que va en [celda] y que voy a copiar a [celdas]. Entrega la fórmula y explica cada argumento.»

:::clave
Decir dónde va la fórmula y hacia dónde la vas a copiar le permite a la IA decidir qué referencias deben ser absolutas.
:::

## P08 · Problema 1: el valor total de cada producto
cubre: H1, C1, S2
fuentes: F-M2-18, F-M2-08
bloque: Proceso paso a paso + actividad

**Problema:** Andrés necesita saber cuánto vale en pesos el stock de cada producto. Valor total = unidades × precio unitario.

1. **Pide la fórmula a Gemini:** «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En la columna D tengo
   unidades y en la E, precio unitario, de la fila 2 a la 7. Necesito en la columna F el valor total de cada producto. La fórmula va en
   F2 y la copiaré hasta F7. Entrega la fórmula y explica cada parte».
2. **Escribe en F1** el encabezado «Valor total».
3. **Pega la fórmula en F2.** La respuesta esperada es =D2*E2.
4. **Cópiala hasta F7**, arrastrando la esquina de la celda o con copiar y pegar.
5. **Comprueba con un cálculo a mano** al menos dos filas:
   - Fila 2: 40 × 3500 = 140000.
   - Fila 6: 8 × 24990 = 199920.

**Resultados esperados:**

| Fila | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Valor total | 140000 | 118800 | 180000 | 64000 | 199920 | 162500 |

:::actividad Revisa la copia
Haz clic en F5 y mira la fórmula en la barra de fórmulas. ¿Dice =D5*E5? Si dice otra cosa, la copia no se hizo bien. Esta
revisión de la fórmula, y no solo del resultado, es la que hace la diferencia.
:::

## P09 · Verificar con datos de prueba
cubre: S3, C2, A1
fuentes: F-M2-20, F-M2-19, F-M2-12
bloque: Proceso (process block) en 4 pasos

Comprobar una fórmula es más que mirar si «el número se ve razonable». Este curso propone un método de cuatro pasos con datos de
prueba:

1. **Calcula a mano uno o dos casos.** Si la fórmula da otra cosa, hay un error.
2. **Prueba un caso extremo.** Cambia temporalmente un dato a 0 o deja una celda vacía y mira qué pasa. ¿El resultado cambia como
   esperabas?, ¿aparece un error?
3. **Cambia un dato y observa.** Si cambias las unidades de P01 de 40 a 41, el valor total debería subir exactamente 3500. Si no cambia,
   la fórmula no está mirando esa celda.
4. **Revisa la fórmula celda por celda.** Haz clic en algunas celdas copiadas y lee la fórmula: ¿apunta a las celdas correctas?

El último paso tiene respaldo en la investigación: después de años de estudios sobre errores en planillas, la técnica que ha mostrado
eficacia es la **inspección celda por celda**. Las planillas también ayudan: Excel, por ejemplo, marca fórmulas que no siguen el
patrón de sus vecinas, rangos que omiten celdas con datos y referencias a celdas vacías.

Recuerda devolver los datos a su valor original después de cada prueba.

:::clave
**Rigor numérico** es no aceptar un resultado que no comprobaste. La IA también lo dice: aun con buenas instrucciones, hay que
validar sus respuestas.
:::

:::error «Si no aparece un mensaje de error, la fórmula está bien»
Los errores más peligrosos no muestran ningún aviso: entregan un número equivocado con buen aspecto. Un mensaje de error es fácil de
ver; una suma que omite una fila, no.
:::

## P10 · Problema 2: una tabla resumen con SUMAR.SI
cubre: H1, C1
fuentes: F-M2-16, F-M2-18
bloque: Proceso paso a paso + actividad

**Problema:** la jefatura de Andrés quiere una tabla pequeña con el valor total del stock por categoría.

1. **Arma la tabla resumen** en tu hoja de práctica:

| | H | I |
|---|---|---|
| **1** | Categoría | Valor total |
| **2** | Embalaje | |
| **3** | EPP | |

2. **Pide la fórmula a Gemini** con la plantilla de la pantalla 7: «… En C tengo la categoría y en F el valor total, de la fila 2 a la
   7. En H2 y H3 tengo los nombres de las categorías. Necesito en I2 la suma del valor total de la categoría de H2. Voy a copiar la
   fórmula a I3».
3. **Pega la fórmula en I2 y cópiala a I3.**
4. **Calcula a mano** los resultados esperados:
   - Embalaje: 180000 + 64000 + 162500 = **406500**.
   - EPP: 140000 + 118800 + 199920 = **458720**.
5. **Compara.** Si los dos coinciden, revisa además la fórmula de I3: ¿los rangos siguen siendo C2:C7 y F2:F7?

La respuesta esperada es =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7), con los rangos fijos y la categoría relativa.

:::actividad ¿Qué te propuso la IA?
Anota en tu bitácora la fórmula exacta que te dio Gemini. ¿Usó el signo $ en los rangos? Si no lo usó, la siguiente pantalla te
muestra qué puede pasar.
:::

:::comprueba
¿Por qué H2 no lleva el signo $ en la fórmula del resumen?
- a) Porque el signo $ no funciona con texto
- **b) Porque al copiar a I3 debe pasar a H3, la siguiente categoría**
- c) Porque es un error que hay que corregir
Retroalimentación: La categoría debe cambiar en cada fila del resumen. Los rangos de datos, en cambio, deben quedar fijos.
:::

## P11 · Error de referencia: el rango que se mueve
cubre: C2, S1
fuentes: F-M2-18, F-M2-15, F-M2-19
bloque: Escenario + comparación antes y después

Supón que la IA te dio la fórmula sin el signo $: =SUMAR.SI(C2:C7;H2;F2:F7).

- En **I2** (Embalaje) da **406500**. Correcto.
- Copiada a **I3**, la fórmula se convierte en =SUMAR.SI(C3:C8;H3;F3:F8). El rango bajó una fila: dejó fuera la fila 2, que es un EPP
  (los guantes). El resultado es **318720** en vez de **458720**.

Lo engañoso es que **la primera fila del resumen está bien**. Si solo compruebas I2, no ves el error. Y el número de I3 parece
razonable: no hay ningún mensaje que avise.

**La corrección:** fijar los rangos con $ para que no se muevan al copiar: =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7). La ayuda de Google
recomienda lo mismo para BUSCARV: usar referencias absolutas para que el intervalo no se mueva al copiar.

:::actividad Provoca el error y corrígelo
En tu hoja de práctica, escribe en I2 la fórmula sin $ y cópiala a I3. Comprueba que I3 da 318720 y no 458720. Luego corrige la
fórmula con $, cópiala de nuevo y anota en tu bitácora la fórmula antes y después, y cómo detectaste el error.
:::

:::error Comprobar solo la primera celda
Los errores de referencia aparecen al copiar. Por eso se comprueba al menos una celda copiada, no solo la primera, y se lee su
fórmula en la barra.
:::

:::comprueba
Andrés copió una fórmula de SUMAR.SI y la última fila del resumen da un total menor que el esperado. ¿Cuál es la causa más probable?
- a) El criterio de texto está mal escrito
- **b) El rango era relativo y se desplazó al copiar, dejando fuera filas con datos**
- c) La planilla tiene un error de cálculo
Retroalimentación: Un rango relativo baja con cada fila copiada y omite las primeras filas de datos. Se corrige con referencias
absolutas ($).
:::

## P12 · Problema 3: buscar un precio con BUSCARV
cubre: H1, C1
fuentes: F-M2-15
bloque: Proceso paso a paso + actividad

**Problema:** Andrés quiere escribir un código en una celda y ver al lado el precio de ese producto, para responder rápido a ventas.

1. **Prepara las celdas:** en K1 escribe «Código buscado» y en L1 «Precio». En K2 escribe **P05**.
2. **Pide la fórmula a Gemini:** «Uso Hojas de cálculo de Google en español, con punto y coma. En A2:A7 tengo códigos de producto y
   en E2:E7, precios. Quiero que en L2 aparezca el precio del código que escribo en K2. Necesito coincidencia exacta. Entrega la
   fórmula y explica cada argumento».
3. **Pega la fórmula en L2.** La respuesta esperada es =BUSCARV(K2;$A$2:$E$7;5;FALSO).
4. **Comprueba con tus datos:** el precio de P05 en la tabla es 24990. ¿Coincide?
5. **Prueba otros códigos** en K2:
   - P01 → debe dar 3500.
   - P04 → debe dar 800.
   - P09 → no existe: debe aparecer un error de valor no encontrado.

El caso P09 es un **dato de prueba** a propósito: compruebas que la fórmula no inventa un precio cuando el código no está.

:::actividad Lee la explicación con lupa
Compara la explicación de Gemini con lo que viste en la pantalla 6. ¿Dijo que el índice 5 corresponde a la quinta columna del
intervalo? ¿Explicó por qué el último argumento es FALSO? Anota si algo de la explicación no coincide.
:::

## P13 · Errores de lógica en BUSCARV
cubre: C2
fuentes: F-M2-15
bloque: Pestañas (tabs) con cuatro errores

Un **error de lógica** es una fórmula que está bien escrita, pero que no hace lo que necesitas. Estos son frecuentes con BUSCARV:

**1. Omitir el último argumento.** =BUSCARV(K2;$A$2:$E$7;5) parece igual, pero sin FALSO la función busca una coincidencia aproximada.
Si la primera columna no está ordenada, puede devolver el dato de otro producto sin avisar.

**2. Índice mayor que las columnas del intervalo.** =BUSCARV(K2;$A$2:$E$7;6;FALSO) pide la sexta columna, pero el intervalo A:E tiene
cinco. Resultado: error #REF!.

**3. Contar el índice desde la A de la hoja.** Si el intervalo empieza en B (B2:E7), la columna B es la 1. Con el índice 5, que en A2:E7
traía el precio, ahora pides una columna que no existe en el intervalo.

**4. Datos sucios.** Si en la tabla el código quedó escrito «P05 » (con un espacio al final), buscar «P05» no lo encuentra y aparece
un error de valor no encontrado. También fallan los números o las fechas guardados como texto.

:::error «La IA siempre pone el último argumento»
No siempre. Una fórmula sin FALSO puede funcionar con tus datos de práctica, si están ordenados, y fallar con otros. Revisa el último
argumento cada vez.
:::

:::comprueba
=BUSCARV(K2;$A$2:$E$7;6;FALSO) muestra #REF!. ¿Qué lo corrige?
- a) Cambiar FALSO por VERDADERO
- **b) Usar un índice que exista en el intervalo, por ejemplo 5 para el precio**
- c) Quitar los signos $
Retroalimentación: El error #REF! aparece porque el índice 6 es mayor que las cinco columnas de A2:E7. El índice debe estar dentro del
intervalo.
:::

## P14 · Leer los mensajes de error
cubre: S3, C2, H1
fuentes: F-M2-19, F-M2-15
bloque: Tabla + tarjetas (flashcards)

Cuando una fórmula falla de forma visible, la planilla muestra un **valor de error**. Cada uno da una pista de qué revisar. Los
nombres cambian un poco entre programas:

| Error | Qué suele significar | Qué revisar |
|---|---|---|
| **#N/A** en Sheets, **#N/D** en Excel | No se encontró el valor buscado | ¿Existe el valor?, ¿hay espacios de más o números como texto? |
| **#REF!** | Una referencia no es válida, por ejemplo un índice mayor que las columnas del intervalo | El índice de BUSCARV y los rangos |
| **#VALUE!** en Sheets, **#¡VALOR!** en Excel | Se mezclan tipos de datos distintos, como texto donde se espera un número | Celdas con texto en una columna de números |
| **#¡DIV/0!** en Excel | Se está dividiendo por cero o por una celda vacía | La celda del divisor |
| **#¿NOMBRE?** en Excel | El nombre de la función está mal escrito | Que el nombre de la función esté bien escrito, por ejemplo BUSCARV |

Puedes pegar el error en el chat y preguntar qué significa: «Mi fórmula =BUSCARV(K2;$A$2:$E$7;6;FALSO) da #REF!. ¿Por qué?». La
explicación te orienta, pero la compruebas tú con la tabla.

En Excel para Windows existe además «Evaluar fórmula», que muestra paso a paso cómo se calcula una fórmula anidada. No está en el
celular.

:::comprueba
Andrés escribe P02 en K2 y aparece #N/A. En la tabla, el código P02 existe. ¿Qué revisa primero?
- a) Que el índice no sea mayor que las columnas
- **b) Que el código de la tabla no tenga espacios de más o esté guardado de otra forma**
- c) Que la función esté bien escrita
Retroalimentación: #N/A indica que no encontró el valor. Si el código existe, lo más probable es que haya una diferencia invisible,
como un espacio al final.
:::

## P15 · Filtros para revisar subconjuntos
cubre: H1, S3
fuentes: F-M2-17
bloque: Proceso paso a paso + actividad

Los **filtros** ocultan las filas que no quieres ver, sin borrarlas. Sirven para trabajar con una parte de los datos y también para
**comprobar** el resultado de una fórmula.

En Hojas de cálculo de Google:
1. Selecciona tu tabla de datos, de A1 a F7.
2. Ve a **Datos > Crear un filtro**. Aparece un ícono en cada encabezado.
3. En el encabezado **Categoría**, filtra por valores y deja marcado solo **EPP**.
4. Ahora ves solo los guantes, el casco y los zapatos.

**Úsalo para verificar:** con el filtro puesto, suma a mano los valores totales visibles: 140000 + 118800 + 199920. ¿Da 458720, lo
mismo que tu fórmula en I3? Si coincide, tienes dos caminos distintos que llegan al mismo número.

También puedes **ordenar** la tabla por una columna, por ejemplo por unidades de menor a mayor, para ver de inmediato qué productos
tienen poco stock. Y si necesitas mirar los datos de distintas formas, las vistas de filtro permiten guardar y compartir varios
filtros.

Cuando termines, quita el filtro para volver a ver todas las filas.

:::actividad Dos caminos, un resultado
Filtra la categoría Embalaje y suma a mano los valores visibles. Compara con tu fórmula en I2. Anota en tu bitácora si coinciden y,
si no, cuál de los dos caminos tenía el error.
:::

:::clave
Comprobar un resultado por un **camino distinto** (a mano, con un filtro) es una de las mejores defensas contra una fórmula que
parece correcta.
:::

## P16 · Pide la explicación, pero no la creas a ciegas
cubre: S2, A2, C2
fuentes: F-M2-07, F-M2-08, F-M2-12
bloque: Texto + escenario o conversación de ejemplo

Pedirle a la IA que **explique cada argumento** de la fórmula es una buena práctica: te ayuda a entenderla y a detectar si apunta a
lo que necesitas. Pero la explicación también es texto generado. Un modelo puede dar una respuesta errónea con seguridad, incluso con
un razonamiento que parece lógico y que justifica la respuesta incorrecta.

Por eso la explicación se compara con lo que sabes:

| La IA dice… | Tú compruebas… |
|---|---|
| «El índice 4 trae el precio» | Cuentas las columnas del intervalo: la 4 es Unidades, no Precio |
| «Esta fórmula suma todos los EPP» | Filtras EPP y sumas a mano |
| «No hace falta el último argumento» | Recuerdas que sin FALSO la coincidencia es aproximada |

:::ejemplo La explicación convincente
Andrés pidió una fórmula para el precio del código de K2. Gemini le dio =BUSCARV(K2;A2:E7;4;FALSO) y explicó que «el índice 4
corresponde al precio unitario». La explicación sonaba segura. Andrés probó con P05: el resultado fue 8, las unidades. Contó las
columnas, corrigió el índice a 5 y le avisó al asistente para que revisara su explicación.
:::

:::error «Si la IA lo explica con lógica, la fórmula está bien»
Una explicación ordenada no prueba que la fórmula sea correcta. Lo que lo prueba es que el resultado coincida con un cálculo que
hiciste tú. **Desconfianza metódica** es no aceptar un resultado hasta comprobarlo.
:::

## P17 · Rigor numérico y desconfianza metódica
cubre: A1, A2
fuentes: F-M2-20, F-M2-19, F-M2-07, F-M1-02
bloque: Texto + lista de verificación (checklist)

Los errores en planillas son comunes y no triviales: así lo resume la investigación sobre el tema. Cuando una planilla alimenta un
pedido, un pago o un informe a la jefatura, un error se convierte en un problema real. Por eso estas dos actitudes van juntas:

**Rigor numérico:** cuidar que cada número sea exacto y que puedas explicar de dónde sale.
**Desconfianza metódica:** no rechazar la ayuda de la IA, sino comprobar todo lo que propone antes de usarlo.

Tu lista antes de usar una fórmula generada con IA:
- [ ] Le di a la IA el programa, el separador, las columnas, las filas y la celda de destino.
- [ ] Entiendo qué hace cada argumento de la fórmula.
- [ ] Calculé a mano al menos un caso y coincide.
- [ ] Revisé una celda copiada: las referencias que no debían moverse tienen $.
- [ ] Probé un caso que no debería encontrarse o un dato en 0.
- [ ] Comprobé con un camino distinto, como un filtro.
- [ ] Revisé los avisos de error de la planilla.
- [ ] No pegué en el chat datos personales ni información confidencial: usé datos ficticios o solo los encabezados.

El último punto importa siempre: usar un asistente de IA implica compartir con el proveedor lo que le escribes.

:::comprueba
Gemini le entrega a Andrés una fórmula y le dice que «está verificada». ¿Qué hace Andrés?
- a) La usa en la planilla real, porque el asistente la verificó
- **b) La prueba con sus datos de práctica antes de usarla**
- c) Pide otra fórmula a un segundo asistente y usa la que se repita
Retroalimentación: El asistente puede afirmar algo con seguridad y estar equivocado. La verificación la hace quien usa la fórmula,
con datos de resultado conocido.
:::

## P18 · Cierre: resuelve un problema completo
cubre: C1, C2, H1
fuentes: F-M2-16, F-M2-15, F-M2-18
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema pediste fórmulas a la IA con contexto concreto, las pegaste en Hojas de cálculo de Google y las **comprobaste con datos
de práctica**. Trabajaste con referencias relativas y absolutas, SUMAR.SI, BUSCARV y filtros, y aprendiste a reconocer **errores de
referencia** (el rango que se mueve, el índice fuera del intervalo) y **errores de lógica** (la coincidencia aproximada, los datos
sucios).

:::actividad Dos preguntas de la jefatura
La jefatura de Andrés pregunta:
1. **¿Cuántas unidades hay en total de los productos que cuestan más de 5000 pesos?**
2. **¿Cuántas unidades quedan del producto P03?**

Para cada pregunta:
- pide la fórmula a Gemini con la plantilla de la pantalla 7;
- pégala en tu hoja de práctica;
- calcula a mano el resultado esperado antes de mirar el de la fórmula;
- compara y, si no coinciden, encuentra el error y corrígelo;
- anota en tu bitácora la fórmula final y cómo la comprobaste.

Resultados para comprobar: 1) productos con precio sobre 5000: casco (12), zapatos (8) y film (25): **45 unidades**. 2) P03:
**150 unidades**.
:::

:::clave
Una fórmula correcta no es la que entrega la IA: es la que tú comprobaste con datos de resultado conocido.
:::

## Ideas clave

1. Las funciones de IA dentro de Sheets y Excel son de pago; la práctica gratuita es pedir la fórmula en el chat, pegarla en Hojas de
   cálculo de Google y comprobarla.
2. Una fórmula empieza con =, usa celdas y rangos, y separa sus argumentos con punto y coma o con coma según la configuración de la
   planilla.
3. Las referencias relativas cambian al copiar y las absolutas ($) no: lo que no debe moverse se fija con $.
4. SUMAR.SI suma con un criterio (texto entre comillas, números con operadores); BUSCARV busca en la primera columna y trae el valor
   de la columna indicada, y necesita FALSO para una coincidencia exacta.
5. Para pedir una fórmula, se le dice a la IA el programa, el separador, qué hay en cada columna, desde qué fila, dónde va la fórmula
   y si los datos pueden venir sucios.
6. Se verifica con datos de prueba: cálculo a mano, casos extremos, cambio de un dato, un camino distinto como un filtro y revisión
   celda por celda.
7. Los errores más peligrosos no muestran aviso: un rango desplazado o un índice equivocado entregan un número con buen aspecto.

## Glosario

- **Celda**: casilla de una planilla, nombrada por su columna y su fila, como D2.
- **Rango**: grupo de celdas, como C2:C7. La ayuda de Google lo llama intervalo.
- **Fórmula**: instrucción que empieza con = y calcula un resultado a partir de valores o celdas.
- **Función**: operación con nombre dentro de una fórmula, como SUMAR.SI o BUSCARV.
- **Argumento**: cada dato que recibe una función entre sus paréntesis.
- **Separador de argumentos**: signo que separa los argumentos de una función; punto y coma o coma, según la configuración regional.
- **Referencia relativa**: referencia a una celda que cambia al copiar la fórmula, como D2.
- **Referencia absoluta**: referencia fija, marcada con $, que no cambia al copiar, como $D$2.
- **Referencia mixta**: referencia que fija solo la columna ($D2) o solo la fila (D$2).
- **SUMAR.SI**: función que suma los valores que cumplen un criterio.
- **BUSCARV**: función que busca un valor en la primera columna de un rango y devuelve el valor de otra columna de la misma fila.
- **Datos de práctica**: tabla pequeña de datos ficticios con resultados conocidos, usada para comprobar fórmulas.
- **Filtro (en una planilla)**: herramienta que oculta las filas que no cumplen una condición, sin borrarlas.
- **Datos sucios**: datos con diferencias invisibles, como espacios de más o números guardados como texto, que hacen fallar las
  fórmulas.

## Conexión con el proyecto

El **Hito 2 del proyecto aplicado: brief del proyecto + presentación de 6 láminas** se apoya en los temas 1 y 3, pero este tema te
sirve si tu problema tiene números. Si una de tus láminas muestra un dato (pedidos atrasados, consultas atendidas, gastos del mes),
calcúlalo en una planilla, compruébalo con el método de la pantalla 9 y anota de dónde sale. Así tu presentación solo tendrá cifras
que puedes defender. En el **caso M2-C2** analizarás cómo equipos de una empresa usan un asistente de IA en documentos, presentaciones
y planillas.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M2.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-1.md`
(consultadas el 24-10-2026).

- F-M2-07 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M2-08 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Microsoft Copilot. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- F-M2-10 · Google AI for Developers (2026). Prompt design strategies. https://ai.google.dev/gemini-api/docs/prompting-strategies
- F-M2-12 · Microsoft Learn (2026). Técnicas de ingeniería de indicaciones. https://learn.microsoft.com/es-es/azure/ai-foundry/openai/concepts/prompt-engineering
- F-M2-15 · Google, Ayuda de Editores de Documentos (s. f.). BUSCARV. https://support.google.com/docs/answer/3093318?hl=es
- F-M2-16 · Google, Ayuda de Editores de Documentos (s. f.). SUMAR.SI. https://support.google.com/docs/answer/3093583?hl=es
- F-M2-17 · Google, Ayuda de Editores de Documentos (s. f.). Ordenar y filtrar tus datos. https://support.google.com/docs/answer/3540681?hl=es
- F-M2-18 · Microsoft Support (s. f.). Cambiar entre referencias relativas, absolutas y mixtas. https://support.microsoft.com/es-es/office/cambiar-entre-referencias-relativas-absolutas-y-mixtas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- F-M2-19 · Microsoft Support (s. f.). Detectar errores en las fórmulas. https://support.microsoft.com/es-es/office/detectar-errores-en-las-fórmulas-3a8acca5-1d61-4702-80e0-99a36a2822c1
- F-M2-20 · Panko, R. R. (2000). Spreadsheet Errors: What We Know. What We Think We Can Do. https://arxiv.org/abs/0802.3457
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-H-20 · Microsoft (s. f.). Compara todos los planes y precios de Microsoft 365 (Chile). https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- F-H-49 · Google (s. f.). Planes Google AI (Google One, Chile). https://one.google.com/intl/es-419_cl/about/google-ai-plans/
