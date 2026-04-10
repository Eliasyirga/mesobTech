import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => (
  <section
    id="about"
    className="relative bg-[#050505] text-white py-32 overflow-hidden"
  >
    {/* Subtle Tech Accents */}
    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px]" />

    <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
      {/* Content Section */}
      <motion.div
        className="lg:w-3/5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-blue-500" />
          <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">
            Mission 01
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
          SCALING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            DIGITAL HARVEST.
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
          Zala Tech represents the fundamental unit of growth. We architect
          high-performance
          <span className="text-white font-medium"> MERN & Flutter </span>{" "}
          ecosystems designed to solve complex challenges in public service and
          enterprise management across Ethiopia.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
          <div>
            <h4 className="text-white font-bold text-2xl">99.9%</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              System Uptime
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-2xl">Modern</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              UI/UX Standards
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center gap-4 text-white group"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em]">
            Explore our stack
          </span>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </motion.button>
      </motion.div>

      {/* Visual Component Section */}
      <motion.div
        className="lg:w-2/5 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* The "Main" Image with Decorative Border */}
        <div className="relative p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
          <img
            src="/office.jpg"
            alt="Zala Tech Engineering"
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-2xl"
          />

          {/* Floating HUD Element */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-xl shadow-xl hidden md:block">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-blue-200 uppercase tracking-tighter">
                Current Project
              </span>
              <span className="text-white font-bold text-sm">
                BahirLink Dashboard
              </span>
            </div>
          </div>
        </div>

        {/* Background Decorative Squares */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500/30" />
      </motion.div>
    </div>
  </section>
);

export default AboutIntro;
