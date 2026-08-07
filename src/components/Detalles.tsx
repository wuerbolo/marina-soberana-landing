const ITEMS = [
  { label: "Modalidad", valor: "Online" },
  { label: "Duración", valor: "6 meses" },
  { label: "Horario", valor: "18–20h (hora Madrid)" },
  { label: "Clases", valor: "En directo" },
  { label: "Acompañamiento", valor: "Semanal" },
];

export default function Detalles() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Detalles del máster
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-line bg-surface px-4 py-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-xl font-semibold">{item.valor}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted">
          Las clases son en directo por las tardes, hora de Madrid — si vives fuera de
          España, comprueba antes qué hora te queda en tu zona horaria.
        </p>
      </div>
    </section>
  );
}
