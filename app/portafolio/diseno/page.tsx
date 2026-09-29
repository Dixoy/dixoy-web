import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./design.module.css";

export const metadata: Metadata = {
  title: "Portafolio de diseño | DIXOY",
  description:
    "Selección de diseño, identidad, comunicación visual y aplicaciones desarrolladas por DIXOY para marcas, espacios, eventos y productos.",
  alternates: { canonical: "/portafolio/diseno" },
  openGraph: {
    title: "Portafolio de diseño | DIXOY",
    description:
      "Una selección visual de proyectos de diseño y comunicación desarrollados por DIXOY.",
    images: [
      {
        alt: "Portafolio de diseño DIXOY",
        height: 630,
        url: "/og-dixoy.png",
        width: 1200,
      },
    ],
    type: "website",
    url: "https://dixoy.co/portafolio/diseno",
  },
};

const work = [
  {
    href: "/proyectos/ambientacion-punto-de-venta",
    title: "Ambientación de punto de venta",
    category: "Diseño aplicado · Espacios",
    image: "/media/projects/point-of-sale/boru-cover.webp",
    size: "hero",
  },
  {
    href: "/proyectos/textil-corporativo",
    title: "Textil corporativo",
    category: "Diseño aplicado · Marca",
    image: "/media/projects/corporate-textile/creative-shirt.webp",
    size: "portrait",
  },
  {
    href: "/proyectos/credenciales-eventos",
    title: "Credenciales para eventos",
    category: "Diseño gráfico · Producción",
    image: "/images/portfolio/optimized/project-13.webp",
    size: "square",
  },
  {
    href: "/proyectos/privacidad-visual-oficinas",
    title: "Gráfica para espacios corporativos",
    category: "Comunicación visual · Espacios",
    image: "/media/projects/corporate-spaces/office-wide.webp",
    size: "landscape",
  },
  {
    href: "/proyectos/aviso-comercial-gran-formato",
    title: "Comunicación de gran formato",
    category: "Diseño aplicado · Producción",
    image: "/images/portfolio/optimized/project-15.webp",
    size: "wide",
  },
  {
    href: "/proyectos/textil-corporativo",
    title: "Piezas de marca en producción",
    category: "Identidad aplicada · Textil",
    image: "/media/projects/corporate-textile/printed-totes.webp",
    size: "compact",
  },
] as const;

const sizeClass = {
  hero: styles.heroCard,
  portrait: styles.portraitCard,
  square: styles.squareCard,
  landscape: styles.landscapeCard,
  wide: styles.wideCard,
  compact: styles.compactCard,
} as const;

const Arrow = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

export default function DesignPortfolioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link aria-label="DIXOY, inicio" className={styles.brand} href="/">
          <Image
            alt="DIXOY"
            height={255}
            priority
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>

        <nav aria-label="Navegación principal" className={styles.nav}>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link aria-current="page" href="/portafolio/diseno">
            Portafolio
          </Link>
          <Link className={styles.contactLink} href="/#contacto">
            Hablemos <Arrow />
          </Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>Portafolio DIXOY</span>
          <span>Bogotá · Colombia</span>
        </div>

        <div className={styles.heroTitle}>
          <p>Selección / 2026</p>
          <h1>Diseño<span>.</span></h1>
        </div>

        <div className={styles.heroIntro}>
          <p>
            Ideas que terminan tomando forma.
          </p>
          <p>
            Una selección de identidades, piezas gráficas y sistemas visuales
            llevados del concepto a su aplicación real.
          </p>
        </div>

        <div aria-hidden="true" className={styles.heroLine}>
          <span />
        </div>
      </section>

      <section className={styles.statement}>
        <p>Diseño en DIXOY</p>
        <h2>
          No diseñamos piezas aisladas. Construimos lenguajes visuales que
          pueden vivir en una marca, un espacio, una prenda o una experiencia.
        </h2>
      </section>

      <section aria-label="Selección de trabajos de diseño" className={styles.gallery}>
        {work.map((item, index) => (
          <Link
            className={`${styles.work} ${sizeClass[item.size]}`}
            href={item.href}
            key={`${item.title}-${index}`}
          >
            <figure className={styles.media}>
              <Image
                alt={item.title}
                fill
                sizes={
                  item.size === "hero" || item.size === "wide"
                    ? "(max-width: 760px) 100vw, 66vw"
                    : "(max-width: 760px) 100vw, 42vw"
                }
                src={item.image}
              />
              <span className={styles.view}>
                Ver proyecto <Arrow />
              </span>
            </figure>
            <div className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.next}>
        <div>
          <p>El portafolio seguirá creciendo.</p>
          <h2>
            Identidad, campañas, editorial, digital y diseño aplicado.
          </h2>
        </div>
        <p>
          Esta primera selección reúne trabajos que ya forman parte del archivo
          visual de DIXOY. Nuevos casos se incorporarán como historias completas,
          con concepto, proceso y aplicaciones.
        </p>
      </section>

      <section className={styles.closing}>
        <p>¿Tienes una idea que todavía no tiene forma?</p>
        <Link href="/#contacto">
          Construyámosla <Arrow />
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY, inicio" className={styles.footerBrand} href="/">
          <Image
            alt="DIXOY"
            height={255}
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>
        <div className={styles.footerLinks}>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/servicios/diseno-de-marca">Diseño de marca</Link>
          <Link href="/#contacto">Contacto</Link>
        </div>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
      </footer>
    </main>
  );
}
