# M1-AE1 · Fundamentos de IA generativa

## P01 · Qué vas a lograr en este tema
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

## P02 · Qué es la IA generativa
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

## P03 · Cómo produce sus respuestas
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

## P04 · Modelos de lenguaje
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

## P05 · Modelos de imagen
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

## P06 · Modelos de audio
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

## P07 · Qué tipo de modelo usar para cada tarea
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

## P08 · Tokens: cómo «lee» el modelo
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

## P09 · Contexto: lo que el modelo tiene a la vista
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

## P10 · Primer límite: la alucinación
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

## P11 · Segundo límite: el sesgo
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

## P12 · Tercer límite: la fecha de corte
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

## P13 · ¿Delegar o no delegar?
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

## P14 · Práctica guiada: prueba un asistente
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

## P15 · Curiosidad crítica y uso responsable
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

## P16 · Cierre: tres usos y dos límites
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

## Ideas clave

1. La IA generativa produce contenido nuevo (texto, imagen, audio) a partir de patrones aprendidos de grandes cantidades de datos.
2. Genera sus respuestas fragmento a fragmento, eligiendo entre continuaciones probables: no «sabe», predice texto plausible, y por
   eso el mismo pedido puede dar respuestas distintas.
3. Hay modelos de lenguaje, de imagen y de audio, y herramientas multimodales que combinan tipos; la tarea define cuál usar.
4. Los modelos leen en tokens y responden solo con lo que tienen en su contexto: lo que no le das, no lo conoce.
5. Tres límites para tener siempre presentes: alucinación, sesgo y fecha de corte.
6. Conviene delegar lo que es fácil de revisar y barato si falla; lo grave o difícil de detectar se revisa a fondo o no se delega.

## Referencias bibliográficas

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
