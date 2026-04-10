import React from "react";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 py-12 pb-20">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Brand & Status Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-white font-black tracking-widest text-sm uppercase">
              Zala<span className="text-blue-500">.</span>Tech
            </span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
            System Status: <span className="text-blue-500/80">Operational</span>{" "}
            <br />
            Node: Addis_Ababa_Sector_01
          </div>
        </div>

        {/* Technical Links */}
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Legal // Docs
            </span>
            <div className="flex gap-6">
              <a
                className="text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-tighter"
                href="#"
              >
                Privacy
              </a>
              <a
                className="text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-tighter"
                href="#"
              >
                Terms
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Connect // Social
            </span>
            <div className="flex gap-6">
              <a
                className="text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-tighter"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-tighter"
                href="#"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top / Branding */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-4 border border-white/10 px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-all duration-500"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Top
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Zala Technology Lab — All Rights Reserved
        </div>
        <div className="text-[10px] font-mono text-gray-600 tracking-tighter">
          DESIGNED_BY_ELIAS_YIRGA // V.2.0.6
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
