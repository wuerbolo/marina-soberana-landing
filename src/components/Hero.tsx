import Link from "next/link";

const META = [
  "Online · 6 meses",
  "Clases en directo",
  "Acompañamiento semanal: conmigo + tutora",
  "Manuales descargables para crear tus acompañamientos",
  "Prácticas únicas de este máster",
];

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-night-gradient text-on-dark">
      {/*
        The page's only light source: a gold bloom behind the headline that the
        CTA below then reads as lit by. Pulled up out of frame so only the lower
        half of the falloff is visible — a full circle would look like a sticker.
      */}
      <div
        aria-hidden
        className="halo-gold pointer-events-none absolute -top-[28%] left-1/2 aspect-square w-[min(820px,150%)] -translate-x-1/2"
      />
      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent-soft">
          Máster de Registros Akáshicos
        </p>
        <h1 className="mt-5 font-serif text-[2rem] font-semibold leading-[1.14] tracking-tight sm:text-4xl md:text-5xl">
          Aprende a canalizar Registros Akáshicos{" "}
          <em className="italic text-accent-soft">como un terapeuta profesional</em> — sin
          sentir que te quedas en blanco o que te lo inventas
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-on-dark-muted md:text-xl">
          Soberana no es un curso más de Registros Akáshicos: es el máster de Registros
          Akáshicos + terapias emocionales de 6 meses con el que te formas en una nueva
          profesión, con material 100% exclusivo de esta formación, para crear
          acompañamientos con los que tus clientes vean resultados desde el día 1.
        </p>
        <div className="mx-auto mt-11 max-w-sm">
          <Link href="/aplicar" data-umami-event="cta-hero-click" className="btn-cta btn-cta-block">
            Quiero saber si es para mí
          </Link>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-accent-soft">
            3 minutos · sin compromiso
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {META.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/35 px-4 py-2 text-xs tracking-wide text-accent-soft"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
