import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { LANDING_NAV_SECTIONS } from "./landingNavConfig";

function navLinkClass(isActive) {
  return `font-headline text-sm tracking-tight transition-colors ${
    isActive
      ? "border-b-2 border-primary pb-1 text-primary"
      : "border-b-2 border-transparent pb-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
  }`;
}

export default function LandingNav({
  activeSection,
  mobileOpen,
  onMobileOpenChange,
  onOpenSettings,
}) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onMobileOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, onMobileOpenChange]);

  const closeMobile = () => onMobileOpenChange(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-900/10 bg-[#f9f9f7]/95 px-4 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-950/95 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={closeMobile}
          className="shrink-0 font-headline text-lg font-bold italic text-slate-900 underline decoration-wavy decoration-[#325bae] dark:text-white sm:text-xl"
        >
          DevDraft_v1.0
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {LANDING_NAV_SECTIONS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={navLinkClass(activeSection === id)}>
              {label}
            </a>
          ))}
          <a
            href="#journal"
            className="hand-drawn-border ml-2 transform bg-primary px-5 py-2 font-headline text-sm font-bold text-on-primary transition-all hover:-rotate-1 sm:ml-4"
          >
            Connect
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-outline-variant text-on-surface dark:border-slate-600"
            aria-expanded={mobileOpen}
            aria-controls="landing-mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => onMobileOpenChange(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden>
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          id="landing-mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Page sections"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100vw,20rem)] flex-col border-l border-outline-variant bg-surface shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-16 items-center justify-between border-b border-outline-variant/60 px-4">
              <span className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                On this page
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high"
                aria-label="Close menu"
                onClick={closeMobile}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Sections">
              {LANDING_NAV_SECTIONS.map(({ id, label, icon }, i) => (
                <a
                  key={id}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`#${id}`}
                  onClick={closeMobile}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 font-body text-sm font-semibold uppercase tracking-widest transition-colors ${
                    activeSection === id
                      ? "bg-primary-container text-on-primary-container"
                      : "text-slate-700 hover:bg-surface-container-high dark:text-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden>
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
              <a
                href="#journal"
                onClick={closeMobile}
                className="mt-2 border-2 border-primary px-4 py-3 text-center font-headline text-sm font-bold text-primary"
              >
                Connect
              </a>
              <button
                type="button"
                onClick={() => {
                  onOpenSettings();
                  closeMobile();
                }}
                className="mt-auto flex items-center gap-3 border-t border-outline-variant/60 px-4 py-4 text-left font-body text-sm font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined">settings</span>
                Settings
              </button>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

LandingNav.propTypes = {
  activeSection: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onMobileOpenChange: PropTypes.func.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};
