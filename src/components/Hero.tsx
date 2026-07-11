import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-panel via-panel/60 to-background">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
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
            data-umami-event="cta-hero-click"
            className="inline-flex rounded-full bg-accent px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted">
            3 minutos · sin compromiso
          </p>
        </div>
        <p className="mt-14 text-sm text-muted">
          <span className="font-serif text-2xl font-light text-foreground">+60 mujeres</span>
          <span className="mx-2 text-soft">·</span>
          transformaciones reales en su vida personal, familiar y profesional
        </p>
      </div>
    </section>
  );
}
