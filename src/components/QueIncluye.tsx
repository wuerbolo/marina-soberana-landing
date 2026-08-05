const ITEMS = [
  {
    title: "Clases grabadas",
    body: "Contenido grabado que apoya cada práctica en directo, estructurado paso a paso para que lo integres de forma fácil y sencilla, a tu ritmo.",
  },
  {
    title: "Prácticas en directo",
    body: "Clases quincenales en directo conmigo durante los 6 meses, para solucionar dudas, ver casos reales, practicar, avanzar e integrar.",
  },
  {
    title: "Manuales descargables exclusivos",
    body: "Guías descargables para tener estructura, claridad y seguridad cuando trabajes con tus clientes. Sabrás específicamente qué hacer. No te vas a quedar en blanco.",
  },
  {
    title: "Audios descargables",
    body: "Limpiezas y sanaciones energéticas grabadas para acompañar tu proceso día a día, dentro y fuera de las clases.",
  },
  {
    title: "Acompañamiento individual y colectivo",
    body: "Esto es un máster de alto nivel de acompañamiento: en las prácticas colectivas, con tu propia tutora y conmigo. Hasta 16 alumnas acompañadas a la vez, con seguimiento individual semanal.",
  },
  {
    title: "Bonus del terapeuta",
    body: "Te enseñaré cómo combinar la terapia energética con la emocional para crear acompañamientos profundos y con resultados duraderos en tus clientes: heridas del alma, sistema familiar, autoestima, merecimiento, comunicación y límites.",
  },
  {
    title: "Plataforma con acceso individualizado",
    body: "Entras con tu propio acceso, ves tu progreso y tienes seguimiento individualizado de cómo avanzas en el máster.",
  },
  {
    title: "Diploma Soberana",
    body: "Al terminar el máster recibes tu diploma Soberana, que acredita que has completado la formación como terapeuta de Registros Akáshicos.",
  },
  {
    title: "Comunidad privada",
    body: "Espacio privado con el resto de alumnas para resolver dudas, compartir avances y sentirte acompañada entre clase y clase.",
  },
];

export default function QueIncluye() {
  return (
    <section className="bg-dark text-on-dark">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Qué incluye el máster Soberana
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-on-dark-muted">
          Todo lo que necesitas para convertirte en terapeuta de Registros Akáshicos y
          empezar a ayudar a personas en menos de 6 meses. Manuales, audios y prácticas
          exclusivos de esta formación: no los vas a encontrar en ningún otro curso.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-accent/25 p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-base font-semibold text-dark-raised">
                {i + 1}
              </span>
              <div>
                <p className="font-serif text-lg font-medium">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-on-dark-muted">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
