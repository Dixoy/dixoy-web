# Jonnathan Sánchez — portafolio audiovisual (borrador)

Ruta solicitada: `https://dixoy.co/jonnaSanchez`.

Se reutiliza la galería de `/portafolio/filmaker` sin duplicar sus componentes o afectar el catálogo de Julián Bonilla. Los once registros de video están en `app/jonnaSanchez/videos.json`.

## Estado
- [x] Nueva página independiente y SEO específico
- [x] Catálogo de 11 proyectos, con proporciones de cada video
- [x] Misma galería: mosaico responsivo, vistas previas y visor con audio
- [x] Etiqueta propia en el visor de video
- [ ] Subir los 33 archivos (`full`, `previews` y `posters`) a Cloudflare R2
- [ ] Verificar las 33 URLs públicas y la vista previa del sitio
- [ ] Agregar los datos reales de contacto y redes de Jonnathan (sin inventarlos)
- [ ] Aprobar nombre, texto de presentación, orden de proyectos y contenidos
- [ ] Habilitar `metadata.robots.index` solo después de la validación integral
- [ ] Hacer merge/publicar únicamente con autorización

## Medios

La variable `FILM_MEDIA_ORIGIN` o `public/media/portfolio/filmaker/media-origin.json` indican el dominio público de medios, actualmente `https://portafolio-media.dixoy.co`.

Cada entrada del JSON usa estas rutas independientes:

- `/media/portfolio/jonna-sanchez/full/jonna-01.mp4` (hasta `jonna-11.mp4`)
- `/media/portfolio/jonna-sanchez/previews/jonna-01.mp4` (hasta `jonna-11.mp4`)
- `/media/portfolio/jonna-sanchez/posters/jonna-01.webp` (hasta `jonna-11.webp`)

**No** incluir los originales MP4 grandes en GitHub, ni subir videos a Cloudflare Pages (límite de archivo). Para subirlos al bucket, mantener exactamente los prefijos anteriores y comprobar acceso público por HTTPS.

## Publicación

Este PR es un borrador. La ruta no está lista para producción mientras los videos no estén disponibles en R2 y falten los datos de contacto. Mantener `main` intacta hasta aprobar.
