import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../hubVisual.module.css";
import media from "./multimedia.module.css";

export const metadata: Metadata = {
  title: "Producción multimedia y audiovisual en Bogotá | DIXOY",
  description:
    "Video, fotografía, reels, podcast, entrevistas, streaming, cámaras, producción en vivo, cobertura y postproducción para empresas y eventos en Bogotá.",
  alternates: { canonical: "/soluciones/multimedia" },
  openGraph: {
    title: "Producción multimedia y audiovisual | DIXOY",
    description:
      "Contenido, grabación, cámaras, streaming, podcast y producción audiovisual para empresas y eventos.",
    images: ["/media/multimedia/multimedia-interview.webp"],
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
              <Image alt="Producción de entrevista multicámara realizada por DIXOY" fill priority sizes="(max-width: 980px) 100vw, 44vw" src="/media/multimedia/multimedia-interview.webp" />
              <div className={styles.visualLabel}><span>Entrevistas + podcast</span><strong>Producción multicámara en un entorno real de grabación</strong></div>
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Cobertura audiovisual de evento con cámara en gimbal" fill sizes="240px" src="/media/multimedia/multimedia-event-gimbal.webp" />
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Montaje de producción audiovisual con cámaras, iluminación y monitor" fill sizes="240px" src="/media/multimedia/multimedia-live-studio.webp" />
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

      <section className={media.editorialBand}>
        <div className={media.editorialInner}>
          <div>
            <p className={media.editorialKicker}>Más que operar equipos</p>
            <h2>La parte técnica importa. <span>La intención detrás de cada toma también.</span></h2>
            <p>
              Una producción funciona cuando el mensaje, el encuadre, la operación y la entrega responden al mismo objetivo. Podemos asumir una parte puntual o conectar el proceso completo según el proyecto.
            </p>
          </div>
          <div className={media.editorialList}>
            <article className={media.editorialItem}><span>01</span><div><strong>Preproducción y enfoque</strong><p>Definimos qué se necesita grabar, para quién, en qué formato y con qué nivel técnico.</p></div></article>
            <article className={media.editorialItem}><span>02</span><div><strong>Cámaras y operación</strong><p>Trabajamos con configuraciones fijas, móviles o multicámara según la dinámica del contenido o evento.</p></div></article>
            <article className={media.editorialItem}><span>03</span><div><strong>Producción en vivo</strong><p>Integramos cámaras, transmisión y soporte técnico cuando el contenido debe suceder en tiempo real.</p></div></article>
            <article className={media.editorialItem}><span>04</span><div><strong>Edición y adaptación</strong><p>Convertimos el material en piezas listas para redes, presentación, archivo o campañas.</p></div></article>
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
