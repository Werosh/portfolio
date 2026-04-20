import PropTypes from "prop-types";
import {
  CheckCircle2,
  Cloud,
  Edit3,
  Filter,
  Trash2,
  ArrowUpDown,
} from "lucide-react";

export default function AdminProjectList({ projects, onEdit, onDelete }) {
  return (
    <section id="list" className="col-span-12 space-y-6 lg:col-span-7">
      <div className="mb-4 flex items-end justify-between">
        <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant">
          Active_Schematics
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            className="border border-outline-variant/30 p-2 transition-colors hover:border-primary"
          >
            <Filter className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className="border border-outline-variant/30 p-2 transition-colors hover:border-primary"
          >
            <ArrowUpDown className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {!projects.length && (
          <p className="font-body text-on-surface-variant">
            No projects yet. Commit a blueprint from the form.
          </p>
        )}
        {projects.map((p) => (
          <div
            key={p.id}
            className="group relative flex items-center justify-between overflow-hidden bg-surface-container-low p-6 transition-all hover:translate-x-1 hover:bg-primary-container/20"
          >
            <div className="z-10 flex items-center gap-6">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <svg
                  className="absolute inset-0 h-full w-full -rotate-12"
                  viewBox="0 0 100 100"
                >
                  <path
                    className="text-primary opacity-40"
                    d="M50 10 C 25 10, 10 25, 10 50 S 25 90, 50 90 S 90 75, 90 50 S 75 10, 50 10"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="250"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-headline text-sm font-bold text-primary">
                  {typeof p.sortOrder === "number" && !Number.isNaN(p.sortOrder)
                    ? String(p.sortOrder).padStart(2, "0")
                    : "-"}
                </span>
              </div>
              <div>
                <h4 className="font-headline text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                  {p.title}
                </h4>
                <p className="mt-1 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-secondary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {Array.isArray(p.techStack) ? p.techStack.join(" · ") : ""}
                </p>
              </div>
            </div>
            <div className="z-10 text-right">
              <p className="font-sketch text-lg text-on-surface">Live</p>
              <div className="mt-2 flex justify-end gap-4">
                <button
                  type="button"
                  aria-label="Delete"
                  onClick={() => onDelete(p)}
                  className="cursor-pointer text-on-surface-variant transition-colors hover:text-error"
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Edit"
                  onClick={() => onEdit(p)}
                  className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
                >
                  <Edit3 className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 translate-x-4 translate-y-4 opacity-10">
              <Cloud className="h-24 w-24" aria-hidden />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-between border-t border-dashed border-outline-variant/30 pt-6">
        <div className="flex gap-8">
          <div>
            <span className="font-label block text-[10px] uppercase text-on-surface-variant opacity-60">
              Engine_Uptime
            </span>
            <span className="font-headline font-bold text-on-surface">
              99.982%
            </span>
          </div>
          <div>
            <span className="font-label block text-[10px] uppercase text-on-surface-variant opacity-60">
              Pending_Pull_Requests
            </span>
            <span className="font-headline font-bold text-on-surface">
              {projects.length}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="font-sketch text-sm">System Normal</span>
          <CheckCircle2 className="h-4 w-4" aria-hidden />
        </div>
      </div>
    </section>
  );
}

AdminProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      techStack: PropTypes.arrayOf(PropTypes.string),
      sortOrder: PropTypes.number,
    }),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
