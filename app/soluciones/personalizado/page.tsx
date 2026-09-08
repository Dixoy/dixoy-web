import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutionVisual.module.css";

export const metadata: Metadata = {
  title: "Soluciones personalizadas para empresas | DIXOY",
  description:
    "Productos corporativos, textiles, promocionales, fabricación especial y proyectos personalizados para empresas y organizaciones.",
  alternates: { canonical: "/soluciones/personalizado" },
};

const whatsappMessage = [
  "Hola DIXOY, tengo una idea para un producto o proyecto personalizado.",
  "",
  "Nombre:",
  "Empresa:",
  "Qué quiero desarrollar:",
  "Cantidad aproximada:",
].join("\n");

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(whatsappMessage)}`;

const Arrow = () => (
  <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

export default function CustomSolutionPage() {
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
            <p className={styles.eyebrow}><span />04 · Personalizado</p>
            <h1>Cuando lo estándar no alcanza, lo hacemos <em>a tu medida.</em></h1>
            <p className={styles.heroLead}>Desarrollamos productos corporativos, textiles, piezas para eventos y soluciones especiales combinando diseño, materiales, técnicas y producción según cada necesidad.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Contar mi idea</a>
              <Link className={styles.secondary} href="/proyectos">Ver proyectos</Link>
            </div>
            <div className={styles.heroNote}><div className={styles.noteLine}/><p><strong>No todo tiene que venir de catálogo.</strong><span>Podemos diseñar la solución desde la necesidad.</span></p></div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualMain}>
              <Image alt="Textil corporativo personalizado por DIXOY" fill priority sizes="(max-width:980px) 100vw,45vw" src="/media/projects/corporate-textile/team-uniforms.webp" />
              <div className={styles.visualLabel}><span>Proyecto real</span><strong>Textil corporativo a la medida</strong></div>
            </div>
            <div className={styles.miniImage}><Image alt="Credenciales personalizadas para eventos" fill sizes="190px" src="/images/portfolio/optimized/project-13.webp" /></div>
            <div className={styles.visualBadge}><span>Hecho para el proyecto</span><strong>Producto, técnica y acabado definidos según uso, cantidad e identidad.</strong></div>
          </div>
        </div>

        <div className={styles.introStrip}>
          <article><span>01</span><strong>Idea</strong><p>Partimos de lo que necesitas lograr.</p></article>
          <article><span>02</span><strong>Desarrollo</strong><p>Definimos materiales, técnica y producción.</p></article>
          <article><span>03</span><strong>Entrega</strong><p>Fabricamos, personalizamos y coordinamos el resultado.</p></article>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Soluciones a medida</p><h2>El producto correcto no siempre existe. <span>A veces hay que construirlo.</span></h2></div>
          <p>Reunimos diseño, proveedores, técnicas y producción para convertir una idea en una pieza útil y coherente con el objetivo de la empresa.</p>
        </div>

        <div className={styles.capGrid}>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>01</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M7 4h10l2 4-7 4-7-4 2-4Z"/><path d="M5 8v9l7 4 7-4V8"/></svg></div>
            <h3>Productos corporativos</h3><p>Piezas para equipos, clientes, campañas, eventos y experiencias de marca.</p>
            <ul><li>Textiles y dotaciones personalizadas</li><li>Promocionales y artículos de marca</li><li>Materiales para campañas y eventos</li></ul>
            <Link href="/servicios/material-pop">Explorar material POP</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>02</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z"/><path d="m4.8 7.2 7.2 4 7.2-4M12 11.2V21"/></svg></div>
            <h3>Producción especial</h3><p>Cuando una pieza necesita medidas, materiales o acabados particulares, estructuramos la fabricación según el caso.</p>
            <ul><li>Fabricación por requerimiento</li><li>Combinación de técnicas y proveedores</li><li>Prototipos y soluciones no estándar</li></ul>
            <Link href="/servicios">Explorar servicios relacionados</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>03</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M4 18h16M6 18V8h12v10M8 8l4-4 4 4"/><path d="M9 12h6"/></svg></div>
            <h3>Proyectos integrales</h3><p>Conectamos producto, diseño, marca, montaje o tecnología cuando la necesidad supera una sola pieza.</p>
            <ul><li>Diseño + producción</li><li>Producto + instalación</li><li>Marca + espacio + tecnología</li></ul>
            <Link href="/servicios/diseno-de-marca">Explorar diseño de marca</Link>
          </article>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.projectsHead}><div><p className={styles.sectionKicker}>Aplicaciones reales</p><h2>Las ideas se vuelven más claras cuando ya están hechas.</h2></div><p>Ejemplos de productos y piezas desarrolladas para resolver necesidades concretas de equipos, eventos y marcas.</p></div>
          <div className={styles.projectGrid}>
            <Link className={styles.projectCard} href="/proyectos/textil-corporativo"><div className={styles.projectImage}><Image alt="Textil corporativo personalizado" fill sizes="(max-width:980px) 100vw,40vw" src="/media/projects/corporate-textile/jacket-team.webp" /></div><div className={styles.projectCopy}><span>Productos personalizados</span><h3>Textil corporativo</h3><p>Prendas, uniformes y piezas textiles adaptadas a cada uso.</p></div></Link>
            <Link className={styles.projectCard} href="/proyectos/credenciales-eventos"><div className={styles.projectImage}><Image alt="Credenciales para eventos" fill sizes="(max-width:640px) 100vw,30vw" src="/images/portfolio/optimized/project-13.webp" /></div><div className={styles.projectCopy}><span>Producción corporativa</span><h3>Credenciales para eventos</h3><p>Diseño y producción preparados para identificación y operación.</p></div></Link>
            <Link className={styles.projectCard} href="/proyectos/ambientacion-punto-de-venta"><div className={styles.projectImage}><Image alt="Aplicación personalizada en punto de venta" fill sizes="(max-width:640px) 100vw,30vw" src="/media/projects/point-of-sale/boru-process.webp?v=2" /></div><div className={styles.projectCopy}><span>Proyecto integral</span><h3>Producción + instalación</h3><p>Una solución que conecta diseño, fabricación y aplicación física.</p></div></Link>
          </div>
          <Link className={styles.projectMore} href="/proyectos">Ver todos los proyectos →</Link>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processLayout}>
          <div className={styles.processCopy}><p className={styles.sectionKicker}>Cómo lo abordamos</p><h2>Primero aterrizamos la idea. <span>Después definimos cómo producirla.</span></h2><p>La solución depende del uso, la cantidad, el presupuesto, los materiales y el acabado esperado. Por eso no partimos de un catálogo cerrado.</p></div>
          <ol className={styles.steps}>
            <li><span>01</span><div><h3>Entendemos</h3><p>Revisamos qué necesitas, para quién es y cómo se va a usar.</p></div></li>
            <li><span>02</span><div><h3>Desarrollamos</h3><p>Definimos diseño, materiales, medidas, técnica y viabilidad.</p></div></li>
            <li><span>03</span><div><h3>Producimos</h3><p>Coordinamos fabricación, personalización y acabados.</p></div></li>
            <li><span>04</span><div><h3>Entregamos</h3><p>Organizamos la entrega o instalación según el alcance del proyecto.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.closing}><div className={styles.closingInner}><div><span>Tu idea, bien aterrizada</span><h2>Si puedes explicarnos qué necesitas, podemos empezar a construir la solución.</h2><p>Cuéntanos el uso, la cantidad y la intención. Nosotros te ayudamos a definir cómo hacerlo realidad.</p></div><a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Contar mi idea</a></div></section>

      <footer className={styles.footer}><span>© 2026 DIXOY · Soluciones para empresas</span><nav aria-label="Navegación de pie de página"><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></nav></footer>
    </main>
  );
}
