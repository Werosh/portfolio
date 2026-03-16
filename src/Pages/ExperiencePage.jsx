import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  GraduationCap,
  Trophy,
  Briefcase,
  Star,
  Code,
  Rocket,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronRight,
  GitBranch,
  Linkedin,
  Plus,
  Minus,
} from "lucide-react";

const ExperiencePage = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedItems, setExpandedItems] = useState({});
  const [animationPhase, setAnimationPhase] = useState(0);

  // Sample data - replace with your actual experience
  const experienceData = {
    education: {
      title: "EDUCATION",
      icon: GraduationCap,
      items: [
        {
          id: "edu-1",
          title: "SOFTWARE ENGINEERING",
          subtitle: "University of Moratuwa",
          period: "2023 - Present",
          location: "Moratuwa, Sri Lanka",
          description:
            "Specializing in full-stack development, algorithms, and software architecture. Maintaining excellent academic performance with focus on modern development practices.",
          skills: [
            "Data Structures",
            "Algorithms",
            "Software Architecture",
            "Database Design",
            "Web Development",
          ],
          achievements: [
            "Dean's List 2023",
            "Top 10% of Class",
            "Outstanding Project Award",
          ],
          level: "primary",
        },
        {
          id: "edu-2",
          title: "ADVANCED LEVEL",
          subtitle: "Technology Stream",
          period: "2022 - 2023",
          location: "Sri Lanka",
          description:
            "Specialized in Engineering Technology, Science for Technology, and Information & Communication Technology with excellent academic performance. Strengthened technical, analytical, and practical problem-solving abilities.",
          skills: [
            "Engineering Technology",
            "Science for Technology",
            "Information & Communication Technology",
            "Technical Problem Solving",
            "Analytical Thinking",
          ],
          achievements: [
            "3C Passes",
            "District Rank Top 347",
            "Best Performance in Engineering Technology",
          ],
          level: "secondary",
        },
      ],
    },
    work: {
      title: "WORK EXPERIENCE",
      icon: Briefcase,
      items: [
        {
          id: "work-0",
          title: "ASSOCIATE SOFTWARE ENGINEER",
          subtitle: "Ranga Technologies",
          period: "Mar 2026 - Present",
          location: "Hybrid · Sri Lanka & Remote",
          website: "https://www.rangatechnologies.com/",
          linkedin:
            "https://www.linkedin.com/company/rangatechnologies/posts/?feedView=all",
          description:
            "Building production-ready frontend systems and contributing to full-stack delivery. Promoted from Software Engineer Intern. Focused on accessible UI systems, cross-functional collaboration, and GenAI-enhanced workflows in production codebases.",
          skills: [
            "Next",
            "React",
            "TypeScript",
            "Design Systems",
            "Accessibility",
            "Frontend Performance",
            "AI-assisted Development",
          ],
          achievements: [
            "Promoted from Software Engineer Intern",
            "Modernizing shared component library for delivery velocity",
            "Driving gains in interaction latency and Lighthouse metrics",
            "Championing UI polish through code reviews and paired sessions",
          ],
          level: "primary",
          isCurrent: true,
        },
        {
          id: "work-1",
          title: "SENIOR WEB DEVELOPER",
          subtitle: "Nebula Arcs",
          period: "2024 - 2025",
          location: "Sri Lanka (Remote & On-site)",
          website: "https://nebulaarcs.com",
          description:
            "Spearheaded high-performance web development projects, delivering innovative, user-centric digital solutions. Collaborated closely with designers and clients to translate visions into scalable, optimized products. Oversaw end-to-end project execution while ensuring top-tier code quality and performance.",
          skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "UI/UX Implementation",
            "Project Leadership",
          ],
          achievements: [
            "15+ High-Impact Projects Delivered",
            "Improved Page Load Speeds by 40%",
            "Maintained 100% Client Retention Rate",
            "Introduced AI-Driven Development Workflows",
          ],
          level: "primary",
        },
        {
          id: "work-1",
          title: "HEAD WEB DEVELOPER",
          subtitle: "NextGen Websites",
          period: "2023 - Present",
          location: "Australia (Remote)",
          website: "https://www.nextgenwebsites.info/",
          description:
            "Leading web development projects, architecting scalable solutions, and mentoring junior developers. Responsible for full project lifecycle management.",
          skills: [
            "React",
            "Node.js",
            "AWS",
            "Team Leadership",
            "Project Management",
            "TypeScript",
          ],
          achievements: [
            "30+ Projects Delivered",
            "Team of 5 Developers",
            "100% Client Satisfaction",
            "Performance Award 2024",
          ],
          level: "primary",
        },

        {
          id: "work-3",
          title: "SOFTWARE ENGINEER INTERN",
          subtitle: "Ranga Technologies",
          period: "Sep 2025 - Mar 2026 · Frontend",
          location: "Hybrid · Sri Lanka & Remote",
          website: "https://www.rangatechnologies.com/",
          linkedin:
            "https://www.linkedin.com/company/rangatechnologies/posts/?feedView=all",
          description:
            "Delivered polished, high-performing frontend experiences for customer-facing platforms. Focused on accessible UI systems, rapid iteration with cross-functional squads, and infusing GenAI-enhanced workflows into production-ready codebases. Promoted to Associate Software Engineer.",
          skills: [
            "React",
            "TypeScript",
            "Design Systems",
            "Accessibility",
            "Frontend Performance",
            "AI-assisted Development",
          ],
          achievements: [
            "Modernizing the shared component library to boost delivery velocity",
            "Driving measurable gains in interaction latency and Lighthouse metrics",
            "Championing UI polish standards through code reviews and paired sessions",
            "Promoted to Associate Software Engineer",
          ],
          level: "primary",
        },

        {
          id: "work-2",
          title: "FRONTEND DEVELOPER",
          subtitle: "Freelance Projects",
          period: "2022 - Present",
          location: "Remote",
          description:
            "Developed responsive web applications for various clients across different industries. Focused on creating exceptional user experiences.",
          skills: [
            "React",
            "TypeScript",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "UI/UX",
          ],
          achievements: [
            "15+ Successful Projects",
            "5-Star Client Ratings",
            "Repeat Client Rate 80%",
          ],
          level: "secondary",
        },
      ],
    },
    achievements: {
      title: "ACHIEVEMENTS",
      icon: Trophy,
      items: [
        {
          id: "ach-1",
          title: "TOP PERFORMER",
          subtitle: "NextGen Websites",
          period: "2024",
          location: "Recognition",
          description:
            "Recognized for outstanding performance and leadership in delivering high-quality projects ahead of schedule.",
          skills: [
            "Leadership",
            "Performance",
            "Quality Delivery",
            "Time Management",
          ],
          achievements: [
            "Employee of the Year",
            "Leadership Excellence",
            "Client Success Champion",
          ],
          level: "primary",
        },
        {
          id: "ach-2",
          title: "HACKATHON WINNER",
          subtitle: "University Tech Challenge",
          period: "2023",
          location: "University of Moratuwa",
          description:
            "Won first place in university-wide hackathon for developing innovative web application solution.",
          skills: [
            "Innovation",
            "Problem Solving",
            "Teamwork",
            "Rapid Development",
          ],
          achievements: [
            "1st Place Winner",
            "Best Innovation Award",
            "People's Choice Award",
          ],
          level: "secondary",
        },
      ],
    },
  };

  const sections = Object.keys(experienceData);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const TreeSection = ({ sectionKey, section }) => {
    const isExpanded = expandedSections[sectionKey];
    const Icon = section.icon;

    return (
      <div className={`relative mb-12`}>
        {/* Main Branch Title */}
        <div className={`flex items-center justify-center mb-8`}>
          <button
            onClick={() => toggleSection(sectionKey)}
            className={`group relative bg-white text-black p-6 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-300 ${
              isExpanded ? "bg-black text-white border-white" : ""
            }`}
          >
            {/* Corner Fold */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-200 transform rotate-45 border-2 border-white" />

            {/* Expansion Indicator */}
            <div
              className={`absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-black ${
                isExpanded
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-black"
              }`}
            >
              {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${
                  isExpanded ? "bg-white text-black" : "bg-black text-white"
                } transition-colors duration-300`}
              >
                <Icon size={24} />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-black tracking-wide">
                  {section.title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium opacity-70">
                    {section.items.length} items
                  </span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Sub-branches Container */}
          <div className="relative">
            {/* Connection Lines */}
            <div
              className="absolute left-1/2 top-0 w-1 bg-white/30 transform -translate-x-1/2"
              style={{ height: `${section.items.length * 280}px` }}
            >
              <div
                className="absolute top-0 w-full h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse"
                style={{
                  animationDuration: "3s",
                  transform: `translateY(${animationPhase * 25}%)`,
                }}
              />
            </div>

            {/* Items */}
            <div className="space-y-8 pt-8">
              {section.items.map((item, itemIndex) => (
                <TreeItem
                  key={item.id}
                  item={item}
                  itemIndex={itemIndex}
                  isExpanded={expandedItems[item.id]}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TreeItem = ({ item, itemIndex, isExpanded, onToggle }) => {
    const branchSide = itemIndex % 2 === 0 ? "left" : "right";

    return (
      <div
        className={`relative flex items-start ${
          branchSide === "left" ? "flex-row" : "flex-row-reverse"
        } mb-8`}
      >
        {/* Branch Line */}
        <div
          className={`absolute top-8 ${
            branchSide === "left" ? "right-0" : "left-0"
          } w-20 h-0.5 bg-white/40`}
        >
          <div
            className={`absolute ${
              branchSide === "left" ? "-right-3" : "-left-3"
            } -top-2 w-5 h-5 border-2 border-white/60 rounded-full bg-black`}
          />
        </div>

        {/* Item Card */}
        <div className={`${branchSide === "left" ? "mr-24" : "ml-24"} w-80`}>
          {/* Title Card */}
          <button
            onClick={onToggle}
            className={`group relative w-full p-5 shadow-xl border-4 transform hover:scale-105 transition-all duration-300 text-left ${
              item.isCurrent
                ? "bg-amber-50 text-black border-amber-400/80 shadow-amber-200/50"
                : `bg-white text-black border-white ${isExpanded ? "bg-gray-100" : ""}`
            }`}
          >
            {/* Corner Fold */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-200 transform rotate-45 border-2 border-white" />

            {/* Level / Current Badge */}
            <div
              className={`absolute -top-3 left-4 px-3 py-1 text-xs font-black ${
                item.isCurrent
                  ? "bg-amber-400 text-black border-2 border-amber-300 shadow-lg"
                  : item.level === "primary"
                    ? "bg-black text-white"
                    : "bg-gray-600 text-white"
              }`}
            >
              {item.isCurrent
                ? "CURRENT"
                : item.level === "primary"
                  ? "PRIMARY"
                  : "SECONDARY"}
            </div>

            {/* Expansion Indicator */}
            <div
              className={`absolute top-2 right-2 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center transform transition-transform duration-300 ${
                isExpanded ? "rotate-90" : ""
              }`}
            >
              <ChevronDown size={14} />
            </div>

            <div className="pr-8">
              <h3 className="font-black text-lg mb-1 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 font-bold text-sm mb-2">
                {item.subtitle}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={10} />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={10} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </button>

          {/* Detailed Content */}
          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out ${
              isExpanded
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white/10 border-2 border-white/20 p-5 space-y-4">
              <p className="text-gray-300 leading-relaxed font-medium text-sm">
                {item.description}
              </p>

              {(item.website || item.linkedin) && (
                <div className="flex flex-wrap gap-3 text-sm font-medium">
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-4"
                    >
                      <Rocket size={12} />
                      Company Website
                    </a>
                  )}
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-4"
                    >
                      <Linkedin size={12} />
                      LinkedIn
                    </a>
                  )}
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="text-white font-black text-xs mb-2 tracking-wide">
                  SKILLS GAINED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs font-black bg-white text-black transform -skew-x-6"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-white font-black text-xs mb-2 tracking-wide">
                  KEY ACHIEVEMENTS
                </h4>
                <div className="space-y-1">
                  {item.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <Star size={10} className="text-white" />
                      <span className="font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  TreeSection.propTypes = {
    sectionKey: PropTypes.string.isRequired,
    section: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      items: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  };

  TreeItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      level: PropTypes.oneOf(["primary", "secondary"]).isRequired,
      isCurrent: PropTypes.bool,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
      website: PropTypes.string,
      linkedin: PropTypes.string,
    }).isRequired,
    itemIndex: PropTypes.number.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 border-4 border-white/20 transform rotate-45 animate-pulse" />
      <div
        className="absolute bottom-32 left-16 w-24 h-24 border-4 border-white/15 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Elements */}
      <div className="hidden xl:block">
        <div
          className="absolute top-[15%] left-[8%] transform animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          <div className="bg-white text-black px-3 py-2 font-black text-xs transform -rotate-12 shadow-xl">
            <GitBranch size={14} className="inline mr-1" />
            EXPANDING
          </div>
        </div>
        <div
          className="absolute top-[25%] right-[10%] transform animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <div className="bg-white text-black px-3 py-2 font-black text-xs transform rotate-12 shadow-xl">
            <Rocket size={14} className="inline mr-1" />
            GROWING
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full min-h-screen px-4 md:px-8 lg:px-16 max-w-6xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 text-sm font-black rounded-full bg-white text-black border-4 border-white shadow-2xl mb-8">
            <GitBranch className="w-4 h-4 mr-2" />
            <span>INTERACTIVE JOURNEY</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.8] tracking-tight text-white mb-6">
            EXPERIENCE
            <span className="block mt-2">
              <span className="bg-white text-black px-6 py-3 transform -skew-x-12 inline-block shadow-2xl">
                TREE
              </span>
            </span>
          </h2>
          <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
            Click on any section to explore the branches of my journey
          </p>
        </div>

        {/* Tree Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Trunk */}
          <div
            className="absolute left-1/2 top-0 w-2 bg-gradient-to-b from-white/60 via-white/40 to-white/20 transform -translate-x-1/2"
            style={{ height: "100%" }}
          ></div>

          {/* Sections */}
          <div className="relative space-y-16">
            {sections.map((sectionKey) => (
              <TreeSection
                key={sectionKey}
                sectionKey={sectionKey}
                section={experienceData[sectionKey]}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-8 border-t-4 border-white text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            READY TO COLLABORATE
            <span className="bg-white text-black px-3 py-1 ml-2 transform -skew-x-6 inline-block">
              TOGETHER?
            </span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/all-projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 shadow-2xl border-2 border-white"
            >
              VIEW PROJECTS
              <Code
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
