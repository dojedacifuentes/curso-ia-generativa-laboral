# Quiz M1-AE3 · Parámetros de generación

**Misión:** ajustar cómo responde el modelo según lo que necesita tu tarea
**Cuándo:** al terminar el tema «Parámetros de generación», antes de pasar a validación de resultados.
**Insignia:** Respuestas afinadas · **Siguiente parada:** tema «Validación de resultados»
**Estilo:** acento #a78bfa · acento2 #34d399 · fondo neuronas · lema El mismo pedido, distintas respuestas
**Ilustración:** flujo | Una consigna (doc) · Los ajustes (engranaje) · Las salidas (barras)

1. *(S1 · S2 · C1 · P08)* En AI Studio, con un modelo que respeta la temperatura, Andrés va a pasar a una tabla los montos de diez boletas. ¿Qué ajuste le conviene?
   - a) Temperatura alta, porque más variación entrega una tabla más completa
   - **b) Temperatura baja, porque la tarea tiene una respuesta acotada y exige precisión**
   - c) Temperatura alta y top-p bajo a la vez, para equilibrar los dos efectos
   - d) Cualquiera, porque la temperatura solo cambia el largo de la respuesta, no los datos
   *Retroalimentación:* Copiar montos es una tarea de precisión: con temperatura baja el modelo se inclina por las opciones más probables y responde de forma más consistente. Mover temperatura y top-p a la vez impide saber cuál produjo el cambio.

2. *(S1 · P03)* Un compañero de Camila le dice: «Si subo la temperatura, el modelo va a saber más del tema». ¿Qué le responde Camila?
   - a) Que tiene razón, porque con más temperatura el modelo consulta más información en internet
   - b) Que tiene razón solo con valores sobre 1, que activan respuestas más expertas
   - **c) Que no: la temperatura no cambia lo que el modelo sabe, sino cuánto se arriesga al elegir**
   - d) Que no: para que sepa más del tema hay que bajar la temperatura, no subirla
   *Retroalimentación:* La temperatura regula cuánto azar hay al elegir cada fragmento, no el conocimiento del modelo. Más temperatura da respuestas más variadas, no más informadas, y bajarla tampoco le agrega conocimiento.

3. *(S1 · S3 · P05)* En AI Studio, Andrés elige Gemini 4 y cambia la temperatura de 0,2 a 1,5. Las salidas varían igual que antes. ¿Qué es lo más probable?
   - **a) Ese modelo ignora la temperatura que se envía: el valor lo fija el proveedor**
   - b) Debe subirla hasta 2, porque bajo ese valor el ajuste no tiene efecto
   - c) La temperatura ya no existe en los modelos nuevos, así que el azar desapareció
   - d) Cambió también el top-p sin darse cuenta, y los dos efectos se anularon
   *Retroalimentación:* Los modelos Gemini 4 y Gemini 3.6 en adelante ignoran la temperatura que les envías. La temperatura sigue existiendo, pero la fija el proveedor; antes de comparar, revisa si el modelo respeta el ajuste.

4. *(S1 · S3 · P06)* En AI Studio, Camila baja mucho la cantidad máxima de tokens de salida. Su resumen termina a mitad de una frase. ¿Qué pasó?
   - a) El modelo se ajustó al largo ideal para un resumen y decidió terminar ahí
   - b) La temperatura quedó demasiado alta y el modelo perdió el hilo
   - c) El tope funciona igual que pedir «en 50 palabras» dentro del prompt, y lo respetó
   - **d) El tope cortó la respuesta: limita cuánto escribe, aunque quede incompleta**
   *Retroalimentación:* El máximo de tokens de salida es un tope: el modelo no escribe más allá y, si es muy bajo, la respuesta queda incompleta. Pedir un largo en el prompt es distinto: orienta, pero no corta.

5. *(S2 · S3 · C1 · P09)* Rosa usa Gemini en el celular, sin control de temperatura, y necesita resumir el reglamento del centro médico sin que el asistente agregue nada. ¿Qué hace?
   - a) Busca en los ajustes de la app el control de temperatura y lo baja a 0 antes de pedir el resumen
   - b) Pide cinco versiones muy distintas entre sí y elige la más corta, que suele agregar menos
   - **c) Agrega en el prompt: «usa solo el texto; si algo no aparece, escribe "no indica"»**
   - d) Usa el resumen tal como sale, porque sin control de temperatura no hay nada que ajustar
   *Retroalimentación:* En las apps de chat gratuitas no hay control de temperatura, pero la instrucción puede orientar hacia la precisión. Pedir opciones muy distintas va hacia la creatividad, que no es lo que necesita esta tarea.

6. *(H1 · A1 · C2 · P11)* Andrés compara tres versiones de un aviso. Entre una y otra cambió, al mismo tiempo, el largo y el tono. ¿Qué problema tiene su comparación?
   - a) Ninguno: cambiar todo junto ahorra intentos y da más variedad
   - b) Que tres salidas son pocas: necesita al menos diez para comparar
   - c) Que debió usar un prompt distinto en cada versión
   - **d) Que no sabrá cuál de los dos cambios produjo la diferencia**
   *Retroalimentación:* Para comparar con rigor se usa la misma consigna y se cambia una cosa a la vez. Si cambias el largo y el tono juntos, no puedes explicar qué produjo el resultado.

7. *(H1 · C2 · P15)* Rosa compara tres recordatorios para pacientes. A: breve y correcto, pero sin la dirección. B: día, hora y dirección correctos, en tres líneas. C: el más completo y cálido, pero cambia la hora. ¿Cuál elige?
   - a) La A, porque es la más breve y se lee más rápido en el celular
   - **b) La B, porque cumple el objetivo con datos correctos y un largo adecuado**
   - c) La C, porque es la que entrega más información y tiene el mejor tono para pacientes
   - d) Cualquiera, porque las tres salieron del mismo prompt y con los mismos ajustes
   *Retroalimentación:* La mejor salida es la que cumple el objetivo con los datos correctos y el largo que el lector necesita. La C se ve más completa, pero con la hora cambiada no sirve.

8. *(A1 · H1 · P14)* Andrés anota en su tabla de registro solo la versión que eligió y borra las otras dos. ¿Qué pierde?
   - a) Nada importante, porque lo que sirve para el registro es la versión ganadora
   - b) Solo el orden en que generó las versiones, que no influye en la elección
   - **c) Lo que enseñan las descartadas: qué ajuste no sirvió para esa tarea**
   - d) La posibilidad de regenerar ese mismo prompt más adelante
   *Retroalimentación:* Las salidas descartadas también enseñan, porque muestran qué ajuste no funcionó. Registrarlas todas permite repetir el experimento y explicar la elección; el prompt se puede volver a usar igual.
