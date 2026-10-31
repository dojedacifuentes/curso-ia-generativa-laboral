# Guía del facilitador · Planillas de cálculo con IA

## Autoevaluación 1 · Las facturas pendientes de Camila

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta y la compara con la respuesta modelo que está en el aula. Responde en el foro del módulo las consultas que surjan y usa esta pauta de referencia para orientar, por ejemplo si alguien no entiende por qué H3 da otro total al copiar la fórmula.

### Pauta de referencia

**Genera una fórmula correcta para el problema planteado: suma por estado.** Respuesta tipo: `=SUMAR.SI($E$2:$E$7;G2;$D$2:$D$7)` en H2, copiada a H3. Da 2830000 para Pendiente y 1009000 para Pagada. Los rangos van fijos y la celda del estado, relativa. Acepta la coma como separador si la hoja está configurada así. Errores frecuentes:

- rangos sin $: al copiar a H3 se corren a E3:E8 y D3:D8, y el total de Pagada sale mal («Lo logré en parte»);
- el estado escrito en la fórmula, como `"Pendiente"`: funciona, pero no se puede copiar y hay que escribir otra fórmula para H3 («Lo logré en parte»);
- un SUMA de todo el rango, sin condición («Aún no»).

**Genera una fórmula correcta para el problema planteado: búsqueda.** Respuesta tipo: `=BUSCARV(J2;$A$2:$E$7;4;FALSO)` en K2. Con 1105 da 410000, con 1102 da 120000 y con 1110 muestra el error de valor no encontrado (#N/A). Error frecuente: omitir FALSO o poner VERDADERO; entonces 1110 devuelve el monto de la última factura menor, 64000, en vez de un error («Lo logré en parte»). Otro error: el índice 5 en vez de 4, que trae el estado en vez del monto («Aún no»).

**Comprobación en la bitácora.** Para «Lo logré», el cálculo a mano está antes de la fórmula, se prueban los tres números de factura, se revisan los rangos de H3 en la barra de fórmulas y la suma con el filtro de Pendiente da 2830000, igual que H2. Error frecuente: anotar solo «funcionó», sin los valores esperados y obtenidos.

**Registro de las fórmulas.** Busca la fórmula exacta que propuso Gemini para cada problema y, si hubo corrección, el antes y el después.

### Retroalimentación sugerida

Si lo logró: «Tus dos fórmulas están correctas y, mejor aún, lo demostraste: calculaste a mano antes, probaste la factura que no existe y el filtro te dio el mismo total. Así se trabaja con fórmulas generadas por IA.»

Si lo logró en parte: «La suma está perfecta, pero con la factura 1110 tu BUSCARV muestra 64000 en vez de un error. Revisa el último argumento: sin FALSO la búsqueda es aproximada y devuelve el valor más cercano. Agrégalo y vuelve a probar.»

## Autoevaluación 2 · Una fórmula para tu planilla, comprobada

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta y la compara con la respuesta modelo que está en el aula. Responde en el foro del módulo las consultas que surjan y usa esta pauta de referencia para orientar, por ejemplo si alguien no sabe qué pruebas hacer con su fórmula. Si alguien comparte su trabajo en el foro, recuérdale quitar antes nombres, RUT, montos y datos de clientes.

### Pauta de referencia

**Comprueba el resultado con datos de prueba.** Para «Lo logré», el resultado de la fórmula final coincide con el cálculo a mano, hecho antes de pedir la fórmula, y con el camino del filtro. Rehaz tú el cálculo con la tabla de prueba: son pocas filas y toma un minuto. Error frecuente: el cálculo a mano aparece después de la fórmula y coincide sospechosamente con ella («Lo logré en parte»).

**Pruebas con resultado conocido.** Para «Lo logré», hay al menos dos pruebas distintas, cada una con lo esperado y lo obtenido: cambiar un dato, dejar una celda en 0 o vacía, leer la fórmula de una celda copiada. Error frecuente: repetir la misma prueba con otro número.

**Corrige errores.** Vale tanto un error encontrado como uno provocado (quitar los $ y copiar la fórmula). Para «Lo logré», la bitácora dice qué estaba mal, en qué prueba apareció y qué se cambió. Error frecuente: «tuve un error y lo arreglé», sin explicar cuál («Lo logré en parte»).

**Tabla de prueba y cuidado de los datos.** Revisa que la tabla tenga entre cinco y ocho filas con datos cambiados, que la pregunta esté en una línea y que el pedido a Gemini traiga solo encabezados y descripciones. Si aparecen nombres, RUT o montos reales, el criterio queda en «Aún no».

### Retroalimentación sugerida

Si lo logró: «Tu bitácora es un buen ejemplo de verificación: cálculo a mano antes, dos pruebas distintas y un error provocado que detectaste leyendo la fórmula copiada. Ya puedes usar esta fórmula en tu planilla real.»

Si lo logró en parte: «La fórmula da el resultado correcto, pero la bitácora tiene una sola prueba. Agrega otra con resultado conocido, por ejemplo deja una celda vacía y anota qué esperabas y qué obtuviste, y explica en qué prueba apareció el error que corregiste.»
