import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Referral Voucher Portal",
    desc: "Digital system for tracking community health referral vouchers.",
    img: "/project1.png",
  },
  {
    name: "E-Kebele Services",
    desc: "One-stop digital services for kebele administration.",
    img: "/project2.png",
  },
  {
    name: "AI Health Triage",
    desc: "Prototype ML triage for community health workers.",
    img: "/project3.png",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
  >
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-3"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Projects
      </h2>
      <p
        className="text-gray-300 text-lg md:text-xl mb-12"
        style={{ lineHeight: 1.8 }}
      >
        Selected work and prototypes showcasing our approach.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            whileHover={{ y: -8, scale: 1.03, rotate: 0.5 }}
            className="relative bg-black/20 backdrop-blur-md border border-lime-600/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
            </div>

            <div className="p-6 text-center">
              <h4
                className="text-2xl font-bold text-lime-400 mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {p.name}
              </h4>
              <p className="text-gray-300 text-sm md:text-base">{p.desc}</p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 rounded-full bg-lime-400 text-black font-semibold shadow-md hover:bg-lime-500 hover:shadow-lg transition-all duration-300"
                >
                  See details →
                </a>
              </div>
            </div>

            {/* Glow accent */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-lime-400/10 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
