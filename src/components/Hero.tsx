import React, { useEffect, useState } from 'react';
import { ArrowDownRight, Github, FileText } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-28 md:px-10 md:pt-36">
      <div className="grain-ring left-[-10rem] top-[8rem] h-[22rem] w-[22rem] opacity-60" />
      <div className="grain-ring right-[-8rem] top-[10rem] h-[18rem] w-[18rem] opacity-50" />
      <div
        className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-[color:var(--accent)]/20 blur-3xl"
        style={{ animation: 'pulse-glow 7s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] h-56 w-56 rounded-full bg-white/10 blur-3xl"
        style={{ animation: 'float-drift-wide 11s ease-in-out infinite' }}
      />

      <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className={`reveal ${visible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <span className="accent-pill" style={{ animation: 'slide-up 800ms ease 120ms both' }}>
            Electrical Engineering • Software • Robotics
          </span>
          <div className="mt-8 max-w-3xl" style={{ animation: 'slide-up 900ms ease 180ms both' }}>
            <div
              className="text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Srigan Sivagnanenthirarajah
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
              Waterloo engineering student building across software, robotics, and AI.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row" style={{ animation: 'slide-up 900ms ease 260ms both' }}>
            <a
              href="https://github.com/srigan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--accent)] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(64,212,106,0.25)]"
            >
              <Github className="h-4 w-4" />
              Explore GitHub
            </a>
            <a
              href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--line)] bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-5 md:grid-cols-4">
            {[
              ['8+', 'Roles'],
              ['7', 'Projects'],
              ['AI', 'Focused'],
              ['⚾', 'Baseball'],
            ].map(([value, label], index) => (
              <div
                key={label}
                className="section-card p-5"
                style={{ animation: `slide-up 700ms ease ${index * 140}ms both` }}
              >
                <div className="text-2xl font-extrabold text-white">{value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`reveal relative ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
          style={{ transitionDelay: '180ms' }}
        >
          <div className="glass-panel shadow-ambient relative overflow-hidden rounded-[2.2rem] p-5 md:p-7">
            <div className="absolute inset-0 bg-radial-glow opacity-80" />
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <div
                className="absolute inset-0 z-10 bg-gradient-to-tr from-[color:var(--accent)]/0 via-white/10 to-[color:var(--accent)]/0"
                style={{ animation: 'card-glow 8s ease-in-out infinite' }}
              />
              <img
                src="/sriganBlue.jpeg"
                alt="Srigan Sivagnanenthirarajah"
                className="h-[30rem] w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                style={{ animation: 'float-drift-wide 12s ease-in-out infinite' }}
              />
            </div>
            <div className="relative mt-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-[color:var(--accent-soft)]">
                  Based in Ontario
                </div>
                <p className="mt-2 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
                  I like interfaces with rhythm, strong visuals, and a little baseball energy in the background.
                </p>
              </div>
              <button
                onClick={scrollToAbout}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:text-[color:var(--accent-soft)]"
                aria-label="Scroll to about section"
              >
                <ArrowDownRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-4">
        <div
          className="flex min-w-max gap-12 px-8 text-sm font-semibold uppercase tracking-[0.28em] text-white/55"
          style={{ animation: 'marquee 26s linear infinite' }}
        >
          {Array.from({ length: 2 }).flatMap((_, copyIndex) =>
            ['React', 'TypeScript', 'Robotics', 'AI', 'Embedded Systems', 'Creative Frontend'].map(
              (item) => (
                <span key={`${copyIndex}-${item}`} className="whitespace-nowrap">
                  {item}
                </span>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
