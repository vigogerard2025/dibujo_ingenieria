// app/page.tsx
// Requiere: Tailwind CSS y estas imágenes en /public:
//   /public/fondo.jpg  (edificio de fondo)
//   /public/logo.png   (logo de escuadras/rollo de planos)
import { Chakra_Petch } from "next/font/google";

const font = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Semanas sin contenido (botón más oscuro y sin flor)
const vacias = [8, 9, 17, 18];
const semanas = Array.from({ length: 18 }, (_, i) => i + 1);

export default function Home() {
  return (
    <div
      className={`${font.className} flex min-h-screen flex-col text-[#0b1230]`}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between bg-[#fbfaf3] px-6 py-2 sm:px-10">
        <div className="flex items-center gap-5">
          <img
            src="/imagenes/logo.jpg"
            alt="Logo"
            className="h-30 w-40 object-contain"
          />
          <h1 className="text-2xl font-bold uppercase tracking-wide sm:text-5xl">
            Henrry Jorge Obregon Bravo
          </h1>
        </div>
        <nav className="hidden items-center gap-10 text-lg md:flex">
          <span className="font-bold uppercase">Ingeniería Civil</span>
          <a href="#actividades" className="underline">
            Actividades
          </a>
        </nav>
      </header>

      {/* HERO */}
      <main
        id="actividades"
        className="relative flex flex-1 flex-col gap-8 bg-cover bg-center px-4 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-0"
        style={{
          backgroundImage: "url('/imagenes/dibujo_1.png')",
          minHeight: 600,
        }}
      >
        {/* Tarjeta izquierda */}
        <section className="order-2 w-full self-end rounded-2xl bg-white/75 p-6 lg:order-1 lg:w-[520px] lg:rounded-l-none lg:rounded-br-none">
          <h2 className="text-5xl font-bold leading-[1.1] sm:text-7xl">
            Dibujo para
            <br />
            Ingeniería
          </h2>
          <p className="mt-3 text-lg font-bold uppercase sm:text-xl">
            Henrry Jorge Obregon Bravo
          </p>
          <div className="flex items-end justify-between text-lg font-bold uppercase sm:text-xl">
            <span>Ingeniería Civil</span>
            <span>II Ciclo - 2026</span>
          </div>
        </section>

        {/* Proyectos semanales */}
        <section className="order-1 mx-auto w-full max-w-[680px] self-start text-center lg:order-2 lg:mr-24 lg:mt-6">
          <h2 className="text-5xl font-bold sm:text-7xl">
            Proyectos Semanales
          </h2>
          <p className="mt-2 text-base font-semibold sm:text-lg">
            Resumen de actividades y láminas de dibujo.
          </p>

          <div className="mx-auto mt-8 grid max-w-[440px] grid-cols-2 gap-x-3 gap-y-3">
            {semanas.map((n) => {
              const vacia = vacias.includes(n);
              const estilo =
                "flex h-[42px] items-center justify-center text-sm font-bold transition";
              if (vacia) {
                return (
                  <div
                    key={n}
                    className={`${estilo} cursor-default bg-[#bdb8a2]`}
                  >
                    Semana {n}
                  </div>
                );
              }
              return (
                <a
                  key={n}
                  href={`/pdfs/semana-${n}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${estilo} bg-[#f0ede0] hover:brightness-95`}
                >
                  <span className="mr-1">✿</span>
                  Semana {n}
                </a>
              );
            })}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1b2d5c] py-3 text-center text-sm font-bold uppercase text-white">
        Universidad Tecnologica del Perú - 2026
      </footer>
    </div>
  );
}
