import React from 'react';
import { ArrowLeft, Brain, Gamepad2, Users, Video } from 'lucide-react';
import { navigateTo } from '../lib/navigation';

const MiniAIPage = () => {
  return (
    <main className="relative px-6 pb-20 pt-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </button>

        <section className="section-shell pb-16 pt-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="reveal reveal-visible">
              <span className="accent-pill">Live Product</span>
              <h1
                className="mt-7 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                MiniAI Web App
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
                MiniAI is a live learning platform that helps younger students explore artificial
                intelligence through playful lessons, mini-games, and guided prompts. The product
                has grown to hundreds of monthly active users and continues to be used in the wild.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Next.js', 'React', 'PostgreSQL', 'Live Product', 'Education', 'Gamified AI'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://miniai.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-1"
                >
                  Visit live app
                </a>
              </div>
            </div>

            <div className="section-card overflow-hidden">
              <video
                className="h-[24rem] w-full rounded-[1.5rem] object-cover"
                src="/miniai-preview.mov"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="section-card">
            <Users className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">Hundreds of MAU</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              The app is not just a prototype. It is live and actively used every month, which
              meant product decisions had to balance fun, clarity, and reliability.
            </p>
          </div>
          <div className="section-card">
            <Gamepad2 className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">Gamified onboarding</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              I built the experience around approachable interactions so younger learners could
              build intuition for prompting, logic, and core AI concepts without friction.
            </p>
          </div>
          <div className="section-card">
            <Brain className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">Learning-first design</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              The product had to feel playful enough to invite exploration while still teaching
              durable mental models for how AI tools actually behave.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">Product Story</span>
              <h2 className="section-title">Built to make AI feel accessible to younger learners.</h2>
              <p className="section-copy">
                MiniAI was designed as a full-stack web platform where kids can explore AI in a
                more guided and engaging way. Rather than dropping them into a blank interface, the
                app leads them through structured experiences and playful interactions.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                Because it is live, I had to think beyond the demo: user retention, content flow,
                load performance, and whether the interface felt understandable for a younger audience.
              </p>
            </div>

            <div className="section-card overflow-hidden">
              <div className="mb-4 flex items-center gap-3">
                <Video className="h-5 w-5 text-[color:var(--accent)]" />
                <h3 className="text-lg font-bold text-white">MiniAI in action</h3>
              </div>
              <video
                className="h-[32rem] w-full rounded-[1.25rem] object-cover"
                src="/miniai-preview.mov"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MiniAIPage;
