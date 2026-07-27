import Link from "next/link";

export default function FinalCTA() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
          Tu siguiente paso
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Soberana se trabaja de forma cercana y personalizada, así que antes de unirte
          hablamos en una llamada. Empieza por estas preguntas para saber si es tu
          momento.
        </p>
        <div className="mt-10">
          <Link
            href="/aplicar"
            data-umami-event="cta-final-click"
            className="inline-flex rounded-full bg-accent px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
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
