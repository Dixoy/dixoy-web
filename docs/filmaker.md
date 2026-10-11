# Portafolio Filmmaker

Ruta de la página: `/portafolio/filmaker` (se conserva la URL solicitada).

## Subir los videos

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

Para muchos videos o archivos grandes, definir el almacenamiento antes de subir los originales. Esta primera versión usa archivos estáticos servidos por Cloudflare Pages, no incorpora Cloudflare Stream ni R2. Confirmar los límites vigentes del alojamiento al preparar los archivos.

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

Con la primera entrada, la página permite indexación automáticamente. Añadir entonces a `public/sitemap.xml`:

```xml
<url><loc>https://dixoy.co/portafolio/filmaker</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
```

El despliegue sigue el flujo existente de GitHub → Cloudflare Pages. No se requiere servidor ni base de datos.
