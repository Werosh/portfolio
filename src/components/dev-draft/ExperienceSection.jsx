const DESK_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWHVf898lVS1Y_lIqF4adH1x77vicPu8-gXzRu_p0RtSx5jkObM17DDOa95KJwu-M4pvsvbmWdnnMgE8am2AR6g1HdN5z9fLk3ek_OMo_imoQ64NaZdPddC2qqSL29lyZWlonxQlIxUjUuPwImlWMTlBy-4O5uKWXAreRXDQrGaQ4Vxy3cXzMfQRFrp0a0lSpTHz0MWTPnOJyRNZJrUNIi1zDfQeEpVkE-dzxOwJeqZ7Qyzflek0PslsjuD2J7iS5mEgOWQYO27On";

export default function ExperienceSection() {
  return (
    <section
      id="blueprint"
      className="scroll-mt-24 bg-surface-container-low px-8 py-24 md:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-20 flex items-center gap-4 font-headline text-5xl font-bold">
          <span className="material-symbols-outlined text-4xl text-primary">
            history_edu
          </span>
          Project Timeline
        </h2>
        <div className="relative space-y-24">
          <div className="vertical-dashed-lead absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 md:left-1/2" />
          <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="order-2 flex-1 text-right md:order-1">
              <h3 className="font-headline text-3xl font-bold">
                Lead Systems Engineer
              </h3>
              <p className="mb-4 font-sketch text-xl text-primary">
                MetaStructures Inc. (2021-Present)
              </p>
              <p className="text-on-surface-variant">
                Orchestrated the migration of legacy monolithic architectures to
                high-performance microservices, reducing latency by 40%.
              </p>
            </div>
            <div className="order-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-surface-container-highest md:order-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div className="order-3 flex-1">
              <div className="hand-drawn-border max-w-xs rotate-1 bg-surface p-4">
                <p className="font-sketch text-sm">
                  &quot;The structural integrity of the V3 core was improved
                  significantly under Werosh&apos;s oversight.&quot;
                </p>
                <p className="mt-2 text-right text-xs font-bold">
                  - Chief Architect
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="order-2 hidden flex-1 md:order-1 md:block">
              <div className="ml-auto max-w-xs rotate-[-2deg] border border-dashed border-outline-variant bg-white/50 p-4">
                <span className="material-symbols-outlined text-secondary opacity-50">
                  data_object
                </span>
                <p className="mt-2 font-sketch text-xs">
                  Drafted 20+ documentation modules for open-source SDKs.
                </p>
              </div>
            </div>
            <div className="order-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-outline-variant bg-surface-container-highest md:order-2">
              <div className="h-3 w-3 rounded-full bg-on-surface-variant" />
            </div>
            <div className="order-3 flex-1">
              <h3 className="font-headline text-3xl font-bold">
                Senior Backend Developer
              </h3>
              <p className="mb-4 font-sketch text-xl text-primary">
                CloudDraft Solutions (2018-2021)
              </p>
              <p className="text-on-surface-variant">
                Developed robust API ecosystems using Node.js and Go, handling
                over 2M requests daily with 99.9% uptime.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="order-2 flex-1 text-right md:order-1">
              <h3 className="font-headline text-3xl font-bold">
                Full Stack Engineer
              </h3>
              <p className="mb-4 font-sketch text-xl text-primary">
                LogicSketch Studio (2015-2018)
              </p>
              <p className="text-on-surface-variant">
                Bridged the gap between UI design and technical feasibility for
                various fintech clients.
              </p>
            </div>
            <div className="order-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-outline-variant bg-surface-container-highest md:order-2">
              <div className="h-3 w-3 rounded-full bg-on-surface-variant" />
            </div>
            <div className="order-3 flex-1">
              <div className="hand-drawn-border relative h-32 w-48 rotate-2 overflow-hidden">
                <img
                  alt="Classic developer desk"
                  className="h-full w-full object-cover grayscale contrast-125"
                  src={DESK_IMG}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
