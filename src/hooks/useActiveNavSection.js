import { useLayoutEffect, useState } from "react";
import { LANDING_NAV_SECTIONS } from "../components/dev-draft/landingNavConfig";

/** Matches landing sections’ `scroll-mt-24` (6rem) so hash jumps and spy state align. */
const ACTIVATION_LINE_PX = 96;

function pickActiveId(ids) {
  let active = ids[0];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    const { top } = el.getBoundingClientRect();
    if (top <= ACTIVATION_LINE_PX) active = id;
  }
  return active;
}

/**
 * Tracks which landing section is active for sidebar / nav highlighting.
 * Scroll-position scrollspy (stable with tall sections; aligns with scroll-margin).
 */
export function useActiveNavSection() {
  const [activeId, setActiveId] = useState(() => LANDING_NAV_SECTIONS[0].id);

  useLayoutEffect(() => {
    const ids = LANDING_NAV_SECTIONS.map((s) => s.id);
    let raf = 0;

    const update = () => {
      raf = 0;
      const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!elements.length) return;
      const next = pickActiveId(ids);
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    const syncFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (raw && ids.includes(raw)) {
        setActiveId(raw);
        requestAnimationFrame(update);
        return;
      }
      schedule();
    };

    update();
    requestAnimationFrame(update);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", syncFromHash);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el && ro) ro.observe(el);
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", syncFromHash);
      ro?.disconnect();
    };
  }, []);

  return activeId;
}
