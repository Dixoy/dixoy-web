import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutionVisual.module.css";

export const metadata: Metadata = {
  title: "Tu espacio | Adecuación, exhibición y montajes | DIXOY",
  description:
    "Adecuación de espacios, ambientación, exhibición, mobiliario, avisos, stands y montajes para empresas en Bogotá.",
  alternates: { canonical: "/soluciones/espacios" },
};

const whatsappMessage = [
  "Hola DIXOY, quiero hablar sobre un espacio de mi empresa.",
  "",
  "Nombre:",
  "Empresa:",
  "Tipo de espacio:",
  "Qué necesito resolver:",
].join("\n");

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(whatsappMessage)}`;

const Arrow = () => (
  <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

export default function SpacesSolutionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link aria-label="DIXOY, inicio" className={styles.logo} href="/">
          <Image alt="DIXOY" height={255} priority src="/logos/logo-dixoy-horizontal.svg" unoptimized width={986} />
        </Link>
        <nav aria-label="Navegación principal" className={styles.nav}>
          <Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link><Link href="/bogota">Bogotá</Link>
        </nav>
        <a className={styles.cta} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos <Arrow /></a>
      </header>

      <section className={styles.heroShell}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span />02 · Tu espacio</p>
            <h1>Haz que el espacio trabaje a favor de tu <em>empresa.</em></h1>
            <p className={styles.heroLead}>Adecuamos, ambientamos y conectamos elementos visuales y funcionales para que oficinas, locales, puntos de venta y montajes temporales se vean mejor y funcionen mejor.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de mi espacio</a>
              <Link className={styles.secondary} href="/proyectos">Ver proyectos</Link>
            </div>
            <div className={styles.heroNote}><div className={styles.noteLine}/><p><strong>Uso, imagen y ejecución.</strong><span>Diseñamos pensando en cómo se vive el espacio.</span></p></div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualMain}>
              <Image alt="Privacidad visual en oficinas realizada por DIXOY" fill priority sizes="(max-width:980px) 100vw,45vw" src="/media/projects/corporate-spaces/office-overview.webp" />
              <div className={styles.visualLabel}><span>Proyecto real</span><strong>Privacidad visual para oficinas</strong></div>
            </div>
            <div className={styles.miniImage}><Image alt="Ambientación de punto de venta" fill sizes="190px" src="/media/projects/point-of-sale/boru-wide.webp?v=2" /></div>
            <div className={styles.visualBadge}><span>Espacios que comunican</span><strong>Función, identidad y montaje coordinados desde una sola solución.</strong></div>
          </div>
        </div>

        <div className={styles.introStrip}>
          <article><span>01</span><strong>Adecuación</strong><p>Mejoramos el espacio según su uso real.</p></article>
          <article><span>02</span><strong>Ambientación</strong><p>Integramos gráfica, mobiliario y señalización.</p></article>
          <article><span>03</span><strong>Montaje</strong><p>Coordinamos producción e instalación en sitio.</p></article>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Espacios con propósito</p><h2>No se trata solo de renovar. <span>Se trata de hacer que funcione.</span></h2></div>
          <p>Partimos de la necesidad real del espacio y conectamos adecuación, exhibición, gráfica, infraestructura y montaje según cada proyecto.</p>
        </div>

        <div className={styles.capGrid}>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>01</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V6h12v14M9 10h2M9 14h2M14 10h1M14 14h1"/></svg></div>
            <h3>Adecuación de espacios</h3><p>Intervenimos áreas comerciales y corporativas para responder mejor al uso diario.</p>
            <ul><li>Adecuaciones locativas</li><li>Divisiones y elementos funcionales</li><li>Acabados e integración básica</li></ul>
            <Link href="/servicios/adecuacion-de-espacios">Explorar adecuación de espacios</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>02</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M5 6h14v12H5zM8 9h8M8 13h5"/></svg></div>
            <h3>Ambientación y exhibición</h3><p>Hacemos que la identidad también viva en el lugar donde el cliente compra, trabaja o visita.</p>
            <ul><li>Gráfica aplicada</li><li>Mobiliario y exhibidores</li><li>Señalización interior y exterior</li></ul>
            <Link href="/servicios/avisos-y-senalizacion">Explorar gráfica y señalización</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>03</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M4 18h16M6 18V8h12v10M8 8l4-4 4 4"/></svg></div>
            <h3>Montajes y espacios temporales</h3><p>Coordinamos estructuras, piezas y montaje para eventos, activaciones y necesidades temporales.</p>
            <ul><li>Stands y backing</li><li>Estructuras y montaje</li><li>Producción e instalación en sitio</li></ul>
            <Link href="/servicios">Explorar servicios relacionados</Link>
          </article>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.projectsHead}><div><p className={styles.sectionKicker}>Aplicaciones reales</p><h2>Los espacios muestran mejor la solución cuando ya están en uso.</h2></div><p>Casos donde combinamos funcionalidad, comunicación visual y ejecución física para resolver una necesidad concreta.</p></div>
          <div className={styles.projectGrid}>
            <Link className={styles.projectCard} href="/proyectos/privacidad-visual-oficinas"><div className={styles.projectImage}><Image alt="Privacidad visual para oficinas" fill sizes="(max-width:980px) 100vw,40vw" src="/media/projects/corporate-spaces/office-corner.webp" /></div><div className={styles.projectCopy}><span>Espacios corporativos</span><h3>Privacidad visual para oficinas</h3><p>Separación de ambientes sin perder luminosidad ni limpieza visual.</p></div></Link>
            <Link className={styles.projectCard} href="/proyectos/ambientacion-punto-de-venta"><div className={styles.projectImage}><Image alt="Ambientación de punto de venta" fill sizes="(max-width:640px) 100vw,30vw" src="/media/projects/point-of-sale/boru-mural.webp?v=2" /></div><div className={styles.projectCopy}><span>Punto de venta</span><h3>Ambientación comercial</h3><p>Gráfica y producción integradas directamente al espacio.</p></div></Link>
            <Link className={styles.projectCard} href="/proyectos/aviso-comercial-gran-formato"><div className={styles.projectImage}><Image alt="Aviso comercial instalado" fill sizes="(max-width:640px) 100vw,30vw" src="/images/portfolio/optimized/project-15.webp" /></div><div className={styles.projectCopy}><span>Visibilidad exterior</span><h3>Aviso comercial</h3><p>Comunicación exterior integrada al frente del negocio.</p></div></Link>
          </div>
          <Link className={styles.projectMore} href="/proyectos">Ver todos los proyectos →</Link>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processLayout}>
          <div className={styles.processCopy}><p className={styles.sectionKicker}>Cómo lo abordamos</p><h2>Primero entendemos el uso. <span>Después transformamos el espacio.</span></h2><p>Cada decisión parte de cómo debe funcionar el lugar, qué debe comunicar y qué condiciones tiene para ejecutar la intervención.</p></div>
          <ol className={styles.steps}>
            <li><span>01</span><div><h3>Levantamos</h3><p>Revisamos medidas, uso, circulación y necesidades del espacio.</p></div></li>
            <li><span>02</span><div><h3>Proponemos</h3><p>Definimos qué intervenir, con qué materiales y con qué alcance.</p></div></li>
            <li><span>03</span><div><h3>Producimos</h3><p>Coordinamos gráfica, elementos, mobiliario o estructura según el proyecto.</p></div></li>
            <li><span>04</span><div><h3>Montamos</h3><p>Instalamos y verificamos que el resultado funcione como se planteó.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.closing}><div className={styles.closingInner}><div><span>Tu espacio, mejor resuelto</span><h2>Si el lugar ya no responde a lo que tu empresa necesita, podemos replantearlo.</h2><p>Cuéntanos qué quieres mejorar y te ayudamos a convertirlo en una intervención clara, ejecutable y coherente con tu marca.</p></div><a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos de tu espacio</a></div></section>

      <footer className={styles.footer}><span>© 2026 DIXOY · Soluciones para empresas</span><nav aria-label="Navegación de pie de página"><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></nav></footer>
    </main>
  );
}
