import { useEffect, useState } from "react";
import { LANDING_NAV_SECTIONS } from "../components/dev-draft/landingNavConfig";

/**
 * Tracks which landing section is most in view for nav / sidebar highlighting.
 */
export function useActiveNavSection() {
  const [activeId, setActiveId] = useState(LANDING_NAV_SECTIONS[0].id);

  useEffect(() => {
    const ids = LANDING_NAV_SECTIONS.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-64px 0px -42% 0px",
        threshold: [0, 0.08, 0.2, 0.35, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    const syncFromHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (raw && ids.includes(raw)) setActiveId(raw);
    };
    window.addEventListener("hashchange", syncFromHash);
    syncFromHash();

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return activeId;
}
