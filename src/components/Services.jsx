import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Architecture",
    desc: "Custom MERN systems designed for massive scale and low latency.",
    tag: "DEVELOPMENT",
  },
  {
    title: "Native Mobile Ecosystems",
    desc: "Cross-platform Flutter apps with a focus on seamless UX and local offline-first logic.",
    tag: "MOBILE",
  },
  {
    title: "Intelligent Automation",
    desc: "Python-driven ML pipelines and NLP solutions for localized Ethiopian data.",
    tag: "AI & ML",
  },
  {
    title: "UI/UX Editorial Design",
    desc: "Premium, high-performance interfaces that bridge culture and technology.",
    tag: "DESIGN",
  },
  {
    title: "Public Service Systems",
    desc: "Specialized platforms like BahirLink for emergency and community response.",
    tag: "SPECIALIZED",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-32 bg-[#050505] text-white relative overflow-hidden"
  >
    {/* Grid Background */}
    <div
      className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <header className="mb-20 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-blue-500" />
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            Capabilites
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          ENGINEERING <span className="text-gray-600 italic">VALUE.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Zala Tech delivers precise, mission-critical digital infrastructure
          for the Ethiopian innovation sector.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`
              relative p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm 
              hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-500
              ${idx === 0 || idx === 3 ? "md:col-span-3 lg:col-span-4" : "md:col-span-3 lg:col-span-4"}
              ${idx === 4 ? "md:col-span-6 lg:col-span-12" : ""}
            `}
          >
            {/* Top Row: Tag & Number */}
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5 tracking-tighter">
                {s.tag}
              </span>
              <span className="text-white/10 font-mono text-sm tracking-tighter">
                0{idx + 1}
              </span>
            </div>

            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
              {s.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              {s.desc}
            </p>

            <button className="group flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white uppercase mt-auto transition-all">
              Initiate Project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
