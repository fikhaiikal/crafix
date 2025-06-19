import React from 'react';
import { Target, Users, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision-Driven',
    description: 'We deliver exactly what you need, when you need it, with meticulous attention to detail and quality.',
  },
  {
    icon: Users,
    title: 'Partnership Focused',
    description: 'Your success is our mission. We collaborate closely to understand your vision and exceed expectations.',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies and proven methodologies to give you a competitive advantage.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-4">
            Why Choose <span className="text-electric-cyan">Crafix</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Three core principles that drive everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-8 flex justify-center">
                <div className="bg-electric-cyan/10 border border-electric-cyan/20 rounded-full p-6 group-hover:bg-electric-cyan/20 group-hover:border-electric-cyan/40 transition-all duration-300">
                  <value.icon className="h-12 w-12 text-electric-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold font-sora mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-orange/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-electric-cyan/6 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};