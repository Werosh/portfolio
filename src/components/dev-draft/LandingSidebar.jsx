import PropTypes from "prop-types";
import {
  Blocks,
  FolderOpen,
  History,
  Home,
  Mail,
  Settings,
} from "lucide-react";
import { LANDING_NAV_SECTIONS } from "./landingNavConfig";

const NAV_ICONS = {
  home: Home,
  blocks: Blocks,
  history: History,
  folderOpen: FolderOpen,
  mail: Mail,
};

export default function LandingSidebar({ activeSection, onOpenSettings }) {
  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-full w-72 flex-col border-r-2 border-dashed border-slate-300 bg-[#f9f9f7] pt-20 dark:border-slate-700 dark:bg-slate-900 lg:flex"
      aria-label="Section navigation"
    >
      <div className="mb-8 px-8 pt-4">
        <h2 className="font-headline text-2xl font-black tracking-tighter text-[#325bae] dark:text-[#d9e2ff]">
          On this page
        </h2>
        <p className="mt-1 font-body text-xs uppercase tracking-widest text-on-surface-variant">
          Scroll to a section
        </p>
      </div>
      <nav className="flex flex-col gap-1 px-4" aria-label="Page sections">
        {LANDING_NAV_SECTIONS.map(({ id, label, icon }) => {
          const active = activeSection === id;
          const Icon = NAV_ICONS[icon] || Home;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 font-body text-sm uppercase tracking-widest transition-colors ${
                active
                  ? "bg-[#d9e2ff] font-semibold text-[#325bae] shadow-sm dark:bg-[#325bae]/30 dark:text-[#d9e2ff]"
                  : "text-slate-600 hover:translate-x-0.5 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800/80"
              }`}
            >
              <Icon
                className="h-5 w-5 shrink-0"
                strokeWidth={active ? 2.4 : 2}
                aria-hidden
              />
              {label}
            </a>
          );
        })}
      </nav>
      <div className="mt-auto p-6">
        <button
          type="button"
          onClick={onOpenSettings}
          className="flex w-full items-center gap-3 border-2 border-on-surface py-3 pl-4 text-left text-sm font-bold transition-colors hover:bg-surface-container-highest dark:border-slate-500"
        >
          <Settings className="h-4 w-4 shrink-0" aria-hidden />
          Settings
        </button>
      </div>
    </aside>
  );
}

LandingSidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onOpenSettings: PropTypes.func.isRequired,
};
