import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Software Development",
    desc: "Custom web & mobile applications, backend systems, and APIs.",
  },
  {
    title: "AI Solutions",
    desc: "ML pipelines, NLP, computer vision, and automation.",
  },
  {
    title: "IT Services",
    desc: "Infrastructure, cloud, and managed IT solutions.",
  },
  {
    title: "Web & App Development",
    desc: "Responsive, accessible, and beautiful interfaces.",
  },
  {
    title: "Digital Transformation",
    desc: "Strategy, implementation, and change management.",
  },
];

const Services = () => (
  <section
    id="services"
    className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
  >
    {/* Background glow circles */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-3"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Services
      </h2>
      <p
        className="text-gray-300 text-lg md:text-xl mb-12"
        style={{ lineHeight: 1.8 }}
      >
        Comprehensive services designed for startups, NGOs, and enterprises.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative p-6 rounded-3xl bg-black/20 border border-lime-600/40 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <h4 className="text-xl md:text-2xl font-bold text-lime-400 mb-2 relative">
              {s.title}
              <span className="absolute -bottom-1 left-0 w-16 h-1 bg-lime-400 rounded-full"></span>
            </h4>
            <p className="text-gray-300 text-base md:text-lg mt-2">{s.desc}</p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 rounded-full bg-lime-400 text-black font-semibold shadow-md hover:shadow-lg hover:bg-lime-500 transition-all duration-300"
              >
                Request Quote →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
