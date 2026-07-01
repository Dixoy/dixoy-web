type SceneType = "direction" | "connection" | "construction" | "clarity";

function VisualScene({ type }: { type: SceneType }) {
  if (type === "direction") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-zinc-50">
        <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#114C81]/10" />
        <div className="absolute right-8 top-16 h-20 w-20 rounded-full bg-[#ED6A1D]/15" />
        <div className="absolute bottom-8 left-14 h-24 w-24 rounded-full bg-[#E7E8EB]/80" />

        <div className="absolute left-12 top-28 h-3 w-3 rounded-full bg-[#ED6A1D]" />
        <div className="absolute right-16 top-24 h-4 w-4 rounded-full bg-[#114C81]" />
        <div className="absolute bottom-16 left-1/2 h-3 w-3 rounded-full bg-[#0A0B0B]" />

        <div className="absolute left-16 top-36 h-px w-40 -rotate-12 bg-[#114C81]/30" />
        <div className="absolute left-20 top-28 h-px w-36 rotate-12 bg-[#ED6A1D]/40" />

        <div className="absolute right-20 bottom-16 text-2xl text-[#ED6A1D]">✦</div>
      </div>
    );
  }

  if (type === "connection") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-zinc-50">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-[2rem] bg-[#114C81]/10" />
        <div className="absolute right-8 top-14 h-28 w-28 rounded-[2rem] bg-[#ED6A1D]/15" />
        <div className="absolute bottom-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-[2rem] bg-[#E7E8EB]/90" />

        <div className="absolute left-14 top-28 h-3 w-3 rounded-full bg-[#114C81]" />
        <div className="absolute right-14 top-28 h-3 w-3 rounded-full bg-[#ED6A1D]" />
        <div className="absolute bottom-20 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#0A0B0B]" />

        <div className="absolute left-16 top-32 h-px w-40 bg-[#0A0B0B]/20" />
        <div className="absolute left-1/2 top-32 h-20 w-px bg-[#0A0B0B]/20" />
      </div>
    );
  }

  if (type === "construction") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-zinc-50">
        <div className="absolute left-8 top-12 h-32 w-32 rounded-full bg-[#E7E8EB]/80" />
        <div className="absolute right-8 bottom-8 h-28 w-28 rounded-full bg-[#ED6A1D]/12" />

        <div className="absolute left-14 top-20 h-16 w-20 rounded-2xl bg-[#114C81]/20" />
        <div className="absolute right-14 top-20 h-16 w-20 rounded-2xl bg-[#ED6A1D]/25" />
        <div className="absolute left-24 bottom-16 h-16 w-20 rounded-2xl bg-[#114C81]/30" />
        <div className="absolute right-10 bottom-16 h-16 w-16 rounded-2xl bg-[#0A0B0B]/85" />

        <div className="absolute left-20 bottom-24 h-px w-36 rotate-[-18deg] bg-[#ED6A1D]/60" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-zinc-50">
      <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-[#E7E8EB]/90" />
      <div className="absolute right-10 top-16 h-24 w-24 rounded-full bg-[#114C81]/10" />

      <div className="absolute left-12 bottom-16 h-3 w-3 rounded-full bg-[#ED6A1D]" />
      <div className="absolute right-16 top-20 h-3 w-3 rounded-full bg-[#0A0B0B]" />
      <div className="absolute right-20 bottom-20 h-4 w-4 rounded-full bg-[#114C81]" />

      <div className="absolute left-14 bottom-20 h-px w-44 -rotate-12 bg-[#ED6A1D]/70" />
      <div className="absolute left-16 top-28 h-px w-36 rotate-12 bg-[#D4D4D8]" />

      <div className="absolute right-14 top-32 text-2xl text-[#ED6A1D]">✦</div>
    </div>
  );
}

export default function WhyDixoy() {
  const features = [
    {
      number: "01",
      title: "Cada decisión tiene un propósito",
      description:
        "Analizamos antes de construir para tomar mejores decisiones desde el inicio.",
      type: "direction" as SceneType,
    },
    {
      number: "02",
      title: "Todo conectado funciona mejor",
      description:
        "Integramos marca, espacio, tecnología y operación como un solo sistema.",
      type: "connection" as SceneType,
    },
    {
      number: "03",
      title: "Las ideas toman forma",
      description:
        "Convertimos conceptos en soluciones funcionales y bien ejecutadas.",
      type: "construction" as SceneType,
    },
    {
      number: "04",
      title: "Cada recurso debe generar valor",
      description:
        "Buscamos el mejor resultado sin gastar más de lo necesario.",
      type: "clarity" as SceneType,
    },
  ];

  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <div className="mb-14 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Nuestra forma de trabajar
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
  Más que un proveedor, un{" "}
  <span className="text-[#ED6A1D]">aliado</span> para construir.
</h2>

        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Acompañamos cada proyecto desde la idea hasta la ejecución,
          integrando criterio, diseño y soluciones reales para construir
          empresas más sólidas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group rounded-[2rem] border border-zinc-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="h-72 overflow-hidden rounded-[1.5rem]">
              <div className="h-full transition duration-500 group-hover:scale-105">
                <VisualScene type={feature.type} />
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ED6A1D]" />
                <span className="text-xs font-semibold tracking-[0.25em] text-[#ED6A1D]">
                  {feature.number}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}