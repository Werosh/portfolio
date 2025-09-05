import React from "react";
import { ArrowRight, Download } from "lucide-react";

const BlackWhiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black overflow-hidden">
      {/* Grid Background */}
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

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rotate-45 animate-pulse" />
      <div
        className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/15 transform -translate-y-1/2 rotate-12" />

      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 text-xs font-black rounded-full bg-white text-black border-2 border-white shadow-lg">
                  <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
                  <span>LET'S CONNECT</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  READY TO{" "}
                  <span className="text-black bg-white px-4 py-2 transform -skew-x-12 inline-block">
                    COLLABORATE?
                  </span>
                </h2>

                <p className="text-lg text-white/80 max-w-2xl font-medium">
                  Drop me a line and let's discuss your next project. I'm always
                  excited to work on
                  <span className="bg-white text-black px-2 py-1 font-black text-sm inline-block transform -skew-x-6 mx-2">
                    INNOVATIVE IDEAS
                  </span>
                  that push boundaries.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Info & Social */}
            <div className="space-y-8">
              {/* Resume Download */}
              <div className="p-6 bg-white text-black border-4 border-white">
                <h4 className="font-black text-lg mb-2">DOWNLOAD RESUME</h4>
                <p className="text-sm mb-4 font-medium">
                  Get my latest resume and portfolio details
                </p>
                <a
                  href="/WEROSH_KRIYANJALA_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all transform hover:scale-105 font-black text-sm"
                >
                  <Download size={16} />
                  VIEW CV
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-4 border-white pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Logo/Brand */}
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-black text-white">
                  WEROSH KRIYANJALA
                </h4>
                <p className="text-white/60 font-medium">
                  FULL-STACK DEVELOPER
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["REACT", "TYPESCRIPT", "NEXT.JS", "NODE.JS", "TAILWIND"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-black text-black bg-white border-2 border-white transform -skew-x-6 hover:skew-x-0 transition-transform"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-white/60 font-medium">
                  © {currentYear} ALL RIGHTS RESERVED
                </p>
                <p className="text-white/40 text-sm font-medium">
                  MADE WITH ❤️ IN SRI LANKA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlackWhiteFooter;
