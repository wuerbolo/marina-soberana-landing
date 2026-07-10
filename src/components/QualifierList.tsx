import Link from "next/link";

const ITEMS = [
  "Quieres claridad y acción para dejar de sentirte perdida, en crisis, agotada y saturada.",
  "Deseas calma, una vida abundante y salir de la escasez: «no tengo dinero», «si fracaso me quedo sola», «tengo que ser perfecta, así no me abandonan»…",
  "Amas el dinero y las experiencias terrenales (viajes, casas, masajes, etc.), pero te sientes culpable y mala si lo deseas.",
  "Quieres desarrollar tu intuición y canalización para sentir a tus guías y así, acompañar a otros después.",
  "Estás lista para invertir en tu crecimiento personal y espiritual.",
  "Quieres aprender espiritualidad práctica para aplicar a diario, sin buscar perfección o exigencia.",
  "Valoras el acompañamiento personalizado, los cambios reales y la calidad: sabes que los procesos transformadores no funcionan con 50 personas ni son de 2 meses.",
  "Estás comprometida con tu proceso: te implicas y te responsabilizas de tu evolución y crecimiento.",
];

export default function QualifierList() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
          Soberana es para ti si…
        </h2>

        <ul className="mt-10 space-y-4">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/aplicar"
            className="inline-flex rounded-full bg-accent px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground shadow-cta transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Quiero saber si es para mí
          </Link>
        </div>
      </div>
    </section>
  );
}
