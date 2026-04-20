import PropTypes from "prop-types";
import { Edit3, Trash2 } from "lucide-react";

export default function AdminExperienceList({ experiences, onEdit, onDelete }) {
  return (
    <section
      id="experience-list"
      className="col-span-12 space-y-6 lg:col-span-7"
    >
      <div className="mb-4 flex items-end justify-between">
        <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant">
          Timeline_Index
        </h3>
      </div>
      <div className="space-y-4">
        {!experiences.length && (
          <p className="font-body text-on-surface-variant">
            No experience rows yet. Add one from the form, or run{" "}
            <code className="text-primary">npm run seed:projects</code> (seeds
            projects and this timeline).
          </p>
        )}
        {experiences.map((row) => (
          <div
            key={row.id}
            className="group relative flex items-center justify-between overflow-hidden bg-surface-container-low p-5 transition-all hover:translate-x-1 hover:bg-primary-container/20"
          >
            <div className="z-10 flex min-w-0 flex-1 items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-outline-variant/40 font-headline text-xs font-bold text-primary">
                {typeof row.sortOrder === "number" &&
                !Number.isNaN(row.sortOrder)
                  ? String(row.sortOrder).padStart(2, "0")
                  : "-"}
              </div>
              <div className="min-w-0">
                <h4 className="font-headline text-base font-bold text-on-surface">
                  {row.role}
                </h4>
                <p className="truncate font-body text-sm text-on-surface-variant">
                  {row.organization} · {row.period}
                </p>
              </div>
            </div>
            <div className="z-10 flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Delete"
                onClick={() => onDelete(row)}
                className="cursor-pointer text-on-surface-variant transition-colors hover:text-error"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Edit"
                onClick={() => onEdit(row)}
                className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
              >
                <Edit3 className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

AdminExperienceList.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      role: PropTypes.string,
      organization: PropTypes.string,
      period: PropTypes.string,
      sortOrder: PropTypes.number,
    }),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
