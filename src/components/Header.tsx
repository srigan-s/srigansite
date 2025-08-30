import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-green-400">⚾</span> Srigan S.
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-900/95 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-white hover:text-green-400 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 mx-4 mt-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;