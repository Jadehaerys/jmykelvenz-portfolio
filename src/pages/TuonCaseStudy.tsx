import { Link } from "react-router-dom";
import { FadeIn }          from "../components/ui/FadeIn";
import { SectionLabel }    from "../components/ui/SectionLabel";
import { MockupFrame }     from "../components/ui/MockupFrame";
import { Button }          from "../components/ui/Button";
import { TUON, SITE }      from "../data/config";

export function TuonCaseStudy() {
  return (
    <main id="main-content" className="bg-bg min-h-screen">

      {/* ── Back link ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 pt-28 pb-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-text transition-colors duration-200"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <FadeIn>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <SectionLabel>Case Study</SectionLabel>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold"
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

            <h1 className="font-display font-extrabold text-5xl md:text-6xl text-text leading-tight tracking-tight">
              Tuon
            </h1>

            <p className="font-body text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
              {TUON.description}
            </p>

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
      </section>

      {/* ── Mockup ── */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
        <FadeIn delay={0.1}>
          <MockupFrame />
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
              <h2
                id="problem-heading"
                className="font-display font-bold text-xl text-text"
              >
                The Problem
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base md:text-lg text-text leading-relaxed">
                {TUON.problem}
              </p>
              <p className="mt-4 font-body text-base text-muted leading-relaxed">
                The traditional study loop (read, highlight, reread) is passive. Research consistently shows
                that active recall and spaced repetition are far more effective. But setting those up takes
                time most students don't have. Tuon removes that setup cost entirely.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section
        className="py-20 md:py-24 border-t border-border bg-bg"
        aria-labelledby="solution-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <FadeIn direction="none">
              <h2
                id="solution-heading"
                className="font-display font-bold text-xl text-text"
              >
                The Solution
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base md:text-lg text-text leading-relaxed">
                {TUON.solution}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {TUON.inputs.map((input) => (
                  <span
                    key={input}
                    className="px-4 py-2 rounded-full text-sm font-body font-medium border border-border bg-surface text-text"
                  >
                    {input}
                  </span>
                ))}
              </div>
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
            <h2
              id="features-heading"
              className="font-display font-bold text-2xl md:text-3xl text-text mb-12"
            >
              What Tuon does
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {TUON.features.map((feature, i) => (
              <FadeIn key={feature.label} delay={i * 0.06}>
                <div className="p-6 rounded-2xl bg-bg border border-border space-y-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-body font-bold"
                    style={{
                      background: "var(--color-accent-dim)",
                      color: "var(--color-accent)",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-base text-text">
                    {feature.label}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it was built ── */}
      <section
        className="py-20 md:py-24 border-t border-border bg-bg"
        aria-labelledby="stack-heading"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <FadeIn direction="none">
              <h2
                id="stack-heading"
                className="font-display font-bold text-xl text-text"
              >
                How it's built
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base text-text leading-relaxed mb-8">
                Tuon is a full-stack web application built with a small, deliberate set of tools chosen for
                reliability, developer experience, and long-term maintainability. Every dependency earns its place.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TUON.stack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-3 rounded-xl bg-surface border border-border"
                  >
                    <span className="font-body text-sm font-semibold text-text">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4 text-muted font-body text-sm leading-relaxed">
                <p>
                  <strong className="text-text">Frontend:</strong> React with Vite for a fast build pipeline and TypeScript for type safety throughout.
                </p>
                <p>
                  <strong className="text-text">Backend / Database:</strong> Supabase handles authentication, database, and storage. Reduces infrastructure overhead while keeping production reliability.
                </p>
                <p>
                  <strong className="text-text">AI:</strong> Groq's inference API powers flashcard and quiz generation. Supadata handles YouTube content extraction and processing.
                </p>
                <p>
                  <strong className="text-text">Email:</strong> Resend for transactional emails: account confirmations, password resets, and service communications.
                </p>
                <p>
                  <strong className="text-text">Payments:</strong> PayMongo for Philippine-native payment processing, covering subscription billing and credit top-ups.
                </p>
                <p>
                  <strong className="text-text">Deployment:</strong> Vercel for hosting, with environment-separated deployments and automatic preview builds.
                </p>
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
            <h2
              id="credibility-heading"
              className="font-display font-bold text-2xl md:text-3xl text-bg mb-4"
            >
              What makes it real
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-10"
              style={{ color: "var(--color-dark-muted)" }}
            >
              This is not a demo project. These are the signals that separate a launched product from a side project.
            </p>
          </FadeIn>
          <ul className="space-y-4" role="list">
            {TUON.credibility.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <li
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: "var(--color-dark-surface)",
                    border: "1px solid var(--color-dark-border)",
                  }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "rgba(42,107,87,0.2)",
                      color: "#5ECBA8",
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
              Try Tuon for yourself.
            </h2>
            <p className="font-body text-base text-muted leading-relaxed">
              The best way to understand a study tool is to use it on something you're actually learning.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Button
                as="a"
                href={TUON.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                Visit Tuon ↗
              </Button>
              <Link
                to="/"
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
