const ITEMS = [
  {
    title:
      "Te colocas en la frecuencia de los Registros Akáshicos en 1 minuto, sin rituales ni saber meditar",
    enfoque:
      "No necesitas rituales ni saber meditar para colocarte en la frecuencia de los Registros Akáshicos y recibir mensajes con claridad. Lo que necesitas es saber relajar tu sistema nervioso para convertir tu cuerpo en un canal de información.",
    diferente:
      "La intención y la presencia son lo único que necesitas para canalizar mensajes de los Registros Akáshicos. Toda la parafernalia espiritual (rituales, meditaciones, limpiezas de 10 minutos...) es solo para tranquilizar la mente — en realidad no la necesitas.",
    no: "No te enseño desde la exigencia, el castigo ni el perfeccionismo de \"si no haces esta oración 3 veces no vas a canalizar\".",
  },
  {
    title: "Limpias, proteges y expandes tu energía en 5 minutos",
    enfoque:
      "Mantener limpio tu canal de comunicación es clave para recibir mensajes con claridad y no dudar de ti ni entrar en el bucle de \"me lo estoy inventando\".",
    diferente:
      "Te enseño distintas prácticas de limpieza energética para tu canal, tu campo energético y el espacio físico en el que trabajes. Solo necesitas 5 minutos y las puedes hacer en cualquier lugar, sin ni siquiera cerrar los ojos.",
    no: "No te voy a decir que las energías negativas no existen, ni tampoco \"no hagas limpieza energética por si te quedas con lo negativo de esa persona\".",
  },
  {
    title:
      "Usas los Registros Akáshicos de forma terapéutica: no eres una simple lectora de Registros Akáshicos",
    enfoque:
      "Si vas a ser terapeuta de Registros Akáshicos necesitas una visión completa y holística de lo que es una persona: sus miedos, creencias, traumas, vidas pasadas, heridas, sistema familiar y patrones.",
    diferente:
      "Te enseño a trabajar de forma energética, pero también emocional y práctica —aplicable al día a día— para que tu cliente tenga resultados y quiera seguir trabajando contigo.",
    no: "Trabajar exclusivamente desde lo energético. Tanto tú como alguien que vaya a trabajar contigo va a necesitar acompañamiento en el plano terrenal. Por ejemplo: podemos desbloquear el miedo a la soledad desde la energía, pero en el día a día también vas a tener que abordarlo con herramientas de autoestima y gestión emocional.",
  },
  {
    title:
      "Creas tu método de acompañamiento para que tus clientes tengan resultados duraderos, no hacemos sesiones sueltas que no aportan cambios a largo plazo",
    enfoque:
      "Un terapeuta trabaja con distintas herramientas emocionales y energéticas para ayudar a su cliente desde un punto de vista completo. Eso da un valor que un lector de Registros Akáshicos no tiene.",
    diferente:
      "Te enseño diferentes herramientas y prácticas emocionales-energéticas para que crees tu propio método de terapia y ofrezcas acompañamientos con resultados profundos y duraderos, en lugar de sesiones sueltas y sin seguimiento.",
    no: "No te enseño a hacer una sesión de Registros Akáshicos. Vas a crear un sistema de acompañamiento profundo con resultados reales y aplicables al día a día.",
  },
  {
    title:
      "Aplicas los Registros Akáshicos en toda su potencia: información, sanación y manifestación",
    enfoque:
      "La mayoría de canalizadores usan los Registros Akáshicos para obtener información superficial, pero luego no saben qué hacer con ella.",
    diferente:
      "Te enseño distintos métodos para aplicar sanaciones energéticas a tus clientes y procesos de manifestación: dar información importante para su conciencia, sanar y limpiar lo necesario (vidas pasadas, lealtades, traumas, creencias, energías negativas...) y acelerar manifestaciones emocionales y terrenales.",
    no: "No te enseño a recibir solo información de los Registros Akáshicos — eso es usarlos a la mitad de su potencia.",
  },
];

function Tag({ tone, children }: { tone: "panel" | "accent" | "muted"; children: string }) {
  const bg = { panel: "bg-panel", accent: "bg-accent/20", muted: "bg-foreground/10" }[tone];
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
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Mi enfoque
        </h2>

        <div className="mt-12 space-y-4">
          {ITEMS.map((item, i) => (
            <details
              key={item.title}
              className="group rounded-2xl border border-line bg-surface open:shadow-card"
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
