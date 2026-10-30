# Actividades de aplicación práctica · M2-AE4 · Planillas de cálculo con IA

## Actividad 1 · Las facturas pendientes de Camila
cubre: H1, C1
fuentes: F-M2-16, F-M2-15
entrega: foro

### Instrucción general

En esta actividad vas a pedirle a Gemini dos fórmulas para la planilla de facturas de Camila, aplicarlas y comprobar que dan el resultado correcto. Publicas tu trabajo en el foro de la actividad, con una captura o una copia de la hoja y tu bitácora en el mensaje o en un adjunto. Como la tabla es ficticia, tu aporte lo pueden leer el facilitador y el resto del curso. Se evalúa con la rúbrica de abajo y el facilitador te responde en el foro dentro de 24 horas hábiles.

### Situación

La gerenta de administración le pregunta a Camila cuánto dinero suman las facturas que todavía están pendientes de pago, y además quiere poder escribir un número de factura y ver su monto al lado. Camila lleva el registro en una planilla. Para practicar sin exponer datos de la constructora, vas a usar esta tabla ficticia. Cópiala en una hoja nueva de Hojas de cálculo de Google desde la celda A1, con los montos sin punto de miles.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Factura | Proveedor | Tipo | Monto | Estado |
| 2 | 1101 | Áridos del Sur | Materiales | 850000 | Pagada |
| 3 | 1102 | Ferretería Central | Materiales | 120000 | Pendiente |
| 4 | 1103 | Hormigones Norte | Materiales | 2300000 | Pendiente |
| 5 | 1104 | Aseo Total | Servicios | 95000 | Pagada |
| 6 | 1105 | Transportes Lira | Servicios | 410000 | Pendiente |
| 7 | 1106 | Ferretería Central | Materiales | 64000 | Pagada |

### Lo que vas a hacer

Vas a pedirle a Gemini dos fórmulas, aplicarlas y comprobar que son correctas antes de dárselas por buenas a la gerenta. Ten presentes dos detalles: en SUMAR.SI, un criterio de texto escrito en la fórmula va entre comillas dobles [@F-M2-16], y en BUSCARV el último argumento tiene que ser FALSO para pedir una coincidencia exacta [@F-M2-15].

1. Escribe en G1 «Estado» y en H1 «Monto total», y debajo, en G2 y G3, las palabras Pendiente y Pagada.
2. Calcula a mano cuánto suman las facturas de cada estado y anótalo en tu bitácora antes de pedir nada.
3. Pide a Gemini la fórmula para H2. Dile el programa, el separador, qué hay en cada columna, desde qué fila, que la fórmula va en H2 y que la vas a copiar a H3.
4. Pega la fórmula en H2, cópiala a H3 y compara los dos resultados con tu cálculo. Haz clic en H3 y revisa en la barra que los rangos sigan siendo E2:E7 y D2:D7.
5. Escribe en J1 «Factura buscada», en K1 «Monto» y en J2 el número 1105. Pide la fórmula para que K2 muestre el monto de la factura escrita en J2, con coincidencia exacta.
6. Prueba en J2 los números 1105, 1102 y 1110. Este último no existe, y la fórmula tiene que mostrar un error de valor no encontrado en vez de un monto.
7. Crea un filtro en la tabla, deja visible solo el estado Pendiente y suma a mano los montos que quedan a la vista.

Los resultados que debes obtener son 2830000 para Pendiente y 1009000 para Pagada. La factura 1105 tiene que dar 410000 y la 1102, 120000. La suma de los montos visibles con el filtro tiene que ser igual a la de H2.

### Lo que entregas

Publicas en el foro de la actividad una captura o una copia de la hoja con las dos fórmulas funcionando y, en tu bitácora, la fórmula exacta que propuso Gemini para cada problema, tu cálculo a mano y el resultado de cada prueba. Si tuviste que corregir una fórmula, anota cómo era antes y cómo quedó.

### Rúbrica

| Criterio | Peso | Logrado (100 %) | Parcial (60 %) | No logrado (0 %) |
|---|---|---|---|---|
| Genera una fórmula correcta para el problema planteado: suma por estado | 35 % | La fórmula de H2 usa SUMAR.SI, los rangos no se mueven al copiarla, la celda del estado sí cambia, y en H2 y H3 da los totales correctos. | La fórmula da el total correcto en una celda, pero falla al copiarla o hubo que escribirla a mano en cada celda. | La fórmula no da los totales correctos o no usa una función de suma con condición. |
| Genera una fórmula correcta para el problema planteado: búsqueda | 30 % | La fórmula de K2 usa BUSCARV con la columna del monto y coincidencia exacta; devuelve el monto correcto y un error con la factura que no existe. | La fórmula devuelve montos correctos, pero con la factura que no existe muestra un monto en vez de un error. | La fórmula no devuelve los montos correctos. |
| Comprobación en la bitácora | 25 % | La bitácora tiene el cálculo a mano hecho antes de pedir, la prueba de cada fórmula con resultados conocidos y con la factura que no existe, la revisión de los rangos en H3 y la suma con el filtro. | Falta alguna de las pruebas o el cálculo a mano. | No hay pruebas registradas. |
| Registro de las fórmulas | 10 % | Anota la fórmula exacta que propuso Gemini para cada problema y, si corregiste alguna, cómo era antes y cómo quedó. | Falta una de las fórmulas o la corrección no muestra el antes y el después. | No registra las fórmulas. |

La actividad se aprueba con 60 % o más.

## Actividad 2 · Una fórmula para tu planilla, comprobada
cubre: H1, C2
fuentes: F-M2-20, F-M2-17
entrega: tarea

### Instrucción general

En esta actividad vas a resolver con una fórmula generada por IA una pregunta que hoy respondes a mano en tu planilla, y a comprobarla con datos de prueba antes de confiar en ella. Lo subes como tarea en el aula, con tu tabla de prueba en una captura o una copia y tu bitácora en un documento de texto o en PDF. Solo lo ven tú y el facilitador, porque trabajas con una planilla real de tu cargo. El facilitador lo revisa con la rúbrica de abajo y te deja su retroalimentación en un plazo de hasta 72 horas.

### Situación

Si en tu trabajo usas una planilla, probablemente hay una pregunta que respondes a mano y que una fórmula podría resolver: cuánto suma un tipo de gasto, cuántas unidades quedan de un producto, cuál es el estado de un pedido o de una factura. Vas a resolver esa pregunta con una fórmula generada por IA y a comprobarla con datos de prueba. Trabaja siempre sobre una copia de la planilla en la que hayas cambiado nombres, RUT, montos y cualquier dato sensible, y respeta lo que diga tu empresa sobre qué información se puede usar en estas herramientas.

### Lo que vas a hacer

Vas a armar una tabla pequeña de prueba con tus propias columnas, conseguir la fórmula y someterla a pruebas. Los errores en planillas son comunes y no triviales, y la técnica que ha mostrado eficacia es revisar celda por celda [@F-M2-20]. Para tener un segundo camino hacia el mismo número sirven los filtros, que ocultan las filas que no quieres ver sin borrarlas [@F-M2-17].

1. Copia los encabezados de tu planilla y entre cinco y ocho filas a una hoja nueva, con los datos ya cambiados, y escribe en una línea la pregunta que quieres responder.
2. Calcula a mano el resultado correcto con esos datos y anótalo antes de pedir la fórmula.
3. Pide la fórmula a Gemini diciéndole el programa, el separador, qué hay en cada columna, desde qué fila y en qué celda va la fórmula, sin pegar datos reales: con los encabezados y la descripción de las columnas basta.
4. Aplica la fórmula, cópiala si corresponde y compara el resultado con tu cálculo.
5. Haz estas pruebas: cambia un dato y mira si el resultado cambia como esperabas, deja una celda en 0 o vacía, y lee la fórmula de al menos una celda copiada.
6. Comprueba el resultado por un camino distinto, con un filtro y una suma a mano.
7. Si encontraste un error, corrígelo y vuelve a probar. Si no encontraste ninguno, quita los signos $ de la fórmula, cópiala de nuevo y anota qué cambió y cómo lo detectaste.

### Lo que entregas

Subes como tarea en el aula tu tabla de prueba, la pregunta, tu cálculo a mano, la fórmula que propuso Gemini y la fórmula final. En tu bitácora describe cada prueba que hiciste, con lo que esperabas y lo que obtuviste, y el error que encontraste o provocaste, cómo lo detectaste y cómo lo corregiste.

### Rúbrica

| Criterio | Peso | Logrado (100 %) | Parcial (60 %) | No logrado (0 %) |
|---|---|---|---|---|
| Comprueba el resultado con datos de prueba | 30 % | El resultado de la fórmula final coincide con tu cálculo a mano, hecho antes de pedir la fórmula, y con el camino del filtro. | Coincide con uno de los dos caminos, o el cálculo a mano se hizo después. | El resultado no coincide o no se comparó. |
| Pruebas con resultado conocido | 25 % | La bitácora muestra al menos dos pruebas distintas, cada una con lo que esperabas y lo que obtuviste. | Hay una sola prueba o no se anota lo esperado. | No hay pruebas registradas. |
| Corrige errores | 30 % | Describe un error encontrado o provocado: qué estaba mal, en qué prueba apareció y qué cambiaste para corregirlo. | Menciona un error, pero no explica cómo lo detectaste o cómo lo corregiste. | No hay error detectado ni corrección. |
| Tabla de prueba y cuidado de los datos | 15 % | La tabla tiene entre cinco y ocho filas con datos cambiados, la pregunta está en una línea y el pedido a Gemini no trae datos reales. | Falta la pregunta o la tabla no tiene las filas pedidas. | La tabla o el pedido conservan datos sensibles. |

La actividad se aprueba con 60 % o más.

## Referencias bibliográficas

- Google. (s. f.-a). *BUSCARV*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093318?hl=es
- Google. (s. f.-b). *Ordenar y filtrar tus datos*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3540681?hl=es
- Google. (s. f.-c). *SUMAR.SI*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093583?hl=es
- Panko, R. R. (2000). *Spreadsheet errors: What we know. What we think we can do*. arXiv. https://arxiv.org/abs/0802.3457
