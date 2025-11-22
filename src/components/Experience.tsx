import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const experiences = [
    {
      title: "Robotics Engineering Intern",
      company: "Wiz Robotics",
      location: "Toronto (In-Person)",
        description: "IoT Software & Management",
        skills: 
          ["Sensor Evaluation",
          "Hardware–Software Integration",
          "Control Systems",
          "OpenCV",
          "TensorFlow",
          "AI Vision/Perception",
          "Arduino",
          "Embedded IoT Systems",
          "Microcontrollers"],
        icon: "🚀",
      
      image: "/wizrobotics.webp",
    },
    {
      title: "Software Engineer Intern",
      company: "Baycrest Hospital",
      location: "Toronto (Remote)",
      description: `Full Stack Website Development of Baycrest Subsidiary "Daisy's Journey" 💻`,
      skills: ["React.js", "MongoDB", "TypeScript", "Node.js", "SQL", "HTML", "CSS"],
      icon: "🏥",
      image: "/bay.png",
    },
    {
      title: "Founding AI Software Engineer",
      company: "MiniAI",
      location: "Toronto (In-person)",
      description: "Founder & CEO while spearheading the MiniAI Educational Web App 🧑🏽‍💻",
      skills: ["React.js", "SQL", "Node.js", "C#", "MongoDB", "C++", "HTML", "CSS"],
      icon: "🤖",
      image: "/miniAi.png",
    },
    {
      title: "Firmware Engineering Lead",
      company: "FIRST Robotics",
      location: "Toronto (In-Person)",
      description: "Implementing firmware solutions for the robot's cameras, sensors, drivers and routers 🔌",
      skills: ["Java", "AutoCAD"],
      icon: "🤖",
      image: "/firstcube.jpg",
    },
    {
      title: "Electrical Engineer",
      company: "WATonomous",
      location: "Waterloo (In-Person)",
      description: "Developing the windshield wiper control system, focusing on PCB wiring and circuit validation, improving power efficiency ⚡",
      skills: ["PCB Design", "Circuit Testing", "Soldering", "Multimeter", "Oscilloscope"],
      icon: "🚘",
      image: "/wato.jpeg",
    },    
    {
      title: "Student Researcher",
      company: "The University of Waterloo",
      location: "Waterloo (Hybrid)",
      description: "Researching Quantum Algorithms and Software with PHD Students and Professors 🔬",
      skills: ["Qiskit", "Python"],
      icon: "🔬",
      image: "/waterloo.png",
    },
    {
      title: "Robotics Instructor",
      company: "The City of Vaughan",
      location: "Vaughan (In-Person)",
      description: "Teaching robotics using Arduino(C++), and real-world problem-solving ⭐",
      skills: ["Java", "C++"],
      icon: "🎓",
      image: "/vaughan.jpg",
    },
    {
      title: "Software Developer",
      company: "Waterloo Data Science Club",
      location: "Waterloo (In-Person)",
      description: "Full stack Development of Hackathon Sign Up Page⭐",
      skills: ["React", "HTML", "CSS", "Tailwind.css"],
      icon: "📈",
      image: "/uwdsc.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const nextExperience = () => setCurrentIndex((prev) => (prev + 1) % experiences.length);
  const prevExperience = () =>
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-green-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My journey through various roles, each contributing to my growth as a developer and team player.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Carousel (3 cards view) */}
            <div className="hidden md:flex justify-center items-center relative h-[500px]">
              {experiences.map((exp, index) => {
                const offset = (index - currentIndex + experiences.length) % experiences.length;
                let translateX = "";
                let scale = "scale-90";
                let opacity = "opacity-40";
                let zIndex = 1;

                if (offset === 0) {
                  translateX = "translate-x-0";
                  scale = "scale-110";
                  opacity = "opacity-100";
                  zIndex = 2;
                } else if (offset === 1) {
                  translateX = "translate-x-[55%]";
                } else if (offset === experiences.length - 1) {
                  translateX = "-translate-x-[55%]";
                } else {
                  translateX = offset > 0 ? "translate-x-[110%]" : "-translate-x-[110%]";
                  opacity = "opacity-0";
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full transition-all duration-500 ease-in-out ${translateX} ${scale} ${opacity}`}
                    style={{ zIndex }}
                  >
                    <div className="relative h-full flex items-center justify-center">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-sm opacity-25"></div>
                      <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 w-[700px] h-auto max-h-full flex gap-6">
                        <div className="w-2/3">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="text-4xl">{exp.icon}</div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                              <h4 className="text-green-400 font-semibold">{exp.company}</h4>
                              <div className="flex items-center gap-1 text-gray-300 mt-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20"
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
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Carousel (scrollable) */}
            <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide py-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 snap-center relative bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-green-500/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <h4 className="text-green-400 font-semibold">{exp.company}</h4>
                      <div className="flex items-center gap-1 text-gray-300 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-40 object-cover rounded-md mt-2"
                  />
                </div>
              ))}
            </div>

            {/* Controls and Indicators (bottom for both desktop & mobile) */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevExperience}
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-green-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextExperience}
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
