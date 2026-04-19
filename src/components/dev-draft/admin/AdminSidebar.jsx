import { Link } from "react-router-dom";

const linkClass =
  "text-slate-600 dark:text-slate-400 py-3 px-6 flex items-center gap-3 hover:translate-x-1 transition-transform duration-150 group";

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-72 flex-col border-r-2 border-dashed border-slate-300 bg-surface pt-20 dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-8 px-8">
        <h1 className="font-headline text-2xl font-black tracking-tighter text-primary">
          Admin_Console
        </h1>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-on-surface-variant opacity-70">
          Drafting Mode Active
        </p>
      </div>
      <nav className="flex-1 space-y-1">
        <span className="flex rotate-[-1deg] items-center gap-3 bg-primary-container px-6 py-3 text-primary shadow-sm transition-transform duration-150 dark:bg-primary/20 dark:text-primary-fixed-dim">
          <span
            className="material-symbols-outlined"
            data-icon="dashboard"
          >
            dashboard
          </span>
          <span className="font-label text-sm font-semibold uppercase tracking-widest">
            Dashboard
          </span>
        </span>
        <a className={linkClass} href="#spec">
          <span className="material-symbols-outlined group-hover:text-primary" data-icon="folder_open">
            folder_open
          </span>
          <span className="font-label text-sm uppercase tracking-widest">
            Project Files
          </span>
        </a>
        <a className={linkClass} href="#spec">
          <span className="material-symbols-outlined group-hover:text-primary" data-icon="architecture">
            architecture
          </span>
          <span className="font-label text-sm uppercase tracking-widest">
            System Specs
          </span>
        </a>
        <a className={linkClass} href="#list">
          <span className="material-symbols-outlined group-hover:text-primary" data-icon="edit_note">
            edit_note
          </span>
          <span className="font-label text-sm uppercase tracking-widest">
            Redlines
          </span>
        </a>
        <a className={linkClass} href="#list">
          <span className="material-symbols-outlined group-hover:text-primary" data-icon="inventory_2">
            inventory_2
          </span>
          <span className="font-label text-sm uppercase tracking-widest">
            Archive
          </span>
        </a>
      </nav>
      <div className="px-6 mb-8">
        <a
          href="#spec"
          className="scribble-mask block w-full bg-on-surface py-4 px-2 text-center font-headline text-sm font-bold uppercase tracking-widest text-surface transition-colors hover:bg-primary"
        >
          New Specification
        </a>
      </div>
      <div className="mt-auto border-t border-dashed border-outline-variant/30 py-6">
        <Link to="/" className={linkClass}>
          <span className="material-symbols-outlined" data-icon="home">
            home
          </span>
          <span className="font-label text-sm uppercase tracking-widest">
            View Site
          </span>
        </Link>
      </div>
    </aside>
  );
}
