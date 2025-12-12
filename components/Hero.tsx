import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
        The <span className="text-blue-500">React Developer</span> <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
             You Need
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        Building modern, responsive, and <strong className="text-slate-800">high quality web applications</strong> with modern tools for exceptional user experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a 
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
        >
          View Projects
        </a>
        <a 
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
        >
          Learn More
        </a>
      </div>

      {/* Terminal Block */}
      <div className="w-full max-w-xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
        <div className="bg-slate-100 rounded-xl overflow-hidden shadow-xl border border-slate-200/60">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-200/50 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="px-6 py-8 text-left font-mono text-sm md:text-base bg-slate-50">
            <span className="text-green-500 font-bold mr-2">$</span>
            <span className="text-slate-800 typing-effect">npm install -g david-alade</span>
            <span className="animate-pulse inline-block w-2 h-4 bg-slate-400 ml-1 align-middle"></span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;