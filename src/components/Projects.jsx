import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Globe,
  Brain,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Zap,
  MousePointer,
  Share2
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import jobportal from "../assets/images/projects/jobportal.png";
import AIWriteCheckerImg from "../assets/images/projects/aiwrite.png";
import SPCImg from "../assets/images/projects/spc.png";

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacitySection = useTransform(scrollY, [0, 200, 400], [0, 0.5, 1]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI Write Checker",
      tagline: "Authentic Content Verification",
      description:
        "Free and reliable AI content detection tool to verify authenticity of written text with enterprise-grade accuracy.",
      icon: <Brain />,
      tech: ["ReactJS", "Fire Base", "AI API"],
      link: "https://aiwritechecker.netlify.app/",
      gradient: "from-purple-900 to-blue-800",
      accent: "#6366f1",
      image: AIWriteCheckerImg,
      highlights: ["99.8% Detection Rate", "Real-time Analysis", "Privacy-focused"]
    },
    {
      title: "Sparkling Car Care",
      tagline: "Premium Auto Detailing",
      description:
        "Professional car cleaning and detailing services in Artarmon, NSW with state-of-the-art techniques and premium products.",
      icon: <Globe />,
      tech: ["ReactJS", "Tailwind", "Stripe"],
      link: "https://www.sparklingcarcare.com.au/",
      gradient: "from-blue-500 to-teal-500",
      accent: "#0ea5e9",
      image: SPCImg,
      highlights: ["Mobile Booking", "Custom Packages", "5-star Service"]
    },
    {
      title: "Job Portal Design",
      tagline: "Next-gen Recruitment Platform",
      description: "A sophisticated job portal with advanced UI/UX implementations and intelligent matching algorithms.",
      icon: <Globe />,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://jobportaltest.netlify.app/",
      gradient: "from-[#00B400] to-[#008300]",
      accent: "#22c55e",
      image: jobportal,
      highlights: ["AI Job Matching", "Interactive Dashboard", "Seamless UX"]
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index) => {
    setActiveProject(index);
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const project = projects[activeProject];

  return (
    <motion.div 
      id="projects" 
      className="relative w-full min-h-screen overflow-hidden"
      style={{ opacity: opacitySection }}
    >
      {/* Cursor Effect */}
      {isHovering && (
        <motion.div
          className="fixed w-16 h-16 pointer-events-none z-50 rounded-full mix-blend-difference"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1.2,
            backgroundColor: project.accent
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
        />
      )}

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl"
          style={{ y: backgroundY }} 
          animate={{ 
            x: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          style={{ y: backgroundY }}
          animate={{ 
            x: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
            delay: 5
          }}
        />
        
        {/* Accent Color Spot based on current project */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-64 h-64 blur-3xl opacity-20"
          animate={{ 
            backgroundColor: project.accent,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>

      {/* Glass Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-6 py-20">
        <div className="max-w-7xl w-full mx-auto">
          {/* Floating Section Header */}
          <motion.div 
            className="mb-20 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl" />
            
            <div className="text-center relative">
              
              
              <h2 className="text-5xl md:text-7xl font-bold relative inline-block">
                <span className="relative z-10">
                  <span className="text-white">Showcase</span>
                  <span className="ml-3 font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">Projects</span>
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-70 blur-sm"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 5 }}
                />
              </h2>
            </div>
          </motion.div>

          {/* Main Project Display */}
          <div className="w-full mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative w-full"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Project Progress Bar */}
                <motion.div 
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Main Card */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  {/* Background Accent Shape */}
                  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }} />
                  
                  <div className="grid lg:grid-cols-12 gap-10">
                    {/* Content Section - 5 columns */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        {/* Project Number */}
                        <div className="mb-6 flex items-center">
                          <div className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                            PROJECT {(activeProject + 1).toString().padStart(2, '0')}/{projects.length.toString().padStart(2, '0')}
                          </div>
                          <motion.div 
                            className="h-px bg-white/20 ml-4 flex-grow"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        
                        {/* Project Icon & Title */}
                        <motion.div 
                          className="mb-6"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                              {React.cloneElement(project.icon, {
                                className: "w-6 h-6",
                              })}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                          </div>
                          <p className="text-lg font-light text-gray-400 ml-1 pl-12">{project.tagline}</p>
                        </motion.div>
                        
                        {/* Description */}
                        <motion.p 
                          className="text-lg text-gray-300/90 mb-8 leading-relaxed"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        {/* Highlights Section */}
                        <motion.div 
                          className="mb-10"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="text-sm uppercase tracking-widest text-gray-500 mb-3">Highlights</div>
                          <div className="flex flex-wrap gap-4">
                            {project.highlights.map((highlight, i) => (
                              <div 
                                key={i} 
                                className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full bg-white/5"
                              >
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accent }} />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Tech Stack */}
                      <motion.div 
                        className="mb-8"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="text-sm uppercase tracking-widest text-gray-500 mb-3">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <div
                              key={i}
                              className="px-4 py-2 text-sm font-medium rounded-full relative overflow-hidden group"
                              style={{ 
                                background: `linear-gradient(120deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))`,
                                border: `1px solid rgba(255,255,255,0.1)` 
                              }}
                            >
                              <span className="relative z-10">{tech}</span>
                              <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                style={{ 
                                  background: `linear-gradient(120deg, ${project.accent}40, ${project.accent}20)`,
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Image Section - 7 columns */}
                    <div className="lg:col-span-7 relative flex items-center">
                      <div className="relative w-full h-0 pb-[60%] overflow-hidden rounded-xl border border-white/10">
                        <div className="absolute inset-0">
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                          
                          {/* Browser-like frame */}
                          <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-sm border-b border-white/10 flex items-center px-3 rounded-t-xl">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            </div>
                            <div className="mx-auto bg-white/10 text-xs px-3 py-0.5 rounded text-gray-300 max-w-xs truncate">
                              {project.link}
                            </div>
                          </div>
                          
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full mt-0"
                            initial={{ scale: 1.1, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                          />
                          
                          {/* Caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-gray-300">
                                <MousePointer className="w-4 h-4 inline-block mr-1" /> Interactive Preview
                              </div>
                              <div>
                                <motion.button
                                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Share2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Visit Button (Absolute positioned) */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-5 right-5 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full transition-all duration-300 cursor-pointer"
                        style={{ background: `linear-gradient(to right, ${project.accent}, ${project.accent}dd)` }}
                        whileHover={{ scale: 1.05, boxShadow: `0 10px 25px -5px ${project.accent}50` }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        Visit Project
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={prevProject}
                className="group p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 group-hover:text-violet-400 transition-colors" />
              </motion.button>
              
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToProject(index)}
                    className="relative group"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div 
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeProject === index 
                          ? `bg-gradient-to-r ${projects[index].gradient} shadow-lg shadow-${projects[index].accent}/50` 
                          : "bg-white/20 group-hover:bg-white/40"
                      }`}
                    />
                    {activeProject === index && (
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-white/30"
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={nextProject}
                className="group p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 group-hover:text-violet-400 transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => goToProject(index)}
                className={`relative cursor-pointer group overflow-hidden h-24 rounded-xl border backdrop-blur-sm 
                  transition-all duration-500 ${
                    activeProject === index 
                      ? "border-white/20 bg-white/10" 
                      : "border-white/5 bg-white/5"
                  }`}
                style={{
                  boxShadow: activeProject === index ? `0 10px 30px -10px ${project.accent}30` : "none"
                }}
              >
                {/* Background Image Tint */}
                <div className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                  <img 
                    src={project.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0" 
                    style={{ background: `linear-gradient(to right, ${project.accent}80, transparent)` }}
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center p-4">
                  <div className="flex items-center gap-3 flex-grow">
                    <div 
                      className={`flex-shrink-0 p-2 rounded-lg ${
                        activeProject === index 
                          ? `bg-gradient-to-r ${project.gradient}` 
                          : "bg-white/10"
                      }`}
                    >
                      {React.cloneElement(project.icon, { className: "w-4 h-4" })}
                    </div>
                    <div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-xs text-gray-400">{project.tech.join(" • ")}</p>
                    </div>
                  </div>
                  
                  {activeProject === index && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/10">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ background: `linear-gradient(to right, ${project.gradient})` }}
                      />
                    </div>
                  )}
                </div>
                
                {/* Progress Bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-indigo-500/50 to-violet-500/50"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ 
                    scaleX: activeProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="/projects">
              <motion.button
                className="relative overflow-hidden px-8 py-4 text-white font-medium rounded-full group"
                style={{ 
                  background: `linear-gradient(90deg, rgb(99, 102, 241), rgb(67, 56, 202))`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glowing backdrop */}
                <motion.div 
                  className="absolute -inset-1 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, rgb(99, 102, 241), rgb(67, 56, 202))`
                  }}
                />
                
                {/* Shimmering effect */}
                <motion.div 
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "200% 200%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                  }}
                />
                
                {/* Button content */}
                <div className="relative z-10 flex items-center gap-2">
                  <span>Explore Full Portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;