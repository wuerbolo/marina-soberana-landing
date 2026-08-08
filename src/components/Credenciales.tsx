import CountUp from "./CountUp";

const ITEMS = [
  { prefix: "+", value: 2, label: "años formando terapeutas de Registros Akáshicos" },
  { prefix: "+", value: 900, label: "personas acompañadas en terapia individual" },
  { prefix: "+", value: 60, label: "alumnas ya han hecho el máster Soberana" },
  {
    prefix: "",
    value: 16,
    label:
      "alumnas acompañadas a la vez — porque cada una recibe seguimiento individual semanal conmigo y su tutora",
  },
];

export default function Credenciales() {
  return (
    // Flat, not the hero's gradient: this is a thin band between two light
    // sections, and a gradient at this height only reads as a smudge.
    <section className="bg-dark px-[clamp(20px,5vw,40px)] py-[clamp(36px,7vw,56px)] text-on-dark">
      <div className="mx-auto grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[clamp(22px,4vw,26px)] text-center">
        {ITEMS.map((item) => (
          <div key={item.label} className="reveal">
            <p className="font-serif text-[clamp(34px,8vw,42px)] font-bold leading-none text-accent-soft">
              <CountUp value={item.value} prefix={item.prefix} />
            </p>
            <p className="mt-2 text-[12.5px] font-light leading-[1.45] text-on-dark-quiet">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
