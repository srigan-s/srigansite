import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.18 });

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code, name: 'Frontend systems', description: 'React, TypeScript, Vue, animation-rich UI' },
    { icon: Database, name: 'Product engineering', description: 'Node.js, Python, Java, C++, data workflows' },
    { icon: Globe, name: 'Web architecture', description: 'Responsive builds, APIs, accessibility, polish' },
    { icon: Zap, name: 'Hands-on making', description: 'AWS, Git, OpenCV, embedded tooling, rapid prototyping' },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="section-intro grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="section-kicker">About</span>
              <h2 className="section-title">A builder who likes clarity, energy, and strong visual rhythm.</h2>
            </div>
            <p className="section-copy max-w-none">
              I approach products the same way I approach engineering work: understand the system,
              find the friction, and make the final experience feel effortless. That means clean
              implementation, thoughtful pacing, and details that make the page feel alive.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-card relative overflow-hidden">
              <div className="absolute right-[-4rem] top-[-4rem] h-44 w-44 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
              <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
                <img
                  src="/sriganBlue.jpeg"
                  alt="Srigan portrait"
                  className="h-56 w-56 rounded-[1.75rem] object-cover shadow-ambient"
                />
                <div>
                  <span className="accent-pill">Engineer • Teammate • Fast learner</span>
                  <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
                    I&apos;m currently studying Electrical and Computer Engineering at the University
                    of Waterloo and spending my time across software, robotics, and AI projects. I
                    care a lot about momentum: interfaces that move well, code that scales cleanly,
                    and collaboration that feels easy.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="section-card transition-transform duration-300 hover:-translate-y-1"
                  style={{ animation: isVisible ? `slide-up 700ms ease ${index * 120}ms both` : 'none' }}
                >
                  <skill.icon className="h-9 w-9 text-[color:var(--accent)]" />
                  <h3 className="mt-5 text-xl font-bold text-white">{skill.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{skill.description}</p>
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
