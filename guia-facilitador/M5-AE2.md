# Guía del facilitador · Flujos simples con IA

## Autoevaluación 1 · Los pedidos de ventas a la bodega

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta, la compara con la respuesta modelo que está en el aula y revisa su trabajo con la rúbrica. Responde en el foro del módulo las consultas que surjan y usa la pauta de referencia para orientar.

### Pauta de referencia

**Diseña el flujo.** Para «Lo logré», la tabla tiene los cuatro pasos con lo que recibe y entrega cada uno. Respuesta tipo:

- Disparador de Gmail: recibe un correo nuevo y entrega la fecha, el remitente, el asunto y el cuerpo.
- Condición: recibe el asunto y deja pasar solo los correos que contienen «[PRUEBA]».
- Acción con IA: recibe el cuerpo y entrega «Producto: … · Cantidad: …», o «sin dato».
- Planilla: recibe la fecha, el remitente, el asunto y el análisis, y agrega una fila nueva.

Errores frecuentes: pasos sin lo que reciben o entregan (Lo logré en parte). Si la condición quedó después de la IA, el flujo funciona igual, pero comenta que así gasta créditos en correos que no corresponden.

**Construye un flujo funcional.** Para «Lo logré», las capturas muestran el flujo armado y filas con el remitente, el asunto y el análisis de su propio correo, con el antes y el después del remitente. Respuesta tipo del error a propósito: con el remitente escrito a mano, la columna muestra siempre el mismo texto fijo, sin importar qué correo llegó; mapeado desde el paso de Gmail, trae el dato real de cada correo. Si todos los correos de prueba salen de la misma cuenta, la diferencia casi no se ve: pídele que lo explique o que pruebe desde una segunda dirección. En el camino del celular, el error equivalente es un remitente fijo en el texto de la acción de Gemini. Errores frecuentes: falta la captura del antes o del después (Lo logré en parte); una fila trae el análisis de otro correo porque se mapeó un campo equivocado (Lo logré en parte); el flujo usa un correo del trabajo (pide cambiarlo).

**Prueba el flujo.** Para «Lo logré», el plan incluye los cuatro correos con lo esperado, lo obtenido y las X. Lo esperado es esto:

- Producto y cantidad claros: una fila con los dos datos correctos.
- Dos productos: una fila con los dos productos y sus cantidades, o dos filas si la persona lo decidió y lo explica.
- Sin cantidad: «Cantidad: sin dato», sin un número inventado.
- Sin «[PRUEBA]» en el asunto: ninguna fila, porque la condición lo detiene.

Errores frecuentes: dejar fuera el correo sin «[PRUEBA]» o el correo sin cantidad (Lo logré en parte); aceptar como correcta una cantidad que la IA inventó (Lo logré en parte); probar solo los correos que salen bien (Aún no).

**Corrige las fallas.** Para «Lo logré», cada X tiene lo que se cambió, la versión, como «Pedidos de ventas · v2», y una nueva prueba del caso que falló. Correcciones típicas: reforzar la instrucción con «si el correo no trae la cantidad, escribe “sin dato”; no inventes», revisar que la condición mire el asunto y no el cuerpo, y mapear el remitente. Errores frecuentes: cambiar sin volver a probar o sin anotar la versión (Lo logré en parte).

### Retroalimentación sugerida

Si lo logró: «Tu flujo funciona y tu plan de pruebas encontró lo que tenía que encontrar: el correo sin “[PRUEBA]” quedó fuera y, después de tu ajuste, la IA escribe “sin dato” en vez de inventar la cantidad. Muy bien documentada la v2.»

Si lo logró en parte: «El flujo corre y las filas traen el remitente correcto. Te falta probar el correo sin cantidad: es justo el caso en que la IA tiende a inventar. Agrégalo al plan, córrelo y anota qué pasó.»

## Autoevaluación 2 · Un flujo para una tarea de tu cargo

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta, la compara con la respuesta modelo que está en el aula y revisa su trabajo con la rúbrica. Responde en el foro del módulo las consultas que surjan y usa la pauta de referencia para orientar. Si alguien comparte en el foro datos de clientes, proveedores o compañeros, pídele que los reemplace por datos inventados.

### Pauta de referencia

**Diseña el flujo.** No hay respuesta tipo, porque depende de la tarea. Para «Lo logré», hay una línea con qué inicia la tarea, con qué datos trabaja y qué entrega, y una tabla de tres a cinco pasos con lo que recibe y entrega cada uno; un paso usa IA, otro usa correo, planilla o calendario, y cada paso usa solo datos de los anteriores. El flujo debería partir de la tarea elegida en su matriz; si cambió de tarea, que lo diga. Errores frecuentes: más de cinco pasos; un paso que necesita un dato que ningún paso anterior entrega (Lo logré en parte).

**Construye un flujo funcional.** Para «Lo logré», hay capturas del flujo armado y de una ejecución correcta, en las que se ve que el disparador se activa y que cada paso recibe su dato. Errores frecuentes: solo capturas del diseño, sin ejecución (Lo logré en parte); una cuenta del trabajo conectada sin permiso, o capturas con datos reales (Aún no hasta que las reemplace).

**Prueba y corrige fallas.** Para «Lo logré», hay al menos cinco casos con lo esperado y lo obtenido: casos normales, uno que la condición debe detener y uno casi vacío en el que la IA debería decir que falta información en vez de inventar. Cada falla tiene su causa, ubicada en un paso según el historial de ejecuciones, lo que se cambió y la prueba repetida. Errores frecuentes: solo casos normales; causas como «no funcionó», sin nombrar el paso; correcciones sin volver a probar (Lo logré en parte).

**Documenta el flujo.** Para «Lo logré», la ficha tiene nombre con propósito y versión, propósito, disparador, pasos, datos, dependencias y pruebas, y las dependencias incluyen la cuenta conectada y el límite del plan gratuito. Errores frecuentes: nombres genéricos como «Escenario 1»; dependencias vacías (Lo logré en parte).

### Retroalimentación sugerida

Si lo logró: «Tu flujo resuelve una tarea real y lo probaste en serio: el caso casi vacío mostró que la IA inventaba un dato, ubicaste el paso y lo corregiste. La ficha deja claro de qué depende, incluido el límite del plan gratuito.»

Si lo logró en parte: «El diseño está claro y el flujo corre. Te faltan dos casos de prueba: uno que la condición debe detener y uno casi vacío. Agrégalos y anota en la ficha la cuenta que conectaste y el límite del plan.»
