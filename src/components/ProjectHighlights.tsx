import React from 'react';
import { ExternalLink, TrendingUp, Zap } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform Optimization',
    description: 'Transformed a legacy e-commerce system into a modern, scalable platform that increased conversion rates by 40% and reduced load times by 60%.',
    icon: TrendingUp,
    tags: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    result: '40% increase in conversions',
  },
  {
    title: 'Workflow Automation Suite',
    description: 'Built a comprehensive automation platform that streamlined operations for a manufacturing company, reducing manual processes by 70%.',
    icon: Zap,
    tags: ['Python', 'Docker', 'Kubernetes', 'API Integration'],
    result: '70% reduction in manual work',
  },
];

export const ProjectHighlights: React.FC = () => {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-4">
            Project <span className="text-electric-cyan">Highlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Real results from real projects that made a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-electric-cyan/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-electric-cyan/10 border border-electric-cyan/20 rounded-lg p-3 group-hover:bg-electric-cyan/20 group-hover:border-electric-cyan/40 transition-all duration-300">
                  <project.icon className="h-8 w-8 text-electric-cyan" />
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-electric-cyan transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-semibold font-sora mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-neon-orange font-semibold font-inter">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-electric-cyan/7 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neon-orange/7 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};