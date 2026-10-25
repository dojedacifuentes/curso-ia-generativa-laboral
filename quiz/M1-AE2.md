# Quiz M1-AE2 · Prompts efectivos

**Misión:** pasar de pedidos vagos a prompts que funcionan en tu trabajo
**Cuándo:** al terminar el Rise M1-T2 · Prompts efectivos, antes de pasar a parámetros de generación.
**Insignia:** Arquitectura de prompts · **Siguiente parada:** Rise M1-T3, parámetros de generación
**Estilo:** acento #fbbf24 · acento2 #a78bfa · fondo circuito · lema De un pedido vago a un prompt que funciona
**Ilustración:** flujo | Tu idea (chispa) · Tu prompt (doc) · La respuesta (chat)

1. *(S1 · C1 · P02)* Rosa escribe: «Actúa como recepcionista de un centro médico. Un paciente reclama porque le cambiaron la hora sin aviso. Redacta una respuesta. Entrégala en cuatro líneas, con tono cordial». ¿Qué parte es el contexto?
   - a) «Actúa como recepcionista de un centro médico»
   - **b) «Un paciente reclama porque le cambiaron la hora sin aviso»**
   - c) «Redacta una respuesta»
   - d) «Entrégala en cuatro líneas, con tono cordial»
   *Retroalimentación:* El contexto explica la situación: qué pasó y con quién. «Actúa como…» es el rol, «Redacta» es la tarea y «cuatro líneas, tono cordial» es el formato.

2. *(S1 · C1 · P03)* Andrés escribe: «Actúa como encargado de bodega. Redacta un aviso en tres líneas, con tono directo». Para cumplir la meta mínima de este tema, ¿qué componente le falta?
   - a) El rol: quién escribe y desde qué perspectiva
   - b) El formato: la forma, el largo y el tono
   - **c) El contexto: qué pasó, quién leerá el aviso y para qué**
   - d) La tarea: qué tiene que hacer el asistente
   *Retroalimentación:* El prompt tiene rol, tarea y formato, pero no dice la situación ni a quién va dirigido. Sin contexto, el asistente no sabe qué es lo importante y entrega algo genérico.

3. *(S1 · H1 · C1 · P07)* Camila debe resumir el acta de una reunión para dos compañeras que no asistieron. ¿Cuál de estos prompts es el mejor?
   - a) «Resume el acta, redacta el correo para la jefatura y arma la lista de pendientes»
   - b) «Resume esta acta para mis compañeras, pero que no quede largo ni muy formal»
   - c) «Actúa como asistente administrativa y resume el acta de la reunión de hoy»
   - **d) «Actúa como asistente administrativa. Resume los acuerdos para dos compañeras que no asistieron, en cinco viñetas. Usa solo el acta»**
   *Retroalimentación:* La opción d tiene rol, contexto, tarea, formato y una restricción. La a mezcla tres tareas, la b dice solo lo que no quiere y la c no da contexto ni formato.

4. *(S2 · P06)* Camila envía un solo mensaje: «Resume este aviso, adapta mi carta a sus requisitos y escribe un correo de seguimiento». Recibe las tres cosas a medias. ¿Qué error cometió?
   - **a) Mezcló varias tareas: conviene pedir una a la vez y usar cada respuesta como base**
   - b) Le faltó un ejemplo de cómo quería cada una de las tres respuestas
   - c) Dio demasiado contexto sobre el aviso y el asistente se confundió
   - d) No indicó un rol, que es el componente que más cambia la respuesta
   *Retroalimentación:* Juntar varias tareas en un prompt parece más rápido, pero suele dar un resultado a medias. Lo recomendado es dividir: primero el resumen, después la carta, después el correo.

5. *(S1 · H1 · P05)* Para que el asistente ordene avisos de empleo en una tabla, Camila pega antes doce filas de ejemplo ya llenas con otros avisos. ¿Qué riesgo corre?
   - a) Ninguno: mientras más ejemplos le da, mejor sigue el formato
   - **b) Que el asistente copie de más esos ejemplos en vez de trabajar con sus datos**
   - c) Que el asistente no acepte tablas dentro de un prompt
   *Retroalimentación:* Uno o dos ejemplos bien elegidos orientan el formato. Muchos ejemplos parecidos pueden hacer que el asistente copie su contenido y pierda flexibilidad.

6. *(S3 · C2 · P10)* Ordena el ciclo de iteración. 1: Ajustas el prompt o haces una pregunta de seguimiento. 2: Pides con tu mejor prompt. 3: Repites hasta que la respuesta sea útil. 4: Revisas si la respuesta sirve.
   - a) 2 → 1 → 4 → 3
   - b) 4 → 2 → 1 → 3
   - **c) 2 → 4 → 1 → 3**
   - d) 2 → 4 → 3 → 1
   *Retroalimentación:* Primero pides, luego revisas, después ajustas y repites hasta que sirva. Ajustar antes de revisar es cambiar el prompt sin saber qué falló.

7. *(S3 · H1 · C2 · P11)* Andrés pide un resumen del reporte semanal y la respuesta agrega un proveedor que el reporte no menciona. ¿Qué ajuste corresponde en la segunda vuelta?
   - a) Concluir que la herramienta no sirve, porque la primera respuesta salió mal
   - b) Cambiar el rol por el de jefe de bodega, para que responda con más autoridad
   - c) Pedir una respuesta más larga, para que incluya más detalles del reporte
   - **d) Agregar una restricción: «usa solo el texto del reporte que te pegué»**
   *Retroalimentación:* Si la respuesta agrega datos que no diste, faltó una restricción sobre qué información usar. La primera respuesta es un punto de partida: una iteración bien dirigida suele bastar.

8. *(H2 · A2 · P14)* Andrés va a guardar en su biblioteca el prompt que le funcionó. La versión final dice «avisa a Pedro Soto, del local de Maipú, al 9 8765 4321, que…». ¿Qué hace antes de guardarla?
   - a) La guarda tal cual, para no perder la versión exacta que funcionó
   - **b) Reemplaza el nombre, el local y el teléfono por corchetes, como [cliente] y [teléfono]**
   - c) Le quita el rol y el formato, para que sirva en más situaciones
   *Retroalimentación:* Una plantilla se reutiliza y se comparte, así que las partes variables van entre corchetes y no debe tener datos personales. Quitarle componentes la hace menos útil, no más general.
