import Image from "next/image";
import PortfolioGallery from "./PortfolioGallery";
import ProjectsCarousel from "./ProjectsCarousel";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const LocationIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const CoverageIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21M12 3C9.8 5.5 8.6 8.5 8.6 12S9.8 18.5 12 21" />
  </svg>
);

const ContactIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="M5 5h14v10H9l-4 4V5Z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

const BrandMark = () => (
  <a aria-label="DIXOY, página principal" className="brand" href="#inicio">
    <Image
      alt="DIXOY"
      height="255"
      priority
      src="/logos/logo-dixoy-horizontal.svg"
      unoptimized
      width="986"
    />
  </a>
);

const whatsappMessage = [
  "Hola DIXOY, quiero solicitar una cotización.",
  "",
  "Nombre:",
  "Empresa:",
  "Servicio que necesito:",
  "Ciudad:",
].join("\n");

const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const serviceItems = [
  {
    number: "01",
    label: "Tu marca",
    description: "Identidad, impresión y comunicación visual.",
    detail:
      "Construimos una presencia coherente para que tu empresa se vea tan profesional como trabaja.",
    list: ["Diseño e identidad", "Impresión y gran formato", "Material POP y señalización"],
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M5 19V7l7-3 7 3v12H5Z" />
        <path d="m8.5 9.5 3.5-1.4 3.5 1.4M8.5 13h7M8.5 16.5h4" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Tu espacio",
    description: "Adecuación, exhibición e infraestructura.",
    detail:
      "Transformamos espacios comerciales y corporativos para comunicar, funcionar y recibir mejor.",
    list: ["Adecuaciones locativas", "Avisos y exhibición", "Stands y montajes"],
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M4 20h16M6 20V6h12v14M9 10h2M9 14h2M14 10h1M14 14h1" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Tecnología",
    description: "Sistemas, soporte y soluciones digitales.",
    detail:
      "Implementamos tecnología útil para hacer más segura, organizada y eficiente tu operación.",
    list: ["Soporte e infraestructura", "Seguridad y control de acceso", "Herramientas digitales"],
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <rect height="12" rx="2" width="18" x="3" y="4" />
        <path d="M8 20h8M12 16v4M7 8h3M7 11h6" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Personalizado",
    description: "Productos y proyectos hechos a la medida.",
    detail:
      "Desarrollamos soluciones especiales cuando un producto estándar simplemente no es suficiente.",
    list: ["Productos corporativos", "Fabricación especial", "Proyectos integrales"],
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z" />
        <path d="m4.8 7.2 7.2 4 7.2-4M12 11.2V21" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <BrandMark />

        <nav aria-label="Navegación principal" className="desktop-nav">
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Proyectos</a>
          <a href="/tienda">Tienda</a>
          <a href="#nosotros">Nosotros</a>
        </nav>

        <a
          className="header-cta"
          href={whatsappLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Hablemos
          <ArrowUpRight size={16} />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú">
            <span />
            <span />
          </summary>
          <nav aria-label="Navegación móvil">
            <a href="#soluciones">Soluciones</a>
            <a href="#proyectos">Proyectos</a>
            <a href="/tienda">Tienda</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Hablemos</a>
          </nav>
        </details>
      </header>

      <div className="hero-shell">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Soluciones empresariales integrales
            </p>
            <h1>
              Un solo aliado para hacer que tu empresa{" "}
              <em>avance.</em>
            </h1>
            <p className="hero-description">
              Integramos diseño, adecuación de espacios, tecnología y soluciones
              empresariales para construir una operación más sólida, coherente
              y profesional.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Solicitar cotización
                <ArrowUpRight />
              </a>
              <a className="button button-secondary" href="#proyectos">
                Ver proyectos
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-line" />
              <p>
                <strong>De la idea a la instalación.</strong>
                <span>Un equipo que coordina todo el proceso.</span>
              </p>
            </div>
          </div>

          <PortfolioGallery />
        </section>

        <section className="service-ribbon" id="soluciones">
          {serviceItems.map((item) => (
            <article key={item.label}>
              <span>{item.number}</span>
              <div>
                <strong>{item.label}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <section className="services-section section-pad">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Lo que hacemos</p>
            <h2>
              Cuatro áreas. <br />
              <span>Una misma visión.</span>
            </h2>
          </div>
          <p>
            No necesitas coordinar varios proveedores para sacar adelante una
            idea. En DIXOY conectamos las especialidades necesarias y
            respondemos por el resultado completo.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((item) => (
            <article className="service-card" key={item.label}>
              <div className="service-card-top">
                <span className="service-card-number">{item.number}</span>
                <span className="service-card-icon">{item.icon}</span>
              </div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
              <ul>
                {item.list.map((line) => (
                  <li key={line}>
                    <span />
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Explorar solución
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="projects-intro">
          <p className="section-kicker light">Proyectos que conectan capacidades</p>
          <h2>
            Cuando todo se coordina, <span>el resultado se nota.</span>
          </h2>
          <p>
            Cada proyecto combina estrategia, producción y ejecución para
            resolver una necesidad real de la empresa.
          </p>
        </div>

        <ProjectsCarousel />
      </section>

      <section className="process-section section-pad" id="nosotros">
        <div className="process-layout">
          <div className="process-copy">
            <p className="section-kicker">Así trabajamos</p>
            <h2>
              Menos proveedores. <br />
              <span>Más control.</span>
            </h2>
            <p>
              Convertimos una necesidad en un plan claro y acompañamos cada
              decisión hasta la entrega. Tú mantienes la visión; nosotros
              coordinamos la ejecución.
            </p>
            <a
              className="text-link"
              href={whatsappLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Cuéntanos qué necesitas
              <ArrowUpRight />
            </a>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Entendemos</h3>
                <p>Escuchamos la necesidad, el contexto y el objetivo real.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Proponemos</h3>
                <p>Integramos la solución técnica, visual y operativa.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Producimos</h3>
                <p>Coordinamos materiales, aliados y tiempos de ejecución.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Entregamos</h3>
                <p>Instalamos, verificamos y acompañamos el cierre del proyecto.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="value-strip">
          <div>
            <strong>Visión integral</strong>
            <p>Las decisiones se conectan desde el inicio.</p>
          </div>
          <div>
            <strong>Un solo responsable</strong>
            <p>Menos coordinación y más claridad para tu empresa.</p>
          </div>
          <div>
            <strong>Soluciones a medida</strong>
            <p>El proyecto se adapta a la necesidad, no al contrario.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-layout">
          <div className="contact-inner">
            <p className="section-kicker light">Hagamos que avance</p>
            <h2>
              ¿Tienes una idea, una necesidad o un proyecto por resolver?
            </h2>
            <p>
              Cuéntanos el objetivo. Te ayudamos a convertirlo en una solución
              clara, realizable y bien presentada.
            </p>
            <div className="contact-actions">
              <a
                className="button contact-primary"
                href={whatsappLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Hablemos de tu proyecto
                <ArrowUpRight />
              </a>
              <a className="contact-email" href="mailto:somos@dixoy.co">
                somos@dixoy.co
              </a>
            </div>
          </div>

          <aside
            aria-label="Información de contacto y cobertura"
            className="contact-trust"
          >
            <p className="contact-trust-kicker">Presencia y atención</p>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <LocationIcon />
              </span>
              <div>
                <span>Ubicación</span>
                <strong>Bogotá, Colombia</strong>
                <p>Atención comercial y coordinación de proyectos.</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <CoverageIcon />
              </span>
              <div>
                <span>Cobertura</span>
                <strong>Proyectos en Colombia</strong>
                <p>Producción, suministro e instalación según cada alcance.</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon">
                <ContactIcon />
              </span>
              <div>
                <span>Contacto directo</span>
                <a
                  href={whatsappLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +57 311 807 2144
                </a>
                <a href="mailto:somos@dixoy.co">somos@dixoy.co</a>
              </div>
            </div>
          </aside>
        </div>
        <div className="contact-mark" aria-hidden="true">
          DIXOY
        </div>
      </section>

      <footer>
        <BrandMark />
        <p>
          Soluciones para la imagen, el espacio y la operación de tu empresa.
        </p>
        <div className="footer-links">
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Proyectos</a>
          <a href="/tienda">Tienda</a>
          <a href="#nosotros">Nosotros</a>
          <a
            href={whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Contacto
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DIXOY. Todos los derechos reservados.</span>
          <span>Bogotá, Colombia</span>
        </div>
      </footer>
    </main>
  );
}
