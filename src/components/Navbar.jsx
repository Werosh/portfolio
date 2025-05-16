import React, { useState } from "react";
import { Code, Home, User, Box, Briefcase, Mail, Menu, X } from "lucide-react";
import { MdOutlineMedicalServices } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navLinks = [
    { href: "/#home", icon: <Home size={18} />, label: "Home" },
    { href: "/#about", icon: <User size={18} />, label: "About" },
    {
      href: "/#services",
      icon: <MdOutlineMedicalServices size={18} />,
      label: "Services",
    },
    { href: "/projects", icon: <Briefcase size={18} />, label: "Portfolio" },
    { href: "/#skills", icon: <Box size={18} />, label: "Skills" },
    { href: "/#contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/[0.02] backdrop-blur-md border-b border-white/[0.05]">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="relative flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                Werosh
              </span>
              <span className="text-gray-400">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:text-white"
                >
                  <span className="relative z-10 transition-all duration-300 text-violet-500 hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="relative md:hidden flex items-center justify-center w-12 h-12 rounded-full overflow-hidden group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="relative">
                {/* Animated icon that transforms between menu and close */}
                <div className="relative">
                  <Menu
                    className={`w-6 h-6 text-violet-300 transition-all duration-300 transform ${
                      isOpen
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`w-6 h-6 text-violet-300 absolute top-0 left-0 transition-all duration-300 transform ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-90 scale-0"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-violet-500/30 group-hover:border-violet-500/80 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 px-4 ${
            isOpen ? "max-h-[400px] pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 bg-white/[0.02] backdrop-blur-md rounded-xl p-1 border border-white/[0.05] shadow-lg">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:bg-white/[0.05] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 transition-all duration-300 text-violet-500 group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
