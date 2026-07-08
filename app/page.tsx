import Image from "next/image";

import WhyDixoy from "./components/WhyDixoy";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import HeroShowcase from "./components/HeroShowcase";


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
    <main className="min-h-screen bg-[#F5F5F7] text-zinc-950">
     <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-[#F5F5F7]/90 backdrop-blur-md">
  <div className="flex h-12 w-full items-center justify-between px-6 lg:px-10">
    <a href="#" className="flex items-center">
      <img
        src="/logos/logo-dixoy-horizontal.svg"
        alt="DIXOY"
        className="block h-auto w-[78px] md:w-[92px]"
      />
    </a>

    <div className="hidden gap-7 text-xs font-medium md:flex">
      <a href="#soluciones">Soluciones</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#contacto">Contacto</a>
    </div>

    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-zinc-950 px-4 py-1.5 text-xs text-white"
    >
      Cotizar
    </a>
  </div>
</nav>

  <HeroShowcase whatsappLink={whatsappLink} />

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