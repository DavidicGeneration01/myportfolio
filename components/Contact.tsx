import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Me</h2>
          <p className="text-slate-600 text-lg">
            I'm always open to discussing new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <form 
          action="https://formsubmit.co/el/jareti" 
          method="POST" 
          className="space-y-6"
        >
          {/* Configuration for FormSubmit */}
          <input type="hidden" name="_autoresponse" value="Thanks for contacting me! I will get back to you soon." />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Portfolio Submission" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              placeholder="How can I help you?"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex justify-center items-center"
          >
            Send Message
            <Send className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;