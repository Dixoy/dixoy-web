import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../hubVisual.module.css";
import central from "../multimediaFeature.module.css";

export const metadata: Metadata = {
  title: "Soluciones para empresas | DIXOY",
  description:
    "Conoce las cinco áreas con las que DIXOY conecta marca, espacios, tecnología, multimedia y soluciones personalizadas para empresas.",
  alternates: { canonical: "/soluciones" },
};

const solutions = [
  {
    number: "01",
    title: "Tu marca",
    href: "/soluciones/marca",
    description: "Identidad, impresión y comunicación visual conectadas para que tu empresa se vea tan bien como trabaja.",
    items: ["Identidad y diseño", "Impresión y gran formato", "POP, avisos y señalización"],
    image: "/media/projects/point-of-sale/boru-cover.webp?v=2",
    alt: "Ambientación de punto de venta realizada por DIXOY",
  },
  {
    number: "02",
    title: "Tu espacio",
    href: "/soluciones/espacios",
    description: "Adecuación, ambientación y montaje para espacios que deben funcionar mejor y representar mejor a tu empresa.",
    items: ["Adecuaciones", "Exhibición y mobiliario", "Montajes e instalación"],
    image: "/media/projects/corporate-spaces/office-overview.webp",
    alt: "Espacio corporativo intervenido por DIXOY",
  },
  {
    number: "03",
    title: "Tecnología",
    href: "/soluciones/tecnologia",
    description: "Infraestructura, soporte, seguridad y herramientas digitales pensadas para necesidades reales de operación.",
    items: ["Soporte e infraestructura", "Seguridad y control", "Soluciones digitales y DixApp"],
    image: "/images/portfolio/optimized/project-10.webp",
    alt: "Integración de tecnología especializada por DIXOY",
  },
  {
    number: "04",
    title: "Personalizado",
    href: "/soluciones/personalizado",
    description: "Productos corporativos y desarrollos especiales cuando una opción estándar no resuelve lo que necesitas.",
    items: ["Textiles y promocionales", "Producción especial", "Proyectos a medida"],
    image: "/media/projects/corporate-textile/team-uniforms.webp",
    alt: "Textil corporativo personalizado por DIXOY",
  },
];

export default function SolutionsPage() {
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
            <p className={styles.eyebrow}><span />Cómo ayudamos</p>
            <h1>Distintas capacidades. <em>Una sola forma de resolver.</em></h1>
            <p className={styles.lead}>
              DIXOY conecta diseño, producción, multimedia, espacios y tecnología para que una necesidad no termine repartida entre varios proveedores. Entendemos el objetivo y coordinamos la solución completa.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/#contacto">Cuéntanos qué necesitas</Link>
              <Link className={styles.secondary} href="/servicios">Ver servicios específicos</Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualMain}>
              <Image alt="Ambientación de punto de venta" fill priority sizes="(max-width: 980px) 100vw, 44vw" src="/media/projects/point-of-sale/boru-wide.webp?v=2" />
              <div className={styles.visualLabel}><span>Marca + espacio</span><strong>Una solución puede conectar varias áreas</strong></div>
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Equipo audiovisual integrado" fill sizes="240px" src="/images/portfolio/optimized/project-10.webp" />
            </div>
            <div className={styles.visualSmall}>
              <Image alt="Textil corporativo personalizado" fill sizes="240px" src="/media/projects/corporate-textile/jacket-team.webp" />
            </div>
          </div>
        </div>

        <div className={styles.proofStrip}>
          <article><span>01</span><strong>Entendemos</strong><p>Partimos del objetivo, no del producto que queremos vender.</p></article>
          <article><span>02</span><strong>Conectamos</strong><p>Sumamos las capacidades que el proyecto realmente necesita.</p></article>
          <article><span>03</span><strong>Respondemos</strong><p>Coordinamos la ejecución para que no tengas que perseguir proveedores.</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Cinco áreas</p><h2>No son negocios separados. <span>Son capacidades que se conectan.</span></h2></div>
          <p>Cada área puede resolver una necesidad puntual o convertirse en parte de un proyecto integral. La diferencia está en poder coordinarlo dentro de una misma visión.</p>
        </div>

        <div className={styles.areaGrid}>
          {solutions.map((solution) => (
            <Link className={styles.areaCard} href={solution.href} key={solution.title}>
              <span className={styles.areaNumber}>{solution.number}</span>
              <div className={styles.areaImage}>
                <Image alt={solution.alt} fill sizes="(max-width: 980px) 50vw, 25vw" src={solution.image} />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul>{solution.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className={styles.areaLink}>Explorar solución <b>→</b></span>
            </Link>
          ))}
        </div>

        <Link className={central.feature} href="/soluciones/multimedia">
          <div className={central.featureCopy}>
            <p className={central.featureEyebrow}>05 · Multimedia</p>
            <h3>Video, contenido y producción en vivo como una capacidad central de DIXOY.</h3>
            <p className={central.featureText}>Grabación, fotografía, reels, podcast, entrevistas, cámaras, streaming, cobertura de eventos, edición y postproducción dentro de una misma línea de trabajo.</p>
            <div className={central.chips}><span>Video</span><span>Fotografía</span><span>Podcast</span><span>Streaming</span><span>Eventos</span><span>Postproducción</span></div>
            <span className={central.featureAction}>Explorar Multimedia →</span>
          </div>
          <div className={central.featureVisual}>
            <Image alt="Equipo audiovisual preparado por DIXOY" fill sizes="(max-width: 900px) 100vw, 38vw" src="/images/portfolio/optimized/project-10.webp" />
            <div className={central.featureLabel}><span>Contenido + técnica</span><strong>De la cámara a la entrega final.</strong></div>
          </div>
        </Link>
      </section>

      <section className={styles.projectBand}>
        <div className={styles.projectInner}>
          <div className={styles.projectCopy}>
            <p className={styles.sectionKicker}>Una sola visión</p>
            <h2>El resultado mejora cuando las decisiones se conectan desde el principio.</h2>
            <p>Un aviso puede necesitar diseño. Un evento puede necesitar cámaras y streaming. Un espacio puede necesitar gráfica. Un montaje puede necesitar tecnología. Por eso trabajamos por objetivo y no por departamentos aislados.</p>
            <Link href="/proyectos">Ver proyectos reales</Link>
          </div>
          <div className={styles.projectImages}>
            <div><Image alt="Proyecto de ambientación DIXOY" fill sizes="50vw" src="/media/projects/point-of-sale/boru-cover.webp?v=2" /></div>
            <div><Image alt="Proyecto corporativo DIXOY" fill sizes="35vw" src="/images/portfolio/optimized/project-15.webp" /></div>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div><h2>No necesitas saber qué proveedor buscar.</h2><p>Cuéntanos el problema, la idea o el resultado que quieres conseguir. Nosotros te ayudamos a aterrizar cómo resolverlo.</p></div>
        <Link className={styles.primary} href="/#contacto">Hablar con DIXOY</Link>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Soluciones para empresas</span>
        <nav><Link href="/">Inicio</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link><Link href="/usme">Usme</Link></nav>
      </footer>
    </main>
  );
}
