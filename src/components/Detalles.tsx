import SectionHeading from "./SectionHeading";

const ITEMS = [
  { label: "Modalidad", valor: "Online" },
  { label: "Duración", valor: "6 meses" },
  // No "(hora Madrid)" in the tile — at 21px it wrapped to three lines and was
  // the only tile that did. The note under the grid says it in full.
  { label: "Horario", valor: "18–20h" },
  { label: "Clases", valor: "En directo" },
  { label: "Acompañamiento", valor: "Semanal" },
  { label: "Plazas", valor: "Limitadas" },
];

export default function Detalles() {
  return (
    <section className="px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[760px]">
        <SectionHeading title="Detalles del máster" />

        <div className="reveal mx-auto grid max-w-[600px] grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[126px] flex-col items-center justify-center rounded-xl border border-panel-line bg-panel px-3.5 py-[22px] text-center transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-card"
            >
              <p className="t-label mb-2 text-accent-hover">{item.label}</p>
              <p className="font-serif text-[21px] font-semibold text-foreground">
                {item.valor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
