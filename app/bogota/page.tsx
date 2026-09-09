import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../localVisual.module.css";

export const metadata: Metadata = {
  title: "DIXOY en Bogotá | Soluciones para empresas",
  description:
    "Diseño, impresión, gran formato, adecuación de espacios, tecnología, control de acceso y soluciones personalizadas para empresas en Bogotá.",
  alternates: { canonical: "/bogota" },
  openGraph: {
    title: "DIXOY en Bogotá | Soluciones para empresas",
    description:
      "Un solo aliado para conectar marca, espacios, tecnología y soluciones personalizadas para empresas en Bogotá.",
    images: ["/og-dixoy.png"],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/bogota",
  },
};

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  "Hola DIXOY, estoy en Bogotá y quiero cotizar una solución para mi empresa.",
)}`;

const services = [
  ["Diseño de marca", "/servicios/diseno-de-marca", "Identidad visual y aplicaciones que ayudan a presentar mejor una empresa."],
  ["Impresión y gran formato", "/servicios/impresion-gran-formato", "Producción gráfica para oficinas, puntos de venta, eventos y comunicación comercial."],
  ["Avisos y señalización", "/servicios/avisos-y-senalizacion", "Visibilidad, orientación y gráfica aplicada para espacios interiores y exteriores."],
  ["Material POP", "/servicios/material-pop", "Piezas para exhibición, activaciones, campañas y comunicación en punto de venta."],
  ["Adecuación de espacios", "/servicios/adecuacion-de-espacios", "Intervenciones que conectan funcionalidad, imagen, producción e instalación."],
  ["Control de acceso", "/servicios/control-de-acceso", "Tecnología para administrar ingresos y reforzar la seguridad de espacios empresariales."],
  ["Soluciones digitales", "/servicios/soluciones-digitales", "Web, herramientas e integraciones para procesos reales de la empresa."],
] as const;

export default function BogotaPage() {
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
          <Link href="/usme">Usme</Link>
        </nav>
        <a className={styles.headerCta} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos</a>
      </header>

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>DIXOY · Bogotá</p>
            <h1>Soluciones para empresas que necesitan <span>hacer que las cosas pasen.</span></h1>
            <p className={styles.lead}>
              Conectamos diseño, producción, espacios y tecnología para resolver necesidades empresariales en Bogotá sin repartir el proyecto entre demasiados proveedores.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de mi proyecto</a>
              <a className={styles.secondary} href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image alt="Proyecto de ambientación y comunicación visual realizado por DIXOY" fill priority sizes="(max-width: 900px) 100vw, 48vw" src="/media/projects/point-of-sale/boru-wide.webp?v=2" />
            <div className={styles.heroOverlay}>
              <span>Proyecto real</span>
              <strong>Diseño, producción e implementación trabajando juntos.</strong>
            </div>
          </div>
        </div>
        <div className={styles.trustStrip}>
          <article><strong>Una sola conversación</strong><p>Partimos del objetivo y conectamos las capacidades que realmente hacen falta.</p></article>
          <article><strong>De idea a ejecución</strong><p>Podemos diseñar, producir, suministrar, instalar o coordinar según el proyecto.</p></article>
          <article><strong>Bogotá y proyectos en Colombia</strong><p>Atendemos necesidades locales y proyectos que requieren coordinación más amplia.</p></article>
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>Servicios para empresas en Bogotá</p>
            <h2>Entra por una necesidad concreta. <span>Conectamos lo demás si hace falta.</span></h2>
          </div>
          <p>Un aviso puede necesitar diseño e instalación. Un espacio puede necesitar gráfica, mobiliario y tecnología. Por eso organizamos el proyecto alrededor del objetivo, no de un catálogo cerrado.</p>
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
          <div><p className={styles.sectionKicker}>Aplicaciones reales</p><h2>La capacidad se entiende mejor <span>cuando se ve ejecutada.</span></h2></div>
          <p>Casos donde DIXOY conectó producción, espacios, imagen o tecnología para resolver una necesidad concreta.</p>
        </div>
        <div className={styles.projectGrid}>
          <Link className={styles.projectCard} href="/proyectos/ambientacion-punto-de-venta">
            <div className={styles.projectImage}><Image alt="Ambientación de punto de venta" fill sizes="(max-width: 900px) 100vw, 45vw" src="/media/projects/point-of-sale/boru-cover.webp?v=2" /></div>
            <div className={styles.projectCopy}><span>Imagen + espacio</span><h3>Ambientación de punto de venta</h3><p>Diseño, producción e instalación dentro de una misma ejecución.</p></div>
          </Link>
          <Link className={styles.projectCard} href="/proyectos/privacidad-visual-oficinas">
            <div className={styles.projectImage}><Image alt="Privacidad visual para oficinas" fill sizes="(max-width: 900px) 100vw, 27vw" src="/media/projects/corporate-spaces/office-overview.webp" /></div>
            <div className={styles.projectCopy}><span>Espacios corporativos</span><h3>Privacidad visual para oficinas</h3><p>Una solución funcional integrada al lenguaje del espacio.</p></div>
          </Link>
          <Link className={styles.projectCard} href="/proyectos/aviso-comercial-gran-formato">
            <div className={styles.projectImage}><Image alt="Aviso comercial de gran formato" fill sizes="(max-width: 900px) 100vw, 27vw" src="/images/portfolio/optimized/project-15.webp" /></div>
            <div className={styles.projectCopy}><span>Visibilidad exterior</span><h3>Aviso comercial</h3><p>Producción visual a gran escala con intención de marca.</p></div>
          </Link>
        </div>
      </section>

      <section className={styles.localBand}>
        <div className={styles.localCopy}>
          <p className={styles.sectionKicker}>Cómo trabajamos en Bogotá</p>
          <h2>No vendemos piezas aisladas. <span>Organizamos una solución.</span></h2>
          <p>Podemos atender algo puntual o asumir un alcance más amplio. Primero entendemos el objetivo, después definimos qué debe diseñarse, producirse, instalarse o integrarse para llegar a un resultado coherente.</p>
        </div>
        <div className={styles.localFacts}>
          <article><strong>01 · Entendemos</strong><p>Objetivo, tiempos, presupuesto, espacio y contexto.</p></article>
          <article><strong>02 · Conectamos</strong><p>Marca, producción, espacios o tecnología según la necesidad.</p></article>
          <article><strong>03 · Implementamos</strong><p>Coordinamos entrega, montaje, instalación o puesta en marcha.</p></article>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <p className={styles.sectionKicker}>Preguntas frecuentes</p>
          <h2>Antes de empezar un proyecto en Bogotá.</h2>
          <div className={styles.faqGrid}>
            <article><h3>¿DIXOY trabaja solo publicidad?</h3><p>No. La publicidad y la comunicación visual son una parte. También trabajamos espacios, tecnología y soluciones personalizadas.</p></article>
            <article><h3>¿Pueden encargarse de instalación?</h3><p>Sí, cuando el proyecto lo requiere podemos contemplar montaje, instalación o puesta en marcha dentro del alcance.</p></article>
            <article><h3>¿Puedo cotizar solo un servicio?</h3><p>Sí. Puedes llegar por una necesidad puntual y solo conectamos otras áreas si realmente aportan al proyecto.</p></article>
            <article><h3>¿Trabajan con empresas pequeñas?</h3><p>Sí. Atendemos negocios, emprendimientos y empresas según el alcance y la necesidad concreta.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <div><span>Tu proyecto en Bogotá</span><h2>Cuéntanos qué necesitas resolver.</h2><p>No necesitas llegar con la solución definida. Podemos ayudarte a aterrizarla desde el objetivo hasta la ejecución.</p></div>
          <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar con DIXOY</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY" className={styles.logo} href="/"><Image alt="DIXOY" height={255} src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} /></Link>
        <p>Soluciones para empresas en Bogotá.</p>
        <nav><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link><Link href="/usme">Usme</Link></nav>
      </footer>
    </main>
  );
}
