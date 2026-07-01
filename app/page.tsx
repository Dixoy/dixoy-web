import Image from "next/image";

import WhyDixoy from "./components/WhyDixoy";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import HeroGallery from "./components/HeroGallery";

export default function Home() {
  const whatsappMessage = [
    "Hola DIXOY, quiero solicitar una cotización.",
    "",
    "Nombre:",
    "Empresa:",
    "Servicio que necesito:",
    "Ciudad:",
  ].join("\n");

  const whatsappLink = `https://wa.me/573118072144?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <nav className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between border-b border-zinc-200/50 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-12">
        <a href="#" className="flex items-center">
          <img
            src="/logos/logo-dixoy-horizontal.svg"
            alt="DIXOY"
            className="h-auto w-[100px] md:w-[125px]"
          />
        </a>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#soluciones">Soluciones</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-zinc-950 px-4 py-2 text-xs text-white md:px-5 md:text-sm"
        >
          Cotizar
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:px-12">
        <div>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Un solo aliado para construir la imagen, tecnología e infraestructura
            que impulsa tu empresa.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Integramos diseño, adecuación de espacios, tecnología y soluciones
            empresariales para ayudarte a crecer con una operación más sólida y
            profesional.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
  className="rounded-full bg-zinc-950 px-7 py-3 text-center text-white"
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
>
  Solicitar cotización
</a>

            <a
  className="rounded-full border border-zinc-300 px-7 py-3 text-center"
  href="#proyectos"
>
  Ver proyectos
</a>
          </div>
        </div>

        <HeroGallery />
      </section>

      <section
        id="soluciones"
        className="mx-auto max-w-7xl px-6 py-[3.75rem] lg:px-12"
      >
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Soluciones
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
            Lo que fortalecemos en tu empresa
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">Tu Marca</h3>

            <p className="mt-4 text-zinc-600">
              Fortalece la presencia de tu empresa con avisos, señalización,
              fachadas, vinilos y elementos visuales que transmiten confianza y
              profesionalismo.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">Tu Espacio</h3>

            <p className="mt-4 text-zinc-600">
              Adecuamos e instalamos soluciones que mejoran la funcionalidad,
              organización e imagen de tus espacios.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">Tecnología</h3>

            <p className="mt-4 text-zinc-600">
              Implementamos herramientas y soporte tecnológico para que tu
              operación sea más eficiente, segura y conectada.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">Personalización</h3>

            <p className="mt-4 text-zinc-600">
              Creamos productos y materiales personalizados que fortalecen la
              relación con tus clientes, colaboradores y aliados.
            </p>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Proyectos
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
              Trabajos que muestran lo que hacemos
            </h2>
          </div>

          <a href="#contacto" className="text-sm font-semibold text-zinc-700">
            Ver más proyectos →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/hero/hero-03.jpg"
                alt="Adecuación de espacio comercial"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6">
              <p className="text-sm font-medium text-zinc-500">Tu Espacio</p>

              <h3 className="mt-2 text-xl font-semibold">
                Adecuación de espacio comercial
              </h3>

              <p className="mt-3 text-zinc-600">
                Intervención visual y funcional para mejorar la experiencia del
                espacio y proyectar una imagen más profesional.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/hero/hero-01.jpg"
                alt="Imagen corporativa e instalación"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            <div className="p-6">
              <p className="text-sm font-medium text-zinc-500">Tu Marca</p>

              <h3 className="mt-2 text-xl font-semibold">
                Imagen corporativa e instalación
              </h3>

              <p className="mt-3 text-zinc-600">
                Soluciones visuales aplicadas en espacios reales para fortalecer
                la presencia y comunicación de marca.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
  src="/images/hero/hero-09.jpg"
  alt="Tecnología para empresas"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover object-center"
/>
            </div>

            <div className="p-6">
              <p className="text-sm font-medium text-zinc-500">Tecnología</p>

              <h3 className="mt-2 text-xl font-semibold">
                Tecnología para la operación
              </h3>

              <p className="mt-3 text-zinc-600">
                Equipos y soluciones tecnológicas que ayudan a mejorar la
                productividad y continuidad del negocio.
              </p>
            </div>
          </article>
        </div>
      </section>

      <WhyDixoy />

      <ContactCTA />

      <Footer />
    </main>
  );
}