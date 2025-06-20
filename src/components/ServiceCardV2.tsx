import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface ServiceCardV2Props {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
    color: string;
  };
  index: number;
  isVisible: boolean;
}

export const ServiceCardV2: React.FC<ServiceCardV2Props> = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Effect on Hover */}
      <div
        className={`absolute -inset-2 rounded-2xl transition-all duration-500 -z-10 ${service.color} ${
          isHovered ? 'opacity-10 blur-xl' : 'opacity-0 blur-lg'
        }`}
      />
      
      {/* Main Card */}
      <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col">
        {/* Animated Background on Hover */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${service.color} ${
            isHovered ? 'opacity-5' : 'opacity-0'
          }`}
        />

        {/* Icon with Gradient */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
            <service.icon className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-grow">
          <h3 className="text-2xl font-bold font-sora mb-4 text-white">{service.title}</h3>
          <p className="text-gray-400 font-inter leading-relaxed mb-6 flex-grow">{service.description}</p>
          
          {/* Features */}
          <div className="space-y-3 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-electric-cyan" />
                <span className="text-gray-300 font-inter">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="mt-auto inline-flex items-center space-x-2 text-electric-cyan hover:text-white transition-colors duration-300 group">
            <span className="font-medium font-inter">Explore Service</span>
            <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}; 