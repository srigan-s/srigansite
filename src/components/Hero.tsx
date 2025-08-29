import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Baseball Diamond Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-96 h-96 border-2 border-green-400 rotate-45 rounded-lg"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
            <span className="block">Srigan</span>
            <span className="block text-green-400">Sivagnanenthirarajah</span>
            <div className="absolute -top-4 -right-4 text-6xl animate-bounce">⚾</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & Baseball Enthusiast
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with the precision of a perfect pitch and the strategy of a championship team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://github.com/srigan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn Profile
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="group animate-bounce hover:animate-none"
          >
            <ChevronDown className="w-8 h-8 text-green-400 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;