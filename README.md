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

## Google Analytics 4

La medición se activa únicamente cuando existe esta variable de entorno en el build de Cloudflare Pages:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Al activarse, la web carga la etiqueta de Google en todas las páginas y registra clics de contacto a WhatsApp y correo. Los clics de WhatsApp se envían como evento `generate_lead`.

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
