// Transcribed from the WhatsApp screenshots Marina supplied (testimonios/testimonio-10,
// 11, 13, 15, 17, 18.jpg — soberana-webv2 revision) — text only, no names or photos,
// per Marina. testimonio-12 and testimonio-14 are skipped: their wording ("con el
// grupo", "no tengo plazas") echoes cohort/scarcity language the copy avoids elsewhere.
const TESTIMONIALS = [
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
      "Mi objetivo principal con Soberana era encontrar la conexión que sabía que tenía pero que no llegaba a desarrollar, no sabía cómo hacerlo. A día de hoy, he encontrado gran parte de esa conexión, cada vez voy a más, y me siento más segura. He sentido avances claros, cada vez voy más rápido canalizando, lo hago de forma más normal, conecto más rápido y sobre todo confío. Estoy muy contenta. Me ayuda mucho a crear mi negocio de terapias holísticas.",
  },
  {
    quote:
      "Recomiendo Soberana al 100%. Es una formación súper práctica que te ayuda a tu día a día, a entender tu entorno familiar, laboral... A darle una vuelta a la vida y verla desde otra perspectiva diferente que no habías visto hasta ahora, con una frecuencia superior. Gracias Marina por la forma tan intensa y amorosa de explicar las cosas, por estar siempre ahí resolviendo dudas en cualquier momento.",
  },
  {
    quote:
      "Nunca pensé que podría descubrir tanto de mí. Me ha ayudado a entender bloqueos, creencias o miedos que tenía y me estaban limitando sobre todo en tema laboral, autoestima y vínculos. Cada día he ido sintiendo más confianza en mí misma, en mi conexión con la vida y mi intuición. Hoy vivo en paz, con más calma y en el presente. Gracias Marina por cruzarte en mi camino :)",
  },
  {
    quote:
      "Si he notado cambios con Soberana. A nivel laboral he hecho un cambio con mi jefe. Hasta hace poco me hacía pequeña delante de él, me sentaba fatal la manera déspota en la que me hablaba y en general me molestaba su presencia. Ahora miro la situación de forma muy diferente: le pongo límites y comunico, no me encojo.",
  },
];

export default function TestimoniosAlumnas2() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
          Más historias de transformación
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted">
          Alumnas que ya están aplicando lo aprendido en Soberana.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.quote} className="rounded-2xl bg-panel p-6 shadow-card">
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
