import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  PenTool, 
  Globe, 
  Database, 
  Server, 
  Smartphone, 
  CloudLightning, 
  ArrowRight,
  Star
} from "lucide-react";

const ModernServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoverService, setHoverService] = useState(null);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal user experience.",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      gradient: "from-blue-500 to-indigo-600",
      details: "Creating elegant, high-performance websites and web applications that deliver exceptional user experiences."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Intuitive, aesthetically pleasing interfaces designed with user-centered principles.",
      skills: ["Figma", "Interface Design", "Wireframing", "Prototyping"],
      gradient: "from-violet-500 to-purple-600",
      details: "Crafting beautiful, user-focused designs that engage users and enhance digital experiences."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Efficient data storage and retrieval systems built for scalability and security.",
      skills: ["SQL", "NoSQL", "Data Modeling", "Optimization"],
      gradient: "from-emerald-500 to-teal-600",
      details: "Designing and implementing robust database solutions that efficiently manage your data needs."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable server-side solutions with secure APIs and efficient data processing.",
      skills: ["Node.js", "Express", "Python", "RESTful APIs"],
      gradient: "from-amber-500 to-orange-600",
      details: "Building powerful backend systems that handle complex business logic with reliability and performance."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native-like performance and engaging UIs.",
      skills: ["React Native", "iOS", "Android", "Flutter"],
      gradient: "from-pink-500 to-rose-600",
      details: "Developing feature-rich mobile applications that provide seamless experiences across all devices."
    },
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Robust cloud infrastructure and deployment strategies for maximum scalability.",
      skills: ["AWS", "Azure", "Google Cloud", "DevOps"],
      gradient: "from-cyan-500 to-blue-600",
      details: "Implementing cloud-based solutions that enhance your application's reliability, security, and performance."
    },
  ];

  return (
    <section id="services" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background - Unchanged as requested */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl 
          animate-pulse top-[-100px] right-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl 
          animate-pulse bottom-[-100px] left-[-100px]" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern - Unchanged as requested */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="container relative z-20 px-6 mx-auto">
        {/* Section Title - Enhanced */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full mt-10 bg-white/5 border-white/10 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 mr-2 text-indigo-400" />
            <span className="text-gray-300">Expert Solutions</span>
            <Star className="w-4 h-4 ml-2 text-indigo-400" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-medium md:text-5xl lg:text-6xl"
          >
            <span className="relative">
              Exceptional
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500"></span>
            </span>
            <span className="ml-3 font-bold text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
              Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-300/80"
          >
            Transforming ideas into reality with cutting-edge technology and creative excellence
          </motion.p>
        </div>

        {/* Services - Redesigned as interactive cards with enhanced modern styling */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-2xl border transition-all duration-500 
                ${activeService === service.title 
                  ? 'scale-105 shadow-xl shadow-indigo-500/20 z-10 bg-gradient-to-b from-black/80 to-black/40 border-white/20' 
                  : 'bg-gradient-to-b from-white/5 to-white/2 border-white/10 hover:border-white/20'}`}
              onClick={() => setActiveService(activeService === service.title ? null : service.title)}
              onMouseEnter={() => setHoverService(service.title)}
              onMouseLeave={() => setHoverService(null)}
            >
              {/* Glowing border effect on hover/active */}
              <div className={`absolute inset-0 opacity-0 ${activeService === service.title || hoverService === service.title ? 'opacity-20' : ''} 
                transition-opacity duration-700 bg-gradient-to-r ${service.gradient} blur-lg`} />
              
              {/* Animated top gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} 
                ${activeService === service.title ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'} transition-all duration-500`} />
              
              {/* Animated corners */}
              <div className={`absolute top-0 left-0 w-16 h-16 pointer-events-none ${activeService === service.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-700`}>
                <div className="absolute top-0 left-0 w-px h-10 bg-gradient-to-b from-white/0 via-white/70 to-white/0"></div>
                <div className="absolute top-0 left-0 w-10 h-px bg-gradient-to-r from-white/0 via-white/70 to-white/0"></div>
              </div>
              <div className={`absolute bottom-0 right-0 w-16 h-16 pointer-events-none ${activeService === service.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-700`}>
                <div className="absolute bottom-0 right-0 w-px h-10 bg-gradient-to-t from-white/0 via-white/70 to-white/0"></div>
                <div className="absolute bottom-0 right-0 w-10 h-px bg-gradient-to-l from-white/0 via-white/70 to-white/0"></div>
              </div>
              
              {/* Card Content with backdrop filter */}
              <div className="relative z-10 p-6 backdrop-blur-sm">
                {/* Service Icon with enhanced glow effect */}
                <div className={`relative p-4 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} 
                  group-hover:shadow-lg group-hover:shadow-${service.gradient.split('-')[2]}/20 transition-all duration-500 
                  ${activeService === service.title ? 'scale-105' : ''}`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.gradient} opacity-30 blur-md 
                    ${activeService === service.title || hoverService === service.title ? 'animate-pulse' : ''}`} />
                  <div className="relative">
                    {service.icon}
                    {/* Subtle ripple effect on hover */}
                    {(activeService === service.title || hoverService === service.title) && (
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-white" style={{ animationDuration: '3s' }} />
                    )}
                  </div>
                </div>

                {/* Service Title with enhanced animations */}
                <div className="mb-2 overflow-hidden">
                  <h3 className={`text-xl font-medium transition-all duration-500 
                    ${activeService === service.title 
                      ? 'text-transparent bg-gradient-to-r from-white to-indigo-300 bg-clip-text' 
                      : 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 group-hover:bg-clip-text'}`}>
                    {service.title}
                  </h3>
                  <div className={`h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 
                    ${activeService === service.title ? 'w-full' : 'w-0 group-hover:w-20'}`} />
                </div>

                {/* Service Description with enhanced text */}
                <p className={`mb-4 transition-all duration-500 
                  ${activeService === service.title ? 'text-gray-200' : 'text-gray-300/80'}`}>
                  {service.description}
                </p>

                {/* Skills Tags with floating animation on active */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {service.skills.map((skill, i) => (
                    <motion.span 
                      key={skill} 
                      animate={activeService === service.title ? {
                        y: [0, -2, 0, 2, 0],
                        transition: { 
                          repeat: Infinity, 
                          duration: 5,
                          delay: i * 0.5,
                          ease: "easeInOut" 
                        }
                      } : {}}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-500 
                        ${activeService === service.title 
                          ? `bg-gradient-to-r ${service.gradient} text-white shadow-sm shadow-${service.gradient.split('-')[2]}/30` 
                          : 'bg-white/10 group-hover:bg-white/15'}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Animated Learn More Button with enhanced interactions */}
                <div className="mt-auto flex justify-between items-center">
                  <span className={`text-sm font-medium transition-all duration-500 
                    ${activeService === service.title 
                      ? 'text-white' 
                      : 'text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text'}`}>
                    {activeService === service.title ? "View Less" : "Learn More"}
                  </span>
                  <motion.div
                    animate={hoverService === service.title && activeService !== service.title ? {
                      x: [0, 5, 0],
                      transition: { repeat: Infinity, duration: 1.5 }
                    } : {}}
                  >
                    <ArrowRight className={`w-5 h-5 text-indigo-400 transition-all duration-500 
                      ${activeService === service.title ? "rotate-90" : ""}`} />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Details Panel with fade effect */}
              <AnimatePresence>
                {activeService === service.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 backdrop-blur-md"
                  >
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                      <p className="mb-4 text-gray-200">{service.details}</p>
                      
                      {/* Subtle animated graphic for expanded state */}
                      <div className="absolute bottom-4 right-4 opacity-10 w-20 h-20">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-white to-white/0 animate-pulse opacity-20" style={{ animationDuration: '3s' }} />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700" 
                style={{ transform: 'translateY(-50%)', height: '50%' }} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 mt-16 text-center border rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-violet-500/10 rounded-full blur-xl"></div>
          
          <h3 className="mb-4 text-2xl font-medium relative z-10">Ready to Elevate Your Digital Presence?</h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300/80 relative z-10">
            Let's collaborate to create something extraordinary that exceeds your expectations
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 relative z-10"
          >
            <span>Start the Conversation</span>
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernServices;