# Actividades de aplicación práctica · M2-AE4 · Planillas de cálculo con IA

## Actividad 1 · Las facturas pendientes de Camila
cubre: H1, C1
fuentes: F-M2-16, F-M2-15

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

Vas a pedirle a Gemini dos fórmulas, aplicarlas y comprobar que son correctas antes de dárselas por buenas a la gerenta. Ten presentes dos detalles del tema: en SUMAR.SI, un criterio de texto escrito en la fórmula va entre comillas dobles [@F-M2-16], y en BUSCARV el último argumento tiene que ser FALSO para pedir una coincidencia exacta [@F-M2-15].

1. Escribe en G1 «Estado» y en H1 «Monto total», y debajo, en G2 y G3, las palabras Pendiente y Pagada.
2. Calcula a mano cuánto suman las facturas de cada estado y anótalo en tu bitácora antes de pedir nada.
3. Pide a Gemini la fórmula para H2 con la plantilla de la pantalla 7: el programa, el separador, qué hay en cada columna, desde qué fila, que la fórmula va en H2 y que la vas a copiar a H3.
4. Pega la fórmula en H2, cópiala a H3 y compara los dos resultados con tu cálculo. Haz clic en H3 y revisa en la barra que los rangos sigan siendo E2:E7 y D2:D7.
5. Escribe en J1 «Factura buscada», en K1 «Monto» y en J2 el número 1105. Pide la fórmula para que K2 muestre el monto de la factura escrita en J2, con coincidencia exacta.
6. Prueba en J2 los números 1105, 1102 y 1110. Este último no existe, y la fórmula tiene que mostrar un error de valor no encontrado en vez de un monto.
7. Crea un filtro en la tabla, deja visible solo el estado Pendiente y suma a mano los montos que quedan a la vista.

Los resultados que debes obtener son 2830000 para Pendiente y 1009000 para Pagada. La factura 1105 tiene que dar 410000 y la 1102, 120000. La suma de los montos visibles con el filtro tiene que ser igual a la de H2.

### Lo que entregas

Entregas una captura o una copia de la hoja con las dos fórmulas funcionando y, en tu bitácora, la fórmula exacta que propuso Gemini para cada problema, tu cálculo a mano y el resultado de cada prueba. Si tuviste que corregir una fórmula, anota cómo era antes y cómo quedó.

### Cómo se revisa

Esta actividad se revisa con el criterio «Genera una fórmula correcta para el problema planteado». Se da por logrado cuando la fórmula de H2 usa SUMAR.SI con los rangos fijos y la celda del estado relativa, por ejemplo =SUMAR.SI($E$2:$E$7;G2;$D$2:$D$7), y al copiarla da los dos resultados esperados; y cuando la fórmula de K2 usa BUSCARV con el índice de la columna Monto y FALSO al final, por ejemplo =BUSCARV(J2;$A$2:$E$7;4;FALSO). Se mira también que la bitácora muestre que comprobaste cada fórmula con los resultados conocidos y con la factura que no existe.

## Actividad 2 · Una fórmula para tu planilla, comprobada
cubre: H1, C2
fuentes: F-M2-20, F-M2-17

### Situación

Si en tu trabajo usas una planilla, probablemente hay una pregunta que respondes a mano y que una fórmula podría resolver: cuánto suma un tipo de gasto, cuántas unidades quedan de un producto, cuál es el estado de un pedido o de una factura. Vas a resolver esa pregunta con una fórmula generada por IA y a comprobarla con datos de prueba. Trabaja siempre sobre una copia de la planilla en la que hayas cambiado nombres, RUT, montos y cualquier dato sensible, y respeta lo que diga tu empresa sobre qué información se puede usar en estas herramientas.

### Lo que vas a hacer

Vas a armar una tabla pequeña de prueba con tus propias columnas, conseguir la fórmula y someterla a las pruebas del tema. Los errores en planillas son comunes y no triviales, y la técnica que ha mostrado eficacia es revisar celda por celda [@F-M2-20]. Para tener un segundo camino hacia el mismo número sirven los filtros, que ocultan las filas que no quieres ver sin borrarlas [@F-M2-17].

1. Copia los encabezados de tu planilla y entre cinco y ocho filas a una hoja nueva, con los datos ya cambiados, y escribe en una línea la pregunta que quieres responder.
2. Calcula a mano el resultado correcto con esos datos y anótalo antes de pedir la fórmula.
3. Pide la fórmula a Gemini con la plantilla de la pantalla 7, sin pegar datos reales: con los encabezados y la descripción de las columnas basta.
4. Aplica la fórmula, cópiala si corresponde y compara el resultado con tu cálculo.
5. Haz las pruebas de la pantalla 9: cambia un dato y mira si el resultado cambia como esperabas, deja una celda en 0 o vacía, y lee la fórmula de al menos una celda copiada.
6. Comprueba el resultado por un camino distinto, con un filtro y una suma a mano.
7. Si encontraste un error, corrígelo y vuelve a probar. Si no encontraste ninguno, quita los signos $ de la fórmula, cópiala de nuevo y anota qué cambió y cómo lo detectaste.

### Lo que entregas

Entregas tu tabla de prueba, la pregunta, tu cálculo a mano, la fórmula que propuso Gemini y la fórmula final. En tu bitácora describe cada prueba que hiciste, con lo que esperabas y lo que obtuviste, y el error que encontraste o provocaste, cómo lo detectaste y cómo lo corregiste.

### Cómo se revisa

Esta actividad se revisa con el criterio «Comprueba el resultado con datos de prueba y corrige errores». Se da por logrado cuando el resultado de la fórmula final coincide con el cálculo a mano y con el camino del filtro, y cuando la bitácora muestra al menos dos pruebas distintas con datos de resultado conocido, además de un error detectado y corregido. Se mira también que la tabla de prueba no tenga datos sensibles y que la corrección esté explicada: qué estaba mal, en qué prueba apareció y qué cambiaste.

## Referencias bibliográficas

- Google. (s. f.-a). *BUSCARV*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093318?hl=es
- Google. (s. f.-b). *Ordenar y filtrar tus datos*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3540681?hl=es
- Google. (s. f.-c). *SUMAR.SI*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093583?hl=es
- Panko, R. R. (2000). *Spreadsheet errors: What we know. What we think we can do*. arXiv. https://arxiv.org/abs/0802.3457
