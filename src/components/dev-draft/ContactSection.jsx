export default function ContactSection() {
  return (
    <section
      id="journal"
      className="scroll-mt-24 relative flex min-h-screen items-center overflow-hidden bg-surface px-8 py-24 md:px-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-5">
        <div className="absolute right-0 top-0 mt-20 -mr-40 h-[800px] w-[800px] rotate-12 border border-on-surface" />
        <div className="absolute right-0 top-0 mt-24 -mr-32 h-[800px] w-[800px] rotate-[14deg] border border-on-surface" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-headline text-6xl font-extrabold tracking-tight">
            Initiate <br />
            Transmission
          </h2>
          <p className="font-body max-w-md text-2xl text-on-surface-variant">
            Ready to start a new technical draft? Drop a note below or reach
            out via direct channels.
          </p>
          <div className="space-y-4 pt-8">
            <div className="group flex cursor-pointer items-center gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a
                href="mailto:hello@werosh.dev"
                className="font-headline text-xl underline decoration-dotted transition-colors group-hover:text-primary"
              >
                hello@werosh.dev
              </a>
            </div>
            <div className="group flex cursor-pointer items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                terminal
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-headline text-xl underline decoration-dotted transition-colors group-hover:text-primary"
              >
                github.com/werosh
              </a>
            </div>
          </div>
          <div className="masking-tape relative mt-12 inline-block rotate-[-2deg] bg-tertiary-container p-6">
            <p className="font-sketch text-lg">
              &quot;The best way to predict the future is to draft it.&quot;
            </p>
            <p className="mt-2 text-xs font-bold opacity-60">
              — Logbook_Note_2026
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="signature-smudge absolute -inset-4 -z-10 blur-2xl" />
          <form
            className="hand-drawn-border space-y-8 bg-surface p-10 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="font-sketch text-lg text-secondary">
                Identifier / Name
              </label>
              <input
                className="font-body w-full border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="e.g. Project Lead Zero"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-sketch text-lg text-secondary">
                Return Link / Email
              </label>
              <input
                className="font-body w-full border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="comms@hq.tech"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="font-sketch text-lg text-secondary">
                Technical Specification / Message
              </label>
              <textarea
                className="font-body w-full resize-none border-0 border-b-2 border-outline bg-transparent text-xl placeholder:opacity-30 focus:border-primary focus:ring-0"
                placeholder="Describe your blueprint..."
                rows={4}
              />
            </div>
            <button
              className="font-headline w-full border-[3px] border-on-surface bg-surface py-6 text-2xl font-black uppercase tracking-tighter text-on-surface transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary hover:text-on-primary active:scale-95"
              type="submit"
            >
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
