import React from "react";
import { ExternalLink, Code, Globe } from "lucide-react";
import { IoCodeWorkingOutline } from "react-icons/io5";

import AlphaIMg from "../assets/images/projects/alpha.png";
import bluhIMg from "../assets/images/projects/bluhdev.png";
import sentryIMg from "../assets/images/projects/sentry.png";
import libryIMg from "../assets/images/projects/libry.png";
import herbIMg from "../assets/images/projects/herb.png";
import salonIMg from "../assets/images/projects/ims.png";
import oldIMg from "../assets/images/projects/oldp.png";
import mpIMg from "../assets/images/projects/mp.png";
import Ongoing1 from "../assets/images/projects/ongoing-project.webp"
import OngoingWeb from "../assets/images/projects/ongoing-web.webp"

const ProjectSection = () => {
  const projects = [
    {
      title: "LassanaMoments",
      description:
        "Full-Stack On-going group Project --------> As a Head Front-End Developer ",
      icon: <IoCodeWorkingOutline />,
      tech: ["React", "Node.js", "Fire Base"],
      link: "https://lassanamomentz.netlify.app/",
      gradient: "from-[#AA076B] to-[#61045F]",
      image: OngoingWeb,
    },
    {
      title: "The Alphawizards Portfolio",
      description:
        "Personal portfolio platform with advanced UI/UX implementations",
      icon: <Globe />,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://thealphawizards.netlify.app/",
      gradient: "from-violet-500 to-indigo-500",
      image: AlphaIMg,
    },
    {
      title: "Serenity Hotel",
      description:
        "Hotel booking platform offering seamless reservations and availability checking",
      icon: <Code />,
      tech: ["React", "Node.js"],
      link: "https://hotelsentry.netlify.app/",
      gradient: "from-cyan-500 to-blue-500",
      image: sentryIMg,
    },
    {
      title: "Buy Book Anywhere",
      description:
        "Advanced library search engine with intelligent recommendations",
      icon: <Code />,
      tech: ["Python", "TensorFlow", "AWS"],
      link: "https://demolibry.netlify.app/",
      gradient: "from-amber-500 to-orange-500",
      image: libryIMg,
    },
    {
      title: "Group Portfolio",
      description:
        "Personal portfolio platform with advanced UI/UX implementations",
      icon: <Globe />,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://bluhbluhdev.netlify.app/",
      gradient: "from-green-500 to-teal-500",
      image: bluhIMg,
    },
    {
      title: "Herbal Haven",
      description:
        "A website offering a selection of herbal products and remedies designed to enhance well-being.",
      icon: <Globe />,
      tech: ["Vue.js", "Firebase"],
      link: "https://hebalhaven.netlify.app/",
      gradient: "from-lime-500 to-green-500",
      image: herbIMg,
    },
    {
      title: "Early Portfolio",
      description:
        "The personal portfolio of Werosh Kriyanjala, showcasing web development and software engineering projects.",
      icon: <Globe />,
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://weroshport.netlify.app/",
      gradient: "from-gray-500 to-slate-500",
      image: oldIMg,
    },
    {
      title: "Salon IMS",
      description:
        "Salon Inventory Management System simplifies and optimizes inventory management for salon operations.",
      icon: <Code />,
      tech: ["C#", "MySQL"],
      link: "https://github.com/Werosh/Salon-Inventory-System-Uni-Assinment.git",
      gradient: "from-rose-500 to-red-500",
      image: salonIMg,
    },
    {
      title: "Movie Picker",
      description:
        "A platform for browsing and discovering movies across various genres with IMDb ratings and detailed info.",
      icon: <Globe />,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://movypikker.netlify.app/",
      gradient: "from-purple-500 to-pink-500",
      image: mpIMg,
    },
  ];

  return (
    <div id="projects" className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
              <span className="text-gray-300">Featured Work</span>
            </div>
            <h2 className="text-4xl font-medium md:text-6xl">
              Recent
              <span className="ml-2 font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                Projects
              </span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-300 border group rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
              >
                {/* Card Content Container */}
                <div className="relative z-10 flex flex-col h-full p-6">
                  {/* image Area */}

                  <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* <div
                      className={`absolute inset-0 opacity-20 bg-gradient-to-r ${project.gradient}`}
                    /> */}
                  </div>
                  {/* Project Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}
                    >
                      {React.cloneElement(project.icon, {
                        className: "w-6 h-6",
                      })}
                    </div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="flex-grow mb-6 text-gray-300/80">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-white/5 border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link - Now with proper z-index and pointer events */}
                  <div className="relative z-20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full 
                        bg-gradient-to-r ${project.gradient} transition-all duration-300 
                        hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 cursor-pointer`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Test comment */}
                {/* Hover Gradient Effect - Now with lower z-index */}
                <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:opacity-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
