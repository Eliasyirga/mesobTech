import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-[100] px-6 py-6 transition-all duration-500">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-2xl border ${
          isScrolled
            ? "bg-black/60 border-white/10 backdrop-blur-xl shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg flex items-center justify-center overflow-hidden">
            <span className="text-white font-black text-xl tracking-tighter transition-transform group-hover:scale-110">
              Z
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg font-black tracking-widest uppercase leading-none">
              Zala<span className="text-blue-500">.</span>Tech
            </span>
            <span className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase leading-none mt-1">
              Addis Ababa // 2026
            </span>
          </div>
        </div>

        {/* Desktop Menu - High-End Editorial Style */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {["Work", "Labs", "Services", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA Button */}
          <button className="ml-4 px-5 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button - Minimalist SVG */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 group">
          <div className="w-6 h-[2px] bg-white group-hover:bg-blue-500 transition-colors" />
          <div className="w-4 h-[2px] bg-white self-end group-hover:bg-blue-500 transition-colors" />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
