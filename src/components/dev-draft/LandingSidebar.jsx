import PropTypes from "prop-types";

export default function LandingSidebar({ onOpenSettings }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-72 flex-col border-r-2 border-dashed border-slate-300 bg-[#f9f9f7] pt-24 dark:border-slate-700 dark:bg-slate-900 lg:flex">
      <div className="mb-12 px-8">
        <h2 className="font-headline text-2xl font-black tracking-tighter text-[#325bae]">
          Sketch_Rail
        </h2>
        <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
          Visitor view — no backstage pass
        </p>
      </div>
      <nav className="flex flex-col gap-2">
        <a
          href="#hero"
          className="flex rotate-[-1deg] items-center gap-3 bg-[#d9e2ff] px-8 py-3 font-body text-sm uppercase tracking-widest text-[#325bae] shadow-sm dark:bg-[#325bae]/20 dark:text-[#d9e2ff]"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            home
          </span>
          Overview
        </a>
        <a
          className="flex items-center gap-3 px-8 py-3 font-body text-sm uppercase tracking-widest text-slate-600 transition-transform duration-150 hover:translate-x-1 dark:text-slate-400"
          href="#portfolio"
        >
          <span className="material-symbols-outlined">folder_open</span>
          Project Files
        </a>
        <a
          className="flex items-center gap-3 px-8 py-3 font-body text-sm uppercase tracking-widest text-slate-600 transition-transform duration-150 hover:translate-x-1 dark:text-slate-400"
          href="#blueprint"
        >
          <span className="material-symbols-outlined">architecture</span>
          System Specs
        </a>
        <a
          className="flex items-center gap-3 px-8 py-3 font-body text-sm uppercase tracking-widest text-slate-600 transition-transform duration-150 hover:translate-x-1 dark:text-slate-400"
          href="#journal"
        >
          <span className="material-symbols-outlined">edit_note</span>
          Redlines
        </a>
      </nav>
      <div className="mt-auto p-8">
        <button
          type="button"
          onClick={onOpenSettings}
          className="flex w-full items-center gap-3 border-2 border-on-surface py-4 pl-8 text-left text-sm font-bold transition-colors hover:bg-surface-container-highest"
        >
          <span className="material-symbols-outlined text-base">settings</span>
          Settings
        </button>
      </div>
    </aside>
  );
}

LandingSidebar.propTypes = {
  onOpenSettings: PropTypes.func.isRequired,
};
