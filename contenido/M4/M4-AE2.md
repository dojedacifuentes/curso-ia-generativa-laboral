# M4-AE2 · Imágenes y gráficos

## P01 · Qué vas a lograr en este tema
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

## P02 · Antes de generar: el mensaje de la campaña
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

## P03 · Anatomía de un prompt visual
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

## P04 · Composición, luz y formato
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

## P05 · Laboratorio 1: genera tu imagen
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

## P06 · Iterar y seleccionar
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

## P07 · Defectos típicos y cómo corregirlos
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

## P08 · Diseño básico: jerarquía visual
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

## P09 · Legibilidad: contraste y texto alternativo
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

## P10 · Laboratorio 2: compón la pieza en Canva
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

## P11 · Sesgos visuales
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

## P12 · Detecta y corrige sesgos y defectos
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

## P13 · Personas reales y marcas
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

## P14 · Credenciales de contenido y transparencia
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

## P15 · Cierre: entrega tu pieza
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

## Ideas clave

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

Este laboratorio alimenta el **Hito 4 del proyecto aplicado: pieza multimedia que comunica la solución**. Si tu pieza del Hito 4 es
visual, puedes partir del brief y la pieza de P15 y adaptarlos a la propuesta de tu proyecto, con su ficha de uso ético. Si haces un
clip, esta imagen será uno de sus recursos en el tema 4. En el **caso M4-C1 · Campañas de marca hechas con IA generativa**
analizarás cómo una empresa usó IA en sus campañas y cómo reaccionó el público, y lo compararás con tus decisiones de diseño y uso
ético.

## Fuentes

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
