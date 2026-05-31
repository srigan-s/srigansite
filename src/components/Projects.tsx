import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../lib/navigation';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  live: string;
  image?: string;
  video?: string;
  internal?: boolean;
  spotlight?: boolean;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'LightLink',
      description:
        'A browser-based optical modem firmware demo with BPSK modulation, noisy optical channel impairments, C++ DSP telemetry, ASIC-style lock detection, and a React validation dashboard.',
      technologies: ['C++', 'FastAPI', 'React', 'DSP', 'BPSK', 'ASIC Telemetry'],
      featured: true,
      live: '/projects/lightlink',
      video: '/lightlink-dsp-firmware-simulator.mp4',
      internal: true,
      spotlight: true,
    },
    {
      title: 'ROS2 GNSS RC Car Navigation Demo',
      description:
        'A software-only ROS2 Jazzy simulation of an RC-car robot running an autonomous waypoint mission with noisy GNSS and IMU data, RViz2 visualization, telemetry logs, and validation plots.',
      technologies: ['ROS2 Jazzy', 'Ubuntu Linux', 'Python', 'GNSS/PNT', 'RViz2', 'TF2'],
      featured: true,
      github: 'https://github.com/srigan-s/rc-car-calian',
      live: '/projects/ros2-gnss-nav-demo',
      video: '/ros2-gnss-nav-demo.mov',
      internal: true,
      spotlight: true,
    },
    {
      title: 'Turret Auto Align',
      description:
        'A featured FRC vision project that aligned the turret using Java, Limelight values, AprilTag readings, and a Python ML tuning pipeline trained from robot logs.',
      technologies: ['Java', 'Limelight', 'AprilTag', 'Python', 'Scikit-Learn', 'NumPy'],
      featured: true,
      github: 'https://github.com/srigan-s/ML-PID-Tuner',
      live: '/projects/turret-auto-align',
      video: '/turret-auto-align-field.mov',
      internal: true,
      spotlight: true,
    },
    {
      title: 'MiniAI Web App',
      description:
        'A live gamified learning platform for younger students exploring AI, now serving hundreds of monthly active users.',
      technologies: ['Next.js', 'React', 'PostgreSQL', 'Live Product', 'Education'],
      featured: true,
      github: 'https://github.com/srigan-s/MiniAIWebApp',
      live: '/projects/miniai-web-app',
      video: '/miniai-preview.mov',
      internal: true,
      spotlight: true,
    },

    {
      title: 'Arduino BeatSync',
      description: 'An Arduino system that syncs LED behavior to music timing for a physical audiovisual experience.',
      technologies: ['Arduino', 'C++', 'PWM Timing', 'LED Control'],
      featured: true,
      github: 'https://github.com/srigan-s/ArduinoBeatSync',
      live: 'https://github.com/srigan-s/ArduinoBeatSync',
      image: '/arduino.jpg',
    },
    {
      title: 'TrackQA',
      description:
        'A full-stack engineering dashboard for debugging optical and electromagnetic 3D tracking integrations with Java WebSocket simulation, Three.js visualization, issue detection, Gemini diagnosis, CSV export, and Jira-style report generation.',
      technologies: ['Java', 'WebSocket', 'React', 'TypeScript', 'Three.js', 'Gemini API'],
      featured: true,
      live: '/projects/trackqa',
      video: '/trackqa-demo.mov',
      internal: true,
      spotlight: true,
    },
    {
      title: 'ColourMashAI',
      description: 'A cognitive support web app designed to help users with Alzheimer’s and dementia through pattern recognition games.',
      technologies: ['Next.js', 'React', 'OpenAI API', 'TensorFlow.js'],
      featured: true,
      github: 'https://github.com/srigan-s/ColourMash',
      live: 'https://colourmash.netlify.app/',
      image: '/colourmash.png',
    },
    {
      title: '4-Way Traffic Signal',
      description: 'A physical Arduino model of an intersection with coordinated traffic lights and night lighting logic.',
      technologies: ['Arduino', 'C++', 'Soldering', 'Voltage Regulation'],
      featured: false,
      github: 'https://github.com/srigan-s/EuropeanClash',
      live: 'https://github.com/srigan-s/EuropeanClash',
      image: '/c++.jpg',
    },
    {
      title: 'RecruiterCallAI',
      description: 'A technical interview simulator that generates recruiter-style prompts and feedback using GPT-powered flows.',
      technologies: ['TypeScript', 'OpenAI API', 'React', 'PostgreSQL'],
      featured: true,
      github: 'https://github.com/srigan-s/RecruiterCallAI',
      live: 'https://recruitercallgan.netlify.app/',
      image: '/recruitercall.png',
    },
    {
      title: '120 Years of Olympic Data',
      description: 'A machine learning exploration of long-term Olympic athlete data, participation, and medal prediction trends.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Seaborn'],
      featured: true,
      github: 'https://github.com/srigan-s/UWaterlooDataScienceClub-EDA',
      live: 'https://github.com/srigan-s/UWaterlooDataScienceClub-EDA/blob/main/olympics.ipynb',
      image: '/ml.png',
    },
    {
      title: 'Library Management Software',
      description: 'An object-oriented backend system for handling books, users, inventory, and borrowing logic.',
      technologies: ['Java', 'SQL'],
      featured: false,
      github: 'https://github.com/srigan-s/Library-Management-Software',
      live: 'https://github.com/srigan-s/Library-Management-Software',
      image: '/majestykapps.jpg',
    },
  ];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [isVisible, isPaused, projects.length]);

  return (
    <section ref={sectionRef} id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="section-intro flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-kicker">Projects</span>
              <h2 className="section-title">Work that blends hardware, software, and product instinct.</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            className="carousel-shell"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="carousel-track flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <article key={project.title} className="w-full flex-shrink-0">
                  <div
                    className={`section-card relative grid gap-8 overflow-hidden lg:grid-cols-[1.05fr_0.95fr] ${
                      project.spotlight ? 'border-[color:var(--accent)] shadow-[0_24px_80px_rgba(64,212,106,0.16)]' : ''
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[color:var(--accent)]/6 via-transparent to-white/5"
                      style={{ animation: 'card-glow 8s ease-in-out infinite' }}
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem]">
                      {project.video ? (
                        <video
                          className="h-80 w-full object-cover lg:h-full"
                          src={project.video}
                          autoPlay={project.title !== 'LightLink'}
                          muted={project.title !== 'LightLink'}
                          loop
                          playsInline
                          controls
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-80 w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-full"
                        />
                      )}
                    </div>

                    <div className="relative flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.featured && (
                          <span className="accent-pill">
                            <Star className="mr-2 h-3.5 w-3.5 fill-current" />
                            Featured
                          </span>
                        )}
                        <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                          {project.spotlight ? 'Full case study' : 'Selected build'}
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">{project.title}</h3>
                      <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-5">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        ) : null}

                        {project.internal ? (
                          <button
                            onClick={() => navigateTo(project.live)}
                            className="inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-1"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            Open Project
                          </button>
                        ) : (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-12 bg-[color:var(--accent)]' : 'w-2.5 bg-white/25'
                }`}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>

          <div className="carousel-progress">
            <div
              className="carousel-progress-fill"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
