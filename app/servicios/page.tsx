import type { Metadata } from "next";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Servicios para empresas en Bogotá | DIXOY",
  description:
    "Diseño de marca, impresión, avisos, material POP, adecuación de espacios, control de acceso y soluciones digitales para empresas en Bogotá.",
  alternates: { canonical: "/servicios" },
};

const services = [
  { title: "Diseño de marca", href: "/servicios/diseno-de-marca", area: "Tu marca", description: "Identidad visual y herramientas de marca para empresas que necesitan verse claras y coherentes." },
  { title: "Impresión y gran formato", href: "/servicios/impresion-gran-formato", area: "Tu marca", description: "Producción gráfica para espacios, campañas, puntos de venta y comunicación corporativa." },
  { title: "Avisos y señalización", href: "/servicios/avisos-y-senalizacion", area: "Tu marca + Tu espacio", description: "Elementos para identificar, orientar y hacer visible una empresa dentro y fuera de sus espacios." },
  { title: "Material POP", href: "/servicios/material-pop", area: "Tu marca", description: "Piezas impresas, exhibición y producción promocional para campañas y puntos de venta." },
  { title: "Adecuación de espacios", href: "/servicios/adecuacion-de-espacios", area: "Tu espacio", description: "Intervenciones y montajes para mejorar cómo funciona y se presenta un espacio comercial o corporativo." },
  { title: "Control de acceso", href: "/servicios/control-de-acceso", area: "Tecnología", description: "Sistemas de ingreso, seguridad y control para oficinas, sedes y espacios empresariales." },
  { title: "Soluciones digitales", href: "/servicios/soluciones-digitales", area: "Tecnología", description: "Web, herramientas digitales e integraciones que ayudan a organizar y conectar la operación." },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">DIXOY</Link>
        <nav className={styles.nav} aria-label="Navegación principal">
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/usme">Usme</Link>
          <Link className={styles.cta} href="/#contacto">Hablemos</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>Servicios DIXOY</p>
        <h1>Entradas concretas a una <span>solución más completa.</span></h1>
        <p className={styles.lead}>
          Puedes llegar a DIXOY por una necesidad puntual. Si el proyecto requiere conectar otras capacidades, podemos integrarlas sin obligarte a coordinar varios proveedores.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/#contacto">Cuéntanos qué necesitas</Link>
          <Link className={styles.secondary} href="/soluciones">Entender cómo trabaja DIXOY</Link>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <h2>Servicios pensados desde necesidades reales.</h2>
          <p>Cada página responde una búsqueda concreta, pero forma parte de una misma capacidad de ejecución.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link className={styles.card} href={service.href} key={service.href}>
              <small>{service.area}</small>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.contextBand}>
        <div>
          <p className={styles.sectionLabel}>Más que un catálogo</p>
          <h2>Si no encuentras exactamente lo que necesitas, igual podemos partir de tu objetivo.</h2>
          <p>DIXOY no funciona únicamente por servicios cerrados. Podemos construir propuestas que combinen varias áreas según cada proyecto.</p>
        </div>
        <Link href="/#contacto">Hablar con DIXOY</Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
        <Link href="/">Volver al inicio</Link>
      </footer>
    </main>
  );
}
