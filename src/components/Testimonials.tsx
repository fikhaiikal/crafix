import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Crafix transformed our entire business process. Their automation solutions saved us 15 hours per week and increased our efficiency dramatically.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Industries",
    rating: 5,
  },
  {
    quote: "The team's expertise in API integration was exactly what we needed. They delivered a seamless solution that connected all our systems perfectly.",
    author: "Michael Rodriguez",
    role: "VP Engineering, DataSync Corp",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and innovative. Crafix exceeded our expectations and delivered a custom solution that scaled with our growth.",
    author: "Emily Johnson",
    role: "Founder, GrowthLab",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-sora mb-4">
            What Our <span className="text-electric-cyan">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-electric-cyan/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-electric-cyan mb-4" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neon-orange fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-300 font-inter leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <div className="font-semibold font-sora text-white group-hover:text-electric-cyan transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 font-inter text-sm mt-1">
                    {testimonial.role}
                  </div>
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Soft Gradient Glow Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-electric-cyan/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-neon-orange/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-cyan/4 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};