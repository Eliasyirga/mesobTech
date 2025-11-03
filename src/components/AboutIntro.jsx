import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => (
  <section
    id="about"
    className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 overflow-hidden"
  >
    {/* Decorative glowing background */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* Text Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2
          className="text-5xl md:text-6xl font-extrabold text-lime-400 mb-8 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          About <span className="text-white">MesobTech</span>
        </h2>

        <p
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg"
          style={{ fontFamily: "'Raleway', sans-serif", lineHeight: "1.8" }}
        >
          At <span className="text-lime-400 font-semibold">MesobTech</span>, we
          blend Ethiopia’s cultural richness with cutting-edge innovation. Our
          mission is to craft scalable software, AI-driven systems, and digital
          solutions that empower communities and organizations across Africa.
        </p>

        <motion.a
          href="#contact"
          className="inline-block px-10 py-4 rounded-full bg-lime-400 text-black font-bold shadow-[0_0_25px_rgba(163,230,53,0.5)] hover:shadow-[0_0_35px_rgba(163,230,53,0.7)] transform transition-all hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="relative group w-full md:w-[420px] h-[280px] md:h-[320px] overflow-hidden rounded-3xl">
          <img
            src="/office.jpg"
            alt="About MesobTech"
            className="w-full h-full object-cover rounded-3xl shadow-[0_0_30px_rgba(163,230,53,0.3)] transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutIntro;
