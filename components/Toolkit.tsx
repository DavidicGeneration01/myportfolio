import React from 'react';
import { PenTool, Code2, Zap, Smartphone } from 'lucide-react';
import { ToolkitItem } from '../types';

const Toolkit: React.FC = () => {
  const items: ToolkitItem[] = [
    {
      title: "Modern UI Design",
      description: "Creating beautiful, responsive interfaces that look great on any device using the latest design trends.",
      iconName: "design"
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, efficient code using the latest JavaScript and TypeScript standards.",
      iconName: "code"
    },
    {
      title: "Performance Optimization",
      description: "Ensure fast load times and smooth interactions with optimized code and assets.",
      iconName: "performance"
    },
    {
      title: "Responsive Development",
      description: "Building applications that work seamlessly across all devices, from desktops to mobile phones.",
      iconName: "responsive"
    }
  ];

  const renderIcon = (name: string) => {
    const className = "w-6 h-6 text-blue-500";
    switch(name) {
      case 'design': return <PenTool className={className} />;
      case 'code': return <Code2 className={className} />;
      case 'performance': return <Zap className={className} />;
      case 'responsive': return <Smartphone className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  return (
    <section id="toolkit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's in my Toolkit</h2>
          <p className="text-slate-600 text-lg">Everything needed to build great products on the web</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {renderIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;