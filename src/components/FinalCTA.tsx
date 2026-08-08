import Link from "next/link";

/**
 * The closing ask.
 *
 * A deep purple CARD inset on the page's cream rather than a full-bleed dark
 * band — the shape Marina's reference closes on. Two things it buys: the gold
 * pill still has a dark surface to glow against, and the card's rounded edge
 * keeps the section from reading as a second hero at the bottom of the page.
 */
export default function FinalCTA() {
  return (
    // id targeted by StickyCtaBar's IntersectionObserver — once this card is on
    // screen, the fixed bar is a redundant second ask and slides away.
    <section
      id="final-cta"
      className="px-[clamp(16px,5vw,40px)] pb-[clamp(56px,10vw,96px)] pt-[clamp(20px,5vw,40px)]"
    >
      <div className="bg-card-gradient reveal relative isolate mx-auto flex max-w-[660px] flex-col items-center gap-4 overflow-hidden rounded-[20px] px-[clamp(22px,5vw,44px)] py-[clamp(36px,7vw,56px)] text-center text-on-dark">
        {/* Same sky the hero opened under — the page closes where it began. */}
        <div aria-hidden className="starfield pointer-events-none absolute inset-0 -z-10" />
        <h2 className="font-serif text-[clamp(23px,5.6vw,29px)] font-semibold leading-[1.2] text-balance">
          Tu siguiente paso
        </h2>
        <p className="t-note max-w-[520px] text-pretty text-on-dark-muted">
          Soberana se trabaja de forma cercana y personalizada, así que antes de unirte
          hablamos en una llamada. Empieza por estas preguntas para saber si es tu momento.
        </p>
        <Link
          href="/aplicar"
          data-umami-event="cta-final-click"
          className="btn-cta btn-cta-block mt-1.5 max-w-[400px]"
        >
          Quiero saber si es para mí
        </Link>
        <small className="text-[13px] text-on-dark-quiet">
          3 minutos · sin compromiso
        </small>
      </div>
    </section>
  );
}
