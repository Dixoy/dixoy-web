# Portafolio Filmmaker

Ruta de la página: `/portafolio/filmaker` (se conserva la URL solicitada).

## Alojamiento de la colección en Cloudflare R2

Bucket dedicado: `dixoy-portfolio-media`. Dominio público: `https://portafolio-media.dixoy.co`. El origen público queda versionado en `public/media/portfolio/filmaker/media-origin.json`, para que las compilaciones locales, de GitHub y de Cloudflare usen la misma dirección. No contiene credenciales. `FILM_MEDIA_ORIGIN` es una sobrescritura opcional para usar otro origen; un valor vacío activa el modo local.

La colección activa contiene 22 videos, 22 vistas previas de 8 segundos y 22 portadas (aproximadamente 599 MB en total). Los 66 objetos subidos se verificaron comparando tamaño, checksum MD5 y tipo de contenido con los archivos preparados. Los originales suman aproximadamente 2,78 GB y varios archivos superan el límite de 25 MiB por archivo de Cloudflare Pages. GitHub conserva el código y el catálogo; los videos completos, las vistas previas y las portadas se suben a R2.

1. Subir el contenido de la carpeta preparada `upload/` a un bucket R2 dedicado al portafolio, conservando las claves `media/portfolio/filmaker/full/...`, `media/portfolio/filmaker/previews/...` y `media/portfolio/filmaker/posters/...`.
2. Conectar un dominio público de medios al bucket. Usar en producción un dominio propio; el dominio `r2.dev` es para desarrollo.
3. Actualizar `public/media/portfolio/filmaker/media-origin.json` con el dominio HTTPS, sin rutas ni parámetros. Para sobrescribirlo por entorno, configurar `FILM_MEDIA_ORIGIN` en Cloudflare Pages (Preview/Production según corresponda).
4. Verificar que los archivos se reproducen desde ese dominio. Después reemplazar `public/media/portfolio/filmaker/videos.json` por el catálogo preparado `videos.ready.json`. Los títulos derivados de nombres de archivo son provisionales.
5. Volver a desplegar. El dominio de medios se incorpora durante la compilación estática; cambiar la variable requiere un nuevo despliegue.

Los archivos MP4 deben servirse como `video/mp4` y las portadas como `image/webp`. Conservar el soporte de peticiones parciales (Range) para adelantar y retroceder dentro del video. No guardar claves de R2 ni URLs temporales con credenciales en el catálogo: el dominio configurado es público y se entrega al navegador.

Con un origen vacío, se activa el modo local descrito a continuación. La compilación verifica que existan sus archivos y que ninguno supere 25 MiB. Con R2, el catálogo se valida, pero la disponibilidad remota se comprueba tras la subida.

## Alternativa para videos pequeños dentro del repositorio

Subir los archivos a `public/media/portfolio/filmaker/` en GitHub. Usar nombres en minúsculas, sin espacios ni tildes: `nombre-proyecto.mp4`.

La carpeta ya contiene `videos.json`. Mientras sea `[]`, la página muestra “Próximamente”, no muestra tarjetas ficticias y solicita a los buscadores no indexarla.

Subir un MP4 no lo publica automáticamente en la galería. Después, añadir una entrada a `videos.json` por cada video aprobado. Así se pueden subir y organizar los archivos antes de mostrarlos.

Ejemplo (reemplazar con archivos que realmente existan):

```json
[
  {
    "id": "nombre-proyecto",
    "title": "Nombre del proyecto",
    "category": "Campaña",
    "src": "/media/portfolio/filmaker/nombre-proyecto.mp4",
    "previewSrc": "/media/portfolio/filmaker/nombre-proyecto-preview.mp4",
    "poster": "/media/portfolio/filmaker/nombre-proyecto.webp",
    "width": 1080,
    "height": 1920,
    "description": "Una breve descripción del trabajo realizado."
  }
]
```

- `src`: video completo. MP4 H.264 con audio AAC es una opción ampliamente compatible.
- `width` y `height`: dimensiones reales; determinan el formato de la tarjeta.
- `previewSrc`: opcional. Fragmento liviano para la cuadrícula, preferiblemente sin pista de audio. Si se omite, se usa el video completo, silenciado.
- `poster`: opcional, pero recomendado. Portada WebP/JPG/PNG, especialmente útil con movimiento reducido o ahorro de datos.
- `description`: opcional.
- Cada `id` debe ser único. Solo se admiten archivos dentro de esta carpeta, incluidas subcarpetas.

Este modo es para archivos pequeños. Para esta colección, usar el flujo de R2 indicado arriba. La integración es mediante un dominio público de medios; no incorpora Cloudflare Stream ni transforma videos en el servidor.

## Comportamiento

El orden se mezcla una vez al entrar. Las tarjetas conservan su posición mientras se explora. Los videos visibles se reproducen sin sonido, en bucle y desde puntos de inicio distintos. Los que salen de pantalla, los de una pestaña oculta y las vistas previas detrás del visor se pausan. Hay un botón de pausa general.

El movimiento reducido y el ahorro de datos desactivan la reproducción automática inicial; el visitante puede activarla explícitamente. Si el navegador bloquea el autoplay, el video completo sigue disponible al abrir la tarjeta.

El visor usa un diálogo nativo con foco contenido y retorno al botón original al cerrar. Incluye controles de video, anterior/siguiente y cierre con Escape. Las flechas del teclado cambian de pieza salvo cuando el foco está en el reproductor, donde controlan el propio video.

## Verificar y publicar

```sh
npm run test:filmaker
npm run build
```

La compilación comprueba los campos del catálogo y la existencia de los archivos. Probar reproducción en escritorio, iPhone y Android antes de publicar la colección definitiva; algunos dispositivos restringen los videos simultáneos.

Con la primera entrada, la página permite indexación automáticamente. La colección activa incluye esta ruta en `public/sitemap.xml`:

```xml
<url><loc>https://dixoy.co/portafolio/filmaker</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
```

El despliegue sigue el flujo existente de GitHub → Cloudflare Pages. No se requiere servidor ni base de datos.
