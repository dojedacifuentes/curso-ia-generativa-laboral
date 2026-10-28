# Quiz M1-AE1 · Fundamentos de IA generativa

**Misión:** entender con qué herramienta vas a trabajar todo el curso
**Cuándo:** al terminar el Rise M1-T1 · Fundamentos de IA generativa, antes de pasar a prompts efectivos.
**Insignia:** Exploración de IA · **Siguiente parada:** Rise M1-T2, prompts efectivos
**Estilo:** acento #22d3ee · acento2 #ff7a59 · fondo neuronas · lema Qué es, cómo responde y dónde falla
**Ilustración:** flujo | Tu pedido (chat) · El modelo (chip) · El resultado (salida)

1. *(S1 · C1 · P03)* Una compañera de Andrés le dice: «El asistente tiene guardadas todas las respuestas y te muestra la correcta». ¿Qué explica mejor cómo genera su texto?
   - a) Busca la respuesta guardada que más se parece a tu pregunta y la copia
   - **b) Predice continuaciones probables, elige una y repite, fragmento a fragmento**
   - c) Comprende el tema como una persona experta y redacta lo que sabe
   - d) Escribe el texto completo de una vez y después lo revisa
   *Retroalimentación:* El modelo aprendió patrones y genera la respuesta pieza por pieza, eligiendo entre continuaciones probables. No copia respuestas guardadas ni «entiende» como una persona: predice texto plausible.

2. *(S2 · C1 · P07)* Andrés saca una foto al pizarrón con los turnos de la semana y quiere recibir esos turnos en una tabla. ¿Qué tipo de herramienta necesita?
   - a) Un modelo de imagen, porque la tarea parte de una foto
   - b) Un modelo de lenguaje que solo recibe texto escrito, porque el resultado es una tabla
   - **c) Una herramienta multimodal, que recibe una imagen y entrega texto**
   - d) Un modelo de audio, porque convierte contenidos de un formato a otro
   *Retroalimentación:* Leer una imagen y convertirla en texto es una tarea multimodal: entra un tipo de contenido y sale otro. Un modelo que solo recibe texto no puede leer la foto.

3. *(S2 · C2 · P05)* Verdadero o falso: «Andrés puede imprimir tal cual el afiche que le generó un modelo de imagen, porque el modelo sigue la descripción que le dio».
   - **a) Falso, porque puede traer texto ilegible o elementos mal ubicados, y se revisa antes de publicar**
   - b) Verdadero, porque el modelo ubica cada elemento justo donde se pidió en la descripción
   - c) Falso, porque los modelos de imagen no pueden dibujar personas usando zapatos de seguridad
   - d) Verdadero, porque el texto dentro de la imagen siempre sale nítido
   *Retroalimentación:* A los modelos de imagen todavía les cuesta escribir texto nítido y ubicar cada elemento donde se pidió. Por eso una imagen generada se revisa siempre antes de imprimirla o publicarla.

4. *(S3 · C1 · P08)* Verdadero o falso: «Si Camila pega un manual de procedimientos muy largo, el asistente siempre lo lee completo antes de responder».
   - a) Verdadero, porque el asistente avisa con claridad cuando no alcanza a leer todo el texto pegado
   - b) Verdadero, porque lo que el modelo puede leer de una vez no tiene límite
   - c) Falso, porque los modelos solo leen el primer párrafo de cada texto
   - **d) Falso, porque lo que puede procesar tiene un máximo en tokens y una parte puede quedar fuera**
   *Retroalimentación:* Lo que el modelo puede leer y escribir de una vez tiene un máximo, contado en tokens. Si el texto lo supera, una parte puede quedar fuera sin un aviso claro; conviene trabajar por partes.

5. *(S3 · C1 · P09)* Camila lleva una conversación muy larga respondiendo correos de proveedores y ahora quiere preparar la minuta de una reunión de otro tema. ¿Qué le conviene hacer?
   - a) Seguir en la misma conversación, porque el modelo considera todo lo anterior con el mismo peso
   - **b) Empezar una conversación nueva y entregarle lo que necesita saber sobre esa reunión**
   - c) Pedir la minuta sin dar detalles, porque el asistente ya sabe de qué reunión se trata
   *Retroalimentación:* En una conversación muy larga lo del inicio puede perder peso o quedar fuera de la ventana de contexto, y el modelo no conoce lo que no le dices. Al cambiar de tarea conviene empezar de nuevo y darle el contexto.

6. *(S4 · C2 · P10)* Andrés pide documentos sobre seguridad en bodegas. El asistente le entrega tres títulos con enlaces, en tono seguro, pero uno de esos documentos no existe. ¿Qué límite explica ese error?
   - **a) La alucinación, porque el modelo produce información falsa que suena verdadera**
   - b) La fecha de corte, porque el documento se publicó después de que se entrenó el modelo
   - c) El sesgo, porque el modelo repite estereotipos de sus datos
   - d) El límite de tokens, porque la pregunta era demasiado larga para procesarla
   *Retroalimentación:* Inventar títulos de documentos o enlaces es una alucinación, y es más probable cuando se piden fuentes o citas. La fecha de corte explica datos que cambiaron, no documentos que nunca existieron.

7. *(S4 · H1 · C2 · P11)* La jefatura de Andrés le sugiere pegar las evaluaciones de cinco bodegueros y pedirle al asistente que elija a quién ascender a supervisor. ¿Cuál es el problema principal?
   - a) Ninguno, si las evaluaciones están completas y bien ordenadas
   - **b) Traslada los sesgos del modelo a una decisión que afecta a personas**
   - c) El asistente no puede leer evaluaciones escritas en tablas
   - d) El modelo solo puede elegir entre tres opciones a la vez
   *Retroalimentación:* El modelo puede repetir estereotipos de sus datos, y al elegir personas esos sesgos afectan a alguien. Las decisiones sobre personas las toman personas, con criterios explícitos.

8. *(S4 · C2 · P12)* Camila pregunta cuánto cuesta hoy un trámite cuyo precio se actualiza cada año. El asistente responde una cifra sin dudar. ¿Qué límite explica mejor el riesgo de esa respuesta?
   - a) Ninguno: si responde sin dudar y con una cifra exacta, el dato es confiable
   - b) El sesgo, porque el modelo repite miradas parciales de sus datos
   - c) La ventana de contexto, porque la pregunta superó el máximo de tokens
   - **d) La fecha de corte: su entrenamiento llega hasta cierta fecha y el precio pudo cambiar**
   *Retroalimentación:* Un valor que cambia cada año puede haber cambiado después de la fecha de corte del modelo, y el asistente lo daría como vigente. El tono seguro no prueba nada: la cifra se confirma en la fuente oficial.
