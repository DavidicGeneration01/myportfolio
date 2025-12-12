import React from 'react';
import { FileText, Mail, GraduationCap, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About David</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a passionate and detail-oriented Web Developer with a strong focus on building responsive and user-centered web applications. Proficient in HTML, CSS, JavaScript, and React, I strive to ensure optimal performance and clean code.
              </p>
              <p>
                Committed to continuous learning and development, I contribute to impactful projects that push the boundaries of technology. From e-commerce platforms to interactive data visualizations, I build software that matters.
              </p>
            </div>

            {/* Education & Achievements Block */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
                        <GraduationCap className="w-5 h-5 text-blue-500" />
                        <h3>Education</h3>
                    </div>
                    <p className="text-slate-700 font-medium">BS Software Development</p>
                    <p className="text-slate-500 text-sm">Brigham Young University - Idaho</p>
                    <p className="text-slate-400 text-xs mt-1">09/2022 - 07/2026</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <h3>Achievements</h3>
                    </div>
                    <p className="text-slate-700 font-medium text-sm">Hall Foundation Honor and Scholarship</p>
                    <p className="text-slate-500 text-xs mt-1">Recognized for exemplary learning leadership skills.</p>
                </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/davidalade01" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 transform scale-90"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img 
                  src="/david-alade.png" 
                  onError={(e) => {
                    // Fallback to GitHub image if local file is missing
                    e.currentTarget.src = "https://github.com/davidicgeneration01.png";
                    e.currentTarget.onerror = null; 
                  }}
                  alt="David O. Alade" 
                  className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;