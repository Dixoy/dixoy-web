import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import catalog from "./videos.json";
import mediaConfig from "@/public/media/portfolio/filmaker/media-origin.json";
import type { Film } from "../portafolio/filmaker/catalog";
import { resolveFilmAssets } from "../portafolio/filmaker/catalog";
import FilmGallery from "../portafolio/filmaker/FilmGallery";
import shared from "../portafolio/diseno/design.module.css";
import styles from "../portafolio/filmaker/film.module.css";

// The videos are hosted on the same public Cloudflare R2 domain as the DIXOY portfolio.
// Their distinct prefix keeps Jonnathan's catalog and media independent from Julián's.
const films = resolveFilmAssets(catalog as Film[], process.env.FILM_MEDIA_ORIGIN ?? mediaConfig.origin);

const title = "Jonnathan Sánchez | Filmmaker y videógrafo";
const description =
  "Portafolio audiovisual de Jonnathan Sánchez. Una selección de videos, documentales, reels y proyectos de producción audiovisual.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jonnaSanchez" },
  // IMPORTANT: Enable indexing only after all R2 media and contact details are verified.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "https://dixoy.co/jonnaSanchez",
    locale: "es_CO",
    type: "website",
  },
};

export default function JonnathanPortfolioPage() {
  return (
    <main className={`${shared.page} ${styles.page}`}>
      <header className={shared.header}>
        <Link aria-label="DIXOY, inicio" className={shared.brand} href="/">
          <Image alt="DIXOY" height={255} width={986} priority src="/logos/logo-dixoy-horizontal.svg" />
        </Link>
        <nav aria-label="Navegación del portafolio" className={shared.nav}>
          <Link aria-current="page" href="/jonnaSanchez">Jonnathan Sánchez</Link>
          <a href="#proyectos">Proyectos</a>
          <a className={shared.contactLink} href="#contacto">Contacto ↗</a>
        </nav>
      </header>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span>Jonnathan Sánchez / Portafolio audiovisual</span>
          <span>Colombia</span>
        </div>
        <div className={styles.heroMain}>
          <div className={styles.heroTitleBlock}>
            <h1>Filmmaker<span>.</span></h1>
            <p className={styles.heroSignature}>
              Jonnathan Sánchez<span>Filmmaker · Videógrafo</span>
            </p>
          </div>
          <p>Historias que<br /><em>se mueven.</em></p>
        </div>
        <div className={styles.heroBottom}>
          <p>Imágenes que cuentan historias.</p>
          <span>Producción audiovisual · Video · Reels</span>
        </div>
      </section>
      <div id="proyectos">
        <FilmGallery films={films} viewerLabel="Jonnathan Sánchez / Filmmaker" />
      </div>
      <section id="contacto" className={styles.closing}>
        <div>
          <p>¿Tienes una historia que contar?</p>
          <h2>Hagamos que suceda<span>.</span></h2>
          <p>Datos de contacto de Jonnathan pendientes de confirmar.</p>
        </div>
      </section>
      <footer className={shared.footer}>
        <Link aria-label="DIXOY, inicio" className={shared.footerBrand} href="/">
          <Image alt="DIXOY" height={255} width={986} src="/logos/logo-dixoy-horizontal.svg" />
        </Link>
        <div className={shared.footerLinks}>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <span>© 2026 Jonnathan Sánchez · Sitio desarrollado por DIXOY</span>
      </footer>
    </main>
  );
}
