import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "ColourMashAI",
      description: "Interactive web application designed to help individuals with Alzheimer’s and dementia improve memory and cognitive skills through pattern recognition.",
      technologies: ["Next.js","React", "OpenAI API", "Tensorflow.js"],
      featured: true,
      github: "https://github.com/srigan-s/ColourMash",
      live: "https://colourmash.netlify.app/",
      image: "/colourmash.png"
    },
    {
      title: "RecruterCallAI",
      description: "AI-powered technical interview preparation platform that simulates realistic recruiter-style interviews. It leverages GPT-4.1 to generate customized technical interview questions, provide feedback, and help users practice in a more authentic setting.",
      technologies: ["Typescript", "OpenAI API", "React", "PostgresSQL"],
      featured: true,
      github: "https://github.com/srigan-s/RecruiterCallAI",
      live: "https://recruitercallgan.netlify.app/",
      image: "/recruitercall.png"
    },
    {
      title: "120 Years of Olympic Data - ML",
      description: "This project explores 120 years of Olympic athlete data to uncover trends in participation, demographics, and performance, and predicts medal success using machine learning.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
      featured: true,
      github: "https://github.com/srigan-s/UWaterlooDataScienceClub-EDA",
      live: "https://github.com/srigan-s/UWaterlooDataScienceClub-EDA/blob/main/olympics.ipynb",
      image: "/ml.png"
    },
    {
      title: "MiniAI Web App",
      description: "Full-Stack platform that helps young learners explore artificial intelligence in an enjoyable, gamified environment. Through a journey of mini-games, projects, and prompts, kids build core AI intuition like prompt crafting, logic thinking, and basic ML principles.",
      technologies: ["Next.js", "React", "PostgreSQL", "CSS"],
      featured: false,
      github: "https://github.com/srigan-s/MiniAIWebApp",
      live: "https://miniai-learn.netlify.app/",
      image: "/learn.png"
    },

    {
      title: "4-Way Traffic Signal",
      description: "The project makes a 4-way intersection and a street lamp. Using Arduino (C++) to create functional traffic lights.This project is a functional intersection model built on a cardboard base with Arduino-controlled traffic lights and a street lamp, using LEDs, popsicle sticks, straws, and precise wiring to simulate a real-life 15-second light cycle and automatic night lighting.",
      technologies: ["C++", "Arduino", "Soldering", "Voltage Regulation"],
      featured: false,
      github: "https://github.com/srigan-s/EuropeanClash",
      image: "/c++.jpg"
    },
  
    {
      title: "Library Management Software",
      description: "Full Backend implemented with Object-Oriented Programming (OOP) principles, leveraging encapsulation, inheritance, and polymorphism to manage books, users, transactions, and inventory, providing efficient handling of borrowing, returns, and data consistency.",
      technologies: ["Java", "SQL"],
      featured: false,
      github: "https://github.com/srigan-s/Library-Management-Software",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Baseball Stitching Pattern */}
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-400">
              <path d="M20,30 Q50,10 80,30 Q50,50 20,30" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20,70 Q50,50 80,70 Q50,90 20,70" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A curated selection of my recent work, each project representing a home run in innovation and technical excellence.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="max-w-6xl mx-auto relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                      <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 overflow-hidden">
                  
                        {/* Project Image */}
                        <div className="relative h-48 bg-slate-700/50 overflow-hidden group">
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                          
                        </div>

                        <div className="p-6">
                          {project.featured && (
                            <div className="flex items-center gap-2 mb-4">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-yellow-400 font-medium">Featured Project</span>
                            </div>
                          )}

                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex gap-4">
                            <a
                              href={project.github}
                              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group/link"
                            >
                              <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                              <span>View Code</span>
                            </a>
                            <a
                              href={project.live}
                              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group/link"
                            >
                              <ExternalLink className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
                              <span>Live Demo</span>
                            </a>
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
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
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

export default Projects;