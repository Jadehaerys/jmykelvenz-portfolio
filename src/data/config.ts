/**
 * ─────────────────────────────────────────────
 *  PORTFOLIO CONTENT + CONFIG
 *  Edit this file to update all site content.
 * ─────────────────────────────────────────────
 */

export const SITE = {
  // ── Identity ──────────────────────────────
  fullName:  "Jade Mykel R. Ventic",
  shortName: "Jade Ventic",
  handle:    "jade",
  headline:  "Building education software that gets used.",
  subheadline:
    "Student founder from Cebu, Philippines. My current focus is Tuon, an AI-powered study platform I'm building from the ground up: product, code, operations, and everything in between.",

  location: "Cebu, Philippines",
  businessEntity: "Armonia Information Technology Services",

  // ── Contact & Socials ─────────────────────
  // Replace placeholder hrefs with your real URLs before deploying.
  contact: {
    email:    "support@tuon.net",
    github:   "https://github.com/Jadehaerys",
    linkedin: "https://linkedin.com/in/jade-mykel-r-ventic-71bb582a2",
    facebook: "https://www.facebook.com/jade.mykel",
  },

  // ── SEO / OG defaults ─────────────────────
  siteUrl:     "https://jadeventic.com",     // ← replace with your live URL
  ogImage:     "/og-image.png",              // ← replace with your OG image path

  // ── Navigation ────────────────────────────
  navLinks: [
    { label: "About",        href: "#about"      },
    { label: "Tuon",         href: "#project"    },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact",      href: "#contact"    },
  ],
};

// ── Flagship product ──────────────────────────
export const TUON = {
  name:    "Tuon",
  tagline: "Study smarter. Learn faster.",
  url:     "https://tuon.net",
  status:  "Launching",                      // e.g. "Launching", "Live", "Beta"

  problem:
    "Most students don't have trouble accessing information. They have trouble retaining it. Passive reading and one-size-fits-all notes aren't enough. Studying needs to be active, targeted, and efficient.",

  solution:
    "Tuon automatically generates flashcards and quizzes from whatever you give it. Type a topic, upload a PDF, or paste a YouTube link. Tuon turns it into a focused study session in seconds.",

  description:
    "An AI-powered study platform that transforms any learning material into active practice. Built for students who need to learn more with less time.",

  inputs: ["Typed topic", "PDF upload", "YouTube link"],

  features: [
    {
      label: "AI Flashcard Generation",
      description:
        "Generate targeted flashcards from any topic or uploaded content. Powered by Groq's inference API for fast, accurate output.",
    },
    {
      label: "AI Quiz Builder",
      description:
        "Turn study materials into multiple-choice and short-answer quizzes, automatically structured for effective recall practice.",
    },
    {
      label: "Study Decks",
      description:
        "Organize generated content into reusable decks. Review them anytime, share with classmates, or build on existing material.",
    },
    {
      label: "AI Tutor Chat",
      description:
        "Ask follow-up questions about any topic within your study session. Like office hours, but available anytime.",
    },
    {
      label: "Subscriptions & Credits",
      description:
        "Flexible pricing with a subscription tier and credit top-ups. Payment processing handled through PayMongo.",
    },
    {
      label: "Privacy-First Architecture",
      description:
        "User data is handled responsibly. Legal pages, clear data practices, and compliance-aware design from day one.",
    },
  ],

  stack: [
    "React",
    "Vite",
    "TypeScript",
    "Supabase",
    "Vercel",
    "Groq",
    "Supadata",
    "Resend",
    "PayMongo",
  ],

  credibility: [
    "Real payment flow with PayMongo integration",
    "Legal pages, terms, and privacy policy",
    "Auth, sessions, and account lifecycle management",
    "Deployed on production infrastructure (Vercel + Supabase)",
    "Privacy-conscious design and responsible data handling",
    "Structured for real launch, not just demonstration",
  ],
};

// ── Capabilities ────────────────────────────
export const CAPABILITIES = [
  {
    icon: "layers",
    title: "Frontend Product Development",
    description:
      "Building React interfaces with real users in mind. Accessibility, responsiveness, and interaction quality are part of the spec, not afterthoughts.",
  },
  {
    icon: "compass",
    title: "Interface Design Thinking",
    description:
      "Information architecture, user flows, and visual hierarchy. Design decisions are made in service of the product goal, not aesthetic preference.",
  },
  {
    icon: "shield",
    title: "Auth & Account Flows",
    description:
      "Supabase-powered authentication, session management, and user lifecycle. Built to be secure, reliable, and frictionless.",
  },
  {
    icon: "cpu",
    title: "AI-Powered Workflows",
    description:
      "Integrating large language models and external APIs to generate genuine educational value from raw, unstructured input.",
  },
  {
    icon: "creditcard",
    title: "Subscription & Payment Integration",
    description:
      "End-to-end payment flows via PayMongo: pricing pages, plan upgrades, credit top-ups, and real transaction handling.",
  },
  {
    icon: "globe",
    title: "Deployment & Product Operations",
    description:
      "Shipping on Vercel, managing environments, handling secrets responsibly, and maintaining production uptime discipline.",
  },
  {
    icon: "file",
    title: "Privacy & Compliance-Aware Execution",
    description:
      "Legal pages, privacy-first data handling, and responsible product design built in from the start, not bolted on later.",
  },
  {
    icon: "anchor",
    title: "Product Thinking & Execution",
    description:
      "Defining what to build and why. Scoping features, making tradeoffs, and moving from idea to shipped with real structure.",
  },
];

// ── Philosophy / Principles ─────────────────
export const PHILOSOPHY = [
  {
    number: "01",
    title: "Build things that are actually useful.",
    body:
      "The measure of a product is whether people use it because it helps them, not because it's impressive in a demo.",
  },
  {
    number: "02",
    title: "Reduce friction at every step.",
    body:
      "Every extra tap, every confusing label, every slow response costs someone's attention. Simplicity is an act of respect.",
  },
  {
    number: "03",
    title: "Ship with intention, not just speed.",
    body:
      "Responsible shipping means understanding the implications before launch: legally, technically, and for the people using it.",
  },
  {
    number: "04",
    title: "Design for the person using it.",
    body:
      "Not for the portfolio reviewer. Not for the investor deck. For the student at midnight trying to pass an exam tomorrow.",
  },
  {
    number: "05",
    title: "Own the full stack.",
    body:
      "Product thinking, code, integrations, payments, legal groundwork. Doing the unglamorous parts is what separates real products from demos.",
  },
];

// ── About section ────────────────────────────
export const ABOUT = {
  short:
    "I'm a student and founder based in Cebu, Philippines. I started building Tuon because I wanted a study tool that actually worked, and because I wanted to know if I could ship a real product from scratch.",
  extended: [
    "What I've found is that building software seriously is its own education. Every product decision forces clarity. Every integration teaches you something new. Every user interaction shows you where you made the wrong assumption.",
    "I work across the full product surface: frontend code, database design, API integrations, payment flows, legal pages, deployment, and the operational discipline that any real software requires. Not because I can do everything perfectly, but because understanding the whole system makes every part of it better.",
    "This is early in the journey. But the work is real, and that's what matters right now.",
  ],
  // Profile photo — placed in public/ProfilePic.jpg
  photo: "/ProfilePic.jpg" as string | null,
};
