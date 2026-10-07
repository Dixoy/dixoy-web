"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./design.module.css";

const works = [
  { image: "/media/portfolio/design/nova-prime-fachada.jpg", title: "Nova Prime Studio — Fachada gráfica", category: "SPA · Diseño aplicado", size: "hero" },
  { image: "/media/portfolio/design/boru-campana.png", title: "Ború — Campaña gráfica", category: "Publicidad · Diseño gráfico", size: "portrait" },
  { image: "/media/portfolio/design/nova-prime-qr.jpg", title: "Nova Prime Studio — QR personalizado", category: "SPA · Comunicación visual", size: "square" },
  { image: "/media/portfolio/design/nova-prime-identidad.jpg", title: "Nova Prime Studio — Identidad aplicada", category: "SPA · Gráfica para vitrinas", size: "landscape" },
  { image: "/media/portfolio/design/boru-pared-01.png", title: "Ború — Diseño mural", category: "Publicidad · Diseño aplicado", size: "wide" },
  { image: "/media/portfolio/design/nova-prime-floral.jpg", title: "Nova Prime Studio — Composición floral", category: "SPA · Diseño ornamental", size: "compact" },
  { image: "/media/portfolio/design/boru-pared-02.png", title: "Ború — Gráfica de marca", category: "Publicidad · Diseño gráfico", size: "landscape" },
  { image: "/media/portfolio/design/nova-prime-interior.jpg", title: "Nova Prime Studio — Diseño en el espacio", category: "SPA · Diseño aplicado", size: "square" },
] as const;

const sizeClass = {
  hero: styles.heroCard,
  portrait: styles.portraitCard,
  square: styles.squareCard,
  landscape: styles.landscapeCard,
  wide: styles.wideCard,
  compact: styles.compactCard,
};

export default function PortfolioGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? null : (current + 1) % works.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? null : (current + works.length - 1) % works.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <div className={styles.gallery}>
        {works.map((item, index) => (
          <button
            aria-label={`Ampliar: ${item.title}`}
            className={`${styles.work} ${styles.workButton} ${sizeClass[item.size]}`}
            key={item.image}
            onClick={() => setActive(index)}
            type="button"
          >
            <figure className={styles.media}>
              <Image alt={item.title} fill sizes="(max-width: 760px) 100vw, 66vw" src={item.image} />
              <span className={styles.view}>Ampliar imagen ↗</span>
            </figure>
            <div className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div aria-label="Imagen ampliada del portafolio" aria-modal="true" className={styles.lightbox} role="dialog">
          <button aria-label="Cerrar imagen" className={styles.lightboxBackdrop} onClick={() => setActive(null)} type="button" />
          <div className={styles.lightboxPanel}>
            <div className={styles.lightboxTop}>
              <span>{String(active + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</span>
              <button onClick={() => setActive(null)} type="button">Cerrar ✕</button>
            </div>
            <div className={styles.lightboxImage}>
              <Image alt={works[active].title} fill priority sizes="100vw" src={works[active].image} />
            </div>
            <div className={styles.lightboxBottom}>
              <button aria-label="Imagen anterior" onClick={() => setActive((active + works.length - 1) % works.length)} type="button">← Anterior</button>
              <div><strong>{works[active].title}</strong><span>{works[active].category}</span></div>
              <button aria-label="Imagen siguiente" onClick={() => setActive((active + 1) % works.length)} type="button">Siguiente →</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
