import SectionHeading from "./SectionHeading";

const ITEMS = [
  "Quieres aprender a canalizar mensajes de los guías profundos, concretos y que de verdad generen transformación, evolución y sanación en tus futuros clientes.",
  "Te da miedo cobrar porque sientes que no aportas suficiente.",
  "Sientes que te puedes quedar en blanco en una sesión, que te lo inventas y que no sabes cómo estructurar un acompañamiento que dé resultados reales.",
  "Quieres crear acompañamientos terapéuticos con base energética-emocional, y no hacer sesiones sueltas.",
  "Vives cansada de esconder esta parte de ti, sin atreverte a contarlo del todo por miedo al juicio, y necesitas una formación seria que te dé la seguridad para dar el paso.",
  "Buscas una formación en directo y con alto nivel de acompañamiento, porque sabes que tienes una responsabilidad muy grande al trabajar con personas y quieres sentirte completamente segura en tu proceso.",
];

export default function ParaTi() {
  return (
    <section className="px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[640px]">
        <SectionHeading title="Soberana es tu máster si…" />

        <ul className="reveal flex flex-col">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className={`t-list flex gap-3.5 text-pretty py-[15px] text-body ${
                i < ITEMS.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="shrink-0 text-[15px] leading-[1.75] text-accent">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
