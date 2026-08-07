// Transcribed from the WhatsApp screenshots Marina supplied (testimonios/testimonio-01,
// 02, 03, 04, 07, 08, 10, 11.jpg — soberana-webv3 revision, which re-curated this block)
// — text only, no names or photos, per Marina.
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
      "Buenos días, acabo de hacer la clase bonus de desbloqueo de dones y ha sido brutal el último ejercicio. Ahora he salido fuera, que vivo en el campo y siento los colores mucho más intensos de la naturaleza, los sonidos de los animales más afinados y una inmensa paz. Me siento distinta. Muchas gracias Marina.",
  },
  {
    quote:
      "Marina me has dado tantas herramientas y tan prácticas que estoy encantada. He hecho muchas formaciones pero nada como esto. Estoy flipando con las prácticas que estoy haciendo y con los resultados de mis clientes. Cada día veo más cerca mi consulta.",
  },
  {
    quote:
      "Por otro lado la ayuda incondicional de Marina es una de las claves del curso, su energía, su luz, su feedback de cualquier duda, su practicidad... hace que todo sea mucho más fácil. Los Registros Akáshicos, un imprescindible en mi vida a partir de ahora!",
  },
  {
    quote:
      "Buenos días! Yo flipé, Marina, de pensar que no sería capaz a de repente verme apuntando cosas... Es un tema de confiar en lo que te trae el cuerpo o lo que venga y recogerlo para indagar. Me encanta el proceso de preguntas, puedes testearlo todo y esto ayuda mucho a poder afinar, descartar, potenciar o lo que requiera.",
  },
  {
    quote:
      "Hola Marina!!! Me cuesta poner en palabras todo lo que este curso significa para mí. Más que un curso, ha sido una experiencia transformadora. Me ha permitido confiar más en mí, desbloquear aspectos que ni siquiera sabía que estaban ahí y llevarme una herramienta para toda la vida. Saber que puedo acudir a los Registros para comprender, sanar y avanzar me aporta una gran sensación de paz y bienestar.",
  },
  {
    quote:
      "A mí me ha gustado mucho, porque todo esto de limpieza me encanta y hay cosas que no sabía que hemos aprendido. Gracias, Marina, muy productiva.",
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
