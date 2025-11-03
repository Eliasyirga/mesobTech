import React from "react";

const Nav = () => (
  <nav className="fixed w-full top-0 left-0 z-50 flex items-center justify-between max-w-7xl mx-auto">
    {/* Logo and Brand */}
    <div className="flex items-center gap-4 px-6">
      <img
        src="/logo.webp"
        alt="Mesob Tech"
        className="h-24 w-24 object-contain transform transition-transform hover:scale-110 duration-300"
      />
      <div
        className="text-white text-2xl md:text-3xl font-extrabold tracking-wide"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        MesobTech
      </div>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-10 text-lg text-lime-400 font-medium px-6">
      {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-white transition-colors duration-300 transform hover:scale-110"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item}
        </a>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div
      className="md:hidden text-lime-400 text-3xl transition-transform transform hover:scale-125 cursor-pointer px-6"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      ☰
    </div>
  </nav>
);

export default Nav;
