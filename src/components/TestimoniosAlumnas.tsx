import SectionHeading from "./SectionHeading";
import TestimoniosGrid, { type TestimonioScreenshot } from "./TestimoniosGrid";

// The WhatsApp screenshots Marina supplied. They carry no names, no avatars and
// no phone numbers, so shipping the image itself still honours "no names, no
// photos". Each `quote` is the verbatim transcription of what is legible in
// that screenshot and becomes its alt text.
//
// Curation (conversion audit §3.2): this first block now leads with the
// client-and-income quotes — the dream outcome the page sells — and the header
// names that outcome. The feeling-and-confidence quotes moved to the second
// block, where they support rather than open. Quotes mentioning
// "grupo"/"plazas" ship untrimmed: verbatim alumna quotes are exempt from that
// word ban — ADR-0001, update 2026-08-07.
const TESTIMONIALS: readonly TestimonioScreenshot[] = [
  {
    src: "testimonio-14.jpg",
    width: 813,
    height: 1054,
    quote:
      "Hola, guapa. Este proceso está siendo mucho más poderoso de lo que pensaba. Sabía que lo iba a ser, pero ¿tanto? Mi comunicación está cambiando y estoy viendo los frutos. Por ejemplo: he tenido más clientes este mes que en los 2 meses anteriores juntos que no había tenido nada. De tener la batalla perdida pensando que no iba a salir ahora a pensar que no tengo plazas. Estoy súper contenta, muchas gracias!!!",
  },
  {
    src: "testimonio-02.jpg",
    width: 878,
    height: 716,
    quote:
      "Hola Marina, te cuento que ya estoy haciendo sesiones a través de boca a boca cobradas y está siendo facilísimo. Me acuerdo tanto de tus clases y de todo lo que hemos trabajado... miro cuando empecé y alucino, no hace un año que terminamos. Está siendo un regalo. Gracias por todo, has sido la mejor profe!!!!",
  },
  {
    src: "testimonio-04.jpg",
    width: 824,
    height: 859,
    quote:
      "Marina me has dado tantas herramientas y tan prácticas que estoy encantada. He hecho muchas formaciones pero nada como esto. Estoy flipando con las prácticas que estoy haciendo y con los resultados de mis clientes. Cada día veo más cerca mi consulta.",
  },
  {
    src: "testimonio-13.jpg",
    width: 871,
    height: 974,
    quote:
      "Mi objetivo principal con Soberana era encontrar la conexión que sabía que tenía pero que no llegaba a desarrollar, no sabía cómo hacerlo. A día de hoy, he encontrado gran parte de esa conexión, cada vez voy a más, y me siento más segura. He sentido avances claros, cada vez voy más rápido canalizando, lo hago de forma más normal, conecto más rápido y sobre todo confío. Estoy muy contenta. Me ayuda mucho a crear mi negocio de terapias holísticas.",
  },
  {
    src: "testimonio-09.jpg",
    width: 869,
    height: 755,
    quote:
      "Wow! Marina, acabo de ver la 2ª clase y ha sido brutal... me ha ido súper bien por el momento en el que estoy de cambios, separación, inicio de mi consulta... siento una paz, una confianza en todo brutal... ahora tiene todo sentido... es como si se abriera el mundo. Ha sido espectacular! Gracias, gracias, gracias.",
  },
  {
    src: "testimonio-01.jpg",
    width: 888,
    height: 717,
    quote:
      "Hola Marina, ayer hice mi primera sesión con el método nuevo que planteamos y uffff una pasada!!! Mi clienta se quedó alucinada. Gracias gracias gracias, no sabes lo segura y a gusto que me siento haciendo las canalizaciones y meditaciones que me enseñaste. Has sido luz en mi vida. Siento tanta paz.",
  },
  {
    src: "testimonio-10.jpg",
    width: 875,
    height: 699,
    quote:
      "Buenos días! Yo flipé, Marina, de pensar que no sería capaz a de repente verme apuntando cosas... Es un tema de confiar en lo que te trae el cuerpo o lo que venga y recogerlo para indagar. Me encanta el proceso de preguntas, puedes testearlo todo y esto ayuda mucho a poder afinar, descartar, potenciar o lo que requiera.",
  },
];

export default function TestimoniosAlumnas() {
  return (
    <section className="px-[clamp(20px,5vw,40px)] py-[clamp(56px,10vw,96px)]">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          title="Alumnas que ya cobran por sus sesiones"
          subtitle="Consultas abiertas y clientes que llegan solos — contado por ellas."
        />

        <TestimoniosGrid items={TESTIMONIALS} />
      </div>
    </section>
  );
}
