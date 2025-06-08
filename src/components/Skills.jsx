import React, { useState, useEffect } from "react";
import { Code, Database, Globe, Cpu, Zap, Star } from "lucide-react";

const BlackWhiteSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedBars, setAnimatedBars] = useState({});

  const categories = [
    {
      title: "FRONTEND",
      icon: Code,
      skills: [
        { name: "REACT", level: 95, years: "3+" },
        { name: "JAVASCRIPT", level: 80, years: "3+" },
        { name: "TYPESCRIPT", level: 85, years: "2+" },
        { name: "TAILWIND CSS", level: 92, years: "3+" },
        { name: "FRAMER MOTION", level: 90, years: "3+" },
        { name: "NEXT.JS", level: 88, years: "2+" },
      ],
    },
    {
      title: "BACKEND",
      icon: Database,
      skills: [
        { name: "NODE.JS", level: 65, years: "3+" },
        { name: "PYTHON", level: 75, years: "2+" },
        { name: "FIREBASE", level: 88, years: "3+" },
        { name: "PHP", level: 70, years: "3+" },
        { name: "MYSQL", level: 80, years: "3+" },
      ],
    },
    {
      title: "SYSTEMS",
      icon: Cpu,
      skills: [
        { name: "C#", level: 62, years: "2+" },
        { name: "JAVA", level: 80, years: "3+" },
        { name: "MICROSERVICES", level: 75, years: "1+" },
        { name: "SYSTEM DESIGN", level: 80, years: "3+" },
      ],
    },
    {
      title: "TOOLS",
      icon: Zap,
      skills: [
        { name: "GIT", level: 90, years: "4+" },
        { name: "FIGMA", level: 85, years: "3+" },
        { name: "VS CODE", level: 95, years: "4+" },
        { name: "POSTMAN", level: 88, years: "3+" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedBars = {};
      categories[activeCategory].skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedBars((prev) => ({
            ...prev,
            [skill.name]: true,
          }));
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const currentCategory = categories[activeCategory];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Geometric Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-white/20 rotate-45" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full" />
      <div className="absolute top-1/3 left-5 w-8 h-8 bg-white rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 text-sm font-black rounded-full bg-white text-black mb-8 shadow-xl border-4 border-white">
            <Star className="w-4 h-4 mr-2" />
            <span>TECHNICAL EXPERTISE</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            SKILLS &
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-white text-black px-6 py-2 transform -skew-x-12 inline-block shadow-xl">
              TECHNOLOGIES
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Mastering the tools and technologies that drive modern web
            development
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`relative p-6 border-4 transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? "bg-white text-black border-white shadow-2xl"
                    : "bg-transparent text-white border-white hover:bg-white/10"
                }`}
              >
                <div className="text-center">
                  <IconComponent className="w-8 h-8 mx-auto mb-3" />
                  <span className="text-sm font-black tracking-wider">
                    {category.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills List */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center">
              <currentCategory.icon className="w-8 h-8 mr-4" />
              {currentCategory.title} SKILLS
            </h3>

            <div className="space-y-6">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/5 border-2 border-white/20 p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-lg md:text-xl font-black text-white mr-4">
                        {skill.name}
                      </span>
                      <span className="text-xs font-black bg-white text-black px-2 py-1">
                        {skill.years}
                      </span>
                    </div>
                    <span className="text-2xl font-black text-white">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-4 bg-black border-2 border-white">
                    <div
                      className={`h-full bg-white transition-all duration-1000 ease-out ${
                        animatedBars[skill.name] ? "" : "w-0"
                      }`}
                      style={{
                        width: animatedBars[skill.name]
                          ? `${skill.level}%`
                          : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Visualization */}
          <div className="relative">
            <div className="bg-white text-black p-8 border-4 border-white shadow-2xl">
              <h4 className="text-2xl font-black mb-8 text-center">
                {currentCategory.title} STATS
              </h4>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-black text-white border-2 border-black">
                  <div className="text-3xl font-black">
                    {currentCategory.skills.length}
                  </div>
                  <div className="text-xs font-black">TECHNOLOGIES</div>
                </div>

                <div className="text-center p-4 bg-black text-white border-2 border-black">
                  <div className="text-3xl font-black">
                    {Math.round(
                      currentCategory.skills.reduce(
                        (acc, skill) => acc + skill.level,
                        0
                      ) / currentCategory.skills.length
                    )}
                    %
                  </div>
                  <div className="text-xs font-black">AVG PROFICIENCY</div>
                </div>

                <div className="text-center p-4 bg-black text-white border-2 border-black">
                  <div className="text-3xl font-black">
                    {Math.max(...currentCategory.skills.map((s) => s.level))}%
                  </div>
                  <div className="text-xs font-black">HIGHEST SKILL</div>
                </div>

                <div className="text-center p-4 bg-black text-white border-2 border-black">
                  <div className="text-3xl font-black">
                    {currentCategory.skills.filter((s) => s.level >= 85).length}
                  </div>
                  <div className="text-xs font-black">EXPERT LEVEL</div>
                </div>
              </div>

              {/* Featured Skill */}
              <div className="mt-8 p-4 bg-black text-white text-center border-2 border-black">
                <div className="text-xs font-black mb-2">TOP SKILL</div>
                <div className="text-xl font-black">
                  {
                    currentCategory.skills.reduce((prev, current) =>
                      prev.level > current.level ? prev : current
                    ).name
                  }
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white transform rotate-45" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackWhiteSkills;
