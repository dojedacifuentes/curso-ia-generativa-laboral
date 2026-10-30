# Guía del facilitador · Flujos simples con IA

## Actividad 1 · Los pedidos de ventas a la bodega

### Dónde se entrega y cuándo responder

La persona publica sus capturas, su plan de pruebas y sus correcciones en el foro de la actividad. Responde en el mismo hilo dentro de 24 horas hábiles, con el nivel de cada criterio de la rúbrica y un comentario breve. Todo se hace con correos inventados y una cuenta de práctica, así que el aporte puede verlo el curso. Si una captura muestra un correo del trabajo o datos reales, pídele que la reemplace.

### Pauta de corrección

**Diseña el flujo (20 %).** Para «Logrado», la tabla tiene los cuatro pasos con lo que recibe y entrega cada uno. Respuesta tipo:

- Disparador de Gmail: recibe un correo nuevo y entrega la fecha, el remitente, el asunto y el cuerpo.
- Condición: recibe el asunto y deja pasar solo los correos que contienen «[PRUEBA]».
- Acción con IA: recibe el cuerpo y entrega «Producto: … · Cantidad: …», o «sin dato».
- Planilla: recibe la fecha, el remitente, el asunto y el análisis, y agrega una fila nueva.

Errores frecuentes: pasos sin lo que reciben o entregan (Parcial). Si la condición quedó después de la IA, el flujo funciona igual, pero comenta que así gasta créditos en correos que no corresponden.

**Construye un flujo funcional (30 %).** Para «Logrado», las capturas muestran el flujo armado y filas con el remitente, el asunto y el análisis de su propio correo, con el antes y el después del remitente. Respuesta tipo del error a propósito: con el remitente escrito a mano, la columna muestra siempre el mismo texto fijo, sin importar qué correo llegó; mapeado desde el paso de Gmail, trae el dato real de cada correo. Si todos los correos de prueba salen de la misma cuenta, la diferencia casi no se ve: pídele que lo explique o que pruebe desde una segunda dirección. En el camino del celular, el error equivalente es un remitente fijo en el texto de la acción de Gemini. Errores frecuentes: falta la captura del antes o del después (Parcial); una fila trae el análisis de otro correo porque se mapeó un campo equivocado (Parcial); el flujo usa un correo del trabajo (pide cambiarlo).

**Prueba el flujo (30 %).** Para «Logrado», el plan incluye los cuatro correos con lo esperado, lo obtenido y las X. Lo esperado es esto:

- Producto y cantidad claros: una fila con los dos datos correctos.
- Dos productos: una fila con los dos productos y sus cantidades, o dos filas si la persona lo decidió y lo explica.
- Sin cantidad: «Cantidad: sin dato», sin un número inventado.
- Sin «[PRUEBA]» en el asunto: ninguna fila, porque la condición lo detiene.

Errores frecuentes: dejar fuera el correo sin «[PRUEBA]» o el correo sin cantidad (Parcial); aceptar como correcta una cantidad que la IA inventó (Parcial); probar solo los correos que salen bien (No logrado).

**Corrige las fallas (20 %).** Para «Logrado», cada X tiene lo que se cambió, la versión, como «Pedidos de ventas · v2», y una nueva prueba del caso que falló. Correcciones típicas: reforzar la instrucción con «si el correo no trae la cantidad, escribe “sin dato”; no inventes», revisar que la condición mire el asunto y no el cuerpo, y mapear el remitente. Errores frecuentes: cambiar sin volver a probar o sin anotar la versión (Parcial).

### Retroalimentación sugerida

Logrado: «Tu flujo funciona y tu plan de pruebas encontró lo que tenía que encontrar: el correo sin “[PRUEBA]” quedó fuera y, después de tu ajuste, la IA escribe “sin dato” en vez de inventar la cantidad. Muy bien documentada la v2.»

Parcial: «El flujo corre y las filas traen el remitente correcto. Te falta probar el correo sin cantidad: es justo el caso en que la IA tiende a inventar. Agrégalo al plan, córrelo y cuéntanos qué pasó.»

## Actividad 2 · Un flujo para una tarea de tu cargo

### Dónde se entrega y cuándo responder

Se sube como tarea en el aula. Solo la ves tú y la persona, porque trabaja con una tarea real de su cargo. Revísala con la rúbrica y deja la retroalimentación en un plazo de hasta 72 horas. Si una captura muestra datos reales de la empresa o de personas, pídele que la reemplace antes de calificar ese criterio.

### Pauta de corrección

**Diseña el flujo (25 %).** No hay respuesta tipo, porque depende de la tarea. Para «Logrado», hay una línea con qué inicia la tarea, con qué datos trabaja y qué entrega, y una tabla de tres a cinco pasos con lo que recibe y entrega cada uno; un paso usa IA, otro usa correo, planilla o calendario, y cada paso usa solo datos de los anteriores. El flujo debería partir de la tarea elegida en su matriz; si cambió de tarea, que lo diga. Errores frecuentes: más de cinco pasos; un paso que necesita un dato que ningún paso anterior entrega (Parcial).

**Construye un flujo funcional (25 %).** Para «Logrado», hay capturas del flujo armado y de una ejecución correcta, en las que se ve que el disparador se activa y que cada paso recibe su dato. Errores frecuentes: solo capturas del diseño, sin ejecución (Parcial); una cuenta del trabajo conectada sin permiso, o capturas con datos reales (No logrado hasta que las reemplace).

**Prueba y corrige fallas (30 %).** Para «Logrado», hay al menos cinco casos con lo esperado y lo obtenido: casos normales, uno que la condición debe detener y uno casi vacío en el que la IA debería decir que falta información en vez de inventar. Cada falla tiene su causa, ubicada en un paso según el historial de ejecuciones, lo que se cambió y la prueba repetida. Errores frecuentes: solo casos normales; causas como «no funcionó», sin nombrar el paso; correcciones sin volver a probar (Parcial).

**Documenta el flujo (20 %).** Para «Logrado», la ficha tiene nombre con propósito y versión, propósito, disparador, pasos, datos, dependencias y pruebas, y las dependencias incluyen la cuenta conectada y el límite del plan gratuito. Errores frecuentes: nombres genéricos como «Escenario 1»; dependencias vacías (Parcial).

### Retroalimentación sugerida

Logrado: «Tu flujo resuelve una tarea real y lo probaste en serio: el caso casi vacío mostró que la IA inventaba un dato, ubicaste el paso y lo corregiste. La ficha deja claro de qué depende, incluido el límite del plan gratuito.»

Parcial: «El diseño está claro y el flujo corre. Te faltan dos casos de prueba: uno que la condición debe detener y uno casi vacío. Agrégalos y anota en la ficha la cuenta que conectaste y el límite del plan.»
