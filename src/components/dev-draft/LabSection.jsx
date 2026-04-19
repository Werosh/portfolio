export default function LabSection() {
  return (
    <section
      id="lab"
      className="scroll-mt-24 border-y border-dashed border-outline-variant/40 bg-surface-container-low px-8 py-16 md:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 flex items-center gap-3 font-headline text-3xl font-bold text-on-surface md:text-4xl">
          <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">
            science
          </span>
          Lab Notes
        </h2>
        <p className="max-w-3xl font-body text-lg text-on-surface-variant">
          Rapid prototypes, performance experiments, and interface studies that
          inform production systems. This lane stays messy on purpose.
        </p>
      </div>
    </section>
  );
}
