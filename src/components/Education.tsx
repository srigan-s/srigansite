import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
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

  return (
    <section ref={sectionRef} id="education" className="section-shell">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="section-intro">
            <span className="section-kicker">Education</span>
            <h2 className="section-title">Grounded in systems thinking, built at Waterloo.</h2>
          </div>

          <div className="section-card overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-[1.75rem] bg-[color:var(--accent)]/15 blur-2xl" />
                <img
                  src="/waterloo.png"
                  alt="University of Waterloo"
                  className="relative h-56 w-full rounded-[1.75rem] object-cover shadow-ambient"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="accent-pill">BASc in progress</span>
                  <span className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">
                    Electrical and Computer Engineering
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold text-white">University of Waterloo</h3>

                <div className="mt-6 grid gap-4 md:grid-cols-1">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3 text-white">
                      <MapPin className="h-4 w-4 text-[color:var(--accent)]" />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                      Waterloo, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[color:var(--line)] bg-black/20 p-5">
                  <div className="mb-3 flex items-center gap-3 text-white">
                    <GraduationCap className="h-5 w-5 text-[color:var(--accent)]" />
                    <span className="font-semibold">Recent coursework</span>
                  </div>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    ECE150 (C++), ECE198 (Project Studio), and ECE105 (Classical Mechanics).
                  </p>
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
