"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./store.module.css";

type Category =
  | "Todos"
  | "Textil corporativo"
  | "Promocionales"
  | "Imagen y espacios";

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  image: string;
  minimum: string;
  mode: "Personalizable" | "Compra directa" | "Proyecto a medida";
  time: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: "camisetas-personalizadas",
    name: "Camisetas personalizadas",
    category: "Textil corporativo",
    description:
      "Diseños de alto impacto con estampado DTF o serigrafía para equipos, campañas y eventos.",
    image: "/media/projects/corporate-textile/creative-shirt.webp",
    minimum: "Desde 12 unidades",
    mode: "Personalizable",
    time: "5–8 días hábiles",
    featured: true,
  },
  {
    id: "polos-corporativos",
    name: "Polos corporativos",
    category: "Textil corporativo",
    description:
      "Prendas para dotación comercial con bordado o estampado y acabados listos para uso diario.",
    image: "/media/projects/corporate-textile/finished-polos.webp",
    minimum: "Desde 12 unidades",
    mode: "Personalizable",
    time: "6–10 días hábiles",
  },
  {
    id: "chaquetas-corporativas",
    name: "Chaquetas para equipos",
    category: "Textil corporativo",
    description:
      "Chaquetas y cortavientos personalizados para fortalecer la presentación de tu equipo.",
    image: "/media/projects/corporate-textile/jacket-team.webp",
    minimum: "Desde 6 unidades",
    mode: "Personalizable",
    time: "8–12 días hábiles",
  },
  {
    id: "bolsas-ecologicas",
    name: "Bolsas ecológicas",
    category: "Promocionales",
    description:
      "Bolsas reutilizables impresas con tu identidad para entregas, eventos y campañas de marca.",
    image: "/media/projects/corporate-textile/printed-totes.webp",
    minimum: "Desde 50 unidades",
    mode: "Personalizable",
    time: "5–8 días hábiles",
  },
  {
    id: "lanyards",
    name: "Lanyards corporativos",
    category: "Promocionales",
    description:
      "Cordones de 2 cm personalizados para carnés, acreditaciones y equipos de trabajo.",
    image: "/media/projects/corporate-textile/lanyards.webp",
    minimum: "Desde 25 unidades",
    mode: "Compra directa",
    time: "5–7 días hábiles",
  },
  {
    id: "dotacion-integral",
    name: "Dotación integral de equipo",
    category: "Textil corporativo",
    description:
      "Combinamos prendas, técnicas y tallas en una sola propuesta para toda tu organización.",
    image: "/media/projects/corporate-textile/team-uniforms.webp",
    minimum: "Proyecto por tallaje",
    mode: "Proyecto a medida",
    time: "Según alcance",
  },
  {
    id: "estampado-produccion",
    name: "Producción de estampados",
    category: "Promocionales",
    description:
      "Producción por volumen para marcas, comunidades y colecciones con control de acabados.",
    image: "/media/projects/corporate-textile/creative-stack.webp",
    minimum: "Desde 24 unidades",
    mode: "Personalizable",
    time: "Según cantidad",
  },
  {
    id: "ambientacion-punto-venta",
    name: "Ambientación de punto de venta",
    category: "Imagen y espacios",
    description:
      "Diseño, producción e instalación de murales, señalización y elementos para transformar tu local.",
    image: "/media/projects/point-of-sale/boru-cover.webp",
    minimum: "Visita y levantamiento",
    mode: "Proyecto a medida",
    time: "Según alcance",
  },
];

const categories: Category[] = [
  "Todos",
  "Textil corporativo",
  "Promocionales",
  "Imagen y espacios",
];

const Arrow = ({ size = 18 }: { size?: number }) => (
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

const BagIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);

const Chevron = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export default function Storefront() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const visibleProducts = useMemo(
    () =>
      activeCategory === "Todos"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const cartItems = useMemo(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({ ...product, quantity: cart[product.id] })),
    [cart],
  );

  const cartCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const whatsappMessage = [
    "Hola DIXOY, preparé esta solicitud desde la tienda:",
    "",
    ...cartItems.map(
      (product) =>
        `• ${product.quantity} × ${product.name} (${product.minimum})`,
    ),
    "",
    "Nombre:",
    "Empresa:",
    "Ciudad:",
    "¿Tienes logo o diseño listo?:",
  ].join("\n");

  const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  useEffect(() => {
    if (!cartOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [cartOpen]);

  const addProduct = (productId: string) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }));
    setCartOpen(true);
  };

  const changeQuantity = (productId: string, amount: number) => {
    setCart((current) => {
      const nextQuantity = (current[productId] ?? 0) + amount;
      const nextCart = { ...current };

      if (nextQuantity <= 0) {
        delete nextCart[productId];
      } else {
        nextCart[productId] = nextQuantity;
      }

      return nextCart;
    });
  };

  return (
    <main className={styles.storePage}>
      <header className={styles.header}>
        <Link aria-label="Volver al inicio de DIXOY" className={styles.logo} href="/">
          <Image
            alt="DIXOY"
            height={255}
            priority
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>

        <nav aria-label="Navegación de la tienda" className={styles.navigation}>
          <a href="#catalogo">Productos</a>
          <a href="#como-funciona">Cómo funciona</a>
          <Link href="/#contacto">Contacto</Link>
        </nav>

        <button
          aria-expanded={cartOpen}
          className={styles.cartButton}
          onClick={() => setCartOpen(true)}
          type="button"
        >
          <span className={styles.cartIcon}>
            <BagIcon />
          </span>
          <span>Mi pedido</span>
          <strong aria-live="polite">{cartCount}</strong>
        </button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span />
              Tienda corporativa DIXOY
            </p>
            <h1>
              Productos que hacen visible <em>tu marca.</em>
            </h1>
            <p className={styles.heroDescription}>
              Elige una solución, define la cantidad y cuéntanos cómo quieres
              personalizarla. Nosotros te acompañamos desde el diseño hasta la
              entrega.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#catalogo">
                Explorar productos
                <Arrow />
              </a>
              <a className={styles.secondaryButton} href="#como-funciona">
                Cómo comprar
              </a>
            </div>
            <ul className={styles.heroModes}>
              <li>
                <span>01</span>
                Compra directa
              </li>
              <li>
                <span>02</span>
                Personalizable
              </li>
              <li>
                <span>03</span>
                Proyecto a medida
              </li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <Image
              alt="Uniformes corporativos personalizados por DIXOY"
              className={styles.heroImage}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              src="/media/projects/corporate-textile/team-uniforms.webp"
              unoptimized
            />
            <div className={styles.heroShade} />
            <div className={styles.featuredLabel}>
              <span>Selección DIXOY</span>
              <strong>Identidad para todo tu equipo</strong>
              <p>Prendas, técnicas y tallas coordinadas en un solo pedido.</p>
            </div>
            <div className={styles.heroFloatingCard}>
              <span>Pedido corporativo</span>
              <strong>De 6 a 500+ unidades</strong>
              <p>Producción escalable según tu necesidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.catalog} id="catalogo">
        <div className={styles.catalogHeading}>
          <div>
            <p className={styles.sectionKicker}>Catálogo inicial</p>
            <h2>
              Elige el punto de partida. <span>Nosotros lo adaptamos.</span>
            </h2>
          </div>
          <p>
            Esta primera selección reúne productos y soluciones que podemos
            personalizar para empresas, equipos, eventos y puntos de venta.
          </p>
        </div>

        <div
          aria-label="Filtrar productos por categoría"
          className={styles.filters}
          role="group"
        >
          {categories.map((category) => (
            <button
              className={activeCategory === category ? styles.activeFilter : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {visibleProducts.map((product) => (
            <article
              className={`${styles.productCard} ${
                product.featured ? styles.featuredProduct : ""
              }`}
              key={product.id}
            >
              <div className={styles.productImageWrap}>
                <Image
                  alt={product.name}
                  className={styles.productImage}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  src={product.image}
                  unoptimized
                />
                <span
                  className={`${styles.modeBadge} ${
                    product.mode === "Proyecto a medida"
                      ? styles.projectBadge
                      : product.mode === "Compra directa"
                        ? styles.directBadge
                        : ""
                  }`}
                >
                  {product.mode}
                </span>
              </div>
              <div className={styles.productContent}>
                <span className={styles.productCategory}>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <dl>
                  <div>
                    <dt>Pedido</dt>
                    <dd>{product.minimum}</dd>
                  </div>
                  <div>
                    <dt>Entrega</dt>
                    <dd>{product.time}</dd>
                  </div>
                </dl>
                <button onClick={() => addProduct(product.id)} type="button">
                  {product.mode === "Proyecto a medida"
                    ? "Añadir a mi solicitud"
                    : "Agregar al pedido"}
                  <Chevron />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} id="como-funciona">
        <div className={styles.processIntro}>
          <p className={styles.sectionKicker}>Comprar sin complicaciones</p>
          <h2>
            Un pedido claro, incluso cuando es <span>personalizado.</span>
          </h2>
          <p>
            El carrito organiza tu solicitud. Antes de producir confirmamos
            cantidades, acabados, arte final, precio y fecha de entrega.
          </p>
        </div>

        <ol className={styles.processSteps}>
          <li>
            <span>01</span>
            <div>
              <strong>Elige</strong>
              <p>Agrega productos o proyectos a tu pedido.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Personaliza</strong>
              <p>Comparte cantidades, colores y tu identidad visual.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Confirma</strong>
              <p>Recibe el valor final, tiempos y especificaciones.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <strong>Recibe</strong>
              <p>Producimos y coordinamos entrega o instalación.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.customCta}>
        <div>
          <p className={styles.sectionKicker}>¿No encuentras lo que buscas?</p>
          <h2>También desarrollamos productos desde cero.</h2>
          <p>
            Cuéntanos la idea, el uso, la cantidad y la fecha. Integramos diseño,
            producción y entrega en una sola propuesta.
          </p>
        </div>
        <a
          href="https://wa.me/573118072144?text=Hola%20DIXOY%2C%20quiero%20desarrollar%20un%20producto%20a%20medida."
          rel="noopener noreferrer"
          target="_blank"
        >
          Crear una solución a medida
          <Arrow />
        </a>
      </section>

      <footer className={styles.footer}>
        <Link aria-label="DIXOY, página principal" className={styles.logo} href="/">
          <Image
            alt="DIXOY"
            height={255}
            src="/logos/logo-dixoy-horizontal.svg"
            unoptimized
            width={986}
          />
        </Link>
        <p>Productos y soluciones corporativas hechas para avanzar.</p>
        <div>
          <Link href="/">Inicio</Link>
          <a href="#catalogo">Productos</a>
          <Link href="/#contacto">Contacto</Link>
        </div>
      </footer>

      {cartOpen && (
        <div
          aria-label="Resumen del pedido"
          aria-modal="true"
          className={styles.cartOverlay}
          role="dialog"
        >
          <button
            aria-label="Cerrar pedido"
            className={styles.cartBackdrop}
            onClick={() => setCartOpen(false)}
            type="button"
          />
          <aside className={styles.cartPanel}>
            <div className={styles.cartHeader}>
              <div>
                <span>Tu selección</span>
                <h2>Mi pedido</h2>
              </div>
              <button
                aria-label="Cerrar pedido"
                className={styles.closeButton}
                onClick={() => setCartOpen(false)}
                type="button"
              >
                <span />
                <span />
              </button>
            </div>

            {cartItems.length ? (
              <>
                <div className={styles.cartItems}>
                  {cartItems.map((product) => (
                    <article className={styles.cartItem} key={product.id}>
                      <div className={styles.cartThumb}>
                        <Image
                          alt=""
                          fill
                          sizes="72px"
                          src={product.image}
                          unoptimized
                        />
                      </div>
                      <div className={styles.cartItemCopy}>
                        <span>{product.mode}</span>
                        <strong>{product.name}</strong>
                        <small>{product.minimum}</small>
                      </div>
                      <div
                        aria-label={`Cantidad de ${product.name}`}
                        className={styles.quantity}
                      >
                        <button
                          aria-label={`Quitar una unidad de ${product.name}`}
                          onClick={() => changeQuantity(product.id, -1)}
                          type="button"
                        >
                          −
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          aria-label={`Agregar una unidad de ${product.name}`}
                          onClick={() => changeQuantity(product.id, 1)}
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
                <div className={styles.cartSummary}>
                  <div>
                    <span>Productos seleccionados</span>
                    <strong>{cartCount}</strong>
                  </div>
                  <p>
                    El valor final se confirma según cantidades, técnica,
                    personalización y entrega.
                  </p>
                  <a
                    href={whatsappLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Continuar por WhatsApp
                    <Arrow />
                  </a>
                  <small>
                    Un asesor revisará tu solicitud antes de iniciar producción.
                  </small>
                </div>
              </>
            ) : (
              <div className={styles.emptyCart}>
                <span className={styles.emptyCartIcon}>
                  <BagIcon />
                </span>
                <h3>Tu pedido está vacío</h3>
                <p>
                  Explora el catálogo y agrega los productos que quieras
                  personalizar o cotizar.
                </p>
                <button onClick={() => setCartOpen(false)} type="button">
                  Ver productos
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
