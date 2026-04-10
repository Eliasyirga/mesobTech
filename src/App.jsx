import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutIntro from "./components/AboutIntro";
import TeamSection from "./components/TeamSection";
import GallerySection from "./components/GallerySection";
import LoadingPage from "./components/LoadingPage"; // 1. Import the loader

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // 2. Manage the loading state

  return (
    <div className="bg-[#050505]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* 3. Show loading page until onLoadingComplete is triggered */
          <LoadingPage
            key="loader"
            onLoadingComplete={() => setIsLoading(false)}
          />
        ) : (
          /* 4. Show the main content once loading is done */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Nav />
            <main>
              <Hero />
              <AboutIntro />
              <TeamSection />
              <GallerySection />
              <Services />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
