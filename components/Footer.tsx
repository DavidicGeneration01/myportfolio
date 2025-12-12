import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center">
            <span className="font-extrabold text-xl text-slate-700 tracking-tight">David</span>
            <span className="text-blue-500 text-2xl leading-none">.</span>
        </div>

        <div className="text-slate-500 text-sm">
           © {new Date().getFullYear()} David O. Alade. All rights reserved.
        </div>

        <div className="flex space-x-6">
            <a href="#about" className="text-slate-600 hover:text-blue-500 transition-colors text-sm font-medium">About</a>
            <a href="#skills" className="text-slate-600 hover:text-blue-500 transition-colors text-sm font-medium">Skills</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-500 transition-colors text-sm font-medium">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-500 transition-colors text-sm font-medium">Contact</a>
        </div>

        <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/davidalade01" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow-sm text-slate-600 hover:text-blue-600 hover:shadow-md transition-all">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/davidicgeneration01" target="_blank" rel="noreferrer" className="bg-white p-2 rounded-full shadow-sm text-slate-600 hover:text-slate-900 hover:shadow-md transition-all">
                <Github className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;