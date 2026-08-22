import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../usme/usme.module.css";

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

const whatsappMessage = encodeURIComponent(
  "Hola DIXOY, estoy en Bogotá y quiero cotizar una solución para mi empresa.",
);
const whatsappLink = `https://wa.me/573118072144?text=${whatsappMessage}`;

const services = [
  {
    title: "Diseño de marca",
    href: "/servicios/diseno-de-marca",
    text: "Identidad visual y aplicaciones para empresas que necesitan verse claras, coherentes y profesionales.",
  },
  {
    title: "Impresión y gran formato",
    href: "/servicios/impresion-gran-formato",
    text: "Producción gráfica para comunicación comercial, puntos de venta, oficinas, eventos y espacios.",
  },
  {
    title: "Avisos y señalización",
    href: "/servicios/avisos-y-senalizacion",
    text: "Elementos para identificar, orientar y hacer visible una empresa en espacios interiores y exteriores.",
  },
  {
    title: "Material POP",
    href: "/servicios/material-pop",
    text: "Piezas para exhibición, campañas, activaciones, lanzamientos y comunicación en punto de venta.",
  },
  {
    title: "Adecuación de espacios",
    href: "/servicios/adecuacion-de-espacios",
    text: "Intervenciones comerciales y corporativas que conectan funcionalidad, imagen e implementación.",
  },
  {
    title: "Control de acceso",
    href: "/servicios/control-de-acceso",
    text: "Soluciones para administrar ingresos y reforzar la seguridad de oficinas, locales y áreas restringidas.",
  },
  {
    title: "Soluciones digitales",
    href: "/servicios/soluciones-digitales",
    text: "Web, herramientas digitales y tecnología aplicada a procesos reales de la empresa.",
  },
];

export default function BogotaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link aria-label="Ir al inicio de DIXOY" className={styles.logo} href="/">
          <Image alt="DIXOY" height={255} priority src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} />
        </Link>
        <nav aria-label="Navegación DIXOY Bogotá">
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/usme">Usme</Link>
        </nav>
        <a className={styles.headerCta} href={whatsappLink} rel="noopener noreferrer" target="_blank">Cotizar</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>DIXOY · Bogotá</p>
          <h1>Una necesidad empresarial puede necesitar <span>más de una solución.</span></h1>
          <p className={styles.lead}>
            En Bogotá conectamos diseño, producción, espacios y tecnología para que tu empresa pueda resolver proyectos con un solo aliado y una ejecución coordinada.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de mi proyecto</a>
            <a className={styles.secondary} href="#servicios">Ver servicios</a>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <span>Soluciones integrales</span>
          <strong>Marca, espacio, tecnología y personalizado.</strong>
          <p>Entramos por la necesidad concreta y conectamos otras capacidades cuando el proyecto lo requiere.</p>
        </aside>
      </section>

      <section className={styles.intro}>
        <p className={styles.kicker}>DIXOY para empresas en Bogotá</p>
        <div>
          <h2>No somos solo publicidad. Ayudamos a resolver cómo se ve, funciona y avanza una empresa.</h2>
          <p>
            Desde una pieza impresa o un aviso hasta una adecuación, un sistema de acceso o una solución digital. Podemos atender una necesidad puntual o coordinar varias especialidades dentro del mismo proyecto.
          </p>
        </div>
      </section>

      <section className={styles.solutions} id="servicios">
        {services.map((service, index) => (
          <article className={styles.card} key={service.href}>
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <Link href={service.href}>Conocer el servicio →</Link>
          </article>
        ))}
      </section>

      <section className={styles.localSection}>
        <div>
          <p className={styles.kicker}>Cómo trabajamos</p>
          <h2>Una sola conversación para organizar mejor el proyecto.</h2>
        </div>
        <div className={styles.localGrid}>
          <article><strong>01 · Entendemos</strong><p>Partimos del objetivo, el espacio, el presupuesto y el tiempo disponible.</p></article>
          <article><strong>02 · Conectamos</strong><p>Definimos qué capacidades de DIXOY hacen falta y cómo deben trabajar juntas.</p></article>
          <article><strong>03 · Implementamos</strong><p>Coordinamos producción, suministro, instalación o entrega según el alcance.</p></article>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.kicker}>¿Qué necesita tu empresa?</p>
          <h2>Puede ser una sola cosa o un proyecto completo.</h2>
          <p>Cuéntanos el objetivo y te ayudamos a aterrizar la forma de resolverlo.</p>
        </div>
        <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar con DIXOY</a>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY" className={styles.logo} href="/">
          <Image alt="DIXOY" height={255} src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} />
        </Link>
        <p>Soluciones para la imagen, el espacio y la operación de tu empresa.</p>
        <div>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/usme">Usme</Link>
          <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Contacto</a>
        </div>
      </footer>
    </main>
  );
}
