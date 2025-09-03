import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Baycrest Hospital",
      location: "Toronto (Remote)",
      description: "Full Stack Website Development of Baycrest Subsidiary \"Daisy's Journey\" 💻",
      skills: ["React.js", "MongoDB", "TypeScript", "Node.js", "SQL", "HTML", "CSS"],
      icon: "🏥",
      image: "/bay.png"
    },
    {
      title: "Software Test Engineer",
      company: "Majestyk",
      location: "New York City (Remote)",
      description: "Creating and implementing test cases for iOS Apps 📱",
      skills: ["Figma", "Test Engineering", "Swift"],
      icon: "🧪",
      image: "/majestykapps.jpg"
    },
    {
      title: "Founding AI Software Engineer",
      company: "MiniAI",
      location: "Toronto (In person)",
      description: "Founder & CEO while spearheading the MiniAI Educational Web App 🧑🏽‍💻",
      skills: ["React.js", "SQL", "Node.js", "C#", "MongoDB", "C++", "HTML", "CSS"],
      icon: "🤖",
      image: "/miniAi.png"
    },
    {
      title: "Firmware Engineering Lead",
      company: "FIRST Robotics",
      location: "Toronto (In person)",
      description: "Implementing firmware solutions for the robot's cameras, sensors, drivers and routers 🔌",
      skills: ["Java", "AutoCAD"],
      icon: "🤖",
      image: "/firstcube.jpg"
    },
    {
      title: "Student Researcher",
      company: "The University of Waterloo",
      location: "Waterloo (Hybrid)",
      description: "Researching Quantum Algorithms and Software with PHD Students and Professors 🔬",
      skills: ["Qiskit", "Python"],
      icon: "🔬",
      image: "/waterloo.png"
    },
    {
      title: "Robotics Instructor",
      company: "The City of Vaughan",
      location: "Vaughan (In Person)",
      description: "Teaching robotics using Arduino(C++), and real-world problem-solving ⭐",
      skills: ["Java", "C++"],
      icon: "🎓",
      image: "/vaughan.jpg"
    },
    {
      title: "Software Developer",
      company: "Waterloo Data Science Club",
      location: "Waterloo (In Person)",
      description: "Full stack Development of Hackathon Sign Up Page⭐",
      skills: ["React", "HTML", "CSS", "Tailwind.css"],
      icon: "📈",
      image: "/uwdsc.png"
    }
  ];

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

          {/* Ethereal Carousel */}
          <div className="max-w-4xl mx-auto relative flex justify-center items-center">
            <div className="relative w-full h-[500px] flex justify-center items-center">
              {experiences.map((exp, index) => {
                let zIndex = 1;
                let opacity = 'opacity-40';
                let scale = 'scale-90';
                let translate = '';
                
                const offset = index - currentIndex;

                if (offset === 0) {
                  zIndex = 2;
                  opacity = 'opacity-100';
                  scale = 'scale-110';
                  translate = 'translate-x-0';
                } else if (offset === 1 || offset === -experiences.length + 1) {
                  zIndex = 1;
                  opacity = 'opacity-40';
                  scale = 'scale-90';
                  translate = 'translate-x-[55%]';
                } else if (offset === -1 || offset === experiences.length - 1) {
                  zIndex = 1;
                  opacity = 'opacity-40';
                  scale = 'scale-90';
                  translate = '-translate-x-[55%]';
                } else {
                    opacity = 'opacity-0';
                    translate = offset > 0 ? 'translate-x-[110%]' : '-translate-x-[110%]';
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full transition-all duration-500 ease-in-out ${translate} ${scale} ${opacity}`}
                    style={{ zIndex }}
                  >
                    <div className="relative h-full flex items-center justify-center">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-sm opacity-25"></div>
                      <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 w-[700px] h-auto max-h-full">
                        <div className="flex gap-8 items-center">
                          {/* Left side content */}
                          <div className="w-2/3">
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
                            <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
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
                          
                          {/* Right side image */}
                          <div className="w-1/3 flex-shrink-0">
                            <img 
                              src={exp.image}
                              alt={`Image for ${exp.company}`}
                              className="w-full aspect-square object-cover rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-12 gap-8">
            <button
              onClick={prevExperience}
              className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextExperience}
              className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
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
    </section>
  );
};

export default Experience;