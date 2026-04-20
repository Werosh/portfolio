import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UAParser } from "ua-parser-js";

const CHART_COLORS = [
  "#325bae",
  "#4f7ae0",
  "#6a90ea",
  "#84a6f2",
  "#9fb9f8",
  "#b8cbfb",
];

function toDate(value) {
  if (!value) return null;
  if (typeof value.toDate === "function") {
    const date = value.toDate();
    return Number.isNaN(date.getTime()) ? null : date;
  }
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function detectBrowser(userAgent = "") {
  if (!userAgent) return "Unknown";
  const parsed = UAParser(userAgent);
  return parsed.browser.name || "Unknown";
}

function detectDeviceType(userAgent = "") {
  if (!userAgent) return "Unknown";
  const parsed = UAParser(userAgent);
  const type = parsed.device.type;
  if (!type) return "Desktop";
  if (type === "mobile") return "Mobile";
  if (type === "tablet") return "Tablet";
  if (type === "smarttv") return "Smart TV";
  if (type === "wearable") return "Wearable";
  if (type === "console") return "Console";
  if (type === "embedded") return "Embedded";
  return "Other";
}

function buildTopCounts(visitors, getKey, topLimit = 6) {
  const counts = new Map();
  visitors.forEach((row) => {
    const key = getKey(row) || "Unknown";
    const visits = typeof row.visitCount === "number" ? row.visitCount : 1;
    counts.set(key, (counts.get(key) || 0) + visits);
  });
  return [...counts.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, topLimit);
}

function buildTopUniqueVisitorCounts(visitors, getKey, topLimit = 6) {
  const counts = new Map();
  visitors.forEach((row) => {
    const key = getKey(row) || "Unknown";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, topLimit);
}

function buildDailySeries(visitors, days = 14) {
  const now = new Date();
  const result = [];
  const buckets = new Map();
  for (let i = days - 1; i >= 0; i -= 1) {
    const day = new Date(now);
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - i);
    const key = day.toISOString().slice(0, 10);
    buckets.set(key, 0);
  }

  visitors.forEach((row) => {
    const lastSeen = toDate(row.lastSeenAt);
    if (!lastSeen) return;
    const key = new Date(lastSeen).toISOString().slice(0, 10);
    if (!buckets.has(key)) return;
    const visits = typeof row.visitCount === "number" ? row.visitCount : 1;
    buckets.set(key, (buckets.get(key) || 0) + visits);
  });

  buckets.forEach((value, key) => {
    result.push({
      day: key.slice(5),
      visits: value,
    });
  });
  return result;
}

function StatCard({ label, value, hint }) {
  return (
    <article className="border border-outline-variant/30 bg-surface-container p-4">
      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </p>
      <p className="mt-2 font-headline text-2xl font-bold text-on-surface">{value}</p>
      <p className="mt-1 text-xs text-on-surface-variant">{hint}</p>
    </article>
  );
}

function BrowserTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const value = payload[0]?.value ?? 0;
  return (
    <div className="border border-outline-variant/40 bg-surface px-3 py-2 text-xs text-on-surface shadow">
      <p className="font-label uppercase tracking-widest text-on-surface-variant">
        Browser
      </p>
      <p className="font-headline font-bold text-on-surface">{label || "Unknown"}</p>
      <p className="mt-1 text-on-surface-variant">Visits: {value}</p>
    </div>
  );
}

BrowserTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    }),
  ),
  label: PropTypes.string,
};

BrowserTooltip.defaultProps = {
  active: false,
  payload: [],
  label: "",
};

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hint: PropTypes.string.isRequired,
};

export default function AdminVisitorAnalytics({ visitors, onRefresh, refreshing }) {
  const totalUniqueVisitors = visitors.length;
  const totalVisits = visitors.reduce(
    (sum, row) => sum + (typeof row.visitCount === "number" ? row.visitCount : 1),
    0,
  );
  const avgVisitsPerVisitor =
    totalUniqueVisitors > 0 ? (totalVisits / totalUniqueVisitors).toFixed(2) : "0.00";

  const now = Date.now();
  const visitsLast24h = visitors.reduce((sum, row) => {
    const lastSeen = toDate(row.lastSeenAt);
    if (!lastSeen) return sum;
    if (now - lastSeen.getTime() <= 24 * 60 * 60 * 1000) {
      return sum + (typeof row.visitCount === "number" ? row.visitCount : 1);
    }
    return sum;
  }, 0);

  const countryData = buildTopUniqueVisitorCounts(visitors, (row) => row.country);
  const timezoneData = buildTopCounts(visitors, (row) => row.timezone);
  const browserData = buildTopCounts(visitors, (row) => detectBrowser(row.userAgent), 5);
  const deviceData = buildTopCounts(visitors, (row) => detectDeviceType(row.userAgent), 6);
  const languageData = buildTopCounts(visitors, (row) => row.language, 8);
  const dailySeries = buildDailySeries(visitors, 14);

  return (
    <section className="col-span-12 space-y-6">
      <div className="flex items-center justify-between gap-3 border border-outline-variant/30 bg-surface-container-low px-4 py-3 sm:px-6">
        <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface">
          Visitor analytics
        </h3>
        <button
          type="button"
          onClick={onRefresh}
          disabled={refreshing}
          className="border border-outline-variant px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {refreshing ? "Refreshing..." : "Refresh data"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Unique visitors"
          value={totalUniqueVisitors}
          hint="Unique IP records stored in Firestore."
        />
        <StatCard
          label="Total visits"
          value={totalVisits}
          hint="Summed from `visitCount` across all visitors."
        />
        <StatCard
          label="Avg visits / visitor"
          value={avgVisitsPerVisitor}
          hint="Use this to track repeat engagement."
        />
        <StatCard
          label="Visits in 24h"
          value={visitsLast24h}
          hint="Based on visitors active within the last day."
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Visits trend (14 days)
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailySeries}>
                <CartesianGrid strokeDasharray="3 3" stroke="#adb3b0" />
                <XAxis dataKey="day" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#325bae"
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  name="Visits"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Unique visitors by country
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#adb3b0" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#325bae" name="Unique visitors" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Top timezones
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
                <Pie data={timezoneData} dataKey="value" nameKey="name" outerRadius={95} label>
                  {timezoneData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Browser usage
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={browserData} layout="vertical" margin={{ left: 12, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#adb3b0" />
                <XAxis type="number" allowDecimals={false} />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip content={<BrowserTooltip />} />
                <Legend />
                <Bar dataKey="value" fill="#4f7ae0" name="Visits" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Device usage
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
                <Pie data={deviceData} dataKey="value" nameKey="name" outerRadius={95} label>
                  {deviceData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="h-80 border border-outline-variant/30 bg-surface-container-low p-4">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">
            Language distribution
          </h4>
          <div className="mt-4 h-[16.5rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={languageData}
                layout="vertical"
                margin={{ left: 12, right: 8, top: 8, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#adb3b0" />
                <XAxis type="number" allowDecimals={false} />
                <YAxis dataKey="name" type="category" width={90} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#6a90ea" name="Visits" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}

AdminVisitorAnalytics.propTypes = {
  visitors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      country: PropTypes.string,
      timezone: PropTypes.string,
      language: PropTypes.string,
      userAgent: PropTypes.string,
      visitCount: PropTypes.number,
      lastSeenAt: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ).isRequired,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

AdminVisitorAnalytics.defaultProps = {
  onRefresh: () => {},
  refreshing: false,
};
