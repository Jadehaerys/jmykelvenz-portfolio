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
    "Software AI Developer at Prime AI LLC and Full Stack Developer at Digital Benefits Pte. Ltd. Founder from Cebu, Philippines. My current focus is Tuon, an AI-powered study platform I'm building from the ground up: product, code, operations, and everything in between.",

  location: "Cebu, Philippines",
  businessEntity: "Armonia Information Technology Services",

  // ── Contact & Socials ─────────────────────
  // Replace placeholder hrefs with your real URLs before deploying.
  contact: {
    email:        "jmykelvenz@gmail.com",
    github:       "https://github.com/Jadehaerys",
    linkedin:     "https://linkedin.com/in/jade-mykel-r-ventic-71bb582a2",
    facebook:     "https://www.facebook.com/jade.mykel",
    businessSite: "https://armoniait.com",
  },

  // ── SEO / OG defaults ─────────────────────
  siteUrl:     "https://jadeventic.com",     // ← replace with your live URL
  ogImage:     "/og-image.png",              // ← replace with your OG image path

  // ── Navigation ────────────────────────────
  navLinks: [
    { label: "About",        href: "#about"        },
    { label: "Tuon",         href: "#project"      },
    { label: "Projects",     href: "#other-projects" },
    { label: "Capabilities", href: "#capabilities"  },
    { label: "Contact",      href: "#contact"      },
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
      "Shipping on Vercel, managing environments with Railway and Cloudflare, handling secrets responsibly, and maintaining production uptime discipline.",
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

// ── Experience ──────────────────────────────
export const EXPERIENCE = [
  {
    company:  "Prime AI LLC",
    role:     "Software AI Developer",
    period:   "August 2026 – Present",
    location: "Remote",
    type:     "Full-time Contract",
  },
  {
    company:  "Digital Benefits Pte. Ltd.",
    role:     "Full Stack Developer",
    period:   "May 2026 – Present",
    location: "Remote",
    type:     "Full-time",
  },
];

// ── About section ────────────────────────────
export const ABOUT = {
  short:
    "I'm a Software AI Developer at Prime AI LLC, a Full Stack Developer at Digital Benefits Pte. Ltd., and founder of Armonia Information Technology Services, based in Cebu, Philippines. I started building Tuon because I wanted a study tool that actually worked, and because I wanted to know if I could ship a real product from scratch.",
  extended: [
    "My team and I won Champions at the Paytaca CASH 3.0 Bitcoin Cash Hackathon 2026 with ReStart, a blockchain-powered rehabilitation credential platform we built in 48 hours. It is one of the projects I am most proud of, built under real pressure with real stakes.",
    "What I've found is that building software seriously is its own education. Every product decision forces clarity. Every integration teaches you something new. Every user interaction shows you where you made the wrong assumption.",
    "I work across the full product surface: frontend code, database design, API integrations, payment flows, legal pages, deployment, and the operational discipline that any real software requires. Not because I can do everything perfectly, but because understanding the whole system makes every part of it better.",
  ],
  tags: [
    "Software AI Developer",
    "Full Stack Developer",
    "Founder",
    "Hackathon Champion",
    "AI-Assisted Development",
    "Cebu, Philippines",
    "Education Technology",
  ],
  // Profile photo placed in public/ProfilePic.jpg
  photo: "/ProfilePic.jpg" as string | null,
};

// ── Other Projects ──────────────────────────
export const OTHER_PROJECTS = [
  {
    title: "ReStart",
    description:
      "1st Place — Paytaca Cash 3.0 Bitcoin Cash Hackathon. A counselor-facing rehabilitation credential platform that writes verified program milestones permanently to the Bitcoin Cash blockchain via CashScript smart contracts. Case workers register patients, sign and record real-world milestones on-chain as they happen, and issue tamper-proof completion credentials when a program finishes. Anyone — an employer, parole board, or partner agency — can verify the credential directly against the blockchain with no login and no middleman. Sensitive counseling data stays off-chain in Supabase; only the milestone and completion events are locked on-chain, exactly the part that needs to be tamper-proof.",
    url: "https://restart-bch.vercel.app",
    role: "Developer",
    tags: ["Next.js", "React", "Supabase", "Bitcoin Cash", "CashScript", "CashTokens", "Blockchain"],
    status: "Live",
  },
  {
    title: "VAMP Productions Platform",
    description:
      "A bespoke operations platform for VAMP Productions, a Singapore-based live music agency, replacing a manual Excel-and-phone-call workflow. The ops team manages gigs end to end — creating events, slotting ~100 roster musicians through a lineup auto-fill engine, sending WhatsApp invitations via GoHighLevel, and tracking confirmations, declines, and two-cycle payment runs. Musicians get a self-service portal to view bookings, set availability, and message the team. Built around five role-scoped surfaces — Command Centre, Monthly Schedule, Gig Chats, Musician Portal, and Lineup Engine — with magic-link onboarding and role-based access (MASTER, OPS, DESIGNER, MUSICIAN).",
    url: "https://vamp.wibiz.ai",
    role: "Lead Developer",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Railway", "GoHighLevel"],
    status: "Live",
  },
  {
    title: "AutoSales AI Portal",
    description:
      "A two-sided partner portal for an AI sales reseller program. Agents onboard and track leads, referral links, commissions, and their upline/downline team. Admins review and approve agents, attribute leads by referral code, and manage commission payouts. Webhook-driven sales events feed a payout state machine, with contacts, tags, and pipeline data synced to GoHighLevel.",
    url: "https://agents.autosales.wibiz.ai",
    role: "Lead Developer",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "GoHighLevel"],
    status: "Live",
  },
  {
    title: "BorderlessClub",
    description:
      "A premium golf club tee-time booking and membership management platform with three role-scoped surfaces: a passwordless member portal (magic-link) for requesting and tracking tee times, a passwordless course-staff portal for confirming or declining bookings, and an ops admin dashboard for managing bookings, members, courses, and approvals — with CRM automation running silently in the background.",
    url: "https://borderlessclub.wibiz.ai",
    role: "Lead Developer",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Railway", "GoHighLevel"],
    status: "Live",
  },
  {
    title: "ApexLynx",
    description:
      "A multi-portal operations platform for a leisure and membership-card program, with role-scoped access across super-admin, admin, command-centre, club, and cardmember surfaces. The Command Centre dashboard drives daily operations with real-time polling, SLA auto-flagging, and webhook integrations. Staff access is token- and credential-based with HMAC-signed session management.",
    url: "https://apexlynx.com",
    role: "Full Stack Developer",
    tags: ["Node.js", "MySQL", "Webhooks", "RBAC", "Railway"],
    status: "Live",
  },
  {
    title: "PSITS Voting System",
    description:
      "An online voting platform built for the Philippine Society of Information Technology Students at my university. Used by the department to elect new officers each year. Built as a collaborative project with fellow developers.",
    url: "https://psits-voting.vercel.app",
    role: "Co-developer",
    tags: ["React", "Vercel", "Collaborative"],
    status: "Live",
  },
  {
    title: "Freesoul Cyber Gadgets",
    description:
      "Website for a gadget and electronics repair shop based in Cebu, Philippines. Covers phone, laptop, camera, and gaming console repairs. Freesoul holds TESDA NC2 Electronics Repair certification and an NTC Mobile Phone Service Center Permit, and is the only camera shop inside a mall in Cebu offering DSLR and mirrorless camera repairs.",
    url: "https://freesoul-ph.vercel.app",
    role: "Web Designer & Developer",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    status: "Live",
  },
  {
    title: "S&R Pastry Shop",
    description:
      "A high-performance e-commerce web app for a Cebu-based bakery with a 'Premium & Bubbly' aesthetic. Features a custom checkout flow that formats and copies order details to the clipboard before redirecting to Facebook Messenger — bridging the gap between a polished web store and the shop's GCash/Messenger workflow. Includes real-time store status (PST), persistent cart via LocalStorage, staggered Framer Motion animations, Quick View modals, category filtering, and minimum order logic.",
    url: "https://s-and-r-pastry-shop.vercel.app",
    role: "Web Designer & Developer",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
  },
  {
    title: "BST Sweetbakes",
    description:
      "A premium digital experience for a custom cake and dessert studio. Built around a 'conversational commerce' model that bypasses cold checkout forms in favor of a direct Facebook Messenger integration — letting customers discuss bespoke cake designs with the baker directly. Features a custom OrderModalProvider, dynamic flavor showcase, animated storytelling with Framer Motion, and full SEO/Open Graph optimization.",
    url: "https://bst-sweetbakes.vercel.app",
    role: "Web Designer & Developer",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    status: "Live",
  },
  {
    title: "OurDeliBread",
    description:
      "A modern digital storefront for a boutique Filipino bakery featuring a 3-phase ordering engine (Selection → Logistics → Fulfillment) with real-time subtotal calculations, category filtering, and complex state management. Omnichannel checkout routes structured order manifests via Facebook Messenger or Email, matching the bakery's existing workflow. Implements branch-specific fulfillment (pickup or delivery) and a premium 'Jadehaerys' design system with glassmorphism and amber-toned gradients.",
    url: "https://our-deli-bread.vercel.app",
    role: "Web Designer & Developer",
    tags: ["Next.js", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    status: "Live",
  },
  {
    title: "Maribago Grill",
    description:
      "Restaurant website for a seafood & grill oasis established in 2003 on Mactan Island, Cebu. Built around the venue's sea-and-open-flame identity with a full menu showcase, reservations flow, private dining section, and brand story. The design captures the laid-back, eclectic atmosphere of a destination where locals and foreign tourists converge.",
    url: "https://maribago-grill.vercel.app",
    role: "Web Designer & Developer",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
  },
  {
    title: "J'J Flower Shop",
    description:
      "Website for a premium flower shop in Cordova, Cebu, anchored in a 'Nature's Elegance' brand identity. Features a product catalog, seasonal offers, testimonials, and a direct ordering flow. Designed to showcase the organic beauty of floral arrangements while driving online discoverability for a local shop.",
    url: "https://jj-flower.vercel.app",
    role: "Web Designer & Developer",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
  },
  {
    title: "Armonia",
    description:
      "Company website for Armonia Information Technology Services — a DTI-registered IT services firm based in Liloan, Cebu. Showcases the company's services, project portfolio, compliance credentials, and contact information. Built to communicate professionalism and reliability for a technology-driven business serving local and national clients.",
    url: "https://armoniait.com",
    role: "Founder & Developer",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
  },
];
