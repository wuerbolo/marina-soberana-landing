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
    <section className="bg-gradient-to-b from-dark via-dark to-panel text-on-dark">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          Máster de Registros Akáshicos
        </p>
        <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-tight md:text-6xl">
          Aprende a canalizar Registros Akáshicos{" "}
          <em className="text-accent not-italic">como un terapeuta profesional</em> — sin
          sentir que te quedas en blanco o que te lo inventas
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-on-dark-muted md:text-xl">
          Soberana no es un curso más de Registros Akáshicos: es el máster de Registros
          Akáshicos + terapias emocionales de 6 meses con el que te formas en una nueva
          profesión, con material 100% exclusivo de esta formación, para crear
          acompañamientos con los que tus clientes vean resultados desde el día 1.
        </p>
        <div className="mt-12">
          <Link
            href="/aplicar"
            data-umami-event="cta-hero-click"
            className="inline-flex rounded-full bg-accent px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
          <p className="mt-4 text-xs uppercase tracking-widest text-on-dark-muted">
            3 minutos · sin compromiso
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {META.map((item) => (
            <span
              key={item}
              className="rounded-full border border-accent/40 px-4 py-2 text-xs tracking-wide text-on-dark-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
