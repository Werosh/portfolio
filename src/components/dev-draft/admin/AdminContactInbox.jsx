import PropTypes from "prop-types";

function formatWhen(ts) {
  if (!ts) return "-";
  if (typeof ts.toDate === "function") {
    try {
      return ts.toDate().toLocaleString();
    } catch {
      return "-";
    }
  }
  return "-";
}

export default function AdminContactInbox({ messages, onDelete, busy }) {
  return (
    <section className="col-span-12 space-y-6">
      <div>
        <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-on-surface">
          Inbox
        </h3>
      </div>
      {!messages.length ? (
        <p className="font-body text-on-surface-variant">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((row) => (
            <li
              key={row.id}
              className="border border-outline-variant/40 bg-surface-container-low p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-headline text-lg font-bold text-on-surface">
                    {row.name || "-"}
                  </p>
                  <a
                    href={`mailto:${encodeURIComponent(row.email || "")}`}
                    className="font-body text-sm text-primary underline decoration-dotted"
                  >
                    {row.email}
                  </a>
                  <p className="mt-1 font-body text-xs text-on-surface-variant">
                    {formatWhen(row.submittedAt)}
                  </p>
                </div>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => onDelete(row)}
                  className="shrink-0 border border-outline-variant px-3 py-1.5 font-headline text-xs font-bold uppercase tracking-wider text-error hover:bg-error/10 disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
              <p className="mt-4 whitespace-pre-wrap border-t border-dashed border-outline-variant/40 pt-4 font-body text-sm text-on-surface-variant">
                {row.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

AdminContactInbox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      message: PropTypes.string,
      submittedAt: PropTypes.object,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
};
