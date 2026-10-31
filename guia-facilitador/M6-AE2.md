# Guía del facilitador · Implementar el flujo

## Autoevaluación 1 · Un ciclo de prueba con documentos inventados

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta, la compara con la respuesta modelo que está en el aula y revisa su trabajo con la rúbrica. Responde en el foro del módulo las consultas que surjan y usa la pauta de referencia para orientar.

### Pauta de referencia

**Define el punto de supervisión.** Para «Lo logré», antes de la primera prueba responde las cinco preguntas. Respuesta tipo: «Revisa Camila, después de cada respuesta del asistente y antes de copiar la fila a la planilla de registro. Revisa cada campo contra el documento original. El criterio es que cada dato esté escrito en el documento; si no está, va “sin dato”. Si algo falla, corrige a mano, anota el caso y no guarda la fila hasta que esté bien». Errores frecuentes: escribirlo después de las pruebas (Lo logré en parte); «reviso que esté bien», sin criterio (Lo logré en parte).

**Implementa y revisa la prueba.** Para «Lo logré», cada documento tiene lo esperado y una comparación campo por campo. Lo esperado es esto:

- Factura 1187: factura, 03-11-2026, Proveedor A, n.º 1187, $412.000. Suele salir bien con la v1.
- Orden de compra 2051: orden de compra, 04-11-2026, emisor la oficina de administración, n.º 2051, monto «sin dato». El Proveedor B es el destinatario, no el emisor. Riesgos: que lo anote como emisor o que invente un monto.
- Contrato de arriendo: contrato, sin fecha, sin número y sin monto. Riesgo: que el asistente ponga la fecha de hoy o un número.
- Factura 1190: factura, sin fecha, Proveedor A, n.º 1190, $98.500. Riesgo: una fecha inventada.
- Guía de despacho 330: no es ninguno de los tres tipos. Riesgo: que la v1 la registre como factura u orden de compra.

La causa de la mayoría de los errores está en la plantilla, que no dice qué hacer cuando falta un dato o el documento no calza. El párrafo final nombra un error que de verdad apareció en su ronda, como una fecha inventada o la guía de despacho registrada como factura. Errores frecuentes: marcar como correcta una fecha que el documento no trae (Lo logré en parte); culpar al asistente sin ubicar la causa en la plantilla (Lo logré en parte); copiar las respuestas sin compararlas (Aún no).

**Versiona la plantilla.** Para «Lo logré», la v1 sigue guardada, la v2 corrige la causa y la tabla muestra las dos versiones probadas con los mismos cinco casos. Una v2 tipo: «Lee este documento y devuélveme una fila de tabla con tipo (factura, orden de compra o contrato), fecha (DD-MM-AAAA), emisor, número y monto. Usa solo lo que dice el documento. Si un dato no está, escribe “sin dato”. Si el documento no es factura, orden de compra ni contrato, escribe “otro tipo” y no completes los demás campos». Errores frecuentes: sobrescribir la v1 (Aún no); probar la v2 con otros documentos (Lo logré en parte); cambiar varias cosas sin decir qué corrige cada una.

**Documenta la decisión.** Para «Lo logré», la entrada tiene fecha, título, contexto, decisión, consecuencias buenas y malas, y estado. Ejemplo: «30-10-2026 · Pedir “sin dato” en vez de completar. Contexto: la v1 inventó la fecha en dos documentos. Decisión: la v2 obliga a escribir “sin dato” y a marcar “otro tipo”. Consecuencias: no entran datos falsos, pero quedan más campos por completar a mano. Estado: aceptada». Errores frecuentes: solo consecuencias buenas; sin estado (Lo logré en parte).

### Retroalimentación sugerida

Si lo logró: «Tu revisión campo por campo detectó la fecha que el asistente inventó para la factura 1190, y ubicaste la causa en la plantilla. La v2 lo resuelve y la probaste con los mismos cinco casos. Tu bitácora reconoce también el costo de la decisión: muy bien.»

Si lo logró en parte: «Tu ronda de prueba está completa. Revisa el contrato: la tabla le da una fecha que el documento no trae y la marcaste como correcta. Es justo el error que la supervisión tiene que atrapar. Corrígelo y ajusta el conteo de casos sin errores.»

## Autoevaluación 2 · Implementa y documenta tu propio flujo

### Cómo acompañar

Es una autoevaluación: la persona no la envía y no se califica. Hace la actividad por su cuenta, la compara con la respuesta modelo que está en el aula y revisa su trabajo con la rúbrica. Responde en el foro del módulo las consultas que surjan y usa la pauta de referencia para orientar. Si alguien comparte en el foro datos de clientes, proveedores o compañeros, pídele que los reemplace por datos inventados.

### Pauta de referencia

**Implementa el flujo con supervisión.** No hay respuesta tipo, porque cada flujo es distinto. Para «Lo logré», el flujo tiene de tres a cinco pasos marcados como disparador, herramienta, IA, revisión humana o registro, con los límites del plan gratuito, y cada punto de supervisión dice quién revisa, cuándo, qué, con qué criterio y qué se hace si falla, además del nivel que aplica. Errores frecuentes: «reviso todo» sin criterio; un punto de supervisión sin responsable (Lo logré en parte); ningún paso de revisión humana (Aún no).

**Controla riesgos y contingencia.** Para «Lo logré», hay al menos cuatro riesgos con su control, y el plan de contingencia funciona aunque la herramienta falle, por ejemplo hacer la tarea a mano en la misma planilla. Errores frecuentes: riesgos sin control (Lo logré en parte); un plan de contingencia que consiste en «volver a correr el flujo» (Aún no).

**Prueba y ajusta.** Para «Lo logré», hay diez casos, al menos tres difíciles, con su resultado, y al menos un ajuste con su causa y una versión nueva probada con los mismos diez casos. Errores frecuentes: solo casos fáciles; probar la versión nueva con otros casos, lo que impide comparar (Lo logré en parte).

**Documenta decisiones y ajustes.** Para «Lo logré», la ficha tiene sus ocho campos, usa una convención de nombres que se repite en el flujo, las plantillas, las planillas y los archivos, y refleja el último ajuste. La bitácora tiene al menos tres entradas, sobre la herramienta, el punto de supervisión y un riesgo, cada una con fecha, contexto, decisión y consecuencias. Errores frecuentes: una ficha escrita al final y desactualizada; entradas sin consecuencias (Lo logré en parte); capturas con datos personales o de la empresa (Aún no).

### Retroalimentación sugerida

Si lo logró: «Tu flujo funciona con los diez casos y cada punto de supervisión dice quién, cuándo y con qué criterio. El plan de contingencia no depende de la herramienta y la ficha está al día con la v3. Cualquier persona de tu equipo podría retomarlo.»

Si lo logró en parte: «El flujo y las pruebas están bien. Te falta la bitácora: hay una sola entrada y no dice qué consecuencias tuvo la decisión. Agrega las decisiones sobre la herramienta y el punto de supervisión, con sus consecuencias buenas y malas.»
