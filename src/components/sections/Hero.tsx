import { motion } from "framer-motion";
import { SITE, TUON } from "../../data/config";
import { Button } from "../ui/Button";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.12,
      },
    },
  };

  const item = {
    hidden:  reduced ? {} : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg"
      aria-label="Introduction"
    >
      {/* ── Decorative background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Warm gradient blob — top right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #C05A2A 0%, rgba(192,90,42,0) 70%)",
          }}
        />
        {/* Cool accent blob — bottom left */}
        <div
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #2A6B57 0%, rgba(42,107,87,0) 70%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(28,25,22,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28,25,22,1) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-[0.14em] uppercase text-muted">
              <span className="block h-px w-6 bg-muted" aria-hidden="true" />
              Student founder · Cebu, Philippines
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.03] tracking-tight text-text mb-6"
          >
            Building education{" "}
            <span
              className="relative inline-block"
              style={{ color: "var(--color-accent)" }}
            >
              software
              {/* Underline accent */}
              <span
                className="absolute bottom-0 left-0 w-full h-0.5 rounded-full opacity-60"
                style={{ background: "var(--color-accent)" }}
                aria-hidden="true"
              />
            </span>
            {" "}that gets used.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="font-body text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10"
          >
            {SITE.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              as="a"
              href="#project"
              variant="primary"
              size="lg"
            >
              View Tuon
            </Button>
            <Button
              as="a"
              href={`mailto:${SITE.contact.email}`}
              variant="ghost"
              size="lg"
            >
              Get in touch
            </Button>
          </motion.div>

          {/* Product status pill */}
          <motion.div variants={item} className="mt-10">
            <a
              href={TUON.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-border bg-surface/60 hover:bg-surface-card transition-all duration-200 group"
            >
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--color-accent)" }}
                aria-hidden="true"
              />
              <span className="font-body text-sm text-text font-medium">
                <span className="text-accent font-semibold">Tuon</span>
                {" · "}{TUON.status}
              </span>
              <span className="text-muted text-xs group-hover:translate-x-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted"
        aria-hidden="true"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-muted to-transparent"
        />
      </div>
    </section>
  );
}
