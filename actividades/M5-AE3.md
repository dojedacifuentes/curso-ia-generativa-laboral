# Actividades de aplicación práctica · M5-AE3 · Supervisión humana y riesgos

## Actividad 1 · Controles para el flujo de reclamos de Paula
cubre: H1, C1, C2
fuentes: F-M5-14, F-M5-12
entrega: foro

### Instrucción general

Vas a ayudar a Paula a decidir dónde revisa una persona en su flujo de reclamos y qué hacer si algo falla. Con un caso ficticio
practicas el mapa de riesgos, los puntos de control y el plan de contingencia que después aplicarás a tu flujo. Publica tu tabla, tus
criterios, las columnas y el plan en el foro de la actividad, en el mensaje o en un documento adjunto. Se evalúa con la rúbrica de abajo,
y el facilitador te responde en el foro dentro de 24 horas hábiles.

### Situación

Paula, ejecutiva de atención al cliente en una tienda de electrodomésticos, ya corrigió el problema de su flujo: los reclamos con
faltas o en tono informal quedaban en urgencia «baja» y nadie los leía. Ahora su jefatura quiere sumarle un
paso. El flujo quedaría así: llega un reclamo por el formulario de la tienda; la IA lo clasifica en urgencia alta, media o baja y lo
resume en una línea; se agrega una fila en la planilla de reclamos; el equipo atiende por orden de urgencia; y un correo automático le
dice al cliente en qué plazo lo van a contactar según su urgencia.

Antes de aceptar, Paula quiere decidir dónde revisa una persona y qué hacer si algo falla. Tiene presente lo que le pasó: el NIST
describe el sesgo de automatización como confiar de más en lo que entrega un sistema automático, y ese exceso de confianza agrava los
errores [@F-M5-14]. Tú vas a ayudarla a armar los controles. El flujo, la tienda y los reclamos son ficticios.

### Lo que vas a hacer

1. Haz un mapa de riesgos: para cada uno de los cinco pasos, escribe qué podría salir mal, si es un error en cadena, un problema de privacidad o un sesgo, y qué pasaría si nadie lo nota.
2. Clasifica el riesgo de cada paso en bajo, alto o «decide algo importante sobre una persona».
3. Ubica los puntos de control donde el riesgo es mayor, sobre todo antes de que algo salga hacia el cliente, y elige para cada uno la forma de supervisión: participación humana, control humano o mando humano.
4. Escribe tres o cuatro criterios de aprobación para el punto de control más importante, cada uno como una pregunta de sí o no que se responda en pocos segundos.
5. Propón las columnas de supervisión que le faltan a la planilla de reclamos, incluidas «Dato original», «Estado» y «Revisó».
6. Escribe el plan de contingencia con sus seis respuestas: cómo se dan cuenta, cómo lo detienen, cómo sigue el trabajo mientras tanto, cómo recuperan lo que falló, a quién avisan y quién responde.

Para decidir cuánta revisión pide cada paso, usa la regla de las directrices éticas de la Comisión Europea: cuanto menor sea la
supervisión posible, mayores deben ser las verificaciones [@F-M5-12]. Fíjate en que el correo al cliente es el paso más difícil de
revertir, porque un correo enviado no se puede recoger.

### Lo que entregas

Publica en el foro de la actividad una tabla con los cinco pasos, su riesgo, si lleva punto de control, la forma de supervisión y la
razón. Debajo, los criterios de aprobación del punto principal, las columnas nuevas de la planilla y el plan de contingencia con las
seis respuestas, con un responsable con nombre y un reemplazo para cuando esa persona no esté.

### Rúbrica

| Criterio | Peso | Logrado (100 %) | Parcial (60 %) | No logrado (0 %) |
|---|---|---|---|---|
| Mapea y clasifica los riesgos | 25 % | Los cinco pasos tienen qué podría salir mal, el tipo de riesgo, qué pasaría si nadie lo nota y su nivel. | Están los cinco pasos, pero a alguno le falta el tipo de riesgo, la consecuencia o el nivel. | Faltan pasos, o los riesgos no se relacionan con el flujo de Paula. |
| Define puntos de control según el riesgo | 30 % | Cada punto de control está en un paso de riesgo alto, hay uno antes de que algo salga hacia el cliente y la forma de supervisión de cada uno calza con su riesgo y tiene su razón. | Los puntos están en pasos de riesgo alto, pero falta el control antes de lo que sale al cliente o una forma de supervisión no calza con su riesgo. | No hay puntos de control, o están en pasos de riesgo bajo sin razón. |
| Fija criterios de aprobación y registro | 15 % | Hay tres o cuatro criterios que se responden con sí o no, alguno apunta al error que el flujo ya tuvo, y las columnas incluyen «Dato original», «Estado» y «Revisó». | Los criterios están, pero alguno no se responde con sí o no, o faltan columnas. | No hay criterios de aprobación ni columnas de supervisión. |
| Elabora el plan de contingencia | 30 % | El plan responde las seis preguntas con acciones concretas: dónde se pausa el flujo, cómo se sigue a mano, cómo se corrige lo que ya salió y quién responde, con nombre y reemplazo. | Responde las seis preguntas, pero alguna con una acción vaga o sin responsable con nombre o reemplazo. | Faltan varias respuestas, o el responsable es «el sistema». |

La actividad se aprueba con 60 % o más.

## Actividad 2 · Supervisión y contingencia para tu flujo
cubre: H1, C1, C2
fuentes: F-M5-13, F-M5-06
entrega: tarea

### Instrucción general

Vas a agregar a tu flujo los controles humanos y el plan de contingencia que necesita antes de pensar en usarlo con datos reales, y
vas a medir si esos controles detectan errores. Con esto completas tu prototipo, que es el Hito 5 de tu proyecto del curso. Súbelo como tarea en el aula, en un documento con
capturas; solo lo ven tú y el facilitador. El facilitador lo revisa con la rúbrica de abajo y te deja su retroalimentación en un
plazo de hasta 72 horas.

### Situación

Tu flujo del tema anterior funciona, pero todavía corre sin que nadie revise. Antes de que tu empresa pueda pensar en usarlo con datos
reales, necesita controles y un plan para cuando falle. El marco de gestión de riesgos de IA del NIST pide definir y documentar los
procesos de supervisión humana y los roles de cada persona, y tener mecanismos y responsables para desconectar o desactivar un sistema
que no funciona como se espera [@F-M5-13]. La guía de la Universidad de Bath, por su parte, pide un plan de contingencia para todo flujo
importante [@F-M5-06].

Sigue trabajando en tu cuenta de práctica, con datos inventados o con copias sin datos sensibles.

### Lo que vas a hacer

1. Haz el mapa de riesgos de tu flujo, paso por paso: errores en cadena, privacidad y sesgo.
2. Define los puntos de control según el riesgo de cada paso, con su forma de supervisión y la razón, y revisa si algún paso decide algo importante sobre una persona; si es así, esa decisión la toma una persona.
3. Escribe tres o cuatro criterios de aprobación para cada punto de control y agrega a tu planilla las columnas de supervisión, con el valor «por revisar» hasta que alguien apruebe.
4. Ubica en tu herramienta dónde se pausa o se desactiva el flujo y revisa que agregue filas en vez de reemplazar datos.
5. Escribe tu plan de contingencia con las seis respuestas, pensando en tu equipo y en la forma manual de hacer la tarea.
6. Prepara diez casos ficticios, siembra un error en tres de ellos y corre el flujo sin el control y con el control.
7. Anota cuántos errores llegaron al resultado en cada corrida, cuántas falsas alarmas hubo y cuánto te tomó revisar, y escribe una conclusión de dos líneas.

Si alguna respuesta del plan es «no sé», ese es el punto débil que tienes que resolver antes de mostrarle el flujo a tu jefatura.

### Lo que entregas

Sube como tarea en el aula tu mapa de riesgos con los puntos de control, los criterios de aprobación, una captura de la planilla con
las columnas de supervisión y datos de prueba, el plan de contingencia y la tabla con y sin control con tu conclusión. Con esto
completas tu prototipo.

### Rúbrica

| Criterio | Peso | Logrado (100 %) | Parcial (60 %) | No logrado (0 %) |
|---|---|---|---|---|
| Define puntos de control según el riesgo | 30 % | El mapa cubre cada paso, cada punto de control se justifica por el riesgo de su paso, lo que sale hacia otras personas se revisa antes y toda decisión importante sobre una persona la toma una persona. | El mapa está, pero algún punto de control no se justifica o un paso que sale hacia otras personas queda sin revisión. | No hay mapa de riesgos ni puntos de control. |
| Fija criterios de aprobación y registro | 15 % | Los criterios son preguntas de sí o no y la captura muestra la planilla con las columnas de supervisión y el valor «por revisar». | Los criterios están, pero alguno no es de sí o no, o la planilla no muestra las columnas de supervisión. | No hay criterios ni columnas de supervisión. |
| Evalúa el efecto del control | 25 % | Hay diez casos con tres errores sembrados, la tabla compara con y sin control en errores que llegaron, falsas alarmas y tiempo, y la conclusión dice si el control vale lo que cuesta. | La prueba está, pero falta una de las tres medidas o la conclusión no dice si el control vale lo que cuesta. | No hay prueba con y sin control. |
| Elabora el plan de contingencia | 30 % | Las seis respuestas son concretas para tu flujo, con la forma manual de seguir y un responsable con nombre y reemplazo. | Están las seis respuestas, pero alguna es vaga o falta el reemplazo. | Faltan varias respuestas, o hay respuestas «no sé» sin resolver. |

La actividad se aprueba con 60 % o más.

## Referencias bibliográficas

- Grupo independiente de expertos de alto nivel sobre inteligencia artificial. (2019). *Directrices éticas para una IA fiable*. Comisión Europea. https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=60423
- National Institute of Standards and Technology. (2023). *Artificial intelligence risk management framework (AI RMF 1.0) (NIST AI 100-1)*. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- National Institute of Standards and Technology. (2024). *Artificial intelligence risk management framework: Generative artificial intelligence profile (NIST AI 600-1)*. https://doi.org/10.6028/NIST.AI.600-1
- University of Bath. (s. f.). *Automation standards for Microsoft Power Automate*. https://bath.ac.uk/guides/automation-standards-for-microsoft-power-automate
