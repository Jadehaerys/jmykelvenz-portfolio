import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { PHILOSOPHY } from "../../data/config";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--color-dark)" }}
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <SectionLabel light>How I work</SectionLabel>
            <h2
              id="philosophy-heading"
              className="mt-4 font-display font-bold text-3xl md:text-4xl text-bg leading-tight max-w-xl"
            >
              A few things I hold
              onto when building.
            </h2>
          </div>
        </FadeIn>

        {/* ── Principles ── */}
        <div className="space-y-0 divide-y"
          style={{ borderColor: "var(--color-dark-border)" }}
        >
          {PHILOSOPHY.map((principle, i) => (
            <FadeIn key={principle.number} delay={i * 0.08}>
              <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-12 py-8 group">
                {/* Number */}
                <span
                  className="font-display font-extrabold text-4xl md:text-5xl leading-none select-none"
                  style={{ color: "var(--color-dark-border)" }}
                  aria-hidden="true"
                >
                  {principle.number}
                </span>

                {/* Content */}
                <div className="space-y-2 md:space-y-3">
                  <h3 className="font-display font-bold text-lg md:text-xl text-bg leading-snug">
                    {principle.title}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--color-dark-muted)" }}
                  >
                    {principle.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
