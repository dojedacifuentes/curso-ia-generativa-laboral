# Pendientes de verificación

Lista consolidada de lo que el contenido base marca como «pilotear», «revisar antes de publicar», «falta confirmar», «pendiente de
probar» o equivalente, en las notas de la sección «Fuentes» o en el texto de las pantallas. Estado al 24-10-2026.

Referencias: `M5-AE2 P10` = `contenido/M5/M5-AE2.md`, pantalla P10. «Fuentes» = nota al final del archivo.

Cuando un pendiente se resuelva, corrige la pantalla afectada y borra la nota en la sección «Fuentes» del archivo.

---

## 1. Herramientas que hay que probar a mano

| # | Qué probar | Pantallas afectadas | Marcado en |
|---|---|---|---|
| H1 | **Acciones programadas de Gemini con cuenta gratuita en Chile.** La ayuda en español no exige plan (F-H-61), pero la tabla de límites (F-H-60) parece dejarlas en planes de pago. Comprobar también: si se crean con un pedido en lenguaje natural, si filtran por asunto, si proponen eventos de Calendar y si ya están habilitadas (el texto dice que «se está habilitando de a poco»). | M5-AE2 P01, P03, P05, P06, P10 · M5-AE3 P03, P07 · **M6-AE2 P01, P02, P05, P07** (el flujo de Camila depende de esto) | M5-AE2 Fuentes; texto de M5-AE2 P05, P10 y M6-AE2 P02 |
| H2 | **Tareas programadas de ChatGPT en cuenta Free.** La página de precios (F-H-54) las muestra como función de Plus; la ayuda (F-H-55) da 3 tareas a las cuentas Free. Confirmar en la app. | M5-AE2 P01, P03, P05, P10 | M5-AE2 Fuentes |
| H3 | **Laboratorio de Make completo con cuenta gratuita.** Las fuentes confirman el plan gratuito, los créditos y los módulos que leen correos y escriben filas en Google Sheets (F-H-94). No confirman los nombres de los módulos de Gmail e IA, cómo poner la condición (filtro) entre módulos, el historial de ejecuciones ni si el editor funciona en el celular. | M5-AE2 P08, P09, P12 · M6-AE2 P02 | M5-AE2 Fuentes |
| H4 | **Make con disparador en una fila de Google Sheets** (agregado en la revisión de coherencia del 24-10-2026). El flujo de Andrés parte cuando él marca un despacho como «atrasado» en la planilla, y Make lee esa fila. F-H-94 confirma que Make escribe filas, no que vigile filas modificadas. Probar que exista ese disparador en el plan gratuito o ajustar el ejemplo. | M5-AE2 P02, P04, P07, P12 · M5-AE3 P02, P07, P09, P11 · M6-AE2 P02 | Nuevo (no estaba marcado) |
| H5 | **Práctica A en Google AI Studio.** No se pudo revisar por dentro: qué modelos aparecen, si Gemini 3.5 Flash-Lite o 3.1 Flash-Lite respetan la temperatura, qué controles muestra «Configuración de ejecución», si funciona en el navegador del celular y si el panel admite los valores 0,2 y 1,5. | M1-AE3 P12 | M1-AE3 Fuentes («Antes de publicar: pilotear») |
| H6 | **Tokenizador de OpenAI** (https://platform.openai.com/tokenizer): si pide cuenta y si funciona en el celular. | M1-AE1 P08 | M1-AE1 Fuentes |
| H7 | **Perplexity:** si se puede usar sin cuenta en Chile y dónde está el ajuste «AI data retention» en la aplicación. | M3-AE1 P07 · M3-AE4 P16 | M3-AE1 Fuentes |
| H8 | **Gemini Notebook:** si la aplicación ya aparece en las tiendas chilenas con ese nombre (antes NotebookLM). | M3-AE1 P10, P11 | M3-AE1 Fuentes |
| H9 | **Nombres de los ajustes de privacidad** en cada aplicación (cambian con la versión): comprobarlos en el celular. | M3-AE4 P16 (y M6-AE1 P08, M6-AE2 P05, que remiten a «apagar la actividad guardada») | M3-AE4 Fuentes |
| H10 | **Planes gratuitos de las herramientas multimedia** (Gemini imagen, Canva, ChatGPT Images, Microsoft Designer, Ideogram, ElevenLabs y Eleven Music, Suno, Udio, Google Flow y Veo, Runway, Pika, CapCut): «Los planes gratuitos cambian a menudo: revisar de nuevo antes de publicar». | M4-AE1 P03, P04, P08 · M4-AE2 P05, P10 · M4-AE3 P05, P07 · M4-AE4 P06, P07, P09 | M4-AE1, M4-AE2, M4-AE3 y M4-AE4 Fuentes |
| H11 | **Control de temperatura en las apps gratuitas.** Que Gemini o ChatGPT en el celular no muestran temperatura ni top-p «se deduce» de las páginas de planes; ningún proveedor lo dice de forma expresa (ver Alertas de `investigacion/HERRAMIENTAS-1.md`). | M1-AE3 P04 | M1-AE3 Fuentes |

## 2. Normativa

| # | Qué revisar | Pantallas afectadas | Marcado en |
|---|---|---|---|
| N1 | **Ley 21.719: fecha de vigencia.** Según su texto, rige desde el 01-12-2026. El **boletín 18623-07** (F-M3-16) propone postergarla al 01-12-2027; al 24-10-2026 está en primer trámite en el Senado y no ha sido aprobado. Si se aprueba y publica, cambiar la fecha en todas estas pantallas. | Con la fecha: M3-AE2 P12 · M3-AE4 P07, P08, P11 e Ideas clave · M4-AE3 P10 e Ideas clave · M5-AE1 P10 · M5-AE3 P05 · Sin fecha, pero citan la ley: M3-AE4 P14, P15, P17, P18 · M4-AE2 P13 · M4-AE3 P11, P14 | Fuentes de M3-AE2, M3-AE4, M4-AE3, M5-AE1 y M5-AE3; texto de M4-AE3 P10 y M5-AE3 P05 («revisa en qué estado está») |
| N2 | **NIST AI RMF 1.0 en revisión.** La ficha de NIST indica que el marco está en revisión. Si sale una versión nueva, revisar lo que se le atribuye. | M5-AE3 P01, P06, P08, P10–P13 · también citan el mismo documento (F-M6-06): M6-AE1 P08, P10 · M6-AE2 P01, P04, P05, P10 | M5-AE3 Fuentes (M6 no lo marca) |
| N3 | **Alcance legal.** El tema de datos personales y confidencialidad es orientación general, no asesoría legal. | M3-AE4 (todo el tema) | M3-AE4 Fuentes |

## 3. Fuentes que no se abrieron, que se contradicen o que no dicen exactamente lo que afirma el texto

| # | Qué pasa | Pantallas | Marcado en |
|---|---|---|---|
| F1 | F-H-60 (tabla de límites de Gemini) contradice a F-H-61 sobre si las acciones programadas son gratuitas. Ver H1. | M5-AE2 P10 | M5-AE2 Fuentes |
| F2 | F-H-54 (precios de ChatGPT) contradice a F-H-55 sobre las tareas programadas en Free. Ver H2. | M5-AE2 P10 | M5-AE2 Fuentes |
| F3 | Boletín 18623-07: M4-AE3 decía que no se había verificado en fuente primaria. **Resuelto en esta revisión:** M4-AE3 P10 ahora cita F-M3-16 (ficha de tramitación del Senado), igual que M3 y M5. Sigue vigente N1. | M4-AE3 P10 | M4-AE3 Fuentes (nota bajo F-M4-16) |
| F4 | Aprobación humana automática de Zapier: su ayuda la sitúa en planes de pago, pero el texto solo afirma lo verificado en F-H-93 (Zapier gratis permite dos pasos). | M5-AE3 P07 | M5-AE3 Fuentes |
| F5 | Las equivalencias en inglés de las tres formas de supervisión (*human-in-the-loop*, *on-the-loop*, *in-command*) salen de comparar con los términos en inglés de la Comisión Europea; la versión en español no los usa. | M5-AE3 P06 (y M6-AE2 P04, que los retoma en español) | M5-AE3 Fuentes |
| F6 | «Errores en cadena» es una explicación del curso a partir de F-M5-10; ninguna fuente lo dice con esas palabras. | M5-AE3 P02 | M5-AE3 Fuentes |
| F7 | Las cifras de la OIT 2023 y 2025 usan métodos distintos: no deben ponerse juntas en una misma frase ni compararse (vigilarlo en guiones e infografías). | M5-AE1 P03 | M5-AE1 Fuentes |

## 4. Casos con empresas reales

Todos los casos de la hoja «Casos y proyecto» están **«Por verificar»** en fuente primaria. El contenido base no los describe (solo
los anuncia en «Conexión con el proyecto» y en algunas P01), pero no deben publicarse hasta que se verifiquen.

| Caso | Se anuncia en |
|---|---|
| M1-C1 · Asistente para asesores financieros | M1-AE2 y M1-AE3, Conexión |
| M1-C2 · Cuando la IA inventa | M1-AE4 P01 y Conexión |
| M2-C1 · Comunicación con clientes redactada con IA | M2-AE1 y M2-AE2, Conexión |
| M2-C2 · Asistente de IA en herramientas de oficina | M2-AE3 y M2-AE4, Conexión |
| M3-C1 · Informe con referencias inexistentes | M3-AE2 y M3-AE4, Conexión |
| M3-C2 · Información confidencial ingresada a una IA | M3-AE4 P01 y Conexión |
| M4-C1 · Campañas de marca hechas con IA | M4-AE2 y M4-AE4, Conexión |
| M4-C2 · Voz sintética y consentimiento | M4-AE3, Conexión |
| M4-C3 · Licencias y datos de entrenamiento (caso en evolución) | M4-AE1, Conexión |
| M5-C1 y M5-C2 · Automatización de la atención y estrategia «AI-first» | M5-AE1 y M5-AE3, Conexión |

---

Las demás notas de «Fuentes» (por ejemplo, «Recomendaciones del curso, sin fuente») no son pendientes: registran qué partes del
texto son propuestas del curso. Están en M1-AE2, M1-AE3, M1-AE4, M3-AE1, M3-AE2, M3-AE3, M3-AE4, M5-AE1 y M5-AE3.
