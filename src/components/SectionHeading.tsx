/**
 * The heading block every section on the page opens with: a serif title and an
 * optional line of subtitle underneath.
 *
 * It owns the gap down to the section's content as well as the gap between its
 * own two lines, so section rhythm is one edit here rather than a `mt-*` at
 * every call site — which is what had already drifted apart once.
 *
 * The short gold rule that used to sit above the title is gone: Marina's
 * reference opens every section with the title alone, and against 300-weight
 * copy the rule was the loudest mark on the page.
 */
export default function SectionHeading({
  title,
  subtitle,
  tone = "light",
}: {
  title: string;
  /** Optional supporting line. Kept short — it is a subtitle, not a paragraph. */
  subtitle?: string;
  /** `dark` picks the on-dark text colours for the deep purple sections. */
  tone?: "light" | "dark";
}) {
  return (
    <div className="reveal mb-[clamp(26px,5vw,42px)] text-center">
      {/*
        A single small star above the title — quieter than the gold rule the
        reference pass removed, and the same glyph the page already uses as its
        list bullet, so sections open with the page's own mark rather than a
        generic ornament.
      */}
      <span aria-hidden className="mb-2.5 block text-[13px] leading-none text-accent">
        ✦
      </span>
      <h2 className={`h-section text-balance ${tone === "dark" ? "text-on-dark" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`t-sub mx-auto mt-3 max-w-[520px] text-pretty ${
            tone === "dark" ? "text-on-dark-muted" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
