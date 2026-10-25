# Herramientas · parte 1 (asistentes, parámetros, investigación, ofimática)
Consultado: 2026-10-24

> Método: cada página se abrió y leyó el 24-10-2026 en el navegador integrado (WebFetch recibió 403 en los sitios de OpenAI,
> por eso se usó el navegador). Las fechas «hace N días» de los centros de ayuda se convirtieron a fecha aproximada.
> Lo que no se pudo confirmar en la página va en «Alertas», no en las fuentes.

## Fuentes

### F-H-01 · OpenAI — ChatGPT Free Tier FAQ
- URL: https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «hace 4 días» (≈ 20-10-2026)
- Respalda: el plan gratuito permite buscar en la web, analizar datos, subir imágenes o archivos, usar GPT existentes, crear imágenes y guardar 500 MB en Library. El chat de texto cotidiano no tiene tope (salvo medidas contra abuso), pero subir archivos, crear imágenes, voz y análisis de datos tienen límites aparte que la app avisa al alcanzarse. El modelo por defecto y los límites pueden cambiar. En algunos países puede haber anuncios. Las cuentas personales ya no pueden crear GPT nuevos.
- Sirve para: M1-AE1 H2, M1-AE2 H1, M2-AE1 H1, M3-AE1 S1

### F-H-02 · OpenAI — Planes y precios | ChatGPT
- URL: https://chatgpt.com/es-419/pricing/
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha
- Respalda: el plan Gratis incluye chats de texto ilimitados, archivos adjuntos, creación de imágenes, voz e «investigación a fondo» limitados, y memoria y contexto limitados. Funciona en web, iOS y Android. Para Gratis, la tabla comparativa marca Buscar: sí; Proyectos: sí; Memoria con chats anteriores: limitada; extensiones de Excel, Word, PowerPoint y Hojas de cálculo de Google: limitadas. La ventana de contexto total de GPT Instant es de 27 mil tokens (entrada máxima de unas 12 páginas). El uso del contenido para entrenar es una «opción de exclusión». Planes de pago: Go, Plus, Pro.
- Sirve para: M1-AE1 S3, M1-AE1 H2, M2-AE4 H1, M3-AE1 S1

### F-H-03 · OpenAI — Términos de uso
- URL: https://openai.com/es-419/policies/terms-of-use/
- Tipo: términos
- Fecha de la página (si la tiene): en vigor desde el 01-01-2026
- Respalda: edad mínima de 13 años o la que fije cada país; los menores de 18 necesitan permiso de su madre, padre o tutor. Los resultados pueden no ser precisos y no conviene tomarlos como única fuente. Se puede pedir que el contenido no se use para entrenar.
- Sirve para: M1-AE1 S4, M1-AE4 S1, M3-AE4 S4

### F-H-04 · OpenAI — Data controls in ChatGPT
- URL: https://help.openai.com/en/articles/7730893-data-controls-faq
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «ayer» (≈ 23-10-2026)
- Respalda: en Free, Plus y Pro el uso de datos para entrenar viene activado. Se desactiva en Configuración > Controles de datos > «Improve the model for everyone» (web, iOS y Android). Quien no inicia sesión también puede desactivarlo, y la elección queda guardada en ese navegador, así que se puede usar ChatGPT sin cuenta. Los chats temporales no quedan en el historial, no crean memorias y no se usan para entrenar, aunque se guardan hasta 30 días. Si das un pulgar arriba o abajo, esa conversación sí puede usarse para entrenar.
- Sirve para: M3-AE4 S2, M3-AE4 S4, M3-AE4 H1

### F-H-05 · OpenAI — Memory in ChatGPT
- URL: https://help.openai.com/en/articles/8590148-memory-faq
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «anteayer» (≈ 22-10-2026)
- Respalda: con la memoria activa, ChatGPT puede recordar preferencias y datos de chats anteriores. Se revisa y cambia en Configuración > Personalización > Memoria. Apagar la memoria no borra los chats. Para borrar algo recordado hay que eliminar la memoria guardada y también el chat de origen.
- Sirve para: M1-AE2 H2, M3-AE4 S4

### F-H-06 · OpenAI — ChatGPT Supported Countries
- URL: https://help.openai.com/en/articles/7947663-chatgpt-supported-countries
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «anteayer» (≈ 22-10-2026)
- Respalda: Chile figura en la lista de países donde ChatGPT está disponible.
- Sirve para: M1-AE1 H2

### F-H-07 · OpenAI — Searching the web with ChatGPT
- URL: https://help.openai.com/en/articles/9237897-chatgpt-search
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «hace 4 días» (≈ 20-10-2026)
- Respalda: la búsqueda web está disponible en Free e incluso sin iniciar sesión, en web y en las apps. Las respuestas pueden traer citas que abren la fuente, y hay un panel de fuentes. La búsqueda descuenta del límite del plan.
- Sirve para: M3-AE1 S2, M3-AE1 H1, M1-AE4 H1

### F-H-08 · OpenAI — ¿Por qué obtengo respuestas generadas diferentes en Playground y la API?
- URL: https://help.openai.com/es-419/articles/6643200-why-am-i-getting-different-completions-on-playground-vs-the-api
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): actualizada «hace 23 horas» (≈ 23-10-2026)
- Respalda: con temperatura mayor que 0 las respuestas tienen algo de azar, y con temperatura 0 son consistentes y repetibles. Menciona temperature, top_p y max_tokens como parámetros del Playground y de la API (entornos para desarrolladores, no el chat).
- Sirve para: M1-AE3 S1, M1-AE3 S2

### F-H-09 · OpenAI — Tokenizer (herramienta pública)
- URL: https://platform.openai.com/tokenizer
- Tipo: documentación del proveedor (herramienta)
- Fecha de la página (si la tiene): sin fecha
- Respalda: herramienta web que divide un texto en tokens y cuenta tokens y caracteres. Tiene pestañas para modelos actuales y antiguos. Prueba hecha sin iniciar sesión: «Hola, busco trabajo como asistente administrativa en Santiago.» dio 12 tokens y 62 caracteres. También carga en vista de celular (emulación de 375 px).
- Sirve para: M1-AE1 S3, M1-AE3 S1

### F-H-10 · Google — Dónde se puede usar la aplicación web de Gemini
- URL: https://support.google.com/gemini/answer/13575153?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: la web de Gemini está disponible en más de 230 países y territorios (Chile incluido) y en más de 40 idiomas (español incluido). La app móvil puede tener una disponibilidad más limitada.
- Sirve para: M1-AE1 H2

### F-H-11 · Google — Qué necesitas para iniciar sesión en las aplicaciones de Gemini
- URL: https://support.google.com/gemini/answer/13278668?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: algunas funciones se pueden usar sin iniciar sesión en gemini.google.com. Para tener más funciones o guardar la actividad hay que entrar con una cuenta de Google personal, de trabajo o de centro educativo. Las cuentas de trabajo exigen ser mayor de 18 años. Family Link permite bloquear el acceso a menores de 13 años.
- Sirve para: M1-AE1 H2

### F-H-12 · Google — Límites de las aplicaciones de Gemini y cambios a planes superiores
- URL: https://support.google.com/gemini/answer/16275805?hl=es
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: el uso se mide según la computación consumida, se renueva cada 5 horas y tiene un tope semanal. Sin plan pagado se tienen los «límites estándar» y una ventana de contexto de 32.000 tokens (Plus: 128.000; Pro y Ultra: 1 millón). Edad mínima: 13 años o la que fije el país. La tabla de funciones marca como disponibles sin plan pagado: Canvas, Deep Research, generación de diapositivas, resúmenes de audio, cuestionarios, generación de imágenes (Nano Banana 2) y música. Deep Research y la generación de medios gastan más cuota. La página recomienda abrir una conversación nueva al cambiar de tema para ahorrar uso.
- Sirve para: M1-AE1 S3, M1-AE3 S3, M2-AE3 S3, M3-AE1 S1

### F-H-13 · Google — Subir y analizar archivos en las aplicaciones de Gemini
- URL: https://support.google.com/gemini/answer/14903178?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: para subir archivos hay que iniciar sesión. Se pueden subir hasta 10 archivos por petición, de hasta 100 MB cada uno (2 GB en el caso de video). En el plan sin pago, el video total llega a 5 minutos y el audio a 10 minutos. Los planes de pago suben estos límites.
- Sirve para: M3-AE1 S3, M2-AE1 H1

### F-H-14 · Google — Empezar a usar la aplicación móvil Gemini
- URL: https://support.google.com/gemini/answer/14554984?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: hay app Gemini para Android y para iOS. Acepta texto, voz, imágenes y cámara. Se usa con una cuenta de Google personal. La disponibilidad depende del idioma, el dispositivo, la cuenta y la ubicación.
- Sirve para: M1-AE1 H2

### F-H-15 · Google — Centro de Privacidad de las Aplicaciones de Gemini
- URL: https://support.google.com/gemini/answer/13594961?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha propia (los avisos enlazados dicen «Última actualización: 23-10-2026»)
- Respalda: con el ajuste de actividad encendido («Guardar actividad» o «Conservar la actividad», según la traducción), revisores humanos pueden leer conversaciones para mejorar los servicios de Google. Para evitarlo hay que apagar ese ajuste o usar conversaciones temporales. Aun así, Google guarda las conversaciones 72 horas para responder y por seguridad. «Resumen de datos memorizados» permite ver, editar y borrar lo que Gemini recuerda de ti.
- Sirve para: M3-AE4 S2, M3-AE4 S4, M3-AE4 H1

### F-H-16 · Google — Ver fuentes relacionadas de las aplicaciones de Gemini
- URL: https://support.google.com/gemini/answer/14143489?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: a veces Gemini muestra un botón «Fuentes» con enlaces a sitios web, archivos subidos o documentos vinculados. Hay versiones de la página para computador, Android e iPhone.
- Sirve para: M3-AE1 S2, M1-AE4 H1

### F-H-17 · Microsoft — Microsoft Copilot para personas: sus controles y opciones de privacidad
- URL: https://support.microsoft.com/es-es/privacy/microsoft-copilot/privacy-controls
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): se aplica a la nueva app Copilot, disponible desde el 18-08-2026
- Respalda: si inicias sesión con una cuenta Microsoft personal, controlas la memoria (ver y borrar recuerdos en Configuración > Personalización), el historial de chats, la búsqueda web (que se puede apagar) y los anuncios personalizados. Sin suscripción a Microsoft 365 puede aparecer publicidad.
- Sirve para: M3-AE4 S4, M1-AE1 H2

### F-H-18 · Microsoft — Microsoft Copilot para personas: su historial de actividad
- URL: https://support.microsoft.com/es-es/privacy/microsoft-copilot/activity-history
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): se aplica a la nueva app Copilot (desde el 18-08-2026)
- Respalda: en la nueva app Copilot las consultas, las respuestas y el contenido de los archivos no se usan para entrenar modelos básicos. Los comentarios opcionales pueden servir para mejorar Copilot, pero tampoco se usan para entrenar los modelos de base.
- Sirve para: M3-AE4 S2, M3-AE4 H1

### F-H-19 · Microsoft — Copilot para gente joven
- URL: https://support.microsoft.com/es-es/privacy/microsoft-copilot/young-people
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): se aplica a la nueva app Copilot (desde el 18-08-2026)
- Respalda: la edad mínima es 13 años, y algunos países piden más. Copilot puede equivocarse. Cuando entrega información, está diseñado para «incluir citas para que pueda comprobar de dónde procede la información».
- Sirve para: M3-AE1 S2, M1-AE4 S1

### F-H-20 · Microsoft — Compara todos los planes y precios de Microsoft 365 (Chile)
- URL: https://www.microsoft.com/es-cl/microsoft-365/buy/compare-all-microsoft-365-products
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha (precios vistos el 24-10-2026)
- Respalda: Copilot dentro de Word, Excel y PowerPoint (análisis en Excel, esquema y formato en PowerPoint) viene en los planes pagados. Microsoft 365 Personal cuesta CLP 84.990 al año o 8.490 al mes; Familia, CLP 104.990 al año; Premium, CLP 216.990 al año. Todos tienen un mes de prueba. Con una cuenta Microsoft gratuita solo hay uso limitado del chat de Copilot y de la creación de imágenes. «Investigación y análisis avanzados con agentes» es exclusivo de Premium.
- Sirve para: M2-AE3 S3, M2-AE4 H1

### F-H-21 · Anthropic — Planes y precios | Claude
- URL: https://claude.com/es/pricing
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha
- Respalda: Claude Free cuesta USD 0 y funciona en web, escritorio, iOS y Android. Incluye búsqueda web, memoria entre conversaciones, Artifacts, creación de archivos con ejecución de código, Claude Slides y Docs, chats de incógnito y hasta 5 proyectos. «Investigación» no está en Free (sí en Pro, desde USD 17 al mes con pago anual). El entrenamiento del modelo es una «exclusión voluntaria» en todos los planes. Los límites se reinician en ventanas de 5 horas.
- Sirve para: M1-AE1 H2, M2-AE3 S3, M3-AE1 S1

### F-H-22 · Anthropic — Supported Regions Policy
- URL: https://www.anthropic.com/supported-countries
- Tipo: términos
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: las apps y servicios de Anthropic solo se ofrecen en los países de la lista, y Chile está en ella.
- Sirve para: M1-AE1 H2

### F-H-23 · Anthropic — Consumer Terms of Service
- URL: https://www.anthropic.com/legal/consumer-terms
- Tipo: términos
- Fecha de la página (si la tiene): vigentes desde el 08-10-2025
- Respalda: se exige tener 18 años o la edad mínima local, la que sea mayor. Los materiales pueden usarse para entrenar modelos salvo que la persona lo desactive en su cuenta. Aunque lo desactive, se usan los comentarios enviados y el contenido marcado en revisiones de seguridad.
- Sirve para: M3-AE4 S2, M3-AE4 H1

### F-H-24 · Anthropic — ¿Cómo cambio mi configuración de privacidad de mejora del modelo?
- URL: https://privacy.claude.com/es/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 03-08-2026
- Respalda: en Free, Pro y Max se cambia en Configuración > Privacidad > «Ayudar a mejorar nuestros modelos de IA», igual en computador y celular. Al apagarlo, los chats nuevos y los ya guardados dejan de usarse en entrenamientos futuros. Lo que ya se usó en entrenamientos pasados no se retira.
- Sirve para: M3-AE4 S4, M3-AE4 H1

### F-H-25 · Anthropic — Upload files to Claude
- URL: https://support.claude.com/en/articles/8241126-uploading-files-to-claude
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 23-07-2026
- Respalda: Claude acepta PDF, DOCX, CSV, TXT y otros formatos, además de imágenes JPEG, PNG, GIF y WebP. Admite hasta 20 archivos por chat, de hasta 500 MB cada uno, y PDF de hasta 1000 páginas (con análisis visual hasta 100 páginas). XLSX requiere activar la ejecución de código.
- Sirve para: M3-AE1 S3

### F-H-26 · Meta — Meta AI es ahora multilingüe, más creativa e inteligente
- URL: https://about.fb.com/ltam/news/2024/07/meta-ai-es-ahora-multilingue-mas-creativa-e-inteligente/
- Tipo: prensa (sala de prensa del proveedor)
- Fecha de la página (si la tiene): 23-07-2024
- Respalda: anuncia que en Chile (y otros países de la región) se puede usar Meta AI en español desde Facebook, Instagram, Messenger, WhatsApp y meta.ai.
- Sirve para: M1-AE1 H2

### F-H-27 · Meta — Cómo usa Meta la información para los modelos y las funciones de IA generativa
- URL: https://www.facebook.com/privacy/genai/
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: Meta entrena con información pública de internet, con datos de terceros y con lo que se comparte en sus productos, incluidas las interacciones con sus funciones de IA. No usa los mensajes privados con amigos y familia salvo que alguien decida compartirlos con la IA en el chat.
- Sirve para: M3-AE4 S2, M3-AE4 H1

### F-H-28 · Meta — Condiciones del servicio de las IA de Meta
- URL: https://www.facebook.com/legal/ai-terms
- Tipo: términos
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: no se puede usar las IA de Meta con menos de 13 años o de la edad mínima local. Las condiciones cambian según la región: hay versiones propias para el Reino Unido, Brasil y la UE.
- Sirve para: M3-AE4 S4

### F-H-29 · Perplexity — Which Perplexity Subscription Plan is right for you?
- URL: https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: el plan Standard (gratis) trae búsquedas básicas prácticamente ilimitadas, muy pocas «Pro Search», subida de archivos básica y limitada, e historial de búsquedas. No incluye modelos avanzados ni generación de imágenes. Pro amplía Pro Search, la subida de archivos y el acceso a modelos.
- Sirve para: M3-AE1 S1, M3-AE1 S2

### F-H-30 · Perplexity — Data Collection at Perplexity
- URL: https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: en Free, Pro y Max el ajuste «AI data retention» viene activado, es decir, los datos se usan para entrenar. Se apaga en Configuración de la cuenta > Preferences. La exclusión rige solo desde esa fecha. Los datos de Enterprise nunca se usan para entrenar.
- Sirve para: M3-AE4 S4, M3-AE4 H1

### F-H-31 · Perplexity — Condiciones del servicio
- URL: https://www.perplexity.ai/es/hub/legal/terms-of-service
- Tipo: términos
- Fecha de la página (si la tiene): sin fecha visible en el extracto
- Respalda: edad mínima de 13 años. Los menores de edad necesitan que madre, padre o tutor acepte los términos.
- Sirve para: M3-AE4 S4

### F-H-32 · Perplexity — What is Perplexity?
- URL: https://www.perplexity.ai/help-center/en/articles/10352155-what-is-perplexity
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): modificada el 28-08-2026
- Respalda: es un buscador con IA que consulta la web en tiempo real. Cada respuesta trae citas y enlaces a las fuentes originales para verificarlas. Tiene modos Search, Pro Search, Deep Research y creación de archivos.
- Sirve para: M3-AE1 S1, M3-AE1 S2, M3-AE2 H1

### F-H-33 · Perplexity — Mobile Apps (colección del centro de ayuda)
- URL: https://www.perplexity.ai/help-center/en/collections/18799299-mobile-apps
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha
- Respalda: el centro de ayuda tiene artículos sobre las apps de Perplexity para iOS y Android (asistente de voz en iOS y asistente en Android). Eso confirma que hay app en ambos sistemas.
- Sirve para: M3-AE1 H1

### F-H-34 · DeepSeek — DeepSeek Terms of Use
- URL: https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html
- Tipo: términos
- Fecha de la página (si la tiene): 27-03-2026
- Respalda: el servicio pertenece a Hangzhou DeepSeek Artificial Intelligence Co., Ltd. Está pensado sobre todo para adultos: los menores de 18 años (o de la edad mínima local) deben usarlo con consentimiento de su tutor. Las conversaciones compartidas por enlace las puede ver cualquiera que tenga el enlace.
- Sirve para: M3-AE4 S2, M3-AE4 H1

### F-H-35 · DeepSeek — DeepSeek Privacy Policy
- URL: https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html
- Tipo: términos
- Fecha de la página (si la tiene): 10-02-2026
- Respalda: los datos personales se recogen, procesan y guardan en la República Popular China. Se usan, entre otros fines, para entrenar y mejorar los modelos. La política menciona el derecho a oponerse a ese uso para entrenamiento, pero no describe un botón dentro de la app.
- Sirve para: M3-AE4 S2, M3-AE4 S3, M3-AE4 H1

### F-H-36 · DeepSeek — Sitio oficial (DeepSeek | Into the Unknown)
- URL: https://www.deepseek.com/en
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha (menciona la versión V4.1-Flash-1017)
- Respalda: hay chat web («DeepSeek Web») y app (con código QR de descarga). Tiene modos DeepThink y Search.
- Sirve para: M1-AE1 H2

### F-H-37 · Google — Guía de inicio rápido de Google AI Studio
- URL: https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=es-419
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 30-07-2026
- Respalda: AI Studio sirve para probar modelos e instrucciones. Su panel «Configuración de ejecución» permite ajustar los parámetros del modelo y las instrucciones del sistema, y activar herramientas.
- Sirve para: M1-AE3 S1, M1-AE3 H1

### F-H-38 · Google — Estrategias de diseño de instrucciones (Prompt design strategies)
- URL: https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=es-419 (contrastada con la versión en inglés, ?hl=en)
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 13-10-2026
- Respalda: explica la cantidad máxima de tokens de salida (100 tokens equivalen a unas 60–80 palabras), la temperatura (más baja = más determinista; 0 = siempre la opción más probable), topK y topP (por defecto 0,95) y las secuencias de detención. Nota clave: los modelos Gemini 4 y Gemini 3.6 en adelante ignoran los valores personalizados de temperatura, top_p y top_k. En los Gemini 3 anteriores se recomienda dejarlos en sus valores por defecto.
- Sirve para: M1-AE3 S1, M1-AE3 S2, M1-AE3 S3, M1-AE1 S3

### F-H-39 · Google — Models | Gemini API
- URL: https://ai.google.dev/gemini-api/docs/models?hl=en
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 22-10-2026
- Respalda: los modelos vigentes son Gemini 4 Argon, Gemini 3.8 Flash, 3.6 Flash, 3.5 Flash-Lite, 3.1 Flash-Lite y otros. Los modelos 2.5 solo están abiertos a quienes ya los usaban, y para proyectos nuevos se recomiendan 3.5 Flash-Lite o 3.8 Flash.
- Sirve para: M1-AE3 H1

### F-H-40 · Google — Gemini API Additional Terms of Service
- URL: https://ai.google.dev/gemini-api/terms?hl=en
- Tipo: términos
- Fecha de la página (si la tiene): 28-04-2026
- Respalda: la API exige 18 años o más. El uso de AI Studio sin pago es un «servicio no pagado», y en ese caso Google usa lo que envías y lo que genera el modelo para mejorar sus productos y su tecnología de IA.
- Sirve para: M1-AE3 H1, M3-AE4 H1

### F-H-41 · Google — Regiones disponibles para Google AI Studio y la API de Gemini
- URL: https://ai.google.dev/gemini-api/docs/available-regions?hl=es-419
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 22-10-2026
- Respalda: Chile está en la lista de regiones donde se puede usar Google AI Studio.
- Sirve para: M1-AE3 H1

### F-H-42 · Google — Solucionar problemas de Google AI Studio
- URL: https://ai.google.dev/gemini-api/docs/troubleshoot-ai-studio?hl=es-419
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): 22-10-2026
- Respalda: hay que tener 18 años o más para usar Google AI Studio, con la fecha de nacimiento de la cuenta de Google configurada o verificada.
- Sirve para: M1-AE3 H1

### F-H-43 · GitHub — GitHub Models (documentación)
- URL: https://docs.github.com/en/github-models
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): retiro efectivo el 30-07-2026
- Respalda: GitHub Models se retiró por completo el 30-07-2026. El playground, el catálogo y la API ya no están disponibles. Se descarta como herramienta para practicar parámetros.
- Sirve para: M1-AE3 H1

### F-H-44 · Google — Cambiar a un plan superior de Gemini Notebook (ex NotebookLM)
- URL: https://support.google.com/notebooklm/answer/16213268?hl=es (redirige a support.google.com/gemininotebook)
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: el plan Standard es gratis con una cuenta de Gmail e incluye 100 cuadernos por usuario, 50 fuentes por cuaderno, 50 conversaciones al día, 3 resúmenes de audio y 3 de video al día, 10 informes al día y Deep Research 10 veces al mes. Tablas de datos, infografías y presentaciones tienen un uso limitado. Los límites pueden cambiar.
- Sirve para: M3-AE1 S1, M3-AE1 S3, M3-AE3 H1

### F-H-45 · Google — Información sobre Gemini Notebook
- URL: https://support.google.com/gemininotebook/answer/16164461?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: es un asistente de investigación que trabaja con PDF, sitios web, videos de YouTube, audio y documentos de Google. Responde a partir de tus fuentes y con citas. Requiere la edad de consentimiento del país y verificar la edad en la cuenta de Google. Chile está en la lista de países. Con cuenta personal, tus datos no se usan para entrenar salvo que envíes comentarios.
- Sirve para: M3-AE1 S3, M3-AE1 H1, M3-AE4 S4

### F-H-46 · Google — Empezar a usar la aplicación móvil Gemini Notebook
- URL: https://support.google.com/gemininotebook/answer/16296687?hl=es
- Tipo: documentación del proveedor
- Fecha de la página (si la tiene): sin fecha visible
- Respalda: hay app para Android 10 o superior y para iPhone y iPad. Permite preguntar a las fuentes, escuchar resúmenes de audio sin conexión y compartir sitios, PDF o videos hacia la app. La lista de países de la app incluye Chile, aunque el lanzamiento es gradual.
- Sirve para: M3-AE1 H1

### F-H-47 · Gamma — Planes y precios
- URL: https://gamma.app/es/pricing
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha
- Respalda: el plan Free no pide tarjeta. Entrega 400 créditos al registrarse que no se recargan, hasta 10 diapositivas por prompt, importación de PDF y PPTX, y exportación a PDF, PPTX, PNG y Google Slides. Los créditos que gasta cada acción varían. Plus cuesta USD 9 al mes (1.000 créditos y sin marca de Gamma).
- Sirve para: M2-AE3 S3, M2-AE3 H1

### F-H-48 · Canva — Precios de Canva (Chile)
- URL: https://www.canva.com/es_419/precios/
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha (precios en CLP vistos el 24-10-2026)
- Respalda: Canva Gratis (CLP 0) da acceso limitado a la IA: hasta 20 usos compartidos entre las herramientas de IA estándar y prémium, y nada de IA «ultra», como el diseño conversacional. Generar diseños con Canva IA cuenta como IA prémium. Pro cuesta CLP 7.900 al mes.
- Sirve para: M2-AE3 S3

### F-H-49 · Google — Planes Google AI (Google One, Chile)
- URL: https://one.google.com/intl/es-419_cl/about/google-ai-plans/
- Tipo: página de planes
- Fecha de la página (si la tiene): sin fecha (precios en CLP vistos el 24-10-2026)
- Respalda: Google AI Plus (CLP 4.690 al mes) suma Gemini en Gmail. Google AI Pro (CLP 21.700 al mes) suma Gemini en Documentos y Hojas de cálculo. Por lo tanto, Gemini dentro de Sheets requiere pago, y no se encontró una opción gratis para cuentas personales.
- Sirve para: M2-AE4 H1, M2-AE3 S3

## Tabla de herramientas
| Herramienta | Uso en el curso (AE) | Plan gratuito | Celular | Cuenta / edad | Función clave verificada | Fuente |
|---|---|---|---|---|---|---|
| Gemini (app y web) | Asistente principal M1–M3; M2-AE3 (diapositivas); M3-AE1 (Deep Research) | Sí. Límites estándar renovados cada 5 h con tope semanal; contexto de 32.000 tokens | App Android e iOS; web | Algunas funciones sin cuenta; con cuenta Google, 13+ (o la edad del país) | Deep Research, generación de diapositivas, botón «Fuentes» con enlaces, hasta 10 archivos por petición, chats temporales, «Resumen de datos memorizados» | F-H-10 a F-H-16 |
| ChatGPT | Alternativa principal M1–M3; M1-AE1 S3 (contexto) | Sí. Texto ilimitado; archivos, imágenes, voz e investigación a fondo limitados; contexto de 27 mil tokens (Instant) | App Android e iOS; web | Se puede usar sin cuenta (búsqueda incluida); 13+, menores de 18 con permiso | Búsqueda con citas, memoria, proyectos, chat temporal; entrenamiento desactivable | F-H-01 a F-H-07 |
| Microsoft Copilot (app) | Alternativa M1–M3 | Sí (versión gratuita; límites no detallados) | App móvil y web | Cuenta Microsoft para memoria e historial; 13+ | Citas a las fuentes; búsqueda web apagable; la app nueva no entrena modelos básicos con tus chats | F-H-17 a F-H-20 |
| Claude | Alternativa para redacción (M2) | Sí. Búsqueda web, memoria, archivos, Slides y Docs; sin «Investigación» | App iOS y Android; web | 18+ | Subida de hasta 20 archivos por chat; entrenamiento desactivable | F-H-21 a F-H-25 |
| Meta AI | Solo como ejemplo (WhatsApp) | Sí (sin detalle de límites) | Dentro de WhatsApp, Instagram, Messenger; meta.ai | Cuenta Meta; 13+ | Disponible en Chile en español desde 2024; entrena con las interacciones con la IA | F-H-26 a F-H-28 |
| Perplexity | M3-AE1 (buscador con citas) | Sí. Búsquedas básicas casi ilimitadas; Pro Search muy limitado | App iOS y Android; web | 13+ (menores con tutor) | Citas y enlaces en cada respuesta; entrenamiento desactivable («AI data retention») | F-H-29 a F-H-33 |
| DeepSeek | No recomendado para datos laborales; caso para M3-AE4 | No verificado | Web y app | Menores de 18 con tutor | Datos almacenados en China; los usa para entrenar | F-H-34 a F-H-36 |
| Google AI Studio | M1-AE3 (temperatura, tokens de salida, topP) | Sí (servicio no pagado: los datos se usan para mejorar productos) | Web; uso en celular no verificado | Cuenta Google; 18+; Chile incluido | Panel «Configuración de ejecución». Gemini 4 y 3.6+ ignoran temperatura y topP | F-H-37 a F-H-42 |
| OpenAI Tokenizer | M1-AE1 S3; M1-AE3 S1 | Gratis | Web (se ve bien en vista de celular) | Sin cuenta | Cuenta tokens y caracteres de un texto | F-H-09 |
| Gemini Notebook (ex NotebookLM) | M3-AE1 (asistente sobre fuentes propias); M3-AE3 | Sí. 100 cuadernos, 50 fuentes por cuaderno, 50 chats al día, Deep Research 10 al mes | App Android 10+ e iOS (gradual; Chile en lista); web | Cuenta Google; edad de consentimiento | Respuestas basadas en tus fuentes, con citas; cuenta personal no entrena salvo comentarios | F-H-44 a F-H-46 |
| Gamma | M2-AE3 | Sí. 400 créditos únicos; hasta 10 diapositivas por prompt | Web (app no verificada) | Cuenta; sin tarjeta | Exporta a PPTX, PDF y Google Slides | F-H-47 |
| Canva | M2-AE3 (alternativa) | Sí. Hasta 20 usos de IA compartidos | No verificado en la página | Cuenta | Generar diseños con IA (cuenta como IA prémium) | F-H-48 |
| Gemini en Google Sheets, Docs y Slides | M2-AE3, M2-AE4 (solo mención) | No. Requiere Google AI Pro (CLP 21.700 al mes) | — | — | Gemini en Documentos y Hojas de cálculo | F-H-49 |
| Copilot en Excel y PowerPoint | M2-AE3, M2-AE4 (solo mención) | No. Microsoft 365 Personal desde CLP 8.490 al mes | — | Cuenta Microsoft | Análisis en Excel; esquema de presentación en PowerPoint | F-H-20 |
| Chat + Google Sheets (gratis) | M2-AE4 (práctica principal) | Sí | Sí | Cuenta Google | Pedir la fórmula en el chat, pegarla en Sheets y comprobarla con datos de prueba | F-H-01, F-H-12 |

## Recomendación

**Asistente principal: Gemini (app gratuita).** Conviene para todo el curso por cinco razones:
- usa la cuenta de Google que la mayoría ya tiene, y Chile y el español están confirmados;
- tiene app en Android e iOS;
- en el plan sin pago incluye Deep Research, generación de diapositivas, fuentes con enlaces y subida de archivos (F-H-10 a F-H-16);
- la misma cuenta abre Gemini Notebook (M3-AE1) y Google AI Studio (M1-AE3), así que hay un solo inicio de sesión para todo;
- su límite de contexto (32.000 tokens) es un buen ejemplo concreto para M1-AE1 S3.

Antes de usarlo con información laboral, hay que enseñar a apagar «Guardar actividad» o a usar chats temporales (F-H-15, M3-AE4).

**Alternativas (siempre gratis y en el celular):**
- **ChatGPT:** es la de menor barrera, porque funciona sin cuenta y con búsqueda con citas (F-H-04, F-H-07). Hay que mostrar cómo apagar «Improve the model for everyone».
- **Microsoft Copilot:** la app nueva no entrena modelos básicos con los chats (F-H-18) y entrega citas (F-H-19).
- **Claude:** solo para mayores de 18 y sin «Investigación» en el plan gratis (F-H-21, F-H-23).

**M3-AE1** (usar al menos 2 herramientas): Perplexity como buscador con citas (F-H-29, F-H-32) más Gemini Notebook como asistente sobre fuentes propias (F-H-44, F-H-45). Deep Research de Gemini o la «investigación a fondo» limitada de ChatGPT quedan como tercera opción.

**M2-AE3:** Gamma Free cubre 6 láminas (hasta 10 por prompt, 400 créditos únicos, exporta a PPTX o Google Slides; F-H-47), y la generación de diapositivas de Gemini es gratis (F-H-12). Canva Gratis solo alcanza para pocos usos de IA (F-H-48).

**M2-AE4:** Gemini en Sheets y Copilot en Excel son de pago (F-H-49, F-H-20). La práctica realista es pedir la fórmula al chat, pegarla en Google Sheets gratis y comprobarla con datos de prueba. Encaja con S2, S3 y C2 del AE.

**Práctica de parámetros de M1-AE3, gratis.** Ojo, cambia el diseño:
1. Las apps de chat gratuitas no muestran controles de temperatura ni de top-p. El ajuste solo existe en entornos de desarrollo (Playground y API; F-H-08) y en Google AI Studio (F-H-37).
2. Google AI Studio es gratis y está disponible en Chile, pero exige 18 años o más (F-H-41, F-H-42). Además, **Gemini 4 y Gemini 3.6 en adelante ignoran la temperatura, topP y topK** (F-H-38). Para que el cambio de temperatura se note hay que elegir un modelo anterior, como Gemini 3.5 Flash-Lite o 3.1 Flash-Lite (F-H-39). Los modelos 2.5 ya no se ofrecen a usuarios nuevos. La «cantidad máxima de tokens de salida» sí sirve para practicar longitud. AI Studio es un servicio no pagado y usa los datos para mejorar productos (F-H-40), así que la práctica debe hacerse con datos ficticios, como los de Camila y Andrés.
3. Plan B en el celular, sin AI Studio (para quien no tenga 18 o use una app): trabajar los tres parámetros del AE con lo que la app sí permite.
   - **Longitud:** pedir un límite de palabras y comparar.
   - **Iteración:** usar «Reintentar» o regenerar la respuesta y comparar.
   - **Creatividad frente a precisión:** contrastar la misma consigna con instrucciones de estilo «da 3 opciones creativas» y «responde solo con datos verificables».
   - Explicar la temperatura como concepto (F-H-08, F-H-38) y mirar tokens con el OpenAI Tokenizer, que no pide cuenta (F-H-09).

   Así se cumplen C1 (elegir y justificar un parámetro) y C2 (comparar salidas) sin pago. Conviene decir con claridad que en los modelos más nuevos la temperatura la fija el proveedor; eso también sirve como contenido para S2 y S3.
4. No usar GitHub Models: se retiró el 30-07-2026 (F-H-43).

## Alertas
- **Las apps de chat no tienen ajuste de temperatura:** ningún proveedor lo dice en una página oficial. Se deduce porque no aparece en las páginas de planes y funciones de ChatGPT, Gemini, Claude ni Copilot. Las fuentes que lo afirman son foros de la comunidad de OpenAI, que no se usaron como fuente.
- **AI Studio no se pudo revisar por dentro** (pide iniciar sesión): no se verificó qué controles muestra el panel para cada modelo, ni si funciona bien en el navegador del celular. Hay que hacer una prueba piloto antes de publicar M1-AE3. Además, la nota sobre temperatura ignorada puede extenderse a más modelos, y Google anuncia errores 400 en una versión futura.
- **Nombres de modelos de ChatGPT inconsistentes:** la FAQ dice que Free usa GPT-5.6 Luna (F-H-01) y la tabla de precios dice GPT-6 Luna (F-H-02). En el contenido no se debe nombrar el modelo. Los límites del plan Free no tienen números públicos («limitado»). No se verificó si hay anuncios en Chile.
- **ChatGPT y la ofimática:** la tabla marca como «limitadas» en Free las extensiones de Excel, Word, PowerPoint y Google Sheets (F-H-02). No se verificó cómo se instalan ni qué permiten.
- **Gemini:** la web en Chile está verificada, pero la disponibilidad de la app móvil en Chile no aparece en una lista explícita (F-H-14). El nombre del ajuste de privacidad varía en la traducción («Guardar actividad» o «Conservar la actividad»). Antes de redactar los pasos hay que comprobarlo en la app. No hay cifras exactas para los «límites estándar».
- **NotebookLM ahora se llama «Gemini Notebook»:** así aparece en notebook.google y en su centro de ayuda, aunque el centro sigue titulado «Ayuda de NotebookLM». No se encontró la fecha ni el anuncio del cambio. Los textos del curso deben usar el nombre nuevo, mencionando el anterior.
- **Copilot:** los artículos verificados son de la app nueva (desde el 18-08-2026). La versión anterior tenía un interruptor para excluirse del entrenamiento y otras reglas, así que quien no haya actualizado puede ver algo distinto. No se verificaron los límites numéricos del plan gratis, si se puede usar sin cuenta ni una lista de países con Chile (se deduce solo por la tienda es-cl).
- **Claude:** no se verificaron límites concretos de Free ni si la subida de archivos tiene topes distintos en Free. Como exige 18 años o más, no sirve para participantes menores.
- **Meta AI:** que esté disponible en Chile viene de un comunicado de 2024 (F-H-26), sin confirmación vigente en un centro de ayuda. No se encontró una forma de excluirse del entrenamiento para usuarios fuera de la UE, Reino Unido y Brasil. No se recomienda para información laboral.
- **Perplexity:** no se verificó si se puede usar sin cuenta, cuántas Pro Search da el plan gratis ni una lista de países con Chile.
- **DeepSeek:** no se verificó en una página oficial que el chat sea gratis, ni el procedimiento para excluirse del entrenamiento (solo se menciona como derecho). Guarda los datos en China, lo que es pertinente para M3-AE4 y la Ley 19.628. No se recomienda.
- **Otro asistente relevante en Chile** (por ejemplo, Le Chat de Mistral o Grok): no se investigó en esta parte.
- **Gamma y Canva:** no se verificó cuántos créditos gasta una presentación de 6 láminas en Gamma, ni el uso en el celular (Gamma tiene un enlace «Descarga la app» que no se abrió; la página de Canva no habla del celular). Los planes de estas herramientas cambian seguido.
- **Microsoft 365:** la tabla dice «uso limitado con una cuenta Microsoft gratuita» sin decir en qué apps. No se verificó si Excel o PowerPoint en la web traen algo de Copilot gratis.
- **Google Slides:** la página de Google AI Pro nombra «Documentos y Hojas de cálculo» y no menciona Presentaciones (F-H-49).
- **Precios en CLP y USD:** son del 24-10-2026, sin impuestos en el caso de USD. Todos los límites de planes gratuitos cambian rápido, así que hay que revisarlos antes de cada versión del curso.
- **Fechas aproximadas:** los centros de ayuda de OpenAI muestran fechas relativas («hace 4 días», «ayer»). Se convirtieron a fecha aproximada respecto del 24-10-2026.
