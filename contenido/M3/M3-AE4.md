# M3-AE4 · Análisis crítico y privacidad

## P01 · Qué vas a lograr en este tema
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

## P02 · Evaluar un resultado: tres preguntas
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

## P03 · Sesgos en una investigación hecha con IA
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

## P04 · Trazabilidad: ¿puedo seguir el dato hasta su origen?
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

## P05 · Límites que no desaparecen
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

## P06 · El otro lado: lo que tú le entregas a la IA
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

## P07 · Qué es un dato personal
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

## P08 · Datos sensibles: los que exigen más cuidado
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

## P09 · Información confidencial de una organización
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

## P10 · Ley 19.628: lo que pide hoy
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

## P11 · Ley 21.719: qué cambia y en qué estado está
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

## P12 · Políticas internas: el ejemplo del Estado
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

## P13 · Clasificar antes de ingresar
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

## P14 · Caso: ¿qué puede ingresar?
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

## P15 · Anonimizar y no pegar datos de terceros
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

## P16 · Ajusta la configuración de privacidad
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

## P17 · Responsabilidad, ética y confidencialidad
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

## P18 · Cierre: tu protocolo de uso seguro
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

## Ideas clave

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

## Glosario

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

## Conexión con el proyecto

Tu protocolo de uso seguro (P18) se aplica primero a tu propio **Hito 3: investigación validada con fuentes (informe breve)**: revisa que
el informe no incluya datos personales ni información confidencial. Tu método para clasificar y decidir (P13) y tus prácticas seguras
(P15 y P16) son las herramientas de los casos del módulo: el **caso M3-C1**, sobre un informe con referencias inexistentes en un trabajo
hecho con apoyo de IA (P05), y el **caso M3-C2**, sobre archivos con datos personales subidos a sitios públicos de IA (P06). En ellos analizarás incidentes reales y qué
práctica los habría evitado.

## Fuentes

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
