import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-900/10 bg-surface/90 px-8 py-4 backdrop-blur-sm dark:bg-slate-950/90">
      <div className="flex items-center gap-8 pl-72">
        <Link
          to="/"
          className="font-headline text-xl font-bold italic text-slate-900 underline decoration-wavy decoration-primary dark:text-white"
        >
          DevDraft_v1.0
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/#portfolio"
            className="font-headline border-b-2 border-primary pb-1 text-sm tracking-tight text-primary"
          >
            Portfolio
          </Link>
          <Link
            to="/#blueprint"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900"
          >
            Blueprint
          </Link>
          <Link
            to="/#journal"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900"
          >
            Journal
          </Link>
          <Link
            to="/#lab"
            className="font-headline text-sm tracking-tight text-slate-500 transition-colors hover:text-slate-900"
          >
            Lab
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4 pl-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-outline" data-icon="search">
            search
          </span>
          <input
            className="font-body w-64 rounded-none border-none bg-surface-container-low py-1.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary"
            placeholder="Search blueprints..."
            type="text"
          />
        </div>
        <Link
          to="/#journal"
          className="font-headline border border-on-surface px-6 py-1.5 text-sm font-bold tracking-tight transition-colors hover:bg-surface-container-high"
        >
          Connect
        </Link>
      </div>
    </header>
  );
}
