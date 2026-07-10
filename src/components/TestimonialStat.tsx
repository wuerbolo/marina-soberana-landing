import TestimonialQuote from "./TestimonialQuote";

// Real alumni quotes (text only — no names or photos, per Marina).
const TESTIMONIALS: { quote: string; name?: string }[] = [
  {
    quote:
      "No me creo que ya hayamos terminado la formación, se me ha pasado volando, ¡ojalá más y más! La clase de conocer mis dones del alma me encantó. Me cuadra todo y me ha ayudado a confiar en mí y creer que soy capaz… mi tema siempre ha sido la falta de autoestima y veo que estoy mejorando.",
    name: "Alumna de Soberana",
  },
  {
    quote:
      "Empecé esta formación porque me sentía consumida, agotada, frustrada y que todo se me hacía cuesta arriba… Quería aprender a encontrar bloqueos y liberarlos, protegerme y sanar algunas creencias. He sentido muy conectada conmigo, he crecido y me siento más cuidada que nunca. Mil gracias.",
    name: "Alumna de Soberana",
  },
  {
    quote:
      "Woooow… ¡flipante! Increíble cómo he podido darle sentido a los bloqueos que siempre han estado conmigo y descubrir su origen para aprender por mí misma a liberarlos. Muy enriquecedor. Ha sido un cambio en mí desde la primera clase. Gracias, gracias, gracias, Marina.",
    name: "Alumna de Soberana",
  },
  {
    quote:
      "Esta formación ha sido mucho más práctica de lo que pensaba. Lo que más me gustó fue la clase de conectar con los guías y aprender a hacerme sanaciones para desbloquear creencias y miedos que me impedían tener más dinero. He conseguido cambiar de trabajo y tener mi propia casa. Todavía estoy alucinando.",
    name: "Alumna de Soberana",
  },
];

export default function TestimonialStat() {
  return (
    <section className="bg-dark text-on-dark">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="font-serif text-6xl font-light tracking-tight text-accent md:text-7xl">
          +60
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted">
          mujeres han vivido transformaciones espectaculares que cambiaron su vida
          personal, familiar y profesional.
        </p>

        {TESTIMONIALS.length > 0 && (
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <TestimonialQuote key={t.quote} quote={t.quote} name={t.name} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
