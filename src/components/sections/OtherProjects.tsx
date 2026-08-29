import { Link } from "react-router-dom";
import { FadeIn }       from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { Icon }         from "../ui/Icon";
import { OTHER_PROJECTS } from "../../data/config";

export function OtherProjects() {
  return (
    <section
      id="other-projects"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="other-projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <FadeIn>
          <div className="mb-12 md:mb-16">
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              id="other-projects-heading"
              className="mt-4 font-display font-bold text-3xl md:text-4xl text-text leading-tight"
            >
              Systems, AI, and full-stack products I've shipped.
            </h2>
          </div>
        </FadeIn>

        {/* ── Project cards ── */}
        <div className="grid sm:grid-cols-2 gap-5">
          {OTHER_PROJECTS.map((project, i) => {
            const hasCaseStudy = "slug" in project && Boolean(project.slug);

            const cardContent = (
              <>
                <div className="space-y-4">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold"
                          style={{
                            background: "var(--color-accent-dim)",
                            color: "var(--color-accent)",
                            border: "1px solid rgba(42,107,87,0.2)",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {project.status}
                        </span>
                        <span className="text-xs font-body text-muted">
                          {project.role}
                        </span>
                        {hasCaseStudy && (
                          <span className="text-xs font-body font-semibold text-warm">
                            Case study
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-xl text-text leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1">
                      <Icon name={hasCaseStudy ? "arrowright" : "external"} size={18} />
                    </span>
                  </div>

                  <p className="font-body text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-body font-semibold bg-surface-card border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            const cardClassName =
              "group flex flex-col justify-between h-full p-7 rounded-2xl bg-bg border border-border hover:border-accent/40 hover:shadow-sm transition-all duration-300";

            return (
              <FadeIn key={project.title} delay={i * 0.08}>
                {hasCaseStudy ? (
                  <Link to={`/projects/${project.slug}`} className={cardClassName}>
                    {cardContent}
                  </Link>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </a>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
