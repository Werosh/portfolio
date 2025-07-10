import React, { useState } from "react";
import {
  ExternalLink,
  Users,
  LayoutTemplate,
  ArrowRight,
  Code,
  Globe,
  Brain,
} from "lucide-react";
import { FaBus } from "react-icons/fa6";
import { FaGraduationCap, FaClipboardList } from "react-icons/fa";
import { IoCodeWorkingOutline } from "react-icons/io5";

import LSMImg from "../assets/images/projects/lsm.png";

// Project Images
import AlphaIMg from "../assets/images/projects/alpha.png";
import bluhIMg from "../assets/images/projects/bluhdev.png";
import sentryIMg from "../assets/images/projects/sentry.png";
import libryIMg from "../assets/images/projects/libry.png";
import herbIMg from "../assets/images/projects/herb.png";
import salonIMg from "../assets/images/projects/ims.png";
import aquaImg from "../assets/images/projects/aqua.png";
import jobportal from "../assets/images/projects/jobportal.png";

// Client Images
import BusMateImg from "../assets/images/projects/busmate.png";
import SPCImg from "../assets/images/projects/spc.png";
import AIWriteCheckerImg from "../assets/images/projects/aiwrite.png";
import NextGImg from "../assets/images/projects/nextg.png";
import GardImg from "../assets/images/projects/gardningtemp.png";
import ExlImg from "../assets/images/projects/exl.jpg";
import StudyMateImg from "../assets/images/projects/studymate.jpg";
const MainProjectSection = () => {
  const [activeSection, setActiveSection] = useState("clients");
  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllTemplates, setShowAllTemplates] = useState(false);

  // Sample project data with placeholder images since actual images aren't available
  const clients = [
    {
      title: "EXL EDUCATION",
      description:
        "An educational platform providing curated learning resources, tutorials, and academic support for students across Australia.",
      icon: <FaGraduationCap />,
      tech: ["REACTJS", "TAILWIND CSS"],
      link: "https://exleducation.netlify.app/",
      image: ExlImg,
    },
    {
      title: "STUDY MATE",
      description:
        "A smart task management platform built for students to organize assignments, lectures, and exams with real-time syncing via Firebase.",
      icon: <FaClipboardList />,
      tech: ["REACTJS", "TAILWIND CSS", "FIREBASE", "FRAMER MOTION"],
      link: "https://smtaskmanager.netlify.app/",
      image: StudyMateImg,
    },

    {
      title: "BUSMATE LK",
      description:
        "Real-time web application helping Sri Lankan commuters plan efficient bus routes and track availability",
      icon: <FaBus />,
      tech: ["REACTJS", "FIREBASE", "FRAMER MOTION", "TAILWIND CSS"],
      link: "https://busmatelk.netlify.app/",
      image: BusMateImg,
    },
    {
      title: "AI WRITE CHECKER",
      description:
        "Free and reliable AI content detection tool to verify authenticity of written text",
      icon: <Brain />,
      tech: ["REACTJS", "FIREBASE", "AI API"],
      link: "https://aiwritechecker.netlify.app/",
      image: AIWriteCheckerImg,
    },
    {
      title: "NEXTGEN WEBSITES",
      description:
        "Affordable and professional web development services for businesses worldwide",
      icon: <Globe />,
      tech: ["REACTJS", "TAILWIND"],
      link: "https://www.nextgenwebsites.info/",
      image: NextGImg,
    },
    {
      title: "SPARKLING CAR CARE",
      description:
        "Professional car cleaning and detailing services in Artarmon, NSW",
      icon: <Globe />,
      tech: ["REACTJS", "TAILWIND"],
      link: "https://www.sparklingcarcare.com.au/",
      image: SPCImg,
    },
    {
      title: "GARDENIN TEMPLATE",
      description:
        "A beautifully designed and responsive gardening website template for landscapers and garden service providers",
      icon: <Globe />,
      tech: ["REACTJS", "TAILWIND"],
      link: "https://gardenintemplate.netlify.app/",
      image: GardImg,
    },
  ];

  const templates = [
    {
      title: "JOB PORTAL DESIGN",
      description:
        "Advanced job portal with sophisticated UI/UX implementations and modern design patterns",
      icon: <Globe />,
      tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
      link: "https://jobportaltest.netlify.app/",
      image: jobportal,
    },
    {
      title: "SANDARU AQUA",
      description:
        "Advanced water purification solutions with innovative design and maintenance services",
      icon: <Globe />,
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      link: "https://sandaruaqua.netlify.app/",
      image: aquaImg,
    },
    {
      title: "LASSANA MOMENTS",
      description:
        "Full-Stack ongoing group project as Head Front-End Developer",
      icon: <Globe />,
      tech: ["REACT", "NODE.JS", "FIREBASE"],
      link: "https://lassanamomentz.netlify.app/",
      image: LSMImg,
    },
    {
      title: "Salon IMS",
      description:
        "alon Inventory Management System simplifies and optimizes inventory management for salon operations.",
      icon: <IoCodeWorkingOutline />,
      tech: ["C#", "MySQL"],
      link: "https://github.com/Werosh/Salon-Inventory-System-Uni-Assinment.git",
      image: salonIMg,
    },
    {
      title: "ALPHAWIZARDS PORTFOLIO",
      description:
        "Personal portfolio platform with advanced UI/UX implementations",
      icon: <Globe />,
      tech: ["REACT", "NODE.JS", "MONGODB"],
      link: "https://thealphawizards.netlify.app/",
      image: AlphaIMg,
    },
    {
      title: "SERENITY HOTEL",
      description:
        "Hotel booking platform offering seamless reservations and availability checking",
      icon: <Code />,
      tech: ["REACT", "NODE.JS"],
      link: "https://hotelsentry.netlify.app/",
      image: sentryIMg,
    },
    {
      title: "BUY BOOK ANYWHERE",
      description:
        "Advanced library search engine with intelligent recommendations",
      icon: <Code />,
      tech: ["PYTHON", "TENSORFLOW", "AWS"],
      link: "https://demolibry.netlify.app/",
      image: libryIMg,
    },
    {
      title: "GROUP PORTFOLIO",
      description:
        "Collaborative portfolio platform with advanced UI/UX implementations",
      icon: <Globe />,
      tech: ["REACT", "NODE.JS", "MONGODB"],
      link: "https://bluhbluhdev.netlify.app/",
      image: bluhIMg,
    },
    {
      title: "HERBAL HAVEN",
      description:
        "Premium herbal products and remedies designed to enhance well-being",
      icon: <Globe />,
      tech: ["VUE.JS", "FIREBASE"],
      link: "https://hebalhaven.netlify.app/",
      image: herbIMg,
    },
  ];

  const displayedClients = showAllClients ? clients : clients.slice(0, 3);
  const displayedTemplates = showAllTemplates
    ? templates
    : templates.slice(0, 3);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
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

      {/* Geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rotate-45 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-black rounded-full bg-white text-black border-2 border-white shadow-lg mb-8">
            <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
            <span>PROJECTS</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white mb-8">
            MY LATEST
            <br />
            <span className="bg-white text-black px-4 py-2 transform -skew-x-12 inline-block shadow-xl">
              PROJECTS
            </span>
          </h1>

          {/* Section Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => setActiveSection("clients")}
              className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl border-2 ${
                activeSection === "clients"
                  ? "text-black bg-white border-white"
                  : "text-white bg-transparent border-white hover:bg-white hover:text-black"
              }`}
            >
              <Users size={18} />
              CLIENT PROJECTS
              {activeSection === "clients" && (
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>

            <button
              onClick={() => setActiveSection("templates")}
              className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl border-2 ${
                activeSection === "templates"
                  ? "text-black bg-white border-white"
                  : "text-white bg-transparent border-white hover:bg-white hover:text-black"
              }`}
            >
              <LayoutTemplate size={18} />
              TEMPLATE PROJECTS
              {activeSection === "templates" && (
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeSection === "clients"
            ? displayedClients
            : displayedTemplates
          ).map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-white shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white font-black text-lg">
                    VIEW PROJECT
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 text-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-black text-white">
                    {React.cloneElement(project.icon, { size: 16 })}
                  </div>
                  <h3 className="text-lg font-black tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-medium mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-black bg-black text-white border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 px-6 py-3 text-sm font-black text-white bg-black border-2 border-black transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105"
                >
                  VIEW PROJECT
                  <ExternalLink
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button
            onClick={() => {
              if (activeSection === "clients") {
                setShowAllClients(!showAllClients);
              } else {
                setShowAllTemplates(!showAllTemplates);
              }
            }}
            className="group inline-flex items-center justify-center gap-3 px-12 py-4 text-base md:text-lg font-black text-black bg-white border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:bg-black hover:text-white"
          >
            {(activeSection === "clients" ? showAllClients : showAllTemplates)
              ? "SHOW LESS"
              : "SHOW MORE"}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-16 pt-8 border-t-2 border-white">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-black text-white">
              TECHNOLOGIES USED
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "REACT",
              "TYPESCRIPT",
              "NEXT.JS",
              "TAILWIND",
              "NODE.JS",
              "FIREBASE",
              "MONGODB",
              "AWS",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-xs md:text-sm font-black text-black bg-white border-2 border-white shadow-lg hover:bg-black hover:text-white transition-colors transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProjectSection;
