/**
 * Default experience rows for Firestore seeding (`npm run seed:projects`).
 * sortOrder: lower = earlier on the site (same convention as projects).
 */
export const EXPERIENCE_SEEDS = [
  {
    id: "ranga-ase",
    role: "Associate Software Engineer",
    organization: "Ranga Technologies",
    period: "Mar 2026 – Present",
    location: "Hybrid · Sri Lanka & Remote",
    description:
      "Production-ready frontends and full-stack delivery: accessible UI systems, shared component libraries, performance, and GenAI-assisted workflows in live codebases.",
    asideKind: "quote",
    asideText:
      "Promoted from Software Engineer Intern after shipping polished, high-performing customer-facing experiences.",
    asideCaption: "Role change",
    asideIcon: "",
    sortOrder: 1,
  },
  {
    id: "ranga-intern",
    role: "Software Engineer Intern",
    organization: "Ranga Technologies",
    period: "Sep 2025 – Mar 2026",
    location: "Hybrid · Sri Lanka & Remote · Frontend",
    description:
      "Iterated rapidly with cross-functional squads on customer-facing platforms—accessibility, design systems, Lighthouse-focused performance, and code review culture.",
    asideKind: "sketch",
    asideText:
      "Path to Associate: measurable gains in interaction latency and shared UI standards.",
    asideCaption: "",
    asideIcon: "terminal",
    sortOrder: 2,
  },
  {
    id: "nebula",
    role: "Senior Web Developer",
    organization: "Nebula Arcs",
    period: "2024 – 2025",
    location: "Sri Lanka · Remote & on-site",
    description:
      "End-to-end web delivery with designers and clients—Next.js and React builds, performance tuning, and maintainable UI architecture across many shipped products.",
    asideKind: "quote",
    asideText:
      "15+ high-impact projects, stronger load times, and consistent client delivery at agency pace.",
    asideCaption: "Delivery focus",
    asideIcon: "",
    sortOrder: 3,
  },
  {
    id: "nextgen",
    role: "Head Web Developer",
    organization: "NextGen Websites",
    period: "2023 – Present",
    location: "Australia · Remote",
    description:
      "Leading builds and technical direction—scalable React/Node stacks, AWS deployments, mentoring, and ownership across the full project lifecycle.",
    asideKind: "sketch",
    asideText:
      "30+ projects shipped · team leadership · remote-first collaboration.",
    asideCaption: "",
    asideIcon: "groups",
    sortOrder: 4,
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    organization: "Freelance",
    period: "2022 – Present",
    location: "Remote",
    description:
      "Responsive apps for varied clients—React, TypeScript, and strong UI/UX execution with emphasis on clarity and repeat engagement.",
    asideKind: "sketch",
    asideText:
      "15+ successful engagements · strong client ratings · repeat work.",
    asideCaption: "",
    asideIcon: "handshake",
    sortOrder: 5,
  },
  {
    id: "uom",
    role: "Software Engineering (BSc)",
    organization: "University of Moratuwa",
    period: "2023 – Present",
    location: "Moratuwa, Sri Lanka",
    description:
      "Formal foundations in algorithms, software architecture, databases, and modern full-stack practice alongside industry work.",
    asideKind: "sketch",
    asideText:
      "Studies in parallel with professional delivery—Dean's List and competitive project recognition.",
    asideCaption: "",
    asideIcon: "school",
    sortOrder: 6,
  },
];
