import SectionHeading from "./SectionHeading";

const FASES = [
  {
    num: "1",
    hito: "A los 15 días",
    title: "Canalizas con claridad sin sentir que te lo inventas",
    objetivos: [
      "Sabes relajar tu cuerpo y sentirte a salvo para abrir tu canal.",
      "Formulas preguntas evolutivas y tienes un método propio para verificar lo que recibes.",
      "Proteges tu energía antes de cada sesión.",
      "Identificas y empiezas a liberar los bloqueos inconscientes (miedos, patrones, heridas del alma) que te alejan de tus objetivos.",
    ],
  },
  {
    num: "2",
    hito: "A los 3 meses",
    title: "Tienes estructura y seguridad para trabajar con personas",
    objetivos: [
      "Canalizas para otras personas con información evolutiva y sanación energética.",
      "Trabajas casos reales: autoestima, relaciones, rupturas, ansiedad, manifestaciones.",
      "Sabes cómo canalizar mensajes de seres de luz, energías de casas y negocios.",
      "Accedes a vidas pasadas para sanar traumas y heridas del alma.",
    ],
  },
  {
    num: "3",
    hito: "A los 6 meses",
    title: "Eres experta en crear evolución, sanación y manifestación en tus clientes",
    objetivos: [
      "Localizas y liberas bloqueos energéticos para acelerar tus manifestaciones.",
      "Trabajas con líneas de tiempo para programar experiencias expansivas.",
      "Proteges tu energía en el día a día para no drenarte.",
      "Sabes cómo acompañar a otras personas con estructura, seguridad y claridad en tu método propio.",
    ],
  },
];

export default function Recorrido() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <SectionHeading
          title="Tu recorrido durante el máster"
          subtitle="Hitos reales de evolución, mes a mes, para pasar de ser lector de Registros Akáshicos a convertirte en terapeuta."
        />

        <div className="relative mt-14 space-y-12">
          <div
            aria-hidden
            className="absolute bottom-2 left-7 top-2 w-px bg-gradient-to-b from-accent to-dark-raised opacity-40"
          />
          {FASES.map((fase) => (
            <div key={fase.num} className="reveal relative flex gap-6 pl-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark-raised text-center font-serif text-sm font-semibold leading-tight text-accent-soft shadow-card-lift">
                Fase
                <br />
                {fase.num}
              </span>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {fase.hito}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{fase.title}</h3>
                <ul className="mt-3 space-y-2">
                  {fase.objetivos.map((objetivo) => (
                    <li
                      key={objetivo}
                      className="flex gap-2 text-base leading-relaxed text-muted"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
