import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

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
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
              Professional <span className="text-green-400">Experience</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-green-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              My journey through various roles, each contributing to my growth as a developer and team player.
            </p>
          </div>

          {/* MOBILE (scrollable) */}
          <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[85%] bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/20"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <h4 className="text-green-400 font-semibold">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                  <div>
                    <h5 className="text-xs font-semibold text-green-400 uppercase mb-1">
                      Skills
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP (carousel) */}
          <div className="hidden sm:flex max-w-4xl mx-auto relative justify-center items-center">
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
                  translate = 'translate-x-[55%]';
                } else if (offset === -1 || offset === experiences.length - 1) {
                  translate = '-translate-x-[55%]';
                } else {
                  opacity = 'opacity-0';
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full transition-all duration-500 ease-in-out ${translate} ${scale} ${opacity}`}
                    style={{ zIndex }}
                  >
                    <div className="relative h-full flex items-center justify-center">
                      <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 w-[700px]">
                        <div className="flex gap-8 items-center">
                          <div className="w-2/3">
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <h4 className="text-xl text-green-400 font-semibold mb-3">{exp.company}</h4>
                            <div className="flex items-center gap-2 mb-4">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{exp.location}</span>
                            </div>
                            <p className="text-gray-300 mb-6">{exp.description}</p>
                            <h5 className="text-sm font-semibold text-green-400 uppercase tracking-wide">
                              Skills Used
                            </h5>
                            <div className="flex flex-wrap gap-2 mt-2">
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
                          <div className="w-1/3 flex-shrink-0">
                            <img
                              src={exp.image}
                              alt={exp.company}
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

          {/* Desktop Controls */}
          <div className="hidden sm:flex justify-center mt-12 gap-8">
            <button
              onClick={prevExperience}
              className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextExperience}
              className="w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
