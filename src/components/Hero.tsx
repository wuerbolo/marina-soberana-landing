import Link from "next/link";

/*
  Kept deliberately short. These are scanned, not read — five of them stacked in
  a wrap is a paragraph in disguise, and the reference's own chips run two or
  three words each. The detail that got cut ("conmigo + tutora", "para crear tus
  acompañamientos") is stated in full further down the page, where there is room
  for it.

  "Canalizas a los 15 días" is the FAQ's own claim ("a los 15 días ya empiezas a
  canalizar") surfaced to the hero — the page's strongest time-to-first-result
  fact, per the conversion audit (§4.1).
*/
const META = [
  "Online · 6 meses",
  "Clases en directo",
  "Acompañamiento semanal",
  "Manuales descargables",
  "Prácticas exclusivas",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night-gradient px-[clamp(20px,5vw,40px)] pb-[clamp(56px,8vw,88px)] pt-[clamp(48px,9vw,96px)] text-on-dark">
      {/*
        The page's only light source: a gold bloom behind the headline that the
        CTA below then reads as lit by. Pulled up out of frame so only the lower
        half of the falloff is visible — a full circle would look like a sticker.
      */}
      <div
        aria-hidden
        className="halo-gold pointer-events-none absolute -top-[24%] left-1/2 aspect-square w-[min(760px,150%)] -translate-x-1/2"
      />
      {/* Faint gold stars in the night gradient — see .starfield in globals.css. */}
      <div aria-hidden className="starfield pointer-events-none absolute inset-0" />
      {/*
        Padding lives on the section, not here: this div's only job is the
        760px measure. Padding and max-width on the same box double-count once
        the max-width binds — the box ends up narrower than 760px, not equal to
        it, because the padding eats into the space the max-width already
        capped. That was quietly narrowing the hero (and every other section)
        below what the reference specifies.
      */}
      <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-[clamp(18px,3vw,26px)] text-center">
        <p className="t-eyebrow text-accent-dim">Máster de Registros Akáshicos</p>
        <h1 className="h-display text-pretty">
          Aprende a canalizar Registros Akáshicos{" "}
          <em className="italic text-accent-soft">como un terapeuta profesional</em> — sin
          sentir que te quedas en blanco o que te lo inventas
        </h1>
        {/*
          One sentence, one promise (audit §4.2): the old standfirst opened with
          "no es un curso más" (the line every competitor also opens with) and
          ran 58 words. The verifiable specifics stay; the adjectives went.
        */}
        <p className="t-lead max-w-[620px] text-pretty text-on-dark-muted">
          El máster de Registros Akáshicos + terapias emocionales de 6 meses con el que
          aprendes una nueva profesión: sales con tu propio método de acompañamiento
          y con la seguridad de garantizar cambios a tus clientes en el primer día.
        </p>
        <div className="mt-1 flex w-full flex-col items-center gap-3">
          <Link
            href="/aplicar"
            data-umami-event="cta-hero-click"
            className="btn-cta btn-cta-block max-w-[400px]"
          >
            Quiero saber si es para mí
          </Link>
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-accent-dim">
            3 minutos · sin compromiso
          </span>
        </div>
        {/*
          Bigger and bolder than the reference's own chips on purpose — legibility
          call from the client, not a fidelity slip. At the reference's size these
          read as a thin grey smudge under the CTA rather than as scannable facts.
        */}
        {/*
          On a phone the chips are a 2-column grid: equal-width cells in aligned
          rows read as tidy, where a centered flex-wrap leaves a ragged last row
          of orphans. With an odd count the final chip spans both columns so it
          centers instead of stranding one to the left. From sm up there is room
          for the reference's natural pill row, so it reverts to a centered wrap.
        */}
        <div className="mt-[clamp(10px,3vw,20px)] grid w-full max-w-[380px] grid-cols-2 gap-2.5 [&>*:last-child:nth-child(odd)]:col-span-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:[&>*:last-child:nth-child(odd)]:col-span-1">
          {META.map((item) => (
            <span
              key={item}
              className="flex items-center justify-center rounded-full border border-accent-soft/45 px-[18px] py-[9px] text-center text-[15px] font-medium tracking-[0.01em] text-accent-soft"
            >
              {item}
            </span>
          ))}
        </div>
        {/*
          Proof one screen-height early (audit §3.1): the headline claims
          "como un terapeuta profesional", and the numbers that back it used to
          sit three sections down. One quiet line closes the gap; the full stats
          band stays with Marina's bio where it reads as her credentials.
        */}
        <p className="text-[13.5px] font-medium tracking-[0.04em] text-on-dark-muted">
          +60 alumnas formadas · +900 personas acompañadas · +2 años formando terapeutas en Registros Akáshicos
        </p>
      </div>
    </section>
  );
}
