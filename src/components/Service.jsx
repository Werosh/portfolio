import React, { useState, useEffect } from "react";
import {
  Code,
  PenTool,
  Globe,
  Database,
  Server,
  Smartphone,
  Zap,
  ArrowRight,
  Star,
  Award,
  Target,
  Rocket,
} from "lucide-react";

const BlackWhiteServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      icon: Code,
      title: "WEB DEVELOPMENT",
      subtitle: "MODERN • RESPONSIVE • FAST",
      description:
        "Building cutting-edge web applications with clean code and pixel-perfect designs that convert visitors into customers.",
      skills: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND"],
      projects: "15+",
      satisfaction: "100%",
    },
    {
      icon: PenTool,
      title: "UI/UX DESIGN",
      subtitle: "INTUITIVE • BEAUTIFUL • ENGAGING",
      description:
        "Creating user-centered designs that not only look stunning but deliver exceptional user experiences across all devices.",
      skills: ["FIGMA", "PROTOTYPING", "USER RESEARCH", "WIREFRAMING"],
      projects: "20+",
      satisfaction: "98%",
    },
    {
      icon: Database,
      title: "BACKEND SYSTEMS",
      subtitle: "SCALABLE • SECURE • EFFICIENT",
      description:
        "Developing robust server-side solutions with optimized databases and APIs that handle millions of requests seamlessly.",
      skills: ["NODE.JS", "PYTHON", "MONGODB", "POSTGRESQL"],
      projects: "12+",
      satisfaction: "100%",
    },
    {
      icon: Smartphone,
      title: "MOBILE APPS",
      subtitle: "NATIVE • CROSS-PLATFORM • SMOOTH",
      description:
        "Crafting mobile experiences that users love, with native performance and intuitive interfaces for iOS and Android.",
      skills: ["REACT NATIVE", "FLUTTER", "SWIFT", "KOTLIN"],
      projects: "8+",
      satisfaction: "96%",
    },
  ];

  const floatingBadges = [
    {
      text: "FAST\nDELIVERY",
      position: "top-[10%] right-[15%]",
      delay: "0s",
      icon: Rocket,
    },
    {
      text: "TOP\nQUALITY",
      position: "top-[40%] right-[8%]",
      delay: "1s",
      icon: Award,
    },
    {
      text: "CLIENT\nFOCUSED",
      position: "bottom-[30%] right-[12%]",
      delay: "2s",
      icon: Target,
    },
    {
      text: "24/7\nSUPPORT",
      position: "bottom-[10%] right-[20%]",
      delay: "0.5s",
      icon: Star,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveService((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="services"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Grid Pattern Background */}
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

      {/* Fine grid overlay */}
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

      {/* Geometric shapes */}
      <div className="absolute top-32 left-16 w-20 h-20 border-4 border-white/30 rotate-45" />
      <div className="absolute bottom-40 left-32 w-16 h-16 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-64 right-20 w-24 h-24 border-4 border-white/30 rounded-full" />

      {/* Floating Badges */}
      <div className="hidden lg:block">
        {floatingBadges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${badge.position} transform animate-bounce`}
            style={{
              animationDelay: badge.delay,
              animationDuration: "3s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-3 py-2 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform cursor-pointer">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-300 transform rotate-45" />
              <div className="flex items-center gap-1">
                <badge.icon size={12} className="flex-shrink-0" />
                <span className="text-[10px] font-black leading-tight whitespace-pre-line">
                  {badge.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 text-sm font-black rounded-full bg-white text-black border-4 border-white shadow-xl mb-8">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            <span>SERVICES</span>
            <Zap className="w-4 h-4 ml-2 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="text-white block">WHAT I</span>
            <span className="text-black bg-white px-6 py-2 transform -skew-x-12 inline-block shadow-xl">
              DELIVER
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white leading-relaxed font-medium">
            From concept to launch, I craft{" "}
            <span className="bg-white text-black px-2 py-1 font-black text-sm inline-block transform -skew-x-6">
              DIGITAL EXPERIENCES
            </span>{" "}
            that drive results and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Service Navigation */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className={`relative p-6 cursor-pointer transition-all duration-300 border-4 ${
                  activeService === index
                    ? "bg-white text-black border-white shadow-2xl transform scale-105"
                    : "bg-transparent text-white border-white/30 hover:border-white/60"
                }`}
              >
                {/* Active indicator */}
                {activeService === index && (
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-black border-2 border-white" />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      activeService === index
                        ? "bg-black text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <service.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black leading-tight">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm font-bold ${
                        activeService === index
                          ? "text-black/70"
                          : "text-white/70"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-6 h-6 transition-transform ${
                      activeService === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Service Details */}
          <div className="relative">
            <div className="sticky top-8">
              <div
                className={`transform transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {/* Service Details Card */}
                <div className="bg-white text-black p-8 border-4 border-white shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-black border-2 border-white" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-black text-white rounded-lg">
                      {React.createElement(services[activeService].icon, {
                        size: 32,
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">
                        {services[activeService].title}
                      </h3>
                      <p className="text-black/70 font-bold text-sm">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 font-medium">
                    {services[activeService].description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-black mb-3 uppercase tracking-wider">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-black bg-black text-white border-2 border-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8 pt-6 border-t-4 border-black">
                    <div>
                      <div className="text-2xl font-black text-black">
                        {services[activeService].projects}
                      </div>
                      <div className="text-xs font-black uppercase tracking-wider text-black/70">
                        PROJECTS
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-black">
                        {services[activeService].satisfaction}
                      </div>
                      <div className="text-xs font-black uppercase tracking-wider text-black/70">
                        SUCCESS RATE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <a href="#contact">
                    <button className="w-full group flex items-center justify-center gap-3 px-8 py-4 text-lg font-black text-white bg-transparent border-4 border-white transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 active:scale-95 shadow-xl">
                      GET STARTED
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteServices;
