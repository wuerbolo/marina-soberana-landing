// Transcribed from the WhatsApp screenshots Marina supplied (testimonios/testimonio-01,
// 02, 04, 06.jpg) — text only, no names or photos, per Marina.
const TESTIMONIALS = [
  {
    quote:
      "Hola Marina, ayer hice mi primera sesión con el método nuevo que planteamos y uffff una pasada!!! Mi clienta se quedó alucinada. Gracias gracias gracias, no sabes lo segura y a gusto que me siento haciendo las canalizaciones y meditaciones que me enseñaste. Has sido luz en mi vida. Siento tanta paz.",
  },
  {
    quote:
      "Hola Marina, te cuento que ya estoy haciendo sesiones a través de boca a boca cobradas y está siendo facilísimo. Me acuerdo tanto de tus clases y de todo lo que hemos trabajado... miro cuando empecé y alucino, no hace un año que terminamos. Está siendo un regalo. Gracias por todo, has sido la mejor profe!!!!",
  },
  {
    quote:
      "Marina me has dado tantas herramientas y tan prácticas que estoy encantada. He hecho muchas formaciones pero nada como esto. Estoy flipando con las prácticas que estoy haciendo y con los resultados de mis clientes. Cada día veo más cerca mi consulta.",
  },
  {
    quote:
      "Hola preciosa!!!!! La verdad es que yo estoy muy alucinada, me fascina tu acompañamiento y me siento super segura, despues de la clase 3 hay un antes y un después en mí, sin darme apenas cuenta me siento mas confiada y estoy más conectada conmigo y con la fuente. Gracias de verdad.",
  },
];

export default function TestimoniosAlumnas() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Lo que dicen las alumnas de Soberana
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          Mensajes reales de alumnas durante y después de la formación.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.quote} className="rounded-2xl bg-surface p-6 shadow-card">
              <blockquote className="font-serif text-lg font-light leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted">
                Alumna de Soberana
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
