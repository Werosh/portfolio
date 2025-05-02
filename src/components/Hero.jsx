import React, { useState, useEffect } from "react";
import { ArrowRight, Github } from "lucide-react";

const ProfessionalHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const titles = [
    { text: "Werosh Kriyanjala", color: "from-violet-500 to-indigo-500" },
    { text: "Software Engineer", color: "from-cyan-500 to-blue-500" },
    { text: "Frontend Developer", color: "from-fuchsia-500 to-pink-500" },
    { text: "Content Creator", color: "from-amber-500 to-orange-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gray-950"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl 
          animate-pulse top-0 right-0"
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl 
          animate-pulse bottom-0 left-0"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Grid Pattern - More subtle */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] 
        bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center w-full h-screen px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-left">
          {/* Professional Subtitle */}
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-md bg-white/5 backdrop-blur-sm border-l-2 border-indigo-500">
            <span className="text-gray-300">Portfolio</span>
          </div>

          {/* Main Title - More structured layout */}
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl max-w-3xl">
            Hi, I'm{" "}
            <span className="relative inline-block min-w-[8ch] text-left mt-2 block">
              <span
                className={`inline-block w-full transform transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <span
                  className={`bg-gradient-to-r ${titles[currentIndex].color} bg-clip-text text-transparent font-bold`}
                >
                  {titles[currentIndex].text}
                </span>
              </span>
            </span>
          </h1>

          {/* Professional Description - Clearer structure */}
          <p className="max-w-xl mt-8 text-lg text-gray-300/80 leading-relaxed">
            Passionate about crafting elegant digital experiences with clean
            code and thoughtful design. Based in Kurunegala, Sri Lanka, I
            deliver high-quality solutions that elevate brands and enhance user
            experiences.
          </p>

          {/* CTA Buttons - More professional style */}
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 hover:shadow-lg hover:shadow-violet-500/20 hover:translate-y-1"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              target="_blank"
              href="https://github.com/Werosh"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border rounded-md bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/10 hover:translate-y-1"
            >
              <Github size={16} />
              GitHub Profile
            </a>
          </div>

          {/* Stats or credentials - Adding professional element */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                3+
              </h3>
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                10+
              </h3>
              <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                30+
              </h3>
              <p className="text-gray-400 text-sm mt-1">Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                100%
              </h3>
              <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalHero;
