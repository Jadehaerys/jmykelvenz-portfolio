import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { ABOUT, SITE } from "../../data/config";

export function About() {
  return (
    <section
      id="about"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Photo column ── */}
          <FadeIn direction="left">
            <div className="flex justify-center md:justify-start">
              {ABOUT.photo ? (
                <img
                  src={ABOUT.photo}
                  alt={`${SITE.shortName} — founder photo`}
                  className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border border-border shadow-lg"
                />
              ) : (
                /* Placeholder — replace ABOUT.photo in config.ts with your image path */
                <div
                  className="w-72 h-72 md:w-80 md:h-80 rounded-2xl border border-border bg-surface-card flex flex-col items-center justify-center gap-3 relative overflow-hidden"
                  role="img"
                  aria-label="Profile photo placeholder"
                >
                  {/* Background texture */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 40%, rgba(42,107,87,0.3) 0%, transparent 60%),
                        radial-gradient(circle at 70% 70%, rgba(192,90,42,0.2) 0%, transparent 60%)
                      `,
                    }}
                    aria-hidden="true"
                  />
                  {/* Monogram */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full border-2 border-border flex items-center justify-center"
                    style={{ background: "rgba(42,107,87,0.1)" }}
                  >
                    <span className="font-display font-bold text-3xl text-accent">
                      JV
                    </span>
                  </div>
                  <p className="relative z-10 font-body text-xs text-muted text-center px-6 leading-relaxed">
                    Profile photo
                    <br />
                    <span className="opacity-60">Set ABOUT.photo in config.ts</span>
                  </p>
                </div>
              )}
            </div>
          </FadeIn>

          {/* ── Text column ── */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <SectionLabel>About</SectionLabel>

              <h2
                id="about-heading"
                className="font-display font-bold text-3xl md:text-4xl text-text leading-tight"
              >
                Builder, thinker,
                <br />
                <span style={{ color: "var(--color-accent)" }}>operator.</span>
              </h2>

              <p className="font-body text-base md:text-lg text-text leading-relaxed">
                {ABOUT.short}
              </p>

              {ABOUT.extended.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {ABOUT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-bg text-xs font-body font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
