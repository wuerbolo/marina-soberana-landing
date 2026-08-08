import Image from "next/image";

/**
 * One WhatsApp screenshot Marina supplied, plus the transcription that becomes
 * its alt text. Screenshots are the testimonial (that's what reads as real);
 * the transcription is what a screen reader — or a visitor whose images fail —
 * gets instead, so it must say everything the picture says.
 */
export type TestimonioScreenshot = {
  /** File under public/images/testimonios (source: soberana-landing-concept-from-marina). */
  src: string;
  /** Intrinsic size, so the grid reserves the right space before the image loads. */
  width: number;
  height: number;
  /** Verbatim transcription of every message visible in the screenshot. */
  quote: string;
};

/**
 * Masonry of testimonial screenshots — the layout Marina's concept uses:
 * uneven bubble heights flow into columns instead of being boxed to a grid.
 */
export default function TestimoniosGrid({
  items,
}: {
  items: readonly TestimonioScreenshot[];
}) {
  return (
    // `columns: 260px 3` rather than stepped column counts: the browser fits as
    // many 260px-wide columns as there is room for, up to three, so the layout
    // reflows continuously instead of jumping at two breakpoints.
    <div className="[columns:260px_3] gap-3.5">
      {items.map((t) => (
        <Image
          key={t.src}
          src={`/images/testimonios/${t.src}`}
          alt={`Testimonio de una alumna de Soberana: “${t.quote}”`}
          width={t.width}
          height={t.height}
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="mb-3.5 block w-full break-inside-avoid rounded-xl shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-card-lift"
        />
      ))}
    </div>
  );
}
