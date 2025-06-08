import React, { useState, useEffect } from "react";
import {
  Code,
  Lightbulb,
  Rocket,
  Target,
  Zap,
  Brain,
  Heart,
  Trophy,
} from "lucide-react";
import myImg from "../assets/images/my/dp.jpg";

const BlackWhiteAbout = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const facts = [
    { text: "3+ YEARS", subtitle: "EXPERIENCE", accent: true },
    { text: "CREATIVE", subtitle: "PROBLEM SOLVER", accent: false },
    { text: "PASSIONATE", subtitle: "DEVELOPER", accent: true },
    { text: "INNOVATION", subtitle: "FOCUSED", accent: false },
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
        setCurrentFact((prev) => (prev + 1) % facts.length);
        setIsFlipping(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-20 w-24 h-24 border-4 border-white/30 transform rotate-45 animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/10 transform rotate-12 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating Skill Badges */}
      <div className="hidden xl:block">
        {skillBadges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${badge.position} ${badge.rotation} transform animate-bounce`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: "5s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-xl shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300">
              {/* Sticker fold effect */}
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
      <div className="relative z-20 flex flex-col justify-center w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 text-sm font-black rounded-full bg-white text-black border-4 border-white shadow-2xl mb-8">
            <Brain className="w-4 h-4 mr-2" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-6">
            BUILDING THE
            <span className="block mt-2">
              <span className="bg-white text-black px-6 py-3 transform -skew-x-12 inline-block shadow-2xl">
                FUTURE
              </span>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Dynamic Fact Display */}
            <div className="relative h-32 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <div
                  className={`transform transition-all duration-400 ${
                    isFlipping
                      ? "rotateY-180 opacity-0"
                      : "rotateY-0 opacity-100"
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <div
                      className={`text-3xl md:text-4xl font-black mb-2 ${
                        facts[currentFact].accent
                          ? "bg-white text-black px-4 py-2 transform -skew-x-6 inline-block shadow-xl"
                          : "text-white"
                      }`}
                    >
                      {facts[currentFact].text}
                    </div>
                    <div className="text-lg text-gray-300 font-medium">
                      {facts[currentFact].subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Blocks */}
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: "PASSION DRIVEN",
                  content:
                    "I'm a software engineering student at University of Moratuwa with an unbreakable passion for creating digital solutions that make a real impact in people's lives.",
                },
                {
                  icon: Zap,
                  title: "INNOVATION FOCUSED",
                  content: (
                    <>
                      Head Web Developer at Australia’s{" "}
                      <a
                        href="https://www.nextgenwebsites.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        NextGen Websites
                      </a>
                      , crafting fast, scalable digital experiences with
                      precision, performance, and excellence as the baseline.
                    </>
                  ),
                },
                {
                  icon: Trophy,
                  title: "QUALITY OBSESSED",
                  content:
                    "Every line of code I write is crafted with precision, tested thoroughly, and optimized for performance. Excellence isn't just a goal—it's a standard.",
                },
              ].map((block, index) => (
                <div
                  key={index}
                  className="group relative bg-white/10 border-2 border-white/20 p-6 rounded-none hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-black p-3 rounded-full flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <block.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-lg mb-3 tracking-wide">
                        {block.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-medium">
                        {block.content}
                      </p>
                    </div>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-white/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            {/* Main Profile Container */}
            <div className="relative bg-white text-black p-8 shadow-2xl border-4 border-white">
              {/* Corner Fold */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-200 transform rotate-45 border-2 border-white" />

              <div className="text-center space-y-8">
                {/* Profile Image - Made Bigger */}
                <div className="relative group">
                  <div className="w-68 h-76 mx-auto overflow-hidden bg-black border-4 border-black">
                    <img
                      src={myImg}
                      alt="Werosh Kriyanjala"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                </div>

                {/* University Info */}
                <div className="space-y-3">
                  <div className="bg-black text-white px-6 py-3 font-black text-lg">
                    UNIVERSITY OF MORATUWA
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    SOFTWARE ENGINEERING UNDERGRADUATE
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements around the main box */}
            <div className="absolute -top-4 -left-4 bg-white text-black px-3 py-2 font-black text-sm transform -rotate-12 shadow-xl">
              CREATIVE
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-black px-3 py-2 font-black text-sm transform rotate-12 shadow-xl">
              INNOVATIVE
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 pt-8 border-t-4 border-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                READY TO BUILD SOMETHING
                <span className="bg-white text-black px-3 py-1 ml-2 transform -skew-x-6 inline-block">
                  AMAZING?
                </span>
              </h3>
              <p className="text-gray-300 font-medium">
                Let's collaborate and create digital experiences that matter.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 active:scale-95 shadow-2xl border-2 border-white"
              >
                LET'S CONNECT
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
