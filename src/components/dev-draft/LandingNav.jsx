export default function LandingNav() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-900/10 bg-[#f9f9f7]/90 px-8 py-4 font-headline tracking-tight backdrop-blur-sm dark:bg-slate-950/90">
      <div className="text-xl font-bold italic text-slate-900 underline decoration-wavy decoration-[#325bae] dark:text-white">
        DevDraft_v1.0
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <a
          className="border-b-2 border-[#325bae] pb-1 text-[#325bae] transition-colors hover:bg-slate-100/50 dark:border-[#d9e2ff] dark:text-[#d9e2ff]"
          href="#portfolio"
        >
          Portfolio
        </a>
        <a
          className="text-slate-500 transition-colors hover:bg-slate-100/50 hover:text-slate-900 dark:text-slate-400"
          href="#blueprint"
        >
          Blueprint
        </a>
        <a
          className="text-slate-500 transition-colors hover:bg-slate-100/50 hover:text-slate-900 dark:text-slate-400"
          href="#journal"
        >
          Journal
        </a>
        <a
          className="text-slate-500 transition-colors hover:bg-slate-100/50 hover:text-slate-900 dark:text-slate-400"
          href="#lab"
        >
          Lab
        </a>
        <a
          href="#journal"
          className="hand-drawn-border ml-4 transform bg-primary px-6 py-2 font-bold text-on-primary transition-all hover:-rotate-1"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
