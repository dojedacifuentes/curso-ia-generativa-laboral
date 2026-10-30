# Guía del facilitador · Planillas de cálculo con IA

## Actividad 1 · Las facturas pendientes de Camila

### Dónde se entrega y cuándo responder

La persona publica su trabajo en el foro de la actividad, con una captura o una copia de la hoja y su bitácora. Responde en el mismo hilo dentro de 24 horas hábiles. La tabla es ficticia, así que el aporte es visible para el curso. Si la captura no deja ver la fórmula, pídele una captura con la celda seleccionada y la barra de fórmulas a la vista.

### Pauta de corrección

**Genera una fórmula correcta para el problema planteado: suma por estado (35 %).** Respuesta tipo: `=SUMAR.SI($E$2:$E$7;G2;$D$2:$D$7)` en H2, copiada a H3. Da 2830000 para Pendiente y 1009000 para Pagada. Los rangos van fijos y la celda del estado, relativa. Acepta la coma como separador si la hoja está configurada así. Errores frecuentes:

- rangos sin $: al copiar a H3 se corren a E3:E8 y D3:D8, y el total de Pagada sale mal (Parcial);
- el estado escrito en la fórmula, como `"Pendiente"`: funciona, pero no se puede copiar y hay que escribir otra fórmula para H3 (Parcial);
- un SUMA de todo el rango, sin condición (No logrado).

**Genera una fórmula correcta para el problema planteado: búsqueda (30 %).** Respuesta tipo: `=BUSCARV(J2;$A$2:$E$7;4;FALSO)` en K2. Con 1105 da 410000, con 1102 da 120000 y con 1110 muestra el error de valor no encontrado (#N/A). Error frecuente: omitir FALSO o poner VERDADERO; entonces 1110 devuelve el monto de la última factura menor, 64000, en vez de un error (Parcial). Otro error: el índice 5 en vez de 4, que trae el estado en vez del monto (No logrado).

**Comprobación en la bitácora (25 %).** Para «Logrado», el cálculo a mano está antes de la fórmula, se prueban los tres números de factura, se revisan los rangos de H3 en la barra de fórmulas y la suma con el filtro de Pendiente da 2830000, igual que H2. Error frecuente: anotar solo «funcionó», sin los valores esperados y obtenidos.

**Registro de las fórmulas (10 %).** Busca la fórmula exacta que propuso Gemini para cada problema y, si hubo corrección, el antes y el después.

### Retroalimentación sugerida

Logrado: «Tus dos fórmulas están correctas y, mejor aún, lo demostraste: calculaste a mano antes, probaste la factura que no existe y el filtro te dio el mismo total. Así se trabaja con fórmulas generadas por IA.»

Parcial: «La suma está perfecta, pero con la factura 1110 tu BUSCARV muestra 64000 en vez de un error. Revisa el último argumento: sin FALSO la búsqueda es aproximada y devuelve el valor más cercano. Agrégalo y vuelve a probar.»

## Actividad 2 · Una fórmula para tu planilla, comprobada

### Dónde se entrega y cuándo responder

Se sube como tarea en el aula y solo la ven tú y la persona, porque trabaja con una planilla real de su cargo. Revísala con la rúbrica y deja la retroalimentación en un plazo de hasta 72 horas.

### Pauta de corrección

**Comprueba el resultado con datos de prueba (30 %).** Para «Logrado», el resultado de la fórmula final coincide con el cálculo a mano, hecho antes de pedir la fórmula, y con el camino del filtro. Rehaz tú el cálculo con la tabla de prueba: son pocas filas y toma un minuto. Error frecuente: el cálculo a mano aparece después de la fórmula y coincide sospechosamente con ella (Parcial).

**Pruebas con resultado conocido (25 %).** Para «Logrado», hay al menos dos pruebas distintas, cada una con lo esperado y lo obtenido: cambiar un dato, dejar una celda en 0 o vacía, leer la fórmula de una celda copiada. Error frecuente: repetir la misma prueba con otro número.

**Corrige errores (30 %).** Vale tanto un error encontrado como uno provocado (quitar los $ y copiar la fórmula). Para «Logrado», la bitácora dice qué estaba mal, en qué prueba apareció y qué se cambió. Error frecuente: «tuve un error y lo arreglé», sin explicar cuál (Parcial).

**Tabla de prueba y cuidado de los datos (15 %).** Revisa que la tabla tenga entre cinco y ocho filas con datos cambiados, que la pregunta esté en una línea y que el pedido a Gemini traiga solo encabezados y descripciones. Si aparecen nombres, RUT o montos reales, el criterio queda en «No logrado».

### Retroalimentación sugerida

Logrado: «Tu bitácora es un buen ejemplo de verificación: cálculo a mano antes, dos pruebas distintas y un error provocado que detectaste leyendo la fórmula copiada. Ya puedes usar esta fórmula en tu planilla real.»

Parcial: «La fórmula da el resultado correcto, pero la bitácora tiene una sola prueba. Agrega otra con resultado conocido, por ejemplo deja una celda vacía y anota qué esperabas y qué obtuviste, y explica en qué prueba apareció el error que corregiste.»
