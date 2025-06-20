import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-electric-cyan/10 border border-electric-cyan/20 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-electric-cyan" />
              <span className="text-electric-cyan text-sm font-medium font-inter">Custom Software Solutions</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sora mb-6 leading-tight">
            Smart Systems.
            <br />
            <span className="text-electric-cyan">Crafted with Code.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
            We help businesses build reliable software, automate workflows, and scale smarter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-neon-orange hover:bg-neon-orange/90 text-white px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2 group">
              <span>Let's Talk</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-dark-navy px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#services" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white/50 animate-bounce hover:text-white transition-colors" />
        </a>
      </div>

      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Primary Electric Cyan Glow */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary Neon Orange Glow */}
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-neon-orange/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Tertiary Cyan Glow - Smaller */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-electric-cyan/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Quaternary Orange Glow - Top Right */}
        <div className="absolute top-32 right-20 w-48 h-48 bg-neon-orange/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Large Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-cyan/5 via-transparent to-neon-orange/5"></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-electric-cyan/5 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};