import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./design.module.css";
import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Portafolio Julián Bonilla - DIXOY",
  description:
    "Diseño gráfico, identidad visual y proyectos creativos. Una selección de trabajos de Julián Bonilla para DIXOY.",
  alternates: { canonical: "/portafolio/diseno" },
  openGraph: {
    title: "Portafolio Julián Bonilla - DIXOY",
    description:
      "Diseño gráfico, identidad visual y proyectos creativos. Una selección de trabajos de Julián Bonilla para DIXOY.",
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "https://dixoy.co/portafolio/diseno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio Julián Bonilla - DIXOY",
    description:
      "Diseño gráfico, identidad visual y proyectos creativos de Julián Bonilla para DIXOY.",
  },
};

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
          <div className={styles.heroTitleHeading}>
            <h1>Diseño<span>.</span></h1>
            <p className={styles.heroSignature}>Julián Bonilla <span>· Dirección de diseño</span></p>
          </div>
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

      <section aria-label="Selección de trabajos de diseño">
        <PortfolioGallery />
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
