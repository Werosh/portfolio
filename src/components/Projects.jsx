import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Code,
  Globe,
  Star,
  Users,
  Award,
  Eye,
  Calendar,
} from "lucide-react";

const BlackWhiteProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BUSMATE LK",
      category: "WEB APPLICATION",
      year: "2025",
      description:
        "Real-time bus tracking system for Sri Lankan commuters with route optimization and live updates.",
      tech: ["REACT", "FIREBASE", "TAILWIND"],
      status: "LIVE",
      link: "https://busmatelk.netlify.app/",

      stats: { views: "2.5K", users: "850", rating: "4.8" },
    },
    {
      id: 2,
      title: "SPARKLING CAR CARE",
      category: "BUSINESS WEBSITE",
      year: "2025",
      description:
        "Premium auto detailing service platform with booking system and payment integration.",
      tech: ["REACT", "TAILWIND"],
      status: "LIVE",
      link: "https://www.sparklingcarcare.com.au/",

      stats: { views: "1.8K", users: "420", rating: "4.9" },
    },
    {
      id: 3,
      title: "JOB PORTAL",
      category: "RECRUITMENT PLATFORM",
      year: "2025",
      description:
        "Modern job portal with AI-powered matching and advanced filtering capabilities.",
      tech: ["REACT", "NODE.JS", "MONGODB"],
      status: "LIVE",
      link: "https://jobportaltest.netlify.app/",

      stats: { views: "3.2K", users: "1.2K", rating: "4.7" },
    },
  ];

  const floatingBadges = [
    {
      text: "20+ PROJECTS",
      icon: Code,
      position: "top-[20%] left-[8%]",
      delay: "0s",
    },
    {
      text: "100% QUALITY",
      icon: Star,
      position: "top-[60%] left-[5%]",
      delay: "0.5s",
    },
    {
      text: "30+ CLIENTS",
      icon: Users,
      position: "bottom-[25%] right-[10%]",
      delay: "1s",
    },
    {
      text: "AWARD WINNING",
      icon: Award,
      position: "top-[35%] right-[5%]",
      delay: "1.5s",
    },
  ];

  return (
    <div
      id="projects"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
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

      {/* Floating Badges */}
      <div className="hidden lg:block">
        {floatingBadges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${badge.position} transform animate-bounce`}
            style={{
              animationDelay: badge.delay,
              animationDuration: "4s",
            }}
          >
            <div className="bg-white text-black px-4 py-3 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
              <div className="flex items-center gap-2">
                <badge.icon size={16} />
                <span className="text-xs font-black">{badge.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-4 md:px-8 lg:px-16 py-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-black rounded-full bg-white text-black border-2 border-white shadow-lg mb-8">
            <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
            <span>FEATURED WORK</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="text-white block">SELECTED</span>
            <span className="text-black bg-white px-4 py-2 transform -skew-x-12 inline-block shadow-xl">
              PROJECTS
            </span>
          </h2>

          <p className="max-w-2xl text-lg md:text-xl text-white leading-relaxed font-medium">
            Crafting digital experiences that blend{" "}
            <span className="bg-white text-black px-2 py-1 font-black text-sm inline-block transform -skew-x-6">
              INNOVATION
            </span>{" "}
            with functionality. Each project tells a story of problem-solving
            and creative execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative border-2 border-white bg-black hover:bg-white transition-all duration-500 transform hover:scale-[1.02] shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white border-2 border-white shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-black font-black text-sm">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-black text-white px-3 py-1 text-xs font-black border-2 border-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {project.status}
                </div>
              </div>

              <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Year */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-white group-hover:text-black font-black tracking-wider transition-colors duration-300">
                      {project.category}
                    </span>
                    <div className="w-12 h-px bg-white group-hover:bg-black transition-colors duration-300" />
                    <span className="text-white group-hover:text-black font-black transition-colors duration-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-black transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-300 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-xs font-black bg-white text-black border-2 border-white group-hover:bg-black group-hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 text-sm font-black bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Globe size={16} />
                      VIEW LIVE
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>

                {/* Right Stats */}
                <div className="lg:col-span-5 lg:justify-self-end">
                  <div className="grid grid-cols-3 gap-6 max-w-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white group-hover:bg-black border-2 border-white flex items-center justify-center mb-2 transition-colors duration-300">
                        <Eye
                          className="text-black group-hover:text-white transition-colors duration-300"
                          size={20}
                        />
                      </div>
                      <div className="text-xl font-black text-white group-hover:text-black transition-colors duration-300">
                        {project.stats.views}
                      </div>
                      <div className="text-xs font-black text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                        VIEWS
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white group-hover:bg-black border-2 border-white flex items-center justify-center mb-2 transition-colors duration-300">
                        <Users
                          className="text-black group-hover:text-white transition-colors duration-300"
                          size={20}
                        />
                      </div>
                      <div className="text-xl font-black text-white group-hover:text-black transition-colors duration-300">
                        {project.stats.users}
                      </div>
                      <div className="text-xs font-black text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                        USERS
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white group-hover:bg-black border-2 border-white flex items-center justify-center mb-2 transition-colors duration-300">
                        <Star
                          className="text-black group-hover:text-white transition-colors duration-300"
                          size={20}
                        />
                      </div>
                      <div className="text-xl font-black text-white group-hover:text-black transition-colors duration-300">
                        {project.stats.rating}
                      </div>
                      <div className="text-xs font-black text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                        RATING
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t-2 border-white">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              READY TO BUILD SOMETHING{" "}
              <span className="text-black bg-white px-4 py-2 transform -skew-x-12 inline-block">
                AMAZING?
              </span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 active:scale-95 shadow-xl border-2 border-white"
              >
                START PROJECT
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/all-projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black text-white bg-transparent border-2 border-white transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 active:scale-95 shadow-xl"
              >
                VIEW ALL WORK
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteProjects;
