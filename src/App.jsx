import React from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-obsidian text-slate-100 selection:bg-emerald-400/25 selection:text-emerald-300">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
