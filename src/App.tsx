import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBaseballs from './components/AnimatedBaseballs';
import BaseballSwingLoader from './components/BaseballSwingLoader';
import TurretAutoAlignPage from './components/TurretAutoAlignPage';
import MiniAIPage from './components/MiniAIPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    if (!isLoading) {
      const timer = window.setTimeout(() => setShowContent(true), 120);
      return () => window.clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    const onPopState = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const isTurretPage = pathname === '/projects/turret-auto-align';
  const isMiniAIPage = pathname === '/projects/miniai-web-app';

  return (
    <>
      {isLoading && <BaseballSwingLoader onComplete={() => setIsLoading(false)} />}
      {showContent && <Header pathname={pathname} />}

      <div
        className={`site-shell transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <AnimatedBaseballs />
        <div className="relative z-10">
          {isTurretPage ? (
            <TurretAutoAlignPage />
          ) : isMiniAIPage ? (
            <MiniAIPage />
          ) : (
            <>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Contact />
            </>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
