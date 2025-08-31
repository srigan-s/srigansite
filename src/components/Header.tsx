import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const initialVisibilityTimer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(initialVisibilityTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md shadow-lg border-b border-green-500/20'
          : 'bg-slate-900' // Changed from 'bg-transparent'
      } ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ overflow: 'hidden' }}
    >
      {/* Animated Liquid Metal Background (only on scroll) */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-slate-900 via-green-900 to-emerald-900 bg-size-200-200 animate-gradient-shift transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true" 
      />

      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`text-2xl font-bold text-white transition-all duration-500 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="text-yellow-400">⚾</span> Srigan S.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-white hover:text-green-300 transition-all duration-500 relative group
                  ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-semibold transition-all duration-500 transform hover:scale-105
                ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${0.3 + navItems.length * 0.1 + 0.1}s` }}
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white transition-all duration-500 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.6s' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-950/90 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-white hover:text-green-300 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 mx-4 mt-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        )}
      </nav>

      {/* Keyframes for animations */}
      <style>{`
        .bg-size-200-200 {
          background-size: 200% 200%;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
};

export default Header;