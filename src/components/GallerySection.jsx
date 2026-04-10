import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Public Service Portal",
    category: "GovTech",
    size: "md:col-span-2 md:row-span-2",
    // Represents a clean, complex dashboard/city interface
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Emergency Dashboard",
    category: "Infrastructure",
    size: "md:col-span-1 md:row-span-1",
    // Dark UI with data visualizations
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MERN Architecture",
    category: "Backend",
    size: "md:col-span-1 md:row-span-2",
    // Abstract code/server room depth
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Voucher Tracking",
    category: "FinTech",
    size: "md:col-span-1 md:row-span-1",
    // Clean, abstract nodes/connection
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop",
  },
  {
    title: "Mobile Interface",
    category: "Flutter",
    size: "md:col-span-2 md:row-span-1",
    // High-tech mobile development/UI focus
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
];
const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-blue-600" />
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Visual Archive
            </span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter uppercase">
            Project <span className="text-gray-700">Snapshots</span>
          </h2>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${item.size} relative group overflow-hidden bg-[#111] border border-white/5`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />

              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <span className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>

                {/* Decorative scanning line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 blur-sm -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2000ms] pointer-events-none" />
              </div>

              {/* Static ID Label */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                IMG_REF_{idx + 102}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Detail */}
        <div className="mt-12 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <span>Data_Points: 05</span>
          <span>Filtered_By: Engineering_Excellence</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
