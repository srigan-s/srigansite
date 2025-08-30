import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Baycrest Hospital",
      location: "Toronto (Remote)",
      description: "Full Stack Website Development of Baycrest Subsidiary \"Daisy's Journey\" 💻",
      skills: ["React.js", "MongoDB", "TypeScript", "Node.js", "SQL", "HTML", "CSS"],
      icon: "🏥"
    },
    {
      title: "Software Test Engineer",
      company: "Majestyk",
      location: "New York City (Remote)",
      description: "Creating and implementing test cases for iOS Apps 📱",
      skills: ["Figma", "Test Engineering", "Swift"],
      icon: "🧪"
    },
    {
      title: "Founding AI Software Engineer",
      company: "MiniAI",
      location: "Toronto (In person)",
      description: "Developing the MiniAI Educational Web App 🧑🏽‍💻",
      skills: ["React.js", "SQL", "Node.js", "C#", "MongoDB", "C++", "HTML", "CSS"],
      icon: "🤖"
    },
    {
      title: "Firmware Engineering Lead",
      company: "FIRST Robotics",
      location: "Toronto (In person)",
      description: "Implementing firmware solutions for the robot's cameras, sensors, drivers and routers 🔌",
      skills: ["Java", "AutoCAD"],
      icon: "🤖"
    },
    {
      title: "Student Researcher",
      company: "The University of Waterloo",
      location: "Waterloo (Hybrid)",
      description: "Researching Quantum Algorithms and Software with PHD Students and Professors 🔬",
      skills: ["Qiskit", "Python"],
      icon: "🔬"
    },
    {
      title: "Robotics Instructor",
      company: "The City of Vaughan",
      location: "Vaughan (In Person)",
      description: "Teaching robotics using Arduino(C++), and real-world problem-solving ⭐",
      skills: ["Java", "C++"],
      icon: "🎓"
    }
  ];

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Baseball Bases Pattern */}
          <div className="absolute top-20 right-20 opacity-5 pointer-events-none">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-8 h-8 bg-green-400 rotate-45"></div>
              <div className="w-8 h-8 bg-green-400 rotate-45"></div>
              <div className="w-8 h-8 bg-green-400 rotate-45"></div>
              <div className="w-8 h-8 bg-green-400 rotate-45"></div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="text-green-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My journey through various roles, each contributing to my growth as a developer and team player.
            </p>
          </div>

          {/* Experience Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {experiences.map((exp, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-25"></div>
                      <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 h-full">
                        
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-4xl">{exp.icon}</div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <h4 className="text-xl text-green-400 font-semibold mb-3">{exp.company}</h4>
                            
                            <div className="flex items-center gap-2 mb-4">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wide">Skills Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevExperience}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextExperience}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-green-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;