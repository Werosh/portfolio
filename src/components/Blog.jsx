import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Code, Star, Zap } from "lucide-react";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const titles = [
    { text: "BLOG", accent: true },
    { text: "INSIGHTS", accent: false },
    { text: "TUTORIALS", accent: true },
    { text: "THOUGHTS", accent: false },
  ];

  const floatingElements = [
    {
      icon: Code,
      text: "CODING\nTIPS",
      position: "top-[20%] right-[15%]",
      delay: "0s",
      rotation: "rotate-12",
    },
    {
      icon: Star,
      text: "FRESH\nCONTENT",
      position: "top-[60%] right-[10%]",
      delay: "1s",
      rotation: "-rotate-6",
    },
    {
      icon: Zap,
      text: "LATEST\nTRENDS",
      position: "top-[40%] left-[10%]",
      delay: "2s",
      rotation: "rotate-3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-20 bg-black overflow-hidden">
      {/* Grid background */}
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

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Geometric shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse" />
      <div
        className="absolute bottom-10 right-20 w-16 h-16 bg-white/10 rotate-45 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating Elements - Sticker style */}
      <div className="hidden lg:block">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.rotation} transform animate-bounce`}
            style={{
              animationDelay: element.delay,
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
          >
            <div className="relative bg-white text-black px-4 py-3 rounded-lg shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 transform rotate-45" />
              <div className="flex items-center gap-2">
                <element.icon size={16} className="flex-shrink-0" />
                <span className="text-xs font-black leading-tight whitespace-pre-line">
                  {element.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 text-sm font-black rounded-full bg-white text-black border-2 border-white shadow-lg mb-8">
          <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse" />
          <BookOpen className="w-4 h-4 mr-2" />
          <span>BLOG</span>
        </div>

        {/* Animated Title */}
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          READ MY
          <div className="relative inline-block ml-4">
            <span
              className={`block transform transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-8 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              <span
                className={`font-black tracking-tighter ${
                  titles[currentIndex].accent
                    ? "text-black bg-white px-4 py-2 transform -skew-x-12 inline-block shadow-xl"
                    : "text-white"
                }`}
              >
                {titles[currentIndex].text}
              </span>
            </span>
          </div>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 font-medium mb-12 max-w-2xl mx-auto">
          Insights on web development, coding tutorials, and tech trends.
        </p>

        {/* Button */}
        <a
          href="/blog-page"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-black bg-white transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 active:scale-95 shadow-xl border-2 border-white"
        >
          VIEW BLOG
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default Blog;
