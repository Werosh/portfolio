import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Star, Award, Users, Code } from "lucide-react";

const BlackWhiteHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const titles = [
    { text: "WEROSH KRIYANJALA", accent: true },
    { text: "SOFTWARE ENGINEER", accent: false },
    { text: "FULL-ST DEVELOPER", accent: true },
    { text: "CONTENT CREATOR", accent: false },
  ];

  const floatingElements = [
    {
      icon: Code,
      text: "CLEAN CODE",
      position: "top-[15%] right-[10%]",
      delay: "0s",
      rotation: "rotate-12",
    },
    {
      icon: Star,
      text: "UI/UX\nDESIGN",
      position: "top-[35%] right-[5%] md:right-[8%]",
      delay: "0.5s",
      rotation: "-rotate-6",
    },
    {
      icon: Users,
      text: "CLIENT\nFOCUSED",
      position: "top-[55%] right-[15%]",
      delay: "1s",
      rotation: "rotate-3",
    },
    {
      icon: Award,
      text: "QUALITY\nDRIVEN",
      position: "top-[75%] right-[6%]",
      delay: "1.5s",
      rotation: "-rotate-12",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Accurate Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Additional fine grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Subtle geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rotate-45 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Elements - Sticker style */}
      <div className="hidden lg:block">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.rotation} transform animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              {/* Sticker-like corner fold */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
              <div className="flex items-center gap-2">
                <element.icon size={16} className="flex-shrink-0" />
                <span className="text-xs font-black leading-tight whitespace-pre-line">
                  {element.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-black rounded-full bg-white text-black border-2 border-white shadow-lg">
              <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
              <span>PORTFOLIO</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="text-white block">HI, I'M</span>
                <div className="relative inline-block w-full mt-2 mb-5">
                  <span
                    className={`block transform transition-all duration-500 ${
                      isAnimating
                        ? "opacity-0 translate-y-8 scale-95"
                        : "opacity-100 translate-y-0 scale-100"
                    }`}
                  >
                    <span
                      className={`font-black tracking-tighter ${
                        titles[currentIndex].accent
                          ? "text-black bg-white px-4 py-2 transform -skew-x-12 inline-block shadow-xl"
                          : "text-white"
                      }`}
                    >
                      {titles[currentIndex].text}
                    </span>
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="max-w-xl text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium">
                I’m currently crafting sleek, modern web experiences as an
                independent{" "}
                <span className="bg-white text-black px-2 py-1 font-black text-sm inline-block transform -skew-x-6">
                  FULL-STACK DEVELOPER
                </span>{" "}
                — blending creativity and code from Sri Lanka to the world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 active:scale-95 shadow-xl border-2 border-white"
              >
                GET IN TOUCH
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/Werosh"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black text-white bg-transparent border-2 border-white transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 active:scale-95 shadow-xl"
              >
                <Github size={18} />
                GITHUB PROFILE
              </a>
            </div>
          </div>

          {/* Right Content - Large Circular Stats */}
          <div className="lg:justify-self-end w-full max-w-md lg:max-w-lg relative">
            {/* Large circular design element */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 border-8 border-white rounded-full bg-black shadow-2xl" />

              {/* Stats positioned around the circle */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-black text-sm border-2 border-white shadow-xl">
                <div className="text-center">
                  <div className="text-xl">3+</div>
                  <div className="text-xs">YEARS</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg font-black text-sm border-2 border-white shadow-xl">
                <div className="text-center">
                  <div className="text-xl">10+</div>
                  <div className="text-xs">PROJECTS</div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg font-black text-sm border-2 border-white shadow-xl">
                <div className="text-center">
                  <div className="text-xl">30+</div>
                  <div className="text-xs">CLIENTS</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg font-black text-sm border-2 border-white shadow-xl">
                <div className="text-center">
                  <div className="text-xl">100%</div>
                  <div className="text-xs">QUALITY</div>
                </div>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="text-black" size={24} />
                  </div>
                  <h3 className="font-black text-lg text-white">DEVELOPER</h3>
                  <p className="text-sm text-gray-300 font-medium">
                    SINCE 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tech Stack */}
        <div className="mt-12 lg:mt-16 pt-8 border-t-2 border-white">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
            {["REACT", "TYPESCRIPT", "NEXT.JS", "TAILWIND", "NODE.JS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-xs md:text-sm font-black text-black bg-white border-2 border-white shadow-lg hover:bg-gray-200 transition-colors transform hover:scale-105"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteHero;
