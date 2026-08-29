import { Link, Navigate, useParams } from "react-router-dom";
import { FadeIn }       from "../components/ui/FadeIn";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button }       from "../components/ui/Button";
import { WireframeField } from "../components/three/WireframeField";
import { SITE }          from "../data/config";
import { getCaseStudy }  from "../data/caseStudies";

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const accentVar = study.theme === "warm" ? "var(--color-warm)" : "var(--color-accent)";
  const accentDimVar = study.theme === "warm" ? "var(--color-warm-dim)" : "var(--color-accent-dim)";
  const accentBorder = study.theme === "warm" ? "rgba(192,90,42,0.2)" : "rgba(42,107,87,0.2)";

  return (
    <main id="main-content" className="bg-bg min-h-screen">

      {/* ── Back link ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pt-28 pb-0">
        <Link
          to="/#other-projects"
          className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-text transition-colors duration-200"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="relative max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20 overflow-hidden">
        <WireframeField className="opacity-40 mix-blend-multiply" />
        <div className="relative z-10">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <SectionLabel>Case Study</SectionLabel>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold"
                  style={{
                    background: accentDimVar,
                    color: accentVar,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: accentVar }}
                    aria-hidden="true"
                  />
                  {study.status}
                </span>
              </div>

              <h1 className="font-display font-extrabold text-5xl md:text-6xl text-text leading-tight tracking-tight">
                {study.title}
              </h1>

              <p className="font-body text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
                {study.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-body text-sm text-muted">
                <span><strong className="text-text font-semibold">Role:</strong> {study.role}</span>
                <span><strong className="text-text font-semibold">Timeline:</strong> {study.period}</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  as="a"
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={study.theme === "warm" ? "secondary" : "primary"}
                  size="md"
                >
                  Visit {study.title} ↗
                </Button>
                <Button
                  as="a"
                  href={`mailto:${SITE.contact.email}`}
                  variant="ghost"
                  size="md"
                >
                  Ask a question
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Highlight chips ── */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pb-16 md:pb-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {study.highlights.map((h) => (
              <span
                key={h}
                className="px-4 py-2 rounded-full text-sm font-body font-medium border border-border bg-surface text-text"
              >
                {h}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── The Problem ── */}
      <section
        className="py-20 md:py-24 border-t border-border"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="problem-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <FadeIn direction="none">
              <h2 id="problem-heading" className="font-display font-bold text-xl text-text">
                The Problem
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base md:text-lg text-text leading-relaxed">
                {study.problem}
              </p>
              <p className="mt-4 font-body text-base text-muted leading-relaxed">
                {study.problemExtra}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="py-20 md:py-24 border-t border-border bg-bg" aria-labelledby="solution-heading">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <FadeIn direction="none">
              <h2 id="solution-heading" className="font-display font-bold text-xl text-text">
                The Solution
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base md:text-lg text-text leading-relaxed">
                {study.solution}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        className="py-20 md:py-24 border-t border-border"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="features-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 id="features-heading" className="font-display font-bold text-2xl md:text-3xl text-text mb-12">
              What it does
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {study.features.map((feature, i) => (
              <FadeIn key={feature.label} delay={i * 0.06}>
                <div className="p-6 rounded-2xl bg-bg border border-border space-y-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-body font-bold"
                    style={{ background: accentDimVar, color: accentVar }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-base text-text">{feature.label}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it's built ── */}
      <section className="py-20 md:py-24 border-t border-border bg-bg" aria-labelledby="stack-heading">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <FadeIn direction="none">
              <h2 id="stack-heading" className="font-display font-bold text-xl text-text">
                How it's built
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base text-text leading-relaxed mb-8">
                {study.stackIntro}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {study.stack.map((tech) => (
                  <div key={tech} className="px-4 py-3 rounded-xl bg-surface border border-border">
                    <span className="font-body text-sm font-semibold text-text">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4 text-muted font-body text-sm leading-relaxed">
                {study.stackNotes.map((note) => (
                  <p key={note.label}>
                    <strong className="text-text">{note.label}:</strong> {note.text}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── What makes it real ── */}
      <section
        className="py-20 md:py-24 border-t border-border"
        style={{ background: "var(--color-dark)" }}
        aria-labelledby="credibility-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 id="credibility-heading" className="font-display font-bold text-2xl md:text-3xl text-bg mb-4">
              What makes it real
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "var(--color-dark-muted)" }}>
              {study.credibilityIntro}
            </p>
          </FadeIn>
          <ul className="space-y-4" role="list">
            {study.credibility.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <li
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "var(--color-dark-surface)", border: "1px solid var(--color-dark-border)" }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: study.theme === "warm" ? "rgba(192,90,42,0.2)" : "rgba(42,107,87,0.2)",
                      color: study.theme === "warm" ? "#E08A5D" : "#5ECBA8",
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="font-body text-sm text-bg leading-snug">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bg py-20 md:py-24 border-t border-border text-center">
        <div className="max-w-xl mx-auto px-6 md:px-8 space-y-6">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
              See {study.title} for yourself.
            </h2>
            <p className="font-body text-base text-muted leading-relaxed">
              The best way to understand a real product is to actually use it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button
                as="a"
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                variant={study.theme === "warm" ? "secondary" : "primary"}
                size="lg"
              >
                Visit {study.title} ↗
              </Button>
              <Link
                to="/#other-projects"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold tracking-tight rounded-full transition-all duration-200 text-base px-8 py-4 bg-transparent border border-border text-text hover:bg-surface-card active:scale-[0.98]"
              >
                Back to portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
