# DIXOY Web

Sitio corporativo de DIXOY construido con Next.js y publicado como exportación estática en Cloudflare Pages.

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

## SEO

El sitio incluye metadata por página, canonical, datos estructurados, `public/robots.txt` y `public/sitemap.xml`.

La tienda permanece fuera de indexación mientras se prepara su integración con Inventario en DixApp.

## Google Tag Manager y Analytics 4

La web carga el contenedor de Google Tag Manager:

```text
GTM-T3P5JRT3
```

La propiedad de Google Analytics 4 usa el ID de medición:

```text
G-7EV215ENTM
```

Analytics debe configurarse dentro de Google Tag Manager mediante una etiqueta de Google que se active en todas las páginas.

La web envía al `dataLayer` un evento `generate_lead` cuando una persona hace clic en WhatsApp o correo, junto con `contact_method`, `link_url` y `page_location`. Ese evento puede conectarse a GA4 desde Tag Manager mediante un activador de evento personalizado.

## Google Search Console

Para una propiedad de dominio se recomienda verificar `dixoy.co` mediante DNS en Cloudflare.

Si se usa verificación HTML de una propiedad con prefijo de URL, puede añadirse el token de Google como:

```text
GOOGLE_SITE_VERIFICATION=token-entregado-por-google
```

El layout genera automáticamente la meta de verificación cuando la variable existe.

Después de verificar Search Console, enviar:

```text
https://dixoy.co/sitemap.xml
```

## Producción

Repositorio: `Dixoy/dixoy-web`

Rama de producción: `main`

Dominio:

```text
https://dixoy.co
```
