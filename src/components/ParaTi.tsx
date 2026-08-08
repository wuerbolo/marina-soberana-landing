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
    <section>
      <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <SectionHeading title="Soberana es tu máster si…" />

        <ul className="reveal mt-10 flex flex-col">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className={`flex gap-3.5 py-4 text-base leading-relaxed text-foreground/90 ${
                i < ITEMS.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="mt-0.5 shrink-0 text-sm text-accent">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
