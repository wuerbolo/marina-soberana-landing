import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="bg-surface px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto flex max-w-[860px] flex-wrap items-center gap-[clamp(28px,5vw,52px)]">
        {/*
          The arched frame is Marina's own shape — square shoulders, a deep
          sweep at the foot. `flex-1 1 220px` rather than a fixed width so the
          portrait centres itself on a phone and sits beside the text above it.
        */}
        <div className="reveal mx-auto w-full max-w-[280px] flex-[1_1_220px]">
          {/*
            The arch echoed once behind the portrait: a hairline gold copy of
            the frame, offset down-right so it peeks past the photo's edge.
            One line of ornament that repeats the page's signature shape
            instead of introducing a new one.
          */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-lg rounded-b-[120px] border border-accent/45"
            />
            <Image
              src="/images/marina.jpg"
              alt="Marina, maestra de Registros Akáshicos"
              width={480}
              height={853}
              className="relative block aspect-[4/5] w-full rounded-t-lg rounded-b-[120px] object-cover object-[50%_22%] shadow-card-lift"
            />
          </div>
        </div>
        <div className="reveal min-w-0 flex-[1_1_300px] text-center md:text-left">
          <h2 className="h-aside">Hola, ¡soy Marina!</h2>
          <div className="mt-3.5 flex flex-col gap-3.5">
            <p className="t-body text-pretty text-body">
              Maestra de Registros Akáshicos, terapeuta sistémica especialista en
              relaciones, autoestima y dinero, y amante de los cambios y la
              manifestación.
            </p>
            <p className="t-body text-pretty text-body">
              Desde 2021 he observado por qué las terapias energéticas no tienen
              resultados a largo plazo: les falta el componente terrenal. ¿Cómo digo lo
              que siento? ¿Cómo pongo límites? ¿Cómo creo relaciones sanas? ¿Cómo me
              siento merecedora?
            </p>
            <p className="t-body text-pretty text-body">
              Voy a enseñarte a aplicar de forma práctica herramientas emocionales y
              energéticas para que ayudes en profundidad a tus clientes: que logren sus
              resultados y noten transformación desde el día 1, sin perder más tiempo ni
              dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
