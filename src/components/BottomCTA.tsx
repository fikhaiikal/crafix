import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const BottomCTA: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-orange/10 border border-electric-cyan/20 rounded-2xl p-12">
          <MessageCircle className="h-16 w-16 text-electric-cyan mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 font-inter leading-relaxed">
            Let's discuss how we can help you build smarter systems, automate workflows, and scale your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-neon-orange hover:bg-neon-orange/90 text-white px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2 group">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-dark-navy px-8 py-4 rounded-lg font-semibold font-inter transition-all duration-200 hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      
      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-electric-cyan/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-orange/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-electric-cyan/8 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};