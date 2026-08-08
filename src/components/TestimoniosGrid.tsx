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
    <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {items.map((t) => (
        <Image
          key={t.src}
          src={`/images/testimonios/${t.src}`}
          alt={`Testimonio de una alumna de Soberana: “${t.quote}”`}
          width={t.width}
          height={t.height}
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="mb-5 w-full break-inside-avoid rounded-2xl shadow-card"
        />
      ))}
    </div>
  );
}
