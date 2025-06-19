import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-electric-cyan" />
              <span className="text-2xl font-bold font-sora text-white">Crafix</span>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              We help businesses build reliable software, automate workflows, and scale smarter with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-cyan transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-sora text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#services" className="text-gray-300 hover:text-electric-cyan transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-electric-cyan transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-electric-cyan transition-colors duration-200">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-electric-cyan transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-sora text-white mb-4">Contact</h3>
            <div className="space-y-3 font-inter">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-electric-cyan" />
                <span>hello@crafix.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-electric-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-electric-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2024 Crafix. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};