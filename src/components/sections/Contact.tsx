import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { SITE } from "../../data/config";

export function Contact() {
  const socials = [
    { name: "GitHub",    href: SITE.contact.github,    icon: "github"   as const, label: "github"   },
    { name: "LinkedIn",  href: SITE.contact.linkedin,  icon: "linkedin" as const, label: "linkedin" },
    { name: "Facebook",  href: SITE.contact.facebook,  icon: "facebook" as const, label: "facebook" },
  ];

  return (
    <section
      id="contact"
      className="bg-bg py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">

          <FadeIn>
            <SectionLabel className="justify-center">Contact</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              id="contact-heading"
              className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text leading-tight"
            >
              Let's connect.
            </h2>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-5 font-body text-base md:text-lg text-muted leading-relaxed">
              Whether you're a student, a collaborator, a potential partner, or just
              someone who stumbled in, I'd genuinely like to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-8">
              <Button
                as="a"
                href={`mailto:${SITE.contact.email}`}
                variant="primary"
                size="lg"
                className="gap-3"
              >
                <Icon name="mail" size={18} />
                {SITE.contact.email}
              </Button>
            </div>
          </FadeIn>

          {/* Social links */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex items-center justify-center gap-4">
              {socials.map(({ name, href, icon, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} — ${label} placeholder, update in config.ts`}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-card hover:border-border/80 transition-all duration-200 text-muted hover:text-text"
                >
                  <Icon name={icon} size={16} />
                  <span className="font-body text-sm font-medium">{name}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
