import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./solutions.module.css";

export const metadata: Metadata = {
  title: "Soluciones para empresas | DIXOY",
  description:
    "Conoce las cuatro áreas con las que DIXOY conecta marca, espacios, tecnología y soluciones personalizadas para empresas.",
  alternates: { canonical: "/soluciones" },
};

const solutions = [
  {
    number: "01",
    title: "Tu marca",
    href: "/soluciones/marca",
    description:
      "Construimos cómo se ve, se presenta y comunica tu empresa, desde la identidad hasta la producción visual.",
    items: ["Identidad y diseño", "Impresión y gran formato", "POP, señalización y comunicación visual"],
  },
  {
    number: "02",
    title: "Tu espacio",
    href: "/soluciones/espacios",
    description:
      "Adecuamos y transformamos espacios para que funcionen mejor, comuniquen mejor y representen a tu empresa.",
    items: ["Adecuaciones", "Exhibición y mobiliario", "Stands, avisos y montajes"],
  },
  {
    number: "03",
    title: "Tecnología",
    href: "/soluciones/tecnologia",
    description:
      "Implementamos tecnología útil para organizar, proteger y hacer más eficiente la operación diaria.",
    items: ["Soporte e infraestructura", "Seguridad y control de acceso", "Soluciones digitales y DixApp"],
  },
  {
    number: "04",
    title: "Personalizado",
    href: "/soluciones/personalizado",
    description:
      "Desarrollamos productos y soluciones especiales cuando una opción estándar no resuelve lo que necesitas.",
    items: ["Textiles y promocionales", "Fabricación especial", "Proyectos a medida"],
  },
];

export default function SolutionsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="DIXOY, inicio">
          <Image src="/logos/logo-dixoy-horizontal.svg" alt="DIXOY" width={986} height={255} unoptimized />
        </Link>
        <nav className={styles.nav} aria-label="Navegación principal">
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/usme">Usme</Link>
          <Link className={styles.cta} href="/#contacto">Hablemos</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>Cómo ayudamos</p>
        <h1>
          Distintas capacidades. <span>Una sola forma de resolver.</span>
        </h1>
        <p className={styles.lead}>
          DIXOY conecta diseño, producción, espacios y tecnología para que una necesidad no termine repartida entre varios proveedores. Entendemos el objetivo y coordinamos la solución completa.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/#contacto">Cuéntanos qué necesitas</Link>
          <Link className={styles.secondary} href="/servicios">Ver servicios específicos</Link>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <h2>Cuatro áreas que se pueden conectar entre sí.</h2>
          <p>
            No son negocios separados. Son capacidades que usamos según lo que cada empresa necesita para avanzar.
          </p>
        </div>
        <div className={styles.grid}>
          {solutions.map((solution) => (
            <Link className={styles.card} href={solution.href} key={solution.title}>
              <span className={styles.number}>{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul>
                {solution.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.band}>
        <div>
          <h2>No necesitas saber qué proveedor buscar.</h2>
          <p>Cuéntanos el problema o la idea. Nosotros te ayudamos a aterrizar cómo resolverlo.</p>
        </div>
        <Link href="/servicios">Explorar servicios</Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Bogotá, Colombia</span>
        <Link href="/">Volver al inicio</Link>
      </footer>
    </main>
  );
}
