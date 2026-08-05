const FASES = [
  {
    num: "1",
    hito: "A los 15 días",
    title: "Canalizas con un método que te da claridad y seguridad",
    body: "Aprendes a relajar tu sistema nervioso, a limpiar y expandir tu energía y a desbloquear las interferencias de tu canal para recibir mensajes con claridad, sin quedarte con energías negativas. Encontrarás el origen de tus heridas del alma y sabrás cómo liberar creencias limitantes, miedos y patrones de sabotaje. Ganarás seguridad, confianza y autoestima al abrir Registros Akáshicos.",
  },
  {
    num: "2",
    hito: "A los 3 meses",
    title:
      "Practicas con otras personas para dar mensajes de evolución, sanación y manifestación",
    body: "Descubre qué es el alma: tu propósito, los pactos prenatales que has hecho con tu grupo de almas, cómo recorrer vidas pasadas para traer al presente dones y sanar traumas, creencias y patrones del sistema familiar. Aprende a canalizar para otras personas, lugares y negocios y conoce a tu equipo de guías. Sentirás paz, ligereza y plenitud.",
  },
  {
    num: "3",
    hito: "A los 6 meses",
    title: "Aceleras tus manifestaciones y te conviertes en terapeuta con visión completa",
    body: "Entiendes cómo funciona tu sistema energético y aprendes a localizar bloqueos físicos, mentales, energéticos o emocionales y eliminarlos. Practicas técnicas de manifestación para atraer dinero, relaciones sanas y los cambios reales que buscas. Aprendes a proteger tu energía para no drenarte en tu día a día y terminas el máster lista para acompañar a otras personas con tu propio método.",
  },
];

export default function Recorrido() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Tu recorrido durante el máster
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          Hitos reales de evolución, mes a mes, para pasar de tener curiosidad por los
          Registros Akáshicos a convertirte en terapeuta.
        </p>

        <div className="relative mt-14 space-y-12">
          <div
            aria-hidden
            className="absolute bottom-2 left-7 top-2 w-px bg-gradient-to-b from-accent to-dark-raised opacity-40"
          />
          {FASES.map((fase) => (
            <div key={fase.num} className="relative flex gap-6 pl-0">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dark-raised text-center font-serif text-sm font-semibold leading-tight text-accent shadow-card">
                Fase
                <br />
                {fase.num}
              </span>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {fase.hito}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-light">{fase.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{fase.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
