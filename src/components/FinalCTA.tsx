import Link from "next/link";
import SectionHeading from "./SectionHeading";

/**
 * The closing ask. Deep purple rather than the page's cream, so the last thing
 * a visitor sees is the same lit surface the hero opened with — and so the gold
 * pill has something to glow against instead of sitting flat on an off-white.
 */
export default function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden bg-night-gradient text-on-dark">
      <div
        aria-hidden
        className="halo-gold pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(820px,170%)] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <SectionHeading
          tone="dark"
          title="Tu siguiente paso"
          subtitle="Soberana se trabaja de forma cercana y personalizada, así que antes de unirte hablamos en una llamada. Empieza por estas preguntas para saber si es tu momento."
        />
        <div className="reveal mx-auto mt-10 max-w-sm">
          <Link href="/aplicar" data-umami-event="cta-final-click" className="btn-cta btn-cta-block">
            Quiero saber si es para mí
          </Link>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-accent-soft">
            3 minutos · sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
