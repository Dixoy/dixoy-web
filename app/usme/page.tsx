import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../localVisual.module.css";

export const metadata: Metadata = {
  title: "DIXOY en Usme | Soluciones para empresas y negocios",
  description:
    "Diseño, impresión, avisos, producción multimedia, adecuación de espacios, tecnología y soluciones personalizadas para empresas, comercios y emprendedores en Usme, Bogotá.",
  alternates: { canonical: "/usme" },
  openGraph: {
    title: "DIXOY en Usme | Soluciones para empresas y negocios",
    description:
      "Diseño, producción multimedia, espacios, tecnología y soluciones personalizadas para empresas y negocios en Usme.",
    images: ["/og-dixoy.png"],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/usme",
  },
};

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  "Hola DIXOY, estoy en Usme y quiero cotizar una solución para mi negocio o empresa.",
)}`;

const services = [
  ["Diseño de marca", "/servicios/diseno-de-marca", "Identidad y piezas visuales para negocios que quieren presentarse mejor."],
  ["Impresión y gran formato", "/servicios/impresion-gran-formato", "Volantes, piezas comerciales, vinilos, pendones y producción gráfica de mayor escala."],
  ["Avisos y señalización", "/servicios/avisos-y-senalizacion", "Avisos, señalización y gráfica aplicada para hacer visible y ordenar mejor un espacio."],
  ["Material POP", "/servicios/material-pop", "Piezas para campañas, exhibición, activaciones y comunicación en punto de venta."],
  ["Producción multimedia", "/soluciones/multimedia", "Video, fotografía, reels, podcast, cámaras, streaming, cobertura de eventos y postproducción."],
  ["Adecuación de espacios", "/servicios/adecuacion-de-espacios", "Mejoras y montajes para locales, oficinas y espacios de atención."],
  ["Control de acceso", "/servicios/control-de-acceso", "Tecnología para administrar ingresos y reforzar la seguridad de espacios."],
  ["Soluciones digitales", "/servicios/soluciones-digitales", "Web y herramientas digitales para organizar, comunicar y atender mejor."],
] as const;

export default function UsmePage() {
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
        <a className={styles.headerCta} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos</a>
      </header>

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>DIXOY · Usme, Bogotá</p>
            <h1>Una empresa local también merece una solución <span>bien pensada.</span></h1>
            <p className={styles.lead}>
              Desde Usme acompañamos negocios, emprendimientos y empresas con diseño, impresión, multimedia, avisos, espacios, tecnología y producción personalizada, con atención cercana y capacidad para ejecutar más allá de una sola necesidad.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Cotizar en Usme</a>
              <a className={styles.secondary} href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image alt="Aviso comercial producido por DIXOY" fill priority sizes="(max-width: 900px) 100vw, 48vw" src="/images/portfolio/optimized/project-15.webp" />
            <div className={styles.heroOverlay}>
              <span>Cercanía + ejecución</span>
              <strong>Atención desde Usme para proyectos que necesitan diseño, producción o implementación.</strong>
            </div>
          </div>
        </div>
        <div className={styles.trustStrip}>
          <article><strong>Atención con cita previa</strong><p>Coordinamos cada visita para entender mejor la necesidad y aprovechar el tiempo.</p></article>
          <article><strong>Una solución, no varios proveedores</strong><p>Podemos conectar diseño, multimedia, producción, montaje y tecnología según el proyecto.</p></article>
          <article><strong>Usme, Bogotá y proyectos en Colombia</strong><p>Partimos de una atención local con capacidad para alcances más amplios.</p></article>
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>Servicios para negocios y empresas en Usme</p>
            <h2>Lo que necesitas hoy puede ser <span>la entrada a algo más completo.</span></h2>
          </div>
          <p>Puedes llegar buscando una impresión, un aviso, un video, una cobertura, un uniforme, una adecuación o una solución digital. Nosotros te ayudamos a organizar el alcance sin hacer el proyecto más complejo de lo necesario.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([title, href, text], index) => (
            <Link className={styles.serviceCard} href={href} key={href}>
              <span className={styles.serviceNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{text}</p><small>Conocer el servicio →</small></div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Trabajo que sí se puede mostrar</p><h2>Diseño y producción que terminan <span>en algo real.</span></h2></div>
          <p>Una parte importante de DIXOY es convertir ideas en piezas, contenido, espacios y materiales listos para usarse.</p>
        </div>
        <div className={styles.projectGrid}>
          <Link className={styles.projectCard} href="/proyectos/aviso-comercial-gran-formato">
            <div className={styles.projectImage}><Image alt="Aviso comercial de gran formato" fill sizes="(max-width: 900px) 100vw, 45vw" src="/images/portfolio/optimized/project-15.webp" /></div>
            <div className={styles.projectCopy}><span>Visibilidad comercial</span><h3>Aviso comercial de gran formato</h3><p>Producción visual pensada para ser clara, visible y ejecutable.</p></div>
          </Link>
          <Link className={styles.projectCard} href="/proyectos/textil-corporativo">
            <div className={styles.projectImage}><Image alt="Textil corporativo personalizado" fill sizes="(max-width: 900px) 100vw, 27vw" src="/media/projects/corporate-textile/jacket-team.webp" /></div>
            <div className={styles.projectCopy}><span>Identidad aplicada</span><h3>Textil corporativo</h3><p>Marca llevada a prendas y equipos de trabajo.</p></div>
          </Link>
          <Link className={styles.projectCard} href="/proyectos/integracion-equipo-audiovisual">
            <div className={styles.projectImage}><Image alt="Equipo audiovisual preparado por DIXOY" fill sizes="(max-width: 900px) 100vw, 27vw" src="/images/portfolio/optimized/project-10.webp" /></div>
            <div className={styles.projectCopy}><span>Multimedia + tecnología</span><h3>Integración audiovisual</h3><p>Equipo preparado para registro, producción y operación en campo.</p></div>
          </Link>
        </div>
      </section>

      <section className={styles.localBand}>
        <div className={styles.localCopy}>
          <p className={styles.sectionKicker}>Cerca para resolver mejor</p>
          <h2>Una base local en Usme. <span>Una capacidad que no se queda solo en Usme.</span></h2>
          <p>La cercanía facilita reuniones, visitas y coordinación cuando el proyecto lo necesita. Al mismo tiempo, DIXOY puede producir, grabar, instalar o acompañar proyectos en otros puntos de Bogotá y, según el alcance, en otras ciudades.</p>
        </div>
        <div className={styles.localFacts}>
          <article><strong>Atención con cita</strong><p>Coordinamos previamente para darte un espacio de atención más útil y enfocado.</p></article>
          <article><strong>Proyectos puntuales o integrales</strong><p>Podemos resolver una sola necesidad o conectar varias capacidades.</p></article>
          <article><strong>Producción + implementación</strong><p>No nos quedamos únicamente en el diseño cuando el proyecto requiere ejecución.</p></article>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <p className={styles.sectionKicker}>Preguntas frecuentes</p>
          <h2>Antes de cotizar con DIXOY en Usme.</h2>
          <div className={styles.faqGrid}>
            <article><h3>¿Atienden negocios pequeños?</h3><p>Sí. Podemos trabajar con emprendimientos, comercios y empresas según la necesidad y el alcance del proyecto.</p></article>
            <article><h3>¿Puedo solicitar una visita?</h3><p>Sí, cuando el proyecto lo requiere podemos coordinar una visita o reunión previa según disponibilidad.</p></article>
            <article><h3>¿Hacen solo impresión y avisos?</h3><p>No. También trabajamos multimedia, video, producción en vivo, adecuación de espacios, tecnología, soluciones digitales y producción personalizada.</p></article>
            <article><h3>¿Trabajan fuera de Usme?</h3><p>Sí. Atendemos proyectos en Bogotá y podemos evaluar alcances en otras ciudades según el tipo de trabajo.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <div><span>¿Tienes algo por resolver?</span><h2>Cuéntanos la necesidad. Nosotros te ayudamos a aterrizarla.</h2><p>Puede ser una pieza puntual, una producción multimedia o un proyecto que conecte varias áreas de DIXOY.</p></div>
          <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar con DIXOY</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY" className={styles.logo} href="/"><Image alt="DIXOY" height={255} src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} /></Link>
        <p>Soluciones para empresas y negocios en Usme.</p>
        <nav><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link><Link href="/bogota">Bogotá</Link></nav>
      </footer>
    </main>
  );
}
