
import { Blocks } from "lucide-react";

const SIGNATURE_STACK = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Java",
  "Firebase",
  "MySQL",
  "MongoDB",
  "Node.js",
  "Express",
  "FastAPI",
  "Framer Motion",
  "Git",
  "GitHub",
  "Postman",
  "Netlify",
  "Figma",
  "Python",
];

const TECH_GROUPS = [
  {
    title: "Core frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UI & animation",
    items: ["Framer Motion", "React Icons"],
  },
  {
    title: "Backend & database",
    items: [
      "Firebase",
      "MySQL",
      "MongoDB",
      "Java",
      "Python",
      "Express",
      "Node.js",
      "FastAPI",
      "Custom REST endpoints",
      "Backend integration",
    ],
  },
  {
    title: "Tools & platforms",
    items: ["Git", "GitHub", "Postman", "Netlify"],
  },
  {
    title: "Design & prototyping",
    items: ["Figma"],
  },
  {
    title: "Concepts & practices",
    items: [
      "Full-stack development",
      "Responsive design",
      "Component-based architecture",
      "CRUD operations",
      "REST APIs",
      "State management",
      "Clean code practices",
    ],
  },
  {
    title: "Learning & expanding into",
    items: [
      "Machine learning",
      "Artificial neural networks",
      "Natural language processing",
      "Big data analytics",
    ],
  },
];

export default function CoreTechSection() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-dashed border-outline-variant/35 bg-surface-container px-4 py-16 sm:px-8 sm:py-20 md:px-20"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="stack-heading"
          className="mb-3 flex flex-wrap items-center gap-3 font-headline text-3xl font-bold sm:gap-4 sm:text-4xl md:text-5xl"
        >
          <Blocks className="h-8 w-8 shrink-0 text-primary sm:h-9 sm:w-9" aria-hidden />
          <span className="min-w-0 leading-tight">Tech stack</span>
        </h2>
        <p className="mb-10 max-w-2xl font-body text-base text-on-surface-variant sm:text-lg">
          Full-stack delivery with React and Next.js on the surface, solid
          data and deployment paths underneath, and room mapped for deeper ML
          and data work.
        </p>

        <div className="hand-drawn-border overflow-hidden bg-surface shadow-sm">
          <div className="border-b border-dashed border-outline-variant/40 bg-surface-container-low/50 px-5 py-5 sm:px-8 sm:py-6">
            <p className="font-headline text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              At a glance
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SIGNATURE_STACK.map((name) => (
                <li key={name}>
                  <span className="inline-block border border-primary/25 bg-primary-container/40 px-2.5 py-1 font-headline text-xs font-semibold tracking-tight text-on-primary-container sm:px-3 sm:text-sm">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="px-0 pb-1 sm:pb-2">
            {TECH_GROUPS.map((group) => (
              <div
                key={group.title}
                className="grid grid-cols-1 gap-3 border-b border-dashed border-outline-variant/35 px-5 py-5 last:border-b-0 sm:px-8 sm:py-6 md:grid-cols-[minmax(10rem,13.5rem)_minmax(0,1fr)] md:items-start md:gap-x-10 md:gap-y-2"
              >
                <dt className="font-headline text-sm font-bold leading-snug text-on-surface sm:text-base md:pt-1 md:text-right">
                  <span className="md:block">{group.title}</span>
                </dt>
                <dd className="min-w-0 m-0">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block border border-outline-variant/55 bg-surface-container-high px-3 py-1.5 font-body text-sm text-on-surface">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
