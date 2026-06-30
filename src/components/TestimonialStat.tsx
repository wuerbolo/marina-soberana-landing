import TestimonialQuote from "./TestimonialQuote";

// TODO: Marina will supply 3-6 real testimonial quotes separately. Drop them
// in here as { quote, name? } — the grid renders automatically once this
// array is non-empty. Until then the stat line alone carries social proof.
const TESTIMONIALS: { quote: string; name?: string }[] = [];

export default function TestimonialStat() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="font-serif text-4xl font-light tracking-tight md:text-5xl">
          +60
        </p>
        <p className="mt-3 text-base text-muted">
          mujeres han vivido transformaciones espectaculares que cambiaron su vida
          personal, familiar y profesional.
        </p>

        {TESTIMONIALS.length > 0 && (
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <TestimonialQuote key={t.quote} quote={t.quote} name={t.name} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
