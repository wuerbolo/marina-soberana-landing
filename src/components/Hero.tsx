import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          Proceso de evolución, sanación y manifestación
        </p>
        <h1 className="mt-5 font-serif text-5xl font-light tracking-tight md:text-7xl">
          Soberana
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
          Rompe y libera miedos, lealtades familiares y heridas del alma para avanzar
          con claridad, confianza y merecimiento.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          Aprende a manifestar amor, paz y dinero, sin sentir culpa o que pides demasiado.
        </p>
        <div className="mt-12">
          <Link
            href="/aplicar"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted">
            3 minutos · sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
