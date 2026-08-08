import SectionHeading from "./SectionHeading";

const ITEMS = [
  <>
    <strong className="font-medium text-foreground">
      Vas a utilizar los Registros Akáshicos como una herramienta terapéutica real, con
      criterio profesional:
    </strong>{" "}
    no serás una simple lectora, tendrás una visión completa y precisa de lo que cada
    persona necesita trabajar a nivel energético y emocional: autoestima, merecimiento,
    confianza, ansiedad, relaciones / vínculos familiares, economía...
  </>,
  <>
    <strong className="font-medium text-foreground">
      Dominarás otras terapias energéticas y emocionales hasta construir tu propio método
      de acompañamiento,
    </strong>{" "}
    el que hará que las personas que trabajen contigo obtengan resultados reales y
    duraderos. Diseñamos procesos con estructura, no sesiones sueltas que no llevan a
    ningún sitio.
  </>,
  <>
    Sabrás{" "}
    <strong className="font-medium text-foreground">
      aplicar los Registros Akáshicos en toda su potencia:
    </strong>{" "}
    leerás la información para expandir tu conciencia y la de tu cliente, sabrás aplicar
    sanaciones energéticas que desprograman traumas y creencias limitantes, y reconocerás
    qué desbloquear en el campo energético para acelerar manifestaciones.
  </>,
  <>
    Sabrás entrar en la frecuencia de los Registros Akáshicos{" "}
    <strong className="font-medium text-foreground">en 1 minuto y con precisión,</strong>{" "}
    para recibir mensajes con total claridad, sin depender de rituales ni de saber
    meditar.
  </>,
  <>
    Tendrás un protocolo propio para limpiar tu canal, proteger y expandir tu energía en{" "}
    <strong className="font-medium text-foreground">5 minutos,</strong> de forma que
    puedas sostener sesión tras sesión sin cargarte de energía ajena ni terminar agotada.
  </>,
];

export default function Logros() {
  return (
    <section className="px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[720px]">
        {/*
          Subtitle repeats the FAQ's 15-day claim (audit §4.1) — time-to-first-
          result is the value equation's denominator, so it earns a second
          appearance — and drops the old "paso a paso, con objetivos claros"
          triad (audit §5).
        */}
        <SectionHeading
          title="Esto es lo que vas a lograr"
          subtitle="En 6 meses, paso a paso, con objetivos claros en cada etapa."
        />

        <ol className="reveal divide-y divide-line">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex gap-4 py-5">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-dark-mid font-serif text-[19px] font-bold text-accent-soft">
                {i + 1}
              </span>
              <p className="t-body pt-[5px] text-pretty text-body">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
