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

/**
 * The three tags that label the halves of each answer. Each one is a fill and a
 * foreground chosen together (see globals.css) rather than a tint of the page's
 * gold: they have to be told apart at a glance while skimming, and three
 * strengths of the same hue cannot do that.
 */
function Tag({ tone, children }: { tone: "enfoque" | "diferente" | "no"; children: string }) {
  const colors = {
    enfoque: "bg-tag-enfoque-bg text-tag-enfoque-fg",
    diferente: "bg-tag-diferente-bg text-tag-diferente-fg",
    no: "bg-tag-no-bg text-tag-no-fg",
  }[tone];
  return (
    <span
      className={`t-label mb-2 inline-block rounded-full px-[11px] py-1 tracking-[0.14em] ${colors}`}
    >
      {children}
    </span>
  );
}

export default function Enfoque() {
  return (
    <section className="bg-surface px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[760px]">
        <SectionHeading
          title="Mi enfoque"
          subtitle="Un método construido en +2 años formando terapeutas, con más de 60 alumnas que ya lo han recorrido."
        />

        <div className="reveal flex flex-col gap-3">
          {ITEMS.map((item, i) => (
            <details
              key={item.title}
              className="overflow-hidden rounded-[14px] border border-panel-line bg-panel transition-colors hover:border-accent/40"
            >
              <summary className="relative flex cursor-pointer list-none items-start gap-3 py-5 pl-5 pr-[52px] marker:content-none">
                <span className="shrink-0 pt-1 text-[13px] font-semibold tracking-[0.08em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-card flex-1">{item.title}</span>
                <span
                  aria-hidden
                  className="om-plus absolute right-5 top-[22px] text-[22px] font-light leading-none text-accent"
                >
                  +
                </span>
              </summary>
              <div className="flex flex-col gap-4 px-5 pb-[22px]">
                <div>
                  <Tag tone="enfoque">Mi enfoque</Tag>
                  <p className="t-note text-pretty text-body-soft">{item.enfoque}</p>
                </div>
                <div>
                  <Tag tone="diferente">Qué hago diferente</Tag>
                  <p className="t-note text-pretty text-body-soft">{item.diferente}</p>
                </div>
                <div>
                  <Tag tone="no">Qué NO hago</Tag>
                  <p className="t-note text-pretty text-body-soft">{item.no}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
