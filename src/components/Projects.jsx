import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Referral Voucher Portal",
    type: "Public Health // Fintech",
    desc: "A secure digital ecosystem for tracking and validating community health referral vouchers in real-time.",
    img: "/project1.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "E-Kebele Services",
    type: "GovTech // Infrastructure",
    desc: "Streamlining local administration through a unified digital service portal for Ethiopian kebele management.",
    img: "/project2.png",
    tags: ["Flutter", "Express", "PostgreSQL"],
  },
  {
    name: "AI Health Triage",
    type: "Machine Learning // R&D",
    desc: "Predictive ML triage prototype designed to assist community health workers with diagnostic prioritization.",
    img: "/project3.png",
    tags: ["Python", "TensorFlow", "React Native"],
  },
];

const Projects = () => (
  <section id="projects" className="py-32 bg-[#050505] text-white relative">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
        <div className="max-w-xl">
          <h3 className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">
            Selected Deployments
          </h3>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            SYSTEM <br />
            <span className="text-gray-600">ARCHIVE.</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm font-mono mt-6 md:mt-0">
          [ 2024 - 2026 // ADDIS ABABA ]
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-32">
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
          >
            {/* Image Side with "Device Frame" feel */}
            <div className="w-full lg:w-3/5 group cursor-pointer">
              <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#111]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                />
                {/* Technical Overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono border border-white/10 text-blue-400">
                  SYSTEM_ID: 00{idx + 1}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5">
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest block mb-4">
                {p.type}
              </span>
              <h4 className="text-4xl font-bold mb-6 tracking-tight text-white uppercase">
                {p.name}
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                {p.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold text-gray-500 border border-gray-800 px-3 py-1 rounded-full uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-4 group">
                <span className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-blue-500 pb-1">
                  Explore Architecture
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
