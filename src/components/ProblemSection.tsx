const EMPATHY = [
  "Si sabes lo que tienes que hacer, pero el miedo te paraliza. Sientes que cargas con algo que no es tuyo y no sabes cómo soltarlo. Te ves perdida, frustrada, saboteándote y sin avanzar.",
  "Si has hecho terapia, constelaciones, cursos… y te sigues sintiendo insuficiente, no merecedora de dinero, de amor sano y de una vida tranquila y plena.",
  "Si das, das, das y cuando llega algo bueno para ti piensas «no me lo merezco, no puedo pedir tanto» y te sientes culpable.",
];

const PARA_TI = [
  "Romper patrones heredados y lealtades familiares.",
  "Conocer tus patrones, miedos, vidas pasadas y creencias.",
  "Tener claridad para tomar decisiones coherentes y exitosas.",
  "Recuperar tu merecimiento, confianza y autoestima.",
  "Aprender a manifestar amor, paz y dinero, sin culpa.",
];

export default function ProblemSection() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="space-y-5">
          {EMPATHY.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-10 font-serif text-3xl font-light">Soberana es para ti.</p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Soberana es un proceso de evolución, sanación y manifestación práctico con
          Registros Akáshicos para:
        </p>

        <ul className="mt-8 space-y-3">
          {PARA_TI.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base leading-relaxed text-muted">
          Aprenderás a canalizar tus Registros Akáshicos para entender lo que te limita,
          sanarlo y liberarlo. Tendrás herramientas prácticas para pasar de la angustia y
          el control a la paz y la ligereza.
        </p>
      </div>
    </section>
  );
}
