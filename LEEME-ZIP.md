# Proyecto fuente · IA generativa para entornos laborales

Este zip trae el proyecto completo menos lo ya generado (`entregables/`):
- la planilla de origen: el .xlsx en `data/planilla/`, su conversión en un TSV por hoja y `data/curso.json`;
- la investigación, el contenido base, las fuentes de los quiz, las infografías y los casos;
- los scripts (Node 18 o más) y el panel (`panel/`);
- las skills de Claude (`.claude/skills/`).

Para regenerar el curso:
1. si la planilla cambió, descárgala como .xlsx y conviértela con `node scripts/xlsx2tsv.mjs` en `data/planilla/`;
2. corre `node scripts/importar-planilla.mjs`, que crea `data/curso.json`;
3. sigue `docs/PROCESO.md`.

El mismo proyecto está en https://github.com/dojedacifuentes/curso-ia-generativa-laboral y su panel, con la metodología y la
trazabilidad, en https://curso-ia-generativa-laboral.vercel.app.
