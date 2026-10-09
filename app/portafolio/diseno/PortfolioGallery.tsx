import Image from "next/image";
import styles from "./design.module.css";

/**
 * Un proyecto = una composición editorial. Para ampliar el portafolio,
 * añade otra entrada al final del arreglo con sus imágenes reales.
 */
type PortfolioBrand = {
  slug: string;
  number: string;
  name: string;
  type: string;
  intro: string;
  theme?: "boru" | "nova";
  /** Keep unpublished until the corresponding PDF board is uploaded to GitHub. */
  published?: boolean;
  board?: boolean;
  images: { src: string; alt: string; label: string }[];
};

const brands: PortfolioBrand[] = [
  {
    slug: "boru",
    number: "01",
    name: "Ború",
    type: "Diseño gráfico / Comunicación de marca",
    intro: "Una identidad que se expresa en mensajes, composiciones y gráfica de gran formato.",
    theme: "boru",
    images: [
      {
        src: "/media/portfolio/design/boru-campana.png",
        alt: "Diseño de campaña gráfica de Ború",
        label: "Campaña gráfica",
      },
      {
        src: "/media/portfolio/design/boru-pared-01.png",
        alt: "Primera composición de gráfica de pared de Ború",
        label: "Gráfica de gran formato",
      },
      {
        src: "/media/portfolio/design/boru-pared-02.png",
        alt: "Segunda composición gráfica de pared de Ború",
        label: "Sistema visual",
      },
    ],
  },
  {
    slug: "nova-prime",
    number: "02",
    name: "Nova Prime Studio",
    type: "Diseño aplicado / Espacios comerciales",
    intro: "Un lenguaje ornamental que conecta la identidad del estudio con sus vitrinas y espacios interiores.",
    theme: "nova",
    images: [
      {
        src: "/media/portfolio/design/nova-prime-fachada.jpg",
        alt: "Vitrina de Nova Prime Studio con diseño floral y gráfica informativa",
        label: "Vitrina exterior",
      },
      {
        src: "/media/portfolio/design/nova-prime-identidad.jpg",
        alt: "Identidad de Nova Prime Studio aplicada en el vidrio",
        label: "Identidad aplicada",
      },
      {
        src: "/media/portfolio/design/nova-prime-qr.jpg",
        alt: "Código QR personalizado en la gráfica de la fachada",
        label: "Detalle gráfico",
      },
      {
        src: "/media/portfolio/design/nova-prime-floral.jpg",
        alt: "Composición floral blanca sobre vidrio vista desde el interior",
        label: "Composición ornamental",
      },
      {
        src: "/media/portfolio/design/nova-prime-interior.jpg",
        alt: "Interior del SPA con diseño floral aplicado al ventanal",
        label: "Diseño en contexto",
      },
    ],
  },
  {
    slug: "corason",
    number: "03",
    name: "Corason",
    type: "Identidad visual / Presentación de marca",
    intro: "Identidad y aplicaciones reunidas en una composición gráfica.",
    board: true,
    published: false,
    images: [{ src: "/media/portfolio/design/corason-mostrario.jpg", alt: "Mostrario editorial de identidad visual Corason", label: "Identidad y aplicaciones" }],
  },
  {
    slug: "nitro",
    number: "04",
    name: "Nitro",
    type: "Identidad visual / Presentación de marca",
    intro: "Una composición de marca con elementos de identidad y sus aplicaciones.",
    board: true,
    published: false,
    images: [{ src: "/media/portfolio/design/nitro-mostrario.jpg", alt: "Mostrario editorial de identidad visual Nitro", label: "Identidad y aplicaciones" }],
  },
  {
    slug: "saeyut",
    number: "05",
    name: "Saeyut",
    type: "Identidad visual / Presentación de marca",
    intro: "Una presentación extensa de identidad y lenguaje gráfico.",
    board: true,
    published: false,
    images: [{ src: "/media/portfolio/design/saeyut-mostrario.jpg", alt: "Mostrario editorial de identidad visual Saeyut", label: "Identidad y aplicaciones" }],
  },
  {
    slug: "terrado",
    number: "06",
    name: "Terrado",
    type: "Identidad visual / Presentación de marca",
    intro: "Una propuesta visual presentada como un único recorrido editorial.",
    board: true,
    published: false,
    images: [{ src: "/media/portfolio/design/terrado-mostrario.jpg", alt: "Mostrario editorial de identidad visual Terrado", label: "Identidad y aplicaciones" }],
  },
];

export default function PortfolioGallery() {
  return (
    <div className={styles.editorialPortfolio}>
      {brands.filter((brand) => brand.published !== false).map((brand) => (
        <article
          aria-labelledby={`portfolio-${brand.slug}`}
          className={`${styles.brandStory} ${brand.theme === "boru" ? styles.brandBoru : brand.theme === "nova" ? styles.brandNova : ""} ${brand.board ? styles.brandBoard : ""}`}
          id={brand.slug}
          key={brand.slug}
        >
          <div className={styles.brandHeading}>
            <div className={styles.brandIndex}>
              <span>Proyecto / {brand.number}</span>
              <span>DIXOY · Portafolio</span>
            </div>
            <div className={styles.brandHeadingMain}>
              <h2 id={`portfolio-${brand.slug}`}>{brand.name}</h2>
              <div>
                <p className={styles.brandType}>{brand.type}</p>
                <p className={styles.brandIntro}>{brand.intro}</p>
              </div>
            </div>
          </div>
          <div className={styles.brandCanvas}>
            {brand.images.map((item, index) => (
              <figure
                className={`${styles.canvasPiece} ${styles[`canvasPiece${index + 1}`]}`}
                key={item.src}
              >
                <div className={styles.canvasImage}>
                  <Image
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "(max-width: 760px) 100vw, 90vw" : "(max-width: 760px) 100vw, 55vw"}
                    src={item.src}
                  />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div aria-hidden="true" className={styles.brandEndMark}>
            <span>{brand.name}</span>
            <span>—</span>
          </div>
        </article>
      ))}
    </div>
  );
}
