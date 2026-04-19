import heroPortrait from "../../assets/images/my/dp.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen scroll-mt-24 flex-col justify-center overflow-hidden px-4 sm:px-8 md:px-20"
      id="hero"
    >
      <div className="absolute right-0 top-1/4 -z-10 h-2/3 w-1/2 opacity-40 blur-3xl signature-smudge" />
      <div className="max-w-4xl space-y-6 sm:space-y-8">
        <div className="masking-tape inline-block rotate-[-1.5deg] bg-secondary-container px-3 py-1 font-sketch text-base text-on-secondary-container sm:px-4 sm:text-lg md:text-xl">
          System Architecture V1.04
        </div>
        <h1 className="font-headline relative text-4xl font-extrabold tracking-tight text-on-surface sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          WEROSH{" "}
          <span className="scribble-underline text-primary">KRIYANJALA</span>
          <span className="font-sketch mt-3 block text-base text-primary opacity-90 sm:mt-4 sm:text-lg md:absolute md:-right-8 md:-top-4 md:mt-0 md:block md:max-w-[11rem] md:rotate-12 md:text-xl lg:-right-12 lg:-top-6 lg:text-2xl">
            Software Engineer
          </span>
        </h1>
        <p className="font-body max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-xl md:text-2xl lg:text-3xl">
          Engineering digital frameworks with{" "}
          <span className="font-medium italic">calculated precision</span> and
          raw kinetic creativity. I build scalable systems that live at the
          intersection of logic and draft.
        </p>
        <div className="flex flex-col items-stretch gap-6 pt-6 sm:flex-row sm:items-center sm:gap-8 sm:pt-8">
          <a
            className="hand-drawn-border transform bg-primary px-8 py-4 text-center text-lg font-bold text-on-primary transition-all hover:-translate-y-1 hover:shadow-xl sm:px-10 sm:py-5 sm:text-left sm:text-xl"
            href="#portfolio"
          >
            Drafted Works
          </a>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 hidden h-96 w-96 md:block">
        <div className="relative h-full w-full">
          <img
            alt="Werosh Kriyanjala"
            className="hand-drawn-border h-full w-full rotate-3 object-cover object-top opacity-90"
            src={heroPortrait}
          />
          <div className="hand-drawn-border absolute -left-4 -top-4 rotate-[-2deg] border border-outline-variant bg-surface p-2 font-sketch text-sm">
            FIG_01: Portrait - Werosh Kriyanjala
          </div>
        </div>
      </div>
    </section>
  );
}
