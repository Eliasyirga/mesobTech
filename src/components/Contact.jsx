import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <section
    id="contact"
    className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
  >
    {/* Background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      <p className="text-gray-300 text-center mb-12">
        Reach out for projects, partnerships, or general inquiries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Office Info */}
        <motion.div
          className="p-8 bg-black/20 backdrop-blur-md rounded-3xl border border-lime-600 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="font-semibold text-lime-400 text-xl mb-3">Office</h4>
          <p className="text-gray-300 mb-2">Addis Ababa, Ethiopia</p>
          <p className="text-gray-300 mb-2">Email: hello@mesobtech.com</p>
          <p className="text-gray-300">Phone: +251 9xx xxx xxxx</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="p-8 bg-black/20 backdrop-blur-md rounded-3xl border border-lime-600 shadow-lg flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileTap={{ scale: 0.995 }}
        >
          <label className="block text-sm text-gray-300">Name</label>
          <input
            className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all duration-300"
            placeholder="Your name"
          />

          <label className="block text-sm text-gray-300 mt-4">Email</label>
          <input
            className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all duration-300"
            placeholder="you@domain.com"
          />

          <label className="block text-sm text-gray-300 mt-4">Message</label>
          <textarea
            className="mt-2 w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-all duration-300"
            rows={5}
            placeholder="Tell us about your project..."
          />

          <motion.button
            type="submit"
            className="mt-6 px-6 py-3 rounded-full bg-lime-400 text-black font-semibold shadow-lg hover:bg-lime-500 hover:shadow-2xl transition-all duration-300 self-start"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
