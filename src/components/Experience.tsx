import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const experiences = [
    {
      title: 'Robotics Engineering Intern',
      company: 'Wiz Robotics',
      location: 'Toronto (In-Person)',
      description: 'Worked across IoT software, hardware-software integration, and AI perception for robotics systems.',
      skills: ['Sensor Evaluation', 'OpenCV', 'TensorFlow', 'Embedded IoT', 'Microcontrollers'],
      image: '/wizrobotics.webp',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Baycrest Hospital',
      location: 'Toronto (Remote)',
      description: 'Built full-stack web experiences for Daisy’s Journey with a focus on usability and production readiness.',
      skills: ['React.js', 'MongoDB', 'TypeScript', 'Node.js', 'SQL'],
      image: '/bay.png',
    },
    {
      title: 'Founding AI Software Engineer',
      company: 'MiniAI',
      location: 'Toronto (In-Person)',
      description: 'Led the product direction and engineering behind an educational AI web platform for young learners.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'C#', 'C++'],
      image: '/miniAi.png',
    },
    {
      title: 'Firmware Engineering Lead',
      company: 'FIRST Robotics',
      location: 'Toronto (In-Person)',
      description: 'Implemented firmware systems for cameras, sensors, drivers, and networking on a competition robot.',
      skills: ['Java', 'AutoCAD'],
      image: '/firstcube.jpg',
    },
    {
      title: 'Electrical Engineer',
      company: 'WATonomous',
      location: 'Waterloo (In-Person)',
      description: 'Developed and validated windshield wiper control hardware with a focus on wiring and power efficiency.',
      skills: ['PCB Design', 'Circuit Testing', 'Soldering', 'Oscilloscope'],
      image: '/wato.jpeg',
    },
    {
      title: 'Student Researcher',
      company: 'University of Waterloo',
      location: 'Waterloo (Hybrid)',
      description: 'Researched quantum algorithms and software alongside PhD students and professors.',
      skills: ['Qiskit', 'Python'],
      image: '/waterloo.png',
    },
    {
      title: 'Robotics Instructor',
      company: 'City of Vaughan',
      location: 'Vaughan (In-Person)',
      description: 'Taught robotics and Arduino-based problem solving through practical, team-centered learning.',
      skills: ['Java', 'C++'],
      image: '/vaughan.jpg',
    },
    {
      title: 'Software Developer',
      company: 'Waterloo Data Science Club',
      location: 'Waterloo (In-Person)',
      description: 'Built full-stack sign-up flows and event-facing product interfaces for the club’s hackathon work.',
      skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
      image: '/uwdsc.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const nextExperience = () => setCurrentIndex((prev) => (prev + 1) % experiences.length);
  const prevExperience = () => setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [isVisible, isPaused, experiences.length]);

  return (
    <section ref={sectionRef} id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="section-intro flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-kicker">Experience</span>
              <h2 className="section-title">Swipe through the teams and roles I’ve worked on.</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevExperience}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextExperience}
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
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.title}`} className="w-full flex-shrink-0">
                  <div className="section-card relative grid gap-8 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-[color:var(--accent)]/7"
                      style={{ animation: 'card-glow 9s ease-in-out infinite' }}
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem]">
                      <img
                        src={experience.image}
                        alt={experience.company}
                        className="h-80 w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-full"
                      />
                    </div>

                    <div className="relative flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="accent-pill">Experience</span>
                        <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                          Team role
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">{experience.title}</h3>
                      <div className="mt-2 text-lg font-semibold text-[color:var(--accent-soft)]">
                        {experience.company}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        <MapPin className="h-4 w-4 text-[color:var(--accent)]" />
                        {experience.location}
                      </div>
                      <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                        {experience.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {experiences.map((experience, index) => (
              <button
                key={`${experience.company}-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-12 bg-[color:var(--accent)]' : 'w-2.5 bg-white/25'
                }`}
                aria-label={`Go to ${experience.company}`}
              />
            ))}
          </div>

          <div className="carousel-progress">
            <div
              className="carousel-progress-fill"
              style={{ width: `${((currentIndex + 1) / experiences.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
