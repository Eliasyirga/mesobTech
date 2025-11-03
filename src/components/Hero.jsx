import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = ["/back2.jpg", "/back3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#338033]/80 via-black/30 to-transparent animate-gradient bg-[length:400%_400%] z-0"></div>

      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Section: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start lg:w-1/2 gap-4"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "0 0 20px #64ff00, 0 0 30px #64ff00",
            }}
            whileHover={{ scale: 1.05, color: "#64ff00" }}
          >
            MesobTech
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-lg"
            style={{ fontFamily: "'Raleway', sans-serif", lineHeight: "1.8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Rooted in Habesha tradition, we build modern digital solutions —
            software development, AI, web & mobile apps, and digital
            transformation for Ethiopia and beyond.
          </motion.p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-black text-lime-400 font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:bg-lime-500/25"
              style={{ fontFamily: "'Raleway', sans-serif" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block px-8 py-4 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400/20 transition-all hover:scale-105 hover:shadow-md"
              style={{ fontFamily: "'Raleway', sans-serif" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>

          <motion.div
            className="mt-6 text-sm text-gray-300"
            style={{ fontFamily: "'Raleway', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Inspired by the Mesob — connecting communities and services under
            one roof.
          </motion.div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex justify-center items-center w-full lg:w-1/2"
        >
          <motion.img
            src="/mesob.webp"
            alt="MesobTech Visual"
            className="w-3/4 lg:w-full"
            style={{ borderRadius: "1rem" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
