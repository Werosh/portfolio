import { useEffect, useState } from "react";
import { Code, Eye, Lightbulb, Rocket, Target } from "lucide-react";
import myImg from "../assets/images/my/dp.jpg";

const BlackWhiteAbout = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const highlights = [
    {
      text: "4+ YEARS",
      subtitle: "Building Production Experiences",
      accent: true,
    },
    {
      text: "FULL-STACK",
      subtitle: "From Product Strategy to Deployment",
      accent: false,
    },
    {
      text: "CREATIVE",
      subtitle: "Design-Led Engineering Mindset",
      accent: true,
    },
    {
      text: "IMPACT FOCUSED",
      subtitle: "Shipping Outcomes, Not Just Features",
      accent: false,
    },
  ];

  const skillBadges = [
    {
      icon: Code,
      text: "FULL-STACK\nDEVELOPER",
      position: "top-[10%] left-[5%]",
      rotation: "rotate-12",
    },
    {
      icon: Lightbulb,
      text: "CREATIVE\nTHINKER",
      position: "top-[25%] right-[8%]",
      rotation: "-rotate-6",
    },
    {
      icon: Rocket,
      text: "FAST\nLEARNER",
      position: "bottom-[30%] left-[10%]",
      rotation: "rotate-6",
    },
    {
      icon: Target,
      text: "GOAL\nORIENTED",
      position: "bottom-[15%] right-[5%]",
      rotation: "-rotate-12",
    },
  ];

  const internship = {
    company: "Ranga Technologies",
    role: "Software Engineer Intern",
    focus: "Frontend focus",
    duration: "Sep 2025 – Present · Frontend",
    description:
      "Building production-ready frontend systems with GenAI-assisted workflows while collaborating with cross-functional squads to elevate accessibility and performance standards.",
  };

  const techStack = [
    "REACT",
    "TYPESCRIPT",
    "NODE.JS",
    "PYTHON",
    "AWS",
    "MONGODB",
    "POSTGRESQL",
    "DOCKER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentHighlight((prev) => (prev + 1) % highlights.length);
        setIsFlipping(false);
      }, 400);
    }, 4500);

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section
      id="about"
      className="relative w-full bg-black overflow-hidden py-12"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-16 right-24 w-24 h-24 border-4 border-white/30 transform rotate-45 animate-pulse" />
      <div
        className="absolute bottom-16 left-12 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 transform rotate-12 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 via-transparent to-transparent" />

      {/* Floating Skill Badges */}
      <div className="hidden xl:block">
        {skillBadges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${badge.position} ${badge.rotation} transform animate-bounce`}
            style={{
              animationDelay: `${index * 0.6}s`,
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-xl shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-200 transform rotate-45 border-2 border-white" />
              <div className="flex items-center gap-2">
                <badge.icon size={18} className="flex-shrink-0" />
                <span className="text-xs font-black leading-tight whitespace-pre-line">
                  {badge.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl  font-black leading-[0.8] tracking-tight text-white mb-6">
            BUILDING THE
            <span className="block mt-2">
              <span className="bg-white text-black px-6 py-3 transform -skew-x-12 inline-block shadow-2xl">
                FUTURE
              </span>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Dynamic Highlight */}
            <div className="relative h-28 flex items-center">
              <div className="relative">
                <div
                  className={`transform transition-all duration-500 ${
                    isFlipping
                      ? "rotateY-180 opacity-0"
                      : "rotateY-0 opacity-100"
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <div
                      className={`inline-flex items-center gap-2 text-2xl md:text-3xl font-black mb-2 px-4 py-2 ${
                        highlights[currentHighlight].accent
                          ? "bg-white text-black transform -skew-x-6 shadow-xl"
                          : "text-white bg-transparent"
                      }`}
                    >
                      {highlights[currentHighlight].text}
                    </div>
                    <p className="text-base md:text-lg text-gray-300 font-medium">
                      {highlights[currentHighlight].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="bg-white/5 border border-white/10 p-6 lg:p-8 space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed md:text-base">
                I’m Werosh Kriyanjala, a builder obsessed with pairing ambitious
                ideas with thoughtful execution. Whether it’s orchestrating
                full-stack platforms or refining the micro-interactions that
                users feel, I anchor every project on clarity, craft, and
                measurable results.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed md:text-base">
                From leading web experiences at{" "}
                <a
                  href="https://www.nextgenwebsites.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-dotted underline-offset-4 hover:text-black hover:bg-white px-1 transition-colors"
                >
                  NextGen Websites
                </a>{" "}
                to architecting internal tooling, I collaborate with founders,
                designers, and engineers to ship products that feel seamless and
                perform under pressure.
              </p>
            </div>

            {/* Internship Spotlight */}
            <div className="bg-white/10 border border-white/20 p-5 space-y-3">
              <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 font-black text-[0.6rem] tracking-[0.35em] uppercase">
                <Rocket size={16} />
                Incoming Internship
              </div>
              <h3 className="text-white text-xl font-black">
                {internship.role}
              </h3>
              <p className="text-gray-300 font-medium uppercase tracking-widest text-xs">
                {internship.company} · {internship.focus}
              </p>
              <p className="text-gray-300 text-sm">{internship.duration}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {internship.description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative bg-white text-black p-6 shadow-2xl border-4 border-white">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-200 transform rotate-45 border-2 border-white" />
              <div className="text-center space-y-6">
                <div className="relative group">
                  <div className="w-60 h-72 mx-auto overflow-hidden bg-black border-4 border-black">
                    <img
                      src={myImg}
                      alt="Werosh Kriyanjala"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="bg-black text-white px-6 py-3 font-black text-lg tracking-wide">
                    UNIVERSITY OF MORATUWA
                  </div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                    Software Engineering Undergraduate
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white text-black p-5 border-4 border-white shadow-2xl">
              <h4 className="text-sm font-black tracking-[0.3em] uppercase mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-xs font-black uppercase tracking-widest border border-black/20 bg-black text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t-4 border-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready to build something
                <span className="bg-white text-black px-3 py-1 ml-2 transform -skew-x-6 inline-block">
                  remarkable?
                </span>
              </h3>
              <p className="text-gray-300 font-medium">
                Let’s collaborate and craft experiences that delight users from
                first glance to final interaction.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/all-experience"
                className="group inline-flex items-center gap-3 px-6 py-3 text-sm font-black text-white bg-black border-2 border-white transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 active:scale-95 shadow-xl"
              >
                View my experience
                <Eye
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 active:scale-95 shadow-2xl border-2 border-white"
              >
                Let’s connect
                <Rocket
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackWhiteAbout;
