export default function LandingFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 border-t-2 border-dashed border-outline-variant/30 px-8 py-12 md:flex-row md:px-20">
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
        <a className="transition-colors hover:text-primary" href="#lab">
          Open_Source
        </a>
        <a className="transition-colors hover:text-primary" href="#journal">
          Private_Keys
        </a>
      </div>
      <div className="font-body text-xs uppercase tracking-widest text-on-surface-variant opacity-60">
        Rendered in Vite | Draft Status: Final
      </div>
    </footer>
  );
}
