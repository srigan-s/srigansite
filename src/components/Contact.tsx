import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/srigan-s',
      icon: Github,
    },
    {
      label: 'Email',
      href: 'mailto:srigan.siva@gmail.com',
      icon: Mail,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/srigan_s',
      icon: Instagram,
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-shell pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className={`reveal ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="section-card relative overflow-hidden p-8 md:p-10">
            <div className="absolute left-[-3rem] top-[-2rem] h-40 w-40 rounded-full bg-[color:var(--accent)]/12 blur-3xl" />
            <div className="absolute bottom-[-2rem] right-[-2rem] h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="section-kicker">Contact</span>
                <h2 className="section-title">Let&apos;s make the next thing feel memorable.</h2>
                <p className="section-copy">
                  If you&apos;re building something ambitious in software, robotics, or AI, I&apos;d love
                  to connect. I&apos;m especially drawn to teams that care about both execution and
                  experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-white/[0.07]"
                    style={{ animation: isVisible ? `slide-up 700ms ease ${index * 120}ms both` : 'none' }}
                  >
                    <div className="flex items-center justify-between">
                      <link.icon className="h-6 w-6 text-[color:var(--accent)]" />
                      <ArrowUpRight className="h-4 w-4 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <div className="mt-10 text-lg font-bold text-white">{link.label}</div>
                    <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Open channel
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
