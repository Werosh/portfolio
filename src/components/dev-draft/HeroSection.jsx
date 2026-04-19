const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6vJBJ58fAbbDhC6vs1TLqQ6toOp6h-cifqNfcnXq9kLouKW-uVQpn42ZNmOhIrpNgz8D6acKXSdtmJMnkRNsLLCII4RbO297Ewkoew-ckpEyMfngsiFixcgUcGPp4yuTPv-v3xszph2_wW1MZevBs-aG0edbhoBungxf-7kIO3UL4GcvEZPqssJdpW39xpHLvdEZInDIX2xEDL78nbICDDFTlfJLP6_yJlWkhpdRuXs_DyLmg7N2yF-U_1IfbzJBBT60r7224uV7";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen scroll-mt-24 flex-col justify-center overflow-hidden px-8 md:px-20"
      id="hero"
    >
      <div className="absolute right-0 top-1/4 -z-10 h-2/3 w-1/2 opacity-40 blur-3xl signature-smudge" />
      <div className="max-w-4xl space-y-8">
        <div className="masking-tape inline-block rotate-[-1.5deg] bg-secondary-container px-4 py-1 font-sketch text-xl text-on-secondary-container">
          System Architecture V1.04
        </div>
        <h1 className="font-headline relative text-7xl font-extrabold tracking-tight text-on-surface md:text-9xl">
          WEROSH{" "}
          <span className="scribble-underline text-primary">KRIYANJALA</span>
          <span className="font-sketch absolute -right-12 -top-6 rotate-12 text-2xl text-primary opacity-80">
            Software Engineer
          </span>
        </h1>
        <p className="font-body max-w-2xl text-2xl leading-relaxed text-on-surface-variant md:text-3xl">
          Engineering digital frameworks with{" "}
          <span className="font-medium italic">calculated precision</span> and
          raw kinetic creativity. I build scalable systems that live at the
          intersection of logic and draft.
        </p>
        <div className="flex items-center gap-8 pt-8">
          <a
            className="hand-drawn-border transform bg-primary px-10 py-5 text-xl font-bold text-on-primary transition-all hover:-translate-y-1 hover:shadow-xl"
            href="#portfolio"
          >
            Drafted Works
          </a>
          <div className="flex flex-col">
            <span className="font-sketch text-lg text-secondary">
              View Repository
            </span>
            <div className="dashed-lead h-0.5 w-full bg-outline-variant/30" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 hidden h-96 w-96 md:block">
        <div className="relative h-full w-full">
          <img
            alt="Abstract digital code sculpture"
            className="hand-drawn-border h-full w-full rotate-3 object-cover opacity-20 grayscale"
            src={HERO_IMG}
          />
          <div className="hand-drawn-border absolute -left-4 -top-4 rotate-[-2deg] border border-outline-variant bg-surface p-2 font-sketch text-sm">
            FIG_01: Neural Mesh Integration
          </div>
        </div>
      </div>
    </section>
  );
}
