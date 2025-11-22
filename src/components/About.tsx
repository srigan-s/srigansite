import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
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

  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, TypeScript, Vue.js' },
    { icon: Database, name: 'Backend Development', description: 'Node.js, Python, Java, C++, Pandas' },
    { icon: Globe, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript ES6+' },
    { icon: Zap, name: 'Modern Tools', description: 'Git, VSCode, AWS, Stackblitz' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Baseball Field Lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-px h-full bg-green-400 transform -translate-x-0.5"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-green-400 transform -translate-y-0.5"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-lg border border-green-500/20 text-center">
                  
                  {/* Profile Image Circle */}
                  <img
                    src="/sriganPFP.jpg"
                    alt="Profile"
                    className="w-52 h-52 rounded-full mx-auto mb-6 border-4 border-green-400 object-cover"
                  />

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Engineer & Team Player
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Engineer who approaches every project with the dedication of a player stepping up to the plate. 
                    I create innovative solutions with the same focus and determination that defines great athletes.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/60 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full">
                      <skill.icon className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
