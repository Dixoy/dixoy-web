import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./usme.module.css";

export const metadata: Metadata = {
  title: "DIXOY en Usme | Soluciones para empresas y negocios",
  description:
    "Diseño, impresión, publicidad, adecuación de espacios, tecnología y productos personalizados para empresas y negocios en Usme, Bogotá.",
  alternates: {
    canonical: "/usme",
  },
  openGraph: {
    title: "DIXOY en Usme | Soluciones para empresas y negocios",
    description:
      "Un solo aliado para diseño, impresión, espacios, tecnología y soluciones personalizadas en Usme.",
    images: ["/og-dixoy.png"],
    locale: "es_CO",
    siteName: "DIXOY",
    type: "website",
    url: "/usme",
  },
};

const whatsappMessage = encodeURIComponent(
  "Hola DIXOY, estoy en Usme y quiero cotizar una solución para mi negocio o empresa.",
);

const whatsappLink = `https://wa.me/573118072144?text=${whatsappMessage}`;

const solutions = [
  {
    number: "01",
    title: "Tu marca",
    text: "Diseño, identidad, impresión, avisos, señalización, material POP y comunicación visual para hacer visible tu negocio.",
    items: ["Diseño e identidad", "Impresión y gran formato", "Avisos, POP y señalización"],
  },
  {
    number: "02",
    title: "Tu espacio",
    text: "Adecuamos y transformamos espacios comerciales y corporativos para que funcionen mejor y representen tu marca.",
    items: ["Adecuaciones locativas", "Ambientación y exhibición", "Stands, mobiliario y montajes"],
  },
  {
    number: "03",
    title: "Tecnología",
    text: "Implementamos tecnología útil para organizar, conectar y proteger la operación de tu empresa.",
    items: ["Soporte e infraestructura", "Redes y control de acceso", "Web y soluciones digitales"],
  },
  {
    number: "04",
    title: "Personalizado",
    text: "Desarrollamos productos y soluciones especiales cuando necesitas algo que no se resuelve con una opción estándar.",
    items: ["Textiles corporativos", "Promocionales", "Producciones a medida"],
  },
];

export default function UsmePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link aria-label="Ir al inicio de DIXOY" className={styles.logo} href="/">
          <Image
            alt="DIXOY"
            height={255}
            priority
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>
        <nav aria-label="Navegación de DIXOY en Usme">
          <a href="#soluciones">Soluciones</a>
          <a href="#como-trabajamos">Cómo trabajamos</a>
          <Link href="/tienda">Tienda</Link>
        </nav>
        <a className={styles.headerCta} href={whatsappLink} rel="noopener noreferrer" target="_blank">
          Cotizar
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>DIXOY en Usme · Bogotá</p>
          <h1>
            Soluciones para hacer avanzar <span>tu negocio.</span>
          </h1>
          <p className={styles.lead}>
            Estamos en Usme y acompañamos empresas, comercios y emprendedores con diseño,
            producción, adecuación de espacios, tecnología y soluciones personalizadas.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">
              Cuéntanos qué necesitas
            </a>
            <a className={styles.secondary} href="#soluciones">
              Ver soluciones
            </a>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <span>Un solo aliado</span>
          <strong>De la idea a la implementación.</strong>
          <p>
            No tienes que coordinar varios proveedores. Entendemos la necesidad, proponemos la solución y acompañamos la ejecución.
          </p>
        </aside>
      </section>

      <section className={styles.intro}>
        <p className={styles.kicker}>Más que publicidad</p>
        <div>
          <h2>Una empresa puede necesitar muchas cosas. Nosotros conectamos las piezas.</h2>
          <p>
            Puedes llegar a DIXOY buscando un aviso, una impresión, uniformes, una página web,
            un control de acceso o una adecuación. Nuestro trabajo es entender el objetivo completo
            y ayudarte a resolverlo de forma coherente.
          </p>
        </div>
      </section>

      <section className={styles.solutions} id="soluciones">
        {solutions.map((solution) => (
          <article className={styles.card} key={solution.title}>
            <span className={styles.number}>{solution.number}</span>
            <h2>{solution.title}</h2>
            <p>{solution.text}</p>
            <ul>
              {solution.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.localSection} id="como-trabajamos">
        <div>
          <p className={styles.kicker}>Cerca para resolver mejor</p>
          <h2>Atención desde Usme, capacidad para proyectos en Bogotá y Colombia.</h2>
        </div>
        <div className={styles.localGrid}>
          <article>
            <strong>01 · Entendemos</strong>
            <p>Nos cuentas qué necesitas, para cuándo y qué quieres lograr.</p>
          </article>
          <article>
            <strong>02 · Proponemos</strong>
            <p>Organizamos materiales, diseño, tecnología o producción según el proyecto.</p>
          </article>
          <article>
            <strong>03 · Ejecutamos</strong>
            <p>Coordinamos la producción, instalación o entrega de la solución.</p>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.kicker}>¿Tienes algo por resolver?</p>
          <h2>No necesitas saber qué proveedor buscar. Cuéntanos el problema.</h2>
          <p>Te ayudamos a convertirlo en una solución clara y realizable.</p>
        </div>
        <a href={whatsappLink} rel="noopener noreferrer" target="_blank">
          Hablar con DIXOY
        </a>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY" className={styles.logo} href="/">
          <Image
            alt="DIXOY"
            height={255}
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>
        <p>Soluciones para la imagen, el espacio y la operación de tu empresa.</p>
        <div>
          <Link href="/">Inicio</Link>
          <Link href="/tienda">Tienda</Link>
          <a href={whatsappLink} rel="noopener noreferrer" target="_blank">Contacto</a>
        </div>
      </footer>
    </main>
  );
}
