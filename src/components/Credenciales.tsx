const ITEMS = [
  { num: "+2", label: "años formando terapeutas de Registros Akáshicos" },
  { num: "+900", label: "personas acompañadas en terapia individual" },
  { num: "+60", label: "alumnas ya han hecho el máster Soberana" },
  {
    num: "16",
    label:
      "alumnas acompañadas a la vez — porque cada una recibe seguimiento individual semanal conmigo y su tutora",
  },
];

export default function Credenciales() {
  return (
    <section className="grain relative overflow-hidden bg-night-gradient text-on-dark">
      <div
        aria-hidden
        className="halo-gold pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(900px,160%)] -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-center md:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.label} className="reveal">
              <p className="font-serif text-5xl font-semibold leading-none text-accent-soft md:text-6xl">
                {item.num}
              </p>
              <p className="mt-3 text-sm leading-snug text-on-dark-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
