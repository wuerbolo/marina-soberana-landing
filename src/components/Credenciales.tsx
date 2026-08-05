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
    <section className="bg-dark text-on-dark">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.label}>
              <p className="font-serif text-4xl font-semibold text-accent md:text-5xl">
                {item.num}
              </p>
              <p className="mt-2 text-sm leading-snug text-on-dark-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
