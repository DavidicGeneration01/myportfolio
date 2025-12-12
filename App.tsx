import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Toolkit from './components/Toolkit';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Toolkit />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;