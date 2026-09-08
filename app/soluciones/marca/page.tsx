import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./brand.module.css";

export const metadata: Metadata = {
  title: "Tu marca | Diseño, impresión y comunicación visual | DIXOY",
  description:
    "Identidad, diseño, impresión, gran formato, señalización, material POP y comunicación visual para empresas en Bogotá.",
  alternates: { canonical: "/soluciones/marca" },
};

const whatsappMessage = [
  "Hola DIXOY, quiero hablar sobre la imagen de mi empresa.",
  "",
  "Nombre:",
  "Empresa:",
  "Qué necesito fortalecer:",
  "Ciudad:",
].join("\n");

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const Arrow = () => (
  <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

export default function BrandSolutionPage() {
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
        <a className={styles.cta} href={whatsappLink} rel="noopener noreferrer" target="_blank">
          Hablemos <Arrow />
        </a>
      </header>

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span />01 · Tu marca</p>
            <h1>
              Haz que tu empresa se vea tan bien como <em>trabaja.</em>
            </h1>
            <p className={styles.heroLead}>
              No nos quedamos en el logo. Conectamos identidad, diseño, impresión y aplicación física para que tu marca se vea coherente en cada punto donde un cliente la encuentra.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">
                Hablar de mi marca
              </a>
              <Link className={styles.secondary} href="/proyectos">
                Ver proyectos
              </Link>
            </div>
            <div className={styles.heroNote}>
              <div className={styles.noteLine} />
              <p>
                <strong>De identidad a presencia real.</strong>
                <span>Diseñamos, producimos y aplicamos.</span>
              </p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualMain}>
              <Image alt="Ambientación de punto de venta realizada por DIXOY" fill priority sizes="(max-width: 980px) 100vw, 45vw" src="/media/projects/point-of-sale/boru-cover.webp?v=2" />
              <div className={styles.visualLabel}>
                <span>Proyecto real</span>
                <strong>Ambientación de punto de venta</strong>
              </div>
            </div>
            <div className={styles.miniImage}>
              <Image alt="Equipo con prendas corporativas personalizadas" fill sizes="190px" src="/media/projects/corporate-textile/team-uniforms.webp" />
            </div>
            <div className={styles.visualBadge}>
              <span>Una sola línea visual</span>
              <strong>Marca, espacio, material y aplicación hablando el mismo idioma.</strong>
            </div>
          </div>
        </div>

        <div className={styles.introStrip}>
          <article>
            <span>01</span>
            <strong>Identidad</strong>
            <p>Definimos cómo debe verse y sentirse la empresa.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Producción</strong>
            <p>Llevamos el diseño a materiales, formatos y piezas reales.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Aplicación</strong>
            <p>Hacemos que la marca llegue bien a espacios, equipos y clientes.</p>
          </article>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>Marca en movimiento</p>
            <h2>
              Una identidad útil no vive en un archivo. <span>Se aplica.</span>
            </h2>
          </div>
          <p>
            Trabajamos la marca como un sistema: desde la base visual hasta la forma en que aparece en un aviso, una pieza impresa, un uniforme o un punto de venta.
          </p>
        </div>

        <div className={styles.capGrid}>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>01</span>
            <div className={styles.capIcon}>
              <svg viewBox="0 0 24 24"><path d="M5 19V7l7-3 7 3v12H5Z"/><path d="m8.5 9.5 3.5-1.4 3.5 1.4M8.5 13h7M8.5 16.5h4"/></svg>
            </div>
            <h3>Identidad y diseño</h3>
            <p>Construimos o fortalecemos la forma en que la empresa se presenta visualmente.</p>
            <ul>
              <li>Diseño de marca e identidad visual</li>
              <li>Piezas corporativas y comerciales</li>
              <li>Adaptación a diferentes medios</li>
            </ul>
            <Link href="/servicios/diseno-de-marca">Explorar diseño de marca</Link>
          </article>

          <article className={styles.capCard}>
            <span className={styles.capNumber}>02</span>
            <div className={styles.capIcon}>
              <svg viewBox="0 0 24 24"><path d="M6 4h12v5H6zM4 10h16v7H4zM8 17v3h8v-3"/><path d="M16 13h1"/></svg>
            </div>
            <h3>Impresión y producción visual</h3>
            <p>Convertimos el diseño en piezas físicas con escala, materiales y acabados acordes al proyecto.</p>
            <ul>
              <li>Impresión comercial y gran formato</li>
              <li>Vinilos, pendones y gráfica aplicada</li>
              <li>Material POP y promocional</li>
            </ul>
            <Link href="/servicios/impresion-gran-formato">Explorar impresión y gran formato</Link>
          </article>

          <article className={styles.capCard}>
            <span className={styles.capNumber}>03</span>
            <div className={styles.capIcon}>
              <svg viewBox="0 0 24 24"><path d="M5 5h14v10H5zM8 19h8M12 15v4"/><path d="M8 9h8M8 12h5"/></svg>
            </div>
            <h3>Avisos y señalización</h3>
            <p>Hacemos visible la marca en fachadas, interiores, oficinas y puntos de venta.</p>
            <ul>
              <li>Avisos corporativos y comerciales</li>
              <li>Señalización interior y exterior</li>
              <li>Gráfica para espacios y exhibición</li>
            </ul>
            <Link href="/servicios/avisos-y-senalizacion">Explorar avisos y señalización</Link>
          </article>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.projectsHead}>
            <div>
              <p className={styles.sectionKicker}>Aplicaciones reales</p>
              <h2>La marca se entiende mejor cuando la ves funcionando.</h2>
            </div>
            <p>
              Estos proyectos muestran cómo una identidad puede convertirse en espacio, señalización, uniforme y comunicación visible.
            </p>
          </div>

          <div className={styles.projectGrid}>
            <Link className={styles.projectCard} href="/proyectos/ambientacion-punto-de-venta">
              <div className={styles.projectImage}>
                <Image alt="Ambientación gráfica en punto de venta" fill sizes="(max-width: 980px) 100vw, 40vw" src="/media/projects/point-of-sale/boru-wide.webp?v=2" />
              </div>
              <div className={styles.projectCopy}>
                <span>Imagen y comunicación</span>
                <h3>Ambientación de punto de venta</h3>
                <p>Diseño, producción e instalación integrados en un mismo espacio.</p>
              </div>
            </Link>

            <Link className={styles.projectCard} href="/proyectos/textil-corporativo">
              <div className={styles.projectImage}>
                <Image alt="Textil corporativo personalizado" fill sizes="(max-width: 640px) 100vw, 30vw" src="/media/projects/corporate-textile/jacket-team.webp" />
              </div>
              <div className={styles.projectCopy}>
                <span>Identidad aplicada</span>
                <h3>Textil corporativo</h3>
                <p>La identidad llevada a prendas, equipos y eventos.</p>
              </div>
            </Link>

            <Link className={styles.projectCard} href="/proyectos/aviso-comercial-gran-formato">
              <div className={styles.projectImage}>
                <Image alt="Aviso comercial de gran formato" fill sizes="(max-width: 640px) 100vw, 30vw" src="/images/portfolio/optimized/project-15.webp" />
              </div>
              <div className={styles.projectCopy}>
                <span>Visibilidad exterior</span>
                <h3>Aviso comercial de alto impacto</h3>
                <p>Marca, legibilidad y presencia aplicadas a gran escala.</p>
              </div>
            </Link>
          </div>

          <Link className={styles.projectMore} href="/proyectos">Ver todos los proyectos →</Link>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processLayout}>
          <div className={styles.processCopy}>
            <p className={styles.sectionKicker}>Cómo lo abordamos</p>
            <h2>
              Primero entendemos la marca. <span>Luego la hacemos visible.</span>
            </h2>
            <p>
              No proponemos piezas aisladas. Organizamos cada decisión para que la identidad mantenga coherencia desde el concepto hasta la instalación o entrega final.
            </p>
          </div>

          <ol className={styles.steps}>
            <li><span>01</span><div><h3>Entendemos</h3><p>Revisamos qué comunica hoy la empresa y qué necesita fortalecer.</p></div></li>
            <li><span>02</span><div><h3>Ordenamos</h3><p>Definimos la línea visual, prioridades y aplicaciones necesarias.</p></div></li>
            <li><span>03</span><div><h3>Producimos</h3><p>Adaptamos la identidad a cada formato, material o espacio.</p></div></li>
            <li><span>04</span><div><h3>Implementamos</h3><p>Entregamos o instalamos cuidando que el resultado mantenga la intención inicial.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <div>
            <span>Tu marca, bien aplicada</span>
            <h2>Si tu empresa ya hace un buen trabajo, hagamos que también se note.</h2>
            <p>Cuéntanos qué quieres mejorar y te ayudamos a aterrizar una solución visual, producible y coherente.</p>
          </div>
          <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos de tu marca</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 DIXOY · Soluciones para empresas</span>
        <nav aria-label="Navegación de pie de página">
          <Link href="/">Inicio</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
        </nav>
      </footer>
    </main>
  );
}
