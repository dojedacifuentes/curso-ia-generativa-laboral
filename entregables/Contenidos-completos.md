# IA generativa para entornos laborales · Contenidos base

Generado el 2026-10-25 desde `contenido/`. 6 módulos · 22 aprendizajes esperados.


---

# Módulo 1 · Introducción a la IA generativa y prompt básico

**Competencia:** Interactuar con modelos de IA generativa mediante prompts efectivos y validación de resultados, para apoyar tareas de oficina de forma verificada.


## M1-AE1 · Fundamentos de IA generativa

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-02
bloque: Texto + lista con viñetas

En este tema vas a conocer la herramienta con la que trabajarás todo el curso. Antes de pedirle algo a una inteligencia artificial,
conviene saber qué es, cómo produce sus respuestas, qué tipos existen y dónde se equivoca. Con eso podrás decidir con criterio cuándo
te ayuda y cuándo no.

**Aprendizaje esperado:** Explicar el funcionamiento general, los tipos y los límites de la IA generativa, ejemplificando sus usos
en tareas laborales cotidianas.

Al terminar, deberías poder:
- describir con tus palabras cómo funciona la IA generativa y qué tipos existen;
- dar al menos tres ejemplos de usos y dos de límites en tareas de trabajo.

Te acompañan dos personas que aparecen en los ejemplos del curso. **Camila** busca trabajo como asistente administrativa y quiere
preparar mejor sus postulaciones. **Andrés** es encargado de bodega en una distribuidora y quiere ordenar los reportes que entrega
cada semana. Las dos son ficticias, pero sus tareas son de cualquier oficina, tienda o bodega.

:::clave
No necesitas saber programar ni tener una licencia pagada. Todo lo que verás se puede probar con asistentes gratuitos, también
desde el celular.
:::

### P02 · Qué es la IA generativa
cubre: S1, C1
fuentes: F-M1-02, F-M1-01
bloque: Texto + tabla comparativa

La **inteligencia artificial generativa** es un tipo de IA que **produce contenido nuevo**: textos, imágenes, audio, y también
código o video. No entrega un resultado que estaba guardado en alguna parte: crea uno a partir de lo que le pides.

Para entender qué la hace distinta, compárala con otras herramientas que ya usas:

| Herramienta | Qué hace | Ejemplo |
|---|---|---|
| Buscador | Encuentra páginas que ya existen | Buscar «requisitos para ser asistente administrativa» |
| Programa con reglas | Aplica condiciones escritas por personas | Una planilla que marca en rojo el stock bajo 10 unidades |
| IA generativa | Produce un contenido nuevo según tu instrucción | «Escribe un correo breve para pedir una reunión con mi jefatura» |

A la instrucción que le das se le llama **prompt**. Puede ser una pregunta, una orden o un texto con indicaciones. Lo trabajarás a
fondo en el tema siguiente; por ahora basta saber que la calidad de lo que recibes depende mucho de lo que pides.

:::ejemplo El mismo pedido, tres herramientas
Andrés necesita avisar a su equipo que el inventario se hará el viernes. Un buscador le muestra modelos de avisos escritos por otras
personas. Una planilla con reglas no le sirve para eso. Un asistente de IA generativa le escribe un aviso nuevo, con la fecha y el
tono que él indique, en segundos.
:::

### P03 · Cómo produce sus respuestas
cubre: S1, C1
fuentes: F-M1-02, F-M1-03, F-M1-09, F-M1-13
bloque: Proceso (process block) en 3 pasos

Un modelo generativo de texto aprendió a partir de enormes cantidades de ejemplos escritos. De ese entrenamiento aprendió sobre todo
**patrones**: qué palabras suelen ir con otras, cómo se ordena una carta, cómo se responde una pregunta.

Cuando le escribes, el modelo genera la respuesta **pieza por pieza**: estima qué continuaciones son probables según todo lo que va
de la conversación, elige una, la agrega y vuelve a calcular. Esa elección tiene algo de azar, y por eso el mismo pedido puede darte
respuestas distintas. Lo hace muy rápido, y por eso parece que «escribe» frente a ti.

1. **Lee** tu mensaje y lo que va de la conversación.
2. **Predice** continuaciones probables y elige una, un fragmento a la vez.
3. **Entrega** el texto completo cuando termina.

:::clave
El modelo no «sabe» ni «entiende» como una persona: predice texto plausible. Casi siempre eso coincide con algo correcto y útil,
pero no siempre. Esa diferencia explica los límites que verás más adelante.
:::

:::error «Si lo dice con seguridad, es verdad»
El tono seguro es parte del estilo que aprendió el modelo, no una prueba de que el contenido sea correcto. Una respuesta puede sonar
impecable y estar equivocada.
:::

### P04 · Modelos de lenguaje
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-12
bloque: Texto + pestañas (tabs) con usos

Los **modelos de lenguaje** generan texto. Son la base de los asistentes conversacionales más conocidos, a los que les escribes como
si fuera un chat. Sirven para redactar, resumir, reescribir con otro tono, traducir, ordenar ideas, explicar un concepto o proponer
alternativas.

Usos laborales frecuentes:
- **Redactar borradores:** correos, avisos, cartas de presentación, minutas.
- **Resumir:** un documento largo, un reglamento interno, un aviso de empleo.
- **Reescribir:** pasar un texto informal a uno formal, o acortarlo.
- **Ordenar información:** convertir notas sueltas en una lista o en una tabla.
- **Explicar:** pedir que aclare un término técnico con un ejemplo simple.

:::ejemplo Camila y su carta de presentación
Camila tiene apuntes sueltos sobre su experiencia en atención de público. Le pide a un asistente que los ordene en una carta de
presentación de diez líneas para un aviso de asistente administrativa. Recibe un borrador en segundos. Lo revisa, corrige un dato y
cambia una frase que no suena a ella.
:::

:::comprueba
¿Cuál de estas tareas es propia de un modelo de lenguaje?
- a) Crear una fotografía de un producto
- **b) Resumir un reglamento interno en cinco puntos**
- c) Generar la voz para un video
Retroalimentación: Los modelos de lenguaje trabajan con texto. La fotografía y la voz las generan modelos de imagen y de audio.
:::

### P05 · Modelos de imagen
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-05
bloque: Texto + galería o imagen con descripción

Los **modelos de imagen** generan imágenes a partir de una descripción escrita. También pueden modificar una imagen existente:
cambiar el fondo, quitar un objeto o crear variaciones.

Usos laborales frecuentes:
- **Ilustrar** una presentación, un afiche o una publicación en redes.
- **Crear bocetos** para mostrar una idea antes de encargar un diseño.
- **Producir variantes** de una imagen para probar cuál comunica mejor.

Para pedir una imagen se describe lo que se quiere ver: objeto, estilo, colores, encuadre. Por ejemplo: «Ilustración simple de una
bodega ordenada, estilo plano, colores azul y gris, sin texto».

:::ejemplo Andrés y el aviso de seguridad
Andrés quiere un afiche que recuerde usar calzado de seguridad en la bodega. Pide una ilustración simple con una persona usando
zapatos de seguridad. Antes de imprimirla revisa los detalles: a los modelos de imagen todavía les cuesta escribir texto nítido
dentro de la imagen y ubicar cada elemento justo donde se pidió.
:::

:::error Usar cualquier imagen generada sin revisar
Las imágenes generadas pueden traer errores visibles (texto ilegible, elementos mal ubicados) o parecerse a una marca o a una
persona real. Revisa siempre antes de publicar. Licencias y derechos se ven en detalle en el módulo 4.
:::

### P06 · Modelos de audio
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-04
bloque: Texto + audio de ejemplo (opcional)

Los **modelos de audio** generan sonido: **voz sintética** a partir de un texto, música o efectos. Algunas herramientas además hacen
lo contrario, convertir una grabación en texto, lo que es útil para tomar notas de una reunión.

Usos laborales frecuentes:
- **Locutar** un video de capacitación o un mensaje informativo.
- **Leer en voz alta** un texto para revisarlo o para quien lo prefiera escuchar.
- **Crear una pista musical** de fondo para un video breve.

:::ejemplo Un mensaje para la central telefónica
Una tienda necesita un mensaje grabado con su horario de atención. En vez de grabarlo, alguien escribe el texto y un modelo de audio
lo convierte en una voz clara. Antes de usarlo, conviene escucharlo completo y fijarse en cómo suenan las siglas, los nombres y los
números.
:::

:::clave
Imitar la voz de una persona real sin su permiso es un problema ético y legal. El consentimiento y los derechos de voz se trabajan en
el módulo 4.
:::

### P07 · Qué tipo de modelo usar para cada tarea
cubre: S2, C1
fuentes: F-M1-04
bloque: Ordenar o clasificar (sorting activity)

Muchas herramientas actuales son **multimodales**: reciben o entregan más de un tipo de contenido. Puedes, por ejemplo, subir la foto
de una boleta y pedir que te la transcriba en una tabla. Aun así, cada tarea tiene un tipo de salida, y ese tipo te indica qué buscar.

| Si necesitas… | Tipo de modelo |
|---|---|
| Un correo, un resumen, una lista | Lenguaje (texto) |
| Una ilustración, un afiche, un boceto | Imagen |
| Una locución, una pista musical | Audio |
| Leer una imagen y convertirla en texto | Multimodal |

:::actividad Clasifica estas tareas
Arrastra cada tarea al tipo de modelo que corresponde:
1. Redactar la respuesta a un reclamo de un cliente. → Lenguaje
2. Crear la imagen para un aviso de oferta. → Imagen
3. Generar la voz de un video de bienvenida. → Audio
4. Convertir la foto de una guía de despacho en una tabla. → Multimodal
5. Resumir el acta de una reunión. → Lenguaje
6. Producir música de fondo para un video corto. → Audio
:::

### P08 · Tokens: cómo «lee» el modelo
cubre: S3, C1
fuentes: F-M1-06, F-M1-03
bloque: Texto + imagen de un texto dividido en fragmentos

Los modelos no leen palabras completas como tú: dividen el texto en fragmentos llamados **tokens**. Un token puede ser una palabra
corta, parte de una palabra larga, un carácter o un signo de puntuación; los espacios y las mayúsculas también cambian cómo se divide.
Una palabra como «inventario» puede quedar dividida en más de un token, y la cantidad de tokens de un mismo texto cambia según el
idioma y el modelo.

¿Por qué te importa? Porque los tokens son la unidad con que el modelo mide su trabajo:
- **Lo que puede leer y escribir de una vez** tiene un máximo, contado en tokens.
- **Los planes gratuitos** suelen limitar el uso; si pegas un documento muy largo, puede que el asistente no lo procese completo o te
  pida que esperes.
- **Una respuesta larga** también gasta tokens: pedir algo breve y preciso suele funcionar mejor.

:::actividad Mira los tokens
Algunas herramientas muestran cómo se divide un texto en tokens. Si tienes acceso, pega una frase de un aviso de empleo y observa
cuántos fragmentos aparecen. Fíjate en qué pasa con las palabras largas y con los signos.
:::

:::error «El modelo lee el documento completo, siempre»
Si el texto supera lo que el modelo puede procesar, una parte puede quedar fuera sin que te avise con claridad. En documentos largos,
pide trabajar por partes o pregunta qué secciones consideró.
:::

### P09 · Contexto: lo que el modelo tiene a la vista
cubre: S3, C1
fuentes: F-M1-07, F-M1-08, F-M1-06
bloque: Texto + escenario o conversación de ejemplo

El **contexto** es todo lo que el modelo tiene a la vista para responder: tus instrucciones, los mensajes anteriores de la
conversación y los archivos o textos que le entregaste. A su capacidad máxima se le llama **ventana de contexto**, y se mide en tokens.

Tres consecuencias prácticas:
1. **Lo que no está en el contexto, el modelo no lo conoce.** No sabe a qué empresa postulas ni cómo se llama tu jefatura, salvo que
   se lo digas.
2. **En una conversación muy larga, lo del inicio puede perder peso** o quedar fuera de la ventana. Si cambias de tarea, a veces
   conviene empezar una conversación nueva.
3. **Una conversación nueva parte, en general, sin lo anterior.** Algunas herramientas ofrecen funciones de memoria; revisa cómo
   funciona la tuya antes de suponer que «se acuerda».

:::ejemplo La misma pregunta, con y sin contexto
Camila pregunta: «¿Mi carta está bien?». El asistente responde con generalidades. Luego pega el aviso de empleo y su carta, y pregunta:
«¿Mi carta responde a los requisitos de este aviso?». Ahora recibe observaciones concretas, porque el modelo tiene a la vista lo que
necesita.
:::

:::comprueba
Andrés pide «resume el reporte de esta semana», pero no pega el reporte. ¿Qué es lo más probable?
- a) El asistente busca el reporte en los archivos de la empresa
- **b) El asistente pide el texto o inventa un resumen genérico**
- c) El asistente recuerda el reporte de la semana pasada
Retroalimentación: El modelo solo trabaja con lo que está en su contexto. Si falta el reporte, puede pedirlo o, peor, inventar uno.
:::

### P10 · Primer límite: la alucinación
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-09, F-M1-10, F-M1-15
bloque: Texto + recuadro destacado

Como el modelo predice texto plausible, a veces produce información **falsa que suena verdadera**: datos, fechas, nombres, citas o
referencias que no existen. A esto se le llama **alucinación** (también se habla de «confabulación»).

Es más probable cuando:
- le pides **datos muy específicos** (cifras, artículos de una ley, nombres de personas);
- le pides **fuentes o citas**: puede inventar títulos de documentos o enlaces;
- haces una **pregunta abierta que pide una respuesta larga**, o el tema exige conocimiento experto;
- el tema es **poco conocido** o muy reciente.

:::ejemplo Un dato que no estaba
Camila pide un resumen de los requisitos de un aviso y el asistente agrega «disponibilidad para viajar», que el aviso no menciona.
Si no compara con el original, podría preparar su entrevista sobre un requisito que no existe.
:::

:::clave
Una alucinación no avisa. La defensa principal es **verificar** lo importante en una fuente confiable. También ayuda entregarle el
texto con que debe trabajar y pedirle que diga «no lo sé» cuando no tenga la información. Cómo verificar con método lo trabajarás en
el tema 4 de este módulo.
:::

### P11 · Segundo límite: el sesgo
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-11
bloque: Texto + imagen comparativa

Los modelos aprenden de lo que la gente ha escrito y publicado. Si en esos datos hay estereotipos o miradas parciales, el modelo puede
**repetirlos**. A esto se le llama **sesgo**.

El sesgo aparece, por ejemplo, cuando:
- al pedir la imagen de «una persona gerente», el modelo tiende a mostrar el mismo tipo de persona y deja fuera a mujeres y a otros
  grupos;
- al pedir historias o ejemplos de oficios, asocia ciertos trabajos a hombres y otros a mujeres;
- responde mejor en algunos idiomas o formas de hablar que en otras.

:::error Usar la IA para decidir sobre personas
Pedirle a un asistente que elija «al mejor candidato» o que califique a una persona traslada sus sesgos a una decisión que afecta a
alguien. Las decisiones sobre personas las toman personas, con criterios explícitos.
:::

:::actividad Detecta el sesgo
Pide a un asistente «tres ejemplos de personas que trabajan en una bodega» y luego «tres ejemplos de personas que trabajan en
recepción». Compara las respuestas: ¿qué supuestos aparecen sobre quién hace cada trabajo?
:::

### P12 · Tercer límite: la fecha de corte
cubre: S4, C1, C2
fuentes: F-M1-09
bloque: Texto + línea de tiempo

Un modelo se entrena con información reunida **hasta cierta fecha**: su **fecha de corte**. Lo que pasó después no está en su
entrenamiento. Por eso puede dar como vigentes un valor, una norma o un precio que ya cambiaron.

Algunos asistentes pueden **buscar en internet** antes de responder y mostrar enlaces. Eso ayuda con lo reciente, pero no elimina el
problema: la búsqueda puede traer páginas poco confiables o el modelo puede resumirlas mal.

:::ejemplo Un valor desactualizado
Andrés pregunta por un valor que cambia cada año, como un monto o un porcentaje fijado por una norma. El asistente le da una cifra
de hace dos años, con total seguridad. Andrés la revisa en la página oficial del organismo y encuentra el valor vigente.
:::

:::comprueba
Verdadero o falso: «Si el asistente puede buscar en internet, ya no es necesario revisar sus respuestas».
- a) Verdadero
- **b) Falso**
Retroalimentación: Buscar en internet ayuda con lo reciente, pero las fuentes pueden ser poco confiables y el resumen puede tener
errores. Lo importante se verifica igual.
:::

### P13 · ¿Delegar o no delegar?
cubre: H1, C2
fuentes: F-M1-01, F-M1-09
bloque: Escenario o clasificación por semáforo

Conocer cómo funciona la IA generativa y dónde se equivoca te permite decidir **qué tareas conviene delegarle**. Un criterio
práctico es el semáforo:

| | Tipo de tarea | Ejemplos |
|---|---|---|
| Verde: conviene | Borradores, ideas, reformular, resumir textos que tú entregas | Primer borrador de un correo; ordenar notas; resumir un aviso |
| Amarillo: con revisión | Datos, cálculos, hechos, información reciente | Explicar una fórmula; dar una fecha; listar requisitos legales |
| Rojo: no conviene | Decisiones sobre personas, datos personales o confidenciales, lo que firmarías sin leer | Elegir a quién contratar; pegar el RUT y la dirección de un cliente |

La pregunta clave: **si la respuesta está mal, ¿quién se da cuenta y cuánto cuesta el error?** Si el error es fácil de detectar y
barato, delega. Si es difícil de detectar o grave, revisa a fondo o no delegues.

:::actividad Semáforo de tareas
Clasifica cada tarea en verde, amarillo o rojo:
1. Redactar un borrador de aviso para el diario mural. → Verde
2. Calcular las horas extra de un trabajador para su liquidación. → Amarillo
3. Decidir qué postulante pasa a entrevista. → Rojo
4. Resumir un manual de procedimientos que tú pegas. → Verde
5. Confirmar el horario vigente de atención de un servicio público. → Amarillo
6. Pegar la base de datos de clientes con sus teléfonos para que la ordene. → Rojo
:::

### P14 · Práctica guiada: prueba un asistente
cubre: H2, A1
fuentes: F-M1-02, F-M1-12
bloque: Proceso paso a paso + actividad

Ahora te toca probar. Vas a usar un asistente de IA generativa con una tarea simple y a observar qué hace bien y qué no.

1. **Abre un asistente con plan gratuito**, en el computador o en la aplicación del celular. Usa el que tengas a mano.
2. **Busca un aviso de empleo real** de un cargo que ejerces o al que aspiras y copia su texto. No incluyas datos personales tuyos ni
   de otras personas.
3. **Escribe este pedido:** «Resume este aviso de empleo en tres viñetas: funciones principales, requisitos y lo que ofrece la
   empresa. No agregues nada que no esté en el texto». Luego pega el aviso.
4. **Compara** el resumen con el aviso original, línea por línea.
5. **Anota** en tu bitácora: ¿qué resumió bien?, ¿omitió algo importante?, ¿agregó algo que no estaba?

:::clave
Guarda este aviso: lo usarás en el Hito 1 del proyecto, cuando definas tu desafío laboral real.
:::

:::error Pegar tu CV completo para «probar»
Para practicar no necesitas tus datos personales. Usa textos públicos, como un aviso, o datos ficticios. Qué datos no compartir se
profundiza en el módulo 3.
:::

### P15 · Curiosidad crítica y uso responsable
cubre: A1, A2
fuentes: F-M1-02, F-M1-12, F-M1-01
bloque: Texto + lista de verificación (checklist)

Para aprovechar la IA generativa sirven dos actitudes que se complementan.

La **curiosidad crítica** es probar sin miedo y, al mismo tiempo, preguntarse por qué el resultado salió así. Quien la practica no
descarta la herramienta al primer error ni le cree a ciegas: prueba otra forma de pedir, compara y saca conclusiones.

La **apertura a un uso responsable** es estar dispuesto a usar la tecnología haciéndose cargo de lo que produce. Algunas prácticas
básicas:
- [ ] Reviso lo que el asistente me entrega antes de usarlo o compartirlo.
- [ ] No ingreso datos personales ni información confidencial de otras personas o de una empresa.
- [ ] Cuando un texto o una imagen fue hecho con IA y eso importa para quien lo recibe, lo digo.
- [ ] La decisión final y la firma son mías, no de la herramienta.

:::ejemplo Andrés y su reporte semanal
Andrés usa un asistente para ordenar sus notas en un reporte. Antes de enviarlo, comprueba que las cifras sean las de su planilla y
quita el nombre de un proveedor que no correspondía incluir. El asistente le ahorró tiempo; la responsabilidad del reporte sigue
siendo suya.
:::

### P16 · Cierre: tres usos y dos límites
cubre: C1, C2, H1, A2
fuentes: F-M1-02, F-M1-09
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la IA generativa **produce contenido nuevo** a partir de patrones aprendidos, que genera sus respuestas
**fragmento a fragmento** y que trabaja solo con lo que tiene en su **contexto**. Conociste los modelos de **lenguaje, imagen y audio**,
y tres límites que conviene tener siempre presentes: **alucinación, sesgo y fecha de corte**.

:::actividad Tus usos y tus límites
Piensa en el cargo del aviso que guardaste y escribe:
1. **Tres usos** de la IA generativa que te servirían en ese cargo. Por ejemplo: «redactar respuestas a consultas de clientes».
2. **Dos límites** que tendrías que cuidar en ese cargo, y cómo. Por ejemplo: «puede inventar plazos de despacho: los confirmo en el
   sistema».

Guarda tu respuesta. En el próximo tema aprenderás a escribir prompts efectivos para esos mismos usos.
:::

### Ideas clave

1. La IA generativa produce contenido nuevo (texto, imagen, audio) a partir de patrones aprendidos de grandes cantidades de datos.
2. Genera sus respuestas fragmento a fragmento, eligiendo entre continuaciones probables: no «sabe», predice texto plausible, y por
   eso el mismo pedido puede dar respuestas distintas.
3. Hay modelos de lenguaje, de imagen y de audio, y herramientas multimodales que combinan tipos; la tarea define cuál usar.
4. Los modelos leen en tokens y responden solo con lo que tienen en su contexto: lo que no le das, no lo conoce.
5. Tres límites para tener siempre presentes: alucinación, sesgo y fecha de corte.
6. Conviene delegar lo que es fácil de revisar y barato si falla; lo grave o difícil de detectar se revisa a fondo o no se delega.

### Glosario

- **IA generativa**: tipo de inteligencia artificial que produce contenido nuevo, como texto, imágenes o audio, a partir de una
  instrucción.
- **Prompt**: instrucción, pregunta o texto que se le entrega a un modelo de IA generativa para obtener una respuesta.
- **Modelo de lenguaje**: modelo de IA generativa que produce y transforma texto.
- **Modelo de imagen**: modelo que genera o modifica imágenes a partir de una descripción.
- **Modelo de audio**: modelo que genera voz, música o efectos de sonido.
- **Multimodal**: herramienta o modelo que recibe o entrega más de un tipo de contenido, por ejemplo imagen y texto.
- **Token**: fragmento de texto (palabra, parte de palabra o signo) con el que el modelo lee y escribe.
- **Contexto**: información que el modelo tiene a la vista para responder: instrucciones, conversación y archivos entregados.
- **Ventana de contexto**: cantidad máxima de tokens que el modelo puede considerar de una vez.
- **Alucinación**: información falsa o inventada que el modelo presenta como si fuera verdadera.
- **Sesgo**: tendencia a repetir estereotipos o miradas parciales presentes en los datos de entrenamiento.
- **Fecha de corte**: fecha hasta la cual llega la información con que se entrenó un modelo.

### Conexión con el proyecto

El aviso de empleo de la práctica guiada (P14) y tus tres usos y dos límites (P16) son el punto de partida del **Hito 1 del proyecto
aplicado: problema u oportunidad real + biblioteca de prompts v1**. Allí elegirás una tarea de ese cargo como tu desafío laboral real.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` (consultadas el 24-10-2026).

- F-M1-01 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-1
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-03 · Google for Developers (2026). Introducción a los modelos de lenguaje grandes. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- F-M1-04 · Google Cloud (s. f.). ¿Qué es la IA multimodal? https://cloud.google.com/use-cases/multimodal-ai?hl=es
- F-M1-05 · OpenAI (2026). Image generation: limitations. https://developers.openai.com/api/docs/guides/image-generation
- F-M1-06 · OpenAI Help Center (2026). Entender y contar tokens. https://help.openai.com/es-es/articles/4936856-understanding-and-counting-tokens
- F-M1-07 · Anthropic (2026). Context windows. https://platform.claude.com/docs/en/build-with-claude/context-windows
- F-M1-08 · OpenAI Help Center (2026). Memoria en ChatGPT. https://help.openai.com/es-es/articles/8590148-memory-in-chatgpt
- F-M1-09 · OpenAI Help Center (2026). ¿Dice ChatGPT la verdad? https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- F-M1-10 · OpenAI; Kalai y otros (2025). Por qué alucinan los modelos de lenguaje. https://openai.com/es-419/index/why-language-models-hallucinate/
- F-M1-11 · Noticias ONU (2024). La inteligencia artificial ya reproduce estereotipos de género. https://news.un.org/es/story/2024/03/1528182
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419

Pendiente de probar a mano: el tokenizador de OpenAI (https://platform.openai.com/tokenizer) para la actividad de P08 (si pide cuenta y
si funciona en el celular).


## M1-AE2 · Prompts efectivos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-12, F-M1-13, F-H-14, F-H-12, F-H-02, F-H-17, F-H-23
bloque: Texto + lista con viñetas

En el tema anterior viste que la calidad de lo que recibes depende mucho de lo que pides. Ahora vas a aprender a pedir bien: a
escribir instrucciones claras, revisar la respuesta y ajustar el pedido hasta que te sirva.

**Aprendizaje esperado:** Formular prompts efectivos con rol, contexto, tarea y formato para obtener respuestas útiles en tareas
laborales simples.

Al terminar, deberías poder:
- escribir un prompt que incluya rol, contexto, tarea y formato;
- mejorar una respuesta iterando al menos una vez, hasta que sea útil para tu tarea.

En este curso usarás **Gemini** como asistente principal: tiene aplicación gratuita para Android y iPhone, y funciona con tu cuenta de
Google. Si prefieres otro, sirven también **ChatGPT** o **Microsoft Copilot**, que tienen versión gratuita y aplicación para el
celular. **Claude** es otra alternativa, pero exige ser mayor de 18 años.

Vuelven Camila y Andrés. **Camila** sigue postulando a cargos de asistente administrativa. **Andrés** quiere que sus reportes de
bodega le tomen menos tiempo. Los dos van a pasar de pedidos vagos a prompts que funcionan.

:::clave
Un buen prompt no es una fórmula mágica. Es una instrucción clara, como la que le darías a una persona que recién llega a tu equipo,
y casi siempre necesita una segunda vuelta.
:::

### P02 · Anatomía de un prompt
cubre: S1, C1
fuentes: F-M1-12, F-M1-13, F-M1-14, F-M1-15
bloque: Texto + tabla o imagen con etiquetas (labeled graphic)

Las guías de Google, Microsoft y Anthropic proponen estructuras parecidas para escribir prompts. Con distintos nombres, todas hablan de
lo mismo: quién responde, qué necesita saber, qué tiene que hacer y cómo entregarlo. En este curso usamos cinco componentes.

| Componente | Pregunta que responde | Ejemplo |
|---|---|---|
| **Rol** | ¿Desde qué perspectiva responde? | «Actúa como asistente administrativa con experiencia en atención de público» |
| **Contexto** | ¿Cuál es la situación, para quién y por qué? | «Postulo a un cargo en una clínica; la carta la leerá la jefa de recursos humanos» |
| **Tarea** | ¿Qué tiene que hacer? | «Redacta el primer párrafo de mi carta de presentación» |
| **Formato** | ¿Cómo lo entrega? | «Un párrafo de no más de 80 palabras, tono cordial» |
| **Restricciones** | ¿Qué límites debe respetar? | «Usa solo la experiencia que te doy; no inventes logros» |

No es obligatorio usar los cinco en cada prompt. Un pedido muy simple puede funcionar con tarea y formato. Pero mientras más depende
la respuesta de tu situación, más componentes conviene incluir. En este tema, la meta mínima es que tus prompts tengan **rol,
contexto, tarea y formato**.

:::ejemplo El prompt completo de Camila
«Actúa como asistente administrativa con experiencia en atención de público. Postulo a un cargo en una clínica y la carta la leerá la
jefa de recursos humanos. Redacta el primer párrafo de mi carta de presentación. Entrégalo en un párrafo de no más de 80 palabras, con
tono cordial. Usa solo la experiencia que te doy a continuación y no inventes logros.»
:::

### P03 · Rol y contexto: ponerlo al día
cubre: S1, C1
fuentes: F-M1-12, F-M1-14, F-M1-13
bloque: Texto + pestañas (tabs): rol / contexto

La guía de Anthropic propone una prueba sencilla: imagina que el asistente es una persona nueva en tu trabajo, inteligente pero sin
ningún antecedente. Si un colega no entendería tu pedido, el modelo tampoco.

**El rol** le indica desde qué perspectiva responder. No le da conocimientos que no tiene, pero orienta el vocabulario, el tono y lo
que considera importante. Ejemplos útiles para oficina:
- «Actúa como encargado de bodega que escribe a su jefatura».
- «Actúa como asistente de recursos humanos que revisa una carta».
- «Actúa como ejecutiva de atención al cliente».

**El contexto** explica la situación: para quién es el texto, para qué se usará y qué antecedentes importan. Google y Microsoft
coinciden en que el contexto mejora mucho la respuesta. También ayuda explicar el **motivo** de una instrucción: «escríbelo corto
porque se leerá en el celular» funciona mejor que solo «escríbelo corto».

:::ejemplo Andrés pone al día al asistente
Sin contexto: «Escribe un aviso sobre el inventario».
Con rol y contexto: «Actúa como encargado de bodega. El viernes cerramos a las 15:00 para hacer inventario y el equipo de ventas no
podrá retirar productos esa tarde. El aviso lo leerán vendedores que suelen pasar a buscar mercadería».
La segunda versión le permite al asistente saber a quién le habla y qué es lo importante.
:::

:::error «El asistente ya sabe a qué me refiero»
El modelo solo trabaja con lo que está en su contexto, como viste en el tema anterior. No conoce tu empresa, tu cargo ni tu jefatura
si no se lo dices.
:::

### P04 · Tarea, formato y restricciones
cubre: S1, C1
fuentes: F-M1-13, F-M1-14, F-M1-15, F-M1-12
bloque: Texto + lista + knowledge check

**La tarea** es lo que quieres que haga. Conviene empezar con un verbo claro: resume, reescribe, clasifica, redacta, ordena, compara.
Si la tarea tiene varios pasos y el orden importa, numéralos.

**El formato** es cómo quieres recibir el resultado. Las guías recomiendan ser específico:
- **Forma:** viñetas, tabla, párrafo, correo con asunto.
- **Extensión:** «en tres viñetas», «máximo 100 palabras».
- **Tono:** formal, cordial, directo.

**Las restricciones** son los límites que debe respetar: qué incluir, qué dejar fuera y de qué información sacar la respuesta. Por
ejemplo: «usa solo el texto que te pego», «no agregues datos que no estén en el reporte».

Un consejo de la guía de Anthropic: di **qué hacer** en vez de solo qué no hacer. «Escribe en frases cortas y simples» orienta mejor
que «no uses palabras difíciles».

:::comprueba
En el prompt «Resume este reglamento en cinco viñetas para trabajadores nuevos, sin agregar información externa», ¿qué parte es una
restricción?
- a) «Resume este reglamento»
- b) «en cinco viñetas»
- **c) «sin agregar información externa»**
Retroalimentación: «Resume» es la tarea y «en cinco viñetas» es el formato. «Sin agregar información externa» limita de dónde puede
sacar la respuesta: es una restricción.
:::

:::comprueba
¿Cuál de estos prompts incluye rol, contexto, tarea y formato?
- a) «Escribe un correo para un proveedor»
- **b) «Actúa como encargado de bodega. Un proveedor atrasó una entrega dos días. Redacta un correo para pedirle una nueva fecha, en
  cinco líneas y tono cordial»**
- c) «Redacta un correo cordial de cinco líneas»
Retroalimentación: La opción b dice quién escribe (rol), qué pasó (contexto), qué hacer (tarea) y cómo entregarlo (formato).
:::

### P05 · Ejemplos y datos dentro del prompt
cubre: S1, H1
fuentes: F-M1-14, F-M1-15, F-M1-02
bloque: Texto + ejemplo destacado

A veces la manera más rápida de explicar lo que quieres es **mostrar un ejemplo**. Si le das un modelo del formato o del tono que
buscas, el asistente tiende a seguirlo. Las guías de Google, Anthropic y la UNESCO recomiendan incluir ejemplos cuando ayudan.

Dos cuidados:
- **Pocos y variados.** La guía de Google advierte que demasiados ejemplos pueden hacer que el modelo los copie de más y pierda
  flexibilidad.
- **Que sean del tipo que quieres.** Si tu ejemplo es largo, la respuesta también lo será.

Otra práctica útil es **separar las instrucciones de los datos**. Cuando pegas un texto para trabajar (un aviso, unas notas, un
correo), deja claro dónde empieza y dónde termina. Por ejemplo, escribe primero la instrucción y luego «Texto:», o pon el texto entre
comillas. Así el asistente no confunde tus indicaciones con el contenido.

:::ejemplo Camila muestra el formato
«Ordena estos avisos de empleo en una tabla con estas columnas, como en el ejemplo:
Cargo | Empresa | Jornada | Requisito principal
Asistente administrativa | Clínica del Sur | Completa | Excel intermedio
Avisos: "…"»
Con una sola fila de ejemplo, el asistente entiende qué va en cada columna.
:::

:::error «Mientras más ejemplos, mejor»
Uno o dos ejemplos bien elegidos orientan el formato. Muchos ejemplos parecidos pueden hacer que el asistente copie su contenido en
vez de trabajar con tus datos.
:::

### P06 · Errores frecuentes al escribir prompts
cubre: S2
fuentes: F-M1-14, F-M1-12, F-M1-15, F-M1-02
bloque: Pestañas o acordeón (un error por pestaña)

Las guías de los proveedores coinciden en varios errores que hacen que la respuesta no sirva:

1. **Pedido vago o ambiguo.** «Hazme algo para el cliente» admite mil interpretaciones. Di qué necesitas exactamente.
2. **Falta de contexto.** Sin saber para quién ni para qué, el asistente entrega algo genérico.
3. **Jerga o redacción enredada.** Las guías recomiendan lenguaje natural, en oraciones completas, y evitar siglas internas que el
   modelo no conoce.
4. **Varias tareas mezcladas.** «Resume el acta, escribe el correo para el gerente y arma la lista de pendientes» en un solo pedido
   suele dar un resultado a medias. La guía de Google sugiere dividir las tareas complejas en varios prompts.
5. **No indicar formato ni restricciones.** Si no dices el largo ni la forma, el asistente decide por ti.
6. **Decir solo lo que no quieres.** «No lo hagas largo ni formal» deja abierto qué sí quieres.

La UNESCO agrega un cuidado: evitar prompts que pidan o refuercen contenido sesgado, por ejemplo suponer que un cargo es «de hombres» o
«de mujeres».

:::error Pedir todo en un solo mensaje
Juntar tres tareas en un prompt parece más rápido, pero suele salir peor. Pide una cosa a la vez y usa la respuesta anterior como base
para la siguiente.
:::

:::comprueba
Andrés escribe: «Revisa esto y mejóralo». ¿Cuál es el error principal?
- a) Tiene demasiadas restricciones
- **b) Es vago: no dice qué es «esto», para quién es ni qué significa «mejorar»**
- c) Le falta un ejemplo
Retroalimentación: El pedido no tiene contexto, tarea precisa ni formato. El asistente tendrá que adivinar.
:::

### P07 · Antes y después: resumir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13
bloque: Comparación antes/después (dos columnas o flashcards)

Resumir es una de las tareas de oficina que mejor delega un asistente, siempre que tú le entregues el texto. Mira cómo cambia el
resultado al agregar componentes.

**Antes:** «Resume esta minuta».
El asistente entrega un párrafo largo, mezcla temas y no destaca lo que Andrés necesita: los compromisos.

**Después:**
«Actúa como encargado de bodega **[rol]**. Esta es la minuta de la reunión semanal con ventas; la leerá mi equipo de tres personas,
que no estuvo en la reunión **[contexto]**. Resume los acuerdos y los compromisos con su responsable y su fecha **[tarea]**. Entrégalo
en una lista de máximo seis viñetas, con el formato "Compromiso – Responsable – Fecha" **[formato]**. Usa solo la información de la
minuta; si falta un responsable o una fecha, escribe "sin definir" **[restricción]**.
Minuta: "…"»

El resultado es una lista corta que el equipo puede leer en el celular, y los vacíos quedan a la vista en vez de rellenarse con datos
inventados.

:::actividad Mejora tú el prompt
Toma este pedido: «Resume el reglamento interno». Reescríbelo agregando rol, contexto, tarea, formato y una restricción. Piensa en un
lector concreto, por ejemplo una persona que entra a trabajar el lunes.
:::

:::clave
La restricción «si falta, escribe "sin definir"» es muy útil: le da al asistente una salida honesta cuando no tiene el dato.
:::

### P08 · Antes y después: reescribir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13, F-M1-14
bloque: Comparación antes/después (dos columnas o flashcards)

Reescribir es cambiar el tono, el largo o el destinatario de un texto que ya tienes. Camila escribió un mensaje para preguntar por una
postulación, pero le salió muy informal.

**Su borrador:** «Hola! Postulé hace como dos semanas y nadie me dice nada, quería saber si todavía está el puesto o no».

**Antes:** «Mejora este mensaje».
El asistente lo deja más formal, pero le agrega frases que Camila nunca diría y lo alarga al triple.

**Después:**
«Actúa como asistente de recursos humanos con experiencia en selección **[rol]**. Postulé hace dos semanas a un cargo de asistente
administrativa y quiero preguntar por el estado del proceso sin sonar insistente **[contexto]**. Reescribe mi mensaje en tono cordial y
profesional **[tarea]**. Entrégalo como correo, con asunto y un máximo de 70 palabras **[formato]**. Mantén la información que doy y no
agregues logros ni datos nuevos **[restricción]**.
Mensaje: "…"»

Ahora el correo es breve, respetuoso y sigue sonando a ella.

:::ejemplo El mismo texto, otro destinatario
Si Camila quiere enviar la misma consulta por WhatsApp, basta con cambiar el formato: «Entrégalo como mensaje de WhatsApp de dos
líneas». El resto del prompt sirve igual. Esa es la idea que usarás más adelante para armar plantillas.
:::

:::comprueba
Camila quiere que el texto conserve su forma de hablar. ¿Qué parte del prompt la protege mejor?
- a) El rol
- **b) La restricción «mantén la información que doy y no agregues datos nuevos»**
- c) El asunto del correo
Retroalimentación: La restricción le pone límites al asistente para que no cambie el contenido ni invente.
:::

### P09 · Antes y después: clasificar
cubre: H1, C1, S1
fuentes: F-M1-12, F-M1-15, F-M1-14
bloque: Comparación antes/después + tabla

Clasificar es ordenar información en categorías: correos por tema, solicitudes por urgencia, gastos por tipo. Aquí aparece **Rosa**,
recepcionista en un centro médico, que cada mañana revisa los mensajes que dejan los pacientes.

**Antes:** «Ordena estos mensajes».
El asistente los ordena por largo, o los resume uno por uno. No era lo que Rosa necesitaba.

**Después:**
«Actúa como recepcionista de un centro médico **[rol]**. Estos son mensajes de pacientes que debo derivar a distintas áreas antes de
las 9:00 **[contexto]**. Clasifica cada mensaje en una de estas categorías: Agendar hora, Cambiar o anular hora, Resultados de
exámenes, Otro **[tarea]**. Entrega una tabla con las columnas "N.º", "Resumen en cinco palabras" y "Categoría" **[formato]**. Usa solo
esas cuatro categorías; si un mensaje no calza, ponlo en Otro **[restricción]**.
Mensajes: 1. "…" 2. "…"»

Con las categorías definidas de antemano, la clasificación sale pareja y Rosa puede revisarla rápido.

:::clave
Al clasificar, **tú defines las categorías**. Si dejas que el asistente las invente, cada vez puede usar otras distintas. Además, no
pegues nombres, RUT ni datos de salud reales: para practicar, usa mensajes ficticios. Qué datos no compartir se profundiza en el
módulo 3.
:::

:::actividad Arma tu clasificación
Escribe cinco solicitudes ficticias que podrían llegar en el cargo de tu aviso de empleo. Define tres o cuatro categorías y escribe un
prompt con rol, contexto, tarea, formato y restricción para clasificarlas.
:::

### P10 · Iterar: la segunda vuelta
cubre: S3, C2
fuentes: F-M1-12, F-M1-13, F-M1-15, F-M1-02
bloque: Proceso (process block) en 4 pasos

Casi nunca la primera respuesta es la definitiva. Microsoft lo describe como un ida y vuelta; Google, como una conversación; la UNESCO
recomienda refinar e iterar. A ese ciclo se le llama **iteración**:

1. **Pides** con tu mejor prompt.
2. **Revisas** la respuesta: ¿sirve para lo que necesitas?
3. **Ajustas**: corriges el prompt o haces una pregunta de seguimiento.
4. **Repites** hasta que la respuesta sea útil.

Formas de iterar que proponen las guías:
- **Agregar contexto** que faltaba: «es para un cliente molesto».
- **Precisar el formato**: «más corto, en tres viñetas».
- **Reformular** la tarea con otras palabras.
- **Dividir** la tarea en pasos: primero el resumen, después el correo.
- **Cambiar el orden** del prompt, por ejemplo poner el texto antes de la instrucción.
- **Pedirle al asistente que mejore tu prompt**: la guía de Google lo sugiere como recurso.

Puedes iterar dentro de la misma conversación («ahora hazlo más formal») o editar tu prompt y volver a enviarlo.

:::ejemplo Andrés itera una vez
Primera respuesta: un aviso correcto, pero largo. Andrés escribe: «Acórtalo a tres líneas y pon la hora de cierre al principio». La
segunda versión ya la puede pegar en el grupo del equipo.
:::

### P11 · Leer la respuesta para saber qué ajustar
cubre: S3, H1, C2
fuentes: F-M1-12, F-M1-15, F-M1-13
bloque: Tabla + escenario

Iterar no es probar al azar. Mira qué falla en la respuesta y ajusta el componente que corresponde.

| Si la respuesta… | Probablemente faltó… | Ajuste posible |
|---|---|---|
| Es genérica, podría servirle a cualquiera | Contexto | «Es para un cliente que reclama por un despacho atrasado» |
| Tiene un tono que no corresponde | Rol o formato (tono) | «Escríbelo como encargado que habla con su jefatura, tono formal» |
| Es demasiado larga o desordenada | Formato | «Máximo cinco viñetas» |
| Agrega datos que no diste | Restricción | «Usa solo el texto que te pegué» |
| Hace otra cosa de lo que pediste | Tarea | Reformula con un verbo claro: «clasifica», no «revisa» |
| Mezcla varios temas | División en pasos | Pide una tarea a la vez |

:::ejemplo Camila diagnostica
Camila pidió un resumen de un aviso y recibió un texto bonito, pero con un requisito que el aviso no menciona. No pierde tiempo
reescribiendo todo: agrega una restricción («usa solo la información del aviso y marca con "no indica" lo que falte») y vuelve a
pedir.
:::

:::comprueba
La respuesta del asistente está bien escrita, pero es tan general que serviría para cualquier empresa. ¿Qué conviene agregar?
- a) Un límite de palabras
- **b) Contexto sobre la situación, el destinatario y el propósito**
- c) Otra tarea en el mismo mensaje
Retroalimentación: Una respuesta genérica suele indicar falta de contexto. El límite de palabras cambia el largo, no lo específico.
:::

### P12 · Perseverancia en la iteración
cubre: A1, S3
fuentes: F-M1-02, F-M1-13, F-H-12
bloque: Texto + recuadro destacado

La **perseverancia** es no rendirse con la primera respuesta, y tampoco quedarse dando vueltas sin rumbo. La UNESCO y Microsoft
coinciden en que llegar al resultado suele requerir varias iteraciones. Es normal, no es señal de que lo hiciste mal.

Algunas actitudes que ayudan:
- **Mirar cada respuesta como información.** Lo que salió mal te dice qué faltaba en el prompt.
- **Cambiar una cosa a la vez.** Si cambias todo de golpe, no sabrás qué funcionó.
- **Empezar de nuevo cuando conviene.** Si la conversación se llenó de intentos o cambiaste de tema, abre una nueva y pega tu mejor
  versión del prompt. La ayuda de Gemini también recomienda abrir una conversación nueva al cambiar de tema, para aprovechar mejor el
  uso disponible.
- **Saber cuándo parar.** Si después de varios intentos la tarea no sale, quizás no conviene delegarla. Recuerda el semáforo del tema
  anterior.

:::error «Si la primera respuesta es mala, la herramienta no sirve»
La primera respuesta es un punto de partida. Muchas veces basta una iteración con más contexto o un formato más preciso para que sea
útil.
:::

:::ejemplo Rosa no se rinde
La primera clasificación de Rosa mezcló «cambiar hora» con «agendar hora». En vez de dejarlo, agrega un ejemplo de cada categoría. En
la segunda vuelta la tabla sale bien, y Rosa guarda ese prompt mejorado para el día siguiente.
:::

### P13 · Laboratorio de prompts
cubre: H1, C1, C2, A1
fuentes: F-M1-12, F-H-14, F-H-15
bloque: Proceso paso a paso + actividad

Ahora te toca. Vas a escribir, probar e iterar un prompt para una tarea real del cargo que elegiste en el tema anterior.

1. **Abre Gemini** en la app del celular o en el navegador (o la alternativa que uses).
2. **Elige una tarea** de tu aviso de empleo que sea de resumir, reescribir o clasificar. Por ejemplo: resumir un procedimiento,
   reescribir una respuesta a un cliente o clasificar solicitudes.
3. **Prepara los datos** con información pública o ficticia. No pegues datos personales tuyos ni de otras personas.
4. **Escribe la versión 1** con rol, contexto, tarea y formato. Si puedes, agrega una restricción.
5. **Envíala y revisa** la respuesta con la tabla de la pantalla anterior.
6. **Itera al menos una vez:** ajusta el componente que falló y vuelve a enviar.
7. **Anota en tu bitácora** las dos versiones del prompt, qué cambiaste y por qué la segunda respuesta es más útil.

:::actividad Tu laboratorio
Completa este registro:
- Tarea elegida:
- Prompt versión 1:
- Qué falló en la respuesta 1:
- Prompt versión 2 (qué cambiaste):
- Por qué la respuesta 2 es útil:
:::

:::clave
Gemini puede guardar tu actividad, y revisores humanos pueden leer algunas conversaciones si ese ajuste está encendido. Por eso, para
practicar, usa datos ficticios. Cómo configurar la privacidad lo verás en el módulo 3.
:::

### P14 · De prompt a plantilla
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + ejemplo con resaltado de las partes variables

Si un prompt te funcionó, no lo pierdas. Conviértelo en una **plantilla**: un prompt reutilizable donde las partes que cambian cada vez
quedan entre **[corchetes]**. La guía de Google para Gemini ofrece una biblioteca de prompts de ejemplo por cargo, con corchetes para
personalizar, y entre ellos hay ejemplos para asistencia administrativa y para bodega.

Para armar una plantilla:
1. Toma tu mejor versión, la que obtuviste después de iterar.
2. Marca lo que cambiará la próxima vez: nombres, fechas, textos pegados, destinatarios.
3. Reemplaza cada parte por un corchete que diga qué va ahí.

:::ejemplo La plantilla de Andrés
«Actúa como encargado de bodega. El [día] cerramos a las [hora] por [motivo] y [quién se ve afectado] no podrá [qué no podrá hacer].
Redacta un aviso para [destinatarios]. Entrégalo en un máximo de [número] líneas, con la fecha y la hora al principio y tono
[tono]. No agregues información que no esté en este mensaje.»
La próxima vez, Andrés solo llena los corchetes y envía.
:::

:::error Dejar datos reales dentro de la plantilla
Si tu plantilla quedó con el nombre de un cliente o un número de teléfono, cámbialo por un corchete. Una plantilla se comparte y se
reutiliza: debe quedar limpia de datos personales.
:::

### P15 · Tu biblioteca personal de prompts
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + tabla descargable (plantilla de la biblioteca)

Una **biblioteca personal de prompts** es tu colección ordenada de plantillas que funcionan, agrupadas por tarea. Es la misma lógica
de las bibliotecas que publican los proveedores, pero hecha para tu cargo y con tus aprendizajes.

Te proponemos este formato. Puedes llevarlo en un documento, una planilla o las notas del celular:

| Campo | Qué anotar |
|---|---|
| Nombre | Un título corto: «Aviso de cierre de bodega» |
| Tarea | Resumir, reescribir, clasificar u otra |
| Plantilla | El prompt con sus [corchetes] |
| Cuándo usarla | La situación en que sirve |
| Notas de iteración | Qué ajuste la hizo funcionar: «agregar el destinatario mejoró el tono» |
| Herramienta y fecha | En qué asistente la probaste y cuándo |

**Orden y documentación** del propio trabajo no es burocracia. Te ahorra rehacer lo que ya resolviste, te permite mostrar cómo
trabajas en una entrevista y facilita compartir una plantilla con tu equipo.

:::ejemplo La biblioteca de Camila
Camila tiene cuatro plantillas: «Resumir aviso de empleo», «Adaptar carta a un aviso», «Correo de seguimiento» y «Ordenar avisos en
tabla». En cada una anotó qué ajuste la hizo funcionar. Cuando aparece un aviso nuevo, prepara su postulación en la mitad del tiempo.
Para su proyecto eligió una tarea del aviso que guardó: registrar y clasificar los documentos que llegan a la oficina.
:::

:::actividad Empieza tu biblioteca
Abre un documento o una nota y crea la tabla con los seis campos. Agrega la plantilla de tu laboratorio como primera entrada.
:::

### P16 · Cierre: tu primera biblioteca
cubre: C1, C2, H2, A2
fuentes: F-M1-12, F-M1-13
bloque: Texto + lista de verificación (checklist) + actividad de cierre

En este tema viste que un prompt efectivo tiene **rol, contexto, tarea, formato** y, cuando hace falta, **restricciones**. Conociste
los errores más comunes, practicaste resumir, reescribir y clasificar con ejemplos antes y después, y aprendiste a **iterar** mirando
qué falló en la respuesta.

Antes de guardar una plantilla en tu biblioteca, revísala con esta lista:
- [ ] Tiene rol, contexto, tarea y formato.
- [ ] Incluye al menos una restricción cuando hay riesgo de que invente o se alargue.
- [ ] La probé y la mejoré al menos una vez.
- [ ] Las partes variables están entre [corchetes].
- [ ] No tiene datos personales ni confidenciales.
- [ ] Anoté qué ajuste la hizo funcionar.

:::actividad Tres plantillas para tu cargo
Vuelve a los tres usos que escribiste al cierre del tema anterior. Para cada uno, escribe una plantilla, pruébala en Gemini, itera al
menos una vez y guárdala en tu biblioteca con sus notas. Esa será tu **biblioteca de prompts v1**.
:::

En el próximo tema verás por qué el mismo prompt puede dar respuestas distintas y cómo ajustar la longitud y la variación según lo que
necesitas.

### Ideas clave

1. Un prompt efectivo tiene rol, contexto, tarea y formato; las restricciones agregan límites cuando hay riesgo de que invente o se
   alargue.
2. Escribe como si le hablaras a una persona nueva en tu equipo: si un colega no entendería el pedido, el asistente tampoco.
3. Los errores más frecuentes son pedidos vagos, falta de contexto, varias tareas mezcladas, no indicar formato y decir solo lo que no
   quieres.
4. Uno o dos ejemplos orientan el formato; separa siempre las instrucciones de los datos que pegas.
5. Iterar es normal: revisa la respuesta, identifica qué componente falló y ajústalo, una cosa a la vez.
6. Un prompt que funciona se convierte en plantilla con [corchetes] y se guarda, con sus notas, en tu biblioteca personal.

### Glosario

- **Rol**: perspectiva desde la que se le pide al asistente que responda, por ejemplo «encargado de bodega».
- **Contexto (en un prompt)**: parte del prompt que explica la situación, para quién es la respuesta y para qué se usará.
- **Tarea**: lo que se le pide hacer al asistente, expresado con un verbo claro, como resumir o clasificar.
- **Formato**: forma, extensión y tono en que se pide la respuesta.
- **Restricción**: límite que la respuesta debe respetar, como qué información usar o qué no agregar.
- **Ejemplo en el prompt**: muestra del resultado esperado que se incluye para orientar el formato o el tono.
- **Iteración**: ciclo de pedir, revisar, ajustar y volver a pedir hasta obtener una respuesta útil.
- **Pregunta de seguimiento**: mensaje que se envía en la misma conversación para corregir o precisar la respuesta anterior.
- **Plantilla de prompt**: prompt reutilizable con las partes variables entre [corchetes].
- **Biblioteca de prompts**: colección ordenada de plantillas probadas, con notas sobre cuándo y cómo usarlas.

### Conexión con el proyecto

Tus tres plantillas de la actividad de cierre (P16), con sus notas de iteración, forman la **biblioteca de prompts v1** del **Hito 1
del proyecto aplicado: problema u oportunidad real + biblioteca de prompts v1**. La armas para resolver la tarea del cargo que elegiste
en el tema anterior, a partir de tu aviso de empleo. En el **caso M1-C1** analizarás cómo una empresa usa instrucciones y fuentes en
un asistente de IA, y aplicarás lo aprendido a tu biblioteca.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-14 · Anthropic (2026). Mejores prácticas de prompting. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-H-02 · OpenAI (s. f.). Planes y precios de ChatGPT. https://chatgpt.com/es-419/pricing/
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-17 · Microsoft (2026). Microsoft Copilot para personas: sus controles y opciones de privacidad. https://support.microsoft.com/es-es/privacy/microsoft-copilot/privacy-controls
- F-H-23 · Anthropic (2025). Consumer Terms of Service. https://www.anthropic.com/legal/consumer-terms

Recomendaciones del curso, sin fuente: el formato de seis campos de la biblioteca (P15), la tabla de diagnóstico de P11 como
organización didáctica y la lista de verificación de P16.


## M1-AE3 · Parámetros de generación

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-03, F-M1-13
bloque: Texto + lista con viñetas

En el primer tema viste que el modelo genera su respuesta fragmento a fragmento y que esa elección tiene algo de azar. En el segundo
aprendiste a escribir prompts con rol, contexto, tarea y formato. Ahora vas a ver qué más influye en la respuesta, además de tus
palabras, y cómo manejarlo según lo que necesitas.

**Aprendizaje esperado:** Ajustar parámetros de generación (temperatura, longitud, iteración) para adecuar las respuestas a distintos
objetivos de una tarea.

Al terminar, deberías poder:
- elegir un ajuste adecuado al objetivo de una tarea y explicar por qué;
- comparar varias respuestas a una misma consigna y elegir la mejor con fundamento.

Trabajarás tres ideas:
- **Temperatura:** cuánta variación hay en la forma de responder.
- **Longitud:** cuánto escribe el modelo.
- **Iteración:** pedir otra respuesta y compararla.

:::ejemplo El mismo pedido, dos respuestas
Camila pide dos veces a Gemini «tres frases para abrir mi carta de presentación». Las dos listas son distintas. No es un error: es
parte de cómo funcionan estos modelos, y en este tema aprenderás a aprovecharlo.
:::

:::clave
Aquí vas a experimentar. Lo importante no es memorizar números, sino comparar con método: cambiar una cosa, mirar qué pasa y anotarlo.
:::

### P02 · Qué es un parámetro de generación
cubre: S1
fuentes: F-M1-15, F-M1-16, F-H-38
bloque: Texto + tabla

Un **parámetro de generación** es un ajuste que cambia cómo el modelo produce la respuesta, sin cambiar tu prompt. Es parecido a los
controles de una cámara: la escena es la misma, pero el resultado cambia según cómo la configures.

Las documentaciones de Google y OpenAI describen varios parámetros. Los más comunes son estos:

| Parámetro | Qué controla | Efecto |
|---|---|---|
| **Temperatura** | Cuánto azar hay al elegir cada fragmento | Baja: respuestas más predecibles. Alta: más variadas |
| **Top-p** | Entre cuántas opciones probables elige | Valores bajos limitan la elección a las opciones más probables |
| **Máximo de tokens de salida** | Hasta cuánto puede escribir | Pone un tope al largo de la respuesta |

En este tema trabajarás sobre todo con la **temperatura** y la **longitud**, y con un tercer recurso que siempre tienes a mano: la
**iteración**, es decir, pedir otra respuesta o ajustar el pedido.

:::error «El parámetro más importante es el prompt»
El prompt es lo principal y lo que más controlas. Pero no es lo único: con el mismo prompt, la configuración del modelo y el azar
también cambian el resultado. Por eso dos personas con el mismo pedido pueden obtener respuestas distintas.
:::

### P03 · Temperatura: por qué varían las respuestas
cubre: S1, S2
fuentes: F-M1-03, F-M1-15, F-M1-16, F-H-08
bloque: Texto + imagen (dial o termómetro de baja a alta)

Recuerda cómo genera texto el modelo: en cada paso estima qué continuaciones son probables y **elige una**. Esa elección no siempre
recae en la opción más probable: tiene algo de azar. La **temperatura** regula cuánto azar hay.

- **Temperatura baja:** el modelo se inclina por las opciones más probables. Las respuestas son más enfocadas y parecidas entre sí.
  Según la documentación de Google y OpenAI, con temperatura 0 la respuesta es la más consistente y repetible.
- **Temperatura alta:** el modelo da más espacio a opciones menos probables. Las respuestas son más diversas y, a veces, más
  originales. OpenAI indica, por ejemplo, que 0,8 da salidas más aleatorias y 0,2 más enfocadas.

En la API de OpenAI la temperatura va de 0 a 2. Más alto no es «mejor»: más azar también trae más opciones que no te sirven, y te
toca elegir.

:::ejemplo Andrés y el nombre de la campaña
Andrés necesita un nombre para la campaña de orden en la bodega. Con temperatura baja, el modelo propone nombres seguros y parecidos:
«Bodega ordenada», «Orden en bodega». Con temperatura alta aparecen ideas más variadas, algunas buenas y otras que no calzan con la campaña.
Para una lluvia de ideas, esa variedad le sirve. Para el informe de stock, no.
:::

:::clave
La temperatura no cambia lo que el modelo «sabe». Cambia cuánto se arriesga al elegir las palabras.
:::

### P04 · Top-p y dónde están estos controles
cubre: S1
fuentes: F-M1-15, F-M1-16, F-H-08, F-H-37
bloque: Texto + acordeón

**Top-p** es otro parámetro relacionado con el azar. En vez de regular cuánto se arriesga el modelo, limita **entre qué opciones
elige**: solo considera las más probables hasta sumar cierta probabilidad. Con un top-p bajo, la elección se reduce a pocas opciones.
La guía de Google indica que su valor predeterminado es 0,95.

OpenAI recomienda ajustar la temperatura **o** el top-p, pero no los dos a la vez: ambos influyen en la variación y es difícil saber
cuál causó el cambio.

**¿Dónde se ajustan?** Estos parámetros aparecen en entornos para desarrolladores: la API, el Playground de OpenAI o **Google AI
Studio**, que tiene un panel llamado «Configuración de ejecución» para cambiar los parámetros del modelo. En las aplicaciones de chat
gratuitas, como Gemini o ChatGPT en el celular, no encontrarás un control de temperatura ni de top-p.

:::comprueba
Quieres que el modelo varíe menos sus respuestas. Según OpenAI, ¿qué conviene?
- a) Subir la temperatura y bajar el top-p al mismo tiempo
- **b) Ajustar uno de los dos, por ejemplo bajar la temperatura**
- c) Subir el top-p a su máximo
Retroalimentación: Los dos parámetros afectan la variación. Se recomienda mover solo uno para saber qué produjo el cambio.
:::

### P05 · En los modelos más nuevos, la temperatura la fija el proveedor
cubre: S1, S3
fuentes: F-M1-15, F-M1-17, F-M1-18, F-H-38
bloque: Texto + recuadro destacado

Hay algo importante que saber en 2026: los proveedores están **dejando de permitir que cambies la temperatura y el top-p** en sus
modelos más recientes.

- **Google:** los modelos Gemini 4 y Gemini 3.6 en adelante ignoran los valores de temperatura y top-p que les envíes.
- **Anthropic:** los modelos Claude desde la versión 4.7 solo aceptan los valores predeterminados, y desde la versión de la API del
  21 de octubre de 2026 una solicitud con temperatura o top-p da error.
- **OpenAI:** en los modelos GPT-6, cuando usan razonamiento, la temperatura y el top-p no se admiten.

¿Qué significa para ti? Que en los modelos nuevos la temperatura **sigue existiendo**, pero la fija el proveedor. El concepto te sirve
igual: explica por qué el mismo pedido da respuestas distintas y por qué a veces conviene pedir otra versión. Lo que sí controlas
siempre es tu prompt, la longitud que pides y cuántas veces iteras.

:::error «Subiendo la temperatura en cualquier herramienta cambia la respuesta»
En muchos modelos recientes el valor que pongas se ignora o da error. Antes de comparar, revisa si el modelo que usas respeta ese
ajuste.
:::

:::clave
Que un control desaparezca no hace inútil el concepto. Saber que hay azar en la generación te ayuda a no confiar en una sola respuesta
y a comparar antes de elegir.
:::

### P06 · Longitud: cuánto escribe el modelo
cubre: S1, S3
fuentes: F-M1-15, F-M1-16, F-M1-18, F-M1-13
bloque: Texto + comparación de dos respuestas

La **longitud** se puede manejar de dos maneras.

**1. Con el parámetro de tokens máximos de salida.** En la API y en AI Studio puedes fijar cuántos tokens puede escribir el modelo
como máximo. Es un tope: el modelo no escribe más allá de ese número y puede terminar antes. Si el tope es muy bajo, la respuesta
puede quedar incompleta.

**2. Pidiéndola en el prompt.** En cualquier app de chat puedes indicar la extensión: «en 50 palabras», «en tres viñetas», «en un
párrafo». Microsoft recomienda justamente dar expectativas de extensión y restricciones concretas, como un límite de palabras.

Las dos formas son distintas. El tope corta; la instrucción orienta. Cuando pides «en 50 palabras», el asistente intenta ajustarse,
pero puede pasarse o quedarse corto, así que conviene revisar.

| Objetivo | Longitud que conviene |
|---|---|
| Aviso para un grupo de WhatsApp | Muy breve: 2 o 3 líneas |
| Resumen de un reglamento para el equipo | Media: 5 a 8 viñetas |
| Borrador de un procedimiento | Más larga, por secciones |

:::ejemplo Camila ajusta el largo
Camila pide un resumen de su experiencia para el portal de empleo, que admite 300 caracteres. Primero pide «un resumen» y recibe tres
párrafos. Luego pide «un resumen de máximo 45 palabras, en una sola frase». Cuenta, ajusta una palabra y lo pega.
:::

### P07 · Iteración: pedir otra versión
cubre: S1, S3, H1
fuentes: F-M1-13, F-M1-12, F-M1-15
bloque: Texto + proceso en 2 caminos

La **iteración** es el tercer recurso del tema. Ya la usaste en el tema anterior para mejorar un prompt. Aquí la miras como una forma de
**obtener varias salidas y compararlas**. Hay dos maneras de iterar:

**Regenerar con el mismo prompt.** Como la generación tiene azar, el mismo pedido puede dar una respuesta distinta en cada intento,
como advierte Microsoft. Si tu app tiene una opción para volver a generar la respuesta, úsala. Si no, pega el mismo prompt en una
conversación nueva. Así obtienes varias versiones sin cambiar nada y puedes elegir la mejor.

**Iterar con un ajuste.** Cambias una parte del prompt (el largo, el tono, una restricción) y vuelves a pedir. Es la iteración que
practicaste con los ejemplos antes y después.

| | Qué cambias | Para qué sirve |
|---|---|---|
| Regenerar | Nada | Ver la variación natural y elegir entre opciones |
| Iterar con ajuste | Una parte del prompt | Corregir algo que no te sirvió |

:::ejemplo Andrés regenera
Andrés tiene un buen prompt para el aviso de inventario. Regenera dos veces y obtiene tres versiones parecidas, con distinto orden. Se
queda con la que pone la hora en la primera línea, porque su equipo lee el grupo en el celular.
:::

:::comprueba
¿Qué diferencia hay entre regenerar e iterar con un ajuste?
- a) No hay diferencia: las dos cambian el prompt
- **b) Regenerar repite el mismo prompt; iterar con ajuste cambia una parte del prompt**
- c) Regenerar siempre da la misma respuesta
Retroalimentación: Al regenerar no cambias nada y aprovechas la variación del modelo. Al iterar con ajuste corriges el pedido.
:::

### P08 · Creatividad y precisión
cubre: S2
fuentes: F-M1-15, F-M1-16
bloque: Texto + tabla o escala de dos extremos

Hay una relación entre **creatividad** y **precisión**. Mientras más variación permites, más ideas distintas aparecen, pero también
más riesgo de que algo se salga del pedido. Mientras menos variación, más consistentes son las respuestas, pero también más parecidas
entre sí.

Las guías de Google y OpenAI lo resumen así: valores bajos de temperatura para tareas con una respuesta acotada, y valores altos para
resultados diversos o creativos.

| Tarea | Qué necesitas | Hacia dónde ajustar |
|---|---|---|
| Extraer las fechas de una minuta | Precisión | Baja variación |
| Clasificar solicitudes en categorías fijas | Precisión | Baja variación |
| Resumir un reglamento que pegaste | Precisión | Baja variación |
| Ideas para el nombre de una campaña | Creatividad | Más variación |
| Frases distintas para abrir una carta | Creatividad | Más variación |
| Preguntas posibles para una entrevista | Variedad | Más variación, y luego eliges |

:::error «Para que sea creativo, basta con subir la temperatura»
Más variación no garantiza buenas ideas: también trae opciones que no sirven. La creatividad útil sale de un buen prompt,
varias salidas y tu criterio para elegir.
:::

:::clave
Ninguna tarea laboral necesita «máxima creatividad» en los datos. Si la respuesta incluye cifras, fechas o nombres, el objetivo es la
precisión, aunque el resto del texto sea creativo.
:::

### P09 · En el celular: instrucciones contrastadas
cubre: S2, S3
fuentes: F-M1-13, F-M1-12, F-M1-15
bloque: Comparación en dos columnas

Si tu app no tiene control de temperatura, puedes orientar la respuesta hacia la precisión o la creatividad **con la instrucción**. A
esto le llamamos **instrucciones contrastadas**: la misma consigna, con dos indicaciones opuestas.

**Hacia la precisión:**
«Responde solo con la información del texto que te pego. Si algo no aparece, escribe "no indica". Usa frases cortas y no agregues
ejemplos.»

**Hacia la creatividad:**
«Propón cinco opciones muy distintas entre sí. Usa enfoques diferentes: una formal, una cercana, una con humor, una muy breve y una
sorprendente.»

La guía de Google sugiere limitar al modelo al contexto que le entregas para que no agregue información de otra parte. Eso es lo que
hace la instrucción de precisión.

Ojo con la diferencia: la instrucción **no cambia la temperatura**. Cambia lo que le pides. El efecto se parece, y por eso te sirve en
el celular, pero no es el mismo ajuste.

:::comprueba
Rosa, la recepcionista del centro médico, necesita clasificar mensajes en cuatro categorías fijas. ¿Qué instrucción conviene?
- a) «Sé creativa e inventa las categorías que te parezcan»
- **b) «Usa solo estas cuatro categorías; si un mensaje no calza, ponlo en Otro»**
- c) «Propón cinco formas distintas de clasificar»
Retroalimentación: Clasificar en categorías fijas es una tarea de precisión. La instrucción b limita las opciones y hace la
clasificación consistente.
:::

### P10 · Configuración según la tarea
cubre: S3, C1
fuentes: F-M1-15, F-M1-16
bloque: Escenario con decisiones (scenario block)

Configurar según la tarea es decidir, antes de pedir, **qué necesita tu objetivo**: precisión o variedad, un texto corto o largo, una
respuesta o varias para elegir. Google recomienda experimentar con los valores hasta encontrar los adecuados para cada tarea.

Hazte tres preguntas:
1. **¿Hay una respuesta correcta?** Si la hay (datos, categorías, fechas), busca precisión: baja variación e instrucción de usar solo
   el texto entregado.
2. **¿Cuánto espacio tengo?** Define la longitud según dónde se usará: un mensaje, un correo, un documento.
3. **¿Me sirve elegir entre opciones?** Si sí, regenera o pide varias versiones.

Y **justifica** tu elección en una frase: qué ajuste elegiste y por qué calza con el objetivo.

:::ejemplo La justificación de Andrés
«Para resumir el reporte de stock usé una instrucción de precisión ("solo con los datos de la planilla") y un máximo de seis viñetas,
porque las cifras tienen que ser exactas y mi jefatura lo lee en el celular. No regeneré: necesito una sola versión correcta.»
:::

:::actividad Elige y justifica
Para cada tarea, indica si buscas precisión o creatividad, qué longitud pedirías y si regenerarías. Justifica en una frase.
1. Redactar la respuesta a un reclamo de un cliente.
2. Proponer ideas para una publicación de la tienda en redes sociales.
3. Pasar a una tabla los datos de cinco guías de despacho.
:::

### P11 · Comparar salidas con rigor
cubre: H1, A1, C2
fuentes: F-M1-15, F-M1-13
bloque: Texto + lista de verificación (checklist)

Comparar salidas no es elegir la que «suena mejor» a primera vista. El **rigor** está en comparar con método, para que tu elección se
pueda explicar.

Reglas para una buena comparación:
- **La misma consigna.** Usa exactamente el mismo prompt en todas las versiones, salvo lo que quieres probar.
- **Un cambio a la vez.** Si cambias el largo y el tono juntos, no sabrás qué produjo la diferencia.
- **Al menos tres salidas.** Con dos es difícil ver qué varía y qué se mantiene.
- **Criterios definidos antes de leer.** Decide qué hace buena a la respuesta para tu objetivo.

Criterios útiles para tareas de oficina:
- [ ] **Exactitud:** ¿los datos coinciden con el texto o la planilla de origen?
- [ ] **Cumple la tarea:** ¿hace lo que se pidió, sin agregar cosas?
- [ ] **Formato y longitud:** ¿respeta el largo y la forma pedidos?
- [ ] **Tono:** ¿es adecuado para quien lo va a leer?
- [ ] **Utilidad:** ¿lo podrías usar con pocos cambios?

:::error Comparar sin anotar
Si no registras qué prompt y qué ajuste usaste, después no podrás repetir el resultado que te gustó ni explicar por qué lo elegiste.
:::

:::clave
Una comparación rigurosa se puede repetir: otra persona, con tu registro, debería poder llegar a algo parecido.
:::

### P12 · Práctica A (opcional): temperatura en Google AI Studio
cubre: H1, S1, C1
fuentes: F-H-37, F-H-38, F-H-39, F-H-40, F-H-41, F-H-42
bloque: Proceso paso a paso (process block)

Esta práctica es **opcional**. Es para mayores de 18 años, con computador o navegador web, que quieran ver el efecto de la temperatura.
Si no cumples esas condiciones, pasa a la práctica B: con ella cumples lo que pide el tema.

**Google AI Studio** es un entorno gratuito de Google para probar modelos e instrucciones. Está disponible en Chile, pero exige tener
18 años o más, con la fecha de nacimiento configurada en tu cuenta de Google.

1. **Entra a AI Studio** con tu cuenta de Google.
2. **Elige un modelo que todavía respete la temperatura.** Los modelos Gemini 4 y Gemini 3.6 en adelante la ignoran. Elige uno
   anterior que aparezca en la lista, como Gemini 3.5 Flash-Lite o 3.1 Flash-Lite.
3. **Abre el panel «Configuración de ejecución»** y ubica la temperatura y la cantidad máxima de tokens de salida.
4. **Escribe un prompt creativo**, por ejemplo: «Propón tres nombres para una campaña de orden en una bodega».
5. **Prueba con temperatura baja** (por ejemplo, 0,2) tres veces y luego con **temperatura alta** (por ejemplo, 1,5) tres veces.
6. **Prueba la longitud:** baja la cantidad máxima de tokens de salida y mira qué pasa con la respuesta.
7. **Registra** todo en la tabla de la pantalla 14.

:::clave
AI Studio sin pago es un servicio no pagado: Google usa lo que envías y lo que genera el modelo para mejorar sus productos. Usa solo
datos ficticios, como los de Camila y Andrés.
:::

### P13 · Práctica B: comparar salidas en el celular
cubre: H1, C1, C2, A1
fuentes: F-M1-13, F-M1-12, F-H-14
bloque: Proceso paso a paso + actividad

Esta práctica la puede hacer cualquier persona con la app de Gemini (o la alternativa que uses). Trabajarás los tres recursos del tema
con la **misma tarea**. Elige una tarea del cargo de tu aviso, por ejemplo redactar un aviso, resumir un procedimiento o responder a un
cliente. Usa datos públicos o ficticios.

**Experimento 1 · Longitud.** Envía tu prompt pidiendo «máximo 40 palabras». Luego, en una conversación nueva, el mismo prompt con
«máximo 120 palabras». Compara: ¿qué se perdió en la versión corta?, ¿qué sobra en la larga?

**Experimento 2 · Iteración.** Envía el mismo prompt tres veces: regenera la respuesta o pégalo en tres conversaciones nuevas. Compara:
¿qué cambia entre las tres?, ¿qué se mantiene?

**Experimento 3 · Precisión o creatividad.** Envía la misma consigna con la instrucción de precisión y luego con la de creatividad que
viste en la pantalla 9. Compara cuál sirve mejor para el objetivo de tu tarea.

Al final, elige la mejor salida de cada experimento con los criterios de la pantalla 11.

:::actividad Tus tres experimentos
Haz los tres experimentos y anota cada salida en tu tabla de registro (pantalla 14). Para cada uno, escribe una frase: «Elijo la
versión __ porque __».
:::

:::clave
Haz cada experimento en una conversación nueva cuando cambies algo. Así la respuesta anterior no influye en la siguiente.
:::

### P14 · Tu tabla de registro
cubre: A1, H1, C2
fuentes: F-M1-15
bloque: Tabla descargable (plantilla de registro)

El **registro** es lo que convierte una prueba en un experimento. La guía de Google recomienda experimentar con los ajustes según la
tarea; anotar lo que pruebas te permite aprender de cada intento. Usa esta tabla en un documento, una planilla o las notas del
celular:

| N.º | Herramienta y modelo | Prompt (igual en todas) | Qué cambié | Salida (resumen) | Exactitud | Formato y largo | Tono | Utilidad | Elegida |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |

Evalúa cada criterio con una escala simple: **bien**, **regular** o **mal**. Anota la fecha de la prueba.

:::ejemplo El registro de Andrés
Andrés prueba el aviso de inventario con tres largos. La versión de 40 palabras queda «mal» en utilidad: le faltó la hora de cierre.
La de 120 queda «regular» en formato: es muy larga para el grupo. La de 60 sale «bien» en todo. Anota: «Elegida la de 60 palabras:
tiene fecha, hora y motivo, y se lee en el celular sin bajar».
:::

:::error Anotar solo la versión ganadora
Las salidas descartadas también enseñan: te muestran qué ajuste no sirvió para esa tarea. Regístralas todas.
:::

### P15 · Elegir la mejor salida con fundamento
cubre: C2, C1, S2
fuentes: F-M1-15, F-M1-16, F-M1-13
bloque: Escenario + knowledge check

Elegir con fundamento es decir **qué versión elegiste, con qué criterio y por qué las otras no**. Camila pidió tres veces una frase de
apertura para su carta, con el mismo prompt:

- **A:** «Me dirijo a ustedes para postular al cargo de asistente administrativa publicado en su sitio.»
- **B:** «Con cinco años en atención de público y manejo de agenda, quiero aportar orden y buen trato a su clínica como asistente
  administrativa.»
- **C:** «¡Soy la persona que su clínica necesita para revolucionar la administración!»

Camila elige la **B** y lo justifica: «Menciona mi experiencia real y el cargo, y tiene un tono cordial. La A es correcta pero genérica.
La C exagera y no dice nada concreto».

:::comprueba
Andrés compara tres resúmenes del reporte semanal. Uno es el más largo y detallado, pero cambia una cifra de stock. ¿Cuál conviene
elegir?
- a) El más largo, porque tiene más información
- **b) Uno que tenga las cifras correctas, aunque sea más breve**
- c) Cualquiera, porque los tres vienen del mismo prompt
Retroalimentación: En un reporte, la exactitud manda. Una versión con una cifra errada no sirve, aunque esté mejor escrita.
:::

:::error «La respuesta más larga es la mejor»
Más texto no significa más útil. La mejor salida es la que cumple el objetivo, con los datos correctos y el largo que el lector
necesita.
:::

### P16 · Cierre: ajustar según el objetivo
cubre: C1, C2, S3, A1
fuentes: F-M1-15, F-M1-13, F-M1-17, F-M1-18
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la **temperatura** regula cuánto azar hay en la respuesta, que la **longitud** se maneja con un tope o con la
instrucción, y que la **iteración** te da varias salidas para comparar. También viste que en los modelos más nuevos la temperatura la
fija el proveedor: lo que siempre controlas es tu prompt, el largo que pides y cuántas versiones generas.

La regla práctica: **primero define el objetivo, después elige el ajuste**. Precisión para datos y categorías; variedad para ideas;
longitud según dónde se leerá; varias salidas cuando te sirve elegir.

:::actividad Tu regla de configuración
Mira tus tres experimentos y escribe:
1. Para la tarea que elegiste, ¿qué configuración funcionó mejor? (instrucción de precisión o de creatividad, largo, cuántas
   versiones).
2. ¿Por qué? Justifica con lo que viste en tu tabla de registro.
3. Agrega esa regla como nota en la plantilla correspondiente de tu biblioteca de prompts.
:::

Que el mismo pedido dé respuestas distintas tiene otra consecuencia: no puedes dar por buena una respuesta solo porque se ve bien. En
el próximo tema aprenderás a **validar** lo que genera la IA, contrastándolo con fuentes confiables.

### Ideas clave

1. Un parámetro de generación cambia cómo el modelo produce la respuesta sin cambiar el prompt.
2. La temperatura regula cuánto azar hay al elegir cada fragmento: baja da respuestas más predecibles y alta, más variadas.
3. En los modelos más recientes de Google, Anthropic y OpenAI la temperatura la fija el proveedor; el concepto sigue explicando por qué
   varían las respuestas.
4. La longitud se maneja con un tope de tokens de salida o pidiéndola en el prompt; el tope corta y la instrucción orienta.
5. Iterar es regenerar con el mismo prompt o ajustar una parte de él; las dos formas te dan salidas para comparar.
6. Para datos y categorías conviene precisión; para ideas, variedad; y la elección se justifica con criterios definidos.
7. Comparar con rigor es usar la misma consigna, cambiar una cosa a la vez y registrar todas las salidas.

### Glosario

- **Parámetro de generación**: ajuste que cambia cómo el modelo produce la respuesta sin modificar el prompt.
- **Temperatura**: parámetro que regula cuánto azar hay al elegir cada fragmento de la respuesta.
- **Top-p**: parámetro que limita la elección a las opciones más probables hasta sumar cierta probabilidad.
- **Tokens máximos de salida**: tope de tokens que el modelo puede escribir en una respuesta.
- **Valor predeterminado**: valor que el proveedor asigna a un parámetro cuando la persona no lo cambia o no puede cambiarlo.
- **Regenerar**: pedir una nueva respuesta al mismo prompt, sin cambiarlo.
- **Instrucción contrastada**: la misma consigna con dos indicaciones opuestas, una hacia la precisión y otra hacia la creatividad.
- **Precisión**: cualidad de una respuesta que se ajusta a los datos y al pedido, sin agregar ni cambiar información.
- **Google AI Studio**: entorno gratuito de Google para probar modelos e instrucciones y ajustar sus parámetros; exige 18 años o más.
- **Registro de resultados**: tabla donde se anotan el prompt, el ajuste, cada salida y su evaluación.

### Conexión con el proyecto

Tu regla de configuración (P16) queda como nota en una de las plantillas de tu **biblioteca de prompts**, la del **Hito 1 del proyecto
aplicado**. En el **caso M1-C1** analizarás cómo una empresa controla la calidad de las respuestas de un asistente de IA y qué
instrucciones usa; tu tabla de registro te servirá para comparar ese caso con tu propia forma de trabajar.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M1-03 · Google for Developers (2026). Introducción a los modelos de lenguaje grandes. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-13 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Copilot. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-M1-16 · OpenAI (2026). API Reference: Create chat completion. https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create
- F-M1-17 · OpenAI (2026). Using GPT-6. https://developers.openai.com/api/docs/guides/latest-model
- F-M1-18 · Anthropic (2026). Migrating to API version 2026-10-21. https://platform.claude.com/docs/en/api/migration-2026-10-21
- F-H-08 · OpenAI (2026). ¿Por qué obtengo respuestas generadas diferentes en Playground y la API? https://help.openai.com/es-419/articles/6643200-why-am-i-getting-different-completions-on-playground-vs-the-api
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-37 · Google (2026). Guía de inicio rápido de Google AI Studio. https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=es-419
- F-H-38 · Google (2026). Estrategias de diseño de instrucciones (Prompt design strategies). https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-H-39 · Google (2026). Models | Gemini API. https://ai.google.dev/gemini-api/docs/models?hl=en
- F-H-40 · Google (2026). Gemini API Additional Terms of Service. https://ai.google.dev/gemini-api/terms?hl=en
- F-H-41 · Google (2026). Regiones disponibles para Google AI Studio y la API de Gemini. https://ai.google.dev/gemini-api/docs/available-regions?hl=es-419
- F-H-42 · Google (2026). Solucionar problemas de Google AI Studio. https://ai.google.dev/gemini-api/docs/troubleshoot-ai-studio?hl=es-419

Recomendaciones del curso, sin fuente: las tres preguntas para configurar según la tarea (P10), las reglas y criterios de comparación
(P11), la tabla de registro con escala bien/regular/mal (P14) y los textos de las instrucciones contrastadas (P09). Que las apps de
chat gratuitas no muestran control de temperatura se deduce de las páginas de planes y funciones; ningún proveedor lo dice de forma
expresa (ver Alertas de HERRAMIENTAS-1).

**Antes de publicar:** pilotear la práctica A en Google AI Studio (P12). No se pudo revisar por dentro: falta confirmar qué modelos
aparecen en la lista, que Gemini 3.5 Flash-Lite o 3.1 Flash-Lite respeten la temperatura, qué controles muestra «Configuración de
ejecución» para cada modelo y si funciona en el navegador del celular. Los valores 0,2 y 1,5 son de ejemplo y hay que comprobar que el
panel los admita.


## M1-AE4 · Validación de resultados

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-09, F-M1-01
bloque: Texto + lista con viñetas

En el primer tema conociste tres límites de la IA generativa: alucinación, sesgo y fecha de corte. En el tema anterior viste que el
mismo pedido puede dar respuestas distintas. Las dos cosas llevan a la misma conclusión: una respuesta bien escrita no está, por eso,
verificada. Ahora vas a aprender a **validar** con método antes de usar o compartir lo que genera la IA.

**Aprendizaje esperado:** Validar resultados generados por IA, contrastándolos con fuentes confiables, para detectar alucinaciones,
errores y sesgos.

Al terminar, deberías poder:
- identificar errores o sesgos en una respuesta generada;
- contrastar lo importante con al menos dos fuentes confiables y corregir o descartar lo que no puedas verificar.

Este tema se basa en **casos**. Los errores que verás son de tipos documentados por organismos y proveedores, como NIST y OpenAI.
Los ejemplos con Camila, Andrés y Rosa son ficticios, pero muestran cómo aparecen esos errores en tareas comunes. Hay además casos
reales, documentados por tribunales, en que alguien usó una respuesta sin verificar y tuvo consecuencias: verás dos en P02 y P16, y
los analizarás a fondo en el caso M1-C2.

:::clave
Validar no es desconfiar de todo. Es saber **qué** revisar, **dónde** y **cuándo** una respuesta está lista para usarse.
:::

### P02 · Por qué hay que validar
cubre: S1
fuentes: F-M1-01, F-M1-10, F-M1-09, F-M1C2-01
bloque: Texto + recuadro destacado

Un modelo de lenguaje no consulta una base de datos de verdades. Produce texto plausible a partir de patrones. NIST explica que inventar
contenido es un resultado natural de ese diseño, y OpenAI agrega que los hechos poco frecuentes, como una fecha puntual, no se deducen
de patrones.

Hay otra razón. Según OpenAI, los modelos siguen inventando en parte porque las evaluaciones con que se miden premian más adivinar que
reconocer que no saben. El resultado es una respuesta que **suena segura aunque no lo esté**.

La ayuda de ChatGPT lo dice de forma directa: el asistente puede dar respuestas incorrectas o engañosas con aparente seguridad, y la
seguridad con que responde no garantiza que sea fiable. Por eso recomienda usarlo como **primer borrador** y no como fuente final.

:::ejemplo Un dato que sonaba bien
Andrés pide «el peso máximo que una persona puede levantar sola en una bodega». El asistente responde con una cifra exacta, con
decimales y en tono seguro. Andrés no sabe de dónde sale. Antes de ponerla en el diario mural, decide buscarla en la norma y en el
organismo que corresponde.
:::

:::ejemplo Caso real: las sentencias que no existían (Mata v. Avianca, 2023)
En un juicio contra la aerolínea Avianca en Nueva York, un escrito citó seis decisiones judiciales que no existían. El abogado que
investigó había usado ChatGPT como única fuente, y el que firmó no leyó ninguna de las decisiones citadas. El 22-06-2023 el tribunal
impuso una multa de 5.000 dólares a los abogados y a su estudio, y les ordenó escribir al cliente y a los jueces que aparecían como
autores de esos fallos falsos.
:::

:::error «Si la respuesta es detallada, debe ser cierta»
El detalle y la seguridad son parte del estilo del modelo. Una cifra con decimales o una cita con número de artículo pueden ser
inventadas.
:::

### P03 · Error 1: alucinación
cubre: S1, C1
fuentes: F-M1-01, F-M1-09, F-M1-10
bloque: Texto + pestañas (tabs) con tipos de alucinación

La **alucinación**, que NIST llama **confabulación**, es contenido falso o erróneo presentado con seguridad. Aparece de varias formas:

- **Datos inventados:** cifras, fechas, nombres de personas o de empresas que no existen o no corresponden.
- **Citas y fuentes inventadas:** títulos de estudios, artículos de una ley, enlaces que no llevan a ninguna parte o que dicen otra
  cosa. La ayuda de ChatGPT advierte que puede inventar citas o estudios.
- **Razonamientos que justifican algo falso:** NIST señala que el modelo puede entregar pasos «lógicos» que hacen parecer correcta una
  respuesta equivocada.

Es más probable con hechos muy específicos o poco frecuentes, en respuestas largas a preguntas abiertas y en temas que exigen
conocimiento experto.

:::ejemplo La cita que no existía
Camila pide al asistente «un dato con fuente sobre cuánto valoran las empresas la puntualidad». Recibe un porcentaje atribuido a
un estudio con nombre y año. Al buscarlo, no encuentra ese estudio en ninguna parte. El dato no puede ir en su carta.
:::

:::error «Si trae el nombre del estudio, es real»
Un nombre de estudio, un año y un número de artículo dan apariencia de rigor, pero el modelo también los puede inventar. Toda cita se
busca en su origen.
:::

:::comprueba
¿Cuál de estas respuestas tiene más riesgo de alucinación?
- a) Un resumen de un texto que tú pegaste
- **b) Una lista de cinco estudios con autor, año y título sobre un tema poco conocido**
- c) Un correo reescrito en tono formal
Retroalimentación: Pedir fuentes, citas y datos específicos de un tema poco conocido es la situación en que más inventa. Trabajar
sobre tu propio texto reduce el riesgo.
:::

### P04 · Error 2: sesgo
cubre: S1, C1
fuentes: F-M1-01, F-M1-11, F-M1-09
bloque: Texto + imagen comparativa

El **sesgo** aparece cuando la respuesta repite estereotipos o presenta una sola mirada como si fuera la única. Es más difícil de ver
que una cifra inventada, porque el texto puede ser correcto en los datos y aun así ser parcial.

Formas documentadas:
- **Estereotipos de género y origen.** Un estudio de la UNESCO encontró que, al pedir historias, los modelos asignaban a los hombres
  trabajos más variados y de más prestigio, y a las mujeres roles domésticos o desvalorizados.
- **Subrepresentación.** NIST describe modelos de imagen que, al pedir un gerente, un médico o un juez, dejan fuera a mujeres, a
  minorías y a personas con discapacidad.
- **Una sola perspectiva.** La ayuda de ChatGPT advierte que puede simplificar o presentar una sola mirada como la verdad.
- **Respuestas demasiado uniformes.** NIST llama «homogeneización» a salidas que se parecen demasiado entre sí.

:::ejemplo El perfil que nadie pidió
Rosa pide un texto para un aviso de «técnico en mantención» para el centro médico. El borrador dice «buscamos un hombre con
experiencia». Rosa no pidió eso. Corrige el texto para que hable del cargo y de los requisitos, no del género de quien postula.
:::

:::clave
Para detectar el sesgo, pregúntate: **¿a quién deja fuera esta respuesta?, ¿qué supone sin que yo se lo haya dicho?**
:::

### P05 · Error 3: desactualización
cubre: S1, C1
fuentes: F-M1-09, F-H-07, F-H-16
bloque: Texto + línea de tiempo

La **desactualización** ocurre cuando la respuesta da como vigente algo que ya cambió. Se debe a la **fecha de corte**: el modelo no
conoce lo que pasó después de su entrenamiento, salvo que use herramientas como la búsqueda web.

Es más probable con:
- valores que cambian cada año: montos, porcentajes, tarifas;
- normas, trámites y requisitos que se modifican;
- horarios, direcciones y contactos de servicios;
- nombres de cargos y autoridades.

Gemini y ChatGPT pueden buscar en internet y mostrar fuentes con enlaces. Eso ayuda, pero no resuelve todo: la página que encontró
puede ser antigua o poco confiable, y el resumen puede tener errores.

:::ejemplo El horario que cambió
Camila pregunta el horario de atención de una oficina de un servicio público para hacer un trámite. El asistente le da un horario
con total seguridad. Camila entra al sitio del servicio y ve que el horario cambió hace unos meses.
:::

:::error «Si la respuesta trae fecha reciente, está al día»
Una respuesta puede mencionar el año actual y aun así usar un dato antiguo. Lo que importa es la fecha de la fuente, no la del texto
generado.
:::

### P06 · Otros errores: no seguir el texto y contradecirse
cubre: S1, C1
fuentes: F-M1-01, F-M1-09
bloque: Texto + knowledge check

Además de los tres errores principales, NIST documenta salidas que **no siguen el texto entregado** o que **se contradicen**. Son
frecuentes cuando le pides resumir o transformar un documento:

- **Agrega** algo que el texto no dice. Lo viste en el primer tema, cuando el resumen de un aviso incluyó un requisito que no estaba.
- **Omite** algo importante, como una fecha límite o una excepción.
- **Cambia** un dato al copiarlo: un número, un nombre, una cantidad.
- **Se contradice:** en un párrafo dice una cosa y en otro, lo contrario.

Estos errores se detectan **comparando con el original**, línea por línea. No necesitas otra fuente: el texto que entregaste es tu
referencia.

:::comprueba
Andrés pide resumir el reporte de stock. El reporte dice 120 cajas de guantes y el resumen dice 210. ¿Qué tipo de error es?
- a) Sesgo
- b) Desactualización
- **c) Salida que no sigue el texto entregado: cambió un dato**
Retroalimentación: El dato correcto estaba en el reporte. El resumen lo cambió al transformarlo. Se detecta comparando con el original.
:::

:::comprueba
Rosa recibe un borrador que en el primer párrafo dice «atendemos de lunes a viernes» y en el último «también los sábados». ¿Qué hace?
- a) Lo envía: seguramente las dos cosas son ciertas
- **b) Lo marca como contradicción y confirma el horario en la fuente del centro**
- c) Pide al asistente que elija una de las dos
Retroalimentación: Una contradicción indica que al menos una afirmación es falsa. Se resuelve con la fuente, no con el modelo.
:::

### P07 · Caso de práctica: encuentra los errores
cubre: C1, S1
fuentes: F-M1-01, F-M1-09, F-M1-11
bloque: Escenario o actividad de marcar (hotspot)

Camila pidió a un asistente: «Explícame qué hace una asistente administrativa y qué debo saber para postular en Chile». Lee la
respuesta que recibió:

> «La asistente administrativa es la secretaria que apoya al gerente. Sus funciones son atender el teléfono, archivar documentos y
> manejar la agenda. Según el estudio "Perfiles Administrativos 2019", el 87 % de las empresas pide Excel avanzado. Para postular, el sueldo mínimo vigente es de $350.000, y el trámite de certificado de antecedentes cuesta $5.000.
> Las mujeres suelen destacar en este cargo por su paciencia y orden.»

:::actividad Marca los errores
Identifica en la respuesta:
1. Un **posible dato inventado** con fuente difícil de comprobar. → El estudio con nombre, año y porcentaje.
2. Un **dato que puede estar desactualizado**. → El monto del sueldo mínimo y el costo del certificado.
3. Un **sesgo**. → Suponer que el cargo lo ejercen mujeres «por su paciencia», y que la asistente es «la secretaria del gerente».
4. Algo que **no responde a lo pedido**. → Habla del sueldo mínimo como requisito para postular, lo que no tiene sentido.

Para cada uno, escribe qué harías: verificar, corregir o descartar.
:::

:::clave
Los datos de este caso son ficticios a propósito: no los uses como información real. El objetivo es entrenar el ojo.
:::

### P08 · Criterios de confiabilidad de una fuente
cubre: S2
fuentes: F-M1-19, F-M1-20
bloque: Texto + tabla

Para contrastar necesitas **fuentes confiables**. Pero ¿cómo sabes si una fuente lo es? El investigador Mike Caulfield propone
preguntarse quién está detrás, con qué experiencia y con qué intereses. A partir de eso, usa estos criterios:

| Criterio | Pregunta | Señal de confianza |
|---|---|---|
| **Autoría** | ¿Quién publica? | Un organismo, una institución o una persona identificable con experiencia en el tema |
| **Experiencia** | ¿Sabe de esto? | Es su área de trabajo o de estudio |
| **Interés** | ¿Gana algo con que le creas? | No vende el producto del que habla, o lo dice con claridad |
| **Origen** | ¿Es la fuente original? | Es el documento, la norma o el sitio del organismo, no un comentario sobre él |
| **Fecha** | ¿Está vigente? | Tiene fecha y es reciente para un dato que cambia |
| **Independencia** | ¿Lo confirman otras? | Otras fuentes sin relación entre sí dicen lo mismo |

Un estudio de Stanford encontró que incluso personas expertas en otros temas se dejaban engañar por **logos y dominios de apariencia
seria**. El aspecto de un sitio no prueba que sea confiable.

:::error «Si el sitio se ve profesional, es confiable»
Un buen diseño, un logo o un dominio que parece institucional se pueden imitar. Lo que importa es quién está detrás, y eso se averigua
fuera del sitio.
:::

### P09 · Lectura lateral: salir del sitio para evaluarlo
cubre: S2, C2
fuentes: F-M1-20, F-M1-19
bloque: Texto + proceso en 3 pasos

Los investigadores Sam Wineburg y Sarah McGrew compararon cómo evalúan un sitio web historiadores, estudiantes y
verificadores profesionales de información. Historiadores y estudiantes leyeron el sitio de arriba abajo, sin salir de él: a eso le
llamaron **lectura vertical**. Los verificadores hicieron otra cosa: tras un vistazo rápido, **salieron del sitio** y abrieron otras
pestañas para ver qué decían otras fuentes de él. A eso le llamaron **lectura lateral**. Llegaron a mejores conclusiones en menos
tiempo.

Cómo hacer lectura lateral desde el celular:
1. **No te quedes leyendo** la página que te dio el asistente.
2. **Abre una pestaña nueva** y busca el nombre de la fuente: quién es, qué dicen otros de ella.
3. **Vuelve** solo si lo que encontraste te da confianza.

:::ejemplo Andrés revisa un sitio
El asistente le da a Andrés un enlace a un sitio con recomendaciones de seguridad para bodegas. El sitio se ve serio. Andrés busca el
nombre del sitio en otra pestaña y descubre que es de una empresa que vende fajas lumbares. No lo descarta del todo, pero busca la
información en el organismo público que corresponde.
:::

:::comprueba
¿Qué es la lectura lateral?
- a) Leer con cuidado toda la página antes de opinar
- **b) Salir del sitio y buscar qué dicen otras fuentes sobre él**
- c) Leer solo los títulos y las conclusiones
Retroalimentación: Los verificadores profesionales salen del sitio y averiguan quién está detrás. Leer más a fondo la misma página no
les dice si es confiable.
:::

### P10 · El método SIFT
cubre: S2, S3
fuentes: F-M1-19
bloque: Proceso (process block) en 4 pasos o flashcards

Mike Caulfield resumió la evaluación de información en cuatro movimientos, conocidos por su sigla en inglés: **SIFT**.

1. **Detente** (*Stop*). Antes de usar o compartir, pregúntate: ¿conozco esta fuente?, ¿sé si es confiable?
2. **Investiga la fuente** (*Investigate the source*). Averigua quién está detrás, qué experiencia tiene y qué intereses. Aquí usas la
   lectura lateral.
3. **Busca una cobertura mejor** (*Find better coverage*). Cuando importa más la afirmación que la página, busca otras fuentes
   confiables que hablen de lo mismo y mira si coinciden.
4. **Rastrea hasta el original** (*Trace claims to the original context*). Sigue la cita, el dato o la imagen hasta su origen, para
   ver si fue recortado o sacado de contexto.

SIFT se pensó para evaluar lo que circula en internet, pero sirve igual para una respuesta de IA: cada dato que el asistente te da es
una afirmación que puedes detener, investigar, contrastar y rastrear.

:::ejemplo SIFT con una respuesta de IA
Rosa recibe del asistente un requisito para un examen médico. **Se detiene**: no sabe de dónde salió. **Investiga**: el asistente
citó un blog sin autor. **Busca una cobertura mejor**: encuentra la indicación en el sitio del laboratorio y en el del centro donde
trabaja. **Rastrea**: la indicación del blog estaba recortada y omitía una excepción.
:::

### P11 · Las fuentes que muestra el asistente
cubre: S2, H1
fuentes: F-H-16, F-H-07, F-H-19, F-M1-09
bloque: Texto + imagen de una respuesta con fuentes

Varios asistentes muestran de dónde sacaron la información. A veces **Gemini** muestra un botón «Fuentes» con enlaces a sitios web o a
archivos. **ChatGPT**, con la búsqueda, puede traer citas que abren la fuente y un panel de fuentes. **Copilot** está diseñado para
incluir citas que permitan comprobar de dónde viene la información.

Es una gran ayuda, pero **una fuente citada no es una fuente verificada**. La ayuda de ChatGPT recomienda revisar las citas y abrir los
enlaces. Al hacerlo, comprueba tres cosas:
1. **¿El enlace existe y abre?**
2. **¿Dice lo que el asistente afirma?** A veces la página habla del tema, pero no dice ese dato.
3. **¿Es confiable?** Aplica los criterios y la lectura lateral.

:::error «Si trae enlace, ya está verificado»
El enlace puede no abrir, llevar a una página que no dice eso o ser poco confiable. Hasta que lo abres y lo lees, es solo una pista.
:::

:::ejemplo Camila abre los enlaces
Gemini le da a Camila tres requisitos para un curso de capacitación, con dos fuentes. La primera es el sitio del organismo y dice lo
mismo. La segunda es un foro de hace cuatro años. Camila se queda con la primera y busca otra fuente confiable para completar.
:::

### P12 · Tu checklist de validación
cubre: S3
fuentes: F-M1-19, F-M1-09, F-M1-01
bloque: Lista de verificación (checklist) descargable

Ahora juntas todo en un **checklist de validación**: una lista de pasos que aplicas a cualquier respuesta antes de usarla.

1. [ ] **Me detengo.** No copio ni envío todavía.
2. [ ] **Marco las afirmaciones verificables:** datos, cifras, fechas, nombres, citas, referencias y enlaces.
3. [ ] **Comparo con mi texto original**, si le entregué uno: ¿agregó, omitió o cambió algo?
4. [ ] **Abro las fuentes que citó** y reviso que existan y digan eso.
5. [ ] **Contrasto lo importante con al menos dos fuentes confiables**, independientes entre sí.
6. [ ] **Rastreo hasta el original:** la norma, el documento o el sitio del organismo.
7. [ ] **Reviso sesgo y vigencia:** ¿a quién deja fuera?, ¿el dato sigue vigente?
8. [ ] **Decido:** mantengo, corrijo o descarto cada afirmación.

Los pasos 1, 4, 5 y 6 vienen de SIFT y de las recomendaciones de los proveedores. **El mínimo de dos fuentes es un criterio de este
curso**: te asegura que no dependes de una sola página.

:::clave
No todo exige el checklist completo. Un correo de saludo no lo necesita. Una cifra que irá en un informe, un requisito legal o un dato
que afecta a otra persona, sí.
:::

### P13 · Corregir o descartar lo que no se puede verificar
cubre: H1, C2
fuentes: F-M1-09, F-M1-19, F-M1C2-01
bloque: Tabla de decisión + escenario

Después de contrastar, cada afirmación cae en una de estas situaciones:

| Lo que encontraste | Qué haces |
|---|---|
| Dos fuentes confiables confirman el dato | **Lo mantienes** y, si corresponde, citas la fuente |
| Las fuentes dicen otra cosa | **Lo corriges** con el dato de la fuente original |
| Las fuentes no coinciden entre sí | Buscas la fuente original o **lo dejas fuera** hasta aclararlo |
| No encuentras ninguna fuente | **Lo descartas**, o lo marcas como «no verificado» si es indispensable mencionarlo |

Fíjate en la última fila. Lo que no puedes verificar no se usa como si fuera cierto. Descartar no es perder trabajo: es evitar que un
error salga con tu nombre.

:::error Pedirle al mismo asistente que confirme su respuesta
Preguntar «¿estás seguro?» no es verificar. El asistente puede repetir el error o cambiarlo por otro con la misma seguridad. La
verificación se hace con fuentes externas. En el caso real de P02, el abogado le preguntó a ChatGPT si los casos eran reales y el
chatbot respondió que sí.
:::

:::ejemplo Andrés decide
Andrés tenía tres datos en un borrador de procedimiento. El primero lo confirmó en dos fuentes y lo mantuvo. El segundo estaba
desactualizado y lo corrigió con la norma vigente. El tercero, un porcentaje sin origen, no apareció en ninguna parte: lo borró.
:::

### P14 · Prevenir desde el prompt
cubre: S3, H1
fuentes: F-M1-15, F-M1-10
bloque: Texto + comparación antes/después

Validar es la defensa principal, pero también puedes **bajar el riesgo de error desde el prompt**. Los proveedores documentan dos
medidas:

1. **Entregar el texto y pedir que use solo ese contexto.** La guía de Google propone limitar al modelo a la información que le
   entregas. Así el asistente trabaja sobre tu documento y no rellena con datos de otra parte.
2. **Permitir que diga «no lo sé».** OpenAI explica que un modelo puede abstenerse en vez de inventar. Si se lo pides de forma
   explícita, le das una salida honesta.

**Antes:** «¿Cuáles son los requisitos para el cargo de asistente administrativa en la clínica?»
**Después:** «Usa solo el aviso que te pego. Lista los requisitos del cargo. Si un requisito no aparece en el aviso, no lo agregues. Si
no puedes responder con el aviso, dime "el aviso no lo indica". Aviso: "…"»

Estas medidas se conectan con lo que viste en el tema 2: son **restricciones**. Y se conectan con el tema 3: una instrucción de
precisión deja menos espacio para la variación.

:::clave
Un buen prompt reduce los errores, pero no los elimina. La respuesta igual se revisa con el checklist.
:::

### P15 · Práctica guiada: valida una respuesta
cubre: H1, C1, C2
fuentes: F-M1-19, F-M1-09, F-H-16
bloque: Proceso paso a paso + actividad

Ahora aplicas el checklist a una respuesta real.

1. **Abre Gemini** (o la alternativa que uses).
2. **Pide información verificable** sobre un tema del cargo de tu aviso. Por ejemplo: «¿Qué elementos de protección personal se usan
   en una bodega?» o «¿Qué debe tener una boleta electrónica?». No incluyas datos personales.
3. **Marca tres afirmaciones verificables** de la respuesta.
4. **Revisa si muestra fuentes** y ábrelas.
5. **Busca dos fuentes confiables** por cada afirmación, con lectura lateral.
6. **Decide** qué haces con cada una.

:::actividad Tu tabla de validación
| Afirmación | Fuente 1 | Fuente 2 | ¿Coinciden? | Decisión (mantener, corregir, descartar) |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

Al final, escribe la versión corregida de la respuesta, solo con lo que pudiste verificar.
:::

:::clave
Si una afirmación no se puede verificar en dos fuentes confiables, no la uses en tu versión final. Anota por qué la descartaste.
:::

### P16 · Responsabilidad profesional
cubre: A1
fuentes: F-M1-12, F-M1-01, F-H-03, F-M1C2-03
bloque: Texto + escenario

Cuando firmas un informe, envías un correo o publicas un aviso, **quien responde eres tú**, no la herramienta. La guía de Google para
Gemini lo dice: hay que revisar todo resultado antes de usarlo, porque la persona es responsable del resultado final. Los términos de
uso de OpenAI advierten que los resultados pueden no ser precisos y que no conviene tomarlos como única fuente.

NIST describe un riesgo que conviene conocer: el **sesgo de automatización**, la tendencia a confiar de más en lo que entrega una
máquina. Mientras más cómodo y rápido es el asistente, más fácil es dejar de revisar.

**Responsabilidad profesional** significa:
- revisar con más cuidado mientras más grave sería el error;
- no firmar ni enviar lo que no entiendes o no revisaste;
- avisar cuando no pudiste verificar algo, en vez de presentarlo como seguro;
- corregir rápido si descubres un error después de compartirlo.

:::ejemplo Caso real: «el chatbot lo dijo» no sirve de excusa (Moffatt v. Air Canada, 2024)
El chatbot del sitio de Air Canada le dijo a un cliente que podía pedir una tarifa con descuento después de viajar. La página de la
política decía lo contrario. Ante el tribunal, la aerolínea sostuvo que no respondía por lo que dijera el chatbot. El 14-02-2024 el
tribunal de Columbia Británica lo rechazó: la empresa responde por toda la información de su sitio, y la condenó a pagar 812,02
dólares canadienses. No se sabe qué tecnología usaba el chatbot: lo que muestra el caso es que la empresa respondió por lo que publicó.
:::

:::ejemplo Andrés firma su reporte
La jefatura de Andrés le pide un reporte con el stock del mes. Andrés usa un asistente para ordenarlo, pero antes de firmarlo compara
cada cifra con su planilla. Encuentra una diferencia, la corrige y anota al final: «Cifras revisadas contra el sistema de inventario».
:::

:::comprueba
Un compañero dice: «Si el informe tiene un error, es culpa de la IA». ¿Qué responderías?
- a) Tiene razón: la herramienta generó el texto
- **b) No: quien firma o comparte el informe responde por su contenido**
- c) Depende de qué asistente haya usado
Retroalimentación: La herramienta ayuda a producir el texto, pero la responsabilidad sobre lo que se firma o comparte es de la persona.
:::

### P17 · Honestidad intelectual y cierre
cubre: A2, C1, C2
fuentes: F-M1-02, F-M1-09
bloque: Texto + lista de verificación + actividad de cierre

La **honestidad intelectual** es no presentar como propio, ni como seguro, algo que no lo es. En el uso de IA generativa significa:
- **No hacer pasar como tuyo un texto generado** cuando eso importa: la UNESCO lo describe como una forma nueva de plagio.
- **Decir que usaste IA** cuando a quien lo recibe le importa saberlo.
- **Separar lo verificado de lo que no.** Si algo no lo pudiste confirmar, dilo.
- **No confiar en «detectores» de texto hecho con IA.** La ayuda de ChatGPT advierte que no puede determinar si un texto fue escrito
  por IA.

En este tema viste los tipos de error (**alucinación, sesgo, desactualización** y salidas que no siguen el texto), los **criterios de
confiabilidad** de una fuente, la **lectura lateral**, el método **SIFT** y tu **checklist de validación**. También practicaste
contrastar con al menos dos fuentes y decidir qué mantener, corregir o descartar.

:::actividad Tu compromiso de validación
Escribe en tu bitácora:
1. Las tres situaciones de tu cargo en que siempre aplicarás el checklist completo.
2. Qué harás cuando no puedas verificar un dato que te piden.
3. Cómo dirás que usaste IA, si corresponde.
:::

### Ideas clave

1. Una respuesta segura y detallada no es una respuesta verificada: el modelo puede inventar con el mismo tono con que acierta.
2. Los errores que buscas son alucinación (datos, citas y fuentes inventadas), sesgo, desactualización y salidas que no siguen el texto
   o se contradicen.
3. Una fuente es confiable por quién está detrás, su experiencia, sus intereses, si es original y si está vigente, no por su aspecto.
4. La lectura lateral y SIFT te enseñan a salir de la página, investigar la fuente, buscar mejor cobertura y rastrear hasta el original.
5. En este curso, lo importante se contrasta con al menos dos fuentes confiables; lo que no se puede verificar se corrige o se descarta.
6. Un buen prompt reduce el error, pero no lo elimina: la validación sigue siendo necesaria.
7. Quien firma o comparte responde por el contenido, y la honestidad intelectual exige decir qué se verificó y cuándo se usó IA.

### Glosario

- **Validación**: revisión de una respuesta generada, contrastándola con el texto original y con fuentes confiables, antes de usarla.
- **Confabulación**: nombre que usa NIST para la alucinación: contenido falso o erróneo presentado con seguridad.
- **Desactualización**: error de una respuesta que da como vigente un dato que ya cambió.
- **Afirmación verificable**: dato, cifra, fecha, nombre, cita o referencia que se puede comprobar en una fuente.
- **Fuente confiable**: fuente con autoría identificable, experiencia en el tema, intereses claros y fecha vigente.
- **Fuente original**: documento, norma o sitio del que sale un dato, a diferencia de un comentario o resumen sobre él.
- **Lectura vertical**: evaluar un sitio leyéndolo de arriba abajo, sin salir de él.
- **Lectura lateral**: evaluar un sitio saliendo de él para ver qué dicen otras fuentes sobre quién está detrás.
- **SIFT**: método de cuatro pasos para evaluar información: detenerse, investigar la fuente, buscar mejor cobertura y rastrear hasta
  el original.
- **Checklist de validación**: lista de pasos que se aplica a una respuesta generada antes de usarla o compartirla.
- **Sesgo de automatización**: tendencia a confiar de más en lo que entrega una máquina y dejar de revisarlo.
- **Honestidad intelectual**: actitud de no presentar como propio ni como seguro lo que no lo es.

### Conexión con el proyecto

Tu checklist (P12) y tu tabla de validación (P15) son las herramientas del **caso M1-C2 · Cuando la IA inventa**. Allí analizarás casos
documentados en que alguien usó respuestas de IA sin verificarlas, qué se revisó y qué no, y qué consecuencias tuvo. Luego aplicarás
el checklist a las respuestas que obtienes con tu **biblioteca de prompts** del Hito 1, y lo seguirás usando en los módulos siguientes.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M1.md`, `investigacion/HERRAMIENTAS-1.md` y, para los casos reales,
`investigacion/casos/M1-C2.md` (consultadas el 24-10-2026).

- F-M1-01 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-1
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-M1-09 · OpenAI Help Center (2026). ¿Dice ChatGPT la verdad? https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- F-M1-10 · OpenAI; Kalai y otros (2025). Por qué alucinan los modelos de lenguaje. https://openai.com/es-419/index/why-language-models-hallucinate/
- F-M1-11 · Noticias ONU (2024). La inteligencia artificial ya reproduce estereotipos de género. https://news.un.org/es/story/2024/03/1528182
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-15 · Google AI for Developers (2026). Estrategias de diseño de instrucciones. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- F-M1-19 · Caulfield, M. (2019). SIFT (The Four Moves). https://hapgood.us/2019/06/19/sift-the-four-moves/
- F-M1-20 · Wineburg, S. y McGrew, S. (2018). Lateral Reading and the Nature of Expertise (manuscrito, Stanford Digital Repository). https://purl.stanford.edu/yk133ht8603
- F-M1C2-01 · Tribunal de Distrito de EE. UU., Distrito Sur de Nueva York (22-06-2023). Mata v. Avianca, Inc., 22-cv-1461 (PKC), Opinion and Order on Sanctions. https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf
- F-M1C2-03 · Civil Resolution Tribunal de Columbia Británica (14-02-2024). Moffatt v. Air Canada, 2024 BCCRT 149. https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do
- F-H-03 · OpenAI (2026). Términos de uso. https://openai.com/es-419/policies/terms-of-use/
- F-H-07 · OpenAI (2026). Searching the web with ChatGPT. https://help.openai.com/en/articles/9237897-chatgpt-search
- F-H-16 · Google (s. f.). Ver fuentes relacionadas de las aplicaciones de Gemini. https://support.google.com/gemini/answer/14143489?hl=es
- F-H-19 · Microsoft (2026). Copilot para gente joven. https://support.microsoft.com/es-es/privacy/microsoft-copilot/young-people

Recomendaciones del curso, sin fuente: el mínimo de **dos fuentes** confiables para contrastar (C2; SIFT y la lectura lateral piden
contrastar, pero no fijan un número), la tabla de criterios de confiabilidad de P08 como síntesis didáctica, el orden del checklist de
P12, la tabla de decisión de P13 y el error «pedirle al mismo asistente que confirme» (P13), que se apoya en la recomendación de usar
la IA como borrador y no como fuente final [F-M1-09]. Los ejemplos con Camila, Andrés y Rosa son ficticios y los datos de la respuesta de
P07 son inventados a propósito. Los dos casos reales (P02 y P16) se verificaron en las resoluciones de los tribunales.


---

# Módulo 2 · Comunicación y redacción profesional

**Competencia:** Optimizar la elaboración de documentos, presentaciones y planillas de cálculo con IA generativa, cuidando tono, audiencia y exactitud, en contextos laborales.


## M2-AE1 · Redacción y comunicación con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-10, F-H-14, F-M2-08
bloque: Texto + lista con viñetas

En el módulo 1 aprendiste a escribir prompts con rol, contexto, tarea y formato, y a validar lo que entrega la IA. Ahora vas a usar
eso en lo que más se escribe en cualquier trabajo: correos, minutas e informes.

**Aprendizaje esperado:** Redactar correos, minutas e informes con apoyo de IA, ajustando tono, registro y audiencia.

Al terminar, deberías poder:
- ajustar el tono y el registro de un texto a la audiencia que se indica;
- entregar un texto claro y sin errores relevantes, revisado por ti.

Trabajarás con **Gemini**, el asistente principal del curso. Puedes usar la app para Android o iOS, o entrar desde el navegador en
gemini.google.com. Si prefieres otro asistente gratuito, como ChatGPT, Copilot o Claude, los pasos son los mismos.

Te siguen acompañando **Camila**, que busca trabajo como asistente administrativa, y **Andrés**, encargado de bodega en una
distribuidora. Camila escribe correos a empresas a las que postula. Andrés escribe avisos a su equipo, minutas de reuniones y un
informe semanal para su jefatura. Sus textos son de cualquier oficina, tienda o bodega.

:::clave
La IA te entrega un **borrador**. El texto final, el que lleva tu nombre, lo decides y lo revisas tú. Las respuestas de un asistente
pueden traer errores y hay que revisarlas antes de usarlas.
:::

:::actividad Tu punto de partida
Piensa en el último texto de trabajo que escribiste o que tendrías que escribir en el cargo al que aspiras: un correo, un aviso, un
resumen. Anota para quién era y qué querías lograr. Lo usarás en la práctica de cierre.
:::

### P02 · Tres géneros de la comunicación laboral
cubre: S1
fuentes: F-M2-03, F-M2-05, F-M2-06
bloque: Texto + tabla comparativa

Un **género** es un tipo de texto con un propósito y unas partes que quien lo lee espera encontrar. En el trabajo se repiten tres:

| Género | Para qué sirve | Partes que no pueden faltar |
|---|---|---|
| Correo | Pedir, informar o responder algo puntual | Asunto breve, saludo, cuerpo conciso, despedida |
| Minuta o acta de reunión | Dejar registro de lo que se habló y se acordó | Temas tratados, acuerdos, compromisos con responsable y fecha |
| Informe ejecutivo | Darle a quien decide lo que necesita para decidir | Resultado principal, por qué importa, qué se recomienda hacer |

Cada género responde a una pregunta distinta. El correo responde «¿qué necesito de ti o qué te aviso?». La minuta responde «¿qué
quedó acordado y quién hace qué?». El informe ejecutivo responde «¿qué debo saber, por qué me importa y qué debo hacer?».

Saber qué género necesitas es el primer dato que le das a la IA. No es lo mismo pedir «escribe algo sobre la reunión» que pedir
«redacta la minuta de la reunión, con acuerdos y compromisos».

:::ejemplo Un mismo tema, tres textos
El lunes se reunió el equipo de Andrés para revisar los despachos atrasados. Ese día él escribe tres textos: un **correo** al
proveedor para pedir una nueva fecha de entrega, la **minuta** de la reunión con los compromisos de cada persona y, el viernes, un
**informe ejecutivo** de una página para su jefatura con el resultado de la semana y una recomendación.
:::

:::comprueba
Andrés necesita dejar registro de quién se comprometió a revisar el stock y para cuándo. ¿Qué género le sirve?
- a) Un correo al proveedor
- **b) Una minuta de la reunión**
- c) Un informe ejecutivo
Retroalimentación: La minuta registra los acuerdos y los compromisos con responsable y fecha. El informe ejecutivo resume para
quien decide, y el correo resuelve algo puntual.
:::

### P03 · Tono, registro y audiencia
cubre: S2, C1
fuentes: F-M2-03, F-M2-04, F-M2-02
bloque: Texto + pestañas (tabs) con los tres conceptos

Tres decisiones cambian cómo suena un texto, aunque diga lo mismo.

**Audiencia** es la persona o el grupo que lo va a leer. Quien escribe en el trabajo suele escribir para varias audiencias en un
mismo día: una jefatura, colegas, un cliente, el público general. Para cada una conviene adaptar el tono, el formato y el nivel de
detalle. No es lo mismo escribirle a una sola persona que a todo un equipo.

**Registro** es el grado de formalidad. El registro **formal** es el del intercambio profesional, con un lenguaje más cuidado. El
**informal** es el de la familia y las amistades. En lo profesional se prefiere tratar de **usted**, salvo que haya una relación
cercana.

**Tono** es la actitud que transmite el texto: cordial, firme, neutro, agradecido, de disculpa. Un correo formal puede ser cordial o
puede ser seco; el registro es el mismo, el tono cambia.

| Audiencia | Registro | Tono posible |
|---|---|---|
| Jefatura | Formal | Directo y respetuoso |
| Colegas del equipo | Formal o semiformal | Cercano y claro |
| Cliente con un reclamo | Formal | Cordial y de disculpa |
| Empresa a la que postulas | Formal | Cordial y seguro |

:::error «Formal es lo mismo que difícil»
Un texto formal no necesita palabras rebuscadas ni frases largas. Las guías de lenguaje claro piden un estilo sencillo y directo sin
perder precisión. Formal es respetuoso, no complicado.
:::

### P04 · Antes de escribir: piensa en quien lee
cubre: S2, C1
fuentes: F-M2-02, F-M2-04, F-M2-05
bloque: Texto + lista de verificación (checklist)

Las guías de redacción coinciden en algo: antes de escribir hay que tener claro **para qué** es el texto y **quién** lo va a leer.
Con eso eliges mejor las palabras, no das por sabidos conceptos que la otra persona no maneja y entregas solo la información que
necesita.

Hazte estas cuatro preguntas antes de abrir el asistente:
- [ ] **¿Para qué escribo?** Pedir, informar, acordar, recomendar.
- [ ] **¿Quién lo lee?** Cargo, relación contigo, cuánto sabe del tema.
- [ ] **¿Qué necesita saber?** Lo mínimo para entender y actuar, nada más.
- [ ] **¿Qué quiero que haga?** Responder, aprobar, asistir, revisar.

Las respuestas a estas preguntas son, justamente, el **contexto** que le das a la IA. Si tú no las tienes claras, el asistente
tampoco: escribirá un texto genérico que habrá que rehacer.

:::ejemplo Camila define su audiencia
Camila quiere escribir a una empresa para preguntar por el estado de su postulación. Responde las preguntas: escribe para saber si
sigue en el proceso; la lee una persona de selección que no la conoce; necesita su nombre, el cargo y la fecha en que postuló; quiere
que le responda. Con eso, ya sabe qué pedirle a Gemini.
:::

:::comprueba
Andrés escribe un aviso para todo su equipo sobre el inventario del viernes. ¿Qué información sobra?
- a) La fecha y la hora del inventario
- b) Qué debe hacer cada persona ese día
- **c) La explicación detallada de cómo calcula él las diferencias de stock**
Retroalimentación: El equipo necesita saber cuándo es y qué le toca hacer. El detalle del cálculo no le sirve para actuar: pensar en
quien lee también es saber qué dejar fuera.
:::

### P05 · La IA como borrador
cubre: S3, A2
fuentes: F-M2-07, F-M2-08, F-M1-09
bloque: Texto + recuadro destacado

En este tema la IA cumple un rol preciso: **produce el borrador**. Tú pones el propósito, los datos y la revisión final.

¿Por qué solo borrador? Por lo que ya viste en el módulo 1:
- **Puede inventar.** Un modelo puede producir contenido falso presentado con seguridad. En un correo, eso puede ser una fecha, un
  monto o un compromiso que nadie hizo. El riesgo es que el tono seguro hace creer y difundir esa información.
- **Varía.** La misma indicación puede dar respuestas distintas, así que no basta con que haya salido bien una vez.
- **No conoce tu situación.** Solo sabe lo que le das. No sabe qué le prometiste a un cliente ni cómo se llama tu jefatura.

Los proveedores de estos asistentes dicen lo mismo: las respuestas pueden contener errores y deben revisarse antes de usarse.

Lo que la IA sí hace bien como borrador:
- ordenar ideas sueltas en un texto con estructura;
- proponer varias versiones con tonos distintos;
- acortar un texto largo o hacerlo más formal;
- sugerir un asunto o una despedida.

:::error «El texto de la IA está listo para enviar»
Un borrador bien escrito no es un texto revisado. Puede sonar impecable y tener un dato equivocado, un nombre mal escrito o un tono
que no corresponde a la relación con quien lo lee.
:::

:::clave
Piensa en la IA como una persona que te ayuda a escribir y que no estuvo en la reunión: redacta rápido, pero tú sabes lo que pasó.
:::

### P06 · Cómo pedirle un texto a la IA
cubre: H1, S2
fuentes: F-M2-08, F-M1-12, F-M2-11
bloque: Texto + imagen de un prompt con sus partes destacadas

Para pedir un texto laboral sirven las partes de un prompt que conociste en el módulo 1. Las guías de los proveedores las ordenan de
formas parecidas: **objetivo** (lo único imprescindible), **contexto** (por qué y quiénes participan), **fuente** (la información que
debe usar) y **expectativas** (formato y extensión). Puedes sumarle un **rol**.

Aplicado a la redacción, queda así:

| Parte | Qué le dices | Ejemplo |
|---|---|---|
| Rol | Desde dónde escribe | «Actúa como asistente administrativa» |
| Objetivo y género | Qué texto necesitas | «Redacta un correo para confirmar una entrevista» |
| Audiencia | Quién lo lee | «Lo lee la encargada de selección, a quien no conozco» |
| Registro y tono | Cómo debe sonar | «Formal, de usted, cordial» |
| Fuente | Los datos que debe usar | «Entrevista el martes 12 a las 10:00, cargo asistente administrativa» |
| Expectativas | Largo y formato | «Máximo 80 palabras, con asunto» |

No tienes que usar todas las partes siempre, pero cuantas más incluyas, menos tendrás que corregir.

Después del primer borrador, **sigue conversando**: «hazlo más breve», «quita la segunda oración», «más cordial». Es la iteración que
practicaste en el módulo 1. Un ciclo útil es: borrador, revisión contra lo que necesitas y versión mejorada.

:::ejemplo El prompt de Camila
«Actúa como asistente administrativa. Redacta un correo para confirmar mi asistencia a una entrevista. Lo lee la encargada de
selección, a quien no conozco. Registro formal, de usted, tono cordial. Datos: entrevista el martes 12 a las 10:00 para el cargo de
asistente administrativa. Máximo 80 palabras, con asunto. No agregues datos que no te di.»
:::

### P07 · El correo: partes y cortesía
cubre: S1, A1
fuentes: F-M2-03
bloque: Texto + imagen de un correo con sus partes rotuladas

Un correo profesional tiene cuatro partes. Una guía universitaria sobre correo electrónico propone estas recomendaciones, que son
sugerencias y no normas obligatorias:

1. **Asunto:** siempre presente y breve. Dice de qué se trata antes de abrirlo: «Confirmación de entrevista, martes 12».
2. **Saludo:** «Estimada Sra. Pérez:». En español el saludo va seguido de **dos puntos**; la coma es un calco del inglés.
3. **Cuerpo:** conciso. Lo importante primero y una idea por párrafo.
4. **Despedida:** «Saludos cordiales,» o «Atentamente,», seguida de tu nombre.

La **cortesía** se nota en detalles concretos:
- tratar de usted, salvo que haya cercanía;
- no escribir en **mayúsculas sostenidas**, que equivalen a gritar;
- no usar emojis ni signos duplicados («¡¡urgente!!») en un correo profesional;
- agradecer cuando corresponde y pedir con claridad.

Cuando le pides un correo a la IA, puedes incluir estas reglas en el prompt: «saludo con dos puntos, sin emojis, con asunto». Así te
ahorras corregirlas después.

:::error «Estimada Sra. Pérez,» con coma
Es frecuente, y muchos asistentes lo escriben así porque aprendieron de textos en inglés. En español se recomienda cerrar el saludo
con dos puntos. Revísalo siempre en el borrador.
:::

:::comprueba
¿Cuál de estos asuntos es más adecuado para un correo de Camila a una empresa?
- a) «Hola!!»
- **b) «Consulta por postulación al cargo de asistente administrativa»**
- c) «URGENTE: RESPUESTA»
Retroalimentación: El asunto debe ser breve y decir de qué trata el correo. Los signos duplicados y las mayúsculas sostenidas se
leen como descortesía.
:::

### P08 · Práctica guiada 1: un correo con IA
cubre: H1, C1
fuentes: F-M2-08, F-M2-03, F-M2-04
bloque: Proceso paso a paso + actividad

Vas a producir y ajustar un correo con Gemini. El caso es de Camila, pero puedes adaptarlo a tu cargo.

**Situación:** Camila postuló hace dos semanas al cargo de asistente administrativa en una empresa de servicios. No ha recibido
respuesta y quiere preguntar, sin sonar insistente.

1. **Abre Gemini** en la app o en el navegador. No uses datos reales de otras personas: el nombre de la empresa y de la encargada
   pueden ser inventados.
2. **Escribe el prompt** con sus partes: «Actúa como asistente administrativa. Redacta un correo para preguntar por el estado de mi
   postulación al cargo de asistente administrativa, enviada el 3 de octubre. Lo lee la encargada de selección, a quien no conozco.
   Registro formal, de usted, tono cordial y seguro, sin sonar insistente. Máximo 90 palabras. Incluye asunto. Saludo con dos
   puntos. No inventes datos».
3. **Lee el borrador** y marca: ¿tiene asunto?, ¿el saludo termina en dos puntos?, ¿agregó algo que no dijiste?
4. **Ajusta conversando:** pide un cambio a la vez, por ejemplo «hazlo más breve» o «cambia la última oración por un agradecimiento».
5. **Edita tú** el texto final: que suene a ti y que los datos sean los correctos.

:::actividad Antes y después
Copia en tu bitácora el primer borrador y tu versión final. Anota tres cambios que hiciste y por qué: uno de tono, uno de registro y
uno de contenido.
:::

:::clave
Pedir un cambio a la vez te permite ver qué produjo cada mejora. Si pides cinco cambios juntos, es más difícil saber cuál funcionó.
:::

### P09 · El mismo mensaje, tres audiencias
cubre: C1, S2, H1
fuentes: F-M2-04, F-M2-02, F-M2-03
bloque: Pestañas (tabs) con las tres versiones

Adaptar un texto a distintas audiencias es una de las tareas en que la IA más ayuda. Tú defines el mensaje y las audiencias; el
asistente propone versiones; tú eliges y corriges.

**Mensaje:** un despacho a un cliente se atrasará dos días porque el proveedor no entregó a tiempo.

| Audiencia | Qué cambia | Cómo empieza |
|---|---|---|
| Jefatura | Formal, directo, con la causa y la solución propuesta | «Le informo que el despacho del pedido 418 se atrasará dos días…» |
| Equipo de bodega | Cercano, centrado en qué hacer | «Equipo: el pedido 418 sale el jueves y no el martes. Les pido…» |
| Cliente | Formal, cordial, con disculpa y nueva fecha | «Estimada Sra. Rojas: lamentamos informarle que su pedido…» |

Para la jefatura importa la causa y la solución. Al equipo le importa qué cambia en su trabajo. Al cliente le importa cuándo recibe
su pedido. Es el mismo hecho con tres focos distintos.

Puedes pedirlo así: «Con estos datos, escribe tres versiones del aviso: una para mi jefatura, otra para mi equipo y otra para el
cliente. Ajusta registro, tono y nivel de detalle a cada una. Máximo 70 palabras cada una».

:::comprueba
¿Cuál de estas frases corresponde a la versión para el cliente?
- a) «Equipo, ojo con el 418, sale el jueves»
- **b) «Lamentamos el inconveniente. Su pedido llegará el jueves 14»**
- c) «El atraso se debe a un incumplimiento del proveedor que ya escalé»
Retroalimentación: Al cliente le importa la disculpa y la nueva fecha, en registro formal. El detalle interno del proveedor es para
la jefatura, y el tono cercano es para el equipo.
:::

### P10 · La minuta: lo que se acordó
cubre: S1
fuentes: F-M2-06
bloque: Texto + plantilla descargable o imagen de una minuta

La **minuta** (también llamada acta de reunión) deja registro de una reunión. Su valor no está en contar todo lo que se dijo, sino
en dejar claro **qué se acordó y quién hace qué**.

Según un instructivo de reuniones de una institución pública, en una reunión se designa a una persona que registre los temas
tratados y los compromisos. Se establecen acuerdos y compromisos **con fechas y responsables**. Después, el acta se comparte, se
revisa, se reciben aportes y se hace seguimiento a lo comprometido.

Una minuta breve puede tener estas partes:
1. **Datos de la reunión:** fecha, participantes, tema.
2. **Temas tratados:** una línea por tema.
3. **Acuerdos:** lo que se decidió.
4. **Compromisos:** qué, quién y para cuándo.
5. **Próxima revisión:** cuándo se verá el avance.

| Compromiso | Responsable | Fecha |
|---|---|---|
| Revisar el stock de cajas medianas | Andrés | Miércoles 13 |
| Pedir nueva fecha de entrega al proveedor | Jefatura de compras | Martes 12 |

:::clave
Un compromiso sin responsable o sin fecha no es un compromiso: es una buena intención. La minuta sirve para que nadie tenga que
acordarse de memoria.
:::

:::ejemplo La minuta que nadie leyó
Andrés recibió una minuta de dos páginas que contaba la reunión de principio a fin. Los compromisos estaban perdidos en el tercer
párrafo y nadie los cumplió. Desde entonces, él pone la tabla de compromisos al principio.
:::

### P11 · Práctica guiada 2: de notas sueltas a minuta
cubre: H1, C2
fuentes: F-M2-06, F-M2-07, F-M2-12
bloque: Proceso paso a paso + actividad

Las notas de una reunión suelen quedar desordenadas. La IA ayuda a convertirlas en minuta, siempre que no le dejes inventar.

**Notas de Andrés (datos ficticios):**
«reunión lunes 11 despachos. estaban: Andrés, Marta (ventas), Jorge (bodega). 3 pedidos atrasados por proveedor de cajas. Marta avisa
a clientes hoy. Jorge revisa stock cajas. Ver de nuevo el viernes. compras tiene que pedir otra fecha al proveedor»

1. **Pega las notas en Gemini** con este prompt: «Convierte estas notas en una minuta de reunión con: datos de la reunión, temas,
   acuerdos y una tabla de compromisos con responsable y fecha. Usa solo la información de las notas. Si falta un responsable o una
   fecha, escribe [FALTA] en vez de completarlo».
2. **Revisa la tabla de compromisos.** En las notas, la fecha de Jorge no está, y «compras» no tiene una persona a cargo.
3. **Completa tú** lo que falta, preguntando a quien corresponda.
4. **Compara** la minuta con las notas: ¿hay algún acuerdo que la IA agregó?

Pedir que marque lo que falta le da al modelo una salida distinta de inventar. Aun así, la revisión es tuya.

:::error La IA completa los vacíos
Si no se lo prohíbes, el asistente puede poner una fecha «razonable» o asignar un responsable que nadie nombró. En una minuta, eso
crea un compromiso falso. Marca los vacíos y complétalos tú.
:::

:::actividad Tu minuta
Escribe en cinco líneas las notas de una reunión real o imaginada de tu área. Pídele a Gemini la minuta con la regla de [FALTA] y
revisa cuántos vacíos detectó.
:::

### P12 · El informe ejecutivo: lo esencial para decidir
cubre: S1, C1
fuentes: F-M2-05
bloque: Texto + imagen de un informe de una página

El **informe ejecutivo** (o resumen ejecutivo) condensa la información para la persona que decide. Suele ocupar **una página** y
responde tres preguntas de quien lo lee:
1. **¿Qué debo saber?** El resultado o hallazgo principal.
2. **¿Por qué me importa?** La consecuencia para el área o la empresa.
3. **¿Qué debo hacer?** La recomendación o la decisión que se pide.

Una guía universitaria sobre este género aconseja:
- **empezar por los resultados y la recomendación**, no por la historia de cómo se hizo el trabajo;
- reducir al mínimo la descripción de los métodos;
- usar viñetas y párrafos cortos;
- comparar con las alternativas cuando se recomienda algo.

| Así no | Así sí |
|---|---|
| «Esta semana revisamos los registros de despacho, conversamos con el equipo y analizamos…» | «Esta semana se atrasaron 3 de 40 despachos, todos por falta de cajas. Recomiendo pedir cajas a un segundo proveedor.» |

La jefatura de Andrés lee muchos informes. Si el resultado está en el cuarto párrafo, quizás no llegue a leerlo.

:::comprueba
¿Con qué conviene empezar un informe ejecutivo?
- a) Con la descripción de cómo se recopiló la información
- **b) Con el resultado principal y la recomendación**
- c) Con los antecedentes históricos del área
Retroalimentación: Quien decide necesita primero saber qué pasó y qué se recomienda. Los métodos y los antecedentes van después, y
de forma breve.
:::

### P13 · Práctica guiada 3: un informe ejecutivo con IA
cubre: H1, C1
fuentes: F-M2-05, F-M2-08, F-M2-11
bloque: Proceso paso a paso + actividad

Andrés debe entregar el viernes un informe ejecutivo a su jefatura. Tiene los datos de la semana (ficticios) en una lista:
«40 despachos; 37 a tiempo; 3 atrasados, los 3 por falta de cajas del proveedor; el stock de cajas medianas quedó en 20; un segundo
proveedor ofrece entrega en 48 horas».

1. **Pide el borrador:** «Actúa como encargado de bodega. Redacta un informe ejecutivo de máximo una página para mi jefatura. Usa solo
   estos datos. Estructura: resultado de la semana, por qué importa y recomendación. Viñetas cortas. Registro formal».
2. **Revisa el orden:** ¿el resultado está al principio?, ¿la recomendación es clara?
3. **Revisa los datos:** que cada cifra coincida con la lista. Si aparece un porcentaje, calcúlalo tú.
4. **Pide una revisión contra criterios:** «Revisa tu informe: ¿responde qué debo saber, por qué me importa y qué debo hacer? Señala
   qué falta y entrega una versión mejorada».
5. **Decide tú** la versión final.

El paso 4 es un ciclo de borrador, revisión y mejora: le pides al asistente que se revise contra criterios claros. Igual compruebas
tú el resultado, porque la revisión del asistente también puede fallar.

:::actividad Tu informe de una página
Con datos inventados de tu cargo (ventas del mes, consultas atendidas, pedidos despachados), pide un informe ejecutivo con las tres
preguntas. Anota qué tuviste que corregir.
:::

### P14 · Lenguaje claro: escribir para que te entiendan
cubre: A1, C2
fuentes: F-M2-01, F-M2-02
bloque: Texto + comparación antes y después

En Chile, varios organismos públicos forman la **Red de Lenguaje Claro**. La Red describe el lenguaje claro como un estilo de
redacción simple y eficiente, que facilita que las personas entiendan lo que se escribe. Abarca el texto, pero también la estructura,
la edición y el diseño.

Una guía de lenguaje claro del Senado de Chile entrega recomendaciones que sirven para cualquier texto laboral:
- **Oraciones breves**, con una idea cada una.
- Orden **sujeto, verbo y complementos**.
- **Voz activa**: «Jorge revisará el stock», no «El stock será revisado».
- **Estilo afirmativo**: «Llegue a las 9:00», no «No llegue después de las 9:00».
- **Títulos, subtítulos y viñetas** cuando el texto es largo.
- **Definir siglas y tecnicismos** la primera vez que aparecen.
- Revisar al final con una **lista de verificación**.

| Antes | Después |
|---|---|
| «Se informa que, en atención a dificultades de abastecimiento, la entrega no podrá ser efectuada en la fecha originalmente comprometida.» | «Su pedido no llegará el martes. Llegará el jueves, porque el proveedor se atrasó.» |

Puedes pedirle a la IA que aplique estas reglas: «Reescribe este texto en lenguaje claro: oraciones breves, voz activa y sin
tecnicismos». Después lee el resultado y verifica que no haya perdido información.

:::clave
Claro no es lo mismo que informal. Un texto puede ser formal, cordial y fácil de entender a la vez.
:::

### P15 · El ajuste fino: cortesía y claridad
cubre: A1, C1
fuentes: F-M2-08, F-M2-03, F-M2-02
bloque: Escenario o conversación de ejemplo

Casi nunca el primer borrador tiene el tono justo. A veces sale demasiado ceremonioso, otras veces demasiado seco. El ajuste se hace
conversando con el asistente, una instrucción a la vez:

| Si el borrador… | Pídele… |
|---|---|
| Suena frío o cortante | «Hazlo más cordial, sin alargarlo» |
| Da muchas vueltas | «Ve al punto: lo importante en la primera oración» |
| Es demasiado formal para tu equipo | «Mantén el respeto, pero con un tono más cercano» |
| Suena a reclamo | «Cambia el tono a uno neutro: describe el problema y pide una solución» |
| No suena a ti | «Usa frases simples, como las que yo escribiría» |

La cortesía profesional no es adornar: es saludar, agradecer, pedir con claridad y no culpar. La claridad es que quien lee entienda
a la primera qué pasa y qué tiene que hacer.

:::ejemplo Andrés y el reclamo al proveedor
El primer borrador de Andrés decía: «Es inaceptable que nuevamente no cumplan con los plazos». Le pidió a Gemini un tono neutro y
recibió: «Le escribo porque el pedido del 7 de octubre no llegó en la fecha acordada. ¿Nos puede confirmar una nueva fecha de
entrega?». Dice lo mismo, con más posibilidades de una respuesta rápida.
:::

:::error «Más formal es más largo»
Agregar fórmulas como «tengo el agrado de dirigirme a usted con el propósito de» no hace el correo más cortés: lo hace más largo y
más difícil de leer. La cortesía está en el trato, no en el largo.
:::

### P16 · Revisión humana: tu lista de verificación
cubre: C2, A2, S3
fuentes: F-M2-02, F-M2-03, F-M2-07
bloque: Lista de verificación (checklist) interactiva

Un texto claro y sin errores relevantes no sale solo: sale de una revisión. Esta lista reúne lo que viste en el tema. Úsala antes de
enviar cualquier texto hecho con IA.

**Contenido**
- [ ] El objetivo se entiende en las primeras líneas.
- [ ] Los datos son correctos: nombres, fechas, montos, números de pedido. Los comparé con el original.
- [ ] No hay nada que la IA haya agregado y que yo no haya dicho.

**Audiencia, tono y registro**
- [ ] El registro corresponde a la relación con quien lee (usted o tú).
- [ ] El tono es el que necesito: cordial, neutro, de disculpa.
- [ ] El nivel de detalle es el que esa persona necesita.

**Forma**
- [ ] Oraciones breves y voz activa.
- [ ] Siglas y tecnicismos explicados.
- [ ] Saludo con dos puntos, despedida adecuada, asunto presente.
- [ ] Ortografía y puntuación revisadas.

Los errores de hecho son los más graves, porque la IA puede introducirlos con total seguridad. Una coma mal puesta se perdona; una
fecha de entrega equivocada genera un problema.

:::comprueba
El borrador de un correo de Andrés está bien escrito, pero dice «pedido 481» y el pedido real es el 418. ¿Qué tipo de error es?
- a) Un error de tono
- **b) Un error de hecho, el más relevante**
- c) Un error de registro
Retroalimentación: Es un dato equivocado. Puede generar confusión o un despacho mal hecho. Por eso los datos se comparan siempre con
el original.
:::

### P17 · Tu firma, tu responsabilidad
cubre: A2, S3
fuentes: F-M2-07, F-M2-08, F-M1-12, F-H-15
bloque: Texto + recuadro destacado

Cuando envías un texto, respondes por él. Da lo mismo si lo escribiste tú, si te ayudó una colega o si lo redactó un asistente de
IA. Quien firma se hace cargo del mensaje.

La **responsabilidad sobre el mensaje** se traduce en prácticas concretas:
- **Revisar todo antes de enviar.** Las guías de los proveedores insisten en que la persona es responsable del resultado final.
- **Verificar los datos.** La IA puede inventar datos e incluso justificaciones que suenan convincentes.
- **Cuidar la información.** No pegues en el asistente datos personales de clientes o colegas, ni información confidencial de una
  empresa. Para practicar, usa datos ficticios, como los de Camila y Andrés.
- **Configurar tu asistente.** En Gemini, si el ajuste de actividad está encendido, personas que revisan pueden leer conversaciones
  para mejorar el servicio. Para evitarlo, se apaga ese ajuste o se usan chats temporales. Lo verás en detalle en el módulo 3.

:::error «Si lo escribió la IA, el error es de la IA»
Para quien recibe el correo, el mensaje es tuyo. Si promete una fecha que no se puede cumplir o trata mal a un cliente, la
consecuencia es para ti y para tu equipo, no para la herramienta.
:::

:::ejemplo Camila revisa antes de postular
Gemini le propuso a Camila una carta que decía «manejo avanzado de sistemas de gestión». Ella nunca usó uno. Borró la frase y escribió
lo que sí sabe hacer. Una afirmación falsa en una postulación puede costar más que una carta sencilla.
:::

### P18 · Cierre: tres textos para tu cargo
cubre: H1, C1, C2
fuentes: F-M2-08, F-M2-02
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que en el trabajo se escriben géneros distintos: el **correo** resuelve algo puntual, la **minuta** registra
acuerdos y compromisos, y el **informe ejecutivo** le da a quien decide lo esencial. Aprendiste a ajustar **audiencia, registro y
tono**, a usar la IA como **borrador** y a revisar con una lista de verificación.

:::actividad Tres textos, tres audiencias
Toma el cargo del aviso de empleo que guardaste en el módulo 1 y produce con Gemini:
1. **Un correo** para alguien externo (un cliente, un proveedor o una empresa a la que postulas).
2. **Una minuta** breve de una reunión inventada de ese cargo, con al menos dos compromisos.
3. **Un informe ejecutivo** de media página para una jefatura, con datos inventados.

Para cada texto:
- anota la audiencia, el registro y el tono que elegiste;
- guarda el primer borrador y tu versión final;
- revisa con la lista de verificación de la pantalla 16 y marca qué corregiste.
:::

:::clave
El informe ejecutivo que practicaste es la base del **brief** del Hito 2: objetivo, audiencia y mensaje. Guárdalo.
:::

### Ideas clave

1. En el trabajo se repiten tres géneros: el correo resuelve algo puntual, la minuta registra acuerdos y compromisos, y el informe
   ejecutivo le entrega a quien decide qué saber, por qué importa y qué hacer.
2. Audiencia, registro y tono son tres decisiones distintas: quién lee, cuánta formalidad y qué actitud transmite el texto.
3. Antes de escribir hay que saber para qué y para quién: esas respuestas son el contexto que se le da a la IA.
4. La IA produce borradores: puede inventar datos con seguridad y varía entre respuestas, por eso todo se revisa antes de enviar.
5. Un buen pedido de texto incluye objetivo y género, audiencia, registro y tono, datos y expectativas de largo y formato; luego se
   ajusta conversando, un cambio a la vez.
6. Lenguaje claro: oraciones breves, voz activa, estilo afirmativo y siglas explicadas. Formal no significa complicado.
7. Quien firma responde por el mensaje: se verifican los datos y no se pegan datos personales ni confidenciales.

### Glosario

- **Género (de comunicación laboral)**: tipo de texto con un propósito y unas partes reconocibles, como el correo, la minuta o el
  informe ejecutivo.
- **Correo profesional**: mensaje breve con asunto, saludo, cuerpo conciso y despedida, escrito en registro formal.
- **Minuta**: registro de una reunión con los temas tratados, los acuerdos y los compromisos con responsable y fecha. También se le
  llama acta.
- **Compromiso**: tarea acordada en una reunión, con una persona responsable y una fecha de cumplimiento.
- **Informe ejecutivo**: texto breve, por lo general de una página, que entrega a quien decide el resultado principal, por qué importa
  y la recomendación.
- **Audiencia**: persona o grupo que va a leer un texto.
- **Registro**: grado de formalidad de un texto: formal en lo profesional, informal con familia y amistades.
- **Tono**: actitud que transmite un texto, como cordial, neutro, firme o de disculpa.
- **Lenguaje claro**: estilo de redacción simple y directo que facilita que las personas entiendan lo escrito, sin perder precisión.
- **Voz activa**: forma de la oración en que quien hace la acción va primero: «Jorge revisará el stock».
- **Borrador**: primera versión de un texto, que se revisa y corrige antes de usarla.
- **Revisión humana**: lectura que hace una persona para comprobar datos, tono y forma antes de usar un texto generado con IA.

### Conexión con el proyecto

Este tema alimenta el **Hito 2 del proyecto aplicado: brief del proyecto + presentación de 6 láminas**. El problema u oportunidad
que definiste en el Hito 1 se convierte ahora en un **brief**: un texto breve con objetivo, audiencia y mensaje. Escribirlo es
aplicar lo que viste aquí: pensar en quien lee, empezar por lo esencial, como en el informe ejecutivo (P12 y P13), y revisarlo con la
lista de verificación (P16). En el tema 3 de este módulo convertirás ese brief en las seis láminas. En el **caso M2-C1** analizarás
cómo una empresa redacta con apoyo de IA sus respuestas a clientes y cómo las supervisa, y lo compararás con tu lista de verificación.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M2.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-1.md`
(consultadas el 24-10-2026).

- F-M2-01 · Red de Lenguaje Claro Chile (s. f.). Sitio institucional. https://www.lenguajeclarochile.cl/
- F-M2-02 · Senado de Chile, Redacción de Sesiones (2025). Guía de lenguaje claro para el ámbito legislativo. https://cdn.senado.cl/portal-senado-produccion/s3fs-public/2025-09/guia-de-lenguaje-claro-para-el-ambito-legislativo.pdf
- F-M2-03 · Universidad de Las Palmas de Gran Canaria; Rodríguez-Rodríguez y García-Sánchez (s. f.). Redacción del correo electrónico en español e inglés: breves recomendaciones. https://iatext.ulpgc.es/sites/default/files/recomendaciones_correo_electronico_0.pdf
- F-M2-04 · Purdue University, Purdue OWL (s. f.). Audience (Business Writing for Administrative and Clerical Staff). https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/business_writing_for_administrative_and_clerical_staff/audience.html
- F-M2-05 · Carnegie Mellon University, Student Academic Success Center (s. f.). Executive Summaries. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- F-M2-06 · Secretaría de Cultura, Recreación y Deporte, Colombia (2018). Instructivo para el manejo de reuniones efectivas. https://mail.culturarecreacionydeporte.gov.co/sites/default/files/2023-04/instructivo_para_el_manejo_de_la_reuniones_efectivas_v2.pdf
- F-M2-07 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M2-08 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Microsoft Copilot. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- F-M2-11 · Anthropic (s. f.). Prompting best practices. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- F-M2-12 · Microsoft Learn (2026). Técnicas de ingeniería de indicaciones. https://learn.microsoft.com/es-es/azure/ai-foundry/openai/concepts/prompt-engineering
- F-M1-09 · OpenAI Help Center (2026). ¿Dice ChatGPT la verdad? https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-H-10 · Google (s. f.). Dónde se puede usar la aplicación web de Gemini. https://support.google.com/gemini/answer/13575153?hl=es
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es


## M2-AE2 · Prompting avanzado para textos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M2-08, F-M2-09
bloque: Texto + lista con viñetas

En el tema anterior escribiste correos, minutas e informes con un buen prompt y ajustaste el resultado conversando. Funciona, pero
tiene un problema: si mañana repites el pedido, el texto puede salir distinto. La misma indicación puede dar respuestas diferentes,
y en el trabajo eso se nota cuando un mismo tipo de correo sale cada vez con otro formato o con otro tono.

**Aprendizaje esperado:** Aplicar técnicas de prompting avanzado (ejemplos, restricciones, encadenamiento) para mejorar la calidad y
consistencia de textos profesionales.

Al terminar, deberías poder:
- aplicar al menos dos técnicas: ejemplos, restricciones y encadenamiento;
- obtener textos consistentes entre versiones, y comprobarlo.

Este tema es un **laboratorio de prompts**. En cada técnica vas a ver una versión «antes» y una «después», las vas a probar en Gemini
y vas a comparar los resultados. Al final tendrás plantillas propias que podrás reutilizar.

:::clave
Un prompt avanzado no es un prompt más largo. Es un prompt que da resultados **parecidos cada vez que lo usas**, con la calidad que
necesitas.
:::

:::actividad Abre tu bitácora de laboratorio
Crea un documento o una nota en el celular con el título «Laboratorio de prompts». Ahí vas a registrar cada versión de tus prompts y
lo que obtuviste con cada una.
:::

### P02 · Del buen prompt al prompt confiable
cubre: S1, C2
fuentes: F-M2-08, F-M2-09, F-M2-10
bloque: Texto + tabla comparativa

En el módulo 1 armaste prompts con rol, contexto, tarea y formato. Eso mejora mucho la primera respuesta. Pero cuando un texto se
repite (la respuesta a una consulta frecuente, el aviso semanal, la confirmación de un pedido) necesitas algo más: que salga **igual
de bien todas las veces**.

Como la salida de un modelo no es determinista, la documentación de los proveedores recomienda probar los prompts y medir cómo se
comportan. Para que ese comportamiento sea más estable, hay cuatro herramientas:

| Técnica | Qué problema resuelve | Ejemplo de uso |
|---|---|---|
| **Ejemplos (few-shot)** | El formato o el tono cambia en cada respuesta | Mostrar dos avisos bien escritos para que imite el patrón |
| **Restricciones** | El texto sale largo, con datos inventados o con un estilo que no sirve | «Máximo 80 palabras, sin emojis, solo con los datos entregados» |
| **Encadenamiento** | La tarea es compleja y sale mal de una vez | Primero extraer los hechos, después redactar, después revisar |
| **Plantilla reutilizable** | Cada vez escribes el prompt desde cero | Un texto guardado con partes fijas y espacios para los datos |

Las tres primeras son técnicas que se aplican dentro del prompt. La plantilla es la forma de guardarlas para usarlas de nuevo.

:::error «Si el prompt funcionó una vez, ya está listo»
Una buena respuesta puede ser suerte. La misma indicación puede dar respuestas distintas, así que un prompt se considera confiable
solo después de probarlo varias veces y con casos distintos.
:::

:::comprueba
Cada vez que Andrés pide el aviso semanal de inventario, la respuesta sale con un formato distinto. ¿Qué técnica le conviene probar
primero?
- a) Pedir que el texto sea más creativo
- **b) Incluir ejemplos de avisos con el formato que necesita**
- c) Escribir el prompt en mayúsculas
Retroalimentación: Los ejemplos orientan el formato, el tono y la estructura, y mejoran la consistencia entre respuestas.
:::

### P03 · Cómo funciona el laboratorio
cubre: A1, A2, C2
fuentes: F-M2-10, F-M2-09, F-M2-08
bloque: Proceso (process block) en 5 pasos

El diseño de prompts es **iterativo**: se empieza simple y se agregan detalles según los resultados. Para que esa iteración te enseñe
algo, conviene hacerla con orden. Este es el método del laboratorio:

1. **Escribe la versión 1** del prompt y guárdala en tu bitácora.
2. **Pruébala con casos de prueba**: los mismos dos o tres casos cada vez (por ejemplo, tres consultas distintas de clientes).
3. **Anota qué salió bien y qué no**, con criterios fijos: formato, largo, tono, datos exactos.
4. **Cambia una sola cosa** y guarda la versión 2. Si cambias muchas a la vez, no sabrás cuál produjo la mejora.
5. **Compara las versiones** con los mismos casos y quédate con la mejor.

Tu bitácora puede ser una tabla simple:

| Versión | Qué cambié | Caso 1 | Caso 2 | Caso 3 | ¿Mejoró? |
|---|---|---|---|---|---|
| v1 | — | Largo | Bien | Inventó una fecha | — |
| v2 | Agregué «usa solo los datos entregados» | Largo | Bien | Bien | Sí, en datos |

El paso 4 es una recomendación del curso: no es la única forma de trabajar, pero hace que la comparación sea justa.

:::clave
**Orden metodológico** es eso: versiones con nombre, casos de prueba fijos, un cambio a la vez y un registro de lo que pasó. Sin
registro, mejorar un prompt depende de la memoria.
:::

:::ejemplo Andrés numera sus versiones
Andrés guarda sus prompts como «aviso-inventario-v1», «v2», «v3». Cuando una versión nueva empeora algo, vuelve a la anterior sin
tener que recordar cómo era.
:::

### P04 · Técnica 1: ejemplos (few-shot)
cubre: S1, C1
fuentes: F-M2-09, F-M2-12, F-M2-11, F-M2-10
bloque: Texto + imagen de un prompt con ejemplos destacados

**Few-shot** (en español, «con pocos ejemplos») significa incluir en el prompt uno o varios **ejemplos de entrada y salida** para que
el modelo capte el patrón y lo imite. El modelo no queda cambiado para siempre: el ejemplo orienta solo esa consulta.

Según la documentación de los proveedores, los ejemplos son una de las formas más confiables de orientar el **formato, el tono y la
estructura**, y mejoran la consistencia. Para que funcionen, deben ser:
- **pertinentes:** parecidos a los casos reales que vas a pedir;
- **variados:** que cubran situaciones distintas, para que el modelo no copie un solo caso;
- **con el mismo formato** entre ellos;
- **separados de las instrucciones**, con una etiqueta clara, como «EJEMPLO 1».

¿Cuántos ejemplos? No hay una regla fija. Una guía sugiere de tres a cinco; otra advierte que demasiados pueden hacer que el modelo
los copie de más. Para textos breves, dos o tres suelen bastar para empezar: pruébalo en tu laboratorio.

:::ejemplo Un ejemplo de entrada y salida
ENTRADA: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
SALIDA: «Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos
cordiales, Bodega Central».
:::

:::error Ejemplos con datos reales
Para armar ejemplos no necesitas copiar correos reales con nombres, teléfonos o direcciones de clientes. Usa datos inventados: el
modelo imita la forma, no necesita los datos verdaderos.
:::

### P05 · Laboratorio 1: antes y después con ejemplos
cubre: S1, C1, C2
fuentes: F-M2-11, F-M2-09
bloque: Comparación antes y después + actividad

**Caso:** Andrés envía cada semana avisos de despacho a clientes. Quiere que todos tengan el mismo formato.

**Antes (v1):**
«Escribe un aviso para el cliente Distribuidora Sur: su pedido 455 llega el miércoles 20.»

Al repetirlo, a veces sale con asunto y a veces sin él; a veces con tres párrafos y otras con uno; una vez agregó «¡Gracias por
preferirnos!».

**Después (v2):**
«Escribe un aviso de despacho siguiendo el formato de los ejemplos. Usa solo los datos de la entrada.
EJEMPLO 1
Entrada: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
Salida: Asunto: Despacho pedido 312. Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta,
respondan este correo. Saludos cordiales, Bodega Central.
EJEMPLO 2
Entrada: pedido 320, llega el viernes 22, cliente Minimarket Doña Rosa, faltan 2 cajas que llegan el lunes 25.
Salida: Asunto: Despacho pedido 320. Estimados Minimarket Doña Rosa: su pedido 320 llegará el viernes 22. Dos cajas llegarán el lunes
25. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
AHORA
Entrada: pedido 455, llega el miércoles 20, cliente Distribuidora Sur.»

Fíjate en que el segundo ejemplo es distinto del primero: tiene un faltante. Así el modelo aprende qué hacer en ese caso.

:::actividad Prueba las dos versiones
Pega la v1 en Gemini tres veces, cada una en un chat nuevo, y luego haz lo mismo con la v2. Anota en tu bitácora: ¿cuántas veces salió
el asunto?, ¿cuántas veces se mantuvo la despedida?, ¿alguna agregó algo que no estaba?
:::

### P06 · Cuando los ejemplos fallan
cubre: S1, C2
fuentes: F-M2-10, F-M2-11
bloque: Texto + escenario

Los ejemplos son poderosos, y por eso también pueden llevar a errores. Los más frecuentes:

- **El modelo copia de más.** Si todos los ejemplos dicen «lunes», puede poner «lunes» aunque la entrada diga otro día. Las guías
  advierten que demasiados ejemplos, o ejemplos muy parecidos, pueden llevar a este sobreajuste.
- **Ejemplos que se contradicen.** Si un ejemplo termina con «Saludos cordiales» y otro con «Atentamente», el modelo no sabe cuál
  usar. El formato debe ser idéntico entre ejemplos.
- **Ejemplos mezclados con las instrucciones.** Si no están separados, el modelo puede confundir un ejemplo con un dato real. Usa
  etiquetas como «EJEMPLO 1» y «AHORA».
- **Ejemplos que no se parecen a los casos reales.** Si el ejemplo es un aviso de despacho y lo que pides es un reclamo, el patrón no
  sirve.

:::error «Mientras más ejemplos, mejor»
No es así. Demasiados ejemplos pueden hacer que el modelo los copie en vez de aplicar el patrón. Empieza con pocos y variados, y
agrega uno solo si las pruebas muestran que falta cubrir un caso.
:::

:::comprueba
Andrés incluyó dos ejemplos y en ambos el pedido llegaba completo. Cuando pide un aviso con un faltante, el modelo lo omite. ¿Qué le
conviene hacer?
- a) Quitar los ejemplos
- **b) Cambiar un ejemplo por uno que incluya un faltante**
- c) Agregar diez ejemplos más de pedidos completos
Retroalimentación: Los ejemplos deben ser variados y cubrir los casos reales. Si ningún ejemplo tiene faltantes, el modelo no sabe
cómo mostrarlos.
:::

### P07 · Técnica 2: restricciones
cubre: S1, C1
fuentes: F-M2-10, F-M2-09, F-M1-14
bloque: Texto + pestañas (tabs) por tipo de restricción

Una **restricción** es un límite claro que el texto debe cumplir. Las guías de los proveedores recomiendan decir qué hacer y qué no,
fijar un largo máximo e indicar el formato de la respuesta.

Tipos de restricciones útiles en textos profesionales:

| Tipo | Ejemplo |
|---|---|
| Largo | «Máximo 80 palabras», «tres viñetas», «una página» |
| Formato | «Con asunto», «en tabla de tres columnas», «párrafos de dos oraciones» |
| Registro y tono | «Formal, de usted, cordial» |
| Contenido permitido | «Usa solo los datos que te entrego» |
| Contenido prohibido | «Sin emojis», «sin promesas de plazos», «sin signos de exclamación» |
| Qué hacer si falta algo | «Si falta un dato, escribe [FALTA]» |

Un consejo de las guías: cuando puedas, di **qué hacer** en vez de solo qué no hacer. «Escribe en párrafos cortos» funciona mejor que
«no escribas párrafos largos», porque le da al modelo una dirección.

Las restricciones son especialmente útiles para la **exactitud**. «Usa solo los datos que te entrego» y la regla de [FALTA] reducen
la posibilidad de que el modelo complete con datos inventados.

:::ejemplo Una restricción que evita problemas
Camila descubrió que el asistente agregaba frases como «tengo amplia experiencia en…» en sus correos de postulación. Agregó la
restricción «No agregues experiencia ni habilidades que no estén en mis datos». Desde entonces, el texto solo dice lo que ella hizo.
:::

### P08 · Laboratorio 2: antes y después con restricciones
cubre: S1, C1, C2
fuentes: F-M2-10, F-M2-03
bloque: Comparación antes y después + actividad

**Caso:** Camila quiere un correo de agradecimiento después de una entrevista.

**Antes (v1):**
«Escribe un correo de agradecimiento después de una entrevista para asistente administrativa.»

Resultado típico: un texto de 200 palabras, con frases genéricas, un nombre de empresa inventado y una despedida con coma.

**Después (v2):**
«Escribe un correo de agradecimiento después de una entrevista.
DATOS: cargo asistente administrativa; entrevista el jueves 14 con la Sra. Muñoz; me interesó la tarea de coordinar agendas.
RESTRICCIONES:
- Máximo 90 palabras.
- Registro formal, de usted, tono cordial.
- Incluye asunto.
- Saludo con dos puntos.
- Menciona el detalle de la entrevista que te doy, sin agregar otros.
- No uses frases como "amplia experiencia" ni signos de exclamación.
- Cierra con "Saludos cordiales," y mi nombre: Camila Soto.»

En la v2 las restricciones están en una lista separada. Es más fácil de leer para ti y para el modelo, y más fácil de cambiar después.

:::actividad Mide el efecto
Prueba la v1 y la v2 dos veces cada una, en chats nuevos. Cuenta las palabras de cada resultado y revisa si cumple cada restricción.
Anota en tu bitácora cuántas restricciones cumplió cada versión.
:::

:::clave
Una restricción solo sirve si puedes **comprobar** que se cumplió. «Que sea breve» es difícil de medir; «máximo 90 palabras» se cuenta.
:::

### P09 · Técnica 3: encadenamiento de pasos
cubre: S1, C1, A1
fuentes: F-M2-10, F-M2-12, F-M2-11
bloque: Proceso (process block) en 3 pasos

El **encadenamiento** divide una tarea compleja en pasos, y la salida de un paso alimenta al siguiente. En vez de pedir todo de una
vez, pides una cosa, revisas, y usas ese resultado en el pedido que sigue.

Una cadena típica para textos tiene tres eslabones:
1. **Extraer:** «De estas notas, lista solo los hechos: fechas, cifras, nombres y acuerdos».
2. **Redactar:** «Con esta lista de hechos, redacta el informe».
3. **Revisar y mejorar:** «Revisa el informe contra estos criterios: … Señala qué no cumple y entrega una versión corregida».

El tercer paso se conoce como **autocorrección**: borrador, revisión contra criterios y versión mejorada.

¿Para qué dividir, si los modelos actuales ya razonan bastante por su cuenta? La documentación de un proveedor lo explica: encadenar
sirve sobre todo para **revisar los resultados intermedios**. Si la lista de hechos del paso 1 tiene un error, lo detectas antes de
que se convierta en un párrafo bien escrito.

| Un solo prompt | Cadena de pasos |
|---|---|
| Rápido | Toma un poco más |
| Si sale mal, no sabes dónde falló | Ves y corriges cada paso |
| Mezcla hechos y redacción | Separa lo que hay que verificar de lo que hay que redactar |

:::clave
El encadenamiento es orden metodológico aplicado: cada paso tiene una tarea, un resultado y una revisión.
:::

### P10 · Laboratorio 3: una cadena de tres pasos
cubre: S1, C1, A1
fuentes: F-M2-11, F-M2-12, F-M2-05
bloque: Proceso paso a paso + actividad

**Caso:** Andrés tiene notas desordenadas de su semana y necesita un informe ejecutivo para su jefatura.

**Notas (ficticias):** «lunes faltaron cajas, 2 pedidos atrasados. miércoles llegó proveedor nuevo, cajas ok. jueves 1 pedido
atrasado por camión. total semana 38 despachos. idea: tener 30 cajas de reserva».

**Antes (un solo prompt):** «Haz un informe ejecutivo con estas notas». El resultado mezcla todo y, a veces, cambia una cifra.

**Después (cadena):**
- **Paso 1.** «Lista solo los hechos de estas notas, uno por línea: qué pasó, cuándo y cuántos. No redactes». Revisas la lista contra
  las notas: ¿están los tres atrasados?, ¿el total es 38?
- **Paso 2.** «Con esta lista, redacta un informe ejecutivo de media página para mi jefatura: resultado de la semana, por qué importa
  y recomendación. Usa solo estos hechos».
- **Paso 3.** «Revisa el informe: ¿empieza por el resultado?, ¿cada cifra está en la lista?, ¿la recomendación es clara? Señala qué no
  cumple y entrega una versión corregida».

:::actividad Compara el camino corto y el largo
Haz el caso con un solo prompt y luego con la cadena. En tu bitácora, anota: ¿en cuál detectaste antes un error?, ¿cuál resultado
necesitó menos correcciones tuyas?
:::

:::error Saltarse la revisión del paso 1
Si pegas la lista de hechos en el paso 2 sin revisarla, la cadena pierde su ventaja: un error del paso 1 llega intacto al informe, y
ahora suena convincente.
:::

### P11 · Combinar técnicas según el problema
cubre: C1, S1
fuentes: F-M2-11, F-M2-10, F-M2-12
bloque: Escenario o clasificación (sorting activity)

Las técnicas se combinan. Un mismo prompt puede tener ejemplos, una lista de restricciones y formar parte de una cadena. La pregunta
es cuál necesitas para el problema que tienes.

| Si el problema es… | Prueba primero… |
|---|---|
| El formato cambia en cada respuesta | Ejemplos |
| El tono no es el que necesitas | Ejemplos con el tono correcto |
| El texto sale largo o con elementos que no quieres | Restricciones |
| Aparecen datos que no diste | Restricción «usa solo estos datos» + regla de [FALTA] |
| La tarea tiene muchas partes y sale desordenada | Encadenamiento |
| Hay errores que se pasan sin notar | Encadenamiento con un paso de revisión |

:::actividad Elige la técnica
Para cada problema, elige ejemplos, restricciones o encadenamiento:
1. Las respuestas a reclamos salen a veces formales y a veces informales. → Ejemplos
2. El resumen de un reglamento sale de dos páginas y lo necesitas en cinco viñetas. → Restricciones
3. Necesitas pasar de una grabación transcrita a una minuta revisada. → Encadenamiento
4. El asistente agrega un descuento que nadie ofreció. → Restricciones
5. El aviso semanal cambia de estructura cada semana. → Ejemplos
:::

:::error «Más técnicas, mejor prompt»
Agregar técnicas que no resuelven tu problema solo alarga el prompt y lo hace más difícil de mantener. Usa la técnica que ataca lo que
falla y comprueba en el laboratorio si mejoró.
:::

### P12 · Plantillas reutilizables
cubre: S1, H1
fuentes: F-M2-09, F-M2-11, F-M1-12
bloque: Texto + imagen de una plantilla con secciones

Cuando un prompt funciona, conviene guardarlo como **plantilla**: un texto con **partes fijas**, que no cambian, y **campos
variables**, que completas cada vez. Las guías de prompts de los proveedores usan corchetes para marcar lo que hay que personalizar,
por ejemplo [nombre del cliente].

La documentación de un proveedor propone ordenar un prompt en secciones: **identidad** (el rol), **instrucciones**, **ejemplos** y
**contexto** (los datos de cada vez). Otra recomienda separar esas partes con **etiquetas consistentes**. Una plantilla para textos
profesionales puede verse así:

```
ROL: Eres [cargo] en [tipo de empresa].
TAREA: Redacta [género: correo / aviso / minuta] para [audiencia].
RESTRICCIONES:
- Máximo [número] palabras.
- Registro [formal / semiformal], tono [cordial / neutro].
- Usa solo los DATOS. Si falta algo, escribe [FALTA].
EJEMPLO:
[un ejemplo de entrada y salida]
DATOS:
[los datos de este caso]
```

Las partes en mayúsculas no cambian. Lo que está entre corchetes se completa en cada uso.

:::clave
Una plantilla guarda lo que aprendiste en el laboratorio. La próxima vez no partes de cero: partes de la versión que ya probaste.
:::

:::ejemplo La plantilla de Camila
Camila tiene una plantilla para «correo de seguimiento de postulación». Cada vez solo cambia el cargo, la empresa y la fecha. Los
correos le salen parecidos y le toma menos tiempo revisarlos.
:::

### P13 · Laboratorio 4: diseña tu plantilla
cubre: H1, A1
fuentes: F-M2-09, F-M2-11, F-M1-12
bloque: Actividad (completar plantilla)

Ahora vas a diseñar una plantilla para un texto que se repite en el cargo que elegiste en el módulo 1. Puede ser una respuesta a
consultas frecuentes, un aviso, una confirmación o un seguimiento.

**Plantilla de ejemplo: respuesta a una consulta de cliente**
```
ROL: Eres asistente de atención en [tipo de negocio].
TAREA: Responde la CONSULTA del cliente.
RESTRICCIONES:
- Máximo 70 palabras.
- Formal, de usted, cordial.
- Responde solo con la INFORMACIÓN DISPONIBLE. Si la respuesta no está ahí,
  di que lo consultarás y responderás pronto.
- Sin emojis. Cierra con "Saludos cordiales," y [nombre].
EJEMPLO:
Consulta: ¿Atienden el sábado?
Información: sábado de 10:00 a 14:00.
Respuesta: Estimado cliente: sí, atendemos el sábado de 10:00 a 14:00. Saludos cordiales, [nombre].
INFORMACIÓN DISPONIBLE: [horarios, precios, plazos]
CONSULTA: [texto del cliente]
```

:::actividad Completa tu plantilla
1. Elige el texto repetitivo de tu cargo.
2. Escribe la plantilla con las secciones ROL, TAREA, RESTRICCIONES, EJEMPLO y DATOS.
3. Marca con corchetes los campos variables.
4. Guárdala en tu bitácora como «v1».
:::

:::comprueba
En la plantilla de ejemplo, ¿qué parte debe completarse cada vez que se usa?
- a) Las RESTRICCIONES
- b) La palabra ROL
- **c) La CONSULTA y la INFORMACIÓN DISPONIBLE**
Retroalimentación: Los campos variables son los datos de cada caso. Las restricciones y la estructura son fijas: por eso la plantilla
da resultados parecidos.
:::

### P14 · Cómo evaluar la consistencia
cubre: H1, C2
fuentes: F-M2-09, F-M2-08, F-M2-11
bloque: Texto + tabla de evaluación

Una plantilla es **consistente** cuando entrega textos con la misma calidad y el mismo formato, aunque cambien los datos y aunque la
uses varias veces. Como la salida no es determinista, la única forma de saberlo es probar.

**Cómo probar tu plantilla:**
1. Prepara **tres casos de prueba** distintos: uno simple, uno con un dato que falta y uno difícil (por ejemplo, un cliente molesto).
2. Usa la plantilla con cada caso **dos veces**, en chats nuevos, para que la conversación anterior no influya.
3. Revisa cada resultado con los mismos **criterios**.

| Criterio | Pregunta | Sí / No |
|---|---|---|
| Formato | ¿Tiene las partes pedidas, en el orden pedido? | |
| Largo | ¿Respeta el máximo de palabras? | |
| Tono y registro | ¿Es el que pediste? | |
| Exactitud | ¿Todos los datos están en la información entregada? | |
| Vacíos | ¿Marcó [FALTA] o dijo que consultaría, en vez de inventar? | |

Seis resultados (tres casos por dos intentos) te dan una idea razonable de cómo se comporta la plantilla. Ese número es una
recomendación del curso para una prueba rápida, no una regla.

:::error Probar solo con el caso fácil
Si pruebas la plantilla con un caso en que todo está claro, siempre saldrá bien. Los problemas aparecen con los datos incompletos y
las situaciones difíciles: por eso uno de tus casos debe ser difícil.
:::

### P15 · Laboratorio 5: compara versiones
cubre: C2, H1, A2
fuentes: F-M2-09, F-M2-10
bloque: Comparación antes y después + actividad

Ahora vas a mejorar tu plantilla con datos, no con impresiones.

**Ejemplo de la bitácora de Andrés** (resultados ficticios; plantilla de avisos de despacho, seis resultados por versión):

| Criterio | v1 (sin ejemplos) | v2 (con 2 ejemplos) | v3 (con ejemplos y regla de [FALTA]) |
|---|---|---|---|
| Formato correcto | 3 de 6 | 6 de 6 | 6 de 6 |
| Largo respetado | 4 de 6 | 5 de 6 | 6 de 6 |
| Datos exactos | 5 de 6 | 5 de 6 | 6 de 6 |
| Marcó lo que faltaba | 0 de 2 | 1 de 2 | 2 de 2 |

La v2 resolvió el formato. La v3 resolvió los datos que faltaban. Andrés se queda con la v3 y anota qué cambió en cada versión.

Fíjate en que cada versión cambió **una cosa**. Por eso Andrés sabe qué produjo cada mejora.

:::actividad Tu comparación
1. Prueba tu plantilla v1 con tus tres casos, dos veces cada uno.
2. Llena la tabla de criterios.
3. Identifica el criterio que más falla y elige la técnica que lo ataca (P11).
4. Haz la v2 cambiando solo eso, pruébala igual y compara.
:::

:::clave
Si la v2 no mejora, también aprendiste algo: vuelves a la v1 y pruebas otro cambio. La mejora continua incluye descartar.
:::

### P16 · La prueba de alguien sin contexto
cubre: A2, H1
fuentes: F-M2-11, F-M1-12, F-M2-08
bloque: Texto + escenario

Una guía de un proveedor propone una prueba simple: **muéstrale tu prompt a una colega que no sabe nada de la tarea**. Si ella no
entendería qué se pide, el modelo probablemente tampoco. El asistente no conoce tu trabajo: solo sabe lo que está escrito.

Preguntas para esa revisión:
- ¿Se entiende qué texto hay que producir y para quién?
- ¿Hay palabras que solo entiende tu equipo, como siglas o nombres internos?
- ¿Las restricciones se contradicen entre sí?
- ¿Está claro qué es ejemplo y qué es dato real?

También puedes **pedirle al asistente que mejore tu prompt**: «Revisa esta plantilla. ¿Qué instrucción es ambigua? ¿Qué falta para
que el resultado sea siempre igual de bueno?». Sus sugerencias son eso, sugerencias: pruébalas en el laboratorio antes de aceptarlas.

:::ejemplo La sigla que nadie entendía
La plantilla de Andrés decía «avisar si hay OC pendiente». Una colega de ventas le preguntó qué era «OC». Andrés lo cambió por «orden
de compra pendiente», y los avisos dejaron de salir con interpretaciones raras.
:::

:::error «Si lo entiendo yo, lo entiende el modelo»
Tú conoces el contexto y llenas los vacíos sin darte cuenta. El modelo no puede hacerlo: lo que no está escrito en el prompt, no
existe para él.
:::

### P17 · Orden y mejora continua
cubre: A1, A2
fuentes: F-M2-09, F-M2-10, F-M2-08
bloque: Texto + lista de verificación (checklist)

Las plantillas no se terminan nunca del todo. Cambian tus tareas, cambian los casos y cambian los modelos. La documentación de un
proveedor recomienda volver a probar los prompts cuando se cambia de modelo, porque el comportamiento puede variar.

Hábitos de **orden metodológico**:
- [ ] Cada plantilla tiene un nombre claro y un número de versión.
- [ ] Guardo junto a la plantilla sus casos de prueba.
- [ ] Anoto qué cambié en cada versión y por qué.
- [ ] Separo con etiquetas las partes fijas de los datos.

Hábitos de **mejora continua**:
- [ ] Cuando un resultado falla en el trabajo real, lo agrego como caso de prueba.
- [ ] Vuelvo a probar mis plantillas cuando el asistente se actualiza o cuando cambio de asistente.
- [ ] Reviso cada cierto tiempo si una plantilla sigue sirviendo o si la tarea cambió.

:::ejemplo Un caso nuevo para la bitácora
Un cliente le respondió a Andrés que el aviso no decía la dirección de entrega. Andrés agregó ese caso a sus pruebas y una restricción
nueva: «Incluye la dirección de entrega si está en los datos». Guardó la plantilla como v4.
:::

:::comprueba
Gemini se actualizó y tu plantilla empezó a dar textos más largos. ¿Qué haces primero?
- a) Escribir una plantilla nueva desde cero
- **b) Volver a probarla con tus casos de prueba y ajustar la restricción de largo**
- c) Dejar de usar plantillas
Retroalimentación: Cuando cambia el modelo, se vuelve a probar con los mismos casos. Así ves qué cambió y ajustas solo lo necesario.
:::

### P18 · Cierre: dos plantillas para tu biblioteca
cubre: C1, C2, H1
fuentes: F-M2-09, F-M2-11
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema aplicaste tres técnicas: **ejemplos** para fijar formato y tono, **restricciones** para fijar límites que se pueden
comprobar, y **encadenamiento** para dividir una tarea y revisar cada paso. Guardaste lo aprendido en **plantillas reutilizables** y
mediste su **consistencia** comparando versiones con los mismos casos de prueba.

:::actividad Tu biblioteca de prompts, versión 2
En el Hito 1 armaste tu primera biblioteca de prompts. Ahora agrégale dos plantillas probadas para tu cargo:
1. **Una plantilla con ejemplos y restricciones** para un texto que se repite (un aviso, una respuesta, un seguimiento).
2. **Una cadena de pasos** para un texto más complejo (una minuta desde notas, un informe desde datos).

Para cada una, guarda:
- la versión final y el número de versión;
- tus tres casos de prueba;
- la tabla de criterios con los resultados de al menos dos versiones;
- una línea que diga qué técnica aplicaste y qué mejoró.
:::

:::clave
Una plantilla que pasó tus pruebas es una herramienta de trabajo. Una que no probaste es solo un buen intento.
:::

### Ideas clave

1. La misma indicación puede dar respuestas distintas: un prompt es confiable solo cuando se probó varias veces y con casos variados.
2. Los ejemplos (few-shot) orientan formato, tono y estructura; deben ser pertinentes, variados, con el mismo formato y separados de
   las instrucciones. No hay un número fijo, y demasiados pueden hacer que el modelo los copie de más.
3. Las restricciones fijan qué hacer y qué no, el largo y el formato; las mejores son las que se pueden comprobar.
4. El encadenamiento divide la tarea en pasos (extraer, redactar, revisar) y permite detectar errores en los resultados intermedios.
5. Una plantilla reutilizable separa las partes fijas de los campos variables y guarda lo aprendido en el laboratorio.
6. La consistencia se evalúa con casos de prueba fijos, criterios claros y versiones que cambian una cosa a la vez.
7. Las plantillas se vuelven a probar cuando cambian la tarea, los casos o el modelo: es un proceso de mejora continua.

### Glosario

- **Few-shot**: técnica que incluye en el prompt unos pocos ejemplos de entrada y salida para que el modelo imite el patrón.
- **Ejemplo de entrada y salida**: par que muestra un caso (los datos) y el texto que se espera obtener con ellos.
- **Sobreajuste a los ejemplos**: cuando el modelo copia detalles de los ejemplos en vez de aplicar solo su patrón.
- **Restricción**: límite que el texto debe cumplir, como un largo máximo, un formato o un contenido prohibido.
- **Encadenamiento**: división de una tarea en pasos, en que la salida de cada paso se usa en el siguiente.
- **Autocorrección**: paso de una cadena en que se pide revisar un borrador contra criterios y entregar una versión mejorada.
- **Plantilla de prompt**: prompt guardado con partes fijas y campos variables, para reutilizarlo.
- **Campo variable**: parte de una plantilla, marcada con corchetes, que se completa con los datos de cada caso.
- **Etiqueta**: palabra o encabezado que separa las secciones de un prompt, como ROL, EJEMPLO o DATOS.
- **Consistencia**: capacidad de un prompt de dar resultados con la misma calidad y formato en distintos usos.
- **Caso de prueba**: situación fija que se usa para probar un prompt y comparar sus versiones.
- **Versión de un prompt**: cada variante guardada y numerada de un prompt, con registro de qué cambió.
- **Bitácora de laboratorio**: registro de las versiones, los casos de prueba y los resultados de cada prueba.

### Conexión con el proyecto

Tus dos plantillas probadas (P18) amplían la **biblioteca de prompts** que empezaste en el Hito 1. En el **Hito 2: brief del
proyecto + presentación de 6 láminas** te servirán para redactar el brief: puedes usar una cadena de pasos (extraer los hechos de tu
problema, redactar el brief, revisarlo contra objetivo, audiencia y mensaje) y aplicar restricciones para que quede breve y sin datos
inventados. En el **caso M2-C1** analizarás cómo una empresa usa IA para redactar respuestas a clientes y cómo las supervisa.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M2.md` y `investigacion/M1.md` (consultadas el 24-10-2026).

- F-M2-03 · Universidad de Las Palmas de Gran Canaria; Rodríguez-Rodríguez y García-Sánchez (s. f.). Redacción del correo electrónico en español e inglés: breves recomendaciones. https://iatext.ulpgc.es/sites/default/files/recomendaciones_correo_electronico_0.pdf
- F-M2-05 · Carnegie Mellon University, Student Academic Success Center (s. f.). Executive Summaries. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- F-M2-08 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Microsoft Copilot. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- F-M2-09 · OpenAI (s. f.). Prompt engineering. https://developers.openai.com/api/docs/guides/prompt-engineering
- F-M2-10 · Google AI for Developers (2026). Prompt design strategies. https://ai.google.dev/gemini-api/docs/prompting-strategies
- F-M2-11 · Anthropic (s. f.). Prompting best practices. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- F-M2-12 · Microsoft Learn (2026). Técnicas de ingeniería de indicaciones. https://learn.microsoft.com/es-es/azure/ai-foundry/openai/concepts/prompt-engineering
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-M1-14 · Anthropic (2026). Mejores prácticas de prompting. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices


## M2-AE3 · Presentaciones con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M2-13, F-H-12
bloque: Texto + lista con viñetas

Una presentación sirve para que una audiencia entienda una idea y haga algo con ella: aprobar una propuesta, cambiar un
procedimiento, elegirte para un cargo. En este tema vas a construir una, paso a paso, con apoyo de IA.

**Aprendizaje esperado:** Estructurar presentaciones de 6 láminas con apoyo de IA a partir de un mensaje clave y una audiencia
definida.

Al terminar, deberías poder:
- estructurar 6 láminas con un mensaje clave coherente;
- depurar el contenido que genera la IA: quitar la sobrecarga y corregir los errores.

Este tema es un **taller**: termina con un producto. Vas a definir tu mensaje y tu audiencia, pedirle a Gemini el esquema, revisarlo,
armar las láminas, cuidar su presentación visual y escribir el guion. Es el mismo camino que seguirás en el Hito 2.

En este curso la presentación tiene **seis láminas**. Es un formato corto que obliga a elegir lo importante.

:::ejemplo La presentación de Andrés
Andrés quiere proponerle a su jefatura que la bodega tenga siempre una reserva de cajas, para que no se atrasen los despachos. Tendrá poco tiempo en la reunión del lunes. Lo acompañarás en todo el taller.
:::

:::clave
La IA puede proponerte un esquema y un borrador de cada lámina en segundos. Lo que no puede hacer por ti es decidir qué quieres que
la audiencia entienda. Eso va primero.
:::

### P02 · Antes de abrir una herramienta: propósito, audiencia y mensaje
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Texto + tarjetas (flashcards) con las tres preguntas

Las guías de diseño de presentaciones coinciden: antes de armar láminas hay que definir tres cosas.

1. **Propósito:** ¿qué quieres que pase al final? Que aprueben, que entiendan, que cambien algo.
2. **Audiencia:** ¿quién te escucha?, ¿qué sabe del tema?, ¿qué le preocupa?
3. **Mensaje:** ¿cuál es la idea que tiene que llevarse, aunque olvide todo lo demás?

Si tu audiencia es una persona que decide, como una jefatura, te sirven las tres preguntas del informe ejecutivo del tema 1:
**¿qué debo saber?, ¿por qué me importa?, ¿qué debo hacer?**

| | Andrés |
|---|---|
| Propósito | Que su jefatura apruebe una reserva fija de cajas |
| Audiencia | Su jefatura: conoce la bodega, le preocupan los costos y los reclamos de clientes |
| Mensaje | Si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos |

Estas tres respuestas forman un **brief**: un texto breve que orienta todo lo que viene después. Es lo mismo que pide el Hito 2.

:::actividad Tu brief en tres líneas
Escribe el propósito, la audiencia y el mensaje de una presentación de tu cargo. Si no tienes una a mano, usa el problema que
elegiste en el Hito 1.
:::

### P03 · El mensaje clave en una oración
cubre: S1, A1
fuentes: F-M2-13
bloque: Texto + comparación antes y después

El **mensaje clave** es la idea central de la presentación, dicha en **una oración completa**. No es el tema: es lo que afirmas sobre
el tema.

| Tema (no sirve como mensaje) | Mensaje clave |
|---|---|
| Los despachos | Si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos |
| Mi experiencia laboral | Mi experiencia en atención de público me prepara para ordenar la agenda de una oficina |
| Atención al cliente | Responder las consultas en el día reduce los reclamos |

Pruebas para saber si tu mensaje funciona:
- **¿Es una oración con verbo?** «Los despachos» no lo es.
- **¿Se puede estar en desacuerdo?** Si nadie podría discutirlo, quizás no dice nada.
- **¿Cabe en una sola idea?** Si tiene tres «y», probablemente son tres mensajes.

Cada lámina de tu presentación deberá apoyar este mensaje. Lo que no lo apoya, sobra.

:::clave
**Sentido de síntesis** es poder decir lo esencial en una oración. Si no puedes, todavía no tienes clara tu presentación, y la IA
tampoco la tendrá.
:::

:::error Confundir el tema con el mensaje
Pedirle a la IA «una presentación sobre los despachos» produce láminas genéricas sobre logística. Pedirle una presentación cuyo
mensaje es «si mantenemos 30 cajas de reserva, evitamos atrasos» produce láminas que defienden esa idea.
:::

### P04 · La estructura narrativa: una historia en seis láminas
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Línea de tiempo (timeline) o proceso en 6 pasos

Una presentación no es una lista de datos: es una **historia** que lleva a la audiencia desde la situación actual hasta lo que
quieres que haga. Las láminas se encadenan para contar esa historia de forma coherente.

Para audiencias que deciden, la secuencia **qué debo saber, por qué me importa y qué debo hacer** da un buen hilo. Una estructura
posible para seis láminas, que propone este curso, es:

| Lámina | Función | Ejemplo de Andrés |
|---|---|---|
| 1 | Mensaje clave | Con 30 cajas de reserva evitamos atrasos en los despachos |
| 2 | Situación actual | Hoy pedimos cajas solo cuando se acaban |
| 3 | Problema y por qué importa | Este mes se atrasaron 3 despachos por falta de cajas |
| 4 | Propuesta | Mantener siempre 30 cajas de reserva |
| 5 | Qué se necesita y qué se gana | Un pedido extra al mes; menos atrasos y reclamos |
| 6 | Qué pedimos | Aprobar la reserva desde el próximo mes |

No es la única estructura. Si presentas tu perfil en una entrevista, por ejemplo, la historia puede ir de quién eres a qué aportas.
Lo importante es que haya un hilo y que la última lámina diga qué esperas de la audiencia.

:::ejemplo Dos órdenes para lo mismo
Andrés primero puso la propuesta en la lámina 2. Su jefatura todavía no sabía cuál era el problema y la propuesta parecía un gasto
innecesario. Al moverla después del problema, la propuesta se entiende como la solución.
:::

### P05 · Ordena la historia
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Ordenar o clasificar (sorting activity)

Vas a practicar el orden de una estructura narrativa. El caso es de Camila, que preparó una presentación para un proceso de
selección: le pidieron mostrar en seis láminas cómo organizaría el archivo de documentos de una oficina.

**Mensaje clave de Camila:** «Un archivo ordenado por fecha y tipo de documento permite encontrar cualquier papel rápido».

:::actividad Ordena las láminas
Ordena estas láminas de la 1 a la 6:
- a) Propuesta: carpetas por tipo de documento y, dentro, por fecha
- b) Qué pido: probar el sistema durante un mes
- c) Mensaje clave: un archivo ordenado permite encontrar cualquier papel rápido
- d) Problema: hoy hay que revisar varias cajas para encontrar una factura
- e) Qué se necesita y qué se gana: etiquetas y una tarde de trabajo; menos tiempo perdido
- f) Situación actual: los documentos se guardan por orden de llegada

Orden sugerido: c, f, d, a, e, b.
:::

:::comprueba
¿Por qué la lámina «Qué pido» va al final?
- a) Porque es la menos importante
- **b) Porque la audiencia necesita entender el problema y la propuesta antes de decidir**
- c) Porque así lo exige cualquier herramienta de presentaciones
Retroalimentación: La historia lleva a la audiencia hasta la decisión. Si pides antes de explicar, la audiencia no tiene cómo evaluar
lo que pides.
:::

:::comprueba
¿Qué lámina falta en esta secuencia: mensaje clave, situación actual, propuesta, qué se gana, qué pido?
- **a) El problema y por qué importa**
- b) Una lámina de agradecimiento
- c) Una lámina con la historia de la empresa
Retroalimentación: Sin el problema, la propuesta no tiene justificación. Es la lámina que responde «¿por qué me importa?».
:::

### P06 · Una lámina, una idea
cubre: S2, C1
fuentes: F-M2-13
bloque: Texto + comparación antes y después

La relación entre el mensaje y cada lámina se resume en una regla: **cada lámina transmite una sola idea**, y esa idea apoya el
mensaje clave.

Una guía universitaria de diseño de láminas recomienda que el **título de cada lámina enuncie su conclusión principal**, idealmente
como una oración completa. Compara:

| Título que nombra un tema | Título que dice la conclusión |
|---|---|
| Atrasos | Este mes se atrasaron 3 despachos por falta de cajas |
| Propuesta | Una reserva de 30 cajas evita quedarnos sin stock |
| Costos | La reserva requiere solo un pedido extra al mes |

Con títulos así, la audiencia entiende la lámina aunque no lea nada más, y tú sabes qué tiene que demostrar el resto de la lámina.

**La prueba de los títulos:** lee solo los seis títulos, en orden. Si cuentan la historia completa, tu estructura funciona. Si no se
entiende, falta una idea o sobra una lámina.

:::error Dos ideas en una lámina
Poner el problema y la propuesta en la misma lámina parece ahorrar espacio, pero obliga a la audiencia a seguir dos ideas a la vez.
Si una lámina necesita dos títulos, son dos láminas.
:::

:::comprueba
¿Cuál es el mejor título para la lámina 3 de Andrés?
- a) «Problema»
- b) «Algunos datos de este mes»
- **c) «Este mes se atrasaron 3 despachos por falta de cajas»**
Retroalimentación: Un título-oración dice la conclusión de la lámina. «Problema» y «Algunos datos» nombran un tema, pero no dicen qué
debe entender la audiencia.
:::

### P07 · Herramientas de IA para presentaciones
cubre: S3
fuentes: F-H-12, F-H-47, F-H-48, F-H-68, F-H-21, F-H-23, F-H-20, F-H-49
bloque: Texto + tabla comparativa

Hay varias herramientas que usan IA para ayudarte con una presentación. Para este curso importa que sean gratuitas:

| Herramienta | Qué ofrece sin pagar | Ojo con |
|---|---|---|
| **Gemini** (app o web) | Esquema, contenido y guion por chat. La generación de diapositivas está entre sus funciones sin plan pagado | Los límites de uso se renuevan cada cierto tiempo y tienen un tope semanal |
| **Gamma** (plan Free) | Crea diapositivas desde un prompt, hasta 10 por prompt; exporta a PDF, PPTX, PNG y Google Slides | 400 créditos al registrarse que no se recargan; el plan pagado es el que quita la marca de Gamma |
| **Canva** (Gratis) | Herramientas de IA para diseño | Hasta 20 usos de IA al mes, compartidos entre varias herramientas |
| **Claude** (Free) | Incluye Claude Slides | Exige tener 18 años o más |

Las funciones de IA **dentro** de los programas de oficina son de pago: Copilot en PowerPoint viene en los planes pagados de
Microsoft 365, y Gemini dentro de Documentos y Hojas de cálculo de Google requiere el plan Google AI Pro.

En este taller tienes dos caminos gratuitos:
- **Camino A:** Gemini te ayuda con el esquema, el texto y el guion, y tú armas las láminas en Google Slides.
- **Camino B:** pegas tu esquema revisado en Gamma Free para que diseñe las láminas, y después las revisas.

:::clave
Los planes gratuitos cambian a menudo. Antes de empezar, revisa los límites vigentes de la herramienta que elijas.
:::

### P08 · Paso 1: pide el esquema a Gemini
cubre: H1, S3
fuentes: F-M2-08, F-M1-12, F-M2-13
bloque: Proceso paso a paso + actividad

Con tu brief listo, le pides a Gemini el **esquema**: la lista de las seis láminas con su título y su contenido principal. Usa las
partes de un prompt que ya conoces: objetivo, contexto (audiencia y propósito), fuente (tus datos) y expectativas (número de láminas
y formato).

**Prompt de Andrés:**
«Actúa como encargado de bodega que prepara una propuesta para su jefatura.
OBJETIVO: esquema de una presentación de 6 láminas.
AUDIENCIA: mi jefatura; conoce la bodega y le preocupan los costos y los reclamos.
MENSAJE CLAVE: si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos.
DATOS: este mes hubo 40 despachos y 3 se atrasaron por falta de cajas; un pedido extra al mes alcanza para la reserva.
FORMATO: para cada lámina, un título que sea una oración con su conclusión y un máximo de 3 viñetas de una línea. La lámina 6 debe
decir qué le pido a mi jefatura.
Usa solo estos datos. Si necesitas un dato que no te di, escribe [FALTA DATO] en vez de inventarlo.»

Fíjate en que el prompt incluye restricciones que verás en las próximas pantallas: título-oración, pocas viñetas y nada inventado.
Pedirlo desde el principio te ahorra trabajo de depuración.

:::actividad Tu esquema
Escribe tu propio prompt con tu brief y pídele a Gemini el esquema de seis láminas. Guarda la respuesta tal como salió: la vas a
comparar con tu versión depurada.
:::

### P09 · Paso 2: revisa el esquema contra tu mensaje
cubre: S2, C1, C2
fuentes: F-M2-13, F-M2-07
bloque: Lista de verificación (checklist) + ejemplo

El esquema que entrega la IA es un borrador. Antes de pasar a las láminas, revísalo contra tu brief:

- [ ] **Prueba de los títulos:** leídos en orden, ¿cuentan la historia y llegan al mensaje clave?
- [ ] **Una idea por lámina:** ¿alguna lámina trata dos cosas?
- [ ] **Todo apoya el mensaje:** ¿hay láminas o viñetas que no ayudan a la idea central?
- [ ] **Datos:** ¿cada cifra está en los datos que diste?, ¿aparecen [FALTA DATO]?
- [ ] **Cierre:** ¿la última lámina dice qué esperas de la audiencia?

:::ejemplo Lo que encontró Andrés
El esquema de Gemini traía una lámina «Importancia de la logística en la empresa moderna», que no apoyaba su mensaje: la eliminó y
juntó el problema y sus cifras en una sola. También traía la viñeta «Los atrasos generan un 15 % de reclamos», un dato que Andrés no
había dado. La borró. En la lámina 5 apareció [FALTA DATO] en el costo del pedido extra: Andrés lo preguntó en compras.
:::

:::error Aceptar seis láminas porque son seis
Que el esquema tenga el número de láminas pedido no significa que esté bien. La IA tiende a rellenar con láminas genéricas
(«Introducción», «Contexto», «Conclusiones») que no dicen nada. Cada lámina tiene que ganarse su lugar.
:::

:::comprueba
Una viñeta del esquema dice «Según estudios, el 80 % de las bodegas tiene este problema». Andrés no dio ese dato. ¿Qué hace?
- a) La deja, porque refuerza el mensaje
- **b) La borra o busca una fuente confiable que la respalde**
- c) Cambia el 80 % por un número más bajo
Retroalimentación: Es un dato sin fuente, que la IA pudo inventar. Un dato que no puedes respaldar no va en tu presentación.
:::

### P10 · Paso 3: el contenido de cada lámina
cubre: H1, A1
fuentes: F-M2-14, F-M2-13
bloque: Texto + comparación antes y después

Con el esquema revisado, escribes el contenido de cada lámina. Las recomendaciones para presentaciones eficaces van en la misma
dirección:
- **Pocas palabras por lámina.**
- **Viñetas cortas, de una línea**, que sirvan de guía a quien presenta. La lámina no es el texto completo de lo que vas a decir.
- **Imágenes y gráficos que refuercen el mensaje**, cuando lo visual lo explica mejor que el texto.
- **Sin jerga:** palabras que tu audiencia entienda.

| Antes | Después |
|---|---|
| **Título:** Problema | **Título:** Este mes se atrasaron 3 despachos por falta de cajas |
| «Durante el presente mes se ha podido observar que, debido a la falta de disponibilidad de cajas de embalaje en la bodega, se produjeron atrasos en tres despachos, lo que generó inconvenientes con los clientes afectados.» | • 3 de 40 despachos atrasados • Causa: no había cajas • 3 clientes afectados |

La versión de la derecha se lee en segundos. El detalle lo dices tú al presentar: para eso está el guion (paso 5).

Puedes pedirle a Gemini: «Reduce el contenido de cada lámina a un máximo de 3 viñetas de una línea. Mantén los títulos». Luego revisa
que no se haya perdido un dato importante.

:::clave
La lámina apoya lo que dices; no lo reemplaza. Si la audiencia está leyendo un párrafo, no te está escuchando.
:::

### P11 · Detecta las láminas sobrecargadas
cubre: C2, A1
fuentes: F-M2-14, F-M2-13
bloque: Escenario o clasificación por semáforo

Una lámina está **sobrecargada** cuando tiene más de lo que la audiencia puede captar de un vistazo. Señales:
- **Párrafos** en vez de viñetas de una línea.
- **Letra pequeña**: las recomendaciones de PowerPoint piden no bajar de 18 puntos.
- **Imágenes que saturan** en vez de reforzar el mensaje.
- **Contenido que no apoya** la idea de la lámina. Una guía lo llama ruido: lo que no es señal, se elimina.
- **Dos ideas** compitiendo en la misma lámina.

:::actividad ¿Sobrecargada o lista?
Clasifica cada lámina:
1. Título-oración y tres viñetas de una línea. → Lista
2. Un párrafo de ocho líneas con letra de 12 puntos. → Sobrecargada
3. Un gráfico simple con los 3 atrasos del mes y un título que dice la conclusión. → Lista
4. Tres fotos de bodegas, un logo, cinco viñetas y una tabla. → Sobrecargada
5. Dos ideas: el problema de las cajas y una queja sobre el horario de los camiones. → Sobrecargada
:::

:::comprueba
La lámina 4 de Andrés tiene siete viñetas. ¿Qué es lo primero que conviene hacer?
- a) Bajar la letra a 12 puntos para que quepan
- **b) Quedarse con las viñetas que apoyan la idea de la lámina y llevar el resto al guion**
- c) Agregar una imagen para equilibrar
Retroalimentación: Achicar la letra empeora la legibilidad. Lo que no apoya la idea se elimina, y el detalle útil pasa a lo que dices,
no a lo que se lee.
:::

### P12 · Los errores del contenido generado
cubre: C2, S3
fuentes: F-M2-07, F-M2-08, F-M1-05
bloque: Texto + recuadro destacado

Depurar no es solo quitar texto: también es **corregir errores**. El contenido que generan las herramientas de IA para presentaciones
puede traer los mismos problemas que cualquier texto generado:
- **Cifras y datos inventados**, presentados con seguridad, como el «15 % de reclamos» que encontró Andrés.
- **Citas o referencias** a estudios que no existen, o que existen y dicen otra cosa.
- **Afirmaciones genéricas** que suenan bien, pero que no corresponden a tu caso.
- **Imágenes que no corresponden**: una bodega que no se parece a la tuya, personas que no son de tu equipo, texto mal escrito dentro
  de la imagen.

La regla para una presentación es simple: **cada dato tiene que poder respaldarse**. Si viene de tus registros, revisa que coincida.
Si viene de afuera, busca la fuente como aprendiste en el módulo 1. Si no puedes respaldarlo, sale.

:::error «La cifra que puso la IA se ve profesional»
Un porcentaje le da seriedad a una lámina, y por eso una cifra inventada es peligrosa: la audiencia la cree y puede repetirla. Si te
preguntan de dónde salió y no lo sabes, pierdes credibilidad en toda la presentación.
:::

:::ejemplo Camila revisa su lámina de cierre
Gamma le propuso a Camila una lámina final que decía «Reducción del 50 % en el tiempo de búsqueda de documentos». Ella no tenía cómo
medirlo. La cambió por «Encontrar un documento sin revisar varias cajas», que sí puede defender en la entrevista.
:::

### P13 · Paso 4: arma las láminas
cubre: H1, S3, A2
fuentes: F-H-47, F-H-12
bloque: Pestañas (tabs) con los dos caminos

Con el contenido depurado, llega el momento de armar las láminas. Elige uno de los dos caminos gratuitos.

**Camino A: Gemini + Google Slides**
1. Abre una presentación en blanco en Google Slides con tu cuenta de Google.
2. Crea seis láminas y copia en cada una su título y sus viñetas depuradas.
3. Elige un diseño simple y aplícalo a todas las láminas por igual.
4. Si una lámina necesita un gráfico o una imagen, agrégala tú y revisa que refuerce la idea.

**Camino B: Gamma Free**
1. Crea una cuenta gratuita en Gamma; no pide tarjeta.
2. Pega tu esquema depurado e indica que son 6 láminas.
3. Revisa el resultado con la lista de la pantalla 9: la herramienta puede agregar texto o imágenes que no pediste.
4. Exporta a Google Slides, PPTX o PDF si necesitas editar o entregar el archivo.

Ten en cuenta que los 400 créditos del plan Free no se recargan: conviene llegar a Gamma con el esquema ya revisado y no gastar
créditos en pruebas.

:::clave
En los dos caminos, la herramienta arma y tú decides. Ninguna presentación sale lista de una herramienta: todas pasan por tu
depuración.
:::

:::actividad Tus seis láminas
Arma tus seis láminas por el camino que prefieras. Si solo tienes celular, haz el esquema, el contenido y el guion en la app de Gemini,
y deja el armado visual para cuando tengas acceso a un navegador.
:::

### P14 · Cuidar la imagen profesional
cubre: A2
fuentes: F-M2-14, F-M2-02, F-M2-13
bloque: Lista de verificación (checklist) interactiva

Tu presentación habla de ti antes de que digas una palabra. Cuidar la imagen profesional no exige saber de diseño: exige que la
presentación se lea bien y se vea ordenada.

- [ ] **Letra legible:** nada bajo 18 puntos.
- [ ] **Contraste** entre el fondo y el texto: letra oscura sobre fondo claro, o al revés.
- [ ] **Letra sin adornos**, la misma en todas las láminas.
- [ ] **Imágenes que refuerzan** el mensaje, no que decoran ni saturan.
- [ ] **Sin jerga** ni siglas sin explicar.
- [ ] **Ortografía revisada** en títulos y viñetas.
- [ ] **Un diseño parejo**: mismos colores y misma ubicación de los títulos en todas las láminas.
- [ ] **Imágenes revisadas**: ninguna con texto mal escrito, logos de otras marcas o personas reales sin permiso.

Las últimas tres son recomendaciones del curso. Las imágenes generadas con IA y sus derechos se ven en el módulo 4.

:::error Más efectos, más profesional
Animaciones, muchos colores y fondos recargados distraen del mensaje. Una presentación sobria y legible se ve más profesional que una
llena de efectos.
:::

:::ejemplo El fondo de Andrés
Gamma le propuso a Andrés un fondo con una foto de una bodega y el texto blanco encima. En la sala de reuniones, con la luz encendida,
las viñetas no se leían. Cambió a un fondo claro con letra oscura.
:::

### P15 · Paso 5: el guion
cubre: H1, A1
fuentes: F-M2-14, F-M2-08
bloque: Texto + escenario o conversación de ejemplo

El **guion** es lo que dices mientras muestras cada lámina. Las viñetas son la guía de quien presenta; el guion es la explicación
completa. Por eso la lámina puede tener pocas palabras: el resto lo pones tú.

Puedes pedirle a Gemini un borrador:
«Para cada una de estas 6 láminas, escribe un guion de 2 o 3 oraciones, en primera persona, en un tono profesional y cercano. No
repitas las viñetas palabra por palabra: explícalas. Usa solo estos datos.»

Luego, el trabajo es tuyo:
1. **Reescribe el guion con tus palabras**, como hablas tú. Un guion que no suena a ti se nota.
2. **Revisa los datos** que menciona: los mismos de las láminas.
3. **Ensaya** en voz alta, mirando las viñetas y no un texto leído.
4. **Ajusta**: si tropiezas en una frase, cámbiala.

:::ejemplo Guion de la lámina 3 de Andrés
Lámina: «Este mes se atrasaron 3 despachos por falta de cajas».
Guion: «De los 40 despachos del mes, tres salieron tarde. En los tres casos fue lo mismo: no teníamos cajas medianas. Los clientes nos
llamaron para reclamar, y tuvimos que explicarles el atraso.»
:::

:::error Leer las láminas en voz alta
Si el guion es igual a lo que dice la lámina, la audiencia lee más rápido de lo que hablas y deja de escucharte. Las recomendaciones
para presentar piden ensayar para hablar a partir de las viñetas, no leerlas.
:::

### P16 · Depuración crítica final
cubre: C2, C1, A1
fuentes: F-M2-13, F-M2-14, F-M2-07
bloque: Lista de verificación (checklist) + actividad

Antes de presentar o entregar, haz una revisión completa. Esta lista reúne todo el taller:

**Mensaje y estructura**
- [ ] El mensaje clave es una oración y aparece en la lámina 1.
- [ ] Los seis títulos, leídos en orden, cuentan la historia.
- [ ] Cada lámina tiene una sola idea y apoya el mensaje.
- [ ] La lámina 6 dice qué esperas de la audiencia.

**Contenido**
- [ ] Pocas palabras: viñetas de una línea, sin párrafos.
- [ ] Cada dato está respaldado por tus registros o por una fuente.
- [ ] No quedó ningún [FALTA DATO] sin resolver.

**Imagen y guion**
- [ ] Letra de 18 puntos o más, buen contraste y diseño parejo.
- [ ] El guion está en tus palabras y lo ensayaste.

:::actividad Compara el antes y el después
Pon lado a lado el esquema que te dio Gemini en el paso 1 y tu presentación final. Anota en tu bitácora tres cosas que eliminaste, una
que corregiste y una que agregaste tú.
:::

:::comprueba
Andrés terminó sus láminas. ¿Qué revisión le permite saber, en menos de un minuto, si su estructura funciona?
- a) Contar cuántas imágenes tiene
- **b) Leer solo los seis títulos en orden**
- c) Revisar el tamaño del archivo
Retroalimentación: Si los títulos son oraciones con la conclusión de cada lámina, leídos en orden deben contar la historia completa.
:::

### P17 · Cierre: tu presentación para el Hito 2
cubre: C1, C2, H1
fuentes: F-M2-13, F-M2-14
bloque: Texto + actividad de cierre (entrega)

En este taller construiste una presentación completa: definiste **propósito, audiencia y mensaje**, ordenaste una **historia en seis
láminas**, escribiste **títulos que dicen la conclusión**, pediste el esquema a la IA y lo **depuraste**: quitaste la sobrecarga,
corregiste los datos sin respaldo y cuidaste la imagen. Al final escribiste el **guion** con tus palabras.

:::actividad Tu presentación de 6 láminas
Con el problema u oportunidad que elegiste en el Hito 1:
1. Escribe tu brief: propósito, audiencia y mensaje clave en una oración.
2. Pide a Gemini el esquema de seis láminas con títulos-oración.
3. Depura el esquema con la lista de la pantalla 9.
4. Arma las láminas en Google Slides o en Gamma Free.
5. Revisa la imagen con la lista de la pantalla 14.
6. Escribe y ensaya el guion.
7. Haz la depuración final de la pantalla 16.

Guarda tu esquema inicial y tu versión final: muestran tu trabajo de depuración.
:::

:::clave
La IA te ahorró tiempo en el borrador. Lo que hace buena a tu presentación es lo que decidiste quitar, corregir y decir con tus
palabras.
:::

### Ideas clave

1. Antes de abrir una herramienta se definen el propósito, la audiencia y el mensaje: juntos forman el brief.
2. El mensaje clave es una oración completa que afirma algo sobre el tema; cada lámina debe apoyarlo.
3. Una presentación es una historia: para quien decide, sirve el hilo qué debo saber, por qué me importa y qué debo hacer, y la
   última lámina dice qué esperas de la audiencia.
4. Cada lámina tiene una sola idea y su título dice la conclusión; leídos en orden, los títulos cuentan la historia.
5. La IA propone esquema, contenido y guion; Gemini y Gamma Free son caminos gratuitos, y las funciones de IA dentro de PowerPoint o
   de Documentos y Hojas de cálculo de Google son de pago.
6. Depurar es quitar la sobrecarga (párrafos, letra pequeña, imágenes que saturan, lo que no apoya el mensaje) y corregir datos sin
   respaldo.
7. Las viñetas guían a quien presenta: el guion se dice con palabras propias y se ensaya, no se lee.

### Glosario

- **Brief**: texto breve con el propósito, la audiencia y el mensaje de una presentación o de un proyecto.
- **Mensaje clave**: idea central de una presentación, dicha en una oración completa.
- **Estructura narrativa**: orden de las láminas que cuenta una historia desde la situación actual hasta lo que se pide a la audiencia.
- **Lámina**: cada una de las diapositivas de una presentación.
- **Título-oración**: título de una lámina que enuncia su conclusión principal como una oración completa.
- **Esquema**: lista de las láminas con su título y su contenido principal, antes de armarlas.
- **Viñeta**: línea breve, marcada con un punto o un guion, que resume una idea dentro de una lámina.
- **Lámina sobrecargada**: lámina con más contenido del que se capta de un vistazo: párrafos, letra pequeña, imágenes que saturan o
  ideas que no apoyan el mensaje.
- **Ruido**: todo lo que aparece en una lámina sin apoyar su mensaje.
- **Contraste**: diferencia entre el color del fondo y el del texto, que hace legible una lámina.
- **Guion (de una presentación)**: lo que dice quien presenta mientras muestra cada lámina.
- **Depuración**: revisión crítica que elimina lo que sobra y corrige los errores del contenido generado.

### Conexión con el proyecto

Este taller es el camino del **Hito 2 del proyecto aplicado: brief del proyecto + presentación de 6 láminas**. El problema u
oportunidad del Hito 1 se convierte en un brief (objetivo, audiencia y mensaje, P02 y P03) y en una presentación de seis láminas
hecha con IA y depurada por ti (P08 a P16). La actividad de cierre (P17) es tu borrador de entrega. Para redactar el brief, usa lo que
aprendiste en el tema 1 sobre audiencia e informe ejecutivo, y las plantillas del tema 2. En el **caso M2-C2** analizarás cómo
equipos de una empresa usan un asistente de IA en sus herramientas de oficina, incluidas las presentaciones.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M2.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-1.md`
(consultadas el 24-10-2026).

- F-M2-02 · Senado de Chile, Redacción de Sesiones (2025). Guía de lenguaje claro para el ámbito legislativo. https://cdn.senado.cl/portal-senado-produccion/s3fs-public/2025-09/guia-de-lenguaje-claro-para-el-ambito-legislativo.pdf
- F-M2-05 · Carnegie Mellon University, Student Academic Success Center (s. f.). Executive Summaries. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- F-M2-07 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M2-08 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Microsoft Copilot. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- F-M2-13 · MIT, NSE Communication Lab; Hirst y Jepeal (s. f.). Slide Design (CommKit). https://mitcommlab.mit.edu/nse/commkit/slide-design
- F-M2-14 · Microsoft Support (s. f.). Sugerencias para crear y ofrecer una presentación eficaz. https://support.microsoft.com/es-es/office/sugerencias-para-crear-y-presentar-una-presentación-eficaz-f43156b0-20d2-4c51-8345-0c337cefb88b
- F-M1-05 · OpenAI (2026). Image generation: limitations. https://developers.openai.com/api/docs/guides/image-generation
- F-M1-12 · Google Workspace (2026). Cómo escribir instrucciones eficaces. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-20 · Microsoft (s. f.). Compara todos los planes y precios de Microsoft 365 (Chile). https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- F-H-21 · Anthropic (s. f.). Planes y precios. https://claude.com/es/pricing
- F-H-23 · Anthropic (2025). Consumer Terms of Service. https://www.anthropic.com/legal/consumer-terms
- F-H-47 · Gamma (s. f.). Planes y precios. https://gamma.app/es/pricing
- F-H-48 · Canva (s. f.). Precios de Canva (Chile). https://www.canva.com/es_419/precios/
- F-H-49 · Google (s. f.). Planes Google AI (Google One, Chile). https://one.google.com/intl/es-419_cl/about/google-ai-plans/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/


## M2-AE4 · Planillas de cálculo con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-49, F-H-20, F-M2-07
bloque: Texto + lista con viñetas

Las planillas de cálculo están en casi todos los trabajos: inventarios, ventas, asistencia, gastos. Escribir una fórmula puede costar
si no la usas seguido, y ahí la IA ayuda: le describes lo que necesitas y te propone la fórmula. El problema es que una fórmula
equivocada no avisa: entrega un número que parece correcto.

**Aprendizaje esperado:** Resolver análisis en planillas de cálculo con fórmulas generadas por IA, verificando su exactitud.

Al terminar, deberías poder:
- generar una fórmula correcta para el problema planteado;
- comprobar el resultado con datos de prueba y corregir los errores.

**Cómo vas a practicar, sin pagar.** Las funciones de IA que trabajan **dentro** de las planillas son de pago: Gemini en Hojas de
cálculo de Google requiere el plan Google AI Pro, y Copilot en Excel viene en los planes pagados de Microsoft 365. Por eso este tema
usa un camino gratuito: **pides la fórmula a Gemini en el chat, la pegas en Hojas de cálculo de Google (Google Sheets) y la compruebas
con datos de práctica.** Si usas Excel, los pasos son casi los mismos.

Trabajarás con la planilla de inventario de **Andrés**, con datos ficticios.

:::clave
En este tema, la IA propone y tú compruebas. Un asistente puede entregar una fórmula errónea con total seguridad, e incluso con una
explicación que parece lógica.
:::

### P02 · Cómo se arma una fórmula
cubre: S1
fuentes: F-M2-18, F-M2-16, F-M2-15
bloque: Texto + imagen de una planilla con celdas rotuladas

Antes de pedir fórmulas, repasa cómo se leen.

- Una planilla tiene **columnas** (letras: A, B, C) y **filas** (números: 1, 2, 3). Cada **celda** se nombra por su columna y su fila:
  **D2** es la columna D, fila 2.
- Un **rango** (la ayuda de Google lo llama intervalo) es un grupo de celdas: **C2:C7** va de C2 a C7.
- Una **fórmula** empieza con el signo **=**. Por ejemplo, **=D2*E2** multiplica lo que hay en D2 por lo que hay en E2.
- Una **función** es una operación con nombre, como **SUMAR.SI** o **BUSCARV**. Lo que va entre paréntesis son sus **argumentos**.

**El separador de argumentos.** En la ayuda de Google en español, los argumentos se separan con **punto y coma**:
=SUMAR.SI(C2:C7;"EPP";F2:F7). Según la configuración regional de la planilla, el separador puede ser **coma**. Si la IA te da una
fórmula con comas y la planilla marca error, cambia las comas por punto y coma, o al revés. Mejor aún: pídele desde el inicio el
separador que usa tu planilla.

:::error Copiar la fórmula con el separador equivocado
Algunas páginas de ayuda muestran las fórmulas con comas, y la IA también puede proponerlas así. Si tu planilla usa punto y coma, la fórmula no
funciona aunque esté bien pensada. No es un error de lógica: es de escritura.
:::

:::comprueba
¿Qué hace la fórmula =D3*E3?
- a) Suma las columnas D y E completas
- **b) Multiplica el valor de la celda D3 por el de la celda E3**
- c) Busca el valor D3 en la columna E
Retroalimentación: La fórmula empieza con = y opera con dos celdas de la fila 3: las unidades de D3 por el precio de E3.
:::

### P03 · Tus datos de práctica
cubre: S3, H1
fuentes: F-M2-20
bloque: Tabla + actividad (copiar en la planilla)

Vas a trabajar con una tabla pequeña de **datos de práctica**: datos ficticios, pocos y conocidos, con los que puedes calcular a mano
el resultado correcto. Así, cuando la fórmula dé un número, sabrás si está bien.

Abre una hoja nueva en Hojas de cálculo de Google y copia esta tabla desde la celda A1. **Escribe los números sin punto de miles**:
3500 y no 3.500.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **1** | Código | Producto | Categoría | Unidades | Precio unitario |
| **2** | P01 | Guantes de seguridad | EPP | 40 | 3500 |
| **3** | P02 | Casco | EPP | 12 | 9900 |
| **4** | P03 | Cinta de embalaje | Embalaje | 150 | 1200 |
| **5** | P04 | Caja mediana | Embalaje | 80 | 800 |
| **6** | P05 | Zapatos de seguridad | EPP | 8 | 24990 |
| **7** | P06 | Film stretch | Embalaje | 25 | 6500 |

EPP significa elementos de protección personal.

¿Por qué datos de práctica y no la planilla real? Porque la investigación sobre errores en planillas muestra que son comunes y no
triviales. Probar primero con una tabla en que conoces las respuestas es una forma de detectarlos antes de que lleguen a un informe.
Usar datos ficticios, además, evita pegar información de una empresa en el chat. Este método de datos de práctica es una
recomendación del curso.

:::actividad Prepara tu planilla
1. Copia la tabla en una hoja nueva.
2. Revisa celda por celda que cada valor quedó igual.
3. Nombra la hoja «Práctica M2».
:::

### P04 · Referencias relativas, absolutas y mixtas
cubre: S1, C1
fuentes: F-M2-18, F-M2-15
bloque: Texto + imagen animada de una fórmula copiada hacia abajo

Cuando copias una fórmula a otra celda, sus referencias pueden moverse o quedarse fijas. Esa diferencia explica muchos errores.

| Tipo | Cómo se escribe | Qué pasa al copiar hacia abajo |
|---|---|---|
| **Relativa** | D2 | Cambia: en la fila siguiente pasa a D3 |
| **Absoluta** | $D$2 | No cambia: sigue siendo D2 |
| **Mixta** | $D2 o D$2 | Fija solo la columna o solo la fila |

La referencia **relativa** es la predeterminada, y casi siempre es lo que quieres: si en F2 escribes =D2*E2 y la copias a F3, queda
=D3*E3, que es justo lo que necesitas para cada producto.

La **absoluta** se usa cuando algo **no debe moverse**: un rango que todas las fórmulas tienen que mirar completo, o una celda con un
valor fijo. El signo **$** delante de la columna y de la fila la ancla. En Excel, la tecla F4 recorre los tipos de referencia.

| Fórmula en I2 | Copiada a I3 |
|---|---|
| =SUMAR.SI(C2:C7;H2;F2:F7) | =SUMAR.SI(C3:C8;H3;F3:F8) ← el rango se movió |
| =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7) | =SUMAR.SI($C$2:$C$7;H3;$F$2:$F$7) ← el rango quedó fijo |

En la segunda fórmula, H2 es relativa a propósito: cada fila del resumen debe mirar su propia categoría.

:::clave
Pregúntate: al copiar esta fórmula, **¿qué debe moverse y qué no?** Lo que no debe moverse, lleva $.
:::

### P05 · SUMAR.SI: sumar con una condición
cubre: S1, C1
fuentes: F-M2-16
bloque: Texto + ejemplo guiado

**SUMAR.SI** suma solo los valores que cumplen una condición. Su forma es:

**=SUMAR.SI(intervalo; criterio; [intervalo_suma])**

- **intervalo:** dónde se revisa la condición. Por ejemplo, la columna de categorías.
- **criterio:** la condición. Si es texto, va **entre comillas dobles**: "EPP". Si es un número, puede llevar un operador: ">100".
- **intervalo_suma:** qué se suma. Es opcional (por eso va entre corchetes): si no lo pones, se suman las celdas del primer intervalo.

Ejemplos con tus datos de práctica:

| Pregunta | Fórmula | Resultado |
|---|---|---|
| ¿Cuántas unidades de EPP hay? | =SUMAR.SI(C2:C7;"EPP";D2:D7) | 60 |
| ¿Cuántas unidades hay de productos con más de 100 unidades? | =SUMAR.SI(D2:D7;">100") | 150 |

Compruébalo a mano: las unidades de EPP son 40 + 12 + 8 = 60. El único producto con más de 100 unidades es la cinta (150).

SUMAR.SI admite **un solo criterio**. Si necesitas dos condiciones a la vez (por ejemplo, EPP y más de 10 unidades), hace falta otra
función. Pídeselo a la IA diciendo que tienes dos condiciones, y compruébalo igual.

:::error Criterio de texto sin comillas
=SUMAR.SI(C2:C7;EPP;D2:D7), sin comillas, no busca la palabra «EPP»: la planilla la interpreta de otra forma y el resultado falla.
Los criterios de texto van entre comillas dobles.
:::

### P06 · BUSCARV: traer un dato de otra columna
cubre: S1, C1
fuentes: F-M2-15
bloque: Texto + ejemplo guiado

**BUSCARV** busca un valor en la **primera columna** de un rango y devuelve el valor de **la misma fila** en la columna que le
indiques. Sirve, por ejemplo, para escribir un código y obtener su precio.

**=BUSCARV(valor_buscado; intervalo; índice; está_ordenado)**

- **valor_buscado:** lo que buscas, por ejemplo el código P05.
- **intervalo:** la tabla donde buscar. Su primera columna debe ser la que contiene lo que buscas.
- **índice:** el número de la columna del intervalo que quieres traer. Se cuenta desde la primera columna del intervalo, no desde la
  A de la hoja.
- **está_ordenado:** escribe **FALSO** para una coincidencia exacta.

Con tus datos de práctica:

**=BUSCARV("P05";A2:E7;5;FALSO)** → 24990

El intervalo A2:E7 tiene cinco columnas: Código (1), Producto (2), Categoría (3), Unidades (4) y Precio unitario (5). El índice 5 trae
el precio. Con índice 4 traería las unidades: 8.

Dos detalles de la ayuda de Google que importan:
- BUSCARV devuelve **solo la primera coincidencia**. Si un código está repetido, verás un solo resultado.
- Si **omites** el último argumento, la función supone VERDADERO: busca una coincidencia **aproximada**, que exige que la primera
  columna esté ordenada. Si no lo está, el resultado puede ser incorrecto. La recomendación es usar FALSO.

:::comprueba
En =BUSCARV("P03";A2:E7;2;FALSO), ¿qué devuelve la fórmula?
- a) 150
- **b) Cinta de embalaje**
- c) Embalaje
Retroalimentación: El índice 2 trae la segunda columna del intervalo, que es Producto. Para las unidades, el índice sería 4.
:::

### P07 · Cómo pedirle una fórmula a la IA
cubre: S2
fuentes: F-M2-10, F-M2-08, F-M2-12, F-M2-15
bloque: Texto + imagen de un prompt con sus partes destacadas

La IA no ve tu planilla. Si pides «una fórmula para sumar los EPP», tiene que adivinar dónde están los datos. Para recibir una
fórmula que funcione a la primera, dale **contexto concreto** y pide un **formato de salida definido**:

| Dile… | Ejemplo |
|---|---|
| Qué programa usas y en qué idioma | «Hojas de cálculo de Google, en español» |
| Qué separador usa | «Usa punto y coma para separar argumentos» |
| Qué hay en cada columna y desde qué fila | «A: código; C: categoría; F: valor total; datos de la fila 2 a la 7» |
| Dónde va la fórmula | «La fórmula va en I2 y la voy a copiar a I3» |
| Qué resultado esperas | «La suma del valor total de la categoría escrita en H2» |
| Cómo vienen los datos | «Puede haber espacios de más en los códigos» |
| Qué formato quieres | «Solo la fórmula y una explicación de cada argumento» |

Entregar datos de referencia reduce las respuestas inventadas. Puedes pegar las primeras filas de tu tabla de práctica, que son
ficticias.

Avisar si los datos pueden venir «sucios» es importante: un espacio de más o un número guardado como texto rompen las búsquedas.

**Plantilla para pedir fórmulas:**
«Uso [programa] en español, con [separador] como separador. Mis datos están en [rango]: [qué hay en cada columna]. Necesito una
fórmula para [resultado], que va en [celda] y que voy a copiar a [celdas]. Entrega la fórmula y explica cada argumento.»

:::clave
Decir dónde va la fórmula y hacia dónde la vas a copiar le permite a la IA decidir qué referencias deben ser absolutas.
:::

### P08 · Problema 1: el valor total de cada producto
cubre: H1, C1, S2
fuentes: F-M2-18, F-M2-08
bloque: Proceso paso a paso + actividad

**Problema:** Andrés necesita saber cuánto vale en pesos el stock de cada producto. Valor total = unidades × precio unitario.

1. **Pide la fórmula a Gemini:** «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En la columna D tengo
   unidades y en la E, precio unitario, de la fila 2 a la 7. Necesito en la columna F el valor total de cada producto. La fórmula va en
   F2 y la copiaré hasta F7. Entrega la fórmula y explica cada parte».
2. **Escribe en F1** el encabezado «Valor total».
3. **Pega la fórmula en F2.** La respuesta esperada es =D2*E2.
4. **Cópiala hasta F7**, arrastrando la esquina de la celda o con copiar y pegar.
5. **Comprueba con un cálculo a mano** al menos dos filas:
   - Fila 2: 40 × 3500 = 140000.
   - Fila 6: 8 × 24990 = 199920.

**Resultados esperados:**

| Fila | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Valor total | 140000 | 118800 | 180000 | 64000 | 199920 | 162500 |

:::actividad Revisa la copia
Haz clic en F5 y mira la fórmula en la barra de fórmulas. ¿Dice =D5*E5? Si dice otra cosa, la copia no se hizo bien. Esta
revisión de la fórmula, y no solo del resultado, es la que hace la diferencia.
:::

### P09 · Verificar con datos de prueba
cubre: S3, C2, A1
fuentes: F-M2-20, F-M2-19, F-M2-12
bloque: Proceso (process block) en 4 pasos

Comprobar una fórmula es más que mirar si «el número se ve razonable». Este curso propone un método de cuatro pasos con datos de
prueba:

1. **Calcula a mano uno o dos casos.** Si la fórmula da otra cosa, hay un error.
2. **Prueba un caso extremo.** Cambia temporalmente un dato a 0 o deja una celda vacía y mira qué pasa. ¿El resultado cambia como
   esperabas?, ¿aparece un error?
3. **Cambia un dato y observa.** Si cambias las unidades de P01 de 40 a 41, el valor total debería subir exactamente 3500. Si no cambia,
   la fórmula no está mirando esa celda.
4. **Revisa la fórmula celda por celda.** Haz clic en algunas celdas copiadas y lee la fórmula: ¿apunta a las celdas correctas?

El último paso tiene respaldo en la investigación: después de años de estudios sobre errores en planillas, la técnica que ha mostrado
eficacia es la **inspección celda por celda**. Las planillas también ayudan: Excel, por ejemplo, marca fórmulas que no siguen el
patrón de sus vecinas, rangos que omiten celdas con datos y referencias a celdas vacías.

Recuerda devolver los datos a su valor original después de cada prueba.

:::clave
**Rigor numérico** es no aceptar un resultado que no comprobaste. La IA también lo dice: aun con buenas instrucciones, hay que
validar sus respuestas.
:::

:::error «Si no aparece un mensaje de error, la fórmula está bien»
Los errores más peligrosos no muestran ningún aviso: entregan un número equivocado con buen aspecto. Un mensaje de error es fácil de
ver; una suma que omite una fila, no.
:::

### P10 · Problema 2: una tabla resumen con SUMAR.SI
cubre: H1, C1
fuentes: F-M2-16, F-M2-18
bloque: Proceso paso a paso + actividad

**Problema:** la jefatura de Andrés quiere una tabla pequeña con el valor total del stock por categoría.

1. **Arma la tabla resumen** en tu hoja de práctica:

| | H | I |
|---|---|---|
| **1** | Categoría | Valor total |
| **2** | Embalaje | |
| **3** | EPP | |

2. **Pide la fórmula a Gemini** con la plantilla de la pantalla 7: «… En C tengo la categoría y en F el valor total, de la fila 2 a la
   7. En H2 y H3 tengo los nombres de las categorías. Necesito en I2 la suma del valor total de la categoría de H2. Voy a copiar la
   fórmula a I3».
3. **Pega la fórmula en I2 y cópiala a I3.**
4. **Calcula a mano** los resultados esperados:
   - Embalaje: 180000 + 64000 + 162500 = **406500**.
   - EPP: 140000 + 118800 + 199920 = **458720**.
5. **Compara.** Si los dos coinciden, revisa además la fórmula de I3: ¿los rangos siguen siendo C2:C7 y F2:F7?

La respuesta esperada es =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7), con los rangos fijos y la categoría relativa.

:::actividad ¿Qué te propuso la IA?
Anota en tu bitácora la fórmula exacta que te dio Gemini. ¿Usó el signo $ en los rangos? Si no lo usó, la siguiente pantalla te
muestra qué puede pasar.
:::

:::comprueba
¿Por qué H2 no lleva el signo $ en la fórmula del resumen?
- a) Porque el signo $ no funciona con texto
- **b) Porque al copiar a I3 debe pasar a H3, la siguiente categoría**
- c) Porque es un error que hay que corregir
Retroalimentación: La categoría debe cambiar en cada fila del resumen. Los rangos de datos, en cambio, deben quedar fijos.
:::

### P11 · Error de referencia: el rango que se mueve
cubre: C2, S1
fuentes: F-M2-18, F-M2-15, F-M2-19
bloque: Escenario + comparación antes y después

Supón que la IA te dio la fórmula sin el signo $: =SUMAR.SI(C2:C7;H2;F2:F7).

- En **I2** (Embalaje) da **406500**. Correcto.
- Copiada a **I3**, la fórmula se convierte en =SUMAR.SI(C3:C8;H3;F3:F8). El rango bajó una fila: dejó fuera la fila 2, que es un EPP
  (los guantes). El resultado es **318720** en vez de **458720**.

Lo engañoso es que **la primera fila del resumen está bien**. Si solo compruebas I2, no ves el error. Y el número de I3 parece
razonable: no hay ningún mensaje que avise.

**La corrección:** fijar los rangos con $ para que no se muevan al copiar: =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7). La ayuda de Google
recomienda lo mismo para BUSCARV: usar referencias absolutas para que el intervalo no se mueva al copiar.

:::actividad Provoca el error y corrígelo
En tu hoja de práctica, escribe en I2 la fórmula sin $ y cópiala a I3. Comprueba que I3 da 318720 y no 458720. Luego corrige la
fórmula con $, cópiala de nuevo y anota en tu bitácora la fórmula antes y después, y cómo detectaste el error.
:::

:::error Comprobar solo la primera celda
Los errores de referencia aparecen al copiar. Por eso se comprueba al menos una celda copiada, no solo la primera, y se lee su
fórmula en la barra.
:::

:::comprueba
Andrés copió una fórmula de SUMAR.SI y la última fila del resumen da un total menor que el esperado. ¿Cuál es la causa más probable?
- a) El criterio de texto está mal escrito
- **b) El rango era relativo y se desplazó al copiar, dejando fuera filas con datos**
- c) La planilla tiene un error de cálculo
Retroalimentación: Un rango relativo baja con cada fila copiada y omite las primeras filas de datos. Se corrige con referencias
absolutas ($).
:::

### P12 · Problema 3: buscar un precio con BUSCARV
cubre: H1, C1
fuentes: F-M2-15
bloque: Proceso paso a paso + actividad

**Problema:** Andrés quiere escribir un código en una celda y ver al lado el precio de ese producto, para responder rápido a ventas.

1. **Prepara las celdas:** en K1 escribe «Código buscado» y en L1 «Precio». En K2 escribe **P05**.
2. **Pide la fórmula a Gemini:** «Uso Hojas de cálculo de Google en español, con punto y coma. En A2:A7 tengo códigos de producto y
   en E2:E7, precios. Quiero que en L2 aparezca el precio del código que escribo en K2. Necesito coincidencia exacta. Entrega la
   fórmula y explica cada argumento».
3. **Pega la fórmula en L2.** La respuesta esperada es =BUSCARV(K2;$A$2:$E$7;5;FALSO).
4. **Comprueba con tus datos:** el precio de P05 en la tabla es 24990. ¿Coincide?
5. **Prueba otros códigos** en K2:
   - P01 → debe dar 3500.
   - P04 → debe dar 800.
   - P09 → no existe: debe aparecer un error de valor no encontrado.

El caso P09 es un **dato de prueba** a propósito: compruebas que la fórmula no inventa un precio cuando el código no está.

:::actividad Lee la explicación con lupa
Compara la explicación de Gemini con lo que viste en la pantalla 6. ¿Dijo que el índice 5 corresponde a la quinta columna del
intervalo? ¿Explicó por qué el último argumento es FALSO? Anota si algo de la explicación no coincide.
:::

### P13 · Errores de lógica en BUSCARV
cubre: C2
fuentes: F-M2-15
bloque: Pestañas (tabs) con cuatro errores

Un **error de lógica** es una fórmula que está bien escrita, pero que no hace lo que necesitas. Estos son frecuentes con BUSCARV:

**1. Omitir el último argumento.** =BUSCARV(K2;$A$2:$E$7;5) parece igual, pero sin FALSO la función busca una coincidencia aproximada.
Si la primera columna no está ordenada, puede devolver el dato de otro producto sin avisar.

**2. Índice mayor que las columnas del intervalo.** =BUSCARV(K2;$A$2:$E$7;6;FALSO) pide la sexta columna, pero el intervalo A:E tiene
cinco. Resultado: error #REF!.

**3. Contar el índice desde la A de la hoja.** Si el intervalo empieza en B (B2:E7), la columna B es la 1. Con el índice 5, que en A2:E7
traía el precio, ahora pides una columna que no existe en el intervalo.

**4. Datos sucios.** Si en la tabla el código quedó escrito «P05 » (con un espacio al final), buscar «P05» no lo encuentra y aparece
un error de valor no encontrado. También fallan los números o las fechas guardados como texto.

:::error «La IA siempre pone el último argumento»
No siempre. Una fórmula sin FALSO puede funcionar con tus datos de práctica, si están ordenados, y fallar con otros. Revisa el último
argumento cada vez.
:::

:::comprueba
=BUSCARV(K2;$A$2:$E$7;6;FALSO) muestra #REF!. ¿Qué lo corrige?
- a) Cambiar FALSO por VERDADERO
- **b) Usar un índice que exista en el intervalo, por ejemplo 5 para el precio**
- c) Quitar los signos $
Retroalimentación: El error #REF! aparece porque el índice 6 es mayor que las cinco columnas de A2:E7. El índice debe estar dentro del
intervalo.
:::

### P14 · Leer los mensajes de error
cubre: S3, C2, H1
fuentes: F-M2-19, F-M2-15
bloque: Tabla + tarjetas (flashcards)

Cuando una fórmula falla de forma visible, la planilla muestra un **valor de error**. Cada uno da una pista de qué revisar. Los
nombres cambian un poco entre programas:

| Error | Qué suele significar | Qué revisar |
|---|---|---|
| **#N/A** en Sheets, **#N/D** en Excel | No se encontró el valor buscado | ¿Existe el valor?, ¿hay espacios de más o números como texto? |
| **#REF!** | Una referencia no es válida, por ejemplo un índice mayor que las columnas del intervalo | El índice de BUSCARV y los rangos |
| **#VALUE!** en Sheets, **#¡VALOR!** en Excel | Se mezclan tipos de datos distintos, como texto donde se espera un número | Celdas con texto en una columna de números |
| **#¡DIV/0!** en Excel | Se está dividiendo por cero o por una celda vacía | La celda del divisor |
| **#¿NOMBRE?** en Excel | El nombre de la función está mal escrito | Que el nombre de la función esté bien escrito, por ejemplo BUSCARV |

Puedes pegar el error en el chat y preguntar qué significa: «Mi fórmula =BUSCARV(K2;$A$2:$E$7;6;FALSO) da #REF!. ¿Por qué?». La
explicación te orienta, pero la compruebas tú con la tabla.

En Excel para Windows existe además «Evaluar fórmula», que muestra paso a paso cómo se calcula una fórmula anidada. No está en el
celular.

:::comprueba
Andrés escribe P02 en K2 y aparece #N/A. En la tabla, el código P02 existe. ¿Qué revisa primero?
- a) Que el índice no sea mayor que las columnas
- **b) Que el código de la tabla no tenga espacios de más o esté guardado de otra forma**
- c) Que la función esté bien escrita
Retroalimentación: #N/A indica que no encontró el valor. Si el código existe, lo más probable es que haya una diferencia invisible,
como un espacio al final.
:::

### P15 · Filtros para revisar subconjuntos
cubre: H1, S3
fuentes: F-M2-17
bloque: Proceso paso a paso + actividad

Los **filtros** ocultan las filas que no quieres ver, sin borrarlas. Sirven para trabajar con una parte de los datos y también para
**comprobar** el resultado de una fórmula.

En Hojas de cálculo de Google:
1. Selecciona tu tabla de datos, de A1 a F7.
2. Ve a **Datos > Crear un filtro**. Aparece un ícono en cada encabezado.
3. En el encabezado **Categoría**, filtra por valores y deja marcado solo **EPP**.
4. Ahora ves solo los guantes, el casco y los zapatos.

**Úsalo para verificar:** con el filtro puesto, suma a mano los valores totales visibles: 140000 + 118800 + 199920. ¿Da 458720, lo
mismo que tu fórmula en I3? Si coincide, tienes dos caminos distintos que llegan al mismo número.

También puedes **ordenar** la tabla por una columna, por ejemplo por unidades de menor a mayor, para ver de inmediato qué productos
tienen poco stock. Y si necesitas mirar los datos de distintas formas, las vistas de filtro permiten guardar y compartir varios
filtros.

Cuando termines, quita el filtro para volver a ver todas las filas.

:::actividad Dos caminos, un resultado
Filtra la categoría Embalaje y suma a mano los valores visibles. Compara con tu fórmula en I2. Anota en tu bitácora si coinciden y,
si no, cuál de los dos caminos tenía el error.
:::

:::clave
Comprobar un resultado por un **camino distinto** (a mano, con un filtro) es una de las mejores defensas contra una fórmula que
parece correcta.
:::

### P16 · Pide la explicación, pero no la creas a ciegas
cubre: S2, A2, C2
fuentes: F-M2-07, F-M2-08, F-M2-12
bloque: Texto + escenario o conversación de ejemplo

Pedirle a la IA que **explique cada argumento** de la fórmula es una buena práctica: te ayuda a entenderla y a detectar si apunta a
lo que necesitas. Pero la explicación también es texto generado. Un modelo puede dar una respuesta errónea con seguridad, incluso con
un razonamiento que parece lógico y que justifica la respuesta incorrecta.

Por eso la explicación se compara con lo que sabes:

| La IA dice… | Tú compruebas… |
|---|---|
| «El índice 4 trae el precio» | Cuentas las columnas del intervalo: la 4 es Unidades, no Precio |
| «Esta fórmula suma todos los EPP» | Filtras EPP y sumas a mano |
| «No hace falta el último argumento» | Recuerdas que sin FALSO la coincidencia es aproximada |

:::ejemplo La explicación convincente
Andrés pidió una fórmula para el precio del código de K2. Gemini le dio =BUSCARV(K2;A2:E7;4;FALSO) y explicó que «el índice 4
corresponde al precio unitario». La explicación sonaba segura. Andrés probó con P05: el resultado fue 8, las unidades. Contó las
columnas, corrigió el índice a 5 y le avisó al asistente para que revisara su explicación.
:::

:::error «Si la IA lo explica con lógica, la fórmula está bien»
Una explicación ordenada no prueba que la fórmula sea correcta. Lo que lo prueba es que el resultado coincida con un cálculo que
hiciste tú. **Desconfianza metódica** es no aceptar un resultado hasta comprobarlo.
:::

### P17 · Rigor numérico y desconfianza metódica
cubre: A1, A2
fuentes: F-M2-20, F-M2-19, F-M2-07, F-M1-02
bloque: Texto + lista de verificación (checklist)

Los errores en planillas son comunes y no triviales: así lo resume la investigación sobre el tema. Cuando una planilla alimenta un
pedido, un pago o un informe a la jefatura, un error se convierte en un problema real. Por eso estas dos actitudes van juntas:

**Rigor numérico:** cuidar que cada número sea exacto y que puedas explicar de dónde sale.
**Desconfianza metódica:** no rechazar la ayuda de la IA, sino comprobar todo lo que propone antes de usarlo.

Tu lista antes de usar una fórmula generada con IA:
- [ ] Le di a la IA el programa, el separador, las columnas, las filas y la celda de destino.
- [ ] Entiendo qué hace cada argumento de la fórmula.
- [ ] Calculé a mano al menos un caso y coincide.
- [ ] Revisé una celda copiada: las referencias que no debían moverse tienen $.
- [ ] Probé un caso que no debería encontrarse o un dato en 0.
- [ ] Comprobé con un camino distinto, como un filtro.
- [ ] Revisé los avisos de error de la planilla.
- [ ] No pegué en el chat datos personales ni información confidencial: usé datos ficticios o solo los encabezados.

El último punto importa siempre: usar un asistente de IA implica compartir con el proveedor lo que le escribes.

:::comprueba
Gemini le entrega a Andrés una fórmula y le dice que «está verificada». ¿Qué hace Andrés?
- a) La usa en la planilla real, porque el asistente la verificó
- **b) La prueba con sus datos de práctica antes de usarla**
- c) Pide otra fórmula a un segundo asistente y usa la que se repita
Retroalimentación: El asistente puede afirmar algo con seguridad y estar equivocado. La verificación la hace quien usa la fórmula,
con datos de resultado conocido.
:::

### P18 · Cierre: resuelve un problema completo
cubre: C1, C2, H1
fuentes: F-M2-16, F-M2-15, F-M2-18
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema pediste fórmulas a la IA con contexto concreto, las pegaste en Hojas de cálculo de Google y las **comprobaste con datos
de práctica**. Trabajaste con referencias relativas y absolutas, SUMAR.SI, BUSCARV y filtros, y aprendiste a reconocer **errores de
referencia** (el rango que se mueve, el índice fuera del intervalo) y **errores de lógica** (la coincidencia aproximada, los datos
sucios).

:::actividad Dos preguntas de la jefatura
La jefatura de Andrés pregunta:
1. **¿Cuántas unidades hay en total de los productos que cuestan más de 5000 pesos?**
2. **¿Cuántas unidades quedan del producto P03?**

Para cada pregunta:
- pide la fórmula a Gemini con la plantilla de la pantalla 7;
- pégala en tu hoja de práctica;
- calcula a mano el resultado esperado antes de mirar el de la fórmula;
- compara y, si no coinciden, encuentra el error y corrígelo;
- anota en tu bitácora la fórmula final y cómo la comprobaste.

Resultados para comprobar: 1) productos con precio sobre 5000: casco (12), zapatos (8) y film (25): **45 unidades**. 2) P03:
**150 unidades**.
:::

:::clave
Una fórmula correcta no es la que entrega la IA: es la que tú comprobaste con datos de resultado conocido.
:::

### Ideas clave

1. Las funciones de IA dentro de Sheets y Excel son de pago; la práctica gratuita es pedir la fórmula en el chat, pegarla en Hojas de
   cálculo de Google y comprobarla.
2. Una fórmula empieza con =, usa celdas y rangos, y separa sus argumentos con punto y coma o con coma según la configuración de la
   planilla.
3. Las referencias relativas cambian al copiar y las absolutas ($) no: lo que no debe moverse se fija con $.
4. SUMAR.SI suma con un criterio (texto entre comillas, números con operadores); BUSCARV busca en la primera columna y trae el valor
   de la columna indicada, y necesita FALSO para una coincidencia exacta.
5. Para pedir una fórmula, se le dice a la IA el programa, el separador, qué hay en cada columna, desde qué fila, dónde va la fórmula
   y si los datos pueden venir sucios.
6. Se verifica con datos de prueba: cálculo a mano, casos extremos, cambio de un dato, un camino distinto como un filtro y revisión
   celda por celda.
7. Los errores más peligrosos no muestran aviso: un rango desplazado o un índice equivocado entregan un número con buen aspecto.

### Glosario

- **Celda**: casilla de una planilla, nombrada por su columna y su fila, como D2.
- **Rango**: grupo de celdas, como C2:C7. La ayuda de Google lo llama intervalo.
- **Fórmula**: instrucción que empieza con = y calcula un resultado a partir de valores o celdas.
- **Función**: operación con nombre dentro de una fórmula, como SUMAR.SI o BUSCARV.
- **Argumento**: cada dato que recibe una función entre sus paréntesis.
- **Separador de argumentos**: signo que separa los argumentos de una función; punto y coma o coma, según la configuración regional.
- **Referencia relativa**: referencia a una celda que cambia al copiar la fórmula, como D2.
- **Referencia absoluta**: referencia fija, marcada con $, que no cambia al copiar, como $D$2.
- **Referencia mixta**: referencia que fija solo la columna ($D2) o solo la fila (D$2).
- **SUMAR.SI**: función que suma los valores que cumplen un criterio.
- **BUSCARV**: función que busca un valor en la primera columna de un rango y devuelve el valor de otra columna de la misma fila.
- **Datos de práctica**: tabla pequeña de datos ficticios con resultados conocidos, usada para comprobar fórmulas.
- **Filtro (en una planilla)**: herramienta que oculta las filas que no cumplen una condición, sin borrarlas.
- **Datos sucios**: datos con diferencias invisibles, como espacios de más o números guardados como texto, que hacen fallar las
  fórmulas.

### Conexión con el proyecto

El **Hito 2 del proyecto aplicado: brief del proyecto + presentación de 6 láminas** se apoya en los temas 1 y 3, pero este tema te
sirve si tu problema tiene números. Si una de tus láminas muestra un dato (pedidos atrasados, consultas atendidas, gastos del mes),
calcúlalo en una planilla, compruébalo con el método de la pantalla 9 y anota de dónde sale. Así tu presentación solo tendrá cifras
que puedes defender. En el **caso M2-C2** analizarás cómo equipos de una empresa usan un asistente de IA en documentos, presentaciones
y planillas.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M2.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-1.md`
(consultadas el 24-10-2026).

- F-M2-07 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M2-08 · Microsoft Support (2026). Introducción a la escritura de indicaciones en Microsoft Copilot. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- F-M2-10 · Google AI for Developers (2026). Prompt design strategies. https://ai.google.dev/gemini-api/docs/prompting-strategies
- F-M2-12 · Microsoft Learn (2026). Técnicas de ingeniería de indicaciones. https://learn.microsoft.com/es-es/azure/ai-foundry/openai/concepts/prompt-engineering
- F-M2-15 · Google, Ayuda de Editores de Documentos (s. f.). BUSCARV. https://support.google.com/docs/answer/3093318?hl=es
- F-M2-16 · Google, Ayuda de Editores de Documentos (s. f.). SUMAR.SI. https://support.google.com/docs/answer/3093583?hl=es
- F-M2-17 · Google, Ayuda de Editores de Documentos (s. f.). Ordenar y filtrar tus datos. https://support.google.com/docs/answer/3540681?hl=es
- F-M2-18 · Microsoft Support (s. f.). Cambiar entre referencias relativas, absolutas y mixtas. https://support.microsoft.com/es-es/office/cambiar-entre-referencias-relativas-absolutas-y-mixtas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- F-M2-19 · Microsoft Support (s. f.). Detectar errores en las fórmulas. https://support.microsoft.com/es-es/office/detectar-errores-en-las-fórmulas-3a8acca5-1d61-4702-80e0-99a36a2822c1
- F-M2-20 · Panko, R. R. (2000). Spreadsheet Errors: What We Know. What We Think We Can Do. https://arxiv.org/abs/0802.3457
- F-M1-02 · UNESCO; Miao y Holmes (2024). Guía para el uso de IA generativa en educación e investigación. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- F-H-20 · Microsoft (s. f.). Compara todos los planes y precios de Microsoft 365 (Chile). https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- F-H-49 · Google (s. f.). Planes Google AI (Google One, Chile). https://one.google.com/intl/es-419_cl/about/google-ai-plans/


---

# Módulo 3 · Investigación y análisis de información

**Competencia:** Acelerar la investigación y el análisis de información con herramientas de IA, validando fuentes y resguardando la privacidad, para apoyar decisiones laborales.


## M3-AE1 · Herramientas de IA para investigar

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-01, F-M3-02
bloque: Texto + lista con viñetas

En los módulos anteriores usaste la IA para redactar, resumir y presentar. En este módulo la usarás para **investigar**: reunir
información sobre un problema real de tu sector, contrastarla, ordenarla y presentarla sin poner en riesgo datos de nadie. Este
primer tema trata del inicio de ese camino: hacer buenas preguntas y levantar información con herramientas que muestran de dónde
la sacan.

**Aprendizaje esperado:** Utilizar herramientas de IA para investigar (buscadores con citas, asistentes sobre fuentes propias) y
levantar información sobre un problema de su sector.

Al terminar, deberías poder:
- formular preguntas de investigación específicas a partir de un tema general;
- usar al menos dos herramientas distintas y registrar cada fuente con su cita.

Siguen contigo **Camila**, que busca trabajo como asistente administrativa; **Andrés**, encargado de bodega en una distribuidora; y
**Rosa**, recepcionista de un centro médico. Cada uno investigará un problema de su trabajo, igual que harás tú con el problema que
elegiste en el Hito 1.

:::clave
Vas a trabajar con dos tipos de herramienta: un **buscador con citas**, que consulta internet y enlaza cada dato a su página de
origen, y un **asistente sobre tus fuentes**, que responde solo a partir de los documentos que tú le entregas. Las dos tienen plan
gratuito y se pueden usar desde el celular.
:::

### P02 · Tres tipos de herramientas para investigar
cubre: S1
fuentes: F-M3-01, F-M3-02, F-H-07, F-H-16, F-H-12
bloque: Texto + tabla comparativa

Cuando le preguntas algo a un asistente sin más, puede responder con lo que aprendió en su entrenamiento, que tiene fecha de corte y
no muestra de dónde viene. Para investigar conviene usar herramientas que **buscan o leen fuentes y te las muestran**. Hay tres tipos:

| Tipo | Qué hace | Ejemplo gratuito |
|---|---|---|
| **Buscador con citas** | Busca en internet en el momento, resume lo que encuentra y pone citas numeradas que enlazan a cada página | Perplexity |
| **Asistente sobre fuentes propias** | Responde a partir de los documentos que tú subes, con citas que apuntan a esos documentos | Gemini Notebook |
| **Asistente general con búsqueda** | Conversa como siempre, pero puede buscar en la web y mostrar las fuentes que usó | Gemini, ChatGPT |

Algunos asistentes generales tienen además una función de **investigación a fondo** (en Gemini se llama Deep Research), que revisa
muchas páginas y entrega un informe más largo. La verás más adelante en este tema.

:::ejemplo Andrés elige por dónde partir
Andrés quiere saber cómo evitan otras bodegas quedarse sin cajas de embalaje. Para conocer qué se ha escrito sobre el tema, usa un
buscador con citas. Cuando ya tenga algunos documentos que le sirvan, los subirá a un asistente sobre fuentes propias para hacerles
preguntas.
:::

:::comprueba
Rosa tiene el reglamento interno del centro médico en PDF y quiere preguntarle qué dice sobre la confirmación de horas. ¿Qué tipo de
herramienta le sirve más?
- a) Un buscador con citas
- **b) Un asistente sobre fuentes propias**
- c) Un generador de imágenes
Retroalimentación: El reglamento es un documento que ella tiene. Un asistente sobre fuentes propias responde a partir de ese archivo
y cita la parte donde lo encontró.
:::

### P03 · Del tema general a la pregunta de investigación
cubre: H1, C1
fuentes: F-M3-03
bloque: Proceso (process block) en 4 pasos

Una mala pregunta da resultados vagos, aunque la herramienta sea muy buena. Las bibliotecas de Duoc UC proponen un camino de cuatro
pasos para pasar de un tema amplio a una búsqueda precisa:

1. **Identifica el tema general.** Por ejemplo: «inasistencia de pacientes».
2. **Acótalo con criterios.** Elige el lugar, el período, el tipo de organización o el uso que te interesa: «inasistencia a horas
   médicas agendadas en centros médicos pequeños de Chile, en los últimos años».
3. **Reconoce los conceptos clave.** Aquí son tres: inasistencia, horas médicas agendadas, centros médicos pequeños.
4. **Prepara sinónimos.** Si la búsqueda no resulta, la repites con otras palabras: «ausentismo», «pacientes que no se presentan»,
   «citas perdidas».

Con eso puedes escribir una **pregunta de investigación**: una pregunta que se puede responder buscando información. Por ejemplo:
«¿Qué medidas usan los centros médicos pequeños para reducir las horas agendadas a las que el paciente no se presenta?».

:::ejemplo La pregunta de Rosa
Rosa partió preguntando «¿por qué faltan los pacientes?». Recibió una lista larga y general. Al acotar el tema y usar los conceptos
clave, su pregunta quedó centrada en lo que ella puede cambiar desde la recepción: los recordatorios y la confirmación de horas.
:::

:::error «Mientras más amplia la pregunta, más información útil»
Una pregunta amplia trae más resultados, pero menos útiles. Acotar no es perder información: es quedarte con la que sirve para tu
problema.
:::

### P04 · Preguntas específicas: antes y después
cubre: C1, H1
fuentes: F-M3-03
bloque: Texto + comparación antes/después

Una **pregunta específica** nombra el tema acotado y sus conceptos clave. Se reconoce porque, al leerla, sabes qué tipo de respuesta
esperas y dónde podrías buscarla.

| Antes (tema general) | Después (pregunta específica) |
|---|---|
| ¿Cómo mejorar una bodega? | ¿Qué prácticas usan las bodegas pequeñas para evitar quedarse sin insumos de embalaje? |
| ¿Qué piden las empresas? | ¿Qué conocimientos digitales piden los avisos de asistente administrativa publicados este año en mi región? |
| ¿Qué hacer con los reclamos? | ¿Qué pasos recomiendan las guías de atención al cliente para responder un reclamo por un despacho atrasado? |

Fíjate en lo que cambió: aparece **quién** (bodegas pequeñas, avisos de un cargo), **qué** (insumos de embalaje, conocimientos
digitales) y, cuando importa, **dónde** y **cuándo**.

Un buen tema suele dar para dos o tres preguntas. Andrés, por ejemplo, agrega una segunda: «¿Cómo se calcula cuántas cajas tener en
reserva?». Cada pregunta la vas a buscar por separado.

:::actividad Acota tu tema
Escribe el tema general de tu proyecto en una línea. Luego:
1. Agrega al menos dos criterios para acotarlo (lugar, período, tipo de organización, uso).
2. Subraya los conceptos clave.
3. Anota un sinónimo para cada concepto.
4. Escribe dos preguntas de investigación específicas.
:::

:::comprueba
¿Cuál es la pregunta de investigación más específica?
- a) ¿Qué es la atención al cliente?
- b) ¿Cómo atender mejor?
- **c) ¿Qué pasos recomiendan las guías de atención al cliente para responder un reclamo por un despacho atrasado?**
Retroalimentación: La opción c nombra el tema acotado (reclamos por despachos atrasados) y deja claro qué tipo de respuesta se espera.
:::

### P05 · Antes de buscar: define tu necesidad de información
cubre: A1, H1
fuentes: F-M3-03
bloque: Texto + lista de verificación (checklist)

Una persona autónoma en la búsqueda no abre la herramienta y pregunta lo primero que se le ocurre. Antes, decide **qué necesita**.
La guía de Duoc UC sugiere definir seis cosas antes de empezar:

- [ ] **Cuánta información** necesito: ¿un dato, unas pocas fuentes o un panorama completo?
- [ ] **En qué idioma**: ¿solo en español o también en inglés?
- [ ] **Qué tipo de fuente**: ¿normas, guías de organismos, estudios, noticias?
- [ ] **De qué período**: ¿solo lo reciente o también lo de años anteriores?
- [ ] **Cuánto tiempo** tengo para buscar.
- [ ] **Qué profundidad** necesito: ¿una idea general o un análisis detallado?

Estas decisiones también te sirven para escribir el prompt. Puedes agregarlas al final de tu pregunta: «Busca fuentes en español,
de organismos públicos o instituciones educativas, publicadas desde 2023».

:::ejemplo Camila define su necesidad
Camila quiere saber qué conocimientos digitales piden los avisos de asistente administrativa: así sabrá si su proyecto, registrar
y clasificar documentos en una planilla, responde a lo que buscan las empresas. Decide que le basta un panorama con
cinco o seis fuentes, en español, de este año, y que tiene una hora para buscar. Con eso sabe cuándo detenerse y no se pierde
abriendo enlaces sin fin.
:::

:::clave
Definir tu necesidad antes de buscar te ahorra tiempo y te ayuda a reconocer cuándo ya tienes suficiente información.
:::

### P06 · Cómo funciona un buscador con citas
cubre: S2
fuentes: F-M3-01, F-H-32, F-M3-13
bloque: Texto + imagen de una respuesta con citas numeradas

Un **buscador con citas** combina un buscador con un asistente de IA. Según el centro de ayuda de Perplexity, la herramienta:
1. **busca en internet en tiempo real** a partir de tu pregunta;
2. **resume** lo que encontró en una respuesta breve;
3. pone **citas numeradas** que enlazan a las páginas de origen, para que verifiques o profundices.

También acepta **preguntas de seguimiento** que conservan el contexto. Puedes preguntar «¿y en empresas pequeñas?» sin repetir todo.

La diferencia con un buscador común es que no te entrega una lista de páginas para leer: te entrega una respuesta ya redactada, con
los números de las fuentes al lado de cada afirmación. Eso ahorra tiempo, pero cambia tu trabajo: ahora tienes que comprobar que cada
número lleve a una página que de verdad diga eso.

:::error «Si la respuesta tiene citas, es correcta»
NIST advierte que la IA generativa puede producir contenido falso con seguridad, e incluso citas inventadas que parecen respaldar la
respuesta. Una cita es una pista para ir a la fuente. La verificación la haces tú, al abrirla.
:::

:::comprueba
¿Qué hace un buscador con citas que no hace un asistente sin búsqueda?
- a) Responde siempre sin errores
- **b) Busca en internet al momento y enlaza cada afirmación a su página de origen**
- c) Lee los documentos guardados en tu celular
Retroalimentación: El buscador con citas consulta la web en el momento y muestra de dónde sacó cada dato. Eso permite verificar,
pero no garantiza que la respuesta sea correcta.
:::

### P07 · Perplexity: plan gratuito y uso en el celular
cubre: S2, S1
fuentes: F-H-29, F-H-33, F-H-31, F-H-30
bloque: Texto + tabla

En este curso usarás **Perplexity** como buscador con citas. Lo que necesitas saber antes de empezar:

| Aspecto | Lo que dice el proveedor |
|---|---|
| Plan gratuito | Se llama Standard. Incluye búsquedas básicas prácticamente ilimitadas, muy pocas búsquedas avanzadas («Pro Search»), subida de archivos limitada e historial de búsquedas |
| Lo que no incluye | Modelos avanzados ni creación de imágenes; eso está en el plan Pro, de pago |
| Celular | Tiene aplicación para Android y para iPhone, además de la versión web |
| Edad | Desde los 13 años; las personas menores de edad necesitan que su madre, padre o tutor acepte los términos |
| Privacidad | En el plan gratuito, el uso de tus datos para entrenar viene activado. Se puede apagar en la configuración de la cuenta |

Para este tema, la búsqueda básica alcanza. No necesitas pagar ni usar las búsquedas avanzadas.

:::clave
Como el uso de tus datos para entrenar viene activado, **no escribas en el buscador datos personales ni información interna de una
empresa**. Escribe preguntas generales sobre tu tema. En el tema 4 de este módulo verás cómo apagar ese ajuste.
:::

:::ejemplo Andrés en el celular
Andrés instala la aplicación en su teléfono y, en la hora de colación, escribe su pregunta sobre insumos de embalaje. No menciona el
nombre de la distribuidora ni de sus clientes: pregunta por «bodegas pequeñas» en general.
:::

### P08 · Práctica guiada 1: tu pregunta en el buscador con citas
cubre: H1, S2, C2
fuentes: F-M3-01, F-H-32, F-M3-03
bloque: Proceso paso a paso + actividad

Ahora levantas información sobre tu propio tema.

1. **Abre Perplexity** en el celular o en el computador.
2. **Escribe tu primera pregunta de investigación** (P04) y agrega lo que definiste en P05: idioma, tipo de fuente y período.
3. **Lee la respuesta** y fíjate en los números de las citas.
4. **Abre cada cita.** Revisa que el enlace funcione y que la página diga lo que la respuesta afirma.
5. **Haz una pregunta de seguimiento** para profundizar: «¿Qué fuentes de Chile tratan este tema?» o «¿Qué dicen las guías de
   organismos públicos?».
6. **Si los resultados no sirven**, repite la búsqueda con los sinónimos que preparaste.
7. **Anota** cada fuente útil en tu registro (lo armarás en P16): título, quién la publica, fecha y enlace.

:::actividad Tus primeras fuentes
Al terminar, deberías tener al menos **tres fuentes** que abriste y leíste. Para cada una, escribe en tu bitácora una línea con lo
que aporta a tu pregunta. Si una cita no abría o no decía lo que la respuesta afirmaba, anótalo también: es información valiosa
sobre la herramienta.
:::

:::error Copiar la respuesta del buscador como si fuera la fuente
La respuesta redactada es un resumen hecho por la IA. La fuente es la página a la que lleva la cita. Lo que anotas y citas es la
página de origen, no el resumen.
:::

### P09 · Búsqueda con fuentes en Gemini y ChatGPT
cubre: S2, S1
fuentes: F-H-16, F-H-07, F-H-19, F-H-12
bloque: Texto + pestañas (tabs) por herramienta

Los asistentes generales que ya conoces también pueden buscar en la web. La diferencia con un buscador con citas es que **no siempre
buscan**: a veces responden solo con lo que aprendieron. Por eso conviene revisar si la respuesta trae fuentes.

- **Gemini.** A veces muestra un botón «Fuentes» con enlaces a sitios web, a archivos que subiste o a documentos vinculados. Funciona
  en computador, Android e iPhone.
- **ChatGPT.** La búsqueda web está en el plan gratuito, incluso sin iniciar sesión, en la web y en las aplicaciones. Las respuestas
  pueden traer citas que abren la fuente y un panel con las fuentes usadas. Cada búsqueda descuenta del límite del plan.
- **Copilot.** Microsoft indica que, cuando entrega información, está diseñado para incluir citas que permitan comprobar de dónde
  viene.

En Gemini, el uso gratuito se mide por la computación consumida y se renueva cada cinco horas, con un tope semanal. Si cambias de
tema, la ayuda de Google recomienda abrir una conversación nueva para ahorrar uso.

:::ejemplo La misma pregunta en dos herramientas
Camila hace su pregunta sobre avisos de asistente administrativa en Perplexity y en Gemini. Las dos respuestas coinciden en dos
conocimientos digitales, pero Gemini nombra uno más. Camila busca ese tercero en las fuentes: si no aparece en ninguna, no lo anota.
:::

:::clave
Si la respuesta de un asistente general no muestra fuentes, pídele que busque en la web y que indique las páginas que usó. Una
respuesta sin fuentes no te sirve para investigar.
:::

### P10 · Trabajar sobre tus documentos: Gemini Notebook
cubre: S3
fuentes: F-M3-02, F-H-45
bloque: Texto + imagen de un cuaderno con fuentes

El segundo tipo de herramienta trabaja con **fuentes que tú eliges**. En este curso usarás **Gemini Notebook**, la herramienta de
Google que antes se llamaba **NotebookLM**. Si no la encuentras con el nombre nuevo, búscala con el anterior.

Funciona con **cuadernos**. En cada cuaderno subes tus fuentes y luego conversas con ellas. Según la ayuda de Google:
- acepta **PDF, sitios web, videos de YouTube, audio y documentos de Google**;
- **responde a partir de esas fuentes**, no del conocimiento general;
- muestra **citas en línea** que llevan a la parte exacta de la fuente;
- si tus fuentes no tienen la respuesta, **puede no responder**.

Esto cambia mucho el riesgo. Un asistente general puede rellenar con datos de cualquier parte. Un asistente sobre fuentes propias
se limita a lo que le entregaste y te muestra dónde lo leyó. Aun así, Google advierte que sus respuestas **pueden tener errores** y
que en temas médicos, legales o financieros conviene consultar a un profesional.

:::ejemplo Rosa pregunta a sus documentos
Rosa sube a un cuaderno dos guías públicas sobre atención de pacientes que encontró con el buscador. Pregunta: «¿Qué recomiendan
estas guías para confirmar horas?». La respuesta trae tres citas. Al tocarlas, ve el párrafo de cada guía de donde salió la idea.
:::

:::error «Si trabaja sobre mis documentos, no se equivoca»
Limitar la herramienta a tus fuentes reduce el riesgo, pero no lo elimina: puede resumir mal o mezclar ideas de dos documentos. Toca
las citas y compara con el texto.
:::

### P11 · Gemini Notebook: plan gratuito, aplicación y límites
cubre: S3, S1
fuentes: F-H-44, F-H-45, F-H-46, F-H-13
bloque: Texto + tabla

Gemini Notebook tiene un plan gratuito, llamado Standard, que se usa con una cuenta de Google personal. Esto es lo que incluye:

| Límite del plan gratuito | Cantidad |
|---|---|
| Cuadernos por persona | 100 |
| Fuentes por cuaderno | 50 |
| Conversaciones al día | 50 |
| Informes al día | 10 |
| Resúmenes de audio y de video | 3 de cada uno al día |
| Deep Research | 10 veces al mes |

Google aclara que estos límites pueden cambiar. Para tu proyecto, un cuaderno con 5 a 10 fuentes es más que suficiente.

**En el celular** hay aplicación para Android 10 o superior y para iPhone y iPad. Desde ella puedes preguntar a tus fuentes, escuchar
los resúmenes de audio sin conexión y compartir hacia la aplicación un sitio, un PDF o un video. El lanzamiento de la aplicación es
gradual, aunque Chile está en la lista de países. Si todavía no te aparece, usa la versión web en el navegador del teléfono.

**Requisitos:** tener la edad de consentimiento de tu país y verificar la edad en tu cuenta de Google.

:::clave
Si solo quieres preguntar sobre uno o dos archivos, también puedes subirlos a **Gemini**: acepta hasta 10 archivos por petición, de
hasta 100 MB cada uno, con la sesión iniciada. El cuaderno conviene cuando vas a volver varias veces a las mismas fuentes.
:::

### P12 · Qué documentos subir y cuáles no
cubre: S3, A1
fuentes: F-M3-02, F-H-45
bloque: Texto + clasificación (sorting activity)

Que una herramienta trabaje con tus documentos no significa que cualquier documento deba ir ahí. Antes de subir algo, pregúntate de
dónde viene y qué contiene.

**Buenas fuentes para tu cuaderno:**
- páginas de organismos públicos y de instituciones educativas;
- guías, normas e informes publicados;
- avisos de empleo y documentos públicos de tu sector;
- tus propias notas, sin datos de otras personas.

**No subas:**
- documentos con nombres, RUT, teléfonos o datos de salud de personas;
- planillas de clientes, remuneraciones o ventas de una empresa;
- documentos internos que tu empleador no ha autorizado compartir.

Sobre privacidad, Google indica que, con una cuenta personal, tus datos de Gemini Notebook **no se usan para entrenar** sus modelos,
salvo que envíes comentarios: en ese caso la interacción puede ser revisada. Es una buena política, pero no cambia la regla: lo
confidencial no se sube a una herramienta que tu empleador no autorizó. Lo verás a fondo en el tema 4.

:::actividad ¿Lo subo o no?
Clasifica cada documento:
1. Un PDF público de un organismo sobre seguridad en bodegas. → Lo subo
2. La planilla de pacientes del día con sus teléfonos. → No lo subo
3. Un aviso de empleo copiado de un portal. → Lo subo
4. El informe de ventas mensual de la distribuidora. → No lo subo
5. Tus notas de lectura, sin datos de nadie. → Lo subo
:::

### P13 · Práctica guiada 2: arma tu cuaderno
cubre: H1, S3, C2
fuentes: F-M3-02, F-H-44, F-H-46
bloque: Proceso paso a paso + actividad

Ahora usas la segunda herramienta con las fuentes que encontraste en la práctica 1.

1. **Abre Gemini Notebook** (web o aplicación) con tu cuenta de Google.
2. **Crea un cuaderno** con el nombre de tu proyecto.
3. **Agrega de tres a cinco fuentes** públicas: los enlaces que abriste en Perplexity, un PDF o un video. Revisa que ninguna tenga
   datos personales.
4. **Haz tu segunda pregunta de investigación** al cuaderno.
5. **Toca cada cita** de la respuesta y lee el párrafo de origen. ¿Dice lo mismo?
6. **Pregunta qué falta:** «¿Qué parte de mi pregunta no responden estas fuentes?». Si el cuaderno dice que no tiene la información,
   eso te indica qué buscar después.
7. **Anota** en tu registro cada dato útil con la fuente y la parte donde aparece.

:::ejemplo Andrés descubre un vacío
Andrés pregunta a su cuaderno cómo calcular la reserva de cajas. La respuesta explica la idea general con citas, pero aclara que sus
fuentes no traen un ejemplo de cálculo. Andrés vuelve al buscador con una pregunta nueva: «ejemplo de cálculo de stock de seguridad
para una bodega pequeña».
:::

:::comprueba
El cuaderno responde: «Las fuentes no incluyen información sobre este punto». ¿Qué conviene hacer?
- a) Pedirle a un asistente general que lo invente
- **b) Buscar una fuente nueva sobre ese punto y agregarla al cuaderno**
- c) Dar por cerrada la investigación
Retroalimentación: Que el cuaderno no responda es una ventaja: te muestra un vacío. Lo llenas con una fuente nueva, no con una
respuesta sin respaldo.
:::

### P14 · Investigación a fondo: cuándo vale la pena
cubre: S1
fuentes: F-H-12, F-H-02, F-H-44, F-H-21
bloque: Texto + recuadro destacado

Algunas herramientas ofrecen un modo de **investigación a fondo**. En vez de una respuesta breve, revisan muchas páginas y entregan
un informe largo con fuentes. Lo que dicen los proveedores sobre sus planes gratuitos:

- **Gemini:** Deep Research está disponible sin plan pagado, pero gasta más cuota que una conversación normal.
- **Gemini Notebook:** Deep Research, 10 veces al mes.
- **ChatGPT:** la «investigación a fondo» está en el plan gratuito, con uso limitado.
- **Claude:** su función de investigación no está en el plan gratuito; es de pago.

¿Cuándo conviene? Cuando necesitas un **panorama amplio** de un tema que no conoces, al comienzo de la investigación. No conviene
para responder una pregunta puntual: una búsqueda con citas es más rápida y gasta menos.

Un informe largo tiene más afirmaciones y más fuentes, y por eso **más trabajo de revisión**. No lo pegues en tu proyecto: úsalo como
mapa para saber qué fuentes abrir y qué preguntas hacer después.

:::ejemplo Camila usa Deep Research una vez
Camila no sabe por dónde partir con el tema de los conocimientos digitales en cargos administrativos. Usa Deep Research de Gemini una
sola vez para tener un panorama. Del informe se queda con cuatro fuentes que luego abre y revisa una por una.
:::

:::error «El informe de investigación a fondo ya viene verificado»
Que revise muchas páginas no significa que las haya leído bien. Cada dato del informe se trata igual que el de cualquier respuesta:
se abre la fuente y se comprueba.
:::

### P15 · Elegir la herramienta según la necesidad
cubre: S1, H1
fuentes: F-M3-01, F-M3-02, F-H-12, F-H-07
bloque: Ordenar o clasificar (sorting activity)

Ya conoces las herramientas. La pregunta práctica es cuál usar en cada momento. Este cuadro resume el criterio:

| Si necesitas… | Usa… |
|---|---|
| Saber qué se ha publicado sobre un tema y tener enlaces | Un buscador con citas (Perplexity) o la búsqueda de Gemini o ChatGPT |
| Preguntar sobre documentos que ya reuniste | Un asistente sobre fuentes propias (Gemini Notebook) |
| Un panorama amplio de un tema desconocido | La investigación a fondo, una vez, como mapa |
| Uno o dos archivos puntuales | Subirlos a Gemini en una conversación |
| Redactar, ordenar o resumir lo que ya verificaste | El asistente general, sin búsqueda |

Para tu proyecto, el criterio de este tema es usar **al menos dos herramientas distintas**: así no dependes de una sola forma de
buscar y puedes comparar lo que entrega cada una.

:::actividad ¿Qué herramienta usarías?
Elige la herramienta para cada caso:
1. Rosa quiere saber qué guías públicas existen sobre recordatorios de horas. → Buscador con citas
2. Andrés tiene tres manuales en PDF y quiere saber qué dicen sobre el embalaje. → Gemini Notebook
3. Camila no conoce el tema y quiere un primer mapa. → Investigación a fondo
4. Rosa quiere ordenar en una tabla los datos que ya verificó. → Asistente general
:::

### P16 · Registrar las fuentes con su cita
cubre: C2
fuentes: F-M3-01, F-M3-12, F-M3-02
bloque: Texto + tabla descargable

Investigar sin registrar es perder trabajo: dentro de una semana no sabrás de dónde salió cada dato. Por eso llevas un **registro de
fuentes** desde el primer día. Lo central es guardar el **enlace a la fuente original** que te entrega la herramienta, no solo el
nombre de la herramienta.

| Pregunta | Herramienta | Fecha de búsqueda | Fuente (título y quién la publica) | Fecha de la fuente | Enlace | Qué aporta |
|---|---|---|---|---|---|---|
| 1. | Perplexity | | | | | |
| 2. | Gemini Notebook | | | | | |

Si además vas a usar un **texto generado por la IA** (por ejemplo, un resumen que te sirvió de base), Bibliotecas UC recomienda
anotar la herramienta, su versión, la fecha de la consulta y el prompt, y guardar la respuesta. En el tema 3 aprenderás a citarlo.

:::error Anotar «Fuente: Perplexity»
Perplexity, Gemini o ChatGPT no son la fuente de un dato: son la herramienta con que lo encontraste. La fuente es la página o el
documento al que lleva la cita.
:::

:::comprueba
¿Cuál es el registro más completo de una fuente?
- a) «Lo dijo Gemini»
- b) «Un sitio sobre bodegas»
- **c) Título de la página, organismo que la publica, fecha, enlace y lo que aporta**
Retroalimentación: Un buen registro permite que tú, o cualquier persona, vuelva a la fuente original y compruebe el dato.
:::

### P17 · Curiosidad y autonomía en la búsqueda
cubre: A1
fuentes: F-M3-03, F-M3-04
bloque: Texto + escenario

La herramienta hace la búsqueda, pero el rumbo lo pones tú. La **autonomía** se nota en decisiones como estas:
- defines antes **qué necesitas** (P05) y sabes cuándo tienes suficiente;
- cuando un resultado no sirve, **reformulas** con sinónimos en vez de rendirte;
- haces **preguntas de seguimiento** para ir más allá de la primera respuesta;
- usas **más de una herramienta** y comparas.

La **curiosidad** se nota en preguntarte qué no sabes todavía. El método SIFT, que viste en el módulo 1, empieza con un paso que sirve
aquí: **detenerte** antes de aceptar una fuente y preguntarte qué sabes de ella. En el próximo tema harás ese análisis a fondo.

:::ejemplo Andrés no se queda con la primera respuesta
La primera respuesta que recibió Andrés hablaba de grandes centros de distribución. En vez de descartarla o aceptarla tal cual,
preguntó: «¿Qué cambia en una bodega pequeña?». Luego buscó con otro término, «insumos de empaque», y encontró una guía más
cercana a su realidad.
:::

:::clave
Una buena investigación no es la que encuentra más fuentes, sino la que responde tu pregunta con fuentes que puedes revisar.
:::

### P18 · Cierre: tu levantamiento de información
cubre: H1, C1, C2
fuentes: F-M3-01, F-M3-02, F-M3-03
bloque: Texto + actividad de cierre (entrega)

En este tema viste tres tipos de herramientas para investigar: el **buscador con citas**, el **asistente sobre fuentes propias** y el
**asistente general con búsqueda**, con su modo de investigación a fondo. Aprendiste a pasar de un **tema general** a una **pregunta
específica**, a definir tu necesidad antes de buscar y a **registrar cada fuente** con su enlace original.

:::actividad Tu levantamiento de información
Reúne en tu bitácora:
1. **Dos preguntas de investigación** específicas sobre el problema de tu proyecto.
2. Las **dos herramientas** que usaste, por ejemplo Perplexity y Gemini Notebook.
3. Tu **registro de fuentes** con al menos **cinco fuentes** que abriste y leíste, cada una con título, quién la publica, fecha,
   enlace y lo que aporta.
4. Una línea sobre lo que **todavía no pudiste responder**.

Este levantamiento es la materia prima del próximo tema, donde evaluarás y contrastarás estas fuentes.
:::

:::clave
Guarda tu registro: lo vas a usar en los cuatro temas de este módulo y en el Hito 3 del proyecto.
:::

### Ideas clave

1. Para investigar con IA conviene usar herramientas que muestran sus fuentes: buscadores con citas, asistentes sobre fuentes propias
   y asistentes generales con búsqueda.
2. Una buena investigación parte de una pregunta específica: un tema acotado con criterios, conceptos clave y sinónimos para repetir
   la búsqueda.
3. Antes de buscar, define cuánta información necesitas, de qué tipo, de qué período y con qué profundidad.
4. Un buscador con citas consulta la web en el momento y enlaza cada afirmación, pero una cita no es una prueba: hay que abrirla.
5. Un asistente sobre fuentes propias, como Gemini Notebook, responde solo con tus documentos y cita dónde lo leyó; si no responde,
   te muestra un vacío.
6. En este curso se usan al menos dos herramientas distintas, y cada fuente se registra con su enlace original, no con el nombre de
   la herramienta.

### Glosario

- **Pregunta de investigación**: pregunta específica sobre un tema acotado que se puede responder buscando información.
- **Tema acotado**: tema general al que se le agregaron criterios, como lugar, período o tipo de organización.
- **Concepto clave**: palabra o expresión central de una pregunta, que se usa para buscar.
- **Necesidad de información**: lo que una persona define antes de buscar: cuánta información, de qué tipo, de qué período y con qué
  profundidad.
- **Buscador con citas**: herramienta que busca en internet al momento, resume lo encontrado y enlaza cada afirmación a su página de
  origen.
- **Cita (en una respuesta de IA)**: número o enlace que indica de qué fuente salió una afirmación.
- **Pregunta de seguimiento**: pregunta que continúa una búsqueda anterior y conserva su contexto.
- **Asistente sobre fuentes propias**: herramienta que responde a partir de los documentos que la persona le entrega.
- **Cuaderno**: espacio de Gemini Notebook donde se reúnen las fuentes de un tema para hacerles preguntas.
- **Investigación a fondo**: modo de algunos asistentes que revisa muchas páginas y entrega un informe largo con fuentes.
- **Registro de fuentes**: tabla donde se anota cada fuente con título, autor, fecha, enlace y lo que aporta.
- **Fuente de un dato**: página o documento de donde sale una información, distinto de la herramienta con que se encontró.

### Conexión con el proyecto

Tus preguntas de investigación (P04) y tu levantamiento de información con dos herramientas (P18) son el primer paso del **Hito 3 del
proyecto aplicado: investigación validada con fuentes (informe breve)**. En el Hito 3 investigarás el problema que elegiste en el
Hito 1 con fuentes contrastadas y citadas. En los temas 2 y 3 de este módulo contrastarás estas fuentes y las presentarás en un
informe breve.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M3.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M3-01 · Perplexity (s. f.). How does Perplexity work? https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- F-M3-02 · Google (s. f.). Más información sobre Gemini Notebook (Ayuda de NotebookLM). https://support.google.com/notebooklm/answer/16164461?hl=es-419
- F-M3-03 · Bibliotecas Duoc UC (2023). ¿Cómo formular una necesidad de información? https://bibliotecas.duoc.cl/busqueda-de-informacion/formular-necesidad-de-informacion
- F-M3-04 · Caulfield, M. (2019). SIFT (The Four Moves). https://hapgood.us/2019/06/19/sift-the-four-moves/
- F-M3-12 · Bibliotecas UC (2026). IA: Citar y referenciar. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- F-M3-13 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-H-02 · OpenAI (s. f.). Planes y precios | ChatGPT. https://chatgpt.com/es-419/pricing/
- F-H-07 · OpenAI (2026). Searching the web with ChatGPT. https://help.openai.com/en/articles/9237897-chatgpt-search
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-13 · Google (s. f.). Subir y analizar archivos en las aplicaciones de Gemini. https://support.google.com/gemini/answer/14903178?hl=es
- F-H-16 · Google (s. f.). Ver fuentes relacionadas de las aplicaciones de Gemini. https://support.google.com/gemini/answer/14143489?hl=es
- F-H-19 · Microsoft (2026). Copilot para gente joven. https://support.microsoft.com/es-es/privacy/microsoft-copilot/young-people
- F-H-21 · Anthropic (s. f.). Planes y precios | Claude. https://claude.com/es/pricing
- F-H-29 · Perplexity (s. f.). Which Perplexity Subscription Plan is right for you? https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
- F-H-30 · Perplexity (s. f.). Data Collection at Perplexity. https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
- F-H-31 · Perplexity (s. f.). Condiciones del servicio. https://www.perplexity.ai/es/hub/legal/terms-of-service
- F-H-32 · Perplexity (2026). What is Perplexity? https://www.perplexity.ai/help-center/en/articles/10352155-what-is-perplexity
- F-H-33 · Perplexity (s. f.). Mobile Apps. https://www.perplexity.ai/help-center/en/collections/18799299-mobile-apps
- F-H-44 · Google (s. f.). Cambiar a un plan superior de Gemini Notebook. https://support.google.com/notebooklm/answer/16213268?hl=es
- F-H-45 · Google (s. f.). Información sobre Gemini Notebook. https://support.google.com/gemininotebook/answer/16164461?hl=es
- F-H-46 · Google (s. f.). Empezar a usar la aplicación móvil Gemini Notebook. https://support.google.com/gemininotebook/answer/16296687?hl=es

Recomendaciones del curso, sin fuente: el mínimo de **dos herramientas** (C2) y de **cinco fuentes** en el levantamiento (P18); el
consejo de pedir al asistente general que busque y muestre sus páginas cuando no trae fuentes (P09); el cuadro de P15 para elegir
herramienta; la tabla de registro de P16; la recomendación de usar la investigación a fondo como «mapa» y una sola vez (P14), y la
lista de documentos que conviene o no subir (P12), que adelanta el tema 4. Los casos de Camila, Andrés y Rosa son ficticios.

Pendiente de probar a mano: si Perplexity se puede usar sin cuenta en Chile y dónde está el ajuste «AI data retention» en la
aplicación; si la aplicación Gemini Notebook ya aparece en las tiendas chilenas con ese nombre.


## M3-AE2 · Recopilar, validar y sintetizar

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-06, F-M3-07, F-M3-08
bloque: Texto + lista con viñetas

En el tema anterior levantaste información con dos herramientas y armaste tu registro de fuentes. Ahora tienes varias fuentes que
no siempre dicen lo mismo. Este tema te enseña a **analizarlas en conjunto**: evaluar cuánto confiar en cada una, compararlas entre
sí, dejar fuera lo que no tiene respaldo y unir lo que sí lo tiene en una síntesis propia.

**Aprendizaje esperado:** Contrastar y sintetizar información de múltiples fuentes aplicando criterios de confiabilidad.

Al terminar, deberías poder:
- aplicar criterios de confiabilidad (autoría, fecha y respaldo) a cada fuente;
- sintetizar hallazgos contrastados, sin afirmaciones que no tengan respaldo.

En el módulo 1 aprendiste a **validar una respuesta** de IA con lectura lateral, el método SIFT y tu checklist. Aquí das un paso más:
ya no revisas un dato suelto, sino que **analizas un conjunto de fuentes** sobre una misma pregunta. Este tema se basa en análisis de
fuentes: trabajarás con tipos de fuente que encontrarás en cualquier investigación y con un caso real sobre una ley chilena.

:::clave
La ruta del módulo tiene cuatro pasos: **buscar, contrastar, sintetizar y citar**. El primero lo hiciste en el tema anterior. Este
tema trata del segundo y del tercero.
:::

### P02 · De validar un dato a analizar varias fuentes
cubre: S1, S2
fuentes: F-M3-13, F-M3-07, F-M3-08
bloque: Texto + proceso en 4 pasos

Cuando investigas un problema, reúnes fuentes de distinto tipo: una norma, una guía de un organismo, una nota de prensa, un blog de
una empresa, la respuesta de un asistente. Cada una tiene fortalezas y debilidades distintas.

La IA no hace este análisis por ti. NIST, el instituto de normas y tecnología de Estados Unidos, advierte que la IA generativa puede
entregar contenido que **no distingue hechos de opiniones** ni **reconoce la incertidumbre**. Un resumen hecho por IA puede mezclar
una opinión de un blog con un dato de una norma, en el mismo tono.

Por eso el análisis sigue cuatro pasos:
1. **Evaluar** cada fuente con criterios de confiabilidad.
2. **Contrastar** las fuentes entre sí, afirmación por afirmación.
3. **Descartar** lo que no tiene respaldo.
4. **Sintetizar** lo verificado en un texto propio.

:::ejemplo Andrés y sus seis fuentes
Andrés tiene seis fuentes sobre cómo evitar quedarse sin cajas: una guía de una institución educativa, dos blogs de proveedores de
embalaje, un video, una nota de prensa y el resumen que le hizo un asistente. Leídas por separado, todas parecen útiles. Puestas una
al lado de la otra, ve que dos blogs repiten la misma idea y que el resumen del asistente incluye un dato que no aparece en ninguna.
:::

:::error «Si junto muchas fuentes, el resultado es confiable»
La cantidad no reemplaza al análisis. Seis fuentes débiles, o seis que copian a la misma, no valen más que una buena.
:::

### P03 · El test CRAAP: cinco criterios de confiabilidad
cubre: S1, C1
fuentes: F-M3-06
bloque: Texto + tabla (flashcards opcional)

La Biblioteca Meriam de la Universidad Estatal de California en Chico propuso una lista de preguntas para evaluar información, conocida
por su sigla en inglés: **CRAAP**. Agrupa las preguntas en cinco criterios:

| Criterio | Pregunta central |
|---|---|
| **Actualidad** | ¿Cuándo se publicó o se revisó? ¿Sirve esa fecha para mi tema? |
| **Relevancia** | ¿Responde a mi pregunta? ¿Para qué público se escribió? |
| **Autoridad** | ¿Quién es el autor o la entidad? ¿Qué credenciales y afiliación tiene? |
| **Exactitud** | ¿De dónde sale la información? ¿Tiene evidencia? ¿Se puede verificar en otra fuente? |
| **Propósito** | ¿Busca informar, enseñar, vender, entretener o persuadir? ¿Son hechos u opiniones? |

La misma guía aclara que **el peso de cada criterio depende de la situación**. Para un dato que cambia, como un monto o una norma, la
actualidad pesa mucho. Para un método o una definición, pesa menos.

Este curso se concentra en tres criterios que conviene revisar siempre: **autoría** (lo que CRAAP llama autoridad),
**fecha** (actualidad) y **respaldo** (exactitud). Relevancia y propósito te ayudan a interpretar los otros tres.

:::comprueba
Una fuente dice de dónde saca cada dato y enlaza a los documentos originales. ¿Qué criterio cumple mejor?
- a) Actualidad
- **b) Exactitud o respaldo**
- c) Relevancia
Retroalimentación: La exactitud pregunta de dónde sale la información y si se puede verificar. Mostrar el origen de cada dato es la
mejor señal de respaldo.
:::

### P04 · Autoría: quién responde por la información
cubre: S1, C1
fuentes: F-M3-06, F-M3-05
bloque: Texto + tabla de ejemplos

El criterio de **autoría** pregunta quién escribió o publicó la fuente, qué credenciales tiene y a qué institución pertenece. No basta
con que tenga nombre: importa si esa persona o entidad **sabe del tema** y si **responde** por lo que dice.

Mira cómo se aplica a fuentes que usaste en este curso:

| Fuente | Autoría | Lectura |
|---|---|---|
| Ley en el sitio de la Biblioteca del Congreso Nacional | El Estado de Chile | Máxima autoridad para saber qué dice la ley |
| Centro de ayuda de una herramienta de IA | La empresa que la vende | Buena fuente sobre cómo funciona su producto; no es neutral para compararlo con otros |
| Guía de una biblioteca universitaria | Una institución educativa | Confiable para métodos de búsqueda y citación |
| Blog sin autor ni institución | Desconocida | No se puede evaluar; necesita respaldo de otra fuente |

En el módulo 1 viste que un estudio de Stanford mostró que historiadores y estudiantes se dejaban convencer por un **logo profesional,
referencias académicas o el dominio** del sitio, mientras los verificadores profesionales averiguaban fuera del sitio quién estaba
detrás. Esa lectura lateral es la forma práctica de revisar la autoría.

:::error «Si la página tiene referencias académicas, el autor es experto»
Las referencias y el aspecto académico se pueden imitar. La autoría se comprueba averiguando quién publica, no mirando cómo se ve la
página.
:::

### P05 · Fecha: ¿está vigente para mi pregunta?
cubre: S1, C1
fuentes: F-M3-06, F-M3-14, F-H-15
bloque: Texto + línea de tiempo

El criterio de **actualidad** revisa cuándo se publicó la fuente y si se revisó después. No hay una regla única: depende de lo que
preguntas.

- **Normas, montos y trámites:** la fecha es decisiva. Una ley puede cambiar.
- **Herramientas digitales:** sus planes y funciones cambian seguido. Las páginas de ayuda de Gemini, por ejemplo, se actualizaron en
  octubre de 2026.
- **Métodos y definiciones:** una guía de hace años puede seguir sirviendo si el método no cambió.

Un caso real: si buscas la Ley 19.628, sobre protección de la vida privada, en el sitio de la Biblioteca del Congreso Nacional, verás
que la página indica que su **versión actual rige hasta el 30 de noviembre de 2026** y que hay una **versión diferida que empieza a
regir el 1 de diciembre de 2026**. Una fuente que copie el artículo antiguo después de esa fecha estaría desactualizada, aunque cite
bien el número de la ley.

Cuando una fuente **no tiene fecha**, no la descartes de inmediato, pero anótalo como debilidad y busca otra fuente con fecha que diga
lo mismo.

:::ejemplo Rosa revisa la fecha
Rosa encuentra una guía sobre recordatorios de horas con muy buenos consejos. Al revisar, ve que es de hace diez años y que menciona
mensajes de texto, pero no aplicaciones de mensajería. Decide usarla para las ideas generales y buscar una fuente más reciente para
los canales de contacto.
:::

### P06 · Respaldo: ¿de dónde sale el dato?
cubre: S1, C1
fuentes: F-M3-06, F-M3-04, F-M3-13
bloque: Texto + proceso en 3 pasos

El criterio de **respaldo** (la exactitud de CRAAP) pregunta de dónde sale la información, si trae evidencia y si se puede verificar
en otra fuente. Es el criterio que más te protege de los datos inventados.

Para revisarlo, sigue el dato hacia atrás:
1. **¿La fuente dice de dónde lo sacó?** Un estudio, una norma, una encuesta, un registro.
2. **¿Puedes llegar a ese origen?** El último paso de SIFT es rastrear la afirmación hasta su contexto original para ver si se presentó
   completa.
3. **¿El origen dice lo mismo?** A veces el dato se recortó, se redondeó o perdió una condición importante.

Una **fuente primaria** es la que produce el dato: el texto de la ley, el informe con la encuesta, el registro del organismo. Las
demás fuentes la comentan o la resumen. Mientras más cerca de la fuente primaria estés, más firme es el respaldo.

Con la IA, este criterio pesa el doble. NIST advierte que puede inventar citas que parecen respaldar la respuesta. Un dato de un
asistente **no tiene respaldo propio**: lo tiene solo si lo encuentras en una fuente verificable.

:::comprueba
Un blog dice «el 40 % de los pacientes falta a su hora», sin decir de dónde sale. ¿Qué haces?
- a) Lo uso: es un dato concreto
- **b) Busco el estudio o registro que produjo ese dato; si no lo encuentro, no lo uso**
- c) Le pregunto al asistente si el dato es correcto
Retroalimentación: Un porcentaje sin origen no tiene respaldo. Vale solo si llegas a la fuente primaria que lo produjo.
:::

### P07 · Propósito y relevancia: para qué y para quién se escribió
cubre: S1, C1
fuentes: F-M3-06, F-M3-19
bloque: Texto + escenario

Los otros dos criterios de CRAAP te ayudan a leer bien una fuente que ya pasó por autoría, fecha y respaldo.

**Propósito.** Pregunta si la fuente busca informar, enseñar, vender, entretener o persuadir, y si presenta hechos, opiniones o
propaganda. Un blog de una empresa que vende software de agenda puede tener buena información sobre inasistencia, pero también quiere
que compres su producto. No la descartes: **separa los hechos de la promoción**.

**Relevancia.** Pregunta si la fuente responde a tu pregunta y para qué público se escribió. Un caso real de este módulo: una guía del
Instituto Nacional de Ciberseguridad de España sobre cómo clasificar la información de una empresa. Es una fuente pública y bien
respaldada, y su **método** sirve en cualquier país. Pero si buscas qué dice **la ley chilena**, no es relevante: para eso necesitas
normas chilenas.

:::ejemplo Camila separa hechos de promoción
Camila encuentra un artículo de una academia que vende cursos de computación. Dice que los avisos administrativos piden manejo de
planillas, y que «solo con nuestro curso» se logra. Camila se queda con el primer dato, que luego contrasta con avisos reales, y
deja fuera la promesa.
:::

:::error «Si una fuente vende algo, no sirve»
El propósito comercial no invalida todo lo que dice una fuente. Te obliga a separar lo que es dato verificable de lo que es promoción,
y a buscar respaldo para lo primero.
:::

### P08 · Caso 1: evalúa las fuentes de Andrés
cubre: C1, S1
fuentes: F-M3-06, F-M3-04
bloque: Escenario + tabla para completar

Andrés tiene cinco fuentes sobre su pregunta: «¿Qué prácticas usan las bodegas pequeñas para evitar quedarse sin insumos de
embalaje?». Las fuentes son ficticias, pero son del tipo que aparece en cualquier búsqueda.

| Fuente | Autoría | Fecha | Respaldo |
|---|---|---|---|
| A. Guía de logística de un instituto profesional | Institución educativa, con autora identificada | 2024 | Cita manuales y explica un método de cálculo |
| B. Blog de un proveedor de cajas | Empresa que vende cajas | Sin fecha | Ninguno; recomienda comprar por volumen |
| C. Nota de prensa sobre un centro de distribución | Medio reconocido | 2025 | Entrevista al gerente de una empresa grande |
| D. Respuesta de un asistente sin fuentes | Desconocida | — | Ninguno |
| E. Video de un canal de logística | Persona con experiencia declarada | 2023 | Muestra su planilla, pero no cita fuentes |

:::actividad Clasifica la confiabilidad
Para cada fuente, decide si es **alta**, **media** o **baja**, y escribe por qué en una línea.
- A → Alta: autoría identificada, fecha reciente y método explicado.
- B → Baja para datos; útil solo como idea que hay que respaldar. Propósito comercial y sin fecha.
- C → Media: autoría y fecha claras, pero trata de una empresa grande, no de una bodega pequeña (relevancia).
- D → Baja: no se puede saber de dónde sale. Sirve solo como pista.
- E → Media: experiencia declarada, pero sin respaldo; conviene contrastar.
:::

:::clave
Evaluar no es aprobar o reprobar fuentes. Es saber **cuánto peso** darle a cada una cuando las compares.
:::

### P09 · Triangulación: varias miradas sobre lo mismo
cubre: S2
fuentes: F-M3-07
bloque: Texto + diagrama de tres vértices

**Triangular** es usar varias fuentes, estrategias o métodos para estudiar un mismo tema, de modo que las debilidades de una se
compensen con las otras. La idea viene de la investigación cualitativa, y un artículo de la Revista Colombiana de Psiquiatría aclara
un error común: **no significa usar exactamente tres fuentes**. El número no importa tanto como que sean miradas distintas.

El sociólogo Norman Denzin describió cuatro tipos de triangulación. Tres de ellos se aplican bien a una investigación laboral:

| Tipo | Qué significa | Ejemplo en el trabajo |
|---|---|---|
| **De datos** | Usar fuentes distintas sobre lo mismo | Una guía, una norma y una nota de prensa sobre el mismo tema |
| **Metodológica** | Usar métodos distintos | Leer documentos y además revisar tus propios registros o preguntar a quien hace la tarea |
| **De investigadores** | Que más de una persona analice | Pedir a un compañero que revise tus conclusiones |

El cuarto tipo, la triangulación de teorías, se usa sobre todo en investigación académica.

:::ejemplo Rosa triangula
Rosa no se queda con lo que dicen las guías sobre recordatorios. También revisa, sin nombres, cuántas horas se perdieron el último mes
en su agenda (otro método) y le pide a una compañera de la recepción que lea sus conclusiones (otra persona).
:::

:::comprueba
¿Qué significa triangular?
- a) Usar siempre exactamente tres fuentes
- **b) Usar varias fuentes o métodos sobre el mismo tema para compensar las debilidades de cada uno**
- c) Preguntar lo mismo tres veces al asistente
Retroalimentación: Triangular es combinar miradas distintas. Puede ser con dos fuentes o con cinco; lo que importa es que se
compensen entre sí.
:::

### P10 · Coincidir no basta: fuentes independientes
cubre: S2, H1
fuentes: F-M3-07, F-M3-04
bloque: Texto + diagrama

Cuando dos fuentes coinciden, el hallazgo se **corrobora**: tienes más razones para creerlo. Pero hay una condición: que las fuentes
sean **independientes**, es decir, que cada una haya llegado al dato por su cuenta.

Para saberlo, aplica el último paso de SIFT: **rastrea cada afirmación hasta su origen**. Si dos notas de prensa citan el mismo
informe, no tienes dos fuentes independientes: tienes una, contada dos veces. Lo que corrobora es llegar al informe y, si se puede,
encontrar otra fuente que haya llegado a lo mismo por otro camino.

Tres situaciones frecuentes:
- **Copias:** varios sitios repiten el mismo texto, a veces con las mismas palabras.
- **Cadena:** una fuente cita a otra, que cita a una tercera. Solo la última produjo el dato.
- **El resumen de la IA:** cuando un asistente resume tres páginas, su resumen no es una cuarta fuente. Lo que cuenta son las tres
  páginas, cada una con su peso.

:::error «Tres sitios dicen lo mismo, así que está confirmado»
Si los tres copian a la misma fuente, el dato depende de una sola. La confirmación viene de fuentes que llegaron al dato por caminos
distintos.
:::

:::actividad Busca el origen común
Toma dos fuentes de tu registro que digan lo mismo. Revisa si citan a una tercera. Si es así, búscala y anótala en tu registro como la
fuente primaria.
:::

### P11 · Cuando las fuentes se contradicen
cubre: S2, H1
fuentes: F-M3-07, F-M3-08
bloque: Texto + lista de verificación

Que dos fuentes se contradigan no es un fracaso de tu investigación. El artículo sobre triangulación lo dice así: cuando dos
estrategias difieren, la diferencia **no resta credibilidad por sí sola**; es una oportunidad para **analizar por qué** difieren, por
ejemplo, quién produjo cada dato.

Preguntas para explicar una contradicción:
- [ ] **¿Son de fechas distintas?** Quizás una describe la situación anterior.
- [ ] **¿Hablan de lo mismo?** Una puede referirse a empresas grandes y otra a pequeñas, o a otro país.
- [ ] **¿Usan la misma definición?** «Inasistencia» puede incluir o no las horas canceladas con aviso.
- [ ] **¿Una es opinión y la otra un dato?**
- [ ] **¿Quién produjo cada dato y con qué interés?**
- [ ] **¿Una es propuesta y la otra es algo ya decidido?**

Después de analizar, decides. La guía de síntesis de LibreTexts recomienda que, cuando las fuentes no coinciden, **decidas a cuál dar
más crédito y expliques por qué**. A veces la respuesta es que las dos tienen razón en su contexto, y lo dices.

:::ejemplo Camila encuentra una contradicción
Una fuente dice que los avisos administrativos piden «Excel avanzado» y otra que basta con «manejo básico de planillas». Camila revisa
y ve que la primera analizó avisos de grandes empresas, y la segunda, de pymes. No elige una: escribe que el nivel pedido depende del
tamaño de la empresa.
:::

### P12 · Caso 2 (real): ¿desde cuándo rige la nueva ley de datos personales?
cubre: H1, S2, C1
fuentes: F-M3-15, F-M3-16, F-M3-06
bloque: Escenario + actividad de análisis

Este caso usa fuentes reales. Imagina que preguntas: «¿Desde cuándo rige la nueva ley chilena de datos personales?». Reúnes tres
fuentes:

| Fuente | Qué dice |
|---|---|
| **1. Texto de la Ley 21.719**, en el sitio de la Biblioteca del Congreso Nacional | Se publicó el 13 de diciembre de 2024. Sus cambios rigen desde el primer día del mes 24 posterior a la publicación; el sitio registra esa fecha como el **1 de diciembre de 2026** |
| **2. Ficha de tramitación del boletín 18623-07**, en el sitio del Senado | Un proyecto del Ejecutivo propone **postergar** la entrada en vigencia al 1 de diciembre de 2027. Al 24 de octubre de 2026 está en primer trámite en el Senado: **no ha sido aprobado** |
| **3. Una nota en un blog** (ejemplo ficticio) | «La nueva ley se postergó para 2027» |

:::actividad Analiza la contradicción
1. ¿Qué fuentes se contradicen? → La 1 y la 3.
2. ¿Por qué difieren? → La 3 confunde una **propuesta** con algo ya decidido. La fuente 2 muestra que el proyecto sigue en trámite.
3. ¿Qué fuente tiene más crédito? → La 1 para lo que dice la ley, y la 2 para el estado del proyecto: son fuentes primarias del
   Estado. La 3 no tiene respaldo.
4. ¿Qué escribirías? → «Según el texto vigente de la Ley 21.719, sus cambios rigen desde el 1 de diciembre de 2026. Hay un proyecto
   en trámite que propone postergarla, que a la fecha de esta revisión no ha sido aprobado».
:::

:::clave
Fíjate en la última frase: dice **qué** se sabe, **según quién** y **a qué fecha**. Si el tema puede cambiar, tu síntesis debe decir
cuándo lo revisaste. Este caso es justamente un dato que conviene volver a revisar antes de usarlo.
:::

### P13 · Matriz de contraste: descartar lo que no tiene respaldo
cubre: H1, C2
fuentes: F-M3-07, F-M3-04, F-M3-13
bloque: Tabla interactiva + actividad

Para contrastar varias fuentes a la vez, sirve una **matriz de contraste**: una tabla con las afirmaciones en las filas y las fuentes
en las columnas. En cada casilla anotas si la fuente **confirma** (✓), **contradice** (✗) o **no dice nada** (—).

| Afirmación | Fuente A | Fuente C | Fuente E | Decisión |
|---|---|---|---|---|
| Conviene definir una reserva mínima de cajas | ✓ | ✓ | ✓ | Se incluye: tres fuentes independientes |
| La reserva se calcula según el consumo semanal | ✓ | — | ✓ | Se incluye, citando A y E |
| Comprar por volumen siempre ahorra | — | ✗ | — | Se descarta: solo lo decía el blog del proveedor |
| Un 30 % de las bodegas se queda sin cajas cada mes | — | — | — | Se descarta: venía del resumen del asistente, sin origen |

La regla para tu síntesis es simple: **solo entra lo que está respaldado** por más de una fuente independiente o lo que pudiste rastrear
hasta su fuente primaria. Lo demás queda fuera o, si es importante mencionarlo, se marca como no verificado.

NIST recuerda que la IA puede presentar con seguridad contenido falso. Por eso, en la matriz, un dato que solo viene de un asistente
**no cuenta como fuente**: necesita una columna con una fuente verificable.

:::comprueba
En tu matriz, una afirmación tiene un ✓ de una fuente y un ✗ de otra. ¿Qué haces?
- a) La incluyes, porque una fuente la confirma
- **b) Analizas por qué difieren antes de decidir, y explicas tu decisión**
- c) La borras sin revisar
Retroalimentación: Una contradicción pide análisis: revisar fechas, alcance, definiciones y quién produjo cada dato. Luego decides y
dejas escrito por qué.
:::

### P14 · Resumir no es sintetizar
cubre: S3
fuentes: F-M3-08
bloque: Texto + comparación antes/después

Una vez que sabes qué está respaldado, toca escribir. Aquí aparece una confusión frecuente. La guía de LibreTexts distingue dos
operaciones:

- **Resumir** es repetir lo que dice cada fuente, una después de la otra.
- **Sintetizar** es unir las ideas de varias fuentes después de analizarlas: buscar en qué coinciden, qué patrones aparecen y qué
  conclusión se puede sacar.

**Antes (resumen fuente por fuente):** «La guía del instituto dice que hay que tener una reserva. El video dice que él calcula la
reserva con el consumo semanal. La nota de prensa dice que una empresa grande usa alertas automáticas».

**Después (síntesis por tema):** «Las fuentes coinciden en que una bodega debe definir una reserva mínima de insumos de embalaje
(instituto, 2024; video, 2023; prensa, 2025). Dos de ellas proponen calcularla según el consumo semanal. Las alertas automáticas
aparecen solo en empresas grandes, por lo que no está claro que apliquen a una bodega pequeña».

La síntesis se organiza **por idea**, no por fuente. Y dice algo que ninguna fuente decía sola: hasta dónde aplica cada hallazgo.

:::error Pedirle a la IA que «resuma las fuentes» y llamarlo síntesis
Un resumen fuente por fuente deja el análisis sin hacer. La síntesis exige comparar y concluir, y esa conclusión es tuya.
:::

### P15 · Técnicas de síntesis, con y sin IA
cubre: S3, H1
fuentes: F-M3-08, F-M3-13
bloque: Proceso paso a paso

La guía de LibreTexts propone estas técnicas para sintetizar:
1. **Busca puntos en común** y temas que conecten las fuentes.
2. **Identifica patrones** y saca conclusiones.
3. **Mantente fiel** al contexto y a la intención de cada autor.
4. **Cuando no coinciden**, decide a cuál dar más crédito y explica por qué.
5. **Presenta a cada autor**: quién es y por qué importa su punto de vista.

Puedes usar un asistente para ordenar el trabajo, siempre que le entregues **solo lo que ya verificaste**. Por ejemplo, pega en Gemini
tu matriz de contraste, sin datos personales, y pide:

«Con esta matriz, agrupa las afirmaciones incluidas por tema. Para cada tema, escribe dos oraciones que digan en qué coinciden las
fuentes y en qué difieren. Usa solo lo que está en la matriz. No agregues datos ni fuentes. Mantén entre paréntesis la fuente de cada
afirmación».

Luego revisa el borrador: ¿agregó algo?, ¿cambió el sentido de una fuente?, ¿mantuvo cada fuente con su afirmación? Como advierte NIST,
la IA puede presentar contenido falso con seguridad, incluso cuando trabaja sobre tus datos.

:::clave
La IA puede ayudarte a ordenar y redactar la síntesis. El análisis, es decir, qué entra, qué se descarta y qué se concluye, lo haces
tú.
:::

### P16 · Honestidad intelectual al analizar fuentes
cubre: A1
fuentes: F-M3-08, F-M3-12, F-M3-13
bloque: Texto + escenario

En el módulo 1 viste que la honestidad intelectual es no presentar como propio ni como seguro lo que no lo es. Al analizar varias
fuentes, aparece una tentación más: **quedarte solo con las fuentes que dicen lo que esperabas**.

Practicar la honestidad intelectual en una investigación significa:
- **Incluir las fuentes que no coinciden** con tu idea inicial y explicar el desacuerdo, en lugar de omitirlo.
- **Decir lo que no sabes:** si un punto quedó sin respaldo, lo dices. NIST señala que la IA no siempre reconoce la incertidumbre; tú
  sí puedes hacerlo.
- **Separar** lo que dicen las fuentes de tu propia conclusión.
- **Declarar el uso de IA.** Bibliotecas UC pide indicar la herramienta, su versión y la fecha de la consulta cuando usas contenido
  generado por IA.

:::ejemplo Rosa no esconde el dato incómodo
Rosa esperaba que los recordatorios por mensaje redujeran mucho la inasistencia. Una de sus fuentes dice que el efecto fue pequeño en
un centro parecido al suyo. Rosa la incluye y escribe: «Las fuentes muestran resultados distintos; el efecto podría depender del tipo
de paciente». Su informe es más útil porque no promete lo que no sabe.
:::

:::error Omitir la fuente que contradice tu conclusión
Dejarla fuera hace que tu síntesis parezca más firme de lo que es. Quien lea tu informe tomará decisiones con información incompleta.
:::

### P17 · Respeto por la autoría
cubre: A2
fuentes: F-M3-08, F-M3-11, F-M3-12
bloque: Texto + comparación antes/después

Cada idea que usas tiene un autor. **Respetar la autoría** significa reconocer de quién es cada idea y no cambiar lo que quiso decir.
La guía de LibreTexts lo resume en dos prácticas:
- **presenta a cada autor** cuando integras su idea: quién es y por qué importa su punto de vista;
- **sé fiel a su contexto e intención**: no recortes una frase para que diga algo distinto.

**Antes:** «Las bodegas pequeñas deben automatizar sus alertas de stock».
**Después:** «Una nota de prensa de 2025 describe cómo un centro de distribución grande usa alertas automáticas; la fuente no dice que
esa práctica sirva para bodegas pequeñas».

El respeto por la autoría se completa con la **citación**: indicar la fuente de cada idea con una norma reconocida, como APA 7, que
Bibliotecas UC explica en español. Si copias una frase tal como está, va entre comillas y con su fuente. Si la dices con tus
palabras, también lleva la fuente. En el próximo tema aprenderás a citar paso a paso, incluido el contenido generado por IA.

:::comprueba
Una fuente dice: «En empresas grandes, las alertas automáticas reducen los quiebres de stock». ¿Qué versión respeta la autoría?
- a) «Las alertas automáticas eliminan los quiebres de stock»
- **b) «Según la fuente, en empresas grandes las alertas automáticas reducen los quiebres de stock»**
- c) «Todas las bodegas deberían usar alertas automáticas»
Retroalimentación: La opción b mantiene el contexto (empresas grandes) y la intención (reducir, no eliminar), y atribuye la idea.
:::

### P18 · Práctica y cierre: tu síntesis contrastada
cubre: H1, C1, C2
fuentes: F-M3-06, F-M3-07, F-M3-08
bloque: Proceso paso a paso + actividad de cierre

En este tema aplicaste tres criterios de confiabilidad (**autoría, fecha y respaldo**) con el apoyo del test CRAAP, aprendiste a
**triangular** con fuentes independientes, a analizar **contradicciones**, a **descartar** lo que no tiene respaldo y a **sintetizar**
por ideas, con honestidad y respeto por la autoría.

:::actividad Tu síntesis contrastada
Con el registro de fuentes del tema anterior:
1. **Evalúa cada fuente** con autoría, fecha y respaldo. Marca su confiabilidad: alta, media o baja.
2. **Arma tu matriz de contraste** con cinco a ocho afirmaciones sobre tu pregunta de investigación.
3. **Analiza** las contradicciones y anota por qué difieren las fuentes.
4. **Descarta** lo que no tiene respaldo y anota el motivo.
5. **Escribe una síntesis** de 150 a 200 palabras, organizada por ideas, con la fuente de cada afirmación entre paréntesis.
6. **Agrega una línea** con lo que quedó sin responder y, si usaste IA para redactar, cuál usaste y cuándo.
:::

:::clave
Esta síntesis es el corazón de tu informe del Hito 3. En el próximo tema le darás estructura, citas completas y recomendaciones.
:::

### Ideas clave

1. Analizar varias fuentes es más que validar un dato: se evalúa cada fuente, se contrastan entre sí, se descarta lo que no tiene
   respaldo y se sintetiza lo verificado.
2. Toda fuente se revisa al menos en autoría (quién responde), fecha (si está vigente para tu pregunta) y respaldo (de dónde sale el
   dato); el test CRAAP suma relevancia y propósito.
3. Triangular es combinar fuentes, métodos o personas para compensar debilidades; no exige usar exactamente tres fuentes.
4. Dos fuentes que coinciden solo corroboran si son independientes: si copian a la misma, el dato depende de una sola.
5. Una contradicción no es un fracaso: se analiza por qué difieren las fuentes y se decide a cuál dar más crédito, explicando por qué.
6. Sintetizar es organizar por ideas y concluir; resumir fuente por fuente deja el análisis sin hacer.
7. La honestidad intelectual y el respeto por la autoría exigen incluir lo que no coincide, decir lo que no se sabe y atribuir cada
   idea a su autor.

### Glosario

- **Confiabilidad**: grado en que se puede confiar en una fuente según su autoría, su fecha, su respaldo y su propósito.
- **Test CRAAP**: lista de preguntas para evaluar información con cinco criterios: actualidad, relevancia, autoridad, exactitud y
  propósito.
- **Autoría**: quién escribe o publica una fuente, con qué credenciales y desde qué institución.
- **Actualidad**: criterio que revisa cuándo se publicó o revisó una fuente y si esa fecha sirve para la pregunta.
- **Respaldo**: origen verificable de un dato, como un estudio, una norma o un registro. En CRAAP se llama exactitud.
- **Propósito**: intención de una fuente: informar, enseñar, vender, entretener o persuadir.
- **Fuente primaria**: fuente que produce el dato, como el texto de una ley o el informe de una encuesta.
- **Triangulación**: uso de varias fuentes, métodos o personas sobre un mismo tema para compensar las debilidades de cada uno.
- **Fuentes independientes**: fuentes que llegaron a un dato por caminos distintos, sin copiarse entre sí.
- **Corroborar**: confirmar un hallazgo porque otras fuentes independientes llegan a lo mismo.
- **Contradicción entre fuentes**: situación en que dos fuentes afirman cosas incompatibles sobre lo mismo.
- **Matriz de contraste**: tabla que cruza afirmaciones y fuentes para ver cuáles confirman, contradicen o no dicen nada.
- **Síntesis**: texto que une las ideas de varias fuentes, organizado por temas, con conclusiones propias.
- **Respeto por la autoría**: reconocer de quién es cada idea y mantener su contexto e intención.

### Conexión con el proyecto

Tu síntesis contrastada (P18) es la base del **Hito 3 del proyecto aplicado: investigación validada con fuentes (informe breve)**: allí
se pide investigar tu problema con fuentes contrastadas y citadas. La matriz de contraste (P13) y el análisis de contradicciones
(P11 y P12) son también las herramientas del **caso M3-C1**, sobre un informe que incluyó referencias inexistentes generadas por IA:
allí analizarás qué falló en la validación de fuentes y qué medidas se tomaron.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M3.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M3-04 · Caulfield, M. (2019). SIFT (The Four Moves). https://hapgood.us/2019/06/19/sift-the-four-moves/
- F-M3-05 · Spector, C. / Stanford Graduate School of Education (2017). Stanford scholars observe 'experts' to see how they evaluate the credibility of information online. https://ed.stanford.edu/news/stanford-scholars-observe-experts-see-how-they-evaluate-credibility-information-online
- F-M3-06 · Meriam Library, California State University, Chico (2010). Evaluating Information – Applying the CRAAP Test. https://library.csuchico.edu/sites/default/files/craap-test.pdf
- F-M3-07 · Okuda Benavides, M. y Gómez-Restrepo, C. (2005). Métodos en investigación cualitativa: triangulación. https://www.redalyc.org/pdf/806/80628403009.pdf
- F-M3-08 · LibreTexts Español (2022). 17.5: Sintetizar fuentes. https://espanol.libretexts.org/Bookshelves/Humanidades/Humanidades/Composicion/Composicion_Introductoria/Libro%3A_Introduccion_a_la_composicion_universitaria_(Lumen)/03%3A_Investigaci%C3%B3n/17%3A_An%C3%A1lisis_de_fuente/17.5%3A_Sintetizar_fuentes
- F-M3-11 · Bibliotecas UC (2026). Guía de Normas APA 7. https://guiastematicas.bibliotecas.uc.cl/c.php?g=992585&p=7181600
- F-M3-12 · Bibliotecas UC (2026). IA: Citar y referenciar. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- F-M3-13 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M3-14 · Chile, Ministerio Secretaría General de la Presidencia (1999). Ley 19.628, sobre Protección de la Vida Privada. https://www.bcn.cl/leychile/navegar?idNorma=141599
- F-M3-15 · Chile, Ministerio Secretaría General de la Presidencia (2024). Ley 21.719, que regula la protección y el tratamiento de los datos personales. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- F-M3-16 · Senado de Chile (2026). Tramitación del boletín 18623-07. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- F-M3-19 · INCIBE (2018). Para proteger la información de tu empresa, primero clasifícala. https://www.incibe.es/empresas/blog/proteger-informacion-tu-empresa-primero-clasificala
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es

Revisar el estado del boletín 18623-07 antes de publicar: el caso 2 (P12) describe la situación al 24-10-2026.

Recomendaciones del curso, sin fuente: concentrar el análisis en tres criterios (autoría, fecha y respaldo), tomados del criterio C1
y de CRAAP (P03); la tabla de autoría de P04 y la escala alta, media y baja de P08; la lista de preguntas para explicar una
contradicción (P11), que concreta lo que piden F-M3-07 y F-M3-08; la matriz de contraste y su regla de inclusión (P13); la idea de que
el resumen de un asistente no es una fuente más (P10); el prompt de síntesis de P15, y la norma de poner entre comillas una frase
copiada (P17). Las fuentes de Andrés (P08 y P13) y la nota del blog del caso 2 son ficticias; las fuentes 1 y 2 del caso 2 son reales.


## M3-AE3 · Organizar y presentar información

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-09, F-M3-11
bloque: Texto + lista con viñetas

Ya levantaste información con dos herramientas y la convertiste en una síntesis contrastada. Falta el último paso de la ruta del
módulo: **citar y presentar**. Una investigación que nadie entiende, o cuyas fuentes nadie puede revisar, no sirve para decidir. En
este tema vas a convertir tu síntesis en un **informe breve** que otra persona pueda leer en pocos minutos y usar.

**Aprendizaje esperado:** Organizar y presentar hallazgos en un informe breve con fuentes citadas y mensajes clave.

Al terminar, deberías poder:
- organizar un informe con una estructura definida;
- citar todas tus fuentes y formular recomendaciones.

Este tema es un **taller**: al final tendrás un producto, el borrador del informe del Hito 3. Cada pantalla te entrega una pieza:
estructura, mensajes clave, hallazgos, recomendaciones, citas y un gráfico simple. Luego armarás el informe con ayuda de Gemini y lo
revisarás tú.

:::clave
En el módulo 2 escribiste un informe ejecutivo de una página. El informe breve se parece, pero agrega dos cosas: **los hallazgos de
tu investigación con sus fuentes** y **las referencias completas** al final.
:::

### P02 · Qué es un informe breve
cubre: S1
fuentes: F-M3-09
bloque: Texto + imagen de un informe de dos páginas

El Centro Internacional de Investigaciones para el Desarrollo (IDRC), de Canadá, explica cómo escribir documentos breves que
presentan hallazgos y recomendaciones. Sus características sirven para tu informe:

- **Es para alguien que debe decidir**, que no es especialista en el tema y no tiene tiempo para leer toda tu investigación.
- **Trata un solo tema.** Si tienes dos problemas, son dos informes.
- **Es corto:** idealmente no supera unas **1.500 palabras o dos páginas**.
- **Termina en recomendaciones** concretas, que se desprenden de lo que encontraste.

Piensa en quién leerá el tuyo. Para Andrés, es su jefatura. Para Rosa, la coordinadora del centro médico. Para Camila, que busca
empleo, puede ser la persona que la entreviste: un informe breve sobre un problema del cargo muestra cómo investiga y propone.

:::ejemplo El informe de Andrés
Andrés tiene que explicar a su jefatura por qué se atrasaron tres despachos y qué hacer para que no vuelva a pasar. No va a entregar
sus seis fuentes ni su matriz de contraste. Va a entregar dos páginas: qué encontró, qué tan seguro está y qué recomienda.
:::

:::error «Un informe más largo se ve más serio»
Quien decide necesita lo esencial. Un informe largo esconde los hallazgos importantes entre detalles. Si tu informe supera las dos
páginas, probablemente trata más de un tema o incluye lo que no aporta.
:::

### P03 · La estructura del informe breve
cubre: S1, C1
fuentes: F-M3-09, F-M3-11
bloque: Proceso (process block) o acordeón

Según la guía del IDRC, un documento breve suele tener estas partes, en este orden. A ellas se suma la lista de referencias, que pide la
norma APA:

| Parte | Qué responde | Extensión aproximada |
|---|---|---|
| **1. Mensajes clave** | ¿Qué es lo más importante que debo saber? | 3 a 5 viñetas |
| **2. Introducción** | ¿Por qué importa este tema? | Un párrafo |
| **3. Lo que se investigó** | ¿Qué pregunta se hizo y con qué fuentes? | Un párrafo |
| **4. Hallazgos** | ¿Qué se encontró y con qué límites? | La mitad del informe |
| **5. Recomendaciones** | ¿Qué conviene hacer? | 3 a 5 viñetas |
| **6. Referencias** | ¿Dónde puedo revisar cada fuente? | Lista completa |

Usa **títulos que informen**. En vez de «Hallazgos», puedes escribir «Tres prácticas para no quedarse sin cajas». El IDRC recomienda
títulos informativos porque permiten entender el informe con solo leerlos.

:::comprueba
¿Qué parte va al inicio del informe breve?
- a) Las referencias
- **b) Los mensajes clave**
- c) El detalle de cómo se buscó la información
Retroalimentación: Los mensajes clave van primero porque quien decide debe saber lo esencial sin leer todo. Las referencias van al
final.
:::

### P04 · Ordena la estructura
cubre: S1, C1
fuentes: F-M3-09
bloque: Ordenar o clasificar (sorting activity)

Rosa escribió las partes de su informe sobre la inasistencia a horas médicas, pero las tiene desordenadas. Ayúdala a ponerlas en su
lugar.

:::actividad Arma el informe de Rosa
Ordena estos fragmentos según la estructura del informe breve:
- «Una de cada ocho horas agendadas el mes pasado quedó sin uso, lo que alarga la espera de otros pacientes.» → 2. Introducción
- «Confirmar la hora dos días antes reduce la inasistencia, según dos de tres fuentes.» → 1. Mensajes clave
- «Se revisaron cuatro guías y dos estudios publicados desde 2022, y el registro de la agenda del mes, sin nombres.» → 3. Lo que se
  investigó
- «Las fuentes coinciden en que el recordatorio funciona mejor si permite cancelar. Una fuente muestra un efecto pequeño.» → 4.
  Hallazgos
- «Probar durante un mes un recordatorio con opción de cancelar y medir el resultado.» → 5. Recomendaciones
- «Ministerio de… (2024). *Guía de…* URL» → 6. Referencias
:::

Fíjate en una diferencia entre los mensajes clave y los hallazgos. Los **mensajes clave** dicen lo esencial en una oración. Los
**hallazgos** lo desarrollan con sus fuentes y sus límites. Los datos de Rosa son ficticios, pero el orden es el que usarás.

:::error Empezar por la historia de cómo se buscó
«Primero busqué en Perplexity, después armé un cuaderno…» no le dice nada útil a quien decide. El método va breve, en la parte 3,
después de los mensajes clave y la introducción.
:::

### P05 · Mensajes clave: se leen primero, se escriben al final
cubre: S1, A1
fuentes: F-M3-09
bloque: Texto + comparación antes/después

Los **mensajes clave** son las ideas que una persona debe llevarse aunque no lea nada más. El IDRC da un consejo práctico: esta parte va
**al inicio, pero se escribe al final**, cuando ya está claro qué encontraste y qué recomiendas.

Cómo escribirlos:
- una idea por viñeta;
- oraciones completas, que digan algo, no solo un tema;
- el hallazgo más importante primero;
- si hay una recomendación central, también va aquí.

| Antes (temas) | Después (mensajes) |
|---|---|
| Reserva de cajas | Las tres fuentes revisadas coinciden en que una bodega debe definir una reserva mínima de cajas |
| Proveedores | Contar con un segundo proveedor reduce el riesgo de atraso, pero las fuentes no dicen cuánto |
| Recomendación | Recomendamos calcular la reserva según el consumo semanal y revisarla cada mes |

Los mensajes de la columna derecha se entienden solos. Los de la izquierda obligan a leer todo el informe para saber qué se concluyó.

:::comprueba
¿Cuál es un buen mensaje clave?
- a) «Recordatorios»
- b) «En esta sección se analizan los recordatorios»
- **c) «Confirmar la hora dos días antes reduce la inasistencia, según dos de las tres fuentes revisadas»**
Retroalimentación: Un mensaje clave dice qué se encontró y con qué respaldo. Los otros dos solo nombran el tema.
:::

### P06 · Hallazgos con sus limitaciones
cubre: S1, H1
fuentes: F-M3-09, F-M3-08
bloque: Texto + ejemplo guiado

Los **hallazgos** son lo que tu investigación encontró. Salen directamente de la síntesis contrastada que escribiste en el tema
anterior: ya están organizados por idea y cada afirmación tiene su fuente.

El IDRC recomienda presentar los hallazgos **junto con sus limitaciones**. Una limitación es lo que no pudiste confirmar o lo que hace
que un hallazgo aplique solo en ciertos casos. Por ejemplo:
- las fuentes eran de otro país o de empresas más grandes;
- encontraste pocas fuentes sobre un punto;
- dos fuentes se contradecían y no pudiste resolverlo;
- el dato puede cambiar pronto.

Decir las limitaciones no debilita tu informe: le permite a quien decide saber **cuánto confiar** en cada hallazgo.

:::ejemplo Un hallazgo bien presentado
«**Las alertas automáticas de stock se usan en centros grandes.** Una nota de prensa (2025) describe su uso en un centro de distribución
de una empresa grande. No encontramos fuentes sobre bodegas pequeñas, por lo que no sabemos si conviene en nuestro caso».
:::

:::clave
Cada hallazgo tiene tres partes: **qué se encontró**, **quién lo respalda** (la cita) y **hasta dónde aplica** (la limitación).
:::

### P07 · Recomendaciones concretas, creíbles y viables
cubre: H1, C2
fuentes: F-M3-09
bloque: Texto + comparación antes/después

Las recomendaciones son el motivo por el que alguien lee tu informe. El IDRC pide que sean **concretas, creíbles y viables**:

- **Concretas:** dicen qué hacer, quién y cuándo.
- **Creíbles:** se desprenden de los hallazgos. Si no hay un hallazgo detrás, no hay recomendación.
- **Viables:** se pueden hacer con los recursos que hay.

| Antes | Después |
|---|---|
| «Hay que mejorar la gestión de stock» | «Definir una reserva mínima de 30 cajas medianas, calculada con el consumo de las últimas cuatro semanas, y revisarla cada lunes» |
| «Se recomienda usar tecnología» | «Probar durante un mes recordatorios con opción de cancelar la hora y comparar la inasistencia con el mes anterior» |
| «Comprar un sistema automático» | No se recomienda por ahora: las fuentes solo lo muestran en empresas grandes |

Una prueba simple: para cada recomendación, señala con el dedo el hallazgo de donde sale. Si no lo encuentras, la recomendación
sobra o te falta investigar.

:::error Recomendar lo que las fuentes no respaldan
Una recomendación que no se desprende de los hallazgos es una opinión. Si quieres incluirla, preséntala como idea para investigar, no
como conclusión del informe.
:::

### P08 · Por qué citar todas tus fuentes
cubre: S2, C2
fuentes: F-M3-11, F-M3-12
bloque: Texto + recuadro destacado

**Citar** es indicar de dónde sale cada idea o dato que usas. En tu informe cumple tres funciones:
1. **Permite verificar.** Quien lee puede ir a la fuente y comprobar.
2. **Respeta la autoría.** Reconoce el trabajo de quien produjo la información, como viste en el tema anterior.
3. **Te protege.** Si un dato resulta equivocado, queda claro de dónde vino y qué hiciste para revisarlo.

En este curso usarás **APA 7**, una norma de citación reconocida. La guía de **Bibliotecas UC** de la Pontificia
Universidad Católica de Chile la explica en español, con ejemplos para páginas web, leyes y contenido generado por IA.

APA tiene dos piezas que van juntas:
- la **cita en el texto**, breve, junto a la idea: autor y año;
- la **lista de referencias**, al final, con los datos completos de cada fuente.

Toda fuente citada en el texto aparece en la lista, y toda fuente de la lista se cita en el texto.

:::ejemplo Camila cita
Camila escribe: «Los avisos de pymes piden manejo básico de planillas (Bolsa de Empleo X, 2026)». Al final del informe, en las
referencias, aparece esa fuente completa con su enlace. Quien la entreviste puede revisar el aviso si quiere.
:::

### P09 · APA 7: páginas web y documentos en línea
cubre: S2
fuentes: F-M3-11
bloque: Texto + plantilla con ejemplo

La mayoría de tus fuentes serán páginas web o documentos en línea. Según la guía de Bibliotecas UC, su referencia lleva:

1. **Autor o institución.**
2. **Fecha** entre paréntesis. Si no tiene, se escribe **(s.f.)**, que significa «sin fecha».
3. **Título en cursiva.**
4. **Nombre del sitio**, si es distinto del autor.
5. **URL.**

Si el contenido de la página cambia con frecuencia, se agrega la **fecha en que la consultaste** (fecha de recuperación).

**Ejemplo con fecha:**
Bibliotecas Duoc UC. (2023). *¿Cómo formular una necesidad de información?* https://bibliotecas.duoc.cl/busqueda-de-informacion/formular-necesidad-de-informacion

En el texto: (Bibliotecas Duoc UC, 2023).

**Ejemplo sin fecha y con contenido que cambia:**
Perplexity. (s.f.). *How does Perplexity work?* Perplexity Help Center. Recuperado el 24 de octubre de 2026, de https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work

En el texto: (Perplexity, s.f.).

:::clave
Copia la URL completa desde la barra del navegador o con el botón compartir, no la escribas a mano. Y anota la fecha de consulta en
tu registro de fuentes: la vas a necesitar.
:::

### P10 · APA 7: citar una ley chilena
cubre: S2
fuentes: F-M3-11, F-M3-14
bloque: Texto + plantilla con ejemplo

Si tu investigación usa una ley, no basta con escribir «según la ley». La guía de Bibliotecas UC tiene un formato para las leyes
chilenas, con estos elementos en orden:

1. **«Ley No.»** y el número.
2. **Nombre** de la ley.
3. **Fecha de promulgación**, en orden mes, día y año.
4. **Diario Oficial [D.O.]**, con la abreviatura entre corchetes.
5. El país entre paréntesis, si no queda claro.

**Ejemplo con la Ley 19.628**, promulgada el 18 de agosto de 1999:
Ley No. 19628, Sobre protección de la vida privada, Agosto 18, 1999, Diario Oficial [D.O.] (Chile).

En el texto: (Chile, 1999).

Fíjate en dos detalles. La fecha que va es la de **promulgación**, que no siempre coincide con la de publicación. Y si citas un
artículo, la guía muestra que se agrega después del número: «Ley No. 19628 art. 4».

El texto de las leyes chilenas está en el sitio LeyChile de la Biblioteca del Congreso Nacional. Allí ves la fecha de promulgación y
la de publicación, y también si la versión que lees está vigente.

:::error Citar una ley solo con su número
«Ley 19.628» sin nombre ni fecha no permite saber de qué versión hablas. La referencia completa le da a quien lee lo necesario para
encontrarla.
:::

### P11 · Citar contenido generado por IA
cubre: S2, C2
fuentes: F-M3-12
bloque: Texto + plantilla con ejemplo

¿Y si usaste un texto generado por IA? Bibliotecas UC explica cómo citarlo en APA. La referencia lleva:

1. La **empresa** como autora.
2. La **fecha** de la conversación.
3. El **título del chat**, en cursiva.
4. La descripción **[Chat de IA generativa]**.
5. El **modelo y su versión**, tal como los muestra la herramienta.
6. La **URL** de la conversación compartida.

**Plantilla:**
Google. (2026, 24 de octubre). *Título de tu chat* [Chat de IA generativa]. Gemini [modelo y versión]. URL de la conversación

En el texto: (Google, 2026).

La guía pide además **transparencia**: indicar la herramienta, la versión exacta y la fecha de la consulta, y **guardar un registro de
los prompts y las respuestas**. Muchos estilos piden adjuntar el texto generado como anexo.

Una distinción importante en este curso: un **dato** que encontraste con ayuda de la IA se cita con su **fuente original**, la página
que lo produjo. La cita de la IA se usa cuando incorporas **un texto que la IA generó**, por ejemplo, un borrador o una clasificación
que te sirvió de base.

:::comprueba
Gemini te dio un dato con un enlace a la página de un organismo. Abriste la página y el dato está ahí. ¿Qué citas?
- a) Solo a Gemini
- **b) La página del organismo**
- c) No hace falta citar
Retroalimentación: El dato lo produjo el organismo. Gemini fue la herramienta con que lo encontraste. Se cita la fuente original.
:::

### P12 · Corrige las citas incompletas
cubre: S2, C2
fuentes: F-M3-11, F-M3-12
bloque: Actividad de corrección (escenario)

Andrés armó su lista de referencias, pero varias están incompletas. Usa lo que viste en las tres pantallas anteriores para
corregirlas. Las fuentes son ficticias.

:::actividad Encuentra qué falta
1. «Guía de logística para bodegas. https://…»
   → Falta el autor o la institución y la fecha. Título en cursiva: *Guía de logística para bodegas*.
2. «Perplexity (2026).»
   → Perplexity es la herramienta, no la fuente. Hay que citar la página a la que llevaba la cita.
3. «Ley 19.628.»
   → Faltan el nombre, la fecha de promulgación y el D.O.: Ley No. 19628, Sobre protección de la vida privada, Agosto 18, 1999,
   Diario Oficial [D.O.] (Chile).
4. «Blog Embalajes del Sur. *Cómo ahorrar en cajas*. https://…»
   → Falta la fecha. Si no tiene, va (s.f.); como el contenido puede cambiar, agrega la fecha de consulta.
5. «Google. *Resumen de mis fuentes*. Gemini.»
   → Faltan la fecha, [Chat de IA generativa], la versión del modelo y la URL de la conversación.
:::

:::comprueba
En el texto del informe aparece «(Instituto Logístico, 2024)», pero esa fuente no está en las referencias. ¿Qué pasa?
- a) Nada: basta con la cita en el texto
- **b) La cita está incompleta: toda fuente citada en el texto debe aparecer en la lista de referencias**
- c) Hay que borrar la cita del texto
Retroalimentación: La cita en el texto y la referencia van juntas. Sin la referencia, quien lee no puede encontrar la fuente.
:::

### P13 · Visualización simple: elige el gráfico
cubre: S3
fuentes: F-M3-10, F-M3-09
bloque: Texto + tabla con íconos de gráficos

A veces un dato se entiende mejor en un gráfico. El IDRC aconseja incluir **solo los gráficos que aporten al argumento**. Para elegir
cuál, el portal de datos abiertos del Gobierno de España propone partir de la **relación que quieres mostrar**:

| Quieres mostrar… | Gráfico | Ejemplo |
|---|---|---|
| **Cambios en el tiempo** | Líneas | Horas perdidas por inasistencia, mes a mes |
| **Comparar cantidades** | Columnas, con el eje partiendo en 0 | Despachos atrasados por semana |
| **Un ranking** | Barras ordenadas de mayor a menor | Motivos de reclamo, del más al menos frecuente |
| **Partes de un todo** | Torta, solo con pocas partes | Despachos a tiempo y atrasados |

Para tu informe breve, **uno o dos gráficos** bastan. A veces una **tabla simple** comunica mejor que un gráfico, sobre todo si tienes
pocos números.

:::ejemplo Rosa elige el gráfico
Rosa quiere mostrar que la inasistencia subió en los últimos seis meses. Primero pensó en una torta, pero una torta no muestra cambios
en el tiempo. Elige un gráfico de líneas, con un punto por mes.
:::

:::comprueba
Andrés quiere comparar cuántos despachos se atrasaron cada semana del mes. ¿Qué gráfico conviene?
- a) Torta
- **b) Columnas, con el eje partiendo en 0**
- c) Ninguno: los gráficos confunden
Retroalimentación: Para comparar cantidades se usan columnas, y el eje debe partir en 0 para no exagerar las diferencias.
:::

### P14 · Gráficos que no engañan
cubre: S3, A1
fuentes: F-M3-10, F-M3-13
bloque: Texto + comparación de dos gráficos

Un gráfico puede comunicar algo falso aunque los datos sean correctos. La guía de datos.gob.es advierte tres cuidados:

1. **El eje de las columnas parte en 0.** Si parte en otro número, una diferencia pequeña parece enorme.
2. **Las tortas dificultan comparar tamaños.** Úsalas solo con pocas partes; si tienes muchas, mejor barras ordenadas.
3. **Muchos lectores ven causa y efecto donde no la hay.** Si muestras dos cosas que suben juntas, aclara si una causa la otra o si solo
   ocurren al mismo tiempo.

Y un cuidado propio del trabajo con IA: si le pides a un asistente que haga un gráfico o una tabla, **entrégale tus datos verificados**
y compara cada número del resultado con tu planilla. NIST recuerda que la IA puede presentar contenido falso con seguridad, y eso
incluye una cifra mal copiada en un gráfico.

Para hacerlo, usa la planilla que tengas a mano o pide a Gemini que ordene tus datos en una tabla. Lo importante no es la herramienta,
sino que el gráfico diga una sola cosa, con un título que la diga.

:::error «Si el gráfico se ve bien, está bien»
Un eje recortado, una torta con diez partes o dos líneas que sugieren una causa pueden engañar aunque el diseño sea atractivo. Revisa
qué entiende alguien que solo mira el gráfico.
:::

### P15 · Taller, paso 1: el borrador con IA
cubre: H1, C1
fuentes: F-M3-09, F-H-44, F-M3-13
bloque: Proceso paso a paso + actividad

Ahora armas tu informe. Tienes dos caminos, los dos gratuitos:

**Camino A, con Gemini.** Pega tu síntesis contrastada y tu lista de fuentes, sin datos personales, y pide:

«Actúa como analista. Con esta síntesis, redacta un informe breve de máximo dos páginas para [quién lo lee]. Estructura: mensajes clave
(3 a 5 viñetas), introducción, lo que se investigó, hallazgos con sus limitaciones, recomendaciones y referencias. Usa títulos que
informen. Usa solo la información de la síntesis. Mantén cada cita entre paréntesis junto a su afirmación. No agregues datos, fuentes
ni recomendaciones que no se desprendan de los hallazgos».

**Camino B, con Gemini Notebook.** Si tus fuentes están en un cuaderno, puedes pedirle un informe a partir de ellas: el plan gratuito
permite hasta 10 informes al día. Igual tendrás que ajustarlo a la estructura del informe breve.

En los dos casos, el resultado es un **borrador**. La guía de NIST recuerda que la IA puede agregar contenido falso con seguridad, así
que el paso siguiente es revisarlo.

:::actividad Tu borrador
Genera el borrador por el camino que prefieras. Antes de seguir, marca con un color cada afirmación que no reconozcas de tu síntesis.
Si aparece algo nuevo, bórralo o búscale respaldo.
:::

### P16 · Taller, paso 2: revisa claridad, orden y citas
cubre: A1, C1, C2
fuentes: F-M3-09, F-M3-11
bloque: Lista de verificación (checklist) descargable

La claridad y el orden son una forma de respeto por quien lee. El IDRC recomienda lenguaje claro sin jerga, títulos informativos,
listas de **cinco a siete viñetas como máximo** y pedir a **alguien ajeno al tema** que lea el informe antes de enviarlo.

Revisa tu borrador con esta lista:

**Estructura**
- [ ] Tiene las seis partes, en orden.
- [ ] Los títulos dicen algo, no solo nombran la sección.
- [ ] No supera las dos páginas.

**Contenido**
- [ ] Cada hallazgo tiene su cita y su limitación.
- [ ] Cada recomendación se desprende de un hallazgo.
- [ ] No hay datos que no estén en tu síntesis.

**Citas**
- [ ] Cada cita del texto está en las referencias, y al revés.
- [ ] Cada referencia tiene autor, fecha (o s.f.), título y URL.
- [ ] Si usaste un texto generado por IA, está citado y guardaste el prompt.

**Claridad**
- [ ] Las viñetas no pasan de siete por lista.
- [ ] Una persona ajena al tema lo leyó y entendió los mensajes clave.

:::ejemplo La prueba de la vecina
Rosa le pide a su vecina, que no trabaja en salud, que lea sus mensajes clave. La vecina entiende todo menos «tasa de no
presentación». Rosa lo cambia por «pacientes que no llegan a su hora».
:::

### P17 · Cierre: tu informe para el Hito 3
cubre: H1, C1, C2
fuentes: F-M3-09, F-M3-11, F-M3-12
bloque: Texto + actividad de cierre (entrega)

En este taller armaste las piezas de un **informe breve**: **mensajes clave** que se escriben al final, **hallazgos** con sus
limitaciones, **recomendaciones** concretas, creíbles y viables, **citas en APA 7** (incluidas leyes y contenido generado por IA) y un
**gráfico simple** que no engaña. Luego hiciste un borrador con IA y lo revisaste con una lista de verificación.

:::actividad Tu informe breve
Entrega un informe de **una a dos páginas** sobre el problema de tu proyecto, con:
1. **Mensajes clave** (3 a 5 viñetas).
2. **Introducción**: por qué importa el problema.
3. **Lo que se investigó**: tus preguntas y las herramientas y fuentes que usaste.
4. **Hallazgos**, cada uno con su cita y su limitación.
5. **Al menos dos recomendaciones** que se desprendan de los hallazgos.
6. **Referencias en APA 7** de todas las fuentes citadas.
7. Opcional: **un gráfico o una tabla** con datos tuyos o de tus fuentes, si aporta al argumento.

Antes de entregar, aplica la lista de verificación de P16 y pide a alguien que lo lea.
:::

:::clave
Tu informe no tiene que ser perfecto. Tiene que ser **claro, ordenado y verificable**: que cualquier persona pueda seguir cada dato
hasta su fuente.
:::

### Ideas clave

1. Un informe breve presenta hallazgos y recomendaciones a alguien que debe decidir; trata un solo tema y no supera unas dos páginas.
2. Su estructura es: mensajes clave, introducción, lo que se investigó, hallazgos con limitaciones, recomendaciones y referencias.
3. Los mensajes clave van al inicio, pero se escriben al final, cuando ya está claro qué se encontró.
4. Cada hallazgo dice qué se encontró, quién lo respalda y hasta dónde aplica; cada recomendación se desprende de un hallazgo.
5. En APA 7, cada fuente se cita en el texto con autor y año, y aparece completa en la lista de referencias; las leyes chilenas y el
   contenido generado por IA tienen su propio formato.
6. El gráfico se elige según la relación que se quiere mostrar, con el eje en 0 para comparar cantidades y aclarando cuando no hay
   causa y efecto.
7. La IA puede hacer el borrador del informe, pero la estructura, los datos y las citas los revisa una persona antes de entregar.

### Glosario

- **Informe breve**: documento de hasta unas dos páginas que presenta hallazgos y recomendaciones sobre un solo tema a quien debe
  decidir.
- **Mensajes clave**: viñetas al inicio de un informe con lo esencial que debe llevarse quien lo lee.
- **Hallazgo**: resultado de una investigación, respaldado por una o más fuentes.
- **Limitación**: aspecto que reduce el alcance de un hallazgo, como pocas fuentes o datos de otro contexto.
- **Recomendación**: acción concreta, creíble y viable que se desprende de los hallazgos.
- **Citar**: indicar de dónde sale cada idea o dato que se usa en un texto.
- **APA 7**: séptima edición de la norma de citación de la Asociación Estadounidense de Psicología (American Psychological Association).
- **Cita en el texto**: indicación breve, con autor y año, junto a la idea que se toma de una fuente.
- **Lista de referencias**: lista al final de un texto con los datos completos de cada fuente citada.
- **s.f.**: abreviatura de «sin fecha», que se usa en la referencia cuando la fuente no indica su fecha.
- **Fecha de recuperación**: fecha en que se consultó una página cuyo contenido puede cambiar.
- **Fecha de promulgación**: fecha en que se aprueba formalmente una ley; es la que se usa al citarla en APA.
- **Visualización de datos**: representación de datos en un gráfico o una tabla para facilitar su comprensión.

### Conexión con el proyecto

Este taller produce la entrega del **Hito 3 del proyecto aplicado: investigación validada con fuentes (informe breve)**. El informe de
P17 reúne el levantamiento de información del tema 1 (tus preguntas y tus dos herramientas) y la síntesis contrastada del tema 2, con
fuentes citadas en APA 7 y recomendaciones. El tutor lo revisará con la rúbrica general del proyecto. En el tema 4 revisarás que tu
investigación no haya expuesto datos personales ni información confidencial.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M3.md` e `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M3-08 · LibreTexts Español (2022). 17.5: Sintetizar fuentes. https://espanol.libretexts.org/Bookshelves/Humanidades/Humanidades/Composicion/Composicion_Introductoria/Libro%3A_Introduccion_a_la_composicion_universitaria_(Lumen)/03%3A_Investigaci%C3%B3n/17%3A_An%C3%A1lisis_de_fuente/17.5%3A_Sintetizar_fuentes
- F-M3-09 · International Development Research Centre, IDRC (s. f.). How to write a policy brief. https://idrc-crdi.ca/en/funding/resources-idrc-grantees/how-write-policy-brief
- F-M3-10 · datos.gob.es, Gobierno de España (2023). Cómo elegir el gráfico correcto para visualizar datos abiertos. https://datos.gob.es/es/blog/como-elegir-el-grafico-correcto-para-visualizar-datos-abiertos
- F-M3-11 · Bibliotecas UC (2026). Guía de Normas APA 7: Documentos en sitio web y Legislación. https://guiastematicas.bibliotecas.uc.cl/c.php?g=992585&p=7181600 y https://guiastematicas.bibliotecas.uc.cl/c.php?g=992585&p=7219857
- F-M3-12 · Bibliotecas UC (2026). IA: Citar y referenciar. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- F-M3-13 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M3-14 · Chile, Ministerio Secretaría General de la Presidencia (1999). Ley 19.628, sobre Protección de la Vida Privada. https://www.bcn.cl/leychile/navegar?idNorma=141599
- F-H-44 · Google (s. f.). Cambiar a un plan superior de Gemini Notebook. https://support.google.com/notebooklm/answer/16213268?hl=es

Recomendaciones del curso, sin fuente: las extensiones aproximadas por parte del informe (P03); la prueba de «señalar el hallazgo» para
cada recomendación (P07); la idea de usar uno o dos gráficos o una tabla simple (P13); el prompt del borrador (P15); la lista de
verificación de P16, que ordena los consejos del IDRC y de APA, y la distinción entre citar la fuente original de un dato y citar a la
IA solo cuando se usa un texto que ella generó (P11). Los datos de Rosa, Andrés y Camila y las referencias de P12 son ficticios.

Formato de ley de P10: tomado del ejemplo de Bibliotecas UC (página «Legislación»), que escribe el número sin punto («Ley No. 19496»)
y la fecha en orden mes, día, año; revisado el 24-10-2026. El ejemplo de «art.» después del número también sale de esa página.


## M3-AE4 · Análisis crítico y privacidad

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-13, F-M3-14, F-M3-20
bloque: Texto + lista con viñetas

En este módulo usaste la IA para buscar, contrastar y presentar información. Queda una pregunta que atraviesa todo lo anterior: **¿qué
le estás entregando a la herramienta y qué te está devolviendo?** Por un lado, sus resultados pueden tener sesgos, errores difíciles de
rastrear y límites. Por otro, lo que escribes o subes puede incluir datos de personas o información de una empresa que no debería salir
de ahí.

**Aprendizaje esperado:** Evaluar críticamente los resultados de la IA y los riesgos de privacidad al usar información laboral,
proponiendo prácticas de uso seguro.

Al terminar, deberías poder:
- clasificar la información según su sensibilidad;
- decidir con fundamento qué puede ingresar a una herramienta de IA y proponer una práctica segura.

Este tema se basa en **casos**. Los riesgos que verás están documentados por organismos y proveedores, como NIST y Google. Los
escenarios con Camila, Andrés y Rosa son ficticios, pero muestran cómo aparecen esos riesgos en tareas comunes. Hay además incidentes
reales documentados: verás uno en P05 y otro en P06, y los analizarás a fondo en los casos M3-C1 y M3-C2.

:::clave
Lo que verás sobre leyes es **orientación general** para usar la IA con cuidado, no asesoría legal. Si en tu trabajo tienes una duda
concreta sobre datos personales, consulta a quien corresponda en tu organización o a un profesional.
:::

### P02 · Evaluar un resultado: tres preguntas
cubre: S1
fuentes: F-M3-13, F-M3-01, F-M3-02
bloque: Texto + proceso en 3 pasos

En el módulo 1 aprendiste a validar una respuesta y en el tema 2 de este módulo, a contrastar fuentes. **Evaluar críticamente** va un
paso más allá: no solo preguntas si un dato es correcto, sino **qué tan confiable es el proceso** que lo produjo. Para eso sirven tres
preguntas:

1. **¿Qué sesgos puede tener?** ¿A quién representa bien esta respuesta y a quién deja fuera?
2. **¿Puedo rastrearla?** ¿Sé de dónde salió cada afirmación?
3. **¿Qué límites tiene?** ¿Qué no puede hacer bien esta herramienta, aunque lo intente?

NIST describe estos tres frentes entre los riesgos de la IA generativa: el sesgo dañino, la confabulación (lo que llamamos alucinación)
y los problemas de integridad de la información. Las herramientas de este módulo ayudan con la trazabilidad, porque muestran citas, pero
no resuelven los otros dos.

:::ejemplo Camila evalúa su propio informe
Antes de entregar su informe del Hito 3, Camila revisa con las tres preguntas el borrador que le hizo Gemini. Descubre que casi todas
las fuentes sobre conocimientos digitales eran de otros países y que un párrafo no tenía ninguna cita. Ajusta los mensajes clave para
decir que la evidencia chilena es escasa.
:::

:::comprueba
¿Qué agrega «evaluar críticamente» a «validar un dato»?
- a) Nada, son lo mismo
- **b) Revisar también los sesgos, la trazabilidad y los límites del proceso que produjo la respuesta**
- c) Confiar más en la herramienta
Retroalimentación: Validar revisa si un dato es correcto. Evaluar críticamente revisa también qué tan confiable es el camino por el que
llegó.
:::

### P03 · Sesgos en una investigación hecha con IA
cubre: S1
fuentes: F-M3-13
bloque: Texto + escenario

NIST explica que la IA generativa puede **amplificar sesgos históricos y sociales** y **rendir distinto según el grupo o el idioma**, en
parte porque sus datos de entrenamiento no son representativos. También describe la **homogeneización**: respuestas demasiado parecidas
entre sí, que repiten una sola mirada.

En una investigación laboral, esto se nota de formas concretas:
- **Otro país, otras reglas.** Si hay más información en inglés o sobre otros países, la respuesta puede describir prácticas o normas
  que no aplican en Chile.
- **Empresas grandes como modelo.** Las fuentes más visibles suelen ser de grandes empresas; una pyme o un centro médico pequeño quedan
  fuera.
- **Personas que no aparecen.** Una respuesta sobre «el cliente típico» o «el trabajador ideal» puede dejar fuera a grupos completos.

Preguntas para detectar sesgo en tus resultados:
- ¿De qué país y de qué tipo de organización son las fuentes?
- ¿Aplica esto a mi realidad?
- ¿A quién no menciona?

:::ejemplo Rosa detecta un sesgo
Rosa pide ideas para reducir la inasistencia. Todas suponen que los pacientes tienen teléfono inteligente y correo. Muchos pacientes de
su centro son personas mayores que prefieren una llamada. Rosa agrega esa limitación a su informe y pide ideas para ese grupo.
:::

:::error «La IA es neutral porque es una máquina»
Los modelos aprenden de lo que la gente escribió y publicó, con sus desigualdades. Una respuesta puede ser correcta en los datos y aun
así representar a un solo grupo.
:::

### P04 · Trazabilidad: ¿puedo seguir el dato hasta su origen?
cubre: S1
fuentes: F-M3-01, F-M3-02, F-M3-13
bloque: Texto + tabla

La **trazabilidad** es la posibilidad de seguir una afirmación hasta su origen. Es lo que te permite verificarla y citarla. No todas las
respuestas de IA tienen el mismo nivel:

| Situación | Trazabilidad | Qué hacer |
|---|---|---|
| Respuesta de un asistente sin fuentes | Baja: no sabes de dónde salió | Úsala solo como pista y busca la fuente |
| Respuesta de un buscador con citas | Media: cada afirmación enlaza a una página | Abre cada cita y revisa que diga eso |
| Respuesta de un asistente sobre tus fuentes | Alta: cita la parte exacta de tus documentos | Toca las citas y compara con el texto |

Hay un límite que ninguna herramienta resuelve hoy. NIST señala que **la mayoría de los desarrolladores no informa con qué datos entrenó
sus modelos**. Cuando un asistente responde «de memoria», no hay forma de saber de qué textos aprendió eso.

Por eso, en este curso, la regla es simple: **lo que no puedes rastrear, no lo presentas como hecho**. Si necesitas mencionarlo, dices
que no está verificado.

:::comprueba
¿Qué respuesta tiene mayor trazabilidad?
- a) La de un asistente que responde sin mostrar fuentes
- b) Un resumen que te reenvió un compañero
- **c) La de un asistente sobre fuentes propias que cita el párrafo de tu documento**
Retroalimentación: Cuando la respuesta apunta a la parte exacta de un documento que tienes, puedes comprobarla de inmediato.
:::

### P05 · Límites que no desaparecen
cubre: S1
fuentes: F-M3-13, F-M3-02, F-M3C1-02, F-M3C1-03, F-M3C1-04, F-M3C1-06
bloque: Texto + recuadro destacado

Aun con buenas herramientas, hay límites que siguen ahí:

- **Confabulación.** NIST explica que la IA puede producir contenido falso con total seguridad, incluso **razonamientos o citas
  inventadas** para justificar la respuesta.
- **Hechos y opiniones mezclados.** Puede presentar una opinión como si fuera un hecho y no siempre reconoce cuándo no está segura.
- **Errores sobre tus propios documentos.** La ayuda de Gemini Notebook advierte que sus respuestas pueden tener errores, aunque trabaje
  con tus fuentes.
- **Temas que piden a un profesional.** La misma ayuda recomienda consultar a un profesional en temas médicos, legales o financieros.

Este último punto importa mucho en tu trabajo. Una herramienta puede ayudarte a entender una norma o a ordenar información de salud,
pero no reemplaza a quien tiene la responsabilidad y la formación para decidir.

:::ejemplo Andrés pregunta por una norma
Andrés pregunta a un asistente si su bodega cumple una norma de seguridad. La respuesta es segura y detallada. Andrés la usa para
entender de qué trata la norma, pero la decisión la toma con el prevencionista de riesgos de la empresa.
:::

:::ejemplo Caso real: un informe con referencias que no existían (Deloitte Australia, 2025)
Deloitte entregó al Departamento de Empleo de Australia una revisión del sistema que aplica sanciones a quienes reciben pagos de
seguridad social. Ya publicado el informe, se detectaron notas y referencias incorrectas; según la prensa, entre ellas había obras
académicas que no existen. La versión corregida (26-09-2025) declara que el análisis usó una herramienta basada en GPT-4o, y Deloitte
devolvió el pago final, de 97.587,11 dólares australianos. Ningún documento oficial dice que la IA creara esas referencias: lo que
muestra el caso es el costo de entregar citas que nadie comprobó en su origen.
:::

:::error «Si la herramienta trabaja con mis documentos, sus conclusiones son seguras»
Trabajar sobre tus fuentes mejora la trazabilidad, pero la herramienta puede resumir mal o mezclar ideas. En temas legales, médicos o
financieros, la conclusión la revisa una persona con formación en el tema.
:::

### P06 · El otro lado: lo que tú le entregas a la IA
cubre: S2, S4
fuentes: F-M3-20, F-H-15, F-M3-13, F-M3C2-01, F-M3C2-02
bloque: Texto + recuadro destacado

Hasta aquí evaluaste lo que la IA te devuelve. Ahora mira lo que **tú le entregas**. Cada pregunta que escribes y cada archivo que subes
sale de tu control y queda en los sistemas de un proveedor.

Un ejemplo documentado: el Centro de Privacidad de Gemini explica que, con el ajuste de actividad encendido, Google usa tu actividad
para mejorar sus servicios, **incluido el entrenamiento de IA generativa**, y que **revisores humanos leen una parte de las
conversaciones**, desvinculadas de tu cuenta. El mismo centro recomienda expresamente **no ingresar datos confidenciales** ni nada que
no quieras que vea un revisor.

NIST agrega otro riesgo: los modelos pueden **filtrar, generar o inferir datos sensibles de personas**, incluso combinando información
que estaba dispersa. Un dato suelto puede parecer inofensivo, pero junto con otros puede identificar a alguien.

Por eso la pregunta clave antes de escribir o subir algo no es solo «¿me sirve la respuesta?», sino también **«¿puedo entregar esta
información?»**.

:::ejemplo Rosa se detiene
Rosa quiere que Gemini redacte recordatorios personalizados. Está por pegar la lista del día con nombres, teléfonos y especialidad de
cada paciente. Se detiene: esa lista no es suya para compartir. Pide en cambio una plantilla con espacios en blanco y la completa ella
en el sistema del centro.
:::

:::ejemplo Caso real: archivos de un municipio en sitios públicos de IA (Eindhoven, 2025)
La Municipalidad de Eindhoven, en Países Bajos, revisó una muestra de 30 días del tráfico de datos de sus equipos. Encontró archivos con
datos personales de habitantes y funcionarios subidos a sitios públicos de IA, como ChatGPT: documentos de la ley de juventud,
informes internos y currículos. El 23-10-2025 avisó a la autoridad de protección de datos y bloqueó esos sitios; desde entonces sus
funcionarios usan solo herramientas internas. Como los registros guardan apenas 30 días, el municipio no puede saber cuántas personas
fueron afectadas. Según su primera lectura, los funcionarios querían hacer mejor su trabajo.
:::

:::clave
Una vez que pegas algo en una herramienta, ya no lo puedes «des-pegar». La decisión se toma **antes**.
:::

### P07 · Qué es un dato personal
cubre: S2, C1
fuentes: F-M3-14, F-M3-15
bloque: Texto + tarjetas (flashcards)

Para decidir qué puedes entregar, primero tienes que reconocer un **dato personal**. En Chile lo define la ley:

- **Ley 19.628 (vigente):** dato personal es cualquier información sobre **personas naturales identificadas o identificables**.
- **Ley 21.719 (según su texto, rige desde el 1 de diciembre de 2026):** dato personal es cualquier información vinculada a una persona
  natural identificada o identificable, **directa o indirectamente**. Da como ejemplos el **nombre** o el **RUN**, y elementos de su
  identidad física, genética, psíquica, económica, cultural o social.

Fíjate en la palabra **identificable**. No hace falta el nombre para que un dato sea personal. Basta con que, juntando datos, se pueda
saber de quién se habla. Por ejemplo:
- «El paciente de las 10:30 del martes con el doctor de traumatología»;
- «La única supervisora del turno de noche de la sucursal de Maipú»;
- una foto, una dirección o un número de teléfono.

Una **persona natural** es un ser humano. Los datos de una empresa (persona jurídica), como sus ventas, no son datos personales, aunque
pueden ser confidenciales, como verás en P09.

:::comprueba
¿Cuál de estos es un dato personal?
- a) El total de despachos de la semana
- **b) «El conductor que llegó atrasado el lunes al turno de la mañana»**
- c) El nombre de un producto
Retroalimentación: Aunque no diga el nombre, permite identificar a una persona concreta. Por eso es un dato personal.
:::

### P08 · Datos sensibles: los que exigen más cuidado
cubre: S2, C1
fuentes: F-M3-14, F-M3-15
bloque: Texto + tabla comparativa

Algunos datos personales son **sensibles**: su mal uso puede causar discriminación o un daño grave. La ley los protege con más fuerza.

| Ley 19.628 (vigente) | Ley 21.719 (según su texto, desde el 1 de diciembre de 2026) |
|---|---|
| Datos que se refieren a características físicas o morales de las personas, o a su vida privada o intimidad | Datos que revelan, entre otros: |
| Ejemplos: hábitos personales, origen racial, ideologías y opiniones políticas, creencias religiosas, salud física o psíquica, vida sexual | Origen étnico o racial; afiliación política, sindical o gremial; situación socioeconómica; convicciones ideológicas o filosóficas; creencias religiosas; salud; perfil biológico; datos biométricos; vida sexual; orientación sexual e identidad de género |

Las dos leyes coinciden en lo central: **salud, creencias, origen, opiniones políticas y vida sexual** son datos sensibles. La Ley 21.719
nombra de forma expresa otros que aparecen a menudo en el trabajo, como la **afiliación sindical**, la **situación socioeconómica** y
los **datos biométricos** (por ejemplo, la huella con que se marca la entrada).

En el trabajo, los datos sensibles aparecen más de lo que parece: una licencia médica, un certificado de discapacidad, una ficha
clínica, la lista de quienes pertenecen al sindicato.

:::error «Si quito el nombre, un dato de salud deja de ser sensible»
Si con el resto de la información se puede saber de quién se trata, sigue siendo un dato personal sensible. Un diagnóstico con la fecha,
el cargo y el turno puede identificar a alguien.
:::

### P09 · Información confidencial de una organización
cubre: S2, C1
fuentes: F-M3-19, F-M3-17
bloque: Texto + tabla de tres niveles

No todo lo que hay que proteger son datos de personas. Una empresa también tiene **información confidencial**: precios negociados,
listas de clientes, ventas, remuneraciones, contratos o planes que aún no se anuncian.

El Instituto Nacional de Ciberseguridad de España (INCIBE) propone clasificar la información de una empresa según **quién puede
acceder** a ella, en tres niveles:

| Nivel | Quién accede | Ejemplos |
|---|---|---|
| **Confidencial** | Solo personas concretas | Remuneraciones, contratos, datos de salud del personal |
| **Interna** | Solo el personal de la empresa | Procedimientos internos, reportes de stock, turnos |
| **Pública** | Cualquiera | Catálogo publicado, horarios de atención, avisos de empleo |

INCIBE propone además pensar en el **daño** que causaría que esa información se pierda o se filtre: daño a la imagen, consecuencias
legales o económicas, o que el trabajo se detenga. Por ejemplo, solo quienes procesan las remuneraciones deberían acceder a esos datos.

En Chile, los lineamientos del Estado para el uso de IA (que verás en P12) también piden cuidar la información confidencial de las
**personas jurídicas**, no solo la de las personas.

:::ejemplo Andrés clasifica
Andrés revisa los documentos que maneja. El catálogo de productos es **público**. El reporte semanal de stock es **interno**. La lista de
precios especiales para un cliente es **confidencial**: solo la ven él, su jefatura y el área comercial.
:::

### P10 · Ley 19.628: lo que pide hoy
cubre: S3
fuentes: F-M3-14
bloque: Texto + recuadro destacado

La **Ley 19.628, sobre protección de la vida privada**, se publicó en 1999 y es la que está vigente. Dos de sus reglas se relacionan
directamente con el uso de IA en el trabajo:

**1. Para tratar datos personales se necesita una base.** El artículo 4 dice que el tratamiento de datos personales requiere que una
ley lo autorice o que la persona dueña de los datos, el **titular**, dé su **consentimiento expreso, informado y por escrito**.

Piénsalo en tu trabajo: pegar la lista de clientes en una herramienta de IA para que la ordene ya es hacer algo con datos personales
de otras personas. Antes de hacerlo, pregúntate si tienes una base para ello.

**2. Quienes trabajan con datos personales deben guardar secreto.** El artículo 7 obliga a las personas que trabajan en el tratamiento
de datos personales a guardar secreto sobre ellos, **incluso después de dejar esa función**.

Esto te alcanza aunque no seas el dueño de la empresa. Si tu trabajo incluye manejar datos de clientes, pacientes o compañeros, debes
guardar reserva sobre ellos.

:::ejemplo Camila y su trabajo anterior
Camila trabajó en una oficina de cobranza. Para preparar una entrevista, pensó en pegar en Gemini una planilla antigua de deudores
«como ejemplo de su trabajo». Recuerda que el deber de secreto sigue aunque ya no trabaje ahí. Usa datos inventados para mostrar cómo
organizaba la información.
:::

:::comprueba
Según la Ley 19.628, ¿cuándo termina el deber de secreto de quien trabajó con datos personales?
- a) Al terminar la jornada
- b) Al cambiar de trabajo
- **c) No termina al dejar esa función: sigue después**
Retroalimentación: El artículo 7 indica que la obligación de secreto continúa después de dejar las funciones relacionadas con esos
datos.
:::

### P11 · Ley 21.719: qué cambia y en qué estado está
cubre: S3
fuentes: F-M3-15, F-M3-16, F-M3-18
bloque: Texto + línea de tiempo

La **Ley 21.719** moderniza la Ley 19.628: regula la protección y el tratamiento de los datos personales y crea la **Agencia de
Protección de Datos Personales**. Se publicó el **13 de diciembre de 2024**.

**¿Desde cuándo rige?** Su texto dice que sus cambios rigen desde el primer día del mes 24 posterior a su publicación, y el sitio LeyChile
de la Biblioteca del Congreso Nacional registra esa fecha como el **1 de diciembre de 2026**.

**¿Puede cambiar esa fecha?** Hay un proyecto de ley del Ejecutivo, el **boletín 18623-07**, que propone postergar la entrada en
vigencia al 1 de diciembre de 2027. Al 24 de octubre de 2026, según la ficha de tramitación del Senado, está en **primer trámite** y
**no ha sido aprobado**. Mientras no se apruebe y publique, la fecha que fija la ley es el 1 de diciembre de 2026.

| Fecha | Hecho |
|---|---|
| 13-12-2024 | Se publica la Ley 21.719 |
| 01-09-2026 | Ingresa al Senado el proyecto que propone postergarla |
| 01-12-2026 | Fecha de vigencia según el texto de la ley |

Dos cambios que ya viste: una definición más amplia de dato personal (P07) y una lista más larga de datos sensibles (P08). Además, la
nueva ley obliga a quien es responsable de los datos a guardar **secreto o confidencialidad**, incluso después de terminar su relación
con el titular.

¿Y la IA? Chile **todavía no tiene una ley general de IA**. El proyecto que regula los sistemas de IA (boletín 16821-19) está en segundo
trámite en el Senado.

:::clave
Las normas sobre datos e IA están cambiando. Cuando uses estas fechas en un trabajo, **revisa la ficha de tramitación** y di a qué fecha
corresponde lo que afirmas, como practicaste en el tema 2.
:::

### P12 · Políticas internas: el ejemplo del Estado
cubre: S3, S4
fuentes: F-M3-17, F-M3-14
bloque: Texto + lista con viñetas

Además de la ley, muchas organizaciones tienen **políticas internas**: reglas propias sobre qué herramientas se pueden usar y qué
información puede salir. Un ejemplo chileno de buena práctica es el **Oficio Circular N.° 711, de 2023**, disponible en el sitio del Ministerio de Ciencia, con
lineamientos para el uso de IA en el sector público.

Son **recomendaciones para los órganos del Estado**, no obligaciones para las empresas privadas. Pero sirven como referencia de lo que
hace una organización cuidadosa. Recomiendan:
- tratar los datos personales, en especial los sensibles, de acuerdo con la Ley 19.628 y **solo para fines autorizados**;
- **no ingresar información personal**, en especial sensible, en herramientas de IA generativa que el organismo **no haya contratado o
  desarrollado**;
- cuidar también la **información confidencial de las personas jurídicas**;
- **capacitar** a quienes trabajan en el uso de estas herramientas.

¿Qué haces tú?
- **Si trabajas**, pregunta si tu organización tiene una política sobre IA y síguela. Si no la tiene, aplica estos mismos criterios.
- **Si buscas empleo**, pregunta en la entrevista qué herramientas se usan y con qué reglas: muestra que conoces el tema.

:::error «Si la herramienta es gratuita y conocida, puedo usarla con información del trabajo»
Que una herramienta sea popular no significa que tu empleador la haya autorizado. Una herramienta personal y gratuita no es una
herramienta contratada por tu organización, y no tiene sus mismas garantías.
:::

### P13 · Clasificar antes de ingresar
cubre: H1, C1
fuentes: F-M3-19, F-M3-15, F-M3-17
bloque: Diagrama de decisión + tabla

Ahora juntas todo en un método para **decidir qué puede ingresar** a una herramienta de IA. Se basa en dos preguntas:

**Pregunta 1. ¿Quién puede acceder a esta información?** (clasificación de INCIBE)
- Pública, interna o confidencial.

**Pregunta 2. ¿Tiene datos personales? ¿Son sensibles?** (definiciones de la ley)
- Sin datos personales, con datos personales o con datos sensibles.

Con las dos respuestas, decides:

| | Sin datos personales | Con datos personales | Con datos sensibles |
|---|---|---|---|
| **Pública** | Puede ingresar | Solo anonimizada | No ingresa |
| **Interna** | Solo en una herramienta autorizada, o sin detalles que identifiquen a la empresa | Solo anonimizada y en una herramienta autorizada | No ingresa |
| **Confidencial** | No ingresa a una herramienta no autorizada | No ingresa | No ingresa |

Esta tabla es un criterio del curso que aplica las fuentes: lo **público** puede ingresar; lo que tiene **datos sensibles** o es
**confidencial** no debe ingresar a una herramienta que tu organización no autorizó, como recomiendan los lineamientos del Estado.

:::clave
Cuando dudes entre dos casillas, elige la más estricta. Es más fácil anonimizar de más que deshacer una filtración.
:::

### P14 · Caso: ¿qué puede ingresar?
cubre: H1, C1, C2
fuentes: F-M3-19, F-M3-15, F-M3-14
bloque: Escenario + actividad de clasificación

Aplica el método a estas situaciones. Para cada una, clasifica la información, decide si puede ingresar a una herramienta de IA
gratuita y nombra la regla que aplicaste.

:::actividad Decide y fundamenta
1. Andrés quiere que Gemini redacte un aviso con el horario de atención de la bodega, que está publicado en la puerta.
   → Pública, sin datos personales. **Puede ingresar.**
2. Rosa quiere ordenar la lista de pacientes del día con su especialidad.
   → Confidencial, con datos sensibles (salud). **No ingresa.** Regla: dato sensible (Ley 19.628 y Ley 21.719).
3. Camila quiere mejorar su propio CV, con su nombre, RUN y dirección.
   → Datos personales propios. **Solo sin RUN ni dirección**: los datos de contacto los agrega ella al final.
4. Andrés quiere resumir el reporte de stock de la semana, sin nombres de clientes.
   → Interna, sin datos personales. **Solo sin detalles que identifiquen a la empresa**, o en una herramienta autorizada.
5. Rosa quiere redactar un correo a una compañera sobre su licencia médica.
   → Dato sensible de un tercero. **No ingresa.** Escribe ella el correo, o pide una plantilla general.
6. Andrés quiere comparar los sueldos del equipo para proponer un bono.
   → Confidencial, con datos personales. **No ingresa.** Regla: remuneraciones son confidenciales (INCIBE).
:::

:::comprueba
Una persona quiere pegar en un asistente gratuito la planilla de remuneraciones de su equipo «solo para sacar promedios». ¿Qué debería
hacer?
- a) Pegarla: solo quiere promedios
- b) Pegarla, pero borrar después la conversación
- **c) No pegarla; calcular los promedios en su planilla o pedir al asistente solo la fórmula**
Retroalimentación: Las remuneraciones son información confidencial con datos personales. El asistente puede darte la fórmula sin ver los
datos.
:::

### P15 · Anonimizar y no pegar datos de terceros
cubre: S4, C2
fuentes: F-M3-13, F-M3-15
bloque: Texto + comparación antes/después

Muchas veces no necesitas los datos reales para que la IA te ayude. **Anonimizar** es quitar o cambiar los datos de modo que ya no se
pueda saber a quién se refieren. Técnicas simples:

- **Quita** nombres, RUN, teléfonos, correos y direcciones.
- **Reemplaza** por roles o códigos: «Cliente A», «Paciente 1», «Trabajador del turno».
- **Generaliza:** «una persona de unos 60 años» en vez de la fecha de nacimiento; «una comuna de Santiago» en vez de la dirección.
- **Agrega:** trabaja con totales o promedios en vez de casos individuales.
- **Usa datos inventados** que tengan la misma forma que los reales.

**Antes:** «Redacta un correo para Juana Pérez, RUN 12.345.678-9, que faltó a su hora de cardiología del 3 de mayo».
**Después:** «Redacta un correo cordial para un paciente que faltó a su hora. Deja espacios para el nombre y la fecha».

Cuidado con la **reidentificación**. NIST advierte que un modelo puede inferir datos de una persona combinando información dispersa.
Si quitas el nombre pero dejas el cargo, el turno y la sucursal, alguien puede saber de quién hablas. Por eso la Ley 21.719 habla de
personas identificables **directa o indirectamente**.

:::error «Si son datos de otra persona pero no los publico, no hay problema»
Pegar datos de un tercero en una herramienta ya es entregarlos a otra organización. La regla práctica es no pegar datos de terceros, y
cuando la tarea lo exige, anonimizar antes.
:::

### P16 · Ajusta la configuración de privacidad
cubre: S4
fuentes: F-H-15, F-M3-20, F-H-04, F-H-30, F-H-24, F-H-18, F-H-45
bloque: Texto + pestañas (tabs) por herramienta

Algunos proveedores **usan tus conversaciones para entrenar sus modelos por defecto**, y en varios casos ese uso **se puede desactivar**.
Revísalo en las herramientas que usas. Esto es lo que dicen los proveedores al 24 de octubre de 2026:

| Herramienta | Qué pasa por defecto | Qué puedes hacer |
|---|---|---|
| **Gemini** | Con el ajuste de actividad encendido, se usa para mejorar los servicios y revisores humanos pueden leer conversaciones | Apagar el ajuste de actividad (aparece como «Guardar actividad» o «Conservar la actividad») o usar chats temporales |
| **ChatGPT** | En el plan gratuito, el uso para entrenar viene activado | Apagar «Improve the model for everyone» en Configuración > Controles de datos, o usar el chat temporal |
| **Perplexity** | El ajuste «AI data retention» viene activado | Apagarlo en la configuración de la cuenta, en Preferences |
| **Claude** | El entrenamiento es una opción que se puede excluir | Apagar «Ayudar a mejorar nuestros modelos de IA» en Configuración > Privacidad |
| **Copilot** (app nueva) | No usa tus consultas ni tus archivos para entrenar sus modelos básicos | Nada que apagar para el entrenamiento; la regla de P13 sigue valiendo |
| **Gemini Notebook** | Con cuenta personal, no entrena con tus datos, salvo que envíes comentarios | Evitar enviar comentarios con información laboral |

Tres advertencias de los mismos proveedores:
- Aunque apagues la actividad, Google **guarda las conversaciones por un tiempo** para responder y por seguridad.
- En ChatGPT, si das un **pulgar arriba o abajo**, esa conversación sí puede usarse para entrenar.
- En Claude y en Perplexity, apagar el ajuste **no retira** lo que ya se usó antes.

:::clave
Configurar la privacidad **reduce** el riesgo, pero no lo elimina. La regla de P13 sigue valiendo: lo confidencial no se pega, aunque
el entrenamiento esté apagado.
:::

### P17 · Responsabilidad, ética y confidencialidad
cubre: A1, A2
fuentes: F-M3-14, F-M3-15, F-M3-17, F-H-35, F-H-26, F-H-27
bloque: Texto + escenario

Proteger la información no es solo cumplir una regla. Es una forma de **responsabilidad** con las personas que confían sus datos a tu
organización: clientes, pacientes, compañeros.

**Responsabilidad y ética** significa usar los datos de otras personas **solo para los fines que ellas o la ley autorizaron**, como
recomiendan los lineamientos del Estado de acuerdo con la Ley 19.628. Usar la planilla de clientes para «probar» una herramienta es un
fin distinto del que tuvo esa información.

**Confidencialidad** significa guardar reserva sobre lo que conoces por tu trabajo. Es una obligación legal: la Ley 19.628 obliga a
guardar secreto a quien trabaja con datos personales, y la Ley 21.719 mantiene ese deber, incluso después de terminar la relación.

También es responsable **elegir bien la herramienta**. Algunas no se recomiendan para información laboral:
- **DeepSeek:** su política indica que los datos personales se guardan en la República Popular China y se usan, entre otros fines, para
  entrenar sus modelos.
- **Meta AI** (dentro de WhatsApp, Instagram o Messenger): Meta indica que entrena con lo que se comparte en sus productos, incluidas las
  interacciones con sus funciones de IA.

:::ejemplo Andrés recibe un pedido
Un compañero le pide a Andrés que pase la lista de clientes por un asistente «para sacar los correos más rápido». Andrés le explica que
esa lista es confidencial y tiene datos personales, y le propone otra salida: pedirle al asistente solo los pasos para hacerlo en la
planilla de la empresa.
:::

### P18 · Cierre: tu protocolo de uso seguro
cubre: C1, C2, H1, S1, S4
fuentes: F-M3-19, F-M3-15, F-M3-17, F-M3-20
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema evaluaste críticamente los resultados de la IA con tres preguntas: **sesgos, trazabilidad y límites**. Luego miraste lo que
tú entregas: aprendiste a reconocer **datos personales, datos sensibles e información confidencial**, conociste lo que piden la
**Ley 19.628** y la **Ley 21.719**, y el ejemplo de política interna del Estado. Con eso armaste un método para **clasificar y decidir**,
y practicaste **anonimizar** y **configurar la privacidad**.

:::actividad Tu protocolo de uso seguro
Escribe en tu bitácora:
1. **Tu clasificación:** tres tipos de información de tu cargo (o del cargo al que postulas), cada uno clasificado como público,
   interno o confidencial, y con o sin datos personales o sensibles.
2. **Tu decisión fundamentada:** para uno de ellos, decide si puede ingresar a una herramienta de IA. Nombra la regla que aplicaste
   (la clasificación, la ley o la política interna).
3. **Tu práctica segura:** propone una práctica concreta para ese caso, por ejemplo, anonimizar con roles, pedir solo una plantilla o
   apagar el uso de los chats para entrenar.
4. **Tu revisión del Hito 3:** confirma que tu informe no incluye datos personales ni información confidencial.
5. **Tu evaluación crítica:** elige una respuesta de IA que usaste en tu informe, aplícale las tres preguntas de P02 (sesgos,
   trazabilidad y límites) y anota qué encontraste y qué ajustaste.
:::

:::clave
Una decisión con fundamento tiene tres partes: **qué información es, qué regla aplica y qué haces en consecuencia**.
:::

### Ideas clave

1. Evaluar críticamente un resultado de IA es revisar sus sesgos, su trazabilidad y sus límites, no solo si un dato es correcto.
2. La IA puede rendir distinto según el grupo o el idioma; lo que no puedes rastrear hasta su origen no se presenta como hecho.
3. Dato personal es cualquier información que identifica o permite identificar a una persona, directa o indirectamente; los datos
   sensibles, como los de salud, exigen más cuidado.
4. La información confidencial también incluye la de una organización: clientes, precios, ventas o remuneraciones.
5. La Ley 19.628 está vigente; la Ley 21.719, publicada el 13-12-2024, rige según su texto desde el 01-12-2026, y hay un proyecto en
   trámite que propone postergarla.
6. Para decidir qué ingresa a una herramienta de IA: clasifica por acceso (pública, interna, confidencial) y por tipo de dato (personal,
   sensible); lo confidencial y lo sensible no ingresan a una herramienta no autorizada.
7. Las prácticas seguras son anonimizar, no pegar datos de terceros, apagar el uso de los chats para entrenar y seguir la política de tu
   organización.

### Glosario

- **Evaluación crítica**: revisión de un resultado de IA que considera sus sesgos, su trazabilidad y sus límites.
- **Trazabilidad**: posibilidad de seguir una afirmación hasta la fuente de donde salió.
- **Dato personal**: información que identifica o permite identificar, directa o indirectamente, a una persona natural.
- **Dato sensible**: dato personal sobre aspectos como la salud, el origen étnico, las creencias, la afiliación sindical o la vida
  sexual, que la ley protege con más fuerza.
- **Persona natural**: ser humano, a diferencia de una persona jurídica como una empresa.
- **Titular de datos**: persona a quien se refieren los datos personales.
- **Consentimiento**: autorización expresa e informada que da el titular para que se usen sus datos.
- **Deber de secreto**: obligación de guardar reserva sobre los datos personales que se conocen por el trabajo, incluso después de dejar
  esa función.
- **Información confidencial**: información a la que solo pueden acceder personas concretas, como remuneraciones o contratos.
- **Información interna**: información a la que solo accede el personal de una organización.
- **Política interna**: reglas propias de una organización sobre qué herramientas se usan y qué información puede salir.
- **Anonimizar**: quitar o cambiar los datos de modo que ya no se pueda saber a quién se refieren.
- **Reidentificación**: volver a saber a quién se refiere un dato anonimizado, combinándolo con otra información.

### Conexión con el proyecto

Tu protocolo de uso seguro (P18) se aplica primero a tu propio **Hito 3: investigación validada con fuentes (informe breve)**: revisa que
el informe no incluya datos personales ni información confidencial. Tu método para clasificar y decidir (P13) y tus prácticas seguras
(P15 y P16) son las herramientas de los casos del módulo: el **caso M3-C1**, sobre un informe con referencias inexistentes en un trabajo
hecho con apoyo de IA (P05), y el **caso M3-C2**, sobre archivos con datos personales subidos a sitios públicos de IA (P06). En ellos analizarás incidentes reales y qué
práctica los habría evitado.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M3.md`, `investigacion/HERRAMIENTAS-1.md` y, para los casos reales,
`investigacion/casos/M3-C1.md` y `investigacion/casos/M3-C2.md` (consultadas el 24-10-2026).

- F-M3-01 · Perplexity (s. f.). How does Perplexity work? https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- F-M3-02 · Google (s. f.). Más información sobre Gemini Notebook (Ayuda de NotebookLM). https://support.google.com/notebooklm/answer/16164461?hl=es-419
- F-M3-13 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M3-14 · Chile, Ministerio Secretaría General de la Presidencia (1999). Ley 19.628, sobre Protección de la Vida Privada. https://www.bcn.cl/leychile/navegar?idNorma=141599
- F-M3-15 · Chile, Ministerio Secretaría General de la Presidencia (2024). Ley 21.719, que regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- F-M3-16 · Senado de Chile (2026). Tramitación del boletín 18623-07: proyecto que modifica la Ley 21.719. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- F-M3-17 · Chile, Ministerio de Ciencia, Tecnología, Conocimiento e Innovación y Ministerio Secretaría General de la Presidencia (2023). Oficio Circular N.° 711: lineamientos para el uso de herramientas de inteligencia artificial en el sector público. https://minciencia.gob.cl/uploads/filer_public/ae/9a/ae9a7ce7-807b-4781-9ac3-9b253bfbe735/of_n711_2023_dis_lin_ia_minciencia.pdf
- F-M3-18 · Senado de Chile (2026). Tramitación del boletín 16821-19: regula los sistemas de inteligencia artificial. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=16821
- F-M3-19 · INCIBE (2018). Para proteger la información de tu empresa, primero clasifícala. https://www.incibe.es/empresas/blog/proteger-informacion-tu-empresa-primero-clasificala
- F-M3-20 · Google (2026). Centro de privacidad de Apps con Gemini. https://support.google.com/gemini/answer/13594961?hl=es-419
- F-M3C1-02 · Deloitte para el DEWR (26-09-2025). Targeted Compliance Framework. Final Report. https://www.dewr.gov.au/download/17099/targeted-compliance-framework-assurance-review-final-report/42052/targeted-compliance-framework-independent-review-final-report/pdf
- F-M3C1-03 · DEWR (03-10-2025). Secretary statement on progress under the Targeted Compliance Framework Integrity Assurance program. https://www.dewr.gov.au/assuring-integrity-targeted-compliance-framework/announcements/statement-secretary-progress-under-targeted-compliance-framework-integrity-assurance-program
- F-M3C1-04 · Senado de Australia, Finance and Public Administration Legislation Committee (08-10-2025). Estimates, Hansard oficial. https://parlinfo.aph.gov.au/parlInfo/download/committees/estimate/28993/toc_pdf/Finance%20and%20Public%20Administration%20Legislation%20Committee_2025_10_08_Official.pdf;fileType=application%2Fpdf
- F-M3C1-06 · Associated Press (07-10-2025). Deloitte to partially refund Australian government for report with apparent AI-generated errors. https://www.news4jax.com/business/2025/10/07/deloitte-to-partially-refund-australian-government-for-report-with-apparent-ai-generated-errors/
- F-M3C2-01 · Gemeente Eindhoven (18-12-2025). Raadsbrief «Datalek gemeente Eindhoven door gebruik openbare AI-diensten». https://raadsinformatie.eindhoven.nl/document/16415812/1?connection_type=17&connection_id=12780262
- F-M3C2-02 · Hooghiemstra & Partners para la Gemeente Eindhoven (09-12-2025). Advies over onderzoeksbevindingen gebruik van generatieve AI binnen de gemeente Eindhoven. https://raadsinformatie.eindhoven.nl/document/16415814/1?connection_type=16&connection_id=1118032
- F-H-04 · OpenAI (2026). Data controls in ChatGPT. https://help.openai.com/en/articles/7730893-data-controls-faq
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-18 · Microsoft (2026). Microsoft Copilot para personas: su historial de actividad. https://support.microsoft.com/es-es/privacy/microsoft-copilot/activity-history
- F-H-24 · Anthropic (2026). ¿Cómo cambio mi configuración de privacidad de mejora del modelo? https://privacy.claude.com/es/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings
- F-H-26 · Meta (2024). Meta AI es ahora multilingüe, más creativa e inteligente. https://about.fb.com/ltam/news/2024/07/meta-ai-es-ahora-multilingue-mas-creativa-e-inteligente/
- F-H-27 · Meta (s. f.). Cómo usa Meta la información para los modelos y las funciones de IA generativa. https://www.facebook.com/privacy/genai/
- F-H-30 · Perplexity (s. f.). Data Collection at Perplexity. https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
- F-H-35 · DeepSeek (2026). DeepSeek Privacy Policy. https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html
- F-H-45 · Google (s. f.). Información sobre Gemini Notebook. https://support.google.com/gemininotebook/answer/16164461?hl=es

**Revisar el estado del boletín 18623-07 antes de publicar.** P11, P07, P08 y las Ideas clave describen la vigencia de la Ley 21.719 al
24-10-2026. Si el proyecto se aprueba y publica, hay que cambiar la fecha de vigencia en esas pantallas.

Recomendaciones del curso, sin fuente: las tres preguntas de evaluación crítica (P02), que ordenan riesgos de NIST; la tabla de niveles
de trazabilidad (P04) y la regla «lo que no puedes rastrear no se presenta como hecho»; la tabla de decisión de P13, que cruza la
clasificación de INCIBE con las definiciones de la ley y la recomendación del Oficio 711; elegir la casilla más estricta en caso de
duda; las técnicas de anonimización de P15; las respuestas del caso de P14, y los consejos para quien trabaja o busca empleo de P12. Los
ejemplos de datos identificables de P07 y los escenarios de Camila, Andrés y Rosa son ficticios; los casos reales de P05 y P06 se
verificaron en documentos oficiales (lo que dice la prensa va atribuido). Los nombres de los ajustes de P16
cambian con la versión de cada aplicación: comprobarlos en el celular antes de publicar. Este contenido es orientación general, no
asesoría legal.


---

# Módulo 4 · Contenido visual, sonoro y audiovisual

**Competencia:** Producir contenido visual, sonoro y audiovisual con IA generativa, respetando licencias, atribución y criterios éticos, para piezas de comunicación laboral.


## M4-AE1 · Ecosistema multimedia con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M4-06
bloque: Texto + lista con viñetas

En este módulo pasas del texto a las imágenes, el audio y el video. Hay muchas herramientas de IA que producen piezas visuales y
sonoras, y cada una pone sus propias reglas: qué puedes hacer con lo que generas, si puedes usarlo en un trabajo y qué tienes que
declarar. Antes de crear, conviene saber elegir.

**Aprendizaje esperado:** Seleccionar herramientas de IA para contenido multimedia según el tipo de pieza, sus licencias y sus
riesgos de uso.

Al terminar, deberías poder:
- comparar herramientas según el tipo de pieza que necesitas;
- interpretar las licencias y las condiciones de uso de la herramienta que elijas.

Este tema es un **análisis comparativo**. Lo harás con un caso que te acompañará en todas las pantallas. **Rosa**, la recepcionista
del centro médico que conociste en el módulo 1, necesita tres piezas:
1. un **afiche** para la sala de espera, que recuerde llegar diez minutos antes de la hora;
2. un **mensaje grabado** con el horario de atención, para la línea telefónica;
3. un **video corto** para la pantalla de la sala de espera.

Rosa no sabe por dónde empezar. Compararás con ella herramientas reales y sus condiciones de uso reales, tal como estaban cuando se
preparó este curso. Los planes gratuitos cambian a menudo, así que la última palabra la tiene siempre la página de cada herramienta
el día que la uses.

:::clave
Lo que verás sobre leyes y licencias es orientación general para trabajar con cuidado. No es asesoría legal. Si una pieza tendrá un
uso comercial importante o tienes dudas sobre derechos, consulta a una persona especialista.
:::

### P02 · Un mismo método para imagen, audio y video
cubre: S1, C1
fuentes: F-M4-06, F-M4-04
bloque: Texto + tabla

La Organización Mundial de la Propiedad Intelectual (OMPI) describe la IA generativa como la que crea texto, código, imágenes,
audio, sonido y video a partir de una instrucción. Por eso lo que aprendiste sobre prompts en el módulo 1 te sirve también aquí:
describir bien lo que quieres, revisar el resultado e iterar.

Lo que cambia es el **tipo de pieza**, y eso importa por dos razones:
1. **Define qué herramienta necesitas.** No es lo mismo una ilustración que una locución o un clip.
2. **Define qué tipo de obra produces o podrías afectar.** La Ley 17.336 de Propiedad Intelectual protege por separado, entre
   otras, las fotografías, las ilustraciones, las composiciones musicales, los guiones, las obras cinematográficas y los videogramas.

| Tipo de pieza | Ejemplo laboral | Obras protegidas con que se relaciona |
|---|---|---|
| Imagen | Afiche, ilustración para una presentación | Fotografías, ilustraciones |
| Audio | Locución, pista de fondo | Composiciones musicales |
| Video | Clip para una pantalla o para redes | Guiones, obras cinematográficas, videogramas |

Si en tu pieza usas una foto, una canción o un video de otra persona, entras en el terreno de esas obras. Y si le pides a una
herramienta que imite una obra conocida, también.

:::ejemplo Tres piezas, tres familias de herramientas
Rosa anota sus tres piezas en una tabla: el afiche es una imagen, el mensaje telefónico es audio y el video de la sala de espera
combina imagen, voz y música. Ya sabe que no le bastará una sola herramienta y que cada pieza tendrá sus propias reglas.
:::

### P03 · Panorama: herramientas de imagen
cubre: S1, H1, C1
fuentes: F-H-56, F-H-59, F-H-50, F-H-54, F-H-68, F-H-65, F-H-70, F-H-71, F-H-72, F-H-74
bloque: Tabla interactiva o pestañas (tabs) por herramienta

Para crear imágenes con IA hay varias opciones con plan gratuito. Esta es una selección para comparar:

| Herramienta | Qué ofrece sin pagar | Para tener en cuenta |
|---|---|---|
| **Gemini** (Nano Banana 2) | Genera y edita imágenes en la misma app que usas en el curso | Límite diario sin cifra publicada; descarga en 1K. Generar exige 13 años; editar, 18 |
| **ChatGPT Images** | Crea y edita imágenes en la web y en la app | «Creación limitada» en el plan gratis. En el celular deja editar una zona y cambiar la proporción |
| **Canva** (Crear imagen con IA) | Genera y, además, compone la pieza con texto | Hasta 20 usos de IA al mes, compartidos entre todas sus herramientas |
| **Microsoft Designer** | Genera y diseña, con app para iOS y Android | Puede pedir suscripción a quien crea con frecuencia |
| **Adobe Firefly** | Generaciones diarias gratis con algunos modelos | La cifra no se publica y puede cambiar |
| **Ideogram** | Créditos semanales para cuentas gratuitas elegibles | No muestra un plan gratuito fijo |
| **Leonardo.Ai** | 150 tokens al día, solo con el modelo «Auto» | Las creaciones del plan gratis son públicas |

Gemini es el asistente principal del curso: usa tu cuenta de Google y no necesitas instalar nada más. Para generar imágenes tienes
que iniciar sesión. Los límites de la app se renuevan cada cierto tiempo, hasta un tope semanal.

Fíjate en que la tabla no dice cuál es «mejor». Para elegir faltan dos datos que verás en las próximas pantallas: **qué licencia te
dan sobre lo que generas** y **qué riesgos trae** cada una.

:::error «Elijo la que hace las imágenes más bonitas»
La calidad visual es solo un criterio. Una herramienta puede dar imágenes muy buenas y, al mismo tiempo, no permitir usarlas en un
trabajo o publicarlas a la vista de todos.
:::

### P04 · Panorama: herramientas de audio y video
cubre: S1, H1, C1
fuentes: F-H-75, F-H-78, F-H-68, F-H-85, F-H-79, F-H-82, F-H-63, F-H-64, F-H-87, F-H-88, F-H-90, F-H-53
bloque: Tabla interactiva o pestañas (tabs) por tipo

En audio y video el panorama cambia rápido. Esta es la situación de los planes gratuitos al preparar el curso:

| Herramienta | Para qué sirve | Plan gratuito |
|---|---|---|
| **ElevenLabs** | Texto a voz, efectos de sonido, diseño de voz y música | 10.000 créditos al mes. La app tiene texto a voz y biblioteca de voces; la música (Eleven Music) está solo en la web |
| **Canva** | Voz con IA y generador de música | Dentro de los 20 usos de IA al mes |
| **CapCut** | Texto a voz y edición de video | Texto a voz gratis, con más de 200 voces y español, según CapCut |
| **Suno** | Canciones generadas | 50 créditos al día, pero **sin descargas** |
| **Udio** | Música generada | **Desactivó las descargas** de audio y video |
| **Google Flow** | Clips de video generados (Veo 3.1) | 50 créditos diarios. Un clip de hasta 8 segundos con Veo 3.1 Lite gasta 10 |
| **Clipchamp** | Edición de video | Exporta en 1080p sin marca de agua, pero se usa en computador |
| **Runway** | Video generado | 125 créditos una sola vez; todos los videos gratis llevan marca de agua |
| **Sora** (OpenAI) | Video generado | **Retirado** en 2026 |

Dos lecciones salen de esta tabla. Primero, **«gratis» no siempre significa «utilizable»**: si una herramienta no te deja
descargar, no puedes llevar la pista a tu video. Segundo, para un clip casi siempre combinarás varias herramientas: una para la voz,
otra para la música, otra para las imágenes y una más para montar.

:::comprueba
Rosa quiere una pista musical para su video y la va a montar en el celular. ¿Qué herramienta le sirve menos con su plan gratuito?
- a) Canva, dentro de sus usos de IA del mes
- **b) Suno, porque el plan gratuito no permite descargar las canciones**
- c) Eleven Music, desde la web
Retroalimentación: Sin descarga, Rosa no puede llevar la pista al editor. Suno gratis sirve para escuchar y compartir por enlace,
no para montar un video.
:::

### P05 · Licencias Creative Commons
cubre: S2, C2
fuentes: F-M4-01
bloque: Tarjetas (flashcards) con los cuatro elementos

Muchas fotos, ilustraciones y pistas que encuentras en internet se comparten con una licencia **Creative Commons** (CC). Es una
forma estándar de decir «puedes usar mi obra, con estas condiciones». Las condiciones se arman con **cuatro elementos**:

| Elemento | Qué significa |
|---|---|
| **BY** (atribución) | Debes dar crédito a quien creó la obra |
| **SA** (compartir igual) | Si la adaptas, compartes tu versión con la misma licencia |
| **NC** (no comercial) | Solo puedes usarla con fines no comerciales |
| **ND** (sin derivadas) | No puedes modificarla ni hacer obras a partir de ella |

Con esos elementos se forman **seis licencias**. De la más a la menos permisiva:
1. CC BY
2. CC BY-SA
3. CC BY-ND
4. CC BY-NC
5. CC BY-NC-SA
6. CC BY-NC-ND

Todas incluyen BY: siempre hay que dar crédito. Aparte está **CC0**, que no es una de esas licencias: es una herramienta para
dedicar una obra al dominio público.

Las licencias CC están traducidas a más de 45 idiomas, también al español. Leerlas se aprende rápido: cada sigla es una condición.

:::comprueba
Una pista musical tiene licencia CC BY-NC. ¿Puedes usarla en un video para vender los productos de una tienda?
- a) Sí, siempre que des crédito
- **b) No, porque NC permite solo usos no comerciales**
- c) Sí, siempre que no la modifiques
Retroalimentación: BY pide dar crédito, pero NC limita el uso a fines no comerciales. Un video para vender es un uso comercial.
:::

### P06 · Leer el resumen de una licencia
cubre: S2, S3, C2
fuentes: F-M4-02, F-M4-01
bloque: Texto + actividad con preguntas guiadas

Cada licencia CC tiene un **resumen en español** que dice qué permite y con qué condiciones. Mira, por ejemplo, el de la licencia
**Atribución-NoComercial-CompartirIgual 4.0** (CC BY-NC-SA 4.0).

**Te permite:**
- **compartir:** copiar y redistribuir la obra;
- **adaptar:** modificarla y crear a partir de ella.

**Con estas condiciones:**
- **atribución:** dar crédito, enlazar la licencia e indicar si hiciste cambios, sin sugerir que quien creó la obra respalda tu uso;
- **no comercial;**
- **compartir igual:** tu versión va con la misma licencia;
- **sin restricciones adicionales:** no puedes agregar condiciones que impidan a otros lo que la licencia permite.

Los avisos del mismo resumen agregan tres cosas importantes:
1. La licencia **no da garantías**.
2. Los **derechos de imagen, de privacidad o morales** pueden requerir permisos aparte. Si en la foto aparece una persona, la
   licencia de la foto no reemplaza su permiso.
3. El resumen **no reemplaza el texto legal** de la licencia.

:::actividad Interpreta la licencia
Rosa encuentra una ilustración de una sala de espera con licencia CC BY-NC-SA 4.0. Responde:
1. ¿Puede recortarla y agregarle un texto? → Sí: la licencia permite adaptar.
2. ¿Qué debe incluir el crédito? → Autoría, enlace a la obra, enlace a la licencia y aviso de que la modificó.
3. ¿Con qué licencia queda su afiche? → La misma: CC BY-NC-SA 4.0.
4. ¿Qué la haría dudar? → La condición NC. Lo verás en el análisis del caso (P13).
:::

### P07 · Términos de uso: las reglas de lo que generas
cubre: S2, C2
fuentes: F-M4-06, F-M4-07, F-H-51, F-H-67, F-H-66, F-H-73
bloque: Texto + acordeón (accordion) por herramienta

Las licencias CC sirven para las obras que otras personas comparten. Para lo que **genera una herramienta de IA**, la fuente de los
permisos son sus **términos de uso**. La OMPI recomienda revisarlos para saber de quién es lo que se genera.

Al leerlos, busca cuatro cosas: **quién es dueño** del resultado, **qué usos permite**, **qué prohíbe** y **qué garantías da**.
Algunos ejemplos reales:

- **Google:** declara que no reclama la propiedad del contenido original que generan sus servicios. Prohíbe hacer creer que una
  persona creó un contenido hecho con IA generativa y pide no confiar en sus servicios como asesoría profesional.
- **OpenAI:** la persona usuaria es dueña de los resultados. Advierte que pueden no ser únicos, porque otra persona puede recibir
  algo parecido.
- **Canva:** eres dueña o dueño de lo que generas, salvo el contenido de su biblioteca, que solo se licencia. Lo puedes usar para
  cualquier fin lícito, bajo tu propio riesgo.
- **Microsoft (Generador de imágenes de Bing):** no reclama la titularidad, pero recibe una licencia para usar lo que creas. No
  garantiza que no infrinja derechos de terceros y dice que el servicio se creó con fines de entretenimiento.
- **Ideogram:** no reclama la propiedad, pero otras personas pueden remezclar el contenido público.

Como ves, «ser dueño» no es lo único: también importa quién más puede usar lo que creas y quién responde si hay un problema.

:::error «Si la herramienta es gratis, puedo hacer lo que quiera con lo que genera»
Que no cobre no significa que no ponga condiciones. Cada herramienta fija en sus términos qué usos permite y cuáles prohíbe. Ese
texto manda, no la publicidad de la página.
:::

### P08 · Tabla comparativa: qué licencia te da el plan gratuito
cubre: S2, H1, C1, C2
fuentes: F-H-51, F-H-58, F-H-67, F-H-70, F-H-72, F-H-74, F-H-65, F-H-76, F-H-80, F-H-82, F-H-84, F-H-85, F-H-90
bloque: Tabla con semáforo

Esta tabla resume la licencia de lo que generas **con el plan gratuito**. El semáforo es un criterio del curso para piezas de
trabajo: verde, se puede usar con revisión normal; amarillo, con condiciones que hay que cumplir; rojo, no sirve para una pieza de
trabajo.

| Herramienta | Tipo | Licencia en el plan gratuito | Semáforo |
|---|---|---|---|
| ChatGPT Images | Imagen | Eres dueña o dueño del resultado; puede no ser único | Verde |
| Gemini | Imagen | Google no reclama su propiedad; no puedes hacerlo pasar por humano | Verde |
| Canva | Imagen, voz, música | Eres dueña o dueño, salvo el contenido de la biblioteca | Verde |
| Adobe Firefly | Imagen | Uso comercial permitido en funciones sin etiqueta beta | Verde |
| Ideogram | Imagen | Uso comercial permitido; imágenes públicas por defecto | Amarillo |
| Leonardo.Ai | Imagen | Licencia comercial no exclusiva; Leonardo puede usar y distribuir tus imágenes | Amarillo |
| ElevenLabs | Voz y música | No comercial; al publicar, «elevenlabs.io» o «11.ai» en el título, o «Eleven Music» si es música | Amarillo |
| CapCut | Edición, voz | Materiales con uso comercial solo si dicen «commercial use»; su texto a voz permite uso comercial, según su página | Amarillo |
| Runway | Video | Todos los videos gratis llevan marca de agua | Amarillo |
| Microsoft Designer | Imagen | Solo uso personal y no comercial | Rojo |
| Suno | Música | Personal y no comercial; sin descargas | Rojo |
| Udio | Música | Descargas desactivadas | Rojo |

:::clave
El semáforo depende del uso. Para una práctica personal del curso, Designer sirve. Para un afiche que pondrá una empresa, no.
:::

:::comprueba
Rosa quiere crear el afiche del centro médico con Microsoft Designer gratis. ¿Qué le dices?
- a) Puede usarlo, porque Designer es gratis
- **b) Mejor otra herramienta: la licencia de Designer es solo para uso personal y no comercial**
- c) Puede usarlo si no le agrega texto
Retroalimentación: Que la herramienta sea gratuita no cambia su licencia. Designer da una licencia personal y no comercial.
:::

### P09 · ¿De quién es lo que genera la IA?
cubre: S2, S4, A1
fuentes: F-M4-04, F-M4-06, F-M4-05
bloque: Texto + recuadro destacado

Que los términos digan que «eres dueño» del resultado no responde otra pregunta: **¿es una obra protegida por el derecho de autor?**
Esa pregunta está abierta, y conviene tratarla con cautela.

**En Chile**, la Ley 17.336 dice que el autor adquiere sus derechos por el solo hecho de crear la obra. Esos derechos son
**patrimoniales** (usarla y explotarla) y **morales** (por ejemplo, que se reconozca su autoría). La protección dura toda la vida del
autor y 70 años más. La ley define la obra individual como la producida por una **«persona natural»**.

**En el mundo**, la OMPI advierte que no está claro si lo generado por IA tiene protección ni quién sería el titular, y que la
respuesta cambia según el país.

**En Estados Unidos**, la oficina de derecho de autor concluyó en 2025 que las reglas actuales bastan para decidir caso a caso. Lo
generado puede protegerse, en todo o en parte, cuando una persona usa la IA como herramienta y determina los elementos expresivos.
En cambio, un prompt por sí solo, hoy, difícilmente basta para que haya autoría. Esa conclusión rige solo en ese país: sirve para
entender el debate, no como regla en Chile.

¿Qué significa para ti? Que tu **aporte humano** importa: elegir, corregir, componer, escribir el texto. Por eso conviene dejarlo
registrado, como verás en la ficha de uso ético (P14).

:::error «Escribí el prompt, así que la imagen es obra mía»
Con el estado actual del debate, un prompt solo difícilmente basta para que haya autoría. Lo que más cuenta es lo que tú decides y
modificas en la pieza.
:::

### P10 · Atribución: dar crédito bien
cubre: S3, A1
fuentes: F-M4-03, F-M4-02, F-M4-04, F-H-76
bloque: Texto + ejemplo comparativo (bueno y malo)

**Atribuir** es reconocer quién creó lo que usas. Creative Commons propone recordar cuatro datos con la sigla **TASL**:
- **T**ítulo de la obra;
- **A**utor o autora;
- **S** de *source*, la **fuente**: el enlace a la obra original;
- **L**icencia, con su enlace.

Si modificaste la obra, agrega qué cambiaste.

| Crédito | ¿Sirve? |
|---|---|
| «Imagen de internet» | No: no dice nada |
| «Foto: Creative Commons» | No: Creative Commons no es la autora; falta la fuente y la licencia |
| «"Sala de espera", de Daniela Soto (enlace), CC BY-NC-SA 4.0 (enlace). Recortada y con texto agregado.» | Sí: tiene los cuatro datos y los cambios |

(Daniela Soto es un nombre ficticio para el ejemplo.)

Respetar la autoría también es una obligación legal. En Chile, el derecho moral incluye que se reconozca la paternidad de la obra y
oponerse a modificaciones que no se autorizaron. La ley también permite citar fragmentos breves para criticar, enseñar o investigar,
si se mencionan la fuente, el título y el autor.

Algunas herramientas de IA piden su propia forma de crédito. ElevenLabs, en su plan gratuito, exige poner «elevenlabs.io» o «11.ai»
en el título de lo que publicas, o «Eleven Music» si es música.

:::actividad Corrige el crédito
Andrés puso en un afiche de la bodega: «Ícono: Creative Commons». Reescríbelo con la fórmula TASL. Usa datos inventados si no
tienes los reales y marca qué dato le faltaba.
:::

### P11 · Riesgos legales
cubre: S4
fuentes: F-M4-06, F-H-66, F-H-83, F-H-70
bloque: Texto + escenarios (tarjetas)

Usar IA para crear piezas trae riesgos legales que conviene reconocer antes de publicar. La OMPI menciona, entre otros:
- **infringir derechos de autor o marcas**, por ejemplo al pedir una imagen que copie un personaje o un logo conocido;
- **revelar datos personales o información confidencial** en las instrucciones o en la pieza;
- **producir ultrafalsos**: imágenes, audios o videos que hacen pasar por real algo que no ocurrió.

La OMPI agrega un punto que muchos no esperan: en muchos países **se puede infringir el derecho de autor aunque no haya
intención**. El riesgo no recae solo en quien desarrolla la herramienta: también en quien la usa.

Las herramientas lo dejan claro en sus términos. Microsoft no garantiza que lo creado con el Generador de imágenes de Bing no
infrinja derechos de terceros. CapCut no garantiza que el contenido generado sea legal o apropiado, y dice que la persona responde
por lo que crea.

Hay diferencias entre herramientas. Adobe informa que entrenó Firefly con contenido de Adobe Stock, con licencia abierta y de
dominio público. Por eso es una alternativa para quien necesita más tranquilidad en el uso comercial. Aun así, Adobe remite a
asesoría legal local para las preguntas de derechos de autor.

:::ejemplo El personaje famoso
Andrés quiere un afiche simpático y pide «un personaje igual al de una película animada famosa, con el logo de una marca de
zapatillas». Es justo lo que hay que evitar: usa obras y marcas de terceros. Cambia el pedido por «un personaje original, estilo
ilustración plana, con zapatos de seguridad sin marca».
:::

:::error «Si no lo hice a propósito, no hay problema»
La intención no siempre cuenta. Si la pieza copia una obra o una marca protegida, el problema existe igual, y también lo asume quien
la publica.
:::

### P12 · Riesgos reputacionales y dos casos de cambio
cubre: S4, A1, H1
fuentes: F-M4-06, F-M4-07, F-H-67, F-M4-14, F-H-52, F-H-53, F-H-82
bloque: Texto + línea de tiempo

Además del riesgo legal está el **riesgo reputacional**: lo que pasa con tu imagen o la de tu organización si una pieza sale mal.
- **Contenido discriminatorio o tendencioso.** La OMPI advierte que la IA generativa puede producirlo. Una pieza con estereotipos
  daña la confianza, aunque nadie lo haya buscado.
- **Ocultar que se usó IA.** Los términos de Google y de Canva prohíben hacer pasar por humano un contenido generado con IA.
- **Confiar en que el archivo «ya dice» que es sintético.** Algunas herramientas agregan marcas de procedencia, pero el NIST advierte
  que quien copia o edita un archivo puede alterar sus metadatos y que las redes sociales suelen borrarlos. OpenAI, por ejemplo,
  indica que esos datos se pierden con una captura de pantalla.

Hay un riesgo más, menos visible: **la herramienta puede cambiar o desaparecer**. Dos casos reales:
- **Sora**, el generador de video de OpenAI, retiró su web y su app el 26 de abril de 2026, y su API el 24 de septiembre de 2026.
- **Udio**, un generador de música, desactivó las descargas de audio, video y pistas separadas tras un acuerdo con Universal Music
  Group en octubre de 2025.

Quien tenía un proyecto basado solo en esas herramientas tuvo que rehacerlo. La recomendación del curso: guarda tus archivos y tus
registros, y revisa los términos de nuevo antes de cada proyecto.

:::comprueba
¿Qué lección deja el retiro de Sora en 2026?
- a) Que el video generado con IA ya no existe
- **b) Que una herramienta puede cambiar o desaparecer, y conviene guardar los archivos y tener alternativas**
- c) Que las herramientas gratuitas son siempre más estables
Retroalimentación: Hay otras herramientas de video, pero cualquiera puede cambiar sus planes o cerrar. Por eso se guardan los
archivos y los registros.
:::

### P13 · Análisis comparativo: el caso de Rosa
cubre: H1, C1, C2
fuentes: F-M4-06, F-H-58, F-H-67, F-H-68, F-H-76, F-H-63, F-H-84
bloque: Escenario + tabla para completar

Ya tienes los elementos para el análisis. La OMPI sugiere que, para comparar herramientas, no basta con ver qué producen. Hay que
revisar en sus términos **quién es dueño de lo generado, si guarda las instrucciones, con qué datos se entrenó y si ofrece garantías
o indemnizaciones**. También propone clasificarlas por nivel de riesgo: **permitidas, restringidas y prohibidas**. Y aconseja usar
IA cuando la titularidad no sea crítica, por ejemplo en usos internos o para generar ideas.

Rosa compara así sus tres piezas:

| Pieza | Herramienta posible | Qué revisa | Clasificación |
|---|---|---|---|
| Afiche | Gemini para la imagen y Canva para el texto | Google no reclama la propiedad; en Canva, la biblioteca solo se licencia | Permitida |
| Mensaje telefónico | Voz con IA de Canva | Lo generado es suyo; gasta usos del mes | Permitida |
| Mensaje telefónico | ElevenLabs gratis | Licencia no comercial | Restringida |
| Video | Flow para dos tomas y CapCut para montar | Créditos diarios; materiales de CapCut con marca «commercial use» | Restringida: revisar cada material |

Un criterio del curso para decidir: las piezas que usa una empresa con sus clientes, aunque no se vendan, pueden considerarse uso
comercial. Ante la duda, elige una herramienta que permita ese uso o pregunta a quien corresponda en la organización.

:::actividad Tu análisis
Elige una de las piezas de Rosa y compara dos herramientas con estos criterios: qué produce, plan gratuito, celular, licencia de lo
generado y un riesgo. Clasifica cada herramienta como permitida, restringida o prohibida, y justifica con una condición de uso que
hayas leído.
:::

### P14 · La ficha de uso ético
cubre: H2, A1
fuentes: F-M4-06, F-M4-03
bloque: Texto + plantilla descargable

Una **ficha de uso ético** es un registro breve que acompaña a la pieza. Recoge lo que la OMPI recomienda documentar al usar IA y los
créditos de lo que no es tuyo. La usarás en todo el módulo y en el Hito 4.

| Campo | Qué escribes |
|---|---|
| Pieza y uso | Qué es, para quién y dónde se verá |
| Herramientas y plan | Nombre, plan (gratuito o pagado) y fecha en que revisaste sus condiciones |
| Qué se generó con IA | La etiqueta: qué partes son sintéticas |
| Instrucciones | Los prompts principales que usaste |
| Aporte humano | Qué elegiste, corregiste o hiciste tú |
| Consentimientos y licencias | Permisos de personas que aparecen o cuya voz se usa, y licencias de materiales |
| Créditos | Materiales de terceros con la fórmula TASL |

:::ejemplo La ficha del afiche de Rosa
- **Pieza y uso:** afiche para la sala de espera del centro médico.
- **Herramientas y plan:** Gemini (imagen) y Canva Gratis (texto); condiciones revisadas el día de la creación.
- **Qué se generó con IA:** la ilustración de fondo.
- **Instrucciones:** «Ilustración plana de una sala de espera luminosa, con personas de distintas edades, colores verde y blanco,
  sin texto».
- **Aporte humano:** elegí una de cuatro variantes, recorté la imagen y escribí el mensaje.
- **Consentimientos y licencias:** no aparecen personas reales.
- **Créditos:** no hay material de terceros.
:::

:::clave
La ficha no es burocracia: es tu respaldo. Si alguien pregunta cómo se hizo la pieza, la respuesta ya está escrita.
:::

### P15 · Cierre: elige y justifica
cubre: C1, C2, H1, H2
fuentes: F-M4-06, F-M4-01, F-M4-03
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la herramienta se elige según el **tipo de pieza**, la **licencia** de lo que genera y sus **riesgos**.
Repasaste las licencias **Creative Commons** y sus cuatro elementos, aprendiste a leer los **términos de uso** de una herramienta y a
dar crédito con la fórmula **TASL**. Viste que la autoría de lo generado con IA es un tema abierto y que tu aporte humano conviene
dejarlo registrado.

:::actividad Tu pieza del Hito 4
En el Hito 4 harás una pieza visual, sonora o audiovisual que comunique la propuesta de tu proyecto. Prepárala así:
1. **Tipo de pieza:** ¿imagen, audio o video? ¿Para quién y dónde se verá?
2. **Dos herramientas:** compáralas con los criterios de P13 y elige una.
3. **Licencia:** escribe en dos líneas qué te permite y qué te prohíbe la herramienta elegida en su plan gratuito.
4. **Riesgo principal:** uno legal o reputacional, y cómo lo evitarás.
5. **Ficha:** abre tu ficha de uso ético y completa los campos que ya puedes llenar: pieza y uso, herramientas y plan (con la fecha
   en que revisaste sus condiciones) y las licencias de los materiales de terceros que piensas usar, con su crédito TASL.

Guarda tu respuesta. En los próximos temas producirás imágenes, audio y un clip, y completarás la ficha.
:::

:::error «La licencia la reviso al final, cuando la pieza esté lista»
Si la revisas al final, puedes tener que rehacer todo. Las condiciones se revisan antes de elegir la herramienta.
:::

### Ideas clave

1. La herramienta se elige según el tipo de pieza (imagen, audio o video), la licencia de lo que genera y sus riesgos de uso.
2. «Gratis» no siempre significa «utilizable»: algunas herramientas no permiten descargar, publicar o usar lo generado en un trabajo.
3. Las licencias Creative Commons combinan cuatro elementos (BY, SA, NC, ND) en seis licencias; CC0 dedica una obra al dominio
   público.
4. Para lo que genera la IA, los permisos están en los términos de uso de cada herramienta: quién es dueño, qué usos permite y qué
   prohíbe.
5. La autoría de lo generado con IA es un tema abierto: un prompt solo difícilmente basta, y el aporte humano conviene registrarlo.
6. Se da crédito con la fórmula TASL (título, autor, fuente y licencia) e indicando los cambios.
7. Los riesgos son legales (derechos de autor, marcas, datos, ultrafalsos) y reputacionales (estereotipos, ocultar el uso de IA), y
   las herramientas pueden cambiar o desaparecer.

### Glosario

- **Licencia**: permiso que da quien tiene los derechos de una obra para usarla con ciertas condiciones.
- **Creative Commons (CC)**: conjunto de licencias estándar para compartir obras indicando qué usos se permiten.
- **CC0**: herramienta para dedicar una obra al dominio público, sin condiciones de uso.
- **Términos de uso**: condiciones que fija una herramienta para usarla y para usar lo que genera.
- **Uso comercial**: uso de una obra o pieza con fines de lucro o para obtener una ventaja comercial.
- **Obra derivada**: obra nueva hecha a partir de otra, por ejemplo al modificarla o adaptarla.
- **Derecho de autor**: conjunto de derechos que la ley reconoce a quien crea una obra; incluye derechos patrimoniales y morales.
- **Derecho moral**: parte del derecho de autor que protege la autoría y la integridad de la obra.
- **Atribución**: reconocimiento de quién creó una obra que se usa.
- **TASL**: fórmula para atribuir: título, autor, fuente y licencia.
- **Ultrafalso**: imagen, audio o video sintético que hace pasar por real algo que no ocurrió.
- **Ficha de uso ético**: registro que acompaña una pieza y documenta herramientas, instrucciones, aporte humano, permisos y
  créditos.

### Conexión con el proyecto

Tu análisis de herramientas (P13) y el borrador de ficha de uso ético (P15) preparan el **Hito 4 del proyecto aplicado: pieza
multimedia que comunica la solución**, que se entrega con su ficha de uso ético. En el **caso M4-C3 · Licencias y datos de
entrenamiento** analizarás un litigio sobre el uso de imágenes para entrenar un modelo, y aplicarás los criterios de este tema a la
herramienta que elegiste para tu pieza.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M4.md` y `investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).
Los planes gratuitos cambian a menudo: revisar de nuevo antes de publicar.

- F-M4-01 · Creative Commons (s. f.). About CC Licenses. https://creativecommons.org/share-your-work/cclicenses/
- F-M4-02 · Creative Commons (s. f.). Atribución-NoComercial-CompartirIgual 4.0 Internacional (resumen de la licencia). https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
- F-M4-03 · Creative Commons (2024). Recommended practices for attribution. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- F-M4-04 · Congreso Nacional de Chile / BCN (1970). Ley 17.336 sobre Propiedad Intelectual. https://www.bcn.cl/leychile/navegar?idNorma=28933
- F-M4-05 · U.S. Copyright Office (2025). Copyright and Artificial Intelligence, Part 2: Copyrightability. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf
- F-M4-06 · OMPI (2024). IA generativa: cómo abordar la propiedad intelectual. https://www.wipo.int/edocs/pubdocs/es/wipo-pub-rn2024-8-es-generative-ai-navigating-intellectual-property.pdf
- F-M4-07 · Google (2026). Condiciones del Servicio de Google. https://policies.google.com/terms?hl=es-419
- F-M4-14 · NIST (2024). Reducing Risks Posed by Synthetic Content (NIST AI 100-4). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf
- F-H-50 · OpenAI (2026). Images in ChatGPT. https://help.openai.com/en/articles/11084440-images-in-chatgpt
- F-H-51 · OpenAI (2026). Condiciones de uso (resto del mundo). https://openai.com/es-ES/policies/row-terms-of-use/
- F-H-52 · OpenAI (2026). Provenance signals in OpenAI-generated content. https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- F-H-53 · OpenAI (2026). Qué debes saber sobre la interrupción de Sora. https://help.openai.com/es-es/articles/20001152-what-to-know-about-the-sora-discontinuation
- F-H-54 · OpenAI (s. f.). ChatGPT: Planes y precios. https://chatgpt.com/es-ES/pricing/
- F-H-56 · Google (s. f.). Generar imágenes con las aplicaciones de Gemini. https://support.google.com/gemini/answer/14286560?hl=es
- F-H-58 · Google (2026). Condiciones del Servicio de Google. https://policies.google.com/terms?hl=es-419
- F-H-59 · Google (s. f.). Suscripciones de Google AI (Gemini). https://gemini.google/subscriptions/
- F-H-63 · Google (s. f.). Gestionar tus créditos de Google Flow. https://support.google.com/flow/answer/16526234?hl=es
- F-H-64 · Google (s. f.). Modelos y funciones compatibles de Google Flow. https://support.google.com/flow/answer/16352836?hl=es
- F-H-65 · Microsoft (s. f.). Preguntas frecuentes sobre Microsoft Designer. https://support.microsoft.com/en-us/designer/frequently-asked-questions-about-microsoft-designer
- F-H-66 · Microsoft (2026). Generador de imágenes de Bing y Generador de vídeo de Bing: Términos de uso. https://www.bing.com/new/termsofuseimagecreator
- F-H-67 · Canva (2026). AI Product Terms. https://www.canva.com/policies/ai-product-terms/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/
- F-H-70 · Adobe (2026). Adobe Firefly FAQ. https://helpx.adobe.com/firefly/web/get-started/learn-the-basics/adobe-firefly-faq.html
- F-H-71 · Adobe (2026). Generative credits FAQ. https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html
- F-H-72 · Ideogram (s. f.). Pricing. https://ideogram.ai/pricing/
- F-H-73 · Ideogram (2024). Terms of Service. https://ideogram.ai/legal/tos
- F-H-74 · Leonardo.Ai (s. f.). Pricing. https://leonardo.ai/pricing
- F-H-75 · ElevenLabs (s. f.). Pricing. https://elevenlabs.io/pricing
- F-H-76 · ElevenLabs (s. f.). Can I publish the content I generate on the platform? https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- F-H-78 · ElevenLabs (s. f.). What features are available in the ElevenLabs mobile app? https://elevenlabs.io/docs/help-center/product/mobile-apps/eleven-labs-for-ios-and-android/what-features-are-available-in-the-eleven-labs-mobile-app
- F-H-79 · Suno (s. f.). Pricing. https://suno.com/pricing
- F-H-80 · Suno (s. f.). What rights do I have with the free plan? https://help.suno.com/en/articles/9601601
- F-H-82 · Udio (2026). Changes associated with the Universal Music Group partnership. https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership
- F-H-83 · CapCut (2026). Terms of Service. https://www.capcut.com/clause/terms-of-service
- F-H-84 · CapCut (2026). Materials License Agreement. https://www.capcut.com/clause/material-license-agreement
- F-H-85 · CapCut (s. f.). Text to Speech. https://www.capcut.com/tools/text-to-speech
- F-H-87 · Microsoft (s. f.). Clipchamp: precios. https://clipchamp.com/en/pricing/
- F-H-88 · Microsoft (s. f.). What is Clipchamp? https://support.microsoft.com/en-us/clipchamp/what-is-clipchamp
- F-H-90 · Runway (s. f.). Free plan details. https://help.runwayml.com/hc/en-us/articles/50404627334547-Free-plan-details


## M4-AE2 · Imágenes y gráficos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-56, F-H-50, F-H-69
bloque: Texto + lista con viñetas

En el tema anterior aprendiste a elegir herramientas según su licencia y sus riesgos. Ahora vas a usarlas: crearás una pieza gráfica
para una **campaña interna**, es decir, una comunicación dirigida a las personas de una organización, como un afiche para el diario
mural o una imagen para el grupo de mensajería del equipo.

**Aprendizaje esperado:** Producir imágenes y gráficos con IA para una campaña interna, aplicando criterios de diseño y uso ético.

Al terminar, deberías poder:
- producir piezas coherentes con el mensaje de una campaña;
- identificar y corregir sesgos o defectos visuales.

Este tema es un **laboratorio creativo**: termina con un producto. Trabajarás con dos herramientas gratuitas que funcionan en el
celular:
- **Gemini** (o ChatGPT, si prefieres) para generar la imagen;
- **Canva** para componer la pieza con su texto.

Te acompaña **Andrés**, el encargado de bodega. Su jefatura le pidió una campaña para que los pasillos estén siempre despejados: cajas
y pallets mal ubicados han provocado tropiezos. Andrés hará un afiche para el diario mural y una versión para el teléfono.

Si hoy no trabajas en una organización, elige una campaña interna para un cargo al que postulas. Por ejemplo, Camila podría preparar
una campaña de reciclaje para la oficina donde le gustaría trabajar. Te servirá como muestra de lo que sabes hacer.

:::clave
La IA genera la imagen, pero la pieza la diseñas tú: el mensaje, el texto, el orden y la revisión final son tu trabajo.
:::

### P02 · Antes de generar: el mensaje de la campaña
cubre: H1, C1
fuentes: F-M4-12, F-M4-09
bloque: Texto + tabla de ejemplo

Una imagen bonita no basta: tiene que **decir algo**. Antes de abrir una herramienta, define cuatro cosas. Es el mismo brief que
trabajaste en el módulo 2, adaptado a una pieza visual:

| Pregunta | Andrés |
|---|---|
| **Mensaje:** ¿qué tiene que entender la persona en tres segundos? | «Pasillo despejado, bodega segura» |
| **Público:** ¿quién la verá? | El equipo de bodega y despacho, de distintas edades |
| **Canal y formato:** ¿dónde se verá? | Diario mural (vertical, 3:4) y teléfono (vertical, 9:16) |
| **Tono:** ¿cómo tiene que sentirse? | Claro y positivo, sin dramatismo |

El **formato** se define con la **relación de aspecto**: la proporción entre el ancho y el alto. Las guías de generación de imágenes
trabajan con algunas comunes: 1:1 (cuadrada), 4:3 y 3:4, 16:9 (horizontal, como una pantalla) y 9:16 (vertical, como un teléfono).

Con el mensaje claro, sabrás qué tiene que mostrar la imagen y qué no. En una pieza con jerarquía visual, el mensaje principal es
lo primero que se ve. Lo verás en P08.

:::actividad Tu brief visual
Escribe el mensaje, el público, el canal con su formato y el tono de tu campaña interna. El mensaje debe caber en una frase de no más
de seis palabras: la usarás como título de la pieza.
:::

:::error «Primero genero imágenes y después veo qué digo»
Sin mensaje, generas imágenes al azar y gastas tus usos del día. El mensaje decide qué imagen pedir.
:::

### P03 · Anatomía de un prompt visual
cubre: S1
fuentes: F-M4-12
bloque: Texto + imagen con las partes señaladas

Un **prompt visual** describe la imagen que quieres. Las guías de Google proponen armarlo con tres partes:

1. **Sujeto:** qué o quién aparece. «Una trabajadora de bodega empujando un carro».
2. **Contexto y fondo:** dónde está y qué la rodea. «En un pasillo amplio y despejado, con estantes ordenados a los lados».
3. **Estilo:** cómo se ve. Puede ser general, como «ilustración» o «fotografía», o más específico, como «ilustración plana con
   colores sólidos».

La recomendación es **partir de una idea central** y agregar detalles en cada intento, en vez de escribir todo de una vez.

| Antes | Después |
|---|---|
| «Una bodega» | «Ilustración plana de una trabajadora de bodega empujando un carro por un pasillo amplio y despejado, con estantes ordenados a los lados, colores azul y amarillo» |

El primer prompt deja todo al azar: puede salir una bodega vacía, desordenada o de otra época. El segundo dice qué se ve, dónde y
cómo.

:::comprueba
En el prompt «fotografía de un mesón de recepción ordenado, con una planta y luz natural», ¿cuál es el estilo?
- a) Mesón de recepción
- **b) Fotografía**
- c) Una planta y luz natural
Retroalimentación: El sujeto es el mesón de recepción; la planta y la luz son parte del contexto y la iluminación. «Fotografía» es
el estilo.
:::

### P04 · Composición, luz y formato
cubre: S1, A1
fuentes: F-M4-12
bloque: Tabla + galería de variantes

Con las tres partes ya tienes una imagen. Para acercarla a lo que buscas, agrega **modificadores**. Son palabras que controlan la
composición, la luz y el formato:

| Modificador | Qué controla | Ejemplos para tu prompt |
|---|---|---|
| **Cercanía y encuadre** | Qué tan cerca está el sujeto | «primer plano», «plano general» |
| **Posición de la cámara** | Desde dónde se mira | «vista desde arriba», «a la altura de los ojos» |
| **Iluminación** | El ambiente | «luz natural», «luz cálida», «luz fría», «luz dramática» |
| **Lente** | El efecto de la toma, en fotografía | «gran angular», «fondo desenfocado» |
| **Relación de aspecto** | El formato | «vertical 3:4», «horizontal 16:9» |

Cada decisión cambia el mensaje. Un plano general muestra el pasillo completo y deja ver que está despejado. Un primer plano de un pie
tropezando con una caja pone el foco en el peligro. Una luz cálida da un tono amable; una luz dramática, uno de alerta.

:::ejemplo El prompt completo de Andrés
«Ilustración plana de una trabajadora de bodega empujando un carro por un pasillo amplio y despejado, estantes ordenados a los lados,
plano general, vista a la altura de los ojos, luz natural, colores azul y amarillo, formato vertical 3:4, sin texto».
:::

:::clave
La **sensibilidad estética** también se entrena: fíjate en qué cambia cuando mueves una sola palabra del prompt. Así aprendes qué
efecto tiene cada modificador.
:::

### P05 · Laboratorio 1: genera tu imagen
cubre: H1, S1
fuentes: F-H-56, F-H-59, F-H-50, F-H-54, F-H-51
bloque: Proceso paso a paso + actividad

Ahora te toca generar. Usa **Gemini**, el asistente del curso, en la app o en la web.

1. **Inicia sesión** con tu cuenta de Google. Para generar imágenes hay que tener sesión iniciada y 13 años o más; para editarlas,
   18 o más.
2. **Escribe tu prompt** con sujeto, contexto, estilo y modificadores. Termina con «sin texto»: el título lo pondrás después.
3. **Mira el resultado** y descárgalo. Sin plan pagado, Gemini descarga en 1K; con un plan de IA de Google, en 2K.
4. **Anota el prompt** en tu bitácora, tal como lo escribiste.

Gemini genera con un modelo llamado Nano Banana 2 y tiene un **límite diario** que Google no publica en cifras. Los límites se
renuevan cada cierto tiempo, con un tope semanal. Por eso conviene pensar el prompt antes de escribirlo.

**Alternativa: ChatGPT.** ChatGPT Images crea y edita imágenes en todos sus planes, también en el gratuito, en la web y en la app. El
plan gratuito incluye una creación limitada de imágenes. Desde el celular deja seleccionar una zona para editarla y cambiar la
proporción. Pide 13 años o más, y los menores de 18 necesitan permiso de sus padres.

:::error «Pido el afiche completo, con título y todo, en un solo prompt»
Los generadores todavía fallan con el texto dentro de la imagen. Pide la imagen sin texto y agrega el título en Canva. Lo verás en
P07 y P10.
:::

### P06 · Iterar y seleccionar
cubre: H1, A1, C1
fuentes: F-M4-12, F-M4-06
bloque: Galería con tres versiones + texto

Rara vez la primera imagen es la final. **Iterar** es partir de una idea central y agregar o cambiar un detalle en cada versión, hasta
acercarte a lo que buscas.

| Versión | Cambio en el prompt | Resultado |
|---|---|---|
| v1 | Prompt completo de P04 | Buena composición, pero el pasillo se ve angosto |
| v2 | «pasillo muy amplio, con líneas amarillas de demarcación en el piso» | Se entiende mejor el mensaje |
| v3 | «agrega a un compañero ordenando cajas en un estante» | Muestra la acción que la campaña pide |

Cambia **una cosa a la vez**: así sabes qué produjo la mejora. Es la recomendación del curso para iterar con orden.

Cuando tengas dos o tres buenas opciones, **selecciona** con criterios, no solo por gusto:
- ¿Se entiende el mensaje sin leer el título?
- ¿Queda espacio libre para el título y el texto?
- ¿Sirve en el formato del canal?
- ¿Tiene algún defecto o sesgo? (Lo verás en P07 y P11.)

La OMPI recomienda llevar registro de las instrucciones y documentar el aporte humano. Elegir entre versiones y decidir qué cambiar
es parte de ese aporte.

:::actividad Tres versiones
Genera tres versiones de tu imagen cambiando un solo detalle en cada una. Anota en tu bitácora cada prompt, qué cambiaste y cuál
elegiste, con una razón basada en los criterios de esta pantalla.
:::

### P07 · Defectos típicos y cómo corregirlos
cubre: C2, S2
fuentes: F-M4-12, F-M1-05, F-H-50, F-H-56
bloque: Texto + imagen con defectos señalados

Antes de usar una imagen, búscale los defectos. Hay algunos que se repiten:

- **Texto mal escrito o mal ubicado.** El texto dentro de una imagen generada puede salir con errores. La guía de Google aconseja que
  sea breve, de 25 caracteres o menos, y advierte que la ubicación y la tipografía solo se controlan de forma aproximada.
- **Elementos mal ubicados.** A los modelos de imagen les cuesta controlar la composición en diseños estructurados.
- **Falta de coherencia.** Les cuesta mantener igual a un personaje o una marca entre una imagen y otra. Si haces dos versiones de la
  pieza, el personaje puede cambiar.
- **Detalles que no tienen sentido.** Por ejemplo, una etiqueta de seguridad con letras inventadas o una caja flotando. Esto lo
  detectas mirando con calma, con zoom.

**Cómo corregir:**
1. **Quita el texto de la imagen** y agrégalo después en Canva, donde controlas la letra y la ubicación.
2. **Edita solo la zona con el problema.** Gemini edita imágenes, y ChatGPT, en el celular, deja seleccionar la zona que quieres
   cambiar.
3. **Vuelve a generar** con un prompt más preciso, si el defecto está en toda la imagen.
4. **Descarta** la imagen si el defecto no se puede corregir.

:::comprueba
La imagen de Andrés está muy bien, pero el letrero del fondo dice «SALDIA DE EMERGECNIA». ¿Qué conviene hacer?
- a) Dejarlo: casi nadie lo va a notar
- **b) Editar esa zona o quitar el letrero, y poner los textos en Canva**
- c) Pedirle a la IA que escriba un párrafo más largo en el letrero
Retroalimentación: El texto generado suele salir con errores. Un letrero mal escrito resta seriedad a una campaña de seguridad.
:::

### P08 · Diseño básico: jerarquía visual
cubre: S2, A1, C1
fuentes: F-M4-09
bloque: Texto + imagen antes/después

La **jerarquía visual** es el orden en que la vista recorre los elementos de una pieza, según la importancia que les quieres dar. En
un afiche de campaña, lo primero que se ve tiene que ser el mensaje principal.

Se construye con tres recursos:

1. **Contraste.** Lo que contrasta con su entorno llama la atención. Funciona mejor la diferencia de **valor** (claro y oscuro) y de
   **saturación** (intenso o apagado) que la de tono. Y no conviene depender solo del color.
2. **Escala.** Lo más grande se ve primero. Usa **pocos tamaños distintos**: un título grande, un texto mediano y, si hace falta, un
   dato pequeño. Si todo es grande, nada destaca.
3. **Agrupación.** Lo que va junto se entiende como una unidad. Se agrupa por **cercanía**, con bordes o con un fondo común, y se
   separa con **espacio** entre grupos.

:::ejemplo El afiche de Andrés, antes y después
**Antes:** la imagen ocupa todo, el título va en letra mediana y hay cuatro textos del mismo tamaño repartidos por la pieza. Nadie
sabe dónde mirar.
**Después:** el título «Pasillo despejado, bodega segura» va arriba, grande y en negrita; la imagen al centro; abajo, juntas, dos
líneas con lo que se pide: «Deja las cajas en su ubicación» y «Avisa si ves un pasillo bloqueado».
:::

:::actividad El orden de lectura
Mira tu imagen elegida y decide: ¿dónde irá el título?, ¿qué irá segundo?, ¿qué espacio quedará libre? Haz un boceto rápido en papel
o en una nota del celular.
:::

### P09 · Legibilidad: contraste y texto alternativo
cubre: S2, C1
fuentes: F-M4-08
bloque: Texto + ejemplos de contraste (bueno y malo)

Una pieza que no se lee no comunica. Las Pautas de Accesibilidad para el Contenido Web (WCAG) del W3C son un estándar internacional
que da criterios concretos:

- **Contraste del texto:** el texto necesita un contraste mínimo de **4,5:1** con su fondo. El **texto grande** necesita **3:1**.
  Es texto grande el de 18 puntos o más, o de 14 puntos o más en negrita.
- **Contraste de los elementos gráficos:** los íconos o flechas necesarios para entender la pieza requieren **3:1**.
- **No solo color:** el color no puede ser el único medio para transmitir información. Si marcas en rojo «prohibido», agrega un
  ícono o una palabra.
- **Texto alternativo:** si la pieza se publica en digital, la imagen necesita una descripción en texto que cumpla la misma función.

Dos recomendaciones prácticas del curso. Usa letra oscura sobre fondo claro, o clara sobre fondo oscuro, y evita poner texto sobre
zonas de la foto con muchos detalles. Y haz una prueba: mira tu pieza en el celular con el brillo bajo y a un brazo de distancia. Si te cuesta
leer el título, sube el contraste o el tamaño.

:::ejemplo Texto alternativo de Andrés
Para el grupo del equipo, Andrés escribe: «Afiche de campaña. Una trabajadora empuja un carro por un pasillo despejado. Título:
Pasillo despejado, bodega segura».
:::

:::error «Si se ve bien en mi pantalla, se lee bien en todas»
Tu pantalla puede tener más brillo o tamaño que la de otras personas. El contraste mínimo asegura que se lea en distintas condiciones.
:::

### P10 · Laboratorio 2: compón la pieza en Canva
cubre: H1, S2, C1
fuentes: F-H-67, F-H-68, F-H-69
bloque: Proceso paso a paso + actividad

Con tu imagen elegida, arma la pieza en **Canva**, que tiene app para Android y iOS.

1. **Crea un diseño** con el formato de tu canal: vertical para el diario mural o para el teléfono.
2. **Sube tu imagen** desde el celular y ubícala dejando espacio para el título.
3. **Escribe el título** con tu mensaje, grande y en negrita, con buen contraste.
4. **Agrega una o dos líneas** de texto con lo que pides al equipo, agrupadas.
5. **Revisa la jerarquía:** pocos tamaños, espacio entre grupos, nada amontonado.
6. **Descarga** la pieza y haz una segunda versión en el otro formato, si tu campaña lo necesita.

Canva también genera imágenes con IA. En el plan gratuito tienes hasta **20 usos de IA al mes**, compartidos entre todas sus
herramientas de IA, y la cuota se renueva el día 1 de cada mes. Si ya generaste en Gemini, guarda esos usos para el audio y el video de
los temas siguientes.

Según los términos de Canva, eres dueña o dueño de lo que generas con su IA, salvo que incluyas contenido de su biblioteca: fotos,
íconos o ilustraciones de Canva solo se licencian. Canva también prohíbe quitar los metadatos de procedencia y hacer pasar por humano
lo generado con IA.

:::error «Todo lo que está en Canva es mío porque lo usé en mi diseño»
Los elementos de la biblioteca de Canva solo se licencian: no pasan a ser tuyos. Anótalos en tu ficha de uso ético.
:::

### P11 · Sesgos visuales
cubre: S3, A2
fuentes: F-M4-11, F-M1-01, F-M4-10, F-M4-06
bloque: Texto + imagen comparativa

Los generadores de imágenes aprenden de imágenes que ya existen, y con ellas aprenden también los **estereotipos**. A esto se le llama
**sesgo visual**.

Hay evidencia. Un estudio analizó tres generadores de imágenes y les pidió retratos de distintas profesiones. Las imágenes
reflejaban en parte la composición de cada oficio en Estados Unidos y, de forma sistemática, **subrepresentaban a las identidades
marginadas**, en distinto grado según el sistema. El NIST da un ejemplo parecido: al pedir gerentes generales, médicos o jueces, los
modelos de texto a imagen subrepresentan a mujeres, minorías y personas con discapacidad.

La OMPI advierte que la IA generativa puede producir contenido discriminatorio o tendencioso, y que no siempre se puede predecir
cuándo lo hará.

La comunicación institucional también puede reforzar estereotipos. La guía del Gobierno de Chile *Comunicación sin estereotipos de
género* muestra campañas visuales con su versión «antes» y «después», por ejemplo cuando los roles de cuidado se asignan solo a
mujeres.

:::ejemplo Lo que salió sin pedirlo
Andrés pide «trabajadores de bodega ordenando cajas». Las cuatro imágenes muestran hombres jóvenes. En su bodega trabajan mujeres y
hombres de distintas edades. Rosa pide «personal de un centro médico atendiendo» y todas las imágenes ponen a un hombre como médico y a
mujeres como asistentes.
:::

:::clave
Cuidar cómo representas a las personas es parte de comunicar bien: quien no se ve en la campaña, siente que no le habla a él o a ella.
:::

### P12 · Detecta y corrige sesgos y defectos
cubre: C2, S3, A2
fuentes: F-M4-10, F-M4-11, F-M4-12
bloque: Lista de verificación (checklist) + actividad

Antes de publicar, revisa tus imágenes con preguntas. La guía de Gobierno sugiere, entre otras:
- [ ] ¿Hay **diversidad étnica, de género y de roles**?
- [ ] ¿La imagen **refleja equidad** sin perpetuar estereotipos?

El curso agrega dos preguntas más:
- [ ] ¿Aparecen **distintas edades** y cuerpos, como en un equipo real?
- [ ] ¿Quién **hace la acción** y quién mira? ¿Se repite siempre el mismo perfil en el rol importante?

Y para los defectos, los de P07:
- [ ] ¿El texto está bien escrito o lo quitaste?
- [ ] ¿Hay elementos mal ubicados o sin sentido?

**Cómo corregir un sesgo:**
1. **Cambia el prompt:** describe la diversidad que quieres. «Un equipo de bodega con mujeres y hombres de distintas edades».
2. **Cambia la selección:** si en cuatro variantes solo una muestra un equipo diverso, elige esa.
3. **Vuelve a revisar:** a veces corregir un sesgo trae otro, como poner a todas las mujeres en segundo plano.

:::actividad Revisa cuatro variantes
Andrés generó cuatro versiones. Decide cuál usaría y qué corregiría en las otras:
1. Tres hombres jóvenes cargando cajas. → Sesgo de género y edad: cambiar el prompt.
2. Una mujer y un hombre mayor ordenando un estante; letrero con letras inventadas. → Buena representación: quitar el letrero.
3. Un hombre trabaja y una mujer lo mira con una libreta. → Sesgo de roles: cambiar la acción.
4. Un equipo diverso, pasillo despejado, sin texto. → Lista para usar.
:::

### P13 · Personas reales y marcas
cubre: A2, S3
fuentes: F-M4-06, F-H-56, F-M4-07, F-M4-16
bloque: Escenarios con decisión (sí o no)

Las imágenes generadas pueden parecerse a una persona real o a una marca. En una campaña interna eso también importa.

**Personas reales.** La OMPI recomienda no sintetizar la apariencia de una persona real sin su consentimiento y sin las licencias
necesarias. Si quieres poner a alguien de tu equipo en la pieza, pídele permiso antes de usar su foto, y más aún si la vas a editar con
IA. En Gemini, además, editar imágenes exige 18 años o más. En el tema 3 verás que los rasgos faciales son datos biométricos en la Ley
21.719.

**Marcas y obras de terceros.** La OMPI también recomienda no usar en las instrucciones nombres comerciales, marcas ni obras de
terceros. No pidas «al estilo de» un personaje conocido ni con el logo de una marca. Si vas a usar el logo de tu propia organización,
la recomendación del curso es hacerlo solo si te autorizaron.

**Engaño.** Los términos de Google prohíben hacer creer que una persona creó un contenido hecho con IA. Una imagen realista de un
accidente que no ocurrió, presentada como real, engaña aunque la intención sea buena.

:::error «Es una campaña interna, así que puedo poner la cara del gerente sin preguntarle»
Que la pieza sea interna no elimina el derecho de cada persona sobre su imagen. Sin consentimiento, no se usa su cara ni se genera
una parecida.
:::

:::comprueba
Andrés quiere una imagen «al estilo de una película animada famosa». ¿Qué le recomiendas?
- a) Está bien si es para uso interno
- **b) Describir un estilo propio, como «ilustración plana con colores sólidos», sin nombrar obras de terceros**
- c) Usarlo y dar crédito al estudio de la película
Retroalimentación: La OMPI recomienda no usar obras ni marcas de terceros en las instrucciones. Un estilo se puede describir con
palabras propias.
:::

### P14 · Credenciales de contenido y transparencia
cubre: H1, C1
fuentes: F-H-57, F-H-52, F-M4-13, F-M4-14, F-H-67
bloque: Texto + diagrama de cómo se pierden los metadatos

Algunas herramientas marcan sus imágenes para que se sepa que se hicieron con IA. Hay dos tipos de marcas:

| Marca | Qué es | Quién la usa |
|---|---|---|
| **SynthID** | Una marca de agua invisible incrustada en el contenido | Google, en lo que crean sus modelos; OpenAI, en las imágenes de ChatGPT |
| **Credenciales de contenido (C2PA)** | Un estándar abierto que deja constancia del origen y las ediciones de un archivo, como una etiqueta de información nutricional | OpenAI, en las imágenes de ChatGPT |

**Cómo se verifica:** en la app Gemini puedes subir un archivo para revisar si se hizo con IA de Google; solo detecta herramientas
de Google.

**El límite:** los metadatos se pierden fácil. OpenAI indica que las credenciales C2PA se pierden con una captura de pantalla o al
convertir el archivo; la marca de agua resiste cambios leves. El NIST advierte que las redes sociales suelen borrar los metadatos al
compartir y que algunas marcas de agua se pueden eliminar. Por eso ninguna técnica sirve sola.

Conclusión práctica: **no confíes en que el archivo «lo dirá» por ti.** Si la imagen es realista, agrega una etiqueta visible, como
«Imagen generada con IA», y regístralo en tu ficha. No quites las marcas: Canva, por ejemplo, prohíbe quitar los metadatos de
procedencia.

:::comprueba
Andrés comparte su afiche en el grupo del equipo con una captura de pantalla. ¿Qué pasa con las credenciales C2PA?
- a) Se mantienen siempre
- **b) Se pueden perder: por eso conviene una etiqueta visible y la ficha**
- c) Se convierten en una marca visible
Retroalimentación: Una captura de pantalla o una conversión de archivo borra esos metadatos. La transparencia no puede depender solo
de ellos.
:::

### P15 · Cierre: entrega tu pieza
cubre: H1, C1, C2, A1, A2
fuentes: F-M4-09, F-M4-08, F-M4-10, F-M4-06
bloque: Lista de verificación (checklist) + actividad de cierre

En este laboratorio pasaste del mensaje a la pieza: escribiste un **brief visual**, armaste un **prompt** con sujeto, contexto,
estilo y modificadores, **iteraste** y seleccionaste con criterios, corregiste **defectos y sesgos** y compusiste la pieza con
**jerarquía** y **contraste**.

Antes de dar tu pieza por terminada, revisa:
- [ ] El mensaje principal es lo primero que se ve.
- [ ] Hay pocos tamaños de letra y espacio entre los grupos.
- [ ] El texto tiene buen contraste y no depende solo del color.
- [ ] No hay texto mal escrito ni elementos sin sentido.
- [ ] Las personas están representadas con diversidad y sin estereotipos.
- [ ] No aparecen personas reales sin permiso, marcas ni obras de terceros.
- [ ] Si es realista, lleva una etiqueta visible de IA.
- [ ] Si es digital, tiene texto alternativo.

:::actividad Tu pieza y su ficha
1. **Entrega** tu pieza final de la campaña interna, en el formato de tu canal.
2. **Completa la ficha de uso ético** que empezaste en el tema 1: herramientas y plan, qué se generó con IA, tus prompts principales,
   tu aporte humano (qué elegiste y qué corregiste), permisos y créditos de los elementos de Canva.
3. **Escribe dos líneas** sobre un sesgo o defecto que encontraste y cómo lo corregiste.
:::

### Ideas clave

1. Una pieza de campaña parte del mensaje, el público, el canal y el formato; la imagen viene después.
2. Un prompt visual tiene sujeto, contexto y fondo, y estilo; los modificadores controlan encuadre, cámara, luz, lente y relación de
   aspecto.
3. Se itera cambiando un detalle a la vez y se selecciona con criterios, registrando prompts y aporte humano.
4. El texto dentro de la imagen generada suele salir con errores: conviene agregarlo en el editor.
5. La jerarquía visual se construye con contraste, escala y agrupación; el texto necesita un contraste mínimo de 4,5:1 (3:1 si es
   grande).
6. Los generadores reproducen sesgos: hay que revisar diversidad y roles, y corregir el prompt o la selección.
7. Las marcas SynthID y C2PA ayudan, pero los metadatos se pierden al compartir: si la imagen es realista, se etiqueta de forma
   visible.

### Glosario

- **Campaña interna**: comunicación dirigida a las personas de una organización para informar o promover una conducta.
- **Prompt visual**: instrucción que describe la imagen que se quiere generar: sujeto, contexto y estilo.
- **Modificador**: palabra o frase del prompt que controla un aspecto de la imagen, como el encuadre o la luz.
- **Encuadre**: qué parte de la escena se ve y qué tan cerca está el sujeto.
- **Relación de aspecto**: proporción entre el ancho y el alto de una imagen, como 3:4 o 16:9.
- **Iterar**: mejorar un resultado en versiones sucesivas, cambiando un detalle en cada una.
- **Jerarquía visual**: orden en que la vista recorre los elementos de una pieza según su importancia.
- **Contraste**: diferencia de claridad o intensidad entre un elemento y su fondo.
- **Texto alternativo**: descripción en texto de una imagen, que cumple su función para quien no puede verla.
- **Sesgo visual**: tendencia de un generador de imágenes a repetir estereotipos o a subrepresentar a ciertos grupos.
- **SynthID**: marca de agua invisible que Google incrusta en el contenido que crean sus modelos.
- **Credenciales de contenido (C2PA)**: estándar abierto que registra el origen y las ediciones de un archivo digital.
- **Metadatos**: datos que acompañan a un archivo y describen, por ejemplo, cómo y con qué se creó.

### Conexión con el proyecto

Este laboratorio alimenta el **Hito 4 del proyecto aplicado: pieza multimedia que comunica la solución**. Si tu pieza del Hito 4 es
visual, puedes partir del brief y la pieza de P15 y adaptarlos a la propuesta de tu proyecto, con su ficha de uso ético. Si haces un
clip, esta imagen será uno de sus recursos en el tema 4. En el **caso M4-C1 · Campañas de marca hechas con IA generativa**
analizarás cómo una empresa usó IA en sus campañas y cómo reaccionó el público, y lo compararás con tus decisiones de diseño y uso
ético.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M4.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-2.md`
(consultadas el 24-10-2026). Los planes gratuitos cambian a menudo: revisar de nuevo antes de publicar.

- F-M4-06 · OMPI (2024). IA generativa: cómo abordar la propiedad intelectual. https://www.wipo.int/edocs/pubdocs/es/wipo-pub-rn2024-8-es-generative-ai-navigating-intellectual-property.pdf
- F-M4-07 · Google (2026). Condiciones del Servicio de Google. https://policies.google.com/terms?hl=es-419
- F-M4-08 · W3C (2024). Web Content Accessibility Guidelines (WCAG) 2.2. https://www.w3.org/TR/WCAG22/
- F-M4-09 · Nielsen Norman Group; Kelley Gordon (2021). Visual Hierarchy in UX: Definition. https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
- F-M4-10 · Gobierno de Chile, Kit Digital (2024). Guía ilustrada: Comunicación sin estereotipos de género. https://kitdigital.gob.cl/archivos/insumos/2025/Nueva%20Guia%20Ilustrada%20Comunicacion%202024.pdf
- F-M4-11 · Luccioni, Akiki, Mitchell y Jernite (2023). Stable Bias: Analyzing Societal Representations in Diffusion Models. https://arxiv.org/abs/2303.11408
- F-M4-12 · Google Cloud (2026). Guía de atributos de imágenes y mensajes (Vertex AI). https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide?hl=es-419
- F-M4-13 · C2PA (s. f.). Coalition for Content Provenance and Authenticity. https://c2pa.org/
- F-M4-14 · NIST (2024). Reducing Risks Posed by Synthetic Content (NIST AI 100-4). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf
- F-M4-16 · Congreso Nacional de Chile / BCN (2024). Ley 21.719, que regula la protección y el tratamiento de los datos personales. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- F-M1-01 · NIST (2024). Generative Artificial Intelligence Profile (NIST AI 600-1). https://doi.org/10.6028/NIST.AI.600-1
- F-M1-05 · OpenAI (2026). Image generation: limitations. https://developers.openai.com/api/docs/guides/image-generation
- F-H-50 · OpenAI (2026). Images in ChatGPT. https://help.openai.com/en/articles/11084440-images-in-chatgpt
- F-H-51 · OpenAI (2026). Condiciones de uso (resto del mundo). https://openai.com/es-ES/policies/row-terms-of-use/
- F-H-52 · OpenAI (2026). Provenance signals in OpenAI-generated content. https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- F-H-54 · OpenAI (s. f.). ChatGPT: Planes y precios. https://chatgpt.com/es-ES/pricing/
- F-H-56 · Google (s. f.). Generar imágenes con las aplicaciones de Gemini. https://support.google.com/gemini/answer/14286560?hl=es
- F-H-57 · Google (s. f.). Verificar imágenes, vídeos y audio generados por IA. https://support.google.com/gemini/answer/16722517?hl=es
- F-H-59 · Google (s. f.). Suscripciones de Google AI (Gemini). https://gemini.google/subscriptions/
- F-H-67 · Canva (2026). AI Product Terms. https://www.canva.com/policies/ai-product-terms/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/
- F-H-69 · Canva (s. f.). Canva for Android. https://www.canva.com/download/android/


## M4-AE3 · Audio y música

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-75, F-H-78, F-H-68
bloque: Texto + lista con viñetas

Una voz clara y una música bien elegida hacen que un mensaje se escuche y se recuerde. Hoy puedes generar ambas con IA, sin estudio
de grabación. Pero la voz es parte de la identidad de una persona, y la música tiene autores y licencias. En este tema aprenderás a
producir audio y a cuidar esos derechos.

**Aprendizaje esperado:** Generar audio, voz y música con IA para una pieza de comunicación, cuidando derechos de voz y atribución.

Al terminar, deberías poder:
- generar una locución y una pista musical adecuadas al uso;
- verificar los derechos y el consentimiento que exige tu pieza.

Este tema es un **laboratorio guiado**. Producirás dos audios con herramientas gratuitas que funcionan en el celular o en el navegador:
- una **locución** con **ElevenLabs**, que tiene app para iOS y Android;
- una **pista musical** con el generador de música de Canva o con Eleven Music.

**Andrés** sigue con su campaña de pasillos despejados. Después del afiche, su jefatura le pidió un clip de un minuto para mostrar en
la reunión de inicio de turno. En este tema preparará su voz y su música; en el siguiente, el clip.

Trabajarás con las políticas reales que hoy aplican las herramientas, como la de ElevenLabs sobre voces y consentimiento, con
situaciones de trabajo en que se usa la voz de una persona y con un caso real de 2024 sobre una voz sintética (P12), que analizarás a
fondo en el caso M4-C2.

:::clave
Lo que verás sobre leyes es orientación general para trabajar con cuidado. No es asesoría legal. Si una pieza usa la voz o la
imagen de otra persona y tienes dudas, consulta a una persona especialista.
:::

### P02 · Voz sintética y música generativa
cubre: S1
fuentes: F-H-75, F-H-78, F-M4-19
bloque: Tarjetas (flashcards) con cada función

En el módulo 1 conociste los modelos de audio, que generan voz, música o efectos. Las herramientas actuales ofrecen varias funciones.
Estas son las de ElevenLabs, como ejemplo:

| Función | Qué hace |
|---|---|
| **Texto a voz** | Convierte un texto escrito en una voz sintética |
| **Biblioteca de voces** | Ofrece voces ya creadas para elegir |
| **Diseño de voz** | Crea una voz nueva, distinta de las de la biblioteca |
| **Cambiador de voz** | Transforma una grabación con otra voz |
| **Aislador de voz** | Separa la voz del ruido de fondo |
| **Música** | Genera una pista a partir de una descripción |

Hay una función más, que merece cuidado especial: la **clonación de voz**, que crea una copia de la voz de una persona a partir de
grabaciones suyas. En ElevenLabs la clonación instantánea es de pago.

Cuando un audio, una imagen o un video imita de forma realista la voz o la apariencia de una persona, se habla de una **réplica
digital**. La oficina de derecho de autor de Estados Unidos da como ejemplos las actuaciones musicales generadas con IA y las
llamadas automáticas que suplantan a alguien. Puede haberla con o sin autorización de la persona imitada.

:::ejemplo Diseñar una voz o clonarla
Andrés necesita una voz adulta y tranquila. Puede elegir una de la biblioteca o diseñar una nueva con esas características. No
necesita clonar la voz de nadie.
:::

### P03 · Elegir la voz y la pista según el uso
cubre: S1, C1
fuentes: F-M4-15, F-H-76
bloque: Texto + tabla de decisiones

La voz y la música se eligen pensando en **quién escucha, dónde y para qué**. Estas son recomendaciones del curso:

| Si la pieza es… | Voz | Música |
|---|---|---|
| Un aviso de seguridad para el equipo | Clara, pausada, cercana | Suave o sin música, para no tapar la voz |
| Un mensaje telefónico con horarios | Neutra y muy clara | Sin música, o muy baja |
| Un clip motivacional para una reunión | Cálida y con energía | Con ritmo, que acompañe sin distraer |

Además, mira las reglas del **canal** donde se publicará:
- En **YouTube**, la música creada con IA debe declararse cuando es el foco principal del video. Clonar tu propia voz para narrar no
  requiere declararse.
- Si usas el plan gratuito de **ElevenLabs** y publicas lo que generaste, tienes que poner «elevenlabs.io» o «11.ai» en el título, o
  «Eleven Music» si es música.

Para Andrés, el clip es para una reunión interna: elige una voz clara y cercana y una pista suave de fondo.

:::comprueba
Rosa necesita un mensaje telefónico con el horario del centro médico. ¿Qué combinación conviene?
- a) Una voz con mucha energía y música con ritmo fuerte
- **b) Una voz neutra y clara, sin música o con música muy baja**
- c) La voz clonada de una locutora conocida
Retroalimentación: En un mensaje con horarios lo importante es entender los datos. La música fuerte los tapa, y clonar una voz ajena
requiere consentimiento.
:::

### P04 · El guion de la locución
cubre: H1, C1
fuentes: F-M4-20, F-H-86
bloque: Texto + ejemplo antes/después

La locución empieza por un buen **guion**: el texto que la voz va a leer. Se escribe para el oído, no para la vista. Algunas
recomendaciones del curso:
- **Frases cortas**, de una idea cada una.
- **Números y siglas escritos como se dicen:** «diez minutos», no «10 min».
- **Pausas marcadas** con puntos, no con paréntesis.
- **Un llamado a la acción claro** al final.

Puedes pedirle a Gemini un primer borrador: «Escribe una locución de 30 segundos para un clip interno sobre mantener despejados los
pasillos de una bodega. Frases cortas, tono cercano, termina con un llamado a la acción». Luego la ajustas tú.

Después, **cronometra** la locución. Las guías de producción de video lo recomiendan para ajustar la duración. Léela en voz alta con
un cronómetro, o deja que el celular la lea: en Android, la función de accesibilidad **Enunciar selección** lee en voz alta lo que
seleccionas en pantalla. Se activa en Ajustes > Accesibilidad.

| Antes | Después |
|---|---|
| «Recuerde: el 100 % de los pasillos (incl. zona B) debe estar libre según proc. interno.» | «Todos los pasillos, también los de la zona B, tienen que estar despejados. Es nuestra regla.» |

:::actividad Tu guion de locución
Escribe el guion de una locución de 20 a 40 segundos para tu campaña. Cronométralo y ajústalo hasta que entre en el tiempo.
:::

### P05 · Laboratorio 1: tu locución con ElevenLabs
cubre: H1, C1
fuentes: F-H-78, F-H-75, F-H-76
bloque: Proceso paso a paso + actividad

Ahora genera la voz. Usa la **app de ElevenLabs** para iOS o Android. Incluye texto a voz, biblioteca de voces, cambiador de voz,
aislador de voz y diseño de voz.

1. **Crea tu cuenta** e inicia sesión.
2. **Abre texto a voz** y pega tu guion.
3. **Elige una voz** de la biblioteca, o diseña una nueva.
4. **Genera** y escucha el resultado completo.
5. **Descarga** el audio y guárdalo con un nombre claro, por ejemplo «locucion-campaña-v1».
6. **Anota** en tu bitácora la voz elegida, la fecha y el plan.

**Lo que da el plan gratuito.** El plan Free entrega **10.000 créditos al mes**, compartidos entre texto a voz, efectos de sonido,
diseño de voz y música. **No incluye licencia comercial**: esa empieza en el plan Starter, que es de pago. Si publicas lo que hiciste
con el plan gratuito, tienes que poner «elevenlabs.io» o «11.ai» en el título. Lo hecho con funciones beta no se puede usar
comercialmente.

Para las prácticas del curso y una campaña interna que no se vende, la recomendación del curso es que el plan gratuito con atribución
es suficiente. Si la pieza será para clientes o para vender, necesitas una herramienta o un plan con licencia comercial.

:::error «Genero la locución una vez y la descargo sin escucharla»
La voz puede leer mal un nombre, una sigla o un número. Escucha siempre el audio completo antes de usarlo.
:::

### P06 · Revisar y ajustar la locución
cubre: H1, C1
fuentes: F-H-68, F-H-85, F-H-67
bloque: Lista de verificación (checklist) + texto

Escucha tu locución con audífonos, de principio a fin. Revisa, como recomendación del curso:
- [ ] ¿Se entienden **todas las palabras**, en especial nombres, siglas y números?
- [ ] ¿El **ritmo** deja respirar el mensaje o va muy rápido?
- [ ] ¿El **tono** calza con el uso: cercano, neutro, motivador?
- [ ] ¿Dura lo que planificaste?
- [ ] ¿Hay **errores de lectura**, como una palabra cortada o un énfasis raro?

**Cómo ajustar:**
1. **Cambia el texto** para que la voz lo lea mejor: escribe los números con letras o separa una frase larga en dos.
2. **Prueba otra voz** si el tono no calza.
3. **Vuelve a generar** solo el fragmento con problemas.

**Alternativas gratuitas** para la locución:
- **Canva, Voz con IA:** entra en los 20 usos de IA al mes del plan gratuito. Según sus términos, eres dueña o dueño de lo que
  generas.
- **CapCut, texto a voz:** CapCut dice que es gratis, que ofrece más de 200 voces, incluido el español, y que el audio sirve para
  usos comerciales si se siguen sus términos. Los pasos que describe son para computador y web.

:::ejemplo La sigla de Andrés
En la primera versión, la voz leyó «EPP» como una palabra. Andrés cambió el texto por «elementos de protección personal» y la segunda
versión salió clara.
:::

### P07 · Música generativa: qué sirve con plan gratuito
cubre: S1, H1, C2
fuentes: F-H-79, F-H-80, F-H-81, F-H-82, F-H-76, F-H-78, F-H-68, F-H-67
bloque: Tabla comparativa con semáforo

Para la pista musical hay varias herramientas, pero no todas sirven gratis para un clip. Para montar un video necesitas **descargar**
la pista.

| Herramienta | Plan gratuito | ¿Sirve para tu clip? |
|---|---|---|
| **Suno** | 50 créditos al día, sin derechos comerciales y **sin descargas**. Las canciones son para uso personal y no comercial, y se comparten con el enlace de Suno | No: sirve para escuchar y compartir, no para montar |
| **Udio** | **Desactivó las descargas** de audio, video y pistas separadas tras su acuerdo con Universal Music Group | No |
| **Canva, generador de música** | Dentro de los 20 usos de IA al mes; eres dueña o dueño de lo que generas | Sí, si tu cuenta gratuita lo muestra |
| **Eleven Music** (ElevenLabs) | Usa los créditos del plan Free; está solo en la web, no en la app. Sin licencia comercial: al publicar, «Eleven Music» en el título | Sí, para uso no comercial y con atribución |

Por eso este laboratorio usa **Canva** o **Eleven Music**. Suno tiene app para iOS y Android en lanzamiento limitado; si la usas
para explorar, verifica que el desarrollador sea Suno, Inc.

:::error «Si la puedo escuchar gratis, la puedo usar en mi video»
Escuchar no es lo mismo que tener permiso para usar. Suno gratis no deja descargar y limita el uso a lo personal y no comercial.
:::

### P08 · Laboratorio 2: tu pista musical
cubre: H1, C1
fuentes: F-M4-06, F-H-68, F-H-76, F-H-78
bloque: Proceso paso a paso + actividad

Ahora genera la música. Para describir una pista, piensa en cuatro cosas. Es una recomendación del curso:
1. **Ánimo:** tranquilo, alegre, con energía.
2. **Instrumentos:** piano, guitarra, percusión suave.
3. **Ritmo:** lento, medio o rápido.
4. **Uso:** «música de fondo, sin voz, para acompañar una locución».

Ejemplo: «Pista instrumental alegre y tranquila, guitarra y percusión suave, ritmo medio, sin voz, para fondo de una locución».

**Pasos:**
1. **Abre la herramienta:** el generador de música de Canva, en la app, o Eleven Music, en el navegador.
2. **Escribe tu descripción** y genera.
3. **Escucha la pista junto a tu locución:** la música no debe tapar la voz.
4. **Descarga** la pista y guárdala con un nombre claro.
5. **Anota** la herramienta, el plan, la descripción que usaste y la fecha.

En Canva gastarás uno de tus 20 usos de IA del mes. En Eleven Music, créditos de tu plan Free, y si publicas, va «Eleven Music» en
el título.

**No nombres artistas ni canciones.** La OMPI recomienda no usar en las instrucciones obras de terceros. En vez de «al estilo de»
una banda conocida, describe el ánimo, los instrumentos y el ritmo.

:::actividad Tu pista y tu mezcla
Genera dos pistas con descripciones distintas. Escucha cada una con tu locución y elige la que acompaña mejor sin distraer. Anota
por qué la elegiste.
:::

### P09 · Derechos de imagen y voz
cubre: S2
fuentes: F-M4-17, F-M4-18, F-M4-19, F-M4-02
bloque: Texto + acordeón (accordion)

Cuando una pieza usa la voz o la imagen de una persona real, entran en juego derechos que no son los de autor. Esto es lo que dicen
las fuentes:

**La Constitución.** El artículo 19 n.º 4 asegura a todas las personas el respeto y la protección de su vida privada y de su honra, y
de las de su familia, y la protección de sus datos personales. No menciona de forma expresa la propia imagen ni la voz.

**El derecho a la propia imagen.** Según un estudio publicado en una revista de derecho de la UC, en Chile este derecho no tiene un
reconocimiento constitucional expreso. Se volvió un tema constitucional a través de la acción de protección, conocida como recurso
de protección.

**El derecho de autor no protege la identidad.** La oficina de derecho de autor de Estados Unidos precisa que copiar solo la voz o
la imagen de alguien no infringe el derecho de autor, aunque puede afectar otros derechos. Es decir: que algo no sea plagio no
significa que esté permitido.

**Las licencias de una obra no cubren a las personas.** El resumen de una licencia Creative Commons advierte que los derechos de
imagen, de privacidad o morales pueden requerir permisos aparte. Una foto con licencia CC no te da permiso de la persona que aparece.

:::clave
La voz y la imagen se protegen por la vida privada, la honra y los datos personales, no por el derecho de autor. Por eso, ante una
voz o una cara real, la pregunta no es «¿es plagio?», sino «¿tengo su permiso?».
:::

### P10 · La voz como dato sensible: Ley 21.719
cubre: S2, S3
fuentes: F-M4-16, F-M3-16
bloque: Texto + línea de tiempo

En 2024 se publicó la **Ley 21.719**, que modifica la ley de protección de datos personales (Ley 19.628) y crea la Agencia de
Protección de Datos Personales. Para la voz y la imagen trae cambios importantes:

- **Datos biométricos.** Son los que permiten identificar a una persona. La ley pone como ejemplos los **rasgos faciales y la voz**.
- **Son datos sensibles.** Los datos biométricos pasan a ser datos personales sensibles.
- **Consentimiento expreso.** Los datos sensibles solo se pueden tratar con consentimiento expreso de la persona, salvo excepciones.
- **Información obligatoria.** Para tratar datos biométricos hay que informar qué sistema se usa, para qué, por cuánto tiempo y cómo
  ejercer los derechos.

**¿Desde cuándo?** Según su texto, estas modificaciones rigen desde el **1 de diciembre de 2026**. Hay, además, un proyecto de ley en
trámite para postergar esa fecha (boletín 18623-07). Antes de aplicar la ley, revisa en la Biblioteca del Congreso Nacional (BCN)
si la fecha cambió.

¿Qué significa para tu pieza? La recomendación del curso es actuar desde ya como pide la ley: trata la voz y la cara de otra persona
como un dato sensible y pide su consentimiento expreso antes de grabarla, clonarla o editarla con IA.

:::comprueba
Según la Ley 21.719, ¿qué tipo de dato es la voz de una persona cuando sirve para identificarla?
- a) Un dato público, porque cualquiera puede escucharla
- **b) Un dato biométrico, que es un dato personal sensible**
- c) Una obra protegida por el derecho de autor
Retroalimentación: La ley pone la voz y los rasgos faciales como ejemplos de datos biométricos, y estos pasan a ser datos sensibles.
:::

### P11 · Consentimiento: cuándo se necesita
cubre: S3, A1, C2
fuentes: F-M4-16, F-H-77, F-H-75, F-M4-06
bloque: Ordenar o clasificar (sorting activity)

El **consentimiento**, según la Ley 21.719, es una manifestación de voluntad **libre, específica, inequívoca e informada**. Para los
datos sensibles debe ser **expreso**: por escrito, de palabra o por un medio tecnológico equivalente.

La OMPI recomienda obtener consentimiento y licencias para sintetizar la voz o la apariencia de una persona. ElevenLabs lo pone en su
política: prohíbe clonar o imitar la voz o la imagen de una persona viva **sin su consentimiento explícito e informado**, y no permite
usar grabaciones de **menores de 18 años** para crear voces.

En la práctica, el consentimiento sirve cuando la persona sabe **qué vas a hacer con su voz, en qué pieza, dónde se verá y por cuánto
tiempo**, y te lo dice claramente. Un «ya, dale» en el pasillo, sin saber para qué es, no cumple esas condiciones. La recomendación
del curso es dejarlo por escrito, aunque sea en un mensaje, para tener constancia.

:::actividad ¿Hace falta consentimiento?
Clasifica cada caso:
1. Andrés usa una voz de la biblioteca de ElevenLabs. → No hace falta: es una voz de la herramienta.
2. Andrés diseña una voz nueva con una descripción. → No hace falta.
3. Andrés graba su propia voz para narrar. → Es su voz: decide él.
4. Rosa quiere clonar la voz de una colega para el mensaje telefónico. → Sí: consentimiento expreso, por escrito, y además es de pago.
5. Alguien quiere usar la voz de su hijo de 12 años. → No se puede en ElevenLabs: prohíbe grabaciones de menores de 18.
6. Alguien quiere imitar la voz de un locutor famoso. → No, sin su consentimiento explícito e informado.
:::

### P12 · Respeto por la identidad de las personas
cubre: A1, S2
fuentes: F-M4-15, F-M4-19, F-H-77, F-M4C2-01, F-M4C2-02
bloque: Texto + escenario

Respetar la identidad es **no hacer que una persona real parezca decir o hacer algo que no dijo ni hizo**. La voz de alguien es
reconocible: si la imitas, quien escucha cree que esa persona habló.

Las plataformas también lo exigen. YouTube pide declarar el contenido realista hecho o alterado con IA, por ejemplo cuando una persona
real parece decir o hacer algo que no hizo. La declaración agrega una etiqueta visible en el video o en su descripción. No exige
declarar lo que es claramente irreal ni la ayuda con guiones o subtítulos.

Las réplicas digitales pueden dañar a las personas. La oficina de derecho de autor de Estados Unidos da el ejemplo de las llamadas
automáticas que suplantan a alguien. ElevenLabs, por su parte, tiene un formulario para denunciar el uso de una voz sin
consentimiento.

:::ejemplo La broma que no lo era
Para la fiesta de fin de año, alguien propone hacer un audio con la voz imitada de la jefatura «felicitando» al equipo con frases
chistosas. Parece inofensivo, pero pone en su boca palabras que nunca dijo, sin su permiso, y el audio puede circular fuera del
equipo. La alternativa: pedirle a la jefatura que grabe un saludo, o usar una voz de la biblioteca y decir que es sintética.
:::

:::ejemplo Caso real: la voz Sky de ChatGPT (2024)
En septiembre de 2023, el director ejecutivo de OpenAI le ofreció a la actriz Scarlett Johansson ser una de las voces de ChatGPT, y
ella lo rechazó. En mayo de 2024, tras una presentación de la empresa, la actriz dijo que la voz «Sky» se parecía a la suya, y sus
abogados pidieron por carta explicar cómo se había creado. El 19-05-2024 OpenAI dejó de usar Sky y publicó cómo eligió sus voces:
sostiene que Sky es otra actriz, con su voz natural. No hubo juicio. El caso muestra por qué conviene poder demostrar de dónde sale
una voz y que quien la prestó dio su consentimiento.
:::

:::error «Si es una sátira o una broma, no necesito permiso ni aviso»
Aunque sea en broma, imitar a una persona real sin permiso afecta su identidad. Si alguna vez una pieza lo hace con permiso, hay que
declararlo.
:::

### P13 · Verificar condiciones de uso y atribuir
cubre: H1, C2
fuentes: F-M4-01, F-M4-03, F-H-76, F-H-84, F-H-80
bloque: Lista de verificación (checklist) + texto

Antes de usar tu locución y tu pista, verifica sus condiciones. Revisa cada audio con estas preguntas:
- [ ] **¿De dónde viene?** Herramienta, plan y fecha, o autor y enlace si es de terceros.
- [ ] **¿Qué licencia tiene?** Los elementos CC (BY, SA, NC, ND) o los términos de la herramienta.
- [ ] **¿Permite tu uso?** Interno, publicado, comercial.
- [ ] **¿Exige atribución?** Cómo y dónde va.
- [ ] **¿Hay una voz real?** Si la hay, ¿tienes el consentimiento expreso?

**Cómo atribuir:** usa la fórmula TASL (título, autor, fuente y licencia) para los audios de terceros, e indica si los modificaste.
Para lo generado con IA, sigue la forma de crédito que pide la herramienta. Por ejemplo:
- **ElevenLabs gratis:** «elevenlabs.io» o «11.ai» en el título; «Eleven Music» si es música.
- **Música de CapCut:** algunos materiales son solo para uso personal y no comercial; los que permiten un uso comercial limitado llevan
  una marca del tipo «commercial use».
- **Suno gratis:** solo uso personal y no comercial.

Anota todo en tu **ficha de uso ético**: así cualquier persona puede saber de dónde salió cada sonido.

:::comprueba
Andrés publicará el clip en el canal interno de la empresa. Hizo la música con Eleven Music, plan gratuito. ¿Qué tiene que hacer?
- a) Nada, porque la música la generó él
- **b) Poner «Eleven Music» en el título y registrar herramienta y plan en la ficha**
- c) Dar crédito a Creative Commons
Retroalimentación: El plan gratuito de ElevenLabs no tiene licencia comercial y pide «Eleven Music» en el título al publicar música.
:::

### P14 · Cierre: tu locución y tu pista
cubre: C1, C2, H1
fuentes: F-H-76, F-M4-16, F-M4-03
bloque: Texto + actividad de cierre

En este laboratorio generaste una **locución** y una **pista** con IA, y aprendiste que la voz y la imagen de una persona se protegen
por su vida privada, su honra y sus datos personales. Viste que la Ley 21.719 trata la voz y los rasgos faciales como datos
biométricos sensibles, que el **consentimiento** tiene que ser libre, específico, inequívoco, informado y expreso, y que cada
herramienta pide su propia forma de **atribución**.

:::actividad Entrega tus audios
1. **Locución:** tu guion final y el audio, de 20 a 40 segundos.
2. **Pista:** la pista elegida y por qué acompaña tu mensaje.
3. **Ficha de uso ético:** agrega para cada audio la herramienta, el plan, la fecha, la descripción o guion que usaste, tu aporte
   (qué corregiste o elegiste), la atribución que corresponde y, si hay una voz real, cómo obtuviste el consentimiento.
4. **Verificación:** marca la lista de P13 para cada audio.

Guarda los archivos: los usarás en el clip de 60 segundos del próximo tema.
:::

### Ideas clave

1. Las herramientas de audio ofrecen texto a voz, biblioteca de voces, diseño de voz, cambio de voz y música; la clonación de voz
   copia la voz de una persona y exige su consentimiento.
2. La voz y la pista se eligen según quién escucha, dónde y para qué, y según las reglas del canal donde se publicarán.
3. ElevenLabs gratis no tiene licencia comercial y pide atribución en el título al publicar.
4. Para una pista que vas a montar necesitas descargarla: Suno gratis no lo permite y Udio desactivó las descargas.
5. En Chile, la voz y la imagen se protegen por la vida privada, la honra y los datos personales; el derecho de autor no protege la
   identidad.
6. La Ley 21.719 define la voz y los rasgos faciales como datos biométricos sensibles, que solo se tratan con consentimiento
   expreso; según su texto, rige desde el 1 de diciembre de 2026.
7. Respetar la identidad es no hacer que una persona real parezca decir algo que no dijo.

### Glosario

- **Locución**: texto leído en voz alta que acompaña una pieza de audio o video.
- **Texto a voz**: función que convierte un texto escrito en voz sintética.
- **Voz sintética**: voz generada por una herramienta, no grabada por una persona.
- **Diseño de voz**: creación de una voz sintética nueva, que no copia la de una persona real.
- **Clonación de voz**: copia de la voz de una persona real a partir de grabaciones suyas.
- **Réplica digital**: audio, imagen o video que imita de forma realista la voz o la apariencia de una persona.
- **Música generativa**: música creada por una herramienta de IA a partir de una descripción.
- **Pista**: archivo de música o sonido que se usa en una pieza.
- **Derecho a la propia imagen**: derecho de una persona a decidir sobre el uso de su imagen.
- **Dato biométrico**: dato que permite identificar a una persona, como sus rasgos faciales o su voz.
- **Dato personal sensible**: dato que la ley protege de forma especial y que solo se trata con consentimiento expreso, salvo
  excepciones.
- **Consentimiento expreso**: permiso libre, específico, inequívoco e informado que la persona da de forma clara, por escrito, de
  palabra o por un medio tecnológico equivalente.

### Conexión con el proyecto

Tu locución y tu pista (P14) son recursos para el **Hito 4 del proyecto aplicado: pieza multimedia que comunica la solución**: puedes
entregar una pieza sonora o, como verás en el tema 4, integrarlas en un clip. La ficha de uso ético que completaste aquí es parte de
la entrega. En el **caso M4-C2 · Voz sintética y consentimiento** analizarás a fondo la disputa por la voz Sky que viste en P12, y revisarás con la lista de P13 si tus propios audios cumplen.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M4.md`, `investigacion/HERRAMIENTAS-2.md` y, para el caso real de P12,
`investigacion/casos/M4-C2.md` (consultadas el 24-10-2026).
Los planes gratuitos cambian a menudo: revisar de nuevo antes de publicar.

- F-M4-01 · Creative Commons (s. f.). About CC Licenses. https://creativecommons.org/share-your-work/cclicenses/
- F-M4-02 · Creative Commons (s. f.). Atribución-NoComercial-CompartirIgual 4.0 Internacional (resumen de la licencia). https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
- F-M4-03 · Creative Commons (2024). Recommended practices for attribution. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- F-M4-06 · OMPI (2024). IA generativa: cómo abordar la propiedad intelectual. https://www.wipo.int/edocs/pubdocs/es/wipo-pub-rn2024-8-es-generative-ai-navigating-intellectual-property.pdf
- F-M4-15 · YouTube / Google (s. f.). Divulgación de contenido alterado o sintético. https://support.google.com/youtube/answer/14328491?hl=es-419
- F-M4-16 · Congreso Nacional de Chile / BCN (2024). Ley 21.719, que regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales. https://www.bcn.cl/leychile/navegar?idNorma=1209272
  - Revisar antes de publicar: fecha de entrada en vigencia (01-12-2026 según su texto) y el proyecto de ley que busca postergarla (boletín 18623-07), en trámite según la ficha del Senado (F-M3-16, en `investigacion/M3.md`).
- F-M3-16 · Senado de Chile (2026). Tramitación del boletín 18623-07: proyecto que modifica la Ley 21.719. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- F-M4-17 · Chile / BCN (texto vigente, 2026). Constitución Política de la República, art. 19 n.º 4. https://www.bcn.cl/leychile/navegar?idNorma=242302
- F-M4-18 · Aillapán Quinteros, Jorge (2019). Hacia una revisión del derecho a la propia imagen y de su construcción en cuanto derecho fundamental. Revista de Derecho Aplicado LLM UC, n.º 3. https://revistaschilenas.uchile.cl/handle/2250/109166
- F-M4-19 · U.S. Copyright Office (2024). Copyright and Artificial Intelligence, Part 1: Digital Replicas. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-1-Digital-Replicas-Report.pdf
- F-M4-20 · Universidad Simón Bolívar, Departamento de Pedagogía (2020). Guía para la creación de videos educativos. https://unisimon.edu.co/showimagen/v/Comunicaciones/20200925103940_0.pdf
- F-M4C2-01 · OpenAI (19-05-2024, actualizado 22-05-2024). How the voices for ChatGPT were chosen. https://openai.com/index/how-the-voices-for-chatgpt-were-chosen/
- F-M4C2-02 · TechCrunch (20-05-2024). Scarlett Johansson says that OpenAI approached her to use her voice (incluye la declaración íntegra de la actriz). https://techcrunch.com/2024/05/20/scarlett-johansson-says-that-openai-approached-her-to-use-her-voice/
- F-H-67 · Canva (2026). AI Product Terms. https://www.canva.com/policies/ai-product-terms/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/
- F-H-75 · ElevenLabs (s. f.). Pricing. https://elevenlabs.io/pricing
- F-H-76 · ElevenLabs (s. f.). Can I publish the content I generate on the platform? https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- F-H-77 · ElevenLabs (2026). Prohibited Use Policy. https://elevenlabs.io/use-policy
- F-H-78 · ElevenLabs (s. f.). What features are available in the ElevenLabs mobile app? https://elevenlabs.io/docs/help-center/product/mobile-apps/eleven-labs-for-ios-and-android/what-features-are-available-in-the-eleven-labs-mobile-app
- F-H-79 · Suno (s. f.). Pricing. https://suno.com/pricing
- F-H-80 · Suno (s. f.). What rights do I have with the free plan? https://help.suno.com/en/articles/9601601
- F-H-81 · Suno (s. f.). How do I find the Suno mobile app? https://help.suno.com/en/articles/3134337
- F-H-82 · Udio (2026). Changes associated with the Universal Music Group partnership. https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership
- F-H-84 · CapCut (2026). Materials License Agreement. https://www.capcut.com/clause/material-license-agreement
- F-H-85 · CapCut (s. f.). Text to Speech. https://www.capcut.com/tools/text-to-speech
- F-H-86 · Google (s. f.). Enunciar selección (Android). https://support.google.com/accessibility/android/answer/7349565?hl=es


## M4-AE4 · Clips y video breve

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M4-20, F-H-69, F-H-83
bloque: Texto + lista con viñetas

En los temas anteriores produjiste una imagen, una locución y una pista musical. Ahora vas a unirlas en un **clip de 60 segundos**:
un video breve que se puede mostrar en una reunión, en una pantalla o en el teléfono.

**Aprendizaje esperado:** Elaborar un clip de 60 segundos que integre guion, voz, música e imagen generados con IA.

Al terminar, deberías poder:
- entregar un clip de 60 segundos que integre guion, voz, música e imagen;
- completar la ficha de uso ético del clip.

Este tema es un **proyecto breve guiado**: termina con un producto. Lo harás en el orden en que se produce un video:
1. **planificar** y escribir el guion;
2. **reunir y generar** los recursos;
3. **montar**, revisar y exportar.

Todo se puede hacer gratis y desde el celular. Para escribir el guion usarás **Gemini**; para generar algunas tomas de video,
**Google Flow**, si te funciona; y para montar, **CapCut** o **Canva**, que tienen app para el celular.

**Andrés** termina aquí su campaña de pasillos despejados: hará el clip para la reunión de inicio de turno con el afiche, la locución
y la pista que ya tiene.

:::clave
Un clip de un minuto parece poco, pero obliga a decidir qué es lo esencial. Esa decisión es tuya, no de la herramienta.
:::

### P02 · Las tres etapas de la producción
cubre: S3, H1
fuentes: F-M4-20
bloque: Proceso (process block) en 3 pasos

Las guías de producción de video ordenan el trabajo en **tres etapas**. Te sirven para no saltarte pasos y para no rehacer todo al
final.

| Etapa | Qué se hace | En tu clip |
|---|---|---|
| **Preproducción** | Tema, guion, material visual, verificación de derechos de autor o licencias, y escenario | Guion por secuencias y lista de recursos con su licencia |
| **Producción** | Grabación: luz, cámara y audio | Generar tomas, imágenes, locución y música con IA |
| **Postproducción** | Edición y publicación | Montaje, subtítulos, créditos y exportación |

Fíjate en que la **verificación de licencias** está en la preproducción, no al final. Si descubres después de montar que una pista
no se puede usar, tendrás que rehacer el clip.

En un video hecho con IA, la producción cambia: en vez de grabar con una cámara, generas. Pero la lógica es la misma: primero se
planifica, después se produce y al final se edita.

:::ejemplo El plan de Andrés
Andrés anota en su bitácora: lunes, guion; martes, tomas en Flow y revisión de recursos; miércoles, montaje y exportación; jueves,
revisión con su jefatura. Así no se le junta todo el último día.
:::

:::error «Empiezo a montar y el guion lo voy armando sobre la marcha»
Sin guion, el clip se alarga, los recursos no calzan y gastas créditos generando tomas que no usas. El guion va primero.
:::

### P03 · La estructura de un guion breve
cubre: S1
fuentes: F-M4-20
bloque: Texto + diagrama de la estructura

Un guion breve tiene una estructura simple, que las guías de video describen así:
1. **Abrir con el propósito:** de qué trata y por qué importa.
2. **Desarrollar los puntos clave:** pocos, uno por momento.
3. **Poner un llamado a la acción:** qué tiene que hacer la persona después de verlo.
4. **Cerrar.**

En 60 segundos no caben muchas ideas. Una distribución posible, recomendación del curso:

| Momento | Tiempo aproximado | Qué pasa |
|---|---|---|
| Apertura | 0 a 8 s | Una imagen o una pregunta que capte la atención y diga el propósito |
| Puntos clave | 8 a 45 s | Dos o tres ideas, una por secuencia |
| Llamado a la acción | 45 a 55 s | Qué hacer, dicho y escrito en pantalla |
| Cierre y créditos | 55 a 60 s | Mensaje final y créditos |

La apertura importa: si los primeros segundos no dicen de qué trata, la atención se pierde.

:::comprueba
¿Qué parte del guion responde «¿qué tiene que hacer la persona después de ver el clip?»?
- a) La apertura
- b) Los puntos clave
- **c) El llamado a la acción**
Retroalimentación: El llamado a la acción dice qué se espera de quien mira. Va después de los puntos clave y antes del cierre.
:::

### P04 · El guion por secuencias
cubre: S1, H1
fuentes: F-M4-20
bloque: Tabla (guion técnico) + texto

Para producir, el guion se arma por **secuencias**. Cada secuencia lleva su **texto** (lo que dice la voz), su **imagen**, su
**plano** (qué tan cerca se ve), su **sonido** y su **duración**. Así sabes qué recurso necesitas para cada momento.

Este es el guion de Andrés:

| N.º | Texto de la locución | Imagen y plano | Sonido | Duración |
|---|---|---|---|---|
| 1 | «¿Cuántas veces esquivaste una caja esta semana?» | Toma generada: pasillo con cajas, plano general | Música entra | 6 s |
| 2 | «Un pasillo bloqueado es un tropiezo esperando pasar.» | Imagen fija: caja en el suelo, primer plano | Voz y música baja | 10 s |
| 3 | «Deja cada caja en su ubicación.» | Imagen fija: trabajadora ordenando un estante | Voz y música | 12 s |
| 4 | «Si ves un pasillo bloqueado, avisa.» | Imagen fija: compañero avisando por radio | Voz y música | 12 s |
| 5 | «Pasillo despejado, bodega segura.» | Toma generada: carro por pasillo despejado, plano general | Voz y música sube | 8 s |
| 6 | (sin voz) | Afiche de la campaña y créditos | Música termina | 12 s |

Total: 60 segundos. Las duraciones se ajustan al **cronometrar la locución**, como recomiendan las guías.

Fíjate en que solo dos secuencias usan video generado. El resto son imágenes fijas que ya tiene o que puede generar con Gemini.

:::actividad Tu guion por secuencias
Arma la tabla de tu clip con cinco a siete secuencias. Completa las cinco columnas y suma las duraciones: tienen que dar 60 segundos.
:::

### P05 · Escribe y ajusta el guion con Gemini
cubre: S1, H1, A2
fuentes: F-M4-20, F-H-14
bloque: Ejemplo antes/después + actividad

Gemini te puede ayudar a pasar de una idea a un guion por secuencias. Usa la app del celular o la web.

**Prompt de ejemplo:** «Escribe el guion de un clip interno de 60 segundos para una bodega. Mensaje: "Pasillo despejado, bodega
segura". Estructura: apertura con una pregunta, dos puntos clave, llamado a la acción y cierre. Entrégalo en una tabla con número de
secuencia, texto de la locución, imagen y plano, sonido y duración en segundos. La locución no debe pasar de 100 palabras».

El límite de palabras es una recomendación del curso para que la locución quepa con calma en un minuto. Después, **revisa tú**:
- ¿Las duraciones suman 60 segundos?
- ¿Cada secuencia tiene una sola idea?
- ¿El texto suena natural en voz alta?
- ¿Las imágenes pedidas se pueden generar sin personas reales ni marcas?

| Antes (primer borrador) | Después (ajustado) |
|---|---|
| «En nuestra empresa, la seguridad es un valor fundamental que todos debemos compartir día a día en cada una de nuestras labores.» | «Un pasillo bloqueado es un tropiezo esperando pasar.» |

La primera frase es larga y general. La segunda es breve, concreta y se entiende al escucharla una vez.

Luego, **cronometra**: lee la locución en voz alta con el cronómetro del celular y ajusta las duraciones de la tabla.

:::error «El guion lo escribe la IA y yo solo lo copio»
El borrador de Gemini es un punto de partida. Las duraciones, el tono y lo que se puede mostrar los decides y revisas tú.
:::

### P06 · Video generativo: qué hay gratis hoy
cubre: S2
fuentes: F-H-63, F-H-64, F-H-59, F-H-60, F-H-68, F-H-90, F-H-91, F-H-92, F-H-53
bloque: Tabla comparativa

El **video generativo** produce escenas sintéticas a partir de un texto o de una imagen. Las herramientas cambian rápido. Esta es la
situación de los planes gratuitos al preparar el curso:

| Herramienta | Plan gratuito |
|---|---|
| **Google Flow** | 50 créditos diarios gratis, que no se acumulan. Un clip con Veo 3.1 Lite gasta 10 créditos; con Veo 3.1 Fast, 20; con Veo 3.1 Quality, 100 |
| **App Gemini** | La tabla de funciones de Google muestra la generación de video solo en planes de pago |
| **Canva** | El plan gratuito no incluye herramientas Ultra, como crear un clip de video con IA |
| **Runway** | 125 créditos una sola vez; todos los videos gratis llevan marca de agua |
| **Pika** | 0 créditos al mes en el plan gratuito |
| **Luma** | No tiene plan gratuito |
| **Sora** (OpenAI) | Retirado: su web y su app cerraron el 26 de abril de 2026 |

**Google Flow** es la opción gratuita más útil. Con Veo 3.1 genera clips de **4, 6 u 8 segundos** a partir de texto o de una imagen.
También ofrece Gemini Omni Flash, con clips de hasta 10 segundos en 720p o 360p, que gasta entre 4 y 15 créditos. Su modelo de imagen
por defecto, Nano Banana 2 Lite, no tiene costo.

Haz la cuenta: con 50 créditos al día alcanzas para unos **cinco clips de 8 segundos** con Veo 3.1 Lite. No alcanza para un minuto
completo de video generado, y tampoco hace falta.

:::comprueba
Andrés quiere que todo su clip de 60 segundos sea video generado con Veo 3.1 Lite, en un solo día y gratis. ¿Le alcanza?
- a) Sí, con 50 créditos genera más de un minuto
- **b) No: 50 créditos dan para unos cinco clips de 8 segundos, unos 40 segundos**
- c) Sí, porque Flow no cobra los clips cortos
Retroalimentación: Cada clip con Veo 3.1 Lite gasta 10 créditos y dura hasta 8 segundos. Por eso conviene combinar pocas tomas
generadas con imágenes fijas.
:::

### P07 · Generar tomas con Google Flow
cubre: S2, H1, A1
fuentes: F-H-63, F-H-64, F-M4-15, F-M4-06
bloque: Proceso paso a paso + actividad

La recomendación del curso es que tu clip combine **dos a cuatro tomas generadas** con **imágenes fijas** que muestras con un
movimiento suave en el editor. Así cuidas tus créditos y tu tiempo.

**Cómo pedir una toma.** Usa lo que aprendiste del prompt visual y agrega **qué se mueve**:
- **Sujeto y acción:** «una trabajadora empuja un carro».
- **Contexto:** «por un pasillo de bodega despejado, con estantes ordenados».
- **Cámara y plano:** «plano general, la cámara la sigue de lado».
- **Estilo y luz:** «ilustración animada, luz natural».

**Pasos:**
1. Elige en tu guion las secuencias que de verdad necesitan movimiento.
2. Escribe un prompt por toma y elige la duración: 4, 6 u 8 segundos.
3. Genera con **Veo 3.1 Lite**, que gasta menos créditos.
4. Revisa la toma completa: movimientos raros, objetos que aparecen o desaparecen, texto deforme.
5. Descárgala y anota el prompt, el modelo y los créditos usados.

Si no puedes usar Flow desde tu celular, o se te acabaron los créditos del día, arma el clip solo con imágenes fijas: cumple igual
con lo que pide el tema.

**Creatividad responsable.** No generes escenas realistas de personas reales ni de hechos que no ocurrieron para presentarlas como
reales. Las plataformas como YouTube piden declarar ese tipo de contenido, y la OMPI recomienda no usar herramientas para producir
ultrafalsos.

:::actividad Tus tomas
Genera dos tomas para las secuencias de tu guion que más necesitan movimiento. Anota en tu bitácora el prompt de cada una y cuántos
créditos te quedaron.
:::

### P08 · Reunir los recursos y verificar sus licencias
cubre: S3, H1, C2
fuentes: F-M4-20, F-H-76, F-H-84, F-H-67
bloque: Tabla para completar (lista de recursos)

Antes de montar, junta todos los recursos en una carpeta del celular y revisa de dónde viene cada uno. Las guías de video piden
verificar los derechos de autor o las licencias Creative Commons en la preproducción, y **referenciar toda imagen** que uses.

| Recurso | Origen | Licencia o condición | Crédito |
|---|---|---|---|
| Locución | ElevenLabs, plan gratuito (tema 3) | No comercial | «elevenlabs.io» en el título si se publica |
| Pista | Eleven Music, plan gratuito (tema 3) | No comercial | «Eleven Music» en el título si se publica |
| Imagen del afiche | Gemini y Canva (tema 2) | Google no reclama la propiedad; en Canva, propia salvo elementos de la biblioteca | Etiqueta de IA |
| Toma 1 y toma 5 | Google Flow, Veo 3.1 Lite | Google no reclama la propiedad | Etiqueta de IA |
| Sticker de advertencia | Biblioteca de CapCut | Solo personal y no comercial, salvo marca «commercial use» | Revisar antes de usar |

Si un recurso no tiene licencia clara, no lo uses. Si no sabes de dónde salió una imagen, tampoco.

**Ojo con la biblioteca del editor.** En CapCut, algunos materiales, como plantillas, stickers, efectos o música, son solo para uso
personal y no comercial; los que permiten un uso comercial limitado llevan una marca visible del tipo «commercial use», y usarlos
exige una cuenta registrada. En Canva, el contenido de la biblioteca solo se licencia.

:::comprueba
Andrés encuentra en CapCut una música perfecta, pero no tiene la marca «commercial use». Su clip es para la reunión interna. ¿Qué
hace?
- a) La usa, porque está dentro de la app
- **b) La anota como material solo para uso personal y no comercial, y decide con esa condición o elige otra con la marca**
- c) La usa y da crédito a CapCut
Retroalimentación: Estar en la app no significa que sirva para cualquier uso. Las condiciones de cada material mandan.
:::

### P09 · Montaje en el celular: CapCut o Canva
cubre: S3, H1
fuentes: F-M4-20, F-H-83, F-H-69, F-H-87, F-H-88
bloque: Proceso paso a paso + video demostrativo

El **montaje** ordena los clips, la voz, la música y las imágenes en una **línea de tiempo**, siguiendo el guion. Puedes hacerlo en
el celular con:
- **CapCut**, para mayores de 13 años; los menores de 18 necesitan el consentimiento de sus padres. CapCut no garantiza que el
  contenido generado sea legal o apropiado: la persona responde por lo que crea.
- **Canva**, que tiene app para Android y iOS.

Si tienes computador, **Clipchamp** es otra opción: su plan gratuito exporta en 1080p sin marca de agua e incluye subtítulos
automáticos. Se usa en Edge o Chrome en un computador, o con la app para Windows.

**Pasos para montar:**
1. **Crea un proyecto** con el formato de tu canal: vertical (9:16) para el teléfono u horizontal (16:9) para una pantalla.
2. **Pon la locución** en la línea de tiempo: es la columna vertebral del clip.
3. **Ubica las imágenes y las tomas** en el orden del guion, ajustando cada una a su duración.
4. **Agrega la música** debajo de la voz y baja su volumen donde habla la locución.
5. **Suma los textos** en pantalla: el llamado a la acción y el título de la campaña.
6. **Agrega transiciones simples** solo donde ayuden a entender el cambio de secuencia.
7. **Termina con los créditos** al final del clip.

Ver el guion al lado mientras montas te ahorra vueltas: cada fila de la tabla es un tramo de la línea de tiempo.

:::error «Más transiciones y efectos hacen que se vea más profesional»
Los efectos distraen del mensaje y alargan el clip. En un minuto, lo que más cuenta es que se entienda.
:::

### P10 · Subtítulos, textos en pantalla y créditos
cubre: A2, S3
fuentes: F-M4-08, F-M4-20, F-H-87
bloque: Lista de verificación (checklist) + ejemplo

El **cuidado del detalle** se nota en lo que mucha gente no mira hasta que falta.

**Subtítulos.** Las pautas WCAG piden subtítulos en los videos con audio grabado. Ayudan a quien no oye bien, a quien ve el clip sin
sonido en el teléfono y a quien está en un lugar con ruido, como una bodega. Escríbelos tú en el editor o usa los subtítulos
automáticos si tu editor los tiene, como Clipchamp. Si son automáticos, **revísalos palabra por palabra**.

**Textos en pantalla.** Aplica lo del tema 2: contraste mínimo de 4,5:1 (3:1 en texto grande), pocos tamaños y texto breve. Como
recomendación del curso, deja cada texto en pantalla el tiempo suficiente para leerlo dos veces.

**Créditos.** Las guías de video ponen al final los **créditos y las referencias**: quién hizo el clip, con qué herramientas, la
música y las imágenes, y la etiqueta de IA.

:::ejemplo Los créditos de Andrés
«Campaña Pasillo despejado. Guion y montaje: Andrés. Imágenes generadas con IA (Gemini y Google Flow). Voz: elevenlabs.io. Música:
Eleven Music. Afiche compuesto en Canva».
:::

- [ ] Los subtítulos coinciden con la locución, sin errores.
- [ ] Los textos se leen bien en el celular.
- [ ] Cada imagen y cada audio aparecen en los créditos.
- [ ] La etiqueta de IA está en los créditos y en la ficha.

:::error «Los subtítulos sobran si la voz se entiende bien»
Muchas personas ven los clips sin sonido o no oyen bien. Los subtítulos son parte del clip, no un adorno.
:::

### P11 · Ajustar a 60 segundos y revisar
cubre: C1, A2, S1
fuentes: F-M4-20
bloque: Lista de verificación (checklist) + actividad

Con el montaje armado, mira el clip completo de principio a fin, sin detenerte. Luego revísalo por partes.

**La duración.** La meta son 60 segundos. Si te pasas:
- acorta las pausas largas entre frases;
- recorta las tomas que se repiten;
- elimina la secuencia menos importante.
Si te falta tiempo, alarga un poco las imágenes del llamado a la acción, no agregues ideas nuevas.

**La integración.** El clip tiene que tener los cuatro elementos y que trabajen juntos:
- [ ] **Guion:** se entiende el propósito, los puntos clave y el llamado a la acción.
- [ ] **Voz:** clara, sin errores de lectura, coincide con lo que se ve.
- [ ] **Música:** acompaña sin tapar la voz y termina con el clip, sin cortarse de golpe.
- [ ] **Imagen:** cada secuencia muestra lo que dice la voz, sin defectos ni sesgos.

**El detalle.** Como recomendación del curso, revisa también:
- [ ] Que no haya un cuadro negro ni un salto al inicio o al final.
- [ ] Que el volumen sea parejo de principio a fin.
- [ ] Que las tomas generadas no tengan objetos que aparecen o desaparecen.

:::actividad Revisión cruzada
Muestra tu clip a otra persona sin explicarle nada. Pregúntale qué entendió y qué tiene que hacer después de verlo. Si su respuesta
no coincide con tu mensaje, ajusta el guion o el montaje.
:::

### P12 · Exportar el clip
cubre: S3
fuentes: F-M4-21
bloque: Texto + tabla de configuración

**Exportar** es generar el archivo final de video a partir del proyecto de montaje. Las recomendaciones de YouTube para subir videos
sirven como referencia:

| Ajuste | Recomendación |
|---|---|
| Formato del archivo | MP4 |
| Video | H.264 |
| Audio | AAC-LC (u Opus), a 48 kHz |
| Velocidad de fotogramas | La misma de la grabación; 24, 25, 30 o 60 fps son comunes |
| Relación de aspecto | 16:9 es la estándar; el reproductor adapta los videos verticales o cuadrados |

En el celular, los editores suelen ofrecer pocas opciones de exportación. Como recomendación del curso: si te deja elegir, usa MP4 y
mantén la velocidad de fotogramas que trae el proyecto. Después, **abre el archivo exportado** y míralo completo: a veces el audio se
desfasa o un texto queda cortado.

Guarda el archivo con un nombre claro, como «clip-pasillo-despejado-v1.mp4», y conserva el proyecto de montaje por si hay que
corregir algo.

:::comprueba
Andrés exportó su clip. ¿Qué configuración coincide con las recomendaciones?
- a) Archivo de imagen, audio a 8 kHz
- **b) MP4, video H.264 y audio AAC-LC a 48 kHz**
- c) Cualquier formato, cambiando la velocidad de fotogramas a 10 fps
Retroalimentación: MP4 con H.264 y AAC-LC es la combinación recomendada, manteniendo la velocidad de fotogramas de la grabación.
:::

### P13 · Creatividad responsable: declarar lo sintético
cubre: A1, S2, C2
fuentes: F-M4-15, F-M4-06, F-M4-13, F-M4-14, F-H-52, F-H-57, F-H-67, F-H-90
bloque: Texto + escenarios con decisión

**Crear con responsabilidad** es etiquetar el contenido sintético realista y no suplantar a personas reales.

**Cuándo declarar.** YouTube exige declarar el contenido realista hecho o alterado con IA: cuando una persona real parece decir o
hacer algo que no hizo, cuando se alteran hechos o lugares reales, o cuando se crean escenas realistas que no ocurrieron. También
cuando la música creada con IA es el foco principal del video. No exige declarar lo que es claramente irreal, las ediciones menores ni
la ayuda con guiones o subtítulos. La OMPI recomienda, en general, etiquetar lo generado por IA.

**Las marcas que trae el archivo.** Las credenciales de contenido (C2PA) registran el origen y las ediciones de un archivo. Google
marca con SynthID lo que crean sus modelos, y Runway pone una marca de agua visible en los videos de su plan gratuito. Pero el NIST
advierte que los metadatos se pueden perder o alterar al copiar, editar o compartir, y que ninguna técnica sirve sola. OpenAI, por
ejemplo, indica que las credenciales C2PA se pierden al convertir un archivo. Al montar y exportar, puede pasar lo mismo.

Por eso, la recomendación del curso es **declarar de forma visible**: una línea en los créditos o en la descripción, como «Imágenes,
voz y música generadas con IA». Y no quitar marcas de agua ni metadatos: Canva, por ejemplo, prohíbe quitar los de procedencia.

:::comprueba
¿Cuál de estos clips debe declararse en YouTube como contenido alterado o sintético?
- a) Un clip con una ilustración animada claramente irreal
- **b) Un clip con una escena realista, generada con IA, de un accidente que no ocurrió**
- c) Un clip cuyo guion se escribió con ayuda de un asistente
Retroalimentación: Las escenas realistas que no ocurrieron deben declararse. Lo claramente irreal y la ayuda con el guion, no.
:::

### P14 · La ficha de uso ético del clip
cubre: H1, C2
fuentes: F-M4-06, F-M4-03, F-H-84, F-H-63
bloque: Plantilla descargable + ejemplo completo

El clip se entrega con su **ficha de uso ético**, la misma que empezaste en el tema 1. Para un clip, la ficha está completa cuando
tiene la **etiqueta de IA**, el **registro de instrucciones**, el **aporte humano**, los **consentimientos** y los **créditos**. El
curso agrega un campo: la **marca de agua o credencial** de cada recurso, si la tiene.

:::ejemplo La ficha del clip de Andrés
- **Pieza y uso:** clip de 60 segundos para la reunión de inicio de turno de la bodega. Uso interno, no se vende.
- **Herramientas y plan:** Gemini (guion e imágenes), Google Flow con Veo 3.1 Lite (dos tomas, 20 créditos), ElevenLabs Free (voz),
  Eleven Music Free (música), CapCut (montaje). Condiciones revisadas el día del montaje.
- **Qué se generó con IA:** dos tomas de video, tres imágenes, la voz y la música.
- **Instrucciones:** los prompts de cada toma e imagen, el de la locución y el de la música (anexados).
- **Aporte humano:** mensaje, guion final, selección de tomas, montaje, subtítulos y revisión.
- **Consentimientos:** no aparecen personas reales ni voces de personas reales.
- **Licencias y créditos:** voz «elevenlabs.io» y música «Eleven Music», no comerciales; ningún material de la biblioteca de CapCut.
- **Marcas y credenciales:** imágenes y tomas de Google con SynthID; etiqueta visible en los créditos.
:::

:::actividad Completa tu ficha
Completa la ficha de tu clip con todos los campos. Revisa que cada recurso de tu lista de P08 aparezca en ella con su licencia y su
crédito.
:::

### P15 · Cierre: entrega tu clip
cubre: C1, C2, H1, A1, A2
fuentes: F-M4-20, F-M4-21, F-M4-06
bloque: Lista de verificación (checklist) + actividad de cierre

En este proyecto hiciste un video completo: **planificaste** con un guion por secuencias, **generaste** y reuniste recursos
verificando sus licencias, **montaste** en una línea de tiempo, agregaste subtítulos y créditos, **exportaste** y documentaste todo
en la ficha de uso ético.

Antes de entregar, revisa:
- [ ] El clip dura 60 segundos.
- [ ] Integra guion, voz, música e imagen.
- [ ] Tiene apertura, puntos clave, llamado a la acción y cierre.
- [ ] Lleva subtítulos revisados y textos legibles.
- [ ] Los créditos incluyen cada recurso y la etiqueta de IA.
- [ ] No suplanta a personas reales ni muestra como real algo que no ocurrió.
- [ ] Está exportado en MP4 y lo viste completo después de exportar.
- [ ] La ficha de uso ético está completa.

:::actividad Entrega
Entrega tres cosas:
1. **El clip** en MP4.
2. **El guion por secuencias** con sus duraciones.
3. **La ficha de uso ético** completa.

Agrega dos líneas sobre una decisión de creatividad responsable que tomaste. Por ejemplo, qué escena no generaste y por qué.
:::

### Ideas clave

1. Un video se produce en tres etapas: preproducción (guion y licencias), producción (generar los recursos) y postproducción (montar
   y exportar).
2. Un guion breve abre con el propósito, desarrolla pocos puntos clave, pone un llamado a la acción y cierra.
3. El guion se arma por secuencias, cada una con texto, imagen, plano, sonido y duración, y se ajusta al cronometrar la locución.
4. Google Flow da 50 créditos diarios gratis, unos cinco clips de 8 segundos con Veo 3.1 Lite: conviene combinar pocas tomas
   generadas con imágenes fijas.
5. El montaje ordena voz, música, imágenes y tomas en una línea de tiempo; se agregan subtítulos y créditos al final.
6. Para exportar se recomienda MP4, con video H.264 y audio AAC-LC.
7. El contenido sintético realista se declara de forma visible, porque los metadatos se pierden; la ficha de uso ético registra
   herramientas, instrucciones, aporte humano, consentimientos, créditos y marcas.

### Glosario

- **Clip**: video breve, de pocos segundos o minutos, con un solo mensaje.
- **Guion (de un video)**: texto que organiza lo que se dirá y se mostrará en un video.
- **Secuencia**: tramo del guion con un texto, una imagen, un plano, un sonido y una duración.
- **Plano**: qué tan cerca o lejos se muestra el sujeto en una imagen o toma.
- **Toma**: fragmento continuo de video, grabado o generado.
- **Llamado a la acción**: parte del guion que dice qué tiene que hacer la persona después de ver la pieza.
- **Preproducción**: etapa de planificación: tema, guion, recursos y verificación de licencias.
- **Producción**: etapa en que se graban o generan los recursos del video.
- **Postproducción**: etapa de edición y publicación del video.
- **Montaje**: ordenar y unir tomas, imágenes, voz y música para formar el video.
- **Línea de tiempo**: espacio del editor donde se ordenan los recursos según el momento en que aparecen.
- **Video generativo**: video sintético creado por una herramienta de IA a partir de un texto o una imagen.
- **Exportar**: generar el archivo final de video a partir del proyecto de montaje.
- **Subtítulos**: texto en pantalla que reproduce lo que se dice en el audio.

### Conexión con el proyecto

Este clip es el camino del **Hito 4 del proyecto aplicado: pieza multimedia que comunica la solución**. En el hito harás una pieza,
visual, sonora o audiovisual, que comunique la propuesta de tu proyecto, y la entregarás con su ficha de uso ético. Si eliges un
clip, sigue los mismos pasos de este tema con el mensaje de tu proyecto. En el **caso M4-C1 · Campañas de marca hechas con IA
generativa** analizarás el proceso, las herramientas y las reacciones del público en campañas reales, y lo compararás con las
decisiones de tu clip y de tu ficha.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M4.md`, `investigacion/HERRAMIENTAS-1.md` y
`investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026). Los planes gratuitos cambian a menudo: revisar de nuevo antes de
publicar.

- F-M4-03 · Creative Commons (2024). Recommended practices for attribution. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- F-M4-06 · OMPI (2024). IA generativa: cómo abordar la propiedad intelectual. https://www.wipo.int/edocs/pubdocs/es/wipo-pub-rn2024-8-es-generative-ai-navigating-intellectual-property.pdf
- F-M4-08 · W3C (2024). Web Content Accessibility Guidelines (WCAG) 2.2. https://www.w3.org/TR/WCAG22/
- F-M4-13 · C2PA (s. f.). Coalition for Content Provenance and Authenticity. https://c2pa.org/
- F-M4-14 · NIST (2024). Reducing Risks Posed by Synthetic Content (NIST AI 100-4). https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf
- F-M4-15 · YouTube / Google (s. f.). Divulgación de contenido alterado o sintético. https://support.google.com/youtube/answer/14328491?hl=es-419
- F-M4-20 · Universidad Simón Bolívar, Departamento de Pedagogía (2020). Guía para la creación de videos educativos. https://unisimon.edu.co/showimagen/v/Comunicaciones/20200925103940_0.pdf
- F-M4-21 · YouTube / Google (s. f.). Configuración de codificación recomendada para subir videos. https://support.google.com/youtube/answer/1722171?hl=es-419
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es
- F-H-52 · OpenAI (2026). Provenance signals in OpenAI-generated content. https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- F-H-53 · OpenAI (2026). Qué debes saber sobre la interrupción de Sora. https://help.openai.com/es-es/articles/20001152-what-to-know-about-the-sora-discontinuation
- F-H-57 · Google (s. f.). Verificar imágenes, vídeos y audio generados por IA. https://support.google.com/gemini/answer/16722517?hl=es
- F-H-59 · Google (s. f.). Suscripciones de Google AI (Gemini). https://gemini.google/subscriptions/
- F-H-60 · Google (s. f.). Límites de las aplicaciones de Gemini y planes de suscripción. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-63 · Google (s. f.). Gestionar tus créditos de Google Flow. https://support.google.com/flow/answer/16526234?hl=es
- F-H-64 · Google (s. f.). Modelos y funciones compatibles de Google Flow. https://support.google.com/flow/answer/16352836?hl=es
- F-H-67 · Canva (2026). AI Product Terms. https://www.canva.com/policies/ai-product-terms/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/
- F-H-69 · Canva (s. f.). Canva for Android. https://www.canva.com/download/android/
- F-H-76 · ElevenLabs (s. f.). Can I publish the content I generate on the platform? https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- F-H-83 · CapCut (2026). Terms of Service. https://www.capcut.com/clause/terms-of-service
- F-H-84 · CapCut (2026). Materials License Agreement. https://www.capcut.com/clause/material-license-agreement
- F-H-87 · Microsoft (s. f.). Clipchamp: precios. https://clipchamp.com/en/pricing/
- F-H-88 · Microsoft (s. f.). What is Clipchamp? https://support.microsoft.com/en-us/clipchamp/what-is-clipchamp
- F-H-90 · Runway (s. f.). Free plan details. https://help.runwayml.com/hc/en-us/articles/50404627334547-Free-plan-details
- F-H-91 · Pika (s. f.). Pricing. https://pika.art/pricing
- F-H-92 · Luma (s. f.). Plans & Pricing. https://lumalabs.ai/pricing


---

# Módulo 5 · Automatización de tareas repetitivas

**Competencia:** Automatizar tareas rutinarias mediante flujos simples con IA, incorporando supervisión humana y control de riesgos, en el trabajo cotidiano.


## M5-AE1 · Potencial de automatización

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-01, F-M5-05
bloque: Texto + lista con viñetas

En los módulos anteriores usaste la IA generativa para redactar, investigar y crear piezas. En este módulo das un paso más: hacer que
algunas tareas **se hagan solas**, con un flujo que las repite cada vez que hace falta. Pero antes de automatizar hay que elegir bien
qué automatizar. Eso es lo que trabajas en este tema.

**Aprendizaje esperado:** Identificar tareas repetitivas con potencial de automatización, priorizándolas según impacto y riesgo.

Al terminar, deberías poder:
- identificar al menos tres tareas automatizables de un cargo, el que ejerces o al que aspiras;
- ordenarlas en una matriz de impacto y riesgo, y explicar por qué cada una quedó donde quedó.

Vas a mirar el trabajo como lo miran los estudios de la Organización Internacional del Trabajo (OIT): **tarea por tarea**, no cargo
por cargo. Y vas a usar una herramienta simple, la matriz de priorización, que sirve para decidir qué conviene probar primero.

Te acompañan otra vez **Camila**, que busca trabajo como asistente administrativa, y **Andrés**, encargado de bodega en una
distribuidora. Sus tareas te servirán de modelo para analizar las tuyas.

:::clave
Automatizar no es el objetivo. El objetivo es ganar tiempo y calidad en lo que importa, sin crear riesgos nuevos. A veces la mejor
decisión es no automatizar.
:::

### P02 · Un cargo es un conjunto de tareas
cubre: S1, A1
fuentes: F-M5-01, F-M5-02, F-M5-03
bloque: Texto + imagen (un cargo dividido en tareas)

Cuando se habla de IA y trabajo, la pregunta suele ser «¿mi trabajo va a desaparecer?». Los estudios serios no parten de ahí. La OIT
mide la exposición a la IA generativa **tarea por tarea**: dentro de un mismo cargo hay tareas muy expuestas y otras que siguen
necesitando a una persona. La OCDE trabaja con la misma lógica cuando analiza qué grupos de trabajadores se verían más afectados.

**Exposición** no es lo mismo que reemplazo. Que una tarea esté expuesta significa que la IA generativa podría hacer una parte o
ayudar a hacerla. La conclusión de la OIT es que, en la mayoría de los cargos, lo más probable es que los empleos **se transformen**:
algunas tareas se automatizan y queda tiempo para otras.

Mirar tu trabajo así tiene una ventaja práctica. En vez de una pregunta que angustia, tienes una lista que puedes analizar:
- ¿Qué tareas hago (o haría) en este cargo?
- ¿Cuáles se repiten igual cada vez?
- ¿Cuáles necesitan mi criterio, mi trato con las personas o mis manos?

:::ejemplo El cargo de Andrés, por partes
Andrés no se pregunta si la IA puede «ser encargado de bodega». Se pregunta si puede ayudarle con tareas concretas: escribir el
reporte semanal de stock, registrar la mercadería que llega, avisar cuando un producto baja del mínimo. Revisar una caja dañada o
resolver un problema con un transportista sigue siendo tarea suya.
:::

### P03 · Qué dicen los estudios sobre la exposición
cubre: S1, S2, A2
fuentes: F-M5-01, F-M5-02, F-M5-03
bloque: Texto + pestañas (OIT 2023 · OIT 2025 · OCDE 2024)

Tres estudios ayudan a entender dónde está el potencial de automatización. Cada uno usa su propio método, así que sus cifras **no se
comparan entre sí**.

**OIT, 2023.** El trabajo administrativo es el único grupo de ocupaciones muy expuesto: 24 % de sus tareas tiene exposición alta y
58 %, exposición media. En los demás grupos, las tareas muy expuestas van de 1 % a 4 %. El estudio concluye que el efecto principal
será **aumentar** el trabajo más que automatizar ocupaciones completas, y que la exposición es más del doble en mujeres. Advierte que
la calidad del empleo, como la intensidad del trabajo y la autonomía, puede importar más que las cifras.

**OIT, 2025.** La actualización del índice confirma que las ocupaciones administrativas siguen siendo las más expuestas. Como la
mayoría de las ocupaciones tiene tareas que requieren intervención humana, lo más probable es que los empleos se transformen.

**OCDE, 2024.** La IA avanzó sobre todo en tareas cognitivas no rutinarias, como redactar o resumir. Por eso los cargos más expuestos
son de oficina. Los que dependen de destrezas manuales y fuerza, como aseo o ayudante de cocina, tienen baja exposición.

:::error «Si mi cargo está expuesto, lo voy a perder»
Exposición no es pérdida del empleo. Significa que algunas tareas pueden hacerse con IA. Según la OIT, lo más probable es que el
trabajo cambie: menos tiempo en lo repetitivo y más en lo que necesita a una persona.
:::

### P04 · Anatomía de una tarea automatizable
cubre: S1, C1
fuentes: F-M5-04, F-M5-03, F-M5-06
bloque: Proceso (process block) en 5 partes

Desde hace décadas se sabe que los computadores funcionan bien con **reglas**. Un estudio clásico de Autor, Levy y Murnane mostró que
la tecnología sustituye sobre todo **tareas rutinarias**, las que se repiten y siguen pasos claros, y que en cambio complementa las
tareas no rutinarias de resolver problemas y tratar con personas. La IA generativa agrega algo nuevo: también puede trabajar con
texto, por ejemplo resumir un correo o clasificar una consulta.

Para saber si una tarea es candidata, descomponla en cinco partes:

1. **Qué la inicia:** llega un correo, es lunes, se completa un formulario.
2. **Con qué datos trabaja:** un correo, una fila de planilla, una fecha.
3. **Qué pasos sigue:** ¿son siempre los mismos? ¿Se pueden escribir como reglas?
4. **Qué entrega:** un registro, un aviso, un resumen, un evento en el calendario.
5. **Cada cuánto se repite:** varias veces al día, cada semana, una vez al año.

Esta lista es del curso. Se inspira en lo que una guía universitaria sobre automatización pide documentar de cada flujo: su propósito,
sus entradas, sus salidas y sus dependencias.

:::ejemplo Una tarea de Camila, descompuesta
En el aviso que guardó Camila, una función es «registrar las facturas recibidas». Se inicia cuando llega una factura por correo
(1); trabaja con el número, el proveedor, la fecha y el monto (2); los pasos son siempre los mismos (3); entrega una fila en la
planilla (4); y se repite varias veces por semana (5). Es una buena candidata.
:::

### P05 · Señales de una buena candidata
cubre: S1, C1
fuentes: F-M5-04, F-M5-01, F-M5-03
bloque: Ordenar o clasificar (sorting activity)

Con la anatomía de la pantalla anterior puedes reconocer señales rápidas.

| Señal | Buena candidata | Mala candidata |
|---|---|---|
| Repetición | Se hace igual muchas veces | Cada caso es distinto |
| Reglas | Los pasos se pueden escribir | Depende del criterio de cada momento |
| Información | Trabaja con correos, planillas o fechas | Trabaja con objetos o con el cuerpo |
| Personas | No decide sobre nadie | Decide algo importante sobre una persona |

Las tareas de manejo de información, como correo, planillas y agenda, son típicas del trabajo administrativo. Por eso ese tipo de
trabajo aparece como el más expuesto en los estudios de la OIT.

:::actividad ¿Candidata o no?
Arrastra cada tarea a «Buena candidata» o «Mala candidata»:
1. Copiar en una planilla los datos de cada pedido que llega por correo. → Buena candidata
2. Calmar a un cliente molesto en el mesón. → Mala candidata
3. Enviar cada viernes el mismo recordatorio de entrega de reportes. → Buena candidata
4. Revisar si una caja llegó dañada. → Mala candidata
5. Resumir los correos de proveedores del día. → Buena candidata
6. Decidir a qué trabajador se le renueva el contrato. → Mala candidata
:::

:::comprueba
¿Cuál de estas tareas tiene más potencial de automatización?
- a) Negociar un precio con un proveedor nuevo
- **b) Registrar en una planilla cada solicitud que llega por un formulario**
- c) Capacitar en persona a un trabajador recién contratado
Retroalimentación: Registrar solicitudes se repite, sigue pasos claros y trabaja con información. Negociar y capacitar exigen criterio
y trato con personas.
:::

### P06 · Mapea las tareas de un cargo
cubre: H1, A1, C1
fuentes: F-M5-01, F-H-12, F-H-14
bloque: Proceso paso a paso + actividad

Ahora vas a hacer tu propio **mapa de tareas**. Puede ser el cargo que ejerces hoy o el del aviso de empleo que guardaste en el
módulo 1. Si buscas trabajo, también sirve tu propia búsqueda: revisar avisos, registrar postulaciones y recordar entrevistas son
tareas que se repiten.

1. **Reúne la información.** El aviso de empleo, tu descripción de cargo o tus notas de lo que haces en una semana.
2. **Pide ayuda a Gemini.** Pega el aviso en la app gratuita y escribe: «Lista las tareas concretas que haría una persona en este
   cargo. Escribe cada una con un verbo y un objeto, por ejemplo "registrar facturas". No agregues tareas que el aviso no permita
   suponer». Gemini funciona en el celular, en Android y en iPhone.
3. **Revisa la lista.** Quita lo que no corresponde y agrega lo que falta. Tú conoces el trabajo mejor que la herramienta.
4. **Deja entre 8 y 12 tareas**, una por línea.
5. **Marca cada una** con la anatomía de P04: qué la inicia, qué datos usa, si sigue reglas, qué entrega y cada cuánto se repite.

:::error Pegar documentos internos con datos de personas
Para mapear tareas basta un aviso público o tu propia descripción. No pegues planillas con nombres, RUT o teléfonos de clientes o
compañeros. Qué datos no compartir lo viste en el módulo 3.
:::

:::clave
El mapa es tuyo. Gemini acelera la primera lista, pero la decisión de qué tareas existen y cómo se hacen es de quien conoce el trabajo.
:::

### P07 · Ejemplo guiado: el mapa de Camila
cubre: H1, C1, A1
fuentes: F-M5-04, F-M5-01
bloque: Tabla + texto

Camila usó el aviso de asistente administrativa que guardó en el módulo 1. Con ayuda de Gemini y su propia revisión, armó este mapa:

| Tarea | ¿Se repite? | ¿Sigue reglas? | ¿Información o personas? | ¿Candidata? |
|---|---|---|---|---|
| Registrar facturas recibidas en la planilla | Sí, varias por semana | Sí | Información | Sí |
| Agendar reuniones de la jefatura | Sí, a diario | En parte | Información | Sí |
| Responder consultas frecuentes por correo | Sí, a diario | En parte | Información y personas | Sí, con revisión |
| Preparar la minuta de cada reunión | Sí, cada semana | En parte | Información | Sí, con revisión |
| Atender público en recepción | Sí | No | Personas | No |
| Ordenar el archivo físico | Sí, cada mes | Sí | Objetos | No |
| Preseleccionar currículums de postulantes | A veces | No | Decide sobre personas | No |

Camila encontró **cuatro tareas candidatas**: cumple con creces el mínimo de tres. Fíjate en dos cosas.

Primero, «sigue reglas» no siempre es sí o no. Responder consultas frecuentes tiene una parte fija (las preguntas se repiten) y otra
que exige criterio (cada cliente es distinto). Esas tareas se pueden automatizar **en parte**.

Segundo, Camila descartó preseleccionar currículums aunque se repite. Decide algo importante sobre otras personas. Lo verás con más
detalle al hablar de riesgo y en el tema 3 de este módulo.

:::actividad Revisa tu mapa
Compara tu mapa con el de Camila. ¿Tienes al menos tres tareas candidatas? Si no, busca las que trabajan con correo, planillas o
agenda: suelen ser las más repetitivas.
:::

### P08 · Antes de automatizar: eliminar y simplificar
cubre: S2, A2
fuentes: F-M5-06
bloque: Proceso (process block) en 3 pasos

Una guía de la Universidad de Bath sobre automatización da un consejo que ahorra mucho trabajo: partir de la necesidad y **no
automatizar algo solo porque se puede**. Propone una secuencia en tres pasos:

1. **Eliminar.** ¿La tarea es necesaria? A veces se hace por costumbre y nadie usa el resultado.
2. **Simplificar.** ¿Se puede hacer con menos pasos? Un formulario bien hecho puede ahorrar tres correos de ida y vuelta.
3. **Automatizar.** Solo lo que queda, ya simplificado, pasa a un flujo.

Si automatizas una tarea mal diseñada, obtienes una tarea mal diseñada que se repite sola, más rápido y más veces.

:::ejemplo El reporte que nadie leía
Andrés pensaba automatizar el reporte diario de movimientos de bodega. Antes, le preguntó a su jefatura qué parte usaba. La respuesta:
solo el resumen del viernes. Eliminó el reporte diario y simplificó el semanal a cinco datos. Recién ahí tuvo sentido pensar en
automatizarlo.
:::

:::error «Hay que automatizar todo lo que se pueda»
Que una tarea se pueda automatizar no significa que convenga. Primero pregúntate si es necesaria y si se puede simplificar. Después
decide, con criterios, si vale la pena automatizarla.
:::

### P09 · Primer criterio: el impacto
cubre: S2, A2
fuentes: F-M5-06
bloque: Texto + lista de verificación (checklist)

Para elegir qué automatizar, la guía de Bath recomienda mirar la **frecuencia** de la tarea, su **complejidad**, el **ahorro de
tiempo y costo**, y el **impacto en la experiencia de las personas**. En este curso los juntamos en un solo criterio: el **impacto**,
es decir, cuánto mejora el trabajo si la tarea se automatiza.

Para estimarlo, responde tres preguntas con sí o no:
- [ ] ¿Se repite seguido, cada día o cada semana?
- [ ] ¿Me quita tiempo que podría usar en algo más valioso?
- [ ] ¿Mejora algo para otras personas (clientes, equipo, jefatura) si se hace más rápido o sin errores?

Si respondes **sí a dos o tres**, el impacto es **alto**. Si respondes sí a una o a ninguna, es **bajo**. Esta regla de conteo es
una propuesta del curso para decidir rápido; lo importante es que puedas explicar tu respuesta.

La tercera pregunta es la que más se olvida. Una tarea puede ahorrarte poco tiempo a ti, pero hacer una gran diferencia para otra
persona: un cliente que recibe confirmación de su pedido en el momento, o un compañero que ya no espera tu planilla para avanzar.

:::ejemplo El impacto de una tarea de Andrés
«Avisar a los vendedores cuando un producto baja del mínimo» se repite a diario (sí), le quita tiempo revisando la planilla (sí) y
evita que un vendedor ofrezca algo que no hay (sí). Impacto alto.
:::

### P10 · Segundo criterio: el riesgo
cubre: S2, A2
fuentes: F-M5-06, F-M5-16
bloque: Texto + lista de verificación (checklist)

El **riesgo** es lo que puede salir mal si la tarea se hace sola. Una tarea automatizada no se cansa, pero tampoco duda: si el flujo
tiene un error, lo repite cada vez. Por eso importa pensar el riesgo antes de construir nada.

Dos factores lo suben mucho. Uno son los **datos personales**: la guía de Bath pide cuidar su protección en cada flujo. El otro son
las **decisiones que afectan a personas**: la Ley 21.719, que según su texto rige en Chile desde el 1 de diciembre de 2026, reconoce
el derecho a no ser objeto de decisiones basadas en el tratamiento automatizado de los datos que afecten significativamente a una
persona. Lo verás en el tema 3.

Para estimar el riesgo, responde tres preguntas con sí o no:
- [ ] ¿La tarea usa datos personales o información confidencial?
- [ ] Si sale mal, ¿afecta a una persona, a dinero o a un plazo importante?
- [ ] ¿Sería difícil darse cuenta del error a tiempo?

Igual que con el impacto, **dos o tres sí** indican riesgo **alto**. La tercera pregunta conecta con lo que viste en el módulo 1: si
la respuesta está mal, ¿quién se da cuenta y cuánto cuesta el error?

:::error «Una tarea pequeña no tiene riesgo»
Mandar un recordatorio parece inofensivo. Pero si el flujo toma la fecha equivocada y lo envía a cuarenta clientes, el error se
multiplica. El riesgo no depende del tamaño de la tarea, sino de lo que pasa si falla.
:::

### P11 · La matriz de priorización
cubre: S3
fuentes: F-M5-05
bloque: Imagen (matriz 2×2) + texto

Una **matriz de priorización** es una cuadrícula de 2 × 2 que cruza dos criterios para ver qué conviene hacer primero. En su versión
más conocida, la que usa por ejemplo el equipo de mejora continua del sistema de salud de Lothian, en Escocia, cruza **impacto** y
**esfuerzo**, y busca las «victorias rápidas»: mucho impacto con poco esfuerzo.

En este curso la **adaptamos**: cambiamos el esfuerzo por el **riesgo**, porque al automatizar lo que más importa es qué pasa si algo
falla. Así queda:

| | Riesgo bajo | Riesgo alto |
|---|---|---|
| **Impacto alto** | **Empieza aquí.** Automatiza primero. | **Con supervisión.** Automatiza solo una parte y pon un control humano. |
| **Impacto bajo** | **Si sobra tiempo.** Puede esperar. | **No automatices.** No vale la pena el riesgo. |

El cuadrante «Con supervisión» no es un no. Es una tarea valiosa que exige cuidado: puedes automatizar la parte de menor riesgo y
dejar la decisión a una persona. Cómo hacerlo lo verás en el tema 3.

El esfuerzo no desaparece: si dos tareas quedan en el mismo cuadrante, elige la que te cueste menos poner en marcha.

:::comprueba
Una tarea tiene impacto alto y riesgo alto. ¿Qué indica la matriz del curso?
- a) Automatizarla completa, porque vale la pena
- **b) Automatizar solo una parte y poner un control humano**
- c) Descartarla siempre
Retroalimentación: Impacto alto con riesgo alto queda en «Con supervisión». Se aprovecha el valor, pero una persona revisa lo
delicado.
:::

### P12 · Ejemplo guiado: Andrés ubica sus tareas
cubre: S3, H1, C2
fuentes: F-M5-05, F-M5-06
bloque: Tabla + escenario

Andrés eligió cinco tareas candidatas de su mapa y respondió las preguntas de impacto y riesgo. Así le quedaron:

| Tarea | Impacto | Riesgo | Cuadrante |
|---|---|---|---|
| Registrar en la planilla la mercadería recibida | Alto (3 sí) | Bajo (1 sí: un error descuadra el stock) | Empieza aquí |
| Avisar a vendedores cuando un producto baja del mínimo | Alto (3 sí) | Bajo (0 sí) | Empieza aquí |
| Avisar a clientes cuando un despacho se atrasa | Alto (3 sí) | Alto (2 sí: plazos, error difícil de ver) | Con supervisión |
| Enviar el reporte semanal a la jefatura | Bajo (1 sí) | Bajo (0 sí) | Si sobra tiempo |
| Armar los turnos del equipo | Bajo (1 sí) | Alto (3 sí: datos y efecto en personas) | No automatices |

El reporte semanal quedó con impacto bajo porque, después de simplificarlo (P08), ya le toma poco tiempo. Y los turnos quedaron
fuera: tocan la vida de sus compañeros, usan datos personales y un error se nota tarde.

Andrés tiene **dos tareas en «Empieza aquí»**. La guía de Lothian sugiere que, si hay muchas opciones en el cuadrante prioritario, se
elija entre ellas en conjunto, por ejemplo votando. Andrés lo conversó con su jefatura y, para su proyecto, eligió otra: el aviso de
atraso a clientes. Es la parte de su problema, los despachos atrasados, que más reclamos trae. Como quedó en «Con supervisión», le
pondrá un control humano en el tema 3.

:::actividad Clasifica según impacto y riesgo
Ubica cada tarea en un cuadrante:
1. Copiar a la planilla los pedidos que llegan por formulario (diario, sin datos sensibles). → Empieza aquí
2. Enviar cada semana a clientes el cobro de sus facturas vencidas, con montos y datos de contacto. → Con supervisión
3. Cambiar el color de las pestañas de una planilla cada mes. → Si sobra tiempo
4. Decidir solo con un puntaje quién pasa a entrevista. → No automatices
:::

### P13 · Fundamenta tu priorización
cubre: C2, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + ejemplo de respuesta

Ubicar una tarea en la matriz no basta: tienes que poder **explicar por qué** quedó ahí. Un fundamento sirve para que otra persona,
como tu jefatura, tu tutor o un equipo, entienda tu decisión y la pueda discutir.

Un buen fundamento tiene tres partes:
1. **El cuadrante:** «Ubico esta tarea en Empieza aquí».
2. **El impacto, con razones:** «porque se repite a diario y evita que los vendedores ofrezcan productos sin stock».
3. **El riesgo, con razones:** «y su riesgo es bajo, porque no usa datos personales y, si falla, el error se nota el mismo día».

Evita los fundamentos vagos, como «porque es importante» o «porque es fácil». Nombra el criterio y da el dato que lo respalda.

:::actividad Pide a Gemini que te cuestione
Pega en Gemini tu matriz con los fundamentos y escribe: «Actúa como una jefatura exigente. Para cada tarea, hazme una pregunta que
ponga a prueba si el impacto y el riesgo que asigné son correctos. No cambies mi clasificación: solo pregunta». Responde las
preguntas y ajusta lo que haga falta. La decisión final es tuya.
:::

:::comprueba
¿Cuál es el mejor fundamento para ubicar una tarea en «No automatices»?
- a) «Porque es complicada»
- b) «Porque no me gusta hacerla»
- **c) «Porque se hace una vez al mes y, si falla, afecta el sueldo de una persona»**
Retroalimentación: El fundamento nombra los dos criterios con datos: impacto bajo (una vez al mes) y riesgo alto (afecta a una
persona y a dinero).
:::

### P14 · El valor para las personas
cubre: A2, A1
fuentes: F-M5-01, F-M5-03, F-M5-06
bloque: Texto + cita destacada

¿Para qué automatizar? Si la respuesta es solo «para hacer más en menos tiempo», falta algo. La OIT advierte que el efecto de la IA
sobre la **calidad del trabajo**, como la intensidad y la autonomía, puede importar más que las cifras de empleo. Automatizar mal
puede hacer el trabajo más acelerado y no mejor.

Por eso la pregunta de impacto incluye a **otras personas**. Una buena automatización libera tiempo para lo que necesita a alguien:
atender mejor a un cliente, resolver un problema, enseñarle algo a un compañero. Esto coincide con la guía de Bath, que pide partir
de la necesidad de las personas.

Hay otra razón para aprender esto. La OCDE señala que el principal riesgo para las personas sin estudios superiores, las mujeres y
las personas mayores es **quedar atrás** por tener menos acceso a herramientas de IA que aumentan la productividad. Saber identificar
qué automatizar, y hacerlo con cuidado, es una forma de reducir esa brecha.

:::ejemplo Lo que hace Camila con el tiempo ganado
Camila imagina su primer mes como asistente administrativa. Si el registro de facturas se hace solo, puede dedicar ese rato a
llamar a los proveedores con pagos pendientes antes de que haya problemas. El tiempo ganado se nota en el trato con las personas.
:::

:::clave
Pregúntate siempre: si esta tarea se automatiza, ¿quién gana y qué hago yo con el tiempo que queda?
:::

### P15 · Cierre: tu matriz de impacto y riesgo
cubre: C1, C2, H1, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema miraste el trabajo **tarea por tarea**. Aprendiste a reconocer una tarea automatizable por su anatomía: se repite, sigue
reglas y trabaja con información. Viste que antes de automatizar conviene **eliminar y simplificar**, y que la decisión se toma con
dos criterios: **impacto** y **riesgo**, ordenados en una matriz.

:::actividad Tu matriz
Usa el mapa de tareas que armaste en P06:
1. Elige **al menos tres tareas** candidatas. Si puedes, cinco.
2. Para cada una, responde las tres preguntas de **impacto** (P09) y las tres de **riesgo** (P10).
3. Ubícalas en la **matriz** (P11). Puedes dibujarla en una hoja o en una planilla.
4. Escribe un **fundamento** de una o dos líneas por tarea, con las tres partes de P13.
5. Marca la tarea que elegirías para automatizar primero y explica por qué.

Guarda tu matriz. En el próximo tema vas a construir un flujo simple para la tarea que marcaste.
:::

:::clave
Si la tarea que elegiste quedó en «Con supervisión», no la descartes: en el tema 3 aprenderás a ponerle puntos de control humano.
:::

### Ideas clave

1. La exposición a la IA generativa se analiza tarea por tarea: dentro de un mismo cargo hay tareas expuestas y otras que siguen
   necesitando a una persona.
2. Exposición no es reemplazo: según la OIT, lo más probable es que los empleos se transformen, y el trabajo administrativo es el más
   expuesto.
3. Una tarea es buena candidata cuando se repite, sigue reglas claras y trabaja con información, como correos, planillas o agenda.
4. Antes de automatizar, elimina lo innecesario y simplifica lo que queda.
5. El impacto mira la frecuencia, el tiempo ganado y la mejora para las personas; el riesgo mira los datos personales, el efecto de un
   error y qué tan fácil es detectarlo.
6. La matriz de impacto y riesgo ordena las tareas en cuatro cuadrantes: empieza aquí, con supervisión, si sobra tiempo y no
   automatices.
7. Una priorización se fundamenta nombrando cada criterio y el dato que lo respalda.

### Glosario

- **Automatización**: hacer que una tarea se realice sola, con una herramienta que sigue pasos definidos cada vez que hace falta.
- **Tarea rutinaria**: tarea que se repite y sigue pasos claros que se pueden escribir como reglas.
- **Tarea no rutinaria**: tarea que exige resolver problemas, criterio en cada caso o trato con personas.
- **Exposición a la IA**: grado en que la IA generativa podría hacer o ayudar a hacer una tarea; no equivale a reemplazo.
- **Aumento del trabajo**: efecto de la tecnología que automatiza algunas tareas y deja tiempo para otras, sin eliminar el cargo.
- **Mapa de tareas**: lista de las tareas concretas de un cargo, escritas con un verbo y un objeto.
- **Impacto**: cuánto mejora el trabajo si una tarea se automatiza, por su frecuencia, el tiempo ganado y el beneficio para las
  personas.
- **Riesgo**: lo que puede salir mal si una tarea se hace sola, según los datos que usa, el efecto de un error y la dificultad de
  detectarlo.
- **Matriz de priorización**: cuadrícula de 2 × 2 que cruza dos criterios para decidir qué hacer primero.
- **Victoria rápida**: opción de mucho impacto y poco esfuerzo en la matriz clásica de impacto y esfuerzo.
- **Fundamento**: explicación de por qué una tarea quedó en un cuadrante, con los criterios y los datos que lo respaldan.

### Conexión con el proyecto

Tu matriz de impacto y riesgo (P15) es el primer paso del **Hito 5 del proyecto aplicado: prototipo de automatización de un paso del
proceso, con supervisión humana**. Aplícala a las tareas del desafío laboral que elegiste en el Hito 1 y elige el paso que vas a
automatizar. En el tema 2 construirás el flujo y en el tema 3 le agregarás los controles humanos. En los **casos M5-C1 y M5-C2**
analizarás cómo dos empresas decidieron automatizar con IA y qué efectos tuvo, y usarás tu matriz para evaluar esas decisiones.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md` y `investigacion/HERRAMIENTAS-1.md` (consultadas el 24-10-2026).

- F-M5-01 · OIT; Gmyrek, Berg y Bescond (2023). Generative AI and jobs: A global analysis of potential effects on job quantity and quality (ILO Working Paper 96). https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis-potential-effects-job-quantity-and
- F-M5-02 · OIT y NASK; Gmyrek, Berg, Kamiński y otros (2025). Generative AI and Jobs: A Refined Global Index of Occupational Exposure (ILO Working Paper 140). https://www.ilo.org/es/node/706766
- F-M5-03 · OCDE; Lane (2024). Who will be the workers most affected by AI? (OECD Artificial Intelligence Papers n.º 26). https://doi.org/10.1787/14dc6f89-en
- F-M5-04 · NBER; Autor, Levy y Murnane (2001). The Skill Content of Recent Technological Change: An Empirical Exploration (Working Paper 8337). https://www.nber.org/papers/w8337
- F-M5-05 · NHS Lothian, Lothian Quality (s. f.). Prioritisation matrix. https://qilothian.scot.nhs.uk/pc-resources-prioritisation-matrix
- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-16 · Congreso Nacional de Chile, BCN LeyChile (2024). Ley 21.719, regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales. https://www.bcn.cl/leychile/navegar?idLey=21719
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-14 · Google (s. f.). Empezar a usar la aplicación móvil Gemini. https://support.google.com/gemini/answer/14554984?hl=es

Notas para revisar antes de publicar:
- La matriz de **impacto y riesgo** es una adaptación del curso de la matriz de impacto y esfuerzo (F-M5-05); no se le atribuye a
  ninguna fuente. Las reglas de conteo («dos o tres sí») también son del curso.
- Las cifras de la OIT 2023 y 2025 usan métodos distintos: no deben ponerse juntas en una misma frase ni compararse.
- Ley 21.719: según su texto, rige desde el 01-12-2026; hay un proyecto de postergación en trámite (boletín 18623-07, ver F-M3-16 en
  `investigacion/M3.md`). Revisar antes de publicar.


## M5-AE2 · Flujos simples con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-09, F-H-94
bloque: Texto + lista con viñetas

En el tema anterior elegiste una tarea para automatizar. Ahora la vas a convertir en un **flujo**: una cadena de pasos que se pone en
marcha sola y que conecta la IA con tu correo, una planilla o tu calendario. No necesitas programar. Vas a usar herramientas
**no-code**, que se arman eligiendo bloques.

**Aprendizaje esperado:** Construir un flujo simple con una herramienta no-code que conecte IA con correo, planillas o calendario.

Al terminar, deberías poder:
- construir un flujo que funcione, de 3 a 5 pasos;
- probarlo con datos de práctica, encontrar sus fallas y corregirlas.

Este tema es un **laboratorio**. Tienes dos caminos:
- **Con computador** (el tuyo, uno prestado o el de una biblioteca): usarás **Make**, que en su plan gratuito permite flujos de varios
  pasos.
- **Solo con el celular:** usarás las **acciones programadas de Gemini**, conectadas a Gmail y Calendar, o las tareas programadas de
  ChatGPT.

En los dos caminos vas a trabajar con **datos ficticios**: correos y planillas inventados para practicar. Así puedes equivocarte sin
que le pase nada a nadie.

:::clave
Un flujo que funciona a la primera es raro. Probar, ver qué falló y corregir es parte del trabajo, no una señal de que lo hiciste mal.
:::

### P02 · Anatomía de un flujo: disparador, acciones y datos
cubre: S1
fuentes: F-M5-07, F-M5-09
bloque: Proceso (process block) en 3 partes

Todo flujo automatizado tiene tres elementos. Las plataformas les dan nombres un poco distintos, pero la idea es la misma.

1. **Disparador.** Es el evento que inicia el flujo. Por ejemplo: «llega un correo nuevo a la bandeja de entrada». Microsoft lo
   llama *desencadenador*; Zapier, *trigger*.
2. **Acciones.** Son lo que el flujo hace después, una o varias. Por ejemplo: «resumir el correo con IA» y «agregar una fila a la
   planilla».
3. **Datos.** Es la información que pasa de un paso al siguiente: el remitente, el asunto y el texto del correo viajan hasta la IA,
   y lo que responde la IA viaja hasta la planilla.

Zapier llama a sus flujos *Zaps* y los define así: un disparador seguido de una o más acciones, que conectan aplicaciones distintas.

:::ejemplo El flujo que Andrés tiene en la cabeza
Andrés quiere que, cada vez que marque un despacho como «atrasado» en su planilla de despachos (**disparador**), la IA redacte el
aviso al cliente con su plantilla (**acción 1**) y lo deje en la columna «Borrador» de esa fila (**acción 2**). Los **datos** son el
pedido, la empresa cliente y la nueva fecha, y el borrador que escribe la IA.
:::

:::actividad Encuentra las tres partes
Lee este flujo y marca cuál es el disparador, cuáles las acciones y cuáles los datos: «Cuando alguien completa el formulario de
consultas, la IA clasifica la consulta y se agrega una fila con el nombre, la consulta y la categoría».
:::

### P03 · Tres tipos de disparador
cubre: S1, S2
fuentes: F-M5-07, F-H-55, F-H-61
bloque: Pestañas (tabs) con los tres tipos

La documentación de Power Automate distingue tres tipos de flujo según su disparador. Sirven para cualquier herramienta:

| Tipo | Cuándo se inicia | Ejemplo |
|---|---|---|
| **Automatizado** | Cuando ocurre un evento | Llega un correo, se agrega una fila |
| **Instantáneo o manual** | Cuando alguien aprieta un botón, también desde el teléfono | Apretar «registrar» al terminar una tarea |
| **Programado** | En una fecha, hora y frecuencia | Todos los días a las 8:00 |

Elegir bien el disparador es la primera decisión de diseño. Si tu tarea depende de que llegue algo, como un correo o un formulario, te
sirve uno automatizado. Si se hace siempre a la misma hora, como un resumen diario, te sirve uno programado.

Los dos caminos del celular usan disparadores **programados**. Las acciones programadas de Gemini preparan, por ejemplo, un resumen
de tus correos o de tu calendario a la hora que elijas. Las tareas programadas de ChatGPT, en la cuenta gratuita, se repiten como
máximo una vez al día y en franjas amplias (mañana, tarde o noche), sin hora exacta.

:::comprueba
Camila quiere, cada mañana, una lista de los correos con documentos nuevos de su cuenta de práctica. ¿Qué disparador le sirve?
- a) Automatizado: cuando llega un correo
- **b) Programado: todos los días a una hora**
- c) Manual: cuando aprieta un botón
Retroalimentación: La lista se hace a una hora fija, todos los días. Eso es un disparador programado.
:::

### P04 · Condiciones y datos entre pasos
cubre: S1, A1
fuentes: F-M5-08, F-M5-09, F-M5-10
bloque: Texto + imagen (flujo con dos ramas)

Dos piezas más completan el flujo.

**La condición.** Hace que el flujo siga, o haga algo distinto, solo si se cumple una regla. En Power Automate una condición tiene dos
ramas, una si la regla es verdadera y otra si es falsa. Para armarla se elige un dato de un paso anterior, un operador (por ejemplo
«contiene» o «es mayor o igual que») y un valor. Zapier tiene **filtros**, que dejan seguir el flujo solo si se cumple la condición, y
**rutas**, que hacen acciones distintas según el caso.

**El mapeo de datos.** Para que un dato pase de un paso a otro, se **mapea**: en el campo del paso siguiente eliges el dato que viene
del paso anterior. Si en vez de mapear escribes un texto a mano, ese texto se repetirá igual en cada ejecución. Si mapeas, el flujo
usa el dato real de cada evento. El mapeo solo va de pasos anteriores a posteriores.

:::ejemplo Condición y mapeo en el flujo de Andrés
Andrés pone una condición: seguir solo si la columna «Estado» **contiene** «atrasado». En la instrucción para la IA, el número de
pedido lo mapea desde la fila de la planilla. Así cada borrador trae el pedido que corresponde.
:::

:::error Escribir el dato a mano en vez de mapearlo
Si en el campo «Remitente» escribes el correo de un cliente de prueba, todas las filas dirán lo mismo, aunque escriban personas
distintas. El dato que cambia en cada ejecución se mapea desde el paso anterior.
:::

### P05 · Herramientas no-code: cuál sirve gratis
cubre: S2
fuentes: F-H-93, F-H-94, F-H-95, F-H-96, F-H-97, F-H-98, F-H-99, F-H-55, F-H-61
bloque: Tabla comparativa + texto

Las plataformas **no-code** arman flujos eligiendo disparadores y acciones ya hechos, sin programar. Hay muchas, pero en su versión
gratuita no todas permiten un flujo de 3 a 5 pasos con IA:

| Herramienta | Plan gratuito | ¿Sirve para este laboratorio? |
|---|---|---|
| **Make** | 1.000 créditos al mes; varios pasos; la IA gasta más créditos | **Sí, con computador** |
| **Acciones programadas de Gemini** | Hasta 10 activas, con Gmail y Calendar conectados | **Sí, en el celular** (se está habilitando de a poco) |
| **Tareas programadas de ChatGPT** | 3 tareas, como máximo una vez al día | Plan B en el celular |
| Zapier | 100 tareas al mes, solo 2 pasos | No: los flujos de más pasos son de pago |
| IFTTT | 2 applets, sin varios pasos ni IA | No |
| Power Automate (nube) | Ya no acepta cuentas personales de Gmail u Outlook | No |
| n8n | En la nube, solo planes pagados; gratis si lo instalas en un servidor propio | No, para este curso |
| Google Apps Script | Gratis con cuenta Gmail, con cuotas diarias | Solo como opción avanzada: es código |

Los planes gratuitos cambian seguido. Antes de empezar, revisa qué ofrece hoy la herramienta que elijas.

:::error «Si es gratis, sirve para cualquier flujo»
Varias plataformas son gratis, pero con límites que importan: Zapier gratis solo permite un disparador y una acción, e IFTTT gratis no
tiene IA. Revisa el límite de pasos antes de diseñar.
:::

### P06 · Conectar servicios sin exponer tus datos
cubre: S3, A1
fuentes: F-M5-07, F-M5-09, F-H-62, F-H-61, F-H-15
bloque: Texto + recuadro destacado

Un flujo conecta servicios distintos: tu correo, una planilla, el calendario y la IA. Esa conexión se hace con **conectores**: cada
servicio ofrece sus propios disparadores y acciones ya preparados. Para usarlos, la plataforma te pide **iniciar sesión en el
servicio y darle permiso** para leer o escribir en tu cuenta.

En el camino del celular, Gemini usa sus **aplicaciones conectadas**: con ellas puede resumir correos de Gmail y crear eventos en
Google Calendar. Las acciones programadas exigen una cuenta personal y tener la actividad guardada. Si la apagas, las aplicaciones
conectadas quedan limitadas.

Esto tiene un costo en privacidad. Según Google, con la actividad guardada, revisores humanos pueden leer conversaciones para mejorar
sus servicios. Lo viste en el módulo 3.

Por eso, para este laboratorio, el curso te recomienda:
- usar, si puedes, una **cuenta de Gmail solo para practicar**;
- trabajar con **correos y planillas ficticios**, sin nombres, RUT ni teléfonos reales;
- leer qué permisos pide cada conexión antes de aceptar.

:::clave
Conectar un servicio es darle llaves de tu cuenta a otra herramienta. Hazlo con una cuenta de práctica y con datos inventados hasta que
el flujo esté probado.
:::

:::ejemplo Los correos de prueba de Camila
Camila crea una cuenta de Gmail para el curso. Se envía tres correos inventados de «clientes» con asunto «[PRUEBA] Consulta», sin
datos de personas reales. Esos serán sus datos de práctica.
:::

### P07 · Diseña el flujo antes de construirlo
cubre: H1, A1
fuentes: F-M5-06, F-M5-10
bloque: Tabla + ordenar pasos (sorting activity)

Antes de abrir una herramienta, **dibuja el flujo en una tabla**. La guía de la Universidad de Bath pide documentar el propósito de
cada flujo, sus entradas, sus salidas y sus dependencias. Hacerlo antes te evita armar pasos que después no encajan.

Este es el flujo del laboratorio, «Registro de consultas»:

| N.º | Tipo | Servicio | Recibe | Entrega |
|---|---|---|---|---|
| 1 | Disparador | Gmail | Correo nuevo | Remitente, asunto, texto, fecha |
| 2 | Condición | — | Asunto | Sigue solo si contiene «[PRUEBA]» |
| 3 | Acción con IA | IA | Asunto y texto | Categoría y resumen en una línea |
| 4 | Acción | Google Sheets | Fecha, remitente, respuesta de la IA | Una fila nueva |

Son cuatro pasos. Si quieres un quinto, agrega uno que te avise cuando la categoría sea «reclamo».

Fíjate en el orden: cada paso solo puede usar datos de los pasos **anteriores**. La IA no puede trabajar con un correo que todavía no
llegó, y la planilla no puede anotar una categoría que la IA aún no escribió.

:::actividad Ordena los pasos
Ordena este flujo de Andrés: (a) escribir el borrador en la columna «Borrador»; (b) Andrés marca un despacho en la planilla; (c) la
IA redacta el aviso con la plantilla; (d) seguir solo si el estado contiene «atrasado». → Orden correcto: b, d, c, a.
:::

:::clave
Pide ayuda a Gemini para el diseño: describe tu tarea y pídele la tabla de pasos con lo que recibe y entrega cada uno. Después revisa
que el orden de los datos tenga sentido.
:::

### P08 · Laboratorio con Make (1): preparar y crear el disparador
cubre: H1, S2, S3
fuentes: F-H-94, F-M5-09
bloque: Proceso paso a paso

Este camino necesita un computador con navegador. Make llama **escenarios** a sus flujos y **módulos** a sus pasos. El plan gratuito
da **1.000 créditos al mes**: cada acción de un módulo, como leer un correo o escribir una fila en Google Sheets, suele gastar un
crédito, y las funciones de IA pueden gastar más. Si se acaban, los escenarios se detienen. Para probar, alcanza de sobra.

1. **Prepara los datos ficticios.** Crea en Google Sheets una planilla «Registro de consultas (prueba)» con cuatro columnas: Fecha,
   Remitente, Asunto y Análisis de la IA. Envíate tres correos inventados con asunto «[PRUEBA] …»: un pedido, un reclamo y una
   consulta general.
2. **Crea tu cuenta gratuita en Make** y un escenario nuevo.
3. **Ponle un nombre claro:** «M5 · Registro de consultas · v1». Así sabrás qué hace y qué versión es.
4. **Agrega el primer módulo: Gmail.** Elige leer los correos nuevos de tu bandeja de entrada.
5. **Conecta tu cuenta de práctica.** Make te pedirá permiso para acceder a Gmail. Lee qué pide y acepta.
6. **Trae un correo de prueba.** Al configurar el disparador, las plataformas no-code suelen traer un registro existente para
   armar los pasos siguientes; así lo hace Zapier, por ejemplo. Verifica que aparezca uno de tus correos «[PRUEBA]».

:::error Probar con la bandeja de entrada real
Si conectas tu correo personal sin condición, el flujo podría mandar a la IA correos con datos tuyos o de otras personas. Usa la
cuenta de práctica y agrega la condición «[PRUEBA]» antes de la IA (siguiente pantalla).
:::

### P09 · Laboratorio con Make (2): condición, IA y planilla
cubre: H1, S1, S3, C1
fuentes: F-M5-08, F-M5-10, F-H-94
bloque: Proceso paso a paso

Ahora completas los pasos 2 a 4 del diseño de P07.

7. **Agrega la condición** entre Gmail y el paso siguiente: que el flujo siga solo si el **asunto contiene** «[PRUEBA]». Elige el
   asunto desde los datos del módulo de Gmail, el operador «contiene» y el valor «[PRUEBA]».
8. **Agrega el módulo de IA.** Escribe la instrucción y mapea los datos del correo donde corresponde:
   «Clasifica esta consulta en una sola categoría: pedido, reclamo u otra. Luego resúmela en una línea. Responde así:
   Categoría: … · Resumen: … No agregues datos que no estén en el correo. Asunto: [asunto] · Texto: [texto del correo]».
   Donde dice [asunto] y [texto del correo], **mapea** los campos de Gmail; no los escribas a mano.
9. **Agrega el módulo de Google Sheets** para agregar una fila en tu planilla de prueba. Mapea Fecha, Remitente y Asunto desde Gmail,
   y Análisis de la IA desde la respuesta del módulo de IA.
10. **Guarda el escenario** con su nombre.

Ya tienes un flujo de **cuatro pasos**: disparador, condición, IA y planilla.

:::ejemplo La primera fila de Camila
Camila ejecuta el escenario con su correo «[PRUEBA] Pedido de 20 resmas». En la planilla aparece: la fecha, su correo de práctica, el
asunto y «Categoría: pedido · Resumen: solicita 20 resmas de papel para el lunes». El flujo funciona.
:::

:::clave
Puedes pedirle a Gemini que mejore la instrucción del paso 8. Pégale tu versión y pregúntale qué ambigüedades tiene.
:::

### P10 · Camino en el celular: acciones programadas de Gemini
cubre: H1, S2, S3
fuentes: F-H-61, F-H-62, F-H-55
bloque: Proceso paso a paso + recuadro

Si no tienes computador, puedes armar un flujo **programado** con Gemini. La app permite hasta **10 acciones programadas** activas en
Android, iPhone o la web, con una cuenta personal y la actividad guardada. Google la está habilitando de a poco, así que puede que
todavía no aparezca en tu cuenta: si no la ves, usa el plan B de abajo.

1. **Conecta Gmail y Calendar** en las aplicaciones conectadas de Gemini.
2. **Pide a Gemini que programe una acción diaria**, con un texto como este: «Todos los días a las 8:00, revisa los correos de Gmail
   de las últimas 24 horas cuyo asunto empiece con [PRUEBA]. Para cada uno, dame su categoría (pedido, reclamo u otra) y un resumen de
   una línea. Si alguno menciona una fecha de entrega o de reunión, propónme un evento con título, fecha y hora. No crees eventos sin
   que yo lo confirme».
3. **Revisa el resultado** cuando llegue y, si está bien, pide a Gemini que **cree el evento** en Calendar.

Son cinco pasos: disparador programado, datos de Gmail filtrados por asunto, IA que clasifica y resume, entrega del resultado y
evento en Calendar después de tu revisión.

**Plan B: tareas programadas de ChatGPT.** La cuenta gratuita permite 3 tareas activas, que se repiten como máximo una vez al día, y
avisa por notificación o por correo. No puede activarse con un correo de Gmail. Sirve para un flujo más simple: cada mañana, la IA te
prepara por correo una lista de seguimiento a partir de datos ficticios que dejas escritos en la tarea.

### P11 · Prueba tu flujo como si fuera a fallar
cubre: S4, C2, A2
fuentes: F-M5-06, F-M5-09
bloque: Tabla + actividad

Que el flujo funcione con un correo no significa que esté listo. La guía de Bath pide probar **la mayor cantidad posible de
escenarios** antes de poner un flujo en marcha. Probar es buscar a propósito los casos en que podría fallar.

Arma un **plan de pruebas** con datos ficticios. Para cada caso, anota qué esperas y qué pasó:

| Caso de prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Correo «[PRUEBA]» con un pedido | Fila con categoría «pedido» | |
| Correo «[PRUEBA]» con un reclamo | Fila con categoría «reclamo» | |
| Correo **sin** «[PRUEBA]» en el asunto | No pasa nada: la condición lo detiene | |
| Correo «[PRUEBA]» casi vacío | La IA responde «otra» y no inventa | |
| Dos correos «[PRUEBA]» seguidos | Dos filas, cada una con sus datos | |

El tercer caso es clave: comprueba que tu condición protege los correos que no son de prueba. El cuarto revisa si la IA inventa
contenido cuando le falta información. Si usas el camino del celular, adapta el resultado esperado: en vez de filas, revisa que el
resumen de Gemini traiga cada correo «[PRUEBA]» con su categoría, deje fuera el que no lo tiene y no cree eventos sin tu confirmación.

:::actividad Corre tu plan de pruebas
Envía los cinco correos de prueba y completa la tabla. Marca con una X cada caso en que lo obtenido no coincide con lo esperado.
Esas son las fallas que corregirás en la pantalla siguiente.
:::

:::clave
Cada prueba gasta créditos o usos del plan gratuito. Cinco casos bien elegidos valen más que cincuenta iguales.
:::

### P12 · Lee el error y corrige
cubre: S4, C2, A2
fuentes: F-M5-11, F-M5-10, F-H-94
bloque: Texto + escenario de diagnóstico

Cuando un flujo falla, no adivines: **busca dónde falló**. Las plataformas guardan un historial de ejecuciones. En Zapier, por ejemplo,
se abre la ejecución con error, se ubica el paso que falló y se leen su diagnóstico y el mensaje de error. Busca la opción equivalente
en la herramienta que uses. Una vez corregida la causa, Zapier permite **volver a ejecutar** lo que falló para no perder datos.

Fallas frecuentes y qué revisar:
- **Todas las filas dicen lo mismo:** un campo quedó escrito a mano en vez de mapeado.
- **Un campo aparece vacío:** el mapeo se rompió. Reordenar o duplicar pasos, o cambiar de aplicación, puede romperlo; Zapier lo marca
  con una advertencia amarilla.
- **El flujo no corre:** el disparador no detectó el correo, o la condición está mal escrita.
- **El escenario se detuvo:** en Make, se acabaron los créditos del mes.

Después de cada corrección, **vuelve a correr la prueba** que falló.

:::comprueba
En la planilla de Andrés, todos los borradores dicen «pedido 412», aunque los despachos atrasados son distintos. ¿Cuál es el error
más probable?
- a) La IA está inventando el número de pedido
- **b) El número se escribió a mano en vez de mapearlo desde la fila**
- c) Se acabaron los créditos
Retroalimentación: Un texto fijo se repite en cada ejecución. El pedido debe mapearse desde el dato de la planilla.
:::

:::error «Si falló, la herramienta no sirve»
La mayoría de las fallas están en la configuración: un mapeo, una condición, un permiso. Leer el error y corregir es la parte normal
del trabajo con flujos.
:::

### P13 · Prolijidad: documenta tu flujo
cubre: A1, C1
fuentes: F-M5-06, F-M5-09, F-M5-10
bloque: Texto + lista de verificación (checklist)

Un flujo que solo entiende quien lo armó es frágil. Si mañana falla, o si otra persona tiene que revisarlo, la documentación hace la
diferencia. La guía de Bath pide documentar el propósito, las entradas, las salidas y las dependencias, usar nombres claros y
monitorear los flujos: apaga los que fallan una y otra vez o los que llevan 30 días sin activarse.

Arma una **ficha del flujo** con esta lista:
- [ ] **Nombre** con una convención: módulo, propósito y versión (por ejemplo, «M5 · Registro de consultas · v2»).
- [ ] **Propósito:** qué tarea resuelve y para quién.
- [ ] **Disparador:** qué lo inicia.
- [ ] **Pasos:** la tabla de P07, actualizada.
- [ ] **Datos que entran y que salen** de cada paso.
- [ ] **Dependencias:** cuentas conectadas, planilla, créditos o límites del plan.
- [ ] **Pruebas:** tu tabla de P11, con lo que corregiste.

Un flujo es **funcional** cuando el disparador se activa y cada acción recibe los datos correctos del paso anterior. Tu tabla de
pruebas es la evidencia.

:::comprueba
¿Cuándo puedes decir que tu flujo es funcional?
- a) Cuando lo guardaste sin errores
- **b) Cuando el disparador se activa y cada paso recibe los datos correctos del anterior, comprobado con pruebas**
- c) Cuando la IA responde algo
Retroalimentación: Guardar no es probar. Funciona cuando cada paso hace lo que debe con los datos reales de cada ejecución, y lo
compruebas con tu plan de pruebas.
:::

### P14 · Cierre: tu prototipo de flujo
cubre: H1, C1, C2, A2
fuentes: F-M5-06, F-M5-11
bloque: Texto + actividad de cierre (entrega)

En este tema armaste un flujo con sus tres elementos: **disparador, acciones y datos**, más una **condición**. Elegiste una
herramienta según lo que permite su plan gratuito, conectaste servicios con una cuenta de práctica, y lo **probaste y corregiste** con
datos ficticios.

:::actividad Tu flujo para el proyecto
Toma la tarea que marcaste en tu matriz del tema 1:
1. **Diseña** su flujo en una tabla, como en P07, con 3 a 5 pasos. Al menos uno debe usar IA y otro, correo, planilla o calendario.
2. **Constrúyelo** en Make o con las acciones programadas de Gemini. Usa datos ficticios.
3. **Pruébalo** con al menos cuatro casos, incluido uno que debería detenerse.
4. **Corrige** lo que falló y anota qué cambiaste.
5. **Documenta** el flujo con la ficha de P13.

Guarda capturas de pantalla del flujo y de tu tabla de pruebas, sin datos reales.
:::

:::clave
Tu flujo todavía funciona sin control humano. En el próximo tema vas a decidir dónde debe revisar una persona y qué hacer si algo sale
mal.
:::

### Ideas clave

1. Un flujo automatizado tiene un disparador que lo inicia, una o más acciones y datos que pasan de un paso al siguiente.
2. Los disparadores pueden ser automatizados (tras un evento), manuales (con un botón) o programados (fecha, hora y frecuencia).
3. Una condición hace que el flujo siga solo si se cumple una regla; los datos se mapean desde pasos anteriores, porque un texto
   escrito a mano se repite igual siempre.
4. En planes gratuitos, Make permite flujos de varios pasos con IA desde un computador; en el celular, las acciones programadas de
   Gemini o las tareas programadas de ChatGPT. Zapier e IFTTT gratis no alcanzan para 3 a 5 pasos.
5. Conectar servicios es dar permisos sobre una cuenta: practica con una cuenta de prueba y datos ficticios.
6. Probar es buscar los casos en que el flujo podría fallar; ante un error, se revisa el historial, se corrige la causa y se vuelve a
   probar.
7. Documentar nombre, propósito, pasos, datos, dependencias y pruebas hace que el flujo se pueda revisar y mantener.

### Glosario

- **Flujo automatizado**: cadena de pasos que se ejecuta sola cuando ocurre un evento o llega una hora definida.
- **No-code**: forma de crear flujos o aplicaciones eligiendo bloques ya hechos, sin escribir código.
- **Disparador**: evento que inicia un flujo, como la llegada de un correo o una hora programada.
- **Acción**: lo que hace el flujo después del disparador, como resumir un texto o agregar una fila.
- **Condición**: regla que decide si el flujo sigue o qué camino toma, según un dato de un paso anterior.
- **Filtro (en un flujo)**: condición que deja seguir el flujo solo si se cumple una regla.
- **Mapear un campo**: conectar un dato que sale de un paso con un campo de un paso posterior.
- **Conector**: componente que une una plataforma con un servicio, como Gmail o Google Sheets, y ofrece sus disparadores y acciones.
- **Datos de prueba**: datos ficticios o de ejemplo que se usan para armar y probar un flujo sin arriesgar información real.
- **Plan de pruebas**: lista de casos con su resultado esperado, para comprobar si un flujo funciona.
- **Historial de ejecuciones**: registro de cada vez que corrió un flujo, con los pasos que funcionaron y los que fallaron.
- **Escenario**: nombre que Make da a un flujo; sus pasos se llaman módulos.
- **Crédito**: unidad con que Make cuenta el uso del plan; cada acción de un módulo suele gastar uno.
- **Acción programada**: pedido a Gemini que se ejecuta solo, en un día y hora definidos.

### Conexión con el proyecto

El flujo que construiste y probaste en la actividad de cierre (P14) es el **prototipo del Hito 5 del proyecto aplicado: prototipo de
automatización de un paso del proceso, con supervisión humana**. Automatiza el paso que elegiste con tu matriz del tema 1, dentro del
desafío laboral que vienes trabajando desde el Hito 1. Tu ficha (P13) y tu tabla de pruebas (P11) son parte de la entrega. En el tema 3
le agregarás los puntos de supervisión humana y el plan de contingencia que exige el hito.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md` y `investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).

- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-07 · Microsoft Learn (2026). Desencadenadores (Triggers) - Power Automate. https://learn.microsoft.com/es-es/power-automate/triggers-introduction
- F-M5-08 · Microsoft Learn (2022). Agregar una condición a un flujo de nube en Power Automate. https://learn.microsoft.com/es-es/power-automate/add-condition
- F-M5-09 · Zapier Help Center (2026). Learn key concepts in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier
- F-M5-10 · Zapier Help Center (2026). Send data between steps by mapping fields. https://help.zapier.com/hc/en-us/articles/8496343026701
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-55 · OpenAI (2026). Scheduled tasks in ChatGPT. https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini (Android). https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-62 · Google (s. f.). Utilizar y gestionar Aplicaciones conectadas en Gemini. https://support.google.com/gemini/answer/13695044?hl=es
- F-H-93 · Zapier (2026). Plans & Pricing. https://zapier.com/pricing
- F-H-94 · Make (s. f.). Pricing. https://www.make.com/pricing
- F-H-95 · n8n (s. f.). Pricing. https://n8n.io/pricing/
- F-H-96 · n8n (s. f.). Community edition features. https://docs.n8n.io/hosting/community-edition-features/
- F-H-97 · Microsoft (2026). Cambios importantes (retiradas) en Power Platform. https://learn.microsoft.com/en-us/power-platform/important-changes-coming
- F-H-98 · IFTTT (s. f.). Plans. https://ifttt.com/plans
- F-H-99 · Google (2026). Apps Script: cuotas de los servicios de Google. https://developers.google.com/apps-script/guides/services/quotas

Pendiente de probar a mano antes de publicar:
- **Acciones programadas de Gemini (P10):** la ayuda en español no exige plan (F-H-61), pero la tabla de límites (F-H-60) parece
  dejarlas en planes de pago. **Pilotear con una cuenta gratuita en Chile antes de publicar.** Comprobar también si se crean con un
  pedido en lenguaje natural, si filtran por asunto y si pueden proponer eventos de Calendar.
- **Tareas programadas de ChatGPT (P10):** la página de precios (F-H-54) las muestra como función de Plus, pero la ayuda (F-H-55) da 3
  tareas a las cuentas Free. Confirmar en la app.
- **Make (P08, P09, P12):** las fuentes confirman el plan gratuito, los créditos y los módulos que leen correos y escriben filas en
  Google Sheets (F-H-94). No confirman los nombres exactos de los módulos de Gmail e IA, la forma de poner la condición (filtro) entre
  módulos, el historial de ejecuciones ni si el editor funciona en el celular. Recorrer el laboratorio completo con una cuenta
  gratuita y ajustar los pasos.


## M5-AE3 · Supervisión humana y riesgos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-12, F-M5-13
bloque: Texto + lista con viñetas

En el tema anterior construiste un flujo que funciona solo. Eso es una ventaja y también un riesgo: un flujo no se cansa, pero
tampoco duda. Si algo sale mal, lo repite cada vez. En este tema vas a decidir **dónde tiene que mirar una persona** y **qué hacer si
el flujo falla**.

**Aprendizaje esperado:** Incorporar puntos de supervisión humana y controles de riesgo en un flujo automatizado, evaluando su efecto.

Al terminar, deberías poder:
- definir puntos de control humano según el riesgo de cada paso;
- elaborar un plan de contingencia para tu flujo;
- comprobar con pruebas si tus controles sirven.

Vas a trabajar con **casos**: situaciones de trabajo en que un flujo automatizado con IA trae un problema. En cada uno vas a analizar
qué pasó, qué riesgo apareció y qué control lo habría evitado. Para eso usarás ideas de tres marcos reconocidos: las directrices
éticas de la Comisión Europea, el marco de gestión de riesgos de IA del NIST de Estados Unidos y los principios de la OCDE.

Además de Camila y Andrés, aparece **Paula**, ejecutiva de atención al cliente en una tienda de electrodomésticos. Las tres personas
y sus casos son ficticios. También verás dos casos reales de empresas, en P06 y en P13, que analizarás a fondo en los
casos M5-C1 y M5-C2.

:::clave
Automatizar una tarea no te quita la responsabilidad por su resultado. Te cambia el trabajo: de hacer la tarea a supervisar que se
haga bien.
:::

### P02 · Caso 1: el error que se repite solo
cubre: S1
fuentes: F-M5-10, F-M5-14
bloque: Escenario (scenario) con preguntas

Andrés puso en marcha su flujo: cuando marca un despacho como «atrasado» en la planilla, la IA redacta el aviso al cliente con la
nueva fecha y lo deja en la columna «Borrador». Andrés copia el borrador y lo envía. Funcionó en todas sus pruebas.

Una semana después, un cliente llama molesto: su pedido no llegó el día que decía el aviso. Andrés revisa la planilla: desde el
lunes, una compañera anota las fechas nuevas de otra forma y la IA las interpreta mal. **Cinco avisos** salieron con la fecha
equivocada, y los clientes ya habían organizado su recepción con esos datos.

Esto es un **error en cadena**. En un flujo, los datos de un paso alimentan al siguiente. Un dato erróneo, o un mapeo que se rompió,
se repite en cada ejecución y pasa a quien usa el resultado. Además, la IA generativa puede **confabular**: entregar contenido falso
con tono seguro, como una fecha que la planilla no decía.

Preguntas para analizar el caso:
1. ¿En qué paso nació el error y en qué paso se hizo visible?
2. ¿Quién se dio cuenta, y cuánto tiempo pasó?
3. ¿Qué control habría detectado el problema el primer día?

:::error «Si pasó las pruebas, funcionará siempre»
Las pruebas revisan los casos que imaginaste. En la vida real aparecen otros: un proveedor nuevo, un formato distinto, un correo
reenviado. Por eso un flujo necesita supervisión también después de ponerlo en marcha.
:::

### P03 · Caso 2: datos personales en el flujo
cubre: S1, A1
fuentes: F-M5-14, F-M5-06, F-H-15, F-H-61
bloque: Escenario (scenario) con preguntas

Camila prepara una entrevista para un puesto de asistente administrativa. Le preguntan qué automatizaría. Ella piensa en las
postulaciones que llegan por correo: un flujo podría copiar a una planilla los datos de cada currículum y pedirle a la IA un resumen
de cada postulante.

Antes de responder, Camila analiza el riesgo. Ella misma es postulante, y sabe lo que hay en un currículum: nombre, RUT, teléfono,
dirección, experiencia y a veces datos de salud o de familia.

El perfil de riesgos de IA generativa del NIST incluye la **privacidad**: la filtración o el uso no autorizado de datos personales. La
guía de la Universidad de Bath pide cuidar la protección de datos en cada flujo. Y en el camino del celular hay un punto más: para
usar acciones programadas, Gemini necesita la actividad guardada, y con ese ajuste encendido revisores humanos pueden leer
conversaciones.

Camila responde en la entrevista: «Automatizaría solo el registro de que llegó una postulación, con fecha y cargo. El análisis de
cada currículum lo haría una persona».

Preguntas para analizar el caso:
1. ¿Qué datos personales pasan por cada paso del flujo?
2. ¿Cuáles son necesarios para la tarea y cuáles sobran?
3. ¿Qué parte del flujo decide algo sobre una persona?

:::clave
El dato más seguro es el que no entra al flujo. Antes de agregar un campo, pregúntate si la tarea lo necesita de verdad.
:::

### P04 · Caso 3: el sesgo que se multiplica
cubre: S1, A2
fuentes: F-M5-14
bloque: Escenario (scenario) con preguntas

Paula armó un flujo que clasifica los reclamos de clientes en urgencia alta, media o baja. Así el equipo atiende primero lo urgente.
Al mes, revisa la planilla y nota algo: los reclamos escritos con faltas de ortografía o en tono muy informal quedan casi siempre en
«baja», aunque algunos eran graves, como un refrigerador que llegó sin funcionar.

El NIST describe dos riesgos que aparecen juntos en este caso:
- **Sesgo dañino.** La IA puede reproducir sesgos y, al automatizarla, aumenta la **velocidad y la escala** con que se propagan. Un
  criterio injusto aplicado a mano afecta a unos pocos; dentro de un flujo, afecta a todos.
- **Sesgo de automatización.** Es confiar de más en lo que entrega un sistema automático. El equipo de Paula dejó de leer los reclamos
  marcados como «baja» porque «el sistema ya los clasificó». Esa dependencia excesiva agrava el error.

Preguntas para analizar el caso:
1. ¿A quiénes perjudicó la clasificación, y por qué nadie lo notó antes?
2. ¿Qué habría pasado si una persona revisaba cada semana una muestra de reclamos en «baja»?
3. ¿Debería la IA decidir sola la urgencia de un reclamo?

:::error «Lo decidió el sistema, así que es objetivo»
Un sistema automático puede repetir sesgos de sus datos y aplicarlos a todos los casos, más rápido. Que no lo haya decidido una
persona no lo hace neutral: hay que revisar sus resultados.
:::

### P05 · Decisiones automatizadas sobre personas: la ley en Chile
cubre: S1, S2, A1
fuentes: F-M5-16, F-M3-16
bloque: Texto + recuadro destacado

Los casos 2 y 3 tienen algo en común: el flujo decide o influye en algo que afecta a una persona. En Chile, la **Ley 21.719** modifica
la Ley 19.628 sobre datos personales y agrega un artículo 8° bis sobre **decisiones automatizadas**.

Según ese artículo, toda persona tiene derecho a **oponerse y a no ser objeto de decisiones basadas en el tratamiento automatizado de
sus datos**, incluida la elaboración de perfiles, cuando le produzcan efectos jurídicos o le afecten significativamente. Hay
excepciones, por ejemplo cuando la decisión es necesaria para un contrato, cuando hay consentimiento expreso o cuando lo autoriza una
ley. Pero aun en esos casos, quien es responsable de los datos debe asegurar que la persona reciba información y una explicación,
pueda pedir **intervención humana**, expresar su punto de vista y pedir que se revise la decisión.

**¿Desde cuándo?** Según su texto, estos cambios rigen desde el **1 de diciembre de 2026**. Hay un proyecto de ley en trámite en el
Senado que propone postergar esa fecha a diciembre de 2027; todavía no está aprobado. Antes de aplicar esta norma, revisa en qué
estado está.

:::comprueba
Según la Ley 21.719, ¿qué debe poder pedir una persona afectada significativamente por una decisión automatizada, en los casos en que
la ley la permite?
- a) Que se borre el flujo de la empresa
- **b) Intervención humana y revisión de la decisión**
- c) Una copia de las instrucciones de la IA
Retroalimentación: La ley asegura información, explicación, intervención humana, expresar su punto de vista y pedir revisión.
:::

### P06 · Tres formas de supervisión humana
cubre: S2
fuentes: F-M5-12, F-M5-13, F-M5-15, F-M5C1-01, F-M5C1-05, F-M5C1-06
bloque: Pestañas (tabs) con los tres niveles

Las directrices éticas para una IA fiable de la Comisión Europea ponen como primer requisito la **acción y supervisión humanas**.
Describen tres formas de supervisar, que en inglés se conocen con nombres que vas a encontrar a menudo:

| Forma | Qué hace la persona | En inglés | En un flujo |
|---|---|---|---|
| **Participación humana** | Interviene en cada ciclo de decisión | *Human-in-the-loop* (en el circuito) | Revisa y aprueba cada resultado antes de que se use |
| **Control humano** | Interviene en el diseño y en el seguimiento del funcionamiento | *Human-on-the-loop* (sobre el circuito) | El flujo corre solo; la persona revisa el registro y corrige |
| **Mando humano** | Supervisa la actividad global y decide cuándo y cómo usar el sistema, o no usarlo | *Human-in-command* | Decide si el flujo se usa, se pausa o se apaga |

Las directrices agregan una regla útil: **cuanto menor sea la supervisión posible, mayores deben ser las verificaciones**.

El marco del NIST explica que las configuraciones entre personas e IA van de totalmente autónomas a totalmente manuales, y pide
**definir y documentar** los procesos de supervisión y los roles de cada persona. Los principios de la OCDE piden salvaguardas que
incluyan la capacidad de acción y supervisión humanas.

:::ejemplo Las tres formas en el flujo de Paula
Participación: alguien confirma cada reclamo clasificado como «baja». Control: una vez por semana, alguien revisa una muestra en el
registro. Mando: la jefatura decide si el flujo sigue en uso tras ver los resultados del mes.
:::

:::ejemplo Caso real: un asistente de IA en la atención al cliente (Klarna, 2024-2026)
En febrero de 2024, la empresa de pagos Klarna anunció que su asistente de IA, hecho con OpenAI, atendía dos tercios de los chats de
atención al cliente; según la empresa, en 2025 llegó al 80 %. En sus documentos ante el regulador bursátil de Estados Unidos, la propia
empresa advierte que el chatbot puede dar respuestas inexactas o engañosas difíciles de detectar, y dice tener controles con
participación humana. Desde 2025 describe un «doble carril»: la IA atiende la mayoría de las consultas y todos los clientes pueden
elegir hablar con una persona.
:::

### P07 · Dónde poner un punto de control
cubre: H1, C1
fuentes: F-M5-08, F-H-93, F-H-62
bloque: Texto + lista con viñetas

Un **punto de control** es un lugar del flujo donde una persona revisa antes de que el resultado siga. No va en todos los pasos:
va donde el riesgo es mayor. Estos son los lugares típicos:
- **Antes de que algo salga hacia otra persona:** un correo a un cliente, un aviso a un equipo.
- **Antes de escribir en un registro que otros usan para decidir:** la planilla de turnos, el registro de pedidos.
- **Cuando la IA clasifica, resume o extrae datos** que luego se usan sin volver al original.
- **Cuando aparecen datos personales.**
- **Cuando un dato no cumple una regla.** Una condición puede detener el flujo o desviarlo a revisión: por ejemplo, si la fecha
  extraída está vacía o es anterior a hoy.

¿Cómo se hace la revisión? Algunas plataformas tienen pasos de aprobación automática, pero en planes de pago: en Zapier gratis, por
ejemplo, el flujo solo puede tener dos pasos. Por eso en este curso usamos **revisión manual**, que funciona gratis:
- el flujo deja el resultado en una columna «Estado» con el valor **«por revisar»**, y nadie lo usa hasta que una persona lo cambia a
  «aprobado»;
- en el camino del celular, Gemini **propone** el evento y lo crea en Calendar solo después de que tú lo confirmas.

:::comprueba
En el flujo de Andrés, ¿dónde conviene más un punto de control humano?
- a) Antes de marcar el despacho como atrasado
- **b) Después de que la IA redacta el borrador y antes de enviarlo al cliente**
- c) En ningún paso: la IA ya fue probada
Retroalimentación: El riesgo está en el aviso que redacta la IA y que sale hacia un cliente. Ahí va la revisión.
:::

### P08 · Criterios de aprobación humana
cubre: H1, C1, A2
fuentes: F-M5-12, F-M5-13
bloque: Tabla + lista de verificación (checklist)

Una revisión sin criterios se vuelve un clic automático: «aprobado, aprobado, aprobado». Para que el control sirva, define **qué
revisa la persona** y **cuándo aprueba**. El NIST pide que estos procesos queden definidos y documentados.

Un criterio de aprobación es una pregunta que se responde con sí o no. Por ejemplo:
- [ ] ¿Los datos coinciden con el correo o documento original?
- [ ] ¿La categoría o el resumen de la IA es correcto?
- [ ] ¿Hay datos personales que no deberían estar?
- [ ] ¿El tono es adecuado para quien lo va a recibir?
- [ ] Si algo no cumple, ¿lo corrijo o lo hago a mano?

¿Cuánta revisión? Ajústala al riesgo, usando la matriz del tema 1 y la regla de la Comisión Europea: menos supervisión pide más
verificaciones. Esta tabla es una propuesta del curso:

| Riesgo del paso | Forma de supervisión | Cómo se revisa |
|---|---|---|
| Bajo | Control humano | Revisión de una muestra del registro, por ejemplo una vez al día |
| Alto | Participación humana | Revisión de **cada** resultado antes de que se use |
| Decide algo importante sobre una persona | Mando humano | No se automatiza la decisión: la toma una persona |

:::actividad Define tus criterios
Escribe tres o cuatro criterios de aprobación para el punto de control más importante de tu flujo. Cada uno debe poder responderse
con sí o no en pocos segundos.
:::

### P09 · Registro: que quede huella
cubre: S3, A1
fuentes: F-M5-12, F-M5-15, F-M5-11
bloque: Texto + tabla de ejemplo

Cuando algo sale mal, la primera pregunta es «¿qué pasó?». Para responderla necesitas un **registro**. Las directrices europeas
piden documentar los datos, los procesos y las decisiones para lograr **trazabilidad**: poder reconstruir qué pasó, entender por qué
hubo un error y prevenir otros. Los principios de la OCDE piden lo mismo a lo largo de toda la vida de un sistema.

En tu flujo hay dos registros:
1. **El historial de la plataforma.** En Zapier, por ejemplo, cada ejecución queda guardada con el paso que falló y su mensaje de
   error.
2. **Tu propio registro**, en la planilla del flujo. Agrégale columnas para la supervisión:

| Fecha | Dato original | Resultado de la IA | Estado | Revisó | Observación |
|---|---|---|---|---|---|
| 12-11 | Pedido 412 · nueva fecha 14-11 | «Llegará el jueves 14» | Aprobado | Andrés | — |
| 13-11 | Pedido 415 · nueva fecha 05-12 | «Llegará el 12 de mayo» | Corregido | Andrés | La IA leyó la fecha al revés |

La columna **«Dato original»** es la más importante: permite comparar lo que entró con lo que salió sin buscar el dato de origen otra vez.

:::ejemplo El registro de Paula
Con la columna «Revisó», Paula descubrió que nadie miraba los reclamos en «baja». El problema no era solo de la IA: el punto de control
existía en el papel, pero nadie lo había asumido.
:::

### P10 · Reversibilidad: poder detener y deshacer
cubre: S3, C2
fuentes: F-M5-13, F-M5-15, F-M5-11
bloque: Texto + recuadro destacado

Un flujo seguro es un flujo que se puede **detener** y cuyos efectos se pueden **deshacer**. El marco del NIST pide mecanismos y
responsables para reemplazar, desconectar o desactivar un sistema que no funciona como se espera. Los principios de la OCDE piden que
un sistema que arriesga causar daños pueda ser anulado, reparado o retirado de forma segura.

En un flujo simple, eso se traduce en prácticas concretas, que el curso te recomienda:
- **Saber dónde se apaga.** Antes de activar el flujo, ubica cómo se pausa o se desactiva en la herramienta que usas.
- **No sobrescribir el original.** Que el flujo agregue filas nuevas en vez de reemplazar datos, y que guarde el dato original.
- **Preferir acciones que se pueden corregir.** Anotar en una planilla se arregla fácil; un correo enviado a un cliente no se puede
  recoger.
- **Recuperar lo que falló.** En Zapier, una vez corregida la causa, se pueden volver a ejecutar las ejecuciones fallidas para no
  perder datos.

:::comprueba
¿Cuál de estas acciones es más difícil de revertir si el flujo se equivoca?
- a) Agregar una fila en una planilla de prueba
- **b) Enviar un correo automático a todos los clientes**
- c) Crear un evento en tu propio calendario
Retroalimentación: Un correo enviado no se puede recoger. Las acciones hacia otras personas necesitan un punto de control antes.
:::

### P11 · Plan de contingencia
cubre: H1, C2
fuentes: F-M5-06, F-M5-13, F-M5-11
bloque: Proceso (process block) + plantilla

Un **plan de contingencia** dice qué hacer si el flujo deja de funcionar o empieza a equivocarse. La guía de la Universidad de Bath lo
pide para todo flujo importante, y el NIST incluye la respuesta a incidentes y la recuperación en el seguimiento posterior a ponerlo
en marcha.

Tu plan responde seis preguntas:
1. **¿Cómo me doy cuenta?** Las señales: un error en el historial, filas vacías, un aviso de alguien.
2. **¿Cómo lo detengo?** Dónde se pausa el flujo y quién lo hace.
3. **¿Cómo sigue el trabajo mientras tanto?** La forma manual de hacer la tarea.
4. **¿Cómo recupero lo que falló?** Revisar el registro, corregir las filas malas, volver a ejecutar lo pendiente.
5. **¿A quién aviso?** Las personas que usan el resultado.
6. **¿Quién responde?** Una persona con nombre, no «el sistema».

:::ejemplo El plan de Andrés
1. Señal: un borrador sin fecha, con una fecha distinta a la de la planilla o un reclamo de un cliente. 2. Pausa el escenario desde
su cuenta. 3. Mientras tanto, escribe los avisos con la plantilla manual de su biblioteca. 4. Compara los avisos de la semana con la
planilla y, si uno salió mal, escribe al cliente para corregirlo. 5. Avisa a su jefatura y a ventas. 6. Responde él; si está de
vacaciones, su compañera de turno.
:::

:::actividad Escribe tu plan
Responde las seis preguntas para tu flujo. Si alguna respuesta es «no sé», ese es el punto débil que tienes que resolver antes de
ponerlo en marcha.
:::

### P12 · Evalúa el efecto de tus controles
cubre: C1, A2, H1
fuentes: F-M5-13
bloque: Tabla + actividad

Poner un control no basta: hay que comprobar que **sirve**. El marco del NIST pide medir con pruebas y documentar los resultados. En tu
flujo puedes hacerlo así:

1. **Prepara 10 casos ficticios** y, en 3 de ellos, **siembra un error**: un correo con una fecha ambigua, uno con un dato personal
   que no debería pasar, uno que debería detenerse.
2. **Corre el flujo sin el control** y anota cuántos errores llegan al resultado.
3. **Corre el flujo con el control** y anota cuántos errores detectó la persona revisora.
4. **Mide el costo:** cuánto tiempo tomó revisar y cuántas veces el control marcó algo que estaba bien (falsas alarmas).

| Indicador | Sin control | Con control |
|---|---|---|
| Errores que llegaron al resultado | 3 de 3 | 0 de 3 |
| Falsas alarmas | — | 1 |
| Tiempo de revisión | — | Pocos minutos por tanda |

Con los datos, decide: **mantener** el control, **ajustarlo** (por ejemplo, revisar solo una muestra si nunca encuentra errores) o
**subir** la supervisión si pasaron errores.

:::actividad Mide tu control
Haz la prueba con tu flujo y completa la tabla. Escribe una conclusión de dos líneas: ¿tu control reduce el riesgo lo suficiente para
lo que cuesta?
:::

:::clave
Un buen control detecta los errores importantes sin volver más lento todo el trabajo. Si no lo mides, no sabes si cumple.
:::

### P13 · Responsabilidad y prudencia
cubre: A1, A2
fuentes: F-M5-15, F-M5-13, F-M5-14, F-M5C2-01, F-M5C2-07
bloque: Texto + escenario breve

Los principios de la OCDE incluyen la **rendición de cuentas**: quienes ponen en marcha un sistema de IA responden por su
funcionamiento, y deben registrar datos, procesos y decisiones y gestionar los riesgos de forma sistemática. El marco del NIST pide,
además, roles claros: quién supervisa, quién puede apagar el sistema, quién atiende un incidente.

Para ti, esto tiene un sentido práctico: **el flujo actúa en tu nombre**. Si manda un dato equivocado, para quien lo recibe el error
es tuyo, no de la herramienta.

La **prudencia** es la actitud que acompaña esa responsabilidad. No es miedo a automatizar: es no confiar de más. El sesgo de
automatización, que viste en el caso de Paula, aparece cuando el flujo funciona bien por un tiempo y la revisión se relaja. La persona
prudente sigue mirando, sobre todo cuando cambia algo: un proveedor nuevo, un formato distinto, un cambio en la herramienta.

:::ejemplo Caso real: una estrategia «AI-first» y su efecto en la marca (Duolingo, 2025)
El 28-04-2025, Duolingo publicó un correo de su director ejecutivo que anunciaba que la empresa sería «AI-first». Entre otras medidas,
dejaría gradualmente de usar contratistas para el trabajo que la IA pudiera hacer, y aceptaba bajas ocasionales de calidad para no
avanzar lento. En su informe anual (27-02-2026), la empresa reconoció que ese anuncio pudo contribuir a publicidad desfavorable, a
dañar su marca y a desacelerar el crecimiento de usuarios. Ser prudente también es pensar en cómo una automatización afecta a quienes
trabajan y a quienes reciben el servicio.
:::

:::error «Si el flujo se equivocó, la culpa es de la herramienta»
Quien pone en marcha un flujo responde por sus resultados. Por eso se definen puntos de control, registros y un plan de contingencia:
para poder responder cuando algo falla.
:::

:::comprueba
Paula lleva dos meses sin encontrar errores en la revisión. ¿Qué es lo más prudente?
- a) Eliminar el control, porque ya no hace falta
- **b) Mantener una revisión por muestreo y volver a revisar todo si algo cambia**
- c) Dejar que la IA también decida la respuesta al cliente
Retroalimentación: Sin errores, el control puede aliviarse, pero no desaparecer. Los cambios traen errores nuevos.
:::

### P14 · Cierre: tu flujo con supervisión humana
cubre: C1, C2, H1, A1
fuentes: F-M5-12, F-M5-13, F-M5-06
bloque: Texto + actividad de cierre (entrega)

En este tema analizaste tres casos: un **error en cadena**, un flujo con **datos personales** y un **sesgo** que se multiplicaba.
Viste que la supervisión humana puede ser participación, control o mando, y que se ajusta al riesgo. Aprendiste a dejar **registro**,
a hacer el flujo **reversible**, a escribir un **plan de contingencia** y a **medir** si tus controles sirven.

:::actividad Completa tu prototipo
Toma el flujo que construiste en el tema 2 y agrégale:
1. **Mapa de riesgos:** para cada paso, qué podría salir mal (errores en cadena, privacidad, sesgo).
2. **Puntos de control:** dónde revisa una persona, con qué forma de supervisión y por qué, según el riesgo.
3. **Criterios de aprobación:** tres o cuatro preguntas de sí o no para cada punto de control.
4. **Registro:** las columnas de supervisión en tu planilla.
5. **Plan de contingencia:** las seis respuestas de P11.
6. **Evaluación:** tu tabla con y sin control, y tu conclusión.

Trabaja siempre con datos ficticios.
:::

:::clave
Un prototipo con supervisión humana no es más lento: es uno en el que puedes confiar y del que puedes responder.
:::

### Ideas clave

1. Automatizar trae riesgos propios: errores en cadena que se repiten en cada ejecución, confabulación, filtración de datos personales
   y sesgos que se multiplican en velocidad y escala.
2. El sesgo de automatización es confiar de más en lo automático; se combate con revisión, sobre todo cuando algo cambia.
3. La supervisión humana puede ser participación (en el circuito), control (sobre el circuito) o mando (decidir si se usa); cuanto
   menor la supervisión, mayores las verificaciones.
4. Los puntos de control van donde el riesgo es mayor y necesitan criterios de aprobación claros; la revisión manual funciona gratis.
5. El registro da trazabilidad y la reversibilidad permite detener y deshacer: guarda el dato original y prefiere acciones que se
   pueden corregir.
6. Un plan de contingencia dice cómo detectar la falla, detener el flujo, seguir a mano, recuperar lo perdido, avisar y quién responde.
7. Los controles se evalúan con pruebas: errores detectados, falsas alarmas y tiempo de revisión.

### Glosario

- **Error en cadena**: error que nace en un paso de un flujo y se repite en los siguientes y en cada ejecución.
- **Confabulación**: contenido falso que la IA generativa entrega con tono seguro; también se le llama alucinación.
- **Sesgo de automatización**: tendencia a confiar de más en lo que entrega un sistema automático.
- **Supervisión humana**: intervención de personas para revisar, corregir o detener lo que hace un sistema de IA.
- **Participación humana (*human-in-the-loop*)**: supervisión en que una persona interviene en cada decisión del sistema.
- **Control humano (*human-on-the-loop*)**: supervisión en que una persona diseña el sistema y sigue su funcionamiento, sin revisar
  cada caso.
- **Mando humano (*human-in-command*)**: supervisión global en que una persona decide cuándo y cómo usar el sistema, o no usarlo.
- **Punto de control**: lugar de un flujo donde una persona revisa el resultado antes de que siga.
- **Criterio de aprobación**: pregunta de sí o no que la persona revisora usa para aprobar o rechazar un resultado.
- **Trazabilidad (de un flujo)**: posibilidad de reconstruir qué datos, pasos y decisiones llevaron a un resultado.
- **Reversibilidad**: posibilidad de detener un flujo y deshacer o corregir sus efectos.
- **Plan de contingencia**: acuerdo previo sobre qué hacer si un flujo falla o se equivoca.
- **Decisión automatizada**: decisión basada en el tratamiento automatizado de datos, sin intervención de una persona.
- **Rendición de cuentas**: obligación de responder por el funcionamiento y los resultados de un sistema que se puso en marcha.

### Conexión con el proyecto

Con la actividad de cierre (P14) completas el **Hito 5 del proyecto aplicado: prototipo de automatización de un paso del proceso,
con supervisión humana**. Entregas el flujo del tema 2 con su mapa de riesgos, puntos de control, criterios de aprobación, registro,
plan de contingencia y la evaluación de tus controles. En los **casos M5-C1 y M5-C2** analizarás a fondo cómo las dos empresas de P06 y P13
automatizaron tareas con IA, qué efectos tuvo en clientes y trabajadores, y qué controles humanos habrían cambiado el resultado.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M5.md`, `investigacion/M3.md`, `investigacion/HERRAMIENTAS-1.md`,
`investigacion/HERRAMIENTAS-2.md` y, para los casos reales, `investigacion/casos/M5-C1.md` y `investigacion/casos/M5-C2.md`
(consultadas el 24-10-2026).

- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-08 · Microsoft Learn (2022). Agregar una condición a un flujo de nube en Power Automate. https://learn.microsoft.com/es-es/power-automate/add-condition
- F-M5-10 · Zapier Help Center (2026). Send data between steps by mapping fields. https://help.zapier.com/hc/en-us/articles/8496343026701
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-M5-12 · Comisión Europea, Grupo independiente de expertos de alto nivel sobre IA (2019). Directrices éticas para una IA fiable. https://digital-strategy.ec.europa.eu/es/node/1950
- F-M5-13 · NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- F-M5-14 · NIST (2024). AI RMF: Generative Artificial Intelligence Profile, NIST AI 600-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-M5-15 · OCDE (2019, actualizados en 2024). Principios de la OCDE sobre IA (principios 1.2, 1.4 y 1.5). https://oecd.ai/en/ai-principles
- F-M5-16 · Congreso Nacional de Chile, BCN LeyChile (2024). Ley 21.719, regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales. https://www.bcn.cl/leychile/navegar?idLey=21719
- F-M3-16 · Senado de Chile (2026). Tramitación del boletín 18623-07: proyecto que modifica la Ley 21.719. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- F-M5C1-01 · Klarna (27-02-2024). Klarna AI assistant handles two-thirds of customer service chats in its first month. https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
- F-M5C1-05 · Klarna Group plc (09-09-2025). Prospecto definitivo 424B4, SEC. https://www.sec.gov/Archives/edgar/data/2003292/000200329225000052/klarnagroupplc424b4.htm
- F-M5C1-06 · Klarna Group plc (26-02-2026). Formulario 20-F, ejercicio 2025, SEC. https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm
- F-M5C2-01 · Duolingo (28-04-2025). Below is an all-hands email from our CEO (LinkedIn). https://www.linkedin.com/posts/duolingo_below-is-an-all-hands-email-from-our-activity-7322560534824865792-l9vh
- F-M5C2-07 · Duolingo, Inc. (27-02-2026). Formulario 10-K, ejercicio 2025, SEC. https://www.sec.gov/Archives/edgar/data/1562088/000162828026012494/duol-20251231.htm
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini (Android). https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-62 · Google (s. f.). Utilizar y gestionar Aplicaciones conectadas en Gemini. https://support.google.com/gemini/answer/13695044?hl=es
- F-H-93 · Zapier (2026). Plans & Pricing. https://zapier.com/pricing

Notas para revisar antes de publicar:
- **Casos reales (P06 y P13):** las cifras de Klarna son cifras informadas por la empresa; ambos casos siguen en evolución (estado al
  24-10-2026).
- **Ley 21.719 (P05):** según su texto, rige desde el 01-12-2026; el boletín 18623-07, que propone postergarla al 01-12-2027, sigue
  en trámite (F-M3-16). **Revisar antes de publicar** y ajustar la fecha si la ley se modifica.
- **NIST AI RMF:** la ficha de NIST indica que el AI RMF 1.0 está en revisión. Revisar antes de publicar.
- **Errores en cadena (P02):** es una explicación del curso a partir de cómo pasan los datos entre pasos (F-M5-10); ninguna fuente lo
  dice con esas palabras.
- **Equivalencias en inglés (P06):** la versión en español de las directrices no usa *human-in-the-loop*, *on-the-loop* ni
  *in-command*; la equivalencia sale de comparar con los términos en inglés de la Comisión.
- **Aprobación humana automática de Zapier (P07):** su ayuda la sitúa en planes de pago; el contenido solo afirma lo verificado en
  F-H-93 (Zapier gratis permite dos pasos). La tabla de niveles de revisión (P08) y la prueba de controles (P12) son propuestas del
  curso.


---

# Módulo 6 · Taller de IA generativa para entornos laborales

**Competencia:** Aplicar la IA generativa en un proyecto basado en un desafío laboral real, midiendo resultados y comunicándolos, integrando lo aprendido en los módulos anteriores.


## M6-AE1 · Oportunidad de mejora con IA

### P01 · Qué vas a lograr en este taller
cubre: C1, C2
fuentes: F-M6-04, F-M6-01
bloque: Texto + línea de tiempo (los cuatro hitos del módulo)

Este módulo es un **taller**. No trae temas nuevos que estudiar: aquí juntas lo que construiste desde el módulo 1 y lo conviertes en
un proyecto terminado, medido y presentado. Las pantallas son pocas porque el trabajo lo haces tú, con tu proyecto al lado.

**Aprendizaje esperado:** Diagnosticar una oportunidad de mejora en un contexto laboral real (su cargo actual o uno al que aspira)
que pueda abordarse con IA, definiendo situación inicial y metas.

Al terminar, deberías poder:
- describir la situación inicial de tu desafío con datos, fijar una meta y elegir indicadores medibles;
- justificar por qué usar IA en ese desafío es viable.

El taller avanza en cuatro hitos:

| Hito | Qué entregas | Tema |
|---|---|---|
| 6a | Diagnóstico, meta y plan de medición | Este tema |
| 6b | Flujo implementado y documentado | Tema 2 |
| 6c | Resultados medidos y ajustes | Tema 3 |
| 6d | Pitch de 3 minutos y portafolio final | Tema 3 |

Un método de mejora muy usado se ordena con tres preguntas: **qué quieres lograr, cómo sabrás que un cambio es una mejora y qué cambio
vas a probar**. Este tema responde las dos primeras. Sin un punto de partida medido no hay forma de saber, al final, si tu proyecto
funcionó.

:::ejemplo Dos proyectos que se cierran
**Camila**, que busca empleo como asistente administrativa, trabaja una tarea del aviso que eligió en el módulo 1: registrar y
clasificar documentos de oficina. Practica con documentos ficticios. **Andrés**, encargado de bodega, sigue con los despachos
atrasados: su jefatura aprobó la reserva de cajas que propuso en el módulo 2, y ahora él trabaja los avisos a clientes cuando un
despacho igual se atrasa. Los dos te acompañan hasta el pitch final.
:::

### P02 · Reúne lo que ya construiste
cubre: S1, A1
fuentes: F-M6-04
bloque: Texto + tabla + actividad (lista de verificación)

Tu proyecto no parte de cero. Cada módulo dejó una pieza, y el diagnóstico se apoya en todas.

| Hito | Lo que tienes | Para qué te sirve ahora |
|---|---|---|
| 1 | Desafío laboral real y biblioteca de prompts v1 | Define la tarea que vas a mejorar |
| 2 | Brief y presentación de 6 láminas | Objetivo, audiencia y mensaje ya escritos |
| 3 | Informe breve con fuentes | Datos y contexto sobre el problema |
| 4 | Pieza multimedia con ficha de uso ético | Material para comunicar la solución |
| 5 | Prototipo de un paso automatizado, con supervisión | La base del flujo que implementarás |

Antes de redactar, junta todo en una sola carpeta del proyecto, en el celular o en el computador. Revisa cada pieza con una pregunta:
**¿sigue apuntando al mismo desafío?** Es normal que el problema se haya afinado en el camino. Si cambió, escribe en una línea qué
cambió y por qué.

Tener a la vista lo que ya hiciste es parte de la **orientación a resultados**: mirar el proyecto como un todo que tiene que producir
una mejora, no como una lista de tareas sueltas.

:::actividad Arma tu carpeta del proyecto
1. Crea una carpeta con el nombre «Proyecto IA · [tu nombre]».
2. Guarda una copia de cada hito, del 1 al 5.
3. Agrega la retroalimentación que te dio tu tutor en cada uno.
4. Escribe en un documento nuevo, en dos líneas, tu desafío tal como lo entiendes hoy.
:::

:::clave
Si un hito anterior quedó incompleto, no lo rehagas entero. Anota qué le falta y úsalo igual: en este tema importa la situación
inicial, no la perfección de lo anterior.
:::

### P03 · Diagnóstico: cómo se hace la tarea hoy
cubre: S1, H1
fuentes: F-M6-01, F-M6-04
bloque: Texto + escenario (preguntas guía en tarjetas)

Un **diagnóstico** describe la situación actual de la tarea que quieres mejorar: cómo se hace, cuánto cuesta en tiempo o en errores
y qué la complica. Es la foto del «antes».

Usa estas preguntas guía:
1. **¿Cuál es la tarea?** Una sola, con un verbo: registrar, responder, resumir, avisar.
2. **¿Cómo se hace hoy?** Los pasos, en orden, y quién hace cada uno.
3. **¿Cuánto se repite?** Veces por día o por semana.
4. **¿Qué sale mal?** Demoras, errores, retrabajo, reclamos.
5. **¿Cómo lo sabes?** Un registro, una planilla, tu propia medición.

La quinta pregunta es la que más se olvida. Sin datos, el diagnóstico es una impresión. Con datos, se convierte en una **situación
inicial** contra la que podrás comparar después.

:::ejemplo El diagnóstico de Andrés
«Cuando un despacho se atrasa, aviso al cliente por correo. Reviso la planilla de despachos, busco el contacto y escribo el aviso
desde cero. Pasa unas siete veces por semana. Muchas veces el aviso sale al día siguiente, y algunos clientes reclaman porque nadie les
avisó. Lo sé por mi bandeja de enviados y por los reclamos que anota ventas.»
:::

:::error «Me demoro mucho»: un diagnóstico sin datos
Frases como «me demoro mucho» o «hay muchos errores» no sirven para comparar. ¿Cuánto es mucho? Si no lo mides ahora, al final no
podrás demostrar que mejoró.
:::

Si buscas empleo, el diagnóstico es sobre una tarea del cargo al que aspiras, hecha con material de práctica. Lo que mides es cómo la
haces tú hoy.

### P04 · La línea base: tu punto de partida
cubre: S1, C1
fuentes: F-M6-01, F-M6-02
bloque: Texto + tabla de registro descargable

La **línea base** es el valor de un indicador en el punto de partida. Informa la situación inicial y es la referencia para saber, más
adelante, si tus esfuerzos dieron resultado. Sin línea base no se puede fijar una meta con sentido.

¿Y si no tienes datos? Se recomienda **levantarlos en un primer periodo**, antes de cambiar nada. Para tu proyecto, basta con
registrar la tarea durante una o dos semanas, o con hacerla varias veces con material de práctica.

Una tabla simple funciona:

| Fecha | Caso | Minutos | Errores | Observación |
|---|---|---|---|---|
| 03-11 | Aviso pedido 412 | 14 | 0 | Busqué el contacto en dos lugares |
| 04-11 | Aviso pedido 415 | 11 | 1 | Fecha de llegada equivocada |

:::ejemplo La línea base de Camila
Camila preparó 30 documentos ficticios: facturas, órdenes de compra y contratos sin datos de personas reales. Los registró a mano en
una planilla, cronometrando cada uno. Resultado: **4 minutos por documento** en promedio y **3 documentos mal clasificados de 30**.
Además, encontrar un documento pedido le tomó 2 minutos en promedio.
:::

:::comprueba
Andrés quiere medir si su proyecto mejora los avisos. ¿Qué debe hacer primero?
- a) Activar el flujo con IA y medir cómo funciona
- **b) Registrar cómo hace los avisos hoy, durante un periodo, sin cambiar nada**
- c) Preguntarle al asistente cuánto se demora una persona promedio
Retroalimentación: La línea base se toma antes del cambio. Si mides solo después, no tienes contra qué comparar. Y un promedio
inventado por un asistente no describe tu situación.
:::

### P05 · Indicadores: qué vas a medir
cubre: S2, C1
fuentes: F-M6-02, F-M6-05
bloque: Texto + tabla + pestañas (tabs) con tipos de indicador

Un **indicador** es la medida que te dice si avanzas. No basta con nombrarlo: un buen indicador se define con cuatro partes.

| Parte | Pregunta | Ejemplo de Andrés |
|---|---|---|
| Fórmula | ¿Cómo se calcula? | Avisos enviados el mismo día ÷ avisos totales × 100 |
| Fuente | ¿De dónde sale el dato? | Bandeja de enviados y planilla de despachos |
| Frecuencia | ¿Cada cuánto se mide? | Cada viernes |
| Línea base | ¿Cuánto vale hoy? | 45 % (9 de 20 en tres semanas) |

Los indicadores miden cosas distintas. Algunos miden el **proceso** (cuánto tiempo toma la tarea), otros el **producto** (cuántos
avisos salen bien hechos) y otros el **resultado** (si bajan los reclamos). También se distinguen por lo que miran: la **eficiencia**
(tiempo, recursos) o la **calidad** (errores, claridad).

En un flujo con IA puedes combinar medidas numéricas, como el tiempo o la cantidad de tareas completadas, con escalas de calidad, como
una rúbrica simple de 1 a 4 para la claridad de un texto. En la mayoría de los casos conviene usar varios indicadores a la vez.

:::error Medir lo que no controlas
Camila pensó en usar como indicador «conseguir trabajo». Eso depende de muchos factores fuera de su proyecto. Mejor medir lo que su
flujo cambia: el tiempo por documento y los errores de clasificación. Las entrevistas pueden ir como dato de contexto, no como meta.
:::

:::actividad Elige tus indicadores
Escoge dos o tres indicadores para tu desafío: al menos uno de tiempo y uno de calidad. Para cada uno, completa las cuatro partes.
:::

### P06 · La meta: qué cambio esperas y cuándo
cubre: S2, A2, C1
fuentes: F-M6-03, F-M6-05
bloque: Texto + comparación antes y después

La **meta** dice cuánto esperas que cambie un indicador y en qué plazo. Una forma clásica de revisarla es el criterio **SMART**, por
sus iniciales en inglés:

- **Específica:** quién hace qué, con un solo verbo de acción. Evita verbos vagos como «mejorar» o «entender».
- **Medible:** cuánto cambio esperas, con un punto de referencia, que es tu línea base.
- **Alcanzable:** posible con el tiempo y los recursos que tienes.
- **Realista:** acorde al tamaño del problema. Algunas guías leen esta letra como «relevante»; en este curso usamos «realista»,
  porque pide lo mismo que el realismo al fijar metas.
- **Con plazo:** cuándo vas a medir.

| Antes | Después |
|---|---|
| «Quiero ser más rápida con los documentos usando IA.» | «En tres semanas de práctica, bajaré el tiempo de registro de 4 a 2 minutos por documento, sin errores de clasificación en el registro final.» |
| «Mejorar los avisos de atraso.» | «En cuatro semanas, enviaré el mismo día el 90 % de los avisos de atraso (hoy, 45 %).» |

La versión «después» tiene número, unidad, línea base y plazo. Eso permite saber, sin discusión, si se cumplió.

:::comprueba
¿Cuál de estas metas es medible?
- a) Usar la IA para trabajar mejor en la bodega
- **b) En cuatro semanas, bajar de 12 a 5 minutos el tiempo promedio por aviso de atraso**
- c) Lograr que los clientes queden más contentos
Retroalimentación: Solo la b dice cuánto cambia, desde dónde y en qué plazo. La a y la c no tienen número ni forma de medirse.
:::

### P07 · Realismo: metas posibles, pero no fáciles
cubre: A2, S3, C1
fuentes: F-M6-01, F-M6-03
bloque: Texto + escenario con decisión (elige la mejor meta)

Una meta tiene que ser **realista y retadora a la vez**. Realista: posible con las personas, el tiempo y las herramientas que tienes.
Retadora: que no se cumpla sola, sin hacer nada distinto. Una meta demasiado fácil no demuestra nada; una imposible desanima y te
obliga a maquillar los resultados al final.

Tres preguntas te ayudan a calibrarla:
1. **¿Qué dice tu línea base?** Si hoy haces 45 %, saltar a 100 % en dos semanas es poco probable.
2. **¿Qué viste en tus pruebas?** En el módulo 5 probaste un paso automatizado. Lo que pasó ahí es tu mejor referencia.
3. **¿Cuánto tiempo real tienes?** Las semanas del módulo, tus otras obligaciones y los límites del plan gratuito de tu herramienta.

:::ejemplo Andrés ajusta su meta
Andrés escribió primero «100 % de avisos el mismo día en dos semanas». Revisó su prototipo del módulo 5: el borrador salía bien, pero
él no siempre alcanzaba a revisarlo antes de las cinco de la tarde. Cambió la meta a 90 % en cuatro semanas. Sigue siendo exigente,
pero puede cumplirla.
:::

:::error Bajar la meta para asegurar el «éxito»
Fijar una meta que ya cumples, o casi, hace que el proyecto parezca exitoso sin haber mejorado nada. Quien evalúa lo nota al comparar
la meta con tu línea base.
:::

:::actividad Calibra tu meta
Escribe tu meta en formato SMART. Luego responde las tres preguntas de esta pantalla y ajústala si alguna respuesta te hace dudar.
:::

### P08 · ¿Es viable usar IA en este desafío?
cubre: S3, C2
fuentes: F-M6-05, F-M6-06, F-M6-01, F-M6-07, F-M5-06, F-H-15
bloque: Texto + lista de verificación (checklist)

Antes de implementar conviene tomar una decisión explícita: **seguir o no seguir** con la IA en este desafío. Esa decisión se apoya en
lo que sabes del contexto, de los beneficios y de los posibles daños. Usa estos criterios de viabilidad:

- [ ] **Hay datos para medir.** Puedes alimentar tus indicadores con una fuente que existe y que puedes revisar.
- [ ] **La meta es alcanzable** con la herramienta, el tiempo y los recursos que tienes, según tus pruebas anteriores y no según
  expectativas.
- [ ] **La herramienta es accesible:** gratuita o ya disponible, y la puedes usar en tu equipo o en el celular.
- [ ] **El riesgo está controlado.** No ingresas datos personales ni confidenciales; si usas Gemini, apagas la actividad guardada o
  usas chats temporales cuando corresponde.
- [ ] **Hay aprobación** de quien corresponde si el flujo toca un proceso de tu trabajo.
- [ ] **La necesidad es real.** No usas IA solo porque se puede, sino porque la tarea lo pide.

Si un criterio falla, no siempre hay que abandonar. A veces basta con cambiar el alcance: trabajar con material de práctica, usar
códigos en vez de nombres o dejar fuera un paso riesgoso.

:::ejemplo La justificación de Camila
«Es viable: la tarea se repite mucho y sigue reglas claras; mis 30 documentos de práctica no tienen datos reales; en el módulo 5 el
asistente propuso bien el tipo y la fecha en casi todos los casos, y yo reviso cada registro antes de guardarlo.»
:::

:::error «Si la IA puede hacerlo, es viable»
Que la herramienta pueda hacer una tarea no la hace viable. Sin datos para medir, sin permiso o con datos personales expuestos, el
proyecto no pasa la prueba, aunque la IA funcione.
:::

### P09 · El plan de medición
cubre: H1, C1, A1
fuentes: F-M6-02, F-M6-04
bloque: Texto + tabla descargable (plantilla del plan)

El **plan de medición** reúne en una tabla lo que decidiste: qué indicador, cómo se calcula, de dónde sale el dato, cada cuánto se
mide, cuánto vale hoy y cuánto debería valer al final. Es tu respuesta a la pregunta «¿cómo sabré que el cambio es una mejora?».

**Plan de medición de Andrés** (datos ficticios):

| Indicador | Fórmula | Fuente | Frecuencia | Línea base | Meta (4 semanas) |
|---|---|---|---|---|---|
| Avisos el mismo día | Avisos del día ÷ atrasos del día × 100 | Enviados y planilla de despachos | Cada viernes | 45 % | 90 % |
| Tiempo por aviso | Minutos totales ÷ avisos | Registro propio | Cada aviso | 12 min | 5 min |
| Avisos con error | Avisos con dato equivocado ÷ avisos × 100 | Revisión propia y reclamos | Cada viernes | 10 % | 0 % |
| Claridad | Rúbrica de 1 a 4 aplicada por ventas | Rúbrica | Quincenal | 2,5 | 3,5 |

Fíjate en tres detalles. Cada indicador tiene **una sola fuente** que se puede revisar. La **frecuencia** es posible de cumplir, no
diaria si no tienes tiempo. Y al lado de los números hay una **medida de calidad**, para no ganar velocidad a costa de errores.

:::comprueba
Camila anota en su plan: «Indicador: errores de clasificación. Meta: 0». ¿Qué le falta para que sea medible?
- a) Nada, ya tiene una meta
- **b) La fórmula, la fuente, la frecuencia y la línea base**
- c) El nombre de la herramienta de IA que usará
Retroalimentación: Sin fórmula ni fuente no se sabe cómo se calcula ni de dónde sale el dato, y sin línea base no hay contra qué
comparar. La herramienta va en el flujo, no en el indicador.
:::

:::actividad Arma tu plan
Copia la tabla y complétala con tus dos o tres indicadores. Agrega una columna «Quién mide» si alguien más te va a ayudar con los
datos.
:::

:::clave
Decide cómo vas a medir **antes** de implementar. Si cambias la fórmula a mitad de camino, la comparación con la línea base deja de
valer.
:::

### P10 · Tu Hito 6a y cómo se evalúa
cubre: H1, C1, C2, A1
fuentes: F-M6-01, F-M6-03, F-M6-06
bloque: Texto + lista de verificación + tabla de la rúbrica

Ya tienes todas las piezas. El **Hito 6a: diagnóstico, meta y plan de medición** es un documento breve, de una o dos páginas, con
cinco partes:

1. **Diagnóstico:** la tarea, cómo se hace hoy y qué sale mal (P03).
2. **Línea base:** los datos que registraste y cómo los obtuviste (P04).
3. **Meta SMART** con sus indicadores (P05 a P07).
4. **Justificación de viabilidad:** por qué usar IA aquí, con los criterios de P08.
5. **Plan de medición:** la tabla de P09.

Tu tutor lo revisa con la **rúbrica general de hitos** del curso y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el Hito 6a |
|---|---|---|
| Pertinencia al problema real | 25 % | El diagnóstico describe una tarea real de tu cargo o del cargo al que aspiras |
| Uso verificado de IA | 25 % | La viabilidad se apoya en pruebas que hiciste y documentaste |
| Calidad del entregable | 20 % | Las cinco partes están completas y los números cuadran |
| Ética, privacidad y licencias | 15 % | No expones datos personales ni confidenciales |
| Comunicación | 15 % | Se entiende sin explicaciones adicionales |

Cada criterio se califica como logrado, parcial o no logrado. Los hitos 6a, 6b y 6c no ponderan en la nota: sirven para recibir
retroalimentación y alimentan el pitch y portafolio final del Hito 6d.

:::actividad Revisa antes de entregar
- [ ] Mi meta tiene número, unidad, línea base y plazo.
- [ ] Cada indicador tiene fórmula, fuente y frecuencia.
- [ ] Expliqué cómo obtuve la línea base.
- [ ] Justifiqué la viabilidad con al menos tres criterios.
:::

### Ideas clave

1. El módulo 6 es un taller: integra los hitos 1 a 5 en un proyecto que se diagnostica, se implementa, se mide y se presenta.
2. Un diagnóstico describe cómo se hace la tarea hoy y se apoya en datos, no en impresiones.
3. La línea base es el valor de partida de un indicador; si no hay datos, se levantan en un primer periodo, antes de cambiar nada.
4. Un indicador se define con fórmula, fuente, frecuencia y línea base; conviene combinar uno de tiempo con uno de calidad.
5. Una meta SMART dice cuánto cambia un indicador y en qué plazo, y debe ser realista y retadora a la vez.
6. Usar IA es viable cuando hay datos para medir, la meta es alcanzable, la herramienta es accesible y el riesgo está controlado.
7. El plan de medición se decide antes de implementar, para que la comparación final sea válida.

### Glosario

- **Diagnóstico**: descripción de cómo se hace hoy una tarea, cuánto cuesta y qué sale mal, apoyada en datos.
- **Situación inicial**: estado de la tarea antes de cualquier cambio, descrito con el diagnóstico y la línea base.
- **Línea base**: valor de un indicador en el punto de partida, que sirve de referencia para comparar después.
- **Indicador**: medida que muestra si se avanza hacia una meta.
- **Fórmula del indicador**: forma de calcular el indicador a partir de los datos.
- **Fuente del indicador**: lugar de donde sale el dato, como un registro o una planilla.
- **Frecuencia de medición**: cada cuánto se calcula el indicador.
- **Indicador de proceso**: indicador que mide cómo se hace la tarea, por ejemplo el tiempo que toma.
- **Indicador de resultado**: indicador que mide el efecto buscado, por ejemplo la baja de los reclamos.
- **Meta**: cambio esperado en un indicador, con un valor y un plazo.
- **Meta SMART**: meta específica, medible, alcanzable, realista y con plazo.
- **Viabilidad**: condición de un proyecto que se puede llevar a cabo y medir con los datos, recursos y permisos disponibles.
- **Plan de medición**: tabla que define, para cada indicador, fórmula, fuente, frecuencia, línea base y meta.

### Conexión con el proyecto

Este tema es el **Hito 6a del proyecto aplicado: diagnóstico, meta y plan de medición**. El documento que armas en P10 retoma el
desafío del Hito 1, el brief del Hito 2, la investigación del Hito 3 y el prototipo del Hito 5, y fija la línea base contra la que
compararás tus resultados en el Hito 6c. El tutor te devuelve su retroalimentación en un plazo de 72 horas como máximo.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M6.md`, `investigacion/M5.md` y `investigacion/HERRAMIENTAS-1.md`
(consultadas el 24-10-2026).

- F-M6-01 · CONEVAL (2019). Guía para el establecimiento y cálculo de líneas base y metas. https://www.coneval.org.mx/InformesPublicaciones/Documents/Guia_lineas_base_metas.pdf
- F-M6-02 · CIPPEC; Aquilino, Arena, Gutiérrez Bode y Scolari (2019). Guía N.º 5: Cómo construir indicadores. https://www.cippec.org/wp-content/uploads/2019/06/PP-ME-Guia-5.pdf
- F-M6-03 · CDC (2018). Writing SMART Objectives (Evaluation Brief n.º 3b). https://spice.unc.edu/wp-content/uploads/2023/11/CDC-SMART.pdf
- F-M6-04 · Institute for Healthcare Improvement (s. f.). Model for Improvement. https://www.ihi.org/library/model-for-improvement
- F-M6-05 · Anthropic (s. f.). Define success criteria and build evaluations. https://platform.claude.com/docs/es/test-and-evaluate/develop-tests
- F-M6-06 · NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- F-M6-07 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M5-06 · University of Bath (s. f.). Automation standards for Microsoft Power Automate (criterios para elegir qué automatizar). https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es


## M6-AE2 · Implementar el flujo

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M6-04, F-M6-06
bloque: Texto + lista con viñetas

En el tema anterior fijaste tu punto de partida, tu meta y cómo vas a medir. Ahora toca hacer el cambio: poner en marcha el flujo con
IA para tu desafío, probarlo, corregirlo y dejar registro de lo que decidiste en el camino.

**Aprendizaje esperado:** Implementar un flujo de trabajo con IA para la oportunidad priorizada, con supervisión humana y registro de
decisiones.

Al terminar, deberías poder:
- implementar tu flujo con al menos un punto de supervisión humana definido y documentado;
- documentar las decisiones y los ajustes que hiciste, con fecha y motivo.

Implementar no es «encender» la IA y esperar. Es un ciclo: pruebas a pequeña escala, miras qué pasó, ajustas y vuelves a probar. Cada
vuelta deja un aprendizaje, y ese aprendizaje se anota. Al final del tema tendrás un flujo que funciona y un registro que explica por
qué funciona así.

:::ejemplo Dónde están Camila y Andrés
**Camila** tiene su meta: registrar cada documento de práctica en 2 minutos, sin errores en el registro final. En el módulo 5
automatizó un paso: cada mañana, una acción programada de Gemini le lista los correos con documentos nuevos de su cuenta de práctica.
**Andrés** quiere enviar el mismo día el 90 % de los avisos de atraso. Su prototipo del módulo 5 arma el borrador del aviso cuando
marca un despacho como atrasado en la planilla.
:::

:::clave
Tu flujo no tiene que ser grande. Uno de tres a cinco pasos, que funcione y esté bien documentado, vale más que uno largo que nadie
puede revisar.
:::

### P02 · Del prototipo al flujo completo
cubre: S1, C1
fuentes: F-M6-07, F-H-61, F-H-62, F-H-94
bloque: Texto + diagrama de proceso (process block)

En el módulo 5 automatizaste **un paso**. Ahora dibujas el flujo completo de tu tarea, de la entrada a la salida, y marcas qué hace la
IA, qué hace la herramienta y qué haces tú.

**Flujo de Andrés** (Make, en el computador de la bodega):
1. Andrés marca un despacho como «atrasado» en la planilla. *(Disparador)*
2. Make lee la fila: número de pedido, empresa cliente y nueva fecha. *(Herramienta)*
3. Un módulo de IA redacta el aviso con la plantilla de su biblioteca y lo escribe en la columna «Borrador». *(IA)*
4. Andrés compara pedido y fecha con la planilla, corrige y envía el correo. *(Revisión humana)*
5. Anota la hora de envío, que alimenta su indicador. *(Registro)*

**Flujo de Camila** (Gemini, en el celular):
1. La acción programada le lista cada mañana los correos con documentos. *(Disparador)*
2. Sube el documento a un chat y usa su plantilla «Registrar documento». *(IA)*
3. Compara cada campo con el documento. *(Revisión humana)*
4. Pega la fila en su planilla y nombra el archivo. *(Registro)*

Antes de armarlo, revisa tu herramienta. En Make, cada acción gasta créditos del plan gratuito, la IA gasta más y, si se acaban, el
flujo se detiene. En Gemini, las acciones programadas necesitan la actividad guardada, sin ella las aplicaciones conectadas se limitan, y
las acciones programadas se están habilitando de a poco.

:::actividad Dibuja tu flujo
Escribe tu flujo en tres a cinco pasos numerados. Marca cada uno como disparador, herramienta, IA, revisión humana o registro.
:::

### P03 · Planifica en ciclos pequeños
cubre: S1, A1, A2
fuentes: F-M6-04, F-M6-07
bloque: Proceso (process block) en etapas + línea de tiempo

Los cambios se prueban primero **a pequeña escala**, se ajustan con ciclos repetidos y se prueban en condiciones distintas. Solo
después se adoptan. Un ciclo muy usado tiene cuatro momentos, conocidos como **PDSA** por sus iniciales en inglés:

1. **Planificar:** qué vas a probar, con cuántos casos y qué esperas que pase.
2. **Hacer:** ejecutar la prueba y anotar lo que ocurre.
3. **Estudiar:** comparar lo que pasó con lo que esperabas.
4. **Actuar:** adoptar, ajustar o descartar el cambio, y planificar el ciclo siguiente.

Con ese ciclo, tu implementación sigue estas etapas, en este orden:

| Etapa | Qué haces |
|---|---|
| 1. Mapear | Dibujas el flujo completo (P02) |
| 2. Definir controles | Decides quién revisa, cuándo y qué riesgos cuidar (P04 y P05) |
| 3. Documentar | Escribes la ficha del flujo (P06) |
| 4. Probar en pequeño | Corres el flujo con pocos casos, incluidos casos difíciles |
| 5. Estudiar y ajustar | Corriges y registras la decisión (P07 a P09) |
| 6. Usar en la tarea real | Lo usas durante el periodo de medición |

Reserva tiempo para las pruebas. Es la parte que más se subestima.

:::comprueba
Andrés quiere usar su flujo esta semana con todos los atrasos reales. ¿Qué etapa le falta si todavía no lo ha corrido con casos ya
resueltos?
- a) Mapear el flujo
- **b) Probar en pequeño**
- c) Usar en la tarea real
Retroalimentación: Antes de usarlo con clientes, el flujo se prueba con pocos casos, incluidos casos difíciles. Saltarse esa etapa
lleva los errores directo a la tarea real.
:::

:::ejemplo El primer ciclo de Andrés
Andrés planifica probar el flujo con cinco despachos atrasados de la semana pasada, ya resueltos. Espera que los cinco borradores
tengan pedido y fecha correctos. Dos salen con la fecha en formato inglés. Ajusta la plantilla y repite con otros cinco.
:::

**Autonomía** es decidir tú qué probar y cuándo ajustar, sin esperar que todo salga perfecto a la primera.

### P04 · Supervisión humana: quién revisa, cuándo y con qué
cubre: C1, S2
fuentes: F-M6-06, F-M5-12, F-M5-14
bloque: Texto + tabla + escenario

La supervisión humana no se improvisa: se **define y se documenta** como parte del flujo. Para cada punto de control, responde:

| Pregunta | Ejemplo de Andrés |
|---|---|
| ¿Quién revisa? | Andrés |
| ¿Cuándo? | Antes de enviar cada aviso |
| ¿Qué revisa? | Pedido, empresa, fecha nueva y tono |
| ¿Con qué criterio? | Coincide con la planilla; no promete nada que no esté confirmado |
| ¿Qué hace si falla? | Corrige a mano y anota el error en la bitácora |

Recuerda los niveles del módulo 5. Con **participación humana**, una persona revisa cada decisión del flujo, como Andrés con cada aviso.
Con **control humano**, la persona interviene en el diseño y sigue el funcionamiento. Con **mando humano**, decide si usar el sistema o
no. Tu proyecto debe dejar claro qué nivel aplicas en cada paso y por qué.

:::error «Ya funcionó en el módulo 5, no necesito revisar»
Confiar de más en lo automatizado es un riesgo conocido: el **sesgo de automatización**. Mientras más veces funciona un flujo, más
fácil es dejar de mirarlo, y justo ahí se cuela el error. La revisión se mantiene durante todo el proyecto.
:::

:::comprueba
¿Cuál de estos puntos de control está bien definido?
- a) «Reviso los avisos cuando tenga tiempo»
- **b) «Antes de enviar, comparo pedido y fecha con la planilla; si no coinciden, corrijo y lo anoto»**
- c) «La IA revisa sus propios borradores»
Retroalimentación: La b dice cuándo, qué y con qué criterio se revisa, y qué hacer si falla. La a no fija momento, y en la c no hay
supervisión humana.
:::

### P05 · Riesgos y cambios: qué puede salir mal
cubre: S2, A3
fuentes: F-M6-06, F-M6-07, F-M5-14, F-H-12, F-H-15
bloque: Texto + tabla de riesgos + actividad

Gestionar riesgos es anticipar qué puede fallar y cómo lo controlas. Y después de implementar, seguir mirando: poder anular una
decisión, responder si algo sale mal y recuperarte.

| Riesgo | Control |
|---|---|
| La IA inventa un dato (fecha, monto) | Punto de control que compara con la fuente |
| Entran datos personales o confidenciales | Usar códigos o nombres de empresa; apagar la actividad guardada o usar chats temporales cuando se pueda |
| Se agota el límite del plan gratuito o la herramienta falla | Plan de contingencia: la plantilla manual de tu biblioteca |
| Cambias la plantilla y algo deja de funcionar | Probar de nuevo con los mismos casos antes de usarla |
| Dejas de revisar porque «siempre sale bien» | Revisión fija en cada caso y registro de errores |

La cuarta fila es la **gestión de cambios**: cada modificación al flujo o al prompt se vuelve a probar. El **plan de contingencia**
dice con qué reemplazas el flujo si deja de funcionar y cómo te enteras. Los límites de los planes gratuitos se renuevan cada cierto
tiempo y pueden cambiar: tu plan B no puede depender de la misma herramienta.

:::comprueba
En el flujo de Camila, ¿qué riesgo queda sin control?
- a) Que la IA lea mal una fecha: Camila revisa cada campo
- **b) Que se acabe el límite de uso gratuito de Gemini y no pueda registrar ese día**
- c) Que un documento tenga datos reales: usa solo documentos ficticios
Retroalimentación: La a y la c tienen un control definido. Para la b, Camila necesita un plan de contingencia, como registrar a mano
con su planilla.
:::

:::actividad Tu tabla de riesgos
Escribe al menos cuatro riesgos de tu flujo y su control. Si uno no tiene control, decide si lo aceptas, lo reduces o cambias el paso.
:::

### P06 · Documenta el flujo
cubre: S3, A3
fuentes: F-M6-07
bloque: Texto + ficha descargable (plantilla)

Un flujo que solo entiendes tú se pierde el día que no estás o que lo olvidas. Documentarlo es escribir una **ficha** que otra persona
pueda leer para entender qué hace, qué necesita y qué produce.

| Campo | Qué anotar |
|---|---|
| Nombre | Con una convención clara: «Avisos atraso · Bodega · v2» |
| Propósito | Para qué existe, en una línea |
| Entradas | Qué datos recibe y de dónde |
| Salidas | Qué entrega y dónde queda |
| Dependencias | Herramientas, cuentas, planillas y plantillas de las que depende |
| Supervisión | Quién revisa, cuándo y con qué criterio (P04) |
| Contingencia | Qué hacer si falla (P05) |
| Responsable y fecha | Quién lo mantiene y cuándo se actualizó |

Usa una **convención de nombres** y respétala en todo: el flujo, las plantillas, las planillas y los archivos. Así cualquiera sabe qué
versión está mirando. Comparte la ficha con quien corresponda, por ejemplo tu jefatura o tu tutor.

:::ejemplo La ficha de Camila
**Nombre:** «Registro documentos · Práctica · v3». **Propósito:** registrar documentos de oficina en una planilla para encontrarlos
rápido. **Entradas:** documentos ficticios en PDF o foto. **Salidas:** una fila por documento y el archivo nombrado
«AAAA-MM-DD_tipo_emisor». **Dependencias:** Gemini, su cuenta de práctica, la planilla «Registro 2026» y la plantilla «Registrar
documento». **Supervisión:** ella revisa cada campo antes de guardar. **Contingencia:** registro manual en la misma planilla.
:::

:::error Documentar al final, de memoria
Si escribes la ficha cuando terminas, se te olvidan dependencias y ajustes. Escríbela antes de la primera prueba y actualízala con
cada cambio.
:::

Este trabajo prolijo es lo que permite que tu flujo se revise, se mejore o lo use otra persona.

### P07 · Tu bitácora de decisiones
cubre: S3, C2, A3
fuentes: F-M6-08, F-H-61, F-H-62, F-H-15
bloque: Texto + tabla de ejemplo + actividad

Los proyectos cambian, y el motivo de cada decisión se olvida rápido. En equipos de tecnología se usan **registros de decisiones**
para guardar ese razonamiento y poder juzgar después si una decisión se puede cambiar. En este curso adaptamos esa idea a una
**bitácora personal de decisiones**, que suma a la bitácora que ya llevas.

Cada entrada tiene:
- **Fecha y título:** «12-11 · Dónde registrar los documentos».
- **Contexto:** los hechos que te obligaron a decidir.
- **Decisión:** qué elegiste.
- **Consecuencias:** lo bueno y lo malo que trae.
- **Estado:** vigente o reemplazada.

Una regla importante: una decisión que ya aplicaste **no se borra ni se reescribe**. Si cambias de idea, agregas una entrada nueva y
marcas la anterior como reemplazada. Así queda la historia completa.

:::ejemplo Una entrada de Camila
**12-11 · Dónde uso las aplicaciones conectadas.** *Contexto:* la acción programada de Gemini necesita la actividad guardada, y con
ella encendida algunas conversaciones pueden ser leídas por revisores, así que no conviene subir documentos con datos reales. *Decisión:* usar la acción programada solo en mi cuenta de práctica, con
documentos ficticios. *Consecuencias:* puedo automatizar el aviso diario sin exponer datos; si un día uso documentos reales, tendré que
cambiar el flujo. *Estado:* vigente.
:::

:::actividad Tus primeras entradas
Escribe en tu bitácora tres decisiones que ya tomaste: la herramienta que elegiste, el punto de supervisión y un riesgo que decidiste
controlar. Usa los cinco campos.
:::

:::clave
La bitácora responde la pregunta que te hará cualquier evaluador: **«¿por qué lo hiciste así?»**.
:::

### P08 · Versiones de tus prompts
cubre: S3, C2, A3
fuentes: F-M6-10, F-M6-09
bloque: Texto + tabla + pestañas (Documentos / Hojas de cálculo)

Tus plantillas también cambian durante la implementación. Una práctica recomendada para quienes construyen con modelos de lenguaje es
**versionar los prompts**: guardar cada versión para revisar sus cambios, anotar el modelo o la herramienta con que se probó y probar
cada versión con los mismos casos.

| Versión | Fecha | Herramienta | Qué cambió | Resultado con los 10 casos de prueba |
|---|---|---|---|---|
| v1 | 05-11 | Gemini | Plantilla del módulo 5 | 7 de 10 sin errores |
| v2 | 08-11 | Gemini | Pide la fecha en formato DD-MM-AAAA | 9 de 10 |
| v3 | 12-11 | Gemini | Agrega «si un campo no aparece, escribe NO APARECE» | 10 de 10 |

Si llevas tus plantillas en Documentos o Hojas de cálculo de Google, el **historial de versiones** te ayuda: puedes ver quién cambió
qué, **ponerle nombre a una versión** (por ejemplo «Plantilla v2 · 08-11») y volver a una anterior. Hay un máximo de versiones con
nombre: 40 en un documento y 15 en una hoja de cálculo. En Hojas de cálculo, restaurar una versión borra el historial de cambios de
cada celda, así que conviene hacer una copia antes.

:::error Cambiar la plantilla «sobre la marcha» sin guardar la anterior
Si editas la plantilla que funciona y la nueva sale peor, no puedes volver atrás ni explicar qué cambió. Guarda siempre la versión
anterior antes de modificarla.
:::

:::actividad Versiona tu plantilla principal
Copia tu plantilla actual como v1 en tu tabla de versiones. Cada vez que la cambies, crea una fila nueva y pruébala con los mismos
casos.
:::

### P09 · Prueba, ajusta y vuelve a probar
cubre: H1, A1, A2
fuentes: F-M6-04, F-M6-07, F-M5-11
bloque: Escenario o conversación de ejemplo + actividad

Ahora corres tu flujo con casos de prueba. Prueba **la mayor cantidad de escenarios posibles** antes de usarlo en serio: casos
normales, casos con datos incompletos y casos raros.

Para Camila, eso significa probar una factura clara, una foto borrosa, un contrato sin fecha y un documento que no es de ningún tipo
conocido. Para Andrés, un atraso de un día, uno sin fecha nueva confirmada y uno de un cliente nuevo.

Cuando algo falla, sigue siempre el mismo camino:
1. **Ubica el paso** que falló. En Zapier, por ejemplo, el historial de ejecuciones muestra qué paso falló y por qué, y permite
   volver a ejecutarlo una vez corregido. Busca un registro parecido en tu herramienta.
2. **Corrige la causa**, no solo el resultado: la plantilla, el dato de entrada o el punto de control.
3. **Registra** el ajuste en la bitácora y, si cambió la plantilla, crea una versión nueva.
4. **Vuelve a probar** con los mismos casos.

:::ejemplo Andrés y el atraso sin fecha
En una prueba, el despacho no tenía fecha nueva confirmada. El borrador inventó «llegará el lunes». Andrés lo detectó en su revisión.
Ajustó la plantilla: «si no hay fecha nueva, escribe que avisarás apenas esté confirmada». Lo anotó en la bitácora como decisión, creó
la v3 y repitió los diez casos.
:::

Aquí también ejerces tu **autonomía**: tú eliges los casos difíciles y decides cuándo un ajuste basta y cuándo hace falta otra
ronda, sin esperar que alguien te lo indique. La **constancia** se nota aquí: la mejora llega con varios ciclos de prueba y aprendizaje, no con uno solo. Que algo falle en la
prueba es buena noticia, porque falló antes de llegar a un cliente.

:::actividad Tu ronda de pruebas
Arma diez casos de prueba sin datos personales, al menos tres difíciles. Córrelos, anota los resultados y haz al menos un ajuste
documentado.
:::

### P10 · Tu Hito 6b y cómo se evalúa
cubre: H1, C1, C2, A3
fuentes: F-M6-07, F-M6-08, F-M6-06
bloque: Texto + lista de verificación + tabla de la rúbrica

El **Hito 6b: implementación del flujo** muestra que tu flujo funciona, que tiene supervisión humana y que quedó documentado. Entrega
en un documento o una carpeta compartida:

1. **El flujo** en pasos numerados, con lo que hace la IA y lo que haces tú (P02).
2. **La ficha del flujo**, con supervisión y contingencia (P04 a P06).
3. **La tabla de riesgos** con sus controles (P05).
4. **La bitácora de decisiones**, con al menos tres entradas (P07).
5. **La tabla de versiones** de tu plantilla principal (P08).
6. **La evidencia de las pruebas:** resultados y capturas sin datos personales (P09).

Tu tutor lo revisa con la **rúbrica general de hitos** y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el Hito 6b |
|---|---|---|
| Pertinencia al problema real | 25 % | El flujo ataca el desafío y la meta del Hito 6a |
| Uso verificado de IA | 25 % | Prompts documentados por versión y resultados revisados en cada prueba |
| Calidad del entregable | 20 % | Flujo, ficha y bitácora completos y coherentes entre sí |
| Ética, privacidad y licencias | 15 % | Sin datos personales expuestos; supervisión humana clara |
| Comunicación | 15 % | Otra persona entiende el flujo leyendo la ficha |

Este hito es formativo: no pondera en la nota, pero lo que tu tutor te comente aquí mejora tu entrega final.

:::actividad Revisa antes de entregar
- [ ] Cada punto de supervisión dice quién, cuándo, qué y con qué criterio.
- [ ] Cada riesgo tiene un control o una decisión registrada.
- [ ] La bitácora tiene fecha, contexto, decisión y consecuencias en cada entrada.
- [ ] Probé cada versión con los mismos casos.
:::

### Ideas clave

1. Implementar es un ciclo: probar a pequeña escala, estudiar lo que pasó, ajustar y volver a probar (PDSA).
2. Las etapas van en orden: mapear, definir controles, documentar, probar en pequeño, ajustar y recién después usar en la tarea real.
3. La supervisión humana se define por escrito: quién revisa, cuándo, qué, con qué criterio y qué hacer si falla.
4. Cada riesgo necesita un control; cada cambio al flujo o al prompt se vuelve a probar, y el plan de contingencia no depende de la
   misma herramienta.
5. La ficha del flujo registra propósito, entradas, salidas, dependencias, supervisión y contingencia, con una convención de nombres.
6. La bitácora de decisiones guarda contexto, decisión y consecuencias; una decisión aplicada no se reescribe, se reemplaza con otra
   entrada.
7. Cada versión de un prompt se guarda, se fecha y se prueba con los mismos casos.

### Glosario

- **Implementación**: puesta en marcha de un cambio en una tarea real, con pruebas y ajustes.
- **Ciclo PDSA**: ciclo de mejora de cuatro momentos: planificar, hacer, estudiar y actuar.
- **Prueba a pequeña escala**: ensayo de un cambio con pocos casos antes de adoptarlo.
- **Punto de control**: momento del flujo en que una persona revisa el resultado con un criterio definido.
- **Sesgo de automatización**: tendencia a confiar de más en lo que produce un sistema automatizado.
- **Gestión de cambios**: forma de controlar las modificaciones a un flujo, probando de nuevo cada cambio.
- **Plan de contingencia**: lo que se hace si un flujo deja de funcionar y cómo se detecta la falla.
- **Ficha del flujo**: documento que describe propósito, entradas, salidas, dependencias, supervisión y contingencia de un flujo.
- **Dependencia**: herramienta, cuenta o archivo sin el cual el flujo no funciona.
- **Convención de nombres**: regla fija para nombrar flujos, plantillas y archivos.
- **Bitácora de decisiones**: registro fechado de cada decisión del proyecto, con su contexto y sus consecuencias.
- **Versión de un prompt**: cada estado guardado y fechado de una plantilla, probado con los mismos casos.
- **Historial de versiones**: función de un documento o planilla que guarda sus cambios y permite volver a una versión anterior.
- **Caso de prueba (de un flujo)**: ejemplo preparado para comprobar si el flujo funciona, incluidos casos difíciles.

### Conexión con el proyecto

Este tema es el **Hito 6b del proyecto aplicado: implementación del flujo**. Partes del prototipo del Hito 5 y de la meta y el plan de
medición del Hito 6a, y entregas el flujo implementado y documentado: ficha, riesgos, bitácora de decisiones, versiones de prompts y
evidencia de pruebas. El tutor te devuelve su retroalimentación en un plazo de 72 horas como máximo. Con el flujo en uso, empiezas a
juntar los datos que medirás en el Hito 6c.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M6.md`, `investigacion/M5.md`, `investigacion/HERRAMIENTAS-1.md` y
`investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).

- F-M6-04 · Institute for Healthcare Improvement (s. f.). Model for Improvement. https://www.ihi.org/library/model-for-improvement
- F-M6-06 · NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- F-M6-07 · University of Bath (s. f.). Automation standards for Microsoft Power Automate. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- F-M6-08 · Government Digital Service (2026). The GDS Way: Architecture decisions. https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html
- F-M6-09 · Google, Ayuda de Editores de Documentos (s. f.). Cómo ver los cambios de un archivo. https://support.google.com/docs/answer/190843?hl=es-419
- F-M6-10 · OpenAI (s. f.). Prompt engineering. https://developers.openai.com/api/docs/guides/prompt-engineering
- F-M5-11 · Zapier Help Center (2026). How to troubleshoot errors in Zap workflows. https://help.zapier.com/hc/en-us/articles/8496037690637
- F-M5-12 · Comisión Europea, Grupo de expertos de alto nivel sobre IA (2019). Directrices éticas para una IA fiable. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- F-M5-14 · NIST (2024). AI RMF: Generative Artificial Intelligence Profile, NIST AI 600-1. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-15 · Google (s. f.). Centro de Privacidad de las Aplicaciones de Gemini. https://support.google.com/gemini/answer/13594961?hl=es
- F-H-61 · Google (s. f.). Acciones programadas en las aplicaciones de Gemini. https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- F-H-62 · Google (s. f.). Utilizar y gestionar Aplicaciones conectadas en Gemini. https://support.google.com/gemini/answer/13695044?hl=es
- F-H-94 · Make (s. f.). Pricing. https://www.make.com/pricing


## M6-AE3 · Resultados y aprendizajes

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M6-01, F-M6-15
bloque: Texto + lista con viñetas

Tu flujo ya está en uso y llevas semanas juntando datos. Llegó el momento de responder la pregunta que te hiciste al principio:
**¿el cambio fue una mejora?** Y después, de contarlo bien.

**Aprendizaje esperado:** Evaluar los resultados del proyecto y comunicarlos mediante un pitch y un portafolio, proponiendo mejoras.

Al terminar, deberías poder:
- comparar tus resultados con la línea base que fijaste en el Hito 6a;
- comunicar resultados y límites con claridad en un pitch de 3 minutos.

Este tema cierra dos hitos:
- **Hito 6c: medición de resultados y ajustes.** Comparas, interpretas y propones mejoras.
- **Hito 6d: pitch y portafolio final.** Presentas tu proyecto en 3 minutos y reúnes tus mejores evidencias. Es el insumo del
  **Demo Day**, la presentación de cierre del curso.

Un **pitch** es una presentación breve que busca captar la atención en poco tiempo y comunicar una propuesta de forma directa. El
tuyo no vende una empresa: muestra un problema real, lo que hiciste con IA y cuánto cambió, con sus límites.

:::ejemplo Dos cierres distintos
**Andrés** presentará su proyecto a su jefatura y en el Demo Day: quiere que la bodega siga usando el flujo. **Camila** lo usará en
sus entrevistas: quiere mostrar que sabe mejorar una tarea administrativa con IA y medir el resultado.
:::

:::clave
Un proyecto que no llegó a su meta también se puede presentar bien. Lo que no se puede es presentar un resultado que no mediste.
:::

### P02 · Mide contra tu línea base
cubre: S1, C1, H1
fuentes: F-M6-01, F-M6-02, F-M6-05
bloque: Texto + tabla de resultados + actividad

Medir resultados es comparar el **valor final** de cada indicador con su **línea base** y con su **meta**. Para que la comparación valga,
usa la misma fórmula, la misma fuente y la misma frecuencia que definiste en tu plan de medición. Si algo cambió, dilo.

**Resultados de Andrés** (cuatro semanas; datos ficticios):

| Indicador | Línea base | Meta | Resultado | Diferencia | ¿Meta? |
|---|---|---|---|---|---|
| Avisos el mismo día | 45 % | 90 % | 89 % (25 de 28) | +44 puntos | Casi |
| Tiempo por aviso | 12 min | 5 min | 5 min | −7 min | Sí |
| Avisos enviados con error | 10 % | 0 % | 0 % | −10 puntos | Sí |
| Claridad (rúbrica 1 a 4) | 2,5 | 3,5 | 3,4 | +0,9 | Casi |

Junto a los números, suma lo **cualitativo**: lo que observaste, lo que dijeron otras personas, los casos raros. Andrés anotó que su
revisión detectó cuatro borradores con fecha equivocada antes de enviarlos. Ese dato no está en la tabla, pero muestra que la
supervisión funcionó.

:::comprueba
Camila tenía una línea base de 4 minutos por documento y una meta de 2. Su resultado es 2,5 minutos. ¿Cómo lo reporta?
- a) Meta cumplida, porque bajó el tiempo
- **b) Bajó 1,5 minutos frente a la línea base; no llegó a la meta de 2**
- c) Proyecto fallido, porque no llegó a 2 minutos
Retroalimentación: Se informa la diferencia con la línea base y si se alcanzó la meta, con número y unidad. Mejorar sin llegar a la
meta no es lo mismo que cumplirla, pero tampoco es un fracaso.
:::

:::actividad Tu tabla de resultados
Completa la tabla con tus indicadores. Agrega abajo tres observaciones cualitativas de tu bitácora.
:::

### P03 · Lo que el antes y después no te dice
cubre: S1, A2, C1
fuentes: F-M6-11, F-M6-04
bloque: Texto + escenario con preguntas

Comparar antes y después muestra si algo cambió en el tiempo. Pero tiene un supuesto fuerte: que **nada más cambió** entre las dos
mediciones. Casi nunca es así.

Pregúntate qué otros factores pudieron mover tus números:
- ¿Hubo más o menos trabajo en el periodo final?
- ¿Cambió algo más en la tarea, además de tu flujo?
- ¿Te volviste más rápida o rápido solo por practicar?
- ¿Los casos del final eran más fáciles que los del inicio?

:::ejemplo Camila separa la práctica de la IA
Camila sospechó que parte de su mejora venía de haber repetido la tarea. En la última semana registró 10 documentos más **sin** IA:
le tomaron 3,2 minutos en promedio, menos que los 4 del inicio. Concluye que su flujo ayuda, pero que una parte de la mejora se debe a
la práctica. Lo dice así en su informe.
:::

Lo que hizo Camila tiene una lógica conocida: comparar con un grupo de casos parecidos que **no** pasaron por el cambio fortalece la
conclusión. No siempre se puede, pero aunque sea un grupo pequeño ayuda.

:::error «Mejoró, entonces fue la IA»
Que un número mejore después de usar IA no prueba que la IA lo causó. Andrés notó que en dos de sus cuatro semanas hubo menos
atrasos, porque ya funcionaba la reserva de cajas. Con menos avisos, también tenía más tiempo para cada uno. Si no lo menciona, su
resultado se ve mejor de lo que es.
:::

Reconocer estos factores no le quita valor a tu proyecto. Le da credibilidad.

### P04 · Propón mejoras: cierra el ciclo
cubre: H1, A1
fuentes: F-M6-04, F-M6-16
bloque: Texto + tabla de decisión + actividad

En el ciclo PDSA, después de **estudiar** viene **actuar**. Con tus resultados en la mano decides, para cada parte del flujo, una de
tres cosas:

| Decisión | Cuándo | Ejemplo |
|---|---|---|
| Adoptar | Funcionó y quieres seguir así | Andrés mantiene la revisión de fecha y pedido |
| Ajustar | Funcionó a medias | Camila prueba otra plantilla para las fotos borrosas |
| Descartar | No funcionó o el riesgo no compensa | Andrés ya no deja que la IA proponga fechas: el riesgo de que las invente no compensa |

Una buena propuesta de mejora es concreta: **qué vas a cambiar, por qué y cómo lo vas a medir en el próximo ciclo**. «Mejorar el
prompt» no sirve; «agregar un ejemplo de contrato a la plantilla y probarla con los mismos 10 casos» sí.

La **autocrítica constructiva** es mirar tu proyecto con honestidad para mejorarlo, no para castigarte. Dos preguntas la ordenan:
**¿qué aprendí?** y **¿qué haría distinto?**

:::ejemplo La autocrítica de Andrés
«Aprendí que el flujo ahorra tiempo, pero que la claridad depende de mi revisión. Haría distinto la rúbrica de claridad: la definí
tarde y ventas la aplicó solo dos veces. En el próximo ciclo la aplicaré cada semana.»
:::

:::actividad Arma tu Hito 6c
En un documento, reúne:
1. Tu tabla de resultados con observaciones (P02).
2. Los otros factores que pudieron influir (P03).
3. Dos o tres propuestas de mejora, cada una con qué, por qué y cómo medirla.
4. Tus respuestas a «¿qué aprendí?» y «¿qué haría distinto?».
:::

### P05 · Cuenta tus resultados con honestidad
cubre: S2, A2
fuentes: F-M6-12, F-M6-13
bloque: Texto + comparación antes y después

Contar resultados con datos les da credibilidad y ayuda a que la audiencia recuerde el mensaje. Planifica el relato **antes** de hacer
gráficos o láminas:
- ¿Qué debe aprender tu audiencia?
- ¿Quién es y qué le importa?
- ¿De dónde vienen tus datos y por qué importan?
- ¿Cuáles son las **una o dos ideas** que debería poder repetir después?

Al comunicar un cambio, di su **dirección y su tamaño, en contexto**. Y di qué se puede concluir y qué no. Los límites van en un lugar
visible, no escondidos al final. Usa palabras simples para la incertidumbre: «estimación», «en estas cuatro semanas», «con 28
casos».

| Antes | Después |
|---|---|
| «La IA revolucionó los avisos de la bodega.» | «En cuatro semanas, los avisos enviados el mismo día subieron de 45 % a 89 %. Parte de la mejora puede deberse a que hubo menos atrasos.» |
| «Ahora registro documentos el doble de rápido.» | «Con 30 documentos de práctica, bajé de 4 a 2,5 minutos por documento. Una parte se debe a la práctica: sin IA, al final, tardaba 3,2.» |

La versión «después» es menos espectacular, pero se puede defender ante cualquier pregunta.

:::error Esconder los límites para que el resultado brille
Si la audiencia descubre después un límite que no mencionaste, deja de creerte en todo lo demás. Decirlo tú, con claridad, es parte de
una comunicación honesta.
:::

:::comprueba
¿Cuál de estas frases comunica mejor un resultado?
- a) «El flujo fue un éxito total»
- **b) «El tiempo por aviso bajó de 12 a 5 minutos en cuatro semanas, con 28 avisos»**
- c) «Ahorré muchísimo tiempo gracias a la IA»
Retroalimentación: La b dice cuánto cambió, desde dónde, en qué periodo y con cuántos casos. La a y la c no permiten saber qué pasó.
:::

### P06 · La estructura de tu pitch de 3 minutos
cubre: S3, C2
fuentes: F-M6-15, F-M6-14
bloque: Ordenar o clasificar (sorting activity)

Un pitch se arma con tres dimensiones: el **contenido** (qué dices), el **estilo** (cómo lo dices) y el **soporte visual**. Para el
contenido, una estructura de 3 minutos que funciona bien es esta, adaptada a un proyecto de mejora:

| Parte | Qué cuentas | Tiempo sugerido |
|---|---|---|
| 1. Apertura | Una historia breve, un dato o una pregunta que capte la atención | 15 s |
| 2. Problema | La tarea y su situación inicial, con tu línea base | 30 s |
| 3. Solución | Tu flujo con IA y dónde está la supervisión humana | 40 s |
| 4. Evidencia | Cuánto cambió frente a la línea base | 40 s |
| 5. Límites y mejoras | Qué no puedes concluir y qué ajustarás | 30 s |
| 6. Llamado a la acción | Qué pides o propones a tu audiencia | 25 s |

Los tiempos son una sugerencia del curso. La parte 5 también: el pitch de este curso pide comunicar los límites, no solo los logros.

Explica todo en el **lenguaje más simple posible**, sin siglas ni jerga técnica. Una prueba útil: escribe tu pitch en dos frases,
mándaselo a alguien y pídele que te lo explique de vuelta. Si no puede, falta claridad.

:::actividad Ordena el pitch de Andrés
Ordena estas partes de la 1 a la 6:
- a) «Propongo usar el flujo en toda la bodega desde enero.»
- b) «Hoy, de cada 10 atrasos, solo 4 o 5 se avisaban el mismo día.»
- c) «¿Qué siente un cliente que espera un pedido que no llega?»
- d) «La IA arma el borrador y yo reviso pedido y fecha antes de enviar.»
- e) «Pasamos de 45 % a 89 % de avisos el mismo día.»
- f) «Hubo menos atrasos en dos semanas, así que parte de la mejora puede no ser del flujo.»

Orden: c, b, d, e, f, a.
:::

:::comprueba
¿Por qué el llamado a la acción va al final?
- a) Porque es la parte menos importante
- **b) Porque la audiencia necesita conocer el problema y la evidencia antes de decidir**
- c) Porque así se ahorra tiempo
Retroalimentación: Lo que pides tiene sentido solo cuando la audiencia ya entendió el problema, la solución y cuánto cambió.
:::

### P07 · Escribe y ensaya tu pitch
cubre: S2, H1, C2
fuentes: F-M6-14, F-M6-15, F-M6-13, F-H-12, F-H-47
bloque: Texto + escenario o conversación de ejemplo + actividad

Con la estructura lista, escribe tu guion. Como referencia del curso, 3 minutos hablados son unas 350 a 400 palabras. Puedes pedirle
ayuda a Gemini para ajustarlo:

> «Actúa como editor de presentaciones. Este es el guion de mi pitch de 3 minutos sobre un proyecto de mejora con IA. Acórtalo a 380
> palabras, usa frases cortas y lenguaje simple, sin siglas. No cambies ni agregues cifras. Mantén la parte de límites.» [pega tu guion]

Después, **revisa que cada número del guion coincida con tu tabla de resultados**. Un asistente puede redondear o «mejorar» una cifra
sin avisar.

Para el soporte visual, reutiliza lo que ya tienes: tus seis láminas del Hito 2, actualizadas con los resultados, y tu pieza
multimedia del Hito 4. Si necesitas rehacer láminas, Gamma o la generación de diapositivas de Gemini tienen opciones gratuitas, con
límites.

:::ejemplo Camila adapta su pitch para una entrevista
Para una entrevista, Camila usa la misma base, pero cambia el énfasis: presenta logros **breves, relevantes y medibles** para el cargo.
«Diseñé un registro de documentos con IA. En práctica, bajé de 4 a 2,5 minutos por documento y reviso cada registro antes de guardarlo.
Sé dónde ayuda la IA y dónde no.» Cierra ofreciendo mostrar su portafolio.
:::

:::actividad Ensaya
1. Lee tu guion en voz alta con un cronómetro. Si pasas de 3 minutos, corta.
2. Grábate con el celular y escúchate una vez.
3. Haz la prueba de las dos frases con alguien de confianza.
4. Ajusta lo que no se entendió y ensaya de nuevo.
:::

### P08 · Tu portafolio: una selección con intención
cubre: S3, H1, A1
fuentes: F-M6-16, F-M6-15, F-H-76
bloque: Texto + lista de verificación + plantilla descargable

Un **portafolio profesional** es una colección intencionada de evidencias de tus logros, tu esfuerzo y tu crecimiento. Es una
**selección** de tus mejores trabajos, no un archivo de todo. Conviene distinguir dos cosas: tu carpeta del proyecto, donde guardas
todo, y el portafolio que muestras, adaptado a quien lo va a ver.

Una estructura posible:
1. **Presentación:** quién eres y tu meta profesional, en tres líneas.
2. **El proyecto en una página:** desafío, línea base, flujo, resultados y límites.
3. **Tres a cinco piezas** elegidas de tus hitos. Por ejemplo: dos plantillas de tu biblioteca, la presentación, la pieza multimedia,
   la ficha del flujo y la bitácora de decisiones.
4. **Tu pitch:** el guion o el enlace a la grabación.

Cada pieza lleva una nota breve que responde: **¿por qué la incluyo?, ¿qué habilidad muestra?, ¿qué aprendí?, ¿qué haría distinto?**
Esas respuestas son las que te diferencian.

Antes de mostrarlo a otras personas, revísalo:
- [ ] Sin datos personales de nadie ni información confidencial de una empresa.
- [ ] Con las licencias y atribuciones que pide cada herramienta. Por ejemplo, si publicas audio hecho con el plan gratuito de
  ElevenLabs, debes poner «elevenlabs.io» en el título.
- [ ] Con la ficha de uso ético de tu pieza multimedia.
- [ ] Indicando dónde usaste IA y qué revisaste tú.

:::ejemplo Dos portafolios distintos
Camila arma uno para empleadores: pone primero el registro de documentos y la ficha del flujo. Andrés arma uno para su jefatura:
pone primero los resultados y el plan para extender el flujo.
:::

:::error Meter todo en el portafolio
Subir cada borrador, cada prueba y cada versión no muestra más: obliga a quien lo ve a buscar lo importante. Eso va en tu carpeta del
proyecto. En el portafolio, pocas piezas, elegidas para esa audiencia.
:::

### P09 · Tus hitos 6c y 6d, y el Demo Day
cubre: H1, C1, C2, A2
fuentes: F-M6-11, F-M6-12, F-M6-15, F-M6-16
bloque: Texto + lista de verificación + tabla de la rúbrica

Llegaste al cierre. Entregas dos hitos:
- **Hito 6c: medición de resultados y ajustes.** El documento que armaste en P04: resultados frente a la línea base, otros factores,
  propuestas de mejora y autocrítica.
- **Hito 6d: pitch y portafolio final.** El pitch de 3 minutos (guion y grabación, o presentación en vivo, según indique tu tutor) y
  el portafolio. Es el insumo del Demo Day.

Tu tutor revisa cada uno con la **rúbrica general de hitos** y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el cierre |
|---|---|---|
| Pertinencia al problema real | 25 % | Los resultados responden al desafío y a la meta del Hito 6a |
| Uso verificado de IA | 25 % | Las cifras salen de tu medición y el uso de IA está documentado |
| Calidad del entregable | 20 % | Pitch dentro de 3 minutos; portafolio completo y ordenado |
| Ética, privacidad y licencias | 15 % | Sin datos expuestos; licencias y atribuciones al día |
| Comunicación | 15 % | Resultados y límites claros para tu audiencia |

El Hito 6c es formativo y no pondera. El **Hito 6d** es sumativo: según el sistema de evaluación del curso, vale 15 % de la nota final.

:::actividad Revisión final
- [ ] Cada resultado se compara con su línea base, con número, unidad y periodo.
- [ ] Menciono al menos un factor externo que pudo influir.
- [ ] Mi pitch dice qué no puedo concluir, no solo lo que logré.
- [ ] Mi pitch dura 3 minutos o menos.
- [ ] Mi portafolio es una selección, con una nota de reflexión por pieza.
:::

:::clave
En el Demo Day no gana el proyecto con el número más grande. Destaca el que muestra con claridad qué cambió, cómo lo sabe y qué
aprendió.
:::

### Ideas clave

1. Medir resultados es comparar el valor final de cada indicador con su línea base y su meta, con la misma fórmula, fuente y
   frecuencia.
2. La comparación antes y después supone que nada más cambió: hay que nombrar otros factores y, si se puede, comparar con casos sin el
   cambio.
3. Proponer mejoras es cerrar el ciclo PDSA: adoptar, ajustar o descartar, diciendo qué cambias, por qué y cómo lo medirás.
4. Un relato con datos se planifica antes de los gráficos: qué debe aprender la audiencia y una o dos ideas que pueda repetir.
5. Los cambios se comunican con dirección y tamaño, en contexto, y los límites van en un lugar visible.
6. Un pitch de 3 minutos va de la apertura al llamado a la acción, pasando por problema, solución, evidencia y límites, en lenguaje
   simple.
7. Un portafolio es una selección intencionada de evidencias, adaptada a su audiencia, con reflexión sobre cada pieza.

### Glosario

- **Valor final**: resultado de un indicador al terminar el periodo de medición.
- **Comparación antes y después**: contraste entre la línea base y el valor final de un indicador.
- **Factor externo**: cambio ajeno al proyecto que pudo influir en los resultados.
- **Grupo de comparación**: casos parecidos que no pasaron por el cambio y sirven para contrastar resultados.
- **Estimación**: valor aproximado que se comunica reconociendo su incertidumbre.
- **Propuesta de mejora**: cambio concreto para el siguiente ciclo, con su motivo y su forma de medirlo.
- **Autocrítica constructiva**: revisión honesta del propio trabajo para mejorarlo.
- **Relato con datos**: forma de comunicar resultados que combina cifras, contexto y una o dos ideas clave.
- **Pitch**: presentación breve que busca captar la atención y comunicar una propuesta de forma directa.
- **Apertura**: inicio del pitch que capta la atención con una historia breve, un dato o una pregunta.
- **Llamado a la acción**: cierre del pitch que dice qué se pide o propone a la audiencia.
- **Prueba de las dos frases**: resumir el pitch en dos frases y pedir a otra persona que lo explique de vuelta.
- **Portafolio profesional**: selección intencionada de evidencias de logros, esfuerzo y crecimiento, adaptada a una audiencia.
- **Demo Day**: presentación de cierre del curso, para la que el pitch y el portafolio son el insumo.

### Conexión con el proyecto

Este tema cierra el proyecto aplicado con dos hitos. El **Hito 6c: medición de resultados y ajustes** compara tus resultados con la
línea base del Hito 6a y propone mejoras (P02 a P04). El **Hito 6d: pitch y portafolio final (insumo del Demo Day)** reúne el pitch de
3 minutos y el portafolio con tus mejores piezas de los hitos 1 al 6 (P05 a P08). En ambos, el tutor te devuelve su retroalimentación
en un plazo de 72 horas como máximo.

### Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M6.md`, `investigacion/HERRAMIENTAS-1.md` y
`investigacion/HERRAMIENTAS-2.md` (consultadas el 24-10-2026).

- F-M6-01 · CONEVAL (2019). Guía para el establecimiento y cálculo de líneas base y metas. https://www.coneval.org.mx/InformesPublicaciones/Documents/Guia_lineas_base_metas.pdf
- F-M6-02 · CIPPEC; Aquilino, Arena, Gutiérrez Bode y Scolari (2019). Guía N.º 5: Cómo construir indicadores. https://www.cippec.org/wp-content/uploads/2019/06/PP-ME-Guia-5.pdf
- F-M6-04 · Institute for Healthcare Improvement (s. f.). Model for Improvement. https://www.ihi.org/library/model-for-improvement
- F-M6-05 · Anthropic (s. f.). Define success criteria and build evaluations. https://platform.claude.com/docs/es/test-and-evaluate/develop-tests
- F-M6-11 · TASO (2020). TASO: Evaluation Methods. https://cdn.taso.org.uk/wp-content/uploads/TASO-Evaluation-Methods.pdf
- F-M6-12 · Government Analysis Function (2018). Communicating quality, uncertainty and change. https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/
- F-M6-13 · GSA, Data & Analytics Center of Excellence (s. f.). Data story. https://coe.gsa.gov/coe/data-story/
- F-M6-14 · Y Combinator; Seibel (2016). How to Pitch Your Company. https://www.ycombinator.com/blog/how-to-pitch-your-company/
- F-M6-15 · CATIE (2025). El secreto de un pitch infalible. https://agromira.catie.ac.cr/wp-content/uploads/2025/05/El-secreto-de-un-pitch-infalible-Taller-presencial.pdf
- F-M6-16 · Unisa, Directorate of Counselling and Career Development (2023). Career portfolio. https://www.unisa.ac.za/sites/corporate/default/Apply-for-admission/Undergraduate-qualifications/Counselling-and-Career-Development/Prepare-for-job-opportunities/Career-portfolio
- F-H-12 · Google (s. f.). Límites de las aplicaciones de Gemini y cambios a planes superiores. https://support.google.com/gemini/answer/16275805?hl=es
- F-H-47 · Gamma (s. f.). Planes y precios. https://gamma.app/es/pricing
- F-H-76 · ElevenLabs (s. f.). Can I publish the content I generate on the platform? https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform

