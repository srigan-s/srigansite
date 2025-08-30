import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
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
    <section ref={sectionRef} id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Baseball Field Lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400 rotate-45 rounded-lg"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">Education</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-25"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20">
                
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-slate-700/50 rounded-xl border border-green-500/20 flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="University of Waterloo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-grow text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                      <GraduationCap className="w-6 h-6 text-green-400" />
                      <h3 className="text-2xl font-bold text-white">University of Waterloo</h3>
                    </div>
                    
                    <h4 className="text-xl text-green-400 font-semibold mb-4">
                      Bachelor of Electrical and Computer Engineering
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">Expected Graduation: April 2030</span>
                      </div>
                      
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">Waterloo, Ontario, Canada</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <p className="text-green-200 text-sm italic">
                        "Engineering the future, one algorithm at a time ⚡"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;