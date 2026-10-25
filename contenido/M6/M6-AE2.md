# M6-AE2 · Implementar el flujo

## P01 · Qué vas a lograr en este tema
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

## P02 · Del prototipo al flujo completo
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

## P03 · Planifica en ciclos pequeños
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

## P04 · Supervisión humana: quién revisa, cuándo y con qué
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

## P05 · Riesgos y cambios: qué puede salir mal
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

## P06 · Documenta el flujo
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

## P07 · Tu bitácora de decisiones
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

## P08 · Versiones de tus prompts
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

## P09 · Prueba, ajusta y vuelve a probar
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

## P10 · Tu Hito 6b y cómo se evalúa
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

## Ideas clave

1. Implementar es un ciclo: probar a pequeña escala, estudiar lo que pasó, ajustar y volver a probar (PDSA).
2. Las etapas van en orden: mapear, definir controles, documentar, probar en pequeño, ajustar y recién después usar en la tarea real.
3. La supervisión humana se define por escrito: quién revisa, cuándo, qué, con qué criterio y qué hacer si falla.
4. Cada riesgo necesita un control; cada cambio al flujo o al prompt se vuelve a probar, y el plan de contingencia no depende de la
   misma herramienta.
5. La ficha del flujo registra propósito, entradas, salidas, dependencias, supervisión y contingencia, con una convención de nombres.
6. La bitácora de decisiones guarda contexto, decisión y consecuencias; una decisión aplicada no se reescribe, se reemplaza con otra
   entrada.
7. Cada versión de un prompt se guarda, se fecha y se prueba con los mismos casos.

## Glosario

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

## Conexión con el proyecto

Este tema es el **Hito 6b del proyecto aplicado: implementación del flujo**. Partes del prototipo del Hito 5 y de la meta y el plan de
medición del Hito 6a, y entregas el flujo implementado y documentado: ficha, riesgos, bitácora de decisiones, versiones de prompts y
evidencia de pruebas. El tutor te devuelve su retroalimentación en un plazo de 72 horas como máximo. Con el flujo en uso, empiezas a
juntar los datos que medirás en el Hito 6c.

## Fuentes

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
