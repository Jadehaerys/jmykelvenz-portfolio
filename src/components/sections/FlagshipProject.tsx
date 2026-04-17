import { Link } from "react-router-dom";
import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { MockupFrame } from "../ui/MockupFrame";
import { Button } from "../ui/Button";
import { TUON } from "../../data/config";

export function FlagshipProject() {
  return (
    <section
      id="project"
      className="bg-bg py-24 md:py-32 overflow-hidden"
      aria-labelledby="project-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Section header ── */}
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <SectionLabel>Flagship Project</SectionLabel>
            <h2
              id="project-heading"
              className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text leading-tight max-w-2xl"
            >
              The product I'm
              <br />
              building right now.
            </h2>
          </div>
        </FadeIn>

        {/* ── Main card ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — mockup */}
          <FadeIn direction="left" delay={0.1}>
            <MockupFrame />
          </FadeIn>

          {/* Right — product detail */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-8">

              {/* Name + status */}
              <div className="flex items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold"
                      style={{
                        background: "var(--color-accent-dim)",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(42,107,87,0.2)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                      {TUON.status}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-4xl md:text-5xl text-text tracking-tight">
                    {TUON.name}
                  </h3>
                  <p className="font-body text-lg text-muted mt-1">
                    {TUON.tagline}
                  </p>
                </div>
              </div>

              {/* Problem + Solution */}
              <div className="space-y-4">
                <div>
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-1.5">
                    The Problem
                  </p>
                  <p className="font-body text-base text-text leading-relaxed">
                    {TUON.problem}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-1.5">
                    The Solution
                  </p>
                  <p className="font-body text-base text-text leading-relaxed">
                    {TUON.solution}
                  </p>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-3">
                  Works with
                </p>
                <div className="flex flex-wrap gap-2">
                  {TUON.inputs.map((input) => (
                    <span
                      key={input}
                      className="px-4 py-2 rounded-full text-sm font-body font-medium border border-border bg-surface text-text"
                    >
                      {input}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-3">
                  Built with
                </p>
                <div className="flex flex-wrap gap-2">
                  {TUON.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md text-xs font-body font-semibold bg-surface-card border border-border text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  as="a"
                  href={TUON.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Visit Tuon ↗
                </Button>
                <Link
                  to="/projects/tuon"
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold tracking-tight rounded-full transition-all duration-200 text-base px-6 py-3 bg-transparent border border-border text-text hover:bg-surface-card active:scale-[0.98]"
                >
                  Read case study
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Credibility signals ── */}
        <FadeIn delay={0.25}>
          <div className="mt-20 pt-10 border-t border-border">
            <p className="font-body text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-6">
              Real product signals
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
              {TUON.credibility.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: "var(--color-accent-dim)",
                      color: "var(--color-accent)",
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="font-body text-sm text-text leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
