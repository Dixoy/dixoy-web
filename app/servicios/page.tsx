import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../hubVisual.module.css";

export const metadata: Metadata = {
  title: "Servicios para empresas en Bogotá | DIXOY",
  description:
    "Diseño de marca, impresión, avisos, material POP, producción multimedia, adecuación de espacios, control de acceso y soluciones digitales para empresas en Bogotá.",
  alternates: { canonical: "/servicios" },
};

const services = [
  { title: "Diseño de marca", href: "/servicios/diseno-de-marca", area: "Tu marca", description: "Identidad visual y herramientas de marca para empresas que necesitan verse claras y coherentes." },
  { title: "Impresión y gran formato", href: "/servicios/impresion-gran-formato", area: "Tu marca", description: "Producción gráfica para espacios, campañas, puntos de venta y comunicación corporativa." },
  { title: "Avisos y señalización", href: "/servicios/avisos-y-senalizacion", area: "Marca + espacio", description: "Elementos para identificar, orientar y hacer visible una empresa dentro y fuera de sus espacios." },
  { title: "Material POP", href: "/servicios/material-pop", area: "Tu marca", description: "Piezas impresas, exhibición y producción promocional para campañas, activaciones y puntos de venta." },
  { title: "Producción multimedia", href: "/soluciones/multimedia", area: "Multimedia", description: "Video, fotografía, reels, podcast, entrevistas, streaming, cámaras, producción en vivo y postproducción." },
  { title: "Adecuación de espacios", href: "/servicios/adecuacion-de-espacios", area: "Tu espacio", description: "Intervenciones y montajes para mejorar cómo funciona y se presenta un espacio comercial o corporativo." },
  { title: "Control de acceso", href: "/servicios/control-de-acceso", area: "Tecnología", description: "Sistemas de ingreso, seguridad y control para oficinas, sedes y espacios empresariales." },
  { title: "Soluciones digitales", href: "/servicios/soluciones-digitales", area: "Tecnología", description: "Web, herramientas e integraciones digitales que ayudan a organizar, conectar y atender mejor la operación." },
];

export default function ServicesPage() {
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
        <Link className={styles.cta} href="/#contacto">Hablemos →</Link>
      </header>

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}><span />Servicios DIXOY</p>
            <h1>Necesidades concretas. <em>Soluciones que pueden crecer contigo.</em></h1>
            <p className={styles.lead}>
              Puedes llegar por una necesidad puntual: un aviso, una impresión, una producción audiovisual, una adecuación o una herramienta digital. Si el proyecto necesita más, conectamos otras capacidades sin obligarte a coordinar varios proveedores.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/#contacto">Cuéntanos qué necesitas</Link>
              <Link className={styles.secondary} href="/soluciones">Ver cómo trabaja DIXOY</Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualMain}>
              <Image alt="Aviso comercial producido por DIXOY" fill priority sizes="(max-width: 980px) 100vw, 44vw" src="/images/portfolio/optimized/project-15.webp" />
              <div className={styles.visualLabel}><span>Servicio + ejecución</span><strong>De una necesidad puntual a una solución completa</strong></div>
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Equipo audiovisual preparado por DIXOY" fill sizes="240px" src="/images/portfolio/optimized/project-10.webp" />
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Textil corporativo personalizado" fill sizes="240px" src="/media/projects/corporate-textile/finished-polos.webp" />
            </div>
          </div>
        </div>

        <div className={styles.proofStrip}>
          <article><span>01</span><strong>Encuentra</strong><p>Parte del servicio que más se parece a lo que necesitas hoy.</p></article>
          <article><span>02</span><strong>Conecta</strong><p>Si el proyecto requiere otra capacidad, la sumamos dentro del mismo alcance.</p></article>
          <article><span>03</span><strong>Ejecuta</strong><p>Coordinamos producción, implementación y entrega según el caso.</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Servicios específicos</p><h2>Una entrada clara para cada necesidad. <span>Sin perder la visión completa.</span></h2></div>
          <p>Cada servicio responde una búsqueda y un problema concreto. Pero no lo tratamos como una isla: si necesita diseño, multimedia, producción, instalación o tecnología adicional, podemos integrarlo.</p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <Link className={styles.serviceCard} href={service.href} key={service.href}>
              <small>{service.area}</small>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>Ver servicio →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.projectBand}>
        <div className={styles.projectInner}>
          <div className={styles.projectCopy}>
            <p className={styles.sectionKicker}>Más que un catálogo</p>
            <h2>Un servicio puede ser solo el punto de partida.</h2>
            <p>Un cliente puede llegar buscando impresión y terminar necesitando instalación. Puede llegar por un evento y necesitar cámaras, streaming y contenido posterior. Lo importante es resolver bien el objetivo, no encajarlo a la fuerza en una categoría.</p>
            <Link href="/proyectos">Ver cómo se conectan en proyectos reales</Link>
          </div>
          <div className={styles.projectImages}>
            <div><Image alt="Ambientación de punto de venta" fill sizes="50vw" src="/media/projects/point-of-sale/boru-wide.webp?v=2" /></div>
            <div><Image alt="Equipo audiovisual especializado" fill sizes="35vw" src="/images/portfolio/optimized/project-10.webp" /></div>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div><h2>¿No ves exactamente lo que necesitas?</h2><p>No pasa nada. Cuéntanos el objetivo y te ayudamos a construir el alcance correcto, aunque combine varias áreas o requiera algo especial.</p></div>
        <Link className={styles.primary} href="/#contacto">Hablar con DIXOY</Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Servicios para empresas</span>
        <nav><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/proyectos">Proyectos</Link><Link href="/usme">Usme</Link></nav>
      </footer>
    </main>
  );
}
