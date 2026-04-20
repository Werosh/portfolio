import PropTypes from "prop-types";
import { getVisitorTrackingDebugStatus } from "../../../services/visitorTrackingApi";

function formatDate(ts) {
  if (!ts) return "—";
  const value = typeof ts.toDate === "function" ? ts.toDate() : new Date(ts);
  if (Number.isNaN(value.getTime())) return "—";
  return value.toLocaleString();
}

function formatLocation(row) {
  const parts = [row.city, row.region, row.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "Unknown";
}

export default function AdminVisitorLogs({ visitors, onRefresh, refreshing }) {
  const debugStatus = getVisitorTrackingDebugStatus();

  return (
    <section className="col-span-12 border border-outline-variant/30 bg-surface-container-low">
      <div className="flex items-center justify-between gap-3 border-b border-outline-variant/30 px-4 py-3 sm:px-6">
        <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface">
          Visitor tracking log
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant">
            {visitors.length} records
          </span>
          <button
            type="button"
            onClick={onRefresh}
            disabled={refreshing}
            className="border border-outline-variant px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {visitors.length === 0 ? (
        <div className="px-4 py-8 text-sm text-on-surface-variant sm:px-6">
          No visitor data yet.
          {debugStatus ? (
            <p className="mt-3 text-xs text-on-surface-variant">
              Tracker status: {debugStatus.status} at {debugStatus.at}
              {debugStatus.message ? ` (${debugStatus.message})` : ""}
            </p>
          ) : null}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-xs text-on-surface-variant">
            <thead className="bg-surface-container-high text-[11px] uppercase tracking-wide text-on-surface">
              <tr>
                <th className="px-4 py-3 sm:px-6">IP</th>
                <th className="px-4 py-3 sm:px-6">Location</th>
                <th className="px-4 py-3 sm:px-6">ISP</th>
                <th className="px-4 py-3 sm:px-6">Visits</th>
                <th className="px-4 py-3 sm:px-6">First seen</th>
                <th className="px-4 py-3 sm:px-6">Last seen</th>
                <th className="px-4 py-3 sm:px-6">Timezone</th>
                <th className="px-4 py-3 sm:px-6">Language</th>
                <th className="px-4 py-3 sm:px-6">Device</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-outline-variant/20 align-top"
                >
                  <td className="px-4 py-3 font-mono text-[11px] text-on-surface sm:px-6">
                    {row.ip || "Unknown"}
                  </td>
                  <td className="px-4 py-3 sm:px-6">{formatLocation(row)}</td>
                  <td className="px-4 py-3 sm:px-6">{row.isp || "—"}</td>
                  <td className="px-4 py-3 font-semibold text-on-surface sm:px-6">
                    {typeof row.visitCount === "number" ? row.visitCount : 1}
                  </td>
                  <td className="px-4 py-3 sm:px-6">{formatDate(row.createdAt)}</td>
                  <td className="px-4 py-3 sm:px-6">{formatDate(row.lastSeenAt)}</td>
                  <td className="px-4 py-3 sm:px-6">{row.timezone || "—"}</td>
                  <td className="px-4 py-3 sm:px-6">{row.language || "—"}</td>
                  <td
                    className="max-w-[18rem] truncate px-4 py-3 sm:px-6"
                    title={row.userAgent || ""}
                  >
                    {row.userAgent || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

AdminVisitorLogs.propTypes = {
  visitors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ip: PropTypes.string,
      city: PropTypes.string,
      region: PropTypes.string,
      country: PropTypes.string,
      isp: PropTypes.string,
      timezone: PropTypes.string,
      language: PropTypes.string,
      userAgent: PropTypes.string,
      createdAt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      lastSeenAt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      visitCount: PropTypes.number,
    }),
  ).isRequired,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

AdminVisitorLogs.defaultProps = {
  onRefresh: () => {},
  refreshing: false,
};
