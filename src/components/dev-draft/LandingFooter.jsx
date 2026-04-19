export default function LandingFooter() {
  return (
    <footer className="flex flex-col gap-8 border-t-2 border-dashed border-outline-variant/30 px-4 py-10 sm:px-8 sm:py-12 md:px-20">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="font-headline text-lg font-bold">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary italic underline decoration-wavy">
            WEROSH_KRIYANJALA
          </span>
        </div>
        <div className="flex gap-8 font-sketch text-xl text-secondary">
          <a className="transition-colors hover:text-primary" href="#portfolio">
            Vellum_v1.0
          </a>
          <a className="transition-colors hover:text-primary" href="#journal">
            Private_Keys
          </a>
        </div>
        <div className="font-body text-xs uppercase tracking-widest text-on-surface-variant opacity-60">
          Vite-forged • manuscript sealed - no further revisions
        </div>
      </div>
      <p className="font-body mx-auto max-w-2xl text-center text-xs leading-relaxed text-on-surface-variant opacity-70 md:text-sm">
        Full-stack portfolio backed by an admin panel. <br />
        projects and experience sections are updated from there instead of
        hard-coding copy on the site.
      </p>
    </footer>
  );
}
