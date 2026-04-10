import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    className="relative py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5"
  >
    {/* Background Technical Grid */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    <div className="max-w-6xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Editorial Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Inquiry Hub
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            START A <br />
            <span className="text-gray-600 italic font-light text-5xl md:text-7xl">
              CONNECTION.
            </span>
          </h2>

          <p className="text-gray-400 text-lg font-light max-w-md mb-12 leading-relaxed">
            Ready to deploy your next digital ecosystem? Reach out to our
            engineering team in Addis Ababa.
          </p>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Direct Line
              </span>
              <span className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                +251 9xx xxx xxxx
              </span>
            </div>
            <div className="group cursor-pointer">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Electronic Mail
              </span>
              <span className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                hello@zala.tech
              </span>
            </div>
            <div className="group cursor-pointer">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                Physical Lab
              </span>
              <span className="text-xl font-bold group-hover:text-blue-500 transition-colors italic font-light text-gray-400 leading-tight">
                Bole, District 03 <br /> Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </motion.div>
        {/* Right Side: Minimalist Technical Form */}
        <motion.div
          className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-sm"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="bg-[#0a0a0a] p-10 flex flex-col gap-6">
            {/* ... your input fields ... */}

            <motion.button
              type="submit"
              className="mt-8 group relative flex items-center justify-between w-full px-8 py-5 bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Transmit Message</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="relative z-10 group-hover:translate-x-2 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-indigo-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.button>
          </form>
        </motion.div>{" "}
        {/* <--- THIS MUST BE motion.div, NOT motion.form */}
      </div>
    </div>
  </section>
);

export default Contact;
