# Quiz M5-AE3 · Supervisión humana y riesgos

**Misión:** decidir dónde revisa una persona y qué hacer si el flujo falla
**Cuándo:** al terminar el tema «Supervisión humana y riesgos», antes de entregar el Hito 5 del proyecto.
**Insignia:** Flujo con guardia · **Siguiente parada:** Proyecto aplicado, Hito 5
**Estilo:** acento #ff7a59 · acento2 #fbbf24 · fondo neuronas · lema Quién mira, cuándo y qué pasa si falla
**Ilustración:** flujo | Tu flujo (engranaje) · Tu mirada (escudo) · Tu plan (ruta)

1. *(S1 · A2 · P02)* El flujo de Camila para registrar facturas pasó todas sus pruebas y su empresa autorizó usarlo. Un mes después, un proveedor nuevo envía facturas con otro formato y doce filas quedan con montos errados. ¿Qué explica mejor lo ocurrido?
   - **a) Un error en cadena: ese formato no estaba en las pruebas y el error se repitió en cada ejecución**
   - b) Una falla de la herramienta: si el flujo pasó las pruebas, el diseño no tiene nada que ver
   - c) Sesgo de automatización: la IA trató peor al proveedor nuevo
   - d) Nada grave: si pasó las pruebas, seguirá funcionando bien
   *Retroalimentación:* Las pruebas revisan los casos que imaginaste; en la vida real aparecen otros, como un formato distinto. Un dato mal leído se repite en cada ejecución, por eso el flujo necesita supervisión también después de ponerlo en marcha.

2. *(S1 · A2 · P04)* En el equipo de Paula ya nadie abre los reclamos que el flujo marca como «baja», porque «el sistema ya los clasificó». ¿Qué riesgo describe esa conducta?
   - a) Sesgo dañino: la IA reproduce un criterio injusto a gran escala
   - b) Confabulación: la IA inventa reclamos que no existen
   - **c) Sesgo de automatización: confiar de más en lo que entrega el sistema**
   - d) Error en cadena: un mapeo roto se repite en cada fila
   *Retroalimentación:* El sesgo de automatización está en las personas: dejan de revisar porque lo hizo un sistema. El sesgo dañino es el criterio injusto de la IA; aquí la conducta del equipo es la que agrava el error.

3. *(H1 · C1 · P07)* Flujo de Camila: (1) llega una factura por correo; (2) la IA extrae proveedor, monto y fecha; (3) se agrega una fila a la planilla de pagos que usa la constructora. ¿Dónde conviene más un punto de control humano?
   - a) Antes del paso 1, para revisar cada correo que llega a la bandeja
   - **b) Entre los pasos 2 y 3, antes de que los datos lleguen a la planilla de pagos**
   - c) Después del pago, revisando el estado de cuenta a fin de mes
   - d) En ningún paso: la extracción de la IA ya fue probada
   *Retroalimentación:* El riesgo está en datos que la IA extrae y que otros usan para decidir un pago sin volver al original. Revisar después del pago llega tarde, cuando el error ya costó dinero.

4. *(H1 · C1 · P08)* Andrés define criterios de aprobación para revisar cada borrador de aviso de atraso antes de enviarlo. ¿Cuál es el mejor criterio?
   - a) «¿El borrador se ve bien?»
   - b) «Revisar los borradores cuando haya tiempo»
   - c) «Si el flujo no marcó error, aprobar»
   - **d) «¿La fecha del aviso coincide con la de la planilla?»**
   *Retroalimentación:* Un criterio de aprobación es una pregunta de sí o no que se responde en segundos comparando con el dato original. Sin criterios, la revisión se vuelve un clic automático: «aprobado, aprobado, aprobado».

5. *(S2 · C1 · P08)* A la jefatura de Camila le gustaría que un flujo ponga puntaje a cada currículum de una vacante y descarte solo a los de puntaje bajo. Según la tabla de supervisión del curso, ¿qué corresponde?
   - **a) Mando humano: no automatizar la decisión; la toma una persona**
   - b) Control humano: revisar cada semana una muestra de los descartados
   - c) Dejar que el flujo descarte y avisar por correo a cada persona descartada
   - d) Revisar solo los casos en que alguien reclame
   *Retroalimentación:* Descartar a alguien en una selección decide algo importante sobre una persona: esa decisión no se automatiza. Revisar una muestra sirve para pasos de riesgo bajo, no para decisiones así.

6. *(S3 · C2 · P10)* Andrés quiere que la IA corrija los nombres de clientes mal escritos en su planilla de despachos. ¿Qué diseño hace el flujo más reversible?
   - a) Reemplazar el nombre original por el corregido, para no duplicar datos
   - b) Enviar la corrección directo a cada cliente, para que la confirme
   - **c) Escribir el nombre corregido en una columna nueva y conservar el original**
   - d) Borrar el historial de ejecuciones, para dejar la planilla ordenada
   *Retroalimentación:* Un flujo reversible no sobrescribe el original: así puedes comparar y deshacer si la IA se equivoca. Un correo enviado no se puede recoger, y sin historial se pierde la huella.

7. *(C2 · H1 · A1 · P11)* «Mi plan de contingencia está completo: dice dónde se pausa el flujo», afirma Andrés. ¿Es así?
   - a) Verdadero, porque una vez detenido el flujo, la plataforma resuelve el resto
   - b) Verdadero, porque detener el flujo es lo único urgente cuando falla
   - c) Falso, porque le falta solo una cosa: a quién avisar cuando el flujo falle
   - **d) Falso, porque también debe decir cómo detectar la falla, seguir a mano, recuperar, avisar y quién responde**
   *Retroalimentación:* Un plan de contingencia responde seis preguntas, y detener el flujo es solo una. Además, quien lo pone en marcha responde por sus resultados: la respuesta no puede ser «el sistema».

8. *(C1 · A2 · P12)* Paula sembró 3 errores en 10 reclamos ficticios. Sin su control llegaron 3 de 3 errores al resultado; con su control, todavía llegaron 2 de 3. ¿Qué decisión corresponde?
   - a) Mantener el control tal como está, porque ya redujo los errores
   - **b) Subir la supervisión, porque todavía pasan errores importantes**
   - c) Quitar el control, porque no detecta todos los errores
   - d) Ajustarlo a una muestra pequeña, para revisar menos
   *Retroalimentación:* Si con el control siguen pasando errores, hay que subir la supervisión. Revisar solo una muestra conviene cuando el control casi nunca encuentra errores, no cuando se le escapan.
