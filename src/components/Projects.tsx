import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Baseball Analytics Dashboard",
      description: "A comprehensive web application for tracking baseball statistics and player performance with real-time data visualization.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      featured: true,
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and inventory management system.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe"],
      featured: false,
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced filtering.",
      technologies: ["React", "Firebase", "Tailwind CSS", "PWA"],
      featured: false,
      github: "#",
      live: "#"
    },
    {
      title: "Weather Forecast API",
      description: "RESTful API service providing accurate weather forecasts with machine learning-based predictions and historical data analysis.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      featured: false,
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with content scheduling, engagement tracking, and performance insights.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
      featured: true,
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      featured: false,
      github: "#",
      live: "#"
    }
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full flex flex-col">
                    
                    {project.featured && (
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-400 font-medium">Featured Project</span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
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
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;