const POINTS = [
  "Obtienes resultados desde el primer mes: ligereza, paz y calma.",
  "Haremos un viaje profundo de autoconocimiento, evolución y sanación para que sueltes cargas que no te corresponden.",
  "Te guío paso a paso para que avances y sientas confianza.",
  "Aprenderás herramientas prácticas de manifestación y sanación. Serás tu propia terapeuta.",
];

export default function ReadySection() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="font-serif text-3xl font-light leading-snug">
          No necesitas experiencia para unirte a Soberana.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Solo las ganas de crear una nueva versión de ti en la que te sientas plena,
          capaz, útil y merecedora de todos los éxitos. En este proceso:
        </p>

        <ul className="mt-8 space-y-3">
          {POINTS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-2xl border border-line bg-background px-6 py-5 text-base leading-relaxed">
          <strong className="font-medium">Más de 60 mujeres</strong> han vivido
          transformaciones espectaculares que cambiaron su vida personal, familiar y
          profesional. Sus historias te inspirarán y te mostrarán lo que es posible.
        </p>

        <p className="mt-10 font-serif text-2xl font-light leading-snug">
          Si sientes que ya es hora de dejar de dar vueltas, avanzar y desbloquear tu
          vida, Soberana es tu siguiente paso.
        </p>
      </div>
    </section>
  );
}
