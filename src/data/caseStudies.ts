/**
 * ─────────────────────────────────────────────
 *  CASE STUDIES
 *  Rich, in-depth write-ups for flagship projects.
 *  Rendered by src/pages/ProjectCaseStudy.tsx at /projects/:slug
 * ─────────────────────────────────────────────
 */

import type { Feature } from "../types";

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  url: string;
  role: string;
  period: string;
  theme: "accent" | "warm";
  problem: string;
  problemExtra: string;
  solution: string;
  highlights: string[];
  features: Feature[];
  stackIntro: string;
  stack: string[];
  stackNotes: { label: string; text: string }[];
  credibilityIntro: string;
  credibility: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  restart: {
    slug: "restart",
    title: "ReStart",
    tagline:
      "A blockchain-powered credential platform that makes rehabilitation program completion permanently verifiable, built and shipped in 48 hours.",
    status: "Champions — Paytaca CASH 3.0 Hackathon 2026",
    url: "https://restart-bch.vercel.app",
    role: "Developer",
    period: "48-hour hackathon build",
    theme: "warm",
    problem:
      "People who complete rehabilitation programs, drug recovery, reintegration, vocational training, have no tamper-proof way to prove it. Records live in paper files or a facility's own database: easy to lose, easy to alter, and impossible for an outside party to verify independently.",
    problemExtra:
      "An employer, a parole board, or a partner agency has no way to check a completion claim against anything other than the word of the institution that issued it. If that institution's records are lost, edited, or simply not trusted, the person who did the work has nothing left to show for it.",
    solution:
      "ReStart gives counselors a way to register patients and verify real-world milestones, counseling sessions, vocational training, life-skills programs, one at a time, only as they actually happen. Each verification is signed by the counselor and written permanently to the Bitcoin Cash blockchain through a CashScript smart contract, not just saved as a database row. When a patient completes their program, they receive a public, shareable credential link that anyone can verify directly against the blockchain, with no login and no need to trust the app, the facility, or any single party's word.",
    highlights: [
      "Counselor-signed milestones",
      "On-chain smart contract per patient",
      "Public, no-login verification",
      "Off-chain privacy for sensitive data",
    ],
    features: [
      {
        label: "Counselor Milestone Verification",
        description:
          "Case workers register patients and verify each real-world milestone individually as it happens, with every verification signed before it is written on-chain.",
      },
      {
        label: "On-Chain Smart Contracts",
        description:
          "Each patient gets a unique CashScript smart contract on Bitcoin Cash. Milestone and completion events are written to it permanently and cannot be altered after the fact.",
      },
      {
        label: "Public Credential Links",
        description:
          "On program completion, patients receive a shareable link that anyone, an employer, a parole board, a partner agency, can open and verify independently against the blockchain.",
      },
      {
        label: "Privacy-Preserving Design",
        description:
          "Sensitive information, counseling notes, intake details, stays private and off-chain in Supabase. Only the milestone and completion events themselves are locked to the chain, exactly the part that needs to be tamper-proof.",
      },
    ],
    stackIntro:
      "Built end to end in under 48 hours during the hackathon, ReStart pairs a conventional web stack with real blockchain infrastructure rather than treating it as a bolt-on.",
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Bitcoin Cash",
      "CashScript",
      "CashTokens",
      "WizardConnect",
      "Paytaca",
    ],
    stackNotes: [
      {
        label: "Frontend",
        text: "Next.js and React for the counselor and patient-facing surfaces, built fast under hackathon time pressure without sacrificing usability.",
      },
      {
        label: "Blockchain layer",
        text: "CashScript smart contracts on Bitcoin Cash handle milestone and completion events. CashTokens represent the on-chain credentials themselves.",
      },
      {
        label: "Wallet signing",
        text: "WizardConnect and Paytaca handle counselor wallet connection and transaction signing, keeping the signing flow usable for non-technical staff.",
      },
      {
        label: "Off-chain data",
        text: "Supabase and PostgreSQL store sensitive counseling records and intake data that should never be public or immutable.",
      },
    ],
    credibilityIntro:
      "This was not a polished demo built over weeks. It was built, tested, and pitched inside a 48-hour hackathon window, and it won.",
    credibility: [
      "1st Place, Champions, Paytaca CASH 3.0 Bitcoin Cash Hackathon 2026",
      "Competed against teams from schools across the Visayas, advancing through to the championship round",
      "Real smart contracts deployed on Bitcoin Cash, not a mocked blockchain layer",
      "Designed around an actual social-impact use case, not a generic hackathon demo",
    ],
  },

  vamp: {
    slug: "vamp",
    title: "VAMP Productions Platform",
    tagline:
      "A full operations platform that replaced a Singapore live music agency's Excel-and-phone-call workflow for booking over 100 roster musicians.",
    status: "Live",
    url: "https://vamp.wibiz.ai",
    role: "Lead Developer",
    period: "2026",
    theme: "accent",
    problem:
      "VAMP Productions, a Singapore-based live music agency, was running its entire booking operation through spreadsheets and phone calls. Every gig meant manually matching musicians to slots, chasing confirmations over WhatsApp one by one, and tracking who got paid across two separate payment cycles, all by hand.",
    problemExtra:
      "That process didn't scale. With a roster of around 100 musicians and gigs happening constantly, the ops team was spending more time on coordination overhead than on actually running the business. Mistakes, double bookings, missed confirmations, lost payment records, were a matter of when, not if.",
    solution:
      "I led development of a five-surface operations platform: a Command Centre for ops staff, a Monthly Schedule view, Gig Chats, a self-service Musician Portal, and a Lineup Engine that auto-fills musician slots for upcoming gigs. Musicians get magic-link access with no password to manage, and can view bookings, set their availability, and message the team directly. WhatsApp invitations go out automatically through GoHighLevel, and the system tracks confirmations, declines, and two-cycle payment runs without anyone needing to check a spreadsheet.",
    highlights: [
      "5 role-scoped surfaces",
      "~100 roster musicians",
      "Magic-link onboarding",
      "Automated WhatsApp invites",
    ],
    features: [
      {
        label: "Lineup Auto-Fill Engine",
        description:
          "Automatically slots available musicians into upcoming gigs based on availability and role requirements, replacing manual matching from a spreadsheet.",
      },
      {
        label: "Automated WhatsApp Invitations",
        description:
          "Gig invitations go out to musicians automatically through the GoHighLevel API the moment a lineup is set, with confirmations and declines tracked in real time.",
      },
      {
        label: "Self-Service Musician Portal",
        description:
          "Musicians log in with a magic link, no password required, to view their bookings, update their availability, and message the ops team directly.",
      },
      {
        label: "Role-Based Access Control",
        description:
          "Four distinct roles, MASTER, OPS, DESIGNER, and MUSICIAN, each with a purpose-built surface and permission set, so nobody sees more than they need to.",
      },
      {
        label: "Two-Cycle Payment Tracking",
        description:
          "Tracks confirmations, declines, and payment status across the agency's two-cycle payment structure, closing the loop that used to live entirely in someone's memory.",
      },
    ],
    stackIntro:
      "Built as a production-grade Next.js application on the App Router, with a data layer designed to hold up under real, daily operational load.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Railway",
      "GoHighLevel",
      "Make.com",
      "Playwright",
    ],
    stackNotes: [
      {
        label: "Frontend",
        text: "Next.js 15 App Router with TypeScript throughout, giving each of the five role-scoped surfaces its own tailored experience without duplicating logic.",
      },
      {
        label: "Data layer",
        text: "Prisma ORM over PostgreSQL, hosted on Railway, modeling gigs, musicians, availability, lineups, and payment cycles as first-class relations.",
      },
      {
        label: "Automation",
        text: "GoHighLevel API for WhatsApp messaging and Make.com for webhook-driven automation between the platform and the agency's existing CRM workflows.",
      },
      {
        label: "Testing",
        text: "Playwright end-to-end tests cover the critical booking and confirmation flows, since a missed invitation or a double-booked slot has a real, external consequence.",
      },
    ],
    credibilityIntro:
      "This runs the actual booking operation for a working live music agency, not a proof of concept sitting unused after launch.",
    credibility: [
      "In active production use managing a roster of ~100 musicians",
      "Replaced a fully manual Excel-and-phone-call workflow end to end",
      "Five distinct role-scoped surfaces shipped and in daily use",
      "Automated WhatsApp booking flow via GoHighLevel and Make.com webhooks",
    ],
  },

  borderlessclub: {
    slug: "borderlessclub",
    title: "BorderlessClub",
    tagline:
      "A premium golf club membership and tee-time platform with three passwordless portals for members, course staff, and ops.",
    status: "Live",
    url: "https://borderlessclub.wibiz.ai",
    role: "Lead Developer",
    period: "2026",
    theme: "accent",
    problem:
      "Golf club membership management sits at an awkward intersection: members expect a premium, frictionless experience, course staff need a fast way to confirm or decline bookings without wrestling with a login, and the club's ops team needs full visibility across bookings, members, and courses without any of that complexity leaking through to the other two groups.",
    problemExtra:
      "Building one dashboard and giving everyone the same access would have meant either overwhelming members with admin-level detail, or under-serving staff who needed to act fast between rounds. The three audiences needed three different products that shared one underlying system.",
    solution:
      "I led the full build of a three-portal platform. Members get a passwordless, magic-link portal for requesting and tracking tee times with zero account friction. Course staff get their own passwordless portal focused purely on confirming or declining incoming booking requests. And the ops team gets a full admin dashboard for managing bookings, members, courses, and approvals, with CRM automation running quietly in the background so nothing needs to be manually synced.",
    highlights: [
      "3 role-scoped portals",
      "Fully passwordless access",
      "Background CRM automation",
      "Session-based auth on Railway",
    ],
    features: [
      {
        label: "Passwordless Member Portal",
        description:
          "Members request and track tee times through a magic-link login, removing password friction from what should feel like a premium, effortless experience.",
      },
      {
        label: "Course-Staff Confirmation Portal",
        description:
          "A separate, focused portal lets course staff confirm or decline tee-time requests quickly, without the weight of the full admin dashboard.",
      },
      {
        label: "Ops Admin Dashboard",
        description:
          "Full administrative control over bookings, members, courses, and approvals in one place, built for the team actually running the club day to day.",
      },
      {
        label: "Background CRM Automation",
        description:
          "Member and booking data sync to GoHighLevel automatically in the background, so the ops team's CRM stays current without manual data entry.",
      },
    ],
    stackIntro:
      "A conventional, dependable stack chosen for a system that needs to run reliably every day without much hands-on maintenance.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Railway",
      "GoHighLevel",
    ],
    stackNotes: [
      {
        label: "Frontend",
        text: "React with Vite and TypeScript, built as three separate portal experiences sharing a common design system and component library.",
      },
      {
        label: "Backend",
        text: "Node.js and Express handle authentication, booking logic, and approval workflows across all three portals.",
      },
      {
        label: "Sessions",
        text: "connect-pg-simple backs session storage directly in PostgreSQL, keeping the passwordless magic-link flow simple and dependency-light.",
      },
      {
        label: "CRM sync",
        text: "GoHighLevel integration runs in the background, keeping member and booking records current in the club's CRM without any manual step.",
      },
    ],
    credibilityIntro:
      "A full platform build-out, not an incremental feature, shipped and running for a real membership club.",
    credibility: [
      "Three distinct, fully passwordless portals shipped in one platform",
      "Handles the complete tee-time lifecycle from request to confirmation",
      "Background CRM automation with zero manual sync required",
      "In live production use for club members, course staff, and ops",
    ],
  },

  autosalesai: {
    slug: "autosalesai",
    title: "AutoSales AI Portal",
    tagline:
      "A two-sided partner portal for an AI sales reseller program, tracking agents, referrals, commissions, and payouts end to end.",
    status: "Live",
    url: "https://agents.autosales.wibiz.ai",
    role: "Lead Developer",
    period: "2026",
    theme: "warm",
    problem:
      "A reseller program is only as good as its ability to track who referred what, attribute credit fairly, and pay people accurately and on time. Without a real system, that means spreadsheets, manual referral code lookups, and commission calculations that are one copy-paste error away from paying someone the wrong amount.",
    problemExtra:
      "As the agent network grows and each agent builds their own upline and downline, tracking that hierarchy manually stops being feasible almost immediately. Sales events need to be attributed correctly the moment they happen, not reconciled after the fact.",
    solution:
      "I led development of a two-sided portal: agents get a dashboard to onboard, generate referral links, and track their leads, commissions, and their upline and downline team in real time. Admins get tools to review and approve new agents, attribute incoming leads by referral code, and manage the commission payout process. Webhook-driven sales events feed directly into a payout state machine, and contact, tag, and pipeline data sync automatically to GoHighLevel so the CRM never falls out of date.",
    highlights: [
      "Two-sided agent and admin portal",
      "Referral code attribution",
      "Webhook-driven payout state machine",
      "GoHighLevel CRM sync",
    ],
    features: [
      {
        label: "Referral Attribution",
        description:
          "Leads are attributed automatically by referral code the moment they come in, removing manual lookups and the errors that come with them.",
      },
      {
        label: "Agent Hierarchy Tracking",
        description:
          "Each agent's upline and downline team is tracked and visualized, so commission structures stay transparent as the network grows.",
      },
      {
        label: "Webhook-Driven Payout Engine",
        description:
          "Sales events arrive via webhook and feed directly into a payout state machine, keeping commission calculations accurate and auditable without manual reconciliation.",
      },
      {
        label: "Admin Approval Workflow",
        description:
          "Admins review and approve new agents before they go live, keeping the network's quality controlled as it scales.",
      },
    ],
    stackIntro:
      "A React and Express stack built for a system where financial accuracy and real-time state changes both matter.",
    stack: [
      "React 18",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudflare R2",
      "GoHighLevel",
      "Railway",
    ],
    stackNotes: [
      {
        label: "Frontend",
        text: "React 18 with Vite and TypeScript, including recharts-powered dashboards so agents and admins can see performance at a glance rather than digging through tables.",
      },
      {
        label: "Backend",
        text: "Node.js and Express handle the payout state machine, rate-limited authentication, and referral attribution logic.",
      },
      {
        label: "Storage",
        text: "Cloudflare R2 handles file uploads for agent documentation and assets, kept separate from the primary application database.",
      },
      {
        label: "CRM integration",
        text: "Contacts, tags, and pipeline data sync automatically to GoHighLevel, keeping sales and marketing views of the same agents consistent.",
      },
    ],
    credibilityIntro:
      "Handles real commission payouts for a live reseller network, where getting the numbers wrong has a direct financial cost.",
    credibility: [
      "In production use managing a live agent reseller network",
      "Webhook-driven payout logic replacing manual commission tracking",
      "Full agent hierarchy and referral attribution built from scratch",
      "Synced in real time with GoHighLevel as the CRM of record",
    ],
  },

  apexlynx: {
    slug: "apexlynx",
    title: "ApexLynx",
    tagline:
      "A multi-portal operations platform for a leisure membership-card program, driven by a real-time Command Centre with SLA auto-flagging.",
    status: "Live",
    url: "https://apexlynx.com",
    role: "Full Stack Developer",
    period: "2026",
    theme: "warm",
    problem:
      "A leisure and membership-card program has to serve very different audiences at once: super-admins overseeing the whole program, admins managing day-to-day operations, club staff handling member interactions on the ground, and cardmembers who just want their membership to work without friction. Serving all of them from one undifferentiated system creates confusion and slows everyone down.",
    problemExtra:
      "On top of that, service-level agreements around membership requests and issues need active monitoring. Without a system that flags what is at risk of breaching SLA in real time, problems only surface once a member has already had a bad experience.",
    solution:
      "I built a multi-portal platform with role-scoped access across super-admin, admin, command-centre, club, and cardmember surfaces. The Command Centre is the operational core: a real-time dashboard with live polling, automatic SLA flagging on at-risk items, and webhook integrations feeding in program events as they happen. Staff access is secured with token- and credential-based authentication using HMAC-signed session cookies, keeping the system secure without adding friction to daily staff logins.",
    highlights: [
      "5 role-scoped portals",
      "Real-time SLA auto-flagging",
      "HMAC-signed sessions",
      "Native Node.js HTTP layer",
    ],
    features: [
      {
        label: "Command Centre Dashboard",
        description:
          "A real-time operational view built on live polling, giving staff up-to-date visibility into program activity without needing to refresh or dig through reports.",
      },
      {
        label: "SLA Auto-Flagging",
        description:
          "Requests and issues at risk of breaching their service-level agreement are flagged automatically, surfacing problems before members have to complain about them.",
      },
      {
        label: "Five Role-Scoped Surfaces",
        description:
          "Super-admin, admin, command-centre, club, and cardmember each get a purpose-built surface, keeping every audience focused on exactly what they need.",
      },
      {
        label: "HMAC-Signed Sessions",
        description:
          "Staff authentication uses token- and credential-based access with HMAC-SHA256-signed session cookies, keeping the system secure without sacrificing day-to-day usability.",
      },
    ],
    stackIntro:
      "Built deliberately close to the metal: native Node.js HTTP rather than a heavier framework, for a system where predictable performance mattered more than convenience abstractions.",
    stack: [
      "Node.js",
      "MySQL",
      "HMAC-SHA256",
      "Webhooks",
      "RBAC",
      "Vanilla JS",
      "Railway",
    ],
    stackNotes: [
      {
        label: "Backend",
        text: "Node.js using the native HTTP module rather than a framework, giving tight control over request handling for the Command Centre's real-time polling.",
      },
      {
        label: "Database",
        text: "MySQL 8 stores program, member, and request data, modeled around the five-role access structure from the ground up.",
      },
      {
        label: "Security",
        text: "HMAC-SHA256-signed session cookies secure staff authentication across every portal, with role-based access control enforced at the API layer.",
      },
      {
        label: "Frontend",
        text: "Vanilla JavaScript for the client-facing surfaces, kept deliberately lightweight given the real-time polling already running in the background.",
      },
    ],
    credibilityIntro:
      "A live operational backbone for a real membership program, not a demo dashboard built to look impressive in a screenshot.",
    credibility: [
      "In active production use across five distinct staff and member roles",
      "Real-time SLA monitoring flagging at-risk items automatically",
      "Custom HMAC-signed session security built without a framework crutch",
      "Handles live webhook integrations feeding program events in real time",
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES[slug];
}
