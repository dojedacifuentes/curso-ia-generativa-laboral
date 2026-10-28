# Curso IA generativa para entornos laborales · Recursos

Recursos generados el 24-10-2026 a partir de la planilla «Estructura_inicial_contenido_IA_generativa» (6 módulos, 22 aprendizajes
esperados). La fuente única es la carpeta local **curso-ia-generativa-laboral** del PC 1: si algo cambia, se corrige ahí y se vuelve
a generar. El proceso completo está en «7 Proceso y control de calidad › Proceso de producción».

**Acceso:** cualquier persona con el enlace puede ver y descargar estos archivos. Nadie fuera del equipo puede editarlos.

## 0 Planilla de origen

La planilla «Estructura_inicial_contenido_IA_generativa», de la que sale todo el curso: módulos, competencias, aprendizajes
esperados, saberes y criterios, los 101 recursos con sus horas, los casos y el proyecto, la evaluación, el cumplimiento de la
RE 2.484 y los pendientes. Hay dos copias del 28-10-2026, iguales a la original:
- **la hoja de cálculo de Google**, para leerla o filtrarla;
- **el archivo .xlsx**, para descargarla.

La original es de Natalia y sigue siendo la que manda: si cambia, se vuelve a importar al proyecto y se reemplazan estas copias.

## 1 Contenidos base · Google Docs

Un Doc por aprendizaje esperado (22). Cada pantalla indica qué contenido de la planilla cubre (S/H/A/C), las fuentes que la
respaldan (detalle en la carpeta 6) y el bloque de Rise sugerido. Es la base para que Natalia arme los Rise. Desde el 28-10 el
curso es solo para personas que trabajan y los contenidos no nombran los casos (van solo en la carpeta 5); criterios en el documento
«14 · Criterios de corrección del 28-10» de la carpeta 7. En M2-AE4 las fórmulas de Excel llevan el signo ＄ (ancho completo)
porque Google Docs convierte en ecuación el texto que queda entre dos signos de peso; el PDF trae el signo normal. Las versiones reemplazadas están en
«Versiones anteriores (24-10)» y en «Versiones anteriores (28-10) · antes del cambio de audiencia», en la raíz.

## 2 Contenidos base · PDF

Los mismos 22 contenidos en PDF, más «Contenidos-completos.pdf» con todo el curso.

## 3 Quiz juego SCORM

- **SCORM 1.2 (subir al LMS):** 22 paquetes, uno por aprendizaje esperado, con 8 preguntas cada uno. En Moodle se suben en Agregar
  actividad → Paquete SCORM. Registran el mejor puntaje (0 a 100) y la finalización. Si la persona falla, el juego le indica qué
  pantalla del Rise repasar.
- **HTML (juego sin LMS):** el mismo juego en un solo archivo, que funciona sin internet. Sirve para revisarlo o probarlo.
- **GIFT (banco de preguntas Moodle):** las mismas 176 preguntas, para importarlas al banco de preguntas (Importar → GIFT).

## 4 Infografías

Una por módulo (R017, R034, R051, R069, R084 y R100 de la planilla), en PNG de 1080 px de ancho y en HTML. Desde el 28-10 cada una tiene además una versión **interactiva**
(`M<n>-Infografia-interactiva.html`): animada, con tarjetas que se abren, recorrido guiado paso a paso e idea clave que se
desbloquea al explorarla. Es un solo archivo que funciona sin internet y en el celular. También va como paquete **SCORM 1.2**
(`M<n>-Infografia-SCORM.zip`), que se sube a Moodle en Agregar actividad → Paquete SCORM: queda «completado» cuando la persona
explora todas las partes, el puntaje es el porcentaje explorado y al volver encuentra marcado lo que ya vio. Falta probarlo en el LMS. Usan una paleta neutra:
la marca del cliente se aplica después.

## 5 Casos de aplicación

Los 11 casos con empresas reales de la hoja «Casos y proyecto», en Docs y PDF. Se verificaron en fuente primaria: sentencias,
resoluciones, documentos de la empresa y registros oficiales. Cada caso es una actividad de 1,5 h con estas partes:
- contexto;
- qué pasó;
- análisis guiado: 6 preguntas que se apoyan en los temas del módulo;
- aplicación al proyecto;
- autocorrección;
- pregunta para el foro.

«00 · Resumen de verificación» muestra el estado de cada caso. El caso Samsung (M3-C2) se descartó porque no tenía fuente primaria y
se reemplazó por el de la Municipalidad de Eindhoven (2025), que trabaja el mismo AE.

## 6 Investigación y fuentes

Las fuentes que respaldan el contenido, en PDF: una por módulo (M1 a M6) y dos de herramientas. Cada fuente lleva un id (F-…), el
organismo, la fecha, la URL y lo que respalda. Todas se abrieron y se leyeron antes de citarlas. «Fichas de verificación de casos»
tiene, por caso, las fuentes primarias, los hechos verificados y lo que no se puede afirmar.

## 7 Proceso y control de calidad

En Docs y PDF:
- **Proceso de producción:** cómo se hizo todo, etapa por etapa.
- **Playbook** y **Workflow**.
- **Formatos:** contenido base, quiz, infografía y caso.
- **Brief de redacción** y **Personajes**.
- **Correspondencia con la planilla:** estructural y de fondo.
- **Auditoría:** 10 capas y 83 chequeos.
- **Pendientes de verificación.**

La correspondencia estructural y la auditoría son reportes que genera un script: van solo en PDF, y la auditoría también en versión
interactiva (`AUDITORIA.html`).

## 8 Skills de Claude

Los 7 manuales que usa Claude para mantener el curso:
- **curso-produccion:** el mapa general;
- **curso-contenido-base:** investigación y redacción de cada AE;
- **curso-quiz-infografias:** quiz e infografías;
- **curso-casos-reales:** verificación de los casos con empresas reales;
- **curso-drive:** subida y orden en esta carpeta;
- **curso-auditoria:** revisión contra la planilla;
- **curso-video-modulo:** videos de bienvenida y resumen de cada módulo.

Están en un zip y también como archivos sueltos. Para usarlas, se copian a `.claude/skills/` del proyecto.

## 9 Proyecto fuente

Un zip del proyecto, sin la carpeta de lo ya generado. Trae la investigación, el contenido base en Markdown, las fuentes de los quiz,
las infografías y los casos, los scripts (Node 18 o más) y las skills. También trae la planilla de origen: el .xlsx y su
conversión en datos (`data/planilla/` y `data/curso.json`). Sirve para regenerar cualquier recurso o reutilizar el método en otro
curso. El mismo proyecto está en GitHub (github.com/dojedacifuentes/curso-ia-generativa-laboral) y su panel, con la metodología y la
trazabilidad, en curso-ia-generativa-laboral.vercel.app.

## Antes de publicar

- Revisión humana de los textos.
- Probar a mano, con una cuenta gratuita en Chile, las herramientas marcadas como pendientes: AI Studio, acciones programadas de
  Gemini, Make, Google Flow y funciones de Canva.
- Revisar el estado del proyecto que posterga la Ley 21.719 (boletín 18623-07).
- Revisar los casos en evolución a la fecha de publicación:
  - Getty v. Stability (M4-C3): la apelación en el Reino Unido y el juicio en EE. UU.;
  - Deloitte (M3-C1): la corrección del 03-02-2026;
  - Eindhoven (M3-C2): las páginas que hoy se leen desde su copia archivada.
- Actualizar en la planilla los títulos de M1-C2 (sugerido), M3-C1 y M3-C2.
