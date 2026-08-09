import Link from "next/link";

/**
 * Price floor + guarantee — the "Precio" screen from Marina's reference,
 * placed as the reference places it: after the second testimonial block,
 * before the FAQ. Copy is verbatim from the reference.
 *
 * Strategy note (2026-08-08, decided by Marina's reference): the page now
 * states the investment FLOOR ("desde 2.000€") so the qualifier's price
 * question lands pre-framed; the exact figure still lives in the qualifier
 * and the call. CONTEXT.md's deflection entry carries the same update.
 *
 * The page's closing card (the old "Antes de entrar, hablamos" FinalCTA was
 * removed): it both argues (price, guarantee) and asks. It carries the
 * starfield the hero opened under, so the page closes where it began, and the
 * id="final-cta" the StickyCtaBar watches to slide itself away once the last
 * ask is on screen.
 *
 * On-dark small text here is 400, not the reference's 300: thin light-on-dark
 * type is the worst case for Windows font rendering (see the .t-sub note in
 * globals.css).
 */
export default function Inversion() {
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
        <p className="text-[clamp(17px,4.4vw,21px)] text-accent-soft">
          Inversión desde{" "}
          <strong className="font-serif text-[clamp(24px,6vw,29px)] font-bold">
            2.000€
          </strong>
        </p>
        <p className="-mt-2.5 text-[14px] text-on-dark-quiet">
          Disponible con pago único o fraccionado.
        </p>
        <div className="w-full rounded-[14px] border border-accent-soft/55 px-5 py-[18px] text-left">
          <span className="t-label mb-2 block text-accent-soft">Mi garantía</span>
          <p className="text-pretty text-[clamp(15px,4vw,17px)] leading-[1.62] text-on-dark-muted">
            Confío tanto en este método que te lo aseguro: si al terminar el máster
            sientes que quieres seguir practicando para tener seguridad total, te regalo
            2 meses más de acceso a prácticas conmigo. Vas a canalizar con claridad, y si
            además quieres darle una vuelta más antes de sentirte al 100%, ya lo tienes
            cubierto.
          </p>
        </div>

        <Link
          href="/aplicar"
          data-umami-event="cta-inversion"
          className="btn-cta btn-cta-block max-w-[400px]"
        >
          Quiero saber si es para mí →
        </Link>
        <small className="text-[14px] text-on-dark-quiet">Plazas limitadas</small>
      </div>
    </section>
  );
}
