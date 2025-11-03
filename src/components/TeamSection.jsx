import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Elias Yirga",
    role: "Founder & Full Stack Developer",
    img: "/team1.webp",
    portfolio: "https://eliasyirga.vercel.app",
  },
  {
    name: "Biniam Beza",
    role: "Senior Full Stack Developer",
    img: "/team2.jpg",
    portfolio: "https://your-portfolio-link.com/biniam",
  },
  {
    name: "Asires Yayeh",
    role: "Senior Mobile APP Developer",
    img: "/team3.jpg",
    portfolio: "https://your-portfolio-link.com/asires",
  },
];

const TeamSection = () => (
  <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 overflow-hidden">
    {/* Subtle glowing background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-20 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-16 text-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h3>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
          >
            {/* Only the Image */}
            <div className="flex justify-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-[280px] h-[400px] object-cover"
              />
            </div>

            {/* Name */}
            <h4
              className="mt-6 text-2xl font-bold text-lime-400"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {member.name}
            </h4>

            {/* Role */}
            <p
              className="text-gray-300 text-lg mb-3"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {member.role}
            </p>

            {/* Portfolio Link */}
            <a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-white font-medium underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              View Portfolio →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
