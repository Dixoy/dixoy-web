"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./portfolio-flow.module.css";

const root = "/media/portfolio/design/";
const instagram = "https://www.instagram.com/p/C5ZnCk4J4sa/";

const socialVersions = [
  { src: `${root}tampa-nueva-casa-es.webp`, alt: "MCI tiene nueva casa en Tampa, pieza gráfica en español", language: "Español" },
  { src: `${root}tampa-nueva-casa-en.webp`, alt: "MCI has a new house in Tampa, social media design in English", language: "English" },
];

const identities = [
  { name: "Corason", image: `${root}corason-mostrario.jpg`, width: 1600, height: 3552 },
  { name: "Nitro", image: `${root}nitro-mostrario.jpg`, width: 1600, height: 3280 },
  { name: "Saeyut", image: `${root}saeyut-mostrario.jpg`, width: 1600, height: 6394 },
  { name: "Terrado", image: `${root}terrado-mostrario.jpg`, width: 1600, height: 4261 },
];


const galleryItems = [
  {
    "src": "galeria-carrera-4k.webp",
    "title": "Carrera 4K",
    "category": "Diseño para eventos",
    "width": 1303,
    "height": 2000,
    "ratio": 0.77
  },
  {
    "src": "galeria-globo-rojo.webp",
    "title": "Globo Rojo",
    "category": "Identidad gráfica",
    "width": 1684,
    "height": 1684,
    "ratio": 1
  },
  {
    "src": "galeria-nova-prime-floral.webp",
    "title": "Nova Prime Studio",
    "category": "Gráfica decorativa",
    "width": 1293,
    "height": 1216,
    "ratio": 0.92
  },
  {
    "src": "galeria-arepas-publicidad.webp",
    "title": "Arepas rellenas",
    "category": "Publicidad gastronómica",
    "width": 1800,
    "height": 754,
    "ratio": 1.45
  },
  {
    "src": "galeria-cafe-progreso.webp",
    "title": "Café El Progreso",
    "category": "Etiquetas y empaque",
    "width": 762,
    "height": 1374,
    "ratio": 0.7
  },
  {
    "src": "galeria-interior-3d.webp",
    "title": "Espacio interior",
    "category": "Visualización 3D",
    "width": 1528,
    "height": 1029,
    "ratio": 1.25
  },
  {
    "src": "galeria-chori-banner.webp",
    "title": "Chori Sanmi",
    "category": "Publicidad exterior",
    "width": 500,
    "height": 2000,
    "ratio": 0.67
  },
  {
    "src": "galeria-empaque-corporativo.webp",
    "title": "Empaque corporativo",
    "category": "Diseño estructural",
    "width": 1214,
    "height": 1660,
    "ratio": 0.78
  },
  {
    "src": "galeria-chimelo-grafica.webp",
    "title": "Chimelo",
    "category": "Publicidad comercial",
    "width": 1333,
    "height": 2000,
    "ratio": 0.79
  },
  {
    "src": "galeria-pinza-grill.webp",
    "title": "La Pinza Grill",
    "category": "Cartas y comunicación",
    "width": 1800,
    "height": 874,
    "ratio": 1.4
  },
  {
    "src": "galeria-nova-prime-servicios.webp",
    "title": "Nova Prime Studio",
    "category": "Gráfica de servicios",
    "width": 762,
    "height": 2000,
    "ratio": 0.65
  },
  {
    "src": "galeria-motos-banner.webp",
    "title": "Lavadero de motos",
    "category": "Señalización publicitaria",
    "width": 471,
    "height": 2000,
    "ratio": 0.66
  },
  {
    "src": "galeria-itf-vitrina.webp",
    "title": "Idear tu Estilo",
    "category": "Diseño para vitrinas",
    "width": 1800,
    "height": 684,
    "ratio": 1.5
  },
  {
    "src": "galeria-chori-picante.webp",
    "title": "Chori Sanmi",
    "category": "Diseño promocional",
    "width": 1590,
    "height": 2000,
    "ratio": 0.82
  }
];

export default function PortfolioGallery() {
  const [version, setVersion] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  useEffect(() => {
    if (activeGalleryIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGalleryIndex(null);
      if (event.key === "ArrowRight") setActiveGalleryIndex(index => index === null ? null : (index + 1) % galleryItems.length);
      if (event.key === "ArrowLeft") setActiveGalleryIndex(index => index === null ? null : (index + galleryItems.length - 1) % galleryItems.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeGalleryIndex]);
  const current = socialVersions[version];

  return (
    <div className={styles.flow}>
      <section className={styles.social} aria-labelledby="social-heading" id="diseno-redes">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Diseño para redes sociales</p>
          <h2 id="social-heading">Ideas que <em>conectan.</em></h2>
          <p>Mensajes que se convierten en experiencias visuales.</p>
        </div>

        <div className={styles.projectMeta}>
          <span>MCI Tampa Bay</span>
          <span>Comunicación digital · Español / Inglés</span>
          <a href={instagram} target="_blank" rel="noopener noreferrer">Ver publicación real ↗</a>
        </div>

        <div className={styles.socialGrid}>
          <figure className={styles.mainPoster}>
            <Image src={`${root}tampa-nueva-ubicacion.webp`} alt="Diseño original de MCI Tampa Bay para anunciar su nueva ubicación" width={1080} height={1350} sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption>Una nueva ubicación. Una nueva etapa.</figcaption>
          </figure>
          <div className={styles.socialAside}>
            <div className={styles.languageHead}>
              <span>Una idea, dos idiomas.</span>
              <div role="group" aria-label="Idioma de la publicación" className={styles.languageToggle}>
                {socialVersions.map((item, index) => (
                  <button key={item.language} type="button" aria-pressed={version === index} onClick={() => setVersion(index)}>{item.language}</button>
                ))}
              </div>
            </div>
            <figure className={styles.languagePoster}>
              <Image key={current.src} src={current.src} alt={current.alt} width={1080} height={1080} sizes="(max-width: 760px) 100vw, 48vw" />
              <figcaption>Adaptación de mensaje / {current.language}</figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.wideStory}>
          <p>El mismo mensaje.<br /><strong>Distintas formas de llegar.</strong></p>
          <Image src={`${root}tampa-portada-facebook.webp`} alt="Portada horizontal para Facebook de MCI Tampa Bay" width={851} height={315} sizes="(max-width: 760px) 100vw, 80vw" />
        </div>

        <div className={styles.moreSocial}>
          <div className={styles.moreText}>
            <span className={styles.eyebrow}>Más allá de una campaña</span>
            <h3>Comunicar también es acompañar.</h3>
            <p>Diseños para momentos, encuentros y comunidad.</p>
          </div>
          <div className={styles.supportingPair}>
            <figure>
              <Image src={`${root}tampa-dia-padre.webp`} alt="Publicación de MCI Tampa Bay por el Día del Padre" width={1152} height={2048} sizes="(max-width: 760px) 45vw, 22vw" />
              <figcaption>Fechas especiales</figcaption>
            </figure>
            <figure>
              <Image src={`${root}tampa-bienvenido.webp`} alt="Composición tipográfica Bienvenido, esta es tu casa, para MCI Tampa Bay" width={1132} height={1778} sizes="(max-width: 760px) 45vw, 22vw" />
              <figcaption>Comunidad</figcaption>
            </figure>
          </div>
        </div>
      </section>


      <section className={styles.baru} aria-labelledby="baru-heading" id="fruteria-baru">
        <div className={styles.baruIntro}>
          <div>
            <p className={styles.eyebrow}>Diseño gráfico · Visualización 3D</p>
            <h2 id="baru-heading">Diseñar lo que <em>imaginamos.</em></h2>
          </div>
          <div className={styles.baruSummary}>
            <strong>Frutería Barú</strong>
            <p>Gráfica comercial, diseño de espacios y renders 3D.</p>
          </div>
        </div>

        <figure className={styles.baruHero}>
          <Image src={`${root}baru-render-espacio.webp`} alt="Render 3D del espacio de Frutería Barú con murales ilustrados y gráfica comercial" width={1200} height={654} sizes="(max-width: 760px) 100vw, 90vw" />
          <figcaption>Visualización 3D / Propuesta del espacio</figcaption>
        </figure>

        <div className={styles.baruDesigns}>
          <div className={styles.baruDesignHeading}>
            <span className={styles.eyebrow}>Gráfica del espacio</span>
            <p>Color, ilustración y una identidad que se extiende por las paredes.</p>
          </div>
          <figure className={styles.baruOrange}>
            <Image src={`${root}baru-diseno-naranja.webp`} alt="Diseño original de mural naranja con ilustraciones de comida para Frutería Barú" width={2400} height={440} sizes="(max-width: 760px) 100vw, 90vw" />
          </figure>
          <figure className={styles.baruIllustrated}>
            <Image src={`${root}baru-diseno-ilustrado.webp`} alt="Diseño original de mural con ilustraciones de alimentos para Frutería Barú" width={2400} height={537} sizes="(max-width: 760px) 100vw, 90vw" />
          </figure>
        </div>

        <div className={styles.baruDetails}>
          <figure className={styles.baruGreen}>
            <Image src={`${root}baru-diseno-verde.webp`} alt="Diseño original del muro verde y logotipo aplicado de Frutería Barú" width={1900} height={430} sizes="(max-width: 760px) 100vw, 54vw" />
            <figcaption>Diseño gráfico / Identidad aplicada</figcaption>
          </figure>
          <figure className={styles.baruRender}>
            <Image src={`${root}baru-render-marca.webp`} alt="Render 3D de la pared verde con la gráfica de Frutería Barú" width={1175} height={669} sizes="(max-width: 760px) 100vw, 35vw" />
            <figcaption>Visualización 3D</figcaption>
          </figure>
        </div>

        <div className={styles.baruFinal}>
          <div className={styles.baruMenus}>
            <div className={styles.baruMenuText}>
              <p className={styles.eyebrow}>Diseño editorial</p>
              <h3>Hasta el último detalle.</h3>
              <p>Cartas de comida que mantienen el lenguaje visual del espacio.</p>
            </div>
            <figure>
              <Image src={`${root}baru-carta-frescos.webp`} alt="Carta de bebidas, fresas y postres diseñada para Frutería Barú" width={469} height={625} sizes="(max-width: 760px) 46vw, 18vw" />
            </figure>
            <figure>
              <Image src={`${root}baru-carta-salchipapas.webp`} alt="Carta de comidas y salchipapas diseñada para Frutería Barú" width={469} height={625} sizes="(max-width: 760px) 46vw, 18vw" />
            </figure>
          </div>
          <figure className={styles.baruReal}>
            <Image src={`${root}baru-real-espacio.webp`} alt="Fotografía real del espacio de Frutería Barú con la gráfica instalada" width={1024} height={768} sizes="(max-width: 760px) 100vw, 32vw" />
            <figcaption>Aplicación real / Frutería Barú</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.identity} aria-labelledby="identity-heading" id="identidad-visual">
        <div className={styles.identityIntro}>
          <p className={styles.eyebrow}>Identidad visual</p>
          <h2 id="identity-heading">Marcas con <em>carácter.</em></h2>
          <p>Cada identidad tiene una forma propia de expresarse.</p>
        </div>
        <article className={styles.zooriFeature} aria-labelledby="zoori-title" id="zoori">
          <div className={styles.zooriHero}>
            <div className={styles.zooriMark}>
              <Image
                src={`${root}zoori-logo.webp`}
                alt="Logotipo original de ZOORI, clínica veterinaria, en dorado sobre azul"
                width={1100}
                height={1100}
                sizes="(max-width: 760px) 100vw, 48vw"
              />
            </div>
            <div className={styles.zooriCopy}>
              <span className={styles.zooriLabel}>Identidad creada desde cero por DIXOY</span>
              <h3 id="zoori-title">ZOORI<span>.</span></h3>
              <p>Una identidad creada desde su esencia.</p>
              <span className={styles.zooriServices}>Naming · Logotipo · Sistema visual · Aplicaciones</span>
              <div className={styles.zooriPalette} aria-label="Colores de la identidad ZOORI">
                <span title="Azul clínico profundo" style={{ background: "#0E2A47" }} />
                <span title="Dorado mate" style={{ background: "#C9A24D" }} />
                <span title="Blanco clínico" style={{ background: "#F4F6F8" }} />
                <span title="Gris técnico" style={{ background: "#6B7280" }} />
              </div>
            </div>
          </div>
          <div className={styles.zooriDetails}>
            <figure>
              <Image src={`${root}zoori-aplicaciones.webp`} alt="Aplicaciones de la identidad ZOORI en tarjetas, uniforme, material corporativo y elementos de marca" width={1574} height={886} sizes="(max-width: 760px) 100vw, 65vw" />
              <figcaption>La marca en su entorno.</figcaption>
            </figure>
            <figure>
              <Image src={`${root}zoori-variaciones.webp`} alt="Versiones corporativas y negativas del logotipo ZOORI" width={1574} height={886} sizes="(max-width: 760px) 100vw, 35vw" />
              <figcaption>Un sistema visual consistente.</figcaption>
            </figure>
          </div>
        </article>
        <div className={styles.identityGrid}>
          {identities.map((item, index) => (
            <figure className={styles.identityCard} key={item.name}>
              <div className={styles.identityArt}>
                <Image src={item.image} alt={`Diseño de identidad visual y aplicaciones de ${item.name}`} width={item.width} height={item.height} sizes="(max-width: 760px) 100vw, 45vw" />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><a href={item.image} target="_blank" rel="noopener noreferrer" aria-label={`Ver composición completa de ${item.name}`}>Ver composición ↗</a></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="gallery-heading" id="galeria-diseno">
        <div className={styles.galleryIntro}>
          <p className={styles.eyebrow}>Una selección de trabajos</p>
          <h2 id="gallery-heading">Diseño en todas <em>sus formas.</em></h2>
          <p>Distintas ideas. Diferentes maneras de expresarlas.</p>
        </div>
        <div className={styles.galleryMasonry}>
          {galleryItems.map((item, index) => (
            <figure className={styles.galleryTile} key={item.src}>
              <button className={styles.galleryTileButton} type="button" onClick={() => setActiveGalleryIndex(index)} aria-label={`Ampliar ${item.title}: ${item.category}`}>
                <span className={styles.galleryTileImage} style={{ aspectRatio: item.ratio }}>
                  <Image src={`${root}${item.src}`} alt={`${item.title} — ${item.category}`} width={item.width} height={item.height} sizes="(max-width: 600px) 48vw, (max-width: 980px) 32vw, 24vw" />
                </span>
                <span className={styles.galleryTileCaption}><strong>{item.title}</strong><small>{item.category}</small></span>
              </button>
            </figure>
          ))}
        </div>
      </section>
      {activeGalleryIndex !== null && (
        <div className={styles.galleryLightbox} role="presentation" onClick={() => setActiveGalleryIndex(null)}>
          <div className={styles.galleryLightboxPanel} role="dialog" aria-modal="true" aria-label={galleryItems[activeGalleryIndex].title} onClick={event => event.stopPropagation()}>
            <div className={styles.galleryLightboxTop}>
              <span>{galleryItems[activeGalleryIndex].title} <small>· {galleryItems[activeGalleryIndex].category}</small></span>
              <button type="button" onClick={() => setActiveGalleryIndex(null)} autoFocus aria-label="Cerrar imagen ampliada">Cerrar ×</button>
            </div>
            <div className={styles.galleryLightboxImage}>
              <Image src={`${root}${galleryItems[activeGalleryIndex].src}`} alt={`${galleryItems[activeGalleryIndex].title} — ${galleryItems[activeGalleryIndex].category}`} width={galleryItems[activeGalleryIndex].width} height={galleryItems[activeGalleryIndex].height} sizes="95vw" />
            </div>
            <div className={styles.galleryLightboxControls}>
              <button type="button" onClick={() => setActiveGalleryIndex((activeGalleryIndex + galleryItems.length - 1) % galleryItems.length)} aria-label="Imagen anterior">← Anterior</button>
              <span>{activeGalleryIndex + 1} / {galleryItems.length}</span>
              <button type="button" onClick={() => setActiveGalleryIndex((activeGalleryIndex + 1) % galleryItems.length)} aria-label="Imagen siguiente">Siguiente →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
