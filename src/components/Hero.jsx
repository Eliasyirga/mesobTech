import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ZalaHero = () => {
  const canvasRef = useRef(null);

  // Background Particle Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = "rgba(59, 130, 246, 0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Marquee Content
  const tickerItems = [
    "SYSTEM_INIT_SUCCESS",
    "BAHIRLINK_V2.0_DEPLOYED",
    "LATENCY: 24MS",
    "UPTIME: 99.9%",
    "E-KEBELE_SYNC_ACTIVE",
    "MERN_STACK_OPTIMIZED",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-sans">
      {/* --- NEW: TOP MOVING DATA TICKER --- */}
      <div className="absolute top-0 left-0 w-full h-10 bg-blue-600/5 border-b border-white/5 backdrop-blur-sm z-50 flex items-center overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono text-blue-400/60 tracking-[0.3em] uppercase flex items-center"
            >
              <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 animate-pulse" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 1. Animated Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* 2. Editorial Grid with Pulse */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 3. Floating Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]"
      />

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge with Slide In */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-[0.4em] uppercase backdrop-blur-md">
              Lab_Access: Authorized
            </span>
          </motion.div>

          {/* Main Typography */}
          <div className="text-center relative">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-7xl md:text-[140px] font-black text-white leading-none tracking-tighter mb-8"
            >
              ZALA
              <span className="relative inline-block ml-4 text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-700">
                TECH
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-blue-400/50 blur-sm pointer-events-none"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-tight"
            >
              Architecting{" "}
              <span className="text-white font-medium">mission-critical</span>{" "}
              digital infrastructure for the next generation of Ethiopian
              enterprise.
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button className="group relative px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 transition-colors group-hover:text-white">
                  Start Architecture
                </span>
                <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>

              <button className="group flex items-center gap-3 px-10 py-5 bg-transparent border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
                The Lab
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Tech Indicators */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-8">
          {["01_MERN", "02_FLUTTER", "03_PYTHON"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-gray-700 font-mono rotate-90 origin-left tracking-[0.3em]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-10 bottom-10 hidden lg:block">
        <div className="text-[10px] text-gray-500 font-mono tracking-[0.5em] uppercase">
          ADDIS_ABABA // 09.0414° N
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default ZalaHero;
