# IA generativa para entornos laborales · Contenidos base

Generado el 2026-10-30 desde `contenido/`. 6 módulos · 22 aprendizajes esperados.


---

# Módulo 1 · Introducción a la IA generativa y prompt básico

**Competencia:** Interactuar con modelos de IA generativa mediante prompts efectivos y validación de resultados, para apoyar tareas de oficina de forma verificada.


## M1-AE1 · Fundamentos de IA generativa

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-02
bloque: Texto + imagen de portada

En este tema vas a conocer la herramienta con la que trabajarás todo el curso. Antes de pedirle algo a una inteligencia artificial
conviene saber qué es, cómo produce sus respuestas, qué tipos existen y dónde se equivoca [@F-M1-02]. Con eso vas a poder decidir cuándo te
ahorra tiempo en tu trabajo y cuándo no.

El aprendizaje esperado es este: Explicar el funcionamiento general, los tipos y los límites de la IA generativa, ejemplificando sus
usos en tareas laborales cotidianas. Al final deberías poder explicarlo con tus palabras y dar al menos tres usos y dos límites
pensando en las tareas de tu propio cargo.

En los ejemplos te van a acompañar dos personas. Camila es asistente administrativa en una constructora: responde correos de
proveedores, lleva la agenda de su jefatura y registra facturas y contratos. Andrés es encargado de bodega en una distribuidora y
cada semana entrega un reporte de stock. Son ficticias, pero sus tareas se parecen a las de cualquier oficina. No necesitas saber
programar ni pagar una licencia: todo lo que veas se puede probar con asistentes gratuitos, también desde el celular.

### P02 · Qué es la IA generativa
cubre: S1, C1
fuentes: F-M1-02, F-M1-01
bloque: Texto + tabla comparativa

La **inteligencia artificial generativa** es un tipo de IA que produce contenido nuevo: textos, imágenes, audio, y también código o
video [@F-M1-02; @F-M1-01]. No te entrega algo que estaba guardado en alguna parte, como hace un buscador cuando te muestra una página que ya existe. Crea
un resultado a partir de lo que le pides.

La diferencia se ve mejor al lado de herramientas que ya usas en la oficina:

| Herramienta | Qué hace | Ejemplo |
|---|---|---|
| Buscador | Encuentra páginas que ya existen | Buscar la dirección de una oficina pública |
| Programa con reglas | Aplica condiciones que escribió una persona | Una planilla que marca en rojo las facturas vencidas |
| IA generativa | Produce un contenido nuevo según tu instrucción | «Escribe un correo breve para pedirle una reunión a mi jefatura» |

A la instrucción que le das se le llama **prompt**. Puede ser una pregunta, una orden o un texto con indicaciones. Lo vas a trabajar
a fondo en el tema siguiente; por ahora basta con saber que la calidad de lo que recibes depende mucho de cómo lo pides.

:::ejemplo El mismo pedido, tres herramientas
Andrés necesita avisar a su equipo que el inventario se hará el viernes. Un buscador le muestra avisos que escribieron otras
personas. Una planilla con reglas no le sirve para eso. Un asistente de IA generativa le escribe un aviso nuevo, con la fecha y el
tono que él indique, en segundos.
:::

### P03 · Cómo produce sus respuestas
cubre: S1, C1
fuentes: F-M1-02, F-M1-09
bloque: Proceso (process block) en 3 pasos

Un modelo generativo de texto aprendió a partir de enormes cantidades de ejemplos escritos. De ese entrenamiento sacó sobre todo
patrones: qué palabras suelen ir con otras, cómo se ordena un correo, cómo se responde una pregunta [@F-M1-02]. Cuando le escribes, no busca una
respuesta guardada. Arma una nueva, pieza por pieza, y lo hace tan rápido que parece que escribiera frente a ti.

El proceso se repite muchas veces en cada respuesta:

1. Lee tu mensaje y lo que va de la conversación.
2. Estima qué continuaciones son probables, elige una y la agrega.
3. Vuelve a calcular con el texto ya agregado, hasta terminar.

Esa elección tiene algo de azar, y por eso el mismo pedido puede darte respuestas distintas. También explica algo más importante: el
modelo no «sabe» ni «entiende» como una persona, sino que predice texto plausible. Casi siempre eso coincide con algo correcto y útil,
pero no siempre, y de esa diferencia nacen los límites que verás más adelante en este tema [@F-M1-09].

:::error «Si lo dice con seguridad, es verdad»
El tono seguro es parte del estilo que aprendió el modelo, no una prueba de que el contenido sea correcto. Una respuesta puede sonar
impecable y estar equivocada.
:::

### P04 · Modelos de lenguaje
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-12
bloque: Texto + knowledge check

Los **modelos de lenguaje** generan texto [@F-M1-02]. Son la base de los asistentes conversacionales más conocidos, a los que les escribes como si
fuera un chat. En una oficina sirven para redactar borradores de correos, avisos y minutas; para resumir un documento largo o un
reglamento interno; para pasar un texto informal a uno formal, o acortarlo; para ordenar notas sueltas en una lista o una tabla, y
para que te expliquen un término técnico con un ejemplo simple [@F-M1-12].

Camila los usa casi a diario. Un proveedor le escribió para reclamar por un pago y ella tomó apuntes sueltos de lo que averiguó con
contabilidad. Le pide a un asistente que ordene esos apuntes en un correo de respuesta de diez líneas y recibe un borrador en segundos.
No lo envía tal cual: lo revisa, corrige una fecha que el asistente escribió mal y cambia una frase que no suena a ella.

Ese último paso es parte del trabajo. El asistente le ahorra el tiempo de partir de una hoja en blanco, pero el correo sale con su
nombre y la fecha de pago tiene que ser la que acordó contabilidad.

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

Los **modelos de imagen** generan imágenes a partir de una descripción escrita [@F-M1-02]. También pueden modificar una imagen que ya tienes:
cambiar el fondo, quitar un objeto o crear variaciones. En el trabajo sirven para ilustrar una presentación o un afiche, para mostrar
una idea en un boceto antes de encargar un diseño, o para probar varias versiones y ver cuál comunica mejor.

Para pedir una imagen se describe lo que se quiere ver: el objeto, el estilo, los colores y el encuadre. Por ejemplo: «Ilustración
simple de una bodega ordenada, estilo plano, colores azul y gris, sin texto».

Un error común es usar la imagen generada sin mirarla con calma. A estos modelos todavía les cuesta escribir texto nítido dentro de la
imagen y ubicar cada elemento justo donde se pidió, así que una imagen puede traer letras ilegibles o piezas fuera de lugar [@F-M1-05]. Se revisa
siempre antes de imprimirla o publicarla. Las licencias y los derechos de uso los verás en detalle en el módulo 4.

:::ejemplo Andrés y el afiche de seguridad
Andrés quiere un afiche que recuerde usar calzado de seguridad en la bodega. Pide una ilustración simple con una persona que lleva
zapatos de seguridad. Antes de imprimirla revisa los detalles y nota que el cartel que aparece en la pared tiene letras sin sentido.
Pide una versión sin texto y agrega el mensaje después, con su propio programa.
:::

### P06 · Modelos de audio
cubre: S2, C1, C2
fuentes: F-M1-02, F-M1-04
bloque: Texto + audio de ejemplo (opcional)

Los **modelos de audio** generan sonido: voz sintética a partir de un texto, música o efectos [@F-M1-02]. Algunas herramientas además hacen lo
contrario y convierten una grabación en texto, algo útil para tomar notas de una reunión [@F-M1-04]. En el trabajo se usan para locutar un video
de capacitación o un mensaje informativo, para escuchar en voz alta un texto mientras lo revisas, o para crear una pista musical de
fondo para un video breve.

Imitar la voz de una persona real sin su permiso es otra cosa: es un problema ético y legal. El consentimiento y los derechos de voz
los vas a trabajar en el módulo 4.

:::ejemplo Un mensaje para la central telefónica
Una tienda necesita un mensaje grabado con su horario de atención. En vez de grabarlo, alguien escribe el texto y un modelo de audio
lo convierte en una voz clara. Antes de usarlo conviene escucharlo completo y fijarse en cómo suenan las siglas, los nombres y los
números, porque son las partes que más cuesta corregir después de publicadas.
:::

### P07 · Qué tipo de modelo usar para cada tarea
cubre: S2, C1
fuentes: F-M1-04
bloque: Ordenar o clasificar (sorting activity)

Muchas herramientas actuales son **multimodales**: reciben o entregan más de un tipo de contenido [@F-M1-04]. Puedes, por ejemplo, sacarle una
foto a una factura en papel y pedir que te pase sus datos a una tabla. Entra una imagen y sale texto.

Aun así, cada tarea tiene un tipo de salida, y esa salida te dice qué buscar. Si necesitas un correo, un resumen o una lista, trabajas
con un modelo de lenguaje. Si necesitas una ilustración o un afiche, con uno de imagen. Si lo que quieres es una locución o una pista
musical, con uno de audio. Y cuando la tarea consiste en leer una imagen y convertirla en texto, necesitas una herramienta multimodal.

:::actividad Clasifica estas tareas
Arrastra cada tarea al tipo de modelo que corresponde:
1. Redactar la respuesta a un reclamo de un cliente. → Lenguaje
2. Crear la imagen para un aviso interno sobre la semana de la seguridad. → Imagen
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
corta, parte de una palabra larga, un carácter o un signo de puntuación, y los espacios y las mayúsculas también cambian la forma en
que se divide [@F-M1-06]. Una palabra como «inventario» puede quedar partida en más de un token, y la cantidad de tokens de un mismo texto cambia
según el idioma y el modelo [@F-M1-03].

Te importa porque los tokens son la unidad con que el modelo mide su trabajo. Lo que puede leer de una vez tiene un máximo, contado en
tokens, y la respuesta tiene su propio tope. Un error común es suponer que el asistente siempre lee completo el documento que pegaste:
si el texto supera ese máximo, una parte puede quedar fuera sin que te avise con claridad. Con documentos largos conviene trabajar por
partes, acortar lo repetido o preguntarle qué secciones consideró.

:::actividad Mira los tokens
Algunas herramientas muestran cómo se divide un texto en tokens. Si tienes acceso a una, pega una frase de un correo de tu trabajo,
sin nombres ni datos de clientes, y observa cuántos fragmentos aparecen. Fíjate en qué pasa con las palabras largas y con los signos.
:::

### P09 · Contexto: lo que el modelo tiene a la vista
cubre: S3, C1
fuentes: F-M1-07, F-M1-08
bloque: Texto + escenario o conversación de ejemplo

El **contexto** es todo lo que el modelo tiene a la vista para responder: tus instrucciones, los mensajes anteriores de la
conversación y los archivos o textos que le entregaste [@F-M1-07]. A su capacidad máxima se le llama **ventana de contexto**, y también se mide en
tokens.

De ahí salen tres consecuencias prácticas. Lo que no está en el contexto, el modelo no lo conoce: no sabe en qué empresa trabajas, qué
acordaste con un proveedor ni cómo se llama tu jefatura, salvo que se lo digas. En una conversación muy larga, lo que escribiste al
inicio puede perder peso o quedar fuera de la ventana, así que al cambiar de tarea a veces conviene empezar una conversación nueva [@F-M1-07]. Y
una conversación nueva parte, en general, sin lo anterior. Algunas herramientas tienen funciones de memoria, pero no guardan todos los
detalles [@F-M1-08]; revisa cómo funciona la tuya antes de suponer que «se acuerda».

Camila lo comprobó con un correo. Primero preguntó: «¿Mi respuesta está bien?», y el asistente le contestó con generalidades. Después
pegó el correo del proveedor y su borrador, y preguntó: «¿Mi respuesta contesta todas las preguntas de este proveedor?». Esta vez
recibió observaciones concretas, porque el modelo tenía a la vista lo que necesitaba.

:::comprueba
Andrés pide «resume el reporte de esta semana», pero no pega el reporte. ¿Qué es lo más probable?
- a) El asistente busca el reporte en los archivos de la empresa
- **b) El asistente pide el texto o inventa un resumen genérico**
- c) El asistente recuerda el reporte de la semana pasada
Retroalimentación: El modelo solo trabaja con lo que está en su contexto. Si falta el reporte, puede pedirlo o, peor, inventar uno.
:::

### P10 · Primer límite: la alucinación
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-10
bloque: Texto + recuadro destacado

Como el modelo predice texto plausible, a veces produce información falsa que suena verdadera: datos, fechas, nombres, citas o
referencias que no existen. A esto se le llama **alucinación**, aunque algunos organismos prefieren decir «confabulación» [@F-M1-01].

No pasa al azar. Es más probable cuando le pides hechos muy puntuales y poco frecuentes, como una fecha o un nombre que casi nadie ha
escrito; cuando le pides fuentes o citas, porque puede inventar títulos de documentos o enlaces; y cuando haces una pregunta abierta
que pide una respuesta larga sobre un tema que exige conocimiento experto [@F-M1-10; @F-M1-01].

Una alucinación no avisa: llega con el mismo tono que una respuesta correcta. La defensa principal es verificar lo importante en una
fuente confiable. También ayuda pedirle que diga «no lo sé» cuando no tenga la información, en vez de rellenar [@F-M1-10]. Cómo verificar con
método lo vas a trabajar en el tema 4 de este módulo.

:::ejemplo La firma que nadie pidió
Camila pide un resumen del instructivo de rendición de gastos de la constructora. El asistente agrega que cada rendición necesita la
firma del gerente general, algo que el instructivo no dice. Si Camila no compara el resumen con el documento, podría pedir una firma
que nadie exige y atrasar las rendiciones de todo el equipo.
:::

### P11 · Segundo límite: el sesgo
cubre: S4, C1, C2
fuentes: F-M1-01, F-M1-11
bloque: Texto + imagen comparativa

Los modelos aprenden de lo que la gente ha escrito y publicado. Si en esos datos hay estereotipos o miradas parciales, el modelo puede
repetirlos. A esto se le llama **sesgo**.

Se ha documentado de varias formas. Al pedir imágenes de una persona gerente, de un médico o de un juez, los modelos de imagen tienden
a mostrar el mismo tipo de persona y dejan fuera a mujeres y a otros grupos [@F-M1-01]. En un estudio de la UNESCO, al pedir historias sobre
distintas personas, los modelos de lenguaje asignaron a los hombres trabajos más variados y de más prestigio, y a las mujeres roles
domésticos o desvalorizados [@F-M1-11]. Además, un modelo puede responder mejor en unos idiomas o formas de hablar que en otros [@F-M1-01].

Por eso un error común es usar la IA para decidir sobre personas. Pedirle a un asistente que elija a quién contratar o ascender, o que
califique a un trabajador, traslada sus sesgos a una decisión que afecta a alguien. Las decisiones sobre personas las toman personas,
con criterios explícitos.

:::actividad Detecta el sesgo
Pide a un asistente «tres ejemplos de personas que trabajan en una bodega» y luego «tres ejemplos de personas que trabajan en
recepción». Compara las respuestas: ¿qué supuestos aparecen sobre quién hace cada trabajo?
:::

### P12 · Tercer límite: la fecha de corte
cubre: S4, C1, C2
fuentes: F-M1-09
bloque: Texto + línea de tiempo

Un modelo se entrena con información reunida hasta cierta fecha, su **fecha de corte** [@F-M1-09]. Lo que pasó después no está en su
entrenamiento, y por eso puede dar como vigentes un valor, una norma o un precio que ya cambiaron.

A Andrés le pasó con un valor que se actualiza cada año, fijado por una norma. El asistente le dio una cifra de hace dos años, con
total seguridad. Como iba a usarla en un documento para su jefatura, la buscó en la página del organismo que la publica y encontró el
valor vigente.

Algunos asistentes pueden buscar en internet antes de responder y mostrar las fuentes que usaron. Eso ayuda con lo reciente, pero no
elimina el problema: la búsqueda puede traer páginas poco confiables, el asistente puede no tener acceso a ciertos sitios o resumir mal
lo que leyó [@F-M1-09]. Por eso las citas se revisan y los enlaces se abren.

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

Saber cómo funciona la IA generativa y dónde se equivoca te permite decidir qué tareas de tu cargo conviene delegarle [@F-M1-09]. Un criterio
práctico es pensarlo como un semáforo:

| | Tipo de tarea | Ejemplos |
|---|---|---|
| Verde: conviene | Borradores, ideas, reformular, resumir textos que tú entregas | Primer borrador de un correo; ordenar notas; resumir un instructivo |
| Amarillo: con revisión | Datos, cálculos, hechos, información reciente | Explicar una fórmula; dar una fecha; listar requisitos legales |
| Rojo: no conviene | Decisiones sobre personas, datos personales o confidenciales, lo que firmarías sin leer | Elegir a quién ascender; pegar el RUT y la dirección de un cliente |

La pregunta que ordena todo es esta: **si la respuesta está mal, ¿quién se da cuenta y cuánto cuesta el error?** Si el error es fácil
de ver y barato, delega. Si es difícil de detectar o grave, revisa a fondo o no delegues. Ese cuidado importa más mientras más cómodo
se vuelve el asistente, porque es fácil confiar de más en lo que entrega una máquina [@F-M1-01].

:::actividad Semáforo de tareas
Clasifica cada tarea en verde, amarillo o rojo:
1. Redactar un borrador de aviso para el diario mural. → Verde
2. Calcular las horas extra de un trabajador para su liquidación. → Amarillo
3. Decidir qué trabajador recibe una amonestación. → Rojo
4. Resumir un manual de procedimientos que tú pegas. → Verde
5. Confirmar el horario vigente de atención de un servicio público. → Amarillo
6. Pegar la base de datos de clientes con sus teléfonos para que la ordene. → Rojo
:::

### P14 · Práctica guiada: prueba un asistente
cubre: H2, A1
fuentes: F-M1-02, F-M1-12
bloque: Proceso paso a paso + actividad

Ahora te toca probar. Vas a usar un asistente de IA generativa con una tarea simple de tu trabajo y a mirar qué hace bien y qué no.

Como trabajas con información real, practica con una copia sin datos sensibles [@F-M1-02]. Elige un documento corto que uses en tu cargo, por
ejemplo un instructivo, un procedimiento o un correo interno [@F-M1-12]. Si tiene nombres, RUT, teléfonos o montos de clientes, haz una copia y
bórralos o cámbialos por datos de prueba. Respeta también lo que diga tu empresa sobre el uso de estas herramientas.

:::actividad Tu primera prueba
1. Abre un asistente con plan gratuito, en el computador o en la aplicación del celular. Usa el que tengas a mano.
2. Escribe este pedido y luego pega tu copia: «Resume este documento en tres viñetas: qué hay que hacer, en qué plazo y quién lo revisa. No agregues nada que no esté en el texto».
3. Compara el resumen con el original, línea por línea.
4. Anota en tu bitácora qué resumió bien, si omitió algo importante y si agregó algo que no estaba.
:::

Guarda esa copia del documento. La vas a usar en el Hito 1 del proyecto, cuando definas el desafío laboral en que trabajarás durante
el curso.

### P15 · Curiosidad crítica y uso responsable
cubre: A1, A2
fuentes: F-M1-02, F-M1-12
bloque: Texto + lista de verificación (checklist)

Para aprovechar la IA generativa sirven dos actitudes que se complementan. La **curiosidad crítica** es probar sin miedo y, al mismo
tiempo, preguntarse por qué el resultado salió así. Quien la practica no descarta la herramienta al primer error ni le cree a ciegas:
prueba otra forma de pedir, compara y saca conclusiones.

La **apertura a un uso responsable** es estar dispuesto a usar la tecnología haciéndose cargo de lo que produce. Usar un asistente casi
siempre implica compartir datos con el proveedor, y quien entrega el resultado final responde por él [@F-M1-02; @F-M1-12]. En la práctica, eso se traduce
en cuatro hábitos:

- [ ] Reviso lo que el asistente me entrega antes de usarlo o compartirlo.
- [ ] No ingreso datos personales ni información confidencial de otras personas o de mi empresa.
- [ ] Cuando un texto o una imagen fue hecho con IA y eso le importa a quien lo recibe, lo digo.
- [ ] La decisión final y la firma son mías, no de la herramienta.

Andrés los aplica sin pensarlo mucho. Usa un asistente para ordenar sus notas en el reporte semanal y, antes de enviarlo, comprueba que
las cifras sean las de su planilla y quita el nombre de un proveedor que no correspondía incluir. El asistente le ahorró tiempo; la
responsabilidad del reporte sigue siendo suya.

### P16 · Cierre: tres usos y dos límites
cubre: C1, C2, H1, A2
fuentes: F-M1-02, F-M1-09
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la IA generativa produce contenido nuevo a partir de patrones aprendidos, que arma sus respuestas fragmento a
fragmento y que trabaja solo con lo que tiene en su contexto [@F-M1-02]. Conociste los modelos de lenguaje, de imagen y de audio, y tres límites
que conviene tener siempre presentes: la alucinación, el sesgo y la fecha de corte [@F-M1-09].

Con eso ya puedes mirar tu propio trabajo con otros ojos. Hay tareas en que un asistente te sirve como primer borrador y otras en que
la respuesta necesita una revisión a fondo antes de salir con tu nombre. Antes de seguir, ponlo por escrito.

:::actividad Tus usos y tus límites
Piensa en tu cargo y en el documento que guardaste en la práctica guiada, y escribe:
1. Tres usos de la IA generativa que te servirían en tu trabajo. Por ejemplo: «redactar respuestas a correos de proveedores».
2. Dos límites que tendrías que cuidar, y cómo. Por ejemplo: «puede inventar una fecha de pago: la confirmo con contabilidad».

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

### Referencias bibliográficas

- Anthropic. (s. f.). *Context windows*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/context-windows
- Google. (s. f.-a). *¿Qué es la IA multimodal?* Google Cloud. https://cloud.google.com/use-cases/multimodal-ai?hl=es
- Google. (s. f.-b). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (2026). *Introducción a los modelos de lenguaje grandes (Curso intensivo de aprendizaje automático)*. Google for Developers. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Noticias ONU. (2024, 7 de marzo). *La inteligencia artificial ya reproduce estereotipos de género*. https://news.un.org/es/story/2024/03/1528182
- OpenAI. (s. f.). *Image generation*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/image-generation
- OpenAI. (2025, 5 de septiembre). *Por qué alucinan los modelos de lenguaje*. https://openai.com/es-419/index/why-language-models-hallucinate/
- OpenAI. (2026a). *¿Dice ChatGPT la verdad?* OpenAI Help Center. https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- OpenAI. (2026b). *Entender y contar tokens*. OpenAI Help Center. https://help.openai.com/es-es/articles/4936856-understanding-and-counting-tokens
- OpenAI. (2026c). *Memoria en ChatGPT*. OpenAI Help Center. https://help.openai.com/es-es/articles/8590148-memory-in-chatgpt


## M1-AE2 · Prompts efectivos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-14, F-H-02
bloque: Texto + imagen de portada

En el tema anterior viste que la calidad de lo que recibes depende mucho de lo que pides. Ahora vas a aprender a pedir bien: a
escribir instrucciones claras, revisar la respuesta y ajustar el pedido hasta que te sirva.

El aprendizaje esperado es este: Formular prompts efectivos con rol, contexto, tarea y formato para obtener respuestas útiles en
tareas laborales simples. Al terminar deberías poder escribir un prompt con esos cuatro componentes y mejorar una respuesta iterando al
menos una vez, hasta que de verdad te sirva en tu trabajo.

En este curso vas a usar **Gemini** como asistente principal. Tiene aplicación para Android y para iPhone, y funciona con una cuenta de
Google personal [@F-H-14]. Si prefieres otro, ChatGPT también tiene un plan gratuito que funciona en el navegador y en el celular [@F-H-02]. Y si en tu
empresa ya usan un asistente, como Copilot, puedes practicar con ese, respetando lo que tu empresa permita.

Vuelven Camila y Andrés. Camila responde todos los días correos de proveedores y clientes, y quiere dejar de escribirlos desde cero.
Andrés quiere que sus reportes y avisos de bodega le tomen menos tiempo. Los dos van a pasar de pedidos vagos a prompts que funcionan,
y vas a ver que un buen prompt no tiene nada de fórmula mágica: es una instrucción clara, como la que le darías a alguien que recién
llega a tu equipo.

### P02 · Anatomía de un prompt
cubre: S1, C1
fuentes: F-M1-12, F-M1-13
bloque: Texto + tabla o imagen con etiquetas (labeled graphic)

Las guías de Google y de Microsoft proponen estructuras parecidas para escribir prompts [@F-M1-12; @F-M1-13]. Con distintos nombres, las dos hablan de lo
mismo: quién responde, qué necesita saber, qué tiene que hacer y cómo entregarlo. En este curso usamos cinco componentes, con un
ejemplo de Camila en cada uno.

| Componente | Pregunta que responde | Ejemplo |
|---|---|---|
| Rol | ¿Desde qué perspectiva responde? | «Actúa como asistente administrativa de una constructora» |
| Contexto | ¿Cuál es la situación, para quién y por qué? | «Un proveedor pregunta por el pago de su factura de octubre; el pago está programado para el día 15» |
| Tarea | ¿Qué tiene que hacer? | «Redacta la respuesta a su correo» |
| Formato | ¿Cómo lo entrega? | «Un correo de no más de 80 palabras, tono cordial» |
| Restricciones | ¿Qué límites debe respetar? | «Usa solo los datos que te doy; no prometas nada que no esté aquí» |

No es obligatorio usar los cinco en cada prompt [@F-M1-12]. Un pedido muy simple puede funcionar solo con tarea y formato. Pero mientras más
depende la respuesta de tu situación, más componentes conviene incluir, y en este tema la meta mínima es que tus prompts tengan
**rol, contexto, tarea y formato**.

:::ejemplo El prompt completo de Camila
«Actúa como asistente administrativa de una constructora. Un proveedor pregunta por el pago de su factura de octubre; el pago está
programado para el día 15 y el correo lo leerá su encargada de cobranza. Redacta la respuesta a su correo. Entrégala como un correo de
no más de 80 palabras, con tono cordial. Usa solo los datos que te doy y no prometas nada que no esté aquí.»
:::

### P03 · Rol y contexto: ponerlo al día
cubre: S1, C1
fuentes: F-M1-14, F-M1-12
bloque: Texto + pestañas (tabs): rol / contexto

La guía de Anthropic propone una prueba sencilla: imagina que el asistente es una persona nueva en tu trabajo, inteligente pero sin
ningún antecedente. Si un colega recién llegado no entendería tu pedido, el modelo tampoco [@F-M1-14]. Un error común es pensar que el asistente
ya sabe a qué te refieres; como viste en el tema anterior, solo trabaja con lo que está en su contexto y no conoce tu empresa, tu
cargo ni tu jefatura si no se lo dices.

El **rol** le indica desde qué perspectiva responder. No le da conocimientos que no tiene, pero orienta el vocabulario, el tono y lo
que considera importante. En una oficina sirven roles como «encargado de bodega que escribe a su jefatura», «asistente de recursos
humanos que redacta un aviso interno» o «ejecutiva de atención al cliente».

El **contexto** explica la situación: para quién es el texto, para qué se usará y qué antecedentes importan [@F-M1-12]. Ayuda mucho explicar
también el motivo de una instrucción [@F-M1-14]. «Escríbelo corto porque se leerá en el celular» funciona mejor que solo «escríbelo corto»,
porque el asistente entiende qué busca y puede decidir mejor.

:::ejemplo Andrés pone al día al asistente
Sin contexto, Andrés escribía: «Escribe un aviso sobre el inventario». Ahora escribe: «Actúa como encargado de bodega. El viernes
cerramos a las 15:00 para hacer inventario y el equipo de ventas no podrá retirar productos esa tarde. El aviso lo leerán vendedores
que suelen pasar a buscar mercadería». Con la segunda versión, el asistente sabe a quién le habla y qué es lo importante.
:::

### P04 · Tarea, formato y restricciones
cubre: S1, C1
fuentes: F-M1-13, F-M1-14
bloque: Texto + knowledge check

La tarea es lo que quieres que haga. Conviene empezar con un verbo claro: resume, reescribe, clasifica, redacta, ordena, compara. Si
la tarea tiene varios pasos y el orden importa, numéralos [@F-M1-14].

El formato es cómo quieres recibir el resultado, y las guías recomiendan ser específico en tres cosas: la forma (viñetas, tabla,
párrafo o correo con asunto), la extensión («en tres viñetas», «máximo 100 palabras») y el tono (formal, cordial, directo) [@F-M1-13; @F-M1-14]. Si no lo
dices, el asistente decide por ti.

Las **restricciones** son los límites que la respuesta debe respetar: qué incluir, qué dejar fuera y de qué información sacar la
respuesta. Por ejemplo, «usa solo el texto que te pego» o «no agregues datos que no estén en el reporte». La guía de Anthropic suma un
consejo útil: di qué hacer en vez de decir solo lo que no quieres [@F-M1-14]. «Escribe en frases cortas y simples» orienta mejor que «no uses
palabras difíciles».

:::comprueba
En el prompt «Resume este reglamento en cinco viñetas para trabajadores nuevos, sin agregar información externa», ¿qué parte es una
restricción?
- a) «Resume este reglamento»
- b) «en cinco viñetas»
- **c) «sin agregar información externa»**
Retroalimentación: «Resume» es la tarea y «en cinco viñetas» es el formato. «Sin agregar información externa» limita de dónde puede
sacar la respuesta: es una restricción.
:::

### P05 · Ejemplos y datos dentro del prompt
cubre: S1, H1
fuentes: F-M1-14, F-M1-15
bloque: Texto + ejemplo destacado

A veces la manera más rápida de explicar lo que quieres es mostrar un ejemplo. Si le das un modelo del formato o del tono que buscas,
el asistente tiende a seguirlo. Las guías de Anthropic y de Google recomiendan incluir ejemplos cuando ayudan, con dos cuidados [@F-M1-14; @F-M1-15].
El primero es que sean pocos: la guía de Google advierte que demasiados ejemplos pueden hacer que el modelo los copie de más y pierda
flexibilidad [@F-M1-15]. El segundo es que se parezcan a lo que quieres, porque si tu ejemplo es largo, la respuesta también lo será.

Otra práctica útil es separar las instrucciones de los datos [@F-M1-14]. Cuando pegas un texto para trabajar, como unas notas, un correo o el
detalle de unas facturas, deja claro dónde empieza y dónde termina. Escribe primero la instrucción y luego «Texto:», o pon el texto
entre comillas. Así el asistente no confunde tus indicaciones con el contenido.

:::ejemplo Camila muestra el formato
«Ordena estas facturas en una tabla con estas columnas, como en el ejemplo:
N.º | Proveedor | Fecha | Monto total
1520 | Áridos del Sur | 03-10-2026 | $1.250.000
Facturas: "…"»
Con una sola fila de ejemplo, inventada, el asistente entiende qué va en cada columna.
:::

### P06 · Errores frecuentes al escribir prompts
cubre: S2
fuentes: F-M1-14, F-M1-15
bloque: Pestañas o acordeón (un error por pestaña)

Las guías de los proveedores coinciden en varios errores que hacen que la respuesta no sirva [@F-M1-14; @F-M1-15]. Casi todos nacen de lo mismo: escribir
como si el asistente supiera lo que tú sabes.

1. Pedido vago o ambiguo: «hazme algo para el cliente» admite mil interpretaciones.
2. Falta de contexto: sin saber para quién ni para qué, el asistente entrega algo genérico.
3. Jerga o siglas internas que un colega nuevo no entendería, y el modelo tampoco.
4. Varias tareas mezcladas en un solo mensaje.
5. No indicar formato ni restricciones, de modo que el asistente decide el largo y la forma.
6. Decir solo lo que no quieres: «no lo hagas largo ni formal» deja abierto qué sí quieres.

El cuarto merece una explicación, porque es tentador. Escribir «resume el acta, redacta el correo para el gerente y arma la lista de
pendientes» parece más rápido, pero suele dar un resultado a medias en las tres cosas. La guía de Google recomienda dividir las tareas
complejas en varios prompts: pides una cosa a la vez y usas cada respuesta como base para la siguiente [@F-M1-15].

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

Resumir es una de las tareas de oficina que mejor delega un asistente, siempre que tú le entregues el texto [@F-M1-12]. Andrés lo ve con la minuta
de la reunión semanal con ventas. Cuando escribía solo «Resume esta minuta», recibía un párrafo largo que mezclaba temas y no
destacaba lo que él necesitaba: los compromisos. Ahora agrega los componentes que faltaban [@F-M1-13]:

> «Actúa como encargado de bodega [rol]. Esta es la minuta de la reunión semanal con ventas; la leerá mi equipo de tres personas, que
> no estuvo en la reunión [contexto]. Resume los acuerdos y los compromisos con su responsable y su fecha [tarea]. Entrégalo en una
> lista de máximo seis viñetas, con el formato "Compromiso – Responsable – Fecha" [formato]. Usa solo la información de la minuta; si
> falta un responsable o una fecha, escribe "sin definir" [restricción]. Minuta: "…"»

El resultado es una lista corta que el equipo puede leer en el celular. Además, los vacíos quedan a la vista en vez de rellenarse con
datos inventados. Esa última restricción, «si falta, escribe "sin definir"», sirve en muchos prompts: le da al asistente una salida
honesta cuando no tiene el dato.

:::actividad Mejora tú el prompt
Toma este pedido: «Resume el reglamento interno». Reescríbelo agregando rol, contexto, tarea, formato y una restricción. Piensa en un
lector concreto, por ejemplo una persona que entra a trabajar el lunes a tu área.
:::

### P08 · Antes y después: reescribir
cubre: H1, C1
fuentes: F-M1-12, F-M1-13
bloque: Comparación antes/después (dos columnas o flashcards)

Reescribir es cambiar el tono, el largo o el destinatario de un texto que ya tienes. Camila escribió rápido un mensaje para un
proveedor que no ha confirmado la entrega de un pedido, y le salió demasiado informal: «Hola! Les escribimos hace como dos semanas por
los sacos de cemento y nadie nos dice nada, ¿llegan o no?».

Primero pidió solo «Mejora este mensaje». El asistente lo dejó más formal, pero le agregó frases que Camila nunca diría y lo alargó al
triple. Entonces escribió un prompt completo [@F-M1-12; @F-M1-13]:

> «Actúa como asistente administrativa de una constructora [rol]. Hace dos semanas hicimos un pedido de cemento a este proveedor y no
> ha confirmado la fecha de entrega; necesito saberla sin sonar molesta [contexto]. Reescribe mi mensaje en tono cordial y profesional
> [tarea]. Entrégalo como correo, con asunto y un máximo de 70 palabras [formato]. Mantén la información que doy y no agregues datos
> nuevos [restricción]. Mensaje: "…"»

Ahora el correo es breve, firme y sigue sonando a ella. Si quisiera mandar la misma consulta por WhatsApp, le bastaría con cambiar el
formato: «Entrégalo como mensaje de dos líneas». El resto del prompt sirve igual, y esa es la idea que usarás más adelante para armar
plantillas.

:::comprueba
Camila quiere que el texto conserve su información y no sume nada. ¿Qué parte del prompt la protege mejor?
- a) El rol
- **b) La restricción «mantén la información que doy y no agregues datos nuevos»**
- c) El asunto del correo
Retroalimentación: La restricción le pone límites al asistente para que no cambie el contenido ni invente.
:::

### P09 · Antes y después: clasificar
cubre: H1, C1, S1
fuentes: F-M1-12, F-M1-15
bloque: Comparación antes/después + tabla

Clasificar es ordenar información en categorías: correos por tema, solicitudes por urgencia, gastos por tipo [@F-M1-12]. Aquí aparece Rosa,
recepcionista en un centro médico, que cada mañana revisa los mensajes que dejan los pacientes. Cuando pedía «Ordena estos mensajes»,
el asistente los ordenaba por largo o los resumía uno por uno, y eso no le servía. Ahora escribe:

> «Actúa como recepcionista de un centro médico [rol]. Estos son mensajes de pacientes que debo derivar a distintas áreas antes de las
> 9:00 [contexto]. Clasifica cada mensaje en una de estas categorías: Agendar hora, Cambiar o anular hora, Resultados de exámenes,
> Otro [tarea]. Entrega una tabla con las columnas "N.º", "Resumen en cinco palabras" y "Categoría" [formato]. Usa solo esas cuatro
> categorías; si un mensaje no calza, ponlo en Otro [restricción]. Mensajes: 1. "…" 2. "…"»

Con las categorías definidas de antemano, la clasificación sale pareja y Rosa la revisa rápido [@F-M1-15]. Al clasificar, **tú defines las
categorías**: si dejas que el asistente las invente, cada vez puede usar otras distintas. Y para practicar no pegues nombres, RUT ni
datos de salud reales; usa mensajes de prueba. Qué datos no compartir lo vas a ver a fondo en el módulo 3.

:::actividad Arma tu clasificación
Escribe cinco solicitudes de prueba parecidas a las que llegan en tu trabajo. Define tres o cuatro categorías y escribe un prompt con
rol, contexto, tarea, formato y restricción para clasificarlas.
:::

### P10 · Iterar: la segunda vuelta
cubre: S3, C2
fuentes: F-M1-12, F-M1-15
bloque: Proceso (process block) en 4 pasos

Casi nunca la primera respuesta es la definitiva. Las guías de los proveedores proponen tratar el trabajo con el asistente como una
conversación, y a ese ciclo de pedir, mirar y corregir se le llama **iteración** [@F-M1-12]:

1. Pides con tu mejor prompt.
2. Revisas la respuesta: ¿sirve para lo que necesitas?
3. Ajustas: corriges el prompt o haces una pregunta de seguimiento.
4. Repites hasta que la respuesta sea útil.

Hay varias formas de ajustar. Puedes agregar el contexto que faltaba («es para un cliente molesto»), precisar el formato («más corto,
en tres viñetas») o reformular la tarea con otras palabras. También puedes dividirla en pasos, primero el resumen y después el correo,
o cambiar el orden del prompt y poner el texto antes de la instrucción [@F-M1-15]. Y la guía de Google sugiere un recurso más: pedirle al propio
asistente que mejore tu prompt [@F-M1-12]. Puedes iterar dentro de la misma conversación («ahora hazlo más formal») o editar tu prompt y volver a
enviarlo.

:::ejemplo Andrés itera una vez
La primera respuesta de Andrés fue un aviso correcto, pero largo. Escribió: «Acórtalo a tres líneas y pon la hora de cierre al
principio». La segunda versión ya la pudo pegar en el grupo del equipo.
:::

### P11 · Leer la respuesta para saber qué ajustar
cubre: S3, H1, C2
fuentes: F-M1-12, F-M1-13
bloque: Tabla + escenario

Iterar no es probar al azar. Lo que falla en la respuesta te dice qué faltó en el prompt, así que conviene mirarla primero y ajustar
el componente que corresponde [@F-M1-12; @F-M1-13].

| Si la respuesta… | Probablemente faltó… | Ajuste posible |
|---|---|---|
| Es genérica, podría servirle a cualquiera | Contexto | «Es para un cliente que reclama por un despacho atrasado» |
| Tiene un tono que no corresponde | Rol o formato (tono) | «Escríbelo como encargado que habla con su jefatura, tono formal» |
| Es demasiado larga o desordenada | Formato | «Máximo cinco viñetas» |
| Agrega datos que no diste | Restricción | «Usa solo el texto que te pegué» |
| Hace otra cosa de lo que pediste | Tarea | Reformula con un verbo claro: «clasifica», no «revisa» |
| Mezcla varios temas | División en pasos | Pide una tarea a la vez |

Camila usó esta lógica con el instructivo de rendición de gastos. Su resumen venía bien escrito, pero traía la firma del gerente
general, que el instructivo no pide. No reescribió todo: agregó una restricción («usa solo la información del instructivo y marca con
"no indica" lo que falte») y volvió a pedir.

:::comprueba
La respuesta del asistente está bien escrita, pero es tan general que serviría para cualquier empresa. ¿Qué conviene agregar?
- a) Un límite de palabras
- **b) Contexto sobre la situación, el destinatario y el propósito**
- c) Otra tarea en el mismo mensaje
Retroalimentación: Una respuesta genérica suele indicar falta de contexto. El límite de palabras cambia el largo, no lo específico.
:::

### P12 · Perseverancia en la iteración
cubre: A1, S3
fuentes: F-M1-13, F-H-12
bloque: Texto + recuadro destacado

La **perseverancia** es no rendirse con la primera respuesta, y tampoco quedarse dando vueltas sin rumbo. La guía de Microsoft advierte
que llegar al resultado suele requerir un ida y vuelta [@F-M1-13]. Es normal, no es señal de que lo hiciste mal. Un error común es concluir que la
herramienta no sirve porque la primera respuesta salió mala, cuando muchas veces basta una iteración con más contexto o un formato más
preciso.

Ayuda mirar cada respuesta como información: lo que salió mal te dice qué faltaba. Ayuda también cambiar una cosa a la vez, porque si
cambias todo de golpe no sabrás qué funcionó. A veces conviene empezar de nuevo: si la conversación se llenó de intentos o cambiaste de
tema, abre una nueva y pega tu mejor versión del prompt. La ayuda de Gemini lo recomienda al cambiar de tema, para aprovechar mejor el
uso disponible [@F-H-12].

Perseverar también es saber cuándo parar. Si después de varios intentos la tarea no sale, quizás no conviene delegarla; recuerda el
semáforo del tema anterior.

:::ejemplo Rosa no se rinde
La primera clasificación de Rosa mezcló «Cambiar o anular hora» con «Agendar hora». En vez de dejarlo, agregó un ejemplo de cada
categoría. En la segunda vuelta la tabla salió bien, y Rosa guardó ese prompt mejorado para el día siguiente.
:::

### P13 · Laboratorio de prompts
cubre: H1, C1, C2, A1
fuentes: F-H-14, F-H-15
bloque: Proceso paso a paso + actividad

Ahora te toca. Vas a escribir, probar e iterar un prompt para una tarea real de tu cargo. Antes de empezar, una advertencia sobre los
datos: con el ajuste de actividad encendido, Gemini guarda tus conversaciones y revisores humanos pueden leer algunas [@F-H-15]. Por eso aquí se
trabaja con copias sin datos sensibles o con datos de prueba, y se respeta lo que diga tu empresa. Cómo configurar la privacidad lo
verás en el módulo 3.

1. Abre Gemini en la app del celular o en el navegador, o el asistente que uses [@F-H-14].
2. Elige una tarea de tu trabajo que sea de resumir, reescribir o clasificar: un procedimiento, una respuesta a un cliente, solicitudes que llegan a tu correo.
3. Prepara los datos con una copia sin nombres, RUT ni montos reales, o con datos de prueba.
4. Escribe la versión 1 con rol, contexto, tarea y formato; si puedes, agrega una restricción.
5. Envíala y revisa la respuesta con la tabla de la pantalla anterior.
6. Itera al menos una vez: ajusta el componente que falló y vuelve a enviar.

:::actividad Tu laboratorio
Anota en tu bitácora la tarea que elegiste, las dos versiones del prompt, qué falló en la primera respuesta, qué cambiaste en la
segunda versión y por qué la segunda respuesta te sirve más.
:::

### P14 · De prompt a plantilla
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + ejemplo con resaltado de las partes variables

Si un prompt te funcionó, no lo pierdas. Conviértelo en una **plantilla**: un prompt reutilizable donde las partes que cambian cada vez
quedan entre [corchetes]. La guía de Google para Gemini ofrece una biblioteca de prompts de ejemplo por cargo, con corchetes para
personalizar, y entre ellos hay ejemplos para asistencia administrativa y para bodega [@F-M1-12].

Armarla es simple. Tomas tu mejor versión, la que obtuviste después de iterar, y marcas lo que cambiará la próxima vez: nombres,
fechas, textos pegados, destinatarios. Luego reemplazas cada una de esas partes por un corchete que diga qué va ahí.

Un error común es dejar datos reales dentro de la plantilla. Si quedó con el nombre de un cliente, un local o un número de teléfono,
cámbialo por un corchete como [cliente] o [teléfono]. Una plantilla se reutiliza y se comparte con el equipo, así que tiene que quedar
limpia de datos personales.

:::ejemplo La plantilla de Andrés
«Actúa como encargado de bodega. El [día] cerramos a las [hora] por [motivo] y [quién se ve afectado] no podrá [qué no podrá hacer].
Redacta un aviso para [destinatarios]. Entrégalo en un máximo de [número] líneas, con la fecha y la hora al principio y tono
[tono]. No agregues información que no esté en este mensaje.»
La próxima vez, Andrés solo llena los corchetes y envía.
:::

### P15 · Tu biblioteca personal de prompts
cubre: H2, A2
fuentes: F-M1-12
bloque: Texto + tabla descargable (plantilla de la biblioteca)

Una **biblioteca personal de prompts** es tu colección ordenada de plantillas que funcionan, agrupadas por tarea. Sigue la misma lógica
de las bibliotecas que publican los proveedores, pero hecha para tu cargo y con lo que tú aprendiste [@F-M1-12]. Puedes llevarla en un documento,
en una planilla o en las notas del celular, con este formato:

| Campo | Qué anotar |
|---|---|
| Nombre | Un título corto: «Aviso de cierre de bodega» |
| Tarea | Resumir, reescribir, clasificar u otra |
| Plantilla | El prompt con sus [corchetes] |
| Cuándo usarla | La situación en que sirve |
| Notas de iteración | Qué ajuste la hizo funcionar: «agregar el destinatario mejoró el tono» |
| Herramienta y fecha | En qué asistente la probaste y cuándo |

Ordenar y documentar tu propio trabajo no es burocracia. Te ahorra rehacer lo que ya resolviste, te permite mostrarle a tu jefatura
cómo trabajas y facilita compartir una plantilla con tu equipo. La biblioteca de Camila, por ejemplo, tiene cuatro plantillas:
«Resumir instructivo», «Responder a proveedor», «Correo de seguimiento de pago» y «Ordenar facturas en tabla». En cada una anotó qué
ajuste la hizo funcionar, y cuando llega un correo parecido parte de la plantilla en vez de escribir desde cero. Para su proyecto
eligió una tarea que le toma tiempo todas las semanas: registrar y clasificar los documentos que llegan a la oficina.

:::actividad Empieza tu biblioteca
Abre un documento o una nota y crea la tabla con los seis campos. Agrega la plantilla de tu laboratorio como primera entrada.
:::

### P16 · Cierre: tu primera biblioteca
cubre: C1, C2, H2, A2
fuentes: F-M1-12, F-M1-13
bloque: Texto + lista de verificación (checklist) + actividad de cierre

En este tema viste que un prompt efectivo tiene rol, contexto, tarea y formato y, cuando hace falta, restricciones [@F-M1-12; @F-M1-13]. Conociste los
errores más comunes, practicaste resumir, reescribir y clasificar con ejemplos de antes y después, y aprendiste a iterar mirando qué
falló en la respuesta. Antes de guardar una plantilla en tu biblioteca, revísala con esta lista:

- [ ] Tiene rol, contexto, tarea y formato.
- [ ] Incluye al menos una restricción cuando hay riesgo de que invente o se alargue.
- [ ] La probé y la mejoré al menos una vez.
- [ ] Las partes variables están entre [corchetes].
- [ ] No tiene datos personales ni confidenciales.
- [ ] Anoté qué ajuste la hizo funcionar.

En el próximo tema verás por qué el mismo prompt puede dar respuestas distintas y cómo ajustar la longitud y la variación según lo que
necesitas.

:::actividad Tres plantillas para tu cargo
Vuelve a los tres usos que escribiste al cierre del tema anterior. Para cada uno, escribe una plantilla, pruébala en Gemini, itera al
menos una vez y guárdala en tu biblioteca con sus notas. Esa será tu **biblioteca de prompts v1**.
:::

### Ideas clave

1. Un prompt efectivo tiene rol, contexto, tarea y formato; las restricciones agregan límites cuando hay riesgo de que invente o se
   alargue.
2. Escribe como si le hablaras a una persona nueva en tu equipo: si un colega no entendería el pedido, el asistente tampoco.
3. Los errores más frecuentes son pedidos vagos, falta de contexto, varias tareas mezcladas, no indicar formato y decir solo lo que no
   quieres.
4. Uno o dos ejemplos orientan el formato; separa siempre las instrucciones de los datos que pegas.
5. Iterar es normal: revisa la respuesta, identifica qué componente falló y ajústalo, una cosa a la vez.
6. Un prompt que funciona se convierte en plantilla con [corchetes] y se guarda, con sus notas, en tu biblioteca personal.

### Referencias bibliográficas

- Anthropic. (s. f.). *Mejores prácticas de prompting*. Claude Docs. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (s. f.-c). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Google. (s. f.-d). *Límites de las aplicaciones de Gemini y cambios a planes superiores*. https://support.google.com/gemini/answer/16275805?hl=es
- Google. (2026, 13 de octubre). *Estrategias de diseño de instrucciones*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- OpenAI. (s. f.). *Planes y precios*. ChatGPT. https://chatgpt.com/es-419/pricing/


## M1-AE3 · Parámetros de generación

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-03, F-M1-13
bloque: Texto + imagen de portada

En el primer tema viste que el modelo genera su respuesta fragmento a fragmento y que esa elección tiene algo de azar [@F-M1-03]. En el segundo
aprendiste a escribir prompts con rol, contexto, tarea y formato. Ahora vas a ver qué más influye en la respuesta, además de tus
palabras, y cómo manejarlo según lo que necesita cada tarea.

El aprendizaje esperado es este: Ajustar parámetros de generación (temperatura, longitud, iteración) para adecuar las respuestas a
distintos objetivos de una tarea. Al final deberías poder elegir un ajuste adecuado al objetivo y explicar por qué, y comparar varias
respuestas a una misma consigna para quedarte con la mejor con un fundamento claro.

Vas a trabajar con tres ideas. La temperatura, que regula cuánta variación hay en la forma de responder; la longitud, que es cuánto
escribe el modelo, y la iteración, que es pedir otra respuesta y compararla con la anterior.

Para entender por qué importan, mira lo que le pasó a Camila. Le pidió dos veces a Gemini «tres asuntos para un correo de seguimiento
de pago» y recibió dos listas distintas. No es un error: es parte de cómo funcionan estos modelos [@F-M1-13]. En este tema vas a experimentar, y
lo importante no será memorizar números, sino comparar con método: cambiar una cosa, mirar qué pasa y anotarlo.

### P02 · Qué es un parámetro de generación
cubre: S1
fuentes: F-M1-15, F-M1-16
bloque: Texto + tabla

Un **parámetro de generación** es un ajuste que cambia cómo el modelo produce la respuesta, sin tocar tu prompt. Se parece a los
controles de una cámara: la escena es la misma, pero la foto cambia según cómo la configures. Las documentaciones de Google y de OpenAI
describen varios, y los más comunes son estos tres [@F-M1-15; @F-M1-16]:

| Parámetro | Qué controla | Efecto |
|---|---|---|
| Temperatura | Cuánto azar hay al elegir cada fragmento | Baja: respuestas más predecibles. Alta: más variadas |
| Top-p | Entre cuántas opciones probables elige | Valores bajos limitan la elección a las opciones más probables |
| Máximo de tokens de salida | Hasta cuánto puede escribir | Pone un tope al largo de la respuesta |

En este tema vas a trabajar sobre todo con la temperatura y la longitud, y con un tercer recurso que siempre tienes a mano: la
iteración, es decir, pedir otra respuesta o ajustar el pedido.

Un error común es creer que el prompt es lo único que decide el resultado. Es lo principal y lo que más controlas, pero con el mismo
prompt la configuración del modelo y el azar también cambian lo que recibes. Por eso dos personas que escriben el mismo pedido pueden
obtener respuestas distintas.

### P03 · Temperatura: por qué varían las respuestas
cubre: S1, S2
fuentes: F-M1-15, F-M1-16
bloque: Texto + imagen (dial o termómetro de baja a alta)

Recuerda cómo genera texto el modelo: en cada paso estima qué continuaciones son probables y elige una. Esa elección no siempre recae
en la opción más probable, porque tiene algo de azar. La **temperatura** regula cuánto azar hay.

Con temperatura baja, el modelo se inclina por las opciones más probables y las respuestas salen más enfocadas y parecidas entre sí;
según la guía de Google, con temperatura 0 elige siempre la opción más probable [@F-M1-15]. Con temperatura alta, da más espacio a opciones menos
probables y las respuestas salen más diversas y, a veces, más originales. OpenAI, cuya API acepta valores de 0 a 2, lo ilustra así:
0,8 da salidas más aleatorias y 0,2 más enfocadas [@F-M1-16].

Más alto no es «mejor». Más azar también trae más opciones que no te sirven, y te toca elegir. Y hay algo que la temperatura no hace:
no cambia lo que el modelo sabe. Cambia cuánto se arriesga al elegir las palabras.

:::ejemplo Andrés y el nombre de la campaña
Andrés necesita un nombre para la campaña de orden en la bodega. Con temperatura baja, el modelo propone nombres seguros y parecidos:
«Bodega ordenada», «Orden en bodega». Con temperatura alta aparecen ideas más variadas, algunas buenas y otras que no calzan con la
campaña. Para una lluvia de ideas, esa variedad le sirve. Para el reporte de stock, no.
:::

### P04 · Top-p y dónde están estos controles
cubre: S1
fuentes: F-M1-16, F-H-37
bloque: Texto + knowledge check

El **top-p** es otro parámetro relacionado con el azar. En vez de regular cuánto se arriesga el modelo, limita entre qué opciones
elige: solo considera las más probables hasta sumar cierta probabilidad. Con un top-p bajo, la elección se reduce a pocas opciones.
OpenAI recomienda ajustar la temperatura o el top-p, pero no los dos a la vez, porque ambos influyen en la variación y después es
difícil saber cuál causó el cambio [@F-M1-16]. También advierte que no todos sus modelos admiten estos ajustes, sobre todo los que razonan antes
de responder.

¿Dónde se ajustan? En entornos para desarrolladores, como la API de cada proveedor o Google AI Studio, que tiene un panel llamado
«Configuración de ejecución» para cambiar los parámetros del modelo [@F-H-37]. En las aplicaciones de chat gratuitas, como Gemini o ChatGPT en el
celular, no vas a encontrar un control de temperatura ni de top-p. Ahí la variación la manejas de otras formas, que verás en las
próximas pantallas.

:::comprueba
Quieres que el modelo varíe menos sus respuestas. Según OpenAI, ¿qué conviene?
- a) Subir la temperatura y bajar el top-p al mismo tiempo
- **b) Ajustar uno de los dos, por ejemplo bajar la temperatura**
- c) Subir el top-p a su máximo
Retroalimentación: Los dos parámetros afectan la variación. Se recomienda mover solo uno para saber qué produjo el cambio.
:::

### P05 · En los modelos más nuevos, la temperatura la fija el proveedor
cubre: S1, S3
fuentes: F-M1-15, F-M1-18
bloque: Texto + recuadro destacado

En 2026 hay algo que conviene saber: los proveedores están dejando de permitir que cambies la temperatura y el top-p en sus modelos más
recientes. Google indica que los modelos Gemini 4 y Gemini 3.6 en adelante ignoran los valores de temperatura y top-p que les envíes [@F-M1-15].
Anthropic fue más lejos: sus modelos Claude desde la versión 4.7 solo aceptan los valores predeterminados, y desde la versión de su API
del 21 de octubre de 2026 una solicitud que trae temperatura o top-p da error [@F-M1-18].

Para ti, eso significa que en los modelos nuevos la temperatura sigue existiendo, pero la fija el proveedor. El concepto te sirve
igual, porque explica por qué el mismo pedido da respuestas distintas y por qué a veces conviene pedir otra versión. Que un control
desaparezca no lo vuelve inútil: saber que hay azar en la generación te ayuda a no confiar en una sola respuesta y a comparar antes de
elegir. Lo que sí controlas siempre es tu prompt, la longitud que pides y cuántas veces iteras.

:::error «Subiendo la temperatura en cualquier herramienta cambia la respuesta»
En muchos modelos recientes el valor que pongas se ignora o da error. Antes de comparar, revisa si el modelo que usas respeta ese
ajuste.
:::

### P06 · Longitud: cuánto escribe el modelo
cubre: S1, S3
fuentes: F-M1-15, F-M1-13
bloque: Texto + comparación de dos respuestas

La **longitud** se puede manejar de dos maneras. La primera es el parámetro de tokens máximos de salida, que existe en la API y en AI
Studio: fijas cuántos tokens puede escribir el modelo como máximo [@F-M1-15]. Es un tope, así que el modelo no escribe más allá de ese número y
puede terminar antes; si el tope es muy bajo, la respuesta queda cortada, a veces a mitad de una frase.

La segunda es pedirla en el prompt, y funciona en cualquier app de chat: «en 50 palabras», «en tres viñetas», «en un párrafo». La guía
de Microsoft recomienda justamente dar expectativas de extensión y restricciones concretas, como un límite de palabras [@F-M1-13]. Las dos formas
son distintas: el tope corta y la instrucción orienta. Cuando pides «en 50 palabras», el asistente intenta ajustarse, pero puede
pasarse o quedarse corto, así que conviene revisar.

| Objetivo | Longitud que conviene |
|---|---|
| Aviso para un grupo de WhatsApp | Muy breve: 2 o 3 líneas |
| Resumen de un reglamento para el equipo | Media: 5 a 8 viñetas |
| Borrador de un procedimiento | Más larga, por secciones |

:::ejemplo Camila ajusta el largo
Camila necesita un resumen de un contrato para la columna «Observaciones» de su planilla de registro, donde caben unas dos líneas.
Primero pide «un resumen» y recibe tres párrafos. Luego pide «un resumen de máximo 30 palabras, en una sola frase». Cuenta, ajusta
una palabra y lo pega.
:::

### P07 · Iteración: pedir otra versión
cubre: S1, S3, H1
fuentes: F-M1-13, F-M1-12
bloque: Texto + proceso en 2 caminos

La **iteración** es el tercer recurso del tema. En el tema anterior la usaste para mejorar un prompt; aquí la vas a mirar como una
forma de obtener varias salidas y compararlas. Hay dos maneras de hacerlo.

La primera es regenerar con el mismo prompt. Como la generación tiene azar, el mismo pedido puede dar una respuesta distinta en cada
intento, como advierte Microsoft [@F-M1-13]. Si tu app tiene una opción para volver a generar la respuesta, úsala; si no, pega el mismo prompt en
una conversación nueva. Así obtienes varias versiones sin cambiar nada y eliges la mejor. La segunda es iterar con un ajuste: cambias
una parte del prompt, como el largo, el tono o una restricción, y vuelves a pedir [@F-M1-12]. Es lo que practicaste con los ejemplos de antes y
después.

| | Qué cambias | Para qué sirve |
|---|---|---|
| Regenerar | Nada | Ver la variación natural y elegir entre opciones |
| Iterar con ajuste | Una parte del prompt | Corregir algo que no te sirvió |

Andrés tiene un buen prompt para el aviso de inventario. Regenera dos veces y obtiene tres versiones parecidas, con distinto orden. Se
queda con la que pone la hora en la primera línea, porque su equipo lee el grupo en el celular.

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

Entre creatividad y precisión hay una relación que conviene tener clara. Mientras más variación permites, más ideas distintas
aparecen, pero también más riesgo de que algo se salga del pedido. Mientras menos variación, más consistentes son las respuestas, pero
también más parecidas entre sí. Las guías de Google y de OpenAI lo resumen así: valores bajos de temperatura para tareas con una
respuesta acotada y valores altos para resultados diversos o creativos [@F-M1-15; @F-M1-16].

| Tarea | Qué necesitas | Hacia dónde ajustar |
|---|---|---|
| Extraer las fechas de una minuta | Precisión | Baja variación |
| Clasificar solicitudes en categorías fijas | Precisión | Baja variación |
| Resumir un reglamento que pegaste | Precisión | Baja variación |
| Ideas para el nombre de una campaña interna | Creatividad | Más variación |
| Asuntos distintos para un correo a todo el equipo | Creatividad | Más variación |
| Temas posibles para la reunión mensual del área | Variedad | Más variación, y luego eliges |

Ninguna tarea de oficina necesita «máxima creatividad» en los datos. Si la respuesta incluye cifras, fechas o nombres, el objetivo en
esa parte es la precisión, aunque el resto del texto pueda ser más libre.

:::error «Para que sea creativo, basta con subir la temperatura»
Más variación no garantiza buenas ideas: también trae opciones que no sirven. La creatividad útil sale de un buen prompt, varias
salidas y tu criterio para elegir.
:::

### P09 · En el celular: instrucciones contrastadas
cubre: S2, S3
fuentes: F-M1-15, F-M1-13
bloque: Comparación en dos columnas

Si tu app no tiene control de temperatura, igual puedes orientar la respuesta hacia la precisión o hacia la creatividad con la
instrucción [@F-M1-13]. A esto le llamamos **instrucciones contrastadas**: la misma consigna, con dos indicaciones opuestas. Para ir hacia la
precisión, Camila escribe:

> «Responde solo con la información del texto que te pego. Si algo no aparece, escribe "no indica". Usa frases cortas y no agregues
> ejemplos.»

Y para ir hacia la creatividad:

> «Propón cinco opciones muy distintas entre sí. Usa enfoques diferentes: una formal, una cercana, una con humor, una muy breve y una
> sorprendente.»

La guía de Google sugiere limitar al modelo al contexto que le entregas para que no agregue información de otra parte, y eso es lo que
hace la primera instrucción [@F-M1-15]. Ojo con la diferencia: la instrucción no cambia la temperatura, cambia lo que le pides. El efecto se
parece, y por eso te sirve en el celular, pero no es el mismo ajuste.

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

Configurar según la tarea es decidir, antes de pedir, qué necesita tu objetivo: precisión o variedad, un texto corto o largo, una
respuesta o varias para elegir. Google recomienda experimentar con los ajustes hasta encontrar los adecuados para cada tarea [@F-M1-15; @F-M1-16], y para
no hacerlo a ciegas sirven tres preguntas.

La primera es si hay una respuesta correcta. Si la hay, como en datos, categorías o fechas, buscas precisión: poca variación y la
instrucción de usar solo el texto entregado. La segunda es cuánto espacio tienes, porque la longitud depende de dónde se va a leer: un
mensaje, un correo o un documento. La tercera es si te sirve elegir entre opciones; si es así, regeneras o pides varias versiones.

Después **justificas** tu elección en una frase: qué ajuste elegiste y por qué calza con el objetivo. Andrés lo hizo así con su
reporte: «Para resumir el reporte de stock usé una instrucción de precisión ("solo con los datos de la planilla") y un máximo de seis
viñetas, porque las cifras tienen que ser exactas y mi jefatura lo lee en el celular. No regeneré: necesito una sola versión
correcta».

:::actividad Elige y justifica
Para cada tarea, indica si necesitas precisión o creatividad, qué longitud pedirías y si regenerarías. Justifica en una frase.
1. Redactar la respuesta a un reclamo de un cliente.
2. Proponer ideas para una publicación de la empresa en redes sociales.
3. Pasar a una tabla los datos de cinco guías de despacho.
:::

### P11 · Comparar salidas con rigor
cubre: H1, A1, C2
fuentes: F-M1-15, F-M1-13
bloque: Texto + lista de verificación (checklist)

Comparar salidas no es elegir la que «suena mejor» a primera vista. El **rigor** está en comparar con método, para que tu elección se
pueda explicar y otra persona, con tu registro, pueda llegar a algo parecido.

Una buena comparación usa exactamente la misma consigna en todas las versiones, salvo lo que quieres probar [@F-M1-13; @F-M1-15]. Cambia una cosa a la vez,
porque si cambias el largo y el tono juntos no sabrás cuál de los dos produjo la diferencia. Junta al menos tres salidas, ya que con
dos cuesta ver qué varía y qué se mantiene. Y define los criterios antes de leer, para no dejarte llevar por la primera impresión. En
tareas de oficina sirven estos cinco:

- [ ] Exactitud: ¿los datos coinciden con el texto o la planilla de origen?
- [ ] Cumplimiento de la tarea: ¿hace lo que se pidió, sin agregar cosas?
- [ ] Formato y longitud: ¿respeta el largo y la forma pedidos?
- [ ] Tono: ¿es adecuado para quien lo va a leer?
- [ ] Utilidad: ¿lo podrías usar con pocos cambios?

:::error Comparar sin anotar
Si no registras qué prompt y qué ajuste usaste, después no podrás repetir el resultado que te gustó ni explicar por qué lo elegiste.
:::

### P12 · Práctica A (opcional): temperatura en Google AI Studio
cubre: H1, S1, C1
fuentes: F-H-37, F-H-40
bloque: Proceso paso a paso (process block)

Esta práctica es opcional. Es para personas mayores de 18 años, con computador o navegador web, que quieran ver con sus ojos el efecto
de la temperatura. Si no es tu caso, pasa directo a la práctica B: con ella cumples lo que pide el tema.

**Google AI Studio** es un entorno de Google para probar modelos e instrucciones, y se puede usar sin pagar [@F-H-37]. Sus términos exigen tener
18 años o más [@F-H-40]. Como viste en la pantalla 5, los modelos más nuevos de Gemini ignoran la temperatura, así que para esta práctica
necesitas un modelo anterior a Gemini 3.6, si la lista te lo ofrece.

1. Entra a AI Studio con tu cuenta de Google.
2. Elige en la lista un modelo anterior a Gemini 3.6.
3. Abre el panel «Configuración de ejecución» y ubica la temperatura y la cantidad máxima de tokens de salida.
4. Escribe un prompt creativo, por ejemplo: «Propón tres nombres para una campaña de orden en una bodega».
5. Prueba tres veces con temperatura baja (por ejemplo, 0,2) y tres veces con temperatura alta (por ejemplo, 1,5).
6. Baja la cantidad máxima de tokens de salida y mira qué pasa con la respuesta.
7. Registra todo en la tabla de la pantalla 14.

:::clave
Cuando usas AI Studio sin pagar, Google usa lo que envías y lo que genera el modelo para mejorar sus productos. Usa solo datos de
prueba, como los de los ejemplos de Camila y Andrés, nunca información de tu empresa.
:::

### P13 · Práctica B: comparar salidas en el celular
cubre: H1, C1, C2, A1
fuentes: F-M1-13, F-H-14
bloque: Proceso paso a paso + actividad

Esta práctica la puede hacer cualquier persona con la app de Gemini, que está para Android y para iPhone, o con el asistente que uses [@F-H-14].
Vas a trabajar los tres recursos del tema con una misma tarea de tu trabajo, por ejemplo redactar un aviso, resumir un procedimiento o
responder a un cliente. Usa una copia sin datos sensibles o datos de prueba.

Son tres experimentos. En el primero pruebas la longitud: envías tu prompt pidiendo «máximo 40 palabras» y, en una conversación
nueva, el mismo prompt con «máximo 120 palabras»; luego miras qué se perdió en la versión corta y qué sobra en la larga. En el segundo
pruebas la iteración: envías el mismo prompt tres veces, regenerando o en tres conversaciones nuevas, y comparas qué cambia y qué se
mantiene [@F-M1-13]. En el tercero comparas precisión y creatividad: envías la misma consigna con la instrucción de precisión y luego con la de
creatividad de la pantalla 9, y decides cuál sirve mejor para tu objetivo.

Cada vez que cambies algo, abre una conversación nueva. Así la respuesta anterior no influye en la siguiente. Al final, elige la mejor
salida de cada experimento con los criterios de la pantalla 11.

:::actividad Tus tres experimentos
Haz los tres experimentos y anota cada salida en tu tabla de registro (pantalla 14). Para cada uno, escribe una frase: «Elijo la
versión __ porque __».
:::

### P14 · Tu tabla de registro
cubre: A1, H1, C2
fuentes: F-M1-15
bloque: Tabla descargable (plantilla de registro)

El **registro** es lo que convierte una prueba en un experimento. La guía de Google recomienda experimentar con los ajustes según la
tarea [@F-M1-15], y anotar lo que pruebas te permite aprender de cada intento. Puedes usar esta tabla en un documento, una planilla o las notas
del celular, y anotar también la fecha de la prueba:

| N.º | Herramienta y modelo | Prompt (igual en todas) | Qué cambié | Salida (resumen) | Exactitud | Formato y largo | Tono | Utilidad | Elegida |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |

Evalúa cada criterio con una escala simple: bien, regular o mal. Un error común es anotar solo la versión ganadora. Las salidas
descartadas también enseñan, porque te muestran qué ajuste no sirvió para esa tarea, así que regístralas todas.

:::ejemplo El registro de Andrés
Andrés prueba el aviso de inventario con tres largos. La versión de 40 palabras queda «mal» en utilidad: le faltó la hora de cierre.
La de 120 queda «regular» en formato: es muy larga para el grupo. La de 60 sale «bien» en todo. Anota: «Elegida la de 60 palabras:
tiene fecha, hora y motivo, y se lee en el celular sin bajar».
:::

### P15 · Elegir la mejor salida con fundamento
cubre: C2, C1, S2
fuentes: F-M1-15, F-M1-13
bloque: Escenario + knowledge check

Elegir con fundamento es decir qué versión elegiste, con qué criterio y por qué las otras no. Camila pidió tres veces, con el mismo
prompt y los mismos datos, la respuesta a un proveedor que preguntaba por el pago de su factura [@F-M1-13]:

- A: «Junto con saludar, le informamos que su consulta fue recibida y será respondida a la brevedad.»
- B: «Su factura de octubre está aprobada y se pagará el día 15 por transferencia. Cualquier duda, quedo atenta.»
- C: «¡No se preocupe! Somos la empresa más puntual de la región y le pagaremos lo antes posible.»

Camila elige la B y lo justifica: «Responde lo que el proveedor preguntó, con los datos que le di y en tono cordial. La A es correcta,
pero no responde nada. La C exagera y promete algo que no puedo asegurar».

Un error común es quedarse con la respuesta más larga o la que trae más detalles. Más texto no significa más útil: la mejor salida es
la que cumple el objetivo, con los datos correctos y el largo que el lector necesita [@F-M1-15].

:::comprueba
Andrés compara tres resúmenes del reporte semanal. Uno es el más largo y detallado, pero cambia una cifra de stock. ¿Cuál conviene
elegir?
- a) El más largo, porque tiene más información
- **b) Uno que tenga las cifras correctas, aunque sea más breve**
- c) Cualquiera, porque los tres vienen del mismo prompt
Retroalimentación: En un reporte, la exactitud manda. Una versión con una cifra errada no sirve, aunque esté mejor escrita.
:::

### P16 · Cierre: ajustar según el objetivo
cubre: C1, C2, S3, A1
fuentes: F-M1-15, F-M1-13
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que la temperatura regula cuánto azar hay en la respuesta, que la longitud se maneja con un tope o con la
instrucción y que la iteración te da varias salidas para comparar [@F-M1-15; @F-M1-13]. También viste que en los modelos más nuevos la temperatura la fija
el proveedor: lo que siempre controlas es tu prompt, el largo que pides y cuántas versiones generas.

La regla práctica cabe en una línea: **primero defines el objetivo, después eliges el ajuste**. Precisión para datos y categorías,
variedad para ideas, longitud según dónde se leerá y varias salidas cuando te sirve elegir.

Que el mismo pedido dé respuestas distintas tiene otra consecuencia: no puedes dar por buena una respuesta solo porque se ve bien. En
el próximo tema vas a aprender a validar lo que genera la IA, contrastándolo con fuentes confiables.

:::actividad Tu regla de configuración
Mira tus tres experimentos y escribe:
1. Para la tarea que elegiste, qué configuración funcionó mejor: instrucción de precisión o de creatividad, largo y cuántas versiones.
2. Por qué, justificándolo con lo que viste en tu tabla de registro.
3. Esa regla, como nota en la plantilla correspondiente de tu biblioteca de prompts.
:::

### Ideas clave

1. Un parámetro de generación cambia cómo el modelo produce la respuesta sin cambiar el prompt.
2. La temperatura regula cuánto azar hay al elegir cada fragmento: baja da respuestas más predecibles y alta, más variadas.
3. En los modelos más recientes, como los últimos de Google y Anthropic, la temperatura la fija el proveedor; el concepto sigue
   explicando por qué varían las respuestas.
4. La longitud se maneja con un tope de tokens de salida o pidiéndola en el prompt; el tope corta y la instrucción orienta.
5. Iterar es regenerar con el mismo prompt o ajustar una parte de él; las dos formas te dan salidas para comparar.
6. Para datos y categorías conviene precisión; para ideas, variedad; y la elección se justifica con criterios definidos.
7. Comparar con rigor es usar la misma consigna, cambiar una cosa a la vez y registrar todas las salidas.

### Referencias bibliográficas

- Anthropic. (2026). *Migrating to API version 2026-10-21*. Claude Docs. https://platform.claude.com/docs/en/api/migration-2026-10-21
- Google. (s. f.-a). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (s. f.-b). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Google. (2026a, 13 de octubre). *Estrategias de diseño de instrucciones*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- Google. (2026b, 28 de abril). *Gemini API additional terms of service*. Google AI for Developers. https://ai.google.dev/gemini-api/terms?hl=en
- Google. (2026c, 30 de julio). *Guía de inicio rápido de Google AI Studio*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=es-419
- Google. (2026d). *Introducción a los modelos de lenguaje grandes (Curso intensivo de aprendizaje automático)*. Google for Developers. https://developers.google.com/machine-learning/crash-course/llm?hl=es-419
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot
- OpenAI. (s. f.). *API reference: Create chat completion*. OpenAI API Docs. https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create


## M1-AE4 · Validación de resultados

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M1-09, F-M1-01
bloque: Texto + imagen de portada

En el primer tema conociste tres límites de la IA generativa: la alucinación, el sesgo y la fecha de corte. En el tema anterior viste
que el mismo pedido puede dar respuestas distintas. Las dos cosas llevan a la misma conclusión: que una respuesta esté bien escrita no
quiere decir que esté verificada. Ahora vas a aprender a **validar** con método antes de usar o compartir lo que genera la IA.

El aprendizaje esperado es este: Validar resultados generados por IA, contrastándolos con fuentes confiables, para detectar
alucinaciones, errores y sesgos. Al terminar deberías poder identificar errores o sesgos en una respuesta generada, contrastar lo
importante con al menos dos fuentes confiables y corregir o descartar lo que no puedas verificar.

El tema se apoya en casos. Los errores que vas a ver son de tipos que documentan organismos y proveedores, como el NIST de Estados
Unidos y OpenAI [@F-M1-01; @F-M1-09]. Los ejemplos con Camila, Andrés, Rosa y otras personas son ficticios, pero muestran cómo aparecen esos errores en
tareas de oficina. En la actividad de análisis de casos vas a ver además situaciones reales en que alguien usó una respuesta sin
verificarla.

Validar no es desconfiar de todo. Es saber qué revisar, dónde hacerlo y cuándo una respuesta está lista para salir con tu nombre.

### P02 · Por qué hay que validar
cubre: S1
fuentes: F-M1-01, F-M1-09
bloque: Texto + recuadro destacado

Un modelo de lenguaje no consulta una base de datos de verdades: produce texto plausible a partir de patrones. El NIST explica que
inventar contenido es un resultado natural de ese diseño, porque el modelo predice el texto según los patrones estadísticos de sus
datos, no según lo que es cierto [@F-M1-01]. Y lo inventado sale con la misma seguridad que lo correcto.

La ayuda de ChatGPT lo dice de forma directa: el asistente puede dar respuestas incorrectas o engañosas con aparente seguridad, y esa
seguridad no garantiza que sea fiable [@F-M1-09]. Por eso recomienda usarlo como primer borrador y no como fuente final. Un error común es pensar
que una respuesta detallada debe ser cierta. El detalle es parte del estilo del modelo: una cifra con decimales o una cita con número
de artículo también pueden ser inventadas.

A Andrés le pasó cuando preguntó por el peso máximo que una persona puede levantar sola en una bodega. El asistente respondió con una
cifra exacta, con decimales y en tono seguro. Como no sabía de dónde salía, antes de ponerla en el diario mural decidió buscarla en la
norma y en el organismo que corresponde.

:::ejemplo Las referencias que nadie abrió
Marcela, un personaje ficticio, trabaja en el área legal de una empresa de transportes. Para responder el reclamo de un cliente le
pidió a un asistente fallos de tribunales que apoyaran a la empresa y recibió cuatro, con número, fecha y resumen. Le preguntó si eran
reales y el asistente dijo que sí. No abrió ninguno, y su gerente firmó el informe sin leerlos. El abogado del cliente no encontró dos
de esos fallos porque no existían, y la empresa tuvo que retirar el informe y dar explicaciones.
:::

### P03 · Error 1: alucinación
cubre: S1, C1
fuentes: F-M1-01, F-M1-09
bloque: Texto + knowledge check

La **alucinación**, que el NIST llama confabulación, es contenido falso o erróneo presentado con seguridad [@F-M1-01]. Puede tomar la forma de
datos inventados, como cifras, fechas o nombres de personas y empresas que no existen o no corresponden. Puede aparecer como citas y
fuentes inventadas: títulos de estudios, artículos de una ley o enlaces que no llevan a ninguna parte o que dicen otra cosa, algo que
la propia ayuda de ChatGPT advierte [@F-M1-09]. Y puede venir envuelta en un razonamiento que justifica algo falso, porque el modelo es capaz de
entregar pasos «lógicos» que hacen parecer correcta una respuesta equivocada.

Es más probable cuando pides citas o estudios, en respuestas largas a preguntas abiertas y en temas que exigen conocimiento experto [@F-M1-01]. Un
error común es dar por real un estudio porque trae nombre y año. Esos detalles dan apariencia de rigor, pero el modelo también los
puede inventar, así que toda cita se busca en su origen.

Camila lo vivió preparando una minuta para su jefatura. Le pidió al asistente «un dato con fuente sobre cuánto se atrasan los pagos a
proveedores en las constructoras» y recibió un porcentaje atribuido a un estudio con nombre y año. Al buscarlo, no encontró ese estudio
en ninguna parte. El dato no podía ir en la minuta.

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
fuentes: F-M1-01, F-M1-11
bloque: Texto + imagen comparativa

El **sesgo** aparece cuando la respuesta repite estereotipos o presenta una sola mirada como si fuera la única. Es más difícil de ver
que una cifra inventada, porque el texto puede ser correcto en los datos y aun así ser parcial.

Hay formas documentadas. Un estudio de la UNESCO encontró que, al pedir historias, los modelos asignaban a los hombres trabajos más
variados y de más prestigio, y a las mujeres roles domésticos o desvalorizados [@F-M1-11]. El NIST describe modelos de imagen que, al pedir un
gerente, un médico o un juez, dejan fuera a mujeres, a minorías y a personas con discapacidad [@F-M1-01]. Y llama «homogeneización» a las salidas
que se parecen demasiado entre sí, como si hubiera una sola manera de decir las cosas.

Para detectarlo sirven dos preguntas: ¿a quién deja fuera esta respuesta?, ¿qué supone sin que yo se lo haya dicho? Si la respuesta
asume el género, la edad o el origen de alguien sin que lo pidieras, ahí hay un sesgo que corregir antes de usar el texto.

:::ejemplo El perfil que nadie pidió
Rosa ayuda a redactar la publicación de una vacante de técnico en mantención para el centro médico. El borrador del asistente dice
«buscamos un hombre con experiencia». Rosa no pidió eso. Corrige el texto para que hable del cargo y de los requisitos, no del género
de la persona que lo va a ocupar.
:::

### P05 · Error 3: desactualización
cubre: S1, C1
fuentes: F-M1-09, F-H-16
bloque: Texto + línea de tiempo

La **desactualización** ocurre cuando la respuesta da como vigente algo que ya cambió. Se debe a la fecha de corte: el modelo no conoce
lo que pasó después de su entrenamiento, salvo que use herramientas como la búsqueda web [@F-M1-09]. Es más probable con:

- valores que cambian cada año, como montos, porcentajes o tarifas;
- normas, trámites y requisitos que se modifican;
- horarios, direcciones y contactos de servicios;
- nombres de cargos y autoridades.

Gemini a veces muestra un botón «Fuentes» con los enlaces que usó, y ChatGPT con la búsqueda activada puede citar fuentes recientes [@F-H-16; @F-M1-09].
Eso ayuda, pero no resuelve todo: la página que encontró puede ser antigua o poco confiable, y el resumen puede tener errores. Camila
lo comprobó cuando preguntó el horario de atención de una oficina pública donde debía hacer un trámite para la constructora. El
asistente le dio un horario con total seguridad; en el sitio del servicio vio que había cambiado hace unos meses.

:::error «Si la respuesta trae fecha reciente, está al día»
Una respuesta puede mencionar el año actual y aun así usar un dato antiguo. Lo que importa es la fecha de la fuente, no la del texto
generado.
:::

### P06 · Otros errores: no seguir el texto y contradecirse
cubre: S1, C1
fuentes: F-M1-01
bloque: Texto + knowledge check

Además de los tres errores principales, el NIST documenta salidas que no siguen el texto entregado o que se contradicen [@F-M1-01]. Son
frecuentes cuando le pides resumir o transformar un documento, y aparecen de cuatro maneras:

- agrega algo que el texto no dice, como la firma del gerente general en el resumen del instructivo de Camila;
- omite algo importante, como una fecha límite o una excepción;
- cambia un dato al copiarlo: un número, un nombre, una cantidad;
- se contradice, y en un párrafo dice una cosa y en otro lo contrario.

Estos errores se detectan comparando con el original, línea por línea. No necesitas otra fuente: el texto que entregaste es tu
referencia. Cuando hay una contradicción, en cambio, al menos una de las dos afirmaciones es falsa, y eso se resuelve con la fuente, no
con el modelo. A Rosa le llegó un borrador que en el primer párrafo decía «atendemos de lunes a viernes» y en el último «también los
sábados»; lo marcó como contradicción y confirmó el horario con la información del centro.

:::comprueba
Andrés pide resumir el reporte de stock. El reporte dice 120 cajas de guantes y el resumen dice 210. ¿Qué tipo de error es?
- a) Sesgo
- b) Desactualización
- **c) Salida que no sigue el texto entregado: cambió un dato**
Retroalimentación: El dato correcto estaba en el reporte. El resumen lo cambió al transformarlo. Se detecta comparando con el original.
:::

### P07 · Caso de práctica: encuentra los errores
cubre: C1, S1
fuentes: F-M1-01, F-M1-11
bloque: Escenario o actividad de marcar (hotspot)

Camila le pidió a un asistente: «Explícame cómo se organiza el registro de facturas en una oficina y qué datos hay que anotar de cada
una». Lee la respuesta que recibió. Los datos son ficticios a propósito, así que no los uses como información real: el objetivo es
entrenar el ojo.

> «El registro de facturas lo lleva la secretaria del gerente. De cada factura se anotan el número, la fecha, el proveedor y el monto.
> Según el estudio "Oficinas Ordenadas 2019", el 87 % de las empresas pierde al menos una factura al año. Para pasar a pesos los
> montos en UF, considera que la UF vale $28.000. Las mujeres suelen destacar en este trabajo por su paciencia y orden. Te recomiendo
> además inscribirte en un curso de contabilidad avanzada.»

Algunas partes sirven y otras no. La lista de datos que se anotan de cada factura responde bien a lo pedido; el resto merece una
segunda mirada antes de que Camila use algo de esta respuesta [@F-M1-01; @F-M1-11].

:::actividad Marca los errores
Identifica en la respuesta:
1. Un posible dato inventado, con una fuente difícil de comprobar. → El estudio con nombre, año y porcentaje.
2. Un dato que puede estar desactualizado. → El valor de la UF, que cambia todos los días.
3. Un sesgo. → Suponer que el registro lo lleva «la secretaria del gerente» y que las mujeres destacan «por su paciencia».
4. Algo que no responde a lo pedido. → La recomendación de un curso de contabilidad, que Camila no preguntó.

Para cada uno, escribe qué harías: verificar, corregir o descartar.
:::

### P08 · Criterios de confiabilidad de una fuente
cubre: S2
fuentes: F-M1-19, F-M1-20
bloque: Texto + tabla

Para contrastar necesitas **fuentes confiables**. ¿Cómo sabes si una lo es? El investigador Mike Caulfield propone preguntarse quién
está detrás, con qué experiencia y con qué intereses [@F-M1-19]. A partir de eso, puedes usar estos criterios:

| Criterio | Pregunta | Señal de confianza |
|---|---|---|
| Autoría | ¿Quién publica? | Un organismo, una institución o una persona identificable con experiencia en el tema |
| Experiencia | ¿Sabe de esto? | Es su área de trabajo o de estudio |
| Interés | ¿Gana algo con que le creas? | No vende el producto del que habla, o lo dice con claridad |
| Origen | ¿Es la fuente original? | Es el documento, la norma o el sitio del organismo, no un comentario sobre él |
| Fecha | ¿Está vigente? | Tiene fecha y es reciente para un dato que cambia |
| Independencia | ¿Lo confirman otras? | Otras fuentes sin relación entre sí dicen lo mismo |

Un estudio de la Universidad de Stanford encontró que incluso personas expertas en otros temas se dejaban engañar por logos y dominios
de apariencia seria [@F-M1-20]. El aspecto de un sitio no prueba que sea confiable.

:::error «Si el sitio se ve profesional, es confiable»
Un buen diseño, un logo o un dominio que parece institucional se pueden imitar. Lo que importa es quién está detrás, y eso se averigua
fuera del sitio.
:::

### P09 · Lectura lateral: salir del sitio para evaluarlo
cubre: S2, C2
fuentes: F-M1-20, F-M1-19
bloque: Texto + proceso en 3 pasos

Los investigadores Sam Wineburg y Sarah McGrew compararon cómo evalúan un sitio web historiadores, estudiantes y verificadores
profesionales de información. Historiadores y estudiantes leyeron el sitio de arriba abajo, sin salir de él, y a eso le llamaron
**lectura vertical**. Los verificadores, en cambio, tras un vistazo rápido salieron del sitio y abrieron otras pestañas para ver qué
decían otras fuentes de él. A eso le llamaron **lectura lateral**, y con ella llegaron a mejores conclusiones en menos tiempo [@F-M1-20].

Desde el celular se hace en tres pasos:

1. No te quedes leyendo la página que te dio el asistente.
2. Abre una pestaña nueva y busca el nombre de la fuente: quién es y qué dicen otros de ella [@F-M1-19].
3. Vuelve solo si lo que encontraste te da confianza.

Andrés lo probó con un enlace que le dio el asistente: un sitio con recomendaciones de seguridad para bodegas que se veía serio. En
otra pestaña descubrió que era de una empresa que vende fajas lumbares. No lo descartó del todo, pero buscó la información en el
organismo público que corresponde.

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

Mike Caulfield resumió la evaluación de información en cuatro movimientos, conocidos por su sigla en inglés: **SIFT** [@F-M1-19].

1. Detente (Stop). Antes de usar o compartir, pregúntate si conoces esta fuente y si sabes que es confiable.
2. Investiga la fuente (Investigate the source). Averigua quién está detrás, qué experiencia tiene y qué intereses; aquí usas la lectura lateral.
3. Busca una cobertura mejor (Find better coverage). Cuando importa más la afirmación que la página, busca otras fuentes confiables que hablen de lo mismo y mira si coinciden.
4. Rastrea hasta el original (Trace claims to the original context). Sigue la cita, el dato o la imagen hasta su origen, para ver si fue recortado o sacado de contexto.

SIFT se pensó para evaluar lo que circula en internet, pero sirve igual para una respuesta de IA. Cada dato que el asistente te da es
una afirmación que puedes detener, investigar, contrastar y rastrear.

:::ejemplo SIFT con una respuesta de IA
Rosa recibe del asistente un requisito para un examen médico. Se detiene, porque no sabe de dónde salió. Investiga y ve que el
asistente citó un blog sin autor. Busca una cobertura mejor y encuentra la indicación en el sitio del laboratorio y en el del centro
donde trabaja. Al rastrear, descubre que la indicación del blog estaba recortada y omitía una excepción.
:::

### P11 · Las fuentes que muestra el asistente
cubre: S2, H1
fuentes: F-H-16, F-M1-09
bloque: Texto + imagen de una respuesta con fuentes

Varios asistentes muestran de dónde sacaron la información. A veces Gemini muestra un botón «Fuentes» con enlaces a sitios web o a
archivos que subiste, y ChatGPT, con la búsqueda activada, puede citar fuentes recientes [@F-H-16; @F-M1-09]. Es una gran ayuda, pero una fuente citada no
es una fuente verificada. La propia ayuda de ChatGPT recomienda revisar las citas y abrir los enlaces [@F-M1-09].

Al abrirlos, comprueba tres cosas:

1. Que el enlace exista y abra.
2. Que diga lo que el asistente afirma, porque a veces la página habla del tema pero no trae ese dato.
3. Que sea confiable, aplicando los criterios y la lectura lateral.

Camila hizo justo eso cuando Gemini le dio tres requisitos para inscribir a su equipo en un curso de capacitación, con dos fuentes. La
primera era el sitio del organismo y decía lo mismo. La segunda era un foro de hace cuatro años. Se quedó con la primera y buscó otra
fuente confiable para completar.

:::error «Si trae enlace, ya está verificado»
El enlace puede no abrir, llevar a una página que no dice eso o ser poco confiable. Hasta que lo abres y lo lees, es solo una pista.
:::

### P12 · Tu checklist de validación
cubre: S3
fuentes: F-M1-19, F-M1-09
bloque: Lista de verificación (checklist) descargable

Ahora juntas todo en un **checklist de validación**: una lista de pasos que aplicas a una respuesta antes de usarla.

1. [ ] Me detengo: no copio ni envío todavía.
2. [ ] Marco las afirmaciones verificables: datos, cifras, fechas, nombres, citas, referencias y enlaces.
3. [ ] Comparo con mi texto original, si le entregué uno: ¿agregó, omitió o cambió algo?
4. [ ] Abro las fuentes que citó y reviso que existan y digan eso.
5. [ ] Contrasto lo importante con al menos dos fuentes confiables, independientes entre sí.
6. [ ] Rastreo hasta el original: la norma, el documento o el sitio del organismo.
7. [ ] Reviso sesgo y vigencia: ¿a quién deja fuera?, ¿el dato sigue vigente?
8. [ ] Decido: mantengo, corrijo o descarto cada afirmación.

Los pasos 1, 4, 5 y 6 vienen de SIFT y de las recomendaciones de los proveedores [@F-M1-19; @F-M1-09]. El mínimo de dos fuentes es un criterio de este
curso, no de una fuente externa: te asegura que no dependes de una sola página.

:::clave
No todo exige el checklist completo. Un correo de saludo no lo necesita. Una cifra que irá en un informe, un requisito legal o un dato
que afecta a otra persona, sí.
:::

### P13 · Corregir o descartar lo que no se puede verificar
cubre: H1, C2
fuentes: F-M1-09, F-M1-19
bloque: Tabla de decisión + escenario

Después de contrastar, cada afirmación cae en una de estas situaciones:

| Lo que encontraste | Qué haces |
|---|---|
| Dos fuentes confiables confirman el dato | Lo mantienes y, si corresponde, citas la fuente |
| Las fuentes dicen otra cosa | Lo corriges con el dato de la fuente original |
| Las fuentes no coinciden entre sí | Buscas la fuente original o lo dejas fuera hasta aclararlo |
| No encuentras ninguna fuente | Lo descartas, o lo marcas como «no verificado» si es indispensable mencionarlo |

Fíjate en la última fila. Lo que no puedes verificar no se usa como si fuera cierto [@F-M1-09; @F-M1-19], y **descartar** no es perder trabajo: es evitar
que un error salga con tu nombre. Andrés tenía tres datos en un borrador de procedimiento. El primero lo confirmó en dos fuentes y lo
mantuvo. El segundo estaba desactualizado y lo corrigió con la norma vigente. El tercero, un porcentaje sin origen, no apareció en
ninguna parte, así que lo borró.

:::error Pedirle al mismo asistente que confirme su respuesta
Preguntar «¿estás seguro?» no es verificar. El asistente puede repetir el error o cambiarlo por otro con la misma seguridad. Es lo que
le pasó a Marcela en la pantalla 2: preguntó si los fallos eran reales y el asistente dijo que sí. La verificación se hace con fuentes
externas.
:::

### P14 · Prevenir desde el prompt
cubre: S3, H1
fuentes: F-M1-15, F-M1-10
bloque: Texto + comparación antes/después

Validar es la defensa principal, pero también puedes bajar el riesgo de error desde el prompt. Los proveedores documentan dos medidas.
La primera es entregar el texto y pedir que use solo ese contexto: la guía de Google propone limitar al modelo a la información que le
das, para que trabaje sobre tu documento y no rellene con datos de otra parte [@F-M1-15]. La segunda es permitirle decir «no lo sé». OpenAI
explica que un modelo puede abstenerse en vez de inventar [@F-M1-10], y si se lo pides de forma explícita le das una salida honesta.

Camila lo aplicó a una consulta frecuente de su equipo. Antes preguntaba: «¿Qué documentos hay que adjuntar a una rendición de
gastos?», y el asistente respondía con una lista general que mezclaba prácticas de otras empresas. Ahora escribe:

> «Usa solo el instructivo que te pego. Lista los documentos que hay que adjuntar a una rendición. Si algo no aparece en el
> instructivo, no lo agregues y escribe "el instructivo no lo indica". Instructivo: "…"»

Estas medidas se conectan con lo que viste en el tema 2, porque son restricciones, y con el tema 3, porque una instrucción de precisión
deja menos espacio para la variación.

:::clave
Un buen prompt reduce los errores, pero no los elimina. La respuesta igual se revisa con el checklist.
:::

### P15 · Práctica guiada: valida una respuesta
cubre: H1, C1, C2
fuentes: F-M1-19, F-H-16
bloque: Proceso paso a paso + actividad

Ahora aplicas el checklist a una respuesta real, sobre un tema de tu trabajo.

1. Abre Gemini o el asistente que uses.
2. Pide información verificable sobre un tema de tu cargo, sin datos personales ni de tu empresa. Por ejemplo: «¿Qué elementos de protección personal se usan en una bodega?» o «¿Qué debe tener una boleta electrónica?».
3. Marca tres afirmaciones verificables de la respuesta.
4. Revisa si muestra un botón o una lista de fuentes, y ábrelas [@F-H-16].
5. Busca dos fuentes confiables por cada afirmación, con lectura lateral [@F-M1-19].
6. Decide qué haces con cada una.

Si una afirmación no se puede verificar en dos fuentes confiables, no la uses en tu versión final y anota por qué la descartaste.

:::actividad Tu tabla de validación
| Afirmación | Fuente 1 | Fuente 2 | ¿Coinciden? | Decisión (mantener, corregir, descartar) |
|---|---|---|---|---|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

Al final, escribe la versión corregida de la respuesta, solo con lo que pudiste verificar.
:::

### P16 · Responsabilidad profesional
cubre: A1
fuentes: F-M1-12, F-M1-01
bloque: Texto + escenario

Cuando firmas un informe, envías un correo o publicas un aviso, quien responde eres tú, no la herramienta. La guía de Google para
Gemini lo dice con todas sus letras: hay que revisar todo resultado antes de usarlo, porque la persona es responsable del resultado
final [@F-M1-12]. El NIST agrega un riesgo que conviene conocer, el **sesgo de automatización**: la tendencia a confiar de más en lo que entrega
una máquina [@F-M1-01]. Mientras más cómodo y rápido es el asistente, más fácil es dejar de revisar.

En la práctica, la **responsabilidad profesional** significa revisar con más cuidado mientras más grave sería el error, no firmar ni
enviar lo que no entiendes o no revisaste, avisar cuando no pudiste verificar algo en vez de presentarlo como seguro, y corregir rápido
si descubres un error después de compartirlo.

Vale también para las empresas. Imagina una tienda de electrodomésticos que pone un asistente de IA en su sitio web. Un cliente
pregunta si puede devolver un producto después de 60 días y el asistente le dice que sí, aunque la política publicada en el mismo sitio
dice 30. Cuando el cliente reclama, decir «se equivocó el asistente» no sirve de excusa: la información del sitio es responsabilidad de
la tienda, la haya escrito una persona o una máquina.

Andrés lo tiene claro. Antes de firmar el reporte mensual de stock que ordenó con un asistente, compara cada cifra con su planilla,
corrige una diferencia y anota al final: «Cifras revisadas contra el sistema de inventario».

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
bloque: Texto + actividad de cierre

La **honestidad intelectual** es no presentar como propio, ni como seguro, algo que no lo es. Con la IA generativa significa no hacer
pasar como tuyo un texto generado cuando eso importa, porque la UNESCO lo describe como una forma nueva de plagio [@F-M1-02], y decir que usaste
IA cuando a quien lo recibe le importa saberlo. Significa también separar lo verificado de lo que no: si algo no lo pudiste confirmar,
lo dices. Y significa no confiar en los «detectores» de texto hecho con IA; la ayuda de ChatGPT advierte que no puede determinar si un
texto fue escrito por una IA [@F-M1-09].

En este tema viste los tipos de error que conviene buscar (alucinación, sesgo, desactualización y salidas que no siguen el texto), los
criterios para saber si una fuente es confiable, la lectura lateral, el método SIFT y tu checklist de validación. También practicaste
contrastar con al menos dos fuentes y decidir qué mantener, qué corregir y qué descartar.

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

### Referencias bibliográficas

- Caulfield, M. (2019, 19 de junio). *SIFT (The four moves)*. Hapgood. https://hapgood.us/2019/06/19/sift-the-four-moves/
- Google. (s. f.-a). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (s. f.-b). *Ver fuentes relacionadas de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/14143489?hl=es
- Google. (2026, 13 de octubre). *Estrategias de diseño de instrucciones*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419
- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Noticias ONU. (2024, 7 de marzo). *La inteligencia artificial ya reproduce estereotipos de género*. https://news.un.org/es/story/2024/03/1528182
- OpenAI. (2025, 5 de septiembre). *Por qué alucinan los modelos de lenguaje*. https://openai.com/es-419/index/why-language-models-hallucinate/
- OpenAI. (2026). *¿Dice ChatGPT la verdad?* OpenAI Help Center. https://help.openai.com/es-es/articles/8313428-does-chatgpt-tell-the-truth
- Wineburg, S. y McGrew, S. (2018). *Lateral reading and the nature of expertise: Reading less and learning more when evaluating digital information*. Stanford Digital Repository. https://purl.stanford.edu/yk133ht8603


---

# Módulo 2 · Comunicación y redacción profesional

**Competencia:** Optimizar la elaboración de documentos, presentaciones y planillas de cálculo con IA generativa, cuidando tono, audiencia y exactitud, en contextos laborales.


## M2-AE1 · Redacción y comunicación con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-14, F-M2-08
bloque: Texto + actividad

En el módulo 1 aprendiste a escribir prompts con rol, contexto, tarea y formato, y a revisar lo que entrega la IA. Ahora vas a aplicar eso a lo que más se escribe en cualquier oficina: correos, minutas e informes. Son textos cortos, pero de ellos depende que un proveedor responda, que un acuerdo se cumpla o que tu jefatura tome una decisión a tiempo.

El aprendizaje esperado es este: Redactar correos, minutas e informes con apoyo de IA, ajustando tono, registro y audiencia. Al final del tema deberías poder ajustar el tono y el registro de un texto a la audiencia que se te indica, y entregar un texto claro y sin errores relevantes, porque lo revisaste tú antes de enviarlo.

Vas a trabajar con Gemini, el asistente principal del curso. Tiene app para Android y para iOS y se usa con una cuenta personal de Google; como viste en el módulo 1, también funciona en el navegador [@F-H-14]. Si en tu trabajo usan otro asistente, los pasos son los mismos. Como cualquier asistente, sus respuestas pueden traer errores, así que todo lo que redacte será un borrador que tú corriges [@F-M2-08].

Te siguen acompañando Camila y Andrés. Camila es asistente administrativa en una constructora: responde correos de proveedores y clientes, lleva la agenda de la gerenta de administración y prepara las minutas de sus reuniones. Andrés es encargado de bodega en una distribuidora y escribe avisos a su equipo, minutas de reuniones y un informe semanal para su jefatura.

:::actividad Tu punto de partida
Piensa en el último texto de trabajo que escribiste: un correo, un aviso, un resumen para tu jefatura. Anota para quién era y qué querías lograr con él. Lo vas a usar en la práctica de cierre.
:::

### P02 · Tres géneros de la comunicación laboral
cubre: S1
fuentes: F-M2-06, F-M2-05
bloque: Texto + tabla comparativa

Un **género** es un tipo de texto con un propósito y unas partes que quien lo lee espera encontrar. En el trabajo administrativo se repiten tres. El correo sirve para pedir, informar o responder algo puntual. La minuta, que en muchas oficinas se llama acta, deja registro de una reunión: qué se trató, qué se acordó y quién se comprometió a qué, con fecha [@F-M2-06]. El informe ejecutivo le entrega a quien decide lo que necesita para decidir, por lo general en una página [@F-M2-05].

| Género | Pregunta que responde | Lo que no puede faltar |
|---|---|---|
| Correo | ¿Qué necesito de ti o qué te aviso? | Un asunto que diga de qué se trata y un pedido claro |
| Minuta | ¿Qué quedó acordado y quién hace qué? | Acuerdos y compromisos con responsable y fecha |
| Informe ejecutivo | ¿Qué debo saber, por qué me importa y qué debo hacer? | El resultado y la recomendación al principio |

Un mismo tema puede pedir los tres. El lunes, el equipo de Andrés se reunió por unos despachos atrasados. Ese día él escribe un correo al proveedor para pedir una nueva fecha de entrega y la minuta de la reunión con los compromisos de cada persona. El viernes le entrega a su jefatura un informe de una página con el resultado de la semana y una recomendación.

Saber qué género necesitas es el primer dato que le das a la IA. No es lo mismo pedir «escribe algo sobre la reunión» que pedir «redacta la minuta de la reunión, con los acuerdos y una tabla de compromisos». En las próximas pantallas vas a ver cada género por separado y lo vas a practicar con Gemini.

:::comprueba
Andrés necesita dejar registro de quién se comprometió a revisar el stock y para cuándo. ¿Qué género le sirve?
- a) Un correo al proveedor
- **b) Una minuta de la reunión**
- c) Un informe ejecutivo
Retroalimentación: La minuta registra los acuerdos y los compromisos con responsable y fecha. El informe ejecutivo resume para quien decide, y el correo resuelve algo puntual.
:::

### P03 · Tono, registro y audiencia
cubre: S2, C1
fuentes: F-M2-04, F-M2-03
bloque: Texto + tabla comparativa

Tres decisiones cambian cómo suena un texto, aunque diga lo mismo. La primera es la audiencia: la persona o el grupo que lo va a leer. En un mismo día puedes escribirle a tu jefatura, a una colega, a un proveedor y a un cliente, y para cada uno conviene adaptar el tono, el formato y el nivel de detalle [@F-M2-04]. Tampoco es lo mismo escribirle a una sola persona que a todo un equipo.

La segunda es el **registro**, que es el grado de formalidad. El registro formal es el del intercambio profesional, y el informal, el de la familia y las amistades. En el trabajo se prefiere tratar de usted, salvo que haya una relación cercana, como la que quizá tienes con tu equipo de todos los días [@F-M2-03].

La tercera es el **tono**: la actitud que transmite el texto. Puede ser cordial, firme, neutro, agradecido o de disculpa. Un correo formal puede sonar cordial o puede sonar seco; el registro es el mismo y lo que cambia es el tono. Por eso un reclamo a un proveedor puede ser firme sin dejar de ser respetuoso.

| Audiencia | Registro | Tono posible |
|---|---|---|
| Jefatura | Formal | Directo y respetuoso |
| Colegas del equipo | Formal o semiformal | Cercano y claro |
| Cliente con un reclamo | Formal | Cordial y de disculpa |
| Proveedor que se atrasó | Formal | Firme y cordial |

Cuando le pidas un texto a la IA, estas tres decisiones van en el prompt. Si no las dices, el asistente elige por ti y el resultado suele quedar genérico, con un tono que después hay que corregir.

### P04 · Antes de escribir: piensa en quien lee
cubre: S2, C1
fuentes: F-M2-02, F-M2-04
bloque: Texto + lista de verificación (checklist)

Las guías de redacción coinciden en que antes de escribir hay que tener claro para qué es el texto y quién lo va a leer [@F-M2-02; @F-M2-04]. Con eso eliges mejor las palabras, no das por sabido algo que la otra persona no maneja y entregas solo la información que necesita. Conocer a la audiencia también te dice qué género usar y qué dato poner primero. Antes de abrir el asistente, responde cuatro preguntas:

- ¿Para qué escribo: pedir, informar, acordar o recomendar?
- ¿Quién lo lee, qué relación tiene conmigo y cuánto sabe del tema?
- ¿Qué necesita saber para entender y actuar, y qué puedo dejar fuera?
- ¿Qué quiero que haga después de leerlo: responder, aprobar, asistir o revisar?

Tus respuestas son el contexto que le das a la IA. Si tú no las tienes claras, el asistente tampoco, y escribirá un texto genérico que habrá que rehacer.

Camila lo hizo con un correo de su semana. Un proveedor de materiales entregó un pedido hace diez días, pero la factura no ha llegado y ella la necesita para registrarla en su planilla. Escribe para pedir la factura. La lee una ejecutiva del proveedor que no la conoce, y que necesita el número de la orden de compra, la fecha de entrega y el correo al que debe enviar el documento; no necesita saber cómo funciona la planilla de la constructora. Camila quiere que le respondan con la factura adjunta. Con esas cuatro respuestas ya sabe qué pedirle a Gemini.

:::comprueba
Andrés escribe un aviso para todo su equipo sobre el inventario del viernes. ¿Qué información sobra?
- a) La fecha y la hora del inventario
- b) Qué debe hacer cada persona ese día
- **c) La explicación detallada de cómo calcula él las diferencias de stock**
Retroalimentación: El equipo necesita saber cuándo es y qué le toca hacer. El detalle del cálculo no le sirve para actuar: pensar en quien lee también es saber qué dejar fuera.
:::

### P05 · La IA como borrador
cubre: S3, A2
fuentes: F-M2-07, F-M2-08
bloque: Texto + recuadro destacado

En este tema la IA cumple un papel preciso: produce el borrador. Tú pones el propósito, los datos y la revisión final. Hay tres razones para no pedirle más que eso.

La primera es que puede inventar. Un modelo de lenguaje puede producir contenido falso presentado con seguridad, lo que se llama **confabulación** o, de forma más coloquial, alucinación [@F-M2-07]. En un correo, eso puede ser una fecha, un monto o un compromiso que nadie hizo, y el riesgo está en el tono seguro, que lleva a creer y a difundir esa información. La segunda es que varía: la misma indicación puede dar respuestas distintas, así que no basta con que una vez haya salido bien [@F-M2-08]. La tercera es que no conoce tu situación. Solo sabe lo que le escribes; no sabe qué le prometió tu jefatura a un cliente ni qué facturas están pendientes de pago.

Los propios proveedores lo advierten: las respuestas de sus asistentes pueden contener errores y hay que revisarlas antes de usarlas [@F-M2-08].

Dentro de ese límite, la IA ayuda mucho. Ordena ideas sueltas en un texto con estructura, propone versiones con tonos distintos, acorta un texto largo o lo vuelve más formal, y sugiere un asunto o una despedida. Piensa en ella como una persona que te ayuda a escribir pero que no estuvo en la reunión: redacta rápido, y tú sabes lo que pasó.

:::error «El texto de la IA está listo para enviar»
Un borrador bien escrito no es un texto revisado. Puede sonar impecable y tener un dato equivocado, un nombre mal escrito o un tono que no corresponde a la relación con quien lo lee.
:::

### P06 · Cómo pedirle un texto a la IA
cubre: H1, S2
fuentes: F-M2-08, F-M2-11
bloque: Texto + imagen de un prompt con sus partes destacadas

Para pedir un texto de trabajo sirven las partes de un prompt que conociste en el módulo 1. La guía de Microsoft para su asistente las ordena así: el objetivo, que es lo único imprescindible; el contexto, es decir, por qué lo necesitas y quiénes participan; la fuente, que son los datos que debe usar; y las expectativas de formato y extensión [@F-M2-08]. A eso puedes sumarle un rol.

En un texto laboral, el objetivo incluye el género, y el contexto incluye las tres decisiones de la pantalla 3: audiencia, registro y tono. No tienes que usar todas las partes siempre, pero mientras más incluyas, menos tendrás que corregir.

Después del primer borrador, sigue conversando. Pide «hazlo más breve», «quita la segunda oración» o «más cordial», de a un cambio. La documentación de otro proveedor describe un ciclo que sirve para cualquier texto: borrador, revisión contra lo que necesitas y versión mejorada [@F-M2-11].

Así quedó el prompt de Camila para confirmar una reunión con un proveedor. Fíjate en que cada parte se reconoce, y en la última frase, que le cierra la puerta a los datos inventados.

:::ejemplo El prompt de Camila
«Actúa como asistente administrativa de una constructora. Redacta un correo para confirmar la reunión con el proveedor de áridos. Lo lee el ejecutivo de ventas, a quien no conozco en persona. Registro formal, de usted, tono cordial. Datos: reunión el martes 12 a las 10:00 en nuestra oficina, para revisar los plazos de entrega del próximo mes; asistirá la gerenta de administración. Máximo 80 palabras, con asunto. No agregues datos que no te di.»
:::

### P07 · El correo: partes y cortesía
cubre: S1, A1
fuentes: F-M2-03
bloque: Texto + imagen de un correo con sus partes rotuladas

Un correo profesional tiene cuatro partes. Las recomendaciones que siguen vienen de una guía universitaria sobre correo electrónico en español, que aclara que son sugerencias y no normas obligatorias [@F-M2-03]:

1. El asunto, siempre presente y breve, dice de qué se trata antes de abrirlo: «Confirmación de reunión, martes 12».
2. El saludo va seguido de dos puntos: «Estimada Sra. Pérez:».
3. El cuerpo es conciso, con lo importante primero y una idea por párrafo.
4. La despedida, como «Saludos cordiales,» o «Atentamente,», va seguida de tu nombre.

Un error común está en el saludo. Muchos asistentes escriben «Estimada Sra. Pérez,» con coma, porque aprendieron de textos en inglés. En español se recomienda cerrar el saludo con dos puntos, así que revísalo siempre en el borrador.

La cortesía se nota en detalles concretos. Se trata de usted, salvo que haya cercanía. No se escribe en mayúsculas sostenidas, que se leen como un grito, ni se usan emojis o signos duplicados como «¡¡urgente!!». Se agradece cuando corresponde y se pide con claridad. Puedes ahorrarte buena parte de estas correcciones si las pones en el prompt desde el principio: «saludo con dos puntos, sin emojis, con asunto».

:::comprueba
¿Cuál de estos asuntos es más adecuado para el correo de Camila al proveedor que no ha enviado una factura?
- a) «Hola!!»
- **b) «Factura pendiente, orden de compra 2045»**
- c) «URGENTE: RESPUESTA»
Retroalimentación: El asunto debe ser breve y decir de qué trata el correo. Los signos duplicados y las mayúsculas sostenidas se leen como descortesía.
:::

### P08 · Práctica guiada 1: un correo con IA
cubre: H1, C1
fuentes: F-M2-08, F-M2-03
bloque: Proceso paso a paso + actividad

Ahora vas a producir y ajustar un correo con Gemini. El caso es de Camila, pero puedes cambiarlo por uno de tu trabajo.

Hace dos semanas, un proveedor de ferretería entregó en la obra un pedido de la constructora. La factura no ha llegado y Camila la necesita para registrarla y pasarla a pago. Ya la pidió una vez por teléfono, así que quiere un correo claro que no suene insistente. Para practicar, usa nombres y números inventados: no hace falta pegar en el chat datos reales del proveedor ni de tu empresa.

1. Abre Gemini en la app o en el navegador.
2. Escribe el prompt con sus partes: «Actúa como asistente administrativa de una constructora. Redacta un correo para pedir la factura de la orden de compra 2045, entregada el 3 de octubre. Lo lee la ejecutiva de ventas del proveedor, a quien no conozco. Registro formal, de usted, tono cordial y firme, sin sonar insistente. Máximo 90 palabras. Incluye asunto. Saludo con dos puntos. No inventes datos».
3. Lee el borrador y revisa si tiene asunto, si el saludo termina en dos puntos y si agregó algo que no dijiste [@F-M2-03].
4. Ajusta conversando, de a un cambio: «hazlo más breve» o «cambia la última oración por un agradecimiento» [@F-M2-08].
5. Edita tú el texto final, para que suene a ti y los datos sean los correctos.

Pedir un cambio a la vez tiene una ventaja: ves qué produjo cada mejora. Si pides cinco cambios juntos, cuesta saber cuál funcionó.

:::actividad Antes y después
Copia en tu bitácora el primer borrador y tu versión final. Anota tres cambios que hiciste y por qué: uno de tono, uno de registro y uno de contenido.
:::

### P09 · El mismo mensaje, tres audiencias
cubre: C1, S2, H1
fuentes: F-M2-04, F-M2-03
bloque: Texto + tabla o pestañas con las tres versiones

Adaptar un texto a distintas audiencias es una de las tareas en que más ayuda la IA. Tú defines el mensaje y a quién va dirigido; el asistente propone versiones; tú eliges y corriges.

Andrés tiene que comunicar un hecho: el despacho de un cliente se atrasará dos días porque el proveedor no entregó a tiempo. A su jefatura le importan la causa y lo que él propone hacer. Al equipo de bodega le importa qué cambia en su trabajo. Al cliente le importa cuándo recibe su pedido. Es el mismo hecho con tres focos, y cada foco pide su registro y su tono [@F-M2-04; @F-M2-03].

| Audiencia | Qué cambia | Cómo empieza |
|---|---|---|
| Jefatura | Formal y directo, con la causa y la solución propuesta | «Le informo que el despacho del pedido 418 se atrasará dos días…» |
| Equipo de bodega | Cercano, centrado en qué hacer | «Equipo: el pedido 418 sale el jueves y no el martes. Les pido…» |
| Cliente | Formal y cordial, con disculpa y nueva fecha | «Estimada Sra. Rojas: lamentamos informarle que su pedido…» |

Puedes pedir las tres versiones de una vez: «Con estos datos, escribe tres versiones del aviso: una para mi jefatura, otra para mi equipo y otra para el cliente. Ajusta registro, tono y nivel de detalle a cada una. Máximo 70 palabras cada una». Después revisa cada versión por separado, porque un dato que sirve para la jefatura, como el nombre del proveedor que falló, puede sobrar en la del cliente.

:::comprueba
¿Cuál de estas frases corresponde a la versión para el cliente?
- a) «Equipo, ojo con el 418, sale el jueves»
- **b) «Lamentamos el inconveniente. Su pedido llegará el jueves 14»**
- c) «El atraso se debe a un incumplimiento del proveedor que ya escalé»
Retroalimentación: Al cliente le importan la disculpa y la nueva fecha, en registro formal. El detalle interno del proveedor es para la jefatura, y el tono cercano es para el equipo.
:::

### P10 · La minuta: lo que se acordó
cubre: S1
fuentes: F-M2-06
bloque: Texto + tabla de compromisos (o plantilla descargable)

La **minuta**, que también se llama acta de reunión, deja registro de una reunión. Su valor no está en contar todo lo que se dijo, sino en dejar claro qué se acordó y quién hace qué.

Un instructivo de reuniones de una institución pública lo describe así: en cada reunión se designa a una persona que registra los temas tratados y los compromisos; los acuerdos y compromisos se establecen con fechas y responsables; y después el acta se comparte, se revisa, se reciben aportes y se hace seguimiento a lo comprometido [@F-M2-06]. Camila, que prepara las minutas de las reuniones de su jefatura, cumple justamente ese papel.

Una minuta breve parte con los datos de la reunión (fecha, participantes y tema), sigue con una línea por cada tema tratado y con los acuerdos, y termina con los compromisos y la fecha de la próxima revisión. Los compromisos se leen mejor en una tabla:

| Compromiso | Responsable | Fecha |
|---|---|---|
| Revisar el stock de cajas medianas | Andrés | Miércoles 13 |
| Pedir nueva fecha de entrega al proveedor | Jefatura de compras | Martes 12 |

Un compromiso sin responsable o sin fecha no es un compromiso: es una buena intención. La minuta existe para que nadie tenga que acordarse de memoria.

:::ejemplo La minuta que nadie leyó
Andrés recibió una vez una minuta de dos páginas que contaba la reunión de principio a fin. Los compromisos estaban perdidos en el tercer párrafo y nadie los cumplió. Desde entonces, él pone la tabla de compromisos al principio.
:::

### P11 · Práctica guiada 2: de notas sueltas a minuta
cubre: H1, C2
fuentes: F-M2-06, F-M2-12
bloque: Proceso paso a paso + actividad

Las notas de una reunión suelen quedar desordenadas. La IA ayuda a convertirlas en minuta, siempre que no la dejes inventar. Estas son las notas de Andrés, con datos ficticios: «reunión lunes 11 despachos. estaban: Andrés, Marta (ventas), Jorge (bodega). 3 pedidos atrasados por proveedor de cajas. Marta avisa a clientes hoy. Jorge revisa stock cajas. Ver de nuevo el viernes. compras tiene que pedir otra fecha al proveedor».

1. Pega las notas en Gemini con este prompt: «Convierte estas notas en una minuta con los datos de la reunión, los temas, los acuerdos y una tabla de compromisos con responsable y fecha. Usa solo la información de las notas. Si falta un responsable o una fecha, escribe [FALTA] en vez de completarlo».
2. Revisa la tabla de compromisos, porque cada uno necesita responsable y fecha [@F-M2-06]. En las notas, la tarea de Jorge no tiene fecha y «compras» no tiene una persona a cargo.
3. Completa tú lo que falta, preguntando a quien corresponda.
4. Compara la minuta con las notas y busca si la IA agregó algún acuerdo.

La regla de [FALTA] tiene una razón. Si no se lo prohíbes, el asistente puede poner una fecha «razonable» o asignar un responsable que nadie nombró, y en una minuta eso crea un compromiso falso. Darle al modelo una salida distinta de inventar, como marcar lo que no encuentra, es una recomendación de la documentación de los proveedores [@F-M2-12]. Aun así, la revisión sigue siendo tuya.

:::actividad Tu minuta
Escribe en cinco líneas las notas de una reunión reciente de tu área, con los nombres cambiados si son datos internos. Pídele a Gemini la minuta con la regla de [FALTA] y revisa cuántos vacíos detectó.
:::

### P12 · El informe ejecutivo: lo esencial para decidir
cubre: S1, C1
fuentes: F-M2-05
bloque: Texto + comparación antes y después

El **informe ejecutivo**, también llamado resumen ejecutivo, condensa la información para la persona que decide. Suele ocupar una página y responde tres preguntas de quien lo lee: qué debo saber, por qué me importa y qué debo hacer [@F-M2-05]. La primera se responde con el resultado o el hallazgo principal; la segunda, con la consecuencia para el área o la empresa; la tercera, con la recomendación o la decisión que se pide.

Una guía universitaria sobre este género aconseja empezar por los resultados y la recomendación, no por la historia de cómo se hizo el trabajo. También pide reducir al mínimo la descripción de los métodos, usar viñetas y párrafos cortos y, cuando se recomienda algo, compararlo con las alternativas [@F-M2-05].

| Así no | Así sí |
|---|---|
| «Esta semana revisamos los registros de despacho, conversamos con el equipo y analizamos…» | «Esta semana se atrasaron 3 de 40 despachos, todos por falta de cajas. Recomiendo pedir cajas a un segundo proveedor.» |

La jefatura de Andrés lee muchos informes a la semana, y si el resultado está en el cuarto párrafo, quizás no llegue a leerlo. Lo mismo vale para Camila cuando le resume a la gerenta de administración cuántas facturas del mes quedaron sin registrar: primero el número y lo que propone, después el detalle.

:::comprueba
¿Con qué conviene empezar un informe ejecutivo?
- a) Con la descripción de cómo se recopiló la información
- **b) Con el resultado principal y la recomendación**
- c) Con los antecedentes históricos del área
Retroalimentación: Quien decide necesita primero saber qué pasó y qué se recomienda. Los métodos y los antecedentes van después, y de forma breve.
:::

### P13 · Práctica guiada 3: un informe ejecutivo con IA
cubre: H1, C1
fuentes: F-M2-05, F-M2-11
bloque: Proceso paso a paso + actividad

Andrés debe entregar el viernes un informe ejecutivo a su jefatura. Tiene los datos de la semana, ficticios, en una lista: «40 despachos; 37 a tiempo; 3 atrasados, los 3 por falta de cajas del proveedor; el stock de cajas medianas quedó en 20; un segundo proveedor ofrece entrega en 48 horas».

1. Pide el borrador: «Actúa como encargado de bodega. Redacta un informe ejecutivo de máximo una página para mi jefatura. Usa solo estos datos. Estructura: resultado de la semana, por qué importa y recomendación. Viñetas cortas. Registro formal».
2. Revisa el orden: el resultado tiene que estar al principio y la recomendación tiene que entenderse [@F-M2-05].
3. Revisa los datos, cifra por cifra, contra la lista. Si aparece un porcentaje, calcúlalo tú.
4. Pide una revisión contra criterios: «Revisa tu informe: ¿responde qué debo saber, por qué me importa y qué debo hacer? Señala qué falta y entrega una versión mejorada».
5. Decide tú la versión final.

El paso 4 aplica el ciclo de borrador, revisión y mejora que viste en la pantalla 6: le pides al asistente que se revise contra criterios claros [@F-M2-11]. Igual compruebas tú el resultado, porque esa autorrevisión también puede fallar.

:::actividad Tu informe de una página
Con datos inventados parecidos a los de tu cargo, como facturas registradas en el mes, consultas atendidas o pedidos despachados, pide un informe ejecutivo que responda las tres preguntas. Anota qué tuviste que corregir.
:::

### P14 · Lenguaje claro: escribir para que te entiendan
cubre: A1, C2
fuentes: F-M2-01, F-M2-02
bloque: Texto + comparación antes y después

En Chile, varios organismos públicos forman la Red de Lenguaje Claro. La Red describe el **lenguaje claro** como un estilo de redacción simple y eficiente, que facilita que las personas entiendan lo que se escribe [@F-M2-01]. No se queda en las palabras: abarca también la estructura, la edición y el diseño del texto.

Una guía de lenguaje claro del Senado de Chile trae recomendaciones que sirven para cualquier texto de oficina. Pide oraciones breves, con una idea cada una, en el orden sujeto, verbo y complementos. Prefiere la voz activa («Jorge revisará el stock») a la pasiva («El stock será revisado por Jorge») y el estilo afirmativo («Llegue a las 9:00») al negativo («No llegue después de las 9:00»). Cuando el texto es largo, sugiere títulos y viñetas; las siglas y los tecnicismos se definen la primera vez que aparecen, y al final se revisa con una lista de verificación [@F-M2-02].

| Antes | Después |
|---|---|
| «Se informa que, en atención a dificultades de abastecimiento, la entrega no podrá ser efectuada en la fecha originalmente comprometida.» | «Su pedido no llegará el martes. Llegará el jueves, porque el proveedor se atrasó.» |

Puedes pedirle a la IA que aplique estas reglas: «Reescribe este texto en lenguaje claro, con oraciones breves, voz activa y sin tecnicismos». Después lee el resultado y verifica que no se haya perdido información.

:::error «Formal es lo mismo que difícil»
Un texto formal no necesita palabras rebuscadas ni frases largas. La misma guía describe el lenguaje claro como sencillo y directo, sin renunciar a la precisión [@F-M2-02]. Un texto puede ser formal, cordial y fácil de entender a la vez.
:::

### P15 · El ajuste fino: cortesía y claridad
cubre: A1, C1
fuentes: F-M2-08, F-M2-03
bloque: Escenario o conversación de ejemplo

Casi nunca el primer borrador tiene el tono justo. A veces sale demasiado ceremonioso; otras, demasiado seco. El ajuste se hace conversando con el asistente, con una instrucción a la vez [@F-M2-08]. Estas son algunas que funcionan bien:

| Si el borrador… | Pídele… |
|---|---|
| Suena frío o cortante | «Hazlo más cordial, sin alargarlo» |
| Da muchas vueltas | «Ve al punto: lo importante en la primera oración» |
| Es demasiado formal para tu equipo | «Mantén el respeto, pero con un tono más cercano» |
| Suena a reclamo | «Cambia el tono a uno neutro: describe el problema y pide una solución» |
| No suena a ti | «Usa frases simples, como las que yo escribiría» |

La cortesía profesional no es adornar: es saludar, agradecer, pedir con claridad y no culpar [@F-M2-03]. Mucha gente cree que más formal es más largo, y no es así. Fórmulas como «tengo el agrado de dirigirme a usted con el propósito de» no hacen más cortés un correo; solo lo alargan y lo hacen más difícil de leer. La claridad, por su parte, es que quien lee entienda a la primera qué pasa y qué tiene que hacer.

:::ejemplo Andrés y el reclamo al proveedor
El primer borrador de Andrés decía: «Es inaceptable que nuevamente no cumplan con los plazos». Le pidió a Gemini un tono neutro y recibió: «Le escribo porque el pedido del 7 de octubre no llegó en la fecha acordada. ¿Nos puede confirmar una nueva fecha de entrega?». Dice lo mismo, con más posibilidades de una respuesta rápida.
:::

### P16 · Revisión humana: tu lista de verificación
cubre: C2, A2, S3
fuentes: F-M2-02, F-M2-07
bloque: Lista de verificación (checklist) interactiva

Un texto claro y sin errores relevantes no sale solo: sale de una revisión. La guía de lenguaje claro del Senado recomienda cerrar siempre con una lista de verificación [@F-M2-02]. Esta reúne lo que viste en el tema. Úsala antes de enviar cualquier texto hecho con IA.

- [ ] El objetivo se entiende en las primeras líneas.
- [ ] Nombres, fechas, montos y números de pedido o de factura coinciden con el original.
- [ ] No hay nada que la IA haya agregado sin que yo lo dijera.
- [ ] El registro corresponde a la relación con quien lee, de usted o de tú.
- [ ] El tono es el que necesito y el nivel de detalle es el que esa persona necesita.
- [ ] Las oraciones son breves, en voz activa, y las siglas están explicadas.
- [ ] Tiene asunto, el saludo termina en dos puntos y la despedida es adecuada.
- [ ] La ortografía y la puntuación están revisadas.

Los errores de hecho son los más graves, porque la IA puede introducirlos con total seguridad [@F-M2-07]. Una coma mal puesta se perdona; una fecha de entrega o un monto equivocado generan un problema con un cliente o con un proveedor.

:::comprueba
El borrador de un correo de Andrés está bien escrito, pero dice «pedido 481» y el pedido real es el 418. ¿Qué tipo de error es?
- a) Un error de tono
- **b) Un error de hecho, el más relevante**
- c) Un error de registro
Retroalimentación: Es un dato equivocado. Puede generar confusión o un despacho mal hecho. Por eso los datos se comparan siempre con el original.
:::

### P17 · Tu firma, tu responsabilidad
cubre: A2, S3
fuentes: F-M2-07, F-H-15
bloque: Texto + recuadro destacado

Cuando envías un texto, respondes por él. Da lo mismo si lo escribiste tú, si te ayudó una colega o si lo redactó un asistente: quien firma se hace cargo del mensaje. Es tentador pensar que, si lo escribió la IA, el error es de la IA. Para quien recibe el correo, el mensaje es tuyo; si promete una fecha que no se puede cumplir o trata mal a un cliente, la consecuencia es para ti y para tu equipo, no para la herramienta.

Esa responsabilidad se nota en tres hábitos. El primero es revisar todo antes de enviar y verificar los datos, porque un modelo puede inventar datos e incluso justificaciones que suenan convincentes [@F-M2-07]. El segundo es cuidar la información. En tu trabajo manejas datos reales de clientes, proveedores y colegas: no los pegues en un asistente si tu empresa no lo permite, y para practicar usa copias sin datos sensibles o datos inventados. El tercero es configurar tu asistente. En Gemini, si el ajuste de actividad está encendido, personas que revisan pueden leer conversaciones para mejorar el servicio; para evitarlo se apaga ese ajuste o se usan chats temporales [@F-H-15]. Lo vas a ver en detalle en el módulo 3.

:::ejemplo Camila revisa antes de enviar
Un proveedor preguntó cuándo se le pagaría una factura. Gemini redactó una respuesta impecable que terminaba con «el pago se realizará este viernes». Nadie se había comprometido a esa fecha. Camila borró la frase, escribió que confirmaría la fecha con la gerenta de administración y recién entonces envió el correo.
:::

### P18 · Cierre: tres textos para tu cargo
cubre: H1, C1, C2
fuentes: F-M2-08, F-M2-02
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que en el trabajo se escriben géneros distintos. El correo resuelve algo puntual, la minuta registra acuerdos y compromisos, y el informe ejecutivo le da a quien decide lo esencial. Aprendiste a decidir audiencia, registro y tono antes de escribir, a usar la IA para el borrador y ajustarlo conversando, y a revisar el resultado con una lista de verificación antes de firmarlo [@F-M2-08; @F-M2-02].

La práctica de cierre junta todo eso con textos de tu propio cargo. Retoma el texto que anotaste en la primera pantalla y súmale los otros dos géneros. Si los datos son internos, cambia nombres y montos: lo que importa aquí es cómo ajustas el texto, no la información de tu empresa.

:::actividad Tres textos, tres audiencias
Produce con Gemini estos tres textos:
1. Un correo para alguien externo, como un cliente o un proveedor.
2. Una minuta breve de una reunión de tu área, con al menos dos compromisos.
3. Un informe ejecutivo de media página para tu jefatura, con datos inventados o cambiados.

Para cada uno, anota la audiencia, el registro y el tono que elegiste; guarda el primer borrador y tu versión final, y revísalo con la lista de la pantalla 16 marcando qué corregiste. El informe ejecutivo te va a servir de base para el brief del Hito 2.
:::

### Ideas clave

1. En el trabajo se repiten tres géneros: el correo resuelve algo puntual, la minuta registra acuerdos y compromisos con responsable y fecha, y el informe ejecutivo le entrega a quien decide qué saber, por qué importa y qué hacer.
2. Audiencia, registro y tono son tres decisiones distintas: quién lee, cuánta formalidad y qué actitud transmite el texto.
3. Antes de escribir hay que saber para qué y para quién: esas respuestas son el contexto que se le da a la IA.
4. La IA produce borradores: puede inventar datos con seguridad y varía entre respuestas, por eso todo se revisa antes de enviar.
5. Un buen pedido de texto incluye objetivo y género, audiencia, registro y tono, datos y expectativas de largo y formato; luego se ajusta conversando, un cambio a la vez.
6. El lenguaje claro usa oraciones breves, voz activa, estilo afirmativo y siglas explicadas. Formal no significa complicado.
7. Quien firma responde por el mensaje: verifica los datos y, para practicar, usa copias sin datos sensibles y respeta lo que diga su empresa.

### Referencias bibliográficas

- Anthropic. (s. f.). *Prompting best practices*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Carnegie Mellon University. (s. f.). *Executive summaries*. Student Academic Success Center. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Microsoft. (2026a). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- Microsoft. (2026b, 13 de mayo). *Técnicas de ingeniería de indicaciones*. Microsoft Learn. https://learn.microsoft.com/es-es/azure/ai-foundry/openai/concepts/prompt-engineering
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Purdue University. (s. f.). *Audience (Business writing for administrative and clerical staff)*. Purdue OWL. https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/business_writing_for_administrative_and_clerical_staff/audience.html
- Red de Lenguaje Claro Chile. (s. f.). *Sitio institucional de la Red de Lenguaje Claro Chile*. https://www.lenguajeclarochile.cl/
- Rodríguez-Rodríguez, M. N. y García-Sánchez, S. (s. f.). *Redacción del correo electrónico en español e inglés: breves recomendaciones*. Universidad de Las Palmas de Gran Canaria. https://iatext.ulpgc.es/sites/default/files/recomendaciones_correo_electronico_0.pdf
- Secretaría de Cultura, Recreación y Deporte. (2018). *Instructivo para el manejo de reuniones efectivas (IT-02-CP-EST-COM, versión 02)*. https://mail.culturarecreacionydeporte.gov.co/sites/default/files/2023-04/instructivo_para_el_manejo_de_la_reuniones_efectivas_v2.pdf
- Senado de Chile. (2025). *Guía de lenguaje claro para el ámbito legislativo*. https://cdn.senado.cl/portal-senado-produccion/s3fs-public/2025-09/guia-de-lenguaje-claro-para-el-ambito-legislativo.pdf


## M2-AE2 · Prompting avanzado para textos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M2-08, F-M2-09
bloque: Texto + actividad

En el tema anterior escribiste correos, minutas e informes con un buen prompt y ajustaste el resultado conversando. Eso funciona, pero tiene un problema: si mañana repites el pedido, el texto puede salir distinto. La misma indicación puede dar respuestas diferentes, y en una oficina se nota cuando el mismo tipo de correo sale cada semana con otro formato o con otro tono [@F-M2-08].

El aprendizaje esperado es este: Aplicar técnicas de prompting avanzado (ejemplos, restricciones, encadenamiento) para mejorar la calidad y consistencia de textos profesionales. Al final deberías poder aplicar al menos dos de esas técnicas y obtener textos consistentes entre versiones, comprobándolo con pruebas y no con una impresión.

El tema funciona como un laboratorio de prompts. En cada técnica vas a ver una versión «antes» y otra «después», las vas a probar en Gemini y vas a comparar los resultados. Como la salida de un modelo no es determinista, la documentación de los proveedores recomienda justamente eso: probar las indicaciones y medir cómo se comportan [@F-M2-09]. Al terminar tendrás plantillas que podrás reutilizar en las tareas que se repiten en tu cargo, como Camila con las respuestas a proveedores o Andrés con los avisos a clientes.

Un prompt avanzado no es un prompt más largo. Es uno que da resultados parecidos cada vez que lo usas, con la calidad que necesitas.

:::actividad Abre tu bitácora de laboratorio
Crea un documento o una nota en el celular con el título «Laboratorio de prompts». Ahí vas a registrar cada versión de tus prompts y lo que obtuviste con cada una.
:::

### P02 · Del buen prompt al prompt confiable
cubre: S1, C2
fuentes: F-M2-09, F-M2-10
bloque: Texto + tabla comparativa

En el módulo 1 armaste prompts con rol, contexto, tarea y formato, y eso mejora mucho la primera respuesta. Pero cuando un texto se repite, como la respuesta a una consulta frecuente, el aviso semanal o la confirmación de un pedido, necesitas algo más: que salga igual de bien todas las veces.

Hay cuatro herramientas para lograrlo. Las tres primeras son técnicas que se aplican dentro del prompt; la cuarta es la forma de guardarlas para usarlas de nuevo.

| Técnica | Qué problema resuelve | Ejemplo de uso |
|---|---|---|
| Ejemplos (few-shot) | El formato o el tono cambia en cada respuesta | Mostrar dos avisos bien escritos para que imite el patrón |
| Restricciones | El texto sale largo, con datos inventados o con un estilo que no sirve | «Máximo 80 palabras, sin emojis, solo con los datos entregados» |
| Encadenamiento | La tarea es compleja y sale mal de una vez | Primero extraer los hechos, después redactar, después revisar |
| Plantilla reutilizable | Cada vez escribes el prompt desde cero | Un texto guardado con partes fijas y espacios para los datos |

Un error común es dar por listo un prompt porque funcionó una vez. Una buena respuesta puede ser suerte. Como la salida no es determinista, la documentación de los proveedores recomienda probar las indicaciones con casos variados y diseñarlas de forma iterativa, ajustando según lo que resulta [@F-M2-09; @F-M2-10]. Un prompt se vuelve confiable después de probarlo varias veces y con casos distintos.

:::comprueba
Cada vez que Andrés pide el aviso semanal de inventario, la respuesta sale con un formato distinto. ¿Qué técnica le conviene probar primero?
- a) Pedir que el texto sea más creativo
- **b) Incluir ejemplos de avisos con el formato que necesita**
- c) Escribir el prompt en mayúsculas
Retroalimentación: Los ejemplos orientan el formato, el tono y la estructura, y mejoran la consistencia entre respuestas.
:::

### P03 · Cómo funciona el laboratorio
cubre: A1, A2, C2
fuentes: F-M2-10, F-M2-09
bloque: Proceso (process block) en 5 pasos + tabla de bitácora

El diseño de prompts es iterativo: se empieza simple y se agregan detalles según los resultados [@F-M2-10]. Para que esa iteración te enseñe algo, conviene hacerla con orden. Este es el método del laboratorio:

1. Escribe la versión 1 del prompt y guárdala en tu bitácora con un nombre.
2. Pruébala siempre con los mismos dos o tres casos de prueba, por ejemplo, tres consultas distintas de proveedores [@F-M2-09].
3. Anota qué salió bien y qué no, con criterios fijos: formato, largo, tono y datos exactos.
4. Cambia una sola cosa y guarda la versión 2.
5. Compara las versiones con los mismos casos y quédate con la mejor.

El paso 4 es una recomendación del curso. No es la única forma de trabajar, pero hace que la comparación sea justa: si cambias muchas cosas a la vez y el resultado mejora, no sabrás cuál de ellas lo produjo. Tu bitácora puede ser una tabla simple:

| Versión | Qué cambié | Caso 1 | Caso 2 | Caso 3 | ¿Mejoró? |
|---|---|---|---|---|---|
| v1 | — | Largo | Bien | Inventó una fecha | — |
| v2 | Agregué «usa solo los datos entregados» | Largo | Bien | Bien | Sí, en datos |

Eso es el **orden metodológico**: versiones con nombre, casos de prueba fijos, un cambio a la vez y un registro de lo que pasó. Andrés, por ejemplo, guarda sus prompts como «aviso-despacho-v1», «v2» y «v3»; cuando una versión nueva empeora algo, vuelve a la anterior sin tener que recordar cómo era. Sin registro, mejorar un prompt depende de la memoria.

### P04 · Técnica 1: ejemplos (few-shot)
cubre: S1, C1
fuentes: F-M2-11, F-M2-10
bloque: Texto + imagen de un prompt con ejemplos destacados

**Few-shot**, que en español sería «con pocos ejemplos», significa incluir en el prompt uno o varios ejemplos de entrada y salida para que el modelo capte el patrón y lo imite. La entrada son los datos de un caso; la salida, el texto que esperas obtener con ellos.

La documentación de los proveedores coincide en que los ejemplos son una de las formas más confiables de orientar el formato, el tono y la estructura de una respuesta, y en que mejoran la consistencia [@F-M2-11]. Para que funcionen, tienen que parecerse a los casos reales que vas a pedir y ser variados, de modo que cubran situaciones distintas y el modelo no copie un solo caso. Además, todos deben tener el mismo formato y quedar separados de las instrucciones con una etiqueta clara, como «EJEMPLO 1» [@F-M2-10; @F-M2-11].

Sobre cuántos ejemplos usar no hay una regla fija. Una guía sugiere de tres a cinco [@F-M2-11]; otra advierte que demasiados pueden hacer que el modelo los copie de más [@F-M2-10]. Para textos breves, este curso propone partir con dos o tres, y tu laboratorio te dirá si hacen falta más.

Para armar ejemplos tampoco necesitas copiar correos reales con nombres, teléfonos o direcciones de clientes. El modelo imita la forma y no necesita los datos verdaderos, así que puedes inventarlos.

:::ejemplo Un ejemplo de entrada y salida
ENTRADA: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
SALIDA: «Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central».
:::

### P05 · Laboratorio 1: antes y después con ejemplos
cubre: S1, C1, C2
fuentes: F-M2-11, F-M2-09
bloque: Comparación antes y después + actividad

Andrés envía cada semana avisos de despacho a clientes y quiere que todos tengan el mismo formato. Su primera versión era esta: «Escribe un aviso para el cliente Distribuidora Sur: su pedido 455 llega el miércoles 20». Al repetirla, a veces salía con asunto y a veces sin él, a veces con tres párrafos y otras con uno, y una vez agregó «¡Gracias por preferirnos!». En la segunda versión sumó dos ejemplos, separados de la instrucción:

```
Escribe un aviso de despacho siguiendo el formato de los ejemplos. Usa solo los datos de la entrada.
EJEMPLO 1
Entrada: pedido 312, llega el lunes 18, cliente Ferretería Los Aromos.
Salida: Asunto: Despacho pedido 312. Estimados Ferretería Los Aromos: su pedido 312 llegará el lunes 18. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
EJEMPLO 2
Entrada: pedido 320, llega el viernes 22, cliente Minimarket Doña Rosa, faltan 2 cajas que llegan el lunes 25.
Salida: Asunto: Despacho pedido 320. Estimados Minimarket Doña Rosa: su pedido 320 llegará el viernes 22. Dos cajas llegarán el lunes 25. Ante cualquier consulta, respondan este correo. Saludos cordiales, Bodega Central.
AHORA
Entrada: pedido 455, llega el miércoles 20, cliente Distribuidora Sur.
```

Fíjate en que el segundo ejemplo no es igual al primero: trae un faltante. Así el modelo aprende qué hacer en ese caso, que en una bodega es frecuente. Son los ejemplos variados y bien separados los que mejoran la consistencia; dos ejemplos casi idénticos le enseñarían menos [@F-M2-11; @F-M2-09].

:::actividad Prueba las dos versiones
Pega la primera versión en Gemini tres veces, cada una en un chat nuevo, y luego haz lo mismo con la segunda. Anota en tu bitácora cuántas veces salió el asunto, cuántas veces se mantuvo la despedida y si alguna agregó algo que no estaba.
:::

### P06 · Cuando los ejemplos fallan
cubre: S1, C2
fuentes: F-M2-10, F-M2-11
bloque: Texto + escenario

Los ejemplos son poderosos, y por eso también pueden llevar a errores. El más frecuente es que el modelo copie de más. Si todos los ejemplos dicen «lunes», puede poner «lunes» aunque la entrada diga otro día. Las guías advierten que demasiados ejemplos, o ejemplos muy parecidos, llevan a este **sobreajuste**: el modelo copia detalles en vez de aplicar el patrón [@F-M2-10]. Por eso es un error creer que mientras más ejemplos, mejor. Conviene empezar con pocos y variados, y agregar uno solo cuando las pruebas muestran que falta cubrir un caso.

El segundo problema son los ejemplos que se contradicen. Si uno termina con «Saludos cordiales» y otro con «Atentamente», el modelo no sabe cuál usar; por eso el formato debe ser idéntico entre ejemplos [@F-M2-10]. El tercero aparece cuando los ejemplos están mezclados con las instrucciones, porque el modelo puede confundir un ejemplo con un dato real; para evitarlo sirven etiquetas como «EJEMPLO 1» y «AHORA» [@F-M2-11]. El último es usar ejemplos que no se parecen a lo que pides: si el ejemplo es un aviso de despacho y necesitas responder un reclamo, el patrón no sirve.

Un buen conjunto de ejemplos, entonces, es corto, variado, parejo en el formato y fácil de distinguir del resto del prompt.

:::comprueba
Andrés incluyó dos ejemplos y en ambos el pedido llegaba completo. Cuando pide un aviso con un faltante, el modelo lo omite. ¿Qué le conviene hacer?
- a) Quitar los ejemplos
- **b) Cambiar un ejemplo por uno que incluya un faltante**
- c) Agregar diez ejemplos más de pedidos completos
Retroalimentación: Los ejemplos deben ser variados y cubrir los casos reales. Si ningún ejemplo tiene faltantes, el modelo no sabe cómo mostrarlos.
:::

### P07 · Técnica 2: restricciones
cubre: S1, C1
fuentes: F-M2-10, F-M1-14
bloque: Texto + tabla por tipo de restricción

Una **restricción** es un límite claro que el texto debe cumplir. Las guías de los proveedores recomiendan decir qué hacer y qué no, fijar un largo máximo e indicar el formato de la respuesta [@F-M2-10]. En textos de oficina, las más útiles son de seis tipos:

| Tipo | Ejemplo |
|---|---|
| Largo | «Máximo 80 palabras», «tres viñetas», «una página» |
| Formato | «Con asunto», «en tabla de tres columnas», «párrafos de dos oraciones» |
| Registro y tono | «Formal, de usted, cordial» |
| Contenido permitido | «Usa solo los datos que te entrego» |
| Contenido prohibido | «Sin emojis», «sin promesas de plazos», «sin signos de exclamación» |
| Qué hacer si falta algo | «Si falta un dato, escribe [FALTA]» |

Cuando puedas, di qué hacer en vez de solo qué no hacer [@F-M1-14]. «Escribe en párrafos cortos» funciona mejor que «no escribas párrafos largos», porque le da al modelo una dirección.

Las restricciones son especialmente útiles para la exactitud. «Usa solo los datos que te entrego», junto con la regla de [FALTA], le da al modelo una alternativa a completar con datos inventados. Y hay una condición para que sirvan: que puedas comprobar si se cumplieron. «Que sea breve» es difícil de medir; «máximo 90 palabras» se cuenta.

:::ejemplo Una restricción que evita problemas
Camila notó que, al responder a proveedores que preguntaban por un pago, el asistente agregaba frases como «le confirmamos que el pago se hará esta semana». Sumó la restricción «No agregues fechas, montos ni compromisos de pago que no estén en mis datos». Desde entonces, el texto solo dice lo que la gerenta ya aprobó.
:::

### P08 · Laboratorio 2: antes y después con restricciones
cubre: S1, C1, C2
fuentes: F-M2-10, F-M2-03
bloque: Comparación antes y después + actividad

Camila tuvo una reunión con la ejecutiva de un proveedor para ordenar las fechas de facturación, y quiere enviarle un correo de agradecimiento. Su primera versión fue «Escribe un correo de agradecimiento después de una reunión con un proveedor». El resultado típico fue un texto de 200 palabras, con frases genéricas, un nombre de empresa inventado y un saludo con coma. En la segunda versión separó los datos y las restricciones:

```
Escribe un correo de agradecimiento después de una reunión con un proveedor.
DATOS: reunión el jueves 14 con la Sra. Muñoz, ejecutiva del proveedor de hormigón; acordamos que enviarán cada factura junto con su guía de despacho.
RESTRICCIONES:
Máximo 90 palabras.
Registro formal, de usted, tono cordial.
Incluye asunto y saludo con dos puntos.
Menciona solo el acuerdo que te doy, sin agregar otros.
No uses frases como "es un placer" ni signos de exclamación.
Cierra con "Saludos cordiales," y mi nombre: Camila Soto.
```

Con las restricciones en líneas separadas, el prompt es más fácil de leer para ti y para el modelo, y más fácil de cambiar después [@F-M2-10]. Cada una, además, se puede comprobar: las palabras se cuentan, el saludo se mira y el acuerdo se compara con lo que se habló en la reunión. Las de asunto y saludo vienen de las recomendaciones sobre el correo que viste en el tema 1 [@F-M2-03].

:::actividad Mide el efecto
Prueba la primera y la segunda versión dos veces cada una, en chats nuevos. Cuenta las palabras de cada resultado, revisa si cumple cada restricción y anota en tu bitácora cuántas cumplió cada versión.
:::

### P09 · Técnica 3: encadenamiento de pasos
cubre: S1, C1, A1
fuentes: F-M2-10, F-M2-11
bloque: Proceso (process block) en 3 pasos

El **encadenamiento** divide una tarea compleja en pasos, y la salida de un paso alimenta al siguiente [@F-M2-10]. En vez de pedir todo de una vez, pides una cosa, la revisas y usas ese resultado en el pedido que sigue. Una cadena típica para textos tiene tres eslabones:

1. Primero extraes los hechos: «De estas notas, lista solo los hechos: fechas, cifras, nombres y acuerdos».
2. Después redactas con ellos: «Con esta lista de hechos, redacta el informe».
3. Al final revisas y mejoras: «Revisa el informe contra estos criterios. Señala qué no cumple y entrega una versión corregida».

El tercer paso se conoce como autocorrección: el borrador se revisa contra criterios claros y se entrega una versión mejorada [@F-M2-11].

Podrías pensar que dividir no hace falta, si los modelos actuales ya razonan bastante por su cuenta. La documentación de un proveedor lo explica: encadenar sirve sobre todo para revisar los resultados intermedios [@F-M2-11]. Si la lista de hechos del primer paso trae un error, lo detectas antes de que se convierta en un párrafo bien escrito. Un solo prompt es más rápido, pero si sale mal no sabes dónde falló, y mezcla lo que hay que verificar con lo que hay que redactar. La cadena toma un poco más de tiempo y te deja ver y corregir cada paso. Por eso el encadenamiento es orden metodológico aplicado: cada paso tiene una tarea, un resultado y una revisión.

### P10 · Laboratorio 3: una cadena de tres pasos
cubre: S1, C1, A1
fuentes: F-M2-11, F-M2-05
bloque: Proceso paso a paso + actividad

Andrés tiene notas desordenadas de su semana y necesita un informe ejecutivo para su jefatura. Las notas, ficticias, dicen: «lunes faltaron cajas, 2 pedidos atrasados. miércoles llegó proveedor nuevo, cajas ok. jueves 1 pedido atrasado por camión. total semana 38 despachos. idea: tener 30 cajas de reserva». Si pide todo de una vez, con «Haz un informe ejecutivo con estas notas», el resultado mezcla todo y, a veces, cambia una cifra. Con la cadena, el trabajo queda así:

1. «Lista solo los hechos de estas notas, uno por línea: qué pasó, cuándo y cuántos. No redactes». Andrés revisa la lista contra las notas: que estén los tres atrasados y que el total sea 38.
2. «Con esta lista, redacta un informe ejecutivo de media página para mi jefatura: resultado de la semana, por qué importa y recomendación. Usa solo estos hechos».
3. «Revisa el informe: ¿empieza por el resultado?, ¿cada cifra está en la lista?, ¿la recomendación es clara? Señala qué no cumple y entrega una versión corregida».

El segundo paso sigue la estructura del informe ejecutivo del tema 1: resultado, por qué importa y qué hacer [@F-M2-05]. Un error frecuente es saltarse la revisión del primer paso y pegar la lista directamente en el segundo. Entonces la cadena pierde su ventaja: un error de la lista llega intacto al informe, y ahora suena convincente [@F-M2-11].

:::actividad Compara el camino corto y el largo
Haz el caso con un solo prompt y luego con la cadena. En tu bitácora, anota en cuál detectaste antes un error y cuál resultado necesitó menos correcciones tuyas.
:::

### P11 · Combinar técnicas según el problema
cubre: C1, S1
fuentes: F-M2-11, F-M2-10
bloque: Tabla + actividad de clasificación

Las técnicas se combinan. Un mismo prompt puede traer ejemplos, una lista de restricciones y ser parte de una cadena [@F-M2-11; @F-M2-10]. La pregunta útil no es cuántas técnicas usar, sino cuál ataca el problema que tienes.

| Si el problema es… | Prueba primero… |
|---|---|
| El formato cambia en cada respuesta | Ejemplos |
| El tono no es el que necesitas | Ejemplos con el tono correcto |
| El texto sale largo o con elementos que no quieres | Restricciones |
| Aparecen datos que no diste | Restricción «usa solo estos datos» y regla de [FALTA] |
| La tarea tiene muchas partes y sale desordenada | Encadenamiento |
| Hay errores que se pasan sin notar | Encadenamiento con un paso de revisión |

Tampoco sirve sumar técnicas por si acaso: las que no resuelven tu problema solo alargan el prompt y lo hacen más difícil de mantener. Usa la que ataca lo que falla y comprueba en el laboratorio si mejoró.

:::actividad Elige la técnica
Para cada problema, decide si conviene usar ejemplos, restricciones o encadenamiento. La respuesta sugerida va al final de cada línea.
1. Las respuestas a reclamos salen a veces formales y a veces informales. → Ejemplos
2. El resumen de un instructivo de rendición de gastos sale de dos páginas y lo necesitas en cinco viñetas. → Restricciones
3. Necesitas pasar de la transcripción de una reunión a una minuta revisada. → Encadenamiento
4. El asistente agrega un descuento que nadie ofreció. → Restricciones
5. El aviso semanal cambia de estructura cada semana. → Ejemplos
:::

### P12 · Plantillas reutilizables
cubre: S1, H1
fuentes: F-M2-09, F-M1-12
bloque: Texto + imagen de una plantilla con secciones

Cuando un prompt funciona, conviene guardarlo como **plantilla**: un texto con partes fijas, que no cambian, y campos variables, que completas cada vez. La guía de instrucciones de Google para Gemini marca con corchetes lo que hay que personalizar, por ejemplo [nombre del cliente] [@F-M1-12].

La documentación de OpenAI propone ordenar un prompt en secciones: la identidad o rol, las instrucciones, los ejemplos y el contexto, que son los datos de cada vez, separadas con encabezados o etiquetas [@F-M2-09]. Una plantilla para textos de oficina puede verse así:

```
ROL: Eres [cargo] en [tipo de empresa].
TAREA: Redacta [género: correo / aviso / minuta] para [audiencia].
RESTRICCIONES:
Máximo [número] palabras.
Registro [formal / semiformal], tono [cordial / neutro].
Usa solo los DATOS. Si falta algo, escribe [FALTA].
EJEMPLO:
[un ejemplo de entrada y salida]
DATOS:
[los datos de este caso]
```

Las palabras en mayúsculas no cambian; lo que está entre corchetes se completa en cada uso. Así la plantilla guarda lo que aprendiste en el laboratorio, y la próxima vez no partes de cero, sino de la versión que ya probaste.

:::ejemplo La plantilla de Camila
En el Hito 1, Camila guardó en su biblioteca el prompt «Correo de seguimiento de pago», con el que responde a los proveedores que preguntan cuándo se pagará una factura. Ahora lo convirtió en plantilla: cada vez cambia solo el proveedor, el número de factura y la fecha de pago que confirmó la gerenta. Los correos le salen parecidos y le toma menos tiempo revisarlos.
:::

### P13 · Laboratorio 4: diseña tu plantilla
cubre: H1, A1
fuentes: F-M2-09, F-M2-11
bloque: Actividad (completar plantilla)

Ahora vas a diseñar una plantilla para un texto que se repite en tu cargo: una respuesta a consultas frecuentes, un aviso, una confirmación o un seguimiento. Para que tengas un modelo, esta es una plantilla de respuesta a consultas de clientes. Fíjate en cómo las etiquetas separan las secciones y en que las restricciones le dicen al asistente qué hacer cuando no tiene la respuesta.

```
ROL: Eres asistente de atención en [tipo de negocio].
TAREA: Responde la CONSULTA del cliente.
RESTRICCIONES:
Máximo 70 palabras.
Formal, de usted, cordial.
Responde solo con la INFORMACIÓN DISPONIBLE. Si la respuesta no está ahí, di que lo consultarás y responderás pronto.
Sin emojis. Cierra con "Saludos cordiales," y [nombre].
EJEMPLO:
Consulta: ¿Atienden el sábado?
Información: sábado de 10:00 a 14:00.
Respuesta: Estimado cliente: sí, atendemos el sábado de 10:00 a 14:00. Saludos cordiales, [nombre].
INFORMACIÓN DISPONIBLE: [horarios, precios, plazos]
CONSULTA: [texto del cliente]
```

Lo que se completa cada vez son la consulta y la información disponible. Las restricciones y la estructura quedan fijas, y por eso la plantilla da resultados parecidos. Las guías de los proveedores recomiendan precisamente usar etiquetas consistentes para separar instrucciones, contexto y datos [@F-M2-11; @F-M2-09].

:::actividad Completa tu plantilla
1. Elige el texto repetitivo de tu cargo.
2. Escribe la plantilla con las secciones ROL, TAREA, RESTRICCIONES, EJEMPLO y DATOS.
3. Marca con corchetes los campos variables.
4. Guárdala en tu bitácora como «v1».
:::

### P14 · Cómo evaluar la consistencia
cubre: H1, C2
fuentes: F-M2-09, F-M2-08
bloque: Texto + tabla de evaluación

Una plantilla es **consistente** cuando entrega textos con la misma calidad y el mismo formato, aunque cambien los datos y aunque la uses varias veces. Como la misma indicación puede dar respuestas distintas, la única forma de saberlo es probar [@F-M2-08; @F-M2-09].

Prepara tres casos de prueba distintos: uno simple, uno con un dato que falta y uno difícil, por ejemplo, un cliente molesto. Usa la plantilla con cada caso dos veces, en chats nuevos, para que la conversación anterior no influya, y revisa cada resultado con los mismos criterios:

| Criterio | Pregunta |
|---|---|
| Formato | ¿Tiene las partes pedidas, en el orden pedido? |
| Largo | ¿Respeta el máximo de palabras? |
| Tono y registro | ¿Es el que pediste? |
| Exactitud | ¿Todos los datos están en la información entregada? |
| Vacíos | ¿Marcó [FALTA] o dijo que consultaría, en vez de inventar? |

Seis resultados, tres casos por dos intentos, te dan una idea razonable de cómo se comporta la plantilla. Ese número es una recomendación del curso para una prueba rápida, no una regla.

:::error Probar solo con el caso fácil
Si pruebas la plantilla con un caso en que todo está claro, siempre saldrá bien. Los problemas aparecen con los datos incompletos y las situaciones difíciles: por eso uno de tus casos tiene que ser difícil.
:::

### P15 · Laboratorio 5: compara versiones
cubre: C2, H1, A2
fuentes: F-M2-09, F-M2-10
bloque: Comparación antes y después + actividad

Ahora vas a mejorar tu plantilla con datos, no con impresiones [@F-M2-09]. Mira primero cómo lo hizo Andrés con su plantilla de avisos de despacho. Probó cada versión con sus tres casos, dos veces cada uno, y anotó los resultados, que son ficticios:

| Criterio | v1 (sin ejemplos) | v2 (con 2 ejemplos) | v3 (con ejemplos y regla de [FALTA]) |
|---|---|---|---|
| Formato correcto | 3 de 6 | 6 de 6 | 6 de 6 |
| Largo respetado | 4 de 6 | 5 de 6 | 6 de 6 |
| Datos exactos | 5 de 6 | 5 de 6 | 6 de 6 |
| Marcó lo que faltaba | 0 de 2 | 1 de 2 | 2 de 2 |

La v2 resolvió el formato y la v3 resolvió los datos que faltaban. Como cada versión cambió una sola cosa, Andrés sabe qué produjo cada mejora, y se queda con la v3. Si una versión nueva no hubiera mejorado, también habría aprendido algo: volvería a la anterior y probaría otro cambio [@F-M2-10]. La mejora continua incluye descartar.

:::actividad Tu comparación
1. Prueba tu plantilla v1 con tus tres casos, dos veces cada uno.
2. Llena la tabla de criterios.
3. Identifica el criterio que más falla y elige la técnica que lo ataca, como viste en la pantalla 11.
4. Haz la v2 cambiando solo eso, pruébala igual y compara.
:::

### P16 · La prueba de alguien sin contexto
cubre: A2, H1
fuentes: F-M2-11, F-M1-12
bloque: Texto + escenario

La documentación de Anthropic propone una prueba simple: muéstrale tu prompt a una colega que no sabe nada de la tarea [@F-M2-11]. Si ella no entendería qué se pide, el modelo probablemente tampoco. El asistente no conoce tu trabajo; solo sabe lo que está escrito.

En esa revisión conviene mirar cuatro cosas: si se entiende qué texto hay que producir y para quién, si hay palabras que solo entiende tu equipo, como siglas o nombres internos, si las restricciones se contradicen entre sí y si queda claro qué es ejemplo y qué es dato real. Es fácil caer en la idea de que «si lo entiendo yo, lo entiende el modelo». Tú conoces el contexto y llenas los vacíos sin darte cuenta; el modelo no puede hacerlo, y lo que no está escrito en el prompt no existe para él.

También puedes pedirle al asistente que mejore tu prompt, como sugiere la guía de instrucciones de Google para Gemini: «Revisa esta plantilla. ¿Qué instrucción es ambigua? ¿Qué falta para que el resultado sea siempre igual de bueno?» [@F-M1-12]. Sus propuestas son eso, propuestas: pruébalas en el laboratorio antes de aceptarlas.

:::ejemplo La sigla que nadie entendía
La plantilla de Andrés decía «avisar si hay OC pendiente». Una colega de ventas le preguntó qué era «OC». Andrés lo cambió por «orden de compra pendiente», y los avisos dejaron de salir con interpretaciones raras.
:::

### P17 · Orden y mejora continua
cubre: A1, A2
fuentes: F-M2-09, F-M2-10
bloque: Texto + lista de verificación (checklist)

Las plantillas no se terminan nunca del todo. Cambian tus tareas, cambian los casos y cambian los modelos. La documentación de OpenAI recomienda volver a probar las indicaciones cuando se cambia de modelo, porque el comportamiento puede variar [@F-M2-09], y la de Google insiste en que el diseño de prompts es iterativo [@F-M2-10]. Estos hábitos te ayudan a sostener el orden y la mejora en el tiempo:

- [ ] Cada plantilla tiene un nombre claro y un número de versión.
- [ ] Guardo junto a la plantilla sus casos de prueba y anoto qué cambié en cada versión y por qué.
- [ ] Separo con etiquetas las partes fijas de los datos.
- [ ] Cuando un resultado falla en el trabajo, lo agrego como caso de prueba.
- [ ] Vuelvo a probar mis plantillas cuando el asistente se actualiza o cuando cambio de asistente.
- [ ] Reviso cada cierto tiempo si una plantilla sigue sirviendo o si la tarea cambió.

Andrés aplicó el cuarto hábito cuando un cliente le respondió que el aviso no decía la dirección de entrega. Agregó ese caso a sus pruebas y una restricción nueva, «Incluye la dirección de entrega si está en los datos», y guardó la plantilla como v4.

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

En este tema aplicaste tres técnicas. Los ejemplos fijan el formato y el tono, las restricciones ponen límites que se pueden comprobar y el encadenamiento divide una tarea para revisar cada paso [@F-M2-11]. Guardaste lo aprendido en plantillas reutilizables y mediste su consistencia comparando versiones con los mismos casos de prueba [@F-M2-09].

En el Hito 1 armaste tu primera biblioteca de prompts. Ahora vas a sumarle dos plantillas probadas para tu cargo, que son las que más tiempo te van a ahorrar en las tareas que se repiten. Una plantilla que pasó tus pruebas es una herramienta de trabajo; una que no probaste es solo un buen intento.

:::actividad Tu biblioteca de prompts, versión 2
Agrega a tu biblioteca:
1. Una plantilla con ejemplos y restricciones para un texto que se repite, como un aviso, una respuesta o un seguimiento.
2. Una cadena de pasos para un texto más complejo, como una minuta desde notas o un informe desde datos.

Para cada una, guarda la versión final con su número, tus tres casos de prueba, la tabla de criterios con los resultados de al menos dos versiones y una línea que diga qué técnica aplicaste y qué mejoró.
:::

### Ideas clave

1. La misma indicación puede dar respuestas distintas: un prompt es confiable solo cuando se probó varias veces y con casos variados.
2. Los ejemplos (few-shot) orientan formato, tono y estructura; deben ser pertinentes, variados, con el mismo formato y separados de las instrucciones. No hay un número fijo, y demasiados pueden hacer que el modelo los copie de más.
3. Las restricciones fijan qué hacer y qué no, el largo y el formato; las mejores son las que se pueden comprobar.
4. El encadenamiento divide la tarea en pasos (extraer, redactar, revisar) y permite detectar errores en los resultados intermedios.
5. Una plantilla reutilizable separa las partes fijas de los campos variables y guarda lo aprendido en el laboratorio.
6. La consistencia se evalúa con casos de prueba fijos, criterios claros y versiones que cambian una cosa a la vez.
7. Las plantillas se vuelven a probar cuando cambian la tarea, los casos o el modelo: es un proceso de mejora continua.

### Referencias bibliográficas

- Anthropic. (s. f.-a). *Mejores prácticas de prompting*. Claude Docs. https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Anthropic. (s. f.-b). *Prompting best practices*. Claude Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Carnegie Mellon University. (s. f.). *Executive summaries*. Student Academic Success Center. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- Google. (s. f.). *Cómo escribir instrucciones eficaces*. Google Workspace. https://workspace.google.com/intl/es-419/resources/ai/writing-effective-prompts/
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
- Rodríguez-Rodríguez, M. N. y García-Sánchez, S. (s. f.). *Redacción del correo electrónico en español e inglés: breves recomendaciones*. Universidad de Las Palmas de Gran Canaria. https://iatext.ulpgc.es/sites/default/files/recomendaciones_correo_electronico_0.pdf


## M2-AE3 · Presentaciones con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M2-13
bloque: Texto + imagen

Una presentación sirve para que una audiencia entienda una idea y haga algo con ella: aprobar una propuesta, cambiar un procedimiento, asignar un presupuesto. En este tema vas a construir una paso a paso, con apoyo de IA.

El aprendizaje esperado es este: Estructurar presentaciones de 6 láminas con apoyo de IA a partir de un mensaje clave y una audiencia definida. Al final deberías poder ordenar seis láminas alrededor de un mensaje clave coherente y depurar lo que genera la IA, quitando lo que sobra y corrigiendo los errores.

El tema es un taller y termina con un producto. Vas a definir tu mensaje y tu audiencia, pedirle a Gemini el esquema, revisarlo, armar las láminas, cuidar cómo se ven y escribir el guion. Es el mismo camino que vas a seguir en el Hito 2. La presentación tiene seis láminas, un formato corto que obliga a elegir lo importante. Una guía universitaria de diseño de láminas pone el punto de partida antes de cualquier herramienta: se definen el propósito, la audiencia y el mensaje, y después las láminas se unen en una historia coherente [@F-M2-13].

En el taller te acompañan dos presentaciones. Andrés quiere proponerle a su jefatura que la bodega tenga siempre una reserva de cajas, para que no se atrasen los despachos, y va a tener poco tiempo en la reunión del lunes. Camila quiere mostrarle a la gerenta de administración cómo organizar el archivo de documentos de la oficina, porque hoy encontrar una factura antigua toma demasiado tiempo.

La IA puede proponerte un esquema y un borrador de cada lámina en segundos. Lo que no puede hacer por ti es decidir qué quieres que la audiencia entienda, y eso va primero.

### P02 · Antes de abrir una herramienta: propósito, audiencia y mensaje
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Texto + tabla + actividad

Las guías de diseño de presentaciones coinciden en que antes de armar láminas hay que definir tres cosas [@F-M2-13]. El propósito es lo que quieres que pase al final: que aprueben, que entiendan o que cambien algo. La audiencia es quien te escucha, qué sabe del tema y qué le preocupa. El mensaje es la idea que tiene que llevarse aunque olvide todo lo demás.

Si tu audiencia es alguien que decide, como tu jefatura, te sirven las tres preguntas del informe ejecutivo del tema 1: qué debo saber, por qué me importa y qué debo hacer [@F-M2-05]. Así quedaron las respuestas de Andrés:

| | Andrés |
|---|---|
| Propósito | Que su jefatura apruebe una reserva fija de cajas |
| Audiencia | Su jefatura: conoce la bodega y le preocupan los costos y los reclamos de clientes |
| Mensaje | Si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos |

Estas tres respuestas forman un **brief**: un texto breve que orienta todo lo que viene después. Es lo mismo que pide el Hito 2, y es también lo primero que le vas a entregar a la IA cuando le pidas el esquema.

:::actividad Tu brief en tres líneas
Escribe el propósito, la audiencia y el mensaje de una presentación que tengas que hacer en tu trabajo. Si no tienes una a mano, usa el problema que elegiste en el Hito 1.
:::

### P03 · El mensaje clave en una oración
cubre: S1, A1
fuentes: F-M2-13
bloque: Texto + comparación antes y después

El **mensaje clave** es la idea central de la presentación, dicha en una oración completa. No es el tema: es lo que afirmas sobre el tema.

| Tema (no sirve como mensaje) | Mensaje clave |
|---|---|
| Los despachos | Si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos |
| El archivo de la oficina | Un archivo ordenado por fecha y tipo de documento permite encontrar cualquier papel rápido |
| Atención al cliente | Responder las consultas en el día reduce los reclamos |

Hay tres pruebas sencillas para saber si tu mensaje funciona. La primera es que sea una oración con verbo: «Los despachos» no lo es. La segunda es que alguien pueda estar en desacuerdo, porque si nadie podría discutirlo, quizás no dice nada. La tercera es que quepa en una sola idea; si tiene tres «y», probablemente son tres mensajes.

Cada lámina de tu presentación va a tener que apoyar ese mensaje, y lo que no lo apoye sobra [@F-M2-13]. Por eso conviene trabajarlo antes de abrir cualquier herramienta. Poder decir lo esencial en una oración es lo que llamamos **sentido de síntesis**: si no lo logras, todavía no tienes clara tu presentación, y la IA tampoco la va a tener.

:::error Confundir el tema con el mensaje
Pedirle a la IA «una presentación sobre los despachos» produce láminas genéricas sobre logística. Pedirle una presentación cuyo mensaje es «si mantenemos 30 cajas de reserva, evitamos atrasos» produce láminas que defienden esa idea.
:::

### P04 · La estructura narrativa: una historia en seis láminas
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Línea de tiempo (timeline) o proceso en 6 pasos

Una presentación no es una lista de datos: es una historia que lleva a la audiencia desde la situación actual hasta lo que quieres que haga. Las láminas se encadenan para contar esa historia de forma coherente [@F-M2-13]. Para audiencias que deciden, la secuencia qué debo saber, por qué me importa y qué debo hacer da un buen hilo [@F-M2-05]. Este curso propone una estructura posible para seis láminas:

| Lámina | Función | Ejemplo de Andrés |
|---|---|---|
| 1 | Mensaje clave | Con 30 cajas de reserva evitamos atrasos en los despachos |
| 2 | Situación actual | Hoy pedimos cajas solo cuando se acaban |
| 3 | Problema y por qué importa | Este mes se atrasaron 3 despachos por falta de cajas |
| 4 | Propuesta | Mantener siempre 30 cajas de reserva |
| 5 | Qué se necesita y qué se gana | Un pedido extra al mes; menos atrasos y reclamos |
| 6 | Qué pedimos | Aprobar la reserva desde el próximo mes |

No es la única estructura. Si le presentas a tu equipo el avance de un trabajo, por ejemplo, la historia puede ir de lo que se hizo a lo que falta y a quién le toca cada parte. Lo importante es que haya un hilo y que la última lámina diga qué esperas de la audiencia.

:::ejemplo Dos órdenes para lo mismo
Andrés primero puso la propuesta en la lámina 2. Su jefatura todavía no sabía cuál era el problema, y la propuesta parecía un gasto innecesario. Al moverla después del problema, la propuesta se entendió como la solución.
:::

### P05 · Ordena la historia
cubre: S1, C1
fuentes: F-M2-13, F-M2-05
bloque: Ordenar o clasificar (sorting activity)

Ahora te toca ordenar una historia, y el caso es el de Camila. La gerenta de administración le pidió que le mostrara, en seis láminas, cómo organizaría el archivo de documentos de la oficina, porque hoy las facturas, las órdenes de compra y los contratos se guardan en cajas por orden de llegada. Su mensaje clave es «Un archivo ordenado por fecha y tipo de documento permite encontrar cualquier papel rápido».

Para ordenar las láminas, piensa en lo que necesita la gerenta para decidir. Primero tiene que saber de qué se trata y cómo están las cosas hoy; después, por qué eso es un problema; recién entonces puede evaluar una propuesta, lo que cuesta y lo que se gana [@F-M2-13]. Lo que Camila pide va al final, porque si lo pide antes de explicar, su jefatura no tiene cómo evaluarlo. Y si falta la lámina del problema, la propuesta queda sin justificación: es la que responde por qué me importa [@F-M2-05].

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

### P06 · Una lámina, una idea
cubre: S2, C1
fuentes: F-M2-13
bloque: Texto + comparación antes y después

La relación entre el mensaje y las láminas se resume en una regla: cada lámina transmite una sola idea, y esa idea apoya el mensaje clave. Una guía universitaria de diseño de láminas agrega que el título de cada lámina debe enunciar su conclusión principal, idealmente como una oración completa [@F-M2-13]. A eso se le llama **título-oración**.

| Título que nombra un tema | Título que dice la conclusión |
|---|---|
| Atrasos | Este mes se atrasaron 3 despachos por falta de cajas |
| Propuesta | Una reserva de 30 cajas evita quedarnos sin stock |
| Costos | La reserva requiere solo un pedido extra al mes |

Con títulos así, la audiencia entiende la lámina aunque no lea nada más, y tú sabes qué tiene que demostrar el resto de la lámina. Sirven además para una prueba rápida: lee solo los seis títulos, en orden. Si cuentan la historia completa, tu estructura funciona; si no se entiende, falta una idea o sobra una lámina.

Un error común es poner el problema y la propuesta en la misma lámina para ahorrar espacio. Parece eficiente, pero obliga a la audiencia a seguir dos ideas a la vez. Si una lámina necesita dos títulos, son dos láminas.

:::comprueba
¿Cuál es el mejor título para la lámina 3 de Andrés?
- a) «Problema»
- b) «Algunos datos de este mes»
- **c) «Este mes se atrasaron 3 despachos por falta de cajas»**
Retroalimentación: Un título-oración dice la conclusión de la lámina. «Problema» y «Algunos datos» nombran un tema, pero no dicen qué debe entender la audiencia.
:::

### P07 · Herramientas de IA para presentaciones
cubre: S3
fuentes: F-H-12, F-H-47
bloque: Texto + tabla comparativa

Varias herramientas usan IA para ayudarte con una presentación. Para este curso importa que sean gratuitas, así que el taller usa dos, y las dos se pueden combinar.

| | Gemini, sin plan pagado | Gamma, plan Free |
|---|---|---|
| Qué hace | Esquema, contenido y guion por chat; también genera diapositivas | Diseña diapositivas a partir de un prompt o de un esquema, hasta 10 por prompt |
| Límite | Un uso que se renueva cada cierto tiempo, con tope semanal | 400 créditos al registrarte, que no se recargan; cada acción gasta una cantidad distinta |
| Para tener en cuenta | Conviene llegar con el brief listo y no gastar intentos en pedidos vagos | No pide tarjeta, exporta a PDF, PPTX, PNG y Google Slides, y las láminas llevan la marca de Gamma |

Con ellas tienes dos caminos gratuitos [@F-H-12; @F-H-47]. En el primero, Gemini te ayuda con el esquema, el texto y el guion, y tú armas las láminas en Google Slides. En el segundo, pegas tu esquema ya revisado en Gamma para que diseñe las láminas, y después las revisas.

Si en tu empresa usan otro programa de presentaciones con un asistente incluido, el método del taller sirve igual: el mensaje, la estructura y la depuración no dependen de la herramienta. Los planes gratuitos cambian a menudo, así que antes de empezar revisa los límites vigentes de la que elijas.

### P08 · Paso 1: pide el esquema a Gemini
cubre: H1, S3
fuentes: F-M2-08, F-M2-13
bloque: Proceso paso a paso + actividad

Con tu brief listo, le pides a Gemini el esquema: la lista de las seis láminas, cada una con su título y su contenido principal. Para eso usas las partes de un prompt que ya conoces, el objetivo, el contexto (audiencia y propósito), la fuente (tus datos) y las expectativas (número de láminas y formato) [@F-M2-08]. Este es el prompt de Andrés:

```
Actúa como encargado de bodega que prepara una propuesta para su jefatura.
OBJETIVO: esquema de una presentación de 6 láminas.
AUDIENCIA: mi jefatura; conoce la bodega y le preocupan los costos y los reclamos.
MENSAJE CLAVE: si mantenemos 30 cajas de reserva, evitamos atrasos en los despachos.
DATOS: este mes hubo 40 despachos y 3 se atrasaron por falta de cajas; un pedido extra al mes alcanza para la reserva.
FORMATO: para cada lámina, un título que sea una oración con su conclusión y un máximo de 3 viñetas de una línea. La lámina 6 debe decir qué le pido a mi jefatura.
Usa solo estos datos. Si necesitas un dato que no te di, escribe [FALTA DATO] en vez de inventarlo.
```

El prompt ya trae restricciones que vas a trabajar en las próximas pantallas: títulos-oración, pocas viñetas y nada inventado [@F-M2-13]. Pedirlas desde el principio te ahorra trabajo de depuración, porque cada lámina parte más cerca de lo que necesitas. Igual, lo que entregue será un borrador que puede traer errores [@F-M2-08].

:::actividad Tu esquema
Escribe tu propio prompt con tu brief y pídele a Gemini el esquema de seis láminas. Guarda la respuesta tal como salió: al final la vas a comparar con tu versión depurada.
:::

### P09 · Paso 2: revisa el esquema contra tu mensaje
cubre: S2, C1, C2
fuentes: F-M2-13, F-M2-07
bloque: Lista de verificación (checklist) + ejemplo

El esquema que entrega la IA es un borrador. Antes de pasar a las láminas, revísalo contra tu brief con esta lista:

- [ ] Leídos en orden, los títulos cuentan la historia y llegan al mensaje clave.
- [ ] Ninguna lámina trata dos cosas.
- [ ] No hay láminas ni viñetas que dejen de apoyar la idea central.
- [ ] Cada cifra está en los datos que diste, y anoté dónde apareció [FALTA DATO].
- [ ] La última lámina dice qué esperas de la audiencia.

Es tentador aceptar el esquema porque trae las seis láminas pedidas. Que tenga el número correcto no significa que esté bien: la IA puede rellenar con láminas genéricas, como «Introducción», «Contexto» o «Conclusiones», que no dicen nada. Cada lámina tiene que ganarse su lugar [@F-M2-13].

Eso le pasó a Andrés. El esquema de Gemini traía una lámina titulada «Importancia de la logística en la empresa moderna», que no apoyaba su mensaje; la eliminó y dejó el problema y sus cifras en una lámina propia. También traía la viñeta «Los atrasos generan un 15 % de reclamos», un dato que él no había dado y que el modelo pudo inventar con total seguridad, así que la borró [@F-M2-07]. En la lámina 5 apareció [FALTA DATO] en el costo del pedido extra, y Andrés fue a preguntarlo a compras.

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

Con el esquema revisado, escribes el contenido de cada lámina. Las recomendaciones para presentaciones eficaces van en la misma dirección: pocas palabras por lámina y viñetas cortas, de una línea, que sirvan de guía a quien presenta y no de texto completo [@F-M2-14]. Cuando lo visual explica mejor que el texto, una imagen o un gráfico simple refuerza el mensaje, y las palabras tienen que ser las que tu audiencia entiende, sin jerga [@F-M2-13].

| Antes | Después |
|---|---|
| Título «Problema». «Durante el presente mes se ha podido observar que, debido a la falta de disponibilidad de cajas de embalaje en la bodega, se produjeron atrasos en tres despachos, lo que generó inconvenientes con los clientes afectados.» | Título «Este mes se atrasaron 3 despachos por falta de cajas». Viñetas: 3 de 40 despachos atrasados · Causa: no había cajas · 3 clientes afectados |

La versión de la derecha se lee en segundos. El detalle lo dices tú al presentar, y para eso está el guion del paso 5. La lámina apoya lo que dices, no lo reemplaza: si la audiencia está leyendo un párrafo, no te está escuchando.

Puedes pedirle a Gemini que haga el primer recorte: «Reduce el contenido de cada lámina a un máximo de 3 viñetas de una línea. Mantén los títulos». Después revisa que no se haya perdido un dato importante, porque al acortar también se puede borrar lo que sí importaba.

### P11 · Detecta las láminas sobrecargadas
cubre: C2, A1
fuentes: F-M2-14, F-M2-13
bloque: Escenario o clasificación por semáforo

Una lámina está **sobrecargada** cuando tiene más de lo que la audiencia puede captar de un vistazo. La señal más visible son los párrafos en lugar de viñetas de una línea. Otra es la letra pequeña: las recomendaciones de PowerPoint piden no bajar de 18 puntos [@F-M2-14]. También sobrecargan las imágenes que saturan en vez de reforzar el mensaje y el contenido que no apoya la idea de la lámina; una guía universitaria lo llama ruido y pide eliminar todo lo que no es señal [@F-M2-13]. La última señal son dos ideas que compiten en la misma lámina.

Cuando una lámina tiene demasiadas viñetas, achicar la letra para que quepan empeora las cosas. Lo que conviene es quedarse con las que apoyan la idea de la lámina y llevar el resto al guion, para decirlo en vez de mostrarlo.

:::actividad ¿Sobrecargada o lista?
Clasifica cada lámina y compara con la respuesta sugerida al final de cada línea.
1. Título-oración y tres viñetas de una línea. → Lista
2. Un párrafo de ocho líneas con letra de 12 puntos. → Sobrecargada
3. Un gráfico simple con los 3 atrasos del mes y un título que dice la conclusión. → Lista
4. Tres fotos de bodegas, un logo, cinco viñetas y una tabla. → Sobrecargada
5. Dos ideas: el problema de las cajas y una queja sobre el horario de los camiones. → Sobrecargada
:::

### P12 · Los errores del contenido generado
cubre: C2, S3
fuentes: F-M2-07, F-M1-05
bloque: Texto + recuadro destacado

Depurar no es solo quitar texto: también es corregir errores. El contenido que generan las herramientas de IA para presentaciones puede traer los mismos problemas que cualquier texto generado, y algunos propios de las imágenes:

- cifras y datos inventados, presentados con seguridad, como el «15 % de reclamos» que encontró Andrés [@F-M2-07];
- citas o referencias a estudios que no existen, o que existen y dicen otra cosa;
- afirmaciones genéricas que suenan bien, pero que no corresponden a tu caso;
- imágenes que no calzan, como una bodega que no se parece a la tuya, personas que no son de tu equipo o texto mal escrito dentro de la imagen [@F-M1-05].

La regla para una presentación es simple: cada dato tiene que poder respaldarse. Si viene de tus registros, revisa que coincida. Si viene de afuera, busca la fuente como aprendiste en el módulo 1. Si no puedes respaldarlo, sale. Una cifra inventada es peligrosa justamente porque se ve profesional: la audiencia la cree y puede repetirla, y si te preguntan de dónde salió y no lo sabes, pierdes credibilidad en toda la presentación.

:::ejemplo Camila revisa su lámina de cierre
Gamma le propuso a Camila una lámina final que decía «Reducción del 50 % en el tiempo de búsqueda de documentos». Ella no tenía cómo medirlo. La cambió por «Encontrar un documento sin revisar varias cajas», una afirmación que sí puede defender frente a la gerenta.
:::

### P13 · Paso 4: arma las láminas
cubre: H1, S3, A2
fuentes: F-H-47, F-H-12
bloque: Pestañas (tabs) con los dos caminos

Con el contenido depurado, llega el momento de armar las láminas por uno de los dos caminos gratuitos. En los dos, la herramienta arma y tú decides: ninguna presentación sale lista de una herramienta, todas pasan por tu depuración.

El primer camino es Google Slides. Abres una presentación en blanco con tu cuenta de Google, creas seis láminas y copias en cada una su título y sus viñetas depuradas. Eliges un diseño simple y lo aplicas a todas por igual. Si una lámina necesita un gráfico o una imagen, la agregas tú y revisas que refuerce la idea.

El segundo camino es Gamma Free:
1. Crea una cuenta gratuita; no pide tarjeta [@F-H-47].
2. Pega tu esquema depurado e indica que son 6 láminas.
3. Revisa el resultado con la lista de la pantalla 9, porque la herramienta puede agregar texto o imágenes que no pediste.
4. Exporta a Google Slides, PPTX o PDF si necesitas editar o entregar el archivo.

Como los 400 créditos del plan Free no se recargan, conviene llegar a Gamma con el esquema ya revisado y no gastarlos en pruebas [@F-H-47]. Y si solo tienes celular, puedes hacer el esquema, el contenido y el guion en la app de Gemini, que también genera diapositivas sin plan pagado, y dejar el ajuste del diseño para cuando tengas un computador [@F-H-12].

:::actividad Tus seis láminas
Arma tus seis láminas por el camino que prefieras. Si la presentación es para tu trabajo y usa datos internos, revisa qué permite tu empresa antes de subir esa información a una herramienta externa.
:::

### P14 · Cuidar la imagen profesional
cubre: A2
fuentes: F-M2-14, F-M2-02
bloque: Lista de verificación (checklist) interactiva

Tu presentación habla de ti antes de que digas una palabra. Cuidar la imagen profesional no exige saber de diseño: exige que la presentación se lea bien y se vea ordenada. Las recomendaciones de PowerPoint piden letra de 18 puntos o más, contraste entre el fondo y el texto, e imágenes que refuercen el mensaje sin saturar [@F-M2-14]. La guía de lenguaje claro del Senado suma la letra sin adornos [@F-M2-02]. A eso, este curso agrega cuatro cuidados propios: un diseño parejo, nada de jerga, la ortografía revisada y las imágenes revisadas.

- [ ] Ninguna letra está bajo 18 puntos.
- [ ] Hay contraste entre el fondo y el texto: letra oscura sobre fondo claro, o al revés.
- [ ] La letra es sin adornos y es la misma en todas las láminas.
- [ ] Las imágenes refuerzan el mensaje; no decoran ni saturan.
- [ ] Los colores y la ubicación de los títulos se repiten en todas las láminas.
- [ ] No hay jerga ni siglas sin explicar.
- [ ] La ortografía de títulos y viñetas está revisada.
- [ ] Ninguna imagen tiene texto mal escrito, logos de otras marcas o personas reales sin permiso.

Más efectos tampoco hacen una presentación más profesional. Animaciones, muchos colores y fondos recargados distraen del mensaje; una presentación sobria y legible se ve mejor. Las imágenes generadas con IA y sus derechos se ven en el módulo 4.

:::ejemplo El fondo de Andrés
Gamma le propuso a Andrés un fondo con una foto de una bodega y el texto blanco encima. En la sala de reuniones, con la luz encendida, las viñetas no se leían. Cambió a un fondo claro con letra oscura.
:::

### P15 · Paso 5: el guion
cubre: H1, A1
fuentes: F-M2-14, F-M2-08
bloque: Texto + escenario o conversación de ejemplo

El **guion** es lo que dices mientras muestras cada lámina. Las viñetas son la guía de quien presenta; el guion es la explicación completa. Por eso la lámina puede tener pocas palabras: el resto lo pones tú. Puedes pedirle a Gemini un primer borrador: «Para cada una de estas 6 láminas, escribe un guion de 2 o 3 oraciones, en primera persona, con un tono profesional y cercano. No repitas las viñetas palabra por palabra: explícalas. Usa solo estos datos». Desde ahí, el trabajo es tuyo:

1. Reescribe el guion con tus palabras, como hablas tú, porque un guion que no suena a ti se nota.
2. Revisa que los datos que menciona sean los mismos de las láminas [@F-M2-08].
3. Ensaya en voz alta, mirando las viñetas y no un texto leído.
4. Si tropiezas en una frase, cámbiala.

Lo que sí conviene evitar es leer las láminas en voz alta. Si el guion es igual a lo que dice la lámina, la audiencia lee más rápido de lo que hablas y deja de escucharte. Las recomendaciones para presentar piden ensayar para hablar a partir de las viñetas, no leerlas [@F-M2-14].

:::ejemplo Guion de la lámina 3 de Andrés
Lámina: «Este mes se atrasaron 3 despachos por falta de cajas». Guion: «De los 40 despachos del mes, tres salieron tarde. En los tres casos fue lo mismo: no teníamos cajas medianas. Los clientes nos llamaron para reclamar, y tuvimos que explicarles el atraso».
:::

### P16 · Depuración crítica final
cubre: C2, C1, A1
fuentes: F-M2-13, F-M2-14
bloque: Lista de verificación (checklist)

Antes de presentar o entregar, haz una revisión completa. Esta lista reúne todo el taller, desde el mensaje hasta el guion [@F-M2-13; @F-M2-14]:

- [ ] El mensaje clave es una oración y aparece en la lámina 1.
- [ ] Los seis títulos, leídos en orden, cuentan la historia.
- [ ] Cada lámina tiene una sola idea y apoya el mensaje.
- [ ] La lámina 6 dice qué esperas de la audiencia.
- [ ] Las viñetas son de una línea y no hay párrafos.
- [ ] Cada dato está respaldado por tus registros o por una fuente, y no quedó ningún [FALTA DATO] sin resolver.
- [ ] La letra es de 18 puntos o más, hay buen contraste y el diseño es parejo.
- [ ] El guion está en tus palabras y lo ensayaste.

De todos los puntos, el segundo es el más rápido de revisar y el que más dice. Si los títulos son oraciones con la conclusión de cada lámina, leerlos en orden toma menos de un minuto y te muestra si la estructura funciona. Si en algún punto la historia se corta, ahí falta o sobra una lámina.

:::comprueba
Andrés está por presentar y la lámina 5 todavía dice [FALTA DATO] en el costo del pedido extra. ¿Qué le conviene hacer?
- a) Presentarla así, porque su jefatura va a entender que falta un dato
- **b) Preguntar el costo en compras y completarlo antes de presentar**
- c) Poner un costo aproximado para que la lámina se vea completa
Retroalimentación: Un [FALTA DATO] es un aviso de que hay que conseguir la información, no de que haya que inventarla. Un costo aproximado sin respaldo es un dato inventado con buena presentación.
:::

### P17 · Cierre: tu presentación para el Hito 2
cubre: C1, C2, H1
fuentes: F-M2-13, F-M2-14
bloque: Texto + actividad de cierre (entrega)

En este taller construiste una presentación completa. Definiste propósito, audiencia y mensaje, ordenaste una historia en seis láminas y escribiste títulos que dicen la conclusión [@F-M2-13]. Le pediste el esquema a la IA y lo depuraste: quitaste la sobrecarga, corregiste los datos sin respaldo y cuidaste cómo se ve [@F-M2-14]. Al final escribiste el guion con tus palabras.

La IA te ahorró tiempo en el borrador. Lo que hace buena a tu presentación es lo que decidiste quitar, corregir y decir con tus palabras, y por eso la entrega muestra las dos versiones, la inicial y la final.

:::actividad Tu presentación de 6 láminas
Con el problema u oportunidad que elegiste en el Hito 1:
1. Escribe tu brief: propósito, audiencia y mensaje clave en una oración.
2. Pide a Gemini el esquema de seis láminas con títulos-oración.
3. Depura el esquema con la lista de la pantalla 9.
4. Arma las láminas en Google Slides o en Gamma Free.
5. Revisa la imagen con la lista de la pantalla 14, y escribe y ensaya el guion.
6. Haz la depuración final de la pantalla 16.
7. Pon lado a lado el esquema inicial y tu versión final, y anota tres cosas que eliminaste, una que corregiste y una que agregaste tú.
:::

### Ideas clave

1. Antes de abrir una herramienta se definen el propósito, la audiencia y el mensaje: juntos forman el brief.
2. El mensaje clave es una oración completa que afirma algo sobre el tema; cada lámina debe apoyarlo.
3. Una presentación es una historia: para quien decide, sirve el hilo qué debo saber, por qué me importa y qué debo hacer, y la última lámina dice qué esperas de la audiencia.
4. Cada lámina tiene una sola idea y su título dice la conclusión; leídos en orden, los títulos cuentan la historia.
5. La IA propone esquema, contenido y guion; con Gemini y Gamma Free se puede hacer gratis, y el método sirve igual con la herramienta que use tu empresa.
6. Depurar es quitar la sobrecarga (párrafos, letra pequeña, imágenes que saturan, lo que no apoya el mensaje) y corregir los datos sin respaldo.
7. Las viñetas guían a quien presenta: el guion se dice con palabras propias y se ensaya, no se lee.

### Referencias bibliográficas

- Carnegie Mellon University. (s. f.). *Executive summaries*. Student Academic Success Center. https://www.cmu.edu/student-success/other-resources/handouts/comm-supp-pdfs/executive-summaries.pdf
- Gamma. (s. f.). *Planes y precios*. https://gamma.app/es/pricing
- Google. (s. f.). *Límites de las aplicaciones de Gemini y cambios a planes superiores*. https://support.google.com/gemini/answer/16275805?hl=es
- Hirst, C. y Jepeal, S. (s. f.). *Slide design (CommKit)*. MIT Nuclear Science and Engineering Communication Lab. https://mitcommlab.mit.edu/nse/commkit/slide-design
- Microsoft. (s. f.). *Sugerencias para crear y ofrecer una presentación eficaz*. Microsoft Support. https://support.microsoft.com/es-es/office/sugerencias-para-crear-y-presentar-una-presentación-eficaz-f43156b0-20d2-4c51-8345-0c337cefb88b
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OpenAI. (s. f.). *Image generation*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/image-generation
- Senado de Chile. (2025). *Guía de lenguaje claro para el ámbito legislativo*. https://cdn.senado.cl/portal-senado-produccion/s3fs-public/2025-09/guia-de-lenguaje-claro-para-el-ambito-legislativo.pdf


## M2-AE4 · Planillas de cálculo con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-49, F-H-20
bloque: Texto + imagen

Las planillas de cálculo están en casi cualquier oficina: inventarios, registros de facturas, asistencia, gastos. Escribir una fórmula puede costar si no lo haces seguido, y ahí la IA ayuda: le describes lo que necesitas y te propone la fórmula. El problema es que una fórmula equivocada no avisa, porque entrega un número que parece correcto.

El aprendizaje esperado es este: Resolver análisis en planillas de cálculo con fórmulas generadas por IA, verificando su exactitud. Al final deberías poder generar una fórmula correcta para un problema concreto, comprobar el resultado con datos de prueba y corregir los errores que encuentres.

Si en tu trabajo tienes Gemini dentro de Hojas de cálculo de Google o Copilot dentro de Excel, puedes usarlos, pero son funciones de pago: Gemini en Hojas de cálculo viene con el plan Google AI Pro, y Copilot en Excel, con los planes pagados de Microsoft 365 [@F-H-49; @F-H-20]. Por eso este tema usa un camino gratuito. Pides la fórmula a Gemini en el chat, la pegas en Hojas de cálculo de Google y la compruebas con datos de práctica. Si usas Excel, los pasos son casi los mismos.

Vas a trabajar con una planilla de inventario de Andrés, con datos ficticios. Lo que aprendas sirve igual para una planilla como la de Camila, que registra facturas, órdenes de compra y contratos. Y hay una idea que te va a acompañar en todo el tema: como viste en el tema 1, un asistente puede entregar una respuesta errónea con total seguridad, así que aquí la IA propone y tú compruebas.

### P02 · Cómo se arma una fórmula
cubre: S1
fuentes: F-M2-16, F-M2-15
bloque: Texto + imagen de una planilla con celdas rotuladas

Antes de pedir fórmulas, conviene repasar cómo se leen. Una planilla tiene columnas, nombradas con letras, y filas, numeradas. Cada celda se nombra por su columna y su fila: D2 es la columna D, fila 2. Un **rango** es un grupo de celdas, como C2:C7, que va de C2 a C7; la ayuda de Google lo llama intervalo [@F-M2-15]. Una fórmula siempre empieza con el signo =, y =D2*E2, por ejemplo, multiplica lo que hay en D2 por lo que hay en E2. Una **función** es una operación con nombre, como SUMAR.SI o BUSCARV, y lo que va entre sus paréntesis son sus argumentos.

En la ayuda de Google en español, los argumentos se separan con punto y coma: =SUMAR.SI(C2:C7;"EPP";F2:F7) [@F-M2-16]. Según la configuración regional de la planilla, el separador puede ser la coma. Un error común es copiar una fórmula que la IA entregó con comas en una planilla que usa punto y coma, o al revés. La fórmula no funciona aunque esté bien pensada, y no es un error de lógica, sino de escritura. Lo más simple es decirle al asistente desde el principio qué separador usa tu planilla.

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

Vas a trabajar con una tabla pequeña de datos de práctica: datos ficticios, pocos y conocidos, con los que puedes calcular a mano el resultado correcto. Así, cuando una fórmula dé un número, sabrás si está bien. Cópiala en una hoja nueva de Hojas de cálculo de Google desde la celda A1, y escribe los números sin punto de miles: 3500 y no 3.500. EPP significa elementos de protección personal.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Código | Producto | Categoría | Unidades | Precio unitario |
| 2 | P01 | Guantes de seguridad | EPP | 40 | 3500 |
| 3 | P02 | Casco | EPP | 12 | 9900 |
| 4 | P03 | Cinta de embalaje | Embalaje | 150 | 1200 |
| 5 | P04 | Caja mediana | Embalaje | 80 | 800 |
| 6 | P05 | Zapatos de seguridad | EPP | 8 | 24990 |
| 7 | P06 | Film stretch | Embalaje | 25 | 6500 |

Hay dos razones para no partir con la planilla real. La investigación sobre errores en planillas muestra que son comunes y no triviales [@F-M2-20], y probar primero con una tabla en que conoces las respuestas permite detectarlos antes de que lleguen a un informe. Además, una tabla ficticia evita pegar información de tu empresa en el chat. Cuando pases a tu planilla real, trabaja sobre una copia sin datos sensibles. Este método de datos de práctica es una recomendación del curso.

:::actividad Prepara tu planilla
1. Copia la tabla en una hoja nueva y nómbrala «Práctica M2».
2. Revisa celda por celda que cada valor quedó igual.
:::

### P04 · Referencias relativas, absolutas y mixtas
cubre: S1, C1
fuentes: F-M2-18, F-M2-15
bloque: Texto + imagen animada de una fórmula copiada hacia abajo

Cuando copias una fórmula a otra celda, sus referencias pueden moverse o quedarse fijas, y esa diferencia explica muchos errores. La referencia **relativa** es la predeterminada y cambia al copiar: si en F2 escribes =D2*E2 y la copias a F3, queda =D3*E3, que es justo lo que necesitas para cada producto. La referencia **absoluta** no cambia, porque el signo $ delante de la columna y de la fila la ancla: $D$2 sigue siendo D2 donde la copies. Entre ambas está la mixta, que fija solo la columna ($D2) o solo la fila (D$2). En Excel, la tecla F4 recorre los tres tipos [@F-M2-18].

La absoluta se usa cuando algo no debe moverse, como un rango que todas las fórmulas tienen que mirar completo. Mira qué pasa con una suma por categoría que se copia de I2 a I3:

| Fórmula en I2 | Al copiarla a I3 |
|---|---|
| =SUMAR.SI(C2:C7;H2;F2:F7) | =SUMAR.SI(C3:C8;H3;F3:F8): el rango se movió |
| =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7) | =SUMAR.SI($C$2:$C$7;H3;$F$2:$F$7): el rango quedó fijo |

En la segunda fórmula, H2 es relativa a propósito: cada fila del resumen tiene que mirar su propia categoría. La ayuda de Google recomienda lo mismo para BUSCARV, con referencias absolutas para que el intervalo no se mueva al copiar [@F-M2-15]. Antes de copiar cualquier fórmula, pregúntate qué debe moverse y qué no. Lo que no debe moverse lleva $.

### P05 · SUMAR.SI: sumar con una condición
cubre: S1, C1
fuentes: F-M2-16
bloque: Texto + ejemplo guiado

SUMAR.SI suma solo los valores que cumplen una condición. Su forma es =SUMAR.SI(intervalo; criterio; [intervalo_suma]). El intervalo es dónde se revisa la condición, por ejemplo, la columna de categorías. El criterio es la condición: si es texto, va entre comillas dobles, como "EPP", y si es un número puede llevar un operador, como ">100". El intervalo_suma es lo que se suma; va entre corchetes porque es opcional, y si no lo pones se suman las celdas del primer intervalo.

| Pregunta | Fórmula | Resultado |
|---|---|---|
| ¿Cuántas unidades de EPP hay? | =SUMAR.SI(C2:C7;"EPP";D2:D7) | 60 |
| ¿Cuántas unidades suman los productos con más de 100 unidades? | =SUMAR.SI(D2:D7;">100") | 150 |

Compruébalo a mano. Las unidades de EPP son 40 + 12 + 8 = 60, y el único producto con más de 100 unidades es la cinta, con 150.

SUMAR.SI admite un solo criterio [@F-M2-16]. Si necesitas dos condiciones a la vez, por ejemplo EPP y más de 10 unidades, hace falta otra función: pídesela a la IA diciendo que tienes dos condiciones, y compruébala igual.

:::error Criterio de texto sin comillas
=SUMAR.SI(C2:C7;EPP;D2:D7), sin comillas, no busca la palabra «EPP»: la planilla la interpreta de otra forma y el resultado falla. Los criterios de texto van entre comillas dobles.
:::

### P06 · BUSCARV: traer un dato de otra columna
cubre: S1, C1
fuentes: F-M2-15
bloque: Texto + ejemplo guiado

BUSCARV busca un valor en la primera columna de un rango y devuelve el valor de la misma fila en la columna que le indiques [@F-M2-15]. Sirve, por ejemplo, para escribir un código y obtener su precio. Su forma es =BUSCARV(valor_buscado; intervalo; índice; está_ordenado).

El valor_buscado es lo que buscas, como el código P05. El intervalo es la tabla donde buscar, y su primera columna tiene que ser la que contiene ese valor. El índice es el número de la columna del intervalo que quieres traer, contado desde la primera columna del intervalo y no desde la A de la hoja. En está_ordenado escribes FALSO para pedir una coincidencia exacta.

Con tus datos de práctica, =BUSCARV("P05";A2:E7;5;FALSO) devuelve 24990. El intervalo A2:E7 tiene cinco columnas: Código, Producto, Categoría, Unidades y Precio unitario, en ese orden. El índice 5 trae el precio; con índice 4 traería las unidades, que son 8.

La ayuda de Google destaca dos detalles. BUSCARV devuelve solo la primera coincidencia, así que si un código está repetido verás un solo resultado. Y si omites el último argumento, la función supone VERDADERO y busca una coincidencia aproximada, que exige que la primera columna esté ordenada; si no lo está, el resultado puede ser incorrecto. Por eso se recomienda escribir siempre FALSO [@F-M2-15].

:::comprueba
En =BUSCARV("P03";A2:E7;2;FALSO), ¿qué devuelve la fórmula?
- a) 150
- **b) Cinta de embalaje**
- c) Embalaje
Retroalimentación: El índice 2 trae la segunda columna del intervalo, que es Producto. Para las unidades, el índice sería 4.
:::

### P07 · Cómo pedirle una fórmula a la IA
cubre: S2
fuentes: F-M2-10, F-M2-15
bloque: Texto + imagen de un prompt con sus partes destacadas

La IA no ve tu planilla. Si pides «una fórmula para sumar los EPP», tiene que adivinar dónde están los datos. La documentación de los proveedores recomienda dar instrucciones específicas, con contexto de referencia y el formato de respuesta que esperas [@F-M2-10], y en una fórmula eso significa describir con precisión cómo está armada tu tabla:

| Dile… | Ejemplo |
|---|---|
| Qué programa usas y en qué idioma | «Hojas de cálculo de Google, en español» |
| Qué separador usa | «Usa punto y coma para separar argumentos» |
| Qué hay en cada columna y desde qué fila | «A: código; C: categoría; F: valor total; datos de la fila 2 a la 7» |
| Dónde va la fórmula y adónde la copiarás | «Va en I2 y la voy a copiar a I3» |
| Qué resultado esperas | «La suma del valor total de la categoría escrita en H2» |
| Cómo vienen los datos | «Puede haber espacios de más en los códigos» |
| Qué formato quieres | «Solo la fórmula y una explicación de cada argumento» |

Decir dónde va la fórmula y hacia dónde la vas a copiar le permite al asistente decidir qué referencias deben ser absolutas. Avisar si los datos pueden venir sucios también importa, porque un espacio de más o un número guardado como texto rompen las búsquedas [@F-M2-15]. Puedes pegar las primeras filas de tu tabla de práctica, que son ficticias; con tu planilla real, basta con los encabezados.

Todo eso cabe en una plantilla que puedes guardar en tu biblioteca de prompts: «Uso [programa] en español, con [separador] como separador. Mis datos están en [rango]: [qué hay en cada columna]. Necesito una fórmula para [resultado], que va en [celda] y que voy a copiar a [celdas]. Entrega la fórmula y explica cada argumento».

### P08 · Problema 1: el valor total de cada producto
cubre: H1, C1, S2
fuentes: F-M2-18, F-M2-08
bloque: Proceso paso a paso + actividad

Andrés necesita saber cuánto vale en pesos el stock de cada producto, es decir, las unidades por el precio unitario.

1. Pide la fórmula a Gemini: «Uso Hojas de cálculo de Google en español, con punto y coma como separador. En la columna D tengo unidades y en la E, precio unitario, de la fila 2 a la 7. Necesito en la columna F el valor total de cada producto. La fórmula va en F2 y la copiaré hasta F7. Entrega la fórmula y explica cada parte».
2. Escribe en F1 el encabezado «Valor total».
3. Pega la fórmula en F2. La respuesta esperada es =D2*E2.
4. Cópiala hasta F7, arrastrando la esquina de la celda o con copiar y pegar.
5. Comprueba con un cálculo a mano al menos dos filas.

Para la fila 2, el cálculo es 40 × 3500 = 140000, y para la fila 6, 8 × 24990 = 199920. Estos son los resultados esperados en toda la columna:

| Fila | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Valor total | 140000 | 118800 | 180000 | 64000 | 199920 | 162500 |

Aquí la referencia relativa trabaja a tu favor: al copiar, cada fila multiplica sus propias celdas [@F-M2-18]. Si el asistente te da una fórmula escrita de otra manera, no la descartes de inmediato; léela, pídele que explique cada parte y compruébala con los resultados de la tabla [@F-M2-08].

:::actividad Revisa la copia
Haz clic en F5 y mira la fórmula en la barra de fórmulas. Tiene que decir =D5*E5; si dice otra cosa, la copia no se hizo bien. Revisar la fórmula, y no solo el resultado, es lo que hace la diferencia.
:::

### P09 · Verificar con datos de prueba
cubre: S3, C2, A1
fuentes: F-M2-20, F-M2-19
bloque: Proceso (process block) en 4 pasos

Comprobar una fórmula es más que mirar si el número se ve razonable. Este curso propone un método de cuatro pasos con datos de prueba:

1. Calcula a mano uno o dos casos; si la fórmula da otra cosa, hay un error.
2. Prueba un caso extremo: cambia por un momento un dato a 0 o deja una celda vacía, y mira si el resultado cambia como esperabas o si aparece un error.
3. Cambia un dato y observa. Si subes las unidades de P01 de 40 a 41, el valor total debería subir exactamente 3500; si no cambia, la fórmula no está mirando esa celda.
4. Revisa la fórmula celda por celda: haz clic en algunas celdas copiadas y lee si apuntan a las celdas correctas.

El último paso tiene respaldo en la investigación. Después de años de estudios sobre errores en planillas, la técnica que ha mostrado eficacia es la inspección celda por celda [@F-M2-20]. Los programas también ayudan: Excel, por ejemplo, marca las fórmulas que no siguen el patrón de sus vecinas, los rangos que omiten celdas con datos y las referencias a celdas vacías [@F-M2-19]. Después de cada prueba, devuelve los datos a su valor original. Esa costumbre de no aceptar un resultado que no comprobaste es lo que llamamos **rigor numérico**.

:::error «Si no aparece un mensaje de error, la fórmula está bien»
Los errores más peligrosos no muestran ningún aviso: entregan un número equivocado con buen aspecto. Un mensaje de error es fácil de ver; una suma que omite una fila, no.
:::

### P10 · Problema 2: una tabla resumen con SUMAR.SI
cubre: H1, C1
fuentes: F-M2-16, F-M2-18
bloque: Proceso paso a paso + actividad

La jefatura de Andrés quiere una tabla pequeña con el valor total del stock por categoría. Para armarla, escribe en H1 «Categoría» y en I1 «Valor total», y debajo, en H2 y H3, los nombres Embalaje y EPP.

1. Pide la fórmula a Gemini con la plantilla de la pantalla 7: «… En C tengo la categoría y en F el valor total, de la fila 2 a la 7. En H2 y H3 tengo los nombres de las categorías. Necesito en I2 la suma del valor total de la categoría de H2. Voy a copiar la fórmula a I3».
2. Pega la fórmula en I2 y cópiala a I3.
3. Calcula a mano los resultados esperados.
4. Compara, y aunque los dos coincidan, revisa la fórmula de I3: los rangos tienen que seguir siendo C2:C7 y F2:F7.

Los resultados esperados son 406500 para Embalaje (180000 + 64000 + 162500) y 458720 para EPP (140000 + 118800 + 199920). La fórmula que esperas es =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7), con los rangos fijos y la categoría relativa, porque al copiarla a I3 tiene que pasar a H3, la siguiente categoría [@F-M2-16; @F-M2-18]. Los rangos de datos, en cambio, no deben moverse.

:::actividad ¿Qué te propuso la IA?
Anota en tu bitácora la fórmula exacta que te dio Gemini y si usó el signo $ en los rangos. Si no lo usó, la siguiente pantalla te muestra qué puede pasar.
:::

### P11 · Error de referencia: el rango que se mueve
cubre: C2, S1
fuentes: F-M2-18, F-M2-15
bloque: Escenario + comparación antes y después

Supón que la IA te dio la fórmula sin el signo $: =SUMAR.SI(C2:C7;H2;F2:F7). En I2, para Embalaje, da 406500, que es correcto. Pero al copiarla a I3 se convierte en =SUMAR.SI(C3:C8;H3;F3:F8). El rango bajó una fila y dejó fuera la fila 2, que es un EPP, los guantes. El resultado es 318720 en vez de 458720.

Lo engañoso es que la primera fila del resumen está bien. Si solo compruebas I2, no ves el error, y el número de I3 parece razonable: ningún mensaje avisa. Por eso un error común es comprobar solo la primera celda. Los errores de referencia aparecen al copiar, así que siempre se revisa al menos una celda copiada y se lee su fórmula en la barra [@F-M2-18].

La corrección es fijar los rangos con $, para que no se muevan al copiar: =SUMAR.SI($C$2:$C$7;H2;$F$2:$F$7). La ayuda de Google recomienda lo mismo para BUSCARV, como viste en la pantalla 4 [@F-M2-15].

:::actividad Provoca el error y corrígelo
En tu hoja de práctica, escribe en I2 la fórmula sin $ y cópiala a I3. Comprueba que I3 da 318720 y no 458720. Luego corrige la fórmula con $, cópiala de nuevo y anota en tu bitácora la fórmula antes y después, y cómo detectaste el error.
:::

### P12 · Problema 3: buscar un precio con BUSCARV
cubre: H1, C1
fuentes: F-M2-15
bloque: Proceso paso a paso + actividad

Andrés quiere escribir un código en una celda y ver al lado el precio de ese producto, para responder rápido a ventas.

1. En K1 escribe «Código buscado», en L1 «Precio» y en K2 el código P05.
2. Pide la fórmula a Gemini: «Uso Hojas de cálculo de Google en español, con punto y coma. En A2:A7 tengo códigos de producto y en E2:E7, precios. Quiero que en L2 aparezca el precio del código que escribo en K2. Necesito coincidencia exacta. Entrega la fórmula y explica cada argumento».
3. Pega la fórmula en L2. La respuesta esperada es =BUSCARV(K2;$A$2:$E$7;5;FALSO).
4. Comprueba que el precio de P05 sea 24990, el mismo de la tabla.
5. Prueba otros códigos en K2: P01 tiene que dar 3500, P04 tiene que dar 800 y P09, que no existe, tiene que mostrar un error de valor no encontrado [@F-M2-15].

El código P09 es un dato de prueba a propósito: con él compruebas que la fórmula no inventa un precio cuando el código no está. La misma idea sirve en un registro de facturas como el de Camila, donde buscar un número de factura que no existe debería dar un error y no el monto de otra.

:::actividad Lee la explicación con lupa
Compara la explicación de Gemini con lo que viste en la pantalla 6. Revisa si dijo que el índice 5 corresponde a la quinta columna del intervalo y si explicó por qué el último argumento es FALSO. Anota cualquier parte de la explicación que no coincida.
:::

### P13 · Errores de lógica en BUSCARV
cubre: C2
fuentes: F-M2-15
bloque: Pestañas (tabs) con cuatro errores

Un **error de lógica** es una fórmula bien escrita que no hace lo que necesitas. Con BUSCARV hay cuatro frecuentes, y los cuatro aparecen en la ayuda de Google [@F-M2-15].

El primero es omitir el último argumento. =BUSCARV(K2;$A$2:$E$7;5) parece igual a la fórmula correcta, pero sin FALSO busca una coincidencia aproximada, y si la primera columna no está ordenada puede devolver el dato de otro producto sin avisar. No des por hecho que la IA siempre lo incluye: una fórmula sin FALSO puede funcionar con tus datos de práctica, que están ordenados, y fallar con otros. Revisa el último argumento cada vez.

El segundo es un índice mayor que las columnas del intervalo. =BUSCARV(K2;$A$2:$E$7;6;FALSO) pide la sexta columna, pero A:E tiene cinco, y el resultado es el error #REF!.

El tercero es contar el índice desde la A de la hoja. Si el intervalo empieza en B, como B2:E7, la columna B es la 1, y el índice 5 que en A2:E7 traía el precio ahora pide una columna que no existe en el intervalo.

El cuarto son los datos sucios. Si en la tabla el código quedó escrito «P05 », con un espacio al final, buscar «P05» no lo encuentra y aparece un error de valor no encontrado. También fallan los números o las fechas guardados como texto.

:::comprueba
=BUSCARV(K2;$A$2:$E$7;6;FALSO) muestra #REF!. ¿Qué lo corrige?
- a) Cambiar FALSO por VERDADERO
- **b) Usar un índice que exista en el intervalo, por ejemplo 5 para el precio**
- c) Quitar los signos $
Retroalimentación: El error #REF! aparece porque el índice 6 es mayor que las cinco columnas de A2:E7. El índice debe estar dentro del intervalo.
:::

### P14 · Leer los mensajes de error
cubre: S3, C2, H1
fuentes: F-M2-19, F-M2-15
bloque: Tabla + tarjetas (flashcards)

Cuando una fórmula falla de forma visible, la planilla muestra un valor de error. Cada uno da una pista de qué revisar, aunque los nombres cambian un poco entre programas [@F-M2-15; @F-M2-19]:

| Error | Qué suele significar | Qué revisar |
|---|---|---|
| #N/A en Sheets, #N/D en Excel | No se encontró el valor buscado | Si el valor existe, o si hay espacios de más o números como texto |
| #REF! | Una referencia no es válida, por ejemplo un índice mayor que las columnas del intervalo | El índice de BUSCARV y los rangos |
| #VALUE! en Sheets, #¡VALOR! en Excel | Se mezclan tipos de datos distintos, como texto donde se espera un número | Celdas con texto en una columna de números |
| #¡DIV/0! en Excel | Se está dividiendo por cero o por una celda vacía | La celda del divisor |
| #¿NOMBRE? en Excel | El nombre de la función está mal escrito | Que la función esté bien escrita, por ejemplo BUSCARV |

Puedes pegar el error en el chat y preguntar qué significa: «Mi fórmula =BUSCARV(K2;$A$2:$E$7;6;FALSO) da #REF!. ¿Por qué?». La explicación te orienta, pero la compruebas tú con la tabla. En Excel para Windows existe además «Evaluar fórmula», que muestra paso a paso cómo se calcula una fórmula anidada; no está disponible en el celular [@F-M2-19].

:::comprueba
Andrés escribe P02 en K2 y aparece #N/A. En la tabla, el código P02 existe. ¿Qué revisa primero?
- a) Que el índice no sea mayor que las columnas
- **b) Que el código de la tabla no tenga espacios de más o esté guardado de otra forma**
- c) Que la función esté bien escrita
Retroalimentación: #N/A indica que no encontró el valor. Si el código existe, lo más probable es que haya una diferencia invisible, como un espacio al final.
:::

### P15 · Filtros para revisar subconjuntos
cubre: H1, S3
fuentes: F-M2-17
bloque: Proceso paso a paso + actividad

Los **filtros** ocultan las filas que no quieres ver, sin borrarlas [@F-M2-17]. Sirven para trabajar con una parte de los datos y también para comprobar el resultado de una fórmula. En Hojas de cálculo de Google se crean así:

1. Selecciona tu tabla de datos, de A1 a F7.
2. Ve a Datos > Crear un filtro; aparece un ícono en cada encabezado.
3. En el encabezado Categoría, filtra por valores y deja marcado solo EPP.
4. Ahora ves solo los guantes, el casco y los zapatos.

Con el filtro puesto, suma a mano los valores totales visibles: 140000 + 118800 + 199920. Si da 458720, lo mismo que tu fórmula en I3, tienes dos caminos distintos que llegan al mismo número, y esa es una de las mejores defensas contra una fórmula que parece correcta. También puedes ordenar la tabla por una columna, por ejemplo por unidades de menor a mayor, para ver de inmediato qué productos tienen poco stock. Si necesitas mirar los datos de distintas formas, las vistas de filtro permiten guardar y compartir varios filtros [@F-M2-17]. Cuando termines, quita el filtro para volver a ver todas las filas.

:::actividad Dos caminos, un resultado
Filtra la categoría Embalaje y suma a mano los valores visibles. Compara con tu fórmula en I2 y anota en tu bitácora si coinciden y, si no, cuál de los dos caminos tenía el error.
:::

### P16 · Pide la explicación, pero no la creas a ciegas
cubre: S2, A2, C2
fuentes: F-M2-07, F-M2-08
bloque: Texto + escenario o conversación de ejemplo

Pedirle a la IA que explique cada argumento de la fórmula es una buena práctica: te ayuda a entenderla y a ver si apunta a lo que necesitas. Pero la explicación también es texto generado. Un modelo puede dar una respuesta errónea con seguridad, incluso con un razonamiento que parece lógico y que justifica la respuesta incorrecta [@F-M2-07], y los propios proveedores piden revisar lo que entregan sus asistentes [@F-M2-08]. Por eso la explicación se compara con lo que sabes:

| La IA dice… | Tú compruebas… |
|---|---|
| «El índice 4 trae el precio» | Cuentas las columnas del intervalo: la 4 es Unidades, no Precio |
| «Esta fórmula suma todos los EPP» | Filtras EPP y sumas a mano |
| «No hace falta el último argumento» | Recuerdas que sin FALSO la coincidencia es aproximada |

Una explicación ordenada no prueba que la fórmula sea correcta. Lo que lo prueba es que el resultado coincida con un cálculo que hiciste tú. A esa actitud se le llama **desconfianza metódica**: no rechazar la ayuda de la IA, pero no aceptar un resultado hasta comprobarlo.

:::ejemplo La explicación convincente
Andrés pidió una fórmula para el precio del código de K2. Gemini le dio =BUSCARV(K2;A2:E7;4;FALSO) y explicó que «el índice 4 corresponde al precio unitario». La explicación sonaba segura. Andrés probó con P05 y el resultado fue 8, las unidades. Contó las columnas, corrigió el índice a 5 y le avisó al asistente para que revisara su explicación.
:::

### P17 · Rigor numérico y desconfianza metódica
cubre: A1, A2
fuentes: F-M2-20, F-M1-02
bloque: Texto + lista de verificación (checklist)

Los errores en planillas son comunes y no triviales; así lo resume la investigación sobre el tema [@F-M2-20]. Cuando una planilla alimenta un pedido, un pago a un proveedor o un informe a la jefatura, un error se convierte en un problema real. Por eso el rigor numérico, que es cuidar que cada número sea exacto y que puedas explicar de dónde sale, va junto con la desconfianza metódica ante lo que propone la IA. Antes de usar una fórmula generada con IA, revisa esta lista:

- [ ] Le di a la IA el programa, el separador, las columnas, las filas y la celda de destino.
- [ ] Entiendo qué hace cada argumento de la fórmula.
- [ ] Calculé a mano al menos un caso y coincide.
- [ ] Revisé una celda copiada, y las referencias que no debían moverse tienen $.
- [ ] Probé un caso que no debería encontrarse o un dato en 0.
- [ ] Comprobé con un camino distinto, como un filtro.
- [ ] Revisé los avisos de error de la planilla.
- [ ] No pegué en el chat datos personales ni información confidencial: usé datos ficticios, una copia sin datos sensibles o solo los encabezados.

El último punto importa siempre, porque usar un asistente de IA casi siempre implica compartir con el proveedor lo que le escribes [@F-M1-02]. Si tu empresa tiene reglas sobre qué información se puede usar en estas herramientas, esas reglas mandan.

:::comprueba
Gemini le entrega a Andrés una fórmula y le dice que «está verificada». ¿Qué hace Andrés?
- a) La usa en la planilla real, porque el asistente la verificó
- **b) La prueba con sus datos de práctica antes de usarla**
- c) Pide otra fórmula a un segundo asistente y usa la que se repita
Retroalimentación: El asistente puede afirmar algo con seguridad y estar equivocado. La verificación la hace quien usa la fórmula, con datos de resultado conocido.
:::

### P18 · Cierre: resuelve un problema completo
cubre: C1, C2, H1
fuentes: F-M2-16, F-M2-15
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema pediste fórmulas a la IA con contexto concreto, las pegaste en Hojas de cálculo de Google y las comprobaste con datos de práctica. Trabajaste con referencias relativas y absolutas, SUMAR.SI, BUSCARV y filtros, y aprendiste a reconocer dos familias de errores: los de referencia, como el rango que se mueve o el índice fuera del intervalo, y los de lógica, como la coincidencia aproximada o los datos sucios [@F-M2-16; @F-M2-15].

Una fórmula correcta no es la que entrega la IA, sino la que tú comprobaste con datos de resultado conocido. Para cerrar, vas a resolver de principio a fin dos preguntas de la jefatura de Andrés. Si en tu trabajo llevas una planilla, después repite el ejercicio con una copia sin datos sensibles.

:::actividad Dos preguntas de la jefatura
La jefatura pregunta cuántas unidades hay en total de los productos que cuestan más de 5000 pesos, y cuántas unidades quedan del producto P03. Para cada pregunta, pide la fórmula a Gemini con la plantilla de la pantalla 7 y pégala en tu hoja de práctica. Calcula a mano el resultado esperado antes de mirar el de la fórmula, compara y, si no coinciden, encuentra el error y corrígelo. Anota en tu bitácora la fórmula final y cómo la comprobaste.

Resultados para comprobar: los productos con precio sobre 5000 son el casco (12), los zapatos (8) y el film (25), que suman 45 unidades; del P03 quedan 150 unidades.
:::

### Ideas clave

1. Las funciones de IA dentro de Sheets y Excel son de pago; la práctica gratuita es pedir la fórmula en el chat, pegarla en Hojas de cálculo de Google y comprobarla.
2. Una fórmula empieza con =, usa celdas y rangos, y separa sus argumentos con punto y coma o con coma según la configuración de la planilla.
3. Las referencias relativas cambian al copiar y las absolutas ($) no: lo que no debe moverse se fija con $.
4. SUMAR.SI suma con un criterio (texto entre comillas, números con operadores); BUSCARV busca en la primera columna y trae el valor de la columna indicada, y necesita FALSO para una coincidencia exacta.
5. Para pedir una fórmula, se le dice a la IA el programa, el separador, qué hay en cada columna, desde qué fila, dónde va la fórmula y si los datos pueden venir sucios.
6. Se verifica con datos de prueba: cálculo a mano, casos extremos, cambio de un dato, un camino distinto como un filtro y revisión celda por celda.
7. Los errores más peligrosos no muestran aviso: un rango desplazado o un índice equivocado entregan un número con buen aspecto.

### Referencias bibliográficas

- Google. (s. f.-a). *BUSCARV*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093318?hl=es
- Google. (s. f.-b). *Ordenar y filtrar tus datos*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3540681?hl=es
- Google. (s. f.-c). *Planes Google AI*. Google One. https://one.google.com/intl/es-419_cl/about/google-ai-plans/
- Google. (s. f.-d). *SUMAR.SI*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/3093583?hl=es
- Google. (2026, 13 de octubre). *Prompt design strategies*. Google AI for Developers. https://ai.google.dev/gemini-api/docs/prompting-strategies
- Miao, F. y Holmes, W. (2024). *Guía para el uso de IA generativa en educación e investigación*. UNESCO. https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa
- Microsoft. (s. f.-a). *Cambiar entre referencias relativas, absolutas y mixtas*. Microsoft Support. https://support.microsoft.com/es-es/office/cambiar-entre-referencias-relativas-absolutas-y-mixtas-dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- Microsoft. (s. f.-b). *Compara todos los planes y precios de Microsoft 365*. https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- Microsoft. (s. f.-c). *Detectar errores en las fórmulas*. Microsoft Support. https://support.microsoft.com/es-es/office/detectar-errores-en-las-fórmulas-3a8acca5-1d61-4702-80e0-99a36a2822c1
- Microsoft. (2026). *Introducción a la escritura de indicaciones en Microsoft Copilot*. Microsoft Support. https://support.microsoft.com/es-es/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Panko, R. R. (2000). *Spreadsheet errors: What we know. What we think we can do*. arXiv. https://arxiv.org/abs/0802.3457


---

# Módulo 3 · Investigación y análisis de información

**Competencia:** Acelerar la investigación y el análisis de información con herramientas de IA, validando fuentes y resguardando la privacidad, para apoyar decisiones laborales.


## M3-AE1 · Herramientas de IA para investigar

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-01, F-M3-02
bloque: Texto + imagen

En los módulos anteriores usaste la IA para redactar, resumir y presentar. En este módulo la vas a usar para investigar: reunir
información sobre un problema real de tu trabajo, contrastarla, ordenarla y presentarla sin poner en riesgo datos de nadie. Este
primer tema trata del comienzo de ese camino, que es hacer buenas preguntas y levantar información con herramientas que muestran de
dónde la sacan.

El aprendizaje esperado es este: Utilizar herramientas de IA para investigar (buscadores con citas, asistentes sobre fuentes propias)
y levantar información sobre un problema de su sector. Al final deberías poder convertir un tema general en preguntas de
investigación específicas, usar al menos dos herramientas distintas y anotar cada fuente con su cita.

Vas a trabajar con dos tipos de herramienta. El **buscador con citas** consulta internet y enlaza cada dato a la página de donde
salió [@F-M3-01]. El **asistente sobre fuentes propias** responde solo a partir de los documentos que tú le entregas [@F-M3-02]. Las
dos tienen plan gratuito y se pueden usar desde el celular.

Siguen contigo las mismas personas de los módulos anteriores. Camila, asistente administrativa en una constructora, quiere saber
cómo registran y archivan sus documentos digitales otras oficinas. Andrés, encargado de bodega en una distribuidora, quiere evitar
quedarse sin cajas de embalaje. Rosa, recepcionista de un centro médico, busca cómo bajar la inasistencia de pacientes. Cada uno
investiga un problema de su trabajo, igual que harás tú con el problema que elegiste en el Hito 1.

### P02 · Tres tipos de herramientas para investigar
cubre: S1
fuentes: F-M3-01, F-M3-02
bloque: Texto + tabla comparativa

Cuando le preguntas algo a un asistente sin más, muchas veces responde con lo que aprendió en su entrenamiento. Ese conocimiento
tiene fecha de corte y no te dice de dónde viene. Para investigar conviene usar herramientas que busquen o lean fuentes y te las
muestren. Las puedes agrupar en tres tipos.

| Tipo | Qué hace | Ejemplo gratuito |
|---|---|---|
| Buscador con citas | Busca en internet en el momento, resume lo que encuentra y pone citas numeradas que enlazan a cada página [@F-M3-01] | Perplexity |
| Asistente sobre fuentes propias | Responde a partir de los documentos que tú subes y cita la parte de donde sacó cada idea [@F-M3-02] | Gemini Notebook |
| Asistente general con búsqueda | Conversa como siempre, pero a veces busca en la web y muestra las fuentes que usó | Gemini (lo verás en P09) |

Lo que decide cuál usar es en qué punto de la investigación estás. Andrés, por ejemplo, quiere saber cómo evitan otras bodegas
quedarse sin cajas. Como todavía no tiene ningún documento, parte con el buscador con citas para ver qué se ha escrito sobre el
tema. Cuando reúna algunas guías que le sirvan, las subirá a un asistente sobre fuentes propias para hacerles preguntas.

:::comprueba
Rosa tiene el reglamento interno del centro médico en PDF y quiere preguntarle qué dice sobre la confirmación de horas. ¿Qué tipo de
herramienta le sirve más?
- a) Un buscador con citas
- **b) Un asistente sobre fuentes propias**
- c) Un generador de imágenes
Retroalimentación: El reglamento es un documento que ella ya tiene. Un asistente sobre fuentes propias responde a partir de ese
archivo y cita la parte donde lo encontró.
:::

### P03 · Del tema general a la pregunta de investigación
cubre: H1, C1
fuentes: F-M3-03
bloque: Proceso (process block) en 4 pasos

Una pregunta vaga da resultados vagos, aunque la herramienta sea muy buena. Las bibliotecas de Duoc UC proponen un camino de cuatro
pasos para pasar de un tema amplio a una búsqueda precisa [@F-M3-03]. Míralo con el tema de Rosa:

1. Identifica el tema general: «inasistencia de pacientes».
2. Acótalo con criterios como el lugar, el período, el tipo de organización o el uso que te interesa: «inasistencia a horas médicas agendadas en centros médicos pequeños de Chile, en los últimos años».
3. Reconoce los conceptos clave. Aquí son tres: inasistencia, horas médicas agendadas y centros médicos pequeños.
4. Prepara sinónimos para repetir la búsqueda si no resulta: «ausentismo», «pacientes que no se presentan», «citas perdidas».

Con eso ya puedes escribir una **pregunta de investigación**, que es una pregunta que se puede responder buscando información. En
este caso: «¿Qué medidas usan los centros médicos pequeños para reducir las horas agendadas a las que el paciente no se presenta?».

Un error común es pensar que mientras más amplia sea la pregunta, más información útil vas a encontrar. Una pregunta amplia trae más
resultados, pero menos útiles. Acotar no es perder información: es quedarte con la que sirve para tu problema.

:::ejemplo La pregunta de Rosa
Rosa partió preguntando «¿por qué faltan los pacientes?» y recibió una lista larga y general. Al acotar el tema y usar los conceptos
clave, su pregunta quedó centrada en lo que ella puede cambiar desde la recepción: los recordatorios y la confirmación de horas.
:::

### P04 · Preguntas específicas: antes y después
cubre: C1, H1
fuentes: F-M3-03
bloque: Texto + comparación antes/después

Una **pregunta específica** nombra el tema acotado y sus conceptos clave [@F-M3-03]. La reconoces porque, al leerla, sabes qué tipo de respuesta
esperas y dónde podrías buscarla. Compara estas versiones de las preguntas de Andrés, Camila y Rosa.

| Antes (tema general) | Después (pregunta específica) |
|---|---|
| ¿Cómo mejorar una bodega? | ¿Qué prácticas usan las bodegas pequeñas para evitar quedarse sin insumos de embalaje? |
| ¿Cómo ordenar los documentos? | ¿Qué recomiendan las guías de archivo para nombrar y guardar facturas y contratos digitales en una oficina pequeña? |
| ¿Qué hacer con los pacientes que faltan? | ¿Qué formas de recordatorio usan los centros médicos pequeños para que los pacientes confirmen su hora? |

En la segunda columna aparece quién (bodegas pequeñas, una oficina pequeña, centros médicos), qué (insumos de embalaje, facturas y
contratos, recordatorios) y, cuando importa, dónde y cuándo. Por lo general un buen tema da para dos o tres preguntas. Andrés agrega
una segunda, «¿Cómo se calcula cuántas cajas tener en reserva?», y va a buscar cada pregunta por separado.

:::actividad Acota tu tema
Escribe en una línea el tema general de tu proyecto y luego:
1. Agrega al menos dos criterios para acotarlo (lugar, período, tipo de organización, uso).
2. Subraya los conceptos clave.
3. Anota un sinónimo para cada concepto.
4. Escribe dos preguntas de investigación específicas.
:::

### P05 · Antes de buscar: define tu necesidad de información
cubre: A1, H1
fuentes: F-M3-03
bloque: Texto + escenario

Quien busca con autonomía no abre la herramienta y pregunta lo primero que se le ocurre. Antes decide qué necesita. La guía de Duoc
UC sugiere definir seis cosas: cuánta información te hace falta (un dato, unas pocas fuentes o un panorama completo), en qué idioma
la quieres, qué tipo de fuente te sirve (normas, guías de organismos, estudios, noticias), de qué período, cuánto tiempo tienes para
buscar y qué profundidad necesitas [@F-M3-03].

Estas decisiones te sirven también para escribir el prompt, porque las puedes agregar al final de tu pregunta: «Busca fuentes en
español, de organismos públicos o instituciones educativas, publicadas desde 2023». Además te dicen cuándo detenerte. Si decidiste
que te basta un panorama con cinco fuentes, no necesitas abrir veinte enlaces.

Definir la necesidad parece un paso menor, pero es lo que evita perder una tarde entera saltando de página en página. También te
ayuda a explicarle a tu jefatura qué buscaste y por qué te detuviste ahí.

:::ejemplo Camila define su necesidad
Camila registra facturas, órdenes de compra y contratos en una planilla, y quiere investigar buenas prácticas para registrar y
archivar documentos digitales en una oficina. Decide que le basta un panorama con cinco o seis fuentes, en español, de los últimos
tres años, de preferencia guías de organismos públicos o de instituciones educativas, y que tiene una hora para buscar. Con eso sabe
cuándo detenerse y no se pierde abriendo enlaces sin fin.
:::

### P06 · Cómo funciona un buscador con citas
cubre: S2
fuentes: F-M3-01, F-M3-13
bloque: Texto + imagen de una respuesta con citas numeradas

Un buscador con citas combina un buscador con un asistente de IA. Según el centro de ayuda de Perplexity, la herramienta busca en
internet en tiempo real a partir de tu pregunta, resume lo que encontró en una respuesta breve y pone **citas numeradas** que enlazan
a las páginas de origen, para que verifiques o profundices [@F-M3-01]. También acepta preguntas de seguimiento que conservan el
contexto: puedes escribir «¿y en oficinas pequeñas?» sin repetir todo.

La diferencia con un buscador común es que no te entrega una lista de páginas para leer, sino una respuesta ya redactada con los
números de las fuentes al lado de cada afirmación. Eso ahorra tiempo, pero cambia tu trabajo: ahora tienes que comprobar que cada
número lleve a una página que de verdad diga eso.

Un error común es creer que si la respuesta trae citas, está correcta. NIST, el instituto de normas y tecnología de Estados Unidos,
advierte que la IA generativa puede producir contenido falso con total seguridad, e incluso citas inventadas que parecen respaldar la
respuesta [@F-M3-13]. Una cita es una pista para ir a la fuente. La verificación la haces tú, al abrirla.

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
fuentes: F-H-29, F-H-33
bloque: Texto + imagen de la aplicación

En este curso vas a usar Perplexity como buscador con citas. Su plan gratuito se llama Standard e incluye búsquedas básicas
prácticamente ilimitadas, muy pocas búsquedas avanzadas (que el proveedor llama «Pro Search»), una subida de archivos limitada y el
historial de tus búsquedas. No trae los modelos avanzados ni la creación de imágenes, que están en el plan Pro, de pago [@F-H-29]. Para este
tema la búsqueda básica alcanza: no necesitas pagar ni gastar las búsquedas avanzadas.

Además de la versión web, Perplexity tiene aplicación para Android y para iPhone [@F-H-33], así que puedes hacer tus búsquedas desde el
teléfono, por ejemplo en un rato libre de la jornada, y revisar después las fuentes con calma en el computador.

Hay una precaución que vale desde la primera búsqueda. Lo que escribes en una herramienta gratuita queda en los sistemas del
proveedor, y en el tema 4 de este módulo verás qué hace cada uno con esos datos y cómo ajustarlo. Mientras tanto, escribe preguntas
generales sobre tu tema y deja fuera nombres de personas, de clientes y cualquier información interna de tu empresa.

:::ejemplo Andrés en el celular
Andrés instala la aplicación en su teléfono y, en la hora de colación, escribe su pregunta sobre insumos de embalaje. No menciona el
nombre de la distribuidora ni el de sus clientes: pregunta por «bodegas pequeñas» en general. La respuesta trae cinco citas, que
deja marcadas para abrirlas en la tarde.
:::

### P08 · Práctica guiada 1: tu pregunta en el buscador con citas
cubre: H1, S2, C2
fuentes: F-M3-01, F-M3-03
bloque: Proceso paso a paso + actividad

Ahora te toca levantar información sobre tu propio tema. Sigue estos pasos en el celular o en el computador:

1. Abre Perplexity.
2. Escribe tu primera pregunta de investigación (P04) y agrega lo que definiste en P05: idioma, tipo de fuente y período.
3. Lee la respuesta y fíjate en los números de las citas.
4. Abre cada cita, revisa que el enlace funcione y que la página diga lo que la respuesta afirma.
5. Haz una pregunta de seguimiento para profundizar, por ejemplo «¿Qué fuentes de Chile tratan este tema?».
6. Si los resultados no sirven, repite la búsqueda con los sinónimos que preparaste [@F-M3-03].
7. Anota cada fuente útil en tu registro de fuentes (lo armarás en P16): título, quién la publica, fecha y enlace.

Un error frecuente en este paso es copiar la respuesta del buscador como si fuera la fuente. La respuesta redactada es un resumen
hecho por la IA; la fuente es la página a la que lleva la cita [@F-M3-01]. Lo que anotas y citas es esa página de origen, no el resumen.

:::actividad Tus primeras fuentes
Al terminar deberías tener al menos tres fuentes que abriste y leíste. Para cada una, escribe en tu bitácora una línea con lo que
aporta a tu pregunta. Si una cita no abría o no decía lo que la respuesta afirmaba, anótalo también: es información valiosa sobre
la herramienta.
:::

### P09 · Búsqueda con fuentes en Gemini y ChatGPT
cubre: S2, S1
fuentes: F-H-16, F-H-07
bloque: Texto + escenario

Los asistentes generales que ya conoces también pueden buscar en la web. La diferencia con un buscador con citas es que no siempre lo
hacen: a veces responden solo con lo que aprendieron. Por eso conviene mirar si la respuesta trae fuentes antes de usarla.

Gemini a veces muestra un botón «Fuentes» con enlaces a sitios web, a archivos que subiste o a documentos vinculados, y eso funciona
en el computador, en Android y en iPhone [@F-H-16]. En ChatGPT la búsqueda web está en el plan gratuito, incluso sin iniciar sesión,
tanto en la web como en las aplicaciones. Sus respuestas pueden traer citas que abren la fuente y un panel con las fuentes usadas,
aunque cada búsqueda descuenta del límite del plan [@F-H-07].

Si la respuesta de un asistente general llega sin fuentes, pídele que busque en la web y que indique las páginas que usó. Una
respuesta sin fuentes te puede dar ideas, pero no te sirve para investigar, porque no tienes cómo comprobarla. Hacer la misma
pregunta en dos herramientas distintas tiene otra ventaja: te muestra en qué coinciden y qué agrega cada una, y lo que solo aparece
en una pide más revisión.

:::ejemplo La misma pregunta en dos herramientas
Camila hace su pregunta sobre cómo registrar y archivar documentos digitales en Perplexity y en Gemini. Las dos respuestas coinciden
en dos prácticas: nombrar los archivos con la fecha y el tipo de documento, y guardar una copia de respaldo. Gemini nombra una
tercera. Camila la busca en las fuentes que le mostró y, como no aparece en ninguna, no la anota.
:::

### P10 · Trabajar sobre tus documentos: Gemini Notebook
cubre: S3
fuentes: F-M3-02, F-H-45
bloque: Texto + imagen de un cuaderno con fuentes

El segundo tipo de herramienta trabaja con fuentes que tú eliges. En este curso vas a usar Gemini Notebook, la herramienta de Google
que antes se llamaba NotebookLM; si no la encuentras con el nombre nuevo, búscala con el anterior. Funciona con **cuadernos**: en cada
uno subes tus fuentes y luego conversas con ellas.

Según la ayuda de Google, acepta PDF, sitios web, videos de YouTube, audio y documentos de Google [@F-H-45]. Responde a partir de esas
fuentes y no de su conocimiento general, muestra citas en línea que llevan a la parte exacta de la fuente y, si tus fuentes no tienen
la respuesta, puede no responder [@F-M3-02].

Esto cambia bastante el riesgo. Un asistente general puede rellenar con datos de cualquier parte; uno sobre fuentes propias se
limita a lo que le entregaste y te muestra dónde lo leyó. Aun así, Google advierte que sus respuestas pueden tener errores y que en
temas médicos, legales o financieros conviene consultar a un profesional [@F-M3-02].

Por eso un error común es pensar que, si trabaja sobre tus documentos, no se equivoca. Limitarlo a tus fuentes reduce el riesgo, pero
no lo elimina: puede resumir mal o mezclar ideas de dos documentos. Toca las citas y compara con el texto.

:::ejemplo Rosa pregunta a sus documentos
Rosa sube a un cuaderno dos guías públicas sobre atención de pacientes que encontró con el buscador. Pregunta: «¿Qué recomiendan
estas guías para confirmar horas?». La respuesta trae tres citas, y al tocarlas ve el párrafo de cada guía de donde salió la idea.
:::

### P11 · Gemini Notebook: plan gratuito, aplicación y límites
cubre: S3, S1
fuentes: F-H-44, F-H-46
bloque: Texto + imagen de la aplicación

Gemini Notebook tiene un plan gratuito, llamado Standard, que se usa con una cuenta de Google personal. Te permite tener hasta 100
cuadernos, con un máximo de 50 fuentes cada uno, y hacer 50 conversaciones al día. Incluye además algunos productos que se generan a
partir de tus fuentes: hasta 10 informes al día, tres resúmenes de audio y tres de video al día, y la investigación a fondo (Deep
Research) 10 veces al mes. Google aclara que estos límites pueden cambiar [@F-H-44].

Para tu proyecto no vas a acercarte a esos topes. Un cuaderno con cinco a diez fuentes es más que suficiente, y lo que importa es que
cada una sea buena, no que sean muchas.

En el celular hay aplicación para Android 10 o superior y para iPhone y iPad. Desde ella puedes preguntar a tus fuentes, escuchar los
resúmenes de audio sin conexión y compartir hacia la aplicación un sitio, un PDF o un video que encontraste navegando. El lanzamiento
de la aplicación es gradual, aunque Chile está en la lista de países [@F-H-46]. Si todavía no te aparece en la tienda, usa la versión web en el
navegador del teléfono: funciona igual para lo que harás en este tema.

Una forma práctica de usarla es ir guardando en el cuaderno, desde el teléfono, cada fuente buena que encuentres en el buscador. Así,
cuando te sientes a revisar, ya tienes todo reunido en un solo lugar.

### P12 · Qué documentos subir y cuáles no
cubre: S3, A1
fuentes: F-M3-02
bloque: Texto + clasificación (sorting activity)

Que una herramienta trabaje con tus documentos no significa que cualquier documento deba ir ahí. Antes de subir algo, pregúntate de
dónde viene y qué contiene. Las páginas de organismos públicos y de instituciones educativas, las guías, normas e informes
publicados y tus propias notas, sin datos de otras personas, son buenas fuentes para tu cuaderno.

Otra cosa son los documentos de tu trabajo. Una planilla con nombres, RUT, teléfonos o datos de salud de personas no se sube. Tampoco
las planillas de clientes, remuneraciones o ventas de la empresa, ni los documentos internos que tu jefatura no ha autorizado
compartir. Si necesitas trabajar con un documento real, usa una copia sin datos sensibles o con datos de prueba.

Sobre privacidad, Google indica que, con una cuenta personal, tus datos de Gemini Notebook no se usan para entrenar sus modelos,
salvo que envíes comentarios, porque en ese caso la interacción puede ser revisada [@F-M3-02]. Es una buena política, pero no cambia la regla:
lo confidencial no se sube a una herramienta que tu empresa no autorizó. Lo verás a fondo en el tema 4.

:::actividad ¿Lo subo o no?
Clasifica cada documento:
1. Un PDF público de un organismo sobre seguridad en bodegas. → Lo subo.
2. La planilla de pacientes del día con sus teléfonos. → No lo subo.
3. Una guía pública sobre cómo archivar documentos digitales. → Lo subo.
4. El informe de ventas mensual de la distribuidora. → No lo subo.
5. Tus notas de lectura, sin datos de nadie. → Lo subo.
:::

### P13 · Práctica guiada 2: arma tu cuaderno
cubre: H1, S3, C2
fuentes: F-M3-02, F-H-46
bloque: Proceso paso a paso + actividad

Ahora usas la segunda herramienta con las fuentes que encontraste en la práctica 1:

1. Abre Gemini Notebook, en la web o en la aplicación, con tu cuenta de Google [@F-H-46].
2. Crea un cuaderno con el nombre de tu proyecto.
3. Agrega de tres a cinco fuentes públicas (los enlaces que abriste en Perplexity, un PDF o un video) y revisa que ninguna tenga datos personales.
4. Hazle al cuaderno tu segunda pregunta de investigación.
5. Toca cada cita de la respuesta y lee el párrafo de origen para ver si dice lo mismo [@F-M3-02].
6. Pregunta qué falta: «¿Qué parte de mi pregunta no responden estas fuentes?».
7. Anota en tu registro cada dato útil con la fuente y la parte donde aparece.

El paso 6 es el que más se olvida y el que más enseña. Andrés le preguntó a su cuaderno cómo calcular la reserva de cajas. La
respuesta explicó la idea general con citas, pero aclaró que sus fuentes no traían un ejemplo de cálculo. Con eso supo qué le faltaba
y volvió al buscador con una pregunta nueva: «ejemplo de cálculo de stock de seguridad para una bodega pequeña».

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
fuentes: F-H-12, F-H-44
bloque: Texto + escenario

Algunas herramientas ofrecen un modo de **investigación a fondo**: en vez de una respuesta breve, revisan muchas páginas y entregan un
informe largo con fuentes. En Gemini se llama Deep Research y está disponible sin plan pagado, aunque gasta más cuota que una
conversación normal [@F-H-12]. En Gemini Notebook, el plan gratuito permite usarla 10 veces al mes [@F-H-44].

Conviene cuando necesitas un panorama amplio de un tema que no conoces, al comienzo de la investigación. No conviene para responder
una pregunta puntual, porque una búsqueda con citas es más rápida y gasta menos.

Un informe largo tiene más afirmaciones y más fuentes, y por eso más trabajo de revisión. No lo pegues en tu proyecto: úsalo como mapa
para saber qué fuentes abrir y qué preguntas hacer después. Un error común es creer que el informe ya viene verificado porque revisó
muchas páginas. Revisar muchas páginas no significa haberlas leído bien, así que cada dato del informe se trata igual que el de
cualquier otra respuesta: se abre la fuente y se comprueba.

:::ejemplo Camila usa Deep Research una vez
Camila no sabe por dónde partir con el tema del archivo de documentos digitales. Usa Deep Research de Gemini una sola vez para tener
un panorama. Del informe se queda con cuatro fuentes, que después abre y revisa una por una antes de anotarlas en su registro.
:::

### P15 · Elegir la herramienta según la necesidad
cubre: S1, H1
fuentes: F-M3-01, F-M3-02
bloque: Ordenar o clasificar (sorting activity)

Ya conoces las herramientas. La pregunta práctica es cuál usar en cada momento, y el criterio cabe en un cuadro.

| Si necesitas… | Usa… |
|---|---|
| Saber qué se ha publicado sobre un tema y tener enlaces | Un buscador con citas, como Perplexity, o la búsqueda de un asistente general [@F-M3-01] |
| Preguntar sobre documentos que ya reuniste | Un asistente sobre fuentes propias, como Gemini Notebook [@F-M3-02] |
| Un panorama amplio de un tema que no conoces | La investigación a fondo, una vez, como mapa |
| Redactar, ordenar o resumir lo que ya verificaste | El asistente general, sin búsqueda |

En este tema el criterio es usar al menos dos herramientas distintas. Así no dependes de una sola forma de buscar y puedes comparar lo
que entrega cada una: el buscador te abre el tema y el cuaderno te deja profundizar en las fuentes que elegiste. Elegir mal también
tiene costo. Si usas el asistente general sin búsqueda para saber qué se ha publicado, vas a recibir un texto bien escrito y sin
ninguna fuente que revisar.

:::actividad ¿Qué herramienta usarías?
Elige la herramienta para cada situación:
1. Rosa quiere saber qué guías públicas existen sobre recordatorios de horas. → Buscador con citas.
2. Andrés tiene tres manuales en PDF y quiere saber qué dicen sobre el embalaje. → Gemini Notebook.
3. Camila no conoce el tema del archivo digital y quiere un primer mapa. → Investigación a fondo.
4. Rosa quiere ordenar en una tabla los datos que ya verificó. → Asistente general.
:::

### P16 · Registrar las fuentes con su cita
cubre: C2
fuentes: F-M3-01, F-M3-12
bloque: Texto + tabla descargable

Investigar sin registrar es perder trabajo: dentro de una semana no vas a saber de dónde salió cada dato. Por eso llevas un **registro
de fuentes** desde el primer día. Lo central es guardar el enlace a la fuente original que te entrega la herramienta, no solo el
nombre de la herramienta [@F-M3-01].

| Pregunta | Herramienta | Fecha de búsqueda | Fuente (título y quién la publica) | Fecha de la fuente | Enlace | Qué aporta |
|---|---|---|---|---|---|---|
| 1. | Perplexity | | | | | |
| 2. | Gemini Notebook | | | | | |

El error más frecuente es anotar «Fuente: Perplexity». Perplexity, Gemini o ChatGPT no son la fuente de un dato: son la herramienta
con que lo encontraste. La fuente es la página o el documento al que lleva la cita.

Si además vas a usar un texto generado por la IA, por ejemplo un resumen que te sirvió de base, [n@F-M3-12] recomienda anotar la
herramienta, su versión, la fecha de la consulta y el prompt, y guardar la respuesta. En el tema 3 aprenderás a citarlo.

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

La herramienta hace la búsqueda, pero el rumbo lo pones tú. La autonomía se nota en decisiones pequeñas: defines antes qué necesitas
(P05) y sabes cuándo tienes suficiente; cuando un resultado no sirve, reformulas con sinónimos en vez de rendirte; haces preguntas de
seguimiento para ir más allá de la primera respuesta, y usas más de una herramienta para comparar [@F-M3-03].

La curiosidad se nota en preguntarte qué no sabes todavía. El método SIFT, que viste en el módulo 1, empieza con un paso que sirve
aquí: detenerte antes de aceptar una fuente y preguntarte qué sabes de ella [@F-M3-04]. En el próximo tema vas a hacer ese análisis a fondo.

Ninguna de estas actitudes depende de la herramienta que uses. Son las mismas que te sirven cuando tu jefatura te pide averiguar algo
que nadie en la oficina sabe: buscar con un rumbo, no conformarte con lo primero y saber decir qué quedó sin respuesta.

:::ejemplo Andrés no se queda con la primera respuesta
La primera respuesta que recibió Andrés hablaba de grandes centros de distribución. En vez de descartarla o aceptarla tal cual,
preguntó: «¿Qué cambia en una bodega pequeña?». Luego buscó con otro término, «insumos de empaque», y encontró una guía más cercana a
su realidad.
:::

### P18 · Cierre: tu levantamiento de información
cubre: H1, C1, C2
fuentes: F-M3-01, F-M3-02
bloque: Texto + actividad de cierre (entrega)

En este tema conociste tres tipos de herramientas para investigar: el buscador con citas, el asistente sobre fuentes propias y el
asistente general con búsqueda, que en algunos casos trae un modo de investigación a fondo [@F-M3-01; @F-M3-02]. Aprendiste a pasar de un tema general a
una pregunta específica, a definir tu necesidad antes de buscar y a registrar cada fuente con su enlace original.

Ahora reúnes todo en un levantamiento de información. No se trata de juntar muchas fuentes, sino de responder tu pregunta con fuentes
que puedes revisar. Guarda bien este registro: lo vas a usar en los cuatro temas de este módulo y en el Hito 3 del proyecto.

:::actividad Tu levantamiento de información
Reúne en tu bitácora:
1. Dos preguntas de investigación específicas sobre el problema de tu proyecto.
2. Las dos herramientas que usaste, por ejemplo Perplexity y Gemini Notebook.
3. Tu registro de fuentes con al menos cinco fuentes que abriste y leíste, cada una con título, quién la publica, fecha, enlace y lo que aporta.
4. Una línea sobre lo que todavía no pudiste responder.

Este levantamiento es la materia prima del próximo tema, donde vas a evaluar y contrastar estas fuentes.
:::

### Ideas clave

1. Para investigar con IA conviene usar herramientas que muestran sus fuentes: buscadores con citas, asistentes sobre fuentes propias y asistentes generales con búsqueda.
2. Una buena investigación parte de una pregunta específica: un tema acotado con criterios, conceptos clave y sinónimos para repetir la búsqueda.
3. Antes de buscar, define cuánta información necesitas, de qué tipo, de qué período y con qué profundidad.
4. Un buscador con citas consulta la web en el momento y enlaza cada afirmación, pero una cita no es una prueba: hay que abrirla.
5. Un asistente sobre fuentes propias, como Gemini Notebook, responde solo con tus documentos y cita dónde lo leyó; si no responde, te muestra un vacío. A esa herramienta no se suben documentos de la empresa con datos personales o confidenciales.
6. Se usan al menos dos herramientas distintas, y cada fuente se registra con su enlace original, no con el nombre de la herramienta.

### Referencias bibliográficas

- Bibliotecas Duoc UC. (2023, 21 de julio). *¿Cómo formular una necesidad de información?* https://bibliotecas.duoc.cl/busqueda-de-informacion/formular-necesidad-de-informacion
- Bibliotecas UC. (2026, 13 de agosto). *IA: citar y referenciar*. Pontificia Universidad Católica de Chile. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- Caulfield, M. (2019, 19 de junio). *SIFT (The four moves)*. Hapgood. https://hapgood.us/2019/06/19/sift-the-four-moves/
- Google. (s. f.-a). *Cambiar a un plan superior de Gemini Notebook*. https://support.google.com/notebooklm/answer/16213268?hl=es
- Google. (s. f.-b). *Empezar a usar la aplicación móvil Gemini Notebook*. https://support.google.com/gemininotebook/answer/16296687?hl=es
- Google. (s. f.-c). *Información sobre Gemini Notebook*. https://support.google.com/gemininotebook/answer/16164461?hl=es
- Google. (s. f.-d). *Límites de las aplicaciones de Gemini y cambios a planes superiores*. https://support.google.com/gemini/answer/16275805?hl=es
- Google. (s. f.-e). *Más información sobre Gemini Notebook*. Ayuda de NotebookLM. https://support.google.com/notebooklm/answer/16164461?hl=es-419
- Google. (s. f.-f). *Ver fuentes relacionadas de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/14143489?hl=es
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OpenAI. (2026). *Searching the web with ChatGPT*. OpenAI Help Center. https://help.openai.com/en/articles/9237897-chatgpt-search
- Perplexity. (s. f.-a). *How does Perplexity work?* https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- Perplexity. (s. f.-b). *Mobile apps*. https://www.perplexity.ai/help-center/en/collections/18799299-mobile-apps
- Perplexity. (s. f.-c). *Which Perplexity subscription plan is right for you?* https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you


## M3-AE2 · Recopilar, validar y sintetizar

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-06, F-M3-07
bloque: Texto + imagen

En el tema anterior levantaste información con dos herramientas y armaste tu registro de fuentes. Ahora tienes varias fuentes que no
siempre dicen lo mismo, y este tema te enseña a analizarlas en conjunto: evaluar cuánto confiar en cada una, compararlas entre sí,
dejar fuera lo que no tiene respaldo y unir lo que sí lo tiene en una síntesis propia.

El aprendizaje esperado es este: Contrastar y sintetizar información de múltiples fuentes aplicando criterios de confiabilidad. Al
final deberías poder revisar cada fuente según su autoría, su fecha y su respaldo, y escribir una síntesis de hallazgos contrastados
en la que no quede ninguna afirmación sin respaldo [@F-M3-06; @F-M3-07].

En el módulo 1 aprendiste a validar una respuesta de IA con lectura lateral, el método SIFT y tu lista de verificación. Aquí das un
paso más: ya no revisas un dato suelto, sino un conjunto de fuentes sobre una misma pregunta. Vas a trabajar con los tipos de fuente
que aparecen en cualquier investigación, con las fuentes de Andrés, Camila y Rosa, y con un ejemplo de fuentes reales sobre una ley
chilena.

La ruta del módulo tiene cuatro pasos: buscar, contrastar, sintetizar y citar. El primero lo hiciste en el tema anterior. Este tema
trata del segundo y del tercero, que son los que convierten una pila de enlaces en algo que puedes defender frente a tu jefatura.

### P02 · De validar un dato a analizar varias fuentes
cubre: S1, S2
fuentes: F-M3-13, F-M3-07
bloque: Texto + proceso en 4 pasos

Cuando investigas un problema reúnes fuentes de distinto tipo: una norma, una guía de un organismo, una nota de prensa, el blog de
una empresa, la respuesta de un asistente. Cada una tiene fortalezas y debilidades distintas, y la IA no hace este análisis por ti.
NIST, el instituto de normas y tecnología de Estados Unidos, advierte que la IA generativa puede entregar contenido que no distingue
hechos de opiniones ni reconoce la incertidumbre [@F-M3-13]. Un resumen hecho por IA puede mezclar la opinión de un blog con un dato de una
norma, en el mismo tono.

Por eso el análisis sigue cuatro pasos:

1. Evaluar cada fuente con criterios de confiabilidad.
2. Contrastar las fuentes entre sí, afirmación por afirmación [@F-M3-07].
3. Descartar lo que no tiene respaldo.
4. Sintetizar lo verificado en un texto propio.

Un error común es pensar que, si juntas muchas fuentes, el resultado es confiable. La cantidad no reemplaza al análisis: seis fuentes
débiles, o seis que copian a la misma, no valen más que una buena.

:::ejemplo Andrés y sus seis fuentes
Andrés tiene seis fuentes sobre cómo evitar quedarse sin cajas: una guía de una institución educativa, dos blogs de proveedores de
embalaje, un video, una nota de prensa y el resumen que le hizo un asistente. Leídas por separado, todas parecen útiles. Puestas una
al lado de la otra, ve que los dos blogs repiten la misma idea y que el resumen del asistente incluye un dato que no aparece en
ninguna.
:::

### P03 · El test CRAAP: cinco criterios de confiabilidad
cubre: S1, C1
fuentes: F-M3-06
bloque: Texto + tabla (flashcards opcional)

La Biblioteca Meriam de la Universidad Estatal de California en Chico propuso una lista de preguntas para evaluar información,
conocida por su sigla en inglés: **CRAAP**. Agrupa las preguntas en cinco criterios [@F-M3-06].

| Criterio | Pregunta central |
|---|---|
| Actualidad | ¿Cuándo se publicó o se revisó? ¿Sirve esa fecha para mi tema? |
| Relevancia | ¿Responde a mi pregunta? ¿Para qué público se escribió? |
| Autoridad | ¿Quién es el autor o la entidad? ¿Qué credenciales y afiliación tiene? |
| Exactitud | ¿De dónde sale la información? ¿Tiene evidencia? ¿Se puede verificar en otra fuente? |
| Propósito | ¿Busca informar, enseñar, vender, entretener o persuadir? ¿Son hechos u opiniones? |

La misma guía aclara que el peso de cada criterio depende de la situación. Para un dato que cambia, como un monto o una norma, la
actualidad pesa mucho; para un método o una definición, pesa menos.

En este curso vas a revisar siempre tres de esos criterios: la autoría (lo que CRAAP llama autoridad), la fecha (actualidad) y el
respaldo (exactitud). La relevancia y el propósito te ayudan a interpretar los otros tres, y los verás en P07.

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

El criterio de **autoría** pregunta quién escribió o publicó la fuente, qué credenciales tiene y a qué institución pertenece [@F-M3-06]. No basta
con que tenga un nombre: importa si esa persona o entidad sabe del tema y si responde por lo que dice. Mira cómo se aplica a fuentes
que ya usaste en este curso.

| Fuente | Autoría | Lectura |
|---|---|---|
| Ley en el sitio de la Biblioteca del Congreso Nacional | El Estado de Chile | La mejor fuente para saber qué dice la ley |
| Centro de ayuda de una herramienta de IA | La empresa que la vende | Buena fuente sobre cómo funciona su producto; no es neutral para compararlo con otros |
| Guía de una biblioteca universitaria | Una institución educativa | Confiable para métodos de búsqueda y citación |
| Blog sin autor ni institución | Desconocida | No se puede evaluar; necesita respaldo de otra fuente |

En el módulo 1 viste un estudio de Stanford en que historiadores y estudiantes se dejaban convencer por un logo profesional, por
referencias académicas o por el dominio del sitio, mientras los verificadores profesionales averiguaban fuera del sitio quién estaba
detrás [@F-M3-05]. Esa lectura lateral es la forma práctica de revisar la autoría: abres otra pestaña y buscas qué se dice de quien publica.

:::error «Si la página tiene referencias académicas, el autor es experto»
Las referencias y el aspecto académico se pueden imitar. La autoría se comprueba averiguando quién publica, no mirando cómo se ve la
página.
:::

### P05 · Fecha: ¿está vigente para mi pregunta?
cubre: S1, C1
fuentes: F-M3-06, F-M3-14
bloque: Texto + línea de tiempo

El criterio de **actualidad** revisa cuándo se publicó la fuente y si se revisó después [@F-M3-06]. No hay una regla única, porque depende de lo
que preguntas. En normas, montos y trámites la fecha es decisiva, ya que una ley o un requisito pueden cambiar. Las herramientas
digitales cambian sus planes y funciones a menudo, así que una página de ayuda de hace dos años puede describir algo que ya no existe.
En cambio, una guía sobre un método o una definición puede seguir sirviendo años después, si el método no cambió.

Un ejemplo real: si abres la Ley 19.628, sobre protección de la vida privada, en el sitio de la Biblioteca del Congreso Nacional,
verás que la página indica que su versión actual rige hasta el 30 de noviembre de 2026 y que hay una versión diferida que empieza a
regir el 1 de diciembre de 2026 [@F-M3-14]. Una fuente que copie el artículo antiguo después de esa fecha estaría desactualizada, aunque cite
bien el número de la ley.

Cuando una fuente no tiene fecha, no la descartes de inmediato. Anótalo como debilidad en tu registro y busca otra fuente con fecha
que diga lo mismo.

:::ejemplo Rosa revisa la fecha
Rosa encuentra una guía sobre recordatorios de horas con muy buenos consejos. Al revisar, ve que es de hace diez años y que menciona
mensajes de texto, pero no aplicaciones de mensajería. Decide usarla para las ideas generales y buscar una fuente más reciente para
los canales de contacto.
:::

### P06 · Respaldo: ¿de dónde sale el dato?
cubre: S1, C1
fuentes: F-M3-06, F-M3-04
bloque: Texto + proceso en 3 pasos

El criterio de **respaldo**, la exactitud de CRAAP, pregunta de dónde sale la información, si trae evidencia y si se puede verificar
en otra fuente [@F-M3-06]. Es el que más te protege de los datos inventados. Para revisarlo, sigues el dato hacia atrás:

1. Mira si la fuente dice de dónde lo sacó: un estudio, una norma, una encuesta, un registro.
2. Intenta llegar a ese origen. El último paso de SIFT es justamente rastrear la afirmación hasta su contexto original [@F-M3-04].
3. Comprueba que el origen diga lo mismo, porque a veces el dato se recortó, se redondeó o perdió una condición importante.

Una **fuente primaria** es la que produce el dato: el texto de la ley, el informe con la encuesta, el registro del organismo. Las
demás fuentes la comentan o la resumen, y mientras más cerca de la fuente primaria estés, más firme es el respaldo.

Con la IA este criterio pesa el doble. Ya viste en el tema 1 que un asistente puede inventar citas que parecen respaldar su
respuesta. Un dato que te da un asistente no tiene respaldo propio: lo tiene solo si lo encuentras en una fuente verificable.

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

El propósito pregunta si la fuente busca informar, enseñar, vender, entretener o persuadir, y si presenta hechos, opiniones o
propaganda [@F-M3-06]. Un blog de una empresa que vende software de agenda puede tener buena información sobre inasistencia, pero también quiere
que compres su producto. Un error común es descartar todo lo que dice una fuente porque vende algo. El propósito comercial no invalida
la fuente: te obliga a separar el dato verificable de la promoción y a buscar respaldo para el dato.

La relevancia pregunta si la fuente responde a tu pregunta y para qué público se escribió. Un ejemplo es la guía del Instituto
Nacional de Ciberseguridad de España (INCIBE) sobre cómo clasificar la información de una empresa, que usarás en el tema 4 [@F-M3-19]. Es una
fuente pública y bien respaldada, y su método sirve en cualquier país. Pero si lo que buscas es qué dice la ley chilena, no es
relevante: para eso necesitas normas chilenas.

:::ejemplo Camila separa hechos de promoción
Camila encuentra el artículo de una empresa que vende un programa para administrar documentos. Dice que nombrar cada archivo con la
fecha y el tipo de documento ayuda a encontrarlo rápido, y que «solo con nuestro sistema» una oficina deja de perder papeles. Camila
se queda con la primera idea, que después contrasta con una guía de una institución educativa, y deja fuera la promesa.
:::

### P08 · Ejercicio 1: evalúa las fuentes de Andrés
cubre: C1, S1
fuentes: F-M3-06, F-M3-04
bloque: Escenario + tabla para completar

Andrés tiene cinco fuentes sobre su pregunta: «¿Qué prácticas usan las bodegas pequeñas para evitar quedarse sin insumos de
embalaje?». Las fuentes son ficticias, pero son del tipo que aparece en cualquier búsqueda.

| Fuente | Autoría | Fecha | Respaldo |
|---|---|---|---|
| A. Guía de logística de un instituto profesional | Institución educativa, con autora identificada | 2024 | Cita manuales y explica un método de cálculo |
| B. Blog de un proveedor de cajas | Empresa que vende cajas | Sin fecha | Ninguno; recomienda comprar por volumen |
| C. Nota de prensa sobre un centro de distribución | Medio reconocido | 2025 | Recoge lo que cuenta el gerente de una empresa grande |
| D. Respuesta de un asistente sin fuentes | Desconocida | — | Ninguno |
| E. Video de un canal de logística | Persona con experiencia declarada | 2023 | Muestra su planilla, pero no cita fuentes |

Evaluar no es aprobar o reprobar fuentes. Es decidir cuánto peso le vas a dar a cada una cuando las compares, y dejar escrito por
qué.

:::actividad Clasifica la confiabilidad
Para cada fuente, decide si su confiabilidad es alta, media o baja, y escribe por qué en una línea. Luego compara con esta propuesta:
- A → Alta: autoría identificada, fecha reciente y método explicado.
- B → Baja para datos; sirve solo como idea que hay que respaldar. Tiene propósito comercial y no tiene fecha [@F-M3-06].
- C → Media: autoría y fecha claras, pero trata de una empresa grande, no de una bodega pequeña (relevancia).
- D → Baja: no se puede saber de dónde sale. Sirve solo como pista.
- E → Media: tiene experiencia declarada, pero no respaldo; conviene contrastarla [@F-M3-04].
:::

### P09 · Triangulación: varias miradas sobre lo mismo
cubre: S2
fuentes: F-M3-07
bloque: Texto + diagrama de tres vértices

**Triangular** es usar varias fuentes, estrategias o métodos para estudiar un mismo tema, de modo que las debilidades de una se
compensen con las otras. La idea viene de la investigación cualitativa, y un artículo de la Revista Colombiana de Psiquiatría aclara
un error común: no significa usar exactamente tres fuentes [@F-M3-07]. El número importa menos que el hecho de que sean miradas distintas.

El sociólogo Norman Denzin describió cuatro tipos de triangulación, y tres de ellos se aplican bien a una investigación en el
trabajo.

| Tipo | Qué significa | Ejemplo en el trabajo |
|---|---|---|
| De datos | Usar fuentes distintas sobre lo mismo | Una guía, una norma y una nota de prensa sobre el mismo tema |
| Metodológica | Usar métodos distintos | Leer documentos y además revisar tus propios registros o preguntar a quien hace la tarea |
| De investigadores | Que más de una persona analice | Pedir a un compañero que revise tus conclusiones |

El cuarto tipo, la triangulación de teorías, se usa sobre todo en investigación académica. Rosa, por ejemplo, no se queda con lo que
dicen las guías sobre recordatorios: revisa, sin nombres, cuántas horas se perdieron el último mes en su agenda (otro método) y le
pide a una compañera de la recepción que lea sus conclusiones (otra persona).

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

Cuando dos fuentes coinciden, el hallazgo se corrobora y tienes más razones para creerlo [@F-M3-07]. Pero hay una condición: que las fuentes sean
**independientes**, es decir, que cada una haya llegado al dato por su cuenta.

Para saberlo aplicas el último paso de SIFT y rastreas cada afirmación hasta su origen [@F-M3-04]. Si dos notas de prensa citan el mismo informe,
no tienes dos fuentes independientes, sino una contada dos veces. Lo que corrobora es llegar al informe y, si se puede, encontrar otra
fuente que haya llegado a lo mismo por otro camino.

Esto pasa de tres maneras frecuentes. A veces varios sitios repiten el mismo texto, incluso con las mismas palabras. Otras veces hay
una cadena en la que una fuente cita a otra, que cita a una tercera, y solo la última produjo el dato. Y está el caso del resumen de
la IA: cuando un asistente resume tres páginas, su resumen no es una cuarta fuente; lo que cuenta son las tres páginas, cada una con
su peso.

Por eso un error común es dar por confirmado un dato porque tres sitios dicen lo mismo. Si los tres copian a la misma fuente, el dato
depende de una sola. La confirmación viene de fuentes que llegaron al dato por caminos distintos.

:::actividad Busca el origen común
Toma dos fuentes de tu registro que digan lo mismo y revisa si citan a una tercera. Si es así, búscala y anótala en tu registro como
la fuente primaria.
:::

### P11 · Cuando las fuentes se contradicen
cubre: S2, H1
fuentes: F-M3-07, F-M3-08
bloque: Texto + lista de verificación

Que dos fuentes se contradigan no es un fracaso de tu investigación. El artículo sobre triangulación lo dice así: cuando dos
estrategias difieren, la diferencia no resta credibilidad por sí sola, y es una oportunidad para analizar por qué difieren, por
ejemplo quién produjo cada dato [@F-M3-07]. Para explicar una contradicción, revisa estas preguntas:

- ¿Son de fechas distintas? Quizás una describe la situación anterior.
- ¿Hablan de lo mismo? Una puede referirse a empresas grandes y otra a pequeñas, o a otro país.
- ¿Usan la misma definición? «Inasistencia» puede incluir o no las horas canceladas con aviso.
- ¿Una es opinión y la otra un dato?
- ¿Quién produjo cada dato y con qué interés?
- ¿Una es una propuesta y la otra algo ya decidido?

Después de analizar, decides. La guía de síntesis de LibreTexts recomienda que, cuando las fuentes no coinciden, decidas a cuál dar
más crédito y expliques por qué [@F-M3-08]. A veces la respuesta es que las dos tienen razón en su contexto, y eso también se dice.

:::ejemplo Camila encuentra una contradicción
Una fuente recomienda guardar las facturas digitales en un sistema de gestión documental con búsqueda automática. Otra dice que basta
con carpetas compartidas ordenadas por año y tipo de documento. Camila revisa y ve que la primera describe empresas grandes, con miles
de documentos al mes, y la segunda, oficinas pequeñas. No elige una: escribe que el método conveniente depende del volumen de
documentos que maneja la oficina.
:::

### P12 · Ejercicio 2: ¿desde cuándo rige la nueva ley de datos personales?
cubre: H1, S2, C1
fuentes: F-M3-15, F-M3-16
bloque: Escenario + actividad de análisis

Este ejercicio usa fuentes reales. Imagina que tu jefatura te pregunta desde cuándo rige la nueva ley chilena de datos personales, y
reúnes tres fuentes.

| Fuente | Qué dice |
|---|---|
| 1. Texto de la Ley 21.719, en el sitio de la Biblioteca del Congreso Nacional | Se publicó el 13 de diciembre de 2024. Sus cambios rigen desde el primer día del mes 24 posterior a la publicación, y el sitio registra esa fecha como el 1 de diciembre de 2026 [@F-M3-15] |
| 2. Ficha de tramitación del boletín 18623-07, en el sitio del Senado | Un proyecto del Ejecutivo propone postergar la entrada en vigencia al 1 de diciembre de 2027. Al 24 de octubre de 2026 está en primer trámite en el Senado y no ha sido aprobado [@F-M3-16] |
| 3. Una nota en un blog (ejemplo ficticio) | «La nueva ley se postergó para 2027» |

Fíjate en la frase final de la actividad: dice qué se sabe, según quién y a qué fecha. Cuando el tema puede cambiar, tu síntesis debe
decir cuándo lo revisaste. Este es justamente un dato que conviene volver a revisar antes de usarlo.

:::actividad Analiza la contradicción
1. ¿Qué fuentes se contradicen? → La 1 y la 3.
2. ¿Por qué difieren? → La 3 confunde una propuesta con algo ya decidido. La fuente 2 muestra que el proyecto sigue en trámite.
3. ¿Qué fuente tiene más crédito? → La 1 para lo que dice la ley y la 2 para el estado del proyecto, porque son fuentes primarias del Estado. La 3 no tiene respaldo.
4. ¿Qué escribirías? → «Según el texto vigente de la Ley 21.719, sus cambios rigen desde el 1 de diciembre de 2026. Hay un proyecto en trámite que propone postergarla, que a la fecha de esta revisión no ha sido aprobado».
:::

### P13 · Matriz de contraste: descartar lo que no tiene respaldo
cubre: H1, C2
fuentes: F-M3-07, F-M3-04
bloque: Tabla interactiva + actividad

Para contrastar varias fuentes a la vez sirve una **matriz de contraste**: una tabla con las afirmaciones en las filas y las fuentes en
las columnas. En cada casilla anotas si la fuente confirma (✓), contradice (✗) o no dice nada (—). Así quedó la de Andrés.

| Afirmación | Fuente A | Fuente C | Fuente E | Decisión |
|---|---|---|---|---|
| Conviene definir una reserva mínima de cajas | ✓ | ✓ | ✓ | Se incluye: tres fuentes independientes |
| La reserva se calcula según el consumo semanal | ✓ | — | ✓ | Se incluye, citando A y E |
| Comprar por volumen siempre ahorra | — | ✗ | — | Se descarta: solo lo decía el blog del proveedor |
| Un 30 % de las bodegas se queda sin cajas cada mes | — | — | — | Se descarta: venía del resumen del asistente, sin origen |

La regla para tu síntesis es simple: solo entra lo que está respaldado por más de una fuente independiente o lo que pudiste rastrear
hasta su fuente primaria [@F-M3-07; @F-M3-04]. Lo demás queda fuera o, si es importante mencionarlo, se marca como no verificado. En la matriz, un dato que
solo viene de un asistente no cuenta como fuente: necesita una columna con una fuente verificable.

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

Una vez que sabes qué está respaldado, toca escribir, y aquí aparece una confusión frecuente. La guía de LibreTexts distingue dos
operaciones. Resumir es repetir lo que dice cada fuente, una después de la otra. **Sintetizar** es unir las ideas de varias fuentes
después de analizarlas: buscar en qué coinciden, qué patrones aparecen y qué conclusión se puede sacar [@F-M3-08].

Mira la diferencia con las fuentes de Andrés. Un resumen fuente por fuente diría: «La guía del instituto dice que hay que tener una
reserva. El video dice que él calcula la reserva con el consumo semanal. La nota de prensa dice que una empresa grande usa alertas
automáticas».

La síntesis, en cambio, se organiza por idea: «Las fuentes coinciden en que una bodega debe definir una reserva mínima de insumos de
embalaje (instituto, 2024; video, 2023; prensa, 2025). Dos de ellas proponen calcularla según el consumo semanal. Las alertas
automáticas aparecen solo en empresas grandes, por lo que no está claro que apliquen a una bodega pequeña».

La segunda versión dice algo que ninguna fuente decía sola: hasta dónde aplica cada hallazgo. Ese es el aporte de quien investiga.

:::error Pedirle a la IA que «resuma las fuentes» y llamarlo síntesis
Un resumen fuente por fuente deja el análisis sin hacer. La síntesis exige comparar y concluir, y esa conclusión es tuya.
:::

### P15 · Técnicas de síntesis, con y sin IA
cubre: S3, H1
fuentes: F-M3-08, F-M3-13
bloque: Proceso paso a paso

La guía de LibreTexts propone estas técnicas para sintetizar [@F-M3-08]:

1. Busca los puntos en común y los temas que conectan las fuentes.
2. Identifica patrones y saca conclusiones.
3. Mantente fiel al contexto y a la intención de cada autor.
4. Cuando no coinciden, decide a cuál dar más crédito y explica por qué.
5. Presenta a cada autor: quién es y por qué importa su punto de vista.

Puedes usar un asistente para ordenar el trabajo, siempre que le entregues solo lo que ya verificaste. Por ejemplo, pega en Gemini tu
matriz de contraste, sin datos personales, y pídele: «Con esta matriz, agrupa las afirmaciones incluidas por tema. Para cada tema,
escribe dos oraciones que digan en qué coinciden las fuentes y en qué difieren. Usa solo lo que está en la matriz. No agregues datos
ni fuentes. Mantén entre paréntesis la fuente de cada afirmación».

Después revisa el borrador con calma. Fíjate si agregó algo, si cambió el sentido de una fuente y si cada fuente sigue junto a su
afirmación. NIST advierte que la IA puede presentar contenido falso con seguridad [@F-M3-13]. Eso vale también cuando trabaja sobre tus datos.

:::clave
La IA puede ayudarte a ordenar y redactar la síntesis. El análisis, es decir, qué entra, qué se descarta y qué se concluye, lo haces
tú.
:::

### P16 · Honestidad intelectual al analizar fuentes
cubre: A1
fuentes: F-M3-08, F-M3-12
bloque: Texto + escenario

En el módulo 1 viste que la honestidad intelectual es no presentar como propio ni como seguro lo que no lo es. Al analizar varias
fuentes aparece una tentación más: quedarte solo con las que dicen lo que esperabas.

Practicar la **honestidad intelectual** en una investigación significa incluir las fuentes que no coinciden con tu idea inicial y
explicar el desacuerdo, en lugar de omitirlo [@F-M3-08]. También significa decir lo que no sabes: si un punto quedó sin respaldo, lo dices, y
así haces algo que la IA no siempre hace, que es reconocer la incertidumbre. Significa separar lo que dicen las fuentes de tu propia
conclusión. Y significa declarar el uso de IA: [n@F-M3-12] pide indicar la herramienta, su versión y la fecha de la consulta cuando
usas contenido generado por IA.

Un error común es omitir la fuente que contradice tu conclusión. Dejarla fuera hace que tu síntesis parezca más firme de lo que es, y
quien lea tu informe va a tomar decisiones con información incompleta.

:::ejemplo Rosa no esconde el dato incómodo
Rosa esperaba que los recordatorios por mensaje redujeran mucho la inasistencia. Una de sus fuentes dice que el efecto fue pequeño en
un centro parecido al suyo. Rosa la incluye y escribe: «Las fuentes muestran resultados distintos; el efecto podría depender del tipo
de paciente». Su informe es más útil porque no promete lo que no sabe.
:::

### P17 · Respeto por la autoría
cubre: A2
fuentes: F-M3-08, F-M3-11
bloque: Texto + comparación antes/después

Cada idea que usas tiene un autor. Respetar la autoría significa reconocer de quién es cada idea y no cambiar lo que quiso decir. La
guía de LibreTexts lo resume en dos prácticas: presentar a cada autor cuando integras su idea, diciendo quién es y por qué importa su
punto de vista, y ser fiel a su contexto e intención, sin recortar una frase para que diga algo distinto [@F-M3-08].

Compara dos formas de usar la nota de prensa de Andrés. «Las bodegas pequeñas deben automatizar sus alertas de stock» le hace decir a
la fuente algo que no dijo. «Una nota de prensa de 2025 describe cómo un centro de distribución grande usa alertas automáticas; la
fuente no dice que esa práctica sirva para bodegas pequeñas» mantiene el contexto y deja claro de quién es la idea.

El respeto por la autoría se completa con la citación, que es indicar la fuente de cada idea con una norma reconocida, como APA 7, que
Bibliotecas UC explica en español [@F-M3-11]. Si copias una frase tal como está, va entre comillas y con su fuente; si la dices con tus
palabras, también lleva la fuente. En el próximo tema aprenderás a citar paso a paso.

:::comprueba
Una fuente dice: «En empresas grandes, las alertas automáticas reducen los quiebres de stock». ¿Qué versión respeta la autoría?
- a) «Las alertas automáticas eliminan los quiebres de stock»
- **b) «Según la fuente, en empresas grandes las alertas automáticas reducen los quiebres de stock»**
- c) «Todas las bodegas deberían usar alertas automáticas»
Retroalimentación: La opción b mantiene el contexto (empresas grandes) y la intención (reducir, no eliminar), y atribuye la idea.
:::

### P18 · Práctica y cierre: tu síntesis contrastada
cubre: H1, C1, C2
fuentes: F-M3-06, F-M3-07
bloque: Proceso paso a paso + actividad de cierre

En este tema aplicaste tres criterios de confiabilidad, autoría, fecha y respaldo, con el apoyo del test CRAAP [@F-M3-06]. Aprendiste a
triangular con fuentes independientes, a analizar contradicciones, a descartar lo que no tiene respaldo y a sintetizar por ideas, con
honestidad y respeto por la autoría [@F-M3-07]. Ahora lo aplicas a tu propia investigación.

Esta síntesis es el centro de tu informe del Hito 3. En el próximo tema le vas a dar estructura, citas completas y recomendaciones.

:::actividad Tu síntesis contrastada
Con el registro de fuentes del tema anterior:
1. Evalúa cada fuente según su autoría, su fecha y su respaldo, y marca su confiabilidad como alta, media o baja.
2. Arma tu matriz de contraste con cinco a ocho afirmaciones sobre tu pregunta de investigación.
3. Analiza las contradicciones y anota por qué difieren las fuentes.
4. Descarta lo que no tiene respaldo y anota el motivo.
5. Escribe una síntesis de 150 a 200 palabras, organizada por ideas, con la fuente de cada afirmación entre paréntesis.
6. Agrega una línea con lo que quedó sin responder y, si usaste IA para redactar, cuál usaste y cuándo.
:::

### Ideas clave

1. Analizar varias fuentes es más que validar un dato: se evalúa cada fuente, se contrastan entre sí, se descarta lo que no tiene respaldo y se sintetiza lo verificado.
2. Toda fuente se revisa al menos en autoría (quién responde), fecha (si está vigente para tu pregunta) y respaldo (de dónde sale el dato); el test CRAAP suma relevancia y propósito.
3. Triangular es combinar fuentes, métodos o personas para compensar debilidades; no exige usar exactamente tres fuentes.
4. Dos fuentes que coinciden solo corroboran si son independientes: si copian a la misma, el dato depende de una sola.
5. Una contradicción no es un fracaso: se analiza por qué difieren las fuentes y se decide a cuál dar más crédito, explicando por qué.
6. Sintetizar es organizar por ideas y concluir; resumir fuente por fuente deja el análisis sin hacer.
7. La honestidad intelectual y el respeto por la autoría exigen incluir lo que no coincide, decir lo que no se sabe y atribuir cada idea a su autor.

### Referencias bibliográficas

- Bibliotecas UC. (2026a, 20 de octubre). *Guía de normas APA 7*. Pontificia Universidad Católica de Chile. https://guiastematicas.bibliotecas.uc.cl/c.php?g=992585&p=7181600
- Bibliotecas UC. (2026b, 13 de agosto). *IA: citar y referenciar*. Pontificia Universidad Católica de Chile. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- Caulfield, M. (2019, 19 de junio). *SIFT (The four moves)*. Hapgood. https://hapgood.us/2019/06/19/sift-the-four-moves/
- Instituto Nacional de Ciberseguridad. (2018, 7 de diciembre). *Para proteger la información de tu empresa, primero clasifícala*. INCIBE. https://www.incibe.es/empresas/blog/proteger-informacion-tu-empresa-primero-clasificala
- Ley 19.628. (1999, 28 de agosto). *Sobre protección de la vida privada*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=141599
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- LibreTexts Español. (2022, 30 de octubre). *Sintetizar fuentes (Introducción a la composición universitaria, 17.5)*. https://espanol.libretexts.org/Bookshelves/Humanidades/Humanidades/Composicion/Composicion_Introductoria/Libro%3A_Introduccion_a_la_composicion_universitaria_(Lumen)/03%3A_Investigaci%C3%B3n/17%3A_An%C3%A1lisis_de_fuente/17.5%3A_Sintetizar_fuentes
- Meriam Library. (2010). *Evaluating information: Applying the CRAAP test*. California State University, Chico. https://library.csuchico.edu/sites/default/files/craap-test.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Okuda Benavides, M. y Gómez-Restrepo, C. (2005). *Métodos en investigación cualitativa: triangulación*. Revista Colombiana de Psiquiatría, 34(1), 118-124. https://www.redalyc.org/pdf/806/80628403009.pdf
- Senado de Chile. (2026). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- Spector, C. (2017, 24 de octubre). *Stanford scholars observe 'experts' to see how they evaluate the credibility of information online*. Stanford Graduate School of Education. https://ed.stanford.edu/news/stanford-scholars-observe-experts-see-how-they-evaluate-credibility-information-online


## M3-AE3 · Organizar y presentar información

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-09, F-M3-11
bloque: Texto + imagen

Ya levantaste información con dos herramientas y la convertiste en una síntesis contrastada. Falta el último paso de la ruta del
módulo, que es citar y presentar. Una investigación que nadie entiende, o cuyas fuentes nadie puede revisar, no sirve para decidir.
En este tema vas a convertir tu síntesis en un **informe breve** que otra persona pueda leer en pocos minutos y usar.

El aprendizaje esperado es este: Organizar y presentar hallazgos en un informe breve con fuentes citadas y mensajes clave. Al final
deberías poder ordenar un informe con una estructura definida, citar todas tus fuentes con una norma reconocida y proponer
recomendaciones que salgan de lo que encontraste.

Este tema es un taller, así que al terminar vas a tener un producto: el borrador del informe del Hito 3. Cada pantalla te entrega una
pieza. Primero la estructura, después los mensajes clave, los hallazgos y las recomendaciones; luego las citas y un gráfico simple.
Al final armas el informe con ayuda de Gemini y lo revisas tú.

En el módulo 2 escribiste un informe ejecutivo de una página. El informe breve se le parece, pero agrega dos cosas: los hallazgos de
tu investigación con sus fuentes y las referencias completas al final. Las guías que vas a usar son las del Centro Internacional de
Investigaciones para el Desarrollo, de Canadá, para la estructura, y la guía de normas APA 7 de Bibliotecas UC, para las citas [@F-M3-09; @F-M3-11].

### P02 · Qué es un informe breve
cubre: S1
fuentes: F-M3-09
bloque: Texto + imagen de un informe de dos páginas

El Centro Internacional de Investigaciones para el Desarrollo (IDRC), de Canadá, explica cómo escribir documentos breves que presentan
hallazgos y recomendaciones. Sus características sirven para tu informe. Está pensado para alguien que debe decidir, que no es
especialista en el tema y que no tiene tiempo para leer toda tu investigación. Trata un solo tema, así que si tienes dos problemas,
son dos informes. Es corto: idealmente no supera unas 1.500 palabras o dos páginas [@F-M3-09]. Y termina en recomendaciones concretas, que se
desprenden de lo que encontraste.

Piensa en quién va a leer el tuyo. Para Andrés es su jefatura. Para Rosa, la coordinadora del centro médico. Para Camila, la gerenta
de administración de la constructora, que tiene que decidir si cambian la forma de registrar y archivar los documentos de la oficina.

Un error común es pensar que un informe más largo se ve más serio. Quien decide necesita lo esencial, y un informe largo esconde los
hallazgos importantes entre detalles. Si el tuyo pasa de las dos páginas, lo más probable es que trate más de un tema o incluya cosas
que no aportan.

:::ejemplo El informe de Andrés
Andrés tiene que explicar a su jefatura por qué se atrasaron tres despachos y qué hacer para que no vuelva a pasar. No va a entregar
sus seis fuentes ni su matriz de contraste. Va a entregar dos páginas: qué encontró, qué tan seguro está y qué recomienda.
:::

### P03 · La estructura del informe breve
cubre: S1, C1
fuentes: F-M3-09, F-M3-11
bloque: Proceso (process block) o acordeón

Según la guía del IDRC, un documento breve suele tener estas partes, en este orden [@F-M3-09]. A ellas se suma la lista de referencias que pide
la norma APA [@F-M3-11].

| Parte | Qué responde | Extensión aproximada |
|---|---|---|
| 1. Mensajes clave | ¿Qué es lo más importante que debo saber? | 3 a 5 viñetas |
| 2. Introducción | ¿Por qué importa este tema? | Un párrafo |
| 3. Lo que se investigó | ¿Qué pregunta se hizo y con qué fuentes? | Un párrafo |
| 4. Hallazgos | ¿Qué se encontró y con qué límites? | La mitad del informe |
| 5. Recomendaciones | ¿Qué conviene hacer? | 3 a 5 viñetas |
| 6. Referencias | ¿Dónde puedo revisar cada fuente? | Lista completa |

El IDRC recomienda además usar títulos que informen, porque permiten entender el informe con solo leerlos [@F-M3-09]. En vez de «Hallazgos»,
Andrés puede escribir «Tres prácticas para no quedarse sin cajas», y Camila, «Cómo ordenan sus archivos digitales las oficinas
pequeñas».

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
lugar. Los datos de Rosa son ficticios, pero el orden es el mismo que vas a usar tú.

Fíjate, mientras ordenas, en la diferencia entre los mensajes clave y los hallazgos. Los mensajes clave dicen lo esencial en una
oración. Los hallazgos lo desarrollan con sus fuentes y sus límites.

Un error frecuente es empezar el informe por la historia de cómo se buscó. «Primero busqué en Perplexity, después armé un cuaderno…»
no le dice nada útil a quien decide. El método va breve, en la parte 3, después de los mensajes clave y la introducción [@F-M3-09].

:::actividad Arma el informe de Rosa
Ordena estos fragmentos según la estructura del informe breve:
- «Una de cada ocho horas agendadas el mes pasado quedó sin uso, lo que alarga la espera de otros pacientes.» → 2. Introducción
- «Confirmar la hora dos días antes reduce la inasistencia, según dos de tres fuentes.» → 1. Mensajes clave
- «Se revisaron cuatro guías y dos estudios publicados desde 2022, y el registro de la agenda del mes, sin nombres.» → 3. Lo que se investigó
- «Las fuentes coinciden en que el recordatorio funciona mejor si permite cancelar. Una fuente muestra un efecto pequeño.» → 4. Hallazgos
- «Probar durante un mes un recordatorio con opción de cancelar y medir el resultado.» → 5. Recomendaciones
- «Ministerio de… (2024). *Guía de…* URL» → 6. Referencias
:::

### P05 · Mensajes clave: se leen primero, se escriben al final
cubre: S1, A1
fuentes: F-M3-09
bloque: Texto + comparación antes/después

Los **mensajes clave** son las ideas que una persona debe llevarse aunque no lea nada más. El IDRC da un consejo práctico: esta parte
va al inicio, pero se escribe al final, cuando ya está claro qué encontraste y qué recomiendas [@F-M3-09].

Para escribirlos, pon una idea por viñeta y usa oraciones completas que digan algo, no solo un tema. El hallazgo más importante va
primero, y si hay una recomendación central, también va aquí. Mira la diferencia en el informe de Andrés.

| Antes (temas) | Después (mensajes) |
|---|---|
| Reserva de cajas | Las tres fuentes revisadas coinciden en que una bodega debe definir una reserva mínima de cajas |
| Proveedores | Contar con un segundo proveedor reduce el riesgo de atraso, pero las fuentes no dicen cuánto |
| Recomendación | Recomendamos calcular la reserva según el consumo semanal y revisarla cada mes |

Los mensajes de la columna derecha se entienden solos. Los de la izquierda obligan a leer todo el informe para saber qué se concluyó,
y eso es justo lo que la jefatura de Andrés no tiene tiempo de hacer.

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
anterior, así que ya están organizados por idea y cada afirmación tiene su fuente [@F-M3-08].

El IDRC recomienda presentar los hallazgos junto con sus limitaciones [@F-M3-09]. Una limitación es lo que no pudiste confirmar o lo que hace que
un hallazgo aplique solo en ciertos casos: que las fuentes eran de otro país o de empresas más grandes, que encontraste pocas fuentes
sobre un punto, que dos fuentes se contradecían y no pudiste resolverlo, o que el dato puede cambiar pronto.

Decir las limitaciones no debilita tu informe. Le permite a quien decide saber cuánto confiar en cada hallazgo. Por eso cada hallazgo
tiene tres partes: qué se encontró, quién lo respalda (la cita) y hasta dónde aplica (la limitación).

:::ejemplo Un hallazgo bien presentado
«Las alertas automáticas de stock se usan en centros grandes. Una nota de prensa (2025) describe su uso en un centro de distribución
de una empresa grande. No encontramos fuentes sobre bodegas pequeñas, por lo que no sabemos si conviene en nuestro caso».
:::

### P07 · Recomendaciones concretas, creíbles y viables
cubre: H1, C2
fuentes: F-M3-09
bloque: Texto + comparación antes/después

Las recomendaciones son el motivo por el que alguien lee tu informe. El IDRC pide que sean concretas, creíbles y viables [@F-M3-09]. Una
recomendación concreta dice qué hacer, quién y cuándo. Es creíble cuando se desprende de los hallazgos: si no hay un hallazgo detrás,
no hay recomendación. Y es viable cuando se puede hacer con los recursos que hay.

| Antes | Después |
|---|---|
| «Hay que mejorar la gestión de stock» | «Definir una reserva mínima de 30 cajas medianas, calculada con el consumo de las últimas cuatro semanas, y revisarla cada lunes» |
| «Se recomienda usar tecnología» | «Probar durante un mes recordatorios con opción de cancelar la hora y comparar la inasistencia con el mes anterior» |
| «Comprar un sistema automático» | No se recomienda por ahora: las fuentes solo lo muestran en empresas grandes |

Hay una prueba simple para revisarlas. Para cada recomendación, señala con el dedo el hallazgo de donde sale. Si no lo encuentras, la
recomendación sobra o te falta investigar.

:::error Recomendar lo que las fuentes no respaldan
Una recomendación que no se desprende de los hallazgos es una opinión. Si quieres incluirla, preséntala como una idea para investigar,
no como conclusión del informe.
:::

### P08 · Por qué citar todas tus fuentes
cubre: S2, C2
fuentes: F-M3-11, F-M3-12
bloque: Texto + escenario

**Citar** es indicar de dónde sale cada idea o dato que usas. En tu informe cumple tres funciones. Permite verificar, porque quien lee
puede ir a la fuente y comprobar. Respeta la autoría, porque reconoce el trabajo de quien produjo la información, como viste en el
tema anterior. Y te protege: si un dato resulta equivocado, queda claro de dónde vino y qué hiciste para revisarlo.

En este curso vas a usar APA 7, una norma de citación reconocida. La guía de Bibliotecas UC, de la Pontificia Universidad Católica de
Chile, la explica en español, con ejemplos para páginas web, leyes y contenido generado por IA [@F-M3-11; @F-M3-12].

APA tiene dos piezas que van juntas. La cita en el texto es breve y va junto a la idea, con el autor y el año. La lista de referencias
va al final y tiene los datos completos de cada fuente. Toda fuente citada en el texto aparece en la lista, y toda fuente de la lista
se cita en el texto.

:::ejemplo Camila cita
Camila escribe en su informe: «Las oficinas pequeñas suelen ordenar sus archivos digitales en carpetas por año y tipo de documento
(Instituto de Archivo X, 2025)». Al final, en las referencias, aparece esa fuente completa con su enlace. Si la gerenta de
administración quiere revisar de dónde salió la recomendación, la encuentra en un minuto.
:::

### P09 · APA 7: páginas web y documentos en línea
cubre: S2
fuentes: F-M3-11
bloque: Texto + plantilla con ejemplo

La mayoría de tus fuentes van a ser páginas web o documentos en línea. Según la guía de Bibliotecas UC, su referencia lleva estos
elementos, en este orden:

1. Autor o institución.
2. Fecha entre paréntesis. Si no tiene, se escribe (s.f.), que significa «sin fecha».
3. Título en cursiva.
4. Nombre del sitio, si es distinto del autor.
5. URL.

Si el contenido de la página cambia con frecuencia, se agrega la **fecha de recuperación**, que es la fecha en que la consultaste [@F-M3-11]. Una
referencia con fecha queda así:

Bibliotecas Duoc UC. (2023). *¿Cómo formular una necesidad de información?* https://bibliotecas.duoc.cl/busqueda-de-informacion/formular-necesidad-de-informacion

y en el texto se cita como (Bibliotecas Duoc UC, 2023). Una referencia sin fecha y con contenido que cambia queda así:

Perplexity. (s.f.). *How does Perplexity work?* Perplexity Help Center. Recuperado el 24 de octubre de 2026, de https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work

y en el texto se cita como (Perplexity, s.f.).

Un consejo práctico: copia la URL completa desde la barra del navegador o con el botón de compartir, en vez de escribirla a mano. Y
anota la fecha de consulta en tu registro de fuentes desde el primer día, porque la vas a necesitar.

### P10 · APA 7: citar una ley chilena
cubre: S2
fuentes: F-M3-11, F-M3-14
bloque: Texto + plantilla con ejemplo

Si tu investigación usa una ley, no basta con escribir «según la ley». La guía de Bibliotecas UC tiene un formato para las leyes
chilenas, con estos elementos en orden:

1. «Ley No.» y el número.
2. Nombre de la ley.
3. Fecha de promulgación, en orden mes, día y año.
4. Diario Oficial [D.O.], con la abreviatura entre corchetes.
5. El país entre paréntesis, si no queda claro.

Con la Ley 19.628, promulgada el 18 de agosto de 1999, la referencia queda así:

Ley No. 19628, Sobre protección de la vida privada, Agosto 18, 1999, Diario Oficial [D.O.] (Chile).

En el texto se cita como (Chile, 1999). Hay dos detalles que conviene mirar. La fecha que va es la de **promulgación**, que no siempre
coincide con la de publicación. Y si citas un artículo, la guía muestra que se agrega después del número: «Ley No. 19628 art. 4» [@F-M3-11].

El texto de las leyes chilenas está en el sitio LeyChile de la Biblioteca del Congreso Nacional. Allí ves la fecha de promulgación y
la de publicación, y también si la versión que lees está vigente [@F-M3-14].

:::error Citar una ley solo con su número
«Ley 19.628» sin nombre ni fecha no permite saber de qué versión hablas. La referencia completa le da a quien lee lo necesario para
encontrarla.
:::

### P11 · Citar contenido generado por IA
cubre: S2, C2
fuentes: F-M3-12
bloque: Texto + plantilla con ejemplo

Si usaste un texto generado por IA, también se cita. Bibliotecas UC explica cómo hacerlo en APA [@F-M3-12]. La referencia lleva, en orden:

1. La empresa como autora.
2. La fecha de la conversación.
3. El título del chat, en cursiva.
4. La descripción [Chat de IA generativa].
5. El modelo y su versión, tal como los muestra la herramienta.
6. La URL de la conversación compartida.

Con Gemini, la plantilla queda así: Google. (2026, 24 de octubre). *Título de tu chat* [Chat de IA generativa]. Gemini [modelo y
versión]. URL de la conversación. En el texto se cita como (Google, 2026).

La guía pide además transparencia: indicar la herramienta, la versión exacta y la fecha de la consulta, y guardar un registro de los
prompts y las respuestas [@F-M3-12]. Muchos estilos piden adjuntar el texto generado como anexo.

En este curso hay una distinción que conviene tener clara. Un dato que encontraste con ayuda de la IA se cita con su fuente original,
la página que lo produjo. La cita de la IA se usa cuando incorporas un texto que la IA generó, por ejemplo un borrador o una
clasificación que te sirvió de base.

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

Antes de empezar, recuerda la regla de P08: la cita en el texto y la referencia van juntas [@F-M3-11]. Si en el informe aparece «(Instituto
Logístico, 2024)» pero esa fuente no está en la lista del final, la cita está incompleta, porque quien lee no tiene cómo encontrar la
fuente. Lo mismo al revés: una referencia que nadie cita en el texto sobra.

:::actividad Encuentra qué falta
1. «Guía de logística para bodegas. https://…» → Falta el autor o la institución y la fecha, y el título va en cursiva: *Guía de logística para bodegas*.
2. «Perplexity (2026).» → Perplexity es la herramienta, no la fuente. Hay que citar la página a la que llevaba la cita.
3. «Ley 19.628.» → Faltan el nombre, la fecha de promulgación y el D.O.: Ley No. 19628, Sobre protección de la vida privada, Agosto 18, 1999, Diario Oficial [D.O.] (Chile).
4. «Blog Embalajes del Sur. *Cómo ahorrar en cajas*. https://…» → Falta la fecha. Si no tiene, va (s.f.); como el contenido puede cambiar, agrega la fecha de consulta.
5. «Google. *Resumen de mis fuentes*. Gemini.» → Faltan la fecha, [Chat de IA generativa], la versión del modelo y la URL de la conversación [@F-M3-12].
:::

### P13 · Visualización simple: elige el gráfico
cubre: S3
fuentes: F-M3-10, F-M3-09
bloque: Texto + tabla con íconos de gráficos

A veces un dato se entiende mejor en un gráfico. El IDRC aconseja incluir solo los gráficos que aporten al argumento [@F-M3-09]. Para
elegir cuál, el portal de datos abiertos del Gobierno de España propone partir de la relación que quieres mostrar [@F-M3-10].

| Quieres mostrar… | Gráfico | Ejemplo |
|---|---|---|
| Cambios en el tiempo | Líneas | Horas perdidas por inasistencia, mes a mes |
| Comparar cantidades | Columnas, con el eje partiendo en 0 | Despachos atrasados por semana |
| Un ranking | Barras ordenadas de mayor a menor | Tipos de documento que más demora registrar |
| Partes de un todo | Torta, solo con pocas partes | Despachos a tiempo y atrasados |

Para tu informe breve, uno o dos gráficos bastan. A veces una tabla simple comunica mejor que un gráfico, sobre todo si tienes pocos
números. Rosa, por ejemplo, quiere mostrar que la inasistencia subió en los últimos seis meses. Primero pensó en una torta, pero una
torta no muestra cambios en el tiempo, así que elige un gráfico de líneas con un punto por mes.

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

Un gráfico puede comunicar algo falso aunque los datos sean correctos. La guía de datos.gob.es advierte varios cuidados [@F-M3-10]. El eje de las
columnas tiene que partir en 0, porque si parte en otro número, una diferencia pequeña parece enorme. Las tortas dificultan comparar
tamaños, así que se usan solo con pocas partes; si tienes muchas, son mejores las barras ordenadas. Y muchos lectores ven causa y
efecto donde no la hay: si muestras dos cosas que suben juntas, aclara si una causa la otra o si solo ocurren al mismo tiempo.

Hay un cuidado más, propio del trabajo con IA. Si le pides a un asistente que haga un gráfico o una tabla, entrégale tus datos
verificados y compara cada número del resultado con tu planilla. NIST recuerda que la IA puede presentar contenido falso con
seguridad [@F-M3-13]. Eso incluye una cifra mal copiada en un gráfico.

Para hacerlo, usa la planilla que tengas a mano o pide a Gemini que ordene tus datos en una tabla. Lo importante no es la herramienta,
sino que el gráfico diga una sola cosa, con un título que la diga.

:::error «Si el gráfico se ve bien, está bien»
Un eje recortado, una torta con diez partes o dos líneas que sugieren una causa pueden engañar aunque el diseño sea atractivo. Revisa
qué entiende alguien que solo mira el gráfico.
:::

### P15 · Taller, paso 1: el borrador con IA
cubre: H1, C1
fuentes: F-M3-09, F-H-44
bloque: Proceso paso a paso + actividad

Ahora armas tu informe. Tienes dos caminos, los dos gratuitos.

El primero es Gemini. Pega tu síntesis contrastada y tu lista de fuentes, sin datos personales, y pídele: «Actúa como analista. Con
esta síntesis, redacta un informe breve de máximo dos páginas para [quién lo lee]. Estructura: mensajes clave (3 a 5 viñetas),
introducción, lo que se investigó, hallazgos con sus limitaciones, recomendaciones y referencias. Usa títulos que informen. Usa solo
la información de la síntesis. Mantén cada cita entre paréntesis junto a su afirmación. No agregues datos, fuentes ni recomendaciones
que no se desprendan de los hallazgos».

El segundo es Gemini Notebook. Si tus fuentes ya están en un cuaderno, puedes pedirle un informe a partir de ellas, porque el plan
gratuito permite hasta 10 informes al día [@F-H-44]. Igual vas a tener que ajustarlo a la estructura del informe breve [@F-M3-09].

En los dos casos, lo que obtienes es un borrador. Ya viste en este módulo que la IA puede agregar con seguridad contenido que no
estaba en tus fuentes, así que el paso siguiente es revisarlo línea por línea.

:::actividad Tu borrador
Genera el borrador por el camino que prefieras. Antes de seguir, marca con un color cada afirmación que no reconozcas de tu síntesis.
Si aparece algo nuevo, bórralo o búscale respaldo.
:::

### P16 · Taller, paso 2: revisa claridad, orden y citas
cubre: A1, C1, C2
fuentes: F-M3-09, F-M3-11
bloque: Lista de verificación (checklist) descargable

La claridad y el orden son una forma de respeto por quien lee. El IDRC recomienda lenguaje claro y sin jerga, títulos informativos,
listas de cinco a siete viñetas como máximo, y pedirle a alguien ajeno al tema que lea el informe antes de enviarlo [@F-M3-09]. Revisa tu
borrador con esta lista:

- [ ] Tiene las seis partes en orden, y los títulos dicen algo, no solo nombran la sección.
- [ ] No supera las dos páginas, y ninguna lista pasa de siete viñetas.
- [ ] Cada hallazgo tiene su cita y su limitación.
- [ ] Cada recomendación se desprende de un hallazgo.
- [ ] No hay datos que no estén en tu síntesis.
- [ ] Cada cita del texto está en las referencias, y al revés.
- [ ] Cada referencia tiene autor, fecha (o s.f.), título y URL [@F-M3-11].
- [ ] Si usaste un texto generado por IA, está citado y guardaste el prompt.
- [ ] Una persona ajena al tema lo leyó y entendió los mensajes clave.

La última revisión es la que más se salta y la que más sirve. Quien conoce el tema ya no ve la jerga que usa; quien no lo conoce la
nota de inmediato.

:::ejemplo La prueba de la vecina
Rosa le pide a su vecina, que no trabaja en salud, que lea sus mensajes clave. La vecina entiende todo menos «tasa de no
presentación». Rosa lo cambia por «pacientes que no llegan a su hora».
:::

### P17 · Cierre: tu informe para el Hito 3
cubre: H1, C1, C2
fuentes: F-M3-09, F-M3-11
bloque: Texto + actividad de cierre (entrega)

En este taller armaste las piezas de un informe breve: mensajes clave que se escriben al final, hallazgos con sus limitaciones,
recomendaciones concretas, creíbles y viables, citas en APA 7, incluidas las de leyes y de contenido generado por IA, y un gráfico
simple que no engaña [@F-M3-09; @F-M3-11]. Después hiciste un borrador con IA y lo revisaste con una lista de verificación.

Tu informe no tiene que ser perfecto. Tiene que ser claro, ordenado y verificable: que cualquier persona pueda seguir cada dato hasta
su fuente y entender por qué recomiendas lo que recomiendas.

:::actividad Tu informe breve
Entrega un informe de una a dos páginas sobre el problema de tu proyecto, con:
1. Mensajes clave (3 a 5 viñetas).
2. Introducción: por qué importa el problema.
3. Lo que se investigó: tus preguntas y las herramientas y fuentes que usaste.
4. Hallazgos, cada uno con su cita y su limitación.
5. Al menos dos recomendaciones que se desprendan de los hallazgos.
6. Referencias en APA 7 de todas las fuentes citadas.
7. Si aporta al argumento, un gráfico o una tabla con datos tuyos o de tus fuentes.

Antes de entregar, aplica la lista de verificación de P16 y pídele a alguien que lo lea.
:::

### Ideas clave

1. Un informe breve presenta hallazgos y recomendaciones a alguien que debe decidir; trata un solo tema y no supera unas dos páginas.
2. Su estructura es: mensajes clave, introducción, lo que se investigó, hallazgos con limitaciones, recomendaciones y referencias.
3. Los mensajes clave van al inicio, pero se escriben al final, cuando ya está claro qué se encontró.
4. Cada hallazgo dice qué se encontró, quién lo respalda y hasta dónde aplica; cada recomendación se desprende de un hallazgo.
5. En APA 7, cada fuente se cita en el texto con autor y año, y aparece completa en la lista de referencias; las leyes chilenas y el contenido generado por IA tienen su propio formato.
6. El gráfico se elige según la relación que se quiere mostrar, con el eje en 0 para comparar cantidades y aclarando cuando no hay causa y efecto.
7. La IA puede hacer el borrador del informe, pero la estructura, los datos y las citas los revisa una persona antes de entregar.

### Referencias bibliográficas

- Bibliotecas UC. (2026a, 20 de octubre). *Guía de normas APA 7*. Pontificia Universidad Católica de Chile. https://guiastematicas.bibliotecas.uc.cl/c.php?g=992585&p=7181600
- Bibliotecas UC. (2026b, 13 de agosto). *IA: citar y referenciar*. Pontificia Universidad Católica de Chile. https://guiastematicas.bibliotecas.uc.cl/ia/citar
- datos.gob.es. (2023, 5 de enero). *Cómo elegir el gráfico correcto para visualizar datos abiertos*. Gobierno de España. https://datos.gob.es/es/blog/como-elegir-el-grafico-correcto-para-visualizar-datos-abiertos
- Google. (s. f.). *Cambiar a un plan superior de Gemini Notebook*. https://support.google.com/notebooklm/answer/16213268?hl=es
- International Development Research Centre. (s. f.). *How to write a policy brief*. https://idrc-crdi.ca/en/funding/resources-idrc-grantees/how-write-policy-brief
- Ley 19.628. (1999, 28 de agosto). *Sobre protección de la vida privada*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=141599
- LibreTexts Español. (2022, 30 de octubre). *Sintetizar fuentes (Introducción a la composición universitaria, 17.5)*. https://espanol.libretexts.org/Bookshelves/Humanidades/Humanidades/Composicion/Composicion_Introductoria/Libro%3A_Introduccion_a_la_composicion_universitaria_(Lumen)/03%3A_Investigaci%C3%B3n/17%3A_An%C3%A1lisis_de_fuente/17.5%3A_Sintetizar_fuentes
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1


## M3-AE4 · Análisis crítico y privacidad

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M3-13, F-M3-14
bloque: Texto + imagen

En este módulo usaste la IA para buscar, contrastar y presentar información. Queda una pregunta que atraviesa todo lo anterior: qué le
estás entregando a la herramienta y qué te está devolviendo. Por un lado, sus resultados pueden tener sesgos, errores difíciles de
rastrear y límites. Por otro, lo que escribes o subes puede incluir datos de personas o información de tu empresa que no debería salir
de ahí.

El aprendizaje esperado es este: Evaluar críticamente los resultados de la IA y los riesgos de privacidad al usar información laboral,
proponiendo prácticas de uso seguro. Al final deberías poder clasificar la información de tu trabajo según su sensibilidad, decidir con
fundamento qué puede ingresar a una herramienta de IA y proponer una práctica segura para lo que no puede.

Los riesgos que vas a ver no son supuestos: están descritos por organismos como el NIST, el instituto de normas y tecnología de Estados
Unidos, y por la ley chilena de protección de datos [@F-M3-13; @F-M3-14]. Los ejemplos con Camila, Andrés y Rosa son ficticios, pero muestran cómo aparecen
esos riesgos en tareas de oficina comunes. En la actividad de análisis de casos vas a ver situaciones reales.

Como trabajas con información real todos los días, este tema tiene una consecuencia práctica: cuando quieras probar una herramienta
con un documento de tu trabajo, usa una copia sin datos sensibles o con datos de prueba, y sigue lo que diga tu empresa.

:::clave
Lo que verás sobre leyes es orientación general para usar la IA con cuidado, no asesoría legal. Si en tu trabajo tienes una duda
concreta sobre datos personales, consulta a quien corresponda en tu organización o a un profesional.
:::

### P02 · Evaluar un resultado: tres preguntas
cubre: S1
fuentes: F-M3-13, F-M3-01
bloque: Texto + proceso en 3 pasos

En el módulo 1 aprendiste a validar una respuesta, y en el tema 2 de este módulo, a contrastar fuentes. **Evaluar críticamente** va
un paso más allá: no solo preguntas si un dato es correcto, sino qué tan confiable es el proceso que lo produjo. Para eso sirven tres
preguntas, en este orden:

1. ¿Qué sesgos puede tener? ¿A quién representa bien esta respuesta y a quién deja fuera?
2. ¿Puedo rastrearla? ¿Sé de dónde salió cada afirmación?
3. ¿Qué límites tiene? ¿Qué no puede hacer bien esta herramienta, aunque lo intente?

NIST describe estos tres frentes entre los riesgos de la IA generativa: el sesgo dañino, la confabulación (lo que solemos llamar
alucinación) y los problemas de integridad de la información [@F-M3-13]. Las herramientas de este módulo ayudan con la trazabilidad, porque un
buscador con citas enlaza cada afirmación a su fuente [@F-M3-01]. Los otros dos frentes, en cambio, no los resuelven.

Camila aplicó las tres preguntas al borrador de su informe del Hito 3 antes de entregarlo a la gerenta de administración. Descubrió
que casi todas las fuentes sobre archivo de documentos digitales eran de otros países y que un párrafo no tenía ninguna cita. Ajustó
los mensajes clave para decir que la evidencia chilena era escasa y sacó el párrafo sin respaldo.

:::comprueba
¿Qué agrega «evaluar críticamente» a «validar un dato»?
- a) Nada, son lo mismo
- **b) Revisar también los sesgos, la trazabilidad y los límites del proceso que produjo la respuesta**
- c) Confiar más en la herramienta
Retroalimentación: Validar revisa si un dato es correcto. Evaluar críticamente revisa también qué tan confiable es el camino por el
que llegó.
:::

### P03 · Sesgos en una investigación hecha con IA
cubre: S1
fuentes: F-M3-13
bloque: Texto + escenario

NIST explica que la IA generativa puede amplificar sesgos históricos y sociales y rendir distinto según el grupo o el idioma, en parte
porque sus datos de entrenamiento no son representativos [@F-M3-13]. También describe la **homogeneización**: respuestas demasiado parecidas
entre sí, que repiten una sola mirada.

En una investigación de trabajo esto se nota de formas concretas. Si hay más información en inglés o sobre otros países, la respuesta
puede describir prácticas o normas que no aplican en Chile. Como las fuentes más visibles suelen ser de grandes empresas, una pyme o
un centro médico pequeño quedan fuera del retrato. Y una respuesta sobre «el cliente típico» o «el trabajador ideal» puede dejar fuera
a grupos completos de personas.

Para detectarlo, hazte tres preguntas frente a cada resultado: de qué país y de qué tipo de organización son las fuentes, si eso
aplica a tu realidad y a quién no menciona. Un error común es pensar que la IA es neutral porque es una máquina. Los modelos aprenden
de lo que la gente escribió y publicó, con sus desigualdades, y una respuesta puede ser correcta en los datos y aun así representar a
un solo grupo.

:::ejemplo Rosa detecta un sesgo
Rosa pide ideas para reducir la inasistencia. Todas suponen que los pacientes tienen teléfono inteligente y correo. Muchos pacientes de
su centro son personas mayores que prefieren una llamada. Rosa agrega esa limitación a su informe y pide ideas pensadas para ese
grupo.
:::

### P04 · Trazabilidad: ¿puedo seguir el dato hasta su origen?
cubre: S1
fuentes: F-M3-01, F-M3-13
bloque: Texto + tabla

La **trazabilidad** es la posibilidad de seguir una afirmación hasta su origen. Es lo que te permite verificarla y citarla, y no todas
las respuestas de IA la tienen en el mismo nivel.

| Situación | Trazabilidad | Qué hacer |
|---|---|---|
| Respuesta de un asistente sin fuentes | Baja: no sabes de dónde salió | Úsala solo como pista y busca la fuente |
| Respuesta de un buscador con citas | Media: cada afirmación enlaza a una página [@F-M3-01] | Abre cada cita y revisa que diga eso |
| Respuesta de un asistente sobre tus fuentes | Alta: cita la parte exacta de tus documentos, como viste en el tema 1 | Toca las citas y compara con el texto |

Hay un límite que ninguna herramienta resuelve hoy. NIST señala que la mayoría de los desarrolladores no informa con qué datos entrenó
sus modelos [@F-M3-13]. Cuando un asistente responde «de memoria», no hay forma de saber de qué textos aprendió eso.

Por eso, en este curso, la regla es simple: lo que no puedes rastrear no lo presentas como hecho. Si necesitas mencionarlo, dices que
no está verificado.

:::comprueba
¿Qué respuesta tiene mayor trazabilidad?
- a) La de un asistente que responde sin mostrar fuentes
- b) Un resumen que te reenvió un compañero
- **c) La de un asistente sobre fuentes propias que cita el párrafo de tu documento**
Retroalimentación: Cuando la respuesta apunta a la parte exacta de un documento que tienes, puedes comprobarla de inmediato.
:::

### P05 · Límites que no desaparecen
cubre: S1
fuentes: F-M3-13, F-M3-02
bloque: Texto + escenario

Aun con buenas herramientas, hay límites que siguen ahí. NIST explica que la IA puede producir contenido falso con total seguridad,
incluso razonamientos o **citas inventadas** para justificar la respuesta, y que puede presentar una opinión como si fuera un hecho sin
reconocer cuándo no está segura [@F-M3-13]. Trabajar sobre tus propios documentos tampoco lo elimina: la ayuda de Gemini Notebook advierte que
sus respuestas pueden tener errores, y recomienda consultar a un profesional en temas médicos, legales o financieros [@F-M3-02].

Este último punto importa mucho en el trabajo. Una herramienta puede ayudarte a entender una norma o a ordenar información, pero no
reemplaza a quien tiene la responsabilidad y la formación para decidir. Andrés, por ejemplo, le preguntó a un asistente si su bodega
cumplía una norma de seguridad y recibió una respuesta segura y detallada. La usó para entender de qué trataba la norma, pero la
decisión la tomó con el prevencionista de riesgos de la empresa.

Por eso un error común es creer que, si la herramienta trabaja con tus documentos, sus conclusiones son seguras. Mejora la
trazabilidad, pero puede resumir mal o mezclar ideas, y en temas legales, médicos o financieros la conclusión la revisa una persona
con formación en el tema.

:::ejemplo Un informe con referencias que nadie abrió
Una compañera de Rosa preparó para la dirección del centro médico un informe sobre tiempos de espera con ayuda de un asistente. Las
referencias se veían impecables, con autores, años y títulos. En la reunión, el director quiso leer dos de ellas y no las encontró:
no existían. El informe tuvo que rehacerse y, aunque el resto de los datos era correcto, ya nadie confiaba en él para decidir.
:::

### P06 · El otro lado: lo que tú le entregas a la IA
cubre: S2, S4
fuentes: F-M3-20, F-M3-13
bloque: Texto + escenario

Hasta aquí evaluaste lo que la IA te devuelve. Ahora mira lo que tú le entregas. Cada pregunta que escribes y cada archivo que subes
sale de tu control y queda en los sistemas de un proveedor.

El Centro de Privacidad de Gemini lo explica con claridad. Con el ajuste de actividad encendido, Google usa tu actividad para mejorar
sus servicios, incluido el entrenamiento de IA generativa, y revisores humanos leen una parte de las conversaciones, desvinculadas de
tu cuenta. El mismo centro recomienda expresamente no ingresar datos confidenciales ni nada que no quieras que vea un revisor [@F-M3-20].

NIST agrega otro riesgo: los modelos pueden filtrar, generar o inferir datos sensibles de personas, incluso combinando información que
estaba dispersa [@F-M3-13]. Un dato suelto puede parecer inofensivo, pero junto con otros puede identificar a alguien.

Por eso, antes de escribir o subir algo, la pregunta no es solo si te va a servir la respuesta, sino también si puedes entregar esa
información. Una vez que pegas algo en una herramienta ya no lo puedes «des-pegar», así que la decisión se toma antes.

:::ejemplo La nómina que se subió completa
En la constructora donde trabaja Camila, una persona del área de remuneraciones quiso revisar más rápido la nómina del mes y la subió
entera a un asistente gratuito, con nombres, RUT y sueldos. No lo hizo por descuido, sino para trabajar mejor. Cuando la gerencia se
enteró, ya no había forma de retirar esa información ni de saber quién podía haberla leído. La empresa decidió definir por escrito qué
herramientas se pueden usar y con qué información.
:::

### P07 · Qué es un dato personal
cubre: S2, C1
fuentes: F-M3-14, F-M3-15
bloque: Texto + tarjetas (flashcards)

Para decidir qué puedes entregar, primero tienes que reconocer un **dato personal**. En Chile lo define la ley. La Ley 19.628, vigente,
dice que es cualquier información sobre personas naturales identificadas o identificables [@F-M3-14]. La Ley 21.719, que según su texto rige
desde el 1 de diciembre de 2026, lo amplía: es cualquier información vinculada a una persona natural identificada o identificable,
directa o indirectamente, y da como ejemplos el nombre, el RUN y elementos de su identidad física, genética, psíquica, económica,
cultural o social [@F-M3-15].

Fíjate en la palabra identificable. No hace falta el nombre para que un dato sea personal: basta con que, juntando datos, se pueda
saber de quién se habla. Por ejemplo, «el paciente de las 10:30 del martes con el doctor de traumatología», «la única supervisora del
turno de noche de la sucursal de Maipú», una foto, una dirección o un número de teléfono.

Una **persona natural** es un ser humano. Los datos de una empresa, que es una persona jurídica, como sus ventas, no son datos
personales, aunque pueden ser confidenciales, como verás en P09. En una oficina conviven los dos tipos: la planilla de facturas que
registra Camila tiene datos de empresas, pero si un proveedor es una persona que trabaja por su cuenta, su nombre y su RUT son datos
personales.

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

Algunos datos personales son **sensibles**: su mal uso puede causar discriminación o un daño grave, y por eso la ley los protege con
más fuerza. Las dos leyes los describen así.

| Ley 19.628 (vigente) | Ley 21.719 (según su texto, desde el 1 de diciembre de 2026) |
|---|---|
| Datos que se refieren a características físicas o morales de las personas, o a su vida privada o intimidad. Por ejemplo: hábitos personales, origen racial, ideologías y opiniones políticas, creencias religiosas, salud física o psíquica, vida sexual [@F-M3-14] | Datos que revelan, entre otros: origen étnico o racial; afiliación política, sindical o gremial; situación socioeconómica; convicciones ideológicas o filosóficas; creencias religiosas; salud; perfil biológico; datos biométricos; vida sexual; orientación sexual e identidad de género [@F-M3-15] |

Las dos leyes coinciden en lo central: salud, creencias, origen, opiniones políticas y vida sexual son datos sensibles. La Ley 21.719
nombra de forma expresa otros que aparecen a menudo en el trabajo, como la afiliación sindical, la situación socioeconómica y los datos
biométricos, por ejemplo la huella con que se marca la entrada.

En una oficina los datos sensibles aparecen más de lo que parece: una licencia médica que llega para tramitar, un certificado de
discapacidad, la lista de quienes pertenecen al sindicato.

:::error «Si quito el nombre, un dato de salud deja de ser sensible»
Si con el resto de la información se puede saber de quién se trata, sigue siendo un dato personal sensible. Un diagnóstico con la
fecha, el cargo y el turno puede identificar a alguien.
:::

### P09 · Información confidencial de una organización
cubre: S2, C1
fuentes: F-M3-19, F-M3-17
bloque: Texto + tabla de tres niveles

No todo lo que hay que proteger son datos de personas. Una empresa también tiene **información confidencial**: precios negociados,
listas de clientes, ventas, remuneraciones, contratos o planes que aún no se anuncian. El Instituto Nacional de Ciberseguridad de
España (INCIBE) propone clasificar la información de una empresa según quién puede acceder a ella, en tres niveles [@F-M3-19].

| Nivel | Quién accede | Ejemplos |
|---|---|---|
| Confidencial | Solo personas concretas | Remuneraciones, contratos, datos de salud del personal |
| Interna | Solo el personal de la empresa | Procedimientos internos, reportes de stock, turnos |
| Pública | Cualquiera | Catálogo publicado, horarios de atención, comunicados de prensa |

INCIBE propone además pensar en el daño que causaría que esa información se pierda o se filtre: daño a la imagen, consecuencias
legales o económicas, o que el trabajo se detenga. Por ejemplo, solo quienes procesan las remuneraciones deberían acceder a esos
datos. En Chile, los lineamientos del Estado para el uso de IA, que verás en P12, también piden cuidar la información confidencial de
las personas jurídicas y no solo la de las personas [@F-M3-17].

:::ejemplo Andrés clasifica
Andrés revisa los documentos que maneja. El catálogo de productos es público. El reporte semanal de stock es interno. La lista de
precios especiales para un cliente es confidencial: solo la ven él, su jefatura y el área comercial.
:::

### P10 · Ley 19.628: lo que pide hoy
cubre: S3
fuentes: F-M3-14
bloque: Texto + escenario

La Ley 19.628, sobre protección de la vida privada, se publicó en 1999 y es la que está vigente. Dos de sus reglas se relacionan
directamente con el uso de IA en el trabajo.

La primera es que para tratar datos personales se necesita una base. El artículo 4 dice que el tratamiento de datos personales requiere
que una ley lo autorice o que la persona dueña de los datos, el **titular**, dé su consentimiento expreso, informado y por escrito [@F-M3-14].
Piénsalo en tu trabajo: pegar la lista de clientes en una herramienta de IA para que la ordene ya es hacer algo con datos personales
de otras personas, y antes de hacerlo tienes que preguntarte si tienes una base para ello.

La segunda es el **deber de secreto**. El artículo 7 obliga a quienes trabajan en el tratamiento de datos personales a guardar secreto
sobre ellos, incluso después de dejar esa función. Te alcanza aunque no seas dueña o dueño de la empresa: si tu trabajo incluye manejar
datos de clientes, pacientes o compañeros, debes guardar reserva sobre ellos.

Camila, por ejemplo, lleva la planilla de clientes con deuda de la constructora. Quería que Gemini le ayudara a ordenarla y a redactar
los correos de cobranza, y pensó en pegarla completa. Se detuvo: esos datos los conoce por su trabajo y no son suyos para compartir.
Armó una copia con clientes inventados y las mismas columnas, y con eso le pidió la fórmula para ordenar y una plantilla de correo.

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
fuentes: F-M3-15, F-M3-16
bloque: Texto + línea de tiempo

La Ley 21.719 moderniza la Ley 19.628: regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de
Datos Personales. Se publicó el 13 de diciembre de 2024. Su texto dice que sus cambios rigen desde el primer día del mes 24 posterior a
la publicación, y el sitio LeyChile de la Biblioteca del Congreso Nacional registra esa fecha como el 1 de diciembre de 2026 [@F-M3-15].

Esa fecha podría cambiar. Hay un proyecto de ley del Ejecutivo, el boletín 18623-07, que propone postergar la entrada en vigencia al 1
de diciembre de 2027. Al 24 de octubre de 2026, según la ficha de tramitación del Senado, está en primer trámite y no ha sido aprobado [@F-M3-16].
Mientras no se apruebe y publique, la fecha que fija la ley es el 1 de diciembre de 2026.

| Fecha | Hecho |
|---|---|
| 13-12-2024 | Se publica la Ley 21.719 |
| 01-09-2026 | Ingresa al Senado el proyecto que propone postergarla |
| 01-12-2026 | Fecha de vigencia según el texto de la ley |

Ya viste dos de sus cambios: una definición más amplia de dato personal (P07) y una lista más larga de datos sensibles (P08). Además,
la nueva ley obliga a quien es responsable de los datos a guardar secreto o confidencialidad, incluso después de terminar su relación
con el titular.

:::clave
Las normas sobre datos están cambiando. Cuando uses estas fechas en un trabajo, revisa la ficha de tramitación y di a qué fecha
corresponde lo que afirmas, como practicaste en el tema 2.
:::

### P12 · Políticas internas: el ejemplo del Estado
cubre: S3, S4
fuentes: F-M3-17, F-M3-18
bloque: Texto + lista con viñetas

Chile todavía no tiene una ley general de inteligencia artificial: el proyecto que regula los sistemas de IA, el boletín 16821-19, está
en segundo trámite en el Senado [@F-M3-18]. Por eso, en el día a día, lo que más pesa son las **políticas internas**, que son las reglas propias de
cada organización sobre qué herramientas se pueden usar y qué información puede salir.

Un ejemplo chileno es el Oficio Circular N.° 711, de 2023, disponible en el sitio del Ministerio de Ciencia, con lineamientos para el
uso de IA en el sector público [@F-M3-17]. Son recomendaciones para los órganos del Estado, no obligaciones para las empresas privadas, pero
sirven como referencia de lo que hace una organización cuidadosa. Recomiendan:

- tratar los datos personales, en especial los sensibles, de acuerdo con la Ley 19.628 y solo para fines autorizados;
- no ingresar información personal, en especial sensible, en herramientas de IA generativa que el organismo no haya contratado o desarrollado;
- cuidar también la información confidencial de las personas jurídicas;
- capacitar a quienes trabajan en el uso de estas herramientas.

En tu caso, lo primero es preguntar a tu jefatura si tu empresa tiene una política sobre IA y seguirla. Si no la tiene, aplica estos
mismos criterios y deja por escrito qué herramienta usas y con qué información.

:::error «Si la herramienta es gratuita y conocida, puedo usarla con información del trabajo»
Que una herramienta sea popular no significa que tu empresa la haya autorizado. Una herramienta personal y gratuita no es una
herramienta contratada por tu organización, y no tiene sus mismas garantías.
:::

### P13 · Clasificar antes de ingresar
cubre: H1, C1
fuentes: F-M3-19, F-M3-15
bloque: Diagrama de decisión + tabla

Ahora juntas todo en un método para decidir qué puede ingresar a una herramienta de IA. Se basa en dos preguntas. La primera es quién
puede acceder a esa información, y la respondes con la clasificación de INCIBE: pública, interna o confidencial [@F-M3-19]. La segunda es si
tiene datos personales y si son sensibles, y la respondes con las definiciones de la ley [@F-M3-15]. Con las dos respuestas, decides.

| | Sin datos personales | Con datos personales | Con datos sensibles |
|---|---|---|---|
| Pública | Puede ingresar | Solo anonimizada | No ingresa |
| Interna | Solo en una herramienta autorizada, o sin detalles que identifiquen a la empresa | Solo anonimizada y en una herramienta autorizada | No ingresa |
| Confidencial | No ingresa a una herramienta no autorizada | No ingresa | No ingresa |

Esta tabla es un criterio del curso que aplica las fuentes. Lo público puede ingresar. Lo que tiene datos sensibles o es confidencial
no debe ingresar a una herramienta que tu organización no autorizó, como recomiendan los lineamientos del Estado que viste en P12.
Entre esos extremos está lo interno, que se puede trabajar si quitas lo que identifica a la empresa o a las personas.

:::clave
Cuando dudes entre dos casillas, elige la más estricta. Es más fácil anonimizar de más que deshacer una filtración.
:::

### P14 · Ejercicio: ¿qué puede ingresar?
cubre: H1, C1, C2
fuentes: F-M3-19, F-M3-15
bloque: Escenario + actividad de clasificación

Aplica el método a situaciones de oficina. Para cada una, clasifica la información, decide si puede ingresar a una herramienta de IA
gratuita que tu empresa no contrató y nombra la regla que aplicaste. Después compara con la propuesta.

Fíjate en que la respuesta casi nunca es solo «sí» o «no». Muchas veces la salida es quitar algo, pedir solo una plantilla o hacer el
cálculo en tu propia planilla. Una decisión con fundamento dice qué información es, qué regla aplica y qué haces en consecuencia.

:::actividad Decide y fundamenta
1. Andrés quiere que Gemini redacte un aviso con el horario de atención de la bodega, que está publicado en la puerta. → Pública, sin datos personales. Puede ingresar.
2. Rosa quiere ordenar la lista de pacientes del día con su especialidad. → Confidencial, con datos sensibles (salud). No ingresa. Regla: dato sensible según la ley (P08) [@F-M3-15].
3. Camila quiere que Gemini ordene la ficha de un proveedor que trabaja por su cuenta, con su nombre, RUT, dirección y cuenta bancaria. → Interna, con datos personales. No ingresa así: quita el RUT, la dirección y la cuenta, y pide solo el formato de la ficha con datos inventados.
4. Andrés quiere resumir el reporte de stock de la semana, sin nombres de clientes. → Interna, sin datos personales. Solo sin detalles que identifiquen a la empresa, o en una herramienta autorizada.
5. Rosa quiere redactar un correo a una compañera sobre su licencia médica. → Dato sensible de otra persona. No ingresa. Escribe ella el correo, o pide una plantilla general.
6. Andrés quiere comparar los sueldos del equipo para proponer un bono. → Confidencial, con datos personales. No ingresa. Regla: las remuneraciones son confidenciales [@F-M3-19]; el asistente puede darle la fórmula sin ver los datos.
:::

### P15 · Anonimizar y no pegar datos de terceros
cubre: S4, C2
fuentes: F-M3-13, F-M3-15
bloque: Texto + comparación antes/después

Muchas veces no necesitas los datos reales para que la IA te ayude. **Anonimizar** es quitar o cambiar los datos de modo que ya no se
pueda saber a quién se refieren. Las técnicas son simples:

- quitar nombres, RUN o RUT de personas, teléfonos, correos y direcciones;
- reemplazarlos por roles o códigos, como «Cliente A», «Paciente 1» o «Proveedor 3»;
- generalizar, por ejemplo «una persona de unos 60 años» en vez de la fecha de nacimiento;
- trabajar con totales o promedios en vez de casos individuales;
- usar datos inventados que tengan la misma forma que los reales.

Compara dos pedidos. «Redacta un correo para Juana Pérez, RUN 12.345.678-9, que faltó a su hora de cardiología del 3 de mayo» entrega
datos sensibles de una paciente. «Redacta un correo cordial para un paciente que faltó a su hora; deja espacios para el nombre y la
fecha» consigue lo mismo sin entregar nada. Rosa hace eso con sus recordatorios: pide una plantilla con espacios en blanco y la
completa ella en el sistema del centro.

Cuidado con la reidentificación. NIST advierte que un modelo puede inferir datos de una persona combinando información dispersa [@F-M3-13]. Si
quitas el nombre pero dejas el cargo, el turno y la sucursal, alguien puede saber de quién hablas. Por eso la Ley 21.719 habla de
personas identificables directa o indirectamente [@F-M3-15].

:::error «Si son datos de otra persona pero no los publico, no hay problema»
Pegar datos de un tercero en una herramienta ya es entregarlos a otra organización. La regla práctica es no pegar datos de terceros, y
cuando la tarea lo exige, anonimizar antes.
:::

### P16 · Ajusta la configuración de privacidad
cubre: S4
fuentes: F-H-15, F-H-30
bloque: Texto + pestañas (tabs) por herramienta

Algunos proveedores usan tus conversaciones para mejorar sus modelos, y en varios casos ese uso se puede apagar. Vale la pena revisarlo
en las dos herramientas de este módulo que más vas a usar. Lo que sigue es lo que decían los proveedores al 24 de octubre de 2026, y
los nombres de los ajustes pueden cambiar con cada versión de la aplicación.

En Gemini, cuando el ajuste de actividad está encendido (aparece como «Guardar actividad» o «Conservar la actividad», según la
traducción), revisores humanos pueden leer conversaciones para mejorar los servicios de Google. Para evitarlo hay que apagar ese ajuste
o usar conversaciones temporales. Aun así, Google guarda las conversaciones por un tiempo corto para responder y por seguridad [@F-H-15].

En Perplexity, el plan gratuito trae activado el ajuste «AI data retention», lo que significa que tus datos se usan para entrenar. Se
apaga en la configuración de la cuenta, en la sección Preferences, y la exclusión rige solo desde ese momento: lo que ya se usó antes
no se retira [@F-H-30].

Gemini Notebook, como viste en el tema 1, no entrena con tus datos si usas una cuenta personal, salvo que envíes comentarios. Si en tu
trabajo usas otra herramienta, busca en su configuración un ajuste parecido antes de empezar.

:::clave
Configurar la privacidad reduce el riesgo, pero no lo elimina. La regla de P13 sigue valiendo: lo confidencial no se pega, aunque el
entrenamiento esté apagado.
:::

### P17 · Responsabilidad, ética y confidencialidad
cubre: A1, A2
fuentes: F-M3-17, F-M3-14
bloque: Texto + escenario

Proteger la información no es solo cumplir una regla. Es una forma de **responsabilidad** con las personas que confían sus datos a tu
organización: clientes, pacientes, proveedores y compañeros.

Actuar con responsabilidad y ética significa usar los datos de otras personas solo para los fines que ellas o la ley autorizaron, como
recomiendan los lineamientos del Estado de acuerdo con la Ley 19.628 [@F-M3-17; @F-M3-14]. Usar la planilla de clientes para «probar» una herramienta es un
fin distinto del que tuvo esa información, aunque la intención sea buena.

La **confidencialidad** es guardar reserva sobre lo que conoces por tu trabajo, y no es solo una buena costumbre: la Ley 19.628 obliga
a guardar secreto a quien trabaja con datos personales, y la nueva ley mantiene ese deber, como viste en P11. En la práctica, se nota
en gestos pequeños: no reenviar una planilla «para que la revise el asistente», no comentar en un chat el diagnóstico de un compañero,
preguntar antes de subir un documento que no es tuyo.

También es responsable decir que no y ofrecer otra salida. Casi siempre hay una forma de que la IA ayude sin ver los datos reales.

:::ejemplo Andrés recibe un pedido
Un compañero le pide a Andrés que pase la lista de clientes por un asistente «para sacar los correos más rápido». Andrés le explica que
esa lista es confidencial y tiene datos personales, y le propone otra salida: pedirle al asistente solo los pasos para hacerlo en la
planilla de la empresa.
:::

### P18 · Cierre: tu protocolo de uso seguro
cubre: C1, C2, H1, S1, S4
fuentes: F-M3-19, F-M3-17
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema evaluaste los resultados de la IA con tres preguntas, sobre sus sesgos, su trazabilidad y sus límites. Luego miraste lo
que tú entregas: aprendiste a reconocer datos personales, datos sensibles e información confidencial, conociste lo que piden la Ley
19.628 y la Ley 21.719 y el ejemplo de política interna del Estado, y armaste un método para clasificar y decidir [@F-M3-17; @F-M3-19]. También practicaste
anonimizar y configurar la privacidad.

Ahora lo conviertes en un protocolo para tu propio cargo. Una decisión con fundamento tiene tres partes: qué información es, qué regla
aplica y qué haces en consecuencia.

:::actividad Tu protocolo de uso seguro
Escribe en tu bitácora:
1. Tres tipos de información que manejas en tu cargo, cada uno clasificado como público, interno o confidencial, y con o sin datos personales o sensibles.
2. Para uno de ellos, tu decisión: si puede ingresar a una herramienta de IA y qué regla aplicaste (la clasificación, la ley o la política interna).
3. Una práctica segura concreta para ese caso, por ejemplo anonimizar con roles, pedir solo una plantilla o apagar el uso de los chats para entrenar.
4. Tu revisión del Hito 3: confirma que tu informe no incluye datos personales ni información confidencial de tu empresa.
5. Una respuesta de IA que usaste en tu informe, revisada con las tres preguntas de P02, con lo que encontraste y lo que ajustaste.
:::

### Ideas clave

1. Evaluar críticamente un resultado de IA es revisar sus sesgos, su trazabilidad y sus límites, no solo si un dato es correcto.
2. La IA puede rendir distinto según el grupo o el idioma; lo que no puedes rastrear hasta su origen no se presenta como hecho.
3. Dato personal es cualquier información que identifica o permite identificar a una persona, directa o indirectamente; los datos sensibles, como los de salud, exigen más cuidado.
4. La información confidencial también incluye la de una organización: clientes, precios, ventas o remuneraciones.
5. La Ley 19.628 está vigente; la Ley 21.719, publicada el 13-12-2024, rige según su texto desde el 01-12-2026, y hay un proyecto en trámite que propone postergarla.
6. Para decidir qué ingresa a una herramienta de IA: clasifica por acceso (pública, interna, confidencial) y por tipo de dato (personal, sensible); lo confidencial y lo sensible no ingresan a una herramienta no autorizada.
7. Las prácticas seguras son anonimizar, no pegar datos de terceros, apagar el uso de los chats para entrenar, probar con copias sin datos sensibles y seguir la política de tu empresa.

### Referencias bibliográficas

- Google. (s. f.-a). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-b). *Más información sobre Gemini Notebook*. Ayuda de NotebookLM. https://support.google.com/notebooklm/answer/16164461?hl=es-419
- Google. (2026, 23 de octubre). *Centro de privacidad de Apps con Gemini*. https://support.google.com/gemini/answer/13594961?hl=es-419
- Instituto Nacional de Ciberseguridad. (2018, 7 de diciembre). *Para proteger la información de tu empresa, primero clasifícala*. INCIBE. https://www.incibe.es/empresas/blog/proteger-informacion-tu-empresa-primero-clasificala
- Ley 19.628. (1999, 28 de agosto). *Sobre protección de la vida privada*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=141599
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- Oficio Circular 711. (2023). *Lineamientos para el uso de herramientas de inteligencia artificial en el sector público*. Ministerio de Ciencia, Tecnología, Conocimiento e Innovación. https://minciencia.gob.cl/uploads/filer_public/ae/9a/ae9a7ce7-807b-4781-9ac3-9b253bfbe735/of_n711_2023_dis_lin_ia_minciencia.pdf
- Perplexity. (s. f.-a). *Data collection at Perplexity*. https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
- Perplexity. (s. f.-b). *How does Perplexity work?* https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work
- Senado de Chile. (2026a). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- Senado de Chile. (2026b). *Proyecto que regula los sistemas de inteligencia artificial (Boletín 16821-19)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=16821


---

# Módulo 4 · Contenido visual, sonoro y audiovisual

**Competencia:** Producir contenido visual, sonoro y audiovisual con IA generativa, respetando licencias, atribución y criterios éticos, para piezas de comunicación laboral.


## M4-AE1 · Ecosistema multimedia con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M4-06
bloque: Texto + imagen

En este módulo pasas del texto a las imágenes, el audio y el video. Hay muchas herramientas de IA que producen piezas visuales y sonoras, y cada una pone sus propias reglas sobre lo que generas: si lo puedes usar en tu trabajo, si lo puedes publicar y qué tienes que declarar. La Organización Mundial de la Propiedad Intelectual (OMPI) recomienda revisar los términos de cada herramienta para saber de quién es lo que se genera [@F-M4-06]. Por eso, antes de crear, conviene saber elegir.

El aprendizaje esperado es este: Seleccionar herramientas de IA para contenido multimedia según el tipo de pieza, sus licencias y sus riesgos de uso. Al final deberías poder comparar herramientas según la pieza que necesitas e interpretar las licencias y condiciones de uso de la que elijas.

Lo vas a trabajar con un análisis comparativo. Te acompaña Rosa, la recepcionista del centro médico que conociste en el módulo 1. Su coordinadora le pidió tres piezas: un afiche para la sala de espera que recuerde llegar diez minutos antes de la hora, un mensaje grabado con el horario de atención para la línea telefónica y un video corto para la pantalla de la sala. Rosa no sabe por dónde empezar, y en estas pantallas vas a comparar con ella herramientas y condiciones de uso tal como estaban cuando se preparó el curso. Los planes gratuitos cambian a menudo, así que la última palabra la tiene la página de cada herramienta el día que la uses.

Lo que verás sobre leyes y licencias es orientación general para trabajar con cuidado en tu cargo, no asesoría legal. Si una pieza tendrá un uso comercial importante o tienes dudas sobre derechos, consulta con quien corresponda en tu organización o con una persona especialista.

### P02 · Un mismo método para imagen, audio y video
cubre: S1, C1
fuentes: F-M4-06, F-M4-04
bloque: Texto + tabla

La OMPI describe la IA generativa como la que crea texto, código, imágenes, audio, sonido y video a partir de una instrucción [@F-M4-06]. Por eso el método que aprendiste en el módulo 1 te sirve también aquí: describes bien lo que quieres, revisas el resultado y vuelves a pedir con más detalle. Lo que cambia de una pieza a otra es el **tipo de pieza**, y eso importa por dos razones.

La primera es práctica: el tipo de pieza define qué herramienta necesitas, porque no se hace con la misma aplicación una ilustración, una locución y un clip. La segunda es legal: define con qué obras protegidas te relacionas. La Ley 17.336 de Propiedad Intelectual protege por separado, entre otras, las fotografías, las ilustraciones, las composiciones musicales, los guiones, las obras cinematográficas y los videogramas [@F-M4-04].

| Tipo de pieza | Ejemplo en una oficina | Obras protegidas con que se relaciona |
|---|---|---|
| Imagen | Afiche para el diario mural, ilustración para una presentación | Fotografías, ilustraciones |
| Audio | Locución, mensaje telefónico, pista de fondo | Composiciones musicales |
| Video | Clip para una reunión o para una pantalla | Guiones, obras cinematográficas, videogramas |

Si en tu pieza usas una foto, una canción o un video de otra persona, entras en el terreno de esas obras, y lo mismo pasa si le pides a una herramienta que imite una obra conocida. Rosa lo anota así: su afiche es una imagen, el mensaje telefónico es audio y el video de la sala de espera combina imagen, voz y música. Ya sabe que no le bastará una sola herramienta y que cada pieza tendrá sus propias reglas.

### P03 · Panorama: herramientas de imagen
cubre: S1, H1, C1
fuentes: F-H-56, F-H-68
bloque: Texto + imagen comparativa de dos herramientas

Para crear imágenes con IA hay muchas opciones con plan gratuito, y la lista cambia casi cada mes. Más que memorizar nombres, conviene reconocer tres familias. Están los asistentes generales, que conversan contigo y además generan y editan imágenes; las aplicaciones de diseño, que generan la imagen y también te dejan componer la pieza con su texto; y los generadores dedicados solo a imágenes. En este módulo usarás una herramienta de cada una de las dos primeras familias.

Gemini, el asistente que ya conoces, genera y edita imágenes con un modelo llamado Nano Banana 2. Para hacerlo tienes que iniciar sesión con tu cuenta de Google, y Google pide 13 años o más para generar y 18 o más para editar. Tiene un límite diario que su página de ayuda no expresa en cifras, y sin un plan pagado las imágenes se descargan en resolución 1K [@F-H-56].

Canva sirve para generar una imagen y, en el mismo lugar, armar el afiche con su título y sus textos. En el plan gratuito tienes hasta 20 usos de IA al mes, compartidos entre todas sus funciones de IA, como crear imágenes, la voz o el generador de música [@F-H-68], así que conviene gastarlos con cuidado.

Fíjate en que esta comparación todavía no dice cuál es mejor. Para elegir faltan dos datos que verás en las próximas pantallas: qué licencia te dan sobre lo que generas y qué riesgos trae cada una.

:::error «Elijo la que hace las imágenes más bonitas»
La calidad visual es solo un criterio. Una herramienta puede dar imágenes muy buenas y, al mismo tiempo, no permitir usarlas en una pieza de trabajo o publicarlas.
:::

### P04 · Panorama: herramientas de audio y video
cubre: S1, H1, C1
fuentes: F-H-75, F-H-79
bloque: Texto + tarjetas por tipo de herramienta

En audio hay herramientas que convierten un texto en voz, otras que diseñan voces nuevas y otras que generan música a partir de una descripción. ElevenLabs, que usarás en el tema 3, reúne varias de esas funciones: su plan gratuito entrega 10.000 créditos al mes para texto a voz, efectos de sonido, diseño de voz y música. Eso sí, la licencia comercial empieza recién en su plan Starter, que es de pago [@F-H-75].

Suno, un generador de canciones, muestra una lección importante. Su plan gratuito da 50 créditos al día, pero no incluye derechos comerciales ni descargas de canciones [@F-H-79]. Puedes escuchar lo que creas, pero no llevar la pista a tu editor de video. **Gratis no siempre significa utilizable**: antes de entusiasmarte con una herramienta, revisa si te deja descargar lo que generas y para qué usos.

Las herramientas de video las revisarás en el tema 4, cuando armes tu clip. Lo que sí puedes anticipar es que un clip casi nunca sale de una sola herramienta: lo normal es usar una para la voz, otra para la música, otra para las imágenes y una más para montar, cada una con sus propias reglas. Por eso la comparación que harás en este tema se repite pieza por pieza.

:::comprueba
Rosa quiere una pista musical para su video y la va a montar en un editor. ¿Qué herramienta le sirve menos con su plan gratuito?
- a) ElevenLabs, cuyos créditos gratuitos también sirven para música
- **b) Suno, porque el plan gratuito no permite descargar las canciones**
- c) Cualquiera da lo mismo, porque todas las gratuitas permiten descargar
Retroalimentación: Sin descarga, Rosa no puede llevar la pista al editor. Suno gratis sirve para escuchar, no para montar un video.
:::

### P05 · Licencias Creative Commons
cubre: S2, C2
fuentes: F-M4-01
bloque: Tarjetas (flashcards) con los cuatro elementos

Muchas fotos, ilustraciones y pistas que encuentras en internet se comparten con una licencia **Creative Commons** (CC). Es una forma estándar de decir «puedes usar mi obra, con estas condiciones». Las condiciones se arman combinando cuatro elementos, y cada uno tiene una sigla:

| Sigla | Elemento | Qué te pide |
|---|---|---|
| BY | Atribución | Dar crédito a quien creó la obra |
| SA | Compartir igual | Si la adaptas, compartir tu versión con la misma licencia |
| NC | No comercial | Usarla solo con fines no comerciales |
| ND | Sin derivadas | No modificarla ni crear obras a partir de ella |

Con esos elementos se forman seis licencias. Ordenadas de la más a la menos permisiva, son CC BY, CC BY-SA, CC BY-ND, CC BY-NC, CC BY-NC-SA y CC BY-NC-ND [@F-M4-01]. Todas incluyen BY, así que en cualquiera de ellas hay que dar crédito. Aparte está CC0, que no es una de esas seis licencias: es una herramienta para que quien creó una obra la dedique al dominio público.

Leerlas se aprende rápido, porque cada sigla es una condición. Además, las licencias están traducidas a más de 45 idiomas, también al español, así que puedes revisar sus condiciones sin depender de otro idioma.

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

Cada licencia CC tiene un resumen en español que dice qué permite y con qué condiciones [@F-M4-01]. Toma como ejemplo la licencia Atribución-NoComercial-CompartirIgual 4.0, que se abrevia CC BY-NC-SA 4.0. Su resumen dice que puedes compartir la obra, es decir, copiarla y redistribuirla, y adaptarla, es decir, modificarla y crear a partir de ella [@F-M4-02].

Esos permisos vienen con condiciones. Tienes que dar crédito, enlazar la licencia e indicar si hiciste cambios, sin sugerir que quien creó la obra respalda tu uso. No puedes usarla con fines comerciales. Si la adaptas, tu versión va con la misma licencia. Y no puedes agregar condiciones que impidan a otras personas hacer lo que la licencia permite.

Al final, el resumen trae avisos que se pasan por alto con facilidad. La licencia no da garantías. Los derechos de imagen, de privacidad o morales pueden requerir permisos aparte: si en la foto aparece una persona, la licencia de la foto no reemplaza el permiso de esa persona. Y el resumen no reemplaza el texto legal de la licencia, que es el que manda [@F-M4-02].

:::actividad Interpreta la licencia
Rosa encuentra una ilustración de una sala de espera con licencia CC BY-NC-SA 4.0. Responde cada pregunta y después compara con la respuesta:
1. ¿Puede recortarla y agregarle un texto? → Sí: la licencia permite adaptar.
2. ¿Qué debe incluir el crédito? → Autoría, enlace a la obra, enlace a la licencia y aviso de que la modificó.
3. ¿Con qué licencia queda su afiche? → La misma: CC BY-NC-SA 4.0.
4. ¿Qué la haría dudar? → La condición NC, porque el afiche lo pondrá el centro médico. Lo verás en el análisis de P13.
:::

### P07 · Términos de uso: las reglas de lo que generas
cubre: S2, C2
fuentes: F-M4-06, F-M4-07
bloque: Texto + acordeón con las cuatro preguntas

Las licencias CC sirven para las obras que otras personas comparten. Para lo que genera una herramienta de IA, los permisos están en otro lugar: sus **términos de uso**. La OMPI recomienda revisarlos para saber de quién es lo que se genera [@F-M4-06], y no es un trámite menor, porque cada empresa los redacta a su manera.

Cuando los leas, busca respuesta a cuatro preguntas: quién es dueño del resultado, qué usos permite, qué prohíbe y qué garantías da. No esperes encontrarlas juntas ni con esas palabras. Si los términos no responden alguna, anótala como una duda: eso también es información para decidir.

Mira cómo se responden en las Condiciones del Servicio de Google, que rigen servicios como Gemini. En la sección «Su contenido», Google declara que no reclamará la propiedad del contenido original que generan sus servicios [@F-M4-07]. Los mismos términos prohíben engañar a otras personas para que crean que un contenido hecho con IA generativa lo creó una persona, y piden no confiar en sus servicios como asesoría profesional [@F-M4-07]. Ahí tienes tres respuestas: quién es dueño, una prohibición y un límite a lo que puedes esperar del servicio.

Ser dueña o dueño del resultado no es lo único que importa. Lee con la misma atención qué puede hacer la herramienta con lo que creas y quién responde si hay un problema, porque eso cambia lo que puedes hacer con una pieza de trabajo.

:::error «Si la herramienta es gratis, puedo hacer lo que quiera con lo que genera»
Que no cobre no significa que no ponga condiciones. Cada herramienta fija en sus términos qué usos permite y cuáles prohíbe, y ese texto manda, no la publicidad de su página.
:::

### P08 · El semáforo: qué te deja hacer el plan gratuito
cubre: S2, H1, C1, C2
fuentes: F-H-67, F-H-65
bloque: Tabla con semáforo

Con las cuatro preguntas respondidas, puedes clasificar una herramienta con un semáforo. No es una norma legal: es un criterio del curso para decidir si sirve para una pieza de trabajo.

| Color | Qué significa | Ejemplo |
|---|---|---|
| Verde | Los términos te dejan usar lo que generas; se usa con revisión normal | Canva: eres dueña o dueño de lo que generas con su IA, salvo el contenido de su biblioteca, que solo se licencia [@F-H-67] |
| Amarillo | Se puede usar si cumples condiciones, como dar crédito, no usarlo con fines comerciales, aceptar que tus creaciones queden públicas o llevar marca de agua | Lo verás con la voz y la música del tema 3 |
| Rojo | La licencia no alcanza para una pieza de trabajo | Microsoft Designer: es gratis, pero su licencia es personal y no comercial [@F-H-65] |

El semáforo depende del uso que le darás a la pieza. Designer sirve para practicar por tu cuenta; para un afiche que pondrá tu empresa, no. Y una herramienta en verde no te libera de revisar: Canva permite usar lo generado para cualquier fin lícito, pero bajo tu propio riesgo, y prohíbe hacer pasar por humano lo que generó la IA [@F-H-67].

Cuando clasifiques una herramienta, anota la fecha en que leíste sus condiciones. Las herramientas cambian sus planes y sus términos, y lo que hoy está en verde puede pasar a amarillo. Por eso, en la ficha de uso ético que verás en P14, cada herramienta va con su plan y con esa fecha.

:::comprueba
Rosa quiere crear el afiche del centro médico con Microsoft Designer gratis. ¿Qué le dices?
- a) Puede usarlo, porque Designer es gratis
- **b) Mejor otra herramienta: la licencia de Designer es solo para uso personal y no comercial**
- c) Puede usarlo si no le agrega texto
Retroalimentación: Que la herramienta sea gratuita no cambia su licencia. Designer da una licencia personal y no comercial, que no alcanza para una pieza del centro médico.
:::

### P09 · ¿De quién es lo que genera la IA?
cubre: S2, S4, A1
fuentes: F-M4-04, F-M4-05
bloque: Texto + recuadro destacado

Que los términos de una herramienta digan que eres dueña o dueño del resultado no responde otra pregunta, más de fondo: lo que generó la IA, ¿es una obra protegida por el derecho de autor? Esa pregunta todavía está abierta y conviene tratarla con cautela.

En Chile, la Ley 17.336 dice que quien crea una obra adquiere sus derechos por el solo hecho de crearla. Esos derechos son patrimoniales, como usarla y explotarla, y morales, como que se reconozca su autoría. La protección dura toda la vida del autor y 70 años más [@F-M4-04]. La misma ley define la obra individual como la producida por una «persona natural», y como es de 1970, no dice nada sobre lo que genera una IA.

En Estados Unidos, la oficina de derecho de autor concluyó en 2025 que sus reglas actuales bastan para decidir caso a caso. Lo generado puede protegerse, en todo o en parte, cuando una persona usa la IA como herramienta y decide los elementos expresivos. En cambio, un prompt por sí solo, hoy, difícilmente basta para que haya autoría [@F-M4-05]. Esa conclusión rige solo en ese país: sirve para entender el debate, no como regla en Chile.

Para tu trabajo, la consecuencia es concreta: tu **aporte humano** importa. Elegir entre versiones, corregir, componer la pieza y escribir el texto es lo que más pesa, y por eso conviene dejarlo registrado en la ficha de uso ético de P14.

:::error «Escribí el prompt, así que la imagen es obra mía»
Con el estado actual del debate, un prompt solo difícilmente basta para que haya autoría. Lo que más cuenta es lo que tú decides y modificas en la pieza.
:::

### P10 · Atribución: dar crédito bien
cubre: S3, A1
fuentes: F-M4-03, F-M4-04
bloque: Texto + ejemplo comparativo (bueno y malo)

**Atribuir** es reconocer quién creó lo que usas. Creative Commons propone recordar cuatro datos con la sigla TASL: el título de la obra, su autor o autora, la fuente, que en inglés se dice *source* y es el enlace a la obra original, y la licencia, también con su enlace [@F-M4-03]. Si modificaste la obra, agregas qué cambiaste.

| Crédito | ¿Sirve? |
|---|---|
| «Imagen de internet» | No: no dice nada |
| «Foto: Creative Commons» | No: Creative Commons no es la autora, y faltan la fuente y la licencia |
| «"Sala de espera", de Daniela Soto (enlace), CC BY-NC-SA 4.0 (enlace). Recortada y con texto agregado.» | Sí: tiene los cuatro datos y los cambios |

Daniela Soto es un nombre inventado para el ejemplo. Fíjate en que el segundo crédito parece correcto porque nombra una licencia, pero confunde a quien propone la licencia con quien creó la obra.

Dar crédito no es solo cortesía. En Chile, el derecho moral del autor incluye que se reconozca la paternidad de su obra y oponerse a modificaciones que no autorizó. La ley también permite citar fragmentos breves para criticar, enseñar o investigar, siempre que se mencionen la fuente, el título y el autor [@F-M4-04]. Algunas herramientas de IA, además, piden su propia forma de crédito para lo que generas con su plan gratuito; lo verás en el tema 3 con la voz y la música.

:::actividad Corrige el crédito
Andrés puso en un afiche de la bodega: «Ícono: Creative Commons». Reescríbelo con la fórmula TASL. Usa datos inventados si no tienes los reales y marca qué dato le faltaba.
:::

### P11 · Riesgos legales
cubre: S4
fuentes: F-M4-06, F-H-83
bloque: Texto + escenarios (tarjetas)

Usar IA para crear piezas trae riesgos legales que conviene reconocer antes de publicar. La OMPI menciona varios. Uno es infringir derechos de autor o marcas, por ejemplo al pedir una imagen que copie un personaje o un logo conocido. Otro es revelar datos personales o información confidencial, ya sea en las instrucciones que escribes o en la pieza final. Un tercero es producir **ultrafalsos**: imágenes, audios o videos que hacen pasar por real algo que no ocurrió.

La OMPI agrega un punto que pocas personas esperan: en muchos países se puede infringir el derecho de autor aunque no haya intención [@F-M4-06]. Un error común es pensar «si no lo hice a propósito, no hay problema». El riesgo no recae solo en la empresa que desarrolla la herramienta, sino también en quien la usa y publica la pieza.

Las mismas herramientas lo dejan claro en sus términos. CapCut, por ejemplo, dice que no garantiza que el contenido generado sea legal o apropiado y que la persona responde por lo que crea [@F-H-83]. Leído desde tu puesto de trabajo, el mensaje es simple: la revisión antes de publicar es tuya, y no se puede delegar en la herramienta.

:::ejemplo El personaje famoso
Andrés quiere un afiche simpático para la bodega y pide «un personaje igual al de una película animada famosa, con el logo de una marca de zapatillas». Es justo lo que hay que evitar, porque usa obras y marcas de terceros. Cambia el pedido por «un personaje original, estilo ilustración plana, con zapatos de seguridad sin marca».
:::

### P12 · Riesgos reputacionales y herramientas que cambian
cubre: S4, A1, H1
fuentes: F-M4-14, F-H-53
bloque: Texto + línea de tiempo

Además del riesgo legal está el **riesgo reputacional**: lo que le pasa a tu imagen o a la de tu organización si una pieza sale mal. Una imagen con estereotipos daña la confianza aunque nadie lo haya buscado, y lo verás en detalle en el tema 2. Otro riesgo es ocultar que usaste IA: ya viste en P07 y P08 que hay términos de uso que prohíben hacer pasar por humano lo que generó una herramienta.

Tampoco conviene confiar en que el archivo «ya dice» que es sintético. Algunas herramientas agregan marcas de procedencia a lo que generan, pero el NIST, el instituto de normas técnicas de Estados Unidos, advierte que quien copia o edita un archivo puede alterar esos metadatos y que las redes sociales suelen borrarlos al compartir [@F-M4-14]. Si la pieza tiene que decir que se hizo con IA, dilo tú, de forma visible.

Hay un riesgo más, menos visible: la herramienta puede cambiar o desaparecer. Sora, el generador de video de OpenAI, retiró su web y su app el 26 de abril de 2026, y su API el 24 de septiembre del mismo año [@F-H-53]. Quien tenía un trabajo armado solo sobre esa herramienta tuvo que buscar otra y rehacerlo. La recomendación del curso es guardar tus archivos y tus registros, y volver a revisar los términos antes de cada proyecto.

:::comprueba
¿Qué lección deja el retiro de Sora en 2026?
- a) Que el video generado con IA ya no existe
- **b) Que una herramienta puede cambiar o desaparecer, y conviene guardar los archivos y tener alternativas**
- c) Que las herramientas gratuitas son siempre más estables
Retroalimentación: Hay otras herramientas de video, pero cualquiera puede cambiar sus planes o cerrar. Por eso se guardan los archivos y los registros.
:::

### P13 · Análisis comparativo: las piezas de Rosa
cubre: H1, C1, C2
fuentes: F-M4-06, F-H-75
bloque: Escenario + tabla para completar

Ya tienes los elementos para el análisis. La OMPI sugiere que, para comparar herramientas, no basta con ver qué producen: hay que revisar en sus términos quién es dueño de lo generado, si guarda las instrucciones, con qué datos se entrenó y si ofrece garantías o indemnizaciones. También propone clasificarlas por nivel de riesgo en permitidas, restringidas y prohibidas, y aconseja usar IA cuando la titularidad no sea crítica, por ejemplo en usos internos o para generar ideas [@F-M4-06].

Rosa lo aplica a sus piezas. Para el afiche piensa en Gemini para la imagen y Canva para el texto; para el mensaje telefónico duda entre la voz con IA de Canva y el plan gratuito de ElevenLabs.

| Pieza | Herramienta | Qué revisó | Clasificación |
|---|---|---|---|
| Afiche | Gemini y Canva | Google no reclama la propiedad; en Canva, la biblioteca solo se licencia (P07 y P08) | Permitida |
| Mensaje telefónico | Voz con IA de Canva | Lo generado es suyo; gasta usos de IA del mes (P03 y P08) | Permitida |
| Mensaje telefónico | ElevenLabs gratis | El plan gratuito no tiene licencia comercial [@F-H-75] | Restringida |

El video lo dejará para el tema 4, cuando conozca las herramientas de video. Para elegir la voz, Rosa usa un criterio del curso: las piezas que una organización usa con sus clientes o pacientes, aunque no se vendan, pueden considerarse uso comercial. El mensaje lo escucharán pacientes, así que prefiere la herramienta que permite ese uso. Ante la duda, elige una herramienta que lo permita o pregunta a quien corresponda en tu organización.

:::actividad Tu análisis
Elige una de las piezas de Rosa y compara dos herramientas con estos criterios: qué produce, plan gratuito, si funciona en el celular, licencia de lo generado y un riesgo. Clasifica cada herramienta como permitida, restringida o prohibida, y justifica con una condición de uso que hayas leído en sus términos.
:::

### P14 · La ficha de uso ético
cubre: H2, A1
fuentes: F-M4-06, F-M4-03
bloque: Texto + plantilla descargable

Una **ficha de uso ético** es un registro breve que acompaña a una pieza. Reúne lo que la OMPI recomienda documentar cuando se usa IA, como qué se generó, con qué instrucciones y cuál fue el aporte humano [@F-M4-06], y suma los créditos de lo que no es tuyo con la fórmula TASL [@F-M4-03]. La vas a usar en todo el módulo y la entregarás junto con tu pieza del Hito 4.

| Campo | Qué escribes |
|---|---|
| Pieza y uso | Qué es, para quién y dónde se verá |
| Herramientas y plan | Nombre, plan (gratuito o pagado) y fecha en que revisaste sus condiciones |
| Qué se generó con IA | Qué partes son sintéticas |
| Instrucciones | Los prompts principales que usaste |
| Aporte humano | Qué elegiste, corregiste o hiciste tú |
| Consentimientos y licencias | Permisos de las personas que aparecen o cuya voz se usa, y licencias de los materiales |
| Créditos | Materiales de terceros con la fórmula TASL |

La ficha no es burocracia: es tu respaldo. Si tu jefatura o alguien del equipo pregunta cómo se hizo la pieza, la respuesta ya está escrita, con fecha y con nombre.

:::ejemplo La ficha del afiche de Rosa
Rosa anotó que la pieza es un afiche para la sala de espera del centro médico, hecho con Gemini para la imagen y Canva Gratis para el texto, con las condiciones revisadas el mismo día. Lo generado con IA es solo la ilustración de fondo, a partir del prompt «Ilustración plana de una sala de espera luminosa, con personas de distintas edades, colores verde y blanco, sin texto». Su aporte fue elegir una de cuatro variantes, recortar la imagen y escribir el mensaje. No aparecen personas reales ni hay material de terceros, así que no necesitó consentimientos ni créditos.
:::

### P15 · Cierre: elige y justifica
cubre: C1, C2, H1, H2
fuentes: F-M4-06, F-M4-03
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema viste que una herramienta multimedia se elige por tres cosas: el tipo de pieza, la licencia de lo que genera y sus riesgos. Repasaste las licencias Creative Commons y sus cuatro elementos, aprendiste a buscar en los términos de uso quién es dueño, qué se permite, qué se prohíbe y qué garantías hay [@F-M4-06], y a dar crédito con la fórmula TASL [@F-M4-03]. También viste que la autoría de lo generado con IA es un tema abierto, y que por eso conviene dejar tu aporte humano por escrito.

Un error común es dejar la licencia para el final, cuando la pieza ya está lista. Si recién entonces descubres que la herramienta no permite tu uso, tienes que rehacer todo. Las condiciones se revisan antes de elegir.

:::actividad Tu pieza del Hito 4
En el Hito 4 harás una pieza visual, sonora o audiovisual que comunique la propuesta de tu proyecto. Prepárala así:
1. Define el tipo de pieza (imagen, audio o video), para quién es y dónde se verá en tu trabajo.
2. Compara dos herramientas con los criterios de P13 y elige una.
3. Escribe en dos líneas qué te permite y qué te prohíbe la herramienta elegida en su plan gratuito.
4. Nombra un riesgo legal o reputacional y cómo lo vas a evitar.
5. Abre tu ficha de uso ético y llena los campos que ya puedes: pieza y uso, herramientas y plan con la fecha de revisión, y las licencias y créditos TASL de los materiales de terceros que piensas usar.

Guarda tu respuesta. En los próximos temas producirás imágenes, audio y un clip, y completarás la ficha.
:::

### Ideas clave

1. La herramienta se elige según el tipo de pieza (imagen, audio o video), la licencia de lo que genera y sus riesgos de uso.
2. «Gratis» no siempre significa «utilizable»: hay planes gratuitos que no permiten descargar lo generado ni usarlo en una pieza de trabajo.
3. Las licencias Creative Commons combinan cuatro elementos (BY, SA, NC, ND) en seis licencias; CC0 dedica una obra al dominio público.
4. Para lo que genera la IA, los permisos están en los términos de uso de cada herramienta: quién es dueño, qué usos permite, qué prohíbe y qué garantías da.
5. La autoría de lo generado con IA es un tema abierto: un prompt solo difícilmente basta, y el aporte humano conviene registrarlo.
6. Se da crédito con la fórmula TASL (título, autor, fuente y licencia) e indicando los cambios.
7. Los riesgos son legales (derechos de autor, marcas, datos, ultrafalsos) y reputacionales (estereotipos, ocultar el uso de IA), y las herramientas pueden cambiar o desaparecer.

### Referencias bibliográficas

- Canva. (s. f.). *Comprender el uso de la IA*. https://www.canva.com/es_es/help/ai-access/
- Canva. (2026, 26 de junio). *AI product terms*. https://www.canva.com/policies/ai-product-terms/
- CapCut. (2026, 15 de abril). *Terms of service*. https://www.capcut.com/clause/terms-of-service
- Creative Commons. (s. f.-a). *About CC licenses*. https://creativecommons.org/share-your-work/cclicenses/
- Creative Commons. (s. f.-b). *Atribución-NoComercial-CompartirIgual 4.0 Internacional*. https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es
- Creative Commons. (2024, 4 de diciembre). *Recommended practices for attribution*. Creative Commons Wiki. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- ElevenLabs. (s. f.). *Pricing*. https://elevenlabs.io/pricing
- Google. (s. f.). *Generar imágenes con las aplicaciones de Gemini*. https://support.google.com/gemini/answer/14286560?hl=es
- Google. (2026, 30 de julio). *Condiciones del servicio de Google*. https://policies.google.com/terms?hl=es-419
- Ley 17.336. (1970, 2 de octubre). *Sobre propiedad intelectual*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=28933
- Microsoft. (s. f.). *Preguntas frecuentes sobre Microsoft Designer*. Microsoft Support. https://support.microsoft.com/en-us/designer/frequently-asked-questions-about-microsoft-designer
- National Institute of Standards and Technology. (2024). *Reducing risks posed by synthetic content (NIST AI 100-4)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf
- OMPI. (2024). *IA generativa: cómo abordar la propiedad intelectual (RN2024-8ES)*. https://doi.org/10.34667/tind.49471
- OpenAI. (2026). *Qué debes saber sobre la interrupción de Sora*. OpenAI Help Center. https://help.openai.com/es-es/articles/20001152-what-to-know-about-the-sora-discontinuation
- Suno. (s. f.). *Pricing*. https://suno.com/pricing
- U.S. Copyright Office. (2025). *Copyright and artificial intelligence, part 2: Copyrightability*. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf


## M4-AE2 · Imágenes y gráficos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-56, F-H-69
bloque: Texto + imagen

En el tema anterior aprendiste a elegir herramientas según su licencia y sus riesgos. Ahora las vas a usar: crearás una pieza gráfica para una **campaña interna**, es decir, una comunicación dirigida a las personas de tu organización, como un afiche para el diario mural o una imagen para el grupo de mensajería del equipo.

El aprendizaje esperado es este: Producir imágenes y gráficos con IA para una campaña interna, aplicando criterios de diseño y uso ético. Al final deberías poder producir piezas coherentes con el mensaje de la campaña e identificar y corregir sesgos o defectos visuales antes de publicarlas.

Este tema es un laboratorio creativo y termina con un producto. Generarás la imagen con Gemini, que te pide iniciar sesión con tu cuenta de Google [@F-H-56], y compondrás la pieza en Canva, que tiene app para Android y para iOS [@F-H-69]. Te acompaña Andrés, el encargado de bodega: su jefatura le pidió una campaña para que los pasillos estén siempre despejados, porque cajas y pallets mal ubicados han provocado tropiezos. Hará un afiche para el diario mural y una versión para el teléfono. Camila, la asistente administrativa de la constructora, también tiene un encargo: la gerenta de administración le pidió una campaña para que en la oficina se recicle el papel, y algunos ejemplos serán suyos.

Tú harás la tuya con una campaña interna real de tu lugar de trabajo, sobre algo que tu equipo necesite recordar o cambiar. Si no se te ocurre cuál, pregúntale a tu jefatura qué le serviría. Ten presente desde el comienzo que la IA genera la imagen, pero la pieza la diseñas tú: el mensaje, el texto, el orden y la revisión final son tu trabajo.

### P02 · Antes de generar: el mensaje de la campaña
cubre: H1, C1
fuentes: F-M4-12, F-M4-09
bloque: Texto + tabla de ejemplo

Una imagen bonita no basta: tiene que decir algo. Antes de abrir una herramienta, define cuatro cosas: el mensaje, el público, el canal con su formato y el tono. Es el mismo brief que trabajaste en el módulo 2, adaptado a una pieza visual. Así quedó el de Andrés:

| Pregunta | Andrés |
|---|---|
| Mensaje: ¿qué tiene que entender la persona en tres segundos? | «Pasillo despejado, bodega segura» |
| Público: ¿quién la verá? | El equipo de bodega y despacho, mujeres y hombres de distintas edades |
| Canal y formato: ¿dónde se verá? | Diario mural (vertical, 3:4) y teléfono (vertical, 9:16) |
| Tono: ¿cómo tiene que sentirse? | Claro y positivo, sin dramatismo |

El formato se define con la **relación de aspecto**, que es la proporción entre el ancho y el alto. Las guías de generación de imágenes trabajan con algunas comunes: 1:1 (cuadrada), 4:3 y 3:4, 16:9 (horizontal, como una pantalla) y 9:16 (vertical, como un teléfono) [@F-M4-12].

Con el mensaje claro sabrás qué tiene que mostrar la imagen y qué no, y podrás ordenar la pieza para que el mensaje sea lo primero que se vea [@F-M4-09], como verás en P08. Un error común es generar imágenes primero y ver después qué decir: sin mensaje, las imágenes salen al azar y se gastan los usos del día.

:::actividad Tu brief visual
Escribe el mensaje, el público, el canal con su formato y el tono de tu campaña interna. El mensaje debe caber en una frase de no más de seis palabras: la usarás como título de la pieza.
:::

### P03 · Anatomía de un prompt visual
cubre: S1
fuentes: F-M4-12
bloque: Texto + imagen con las partes señaladas

Un **prompt visual** describe la imagen que quieres. Las guías de Google proponen armarlo con tres partes [@F-M4-12]. La primera es el sujeto: qué o quién aparece, por ejemplo «una trabajadora de bodega empujando un carro». La segunda es el contexto y fondo: dónde está y qué la rodea, como «en un pasillo amplio y despejado, con estantes ordenados a los lados». La tercera es el estilo, que dice cómo se ve; puede ser general, como «ilustración» o «fotografía», o más específico, como «ilustración plana con colores sólidos».

La misma guía recomienda partir de una idea central y agregar detalles en cada intento, en vez de escribir todo de una vez [@F-M4-12]. Compara estos dos pedidos:

| Antes | Después |
|---|---|
| «Una bodega» | «Ilustración plana de una trabajadora de bodega empujando un carro por un pasillo amplio y despejado, con estantes ordenados a los lados, colores azul y amarillo» |

El primero deja todo al azar: puede salir una bodega vacía, desordenada o de otra época. El segundo dice qué se ve, dónde y cómo. No es más largo por capricho, sino porque cada parte que agregas le quita a la herramienta una decisión que querías tomar tú.

:::comprueba
En el prompt «fotografía de un mesón de recepción ordenado, con una planta y luz natural», ¿cuál es el estilo?
- a) Mesón de recepción
- **b) Fotografía**
- c) Una planta y luz natural
Retroalimentación: El sujeto es el mesón de recepción; la planta y la luz son parte del contexto y la iluminación. «Fotografía» es el estilo.
:::

### P04 · Composición, luz y formato
cubre: S1, A1
fuentes: F-M4-12
bloque: Tabla + galería de variantes

Con sujeto, contexto y estilo ya tienes una imagen. Para acercarla a lo que buscas, agrega **modificadores**: palabras que controlan la composición, la luz y el formato [@F-M4-12].

| Modificador | Qué controla | Ejemplos para tu prompt |
|---|---|---|
| Cercanía y encuadre | Qué tan cerca está el sujeto | «primer plano», «plano general» |
| Posición de la cámara | Desde dónde se mira | «vista desde arriba», «a la altura de los ojos» |
| Iluminación | El ambiente | «luz natural», «luz cálida», «luz fría», «luz dramática» |
| Lente | El efecto de la toma, en fotografía | «gran angular», «fondo desenfocado» |
| Relación de aspecto | El formato | «vertical 3:4», «horizontal 16:9» |

Cada decisión cambia el mensaje. Un plano general muestra el pasillo completo y deja ver que está despejado; un primer plano de un pie tropezando con una caja pone el foco en el peligro. Una luz cálida da un tono amable, y una luz dramática, uno de alerta. Para una campaña que quiere ser positiva, como la de Andrés, el plano general y la luz natural calzan mejor.

La sensibilidad estética también se entrena. Prueba a mover una sola palabra del prompt y fíjate en qué cambia: así aprendes qué efecto tiene cada modificador, y la próxima vez lo eliges a propósito.

:::ejemplo El prompt completo de Andrés
«Ilustración plana de una trabajadora de bodega empujando un carro por un pasillo amplio y despejado, estantes ordenados a los lados, plano general, vista a la altura de los ojos, luz natural, colores azul y amarillo, formato vertical 3:4, sin texto».
:::

### P05 · Laboratorio 1: genera tu imagen
cubre: H1, S1
fuentes: F-H-56, F-H-50
bloque: Proceso paso a paso + actividad

Ahora te toca generar. Usa Gemini, el asistente del curso, en la app o en la web, y sigue estos pasos:

1. Inicia sesión con tu cuenta de Google. Para generar imágenes hay que tener 13 años o más, y para editarlas, 18 o más.
2. Escribe tu prompt con sujeto, contexto, estilo y modificadores, y termínalo con «sin texto»: el título lo pondrás después.
3. Mira el resultado y descárgalo. Sin un plan pagado, Gemini descarga en resolución 1K.
4. Anota en tu bitácora el prompt tal como lo escribiste.

Gemini genera con un modelo llamado Nano Banana 2 y tiene un límite diario de imágenes que Google no publica en cifras [@F-H-56]. Por eso conviene pensar el prompt antes de escribirlo, en vez de probar al azar hasta que se acabe el día.

Si prefieres otra herramienta, ChatGPT también crea y edita imágenes en su plan gratuito, en la web y en la app. Desde el celular deja seleccionar una zona de la imagen para editarla y cambiar la proporción, algo que te servirá cuando tengas que corregir defectos. Como en Gemini, su página de ayuda no dice cuántas imágenes puedes crear [@F-H-50].

:::error «Pido el afiche completo, con título y todo, en un solo prompt»
Los generadores todavía fallan con el texto dentro de la imagen. Pide la imagen sin texto y agrega el título en Canva. Lo verás en P07 y P10.
:::

### P06 · Iterar y seleccionar
cubre: H1, A1, C1
fuentes: F-M4-12, F-M4-06
bloque: Galería con tres versiones + texto

Rara vez la primera imagen es la final. **Iterar** es partir de una idea central y agregar o cambiar un detalle en cada versión, hasta acercarte a lo que buscas [@F-M4-12]. Así lo hizo Andrés:

| Versión | Cambio en el prompt | Resultado |
|---|---|---|
| v1 | Prompt completo de P04 | Buena composición, pero el pasillo se ve angosto |
| v2 | «pasillo muy amplio, con líneas amarillas de demarcación en el piso» | Se entiende mejor el mensaje |
| v3 | «agrega a un compañero ordenando cajas en un estante» | Muestra la acción que la campaña pide |

La recomendación del curso es cambiar una cosa a la vez, porque así sabes qué produjo la mejora. Si cambias el estilo, la luz y los personajes al mismo tiempo, pierdes lo que ya funcionaba y no sabes qué causó el cambio. Repetir el mismo prompt esperando que el azar lo arregle tampoco sirve: no aprendes nada y gastas tus usos.

Cuando tengas dos o tres buenas opciones, elige con criterios y no solo por gusto. Pregúntate si se entiende el mensaje sin leer el título, si queda espacio libre para el título y el texto, si sirve en el formato de tu canal y si tiene algún defecto o sesgo, que verás en P07 y P11. La OMPI recomienda llevar registro de las instrucciones y documentar el aporte humano [@F-M4-06], y elegir entre versiones y decidir qué cambiar es parte de ese aporte.

:::actividad Tres versiones
Genera tres versiones de tu imagen cambiando un solo detalle en cada una. Anota en tu bitácora cada prompt, qué cambiaste y cuál elegiste, con una razón basada en los criterios de esta pantalla.
:::

### P07 · Defectos típicos y cómo corregirlos
cubre: C2, S2
fuentes: F-M4-12, F-M1-05
bloque: Texto + imagen con defectos señalados

Antes de usar una imagen, búscale los defectos. El más frecuente es el texto: dentro de una imagen generada suele salir mal escrito o mal ubicado. La guía de Google aconseja que sea breve, de 25 caracteres o menos, y advierte que su ubicación y su tipografía solo se controlan de forma aproximada [@F-M4-12]. OpenAI reconoce límites parecidos en sus modelos de imagen: les cuesta ubicar el texto con precisión, controlar la composición en diseños estructurados y mantener igual a un personaje o una marca de una imagen a otra [@F-M1-05]. Si haces dos versiones de tu pieza, el personaje puede cambiar.

Hay otros defectos que solo detectas mirando con calma y con zoom, como una etiqueta de seguridad con letras inventadas o una caja flotando sobre un estante. Parecen detalles, pero restan seriedad a una campaña. Cuando encuentres uno, corrige en este orden:

1. Quita el texto de la imagen y agrégalo después en Canva, donde controlas la letra y la ubicación.
2. Edita solo la zona con el problema, con la función de edición de Gemini o de ChatGPT que viste en P05.
3. Vuelve a generar con un prompt más preciso, si el defecto está en toda la imagen.
4. Descarta la imagen si el defecto no se puede corregir.

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

La **jerarquía visual** es el orden en que la vista recorre los elementos de una pieza, según la importancia que les quieres dar [@F-M4-09]. En un afiche de campaña, lo primero que se ve tiene que ser el mensaje principal. Se construye con tres recursos que puedes aplicar sin haber estudiado diseño.

El primero es el contraste: lo que se diferencia de su entorno llama la atención. Funciona mejor la diferencia de valor, entre claro y oscuro, y la de saturación, entre intenso y apagado, que la diferencia de tono, y no conviene depender solo del color. El segundo es la escala: lo más grande se ve primero. Usa pocos tamaños distintos, un título grande, un texto mediano y, si hace falta, un dato pequeño, porque si todo es grande, nada destaca. El tercero es la agrupación: lo que va junto se entiende como una unidad. Se agrupa por cercanía, con bordes o con un fondo común, y se separa con espacio entre grupos [@F-M4-09].

Antes de pasar a Canva, mira tu imagen elegida y decide dónde irá el título, qué irá en segundo lugar y qué espacio quedará libre. Basta un boceto rápido en papel o en una nota del celular.

:::ejemplo El afiche de Andrés, antes y después
En la primera versión, la imagen ocupaba todo, el título iba en letra mediana y había cuatro textos del mismo tamaño repartidos por la pieza: nadie sabía dónde mirar. En la segunda, el título «Pasillo despejado, bodega segura» va arriba, grande y en negrita; la imagen, al centro; y abajo, juntas, dos líneas con lo que se pide: «Deja las cajas en su ubicación» y «Avisa si ves un pasillo bloqueado».
:::

### P09 · Legibilidad: contraste y texto alternativo
cubre: S2, C1
fuentes: F-M4-08
bloque: Texto + ejemplos de contraste (bueno y malo)

Una pieza que no se lee no comunica. Las Pautas de Accesibilidad para el Contenido Web (WCAG) del W3C son un estándar internacional que da criterios concretos para evitarlo. Piden que el texto tenga un **contraste mínimo** de 4,5:1 con su fondo, y de 3:1 si es texto grande, que es el de 18 puntos o más, o de 14 puntos o más en negrita [@F-M4-08]. Los íconos o flechas necesarios para entender la pieza también requieren 3:1.

Las mismas pautas dicen que el color no puede ser el único medio para transmitir información: si marcas en rojo una zona prohibida, agrega un ícono o una palabra. Y si la pieza se publica en digital, la imagen necesita un texto alternativo, una descripción en texto que cumpla la misma función para quien no puede verla [@F-M4-08].

Un error común es pensar que, si se ve bien en tu pantalla, se lee bien en todas. Tu pantalla puede tener más brillo o tamaño que la de tus colegas, y el contraste mínimo asegura que se lea en distintas condiciones. Como recomendación del curso, usa letra oscura sobre fondo claro, o clara sobre fondo oscuro, evita poner texto sobre zonas de la imagen con muchos detalles y haz una prueba: mira la pieza en el celular con el brillo bajo y a un brazo de distancia. Si te cuesta leer el título, sube el contraste o el tamaño.

:::ejemplo Texto alternativo de Andrés
Para el grupo del equipo, Andrés escribe: «Afiche de campaña. Una trabajadora empuja un carro por un pasillo despejado. Título: Pasillo despejado, bodega segura».
:::

### P10 · Laboratorio 2: compón la pieza en Canva
cubre: H1, S2, C1
fuentes: F-H-67, F-H-68
bloque: Proceso paso a paso + actividad

Con tu imagen elegida, arma la pieza en Canva, en la app o en la web:

1. Crea un diseño con el formato de tu canal: vertical para el diario mural o para el teléfono.
2. Sube tu imagen y ubícala dejando espacio para el título.
3. Escribe el título con tu mensaje, grande y en negrita, con buen contraste.
4. Agrega una o dos líneas con lo que le pides al equipo, agrupadas.
5. Revisa la jerarquía: pocos tamaños, espacio entre grupos, nada amontonado.
6. Descarga la pieza y, si tu campaña lo necesita, haz una segunda versión en el otro formato.

Canva también genera imágenes con IA. En el plan gratuito tienes hasta 20 usos de IA al mes, compartidos entre todas sus herramientas de IA, y la cuota se renueva el día 1 de cada mes [@F-H-68]. Si ya generaste tu imagen en Gemini, guarda esos usos para la voz o la música del tema 3.

Según los términos de Canva, eres dueña o dueño de lo que generas con su IA, salvo que incluyas contenido de su biblioteca: las fotos, íconos o ilustraciones de Canva solo se licencian. Canva también prohíbe quitar los metadatos de procedencia y hacer pasar por humano lo generado con IA [@F-H-67].

:::error «Todo lo que está en Canva es mío porque lo usé en mi diseño»
Los elementos de la biblioteca de Canva solo se licencian: no pasan a ser tuyos. Anótalos en tu ficha de uso ético.
:::

### P11 · Sesgos visuales
cubre: S3, A2
fuentes: F-M4-11, F-M4-10
bloque: Texto + imagen comparativa

Los generadores de imágenes aprenden de imágenes que ya existen, y con ellas aprenden también sus estereotipos. A esto se le llama **sesgo visual**, y no es una sospecha. Un estudio de 2023 pidió a tres generadores de imágenes retratos de distintas profesiones: las imágenes reflejaban en parte la composición de cada oficio en Estados Unidos y, de forma sistemática, subrepresentaban a las identidades marginadas, en distinto grado según el sistema [@F-M4-11]. Por eso el sesgo puede aparecer aunque tu prompt no diga nada sobre género ni edad.

El problema no es solo de la IA. La comunicación institucional también puede reforzar estereotipos sin proponérselo. La guía del Gobierno de Chile *Comunicación sin estereotipos de género* muestra campañas visuales en su versión «antes» y «después», por ejemplo cuando los roles de cuidado se asignan solo a mujeres [@F-M4-10]. Si la herramienta te entrega un estereotipo y tú lo publicas, el mensaje pasa a ser de tu organización.

Cuidar cómo representas a las personas es parte de comunicar bien. Quien no se ve en la campaña siente que no le habla, y una campaña interna que deja fuera a parte del equipo pierde justo a quienes tenía que convencer.

:::ejemplo Lo que salió sin pedirlo
Andrés pide «trabajadores de bodega ordenando cajas» y las cuatro imágenes muestran hombres jóvenes, aunque en su bodega trabajan mujeres y hombres de distintas edades. Rosa pide «personal de un centro médico atendiendo» y todas las imágenes ponen a un hombre como médico y a mujeres como asistentes.
:::

### P12 · Detecta y corrige sesgos y defectos
cubre: C2, S3, A2
fuentes: F-M4-10, F-M4-11
bloque: Texto + actividad de clasificación

Antes de publicar, revisa tus imágenes con preguntas. La guía de Gobierno sugiere, entre otras, preguntarte si hay diversidad étnica, de género y de roles, y si la imagen refleja equidad sin perpetuar estereotipos [@F-M4-10]. El curso agrega dos más: si aparecen distintas edades y cuerpos, como en un equipo real, y quién hace la acción y quién mira, para notar si el rol importante lo tiene siempre el mismo perfil. Para los defectos, repasa lo de P07: si el texto está bien escrito o lo quitaste, y si hay elementos mal ubicados o sin sentido.

Si encuentras un sesgo, que en estos generadores es sistemático [@F-M4-11], tienes dos caminos. Puedes cambiar el prompt y describir la diversidad que quieres, por ejemplo «un equipo de bodega con mujeres y hombres de distintas edades». O puedes cambiar la selección: si de cuatro variantes solo una muestra un equipo diverso, elige esa. En los dos casos vuelve a revisar, porque a veces corregir un sesgo trae otro, como dejar a todas las mujeres en segundo plano.

:::actividad Revisa cuatro variantes
Andrés generó cuatro versiones. Decide cuál usaría y qué corregiría en las otras, y después compara con estas respuestas:
1. Tres hombres jóvenes cargando cajas. → Sesgo de género y edad: cambiar el prompt.
2. Una mujer y un hombre mayor ordenando un estante; letrero con letras inventadas. → Buena representación: quitar el letrero.
3. Un hombre trabaja y una mujer lo mira con una libreta. → Sesgo de roles: cambiar la acción.
4. Un equipo diverso, pasillo despejado, sin texto. → Lista para usar.
:::

### P13 · Personas reales y marcas
cubre: A2, S3
fuentes: F-M4-06, F-M4-16
bloque: Escenarios con decisión (sí o no)

Las imágenes generadas pueden parecerse a una persona real o usar una marca ajena, y en una campaña interna eso también importa. La OMPI recomienda no sintetizar la apariencia de una persona real sin su consentimiento y sin las licencias necesarias [@F-M4-06]. Si quieres poner a alguien de tu equipo en la pieza, pídele permiso antes de usar su foto, y más aún si la vas a editar con IA. En el tema 3 verás además que la Ley 21.719 pone los rasgos faciales como ejemplo de datos biométricos, que pasan a ser datos personales sensibles [@F-M4-16].

Un error común es pensar que, por ser una campaña interna, se puede usar la cara de un colega o de la gerencia sin preguntar. Que la pieza no salga de la empresa no elimina el derecho de cada persona sobre su imagen: sin consentimiento, no se usa su cara ni se genera una parecida, y nombrarla en los créditos no reemplaza su permiso.

Con las marcas y las obras ajenas pasa algo parecido. La OMPI también recomienda no usar en las instrucciones nombres comerciales, marcas ni obras de terceros [@F-M4-06], así que no pidas una imagen «al estilo de» un personaje conocido ni con el logo de una marca. Si vas a usar el logo de tu propia organización, la recomendación del curso es hacerlo solo si te autorizaron. Y no inventes hechos: una imagen realista de un accidente que no ocurrió, presentada como real, es un ultrafalso aunque la intención sea buena, y la OMPI recomienda no usar herramientas para producirlos.

:::comprueba
Andrés quiere una imagen «al estilo de una película animada famosa». ¿Qué le recomiendas?
- a) Está bien si es para uso interno
- **b) Describir un estilo propio, como «ilustración plana con colores sólidos», sin nombrar obras de terceros**
- c) Usarlo y dar crédito al estudio de la película
Retroalimentación: La OMPI recomienda no usar obras ni marcas de terceros en las instrucciones. Un estilo se puede describir con palabras propias.
:::

### P14 · Credenciales de contenido y transparencia
cubre: H1, C1
fuentes: F-H-57, F-H-52
bloque: Texto + diagrama de cómo se pierden los metadatos

Algunas herramientas marcan sus imágenes para que se sepa que se hicieron con IA. Google inserta **SynthID**, una marca de agua invisible, en el contenido que crean sus modelos, y en la app Gemini puedes subir un archivo para revisar si se hizo con IA de Google, aunque solo detecta herramientas de Google [@F-H-57]. OpenAI, por su parte, pone en las imágenes de ChatGPT una marca SynthID y además **credenciales de contenido** C2PA, un registro del origen y las ediciones del archivo que viaja en sus metadatos [@F-H-52].

El problema es que los metadatos se pierden con facilidad. OpenAI indica que las credenciales C2PA se pierden con una captura de pantalla o al convertir el archivo, mientras que la marca de agua resiste cambios leves [@F-H-52]. Si compartes tu afiche con una captura, la constancia de que se hizo con IA puede desaparecer sin que lo notes.

La conclusión práctica es no confiar en que el archivo lo dirá por ti. Si la imagen es realista, agrega una etiqueta visible, como «Imagen generada con IA», y regístralo en tu ficha de uso ético. Tampoco quites las marcas que trae: ya viste en P10 que Canva prohíbe quitar los metadatos de procedencia.

:::comprueba
Andrés comparte su afiche en el grupo del equipo con una captura de pantalla. ¿Qué pasa con las credenciales C2PA?
- a) Se mantienen siempre
- **b) Se pueden perder: por eso conviene una etiqueta visible y la ficha**
- c) Se convierten en una marca visible
Retroalimentación: Una captura de pantalla o una conversión de archivo borra esos metadatos. La transparencia no puede depender solo de ellos.
:::

### P15 · Cierre: entrega tu pieza
cubre: H1, C1, C2, A1, A2
fuentes: F-M4-09, F-M4-08
bloque: Lista de verificación (checklist) + actividad de cierre

En este laboratorio pasaste del mensaje a la pieza. Escribiste un brief visual, armaste un prompt con sujeto, contexto, estilo y modificadores, iteraste y elegiste con criterios, corregiste defectos y sesgos, y compusiste la pieza con jerarquía y contraste [@F-M4-09; @F-M4-08]. Antes de darla por terminada, revísala completa:

- [ ] El mensaje principal es lo primero que se ve.
- [ ] Hay pocos tamaños de letra y espacio entre los grupos.
- [ ] El texto tiene buen contraste y no depende solo del color.
- [ ] No hay texto mal escrito ni elementos sin sentido.
- [ ] Las personas están representadas con diversidad y sin estereotipos.
- [ ] No aparecen personas reales sin permiso, ni marcas u obras de terceros.
- [ ] Si es realista, lleva una etiqueta visible de IA.
- [ ] Si es digital, tiene texto alternativo.

:::actividad Tu pieza y su ficha
Entrega tu pieza final de la campaña interna en el formato de tu canal. Luego completa la ficha de uso ético que empezaste en el tema 1 con las herramientas y su plan, qué se generó con IA, tus prompts principales, tu aporte humano (qué elegiste y qué corregiste), los permisos y los créditos de los elementos de Canva que usaste. Termina con dos líneas sobre un sesgo o un defecto que encontraste y cómo lo corregiste.
:::

### Ideas clave

1. Una pieza de campaña parte del mensaje, el público, el canal y el formato; la imagen viene después.
2. Un prompt visual tiene sujeto, contexto y fondo, y estilo; los modificadores controlan encuadre, cámara, luz, lente y relación de aspecto.
3. Se itera cambiando un detalle a la vez y se selecciona con criterios, registrando prompts y aporte humano.
4. El texto dentro de la imagen generada suele salir con errores: conviene agregarlo en el editor.
5. La jerarquía visual se construye con contraste, escala y agrupación; el texto necesita un contraste mínimo de 4,5:1 (3:1 si es grande).
6. Los generadores reproducen sesgos: hay que revisar diversidad y roles, y corregir el prompt o la selección.
7. Las marcas SynthID y C2PA ayudan, pero los metadatos se pierden al compartir: si la imagen es realista, se etiqueta de forma visible.

### Referencias bibliográficas

- Canva. (s. f.-a). *Canva for Android*. https://www.canva.com/download/android/
- Canva. (s. f.-b). *Comprender el uso de la IA*. https://www.canva.com/es_es/help/ai-access/
- Canva. (2026, 26 de junio). *AI product terms*. https://www.canva.com/policies/ai-product-terms/
- Gobierno de Chile. (2024). *Guía ilustrada: comunicación sin estereotipos de género*. Kit Digital. https://kitdigital.gob.cl/archivos/insumos/2025/Nueva%20Guia%20Ilustrada%20Comunicacion%202024.pdf
- Google. (s. f.-a). *Generar imágenes con las aplicaciones de Gemini*. https://support.google.com/gemini/answer/14286560?hl=es
- Google. (s. f.-b). *Verificar imágenes, vídeos y audio generados por IA*. https://support.google.com/gemini/answer/16722517?hl=es
- Google. (2026, 23 de octubre). *Guía de atributos de imágenes y mensajes (Vertex AI)*. Google Cloud. https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide?hl=es-419
- Gordon, K. (2021, 17 de enero). *Visual hierarchy in UX: Definition*. Nielsen Norman Group. https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- Luccioni, A. S., Akiki, C., Mitchell, M. y Jernite, Y. (2023). *Stable bias: Analyzing societal representations in diffusion models*. arXiv. https://arxiv.org/abs/2303.11408
- OMPI. (2024). *IA generativa: cómo abordar la propiedad intelectual (RN2024-8ES)*. https://doi.org/10.34667/tind.49471
- OpenAI. (s. f.). *Image generation*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/image-generation
- OpenAI. (2026a, 24 de octubre). *Images in ChatGPT*. OpenAI Help Center. https://help.openai.com/en/articles/11084440-images-in-chatgpt
- OpenAI. (2026b, 24 de octubre). *Provenance signals in OpenAI-generated content*. OpenAI Help Center. https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- W3C. (2024, 12 de diciembre). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/


## M4-AE3 · Audio y música

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-78, F-H-68
bloque: Texto + imagen

Una voz clara y una música bien elegida hacen que un mensaje se escuche y se recuerde. Hoy puedes generar ambas con IA, sin estudio de grabación. Pero la voz es parte de la identidad de una persona, y la música tiene autores y licencias. En este tema vas a producir audio cuidando esos derechos.

El aprendizaje esperado es este: Generar audio, voz y música con IA para una pieza de comunicación, cuidando derechos de voz y atribución. Al final deberías poder generar una locución y una pista musical adecuadas al uso, y verificar los derechos y el consentimiento que exige tu pieza.

Es un laboratorio guiado en el que producirás dos audios con herramientas gratuitas. La locución la harás con ElevenLabs, que tiene app para iOS y Android con texto a voz, biblioteca de voces y diseño de voz [@F-H-78]. La pista musical, con el generador de música de Canva, que entra en los 20 usos de IA al mes de su plan gratuito [@F-H-68], o con Eleven Music, que está en la versión web de ElevenLabs [@F-H-78].

Andrés sigue con su campaña de pasillos despejados: después del afiche, su jefatura le pidió un clip de un minuto para la reunión de inicio de turno, y en este tema preparará la voz y la música. Camila hará lo mismo para la campaña de reciclaje de su oficina, y tú, para tu propia campaña interna. Lo que verás sobre leyes es orientación general para trabajar con cuidado, no asesoría legal: si una pieza usa la voz o la imagen de otra persona y tienes dudas, consulta en tu organización o con una persona especialista.

### P02 · Voz sintética y música generativa
cubre: S1
fuentes: F-H-78, F-M4-19
bloque: Tarjetas (flashcards) con cada función

En el módulo 1 conociste los modelos de audio, que generan voz, música o efectos. Las herramientas actuales los ofrecen como funciones separadas, y la app de ElevenLabs sirve de ejemplo:

| Función | Qué hace |
|---|---|
| Texto a voz | Convierte un texto escrito en una voz sintética |
| Biblioteca de voces | Ofrece voces ya creadas para elegir |
| Diseño de voz | Crea una voz nueva, distinta de las de la biblioteca |
| Cambiador de voz | Transforma una grabación con otra voz |
| Aislador de voz | Separa la voz del ruido de fondo |

La música generada a partir de una descripción, que en esa herramienta se llama Eleven Music, está solo en la web, no en la app [@F-H-78].

Hay otra función que merece cuidado especial: la **clonación de voz**, que crea una copia de la voz de una persona a partir de grabaciones suyas. Cuando un audio, una imagen o un video imita de forma realista la voz o la apariencia de una persona, se habla de una **réplica digital**. La oficina de derecho de autor de Estados Unidos da como ejemplos las actuaciones musicales generadas con IA y las llamadas automáticas que suplantan a alguien, y aclara que puede haber réplica con o sin autorización de la persona imitada [@F-M4-19].

:::ejemplo Diseñar una voz o clonarla
Andrés necesita una voz adulta y tranquila. Puede elegir una de la biblioteca o diseñar una nueva con esas características. No necesita clonar la voz de nadie.
:::

### P03 · Elegir la voz y la pista según el uso
cubre: S1, C1
fuentes: F-M4-15, F-H-76
bloque: Texto + tabla de decisiones

La voz y la música se eligen pensando en quién escucha, dónde y para qué. Estas son recomendaciones del curso para tres usos frecuentes en una organización:

| Si la pieza es… | Voz | Música |
|---|---|---|
| Un aviso de seguridad para el equipo | Clara, pausada, cercana | Suave o sin música, para no tapar la voz |
| Un mensaje telefónico con horarios | Neutra y muy clara | Sin música, o muy baja |
| Un clip motivacional para una reunión | Cálida y con energía | Con ritmo, que acompañe sin distraer |

Además, mira las reglas del canal donde se publicará la pieza. En YouTube, por ejemplo, la música creada con IA debe declararse cuando es el foco principal del video, mientras que clonar tu propia voz para narrar no requiere declararse [@F-M4-15]. Y si usas el plan gratuito de ElevenLabs y publicas lo que generaste, tienes que poner «elevenlabs.io» o «11.ai» en el título, o «Eleven Music» si es música [@F-H-76].

Para Andrés, el clip es para una reunión interna del turno, así que elige una voz clara y cercana y una pista suave de fondo, que no compita con lo que dice la locución.

:::comprueba
Rosa necesita un mensaje telefónico con el horario del centro médico. ¿Qué combinación conviene?
- a) Una voz con mucha energía y música con ritmo fuerte
- **b) Una voz neutra y clara, sin música o con música muy baja**
- c) La voz clonada de una locutora conocida
Retroalimentación: En un mensaje con horarios lo importante es entender los datos. La música fuerte los tapa, y clonar una voz ajena requiere consentimiento.
:::

### P04 · El guion de la locución
cubre: H1, C1
fuentes: F-M4-20, F-H-86
bloque: Texto + ejemplo antes/después

La locución empieza por un buen guion: el texto que la voz va a leer. Se escribe para el oído, no para la vista, y eso cambia varias costumbres de la escritura de oficina. Estas son recomendaciones del curso:

- Frases cortas, de una idea cada una.
- Números y siglas escritos como se dicen: «diez minutos», no «10 min».
- Pausas marcadas con puntos, no con paréntesis.
- Un llamado a la acción claro al final.

Puedes pedirle a Gemini un primer borrador, por ejemplo: «Escribe una locución de 30 segundos para un clip interno sobre mantener despejados los pasillos de una bodega. Frases cortas, tono cercano, termina con un llamado a la acción». Después la ajustas tú. Así cambió una frase del borrador de Andrés: «Recuerde: el 100 % de los pasillos (incl. zona B) debe estar libre según proc. interno» pasó a ser «Todos los pasillos, también los de la zona B, tienen que estar despejados. Es nuestra regla».

Luego cronometra la locución, como recomiendan las guías de producción de video, para ajustarla a la duración que necesitas [@F-M4-20]. Léela en voz alta con un cronómetro o deja que el celular la lea: en Android, la función de accesibilidad Enunciar selección lee en voz alta lo que seleccionas en pantalla, y se activa en Ajustes > Accesibilidad [@F-H-86].

:::actividad Tu guion de locución
Escribe el guion de una locución de 20 a 40 segundos para tu campaña. Cronométralo y ajústalo hasta que entre en el tiempo.
:::

### P05 · Laboratorio 1: tu locución con ElevenLabs
cubre: H1, C1
fuentes: F-H-75, F-H-76
bloque: Proceso paso a paso + actividad

Ahora genera la voz en la app de ElevenLabs, siguiendo estos pasos:

1. Crea tu cuenta e inicia sesión.
2. Abre texto a voz y pega tu guion.
3. Elige una voz de la biblioteca o diseña una nueva.
4. Genera y escucha el resultado completo.
5. Descarga el audio y guárdalo con un nombre claro, por ejemplo «locucion-campaña-v1».
6. Anota en tu bitácora la voz elegida, la fecha y el plan.

El plan gratuito entrega 10.000 créditos al mes, compartidos entre texto a voz, efectos de sonido, diseño de voz y música. No incluye **licencia comercial**, que empieza en el plan Starter, de pago [@F-H-75]. Si publicas lo que hiciste con el plan gratuito, tienes que poner «elevenlabs.io» o «11.ai» en el título, o «Eleven Music» si es música, y lo hecho con funciones beta no se puede usar comercialmente [@F-H-76].

Para las prácticas del curso y una campaña interna que no se vende, la recomendación del curso es que el plan gratuito con atribución basta. Si la pieza será para clientes o para vender, necesitas una herramienta o un plan con licencia comercial, como viste en el análisis de las piezas de Rosa en el tema 1.

:::error «Genero la locución una vez y la descargo sin escucharla»
La voz puede leer mal un nombre, una sigla o un número. Escucha siempre el audio completo antes de usarlo.
:::

### P06 · Revisar y ajustar la locución
cubre: H1, C1
fuentes: F-H-68, F-H-85
bloque: Lista de verificación (checklist) + texto

Escucha tu locución con audífonos, de principio a fin, y revísala con estas preguntas, que son recomendación del curso:

- [ ] ¿Se entienden todas las palabras, en especial nombres, siglas y números?
- [ ] ¿El ritmo deja respirar el mensaje o va muy rápido?
- [ ] ¿El tono calza con el uso: cercano, neutro, motivador?
- [ ] ¿Dura lo que planificaste?
- [ ] ¿Hay errores de lectura, como una palabra cortada o un énfasis raro?

Si algo falla, casi siempre se arregla en el texto. Escribe los números con letras, separa una frase larga en dos o cambia una sigla o una abreviatura por las palabras completas, y vuelve a generar solo el fragmento con problemas. Si lo que no calza es el tono, prueba otra voz.

Si ElevenLabs no te funciona, tienes dos alternativas gratuitas. La Voz con IA de Canva entra en los 20 usos de IA al mes de su plan gratuito [@F-H-68]. Y CapCut ofrece un texto a voz que, según su página, es gratis, tiene más de 200 voces, incluye español y sirve para usos comerciales si se siguen sus términos; eso sí, los pasos que describe son para computador y web [@F-H-85].

:::ejemplo La sigla de Andrés
En la primera versión, la voz leyó «EPP» como una palabra. Andrés cambió el texto por «elementos de protección personal» y la segunda versión salió clara.
:::

### P07 · Música generativa: qué sirve con plan gratuito
cubre: S1, H1, C2
fuentes: F-H-79, F-H-82
bloque: Tabla comparativa con semáforo

Para la pista musical hay varias herramientas, pero no todas sirven gratis para un clip. La condición mínima es que puedas descargar la pista, porque sin archivo no hay nada que llevar al editor.

| Herramienta | Plan gratuito | ¿Sirve para tu clip? |
|---|---|---|
| Suno | 50 créditos al día, sin derechos comerciales y sin descargas de canciones [@F-H-79] | No: sirve para escuchar, no para montar |
| Udio | Desactivó las descargas de audio, video y pistas separadas tras su acuerdo con Universal Music Group, en octubre de 2025 [@F-H-82] | No |
| Generador de música de Canva | Dentro de los 20 usos de IA al mes (P01 y P06) | Sí, si tu cuenta gratuita lo muestra |
| Eleven Music | Usa los créditos del plan gratuito de ElevenLabs, con la atribución que viste en P05 | Sí, para uso no comercial y con atribución |

Por eso este laboratorio usa Canva o Eleven Music. Lo de Udio deja además otra enseñanza: una herramienta puede cambiar sus condiciones de un momento a otro, y lo que ayer se descargaba hoy ya no. Revisa las condiciones el mismo día en que produces y anótalas en tu ficha.

:::error «Si la puedo escuchar gratis, la puedo usar en mi video»
Escuchar no es lo mismo que tener permiso para usar. Suno gratis no deja descargar las canciones y no da derechos comerciales.
:::

### P08 · Laboratorio 2: tu pista musical
cubre: H1, C1
fuentes: F-M4-06, F-H-68
bloque: Proceso paso a paso + actividad

Ahora genera la música. Para describir una pista, la recomendación del curso es pensar en cuatro cosas: el ánimo (tranquilo, alegre, con energía), los instrumentos (piano, guitarra, percusión suave), el ritmo (lento, medio o rápido) y el uso, por ejemplo «música de fondo, sin voz, para acompañar una locución». Un pedido completo sería: «Pista instrumental alegre y tranquila, guitarra y percusión suave, ritmo medio, sin voz, para fondo de una locución».

No nombres artistas ni canciones. La OMPI recomienda no usar obras de terceros en las instrucciones [@F-M4-06], así que en vez de pedir algo «al estilo de» una banda conocida, describe el ánimo, los instrumentos y el ritmo. Después sigue estos pasos:

1. Abre el generador de música de Canva o Eleven Music, en el navegador.
2. Escribe tu descripción y genera.
3. Escucha la pista junto a tu locución: la música no debe tapar la voz.
4. Descarga la pista y guárdala con un nombre claro.
5. Anota la herramienta, el plan, la descripción y la fecha.

En Canva gastarás uno de tus 20 usos de IA del mes [@F-H-68]; en Eleven Music, créditos del plan gratuito, con la atribución que viste en P05.

:::actividad Tu pista y tu mezcla
Genera dos pistas con descripciones distintas. Escucha cada una con tu locución y elige la que acompaña mejor sin distraer. Anota por qué la elegiste.
:::

### P09 · Derechos de imagen y voz
cubre: S2
fuentes: F-M4-17, F-M4-19
bloque: Texto + recuadro destacado

Cuando una pieza usa la voz o la imagen de una persona real, entran en juego derechos distintos del derecho de autor, y conviene no confundirlos.

En Chile, el artículo 19 n.º 4 de la Constitución asegura a todas las personas el respeto y la protección de su vida privada y de su honra, y de las de su familia, y la protección de sus datos personales [@F-M4-17]. No menciona de forma expresa la propia imagen ni la voz, pero ambas tienen que ver con la vida privada y con los datos personales de cada quien. En la próxima pantalla verás que una ley reciente lo dice de forma directa para la voz y los rasgos faciales.

El derecho de autor, en cambio, no protege la identidad. La oficina de derecho de autor de Estados Unidos lo explica así: copiar solo la voz o la imagen de alguien no infringe el derecho de autor, aunque puede afectar otros derechos [@F-M4-19]. Que algo no sea plagio no significa que esté permitido. Recuerda también lo que viste en el tema 1: la licencia de una foto o de una grabación no reemplaza el permiso de la persona que aparece en ella.

:::clave
La voz y la imagen se protegen por la vida privada, la honra y los datos personales, no por el derecho de autor. Por eso, ante una voz o una cara real, la pregunta no es «¿es plagio?», sino «¿tengo su permiso?».
:::

### P10 · La voz como dato sensible: Ley 21.719
cubre: S2, S3
fuentes: F-M4-16, F-M3-16
bloque: Texto + línea de tiempo

En 2024 se publicó la Ley 21.719, que modifica la ley de protección de datos personales (Ley 19.628) y crea la Agencia de Protección de Datos Personales. Para la voz y la imagen trae cambios importantes. Llama **datos biométricos** a los que permiten identificar a una persona, y pone como ejemplos los rasgos faciales y la voz. Esos datos pasan a ser datos personales sensibles, y los datos sensibles solo se pueden tratar con consentimiento expreso de la persona, salvo excepciones [@F-M4-16]. Además, quien trate datos biométricos tiene que informar qué sistema usa, para qué, por cuánto tiempo y cómo se ejercen los derechos.

Según su texto, estas modificaciones rigen desde el 1 de diciembre de 2026 [@F-M4-16]. Hay, además, un proyecto de ley del Ejecutivo que propone postergar esa fecha (boletín 18623-07), y al 21 de octubre de 2026 seguía en su primer trámite en el Senado [@F-M3-16]. Antes de aplicar la ley, revisa en la Biblioteca del Congreso Nacional (BCN) si la fecha cambió.

Para tu pieza, la recomendación del curso es actuar desde ya como pide la ley: trata la voz y la cara de otra persona como un dato sensible y pide su consentimiento expreso antes de grabarla, clonarla o editarla con IA. En una oficina esto alcanza también a situaciones cotidianas, como querer usar en un clip el audio de una reunión grabada.

:::comprueba
Según la Ley 21.719, ¿qué tipo de dato es la voz de una persona cuando sirve para identificarla?
- a) Un dato público, porque cualquiera puede escucharla
- **b) Un dato biométrico, que es un dato personal sensible**
- c) Una obra protegida por el derecho de autor
Retroalimentación: La ley pone la voz y los rasgos faciales como ejemplos de datos biométricos, y estos pasan a ser datos sensibles.
:::

### P11 · Consentimiento: cuándo se necesita
cubre: S3, A1, C2
fuentes: F-M4-16, F-H-77
bloque: Ordenar o clasificar (sorting activity)

El **consentimiento**, según la Ley 21.719, es una manifestación de voluntad libre, específica, inequívoca e informada [@F-M4-16]. Para los datos sensibles, como la voz, además debe ser expreso: por escrito, de palabra o por un medio tecnológico equivalente.

Las herramientas también lo exigen. La política de uso de ElevenLabs prohíbe clonar o imitar la voz o la imagen de una persona viva sin su consentimiento explícito e informado, y no permite usar grabaciones de menores de 18 años para crear voces [@F-H-77].

En la práctica, el consentimiento sirve cuando la persona sabe qué vas a hacer con su voz, en qué pieza, dónde se va a escuchar y por cuánto tiempo, y te lo dice con claridad. Un «ya, dale» en el pasillo, sin saber para qué es, no cumple esas condiciones aunque sea un sí. La recomendación del curso es dejarlo por escrito, aunque sea en un correo o un mensaje, para tener constancia.

:::actividad ¿Hace falta consentimiento?
Clasifica cada situación y después compara con las respuestas:
1. Andrés usa una voz de la biblioteca de ElevenLabs. → No hace falta: es una voz de la herramienta.
2. Andrés diseña una voz nueva con una descripción. → No hace falta.
3. Andrés graba su propia voz para narrar. → Es su voz: decide él.
4. Rosa quiere clonar la voz de una colega para el mensaje telefónico. → Sí: consentimiento expreso de su colega, por escrito.
5. Alguien quiere usar la voz de su hijo de 12 años. → No se puede en ElevenLabs: prohíbe grabaciones de menores de 18.
6. Alguien quiere imitar la voz de un locutor famoso. → No, sin su consentimiento explícito e informado.
:::

### P12 · Respeto por la identidad de las personas
cubre: A1, S2
fuentes: F-M4-15, F-M4-19
bloque: Texto + escenario

Respetar la identidad es no hacer que una persona real parezca decir o hacer algo que no dijo ni hizo. La voz de alguien es reconocible: si la imitas, quien escucha cree que esa persona habló. Por eso las réplicas digitales pueden dañar a las personas, y la oficina de derecho de autor de Estados Unidos da el ejemplo de las llamadas automáticas que suplantan a alguien [@F-M4-19].

Las plataformas también lo piden. YouTube exige declarar el contenido realista hecho o alterado con IA, por ejemplo cuando una persona real parece decir o hacer algo que no hizo, y la declaración agrega una etiqueta visible en el video o en su descripción [@F-M4-15]. Un error común es creer que una sátira o una broma no necesita permiso ni aviso: aunque sea en broma, imitar a una persona real sin permiso afecta su identidad, y si alguna vez una pieza lo hace con permiso, hay que declararlo.

Piensa también en el origen de las voces que usa tu organización. Supón que un proveedor le ofrece al centro médico de Rosa una voz sintética para el mensaje telefónico que suena muy parecida a la de una animadora de televisión conocida. Aunque el proveedor asegure que es otra persona, si la animadora reclama, el centro médico tendrá que mostrar de dónde salió esa voz y que quien la prestó dio su consentimiento. Sin ese registro, todo queda en la palabra de cada parte.

:::ejemplo La broma que no lo era
Para la fiesta de fin de año, alguien propone hacer un audio con la voz imitada de la jefatura «felicitando» al equipo con frases chistosas. Parece inofensivo, pero pone en su boca palabras que nunca dijo, sin su permiso, y el audio puede circular fuera del equipo. La alternativa es pedirle a la jefatura que grabe un saludo, o usar una voz de la biblioteca y decir que es sintética.
:::

### P13 · Verificar condiciones de uso y atribuir
cubre: H1, C2
fuentes: F-M4-03, F-H-76
bloque: Lista de verificación (checklist) + texto

Antes de usar tu locución y tu pista, verifica sus condiciones. Revisa cada audio con estas preguntas:

- [ ] ¿De dónde viene? Herramienta, plan y fecha, o autor y enlace si es de terceros.
- [ ] ¿Qué licencia tiene? Los elementos CC que viste en el tema 1 o los términos de la herramienta.
- [ ] ¿Permite el uso que le darás: interno, publicado o comercial?
- [ ] ¿Exige atribución? Cómo y dónde va.
- [ ] ¿Hay una voz real? Si la hay, ¿tienes el consentimiento expreso de esa persona?

Para los audios de terceros, da crédito con la fórmula TASL (título, autor, fuente y licencia) e indica si los modificaste [@F-M4-03]. Para lo generado con IA, sigue la forma de crédito que pide la herramienta. En el plan gratuito de ElevenLabs, por ejemplo, al publicar va «elevenlabs.io» o «11.ai» en el título, o «Eleven Music» si es música, y lo hecho con funciones beta no se puede usar comercialmente [@F-H-76]. Anota todo en tu ficha de uso ético: así cualquier persona puede saber de dónde salió cada sonido.

:::comprueba
Andrés publicará el clip en el canal interno de la empresa. Hizo la música con Eleven Music, plan gratuito. ¿Qué tiene que hacer?
- a) Nada, porque la música la generó él
- **b) Poner «Eleven Music» en el título y registrar herramienta y plan en la ficha**
- c) Dar crédito a Creative Commons
Retroalimentación: El plan gratuito de ElevenLabs no tiene licencia comercial y pide «Eleven Music» en el título al publicar música.
:::

### P14 · Cierre: tu locución y tu pista
cubre: C1, C2, H1
fuentes: F-M4-16, F-M4-03
bloque: Texto + actividad de cierre

En este laboratorio generaste una locución y una pista con IA, y viste que la voz y la imagen de una persona se protegen por su vida privada, su honra y sus datos personales. La Ley 21.719 trata la voz y los rasgos faciales como datos biométricos sensibles, y el consentimiento tiene que ser libre, específico, inequívoco, informado y expreso [@F-M4-16]. Para la atribución, cada herramienta pide su propia forma de crédito, que se suma a la fórmula TASL para los materiales de terceros [@F-M4-03].

:::actividad Entrega tus audios
Entrega lo siguiente:
1. Tu guion final y la locución, de 20 a 40 segundos.
2. La pista elegida, con dos líneas sobre por qué acompaña tu mensaje.
3. Tu ficha de uso ético actualizada: para cada audio, la herramienta, el plan, la fecha, el guion o la descripción que usaste, tu aporte (qué corregiste o elegiste), la atribución que corresponde y, si hay una voz real, cómo obtuviste el consentimiento.
4. La lista de P13 marcada para cada audio.

Guarda los archivos: los usarás en el clip de 60 segundos del próximo tema.
:::

### Ideas clave

1. Las herramientas de audio ofrecen texto a voz, biblioteca de voces, diseño de voz, cambio de voz y música; la clonación de voz copia la voz de una persona y exige su consentimiento.
2. La voz y la pista se eligen según quién escucha, dónde y para qué, y según las reglas del canal donde se publicarán.
3. ElevenLabs gratis no tiene licencia comercial y pide atribución en el título al publicar.
4. Para una pista que vas a montar necesitas descargarla: Suno gratis no lo permite y Udio desactivó las descargas.
5. En Chile, la voz y la imagen se protegen por la vida privada, la honra y los datos personales; el derecho de autor no protege la identidad.
6. La Ley 21.719 define la voz y los rasgos faciales como datos biométricos sensibles, que solo se tratan con consentimiento expreso; según su texto, rige desde el 1 de diciembre de 2026.
7. Respetar la identidad es no hacer que una persona real parezca decir algo que no dijo, y poder mostrar de dónde sale cada voz que se usa.

### Referencias bibliográficas

- Canva. (s. f.). *Comprender el uso de la IA*. https://www.canva.com/es_es/help/ai-access/
- CapCut. (s. f.). *Text to speech*. https://www.capcut.com/tools/text-to-speech
- Constitución Política de la República de Chile. (1980). *Texto refundido (art. 19 n.º 4)*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=242302
- Creative Commons. (2024, 4 de diciembre). *Recommended practices for attribution*. Creative Commons Wiki. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- ElevenLabs. (s. f.-a). *Can I publish the content I generate on the platform?* https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- ElevenLabs. (s. f.-b). *Pricing*. https://elevenlabs.io/pricing
- ElevenLabs. (s. f.-c). *What features are available in the ElevenLabs mobile app?* https://elevenlabs.io/docs/help-center/product/mobile-apps/eleven-labs-for-ios-and-android/what-features-are-available-in-the-eleven-labs-mobile-app
- ElevenLabs. (2026, 9 de octubre). *Prohibited use policy*. https://elevenlabs.io/use-policy
- Google. (s. f.-a). *Divulgación de contenido alterado o sintético*. Ayuda de YouTube. https://support.google.com/youtube/answer/14328491?hl=es-419
- Google. (s. f.-b). *Enunciar selección*. https://support.google.com/accessibility/android/answer/7349565?hl=es
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- OMPI. (2024). *IA generativa: cómo abordar la propiedad intelectual (RN2024-8ES)*. https://doi.org/10.34667/tind.49471
- Senado de Chile. (2026). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- Suno. (s. f.). *Pricing*. https://suno.com/pricing
- U.S. Copyright Office. (2024). *Copyright and artificial intelligence, part 1: Digital replicas*. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-1-Digital-Replicas-Report.pdf
- Udio. (2026, 17 de febrero). *Changes associated with the Universal Music Group partnership*. https://help.udio.com/en/articles/12683565-changes-associated-with-the-universal-music-group-umg-partnership
- Universidad Simón Bolívar. (s. f.). *Guía para la creación de videos educativos*. Departamento de Pedagogía. https://unisimon.edu.co/showimagen/v/Comunicaciones/20200925103940_0.pdf


## M4-AE4 · Clips y video breve

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M4-20, F-H-69
bloque: Texto + imagen

En los temas anteriores produjiste una imagen, una locución y una pista musical. Ahora vas a unirlas en un **clip de 60 segundos**: un video breve que se puede mostrar en una reunión, en una pantalla de la oficina o en el teléfono de tu equipo.

El aprendizaje esperado es este: Elaborar un clip de 60 segundos que integre guion, voz, música e imagen generados con IA. Al final deberías poder entregar ese clip y completar su ficha de uso ético.

Es un proyecto breve guiado y termina con un producto. Lo harás en el orden en que se produce cualquier video: primero planificas y escribes el guion, después reúnes y generas los recursos, y al final montas, revisas y exportas [@F-M4-20]. Para el guion usarás Gemini; para algunas tomas de video, Google Flow, si te funciona; y para montar, CapCut o Canva, que tiene app para Android y para iOS [@F-H-69].

Andrés termina aquí su campaña de pasillos despejados: hará el clip para la reunión de inicio de turno con el afiche, la locución y la pista que ya tiene. Camila hará el de la campaña de reciclaje de su oficina, y tú, el de tu campaña interna. Un minuto parece poco, pero obliga a decidir qué es lo esencial, y esa decisión es tuya, no de la herramienta.

### P02 · Las tres etapas de la producción
cubre: S3, H1
fuentes: F-M4-20
bloque: Proceso (process block) en 3 pasos

Las guías de producción de video ordenan el trabajo en tres etapas [@F-M4-20]. Te sirven para no saltarte pasos y para no tener que rehacer todo al final.

| Etapa | Qué se hace | En tu clip |
|---|---|---|
| Preproducción | Tema, guion, material visual, verificación de derechos de autor o licencias, y escenario | Guion por secuencias y lista de recursos con su licencia |
| Producción | Grabación: luz, cámara y audio | Generar tomas, imágenes, locución y música con IA |
| Postproducción | Edición y publicación | Montaje, subtítulos, créditos y exportación |

Fíjate en que la verificación de licencias está en la **preproducción**, no al final. Si descubres después de montar que una pista no se puede usar, tendrás que rehacer el clip. Con el guion pasa lo mismo: un error común es empezar a montar e ir armando el guion sobre la marcha. Sin guion, el clip se alarga, los recursos no calzan y gastas créditos generando tomas que después no usas.

En un video hecho con IA la producción cambia, porque en vez de grabar con una cámara, generas. Pero la lógica es la misma: primero se planifica, después se produce y al final se edita.

:::ejemplo El plan de Andrés
Andrés anota en su bitácora: lunes, guion; martes, tomas en Flow y revisión de recursos; miércoles, montaje y exportación; jueves, revisión con su jefatura. Así no se le junta todo el último día.
:::

### P03 · La estructura de un guion breve
cubre: S1
fuentes: F-M4-20
bloque: Texto + diagrama de la estructura

Un guion breve tiene una estructura simple, que las guías de video describen en cuatro movimientos. Abre con el propósito, es decir, de qué trata y por qué importa. Desarrolla pocos puntos clave, uno por momento. Pone un **llamado a la acción**, que dice qué tiene que hacer la persona después de verlo. Y cierra [@F-M4-20].

En 60 segundos no caben muchas ideas. Esta es una distribución posible, como recomendación del curso:

| Momento | Tiempo aproximado | Qué pasa |
|---|---|---|
| Apertura | 0 a 8 s | Una imagen o una pregunta que capte la atención y diga el propósito |
| Puntos clave | 8 a 45 s | Dos o tres ideas, una por secuencia |
| Llamado a la acción | 45 a 55 s | Qué hacer, dicho y escrito en pantalla |
| Cierre y créditos | 55 a 60 s | Mensaje final y créditos |

La apertura merece atención especial. Si los primeros segundos no dicen de qué trata el clip, la atención se pierde, sobre todo en una reunión donde la gente recién se está acomodando o en un teléfono, donde basta un gesto para pasar a otra cosa.

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

Para producir, el guion se arma por **secuencias**. Cada secuencia lleva su texto, que es lo que dice la voz; su imagen; su plano, que indica qué tan cerca se ve; su sonido, y su duración [@F-M4-20]. Así sabes qué recurso necesitas para cada momento. Este es el guion de Andrés:

| N.º | Texto de la locución | Imagen y plano | Sonido | Duración |
|---|---|---|---|---|
| 1 | «¿Cuántas veces esquivaste una caja esta semana?» | Toma generada: pasillo con cajas, plano general | Música entra | 6 s |
| 2 | «Un pasillo bloqueado es un tropiezo esperando pasar.» | Imagen fija: caja en el suelo, primer plano | Voz y música baja | 10 s |
| 3 | «Deja cada caja en su ubicación.» | Imagen fija: trabajadora ordenando un estante | Voz y música | 12 s |
| 4 | «Si ves un pasillo bloqueado, avisa.» | Imagen fija: compañero avisando por radio | Voz y música | 12 s |
| 5 | «Pasillo despejado, bodega segura.» | Toma generada: carro por pasillo despejado, plano general | Voz y música sube | 8 s |
| 6 | (sin voz) | Afiche de la campaña y créditos | Música termina | 12 s |

El total da 60 segundos, pero las duraciones son provisorias: se ajustan al cronometrar la locución, como recomiendan las guías [@F-M4-20]. Fíjate también en que solo dos secuencias usan video generado. El resto son imágenes fijas que Andrés ya tiene o que puede generar con Gemini, lo que le ahorra créditos y tiempo.

:::actividad Tu guion por secuencias
Arma la tabla de tu clip con cinco a siete secuencias. Completa las cinco columnas y suma las duraciones: tienen que dar 60 segundos.
:::

### P05 · Escribe y ajusta el guion con Gemini
cubre: S1, H1, A2
fuentes: F-M4-20, F-H-14
bloque: Ejemplo antes/después + actividad

Gemini te puede ayudar a pasar de una idea a un guion por secuencias, en la app del celular o en la web [@F-H-14]. Dale el mensaje, la estructura y el formato de la tabla, y ponle un límite a la locución: como recomendación del curso, 100 palabras como máximo, para que quepa con calma en un minuto.

Lo que entregue es un borrador. Revísalo tú con estas preguntas:

- ¿Las duraciones suman 60 segundos?
- ¿Cada secuencia tiene una sola idea?
- ¿El texto suena natural en voz alta?
- ¿Las imágenes pedidas se pueden generar sin personas reales ni marcas?

El primer borrador de Andrés traía frases como «En nuestra empresa, la seguridad es un valor fundamental que todos debemos compartir día a día en cada una de nuestras labores». Él la cambió por «Un pasillo bloqueado es un tropiezo esperando pasar», que es breve, concreta y se entiende al escucharla una vez. Un error común es copiar el guion tal como lo entrega la IA: las duraciones, el tono y lo que se puede mostrar los decides tú. Después cronometra: lee la locución en voz alta con el cronómetro del celular y ajusta las duraciones de la tabla [@F-M4-20].

:::ejemplo El prompt de Andrés
«Escribe el guion de un clip interno de 60 segundos para una bodega. Mensaje: "Pasillo despejado, bodega segura". Estructura: apertura con una pregunta, dos puntos clave, llamado a la acción y cierre. Entrégalo en una tabla con número de secuencia, texto de la locución, imagen y plano, sonido y duración en segundos. La locución no debe pasar de 100 palabras».
:::

### P06 · Video generativo: qué hay gratis hoy
cubre: S2
fuentes: F-H-63, F-H-64
bloque: Texto + calculadora de créditos

El **video generativo** produce escenas sintéticas a partir de un texto o de una imagen. Es la parte del panorama que más rápido cambia, como viste con el retiro de Sora en el tema 1. Antes de elegir una herramienta, revisa en su página si el plan gratuito permite generar video, cuántos clips y si agrega marca de agua.

Cuando se preparó este curso, la opción gratuita más útil era Google Flow. Entrega 50 créditos diarios gratis, con o sin suscripción, y no se acumulan de un día para otro [@F-H-63]. Con los modelos Veo 3.1 genera clips de 4, 6 u 8 segundos a partir de un texto o de una imagen [@F-H-64], y el costo depende del modelo: un clip con Veo 3.1 Lite gasta 10 créditos; con Veo 3.1 Fast, 20, y con Veo 3.1 Quality, 100 [@F-H-63]. También ofrece Gemini Omni Flash, con clips de hasta 10 segundos en 720p o 360p, que gasta entre 4 y 15 créditos según la resolución y la duración [@F-H-64; @F-H-63]. Su modelo de imagen por defecto, Nano Banana 2 Lite, no tiene costo [@F-H-64].

Haz la cuenta: con 50 créditos al día alcanzas para unos cinco clips de 8 segundos con Veo 3.1 Lite, es decir, unos 40 segundos. No alcanza para un minuto completo de video generado, y tampoco hace falta, porque un buen clip combina pocas tomas generadas con imágenes fijas.

:::comprueba
Andrés quiere que todo su clip de 60 segundos sea video generado con Veo 3.1 Lite, en un solo día y gratis. ¿Le alcanza?
- a) Sí, con 50 créditos genera más de un minuto
- **b) No: 50 créditos dan para unos cinco clips de 8 segundos, unos 40 segundos**
- c) Sí, porque Flow no cobra los clips cortos
Retroalimentación: Cada clip con Veo 3.1 Lite gasta 10 créditos y dura hasta 8 segundos. Por eso conviene combinar pocas tomas generadas con imágenes fijas.
:::

### P07 · Generar tomas con Google Flow
cubre: S2, H1, A1
fuentes: F-H-63, F-M4-06
bloque: Proceso paso a paso + actividad

La recomendación del curso es que tu clip combine dos a cuatro tomas generadas con imágenes fijas que muestras con un movimiento suave en el editor. Así cuidas tus créditos y tu tiempo.

Para pedir una toma, usa lo que aprendiste del prompt visual en el tema 2 y agrega qué se mueve. Un buen pedido dice el sujeto y su acción, como «una trabajadora empuja un carro»; el contexto, «por un pasillo de bodega despejado, con estantes ordenados»; la cámara y el plano, «plano general, la cámara la sigue de lado»; y el estilo y la luz, «ilustración animada, luz natural». Luego sigue estos pasos:

1. Elige en tu guion las secuencias que de verdad necesitan movimiento.
2. Escribe un prompt por toma y elige su duración.
3. Genera con Veo 3.1 Lite, que gasta 10 créditos por clip, menos que los otros modelos Veo [@F-H-63].
4. Revisa la toma completa: movimientos raros, objetos que aparecen o desaparecen, texto deforme.
5. Descárgala y anota el prompt, el modelo y los créditos usados.

Si no puedes usar Flow o se te acabaron los créditos del día, arma el clip solo con imágenes fijas: cumple igual con lo que pide el tema. Y crea con responsabilidad: no generes escenas realistas de personas reales ni de hechos que no ocurrieron para presentarlas como reales. La OMPI recomienda no usar herramientas para producir ultrafalsos [@F-M4-06].

:::actividad Tus tomas
Genera dos tomas para las secuencias de tu guion que más necesitan movimiento. Anota en tu bitácora el prompt de cada una y cuántos créditos te quedaron.
:::

### P08 · Reunir los recursos y verificar sus licencias
cubre: S3, H1, C2
fuentes: F-M4-20, F-H-84
bloque: Tabla para completar (lista de recursos)

Antes de montar, junta todos los recursos en una carpeta del celular y revisa de dónde viene cada uno. Las guías de video piden verificar los derechos de autor o las licencias Creative Commons en la preproducción y referenciar toda imagen que uses [@F-M4-20]. La lista de recursos de Andrés quedó así:

| Recurso | Origen | Licencia o condición | Crédito |
|---|---|---|---|
| Locución | ElevenLabs, plan gratuito (tema 3) | No comercial | «elevenlabs.io» en el título si se publica |
| Pista | Eleven Music, plan gratuito (tema 3) | No comercial | «Eleven Music» en el título si se publica |
| Imagen del afiche | Gemini y Canva (tema 2) | Google no reclama la propiedad; en Canva, propia salvo elementos de la biblioteca | Etiqueta de IA |
| Toma 1 y toma 5 | Google Flow, Veo 3.1 Lite | Google no reclama la propiedad (tema 1) | Etiqueta de IA |
| Sticker de advertencia | Biblioteca de CapCut | Solo personal y no comercial, salvo marca «commercial use» | Revisar antes de usar |

Si un recurso no tiene licencia clara, no lo uses, y si no sabes de dónde salió una imagen, tampoco: no podrías darle crédito ni saber si permite tu uso. Pon atención a la biblioteca del editor. En CapCut, algunos materiales, como plantillas, stickers, efectos o música, son solo para uso personal y no comercial; los que permiten un uso comercial limitado llevan una marca visible del tipo «commercial use», y usarlos exige una cuenta registrada [@F-H-84]. En Canva, como viste en el tema 2, el contenido de la biblioteca solo se licencia.

:::comprueba
Andrés encuentra en CapCut una música perfecta, pero no tiene la marca «commercial use». Su clip es para la reunión interna. ¿Qué hace?
- a) La usa, porque está dentro de la app
- **b) La anota como material solo para uso personal y no comercial, y decide con esa condición o elige otra con la marca**
- c) La usa y da crédito a CapCut
Retroalimentación: Estar en la app no significa que sirva para cualquier uso. Las condiciones de cada material mandan.
:::

### P09 · Montaje en el celular: CapCut o Canva
cubre: S3, H1
fuentes: F-M4-20, F-H-83
bloque: Proceso paso a paso + video demostrativo

El **montaje** ordena las tomas, la voz, la música y las imágenes en una **línea de tiempo**, siguiendo el guion [@F-M4-20]. Puedes hacerlo en el celular con CapCut o con Canva. CapCut es para mayores de 13 años, y los menores de 18 necesitan el consentimiento de sus padres. Sus términos dicen además que no garantiza que el contenido generado sea legal o apropiado y que la persona responde por lo que crea [@F-H-83], así que la revisión sigue siendo tuya. Estos son los pasos para montar:

1. Crea un proyecto con el formato de tu canal: vertical (9:16) para el teléfono u horizontal (16:9) para una pantalla.
2. Pon la locución en la línea de tiempo: es la columna vertebral del clip.
3. Ubica las imágenes y las tomas en el orden del guion, ajustando cada una a su duración.
4. Agrega la música debajo de la voz y baja su volumen donde habla la locución.
5. Suma los textos en pantalla: el llamado a la acción y el título de la campaña.
6. Agrega transiciones simples solo donde ayuden a entender el cambio de secuencia.
7. Termina con los créditos.

Tener el guion al lado mientras montas te ahorra vueltas, porque cada fila de la tabla es un tramo de la línea de tiempo.

:::error «Más transiciones y efectos hacen que se vea más profesional»
Los efectos distraen del mensaje y alargan el clip. En un minuto, lo que más cuenta es que se entienda.
:::

### P10 · Subtítulos, textos en pantalla y créditos
cubre: A2, S3
fuentes: F-M4-08, F-M4-20
bloque: Texto + ejemplo

El cuidado del detalle se nota en lo que mucha gente no mira hasta que falta, y lo primero son los subtítulos. Las pautas WCAG piden subtítulos en los videos con audio grabado [@F-M4-08]. Ayudan a quien no oye bien, a quien ve el clip sin sonido en el teléfono y a quien está en un lugar con ruido, como una bodega. Un error común es pensar que sobran si la voz se entiende bien: son parte del clip, no un adorno. Escríbelos en el editor o usa los subtítulos automáticos si tu editor los tiene, pero en ese caso revísalos palabra por palabra.

Los textos en pantalla siguen lo que viste en el tema 2: contraste mínimo de 4,5:1, o de 3:1 en texto grande, pocos tamaños y texto breve. Como recomendación del curso, deja cada texto en pantalla el tiempo suficiente para leerlo dos veces.

Al final del clip van los créditos y las referencias, como indican las guías de video [@F-M4-20]: quién lo hizo, con qué herramientas, de dónde salieron la música y las imágenes, y la etiqueta de IA. Antes de seguir, comprueba que los subtítulos coincidan con la locución, que los textos se lean bien en el celular y que cada imagen y cada audio aparezcan en los créditos.

:::ejemplo Los créditos de Andrés
«Campaña Pasillo despejado. Guion y montaje: Andrés. Imágenes generadas con IA (Gemini y Google Flow). Voz: elevenlabs.io. Música: Eleven Music. Afiche compuesto en Canva».
:::

### P11 · Ajustar a 60 segundos y revisar
cubre: C1, A2, S1
fuentes: F-M4-20
bloque: Lista de verificación (checklist) + actividad

Con el montaje armado, mira el clip completo de principio a fin, sin detenerte. Luego revísalo por partes, empezando por la duración. La meta son 60 segundos, y las guías recomiendan ajustar la duración cronometrando la locución [@F-M4-20]. Si te pasas, acorta las pausas largas entre frases, recorta las tomas que se repiten o elimina la secuencia menos importante. Si te falta tiempo, alarga un poco las imágenes del llamado a la acción en vez de agregar ideas nuevas. Acelerar la voz para que todo quepa no es buena salida, porque cuesta entenderla.

Después revisa que los cuatro elementos estén y trabajen juntos, y que no se te escape ningún detalle:

- [ ] Guion: se entienden el propósito, los puntos clave y el llamado a la acción.
- [ ] Voz: clara, sin errores de lectura y coincide con lo que se ve.
- [ ] Música: acompaña sin tapar la voz y termina con el clip, sin cortarse de golpe.
- [ ] Imagen: cada secuencia muestra lo que dice la voz, sin defectos ni sesgos.
- [ ] No hay un cuadro negro ni un salto al inicio o al final.
- [ ] El volumen es parejo de principio a fin.
- [ ] Las tomas generadas no tienen objetos que aparecen o desaparecen.

:::actividad Revisión cruzada
Muestra tu clip a otra persona sin explicarle nada. Pregúntale qué entendió y qué tiene que hacer después de verlo. Si su respuesta no coincide con tu mensaje, ajusta el guion o el montaje.
:::

### P12 · Exportar el clip
cubre: S3
fuentes: F-M4-21
bloque: Texto + tabla de configuración

**Exportar** es generar el archivo final de video a partir del proyecto de montaje. Las recomendaciones de YouTube para subir videos sirven como referencia, aunque tu clip no vaya a YouTube [@F-M4-21]:

| Ajuste | Recomendación |
|---|---|
| Formato del archivo | MP4 |
| Video | H.264 |
| Audio | AAC-LC (u Opus), a 48 kHz |
| Velocidad de fotogramas | La misma de la grabación; 24, 25, 30 o 60 fps son comunes |
| Relación de aspecto | 16:9 es la estándar; el reproductor adapta los videos verticales o cuadrados |

En el celular, los editores suelen ofrecer pocas opciones de exportación. Como recomendación del curso, si te deja elegir, usa MP4 y mantén la velocidad de fotogramas que trae el proyecto. Después abre el archivo exportado y míralo completo, porque a veces el audio se desfasa o un texto queda cortado. Guarda el archivo con un nombre claro, como «clip-pasillo-despejado-v1.mp4», y conserva el proyecto de montaje por si hay que corregir algo.

:::comprueba
Andrés exportó su clip. ¿Qué configuración coincide con las recomendaciones?
- a) Archivo de imagen, audio a 8 kHz
- **b) MP4, video H.264 y audio AAC-LC a 48 kHz**
- c) Cualquier formato, cambiando la velocidad de fotogramas a 10 fps
Retroalimentación: MP4 con H.264 y AAC-LC es la combinación recomendada, manteniendo la velocidad de fotogramas de la grabación.
:::

### P13 · Creatividad responsable: declarar lo sintético
cubre: A1, S2, C2
fuentes: F-M4-15, F-M4-14
bloque: Texto + escenarios con decisión

Crear con responsabilidad es etiquetar el contenido sintético realista y no suplantar a personas reales. YouTube sirve de referencia para saber cuándo declarar: lo exige cuando una persona real parece decir o hacer algo que no hizo, cuando se alteran hechos o lugares reales, cuando se crean escenas realistas que no ocurrieron y cuando la música creada con IA es el foco principal del video. No exige declarar lo que es claramente irreal, las ediciones menores ni la ayuda con guiones o subtítulos [@F-M4-15].

En el tema 2 viste que algunas herramientas marcan lo que generan con marcas de agua invisibles o con credenciales de contenido. Ayudan, pero no bastan. El NIST advierte que quien copia o edita un archivo puede alterar o falsear sus metadatos, que las redes sociales suelen borrarlos al compartir y que algunas marcas de agua se pueden eliminar, así que ninguna técnica sirve sola [@F-M4-14]. Al montar y exportar tu clip puede pasar lo mismo.

Por eso, la recomendación del curso es declarar de forma visible, con una línea en los créditos o en la descripción, como «Imágenes, voz y música generadas con IA». Y no quitar las marcas de agua ni los metadatos que traen los recursos, aunque sepas que se pueden perder después.

:::comprueba
¿Cuál de estos clips debe declararse en YouTube como contenido alterado o sintético?
- a) Un clip con una ilustración animada claramente irreal
- **b) Un clip con una escena realista, generada con IA, de un accidente que no ocurrió**
- c) Un clip cuyo guion se escribió con ayuda de un asistente
Retroalimentación: Las escenas realistas que no ocurrieron deben declararse. Lo claramente irreal y la ayuda con el guion, no.
:::

### P14 · La ficha de uso ético del clip
cubre: H1, C2
fuentes: F-M4-06, F-M4-03
bloque: Plantilla descargable + ejemplo completo

El clip se entrega con su ficha de uso ético, la misma que empezaste en el tema 1. Para un clip, la ficha está completa cuando tiene la etiqueta de IA, el registro de instrucciones, el aporte humano y los consentimientos, que es lo que la OMPI recomienda documentar [@F-M4-06], más los créditos de los materiales de terceros con la fórmula TASL [@F-M4-03]. El curso agrega un campo: la marca de agua o credencial de cada recurso, si la tiene.

Un error que se repite es anotar «ninguno» en el aporte humano porque todo se generó con IA. Generar con IA no borra lo que decidiste e hiciste: el mensaje, el guion final, la selección de tomas, el montaje, los subtítulos y la revisión son tuyos, y dejarlos fuera deja sin respaldo tu trabajo.

Completa ahora la ficha de tu clip con todos los campos, y revisa que cada recurso de tu lista de P08 aparezca en ella con su licencia y su crédito.

:::ejemplo La ficha del clip de Andrés
Andrés anotó que la pieza es un clip de 60 segundos para la reunión de inicio de turno de la bodega, de uso interno y sin venta. Usó Gemini para el guion y las imágenes, Google Flow con Veo 3.1 Lite para dos tomas (20 créditos), ElevenLabs gratis para la voz, Eleven Music gratis para la música y CapCut para montar, y revisó las condiciones el día del montaje. Con IA se generaron dos tomas, tres imágenes, la voz y la música, y anexó los prompts de cada una. Su aporte fue el mensaje, el guion final, la selección de tomas, el montaje, los subtítulos y la revisión. No aparecen personas ni voces reales, así que no hubo consentimientos que pedir. En los créditos van «elevenlabs.io» y «Eleven Music», no comerciales, y no usó material de la biblioteca de CapCut. Las imágenes y tomas hechas con Google llevan SynthID, y la etiqueta visible está en los créditos.
:::

### P15 · Cierre: entrega tu clip
cubre: C1, C2, H1, A1, A2
fuentes: F-M4-20, F-M4-21
bloque: Lista de verificación (checklist) + actividad de cierre

En este proyecto hiciste un video completo: planificaste con un guion por secuencias, generaste y reuniste recursos verificando sus licencias, montaste en una línea de tiempo, agregaste subtítulos y créditos [@F-M4-20], exportaste [@F-M4-21] y documentaste todo en la ficha de uso ético. Antes de entregar, revisa:

- [ ] El clip dura 60 segundos.
- [ ] Integra guion, voz, música e imagen.
- [ ] Tiene apertura, puntos clave, llamado a la acción y cierre.
- [ ] Lleva subtítulos revisados y textos legibles.
- [ ] Los créditos incluyen cada recurso y la etiqueta de IA.
- [ ] No suplanta a personas reales ni muestra como real algo que no ocurrió.
- [ ] Está exportado en MP4 y lo viste completo después de exportar.
- [ ] La ficha de uso ético está completa.

:::actividad Entrega
Entrega el clip en MP4, el guion por secuencias con sus duraciones y la ficha de uso ético completa. Agrega dos líneas sobre una decisión de creatividad responsable que tomaste, por ejemplo qué escena no generaste y por qué.
:::

### Ideas clave

1. Un video se produce en tres etapas: preproducción (guion y licencias), producción (generar los recursos) y postproducción (montar y exportar).
2. Un guion breve abre con el propósito, desarrolla pocos puntos clave, pone un llamado a la acción y cierra.
3. El guion se arma por secuencias, cada una con texto, imagen, plano, sonido y duración, y se ajusta al cronometrar la locución.
4. El video generativo gratuito es escaso: conviene combinar pocas tomas generadas con imágenes fijas y revisar los créditos del día.
5. El montaje ordena voz, música, imágenes y tomas en una línea de tiempo; se agregan subtítulos y, al final, créditos.
6. Para exportar se recomienda MP4, con video H.264 y audio AAC-LC.
7. El contenido sintético realista se declara de forma visible, porque los metadatos se pierden; la ficha de uso ético registra herramientas, instrucciones, aporte humano, consentimientos, créditos y marcas.

### Referencias bibliográficas

- Canva. (s. f.). *Canva for Android*. https://www.canva.com/download/android/
- CapCut. (2026a, 22 de enero). *Materials license agreement*. https://www.capcut.com/clause/material-license-agreement
- CapCut. (2026b, 15 de abril). *Terms of service*. https://www.capcut.com/clause/terms-of-service
- Creative Commons. (2024, 4 de diciembre). *Recommended practices for attribution*. Creative Commons Wiki. https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- Google. (s. f.-a). *Configuración de codificación recomendada para subir videos*. Ayuda de YouTube. https://support.google.com/youtube/answer/1722171?hl=es-419
- Google. (s. f.-b). *Divulgación de contenido alterado o sintético*. Ayuda de YouTube. https://support.google.com/youtube/answer/14328491?hl=es-419
- Google. (s. f.-c). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Google. (s. f.-d). *Gestionar tus créditos de Google Flow*. https://support.google.com/flow/answer/16526234?hl=es
- Google. (s. f.-e). *Modelos y funciones compatibles de Google Flow*. https://support.google.com/flow/answer/16352836?hl=es
- National Institute of Standards and Technology. (2024). *Reducing risks posed by synthetic content (NIST AI 100-4)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf
- OMPI. (2024). *IA generativa: cómo abordar la propiedad intelectual (RN2024-8ES)*. https://doi.org/10.34667/tind.49471
- Universidad Simón Bolívar. (s. f.). *Guía para la creación de videos educativos*. Departamento de Pedagogía. https://unisimon.edu.co/showimagen/v/Comunicaciones/20200925103940_0.pdf
- W3C. (2024, 12 de diciembre). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/


---

# Módulo 5 · Automatización de tareas repetitivas

**Competencia:** Automatizar tareas rutinarias mediante flujos simples con IA, incorporando supervisión humana y control de riesgos, en el trabajo cotidiano.


## M5-AE1 · Potencial de automatización

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-01, F-M5-05
bloque: Texto

En los módulos anteriores usaste la IA generativa para redactar, investigar y crear piezas. En este módulo das un paso más: hacer que
algunas tareas se hagan solas, con un flujo que las repite cada vez que hace falta. Pero antes de automatizar hay que elegir bien qué
automatizar, y de eso se trata este tema.

El aprendizaje esperado es este: Identificar tareas repetitivas con potencial de automatización, priorizándolas según impacto y riesgo.
Al final deberías poder nombrar al menos tres tareas automatizables de tu cargo, ordenarlas en una matriz de impacto y riesgo y explicar
por qué cada una quedó donde quedó.

Vas a mirar el trabajo como lo miran los estudios de la Organización Internacional del Trabajo (OIT): tarea por tarea, no cargo por
cargo [@F-M5-01]. Y vas a usar una herramienta simple, la **matriz de priorización**, que ayuda a decidir qué conviene probar primero [@F-M5-05]. Automatizar
no es un fin en sí mismo. Lo que buscas es ganar tiempo y calidad en lo que importa sin crear riesgos nuevos, y a veces la mejor
decisión es dejar una tarea como está.

Te acompañan otra vez Camila, asistente administrativa en la oficina de una constructora, que responde correos de proveedores y
registra facturas, órdenes de compra y contratos, y Andrés, encargado de bodega en una distribuidora. Sus tareas te van a servir de
modelo para analizar las tuyas.

### P02 · Un cargo es un conjunto de tareas
cubre: S1, A1
fuentes: F-M5-01, F-M5-02
bloque: Texto + imagen (un cargo dividido en tareas) + ejemplo

Cuando se habla de IA y trabajo, la primera pregunta que aparece es si tu trabajo va a desaparecer. Los estudios serios no parten de
ahí. La OIT mide la exposición a la IA generativa tarea por tarea, porque dentro de un mismo cargo hay tareas muy expuestas y otras que
siguen necesitando a una persona [@F-M5-01].

La **exposición** no es lo mismo que el reemplazo. Que una tarea esté expuesta significa que la IA generativa podría hacer una parte o
ayudar a hacerla. El estudio de la OIT de 2023 concluye que el efecto principal será aumentar el trabajo, es decir, automatizar algunas
tareas y dejar tiempo para otras, más que eliminar ocupaciones completas [@F-M5-01]. La actualización de 2025 confirma que las ocupaciones
administrativas siguen siendo las más expuestas y llega a una conclusión parecida: como la mayoría de las ocupaciones tiene tareas que
requieren intervención humana, lo más probable es que los empleos se transformen [@F-M5-02].

Mirar tu cargo así tiene una ventaja práctica. En vez de una pregunta que angustia, tienes una lista que puedes analizar: qué tareas
haces en una semana, cuáles se repiten igual cada vez y cuáles necesitan tu criterio, tu trato con las personas o tus manos.

:::ejemplo El cargo de Andrés, por partes
Andrés no se pregunta si la IA puede «ser encargado de bodega». Se pregunta si puede ayudarle con tareas concretas: escribir el reporte
semanal de stock, registrar la mercadería que llega, avisar cuando un producto baja del mínimo. Revisar una caja dañada o resolver un
problema con un transportista sigue siendo tarea suya.
:::

### P03 · Qué dicen los estudios sobre la exposición
cubre: S1, S2, A2
fuentes: F-M5-01, F-M5-03
bloque: Texto + recuadro de error

Dos estudios ayudan a entender dónde está el potencial de automatización. Cada uno usa su propio método, así que sus cifras no se
comparan entre sí.

El primero es el de la OIT de 2023. Según ese estudio, el trabajo administrativo es el único grupo de ocupaciones muy expuesto: el 24 %
de sus tareas tiene exposición alta y el 58 %, exposición media [@F-M5-01]. En los demás grupos, las tareas muy expuestas van del 1 % al 4 %. La
exposición es más del doble en las mujeres. El mismo estudio advierte que la calidad del empleo, como la intensidad del trabajo y la
autonomía, puede importar más que las cifras.

El segundo es un documento de la OCDE de 2024. Explica que la IA avanzó sobre todo en tareas cognitivas no rutinarias, como redactar o
resumir, y que por eso los cargos más expuestos son de oficina [@F-M5-03]. Los que dependen de destrezas manuales y de fuerza, como el aseo o
ayudar en una cocina, tienen baja exposición.

Si trabajas en una oficina, estas cifras hablan de ti. Lo que muestran no es que tu cargo vaya a desaparecer, sino que buena parte de
lo que haces con correos, planillas y documentos puede cambiar de forma, y que conviene que participes en decidir cómo.

:::error «Si mi cargo está expuesto, lo voy a perder»
Exposición no es pérdida del empleo. Significa que algunas tareas pueden hacerse con IA. Según la OIT, lo más probable es que el
trabajo cambie: menos tiempo en lo repetitivo y más en lo que necesita a una persona.
:::

### P04 · Anatomía de una tarea automatizable
cubre: S1, C1
fuentes: F-M5-04, F-M5-06
bloque: Proceso (process block) en 5 partes + ejemplo

Desde hace décadas se sabe que los computadores funcionan bien con reglas. Un estudio clásico de Autor, Levy y Murnane mostró que la
tecnología sustituye sobre todo las **tareas rutinarias**, las que se repiten y siguen pasos claros, y que en cambio complementa las
tareas de resolver problemas y tratar con personas [@F-M5-04]. La IA generativa, como viste en el módulo 1, agrega algo a esa historia: también
trabaja con texto, así que puede resumir un correo o clasificar una consulta.

Para saber si una tarea es candidata, conviene descomponerla en cinco partes. Esta lista es del curso y se inspira en lo que la guía de
automatización de la Universidad de Bath pide documentar de cada flujo: su propósito, sus entradas, sus salidas y sus dependencias [@F-M5-06].

1. Qué la inicia: llega un correo, es lunes, alguien completa un formulario.
2. Con qué datos trabaja: un correo, una fila de planilla, una fecha.
3. Qué pasos sigue, y si son siempre los mismos o se pueden escribir como reglas.
4. Qué entrega: un registro, un aviso, un resumen, un evento en el calendario.
5. Cada cuánto se repite: varias veces al día, cada semana, una vez al año.

:::ejemplo Una tarea de Camila, descompuesta
Una de las tareas de Camila es registrar las facturas que llegan a la constructora. Se inicia cuando entra una factura por correo (1);
trabaja con el número, el proveedor, la fecha y el monto (2); los pasos son siempre los mismos (3); entrega una fila en la planilla
(4); y se repite varias veces por semana (5). Es una buena candidata.
:::

### P05 · Señales de una buena candidata
cubre: S1, C1
fuentes: F-M5-01, F-M5-03
bloque: Texto + ordenar o clasificar (sorting activity)

Con la anatomía de la pantalla anterior puedes reconocer señales rápidas. Una buena candidata se hace igual muchas veces, sus pasos se
pueden escribir y trabaja con información, como correos, planillas o fechas. Una mala candidata cambia en cada caso, depende del
criterio del momento, trabaja con objetos o con el cuerpo, o decide algo importante sobre una persona.

Las tareas de manejo de información son justamente las típicas del trabajo administrativo, y por eso ese grupo aparece como el más
expuesto en el estudio de la OIT [@F-M5-01]. En cambio, como explica la OCDE, las tareas que dependen de las manos y de la fuerza tienen baja
exposición [@F-M5-03]. Si tu trabajo combina las dos cosas, como el de Andrés, que pasa parte del día en la planilla y parte entre las cajas, lo
más probable es que tus candidatas estén en la primera mitad.

La última señal merece una pausa. Una tarea puede repetirse y seguir reglas, y aun así ser mala candidata si decide algo sobre alguien,
como a quién se le renueva un contrato o a quién se le asigna un turno. Ahí el problema no es técnico, y lo vas a ver con más detalle
al hablar de riesgo y en el tema 3.

:::actividad ¿Candidata o no?
Arrastra cada tarea a «Buena candidata» o «Mala candidata»:
1. Copiar en una planilla los datos de cada pedido que llega por correo. → Buena candidata
2. Calmar a un cliente molesto en el mesón. → Mala candidata
3. Enviar cada viernes el mismo recordatorio de entrega de reportes. → Buena candidata
4. Revisar si una caja llegó dañada. → Mala candidata
5. Resumir los correos de proveedores del día. → Buena candidata
6. Decidir a qué trabajador se le renueva el contrato. → Mala candidata
:::

### P06 · Mapea las tareas de tu cargo
cubre: H1, A1, C1
fuentes: F-H-14
bloque: Proceso paso a paso + recuadro de error

Ahora vas a hacer tu propio **mapa de tareas**: la lista de lo que haces en tu cargo actual, escrita tarea por tarea. Para armarlo no
necesitas ningún documento de la empresa. Te basta tu descripción de cargo, si la tienes, o tus propias notas de lo que haces en una
semana normal.

Gemini puede acelerar la primera versión. La app es gratuita y funciona en el celular, en Android y en iPhone [@F-H-14]. Estos son los pasos:

1. Escribe en una nota lo que haces en una semana, con tus palabras, sin nombres de clientes ni datos de la empresa.
2. Pega esa nota en Gemini y escribe: «Lista las tareas concretas de esta persona. Escribe cada una con un verbo y un objeto, por ejemplo "registrar facturas". No agregues tareas que mis notas no permitan suponer».
3. Revisa la lista: quita lo que no corresponde y agrega lo que falta, porque conoces tu trabajo mejor que la herramienta.
4. Deja entre 8 y 12 tareas, una por línea.
5. Marca cada una con la anatomía de P04: qué la inicia, qué datos usa, si sigue reglas, qué entrega y cada cuánto se repite.

El mapa es tuyo. Gemini acelera la primera lista, pero quien decide qué tareas existen y cómo se hacen es la persona que hace el
trabajo. Si en tu empresa ya usan otro asistente, puedes hacer lo mismo con él, siempre que respetes lo que diga tu empresa sobre su
uso.

:::error Pegar documentos internos con datos de personas
Para mapear tareas bastan tus propias notas. No pegues planillas con nombres, RUT o teléfonos de clientes, proveedores o compañeros, ni
documentos internos de la empresa. Qué datos no compartir lo viste en el módulo 3.
:::

### P07 · Ejemplo guiado: el mapa de Camila
cubre: H1, C1, A1
fuentes: F-M5-04, F-M5-01
bloque: Tabla + texto + actividad

Camila armó su mapa a partir de sus notas de una semana en la oficina de la constructora. Con ayuda de Gemini y su propia revisión, le
quedó así:

| Tarea | ¿Se repite? | ¿Sigue reglas? | ¿Información o personas? | ¿Candidata? |
|---|---|---|---|---|
| Registrar facturas, órdenes de compra y contratos en la planilla | Sí, varias por semana | Sí | Información | Sí |
| Agendar las reuniones de su jefatura | Sí, a diario | En parte | Información | Sí |
| Responder consultas frecuentes de proveedores por correo | Sí, a diario | En parte | Información y personas | Sí, con revisión |
| Preparar la minuta de cada reunión | Sí, cada semana | En parte | Información | Sí, con revisión |
| Atender a proveedores que llegan a la oficina | Sí | No | Personas | No |
| Ordenar el archivo físico | Sí, cada mes | Sí | Objetos | No |
| Preseleccionar currículums cuando hay una vacante | A veces | No | Decide sobre personas | No |

Camila encontró cuatro tareas candidatas, más que las tres que pide el tema. En su mapa hay dos cosas que vale la pena mirar. La
primera es que «sigue reglas» no siempre es sí o no. Las consultas de proveedores tienen una parte fija, porque las preguntas se
repiten, y otra que exige criterio, porque cada caso es distinto [@F-M5-04]. Esas tareas se pueden automatizar en parte, con revisión.

La segunda es que Camila descartó preseleccionar currículums, aunque se lo piden cada vez que la constructora abre una vacante. Es una
tarea que decide algo importante sobre otras personas, y eso pesa más que la repetición.

:::actividad Revisa tu mapa
Compara tu mapa con el de Camila. ¿Tienes al menos tres tareas candidatas? Si no, busca las que trabajan con correo, planillas o
agenda, que suelen ser las más repetitivas [@F-M5-01].
:::

### P08 · Antes de automatizar: eliminar y simplificar
cubre: S2, A2
fuentes: F-M5-06
bloque: Proceso (process block) en 3 pasos + ejemplo

La guía de automatización de la Universidad de Bath da un consejo que ahorra mucho trabajo: partir de la necesidad y no automatizar algo
solo porque se puede [@F-M5-06]. Para eso propone una secuencia en tres pasos.

1. Eliminar: preguntarse si la tarea es necesaria, porque a veces se hace por costumbre y nadie usa el resultado.
2. Simplificar: ver si se puede hacer con menos pasos; un formulario bien hecho puede ahorrar tres correos de ida y vuelta.
3. Automatizar: solo lo que queda, ya simplificado, pasa a un flujo.

El orden importa. Si automatizas una tarea mal diseñada, obtienes una tarea mal diseñada que se repite sola, más rápido y más veces. Un
error común es pensar que hay que automatizar todo lo que se pueda. Que una tarea se pueda automatizar no significa que convenga:
primero hay que saber si es necesaria y si se puede simplificar, y después decidir con criterios si vale la pena.

:::ejemplo El reporte que nadie leía
Andrés pensaba automatizar el reporte diario de movimientos de bodega. Antes le preguntó a su jefatura qué parte usaba, y la respuesta
fue que solo el resumen del viernes. Eliminó el reporte diario y simplificó el semanal a cinco datos. Recién ahí tuvo sentido pensar en
automatizarlo.
:::

### P09 · Primer criterio: el impacto
cubre: S2, A2
fuentes: F-M5-06
bloque: Texto + lista de verificación (checklist) + ejemplo

Para elegir qué automatizar, la guía de Bath recomienda mirar la frecuencia de la tarea, su complejidad, el ahorro de tiempo y costo, y
el efecto en la experiencia de las personas [@F-M5-06]. En este curso los juntamos en un solo criterio, el **impacto**: cuánto mejora el trabajo
si la tarea se automatiza.

Para estimarlo, responde tres preguntas con sí o no:
- [ ] ¿Se repite seguido, cada día o cada semana?
- [ ] ¿Me quita tiempo que podría usar en algo más valioso?
- [ ] ¿Mejora algo para otras personas, como clientes, proveedores, equipo o jefatura, si se hace más rápido o sin errores?

Si respondes sí a dos o tres, el impacto es alto; si respondes sí a una o a ninguna, es bajo. Esta regla de conteo es una propuesta del
curso para decidir rápido. Lo que importa es que puedas explicar tu respuesta.

La tercera pregunta es la que más se olvida. Una tarea puede ahorrarte poco tiempo a ti y hacer una gran diferencia para otra persona:
un cliente que recibe en el momento la confirmación de su pedido, o un compañero que ya no tiene que esperar tu planilla para avanzar.

:::ejemplo El impacto de una tarea de Andrés
«Avisar a los vendedores cuando un producto baja del mínimo» se repite a diario (sí), le quita tiempo revisando la planilla (sí) y
evita que un vendedor ofrezca algo que no hay (sí). Impacto alto.
:::

### P10 · Segundo criterio: el riesgo
cubre: S2, A2
fuentes: F-M5-06, F-M5-16
bloque: Texto + lista de verificación (checklist) + recuadro de error

El **riesgo** es lo que puede salir mal si la tarea se hace sola. Una tarea automatizada no se cansa, pero tampoco duda: si el flujo
tiene un error, lo repite cada vez. Por eso conviene pensar el riesgo antes de construir nada.

Hay dos factores que lo suben mucho. Uno son los datos personales, cuya protección la guía de Bath pide cuidar en cada flujo [@F-M5-06]; en tu
trabajo eso incluye los datos de clientes, proveedores y compañeros. El otro son las decisiones que afectan a personas. La Ley 21.719,
que según su texto rige en Chile desde el 1 de diciembre de 2026, reconoce el derecho a no ser objeto de decisiones basadas en el
tratamiento automatizado de los datos que afecten significativamente a una persona [@F-M5-16]. Lo vas a ver en el tema 3.

Para estimar el riesgo, responde otras tres preguntas con sí o no:
- [ ] ¿La tarea usa datos personales o información confidencial?
- [ ] Si sale mal, ¿afecta a una persona, a dinero o a un plazo importante?
- [ ] ¿Sería difícil darse cuenta del error a tiempo?

Igual que con el impacto, dos o tres sí indican riesgo alto. La tercera pregunta conecta con lo que viste en el módulo 1: si la
respuesta está mal, quién se da cuenta y cuánto cuesta el error.

:::error «Una tarea pequeña no tiene riesgo»
Mandar un recordatorio parece inofensivo. Pero si el flujo toma la fecha equivocada y lo envía a cuarenta clientes, el error se
multiplica. El riesgo no depende del tamaño de la tarea, sino de lo que pasa si falla.
:::

### P11 · La matriz de priorización
cubre: S3
fuentes: F-M5-05
bloque: Imagen (matriz 2×2) + texto + comprueba

Una **matriz de priorización** es una cuadrícula de 2 × 2 que cruza dos criterios para ver qué conviene hacer primero. En su versión
más conocida, la que usa por ejemplo el equipo de mejora continua del sistema de salud de Lothian, en Escocia, cruza impacto y
esfuerzo, y busca las «victorias rápidas»: mucho impacto con poco esfuerzo [@F-M5-05].

En este curso la adaptamos. Cambiamos el esfuerzo por el riesgo, porque al automatizar lo que más importa es qué pasa si algo falla.
Así queda:

| | Riesgo bajo | Riesgo alto |
|---|---|---|
| Impacto alto | Empieza aquí: automatiza primero. | Con supervisión: automatiza solo una parte y pon un control humano. |
| Impacto bajo | Si sobra tiempo: puede esperar. | No automatices: no vale la pena el riesgo. |

El cuadrante «Con supervisión» no es un no. Es una tarea valiosa que exige cuidado: puedes automatizar la parte de menor riesgo y dejar
la decisión a una persona, y en el tema 3 vas a ver cómo hacerlo. El esfuerzo tampoco desaparece. Si dos tareas quedan en el mismo
cuadrante, elige la que te cueste menos poner en marcha.

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
bloque: Tabla + escenario + clasificar

Andrés eligió cinco tareas candidatas de su mapa y respondió las preguntas de impacto y riesgo. Así le quedaron:

| Tarea | Impacto | Riesgo | Cuadrante |
|---|---|---|---|
| Registrar en la planilla la mercadería recibida | Alto (3 sí) | Bajo (1 sí: un error descuadra el stock) | Empieza aquí |
| Avisar a vendedores cuando un producto baja del mínimo | Alto (3 sí) | Bajo (0 sí) | Empieza aquí |
| Avisar a clientes cuando un despacho se atrasa | Alto (3 sí) | Alto (2 sí: plazos, error difícil de ver) | Con supervisión |
| Enviar el reporte semanal a la jefatura | Bajo (1 sí) | Bajo (0 sí) | Si sobra tiempo |
| Armar los turnos del equipo | Bajo (1 sí) | Alto (3 sí: datos y efecto en personas) | No automatices |

El reporte semanal quedó con impacto bajo porque, después de simplificarlo (P08), ya le toma poco tiempo [@F-M5-06]. Los turnos quedaron fuera:
tocan la vida de sus compañeros, usan datos personales y un error se nota tarde.

Andrés tiene dos tareas en «Empieza aquí». La guía de Lothian sugiere que, si hay muchas opciones en el cuadrante prioritario, se elija
entre ellas en conjunto, por ejemplo votando [@F-M5-05]. Andrés lo conversó con su jefatura y, para su proyecto, eligió otra: el aviso de atraso a
clientes, que es la parte de su problema, los despachos atrasados, que más reclamos trae. Como quedó en «Con supervisión», le pondrá un
control humano en el tema 3.

:::actividad Clasifica según impacto y riesgo
Ubica cada tarea en un cuadrante:
1. Copiar a la planilla los pedidos que llegan por formulario (diario, sin datos sensibles). → Empieza aquí
2. Enviar cada semana a clientes el cobro de sus facturas vencidas, con montos y datos de contacto. → Con supervisión
3. Cambiar el color de las pestañas de una planilla cada mes. → Si sobra tiempo
4. Decidir solo con un puntaje a quién se le aprueba un anticipo de sueldo. → No automatices
:::

### P13 · Fundamenta tu priorización
cubre: C2, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + ejemplo de respuesta + comprueba

Ubicar una tarea en la matriz no basta: tienes que poder explicar por qué quedó ahí. Un **fundamento** sirve para que otra persona, como
tu jefatura o tu equipo, entienda tu decisión y la pueda discutir.

Un buen fundamento nombra el cuadrante y da una razón para cada criterio [@F-M5-05; @F-M5-06]. Andrés, por ejemplo, escribió: «Ubico esta tarea en Empieza
aquí porque se repite a diario y evita que los vendedores ofrezcan productos sin stock, y su riesgo es bajo porque no usa datos
personales y, si falla, el error se nota el mismo día». El impacto y el riesgo llevan cada uno su razón. Los fundamentos vagos, como
«porque es importante» o «porque es fácil», no sirven, porque no dicen en qué criterio te basas ni qué dato lo respalda.

Antes de mostrar tu matriz a alguien, puedes ponerla a prueba con Gemini. Pégale la matriz con tus fundamentos y escribe: «Actúa como
una jefatura exigente. Para cada tarea, hazme una pregunta que ponga a prueba si el impacto y el riesgo que asigné son correctos. No
cambies mi clasificación: solo pregunta». Responde las preguntas y ajusta lo que haga falta. La decisión final sigue siendo tuya.

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
fuentes: F-M5-01, F-M5-03
bloque: Texto + cita destacada + ejemplo

Si la respuesta a para qué automatizar es solo «para hacer más en menos tiempo», falta algo. La OIT advierte que el efecto de la IA
sobre la calidad del trabajo, como la intensidad y la autonomía, puede importar más que las cifras de empleo [@F-M5-01]. Automatizar mal puede
hacer que el trabajo sea más acelerado y no mejor.

Por eso la pregunta de impacto incluye a otras personas. Una buena automatización libera tiempo para lo que necesita a alguien:
atender mejor a un cliente, resolver un problema con un proveedor, enseñarle algo a un compañero. Vale la pena hacerse siempre la misma
pregunta: si esta tarea se automatiza, quién gana y qué hago yo con el tiempo que queda.

Hay otra razón para aprender esto en tu trabajo. Un documento de la OCDE señala que el principal riesgo para las personas sin estudios
superiores, las mujeres y las personas mayores es quedar atrás por tener menos acceso a herramientas de IA que aumentan la
productividad [@F-M5-03]. Saber identificar qué automatizar, y hacerlo con cuidado, es una forma de no quedarse atrás.

:::ejemplo Lo que hace Camila con el tiempo ganado
Camila calcula que, si el registro de facturas se hiciera solo, recuperaría un buen rato cada semana. Lo usaría para responder con
calma a los proveedores que preguntan por el estado de sus pagos, antes de que la consulta se convierta en reclamo. El tiempo ganado se
notaría en el trato con las personas.
:::

### P15 · Cierre: tu matriz de impacto y riesgo
cubre: C1, C2, H1, A1
fuentes: F-M5-05, F-M5-06
bloque: Texto + actividad de cierre (respuesta abierta)

En este tema miraste el trabajo tarea por tarea. Aprendiste a reconocer una tarea automatizable por su anatomía: se repite, sigue
reglas y trabaja con información. Viste que antes de automatizar conviene eliminar y simplificar [@F-M5-06], y que la decisión se toma con dos
criterios, impacto y riesgo, ordenados en una matriz [@F-M5-05].

Ahora te toca armar la tuya con las tareas de tu cargo. Si la tarea que más te interesa quedó en «Con supervisión», no la descartes: en
el tema 3 vas a aprender a ponerle puntos de control humano. Y si ninguna tarea te convence, vuelve a tu mapa y busca las que trabajan
con correo, planillas o agenda.

:::actividad Tu matriz
Usa el mapa de tareas que armaste en P06:
1. Elige al menos tres tareas candidatas, y si puedes, cinco.
2. Para cada una, responde las tres preguntas de impacto (P09) y las tres de riesgo (P10).
3. Ubícalas en la matriz (P11). Puedes dibujarla en una hoja o en una planilla.
4. Escribe un fundamento de una o dos líneas por tarea, como en P13.
5. Marca la tarea que elegirías para automatizar primero y explica por qué.

Guarda tu matriz. En el próximo tema vas a construir un flujo simple para la tarea que marcaste.
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

### Referencias bibliográficas

- Autor, D. H., Levy, F. y Murnane, R. J. (2001). *The skill content of recent technological change: An empirical exploration (NBER Working Paper 8337)*. NBER. https://www.nber.org/papers/w8337
- Gmyrek, P., Berg, J. y Bescond, D. (2023). *Generative AI and jobs: A global analysis of potential effects on job quantity and quality (ILO Working Paper 96)*. OIT. https://doi.org/10.54394/FHEM8239
- Google. (s. f.). *Empezar a usar la aplicación móvil Gemini*. https://support.google.com/gemini/answer/14554984?hl=es
- Lane, M. (2024). *Who will be the workers most affected by AI? A closer look at the impact of AI on women, low-skilled workers and other groups (OECD Artificial Intelligence Papers n.º 26)*. OCDE. https://doi.org/10.1787/14dc6f89-en
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idLey=21719
- NHS Lothian. (s. f.). *Prioritisation matrix*. Lothian Quality. https://qilothian.scot.nhs.uk/pc-resources-prioritisation-matrix
- OIT y NASK. (2025). *Generative AI and jobs: A refined global index of occupational exposure (ILO Working Paper 140)*. https://doi.org/10.54394/HETP0387
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate


## M5-AE2 · Flujos simples con IA

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-94, F-H-61
bloque: Texto

En el tema anterior elegiste una tarea para automatizar. Ahora la vas a convertir en un **flujo**: una cadena de pasos que se pone en
marcha sola y que conecta la IA con tu correo, una planilla o tu calendario. No necesitas programar, porque vas a usar herramientas
no-code, que se arman eligiendo bloques ya hechos.

El aprendizaje esperado es este: Construir un flujo simple con una herramienta no-code que conecte IA con correo, planillas o calendario.
Al final deberías tener un flujo de 3 a 5 pasos que funcione, y haberlo probado hasta encontrar sus fallas y corregirlas.

Este tema es un laboratorio y tiene dos caminos. Si tienes un computador con navegador, vas a usar Make, que en su plan gratuito
permite flujos de varios pasos [@F-H-94]; Andrés, por ejemplo, arma el suyo en el computador de la bodega. Si solo tienes el celular, vas a usar
las acciones programadas de Gemini, conectadas a tu correo, como hace Camila [@F-H-61]. En tu empresa quizá ya exista otra herramienta de
automatización; si es así, pregunta antes si puedes usarla para este proyecto.

En los dos caminos vas a practicar con una cuenta de prueba y con datos ficticios o copias sin datos sensibles, nunca con la bandeja de
entrada real de tu trabajo. Así puedes equivocarte sin exponer información de la empresa ni de nadie. Y cuenta con equivocarte: un
flujo que funciona a la primera es raro, y probar, ver qué falló y corregir es parte del trabajo.

### P02 · Anatomía de un flujo: disparador, acciones y datos
cubre: S1
fuentes: F-M5-07, F-M5-09
bloque: Proceso (process block) en 3 partes + actividad

Todo flujo automatizado tiene tres elementos. Las plataformas les dan nombres un poco distintos, pero la idea es la misma. El
**disparador** es el evento que inicia el flujo, por ejemplo «llega un correo nuevo a la bandeja de entrada»; Microsoft lo llama
desencadenador y Zapier, trigger [@F-M5-07]. Las acciones son lo que el flujo hace después, una o varias, como resumir el correo con IA y agregar
una fila a una planilla. Y los datos son la información que pasa de un paso al siguiente: el remitente, el asunto y el texto del correo
viajan hasta la IA, y lo que responde la IA viaja hasta la planilla.

Zapier llama a sus flujos Zaps y los define justamente así: un disparador seguido de una o más acciones, que conectan aplicaciones
distintas [@F-M5-09].

Andrés ya tiene su flujo en la cabeza. Cada vez que marque un despacho como «atrasado» en su planilla de despachos, ese será el
disparador. La IA redactará el aviso al cliente con su plantilla y lo dejará en la columna «Borrador» de esa fila: esas son las dos
acciones. Los datos son el número de pedido, la empresa cliente, la nueva fecha y el borrador que escribe la IA.

:::actividad Encuentra las tres partes
Lee este flujo y marca cuál es el disparador, cuáles las acciones y cuáles los datos: «Cuando un proveedor completa el formulario de
consultas, la IA clasifica la consulta y se agrega una fila con el nombre del proveedor, la consulta y la categoría».
:::

### P03 · Tres tipos de disparador
cubre: S1, S2
fuentes: F-M5-07, F-H-61
bloque: Tabla + comprueba

La documentación de Power Automate distingue tres tipos de flujo según su disparador [@F-M5-07], y la distinción sirve para cualquier
herramienta:

| Tipo | Cuándo se inicia | Ejemplo |
|---|---|---|
| Automatizado | Cuando ocurre un evento | Llega un correo, se agrega una fila |
| Instantáneo o manual | Cuando alguien aprieta un botón, también desde el teléfono | Apretar «registrar» al terminar una tarea |
| Programado | En una fecha, hora y frecuencia | Todos los días a las 8:00 |

Elegir el disparador es la primera decisión de diseño. Si tu tarea depende de que llegue algo, como un correo o un formulario, te sirve
uno automatizado. Si se hace siempre a la misma hora, como un resumen diario, te sirve uno programado. Y si quieres decidir tú el
momento, uno manual.

El camino del celular usa disparadores programados. Las acciones programadas de Gemini preparan, por ejemplo, un resumen de tus correos
o de tu calendario a la hora que elijas, siempre que la aplicación correspondiente esté conectada [@F-H-61].

:::comprueba
Camila quiere, cada mañana, una lista de los correos con documentos nuevos de su cuenta de práctica. ¿Qué disparador le sirve?
- a) Automatizado: cuando llega un correo
- **b) Programado: todos los días a una hora**
- c) Manual: cuando aprieta un botón
Retroalimentación: La lista se hace a una hora fija, todos los días. Eso es un disparador programado.
:::

### P04 · Condiciones y datos entre pasos
cubre: S1, A1
fuentes: F-M5-08, F-M5-10
bloque: Texto + imagen (flujo con dos ramas) + recuadro de error

Dos piezas más completan el flujo. La primera es la **condición**, que hace que el flujo siga, o haga algo distinto, solo si se cumple
una regla. En Power Automate una condición tiene dos ramas, una para cuando la regla es verdadera y otra para cuando es falsa. Para
armarla se elige un dato de un paso anterior, un operador, como «contiene» o «es mayor o igual que», y un valor [@F-M5-08]. Otras plataformas
tienen piezas parecidas con otros nombres, como los filtros, que dejan seguir el flujo solo si se cumple la regla.

La segunda pieza es el **mapeo de datos**. Para que un dato pase de un paso a otro, en el campo del paso siguiente eliges el dato que
viene del paso anterior. Si en vez de mapear escribes un texto a mano, ese texto se repetirá igual en cada ejecución; si mapeas, el
flujo usa el dato real de cada evento. El mapeo solo va de pasos anteriores a posteriores [@F-M5-10].

En el flujo de Andrés las dos piezas trabajan juntas. La condición deja seguir solo las filas cuya columna «Estado» contiene
«atrasado», y en la instrucción para la IA el número de pedido va mapeado desde la fila de la planilla. Así cada borrador trae el
pedido que corresponde.

:::error Escribir el dato a mano en vez de mapearlo
Si en el campo «Remitente» escribes el correo de un proveedor de prueba, todas las filas dirán lo mismo, aunque escriban personas
distintas. El dato que cambia en cada ejecución se mapea desde el paso anterior.
:::

### P05 · Herramientas no-code: cuál sirve gratis
cubre: S2
fuentes: F-H-94, F-H-93
bloque: Texto + recuadro de error

Las plataformas **no-code** arman flujos con disparadores y acciones ya hechos, sin programar. Hay muchas, pero en su versión gratuita no
todas permiten un flujo de 3 a 5 pasos con IA, que es lo que pide este laboratorio. Por eso, antes de diseñar, conviene mirar dos
límites: cuántos pasos permite el plan gratuito y si incluye IA.

Make cumple con las dos cosas. Su plan gratuito da 1.000 créditos al mes y permite escenarios de varios pasos. Cada acción de un
módulo, como leer un correo o escribir una fila en Google Sheets, suele gastar un crédito, y las funciones de IA pueden gastar más. Si
los créditos se acaban, los escenarios se detienen [@F-H-94]. Para practicar alcanzan de sobra, siempre que no los gastes en pruebas repetidas.

Zapier, en cambio, da en su plan gratuito 100 tareas al mes y solo permite flujos de dos pasos: un disparador y una acción [@F-H-93]. Los flujos
de varios pasos y los campos de IA están en los planes de pago. Sirve para conectar dos servicios, pero no para este laboratorio.

En el celular, el camino son las acciones programadas de Gemini, que vas a ver en P10. Y si en tu empresa usan otra plataforma con una
cuenta del trabajo, puede servirte, siempre que tu empresa lo autorice. Ten presente que los planes gratuitos cambian seguido: antes de
empezar, revisa qué ofrece hoy la herramienta que elijas.

:::error «Si es gratis, sirve para cualquier flujo»
Varias plataformas son gratis, pero con límites que importan. Zapier gratis, por ejemplo, solo permite un disparador y una acción.
Revisa el límite de pasos y si el plan incluye IA antes de diseñar.
:::

### P06 · Conectar servicios sin exponer datos de tu empresa
cubre: S3, A1
fuentes: F-M5-07, F-H-15
bloque: Texto + ejemplo

Un flujo conecta servicios distintos: el correo, una planilla, el calendario y la IA. Para eso las plataformas usan **conectores**,
piezas listas que cada servicio ofrece con sus propios disparadores y acciones [@F-M5-07]. Al usar un conector, la plataforma te pide iniciar
sesión en el servicio y darle permiso para leer o escribir en tu cuenta. En la práctica, conectar un servicio es entregarle a otra
herramienta llaves de tu cuenta.

En el camino del celular pasa algo parecido: Gemini se conecta con tu correo, y para las acciones programadas necesita la actividad
guardada, como verás en P10. Ese ajuste tiene un costo en privacidad que ya viste en el módulo 3. Según Google, con la actividad
guardada, revisores humanos pueden leer conversaciones para mejorar sus servicios [@F-H-15].

Como en tu trabajo manejas información real, el curso te recomienda practicar con una cuenta de Gmail creada solo para el laboratorio,
enviarte correos inventados o copias de documentos sin nombres, RUT ni teléfonos reales, y leer qué permisos pide cada conexión antes de
aceptar. Cuando el flujo esté probado y tenga sus controles, será tu empresa la que decida si se puede usar con los datos reales.

:::ejemplo La cuenta de práctica de Camila
Camila crea una cuenta de Gmail para el curso, para probar sin exponer datos de la constructora. Se envía tres correos inventados de
proveedores con asunto «[PRUEBA] Consulta», sin datos de personas reales. Esos serán sus datos de práctica.
:::

### P07 · Diseña el flujo antes de construirlo
cubre: H1, A1
fuentes: F-M5-06, F-M5-10
bloque: Tabla + ordenar pasos (sorting activity)

Antes de abrir una herramienta, dibuja el flujo en una tabla. La guía de la Universidad de Bath pide documentar de cada flujo su
propósito, sus entradas, sus salidas y sus dependencias [@F-M5-06], y hacerlo antes de construir te evita armar pasos que después no encajan. Este
es el flujo del laboratorio, «Registro de consultas»:

| N.º | Tipo | Servicio | Recibe | Entrega |
|---|---|---|---|---|
| 1 | Disparador | Gmail | Correo nuevo | Remitente, asunto, texto, fecha |
| 2 | Condición | — | Asunto | Sigue solo si contiene «[PRUEBA]» |
| 3 | Acción con IA | IA | Asunto y texto | Categoría y resumen en una línea |
| 4 | Acción | Google Sheets | Fecha, remitente, respuesta de la IA | Una fila nueva |

Son cuatro pasos. Si quieres un quinto, agrega uno que te avise cuando la categoría sea «reclamo». Fíjate en el orden: cada paso solo
puede usar datos de los pasos anteriores [@F-M5-10]. La IA no puede trabajar con un correo que todavía no llegó, y la planilla no puede anotar una
categoría que la IA aún no escribió.

Gemini también puede ayudarte con el diseño. Descríbele tu tarea y pídele la tabla de pasos con lo que recibe y entrega cada uno;
después revisa tú que el orden de los datos tenga sentido.

:::actividad Ordena los pasos
Ordena este flujo de Andrés: (a) escribir el borrador en la columna «Borrador»; (b) Andrés marca un despacho en la planilla; (c) la
IA redacta el aviso con la plantilla; (d) seguir solo si el estado contiene «atrasado». → Orden correcto: b, d, c, a.
:::

### P08 · Laboratorio con Make (1): preparar y crear el disparador
cubre: H1, S2, S3
fuentes: F-H-94, F-M5-09
bloque: Proceso paso a paso + recuadro de error

Este camino necesita un computador con navegador. Make llama escenarios a sus flujos y módulos a sus pasos. Como viste en P05, el plan
gratuito da 1.000 créditos al mes [@F-H-94], y para probar alcanza de sobra. En esta primera parte preparas los datos de práctica y creas el
disparador.

1. Crea en Google Sheets una planilla «Registro de consultas (prueba)» con cuatro columnas: Fecha, Remitente, Asunto y Análisis de la IA. Envía a tu cuenta de práctica tres correos inventados con asunto «[PRUEBA] …»: un pedido, un reclamo y una consulta general.
2. Crea tu cuenta gratuita en Make y un escenario nuevo.
3. Ponle un nombre claro, como «M5 · Registro de consultas · v1», para saber qué hace y qué versión es.
4. Agrega el primer módulo, el de Gmail, y elige leer los correos nuevos de la bandeja de entrada.
5. Conecta tu cuenta de práctica. Make te pedirá permiso para acceder a Gmail: lee qué pide y acepta.
6. Trae un correo de prueba. Al configurar el disparador, las plataformas no-code suelen traer un registro existente para armar los pasos siguientes, como hace Zapier [@F-M5-09]. Verifica que aparezca uno de tus correos «[PRUEBA]».

Si algo no coincide con lo que ves en pantalla, no te preocupes: las plataformas cambian los nombres de sus menús de vez en cuando. Lo
que importa es la lógica, que ya conoces de la tabla de P07.

:::error Probar con el correo del trabajo
Si conectas tu correo del trabajo, o el personal, sin condición, el flujo podría mandar a la IA correos con datos de clientes,
proveedores o compañeros. Usa la cuenta de práctica y agrega la condición «[PRUEBA]» antes de la IA, como verás en la pantalla
siguiente.
:::

### P09 · Laboratorio con Make (2): condición, IA y planilla
cubre: H1, S1, S3, C1
fuentes: F-M5-10, F-H-94
bloque: Proceso paso a paso + ejemplo

Ahora completas los pasos 2 a 4 del diseño de P07. Al terminar vas a tener un flujo de cuatro pasos: disparador, condición, IA y
planilla.

7. Agrega la condición entre Gmail y el paso siguiente: que el flujo siga solo si el asunto contiene «[PRUEBA]». Elige el asunto desde los datos del módulo de Gmail, el operador «contiene» y el valor «[PRUEBA]».
8. Agrega el módulo de IA y escribe esta instrucción: «Clasifica esta consulta en una sola categoría: pedido, reclamo u otra. Luego resúmela en una línea. Responde así: Categoría: … · Resumen: … No agregues datos que no estén en el correo. Asunto: [asunto] · Texto: [texto del correo]». Donde dice [asunto] y [texto del correo], mapea los campos de Gmail en vez de escribirlos a mano [@F-M5-10].
9. Agrega el módulo de Google Sheets para sumar una fila a tu planilla de prueba [@F-H-94]. Mapea Fecha, Remitente y Asunto desde Gmail, y Análisis de la IA desde la respuesta del módulo de IA.
10. Guarda el escenario con su nombre.

Si quieres mejorar la instrucción del paso 8, pégala en Gemini y pregúntale qué ambigüedades tiene. Lo que te sugiera, pruébalo antes de
dejarlo en el flujo.

:::ejemplo La primera fila de Camila
Camila hace este laboratorio para practicar, aunque su flujo del proyecto será con Gemini en el celular. Ejecuta el escenario con su
correo «[PRUEBA] Pedido de 20 resmas» y en la planilla aparece la fecha, su correo de práctica, el asunto y «Categoría: pedido ·
Resumen: solicita 20 resmas de papel para el lunes». El flujo funciona.
:::

### P10 · Camino en el celular: acciones programadas de Gemini
cubre: H1, S2, S3
fuentes: F-H-61, F-H-55
bloque: Proceso paso a paso + texto

Si no tienes computador, puedes armar un flujo programado con Gemini. La app permite hasta 10 acciones programadas activas en Android,
iPhone o la web, con una cuenta personal y la actividad guardada, y la aplicación que uses, como Gmail, tiene que estar conectada [@F-H-61].
Google la está habilitando de a poco, así que puede que todavía no aparezca en tu cuenta; si no la ves, usa el plan B del final.

1. En tu cuenta de práctica, conecta Gmail con Gemini.
2. Pide a Gemini que programe una acción diaria con un texto como este: «Todos los días a las 8:00, revisa los correos de Gmail de las últimas 24 horas cuyo asunto empiece con [PRUEBA]. Para cada uno, dame su categoría (pedido, reclamo u otra) y un resumen de una línea. No inventes datos que no estén en el correo».
3. Cuando llegue el resultado, compáralo con los correos y anota en tu planilla de prueba solo lo que esté bien.

Así queda un flujo de cuatro pasos: el disparador programado, los correos de Gmail filtrados por asunto, la IA que clasifica y resume, y
tu registro en la planilla después de revisar. Camila arma así el suyo: cada mañana, Gemini le lista los correos de su cuenta de
práctica que traen documentos nuevos, y ella los registra.

Si las acciones programadas no están disponibles, el plan B son las tareas programadas de ChatGPT. La cuenta gratuita permite 3 tareas
activas, que se repiten como máximo una vez al día, en franjas amplias como mañana, tarde o noche, y avisan por notificación o por
correo [@F-H-55]. No pueden activarse con un correo de Gmail, así que sirven para un flujo más simple: cada mañana, la IA te prepara una lista de
seguimiento a partir de datos ficticios que dejas escritos en la tarea.

### P11 · Prueba tu flujo como si fuera a fallar
cubre: S4, C2, A2
fuentes: F-M5-06, F-M5-09
bloque: Tabla + actividad

Que el flujo funcione con un correo no significa que esté listo. La guía de Bath pide probar la mayor cantidad posible de escenarios
antes de poner un flujo en marcha [@F-M5-06], y probar es eso: buscar a propósito los casos en que podría fallar. Para hacerlo con orden, arma un
**plan de pruebas** con datos ficticios y anota, para cada caso, qué esperas y qué pasó.

| Caso de prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Correo «[PRUEBA]» con un pedido | Fila con categoría «pedido» | |
| Correo «[PRUEBA]» con un reclamo | Fila con categoría «reclamo» | |
| Correo sin «[PRUEBA]» en el asunto | No pasa nada: la condición lo detiene | |
| Correo «[PRUEBA]» casi vacío | La IA responde «otra» y no inventa | |
| Dos correos «[PRUEBA]» seguidos | Dos filas, cada una con sus datos | |

El tercer caso es el más importante, porque comprueba que tu condición protege los correos que no son de prueba. El cuarto revisa si
la IA inventa contenido cuando le falta información. Si usas el camino del celular, adapta el resultado esperado: en vez de filas,
revisa que la lista de Gemini traiga cada correo «[PRUEBA]» con su categoría y deje fuera el que no lo tiene. Cada prueba gasta
créditos o usos del plan gratuito [@F-M5-09], así que cinco casos bien elegidos valen más que cincuenta iguales.

:::actividad Corre tu plan de pruebas
Envía los cinco correos de prueba y completa la tabla. Marca con una X cada caso en que lo obtenido no coincide con lo esperado. Esas
son las fallas que corregirás en la pantalla siguiente.
:::

### P12 · Lee el error y corrige
cubre: S4, C2, A2
fuentes: F-M5-11, F-M5-10
bloque: Texto + escenario de diagnóstico + comprueba

Cuando un flujo falla, no adivines: busca dónde falló. Las plataformas guardan un **historial de ejecuciones**. En Zapier, por
ejemplo, se abre la ejecución con error, se ubica el paso que falló y se leen su diagnóstico y el mensaje de error. Busca la opción
equivalente en la herramienta que uses. Una vez corregida la causa, Zapier permite volver a ejecutar lo que falló para no perder datos [@F-M5-11].

Hay fallas que se repiten mucho y conviene reconocerlas:
- Todas las filas dicen lo mismo: un campo quedó escrito a mano en vez de mapeado.
- Un campo aparece vacío: el mapeo se rompió, algo que puede pasar al reordenar o duplicar pasos o al cambiar de aplicación; Zapier lo marca con una advertencia amarilla [@F-M5-10].
- El flujo no corre: el disparador no detectó el correo o la condición está mal escrita.
- El escenario se detuvo: en Make, se acabaron los créditos del mes (P05).

Después de cada corrección, vuelve a correr la prueba que falló. Un error común es concluir que, si el flujo falló, la herramienta no
sirve. La mayoría de las fallas está en la configuración, en un mapeo, una condición o un permiso, y leer el error para corregirlo es
la parte normal del trabajo con flujos.

:::comprueba
En la planilla de Andrés, todos los borradores dicen «pedido 412», aunque los despachos atrasados son distintos. ¿Cuál es el error
más probable?
- a) La IA está inventando el número de pedido
- **b) El número se escribió a mano en vez de mapearlo desde la fila**
- c) Se acabaron los créditos
Retroalimentación: Un texto fijo se repite en cada ejecución. El pedido debe mapearse desde el dato de la planilla.
:::

### P13 · Prolijidad: documenta tu flujo
cubre: A1, C1
fuentes: F-M5-06, F-M5-10
bloque: Texto + lista de verificación (checklist) + comprueba

Un flujo que solo entiende quien lo armó es frágil. Si mañana falla, si sales de vacaciones o si otra persona de tu equipo tiene que
revisarlo, la documentación hace la diferencia. La guía de Bath pide documentar el propósito, las entradas, las salidas y las
dependencias, usar nombres claros y monitorear los flujos: apaga los que fallan una y otra vez o los que llevan 30 días sin activarse [@F-M5-06].

Arma una **ficha del flujo** con esta lista:
- [ ] Un nombre con convención de módulo, propósito y versión, como «M5 · Registro de consultas · v2».
- [ ] El propósito, es decir, qué tarea resuelve y para quién.
- [ ] El disparador que lo inicia.
- [ ] Los pasos, con la tabla de P07 actualizada.
- [ ] Los datos que entran y salen de cada paso.
- [ ] Las dependencias, como cuentas conectadas, planilla, créditos o límites del plan.
- [ ] Las pruebas, con tu tabla de P11 y lo que corregiste.

Un flujo es funcional cuando el disparador se activa y cada acción recibe los datos correctos del paso anterior [@F-M5-10], y tu tabla de pruebas
es la evidencia de eso.

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

En este tema armaste un flujo con sus tres elementos, disparador, acciones y datos, más una condición. Elegiste la herramienta según lo
que permite su plan gratuito, conectaste servicios con una cuenta de práctica y lo probaste y corregiste con datos ficticios [@F-M5-06; @F-M5-11]. Ahora toca
hacer lo mismo con la tarea de tu trabajo que marcaste en tu matriz del tema 1.

Ten presente que tu flujo todavía funciona sin control humano. En el próximo tema vas a decidir dónde debe revisar una persona y qué
hacer si algo sale mal, así que no lo uses aún con documentos reales de tu empresa.

:::actividad Tu flujo para el proyecto
Toma la tarea que marcaste en tu matriz del tema 1:
1. Diseña su flujo en una tabla, como en P07, con 3 a 5 pasos. Al menos uno debe usar IA y otro, correo, planilla o calendario.
2. Constrúyelo en Make o con las acciones programadas de Gemini, con datos ficticios o copias sin datos sensibles.
3. Pruébalo con al menos cuatro casos, incluido uno que debería detenerse.
4. Corrige lo que falló y anota qué cambiaste.
5. Documenta el flujo con la ficha de P13.

Guarda capturas de pantalla del flujo y de tu tabla de pruebas, sin datos reales.
:::

### Ideas clave

1. Un flujo automatizado tiene un disparador que lo inicia, una o más acciones y datos que pasan de un paso al siguiente.
2. Los disparadores pueden ser automatizados (tras un evento), manuales (con un botón) o programados (fecha, hora y frecuencia).
3. Una condición hace que el flujo siga solo si se cumple una regla; los datos se mapean desde pasos anteriores, porque un texto
   escrito a mano se repite igual siempre.
4. En planes gratuitos, Make permite flujos de varios pasos con IA desde un computador; en el celular, las acciones programadas de
   Gemini o, como plan B, las tareas programadas de ChatGPT. Zapier gratis solo permite dos pasos.
5. Conectar servicios es dar permisos sobre una cuenta: practica con una cuenta de prueba y datos ficticios, sin exponer datos de tu
   empresa.
6. Probar es buscar los casos en que el flujo podría fallar; ante un error, se revisa el historial, se corrige la causa y se vuelve a
   probar.
7. Documentar nombre, propósito, pasos, datos, dependencias y pruebas hace que el flujo se pueda revisar y mantener.

### Referencias bibliográficas

- Google. (s. f.-a). *Acciones programadas en las aplicaciones de Gemini*. https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- Google. (s. f.-b). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Make. (s. f.). *Pricing*. https://www.make.com/pricing
- Microsoft. (2022, 16 de mayo). *Agregar una condición a un flujo de nube en Power Automate*. Microsoft Learn. https://learn.microsoft.com/es-es/power-automate/add-condition
- Microsoft. (2026, 18 de septiembre). *Triggers (Power Automate)*. Microsoft Learn. https://learn.microsoft.com/es-es/power-automate/triggers-introduction
- OpenAI. (2026, 23 de octubre). *Scheduled tasks in ChatGPT*. OpenAI Help Center. https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026a, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637
- Zapier. (2026b, 13 de agosto). *Learn key concepts in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier
- Zapier. (2026c, 23 de octubre). *Plans & pricing*. https://zapier.com/pricing
- Zapier. (2026d, 18 de junio). *Send data between steps by mapping fields*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496343026701


## M5-AE3 · Supervisión humana y riesgos

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M5-12, F-M5-13
bloque: Texto

En el tema anterior construiste un flujo que funciona solo. Eso es una ventaja y también un riesgo: un flujo no se cansa, pero tampoco
duda, y si algo sale mal, lo repite cada vez. En este tema vas a decidir dónde tiene que mirar una persona y qué hacer si el flujo
falla.

El aprendizaje esperado es este: Incorporar puntos de supervisión humana y controles de riesgo en un flujo automatizado, evaluando su efecto.
Al final deberías poder definir puntos de control humano según el riesgo de cada paso, escribir un plan de contingencia para tu flujo y
comprobar con pruebas si tus controles sirven.

Vas a trabajar con casos de oficina en que un flujo automatizado con IA trae un problema. En cada uno vas a analizar qué pasó, qué
riesgo apareció y qué control lo habría evitado, con ideas de marcos reconocidos, como las directrices éticas de la Comisión Europea y
el marco de gestión de riesgos de IA del NIST de Estados Unidos [@F-M5-12; @F-M5-13]. Además de Camila y Andrés aparece Paula, ejecutiva de atención al
cliente en una tienda de electrodomésticos. Las tres personas y sus casos son ficticios; las situaciones reales las vas a ver en la
actividad de análisis de casos.

Hay una idea que recorre todo el tema. Automatizar una tarea no te quita la **responsabilidad** por su resultado. Lo que cambia es tu
trabajo: pasas de hacer la tarea a supervisar que se haga bien.

### P02 · Caso 1: el error que se repite solo
cubre: S1
fuentes: F-M5-10, F-M5-14
bloque: Escenario (scenario) con preguntas + recuadro de error

Andrés puso en marcha su flujo: cuando marca un despacho como «atrasado» en la planilla, la IA redacta el aviso al cliente con la nueva
fecha y lo deja en la columna «Borrador». Andrés copia el borrador y lo envía. En todas sus pruebas funcionó.

Una semana después, un cliente llama molesto porque su pedido no llegó el día que decía el aviso. Andrés revisa la planilla y descubre
que, desde el lunes, una compañera anota las fechas nuevas de otra forma y la IA las interpreta mal. Cinco avisos salieron con la
fecha equivocada, y los clientes ya habían organizado su recepción con esos datos.

Esto es un **error en cadena**. En un flujo, los datos de un paso alimentan al siguiente, así que un dato erróneo, o un mapeo que se
rompió, se repite en cada ejecución y llega a quien usa el resultado [@F-M5-10]. A eso se suma que la IA generativa puede **confabular**, es decir,
entregar contenido falso con tono seguro [@F-M5-14], como una fecha que la planilla no decía.

Antes de seguir, piensa en estas preguntas:
1. ¿En qué paso nació el error y en qué paso se hizo visible?
2. ¿Quién se dio cuenta, y cuánto tiempo pasó?
3. ¿Qué control habría detectado el problema el primer día?

:::error «Si pasó las pruebas, funcionará siempre»
Las pruebas revisan los casos que imaginaste. En la vida real aparecen otros: un proveedor nuevo, un formato distinto, un correo
reenviado. Por eso un flujo necesita supervisión también después de ponerlo en marcha.
:::

### P03 · Caso 2: datos personales en el flujo
cubre: S1, A1
fuentes: F-M5-14, F-H-15
bloque: Escenario (scenario) con preguntas + recuadro destacado

La constructora donde trabaja Camila abrió una vacante y llegan decenas de currículums por correo. En la reunión de la semana, su
jefatura propone automatizar la revisión: un flujo copiaría a una planilla los datos de cada currículum y le pediría a la IA un resumen
y una opinión sobre cada persona.

Antes de opinar, Camila piensa en el riesgo. Sabe lo que trae un currículum, porque los recibe cada vez que hay una vacante: nombre,
RUT, teléfono, dirección, experiencia y a veces datos de salud o de familia. El perfil de riesgos de IA generativa del NIST incluye la
**privacidad**, es decir, la filtración o el uso no autorizado de datos personales [@F-M5-14]. Y si el flujo usara Gemini con la actividad guardada,
según Google, revisores humanos podrían leer esas conversaciones [@F-H-15].

Camila propone otra cosa: «Automaticemos solo el registro de que llegó una postulación, con la fecha y el cargo. El análisis de cada
currículum lo hace una persona». Su jefatura acepta probarlo así. Con esa propuesta, los datos sensibles no pasan por la IA y la
decisión sobre cada persona queda en manos de alguien que puede responder por ella.

Antes de seguir, piensa en estas preguntas:
1. ¿Qué datos personales pasarían por cada paso del flujo que propuso la jefatura?
2. ¿Cuáles son necesarios para la tarea y cuáles sobran?
3. ¿Qué parte de ese flujo decidiría algo sobre una persona?

:::clave
El dato más seguro es el que no entra al flujo. Antes de agregar un campo, pregúntate si la tarea lo necesita de verdad.
:::

### P04 · Caso 3: el sesgo que se multiplica
cubre: S1, A2
fuentes: F-M5-14
bloque: Escenario (scenario) con preguntas + recuadro de error

Paula, ejecutiva de atención al cliente en una tienda de electrodomésticos, armó un flujo que clasifica los reclamos de clientes en
urgencia alta, media o baja, para que el equipo atienda primero lo urgente. Al mes revisa la planilla y nota algo raro: los reclamos
escritos con faltas de ortografía o en un tono muy informal quedan casi siempre en «baja», aunque algunos eran graves, como un
refrigerador que llegó sin funcionar.

El NIST describe dos riesgos que aparecen juntos en este caso. El primero es el **sesgo dañino**: la IA puede reproducir sesgos, y al
automatizarla aumentan la velocidad y la escala con que se propagan [@F-M5-14]. Un criterio injusto aplicado a mano afecta a unos pocos; dentro de
un flujo, afecta a todos. El segundo es el **sesgo de automatización**, que consiste en confiar de más en lo que entrega un sistema
automático. El equipo de Paula dejó de leer los reclamos marcados como «baja» porque «el sistema ya los clasificó», y esa dependencia
agravó el error.

Antes de seguir, piensa en estas preguntas:
1. ¿A quiénes perjudicó la clasificación, y por qué nadie lo notó antes?
2. ¿Qué habría pasado si una persona revisaba cada semana una muestra de reclamos en «baja»?
3. ¿Debería la IA decidir sola la urgencia de un reclamo?

:::error «Lo decidió el sistema, así que es objetivo»
Un sistema automático puede repetir sesgos de sus datos y aplicarlos a todos los casos, más rápido. Que no lo haya decidido una persona
no lo hace neutral: hay que revisar sus resultados.
:::

### P05 · Decisiones automatizadas sobre personas: la ley en Chile
cubre: S1, S2, A1
fuentes: F-M5-16, F-M3-16
bloque: Texto + comprueba

Los casos de Camila y de Paula tienen algo en común: el flujo decide, o influye en, algo que afecta a una persona. En Chile, la Ley
21.719 modifica la Ley 19.628 sobre datos personales y agrega un artículo 8° bis sobre **decisiones automatizadas** [@F-M5-16].

Según ese artículo, toda persona tiene derecho a oponerse y a no ser objeto de decisiones basadas en el tratamiento automatizado de sus
datos, incluida la elaboración de perfiles, cuando le produzcan efectos jurídicos o le afecten significativamente. Hay excepciones, por
ejemplo cuando la decisión es necesaria para un contrato, cuando hay consentimiento expreso o cuando lo autoriza una ley. Pero aun en
esos casos, quien es responsable de los datos debe asegurar que la persona reciba información y una explicación, pueda pedir
**intervención humana**, expresar su punto de vista y pedir que se revise la decisión.

En tu trabajo esto importa cada vez que un flujo toca a otras personas, sean clientes, proveedores, compañeros o candidatos a un puesto.
Según su texto, estos cambios rigen desde el 1 de diciembre de 2026. Hay un proyecto de ley en trámite en el Senado que propone
postergar esa fecha a diciembre de 2027 y que todavía no está aprobado [@F-M3-16], así que antes de aplicar esta norma revisa en qué estado está.

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
fuentes: F-M5-12, F-M5-13
bloque: Tabla + ejemplo

Las directrices éticas para una IA fiable de la Comisión Europea ponen como primer requisito la acción y supervisión humanas, y
describen tres formas de supervisar [@F-M5-12]. En inglés se conocen con nombres que vas a encontrar a menudo:

| Forma | Qué hace la persona | En inglés | En un flujo |
|---|---|---|---|
| Participación humana | Interviene en cada ciclo de decisión | *Human-in-the-loop* (en el circuito) | Revisa y aprueba cada resultado antes de que se use |
| Control humano | Interviene en el diseño y en el seguimiento del funcionamiento | *Human-on-the-loop* (sobre el circuito) | El flujo corre solo; la persona revisa el registro y corrige |
| Mando humano | Supervisa la actividad global y decide cuándo y cómo usar el sistema, o no usarlo | *Human-in-command* | Decide si el flujo se usa, se pausa o se apaga |

Las directrices agregan una regla útil: cuanto menor sea la supervisión posible, mayores deben ser las verificaciones. El marco del
NIST, por su parte, explica que las configuraciones entre personas e IA van de totalmente autónomas a totalmente manuales, y pide
definir y documentar los procesos de supervisión y los roles de cada persona [@F-M5-13].

:::ejemplo Las tres formas en la tienda de Paula
Con participación humana, alguien confirma cada reclamo que el flujo clasifica como «baja». Con control humano, una vez por semana
alguien revisa una muestra en el registro. Con mando humano, la jefatura decide si el flujo sigue en uso después de ver los resultados
del mes, y decide también que cualquier cliente pueda pedir que su reclamo lo lea una persona desde el comienzo.
:::

### P07 · Dónde poner un punto de control
cubre: H1, C1
fuentes: F-M5-08, F-H-93
bloque: Texto + lista + comprueba

Un **punto de control** es un lugar del flujo donde una persona revisa antes de que el resultado siga. No va en todos los pasos, sino
donde el riesgo es mayor. Estos son los lugares típicos:
- Antes de que algo salga hacia otra persona, como un correo a un cliente o un aviso al equipo.
- Antes de escribir en un registro que otros usan para decidir, como la planilla de pagos o el registro de pedidos.
- Cuando la IA clasifica, resume o extrae datos que luego se usan sin volver al original.
- Cuando aparecen datos personales.
- Cuando un dato no cumple una regla; una condición puede detener el flujo o desviarlo a revisión [@F-M5-08], por ejemplo si la fecha extraída está vacía o es anterior a hoy.

Algunas plataformas tienen pasos de aprobación ya hechos, pero no caben en sus planes gratuitos más básicos: Zapier gratis, por
ejemplo, solo permite flujos de dos pasos [@F-H-93]. Por eso en este curso usamos la revisión manual, que funciona gratis. El flujo deja el
resultado en una columna «Estado» con el valor «por revisar», y nadie lo usa hasta que una persona lo cambia a «aprobado». En el camino
del celular la lógica es la misma: Gemini te entrega la lista y nada queda registrado hasta que tú la revisas.

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
bloque: Lista de verificación (checklist) + tabla + actividad

Una revisión sin criterios se vuelve un clic automático: «aprobado, aprobado, aprobado». Para que el control sirva, define qué revisa la
persona y cuándo aprueba. El NIST pide que estos procesos de supervisión queden definidos y documentados [@F-M5-13].

Un **criterio de aprobación** es una pregunta que se responde con sí o no en pocos segundos, por ejemplo:
- [ ] ¿Los datos coinciden con el correo o el documento original?
- [ ] ¿La categoría o el resumen de la IA es correcto?
- [ ] ¿Hay datos personales que no deberían estar?
- [ ] ¿El tono es adecuado para quien lo va a recibir?

Si algo no cumple, la persona decide si lo corrige o si hace esa tarea a mano. La cantidad de revisión depende del riesgo, y para
decidirla sirven la matriz del tema 1 y la regla de la Comisión Europea: menos supervisión pide más verificaciones [@F-M5-12]. Esta tabla es una
propuesta del curso:

| Riesgo del paso | Forma de supervisión | Cómo se revisa |
|---|---|---|
| Bajo | Control humano | Revisión de una muestra del registro, por ejemplo una vez al día |
| Alto | Participación humana | Revisión de cada resultado antes de que se use |
| Decide algo importante sobre una persona | Mando humano | No se automatiza la decisión: la toma una persona |

:::actividad Define tus criterios
Escribe tres o cuatro criterios de aprobación para el punto de control más importante de tu flujo. Cada uno debe poder responderse con
sí o no en pocos segundos.
:::

### P09 · Registro: que quede huella
cubre: S3, A1
fuentes: F-M5-12, F-M5-11
bloque: Texto + tabla de ejemplo + ejemplo

Cuando algo sale mal, la primera pregunta es qué pasó, y para responderla necesitas un **registro**. Las directrices europeas piden
documentar los datos, los procesos y las decisiones para lograr **trazabilidad**: poder reconstruir qué pasó, entender por qué hubo un
error y prevenir otros [@F-M5-12].

En tu flujo hay dos registros. Uno es el historial de la plataforma; en Zapier, por ejemplo, cada ejecución queda guardada con el paso
que falló y su mensaje de error [@F-M5-11]. El otro es tu propio registro en la planilla del flujo, al que conviene agregarle columnas para la
supervisión, como en este ejemplo de Andrés:

| Fecha | Dato original | Resultado de la IA | Estado | Revisó | Observación |
|---|---|---|---|---|---|
| 12-11 | Pedido 412 · nueva fecha 14-11 | «Llegará el jueves 14» | Aprobado | Andrés | — |
| 13-11 | Pedido 415 · nueva fecha 05-12 | «Llegará el 12 de mayo» | Corregido | Andrés | La IA leyó la fecha al revés |

La columna «Dato original» es la más útil, porque permite comparar lo que entró con lo que salió sin tener que buscar otra vez el dato
de origen.

:::ejemplo El registro de Paula
Con la columna «Revisó», Paula descubrió que nadie miraba los reclamos en «baja». El problema no era solo de la IA: el punto de control
existía en el papel, pero nadie lo había asumido.
:::

### P10 · Reversibilidad: poder detener y deshacer
cubre: S3, C2
fuentes: F-M5-13, F-M5-15
bloque: Texto + lista + comprueba

Un flujo seguro es uno que se puede detener y cuyos efectos se pueden deshacer. A eso se le llama **reversibilidad**. El marco del NIST
pide mecanismos y responsables para reemplazar, desconectar o desactivar un sistema que no funciona como se espera [@F-M5-13], y los principios de
la OCDE piden que un sistema que arriesga causar daños pueda ser anulado, reparado o retirado de forma segura [@F-M5-15].

En un flujo simple, eso se traduce en cuatro prácticas que el curso te recomienda:
- Saber dónde se apaga: antes de activar el flujo, ubica cómo se pausa o se desactiva en tu herramienta.
- No sobrescribir el original: que el flujo agregue filas nuevas en vez de reemplazar datos, y que guarde el dato original.
- Preferir acciones que se pueden corregir: una fila en una planilla se arregla fácil, pero un correo enviado a un cliente no se puede recoger.
- Recuperar lo que falló: como viste en el tema 2, algunas plataformas permiten volver a ejecutar lo que falló una vez corregida la causa.

:::comprueba
¿Cuál de estas acciones es más difícil de revertir si el flujo se equivoca?
- a) Agregar una fila en una planilla de prueba
- **b) Enviar un correo automático a todos los clientes**
- c) Crear un evento en tu propio calendario
Retroalimentación: Un correo enviado no se puede recoger. Las acciones hacia otras personas necesitan un punto de control antes.
:::

### P11 · Plan de contingencia
cubre: H1, C2
fuentes: F-M5-06, F-M5-13
bloque: Proceso (process block) + ejemplo

Un **plan de contingencia** dice qué hacer si el flujo deja de funcionar o empieza a equivocarse. La guía de la Universidad de Bath lo
pide para todo flujo importante [@F-M5-06], y el NIST incluye la respuesta a incidentes y la recuperación en el seguimiento que se hace después de
poner un sistema en marcha [@F-M5-13]. Tu plan responde seis preguntas:

1. ¿Cómo me doy cuenta? Por ejemplo, por un error en el historial, filas vacías o el aviso de alguien.
2. ¿Cómo lo detengo? Dónde se pausa el flujo y quién lo hace.
3. ¿Cómo sigue el trabajo mientras tanto? Con la forma manual de hacer la tarea.
4. ¿Cómo recupero lo que falló? Revisando el registro, corrigiendo las filas malas y volviendo a ejecutar lo pendiente.
5. ¿A quién aviso? A las personas que usan el resultado.
6. ¿Quién responde? Una persona con nombre, no «el sistema».

Escribe tus seis respuestas pensando en tu flujo y en tu equipo. Si alguna es «no sé», ese es el punto débil que tienes que resolver
antes de ponerlo en marcha.

:::ejemplo El plan de Andrés
Andrés sabrá que algo anda mal si ve un borrador sin fecha, una fecha distinta a la de la planilla o el reclamo de un cliente. En ese
caso pausa el escenario desde su cuenta y, mientras tanto, escribe los avisos con la plantilla manual de su biblioteca. Después compara
los avisos de la semana con la planilla y, si uno salió mal, escribe al cliente para corregirlo. Avisa a su jefatura y a ventas.
Responde él, y si está de vacaciones, su compañera de turno.
:::

### P12 · Evalúa el efecto de tus controles
cubre: C1, A2, H1
fuentes: F-M5-13
bloque: Proceso + tabla + actividad

Poner un control no basta: hay que comprobar que sirve. El marco del NIST pide medir con pruebas y documentar los resultados [@F-M5-13], y en tu
flujo puedes hacerlo en cuatro pasos:

1. Prepara 10 casos ficticios y, en 3 de ellos, siembra un error: un correo con una fecha ambigua, uno con un dato personal que no debería pasar y uno que debería detenerse.
2. Corre el flujo sin el control y anota cuántos errores llegan al resultado.
3. Corre el flujo con el control y anota cuántos errores detectó la persona revisora.
4. Mide el costo: cuánto tiempo tomó revisar y cuántas veces el control marcó algo que estaba bien, lo que se llama falsa alarma.

| Indicador | Sin control | Con control |
|---|---|---|
| Errores que llegaron al resultado | 3 de 3 | 0 de 3 |
| Falsas alarmas | — | 1 |
| Tiempo de revisión | — | Pocos minutos por tanda |

Con los datos, decides. Puedes mantener el control, ajustarlo, por ejemplo revisando solo una muestra si nunca encuentra errores, o
subir la supervisión si pasaron errores. Un buen control detecta los errores importantes sin volver más lento todo el trabajo, y si no
lo mides, no sabes si cumple.

:::actividad Mide tu control
Haz la prueba con tu flujo y completa la tabla. Escribe una conclusión de dos líneas: ¿tu control reduce el riesgo lo suficiente para lo
que cuesta?
:::

### P13 · Responsabilidad y prudencia
cubre: A1, A2
fuentes: F-M5-15, F-M5-13
bloque: Texto + escenario breve + comprueba

Los principios de la OCDE incluyen la **rendición de cuentas**: quienes ponen en marcha un sistema de IA responden por su
funcionamiento, y deben registrar datos, procesos y decisiones y gestionar los riesgos de forma sistemática [@F-M5-15]. El marco del NIST pide,
además, roles claros: quién supervisa, quién puede apagar el sistema y quién atiende un incidente [@F-M5-13].

Para ti esto tiene un sentido práctico: el flujo actúa en tu nombre. Si manda un dato equivocado a un cliente o a un proveedor, para
quien lo recibe el error es tuyo y de tu empresa, no de la herramienta. Un error común es pensar lo contrario, que si el flujo se
equivocó la culpa es del sistema. Justamente para poder responder cuando algo falla se definen puntos de control, registros y un plan
de contingencia.

La **prudencia** es la actitud que acompaña esa responsabilidad. No es miedo a automatizar, sino no confiar de más. El sesgo de
automatización, que viste en el caso de Paula, aparece cuando el flujo funciona bien por un tiempo y la revisión se relaja. La persona
prudente sigue mirando, sobre todo cuando cambia algo: un proveedor nuevo, un formato distinto, un cambio en la herramienta. Y también
mira más allá de su flujo. Una empresa que decide automatizar todo lo que pueda, aunque baje la calidad, arriesga la confianza de sus
clientes y de su propio equipo, así que conviene pensar cómo una automatización afecta a quienes trabajan y a quienes reciben el
servicio.

:::comprueba
Paula lleva dos meses sin encontrar errores en la revisión. ¿Qué es lo más prudente?
- a) Eliminar el control, porque ya no hace falta
- **b) Mantener una revisión por muestreo y volver a revisar todo si algo cambia**
- c) Dejar que la IA también decida la respuesta al cliente
Retroalimentación: Sin errores, el control puede aliviarse, pero no desaparecer. Los cambios traen errores nuevos.
:::

### P14 · Cierre: tu flujo con supervisión humana
cubre: C1, C2, H1, A1
fuentes: F-M5-12, F-M5-13
bloque: Texto + actividad de cierre (entrega)

En este tema analizaste tres casos: un error en cadena, un flujo con datos personales y un sesgo que se multiplicaba. Viste que la
supervisión humana puede ser participación, control o mando [@F-M5-12], y que se ajusta al riesgo [@F-M5-13]. También aprendiste a dejar registro, a hacer el
flujo reversible, a escribir un plan de contingencia y a medir si tus controles sirven.

Con eso puedes completar tu prototipo. Un flujo con supervisión humana no es más lento: es uno en el que puedes confiar y del que puedes
responder ante tu jefatura. Cuando esté listo, tu empresa podrá decidir con evidencia si se usa con los datos reales.

:::actividad Completa tu prototipo
Toma el flujo que construiste en el tema 2 y agrégale:
1. Un mapa de riesgos: para cada paso, qué podría salir mal (errores en cadena, privacidad, sesgo).
2. Los puntos de control: dónde revisa una persona, con qué forma de supervisión y por qué, según el riesgo.
3. Los criterios de aprobación: tres o cuatro preguntas de sí o no para cada punto de control.
4. El registro: las columnas de supervisión en tu planilla.
5. El plan de contingencia: las seis respuestas de P11.
6. La evaluación: tu tabla con y sin control, y tu conclusión.

Trabaja siempre con datos ficticios o con copias sin datos sensibles.
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

### Referencias bibliográficas

- Google. (s. f.). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- Ley 21.719. (2024, 13 de diciembre). *Regula la protección y el tratamiento de los datos personales y crea la Agencia de Protección de Datos Personales*. Biblioteca del Congreso Nacional de Chile. https://www.bcn.cl/leychile/navegar?idLey=21719
- Microsoft. (2022, 16 de mayo). *Agregar una condición a un flujo de nube en Power Automate*. Microsoft Learn. https://learn.microsoft.com/es-es/power-automate/add-condition
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OCDE. (2024). *Principios de la OCDE sobre IA*. OECD.AI. https://oecd.ai/en/ai-principles
- Senado de Chile. (2026). *Proyecto que modifica la Ley 21.719 (Boletín 18623-07)*. https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18623
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026a, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637
- Zapier. (2026b, 23 de octubre). *Plans & pricing*. https://zapier.com/pricing
- Zapier. (2026c, 18 de junio). *Send data between steps by mapping fields*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496343026701


---

# Módulo 6 · Taller de IA generativa para entornos laborales

**Competencia:** Aplicar la IA generativa en un proyecto basado en un desafío laboral real, midiendo resultados y comunicándolos, integrando lo aprendido en los módulos anteriores.


## M6-AE1 · Oportunidad de mejora con IA

### P01 · Qué vas a lograr en este taller
cubre: C1, C2
fuentes: F-M6-04
bloque: Texto + línea de tiempo (los cuatro hitos del módulo)

Este módulo es un taller. No trae temas nuevos que estudiar: aquí juntas lo que construiste desde el módulo 1 y lo conviertes en un
proyecto terminado, medido y presentado, con una tarea de tu trabajo como centro. Por eso las pantallas son pocas. El trabajo lo
haces tú, con tu proyecto al lado.

El aprendizaje esperado de este tema es este:
Diagnosticar una oportunidad de mejora en un contexto laboral real (su cargo actual o uno al que aspira) que pueda abordarse con IA, definiendo situación inicial y metas.
Al terminar vas a tener descrita con datos la situación inicial de una tarea de tu cargo, una meta con indicadores medibles y una
justificación de por qué usar IA en ella es viable.

El taller avanza en cuatro hitos. En este tema entregas el Hito 6a, con el diagnóstico, la meta y el plan de medición. En el segundo
tema implementas y documentas el flujo (Hito 6b), y en el tercero mides los resultados (Hito 6c) y preparas un pitch de tres minutos
y tu portafolio final (Hito 6d). Un método de mejora muy usado se ordena con tres preguntas: qué quieres lograr, cómo sabrás que un
cambio es una mejora y qué cambio vas a probar [@F-M6-04]. Este tema responde las dos primeras, porque sin un punto de partida medido no hay
forma de saber, al final, si tu proyecto funcionó.

:::ejemplo Dos proyectos que se cierran
Camila es asistente administrativa en una constructora y registra facturas, órdenes de compra y contratos en una planilla. Su
proyecto es ese registro: quiere hacerlo más rápido y sin errores de clasificación. Como trabaja con documentos reales, primero
prueba con copias sin datos sensibles. Andrés, encargado de bodega en una distribuidora, sigue con los despachos atrasados: su
jefatura aprobó la reserva de cajas que propuso en el módulo 2, y ahora él trabaja los avisos a los clientes cuando un despacho igual
se atrasa. Los dos te acompañan hasta el pitch final.
:::

### P02 · Reúne lo que ya construiste
cubre: S1, A1
fuentes: F-M6-04
bloque: Texto + tabla + actividad

Tu proyecto no parte de cero. Cada módulo dejó una pieza, y el diagnóstico se apoya en todas ellas.

| Hito | Lo que tienes | Para qué te sirve ahora |
|---|---|---|
| 1 | Desafío laboral real y biblioteca de prompts v1 | Define la tarea que vas a mejorar |
| 2 | Brief y presentación de 6 láminas | Objetivo, audiencia y mensaje ya escritos |
| 3 | Informe breve con fuentes | Datos y contexto sobre el problema |
| 4 | Pieza multimedia con ficha de uso ético | Material para comunicar la solución |
| 5 | Prototipo de un paso automatizado, con supervisión | La base del flujo que implementarás |

Antes de redactar, junta todo en una sola carpeta, en el celular o en el computador, y revisa cada pieza con una pregunta: ¿sigue
apuntando al mismo desafío? Es normal que el problema se haya afinado en el camino. Si cambió, escribe en una línea qué cambió y por
qué. Si un hito quedó incompleto, no lo rehagas entero: anota qué le falta y úsalo igual, porque en este tema importa la situación
inicial y no la perfección de lo anterior.

Tener a la vista lo que ya hiciste es parte de la **orientación a resultados**: mirar el proyecto como un todo que tiene que producir
una mejora en tu trabajo, y no como una lista de tareas sueltas del curso [@F-M6-04].

:::actividad Arma tu carpeta del proyecto
Crea una carpeta llamada «Proyecto IA · [tu nombre]» y guarda en ella una copia de cada hito, del 1 al 5, junto con la
retroalimentación que te dio tu tutor en cada uno. Si alguna pieza tiene datos de tu empresa, guarda solo la versión sin datos
sensibles. Después escribe en un documento nuevo, en dos líneas, tu desafío tal como lo entiendes hoy.
:::

### P03 · Diagnóstico: cómo se hace la tarea hoy
cubre: S1, H1
fuentes: F-M6-01, F-M6-04
bloque: Texto + escenario (el diagnóstico de Andrés)

Un **diagnóstico** describe la situación actual de la tarea que quieres mejorar: cómo se hace, cuánto cuesta en tiempo o en errores
y qué la complica [@F-M6-01]. Es la foto del «antes», y para tomarla conviene responder cinco preguntas en orden:

1. ¿Cuál es la tarea? Una sola, con un verbo: registrar, responder, resumir, avisar.
2. ¿Cómo se hace hoy? Los pasos, en orden, y quién hace cada uno.
3. ¿Cuánto se repite? Veces por día o por semana.
4. ¿Qué sale mal? Demoras, errores, retrabajo, reclamos.
5. ¿Cómo lo sabes? Un registro, una planilla, tu propia medición.

La quinta pregunta es la que más se olvida. Un error común es escribir «me demoro mucho» o «hay muchos errores». ¿Cuánto es mucho?
Sin datos, el diagnóstico es una impresión y al final no podrás demostrar que algo mejoró [@F-M6-04]. Con datos, se convierte en una situación
inicial contra la que vas a comparar después.

Como tu proyecto es sobre una tarea de tu cargo, el diagnóstico lo escribes desde lo que ves cada semana. Si la tarea pasa por varias
personas, describe con detalle la parte que haces tú, que es la que vas a medir, y nombra en una línea lo que hacen las demás.

:::ejemplo El diagnóstico de Andrés
«Cuando un despacho se atrasa, aviso al cliente por correo. Reviso la planilla de despachos, busco el contacto y escribo el aviso
desde cero. Pasa unas siete veces por semana. Muchas veces el aviso sale al día siguiente, y algunos clientes reclaman porque nadie
les avisó. Lo sé por mi bandeja de enviados y por los reclamos que anota ventas.»
:::

### P04 · La línea base: tu punto de partida
cubre: S1, C1
fuentes: F-M6-01, F-M6-02
bloque: Texto + tabla de registro descargable + pregunta de verificación

La **línea base** es el valor de un indicador en el punto de partida [@F-M6-02]. Informa la situación inicial y es la referencia para saber, más
adelante, si tus esfuerzos dieron resultado. Sin línea base no se puede fijar una meta con sentido [@F-M6-01].

Si no tienes datos, lo recomendable es levantarlos en un primer periodo, antes de cambiar nada [@F-M6-01]. Para tu proyecto basta con registrar
la tarea durante una o dos semanas, tal como la haces hoy. Una tabla simple funciona bien:

| Fecha | Caso | Minutos | Errores | Observación |
|---|---|---|---|---|
| 03-11 | Aviso pedido 412 | 14 | 0 | Busqué el contacto en dos lugares |
| 04-11 | Aviso pedido 415 | 11 | 1 | Fecha de llegada equivocada |

Camila hizo lo mismo con su registro de documentos. Tomó 30 documentos de la oficina, entre facturas, órdenes de compra y contratos,
hizo copias sin datos sensibles y los registró a mano en una planilla de prueba, cronometrando cada uno. En promedio le tomó 4 minutos
por documento, y 3 de los 30 quedaron mal clasificados. Además, encontrar un documento pedido le tomó 2 minutos en promedio. Esa es su
línea base, y es la que va a usar hasta el final del proyecto.

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
bloque: Texto + tabla (las cuatro partes de un indicador) + actividad

Un **indicador** es la medida que te dice si avanzas. No basta con nombrarlo: se define con cuatro partes, que en el caso de Andrés
quedan así [@F-M6-02].

| Parte | Pregunta | Ejemplo de Andrés |
|---|---|---|
| Fórmula | ¿Cómo se calcula? | Avisos enviados el mismo día ÷ avisos totales × 100 |
| Fuente | ¿De dónde sale el dato? | Bandeja de enviados y planilla de despachos |
| Frecuencia | ¿Cada cuánto se mide? | Cada viernes |
| Línea base | ¿Cuánto vale hoy? | 45 % (9 de 20 en tres semanas) |

Los indicadores pueden mirar cosas distintas. Algunos miden el proceso, como cuánto tiempo toma la tarea; otros, el producto, como
cuántos avisos salen bien hechos; y otros, el resultado, como si bajan los reclamos. También se distinguen por lo que cuidan: la
eficiencia, que es tiempo y recursos, o la calidad, que es errores y claridad. En un flujo con IA puedes combinar medidas numéricas,
como el tiempo o la cantidad de tareas completadas, con escalas de calidad, como una rúbrica simple de 1 a 4 para la claridad de un
texto [@F-M6-05]. En la mayoría de los casos conviene usar varios indicadores a la vez.

Un error común es elegir algo que no se puede medir. Camila pensó primero en «sentirme más ordenada». Es una buena aspiración, pero
no tiene fórmula ni fuente: nadie podría decir cuánto vale hoy ni cuánto al final. Le sirve mucho más medir lo que su flujo cambia,
que son los minutos por documento y los errores de clasificación. Algo parecido pasa con lo que depende de muchos factores fuera de
tu proyecto, como las ventas del mes: puede ir como contexto, pero no como meta.

:::actividad Elige tus indicadores
Escoge dos o tres indicadores para tu desafío, al menos uno de tiempo y uno de calidad. Para cada uno, escribe la fórmula, la fuente,
la frecuencia y la línea base.
:::

### P06 · La meta: qué cambio esperas y cuándo
cubre: S2, A2, C1
fuentes: F-M6-03, F-M6-05
bloque: Texto + comparación antes y después + pregunta de verificación

La **meta** dice cuánto esperas que cambie un indicador y en qué plazo. Una forma clásica de revisarla es el criterio **SMART**, por
sus iniciales en inglés. Una meta SMART es específica, porque dice quién hace qué con un solo verbo de acción y evita verbos vagos
como «mejorar» o «entender». Es medible, porque dice cuánto cambio esperas desde un punto de referencia, que es tu línea base. Es
alcanzable con el tiempo y los recursos que tienes, realista para el tamaño del problema y tiene un plazo, que es cuándo vas a medir [@F-M6-03].
Algunas guías leen la R como «relevante» [@F-M6-05]; en este curso usamos «realista», porque pide lo mismo que el realismo al fijar metas.

Mira cómo cambian dos metas cuando pasan por ese filtro:

| Antes | Después |
|---|---|
| «Quiero ser más rápida con los documentos usando IA.» | «En tres semanas, bajaré el tiempo de registro de 4 a 2 minutos por documento, sin errores de clasificación en el registro final.» |
| «Mejorar los avisos de atraso.» | «En cuatro semanas, enviaré el mismo día el 90 % de los avisos de atraso (hoy, 45 %).» |

La versión de la derecha tiene número, unidad, línea base y plazo. Eso permite saber, sin discusión, si se cumplió. La de la
izquierda puede darse por cumplida o por fallida según el ánimo de quien la lea.

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
bloque: Texto + escenario (Andrés ajusta su meta) + actividad

Una meta tiene que ser **realista y retadora** a la vez [@F-M6-01]. Realista, porque se puede cumplir con las personas, el tiempo y las
herramientas que tienes [@F-M6-03]. Retadora, porque no se cumple sola, sin hacer nada distinto. Una meta demasiado fácil no demuestra nada, y
una imposible desanima y empuja a maquillar los resultados al final.

Para calibrarla, mira tres cosas. La primera es tu línea base: si hoy haces 45 %, saltar a 100 % en dos semanas es poco probable. La
segunda son tus pruebas: en el módulo 5 probaste un paso automatizado, y lo que pasó ahí es tu mejor referencia. La tercera es el
tiempo que de verdad tienes, con las semanas del módulo, el resto de las tareas de tu cargo y los límites del plan gratuito de tu
herramienta.

Andrés escribió primero «100 % de avisos el mismo día en dos semanas». Al revisar su prototipo del módulo 5 vio que el borrador salía
bien, pero que él no siempre alcanzaba a revisarlo antes de las cinco de la tarde. Cambió la meta a 90 % en cuatro semanas: sigue
siendo exigente, pero puede cumplirla.

El error contrario también ocurre. Fijar una meta que ya cumples, o casi, hace que el proyecto parezca exitoso sin haber mejorado
nada, y quien evalúa lo nota apenas compara la meta con tu línea base.

:::actividad Calibra tu meta
Escribe tu meta en formato SMART. Después revísala contra tu línea base, tus pruebas del módulo 5 y el tiempo que de verdad tienes, y
ajústala si alguna de las tres te hace dudar.
:::

### P08 · ¿Es viable usar IA en este desafío?
cubre: S3, C2
fuentes: F-M6-06, F-M6-07
bloque: Texto + lista de verificación (checklist)

Antes de implementar conviene tomar una decisión explícita: seguir o no seguir con la IA en este desafío. Esa decisión se apoya en lo
que sabes del contexto, de los beneficios que esperas y de los daños posibles [@F-M6-06]. Que la herramienta pueda hacer la tarea no basta: sin
datos para medir, sin permiso o con datos personales expuestos, el proyecto no pasa la prueba aunque la IA funcione [@F-M6-07].

Revisa tu desafío con estos criterios de **viabilidad**:

- [ ] Hay datos para medir: tus indicadores salen de una fuente que existe y que puedes revisar.
- [ ] La meta es alcanzable con tu herramienta, tu tiempo y tus recursos, según tus pruebas y no según expectativas.
- [ ] La herramienta es accesible: gratuita o disponible en tu trabajo, en el computador o en el celular.
- [ ] El riesgo está controlado: no ingresas datos personales ni información confidencial, y respetas lo que permite tu empresa.
- [ ] Tu jefatura está de acuerdo, porque el flujo toca un proceso de tu trabajo.
- [ ] La necesidad es real: usas IA porque la tarea lo pide, no solo porque se puede.

Si un criterio falla, no siempre hay que abandonar. A veces basta con cambiar el alcance: probar con copias sin datos sensibles, usar
códigos en vez de nombres o dejar fuera un paso riesgoso.

:::ejemplo La justificación de Camila
«Es viable: registrar documentos se repite mucho y sigue reglas claras. Pruebo con copias sin datos sensibles, y mi jefatura está de
acuerdo con que lo pruebe así. En el módulo 5 el asistente propuso bien el tipo y la fecha en casi todos los casos, y yo reviso cada
registro antes de guardarlo.»
:::

### P09 · El plan de medición
cubre: H1, C1, A1
fuentes: F-M6-02, F-M6-04
bloque: Texto + tabla descargable (plantilla del plan) + pregunta de verificación

El **plan de medición** reúne en una tabla lo que decidiste: qué indicador, cómo se calcula, de dónde sale el dato, cada cuánto se
mide, cuánto vale hoy y cuánto debería valer al final [@F-M6-02]. Es tu respuesta a la pregunta «¿cómo sabré que el cambio es una mejora?» [@F-M6-04]. Este
es el de Andrés:

| Indicador | Fórmula | Fuente | Frecuencia | Línea base | Meta (4 semanas) |
|---|---|---|---|---|---|
| Avisos el mismo día | Avisos del día ÷ atrasos del día × 100 | Enviados y planilla de despachos | Cada viernes | 45 % | 90 % |
| Tiempo por aviso | Minutos totales ÷ avisos | Registro propio | Cada aviso | 12 min | 5 min |
| Avisos con error | Avisos con dato equivocado ÷ avisos × 100 | Revisión propia y reclamos | Cada viernes | 10 % | 0 % |
| Claridad | Rúbrica de 1 a 4 aplicada por ventas | Rúbrica | Quincenal | 2,5 | 3,5 |

Fíjate en tres detalles. Cada indicador tiene una sola fuente que se puede revisar. La frecuencia es posible de cumplir: no es diaria
si no hay tiempo para eso. Y junto al tiempo hay medidas de calidad, para no ganar velocidad a costa de errores. Copia la tabla y
complétala con tus indicadores; si alguien de tu equipo te va a ayudar con los datos, agrega una columna «Quién mide».

Decide cómo vas a medir antes de implementar. Si cambias la fórmula a mitad de camino, la comparación con la línea base deja de
valer. Eso es la orientación a resultados llevada a la práctica: saber desde el principio cómo vas a reconocer una mejora.

:::comprueba
Camila anota en su plan: «Indicador: errores de clasificación. Meta: 0». ¿Qué le falta para que sea medible?
- a) Nada, ya tiene una meta
- **b) La fórmula, la fuente, la frecuencia y la línea base**
- c) El nombre de la herramienta de IA que usará
Retroalimentación: Sin fórmula ni fuente no se sabe cómo se calcula ni de dónde sale el dato, y sin línea base no hay contra qué
comparar. La herramienta va en el flujo, no en el indicador.
:::

### P10 · Tu Hito 6a y cómo se evalúa
cubre: H1, C1, C2, A1
fuentes: F-M6-01, F-M6-03
bloque: Texto + tabla de la rúbrica + lista de verificación

Ya tienes todas las piezas. El Hito 6a, diagnóstico, meta y plan de medición, es un documento breve, de una o dos páginas. Parte con
el diagnóstico de la tarea (P03) y la línea base, explicando cómo obtuviste los datos (P04) [@F-M6-01]. Sigue con la meta SMART [@F-M6-03] y sus
indicadores (P05 a P07), la justificación de viabilidad con los criterios de P08 y, al final, la tabla del plan de medición (P09).

Tu tutor lo revisa con la rúbrica general de hitos del curso y te responde en un plazo de 72 horas como máximo. Cada criterio se
califica como logrado, parcial o no logrado:

| Criterio | Peso | Qué mira en el Hito 6a |
|---|---|---|
| Pertinencia al problema real | 25 % | El diagnóstico describe una tarea real de tu cargo |
| Uso verificado de IA | 25 % | La viabilidad se apoya en pruebas que hiciste y documentaste |
| Calidad del entregable | 20 % | Las cinco partes están completas y los números cuadran |
| Ética, privacidad y licencias | 15 % | No expones datos personales ni información confidencial de tu empresa |
| Comunicación | 15 % | Se entiende sin explicaciones adicionales |

Los hitos 6a, 6b y 6c no ponderan en la nota: sirven para recibir retroalimentación y alimentan el pitch y el portafolio final del
Hito 6d. Aprovéchalos para corregir ahora lo que después costaría más.

:::actividad Revisa antes de entregar
- [ ] Mi meta tiene número, unidad, línea base y plazo.
- [ ] Cada indicador tiene fórmula, fuente y frecuencia.
- [ ] Expliqué cómo obtuve la línea base.
- [ ] Justifiqué la viabilidad con al menos tres criterios.
- [ ] El documento no trae datos personales ni información confidencial de mi empresa.
:::

### Ideas clave

1. El módulo 6 es un taller: integra los hitos 1 a 5 en un proyecto sobre una tarea de tu cargo, que se diagnostica, se implementa,
   se mide y se presenta.
2. Un diagnóstico describe cómo se hace la tarea hoy y se apoya en datos, no en impresiones.
3. La línea base es el valor de partida de un indicador; si no hay datos, se levantan en un primer periodo, antes de cambiar nada.
4. Un indicador se define con fórmula, fuente, frecuencia y línea base; conviene combinar uno de tiempo con uno de calidad.
5. Una meta SMART dice cuánto cambia un indicador y en qué plazo, y debe ser realista y retadora a la vez.
6. Usar IA es viable cuando hay datos para medir, la meta es alcanzable, la herramienta es accesible, el riesgo está controlado y tu
   jefatura está de acuerdo; si falla un criterio, a veces basta con cambiar el alcance.
7. El plan de medición se decide antes de implementar, para que la comparación final sea válida.

### Referencias bibliográficas

- Anthropic. (s. f.). *Define success criteria and build evaluations*. Claude Docs. https://platform.claude.com/docs/en/test-and-evaluate/develop-tests
- CDC. (2018). *Writing SMART objectives (Evaluation Brief n.º 3b)*. https://spice.unc.edu/wp-content/uploads/2023/11/CDC-SMART.pdf
- CIPPEC. (2019). *Guía n.º 5: cómo construir indicadores*. https://www.cippec.org/wp-content/uploads/2019/06/PP-ME-Guia-5.pdf
- CONEVAL. (2019). *Guía para el establecimiento y cálculo de líneas base y metas*. https://www.coneval.org.mx/InformesPublicaciones/Documents/Guia_lineas_base_metas.pdf
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate


## M6-AE2 · Implementar el flujo

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M6-04, F-M6-06
bloque: Texto + escenario (dónde están Camila y Andrés)

En el tema anterior fijaste tu punto de partida, tu meta y cómo vas a medir. Ahora toca hacer el cambio: poner en marcha el flujo con
IA en tu tarea, probarlo, corregirlo y dejar registro de lo que decides en el camino.

El aprendizaje esperado es este:
Implementar un flujo de trabajo con IA para la oportunidad priorizada, con supervisión humana y registro de decisiones.
Al final del tema deberías tener tu flujo funcionando, con al menos un punto de supervisión humana definido por escrito, y un registro
con la fecha y el motivo de cada decisión y cada ajuste que hiciste.

Implementar no es «encender» la IA y esperar. Es un ciclo: pruebas a pequeña escala, miras qué pasó, ajustas y vuelves a probar [@F-M6-04]. Cada
vuelta deja un aprendizaje, y ese aprendizaje se anota [@F-M6-06]. Tampoco hace falta un flujo grande. Uno de tres a cinco pasos, que funcione y
esté bien documentado, vale más que uno largo que nadie puede revisar.

:::ejemplo Dónde están Camila y Andrés
Camila ya tiene su meta: registrar cada documento en 2 minutos, sin errores en el registro final. En el módulo 5 automatizó un paso:
cada mañana, una acción programada de Gemini le lista los correos con documentos nuevos de su cuenta de práctica, donde solo llegan
copias sin datos sensibles. Andrés quiere enviar el mismo día el 90 % de los avisos de atraso. Su prototipo del módulo 5 arma el
borrador del aviso cuando marca un despacho como atrasado en la planilla.
:::

### P02 · Del prototipo al flujo completo
cubre: S1, C1
fuentes: F-H-61, F-H-94
bloque: Texto + diagrama de proceso (process block)

En el módulo 5 automatizaste un paso. Ahora dibujas el flujo completo de tu tarea, de la entrada a la salida, y marcas en cada paso
quién lo hace: la IA, la herramienta o tú. Así se ve el flujo de Andrés, que usa Make en el computador de la bodega:

1. Andrés marca un despacho como «atrasado» en la planilla (disparador).
2. Make lee la fila: número de pedido, empresa cliente y nueva fecha (herramienta).
3. Un módulo de IA redacta el aviso con la plantilla de su biblioteca y lo deja en la columna «Borrador» (IA).
4. Andrés compara pedido y fecha con la planilla, corrige y envía el correo (revisión humana).
5. Anota la hora de envío, que alimenta su indicador (registro).

El de Camila es más corto y lo hace desde el celular, con Gemini. La acción programada le lista cada mañana los correos con
documentos. Ella sube cada documento a un chat con su plantilla «Registrar documento», compara con el documento cada campo que
propone el asistente y, al final, pega la fila en su planilla y nombra el archivo. Son cuatro pasos, y uno de ellos es su revisión.

Antes de armar el tuyo, revisa los límites de tu herramienta. En Make, cada acción gasta créditos del plan gratuito, las funciones de
IA pueden gastar más y, si los créditos se acaban, el escenario se detiene [@F-H-94]. En Gemini, las acciones programadas piden una cuenta
personal, la actividad guardada y la aplicación conectada, y se están habilitando de a poco, así que puede que todavía no aparezcan
en tu cuenta [@F-H-61].

:::actividad Dibuja tu flujo
Escribe tu flujo en tres a cinco pasos numerados y marca cada uno como disparador, herramienta, IA, revisión humana o registro.
:::

### P03 · Planifica en ciclos pequeños
cubre: S1, A1, A2
fuentes: F-M6-04, F-M6-07
bloque: Proceso (process block) en etapas + pregunta de verificación

Los cambios se prueban primero a pequeña escala, se ajustan con ciclos repetidos y se prueban en condiciones distintas; solo después
se adoptan [@F-M6-04]. Un ciclo muy usado tiene cuatro momentos y se conoce como **PDSA**, por sus iniciales en inglés. Planificas qué vas a
probar, con cuántos casos y qué esperas que pase. Haces la prueba y anotas lo que ocurre. Estudias la diferencia entre lo que pasó y
lo que esperabas. Y actúas: adoptas, ajustas o descartas el cambio, y planificas el ciclo siguiente.

Con ese ciclo, tu implementación sigue seis etapas, en este orden:

1. Mapear el flujo completo (P02).
2. Definir los controles: quién revisa, cuándo y qué riesgos cuidar (P04 y P05).
3. Documentar el flujo en su ficha (P06).
4. Probar en pequeño, con pocos casos y algunos difíciles.
5. Estudiar y ajustar, registrando cada decisión (P07 a P09).
6. Usar el flujo en la tarea real durante el periodo de medición.

Reserva tiempo para las pruebas [@F-M6-07], porque es la parte que más se subestima. Andrés planificó su primer ciclo con cinco despachos
atrasados de la semana pasada, ya resueltos, y esperaba que los cinco borradores tuvieran pedido y fecha correctos. Dos salieron con
la fecha en formato inglés. Ajustó la plantilla y repitió con otros cinco. Decidir tú qué probar y cuándo ajustar, sin esperar que
todo salga perfecto a la primera, es autonomía. Repetir el ciclo las veces que haga falta es constancia.

:::comprueba
Andrés quiere usar su flujo esta semana con todos los atrasos reales. ¿Qué etapa le falta si todavía no lo ha corrido con casos ya
resueltos?
- a) Mapear el flujo
- **b) Probar en pequeño**
- c) Usar en la tarea real
Retroalimentación: Antes de usarlo con clientes, el flujo se prueba con pocos casos, incluidos casos difíciles. Saltarse esa etapa
lleva los errores directo a la tarea real.
:::

### P04 · Supervisión humana: quién revisa, cuándo y con qué
cubre: C1, S2
fuentes: F-M5-12, F-M5-14
bloque: Texto + tabla + pregunta de verificación

La supervisión humana no se improvisa: se define y se documenta como parte del flujo. Para cada punto de control respondes cinco
preguntas, que en el flujo de Andrés quedan así:

| Pregunta | Ejemplo de Andrés |
|---|---|
| ¿Quién revisa? | Andrés |
| ¿Cuándo? | Antes de enviar cada aviso |
| ¿Qué revisa? | Pedido, empresa, fecha nueva y tono |
| ¿Con qué criterio? | Coincide con la planilla; no promete nada que no esté confirmado |
| ¿Qué hace si falla? | Corrige a mano y anota el error en la bitácora |

En el módulo 5 viste tres niveles de supervisión. Con participación humana, una persona interviene en cada decisión del flujo, como
Andrés con cada aviso. Con control humano, la persona interviene en el diseño y sigue el funcionamiento. Con mando humano, decide si
usar el sistema, cuándo y cómo [@F-M5-12]. Tu proyecto debe dejar claro qué nivel aplicas en cada paso y por qué. Dejarlo por escrito, además,
te ayuda a encontrar después por qué hubo un error y a prevenir el siguiente [@F-M5-12].

Un error frecuente es pensar «ya funcionó en el módulo 5, no necesito revisar». Confiar de más en lo automatizado tiene nombre:
**sesgo de automatización** [@F-M5-14]. Mientras más veces funciona un flujo, más fácil es dejar de mirarlo, y justo ahí se cuela el error. Por
eso, mientras dure el proyecto, la revisión se mantiene en cada caso.

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
fuentes: F-M6-06, F-M6-07
bloque: Texto + tabla de riesgos + pregunta de verificación

Gestionar riesgos es anticipar qué puede fallar y cómo lo vas a controlar. Y no termina al implementar: después hay que seguir
mirando, poder anular una decisión, responder si algo sale mal y recuperarse [@F-M6-06]. Estos son los riesgos más comunes en un flujo como los
del curso:

| Riesgo | Control |
|---|---|
| La IA inventa un dato (fecha, monto) | Punto de control que compara con la fuente |
| Entran datos personales o información confidencial de la empresa | Copias sin datos sensibles, códigos en vez de nombres y lo que permita tu empresa |
| Se agota el límite del plan gratuito o la herramienta falla | Plan de contingencia: la plantilla manual de tu biblioteca |
| Cambias la plantilla y algo deja de funcionar | Probar de nuevo con los mismos casos antes de usarla |
| Dejas de revisar porque «siempre sale bien» | Revisión fija en cada caso y registro de errores |

La cuarta fila es la **gestión de cambios**: cada modificación al flujo o al prompt se vuelve a probar antes de usarla. La tercera es
el **plan de contingencia**, que dice con qué reemplazas el flujo si deja de funcionar y cómo te vas a enterar [@F-M6-07]. Como ese plan tiene
que servir justo cuando la herramienta falla, no puede depender de la misma herramienta.

Arma tu propia tabla con al menos cuatro riesgos de tu flujo y su control. Si uno queda sin control, decide si lo aceptas, lo reduces
o cambias el paso, y anota la decisión. Revisar cada fila con calma es parte del trabajo prolijo que pide este tema.

:::comprueba
En el flujo de Camila, ¿qué riesgo queda sin control?
- a) Que la IA lea mal una fecha: Camila revisa cada campo
- **b) Que se acabe el límite de uso gratuito de Gemini y no pueda registrar ese día**
- c) Que un documento traiga datos sensibles: solo usa copias que ya revisó
Retroalimentación: La a y la c tienen un control definido. Para la b, Camila necesita un plan de contingencia, como registrar a mano
en su planilla.
:::

### P06 · Documenta el flujo
cubre: S3, A3
fuentes: F-M6-07
bloque: Texto + ficha descargable (plantilla)

Un flujo que solo entiendes tú se pierde el día que no estás o que lo olvidas. Documentarlo es escribir una **ficha** que otra persona
pueda leer para entender qué hace, qué necesita y qué produce [@F-M6-07]. La ficha tiene ocho campos:

- Nombre, con una convención clara, como «Avisos atraso · Bodega · v2».
- Propósito: para qué existe, en una línea.
- Entradas: qué datos recibe y de dónde.
- Salidas: qué entrega y dónde queda.
- Dependencias: herramientas, cuentas, planillas y plantillas sin las cuales no funciona.
- Supervisión: quién revisa, cuándo y con qué criterio (P04).
- Contingencia: qué hacer si falla (P05).
- Responsable y fecha: quién lo mantiene y cuándo se actualizó.

Usa una **convención de nombres** y respétala en todo: el flujo, las plantillas, las planillas y los archivos [@F-M6-07]. Así cualquiera sabe qué
versión está mirando. Comparte la ficha con quien corresponda, por ejemplo tu jefatura o tu tutor. Un error común es dejarla para el
final y escribirla de memoria: se olvidan dependencias y ajustes. Escríbela antes de la primera prueba y actualízala con cada cambio.
Ese trabajo prolijo es lo que permite que tu flujo se revise, se mejore o lo use otra persona de tu equipo.

:::ejemplo La ficha de Camila
Camila llamó a su flujo «Registro documentos · Práctica · v3». Su propósito es registrar los documentos de la oficina en una planilla
para encontrarlos rápido. Entran copias sin datos sensibles de facturas, órdenes de compra y contratos, en PDF o foto, y sale una
fila por documento en la planilla «Registro 2026», con el archivo nombrado «AAAA-MM-DD_tipo_emisor». Depende de Gemini, de su cuenta
de práctica, de esa planilla y de su plantilla «Registrar documento». Ella revisa cada campo antes de guardar y, si el flujo falla,
registra a mano en la misma planilla.
:::

### P07 · Tu bitácora de decisiones
cubre: S3, C2, A3
fuentes: F-M6-08, F-H-15
bloque: Texto + entrada de ejemplo + actividad

Los proyectos cambian, y el motivo de cada decisión se olvida rápido. En equipos de tecnología se usan registros de decisiones para
guardar ese razonamiento y poder juzgar después si una decisión se puede cambiar [@F-M6-08]. En este curso adaptamos esa idea a una **bitácora
de decisiones**, que se suma a la bitácora que ya llevas.

Cada entrada lleva una fecha y un título, por ejemplo «12-11 · Dónde registrar los documentos». Después viene el contexto, que son
los hechos que te obligaron a decidir; la decisión, que es lo que elegiste; las consecuencias, lo bueno y lo malo que trae, y el
estado, vigente o reemplazada. Hay una regla que importa más que las otras: una decisión que ya aplicaste no se borra ni se
reescribe [@F-M6-08]. Si cambias de idea, agregas una entrada nueva y marcas la anterior como reemplazada. Así queda la historia completa, y
puedes responder la pregunta que te hará tu tutor o tu jefatura: «¿por qué lo hiciste así?».

Una entrada de Camila muestra cómo se ve. El 12-11 anotó «Dónde uso las aplicaciones conectadas». El contexto: la acción programada
le pide dejar encendida la actividad guardada, y con ella encendida, revisores humanos pueden leer las conversaciones [@F-H-15]. La decisión:
usar la acción programada solo en su cuenta de práctica, con copias sin datos sensibles. Las consecuencias: puede automatizar la
lista diaria sin exponer datos de la constructora, pero para trabajar con los documentos reales tendrá que cambiar el flujo y
acordarlo con su jefatura. Estado: vigente.

:::actividad Tus primeras entradas
Escribe en tu bitácora tres decisiones que ya tomaste: la herramienta que elegiste, el punto de supervisión y un riesgo que decidiste
controlar. Usa los cinco campos en cada una.
:::

### P08 · Versiones de tus prompts
cubre: S3, C2, A3
fuentes: F-M6-10, F-M6-09
bloque: Texto + tabla de versiones + actividad

Tus plantillas también cambian durante la implementación. Una práctica recomendada para quienes construyen con modelos de lenguaje
es **versionar los prompts**: guardar cada versión para poder revisar sus cambios, anotar el modelo o la herramienta con que se probó
y probar cada versión con los mismos casos [@F-M6-10]. Así quedó la tabla de versiones de la plantilla «Registrar documento» de Camila:

| Versión | Fecha | Herramienta | Qué cambió | Resultado con los 10 casos de prueba |
|---|---|---|---|---|
| v1 | 05-11 | Gemini | Plantilla del módulo 5 | 7 de 10 sin errores |
| v2 | 08-11 | Gemini | Pide la fecha en formato DD-MM-AAAA | 9 de 10 |
| v3 | 12-11 | Gemini | Agrega «si un campo no aparece, escribe NO APARECE» | 10 de 10 |

Si llevas tus plantillas en Documentos o en Hojas de cálculo de Google, el **historial de versiones** te ayuda. Muestra quién cambió
qué, permite ponerle nombre a una versión, como «Plantilla v2 · 08-11», y volver a una anterior [@F-M6-09]. Hay un máximo de versiones con
nombre: 40 en un documento y 15 en una hoja de cálculo. En Hojas de cálculo, restaurar una versión borra el historial de cambios de
cada celda, así que conviene hacer una copia antes [@F-M6-09].

Un error común es cambiar la plantilla sobre la marcha, sin guardar la que funcionaba. Si la nueva sale peor, no puedes volver atrás
ni explicar qué cambió.

:::actividad Versiona tu plantilla principal
Copia tu plantilla actual como v1 en una tabla de versiones. Cada vez que la cambies, guarda la anterior, agrega una fila y prueba la
versión nueva con los mismos casos.
:::

### P09 · Prueba, ajusta y vuelve a probar
cubre: H1, A1, A2
fuentes: F-M6-07, F-M5-11
bloque: Escenario (el atraso sin fecha de Andrés) + actividad

Ahora corres tu flujo con casos de prueba. Antes de usarlo en serio, prueba la mayor cantidad de escenarios posibles: casos normales,
casos con datos incompletos y casos raros [@F-M6-07]. Para Camila, eso significa probar una factura clara, una foto borrosa, un contrato sin
fecha y un documento que no es de ningún tipo conocido. Para Andrés, un atraso de un día, uno sin fecha nueva confirmada y uno de un
cliente nuevo.

Cuando algo falla, sigue siempre el mismo camino:

1. Ubica el paso que falló. Si tu herramienta guarda un historial de ejecuciones, úsalo: en Zapier, por ejemplo, muestra qué paso falló y por qué, y permite volver a ejecutarlo una vez corregido [@F-M5-11].
2. Corrige la causa, no solo el resultado: la plantilla, el dato de entrada o el punto de control.
3. Registra el ajuste en la bitácora y, si cambió la plantilla, crea una versión nueva.
4. Vuelve a probar con los mismos casos.

Así lo hizo Andrés. En una prueba, el despacho no tenía fecha nueva confirmada y el borrador inventó «llegará el lunes». Lo detectó
en su revisión, ajustó la plantilla con la instrucción «si no hay fecha nueva, escribe que avisarás apenas esté confirmada», lo anotó
en la bitácora, creó la v3 y repitió los diez casos. Que algo falle en la prueba es buena noticia, porque falló antes de llegar a un
cliente. Elegir tú los casos difíciles y decidir cuándo un ajuste basta es autonomía; volver a probar después de cada ajuste es
constancia.

:::actividad Tu ronda de pruebas
Arma diez casos de prueba sin datos personales, al menos tres difíciles. Córrelos, anota los resultados y haz al menos un ajuste
documentado en tu bitácora.
:::

### P10 · Tu Hito 6b y cómo se evalúa
cubre: H1, C1, C2, A3
fuentes: F-M6-07, F-M6-08
bloque: Texto + tabla de la rúbrica + lista de verificación

El Hito 6b, implementación del flujo, muestra que tu flujo funciona, que tiene supervisión humana y que quedó documentado. Lo
entregas en un documento o una carpeta compartida con seis piezas: el flujo en pasos numerados, con lo que hace la IA y lo que haces
tú (P02); la ficha, con supervisión y contingencia [@F-M6-07] (P04 a P06); la tabla de riesgos con sus controles (P05); la bitácora de
decisiones con al menos tres entradas [@F-M6-08] (P07); la tabla de versiones de tu plantilla principal (P08), y la evidencia de las pruebas,
con resultados y capturas sin datos personales ni información de tu empresa (P09).

Tu tutor lo revisa con la rúbrica general de hitos y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el Hito 6b |
|---|---|---|
| Pertinencia al problema real | 25 % | El flujo ataca el desafío y la meta del Hito 6a |
| Uso verificado de IA | 25 % | Prompts documentados por versión y resultados revisados en cada prueba |
| Calidad del entregable | 20 % | Flujo, ficha y bitácora completos y coherentes entre sí |
| Ética, privacidad y licencias | 15 % | Sin datos personales expuestos; supervisión humana clara |
| Comunicación | 15 % | Otra persona entiende el flujo leyendo la ficha |

Este hito es formativo: no pondera en la nota, pero lo que tu tutor te comente aquí mejora tu entrega final. Con el flujo ya en uso,
empiezas a juntar los datos que vas a comparar con tu línea base en el tema siguiente.

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

### Referencias bibliográficas

- Google. (s. f.-a). *Acciones programadas en las aplicaciones de Gemini*. https://support.google.com/gemini/answer/16316416?hl=es&co=GENIE.Platform%3DAndroid
- Google. (s. f.-b). *Centro de privacidad de las aplicaciones de Gemini*. https://support.google.com/gemini/answer/13594961?hl=es
- Google. (s. f.-c). *Cómo ver los cambios de un archivo*. Ayuda de Editores de Documentos. https://support.google.com/docs/answer/190843?hl=es-419
- Government Digital Service. (2026, 5 de marzo). *The GDS Way: Architecture decisions*. https://gds-way.digital.cabinet-office.gov.uk/standards/architecture-decisions.html
- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- Make. (s. f.). *Pricing*. https://www.make.com/pricing
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- OpenAI. (s. f.). *Prompt engineering*. OpenAI API Docs. https://developers.openai.com/api/docs/guides/prompt-engineering
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
- Zapier. (2026, 15 de octubre). *How to troubleshoot errors in Zap workflows*. Zapier Help Center. https://help.zapier.com/hc/en-us/articles/8496037690637


## M6-AE3 · Resultados y aprendizajes

### P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-M6-01, F-M6-15
bloque: Texto + escenario (dos cierres distintos)

Tu flujo ya está en uso y llevas semanas juntando datos. Llegó el momento de responder la pregunta que te hiciste al principio: ¿el
cambio fue una mejora? Después vas a contarlo bien a quien tiene que saberlo.

El aprendizaje esperado es este:
Evaluar los resultados del proyecto y comunicarlos mediante un pitch y un portafolio, proponiendo mejoras.
Al terminar deberías poder comparar tus resultados con la línea base que fijaste en el Hito 6a [@F-M6-01], y comunicar resultados y límites con
claridad en un pitch de 3 minutos.

Este tema cierra dos hitos. En el Hito 6c mides tus resultados, los interpretas y propones mejoras. En el Hito 6d presentas tu
proyecto en tres minutos y reúnes tus mejores evidencias en un portafolio, que es el insumo del Demo Day, la presentación de cierre
del curso. Un **pitch** es una presentación breve que busca captar la atención en poco tiempo y comunicar una propuesta de forma
directa [@F-M6-15]. El tuyo no vende una empresa: muestra un problema real de tu trabajo, lo que hiciste con IA y cuánto cambió, con sus límites.
Un proyecto que no llegó a su meta también se puede presentar bien. Lo que no se puede es presentar un resultado que no mediste.

:::ejemplo Dos cierres distintos
Andrés presentará su proyecto a su jefatura y en el Demo Day: quiere que toda la bodega siga usando el flujo. Camila también se lo
presentará a su jefatura, la gerenta de administración. Quiere su aprobación para usar el flujo con los documentos reales de la
oficina, y no solo con copias, y además sumará el proyecto a su portafolio de desarrollo profesional para su evaluación de desempeño.
:::

### P02 · Mide contra tu línea base
cubre: S1, C1, H1
fuentes: F-M6-01, F-M6-04
bloque: Texto + tabla de resultados + pregunta de verificación

Medir resultados es comparar el **valor final** de cada indicador con su línea base y con su meta [@F-M6-01]. Para que la comparación valga, usa
la misma fórmula, la misma fuente y la misma frecuencia que definiste en tu plan de medición; si algo cambió, dilo. Estos son los
resultados de Andrés después de cuatro semanas:

| Indicador | Línea base | Meta | Resultado | Diferencia | ¿Meta? |
|---|---|---|---|---|---|
| Avisos el mismo día | 45 % | 90 % | 89 % (25 de 28) | +44 puntos | Casi |
| Tiempo por aviso | 12 min | 5 min | 5 min | −7 min | Sí |
| Avisos enviados con error | 10 % | 0 % | 0 % | −10 puntos | Sí |
| Claridad (rúbrica 1 a 4) | 2,5 | 3,5 | 3,4 | +0,9 | Casi |

Junto a los números, suma lo cualitativo: lo que observaste, lo que dijeron otras personas, los casos raros [@F-M6-04]. Andrés anotó que su
revisión detectó cuatro borradores con fecha equivocada antes de enviarlos. Ese dato no está en la tabla, pero muestra que la
supervisión funcionó.

Completa tu propia tabla con tus indicadores y agrega debajo tres observaciones cualitativas de tu bitácora. Ojo con la columna de la
meta: «casi» no es «sí», y conviene escribirlo así.

:::comprueba
Camila tenía una línea base de 4 minutos por documento y una meta de 2. Su resultado es 2,5 minutos. ¿Cómo lo reporta?
- a) Meta cumplida, porque bajó el tiempo
- **b) Bajó 1,5 minutos frente a la línea base; no llegó a la meta de 2**
- c) Proyecto fallido, porque no llegó a 2 minutos
Retroalimentación: Se informa la diferencia con la línea base y si se alcanzó la meta, con número y unidad. Mejorar sin llegar a la
meta no es lo mismo que cumplirla, pero tampoco es un fracaso.
:::

### P03 · Lo que el antes y después no te dice
cubre: S1, A2, C1
fuentes: F-M6-11, F-M6-04
bloque: Texto + escenario (Camila separa la práctica de la IA)

Comparar antes y después muestra si algo cambió en el tiempo [@F-M6-04], pero descansa en un supuesto fuerte: que nada más cambió entre las dos
mediciones [@F-M6-11]. Casi nunca es así. Antes de atribuirle la mejora a tu flujo, pregúntate si hubo más o menos trabajo en el periodo final,
si cambió algo más en la tarea, si te volviste más rápida o rápido solo por practicar y si los casos del final eran más fáciles que
los del inicio.

Un error común es pensar «mejoró, entonces fue la IA». Andrés notó que en dos de sus cuatro semanas hubo menos atrasos, porque ya
funcionaba la reserva de cajas, y con menos avisos tenía más tiempo para cada uno. Si no lo menciona, su resultado se ve mejor de lo
que es.

:::ejemplo Camila separa la práctica de la IA
Camila sospechó que parte de su mejora venía de haber repetido la tarea muchas veces. En la última semana registró 10 documentos más
sin IA: le tomaron 3,2 minutos en promedio, menos que los 4 del inicio. Concluye que su flujo ayuda, pero que una parte de la mejora
se debe a la práctica, y lo dice así en su informe.
:::

Lo que hizo Camila tiene una lógica conocida: comparar con un **grupo de comparación**, es decir, con casos parecidos que no pasaron
por el cambio, fortalece la conclusión [@F-M6-11]. No siempre se puede, pero aunque sea un grupo pequeño ayuda. Reconocer estos factores no le
quita valor a tu proyecto; le da credibilidad.

### P04 · Propón mejoras: cierra el ciclo
cubre: H1, A1
fuentes: F-M6-04, F-M6-16
bloque: Texto + tabla de decisión + actividad

En el ciclo PDSA, después de estudiar viene actuar [@F-M6-04]. Con tus resultados en la mano decides, para cada parte del flujo, si la adoptas,
la ajustas o la descartas:

| Decisión | Cuándo | Ejemplo |
|---|---|---|
| Adoptar | Funcionó y quieres seguir así | Andrés mantiene la revisión de fecha y pedido |
| Ajustar | Funcionó a medias | Camila prueba otra plantilla para las fotos borrosas |
| Descartar | No funcionó o el riesgo no compensa | Andrés ya no deja que la IA proponga fechas: el riesgo de que las invente no compensa |

Una buena propuesta de mejora es concreta: dice qué vas a cambiar, por qué y cómo lo vas a medir en el próximo ciclo. «Mejorar el
prompt» no sirve. «Agregar un ejemplo de contrato a la plantilla y probarla con los mismos 10 casos», sí.

La **autocrítica constructiva** es mirar tu proyecto con honestidad para mejorarlo, no para castigarte, y se ordena con dos preguntas:
qué aprendiste y qué harías distinto [@F-M6-16]. Andrés las respondió así: «Aprendí que el flujo ahorra tiempo, pero que la claridad depende de
mi revisión. Haría distinto la rúbrica de claridad: la definí tarde y ventas la aplicó solo dos veces. En el próximo ciclo la
aplicaré cada semana.»

:::actividad Arma tu Hito 6c
En un documento, reúne tu tabla de resultados con sus observaciones (P02), los otros factores que pudieron influir (P03), dos o tres
propuestas de mejora con qué, por qué y cómo medirlas, y tus respuestas a «¿qué aprendí?» y «¿qué haría distinto?».
:::

### P05 · Cuenta tus resultados con honestidad
cubre: S2, A2
fuentes: F-M6-12, F-M6-13
bloque: Texto + comparación antes y después + pregunta de verificación

Contar resultados con datos les da credibilidad y ayuda a que la audiencia recuerde el mensaje [@F-M6-13]. Conviene planificar el relato antes de
hacer gráficos o láminas: qué tiene que aprender tu audiencia, quién es y qué le importa, de dónde vienen tus datos y por qué
importan, y cuáles son las una o dos ideas que debería poder repetir después [@F-M6-13]. Si le presentas a tu jefatura, piensa también en la
decisión que le estás pidiendo tomar.

Al comunicar un cambio, di su dirección y su tamaño, en contexto, y di qué se puede concluir y qué no [@F-M6-12]. Los límites van en un lugar
visible, no escondidos al final ni en un anexo: si la audiencia descubre después un límite que no mencionaste, deja de creerte en todo
lo demás. Para la incertidumbre, usa palabras simples, como «estimación», «en estas cuatro semanas» o «con 28 casos» [@F-M6-12].

| Antes | Después |
|---|---|
| «La IA revolucionó los avisos de la bodega.» | «En cuatro semanas, los avisos enviados el mismo día subieron de 45 % a 89 %. Parte de la mejora puede deberse a que hubo menos atrasos.» |
| «Ahora registro documentos el doble de rápido.» | «En tres semanas, con copias de documentos de la oficina, bajé de 4 a 2,5 minutos por documento. Una parte se debe a la práctica: sin IA, al final, tardaba 3,2.» |

La versión de la derecha es menos espectacular, pero se puede defender ante cualquier pregunta.

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
bloque: Texto + tabla + ordenar o clasificar (sorting activity)

Un pitch se arma con tres dimensiones: el contenido, que es lo que dices; el estilo, que es cómo lo dices, y el soporte visual [@F-M6-15]. Para el
contenido, esta estructura de tres minutos funciona bien en un proyecto de mejora:

| Parte | Qué cuentas | Tiempo sugerido |
|---|---|---|
| 1. Apertura | Una historia breve, un dato o una pregunta que capte la atención | 15 s |
| 2. Problema | La tarea y su situación inicial, con tu línea base | 30 s |
| 3. Solución | Tu flujo con IA y dónde está la supervisión humana | 40 s |
| 4. Evidencia | Cuánto cambió frente a la línea base | 40 s |
| 5. Límites y mejoras | Qué no puedes concluir y qué ajustarás | 30 s |
| 6. Llamado a la acción | Qué pides o propones a tu audiencia | 25 s |

Los tiempos son una sugerencia del curso, y la parte 5 también: el pitch de este curso pide comunicar los límites, no solo los
logros. El llamado a la acción va al final porque lo que pides solo tiene sentido cuando tu audiencia ya entendió el problema, la
solución y cuánto cambió.

Explica todo en el lenguaje más simple posible, sin siglas ni jerga técnica [@F-M6-14]. Una prueba útil es escribir tu pitch en dos frases,
mandárselo a alguien y pedirle que te lo explique de vuelta [@F-M6-14]. Si no puede, falta claridad.

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

### P07 · Escribe y ensaya tu pitch
cubre: S2, H1, C2
fuentes: F-H-12, F-H-47
bloque: Texto + prompt de ejemplo + actividad

Con la estructura lista, escribe tu guion. Como referencia del curso, tres minutos hablados son unas 350 a 400 palabras. Puedes
pedirle a Gemini que te ayude a ajustarlo con un prompt como este:

> «Actúa como editor de presentaciones. Este es el guion de mi pitch de 3 minutos sobre un proyecto de mejora con IA. Acórtalo a 380
> palabras, usa frases cortas y lenguaje simple, sin siglas. No cambies ni agregues cifras. Mantén la parte de límites.» [pega tu guion]

Después revisa que cada número del guion coincida con tu tabla de resultados, porque un asistente puede redondear o «mejorar» una
cifra sin avisar. Para el soporte visual, reutiliza lo que ya tienes: tus seis láminas del Hito 2, actualizadas con los resultados, y
tu pieza multimedia del Hito 4. Si necesitas rehacer láminas, Gamma y la generación de diapositivas de Gemini tienen opciones
gratuitas, con límites [@F-H-47; @F-H-12].

La misma base sirve para distintas audiencias si cambias el énfasis. Camila prepara una versión corta para una reunión con su
jefatura, centrada en la decisión que necesita: «Diseñé un registro de documentos con IA. Probándolo con copias sin datos sensibles,
bajé de 4 a 2,5 minutos por documento, y reviso cada registro antes de guardarlo. Propongo usarlo con los documentos reales durante un
mes y volver a medir.» Cierra ofreciendo mostrarle la ficha del flujo.

:::actividad Ensaya
1. Lee tu guion en voz alta con un cronómetro. Si pasas de 3 minutos, corta.
2. Grábate con el celular y escúchate una vez.
3. Haz la prueba de las dos frases con alguien de confianza.
4. Ajusta lo que no se entendió y ensaya de nuevo.
:::

### P08 · Tu portafolio: una selección con intención
cubre: S3, H1, A1
fuentes: F-M6-16, F-H-76
bloque: Texto + lista de verificación + plantilla descargable

Un **portafolio profesional** es una colección intencionada de evidencias de tus logros, tu esfuerzo y tu crecimiento [@F-M6-16]. Es una
selección de tus mejores trabajos, no un archivo de todo. Conviene distinguir tu carpeta del proyecto, donde guardas todo, del
portafolio que muestras, adaptado a quien lo va a ver: tu jefatura, la conversación de tu evaluación de desempeño o tu propio plan de
desarrollo profesional.

Una estructura posible parte con una presentación de tres líneas sobre quién eres, tu cargo y hacia dónde quieres crecer. Sigue con
el proyecto en una página (desafío, línea base, flujo, resultados y límites), luego con tres a cinco piezas elegidas de tus hitos,
como dos plantillas de tu biblioteca, la presentación, la pieza multimedia, la ficha del flujo o la bitácora de decisiones, y termina
con tu pitch, en guion o grabado. Cada pieza lleva una nota breve que responde por qué la incluyes, qué habilidad muestra, qué
aprendiste y qué harías distinto [@F-M6-16]. Esas notas son las que hacen que el portafolio hable de ti.

Antes de mostrarlo, revísalo:

- [ ] No trae datos personales de nadie ni información confidencial de tu empresa.
- [ ] Cumple las licencias y atribuciones de cada herramienta: si publicas audio hecho con el plan gratuito de ElevenLabs, debes poner «elevenlabs.io» en el título [@F-H-76].
- [ ] Incluye la ficha de uso ético de tu pieza multimedia.
- [ ] Indica dónde usaste IA y qué revisaste tú.

Un error común es meter todo: cada borrador, cada prueba y cada versión. Eso no muestra más; obliga a quien lo ve a buscar lo
importante. Todo eso va en tu carpeta del proyecto.

:::ejemplo Dos portafolios distintos
Camila arma el suyo para su desarrollo profesional y su evaluación de desempeño: pone primero el registro de documentos y la ficha del
flujo, porque muestran una mejora concreta en su cargo. Andrés arma uno para su jefatura: pone primero los resultados y el plan para
extender el flujo a toda la bodega.
:::

### P09 · Tus hitos 6c y 6d, y el Demo Day
cubre: H1, C1, C2, A2
fuentes: F-M6-12, F-M6-15
bloque: Texto + tabla de la rúbrica + lista de verificación

Llegaste al cierre y entregas dos hitos. El Hito 6c, medición de resultados y ajustes, es el documento que armaste en P04, con tus
resultados frente a la línea base, los otros factores, las propuestas de mejora y tu autocrítica. El Hito 6d, pitch y portafolio
final, reúne el pitch de tres minutos [@F-M6-15] (guion y grabación, o presentación en vivo, según indique tu tutor) y el portafolio, y es el
insumo del Demo Day.

Tu tutor revisa cada uno con la rúbrica general de hitos y te responde en un plazo de 72 horas como máximo:

| Criterio | Peso | Qué mira en el cierre |
|---|---|---|
| Pertinencia al problema real | 25 % | Los resultados responden al desafío y a la meta del Hito 6a |
| Uso verificado de IA | 25 % | Las cifras salen de tu medición y el uso de IA está documentado |
| Calidad del entregable | 20 % | Pitch dentro de 3 minutos; portafolio completo y ordenado |
| Ética, privacidad y licencias | 15 % | Sin datos expuestos; licencias y atribuciones al día |
| Comunicación | 15 % | Resultados y límites claros para tu audiencia |

El Hito 6c es formativo y no pondera. El Hito 6d es sumativo: según el sistema de evaluación del curso, vale 15 % de la nota final. En
el Demo Day no gana el proyecto con el número más grande. Destaca el que muestra con claridad qué cambió, cómo lo sabe y qué aprendió [@F-M6-12].

:::actividad Revisión final
- [ ] Cada resultado se compara con su línea base, con número, unidad y periodo.
- [ ] Menciono al menos un factor externo que pudo influir.
- [ ] Mi pitch dice qué no puedo concluir, no solo lo que logré.
- [ ] Mi pitch dura 3 minutos o menos.
- [ ] Mi portafolio es una selección, con una nota de reflexión por pieza.
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
7. Un portafolio es una selección intencionada de evidencias, adaptada a quien lo verá, como tu jefatura o tu evaluación de
   desempeño, con una reflexión sobre cada pieza.

### Referencias bibliográficas

- CATIE. (s. f.). *El secreto de un pitch infalible*. https://agromira.catie.ac.cr/wp-content/uploads/2025/05/El-secreto-de-un-pitch-infalible-Taller-presencial.pdf
- CONEVAL. (2019). *Guía para el establecimiento y cálculo de líneas base y metas*. https://www.coneval.org.mx/InformesPublicaciones/Documents/Guia_lineas_base_metas.pdf
- ElevenLabs. (s. f.). *Can I publish the content I generate on the platform?* https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform
- Gamma. (s. f.). *Planes y precios*. https://gamma.app/es/pricing
- Google. (s. f.). *Límites de las aplicaciones de Gemini y cambios a planes superiores*. https://support.google.com/gemini/answer/16275805?hl=es
- Government Analysis Function. (2018, 17 de diciembre). *Communicating quality, uncertainty and change*. https://analysisfunction.civilservice.gov.uk/policy-store/communicating-quality-uncertainty-and-change/
- GSA. (s. f.). *Data story*. Data & Analytics Center of Excellence. https://coe.gsa.gov/coe/data-story/
- Institute for Healthcare Improvement. (s. f.). *Model for improvement*. https://www.ihi.org/library/model-for-improvement
- Seibel, M. (2016, 19 de julio). *How to pitch your company*. Y Combinator. https://www.ycombinator.com/blog/how-to-pitch-your-company/
- TASO. (s. f.). *Evaluation methods*. https://cdn.taso.org.uk/wp-content/uploads/TASO-Evaluation-Methods.pdf
- Unisa. (2023, 7 de agosto). *Career portfolio*. Directorate of Counselling and Career Development. https://www.unisa.ac.za/sites/corporate/default/Apply-for-admission/Undergraduate-qualifications/Counselling-and-Career-Development/Prepare-for-job-opportunities/Career-portfolio

