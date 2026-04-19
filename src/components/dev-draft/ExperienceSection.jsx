import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isFirebaseConfigured } from "../../firebase/app";
import {
  mapExperienceToEntry,
  subscribeExperiences,
} from "../../services/experienceApi";
import { EXPERIENCE_SEEDS } from "../../data/experienceSeeds";
import { buildPageList } from "../../utils/pagination";

/* eslint-disable react/prop-types -- small presentational helpers below */
/** Fewer rows per page than projects - each milestone is tall. */
const EXPERIENCE_PER_PAGE = 3;

const FALLBACK_ENTRIES = EXPERIENCE_SEEDS.map((s) =>
  mapExperienceToEntry(s.id, s),
);

function TimelineDot({ variant }) {
  const isPrimary = variant === "primary";
  return (
    <div
      className={`order-1 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-surface-container-highest md:order-2 ${
        isPrimary ? "border-primary" : "border-outline-variant"
      }`}
    >
      <div
        className={`h-3 w-3 rounded-full ${
          isPrimary ? "bg-primary" : "bg-on-surface-variant"
        }`}
      />
    </div>
  );
}

function SidePanel({ side }) {
  if (!side) return <div className="order-3 flex-1 md:order-3" />;

  if (side.kind === "quote") {
    return (
      <div className="order-3 flex-1 md:order-3">
        <div className="hand-drawn-border max-w-xs rotate-1 bg-surface p-4 md:mx-0">
          <p className="font-sketch text-sm">&quot;{side.text}&quot;</p>
          {side.attribution ? (
            <p className="mt-2 text-right text-xs font-bold">
              {side.attribution}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  if (side.kind === "sketch") {
    return (
      <div className="order-3 flex-1 md:order-3">
        <div className="hand-drawn-border max-w-xs rotate-1 border border-dashed border-outline-variant bg-surface p-4 md:mx-0">
          <span
            className="material-symbols-outlined text-secondary opacity-70"
            aria-hidden
          >
            {side.icon || "sticky_note_2"}
          </span>
          <p className="mt-2 font-sketch text-xs leading-relaxed">
            {side.text}
          </p>
        </div>
      </div>
    );
  }

  return <div className="order-3 flex-1 md:order-3" />;
}

function SidePanelLeft({ side }) {
  if (!side) {
    return <div className="order-2 hidden flex-1 md:order-1 md:block" />;
  }
  if (side.kind === "quote") {
    return (
      <div className="order-2 hidden flex-1 md:order-1 md:block">
        <div className="ml-auto max-w-xs rotate-[-2deg] border border-dashed border-outline-variant bg-white/50 p-4">
          <p className="font-sketch text-xs leading-relaxed">
            &quot;{side.text}&quot;
          </p>
          {side.attribution ? (
            <p className="mt-2 text-right text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
              {side.attribution}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className="order-2 hidden flex-1 md:order-1 md:block">
      <div className="ml-auto max-w-xs rotate-[-2deg] border border-dashed border-outline-variant bg-white/50 p-4">
        <span
          className="material-symbols-outlined text-secondary opacity-50"
          aria-hidden
        >
          {side.icon || "sticky_note_2"}
        </span>
        <p className="mt-2 font-sketch text-xs leading-relaxed">{side.text}</p>
      </div>
    </div>
  );
}

function MainBlock({ entry, textRight }) {
  return (
    <div
      className={`flex-1 ${
        textRight ? "order-2 text-right md:order-1" : "order-3 md:order-3"
      }`}
    >
      <h3 className="font-headline text-2xl font-bold md:text-3xl">
        {entry.role}
      </h3>
      <p className="mb-1 font-sketch text-lg text-primary md:text-xl">
        {entry.organization} <span className="text-on-surface-variant">·</span>{" "}
        {entry.period}
      </p>
      {entry.location ? (
        <p className="mb-3 font-body text-sm text-on-surface-variant">
          {entry.location}
        </p>
      ) : null}
      <p className="text-on-surface-variant">{entry.description}</p>
    </div>
  );
}

function ExperiencePagination({ page, totalPages, totalItems, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = buildPageList(page, totalPages);
  const itemsWithEllipsis = [];
  let prev = 0;
  for (const p of pages) {
    if (p - prev > 1) itemsWithEllipsis.push("ellipsis");
    itemsWithEllipsis.push(p);
    prev = p;
  }

  const from = totalItems === 0 ? 0 : (page - 1) * EXPERIENCE_PER_PAGE + 1;
  const to = Math.min(page * EXPERIENCE_PER_PAGE, totalItems);

  return (
    <div className="mx-auto mt-16 max-w-5xl border-t border-dashed border-outline-variant/40 pt-10">
      <p className="mb-6 text-center font-body text-sm text-on-surface-variant">
        Showing{" "}
        <span className="font-headline font-bold text-on-surface">
          {from}–{to}
        </span>{" "}
        of{" "}
        <span className="font-headline font-bold text-on-surface">
          {totalItems}
        </span>{" "}
        milestones
        <span className="sr-only">
          {" "}
          - use pagination to avoid long scrolling
        </span>
      </p>
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="hand-drawn-border px-6 py-3 font-headline text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-container disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Previous
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
          Next →
        </button>
      </div>
      <p className="mt-4 text-center font-sketch text-sm text-secondary">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}

ExperiencePagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default function ExperienceSection() {
  const [remote, setRemote] = useState([]);
  const [loading, setLoading] = useState(isFirebaseConfigured());
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return undefined;
    }
    const unsub = subscribeExperiences((list) => {
      setRemote(list);
      setLoading(false);
    });
    return unsub;
  }, []);

  const entries = useMemo(() => {
    if (!isFirebaseConfigured()) return FALLBACK_ENTRIES;
    if (loading) return [];
    if (!remote.length) return [];
    return remote.map((row) => mapExperienceToEntry(row.id, row));
  }, [remote, loading]);

  const totalItems = entries.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / EXPERIENCE_PER_PAGE));

  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const sliceStart = (page - 1) * EXPERIENCE_PER_PAGE;
  const pageEntries = entries.slice(
    sliceStart,
    sliceStart + EXPERIENCE_PER_PAGE,
  );

  const handlePageChange = (next) => {
    const clamped = Math.max(1, Math.min(next, totalPages));
    setPage(clamped);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showPagination = !loading && totalItems > EXPERIENCE_PER_PAGE;

  return (
    <section
      ref={sectionRef}
      id="blueprint"
      className="scroll-mt-24 bg-surface-container-low px-8 py-24 md:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex flex-wrap items-center gap-4 font-headline text-4xl font-bold md:text-5xl">
          <span
            className="material-symbols-outlined text-4xl text-primary"
            aria-hidden
          >
            history_edu
          </span>
          Experience timeline
        </h2>
        {!isFirebaseConfigured() && (
          <p className="mb-10 max-w-2xl font-body text-sm text-on-surface-variant">
            Connect Firebase to edit this timeline from the control center.
            Until then, sample milestones are shown below.
          </p>
        )}
        {loading ? (
          <p className="text-center font-body text-on-surface-variant">
            Loading timeline…
          </p>
        ) : entries.length === 0 ? (
          <p className="max-w-xl font-body text-on-surface-variant">
            No experience entries in Firestore yet. Sign in at{" "}
            <span className="font-mono text-primary">/control-center</span> and
            add milestones, or run{" "}
            <code className="text-primary">npm run seed:projects</code> to load
            defaults.
          </p>
        ) : (
          <>
            <div className="relative space-y-20 md:space-y-24">
              <div
                className="vertical-dashed-lead pointer-events-none absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 md:left-1/2"
                aria-hidden
              />
              {pageEntries.map((entry, index) => {
                const globalIndex = sliceStart + index;
                const mainLeft = globalIndex % 2 === 0;
                const dotVariant = globalIndex === 0 ? "primary" : "muted";
                return (
                  <div
                    key={entry.id}
                    className="relative flex flex-col items-center gap-8 md:flex-row md:gap-16"
                  >
                    {mainLeft ? (
                      <>
                        <MainBlock entry={entry} textRight />
                        <TimelineDot variant={dotVariant} />
                        <SidePanel side={entry.side} />
                      </>
                    ) : (
                      <>
                        <SidePanelLeft side={entry.side} />
                        <TimelineDot variant={dotVariant} />
                        <MainBlock entry={entry} textRight={false} />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {showPagination && (
              <ExperiencePagination
                page={page}
                totalPages={totalPages}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
