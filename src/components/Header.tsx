import React, { useEffect, useState } from 'react';
import { Menu, X, FileText, ArrowLeft } from 'lucide-react';
import { navigateTo } from '../lib/navigation';

const Header = ({ pathname }: { pathname: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isProjectPage =
    pathname === '/projects/turret-auto-align' ||
    pathname === '/projects/miniai-web-app' ||
    pathname === '/projects/ros2-gnss-nav-demo';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    if (isProjectPage) {
      navigateTo('/');
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      setIsMenuOpen(false);
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled
            ? 'border-white/10 bg-black/55 shadow-ambient backdrop-blur-2xl'
            : 'border-white/0 bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3 md:px-7">
          <button
            onClick={() => (isProjectPage ? navigateTo('/') : scrollToSection('#home'))}
            className="flex items-center gap-3 text-left"
          >
            <span className="accent-pill">SS</span>
            <div>
              <div
                className="text-sm font-semibold uppercase tracking-[0.35em] text-white/75"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Srigan
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {isProjectPage && (
              <button
                onClick={() => navigateTo('/')}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/78 transition-colors duration-300 hover:text-[color:var(--accent-soft)]"
              >
                <ArrowLeft className="h-4 w-4" />
                Home
              </button>
            )}
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/78 transition-colors duration-300 hover:text-[color:var(--accent-soft)]"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mx-3 mb-3 rounded-[1.5rem] border border-white/10 bg-black/85 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {isProjectPage && (
                <button
                  onClick={() => navigateTo('/')}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-white/85 transition-colors duration-300 hover:bg-white/5 hover:text-[color:var(--accent-soft)]"
                >
                  Home
                </button>
              )}
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-white/85 transition-colors duration-300 hover:bg-white/5 hover:text-[color:var(--accent-soft)]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-white/5 px-4 py-3 text-sm font-semibold text-white"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
