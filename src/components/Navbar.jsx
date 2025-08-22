import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // at top of file

import {
  Code,
  Home,
  User,
  Box,
  Briefcase,
  Mail,
  Command,
  FolderKanban,
  BookOpen,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingCommandNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);
  // Inside your component:
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      icon: Home,
      label: "HOME",
      href: "#home",
      accent: "bg-black text-white border-2 border-white",
    },
    {
      icon: User,
      label: "ABOUT",
      href: "#about",
      accent: "bg-white text-black",
    },
    {
      icon: BookOpen,
      label: "BLOG",
      href: "#blog",
      accent: "bg-black text-white border-2 border-white",
    },
    {
      icon: Briefcase,
      label: "WORK",
      href: "#projects",
      accent: "bg-white text-black",
    },
    {
      icon: FolderKanban,
      label: "SERVICES",
      href: "#services",
      accent: "bg-black text-white border-2 border-white",
    },
    {
      icon: Box,
      label: "SKILLS",
      href: "#skills",
      accent: "bg-white text-black",
    },
    {
      icon: Mail,
      label: "CONTACT",
      href: "#contact",
      accent: "bg-black text-white border-2 border-white",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hide hint after first interaction or after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowHint(false); // Hide hint after first click
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Command Center - Bottom Right */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <div className="relative">
          {/* Click Me Hint */}
          {showHint && !isExpanded && (
            <div className="absolute bottom-20 right-20 animate-bounce">
              <div className="relative">
                <div className="bg-white text-black px-3 py-2 text-xs font-black border-2 border-black shadow-xl transform -skew-x-12 whitespace-nowrap animate-pulse">
                  CLICK ME!
                </div>
                {/* Arrow pointing to button */}
                <div className="absolute -bottom-1 -right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform rotate-45" />
              </div>
            </div>
          )}

          {/* Floating Navigation Items */}
          <div
            className={`absolute bottom-16 right-0 transition-all duration-700 ease-in-out ${
              isExpanded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-75 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animationDelay: isExpanded ? `${index * 0.1}s` : "0s",
                  }}
                >
                  {/* Label */}
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <div className="bg-black text-white px-3 py-1 text-xs font-black border-2 border-white shadow-xl transform -skew-x-12 whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>

                  {/* Navigation Button */}
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      flex items-center justify-center w-12 h-12 
                      ${item.accent}
                      transform hover:scale-110 active:scale-95 
                      transition-all duration-300 shadow-xl
                      hover:shadow-2xl hover:-translate-y-1
                      font-black text-sm
                      group-hover:animate-pulse
                    `}
                    style={{
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <item.icon size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Main Command Button */}
          <button
            onClick={handleExpand}
            className={`
              relative w-16 h-16 
              ${
                isExpanded
                  ? "bg-white text-black"
                  : "bg-black text-white border-2 border-white"
              }
              transform hover:scale-110 active:scale-95 
              transition-all duration-500 shadow-2xl
              font-black group overflow-hidden
              ${showHint && !isExpanded ? "animate-pulse" : ""}
            `}
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <Command
                size={24}
                className={`transform transition-all duration-500 ${
                  isExpanded ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>

            {/* Enhanced pulse effect when hint is showing */}
            <div
              className={`absolute inset-0 border-2 border-white ${
                showHint && !isExpanded ? "animate-ping" : ""
              } opacity-20`}
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </button>

          {/* Status Indicator */}
          <div className="absolute -top-2 -left-2">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Brand - Top Left */}
      <div className=" pointer-events-auto absolute top-5 right-8">
        <div className="relative group">
          <a href="/" className="block">
            <div className="bg-black text-white px-5 py-3 transform -skew-x-12 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                  <Code size={16} />
                </div>
                <div>
                  <div className="font-black text-lg leading-none">WEROSH</div>
                  <div className="text-xs font-medium opacity-80">.dev</div>
                </div>
              </div>
            </div>
          </a>

          {/* Sticker corner */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
        </div>
      </div>

      {/* Quick Actions - Left Side */}
      <div className="xl:absolute xl:left-8  transform -translate-y-1/2 pointer-events-auto absolute bottom-0 left-5">
        <div className="flex flex-col gap-4">
          {/* Quick Contact */}
          <a
            href="https://wa.link/8yrqoc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative">
              <button className="w-12 h-12 bg-white text-black flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform rotate-45 hover:rotate-0">
                <FaWhatsapp
                  size={16}
                  className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                />
              </button>

              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <div className="bg-white text-black px-3 py-1 text-xs font-black shadow-xl whitespace-nowrap">
                  QUICK CONTACT
                </div>
              </div>
            </div>
          </a>

          {/* Status Indicator */}
          <div className="w-12 h-12 bg-black border-2 border-white flex items-center justify-center shadow-xl">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mb-1" />
              <div className="text-white text-xs font-black">LIVE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default FloatingCommandNav;
