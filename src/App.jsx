import React from "react";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutIntro from "./components/AboutIntro";
import TeamSection from "./components/TeamSection";
// import GallerySection from "./components/GallerySection";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <AboutIntro />
        <TeamSection />
        {/* <GallerySection /> */}
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
