import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Elias Yirga",
    role: "Founder & Full Stack",
    id: "ZT-01",
    img: "/team1.webp",
    portfolio: "https://eliasyirga.vercel.app",
  },
  {
    name: "Biniam Beza",
    role: "Senior Full Stack",
    id: "ZT-02",
    img: "/team2.jpg",
    portfolio: "#",
  },
  {
    name: "Asires Yayeh",
    role: "Senior Mobile Dev",
    id: "ZT-03",
    img: "/team3.jpg",
    portfolio: "#",
  },
];

const TeamSection = () => (
  <section className="relative bg-[#050505] py-32 overflow-hidden border-t border-white/5">
    {/* Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <h3 className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase mb-4">
            Personnel // Core
          </h3>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            ENGINEERING <span className="italic font-light">LEADS.</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
          A specialized collective of engineers focused on high-availability
          systems and modern interface architecture.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#111] border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500">
              {/* Scanline Effect */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-full transition-all duration-[1.5s] ease-in-out" />

              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* ID Badge overlay */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                <span className="text-[10px] font-mono text-blue-400 tracking-tighter">
                  {member.id}
                </span>
              </div>
            </div>

            {/* Meta Data */}
            <div className="mt-8">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {member.name.split(" ")[0]} <br />
                  <span className="text-gray-500">
                    {member.name.split(" ")[1]}
                  </span>
                </h4>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>

              <p className="text-blue-500 font-mono text-[11px] uppercase tracking-[0.2em] mt-4">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
