import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-900/10 bg-surface/95 px-4 backdrop-blur-sm dark:border-slate-700/40 dark:bg-slate-950/95 sm:px-8">
      <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-8">
        <Link
          to="/"
          className="shrink-0 font-headline text-lg font-bold italic text-slate-900 underline decoration-wavy decoration-primary dark:text-white sm:text-xl"
        >
          Portfolio
        </Link>
        <span className="hidden truncate font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant sm:inline sm:max-w-[12rem] md:max-w-xs lg:inline">
          Control center
        </span>
        <nav className="hidden items-center gap-4 md:flex lg:gap-6" aria-label="Site preview">
          <Link
            to="/#portfolio"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            Portfolio
          </Link>
          <Link
            to="/#blueprint"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            Experience
          </Link>
          <Link
            to="/#journal"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex shrink-0 items-center">
        <Link
          to="/#journal"
          className="font-headline border border-on-surface px-4 py-1.5 text-xs font-bold tracking-tight transition-colors hover:bg-surface-container-high dark:border-slate-500 sm:px-6 sm:text-sm"
        >
          View site
        </Link>
      </div>
    </header>
  );
}
