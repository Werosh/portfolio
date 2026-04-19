export default function LandingNav() {
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
          className="shrink-0 font-headline text-lg font-bold italic text-slate-900 underline decoration-wavy decoration-[#325bae] dark:text-white sm:text-xl"
        >
          Portfolio
        </a>

        <div className="flex items-center">
          <a
            href="#journal"
            className="hand-drawn-border transform bg-primary px-5 py-2 font-headline text-sm font-bold text-on-primary transition-all hover:-rotate-1"
          >
            Connect
          </a>
        </div>
      </nav>
    </>
  );
}
