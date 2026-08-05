const ITEMS = [
  <>
    Vas a saber colocarte en la frecuencia de los Registros Akáshicos en{" "}
    <strong className="font-medium text-foreground">1 minuto</strong> para recibir
    mensajes con claridad, sin rituales ni saber meditar.
  </>,
  <>
    Tendrás herramientas prácticas para limpiar tu canal, proteger y expandir tu energía
    en <strong className="font-medium text-foreground">5 minutos</strong>, para no sentir
    cansancio al trabajar con otras personas ni quedarte con energías negativas.
  </>,
  <>
    <strong className="font-medium text-foreground">
      Vas a utilizar los Registros Akáshicos de forma terapéutica y profunda:
    </strong>{" "}
    no serás una simple lectora de Registros Akáshicos, tendrás la visión completa de lo
    que la persona necesita trabajar a nivel energético y emocional: autoestima,
    merecimiento, confianza, ansiedad, relaciones / vínculos familiares, economía...
  </>,
  <>
    <strong className="font-medium text-foreground">
      Aprenderás a manejar otras terapias energéticas y emocionales para crear tu propio
      método
    </strong>{" "}
    y que las personas que trabajen contigo tengan resultados reales y duraderos en el
    tiempo. Creamos procesos de acompañamiento, no hacemos sesiones sueltas que no valen
    para nada.
  </>,
  <>
    Sabrás{" "}
    <strong className="font-medium text-foreground">
      aplicar los Registros Akáshicos en toda su potencia:
    </strong>{" "}
    recibes la información para ampliar tu conciencia y al de tu cliente, sabes cómo
    hacer sanaciones energéticas para desprogramar traumas y creencias y sabes qué
    desbloquear en tu campo energético para acelerar manifestaciones.
  </>,
];

export default function Logros() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Esto es lo que vas a lograr
        </h2>

        <ol className="mt-12 divide-y divide-line">
          {ITEMS.map((item, i) => (
            <li key={i} className="flex gap-5 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark-raised font-serif text-lg font-semibold text-accent">
                {i + 1}
              </span>
              <p className="pt-1.5 text-base leading-relaxed text-foreground/90">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
