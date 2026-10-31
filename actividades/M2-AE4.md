# Actividades de aplicación práctica · M2-AE4 · Planillas de cálculo con IA

## Autoevaluación 1 · Las facturas pendientes de Camila
cubre: H1, C1
fuentes: F-M2-16, F-M2-15
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a pedirle a Gemini dos fórmulas para la planilla de facturas de Camila, aplicarlas y comprobar que dan el resultado correcto. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Trabajas con una tabla ficticia.

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

### Lo que preparas

Deja lista la hoja con las dos fórmulas funcionando y, en tu bitácora, la fórmula exacta que propuso Gemini para cada problema, tu cálculo a mano y el resultado de cada prueba. Si tuviste que corregir una fórmula, anota cómo era antes y cómo quedó.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Genera una fórmula correcta para el problema planteado: suma por estado | Tu fórmula de H2 usa SUMAR.SI, los rangos no se mueven al copiarla, la celda del estado sí cambia, y en H2 y H3 da los totales correctos. | Tu fórmula da el total correcto en una celda, pero falla al copiarla o tuviste que escribirla a mano en cada celda. | Tu fórmula no da los totales correctos o no usa una función de suma con condición. |
| Genera una fórmula correcta para el problema planteado: búsqueda | Tu fórmula de K2 usa BUSCARV con la columna del monto y coincidencia exacta; devuelve el monto correcto y un error con la factura que no existe. | Tu fórmula devuelve montos correctos, pero con la factura que no existe muestra un monto en vez de un error. | Tu fórmula no devuelve los montos correctos. |
| Comprobación en la bitácora | Tu bitácora tiene el cálculo a mano hecho antes de pedir, la prueba de cada fórmula con resultados conocidos y con la factura que no existe, la revisión de los rangos en H3 y la suma con el filtro. | Te falta alguna de las pruebas o el cálculo a mano. | No registraste pruebas. |
| Registro de las fórmulas | Anotas la fórmula exacta que propuso Gemini para cada problema y, si corregiste alguna, cómo era antes y cómo quedó. | Te falta una de las fórmulas o la corrección no muestra el antes y el después. | No registraste las fórmulas. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

**Cálculo a mano, antes de pedir nada**

- Pendiente: 120000 + 2300000 + 410000 = 2830000.
- Pagada: 850000 + 95000 + 64000 = 1009000.

**Suma por estado.** Pedido a Gemini: «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En A tengo el número de factura, en D el monto y en E el estado, de la fila 2 a la 7. En G2 y G3 tengo los estados Pendiente y Pagada. Necesito en H2 la suma de los montos del estado escrito en G2, y voy a copiar la fórmula a H3. Entrega la fórmula y explica cada argumento».

- Fórmula que propuso Gemini: `=SUMAR.SI(E2:E7;G2;D2:D7)`.
- Al copiarla a H3, la barra mostró `=SUMAR.SI(E3:E8;G3;D3:D8)`: el rango bajó una fila. H2 dio 2830000, pero H3 dio 159000 en vez de 1009000.
- Fórmula corregida, con los rangos fijos y el estado relativo: `=SUMAR.SI($E$2:$E$7;G2;$D$2:$D$7)`. Copiada a H3 queda `=SUMAR.SI($E$2:$E$7;G3;$D$2:$D$7)` y da 1009000.

**Búsqueda.** Pedido: «En A2:A7 tengo números de factura y en D2:D7 montos. Quiero que en K2 aparezca el monto de la factura escrita en J2. Necesito coincidencia exacta. Entrega la fórmula y explica cada argumento». Fórmula de Gemini, usada sin cambios: `=BUSCARV(J2;$A$2:$E$7;4;FALSO)`.

**Bitácora de pruebas**

| Prueba | Esperado | Obtenido |
|---|---|---|
| H2, Pendiente | 2830000 | 2830000 |
| H3, Pagada, con la primera fórmula | 1009000 | 159000: error de rango; corregido con $ |
| H3, Pagada, con la fórmula corregida | 1009000 | 1009000 |
| Rangos en la barra de fórmulas de H3 | E2:E7 y D2:D7 | E2:E7 y D2:D7 |
| K2 con 1105 | 410000 | 410000 |
| K2 con 1102 | 120000 | 120000 |
| K2 con 1110, que no existe | Error de valor no encontrado | #N/A |
| Filtro en Pendiente y suma a mano de lo visible | 2830000, igual a H2 | 120000 + 2300000 + 410000 = 2830000 |

**Errores frecuentes**

- Rangos sin $: al copiar a H3 se corren y el total de Pagada sale mal, aunque H2 se vea bien.
- El estado escrito dentro de la fórmula, como `"Pendiente"`, que obliga a escribir otra fórmula para H3.
- En BUSCARV, omitir FALSO o poner VERDADERO: la factura 1110 devuelve 64000 en vez de un error. O usar el índice 5, que trae el estado en vez del monto.

## Autoevaluación 2 · Una fórmula para tu planilla, comprobada
cubre: H1, C2
fuentes: F-M2-20, F-M2-17
entrega: autoevaluacion

### Instrucción general

En esta actividad vas a resolver con una fórmula generada por IA una pregunta que hoy respondes a mano en tu planilla, y a comprobarla con datos de prueba antes de confiar en ella. Es una autoevaluación: no se envía ni lleva nota. Haz la actividad por tu cuenta, compárala con la respuesta modelo del final y revisa tu trabajo con la rúbrica de autoevaluación. Como no se envía, puedes trabajar con tu caso real; igual reemplaza nombres, RUT, montos y datos de clientes por datos inventados.

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

### Lo que preparas

Deja listos tu tabla de prueba, la pregunta, tu cálculo a mano, la fórmula que propuso Gemini y la fórmula final. En tu bitácora describe cada prueba que hiciste, con lo que esperabas y lo que obtuviste, y el error que encontraste o provocaste, cómo lo detectaste y cómo lo corregiste.

### Rúbrica de autoevaluación

Cuando termines, compara tu trabajo con la respuesta modelo y marca en qué nivel quedaste en cada criterio. No lleva nota: te sirve para ver qué ajustar.

| Criterio | Lo logré | Lo logré en parte | Aún no |
|---|---|---|---|
| Comprueba el resultado con datos de prueba | El resultado de tu fórmula final coincide con tu cálculo a mano, hecho antes de pedir la fórmula, y con el camino del filtro. | Coincide con uno de los dos caminos, o hiciste el cálculo a mano después. | El resultado no coincide o no lo comparaste. |
| Pruebas con resultado conocido | Tu bitácora muestra al menos dos pruebas distintas, cada una con lo que esperabas y lo que obtuviste. | Hiciste una sola prueba o no anotaste lo esperado. | No registraste pruebas. |
| Corrige errores | Describes un error encontrado o provocado: qué estaba mal, en qué prueba apareció y qué cambiaste para corregirlo. | Mencionas un error, pero no explicas cómo lo detectaste o cómo lo corregiste. | No detectaste ni corregiste ningún error. |
| Tabla de prueba y cuidado de los datos | Tu tabla tiene entre cinco y ocho filas con datos cambiados, la pregunta está en una línea y tu pedido a Gemini no trae datos reales. | Te falta la pregunta o tu tabla no tiene las filas pedidas. | Tu tabla o tu pedido conservan datos sensibles. |

Si en algún criterio quedaste en «Lo logré en parte» o «Aún no», vuelve sobre ese punto antes de seguir con el tema siguiente.

### Respuesta modelo

Como cada persona trabaja con su propia planilla, este es un ejemplo resuelto: el de Andrés, encargado de bodega, con una copia de su planilla de despachos en la que cambió los clientes y los números.

**Tabla de prueba**

| | A | B | C | D |
|---|---|---|---|---|
| 1 | Pedido | Cliente | Cajas medianas | Estado |
| 2 | 501 | Cliente A | 6 | Pendiente |
| 3 | 502 | Cliente B | 4 | Despachado |
| 4 | 503 | Cliente C | 10 | Pendiente |
| 5 | 504 | Cliente D | 3 | Pendiente |
| 6 | 505 | Cliente E | 8 | Despachado |
| 7 | 506 | Cliente F | 5 | Pendiente |

**Pregunta.** ¿Cuántas cajas medianas necesito para los despachos pendientes?

**Cálculo a mano, antes de pedir la fórmula.** 6 + 10 + 3 + 5 = 24 cajas.

**Pedido a Gemini, sin datos.** «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En C tengo las cajas medianas de cada pedido y en D el estado, de la fila 2 a la 7. En F2 escribo un estado. Necesito en G2 la suma de cajas del estado escrito en F2. Entrega la fórmula y explica cada argumento.» Fórmula propuesta: `=SUMAR.SI($D$2:$D$7;F2;$C$2:$C$7)`. Con «Pendiente» en F2 dio 24.

**Bitácora de pruebas**

| Prueba | Esperado | Obtenido |
|---|---|---|
| Cambiar C4 de 10 a 12 | 26 | 26 |
| Dejar C5 vacía | 21 | 21 |
| Escribir en F2 «Pendiente » con un espacio al final, como a veces queda al copiar | 24 | 0 |
| Filtro en Pendiente y suma a mano de lo visible | 24 | 6 + 10 + 3 + 5 = 24 |

**Error encontrado y corrección.** La tercera prueba mostró que un espacio de más en F2 deja la suma en 0, sin ningún aviso. Le conté el problema a Gemini y propuso limpiar el criterio con ESPACIOS. Antes: `=SUMAR.SI($D$2:$D$7;F2;$C$2:$C$7)`. Después: `=SUMAR.SI($D$2:$D$7;ESPACIOS(F2);$C$2:$C$7)`. Repetí la prueba con el espacio y dio 24.

**Qué debe tener la tuya.** Una tabla de cinco a ocho filas con tus columnas y los datos ya cambiados, y la pregunta en una línea. El cálculo a mano anotado antes de pedir la fórmula, y un pedido a Gemini con el programa, el separador, las columnas, las filas y la celda, pero sin datos reales. Al menos dos pruebas distintas, cada una con lo que esperabas y lo que obtuviste, y el resultado comprobado también con un filtro. Y un error encontrado o provocado (por ejemplo, quitando los $ y copiando la fórmula), con qué estaba mal, en qué prueba apareció y qué cambiaste.

**Errores frecuentes**

- Un cálculo a mano hecho después de la fórmula, que coincide sospechosamente con ella.
- Repetir la misma prueba con otro número, en vez de probar cosas distintas.
- Escribir «tuve un error y lo arreglé» sin explicar cuál era ni cómo se detectó.

## Referencias bibliográficas

- Google. (s. f.-a). *BUSCARV*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093318?hl=es
- Google. (s. f.-b). *Ordenar y filtrar tus datos*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3540681?hl=es
- Google. (s. f.-c). *SUMAR.SI*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093583?hl=es
- Panko, R. R. (2000). *Spreadsheet errors: What we know. What we think we can do*. arXiv. https://arxiv.org/abs/0802.3457
