import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    title:
      "Usas los Registros Akáshicos como herramienta terapéutica real: no eres una simple lectora de Registros Akáshicos",
    enfoque:
      "Para ser terapeuta de Registros Akáshicos necesitas una visión completa y holística de la persona: sus miedos, creencias, traumas, vidas pasadas, heridas, sistema familiar y patrones. Sin esa mirada profesional, la información que canalizas se queda en la superficie.",
    diferente:
      "Te formo para trabajar de forma energética, emocional y práctica —aplicable al día a día—, con el mismo criterio con el que he acompañado a más de 900 personas en terapia individual. Así tu cliente obtiene resultados y quiere seguir trabajando contigo.",
    no: "Trabajar exclusivamente desde lo energético. Ni tú ni quien trabaje contigo os vais a conformar con eso: todo proceso necesita acompañamiento en el plano terrenal. Por ejemplo: podemos desbloquear el miedo a la soledad desde la energía, pero en el día a día también hay que abordarlo con herramientas de autoestima y gestión emocional.",
  },
  {
    title:
      "Creas tu propio método de acompañamiento para que tus clientes tengan resultados duraderos, no hacemos sesiones sueltas que no aportan cambios a largo plazo",
    enfoque:
      "Una terapeuta con criterio trabaja con distintas herramientas emocionales y energéticas para acompañar a su cliente desde una visión completa. Esa es la diferencia entre una lectora de Registros Akáshicos y una terapeuta formada.",
    diferente:
      "Te formo con herramientas y prácticas emocionales-energéticas con estructura y respaldo profesional, para que construyas tu propio método y ofrezcas acompañamientos con resultados profundos y duraderos, en lugar de sesiones sueltas a 60€ sin seguimiento.",
    no: "No te enseño a hacer una sesión de Registros Akáshicos. Te formo para crear un sistema de acompañamiento profesional, con resultados reales y aplicables al día a día.",
  },
  {
    title:
      "Aplicas los Registros Akáshicos en toda su potencia: información, sanación y manifestación",
    enfoque:
      "La mayoría de canalizadores usan los Registros Akáshicos solo para obtener información superficial, pero no saben qué hacer con ella ni cómo convertirla en un proceso terapéutico real.",
    diferente:
      "Te formo con el mismo rigor que aplico en mis propias sesiones: dar información relevante para la conciencia de tu cliente, sanar y liberar lo necesario (vidas pasadas, lealtades, traumas, creencias, energías negativas...) y acelerar manifestaciones emocionales y terrenales.",
    no: "No te formo para quedarte solo con la información de los Registros Akáshicos — eso es usarlos a la mitad de su potencia real.",
  },
  {
    title:
      "Te colocas en la frecuencia de los Registros Akáshicos en 1 minuto y con precisión, sin rituales ni saber meditar",
    enfoque:
      "No necesitas rituales ni saber meditar para colocarte en la frecuencia de los Registros Akáshicos y recibir mensajes con claridad. Necesitas un método probado para relajar tu sistema nervioso y convertir tu cuerpo en un canal de información fiable.",
    diferente:
      "Te doy el mismo protocolo que uso yo con mis alumnas: la intención y la presencia son lo único necesario para canalizar con precisión. Toda la parafernalia espiritual (rituales, meditaciones, limpiezas de 10 minutos...) sirve para tranquilizar la mente, pero no es lo que te hace canalizar mejor.",
    no: "No te enseño desde la exigencia, el castigo ni el perfeccionismo de \"si no haces esta oración 3 veces no vas a canalizar\".",
  },
  {
    title: "Limpias, proteges y expandes tu energía en 5 minutos, con un protocolo propio",
    enfoque:
      "Mantener limpio tu canal de canalización es clave para recibir mensajes con claridad y no dudar de ti ni entrar en el bucle de \"me lo estoy inventando\". Es lo primero que trabajo con cada alumna.",
    diferente:
      "Te doy un protocolo de limpieza energética para tu canal, tu campo energético y el espacio en el que trabajes, contrastado con más de 60 alumnas. Solo necesitas 5 minutos y lo puedes hacer en cualquier lugar, sin ni siquiera cerrar los ojos.",
    no: "No te voy a decir que las energías negativas no existen, ni tampoco \"no hagas limpieza energética por si te quedas con lo negativo de esa persona\".",
  },
];

function Tag({ tone, children }: { tone: "panel" | "accent" | "muted"; children: string }) {
  // On the warm-cream section the old `bg-panel` tag was invisible against its
  // own background, so the neutral tag now carries a line instead of a fill.
  const bg = {
    panel: "border border-line bg-background",
    accent: "bg-accent/25",
    muted: "bg-foreground/10",
  }[tone];
  return (
    <span
      className={`inline-block rounded-full ${bg} px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground`}
    >
      {children}
    </span>
  );
}

export default function Enfoque() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <SectionHeading
          title="Mi enfoque"
          subtitle="Un método construido en +2 años formando terapeutas, con más de 60 alumnas que ya lo han recorrido."
        />

        <div className="reveal mt-12 space-y-4">
          {ITEMS.map((item, i) => (
            <details
              key={item.title}
              className="group rounded-2xl border border-line bg-surface transition-shadow hover:border-accent/40 open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 font-serif text-lg font-medium marker:content-none">
                <span className="shrink-0 text-sm font-sans font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.title}</span>
                <span className="shrink-0 text-xl font-sans font-light text-accent group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-xl font-sans font-light text-accent group-open:inline">
                  −
                </span>
              </summary>
              <div className="space-y-4 px-6 pb-6">
                <div>
                  <Tag tone="panel">Mi enfoque</Tag>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.enfoque}</p>
                </div>
                <div>
                  <Tag tone="accent">Qué hago diferente</Tag>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.diferente}</p>
                </div>
                <div>
                  <Tag tone="muted">Qué NO hago</Tag>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.no}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
