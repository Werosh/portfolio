import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Database, Globe } from "lucide-react";

const ProfessionalSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const skillCategories = [
    {
      name: "All",
      gradient: "from-slate-600 to-slate-800",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Frontend",
      gradient: "from-blue-600 to-indigo-700",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      name: "Backend",
      gradient: "from-emerald-600 to-teal-700",
      icon: <Database className="w-5 h-5" />,
    },
    {
      name: "Frameworks",
      gradient: "from-violet-600 to-purple-700",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "Systems",
      gradient: "from-amber-600 via-yellow-500 to-orange-400",
      icon: <Cpu className="w-5 h-5" />,
    },
  ];

  const skillsData = [
    {
        name: "JavaScript",
        level: 90,
        category: "Frontend",
        tech: ["ES6+", "TypeScript", "Performance Optimization"],
    },
    {
        name: "React",
        level: 85,
        category: "Frameworks",
        tech: ["Advanced Hooks", "State Management", "Performance"],
    },
    {
        name: "Python",
        level: 70,
        category: "Backend",
        tech: ["Django", "RESTful APIs", "Microservices"],
    },
    {
        name: "Java",
        level: 60,
        category: "Systems",
        tech: ["Enterprise Java", "Spring Boot", "Microservices"],
    },
    {
        name: "Database Design",
        level: 55,
        category: "Backend",
        tech: ["SQL", "NoSQL", "Data Modeling"],
    },
    {
        name: "Frontend Architecture",
        level: 95,
        category: "Frontend",
        tech: ["Responsive Design", "Performance", "Accessibility"],
    },
    {
        name: "Enterprise Frameworks",
        level: 80,
        category: "Frameworks",
        tech: [".NET Core", "Spring", "Node.js"],
    },
    {
        name: "Systems Design",
        level: 70,
        category: "Systems",
        tech: ["Architecture", "Scalability", "Security"],
    },
    {
        name: "Node.js",
        level: 75,
        category: "Backend",
        tech: ["Express.js", "REST APIs", "GraphQL"],
    },
    {
        name: "Tailwind CSS",
        level: 85,
        category: "Frontend",
        tech: ["Utility-First", "Responsive Design", "Dark Mode"],
    },
    {
        name: "Framer Motion",
        level: 80,
        category: "Frontend",
        tech: ["Animations", "Gesture Handling", "Variants"],
    },
    {
        name: "C#",
        level: 80,
        category: "Systems",
        tech: [".NET Core", "ASP.NET", "Entity Framework"],
    },
    {
        name: "PHP",
        level: 65,
        category: "Backend",
        tech: ["Laravel", "WordPress", "REST APIs"],
    },
];

    

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative min-h-screen py-16 ">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse" />
      </div>

      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        {/* Section Header */}
        <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium border rounded-full mt-[70px] bg-white/5 border-white/10 backdrop-blur-sm">
              <span className="text-gray-300">Proficiency </span>
            </div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Professional Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Comprehensive overview of technical proficiencies and specialized
            domains
          </p>
        </div>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-5">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-3 rounded-lg transition-all ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${category.gradient} shadow-lg`
                  : "bg-slate-800/50 hover:bg-slate-800"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => {
              const category = skillCategories.find(
                (c) => c.name === skill.category
              );

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative p-6 transition-all bg-slate-800/50 rounded-xl hover:bg-slate-800/70"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="space-y-4">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-slate-200">
                        {skill.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-md bg-gradient-to-r ${category?.gradient}`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 rounded-full bg-slate-700/50">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category?.gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-slate-700/50 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Hover Effect */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-transparent via-slate-400/5 to-transparent rounded-xl" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
