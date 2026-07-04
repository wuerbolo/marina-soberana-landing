const ITEMS = [
  {
    title: "Clases grabadas",
    body: "Contenido complementario a las prácticas que se desbloquea según avanzamos.",
  },
  {
    title: "Prácticas en directo",
    body: "Nos vemos cada 15 días para practicar y resolver tus dudas. Si no puedes venir, tendrás la grabación.",
  },
  {
    title: "La biblioteca",
    body: "Banco de audios semanal de limpiezas energéticas y sanaciones específicas para el día a día.",
  },
  {
    title: "Comunidad de Telegram",
    body: "Acompañamiento extra en grupo y recibir notificaciones de clases y prácticas nuevas.",
  },
  {
    title: "Seguimiento individual",
    body: "Hoja de ruta personalizada para tus objetivos y formularios para registrar tu evolución.",
  },
];

export default function ProgramStructure() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground">¿Cómo es Soberana?</p>
        <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">
          Un acompañamiento completo de 6 meses
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
              <p className="font-serif text-xl font-light">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted">
          * Después de terminar el proceso de 6 meses, conservarás el acceso a manuales y
          tablas de canalización para que puedas continuar tu trabajo de sanación contigo
          u otras personas.
        </p>
      </div>
    </section>
  );
}
