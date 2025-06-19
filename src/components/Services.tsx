import React from 'react';
import { Code, Zap, Globe, Database, Cpu, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored applications built to solve your unique business challenges with scalable architecture.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline repetitive tasks and optimize workflows to increase efficiency and reduce costs.',
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Connect your systems seamlessly with robust API solutions and third-party integrations.',
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description: 'Design and implement secure, scalable databases that grow with your business needs.',
  },
  {
    icon: Cpu,
    title: 'Cloud Architecture',
    description: 'Build resilient, scalable cloud infrastructure optimized for performance and cost.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implement enterprise-grade security measures and ensure regulatory compliance.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-4">
            Our <span className="text-electric-cyan">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Comprehensive software solutions designed to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-electric-cyan/30 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-electric-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold font-sora mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-electric-cyan/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-neon-orange/8 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};