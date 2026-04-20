import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";
import { isFirebaseConfigured } from "../../firebase/app";
import {
  subscribeProjects,
  sortProjectsList,
} from "../../services/projectsApi";
import { buildPageList } from "../../utils/pagination";

const PROJECTS_PER_PAGE_MOBILE = 3;
const PROJECTS_PER_PAGE_DESKTOP = 6;

/** lg matches Tailwind- fewer cards per view on small screens. */
function useProjectsPerPage() {
  const [perPage, setPerPage] = useState(() => {
    if (typeof window === "undefined") return PROJECTS_PER_PAGE_MOBILE;
    return window.matchMedia("(min-width: 1024px)").matches
      ? PROJECTS_PER_PAGE_DESKTOP
      : PROJECTS_PER_PAGE_MOBILE;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () =>
      setPerPage(
        mq.matches ? PROJECTS_PER_PAGE_DESKTOP : PROJECTS_PER_PAGE_MOBILE,
      );
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return perPage;
}

const FALLBACK = [
  {
    id: "f1",
    sortOrder: 1,
    title: "Vellum.js Framework",
    description:
      "A lightweight CSS-in-JS library designed for high-performance rendering of canvas-based UI elements.",
    techStack: ["TypeScript", "WebAssembly", "Rust"],
    link: "",
  },
  {
    id: "f2",
    sortOrder: 2,
    title: "Graphite Analytics",
    description:
      "Real-time data visualization engine that renders complex datasets as architectural sketches.",
    techStack: ["Python", "D3.js", "AWS"],
    link: "",
  },
  {
    id: "f3",
    sortOrder: 3,
    title: "NeuroLink Core",
    description:
      "An experimental neural network interface focused on edge-computing efficiency and modular design.",
    techStack: ["Go", "Kubernetes", "TensorFlow"],
    link: "",
  },
];

function normalizeTech(raw) {
  if (Array.isArray(raw)) return raw.map(String).filter(Boolean);
  if (typeof raw === "string" && raw.trim()) {
    return raw
      .split(/[,|]/g)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function ProjectCard({ project, entryIndex }) {
  const { title, description, techStack, link } = project;
  const tags = normalizeTech(techStack);
  const rotations = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
  ];
  const figNo = String(entryIndex).padStart(2, "0");
  const href = typeof link === "string" && link.trim() ? link.trim() : null;

  return (
    <div className="hand-drawn-border group bg-surface p-6 transition-colors hover:bg-surface-container">
      <div className="hand-drawn-border relative mb-6 flex min-h-[10rem] flex-col justify-between border-dashed border-outline-variant/60 bg-surface-container-low p-5">
        <span className="font-sketch text-sm text-on-surface-variant">
          Fig.{figNo} - spec sheet
        </span>
        <p className="font-headline text-4xl font-black leading-none tracking-tighter text-on-surface/90">
          {title.slice(0, 1)}
        </p>
        <div className="border-t border-dashed border-outline-variant/50" />
      </div>
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 flex-1 font-headline text-xl font-bold break-words sm:text-2xl">
          {title}
        </h3>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-primary transition-transform hover:rotate-45"
            aria-label={`Open ${title} in a new tab`}
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
          </a>
        ) : (
          <span className="shrink-0 text-on-surface-variant/40">
            <ExternalLink className="h-5 w-5" aria-hidden />
          </span>
        )}
      </div>
      <p className="mb-6 font-body text-on-surface-variant">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span
            key={`${title}-${t}-${i}`}
            className={`bg-secondary-container px-3 py-1 font-sketch text-sm ${rotations[i % rotations.length]}`}
          >
            {t}
          </span>
        ))}
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-headline text-sm font-bold text-primary underline decoration-dotted underline-offset-4 hover:opacity-80"
        >
          View deployment →
        </a>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    link: PropTypes.string,
  }).isRequired,
  entryIndex: PropTypes.number.isRequired,
};

function ProjectsPagination({
  page,
  totalPages,
  totalItems,
  onPageChange,
  itemsPerPage,
}) {
  const pages = buildPageList(page, totalPages);
  const itemsWithEllipsis = [];
  let prev = 0;
  for (const p of pages) {
    if (p - prev > 1) itemsWithEllipsis.push("ellipsis");
    itemsWithEllipsis.push(p);
    prev = p;
  }

  const from = totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const to = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="mx-auto mt-12 max-w-7xl border-t border-dashed border-outline-variant/40 pt-10">
      <p className="mb-6 text-center font-body text-sm text-on-surface-variant">
        Showing{" "}
        <span className="font-headline font-bold text-on-surface">
          {from}–{to}
        </span>{" "}
        of{" "}
        <span className="font-headline font-bold text-on-surface">
          {totalItems}
        </span>{" "}
        blueprints
      </p>
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="hand-drawn-border px-6 py-3 font-headline text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Prev sheet
        </button>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {itemsWithEllipsis.map((item, idx) =>
            item === "ellipsis" ? (
              <span
                key={`e-${idx}`}
                className="font-sketch px-1 text-on-surface-variant"
                aria-hidden
              >
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                onClick={() => onPageChange(item)}
                className={`min-w-[2.5rem] px-3 py-2 font-headline text-sm font-bold transition-colors ${
                  item === page
                    ? "hand-drawn-border bg-primary text-on-primary"
                    : "border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary"
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="hand-drawn-border px-6 py-3 font-headline text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next sheet →
        </button>
      </div>
      <p className="mt-4 text-center font-sketch text-sm text-secondary">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

ProjectsPagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default function ProjectsSection() {
  const [remote, setRemote] = useState([]);
  const [loading, setLoading] = useState(isFirebaseConfigured());
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);
  const projectsPerPage = useProjectsPerPage();

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return undefined;
    }
    const unsub = subscribeProjects((list) => {
      setRemote(list);
      setLoading(false);
    });
    return unsub;
  }, []);

  const displayed = useMemo(() => {
    if (!isFirebaseConfigured()) return sortProjectsList(FALLBACK);
    if (loading) return [];
    if (!remote.length) return sortProjectsList(FALLBACK);
    return sortProjectsList(
      remote.map((p) => ({
        id: p.id,
        sortOrder: p.sortOrder,
        title: p.title ?? "",
        description: p.description ?? "",
        techStack: p.techStack,
        link: p.link ?? "",
      })),
    );
  }, [remote, loading]);

  const totalItems = displayed.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / projectsPerPage));

  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const sliceStart = (page - 1) * projectsPerPage;
  const pageItems = displayed.slice(sliceStart, sliceStart + projectsPerPage);

  const handlePageChange = (next) => {
    const clamped = Math.max(1, Math.min(next, totalPages));
    setPage(clamped);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showPagination = !loading && totalItems > projectsPerPage;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-24 md:px-20"
    >
      <h2 className="mb-10 text-center font-headline text-3xl font-bold tracking-tight sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
        Blueprinted Projects
      </h2>
      {loading ? (
        <p className="text-center font-body text-on-surface-variant">
          Loading blueprints…
        </p>
      ) : (
        <>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 xl:grid-cols-3">
            {pageItems.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                entryIndex={sliceStart + i + 1}
              />
            ))}
          </div>
          {showPagination && (
            <ProjectsPagination
              page={page}
              totalPages={totalPages}
              totalItems={totalItems}
              onPageChange={handlePageChange}
              itemsPerPage={projectsPerPage}
            />
          )}
        </>
      )}
      {!isFirebaseConfigured() && (
        <p className="mt-8 text-center font-body text-sm text-on-surface-variant">
          Showing sample blueprints until the live archive is connected.
        </p>
      )}
      <div className="mt-20 text-center">
        <a
          href="#journal"
          className="inline-block border-2 border-dashed border-primary px-12 py-4 font-headline text-xl font-bold text-primary transition-colors hover:bg-primary-container"
        >
          Start a transmission
        </a>
      </div>
    </section>
  );
}
