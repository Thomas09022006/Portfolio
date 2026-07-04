import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-105 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Interactive Playground and Models */}
        <Dashboard />
        
        <Certifications />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
