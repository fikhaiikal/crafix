import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = ['Services', 'About', 'Projects', 'Testimonials'];

  return (
    <>
      <header className={`fixed w-full top-0 z-[60] px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${isScrolled ? 'pt-3' : 'pt-6'}`}>
        <div className={`max-w-6xl mx-auto transition-all duration-300 ease-in-out ${isScrolled ? 'max-w-5xl' : 'max-w-6xl'}`}>
          <div className="relative bg-dark-navy/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20">
            <div className="px-6 lg:px-8">
              <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'py-3' : 'py-4'}`}>
                {/* Logo */}
                <div className="flex items-baseline z-10">
                  <span className="text-2xl font-bold font-sora text-white tracking-tight">Crafix</span>
                  <div className="w-[6px] h-[6px] bg-electric-cyan ml-1"></div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:text-electric-cyan transition-colors duration-200 font-inter"
                    >
                      {item}
                    </a>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                  <a
                    href="https://wa.me/6281244283690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-neon-orange hover:bg-neon-orange/90 text-white rounded-full font-medium font-inter transition-all duration-300 ease-in-out hover:scale-105 shadow-lg ${isScrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2'}`}>
                    Let's Talk
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-white hover:text-electric-cyan transition-colors duration-200 z-10"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 relative">
                    <X
                      className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
                        isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                      }`}
                    />
                    <Menu
                      className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-dark-navy z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 pt-20">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className={`text-3xl font-sora text-white hover:text-electric-cyan transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/6281244283690"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-neon-orange hover:bg-neon-orange/90 text-white px-8 py-3 rounded-full font-medium font-inter transition-all duration-300 transform shadow-lg hover:scale-105 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};