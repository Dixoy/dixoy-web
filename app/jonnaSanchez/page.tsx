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
import contactStyles from "./contact.module.css";
import heroStyles from "./hero.module.css";

// The videos are hosted on the same public Cloudflare R2 domain as the DIXOY portfolio.
// Their distinct prefix keeps Jonnathan's catalog and media independent from Julián's.
const films = resolveFilmAssets(catalog as Film[], process.env.FILM_MEDIA_ORIGIN ?? mediaConfig.origin);

const title = "Jonnathan Sánchez | Filmmaker y videógrafo";
const description =
  "Portafolio audiovisual de Jonnathan Sánchez. Una selección de videos, documentales, reels y proyectos de producción audiovisual.";

const socialImage = "https://dixoy.co/jonnaSanchez/opengraph-image.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/jonnaSanchez" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title,
    description,
    url: "https://dixoy.co/jonnaSanchez",
    locale: "es_CO",
    type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Filmmaker Jonnathan Sánchez" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
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
      <section className={heroStyles.hero} aria-label="Presentación de Jonnathan Sánchez">
        <div className={heroStyles.topline}>
          <span>Portafolio audiovisual / Jonnathan Sánchez</span>
          <span>Colombia · Selección de proyectos</span>
        </div>
        <div className={heroStyles.columns}>
          <div className={heroStyles.intro}>
            <p className={heroStyles.role}>Filmmaker / Videógrafo</p>
            <h1 className={heroStyles.name}>
              <span>Jonnathan</span>
              <span>Sánchez<span className={heroStyles.dot}>.</span></span>
            </h1>
            <div className={heroStyles.statement}>
              <p>Realizador audiovisual</p>
              <p>Territorios, personas y proyectos contados a través de la imagen.</p>
            </div>
            <a className={heroStyles.explore} href="#proyectos">
              Explorar proyectos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={heroStyles.visual}>
            <div
              className={heroStyles.mainStill}
              role="img"
              aria-label="Fotograma del proyecto Ranchería Ishamana, La Guajira"
              style={{ backgroundImage: `url("${films[5].poster}")` }}
            />
            <div
              className={heroStyles.secondaryStill}
              role="img"
              aria-label="Fotograma del Reel Congreso Naturgas"
              style={{ backgroundImage: `url("${films[6].poster}")` }}
            />
            <span className={heroStyles.frameLabel}>Ranchería Ishamana · La Guajira</span>
            <span className={heroStyles.frameCount}>11 proyectos</span>
            <span className={heroStyles.verticalWord}>Obra seleccionada</span>
          </div>
        </div>
        <div className={heroStyles.bottom}>
          <p>Documental · Institucional · Eventos · Reels</p>
          <a href="#proyectos">Ver los 11 proyectos <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <div id="proyectos">
        <FilmGallery films={films} viewerLabel="Jonnathan Sánchez / Filmmaker" />
      </div>
      <section id="contacto" className={styles.closing}>
        <div>
          <p>¿Tienes una historia que contar?</p>
          <h2>Hagamos que suceda<span>.</span></h2>
          <p className={contactStyles.contactInfo}>Jonnathan Sánchez · +57 318 562 8954</p>
        </div>
        <div className={contactStyles.actions}>
          <a className={contactStyles.whatsapp} href="https://wa.me/573185628954?text=Hola%20Jonnathan%2C%20vi%20tu%20portafolio%20y%20quisiera%20hablar%20de%20un%20proyecto%20audiovisual." target="_blank" rel="noopener noreferrer">
            Hablemos por WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a className={contactStyles.instagram} href="https://www.instagram.com/jonna.kimmedia/" target="_blank" rel="noopener noreferrer">
            Instagram · Jonna &amp; Kim Media <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <footer className={shared.footer}>
        <Link aria-label="DIXOY, inicio" className={shared.footerBrand} href="/">
          <Image alt="DIXOY" height={255} width={986} src="/logos/logo-dixoy-horizontal.svg" />
        </Link>
        <div className={shared.footerLinks}>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <a href="https://www.instagram.com/jonna.kimmedia/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        </div>
        <span>© 2026 Jonnathan Sánchez · Sitio desarrollado por DIXOY</span>
      </footer>
    </main>
  );
}
