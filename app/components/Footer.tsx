export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-12 pt-4 lg:px-12">
      <div className="border-t border-zinc-200 pt-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-bold tracking-wider text-[#0A0B0B]">
              DIXOY
            </p>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Soluciones empresariales que integran marca, espacio, tecnología e infraestructura.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-600 md:items-end">
            <a
  href="mailto:somos@dixoy.co"
  className="font-medium text-[#0A0B0B] hover:text-[#ED6A1D]"
>
  somos@dixoy.co
</a>

            <p>Bogotá, Colombia</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-zinc-400 md:flex-row">
          <p>© 2026 DIXOY. Todos los derechos reservados.</p>

          <p>Marca · Espacio · Tecnología · Personalización</p>
        </div>
      </div>
    </footer>
  );
}