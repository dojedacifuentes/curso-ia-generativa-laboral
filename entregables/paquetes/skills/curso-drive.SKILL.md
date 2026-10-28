---
name: curso-drive
description: Sube, reemplaza y ordena en Google Drive los recursos del curso «IA generativa para entornos laborales» (Docs, PDF, quiz SCORM, infografías, casos, investigación, proceso, skills, proyecto fuente), verifica que cada Doc quedó idéntico a su HTML, mueve las versiones viejas sin borrar y deja el acceso público de lectura. Úsala cuando el usuario pida subir o actualizar algo del curso en Drive, «reemplazar el Doc/PDF», ordenar la carpeta, compartirla o dar permisos públicos.
---

# Subir y ordenar el curso en Google Drive

Carpeta raíz: **«Curso IA generativa para entornos laborales · Recursos»** (`14eGjbx_bwAkahiA8QsRMsfcqnCf_U7ue`, Mi unidad).
Todos los ids están en `data/drive.json`; actualízalo después de cada subida.

| Carpeta | Contenido | Origen local |
|---|---|---|
| LEEME · qué hay en esta carpeta | Doc con el mapa de carpetas y lo que falta revisar antes de publicar | `entregables/documentos/docs/LEEME.html` |
| 0 Planilla de origen | Copia en Google Sheets y .xlsx de la planilla (ver «Planilla de origen») | `data/planilla/*.xlsx` |
| 1 Contenidos base · Google Docs | 22 Docs, uno por AE | `entregables/docs/<AE>.html` |
| 2 Contenidos base · PDF | 22 PDF + `Contenidos-completos.pdf` | `entregables/pdf/` |
| 3 Quiz juego SCORM | `SCORM 1.2`, `HTML (juego sin LMS)`, `GIFT` | `entregables/quiz/<AE>/` |
| 4 Infografías | 6 PNG + 6 HTML | `entregables/infografias/` |
| 5 Casos de aplicación | `Docs` (11 + resumen) y `PDF` (11) | `entregables/casos/{docs,pdf}` |
| 6 Investigación y fuentes | PDF por módulo y de herramientas; «Fichas de verificación de casos» | `entregables/documentos/investigacion/pdf` |
| 7 Proceso y control de calidad | `Docs`, `PDF` y la auditoría interactiva (HTML) | `entregables/documentos/proceso/{docs,pdf}` |
| 8 Skills de Claude | Las skills de `.claude/skills/` (zip y cada SKILL.md) | `entregables/paquetes/` |
| 9 Proyecto fuente | Zip del proyecto sin `entregables/`, con la planilla (`git archive`, ver abajo) | `entregables/paquetes/` |

Cada carpeta con reemplazos tiene su **«Versiones anteriores (24-10)»**.

## Regla de oro: nunca borrar

Lo reemplazado se **mueve** a «Versiones anteriores» con `update_file` (`parentId`). No se usa `trash_file`.
Mueve el archivo viejo **antes** de subir el nuevo, para que no queden dos con el mismo nombre en la carpeta.

## Google Docs (contenido convertido)

1. Compila: `node scripts/compilar-contenidos.mjs` (AE y casos) o `--solo-documentos` (proceso, investigación y LEEME).
   Los HTML «modo Docs» llevan todo el estilo en línea, porque Docs ignora las clases.
2. Crea el Doc con `create_file`: `parentId` de la carpeta, `contentMimeType: text/html` y en `textContent` el HTML **completo y sin cambios**.
   Como los HTML pesan entre 20 y 60 KB, conviene delegarlo a subagentes (modelo sonnet, dos archivos por agente) con un prompt
   que exija copiar el contenido exacto y responder solo con el id.
3. **Verifica cada Doc**, porque el subagente transcribe y puede equivocarse (una vez dijo haber cambiado una palabra que no cambió):
   - abre un Doc cualquiera en Chrome y ejecuta `comparar-doc.js` (de esta carpeta);
   - pasa el HTML local por `file_upload` al input «cc-cmp comparar»;
   - ejecuta `await ccComparar('<id>')`. Tiene que dar `D: 0`. Si no, rehaz ese Doc.
   No sirve `export?format=txt`: redirige a otro dominio y el navegador lo bloquea. `mobilebasic` sí funciona.
4. No hay herramienta para editar el contenido de un Doc: para cambiarlo, crea uno nuevo y mueve el viejo.
5. **Signos `$`** (28-10): al convertir HTML en Doc, Drive toma el texto entre dos `$` como ecuación y lo deja como imagen
   (pasa con `&#36;`, `<span>`, `<code>`, espacios invisibles y tablas). En los HTML con referencias de Excel como `$C$2`
   (M2-AE4), usa el signo de ancho completo `＄` (U+FF04) antes de `create_file`; el PDF conserva el `$` normal. Claude in
   Chrome no tiene acceso al editor de Docs, así que el cambio de vuelta a `$` («Buscar y reemplazar») lo tiene que hacer una
   persona. `comparar-doc.js` lo detecta: el Doc queda con menos palabras que el HTML.

## PDF, zip, PNG, HTML y Markdown (archivos tal cual)

1. Abre la carpeta destino en Claude in Chrome: `https://drive.google.com/drive/folders/<id>`.
2. Ejecuta `subir-archivos.js` y busca el input «cc-up subir archivos» con `find`.
3. Usa `file_upload` con las rutas locales. Cada llamada debe pesar menos de 10 MB en total: los archivos grandes van solos.
4. Comprueba con `search_files` (`parentId = '<id>' and createdTime > '<hora UTC>'`) que estén todos y con el mismo tamaño
   que en disco.

Trampas:
- `search_files` devuelve pocas filas por página: sigue `nextPageToken` o filtra por `createdTime`.
- Tras `navigate`, la primera captura de pantalla a veces falla con «domain changed»: reintenta.
- Drive no convierte las subidas por navegador en Docs. Para que algo quede como Doc, usa `create_file`.

## Acceso público (solo con pedido explícito del usuario en el chat)

`share_file` solo comparte con correos, así que el acceso «Cualquier persona con el enlace» se configura en la interfaz:
1. En Chrome, abre la carpeta raíz y entra a «Compartir» (menú de la carpeta, o el botón «Compartir» de la barra).
2. En «Acceso general», cambia «Restringido» por **«Cualquier persona que tenga el vínculo»**, con rol **Lector**, y luego «Listo».
3. Las subcarpetas y los archivos heredan el permiso. Compruébalo con `get_file_permissions` de un archivo interior:
   tiene que aparecer `anyone` con `reader`.
4. Nunca dejes acceso de editor público.

## Planilla de origen (carpeta 0)

El usuario pidió (25-10) que la planilla vaya en todos lados. La original es de Natalia (natalia@hackea.pro) y ya está compartida
«cualquier persona con el enlace · Lector»; no se toca. En «0 Planilla de origen» van una copia en Google Sheets (`copy_file`,
título «… · copia DD-MM-AAAA») y el .xlsx (`curl -L …/export?format=xlsx`, porque es pública por enlace). Antes de reemplazarlas,
comprueba con `xlsx2tsv.mjs` que las 10 hojas sean iguales a `data/planilla/`; si no, reimporta primero. El zip del proyecto
fuente se arma desde el último commit, con la planilla y sin lo generado:

```bash
git archive --prefix=curso-ia-generativa-laboral/ -o entregables/paquetes/curso-ia-generativa-laboral-proyecto-fuente.zip HEAD -- . ":(exclude)entregables"
```

## Al terminar

- Actualiza los ids en `data/drive.json` (`docs_por_ae`, `docs_por_caso`, `pdf`, carpetas nuevas).
- Vuelve a tomar la foto `data/drive-inventario.json`: recorre la raíz y sus subcarpetas con `search_files` (`parentId = '<id>'`).
  El formato está en el propio archivo.
- Corre `node scripts/auditar.mjs`: la capa C8 compara Drive con lo local.
- Si cambió el mapa de carpetas, sube un LEEME nuevo y mueve el viejo a «Versiones anteriores» de Docs.

## Límites

- No escribas contraseñas ni subas credenciales.
- No cambies permisos sin pedido explícito del usuario, y nunca a editor público.
- No toques archivos fuera de la carpeta del curso.
- Este proyecto no va al repo público `naty.proyecto01`.
