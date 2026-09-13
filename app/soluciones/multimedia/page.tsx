import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../hubVisual.module.css";
import media from "./multimedia.module.css";

export const metadata: Metadata = {
  title: "Producción multimedia, escenografía y audiovisual en Bogotá | DIXOY",
  description:
    "Video, fotografía, reels, podcast, entrevistas, streaming, producción en vivo, escenografía, iluminación y montaje audiovisual para empresas y eventos en Bogotá.",
  alternates: { canonical: "/soluciones/multimedia" },
  openGraph: {
    title: "Producción multimedia, escenografía y audiovisual | DIXOY",
    description:
      "Contenido, cámaras, streaming, podcast, escenografía y producción técnica para empresas y eventos.",
    images: ["/media/multimedia/multimedia-event-gimbal.webp"],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/soluciones/multimedia",
  },
};

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  "Hola DIXOY, quiero cotizar un proyecto multimedia o audiovisual para mi empresa o evento.",
)}`;

const services = [
  ["01", "Video y contenido", "Reels, campañas, videos promocionales, testimonios y piezas pensadas para cada plataforma."],
  ["02", "Fotografía", "Producto, eventos, equipos, espacios y contenido corporativo con intención visual."],
  ["03", "Podcast y entrevistas", "Formatos conversacionales, testimoniales y contenidos seriados con producción técnica."],
  ["04", "Streaming y en vivo", "Operación de cámaras, transmisión, señal, monitoreo y soporte durante el evento."],
  ["05", "Escenografía y set", "Fondos, mobiliario, gráfica, ambientación e integración visual del espacio donde ocurre la producción."],
  ["06", "Edición y postproducción", "Montaje, corrección, adaptación de formatos y entregables listos para publicar o presentar."],
];

export default function MultimediaPage() {
  return (
    <main className={`${styles.page} ${media.page}`}>
      <header className={`${styles.header} ${media.header}`}>
        <Link aria-label="DIXOY, inicio" className={styles.logo} href="/">
          <Image alt="DIXOY" height={255} priority src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} />
        </Link>
        <nav aria-label="Navegación principal" className={styles.nav}>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/bogota">Bogotá</Link>
        </nav>
        <a className={styles.cta} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos →</a>
      </header>

      <section className={media.hero}>
        <div className={media.heroGrid}>
          <div className={media.heroCopy}>
            <p className={media.kicker}>05 · Multimedia / DIXOY</p>
            <h1>
              No solo grabamos.
              <span>Diseñamos lo que ocurre frente y detrás de cámara.</span>
            </h1>
            <p className={media.heroLead}>
              Contenido, cámaras, streaming, escenografía, iluminación y producción técnica conectados dentro de un mismo proyecto.
            </p>
            <div className={media.heroActions}>
              <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de mi producción</a>
              <Link href="#espacio">Ver escenografía y espacio</Link>
            </div>
          </div>

          <div className={media.heroVisual}>
            <div className={media.heroMainImage}>
              <Image
                alt="Producción audiovisual en evento"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                src="/media/multimedia/multimedia-event-gimbal.webp"
              />
              <div className={media.frameCorners} aria-hidden="true" />
              <div className={media.imageCaption}>
                <span>LIVE / EVENTOS</span>
                <strong>Cámara, señal y producción en contexto real.</strong>
              </div>
            </div>
            <div className={media.heroSideImage}>
              <Image
                alt="Producción multicámara para entrevista"
                fill
                sizes="260px"
                src="/media/multimedia/multimedia-interview.webp"
              />
            </div>
          </div>
        </div>

        <div className={media.signalBar}>
          <span>CAPTURE</span><i />
          <span>SPACE</span><i />
          <span>LIGHT</span><i />
          <span>LIVE</span><i />
          <span>POST</span>
        </div>
      </section>

      <section className={media.intro}>
        <div>
          <p className={media.sectionKicker}>Una línea completa</p>
          <h2>La cámara es solo una parte del sistema.</h2>
        </div>
        <p>
          Una buena producción también depende del espacio, la luz, la gráfica, el sonido, el flujo técnico y la forma en que todo se coordina. Por eso Multimedia en DIXOY se conecta naturalmente con nuestras capacidades de marca, espacios y tecnología.
        </p>
      </section>

      <section className={media.serviceMatrix}>
        {services.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={media.spaceSection} id="espacio">
        <div className={media.spaceVisual}>
          <Image
            alt="Montaje audiovisual con cámaras e iluminación"
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
            src="/media/multimedia/multimedia-live-studio.webp"
          />
          <div className={media.spaceGrid} aria-hidden="true" />
          <div className={media.spaceBadge}>SET / 01</div>
        </div>

        <div className={media.spaceCopy}>
          <p className={media.sectionKicker}>Escenografía + espacio</p>
          <h2>El espacio también produce.</h2>
          <p>
            El fondo, el mobiliario, la gráfica, la iluminación y la circulación cambian por completo cómo se percibe un contenido o un evento. Podemos diseñar y montar esa capa física para que la producción no dependa de improvisar el lugar.
          </p>
          <div className={media.spacePoints}>
            <div><span>01</span><strong>Concepto visual</strong><p>Definimos el lenguaje del set según marca, contenido y audiencia.</p></div>
            <div><span>02</span><strong>Escenografía</strong><p>Fondos, mobiliario, gráfica, elementos especiales y ambientación.</p></div>
            <div><span>03</span><strong>Luz y cámara</strong><p>Diseñamos posiciones, profundidad, iluminación y operación técnica.</p></div>
            <div><span>04</span><strong>Montaje</strong><p>Coordinamos instalación, pruebas y desmontaje cuando el proyecto lo requiere.</p></div>
          </div>
        </div>
      </section>

      <section className={media.productionSection}>
        <div className={media.productionTitle}>
          <p className={media.sectionKicker}>De la idea a la señal</p>
          <h2>Una producción puede empezar en una hoja, en un espacio o directamente en cámara.</h2>
        </div>

        <div className={media.productionRail}>
          <article><span>PRE</span><h3>Preproducción</h3><p>Objetivo, formato, guion, referencias, recursos y plan técnico.</p></article>
          <article><span>SET</span><h3>Espacio y escena</h3><p>Escenografía, gráfica, iluminación, mobiliario y disposición de cámaras.</p></article>
          <article><span>REC</span><h3>Producción</h3><p>Grabación, fotografía, operación multicámara, streaming y cobertura.</p></article>
          <article><span>POST</span><h3>Entrega</h3><p>Edición, adaptación, piezas cortas, archivos finales y publicación.</p></article>
        </div>
      </section>

      <section className={media.gallerySection}>
        <div className={media.galleryLarge}>
          <Image alt="Producción multicámara y entrevista" fill sizes="(max-width: 900px) 100vw, 58vw" src="/media/multimedia/multimedia-interview.webp" />
          <div><span>INTERVIEW / PODCAST</span><strong>Formato, set y operación trabajando como una sola producción.</strong></div>
        </div>
        <div className={media.gallerySmall}>
          <Image alt="Cámara en producción de evento" fill sizes="(max-width: 900px) 100vw, 36vw" src="/media/multimedia/multimedia-event-gimbal.webp" />
          <div><span>CAMERA / LIVE</span><strong>Producción móvil para eventos y contenidos en vivo.</strong></div>
        </div>
      </section>

      <section className={media.closing}>
        <div>
          <p className={media.sectionKicker}>¿Qué quieres producir?</p>
          <h2>Podemos empezar por el contenido, el evento o el espacio.</h2>
          <p>Cuéntanos qué quieres comunicar y dónde debe ocurrir. Construimos el alcance técnico y visual alrededor de ese objetivo.</p>
        </div>
        <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Cotizar producción multimedia →</a>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Producción multimedia</span>
        <nav><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></nav>
      </footer>
    </main>
  );
}
