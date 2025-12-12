import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const SkillLogo: React.FC<{ name: string; color: string; label: string }> = ({ name, color, label }) => (
  <div className="flex flex-col items-center gap-3 p-4 group cursor-default">
    <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300`}>
        <span className={`font-bold text-xl md:text-2xl ${color}`}>{label}</span>
    </div>
    <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm md:text-base">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const chartData = [
    { name: 'Frontend', value: 65, color: '#3b82f6' }, // blue-500
    { name: 'Backend', value: 25, color: '#10b981' }, // green-500
    { name: 'Tools', value: 10, color: '#f59e0b' },  // amber-500
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <p className="text-slate-600 text-lg">Technologies I leverage to build scalable solutions</p>
        </div>

        {/* Logos Grid - Expanded based on Resume */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
            <SkillLogo name="React" color="text-cyan-400" label="Re" />
            <SkillLogo name="Next.js" color="text-slate-900" label="Nx" />
            <SkillLogo name="TypeScript" color="text-blue-700" label="TS" />
            <SkillLogo name="Tailwind" color="text-cyan-500" label="Tw" />
            <SkillLogo name="Node.js" color="text-green-600" label="Nd" />
            <SkillLogo name="Git" color="text-orange-600" label="Gt" />
        </div>

        {/* Skill Distribution Chart */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Proficiency</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                    I possess a versatile skill set with a strong emphasis on Frontend Architecture, complemented by backend capabilities.
                </p>
                <ul className="space-y-3 inline-block text-left text-sm md:text-base">
                    <li className="flex items-center text-slate-700">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span> Frontend (React, HTML/CSS, Tailwind)
                    </li>
                    <li className="flex items-center text-slate-700">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span> Backend (Node.js, REST)
                    </li>
                    <li className="flex items-center text-slate-700">
                        <span className="w-3 h-3 rounded-full bg-amber-500 mr-3"></span> Tools (Git)
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/3 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#1e293b', fontWeight: 600 }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;