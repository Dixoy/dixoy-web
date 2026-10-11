# DIXOY — Portafolio de Diseño V2

Objetivo: conservar HEADER, HERO «Diseño.» y CIERRE de la página actual. Sustituir la sección de statement + PortfolioGallery + next por la nueva experiencia de PortfolioGallery.

## Integración
1. En `app/portafolio/diseno/page.tsx`, eliminar `<section className={styles.statement}>...</section>` y `<section className={styles.next}>...</section>` completos, conservando `<PortfolioGallery />`, hero, header, closing y footer.
2. Reemplazar `app/portafolio/diseno/PortfolioGallery.tsx` por el del paquete.
3. Añadir `app/portafolio/diseno/portfolio-flow.module.css`.
4. Copiar los 5 WEBP de `public/media/portfolio/design/` al mismo directorio del repo. Las cuatro identidades ya existen allí.
5. Ejecutar las verificaciones requeridas por `AGENTS.md`, lint/typecheck y `npm run build`.
6. Revisar visualmente escritorio/móvil. Evitar modificar el diseño del hero.
7. Commit y push SOLO a `feat/design-portfolio-v1`, PR #15 draft. No merge, no producción.

## Notas de diseño
- Las piezas son imágenes reales del usuario; el diseño y las transiciones son código React + CSS.
- La interacción de idioma alterna las versiones reales español/inglés.
- No inventar estadísticas ni datos de Instagram. Enlace real: https://www.instagram.com/p/C5ZnCk4J4sa/
- Las láminas de identidad usan vista recortada de portada con enlace a imagen completa; ajustar si el usuario prefiere mostrar las láminas enteras.
- No usar mockups generados.
