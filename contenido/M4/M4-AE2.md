# M4-AE2 · Imágenes y gráficos

## P01 · Qué vas a lograr en este tema
cubre: C1, C2
fuentes: F-H-56, F-H-69
bloque: Texto + imagen

En el tema anterior aprendiste a elegir herramientas según su licencia y sus riesgos. Ahora las vas a usar: crearás una pieza gráfica para una **campaña interna**, es decir, una comunicación dirigida a las personas de tu organización, como un afiche para el diario mural o una imagen para el grupo de mensajería del equipo.

El aprendizaje esperado es este: Producir imágenes y gráficos con IA para una campaña interna, aplicando criterios de diseño y uso ético. Al final deberías poder producir piezas coherentes con el mensaje de la campaña e identificar y corregir sesgos o defectos visuales antes de publicarlas.

Este tema es un laboratorio creativo y termina con un producto. Generarás la imagen con Gemini, que te pide iniciar sesión con tu cuenta de Google, y compondrás la pieza en Canva, que tiene app para Android y para iOS. Te acompaña Andrés, el encargado de bodega: su jefatura le pidió una campaña para que los pasillos estén siempre despejados, porque cajas y pallets mal ubicados han provocado tropiezos. Hará un afiche para el diario mural y una versión para el teléfono. Camila, la asistente administrativa de la constructora, también tiene un encargo: la gerenta de administración le pidió una campaña para que en la oficina se recicle el papel, y algunos ejemplos serán suyos.

Tú harás la tuya con una campaña interna real de tu lugar de trabajo, sobre algo que tu equipo necesite recordar o cambiar. Si no se te ocurre cuál, pregúntale a tu jefatura qué le serviría. Ten presente desde el comienzo que la IA genera la imagen, pero la pieza la diseñas tú: el mensaje, el texto, el orden y la revisión final son tu trabajo.

## P02 · Antes de generar: el mensaje de la campaña
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

El formato se define con la **relación de aspecto**, que es la proporción entre el ancho y el alto. Las guías de generación de imágenes trabajan con algunas comunes: 1:1 (cuadrada), 4:3 y 3:4, 16:9 (horizontal, como una pantalla) y 9:16 (vertical, como un teléfono).

Con el mensaje claro sabrás qué tiene que mostrar la imagen y qué no, y podrás ordenar la pieza para que el mensaje sea lo primero que se vea, como verás en P08. Un error común es generar imágenes primero y ver después qué decir: sin mensaje, las imágenes salen al azar y se gastan los usos del día.

:::actividad Tu brief visual
Escribe el mensaje, el público, el canal con su formato y el tono de tu campaña interna. El mensaje debe caber en una frase de no más de seis palabras: la usarás como título de la pieza.
:::

## P03 · Anatomía de un prompt visual
cubre: S1
fuentes: F-M4-12
bloque: Texto + imagen con las partes señaladas

Un **prompt visual** describe la imagen que quieres. Las guías de Google proponen armarlo con tres partes. La primera es el sujeto: qué o quién aparece, por ejemplo «una trabajadora de bodega empujando un carro». La segunda es el contexto y fondo: dónde está y qué la rodea, como «en un pasillo amplio y despejado, con estantes ordenados a los lados». La tercera es el estilo, que dice cómo se ve; puede ser general, como «ilustración» o «fotografía», o más específico, como «ilustración plana con colores sólidos».

La misma guía recomienda partir de una idea central y agregar detalles en cada intento, en vez de escribir todo de una vez. Compara estos dos pedidos:

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

## P04 · Composición, luz y formato
cubre: S1, A1
fuentes: F-M4-12
bloque: Tabla + galería de variantes

Con sujeto, contexto y estilo ya tienes una imagen. Para acercarla a lo que buscas, agrega **modificadores**: palabras que controlan la composición, la luz y el formato.

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

## P05 · Laboratorio 1: genera tu imagen
cubre: H1, S1
fuentes: F-H-56, F-H-50
bloque: Proceso paso a paso + actividad

Ahora te toca generar. Usa Gemini, el asistente del curso, en la app o en la web, y sigue estos pasos:

1. Inicia sesión con tu cuenta de Google. Para generar imágenes hay que tener 13 años o más, y para editarlas, 18 o más.
2. Escribe tu prompt con sujeto, contexto, estilo y modificadores, y termínalo con «sin texto»: el título lo pondrás después.
3. Mira el resultado y descárgalo. Sin un plan pagado, Gemini descarga en resolución 1K.
4. Anota en tu bitácora el prompt tal como lo escribiste.

Gemini genera con un modelo llamado Nano Banana 2 y tiene un límite diario de imágenes que Google no publica en cifras. Por eso conviene pensar el prompt antes de escribirlo, en vez de probar al azar hasta que se acabe el día.

Si prefieres otra herramienta, ChatGPT también crea y edita imágenes en su plan gratuito, en la web y en la app. Desde el celular deja seleccionar una zona de la imagen para editarla y cambiar la proporción, algo que te servirá cuando tengas que corregir defectos. Como en Gemini, su página de ayuda no dice cuántas imágenes puedes crear.

:::error «Pido el afiche completo, con título y todo, en un solo prompt»
Los generadores todavía fallan con el texto dentro de la imagen. Pide la imagen sin texto y agrega el título en Canva. Lo verás en P07 y P10.
:::

## P06 · Iterar y seleccionar
cubre: H1, A1, C1
fuentes: F-M4-12, F-M4-06
bloque: Galería con tres versiones + texto

Rara vez la primera imagen es la final. **Iterar** es partir de una idea central y agregar o cambiar un detalle en cada versión, hasta acercarte a lo que buscas. Así lo hizo Andrés:

| Versión | Cambio en el prompt | Resultado |
|---|---|---|
| v1 | Prompt completo de P04 | Buena composición, pero el pasillo se ve angosto |
| v2 | «pasillo muy amplio, con líneas amarillas de demarcación en el piso» | Se entiende mejor el mensaje |
| v3 | «agrega a un compañero ordenando cajas en un estante» | Muestra la acción que la campaña pide |

La recomendación del curso es cambiar una cosa a la vez, porque así sabes qué produjo la mejora. Si cambias el estilo, la luz y los personajes al mismo tiempo, pierdes lo que ya funcionaba y no sabes qué causó el cambio. Repetir el mismo prompt esperando que el azar lo arregle tampoco sirve: no aprendes nada y gastas tus usos.

Cuando tengas dos o tres buenas opciones, elige con criterios y no solo por gusto. Pregúntate si se entiende el mensaje sin leer el título, si queda espacio libre para el título y el texto, si sirve en el formato de tu canal y si tiene algún defecto o sesgo, que verás en P07 y P11. La OMPI recomienda llevar registro de las instrucciones y documentar el aporte humano, y elegir entre versiones y decidir qué cambiar es parte de ese aporte.

:::actividad Tres versiones
Genera tres versiones de tu imagen cambiando un solo detalle en cada una. Anota en tu bitácora cada prompt, qué cambiaste y cuál elegiste, con una razón basada en los criterios de esta pantalla.
:::

## P07 · Defectos típicos y cómo corregirlos
cubre: C2, S2
fuentes: F-M4-12, F-M1-05
bloque: Texto + imagen con defectos señalados

Antes de usar una imagen, búscale los defectos. El más frecuente es el texto: dentro de una imagen generada suele salir mal escrito o mal ubicado. La guía de Google aconseja que sea breve, de 25 caracteres o menos, y advierte que su ubicación y su tipografía solo se controlan de forma aproximada. OpenAI reconoce límites parecidos en sus modelos de imagen: les cuesta ubicar el texto con precisión, controlar la composición en diseños estructurados y mantener igual a un personaje o una marca de una imagen a otra. Si haces dos versiones de tu pieza, el personaje puede cambiar.

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

## P08 · Diseño básico: jerarquía visual
cubre: S2, A1, C1
fuentes: F-M4-09
bloque: Texto + imagen antes/después

La **jerarquía visual** es el orden en que la vista recorre los elementos de una pieza, según la importancia que les quieres dar. En un afiche de campaña, lo primero que se ve tiene que ser el mensaje principal. Se construye con tres recursos que puedes aplicar sin haber estudiado diseño.

El primero es el contraste: lo que se diferencia de su entorno llama la atención. Funciona mejor la diferencia de valor, entre claro y oscuro, y la de saturación, entre intenso y apagado, que la diferencia de tono, y no conviene depender solo del color. El segundo es la escala: lo más grande se ve primero. Usa pocos tamaños distintos, un título grande, un texto mediano y, si hace falta, un dato pequeño, porque si todo es grande, nada destaca. El tercero es la agrupación: lo que va junto se entiende como una unidad. Se agrupa por cercanía, con bordes o con un fondo común, y se separa con espacio entre grupos.

Antes de pasar a Canva, mira tu imagen elegida y decide dónde irá el título, qué irá en segundo lugar y qué espacio quedará libre. Basta un boceto rápido en papel o en una nota del celular.

:::ejemplo El afiche de Andrés, antes y después
En la primera versión, la imagen ocupaba todo, el título iba en letra mediana y había cuatro textos del mismo tamaño repartidos por la pieza: nadie sabía dónde mirar. En la segunda, el título «Pasillo despejado, bodega segura» va arriba, grande y en negrita; la imagen, al centro; y abajo, juntas, dos líneas con lo que se pide: «Deja las cajas en su ubicación» y «Avisa si ves un pasillo bloqueado».
:::

## P09 · Legibilidad: contraste y texto alternativo
cubre: S2, C1
fuentes: F-M4-08
bloque: Texto + ejemplos de contraste (bueno y malo)

Una pieza que no se lee no comunica. Las Pautas de Accesibilidad para el Contenido Web (WCAG) del W3C son un estándar internacional que da criterios concretos para evitarlo. Piden que el texto tenga un **contraste mínimo** de 4,5:1 con su fondo, y de 3:1 si es texto grande, que es el de 18 puntos o más, o de 14 puntos o más en negrita. Los íconos o flechas necesarios para entender la pieza también requieren 3:1.

Las mismas pautas dicen que el color no puede ser el único medio para transmitir información: si marcas en rojo una zona prohibida, agrega un ícono o una palabra. Y si la pieza se publica en digital, la imagen necesita un texto alternativo, una descripción en texto que cumpla la misma función para quien no puede verla.

Un error común es pensar que, si se ve bien en tu pantalla, se lee bien en todas. Tu pantalla puede tener más brillo o tamaño que la de tus colegas, y el contraste mínimo asegura que se lea en distintas condiciones. Como recomendación del curso, usa letra oscura sobre fondo claro, o clara sobre fondo oscuro, evita poner texto sobre zonas de la imagen con muchos detalles y haz una prueba: mira la pieza en el celular con el brillo bajo y a un brazo de distancia. Si te cuesta leer el título, sube el contraste o el tamaño.

:::ejemplo Texto alternativo de Andrés
Para el grupo del equipo, Andrés escribe: «Afiche de campaña. Una trabajadora empuja un carro por un pasillo despejado. Título: Pasillo despejado, bodega segura».
:::

## P10 · Laboratorio 2: compón la pieza en Canva
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

Canva también genera imágenes con IA. En el plan gratuito tienes hasta 20 usos de IA al mes, compartidos entre todas sus herramientas de IA, y la cuota se renueva el día 1 de cada mes. Si ya generaste tu imagen en Gemini, guarda esos usos para la voz o la música del tema 3.

Según los términos de Canva, eres dueña o dueño de lo que generas con su IA, salvo que incluyas contenido de su biblioteca: las fotos, íconos o ilustraciones de Canva solo se licencian. Canva también prohíbe quitar los metadatos de procedencia y hacer pasar por humano lo generado con IA.

:::error «Todo lo que está en Canva es mío porque lo usé en mi diseño»
Los elementos de la biblioteca de Canva solo se licencian: no pasan a ser tuyos. Anótalos en tu ficha de uso ético.
:::

## P11 · Sesgos visuales
cubre: S3, A2
fuentes: F-M4-11, F-M4-10
bloque: Texto + imagen comparativa

Los generadores de imágenes aprenden de imágenes que ya existen, y con ellas aprenden también sus estereotipos. A esto se le llama **sesgo visual**, y no es una sospecha. Un estudio de 2023 pidió a tres generadores de imágenes retratos de distintas profesiones: las imágenes reflejaban en parte la composición de cada oficio en Estados Unidos y, de forma sistemática, subrepresentaban a las identidades marginadas, en distinto grado según el sistema. Por eso el sesgo puede aparecer aunque tu prompt no diga nada sobre género ni edad.

El problema no es solo de la IA. La comunicación institucional también puede reforzar estereotipos sin proponérselo. La guía del Gobierno de Chile *Comunicación sin estereotipos de género* muestra campañas visuales en su versión «antes» y «después», por ejemplo cuando los roles de cuidado se asignan solo a mujeres. Si la herramienta te entrega un estereotipo y tú lo publicas, el mensaje pasa a ser de tu organización.

Cuidar cómo representas a las personas es parte de comunicar bien. Quien no se ve en la campaña siente que no le habla, y una campaña interna que deja fuera a parte del equipo pierde justo a quienes tenía que convencer.

:::ejemplo Lo que salió sin pedirlo
Andrés pide «trabajadores de bodega ordenando cajas» y las cuatro imágenes muestran hombres jóvenes, aunque en su bodega trabajan mujeres y hombres de distintas edades. Rosa pide «personal de un centro médico atendiendo» y todas las imágenes ponen a un hombre como médico y a mujeres como asistentes.
:::

## P12 · Detecta y corrige sesgos y defectos
cubre: C2, S3, A2
fuentes: F-M4-10, F-M4-11
bloque: Texto + actividad de clasificación

Antes de publicar, revisa tus imágenes con preguntas. La guía de Gobierno sugiere, entre otras, preguntarte si hay diversidad étnica, de género y de roles, y si la imagen refleja equidad sin perpetuar estereotipos. El curso agrega dos más: si aparecen distintas edades y cuerpos, como en un equipo real, y quién hace la acción y quién mira, para notar si el rol importante lo tiene siempre el mismo perfil. Para los defectos, repasa lo de P07: si el texto está bien escrito o lo quitaste, y si hay elementos mal ubicados o sin sentido.

Si encuentras un sesgo, tienes dos caminos. Puedes cambiar el prompt y describir la diversidad que quieres, por ejemplo «un equipo de bodega con mujeres y hombres de distintas edades». O puedes cambiar la selección: si de cuatro variantes solo una muestra un equipo diverso, elige esa. En los dos casos vuelve a revisar, porque a veces corregir un sesgo trae otro, como dejar a todas las mujeres en segundo plano.

:::actividad Revisa cuatro variantes
Andrés generó cuatro versiones. Decide cuál usaría y qué corregiría en las otras, y después compara con estas respuestas:
1. Tres hombres jóvenes cargando cajas. → Sesgo de género y edad: cambiar el prompt.
2. Una mujer y un hombre mayor ordenando un estante; letrero con letras inventadas. → Buena representación: quitar el letrero.
3. Un hombre trabaja y una mujer lo mira con una libreta. → Sesgo de roles: cambiar la acción.
4. Un equipo diverso, pasillo despejado, sin texto. → Lista para usar.
:::

## P13 · Personas reales y marcas
cubre: A2, S3
fuentes: F-M4-06, F-M4-16
bloque: Escenarios con decisión (sí o no)

Las imágenes generadas pueden parecerse a una persona real o usar una marca ajena, y en una campaña interna eso también importa. La OMPI recomienda no sintetizar la apariencia de una persona real sin su consentimiento y sin las licencias necesarias. Si quieres poner a alguien de tu equipo en la pieza, pídele permiso antes de usar su foto, y más aún si la vas a editar con IA. En el tema 3 verás además que la Ley 21.719 pone los rasgos faciales como ejemplo de datos biométricos, que pasan a ser datos personales sensibles.

Un error común es pensar que, por ser una campaña interna, se puede usar la cara de un colega o de la gerencia sin preguntar. Que la pieza no salga de la empresa no elimina el derecho de cada persona sobre su imagen: sin consentimiento, no se usa su cara ni se genera una parecida, y nombrarla en los créditos no reemplaza su permiso.

Con las marcas y las obras ajenas pasa algo parecido. La OMPI también recomienda no usar en las instrucciones nombres comerciales, marcas ni obras de terceros, así que no pidas una imagen «al estilo de» un personaje conocido ni con el logo de una marca. Si vas a usar el logo de tu propia organización, la recomendación del curso es hacerlo solo si te autorizaron. Y no inventes hechos: una imagen realista de un accidente que no ocurrió, presentada como real, es un ultrafalso aunque la intención sea buena, y la OMPI recomienda no usar herramientas para producirlos.

:::comprueba
Andrés quiere una imagen «al estilo de una película animada famosa». ¿Qué le recomiendas?
- a) Está bien si es para uso interno
- **b) Describir un estilo propio, como «ilustración plana con colores sólidos», sin nombrar obras de terceros**
- c) Usarlo y dar crédito al estudio de la película
Retroalimentación: La OMPI recomienda no usar obras ni marcas de terceros en las instrucciones. Un estilo se puede describir con palabras propias.
:::

## P14 · Credenciales de contenido y transparencia
cubre: H1, C1
fuentes: F-H-57, F-H-52
bloque: Texto + diagrama de cómo se pierden los metadatos

Algunas herramientas marcan sus imágenes para que se sepa que se hicieron con IA. Google inserta **SynthID**, una marca de agua invisible, en el contenido que crean sus modelos, y en la app Gemini puedes subir un archivo para revisar si se hizo con IA de Google, aunque solo detecta herramientas de Google. OpenAI, por su parte, pone en las imágenes de ChatGPT una marca SynthID y además **credenciales de contenido** C2PA, un registro del origen y las ediciones del archivo que viaja en sus metadatos.

El problema es que los metadatos se pierden con facilidad. OpenAI indica que las credenciales C2PA se pierden con una captura de pantalla o al convertir el archivo, mientras que la marca de agua resiste cambios leves. Si compartes tu afiche con una captura, la constancia de que se hizo con IA puede desaparecer sin que lo notes.

La conclusión práctica es no confiar en que el archivo lo dirá por ti. Si la imagen es realista, agrega una etiqueta visible, como «Imagen generada con IA», y regístralo en tu ficha de uso ético. Tampoco quites las marcas que trae: ya viste en P10 que Canva prohíbe quitar los metadatos de procedencia.

:::comprueba
Andrés comparte su afiche en el grupo del equipo con una captura de pantalla. ¿Qué pasa con las credenciales C2PA?
- a) Se mantienen siempre
- **b) Se pueden perder: por eso conviene una etiqueta visible y la ficha**
- c) Se convierten en una marca visible
Retroalimentación: Una captura de pantalla o una conversión de archivo borra esos metadatos. La transparencia no puede depender solo de ellos.
:::

## P15 · Cierre: entrega tu pieza
cubre: H1, C1, C2, A1, A2
fuentes: F-M4-09, F-M4-08
bloque: Lista de verificación (checklist) + actividad de cierre

En este laboratorio pasaste del mensaje a la pieza. Escribiste un brief visual, armaste un prompt con sujeto, contexto, estilo y modificadores, iteraste y elegiste con criterios, corregiste defectos y sesgos, y compusiste la pieza con jerarquía y contraste. Antes de darla por terminada, revísala completa:

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

## Ideas clave

1. Una pieza de campaña parte del mensaje, el público, el canal y el formato; la imagen viene después.
2. Un prompt visual tiene sujeto, contexto y fondo, y estilo; los modificadores controlan encuadre, cámara, luz, lente y relación de aspecto.
3. Se itera cambiando un detalle a la vez y se selecciona con criterios, registrando prompts y aporte humano.
4. El texto dentro de la imagen generada suele salir con errores: conviene agregarlo en el editor.
5. La jerarquía visual se construye con contraste, escala y agrupación; el texto necesita un contraste mínimo de 4,5:1 (3:1 si es grande).
6. Los generadores reproducen sesgos: hay que revisar diversidad y roles, y corregir el prompt o la selección.
7. Las marcas SynthID y C2PA ayudan, pero los metadatos se pierden al compartir: si la imagen es realista, se etiqueta de forma visible.

## Glosario

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

## Conexión con el proyecto

Este laboratorio alimenta el **Hito 4 del proyecto aplicado: pieza multimedia que comunica la solución**. Si tu pieza del Hito 4 es visual, puedes partir del brief y de la pieza de P15 y adaptarlos a la propuesta de tu proyecto, con su ficha de uso ético. Si haces un clip, esta imagen será uno de sus recursos en el tema 4.

## Fuentes

Detalle de cada fuente y de lo que respalda: `investigacion/M4.md`, `investigacion/M1.md` y `investigacion/HERRAMIENTAS-2.md`
(consultadas el 24-10-2026). Los planes gratuitos cambian a menudo: revisar de nuevo antes de publicar.

- F-M4-06 · OMPI (2024). IA generativa: cómo abordar la propiedad intelectual. https://www.wipo.int/edocs/pubdocs/es/wipo-pub-rn2024-8-es-generative-ai-navigating-intellectual-property.pdf
- F-M4-08 · W3C (2024). Web Content Accessibility Guidelines (WCAG) 2.2. https://www.w3.org/TR/WCAG22/
- F-M4-09 · Nielsen Norman Group; Kelley Gordon (2021). Visual Hierarchy in UX: Definition. https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
- F-M4-10 · Gobierno de Chile, Kit Digital (2024). Guía ilustrada: Comunicación sin estereotipos de género. https://kitdigital.gob.cl/archivos/insumos/2025/Nueva%20Guia%20Ilustrada%20Comunicacion%202024.pdf
- F-M4-11 · Luccioni, Akiki, Mitchell y Jernite (2023). Stable Bias: Analyzing Societal Representations in Diffusion Models. https://arxiv.org/abs/2303.11408
- F-M4-12 · Google Cloud (2026). Guía de atributos de imágenes y mensajes (Vertex AI). https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide?hl=es-419
- F-M4-16 · Congreso Nacional de Chile / BCN (2024). Ley 21.719, que regula la protección y el tratamiento de los datos personales. https://www.bcn.cl/leychile/navegar?idNorma=1209272
- F-M1-05 · OpenAI (2026). Image generation: limitations. https://developers.openai.com/api/docs/guides/image-generation
- F-H-50 · OpenAI (2026). Images in ChatGPT. https://help.openai.com/en/articles/11084440-images-in-chatgpt
- F-H-52 · OpenAI (2026). Provenance signals in OpenAI-generated content. https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content
- F-H-56 · Google (s. f.). Generar imágenes con las aplicaciones de Gemini. https://support.google.com/gemini/answer/14286560?hl=es
- F-H-57 · Google (s. f.). Verificar imágenes, vídeos y audio generados por IA. https://support.google.com/gemini/answer/16722517?hl=es
- F-H-67 · Canva (2026). AI Product Terms. https://www.canva.com/policies/ai-product-terms/
- F-H-68 · Canva (s. f.). Comprender el uso de la IA. https://www.canva.com/es_es/help/ai-access/
- F-H-69 · Canva (s. f.). Canva for Android. https://www.canva.com/download/android/
