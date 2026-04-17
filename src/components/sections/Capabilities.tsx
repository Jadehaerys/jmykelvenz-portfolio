import { FadeIn } from "../ui/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { Icon } from "../ui/Icon";
import { CAPABILITIES } from "../../data/config";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <FadeIn>
          <div className="mb-16 md:mb-20 max-w-2xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              id="capabilities-heading"
              className="mt-4 font-display font-bold text-3xl md:text-4xl text-text leading-tight"
            >
              How I execute
              across the full product.
            </h2>
            <p className="mt-4 font-body text-base md:text-lg text-muted leading-relaxed">
              Not a list of technologies. A set of execution areas that actually show up in the work.
            </p>
          </div>
        </FadeIn>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CAPABILITIES.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.06} className="h-full">
              <CapabilityCard
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
}

function CapabilityCard({ icon, title, description }: CapabilityCardProps) {
  return (
    <div className="group h-full p-6 rounded-2xl bg-bg border border-border hover:border-accent/40 hover:shadow-sm transition-all duration-300 flex flex-col gap-4">
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
        style={{
          background: "var(--color-accent-dim)",
          color: "var(--color-accent)",
        }}
      >
        <Icon name={icon as any} size={20} />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-display font-bold text-base text-text leading-snug">
          {title}
        </h3>
        <p className="font-body text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
