import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../hubVisual.module.css";

export const metadata: Metadata = {
  title: "Producción multimedia y audiovisual en Bogotá | DIXOY",
  description:
    "Video, fotografía, reels, podcast, entrevistas, streaming, cámaras, producción en vivo, cobertura y postproducción para empresas y eventos en Bogotá.",
  alternates: { canonical: "/soluciones/multimedia" },
  openGraph: {
    title: "Producción multimedia y audiovisual | DIXOY",
    description:
      "Contenido, grabación, cámaras, streaming, podcast y producción audiovisual para empresas y eventos.",
    images: ["/og-dixoy.png"],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/soluciones/multimedia",
  },
};

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  "Hola DIXOY, quiero cotizar un proyecto multimedia o audiovisual para mi empresa o evento.",
)}`;

const capabilities = [
  { title: "Video y contenido para redes", description: "Grabación y edición de reels, videos promocionales, piezas para campañas y contenido pensado para medios digitales." },
  { title: "Fotografía", description: "Registro de productos, equipos, espacios, eventos y contenido corporativo con una intención visual coherente." },
  { title: "Podcast, entrevistas y testimonios", description: "Producción de formatos conversacionales y contenidos de mayor profundidad para marcas, equipos y comunidades." },
  { title: "Streaming y producción en vivo", description: "Operación de cámaras, transmisión, coordinación técnica y soporte audiovisual para contenidos y eventos en directo." },
  { title: "Cobertura de eventos", description: "Registro audiovisual, cámaras y apoyo de producción para eventos corporativos, institucionales y experiencias en vivo." },
  { title: "Edición y postproducción", description: "Montaje, corrección, adaptación de formatos, piezas cortas y entrega final lista para publicación o presentación." },
];

export default function MultimediaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
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

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}><span />05 · Multimedia</p>
            <h1>Contenido que comunica. <em>Producción que funciona en cámara y en vivo.</em></h1>
            <p className={styles.lead}>
              DIXOY conecta grabación, cámaras, fotografía, edición, streaming y producción técnica para crear contenido y acompañar eventos desde la preparación hasta la entrega final.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de mi producción</a>
              <Link className={styles.secondary} href="/proyectos/integracion-equipo-audiovisual">Ver experiencia audiovisual</Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualMain}>
              <Image alt="Equipo audiovisual preparado por DIXOY" fill priority sizes="(max-width: 980px) 100vw, 44vw" src="/images/portfolio/optimized/project-10.webp" />
              <div className={styles.visualLabel}><span>Producción multimedia</span><strong>Cámaras, contenido, streaming y operación técnica</strong></div>
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Registro en video de un proyecto DIXOY" fill sizes="240px" src="/media/projects/point-of-sale/boru-finished-poster.webp?v=2" />
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Registro audiovisual de espacio corporativo" fill sizes="240px" src="/media/projects/corporate-spaces/office-video-poster.webp" />
            </div>
          </div>
        </div>

        <div className={styles.proofStrip}>
          <article><span>01</span><strong>Preparamos</strong><p>Definimos formato, objetivo, recursos y necesidades técnicas de la producción.</p></article>
          <article><span>02</span><strong>Producimos</strong><p>Grabamos, operamos cámaras, iluminación, sonido o transmisión según el alcance.</p></article>
          <article><span>03</span><strong>Entregamos</strong><p>Editamos, adaptamos y dejamos el contenido listo para publicar, presentar o archivar.</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Producción multimedia</p><h2>De un reel a una transmisión en vivo. <span>La producción se adapta al objetivo.</span></h2></div>
          <p>No trabajamos un único formato. Podemos entrar por una grabación puntual, una serie de contenidos, un podcast, una cobertura o una producción técnica más completa.</p>
        </div>

        <div className={styles.serviceGrid}>
          {capabilities.map((capability) => (
            <article className={styles.serviceCard} key={capability.title}>
              <small>Multimedia</small>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <span>Producción según alcance</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.projectBand}>
        <div className={styles.projectInner}>
          <div className={styles.projectCopy}>
            <p className={styles.sectionKicker}>Experiencia técnica + mirada creativa</p>
            <h2>No se trata solo de tener una cámara.</h2>
            <p>Una buena producción necesita entender el mensaje, cuidar la imagen, operar bien el equipo y saber qué debe pasar después de grabar. Por eso conectamos registro, producción en vivo y postproducción dentro de una misma lógica.</p>
            <Link href="/proyectos/integracion-equipo-audiovisual">Ver integración de equipo audiovisual</Link>
          </div>
          <div className={styles.projectImages}>
            <div><Image alt="Equipo audiovisual especializado" fill sizes="50vw" src="/images/portfolio/optimized/project-10.webp" /></div>
            <div><Image alt="Registro en video realizado por DIXOY" fill sizes="35vw" src="/media/projects/point-of-sale/boru-finished-poster.webp?v=2" /></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Para qué puede servir</p><h2>Contenido para comunicar. <span>Producción para hacer que ocurra.</span></h2></div>
          <p>La línea multimedia puede trabajar sola o conectarse con marca, tecnología, espacios y producción de eventos cuando el proyecto lo necesita.</p>
        </div>
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}><small>Marcas</small><h3>Contenido comercial</h3><p>Reels, campañas, producto, testimonios, entrevistas y piezas audiovisuales para comunicación de marca.</p><span>Video + fotografía + edición</span></article>
          <article className={styles.serviceCard}><small>Eventos</small><h3>Producción y cobertura</h3><p>Cámaras, registro, streaming, operación técnica y contenido posterior para eventos y experiencias presenciales.</p><span>En vivo + postproducción</span></article>
          <article className={styles.serviceCard}><small>Formatos</small><h3>Podcast y contenidos seriados</h3><p>Producciones que requieren continuidad, identidad visual, grabación y edición para construir una presencia constante.</p><span>Grabación + edición + adaptación</span></article>
        </div>
      </section>

      <section className={styles.closing}>
        <div><h2>¿Tienes algo que grabar, transmitir o producir?</h2><p>Cuéntanos qué quieres comunicar, dónde debe verse y qué nivel de producción necesita. Te ayudamos a aterrizar el formato y el alcance.</p></div>
        <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Cotizar producción multimedia</a>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Producción multimedia</span>
        <nav><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></nav>
      </footer>
    </main>
  );
}
