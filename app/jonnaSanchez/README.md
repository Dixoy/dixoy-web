# Jonnathan Sánchez — portafolio audiovisual

Ruta solicitada: `https://dixoy.co/jonnaSanchez`.

Se reutiliza la galería de `/portafolio/filmaker` sin duplicar sus componentes o afectar el catálogo de Julián Bonilla. Los once registros de video están en `app/jonnaSanchez/videos.json`.

## Estado
- [x] Nueva página independiente y SEO específico
- [x] Catálogo de 11 proyectos, con proporciones de cada video
- [x] Misma galería: mosaico responsivo, vistas previas y visor con audio
- [x] Etiqueta propia en el visor de video
- [x] Subir los 33 archivos (`full`, `previews` y `posters`) a Cloudflare R2
- [x] Verificar las 33 URLs públicas y la vista previa del sitio (GitHub Actions y aprobación del cliente)
- [x] Agregar los datos de contacto compartidos por el cliente: WhatsApp +57 318 562 8954 e Instagram @jonna.kimmedia (perfil Jonna & Kim Media)
- [x] Aprobar nombre, texto de presentación, orden de proyectos y contenidos (confirmación en conversación)
- [x] Habilitar `metadata.robots.index` tras validar y solicitar publicación
- [x] Obtener autorización expresa para merge/publicación (20 oct 2026)

## Medios

La variable `FILM_MEDIA_ORIGIN` o `public/media/portfolio/filmaker/media-origin.json` indican el dominio público de medios, actualmente `https://portafolio-media.dixoy.co`.

Cada entrada del JSON usa estas rutas independientes:

- `/media/portfolio/jonna-sanchez/full/jonna-01.mp4` (hasta `jonna-11.mp4`)
- `/media/portfolio/jonna-sanchez/previews/jonna-01.mp4` (hasta `jonna-11.mp4`)
- `/media/portfolio/jonna-sanchez/posters/jonna-01.webp` (hasta `jonna-11.webp`)

**No** incluir los originales MP4 grandes en GitHub, ni subir videos a Cloudflare Pages (límite de archivo). Para subirlos al bucket, mantener exactamente los prefijos anteriores y comprobar acceso público por HTTPS.

## Publicación

El cliente aprobó el diseño y autorizó la publicación. Las verificaciones de CI comprueban compilación, páginas estáticas, metadatos y disponibilidad de 33 archivos en R2. Tras fusionar, verificar en https://dixoy.co/jonnaSanchez el despliegue de producción y la ruta canónica.
