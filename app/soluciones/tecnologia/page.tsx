import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../solutionVisual.module.css";

export const metadata: Metadata = {
  title: "Tecnología para empresas | Soporte, seguridad y soluciones digitales | DIXOY",
  description:
    "Soporte, infraestructura, redes, seguridad, control de acceso, soluciones digitales y herramientas empresariales como DixApp.",
  alternates: { canonical: "/soluciones/tecnologia" },
};

const whatsappMessage = [
  "Hola DIXOY, quiero hablar sobre una necesidad tecnológica de mi empresa.",
  "",
  "Nombre:",
  "Empresa:",
  "Qué necesito resolver:",
  "Ciudad:",
].join("\n");

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(whatsappMessage)}`;

const Arrow = () => (
  <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
);

export default function TechnologySolutionPage() {
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
            <p className={styles.eyebrow}><span />03 · Tecnología</p>
            <h1>Tecnología que hace que la operación <em>avance.</em></h1>
            <p className={styles.heroLead}>Implementamos soporte, infraestructura, seguridad y herramientas digitales con una idea sencilla: usar tecnología donde realmente mejora la operación, no por llenar la empresa de sistemas.</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablar de tecnología</a>
              <Link className={styles.secondary} href="/proyectos">Ver proyectos</Link>
            </div>
            <div className={styles.heroNote}><div className={styles.noteLine}/><p><strong>Primero el proceso.</strong><span>Después elegimos la herramienta.</span></p></div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualMain}>
              <Image alt="Mantenimiento de equipos realizado por DIXOY" fill priority sizes="(max-width:980px) 100vw,45vw" src="/images/portfolio/optimized/project-09.webp" />
              <div className={styles.visualLabel}><span>Proyecto real</span><strong>Mantenimiento de equipos</strong></div>
            </div>
            <div className={styles.miniImage}><Image alt="Integración de equipo audiovisual" fill sizes="190px" src="/images/portfolio/optimized/project-10.webp" /></div>
            <div className={styles.visualBadge}><span>Tecnología útil</span><strong>Soporte, seguridad y herramientas conectadas a necesidades reales.</strong></div>
          </div>
        </div>

        <div className={styles.introStrip}>
          <article><span>01</span><strong>Continuidad</strong><p>Mantenemos equipos y conectividad operando.</p></article>
          <article><span>02</span><strong>Seguridad</strong><p>Protegemos espacios y administramos accesos.</p></article>
          <article><span>03</span><strong>Organización</strong><p>Conectamos herramientas y procesos digitales.</p></article>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sectionHead}>
          <div><p className={styles.sectionKicker}>Tecnología con propósito</p><h2>Menos herramientas sueltas. <span>Más operación conectada.</span></h2></div>
          <p>Revisamos primero la necesidad de la empresa y luego estructuramos la solución técnica que tenga sentido por estabilidad, seguridad, control o eficiencia.</p>
        </div>

        <div className={styles.capGrid}>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>01</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M7 8h3M7 11h6"/></svg></div>
            <h3>Soporte e infraestructura</h3><p>Atendemos la base tecnológica que necesita la operación para mantenerse estable.</p>
            <ul><li>Soporte y mantenimiento de equipos</li><li>Redes e infraestructura básica</li><li>Configuración e implementación tecnológica</li></ul>
            <Link href="/proyectos/mantenimiento-equipos">Ver proyecto de soporte</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>02</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 3.1 8.2 7 10 3.9-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.5-4"/></svg></div>
            <h3>Seguridad y control</h3><p>Integramos soluciones para proteger espacios, registrar accesos y mejorar el control operativo.</p>
            <ul><li>Control de acceso</li><li>Cámaras y seguridad</li><li>Integración de dispositivos y sistemas</li></ul>
            <Link href="/servicios/control-de-acceso">Explorar control de acceso</Link>
          </article>
          <article className={styles.capCard}>
            <span className={styles.capNumber}>03</span><div className={styles.capIcon}><svg viewBox="0 0 24 24"><path d="M5 5h14v10H5zM8 19h8M12 15v4"/><path d="M8 9h8M8 12h5"/></svg></div>
            <h3>Soluciones digitales</h3><p>Desarrollamos o conectamos herramientas para organizar información, procesos y atención.</p>
            <ul><li>Presencia y desarrollo web</li><li>Automatización y herramientas digitales</li><li>DixApp y soluciones empresariales propias</li></ul>
            <Link href="/servicios/soluciones-digitales">Explorar soluciones digitales</Link>
          </article>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.projectsHead}><div><p className={styles.sectionKicker}>Aplicaciones reales</p><h2>La tecnología se entiende mejor cuando resuelve una tarea concreta.</h2></div><p>Casos donde el valor estuvo en dejar un equipo, sistema o conjunto de herramientas listo para apoyar la operación.</p></div>
          <div className={styles.projectGrid}>
            <Link className={styles.projectCard} href="/proyectos/mantenimiento-equipos"><div className={styles.projectImage}><Image alt="Servicio técnico de equipos" fill sizes="(max-width:980px) 100vw,40vw" src="/images/portfolio/optimized/project-09.webp" /></div><div className={styles.projectCopy}><span>Tecnología y soporte</span><h3>Mantenimiento de equipos</h3><p>Diagnóstico y servicio técnico para mantener continuidad operativa.</p></div></Link>
            <Link className={styles.projectCard} href="/proyectos/integracion-equipo-audiovisual"><div className={styles.projectImage}><Image alt="Integración de tecnología audiovisual" fill sizes="(max-width:640px) 100vw,30vw" src="/images/portfolio/optimized/project-10.webp" /></div><div className={styles.projectCopy}><span>Tecnología especializada</span><h3>Integración audiovisual</h3><p>Preparación y puesta a punto de equipo para operación en campo.</p></div></Link>
            <Link className={styles.projectCard} href="/servicios/control-de-acceso"><div className={styles.projectImage}><Image alt="Soluciones de seguridad y control" fill sizes="(max-width:640px) 100vw,30vw" src="/images/portfolio/optimized/project-02.webp" /></div><div className={styles.projectCopy}><span>Seguridad y control</span><h3>Control de acceso</h3><p>Soluciones pensadas para proteger espacios y organizar entradas.</p></div></Link>
          </div>
          <Link className={styles.projectMore} href="/proyectos">Ver todos los proyectos →</Link>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processLayout}>
          <div className={styles.processCopy}><p className={styles.sectionKicker}>Cómo lo abordamos</p><h2>Entendemos el problema. <span>Después conectamos la tecnología.</span></h2><p>La herramienta es una consecuencia de la necesidad, no el punto de partida. Así evitamos soluciones costosas o innecesariamente complejas.</p></div>
          <ol className={styles.steps}>
            <li><span>01</span><div><h3>Diagnosticamos</h3><p>Revisamos qué está fallando, faltando o limitando la operación.</p></div></li>
            <li><span>02</span><div><h3>Definimos</h3><p>Seleccionamos la solución técnica adecuada al contexto y presupuesto.</p></div></li>
            <li><span>03</span><div><h3>Implementamos</h3><p>Configuramos, instalamos o desarrollamos los componentes necesarios.</p></div></li>
            <li><span>04</span><div><h3>Acompañamos</h3><p>Verificamos el funcionamiento y dejamos la solución lista para uso real.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.closing}><div className={styles.closingInner}><div><span>Tecnología sin complicaciones</span><h2>Si hay un proceso que puede funcionar mejor, revisemos qué tecnología realmente necesita.</h2><p>Cuéntanos el problema y te ayudamos a convertirlo en una solución clara, implementable y útil para la operación.</p></div><a className={styles.primary} href={whatsappLink} rel="noopener noreferrer" target="_blank">Hablemos de tecnología</a></div></section>

      <footer className={styles.footer}><span>© 2026 DIXOY · Soluciones para empresas</span><nav aria-label="Navegación de pie de página"><Link href="/">Inicio</Link><Link href="/soluciones">Soluciones</Link><Link href="/servicios">Servicios</Link><Link href="/proyectos">Proyectos</Link></nav></footer>
    </main>
  );
}
