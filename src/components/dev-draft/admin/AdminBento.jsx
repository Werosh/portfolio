export default function AdminBento() {
  return (
    <section className="col-span-12 mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
      <div className="relative col-span-1 overflow-hidden bg-surface-container-high p-6">
        <h5 className="mb-4 font-headline text-xs font-bold uppercase tracking-widest">
          Traffic_Log
        </h5>
        <div className="space-y-2">
          <div className="h-1 w-full bg-primary" />
          <div className="h-1 w-3/4 bg-primary opacity-70" />
          <div className="h-1 w-1/2 bg-primary opacity-40" />
        </div>
        <p className="mt-4 font-sketch text-2xl text-on-surface">High Vol.</p>
      </div>
      <div className="col-span-1 flex flex-col justify-between bg-surface-container-high p-6">
        <h5 className="font-headline text-xs font-bold uppercase tracking-widest">
          Error_Stack
        </h5>
        <div className="flex items-end justify-between">
          <span className="font-headline text-4xl font-black text-error">0</span>
          <span className="material-symbols-outlined text-error opacity-30" data-icon="bug_report">
            bug_report
          </span>
        </div>
      </div>
      <div className="col-span-1 bg-surface-container-high p-6">
        <h5 className="mb-2 font-headline text-xs font-bold uppercase tracking-widest">
          Build_Status
        </h5>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 w-full bg-outline-variant/20">
            <div className="h-full w-[65%] bg-primary" />
          </div>
          <span className="font-label text-xs font-bold">65%</span>
        </div>
      </div>
      <div className="scribble-mask relative col-span-1 rotate-1 bg-primary p-6 text-surface">
        <h5 className="mb-2 font-headline text-xs font-bold uppercase tracking-widest">
          Redline_Alert
        </h5>
        <p className="font-body text-xs italic">
          Review the latency spikes in the Frankfurt cluster immediately.
        </p>
        <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-4xl text-surface/30" data-icon="priority_high">
          priority_high
        </span>
      </div>
    </section>
  );
}
