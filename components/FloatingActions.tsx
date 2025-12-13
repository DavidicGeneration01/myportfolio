import React, { useState, useEffect } from 'react';
import { ArrowUp, LayoutGrid, MessageSquare } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
      
      {/* Decorative Menu Button (mimicking screenshot) */}
      <button className="w-12 h-12 bg-white text-slate-600 rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform">
        <LayoutGrid className="w-5 h-5" />
      </button>

      {/* Chat Button - Scrolls to Contact */}
      <button 
        onClick={scrollToContact}
        className="w-12 h-12 bg-white text-blue-600 rounded-full shadow-lg border-2 border-blue-100 flex items-center justify-center hover:scale-110 transition-transform relative"
        aria-label="Contact Me"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      {/* Scroll Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;