import React, { useState } from "react";
import {
  ExternalLink,
  Users,
  LayoutTemplate,
  ChevronDown,
  ChevronUp,
  Globe,
  Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import OngoingWeb from "../assets/images/projects/ongoing-web.webp";


// Template images 
import { IoCodeWorkingOutline } from "react-icons/io5";
import AlphaIMg from "../assets/images/projects/alpha.png";
import bluhIMg from "../assets/images/projects/bluhdev.png";
import sentryIMg from "../assets/images/projects/sentry.png";
import libryIMg from "../assets/images/projects/libry.png";
import herbIMg from "../assets/images/projects/herb.png";
import salonIMg from "../assets/images/projects/ims.png";
import oldIMg from "../assets/images/projects/oldp.png";
import mpIMg from "../assets/images/projects/mp.png";
import aquaImg from "../assets/images/projects/aqua.png";
import jobportal from "../assets/images/projects/jobportal.png";
import NextGImg from "../assets/images/projects/nextg.png"

// Client Images

import SPCImg from "../assets/images/projects/spc.png";

const ServiceSection = () => {
  // State to track if showing all items or just featured ones
  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  // State to track which section is active (Clients or Templates)
  const [activeSection, setActiveSection] = useState("clients");

  const clients = [
    {
      title: "Sparkling Car Care",
      description: "Professional car cleaning and detailing services in Artarmon, NSW",
      icon: <Globe />,
      tech: ["ReactJS", "Tailwind"],
      link: "https://www.sparklingcarcare.com.au/",
      gradient: "from-blue-500 to-teal-500",
      image: SPCImg,
    },
    {
      title: "NextGen Websites",
      description: "Affordable and professional web development services for businesses worldwide",
      icon: <Globe />,
      tech: ["ReactJS", "Tailwind"],
      link: "https://www.nextgenwebsites.info/",
      gradient: "from-purple-500 to-indigo-500",
      image: NextGImg,
    }
    
    
 
  ];

  const templates = [
     {
         title: "Job Portal Design",
         description:"A job portal design with advanced UI/UX implementations",
         icon: <Globe />,
         tech: ["React", "Node.js", "MongoDB" ,"Express"],
         link: "https://jobportaltest.netlify.app/",
         gradient: "from-[#00B400] to-[#008300]",
         image: jobportal,
       },
       {
         title: "Sandaru Aqua (Pvt) Ltd",
         description:
           "Sandaru Aqua (PVT) Ltd provides advanced water purification solutions, ensuring clean and safe water through innovative design, installation, and maintenance services.",
         icon: <Globe />,
         tech: ["React", "Node.js", "Fire Base"],
         link: "https://sandaruaqua.netlify.app/",
         gradient: "from-[#00B4DB] to-[#0083B0]",
         image: aquaImg,
       },
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

  // Get only the first 3 items to show initially
  const displayedClients = showAllClients ? clients : clients.slice(0, 3);
  const displayedTemplates = showAllTemplates ? templates : templates.slice(0, 3);

  // Toggle functions to show/hide items
  const toggleShowAllClients = () => {
    setShowAllClients(!showAllClients);
  };

  const toggleShowAllTemplates = () => {
    setShowAllTemplates(!showAllTemplates);
  };

  return (
    <div id="services" className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl 
          animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl 
          animate-pulse bottom-[-100px] right-[-100px]" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl 
          animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm mt-10">
              <span className="text-gray-300">Services</span>
            </div>
            <h2 className="text-4xl font-medium text-white md:text-6xl">
              Our
              <span className="ml-2 font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                Services
              </span>
            </h2>

            {/* Section Selector Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={() => setActiveSection("clients")}
                className={`relative overflow-hidden px-8 py-4 text-white font-medium rounded-full 
                  transition-all duration-300 ${
                    activeSection === "clients"
                      ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Clients</span>
                </div>
                
                {/* Shining effect for active button */}
                {activeSection === "clients" && (
                  <motion.div
                    className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"
                    animate={{ x: ["0%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
              
              <motion.button
                onClick={() => setActiveSection("templates")}
                className={`relative overflow-hidden px-8 py-4 text-white font-medium rounded-full 
                  transition-all duration-300 ${
                    activeSection === "templates"
                      ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5" />
                  <span>Templates</span>
                </div>
                
                {/* Shining effect for active button */}
                {activeSection === "templates" && (
                  <motion.div
                    className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40"
                    animate={{ x: ["0%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Clients Section */}
          <AnimatePresence mode="wait">
            {activeSection === "clients" && (
              <motion.div
                key="clients"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence>
                    {displayedClients.map((client, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative overflow-hidden transition-all duration-300 border group rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
                      >
                        {/* Card Content Container */}
                        <div className="relative z-10 flex flex-col h-full p-6">
                          {/* image Area */}
                          <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-5">
                            <img
                              src={client.image}
                              alt={client.title}
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          {/* Client Icon & Title */}
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${client.gradient} bg-opacity-10`}
                            >
                              {React.cloneElement(client.icon, {
                                className: "w-6 h-6 text-white",
                              })}
                            </div>
                            <h3 className="text-xl font-medium text-white">{client.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="flex-grow mb-6 text-gray-300/80">
                            {client.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {client.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-200 border rounded-full bg-white/5 border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Project Link */}
                          <div className="relative z-20">
                            <a
                              href={client.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full 
                              bg-gradient-to-r ${client.gradient} transition-all duration-300 
                              hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 cursor-pointer`}
                            >
                              View Details
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:opacity-10" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Show More Clients Button */}
                <motion.div
                  className="flex justify-center mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={toggleShowAllClients}
                    className="relative overflow-hidden px-8 py-4 text-white font-medium rounded-full 
                    bg-gradient-to-r from-violet-500 to-indigo-500 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30"
                      initial={{ scale: 0 }}
                      animate={showAllClients ? { scale: 10, opacity: 0 } : {}}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Button text and icon */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span>{showAllClients ? "Show Less" : "Show More Clients"}</span>
                      {showAllClients ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>

                    {/* Shining effect */}
                    <motion.div
                      className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {/* Templates Section */}
            {activeSection === "templates" && (
              <motion.div
                key="templates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence>
                    {displayedTemplates.map((template, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative overflow-hidden transition-all duration-300 border group rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
                      >
                        {/* Card Content Container */}
                        <div className="relative z-10 flex flex-col h-full p-6">
                          {/* image Area */}
                          <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-5">
                            <img
                              src={template.image}
                              alt={template.title}
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          {/* Template Icon & Title */}
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${template.gradient} bg-opacity-10`}
                            >
                              {React.cloneElement(template.icon, {
                                className: "w-6 h-6 text-white",
                              })}
                            </div>
                            <h3 className="text-xl font-medium text-white">{template.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="flex-grow mb-6 text-gray-300/80">
                            {template.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {template.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium text-gray-200 border rounded-full bg-white/5 border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Template Link */}
                          <div className="relative z-20">
                            <a
                              href={template.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full 
                              bg-gradient-to-r ${template.gradient} transition-all duration-300 
                              hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 cursor-pointer`}
                            >
                              View Demo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:opacity-10" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Show More Templates Button */}
                <motion.div
                  className="flex justify-center mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={toggleShowAllTemplates}
                    className="relative overflow-hidden px-8 py-4 text-white font-medium rounded-full 
                    bg-gradient-to-r from-violet-500 to-indigo-500 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30"
                      initial={{ scale: 0 }}
                      animate={showAllTemplates ? { scale: 10, opacity: 0 } : {}}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Button text and icon */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span>{showAllTemplates ? "Show Less" : "Show More Templates"}</span>
                      {showAllTemplates ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>

                    {/* Shining effect */}
                    <motion.div
                      className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
                      animate={{ x: ["0%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;