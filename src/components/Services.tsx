import React, { useState, useEffect } from 'react';
import { Code, Zap, Globe, Database, Cpu, Shield, Sparkles } from 'lucide-react';
import { ServiceCardV2 } from './ServiceCardV2';

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored applications built to solve your unique business challenges with scalable architecture.',
    features: ['Scalable Architecture', 'Custom UI/UX', 'Performance Optimized'],
    color: 'from-electric-cyan to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline repetitive tasks and optimize workflows to increase efficiency and reduce costs.',
    features: ['Workflow Automation', 'Process Optimization', 'Cost Reduction'],
    color: 'from-neon-orange to-orange-400',
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Connect your systems seamlessly with robust API solutions and third-party integrations.',
    features: ['RESTful APIs', 'Third-party Integration', 'Real-time Sync'],
    color: 'from-purple-500 to-indigo-500',
  },
];

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-electric-cyan animate-pulse" />
            <span className="text-electric-cyan text-sm font-medium font-inter">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sora mb-6">
            Services That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-orange">Growth</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
            We deliver end-to-end software solutions designed to solve complex challenges and create business value.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCardV2
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
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