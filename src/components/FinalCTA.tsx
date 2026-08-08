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
        {/*
          "Antes de entrar, hablamos" over the old "Tu siguiente paso" (audit
          §4.4): names the actual mechanism and frames the call as mutual
          selection rather than funnel-speak.
        */}
        <h2 className="font-serif text-[clamp(23px,5.6vw,29px)] font-semibold leading-[1.2] text-balance">
          Antes de entrar, hablamos
        </h2>
        <p className="max-w-[520px] text-pretty text-[clamp(15.5px,4vw,17.5px)] leading-[1.66] text-on-dark-muted">
          Soberana se trabaja de forma cercana y personalizada, así que antes de unirte
          hablamos en una llamada. Empieza por estas preguntas para saber si es tu momento.
        </p>
        {/*
          What actually happens next (audit §3.3): in a call funnel the silent
          objection is fear of the call itself. Three concrete lines defuse it.
          No question count is stated — the server owns the questions.
        */}
        <ol className="flex max-w-[440px] flex-col gap-2.5 text-left">
          {[
            "Respondes unas preguntas — 3 minutos.",
            "Si encaja, hablamos por WhatsApp — sin guion de ventas.",
            "Decides con calma y con toda la información, precio incluido.",
          ].map((step, i) => (
            <li
              key={step}
              className="flex items-baseline gap-3 text-[clamp(15px,4vw,17px)] leading-[1.5] text-on-dark-muted"
            >
              <span className="font-serif text-[clamp(18px,4.6vw,20px)] font-bold leading-none text-accent-soft">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <Link
          href="/aplicar"
          data-umami-event="cta-final-click"
          className="btn-cta btn-cta-block mt-1.5 max-w-[400px]"
        >
          Quiero saber si es para mí
        </Link>
        <small className="text-[14px] text-on-dark-quiet">
          3 minutos · sin compromiso
        </small>
      </div>
    </section>
  );
}
