import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Baseball Home Plate */}
          <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none">
            <div className="w-16 h-16 bg-green-400 transform rotate-45"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-green-400">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to step up to the plate and collaborate? Reach out through any of these platforms!
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/srigan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">GitHub</span>
            </a>
            
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Email</span>
            </a>
            
            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Instagram</span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Contact;
  )
}