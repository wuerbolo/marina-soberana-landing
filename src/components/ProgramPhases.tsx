const PHASES = [
  {
    tag: "Fase 1",
    title: "Canalización y desbloqueo",
    body: "Aprendes a recibir información potente para tu evolución de los Registros Akáshicos. Encontrarás el origen y sabrás cómo liberar creencias limitantes, miedos y patrones de sabotaje. Tendrás claridad y sabrás qué hacer para acercarte a tu vida más expansiva. Ganarás seguridad, confianza y autoestima.",
  },
  {
    tag: "Fase 2",
    title: "El viaje del alma",
    body: "Descubre qué es el alma: tu propósito, los pactos prenatales que has hecho con tu grupo de almas, cómo recorrer vidas pasadas para traer al presente dones y sanar traumas. Aprende a canalizar para otras personas, lugares y negocios y conoce a tu equipo de guías. Sentirás paz, ligereza y plenitud.",
  },
  {
    tag: "Fase 3",
    title: "Manifestación acelerada",
    body: "Entiendes cómo funciona tu sistema energético y aprendes a localizar bloqueos físicos, mentales, energéticos o emocionales y eliminarlos. Practicas decretos y técnicas de manifestación para atraer dinero, relaciones sanas y los cambios reales que buscas. Aprendes a proteger tu energía para no drenarte en tu día a día.",
  },
  {
    tag: "Bonus",
    title: "La biblioteca",
    body: "Una biblioteca en audio viva, con contenido nuevo cada semana: audios de sanación y limpieza energética para soltar miedos, creencias limitantes y bloqueos con el dinero, la autoestima y el merecimiento. Elige la temática que necesites en cada momento para recuperar ligereza, paz y claridad en 15 minutos.",
  },
];

export default function ProgramPhases() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground">Contenido práctico</p>
        <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">
          El recorrido
        </h2>

        <div className="mt-12 space-y-10">
          {PHASES.map((p) => (
            <div key={p.title} className="border-l-2 border-accent/30 pl-6">
              <p className="text-xs uppercase tracking-widest text-foreground">{p.tag}</p>
              <p className="mt-1 font-serif text-2xl font-light">{p.title}</p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
