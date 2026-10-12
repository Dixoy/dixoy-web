import type { Metadata } from "next";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import PortfolioTabs from "../PortfolioTabs";
import catalog from "@/public/media/portfolio/filmaker/videos.json";
import mediaConfig from "@/public/media/portfolio/filmaker/media-origin.json";
import { parseFilms, resolveFilmAssets } from "./catalog";
import FilmGallery from "./FilmGallery";
import shared from "../diseno/design.module.css";
import styles from "./film.module.css";

const films = resolveFilmAssets(parseFilms(catalog), process.env.FILM_MEDIA_ORIGIN ?? mediaConfig.origin);
for (const film of films) {
  for (const asset of [film.src, film.previewSrc, film.poster]) {
    if (!asset || !asset.startsWith("/")) continue;
    const file = join(process.cwd(), "public", asset);
    if (!existsSync(file)) {
      throw new Error(`Filmmaker: falta el archivo public${asset} (${film.title}).`);
    }
    if (statSync(file).size > 25 * 1024 * 1024) {
      throw new Error(`Filmmaker: ${asset} supera los 25 MiB de Cloudflare Pages. Alojar los videos en R2 y configurar FILM_MEDIA_ORIGIN.`);
    }
  }
}
const title = "Filmmaker · Julián Bonilla | DIXOY";
const description = "Portafolio audiovisual de Julián Bonilla, productor multimedia en DIXOY. Dirección, producción y edición de historias en movimiento.";
const socialImage = "https://dixoy.co/portafolio/filmaker/opengraph-image.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portafolio/filmaker" },
  robots: { index: films.length > 0, follow: true, googleBot: { index: films.length > 0, follow: true } },
  openGraph: {
    title, description, url: "https://dixoy.co/portafolio/filmaker", siteName: "DIXOY",
    locale: "es_CO", type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Filmmaker · Julián Bonilla, productor multimedia en DIXOY" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function FilmPortfolioPage() {
  return (
    <main className={`${shared.page} ${styles.page}`}>
      <header className={shared.header}>
        <Link aria-label="DIXOY, inicio" className={shared.brand} href="/">
          <Image alt="DIXOY" height={255} width={986} priority src="/logos/logo-dixoy-horizontal.svg" />
        </Link>
        <nav aria-label="Navegación principal" className={shared.nav}>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link aria-current="page" href="/portafolio/filmaker">Portafolio</Link>
          <Link className={shared.contactLink} href="/#contacto">Hablemos ↗</Link>
        </nav>
      </header>
      <PortfolioTabs active="filmaker" />
      <section className={styles.hero}>
        <div className={styles.eyebrow}><span>Portafolio DIXOY / Audiovisual</span><span>Bogotá · Colombia</span></div>
        <div className={styles.heroMain}>
          <div className={styles.heroTitleBlock}>
            <h1>Filmmaker<span>.</span></h1>
            <p className={styles.heroSignature}>Julián Bonilla<span>Productor multimedia</span></p>
          </div>
          <p>Historias que<br /><em>se mueven.</em></p>
        </div>
        <div className={styles.heroBottom}>
          <p>Una mirada. Muchas formas de contar.</p>
          <span>Dirección · Producción · Edición</span>
        </div>
      </section>
      <FilmGallery films={films} />
      <section className={styles.closing}>
        <div><p>La próxima historia puede ser la tuya.</p><h2>Hagamos que suceda<span>.</span></h2></div>
        <Link href="/#contacto">Hablemos de tu proyecto <span aria-hidden="true">↗</span></Link>
      </section>
      <footer className={shared.footer}>
        <Link aria-label="DIXOY, inicio" className={shared.footerBrand} href="/"><Image alt="DIXOY" height={255} width={986} src="/logos/logo-dixoy-horizontal.svg" /></Link>
        <div className={shared.footerLinks}><Link href="/portafolio/diseno">Diseño</Link><Link href="/soluciones/multimedia">Producción multimedia</Link><Link href="/#contacto">Contacto</Link></div>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
      </footer>
    </main>
  );
}
