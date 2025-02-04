import React, { useState, useEffect } from 'react';
import { Code2, Cpu, Database, Globe } from 'lucide-react';
import myImg from "../assets/images/my/dp.jpg";

const ModernAbout = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { text: "Full Stack Development", icon: <Code2 className="w-6 h-6" />, color: "from-violet-500 to-indigo-500" },
    { text: "System Architecture", icon: <Cpu className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" },
    { text: "Database Engineering", icon: <Database className="w-6 h-6" />, color: "from-fuchsia-500 to-pink-500" },
    { text: "Web Technologies", icon: <Globe className="w-6 h-6" />, color: "from-amber-500 to-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl 
          animate-pulse top-[-100px] right-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl 
          animate-pulse bottom-[-100px] left-[-100px]" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="container relative z-20 px-6 mx-auto">
        {/* Section Title */}
        <div className="mt-2 mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 mt-10 mb-8 font-medium border rounded-full mt-15text-sm bg-white/5 border-white/10 backdrop-blur-sm">
            <span className="text-gray-300">About Me</span>
          </div>
          <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl">
            Crafting Digital
            <span className={`ml-2 bg-gradient-to-r ${skills[currentSkill].color} bg-clip-text text-transparent font-bold`}>
              Experiences
            </span>
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column - Profile Info */}
          <div className="space-y-8">
            {[
              {
                title: "About Me",
                content: "Passionate and dedicated software engineering undergraduate at the University of Moratuwa, with a strong foundation in problem-solving and a commitment to delivering high-quality solutions."
              },
              {
                title: "My Focus",
                content: "Enthusiastic software engineer specializing in modern web technologies and system architecture."
              },
              {
                title: "Expertise",
                content: "Proficient in full-stack development with expertise in React, Node.js, and cloud infrastructure."
              }
            ].map((section, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10"
              >
                <h3 className="mb-3 text-xl font-medium text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                  {section.title}
                </h3>
                <p className="leading-relaxed text-gray-300/80">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image & Skills */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl w-72 h-72">
                <img
                  src={myImg}
                  alt="Profile"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Skills Display */}
              <div className="absolute left-0 right-0 -bottom-4">
                <div className="flex items-center justify-center gap-2 p-4 mx-auto text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-sm w-fit">
                  {skills[currentSkill].icon}
                  <span className={`bg-gradient-to-r ${skills[currentSkill].color} bg-clip-text text-transparent`}>
                    {skills[currentSkill].text}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;