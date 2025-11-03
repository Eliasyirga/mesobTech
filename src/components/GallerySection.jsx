// import React from "react";
// import { motion } from "framer-motion";

// const galleryImages = ["/ceo.webp", "/team2.jpg", "/team3.jpg", "/team4.jpg"];

// const GallerySection = () => (
//   <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 overflow-hidden">
//     {/* Background glow */}
//     <div className="absolute inset-0 pointer-events-none">
//       <div className="absolute top-10 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
//     </div>

//     <div className="max-w-7xl mx-auto px-6 relative z-10">
//       {/* Title */}
//       <motion.h3
//         className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-16 text-center"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Work in Action
//       </motion.h3>

//       {/* Asymmetric Grid: left, middle (stacked), right */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
//         {/* Left Image */}
//         <motion.div
//           className="flex justify-end md:col-span-1"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={galleryImages[0]}
//             alt="Project 1"
//             className="w-[280px] h-[360px] object-cover rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] transition-all duration-700 transform hover:scale-105"
//           />
//         </motion.div>

//         {/* Middle Two Images (stacked vertically) */}
//         <motion.div
//           className="flex flex-col justify-between items-center md:col-span-2 gap-6"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={galleryImages[1]}
//             alt="Project 2"
//             className="w-[260px] h-[180px] md:h-[300px] object-cover rounded-2xl shadow-[0_0_25px_rgba(163,230,53,0.2)] hover:shadow-[0_0_35px_rgba(163,230,53,0.4)] transition-all duration-700 transform hover:scale-105"
//           />
//           <img
//             src={galleryImages[2]}
//             alt="Project 3"
//             className="w-[260px] h-[180px] md:h-[300px] object-cover rounded-2xl shadow-[0_0_25px_rgba(163,230,53,0.2)] hover:shadow-[0_0_35px_rgba(163,230,53,0.4)] transition-all duration-700 transform hover:scale-105"
//           />
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="flex justify-start md:col-span-1"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={galleryImages[3]}
//             alt="Project 4"
//             className="w-[280px] h-[360px] object-cover rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.2)] hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] transition-all duration-700 transform hover:scale-105"
//           />
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// export default GallerySection;
