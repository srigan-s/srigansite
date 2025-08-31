import React, { useState, useEffect } from 'react';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsLoading(false);
      // Delay content appearance for smooth transition
      setTimeout(() => setShowContent(true), 100);
    };

    // Automatically scroll down the page when the component mounts
    window.scrollTo({
      top: 51, // Scroll down 51 pixels
      behavior: 'smooth'
    });

    if (isLoading) {
      // This is to prevent the loader from starting again on subsequent renders
      // of the component in a dev environment.
      const loaderTimeout = setTimeout(handleLoadingComplete, 2600);
      return () => clearTimeout(loaderTimeout);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <BaseballSwingLoader onComplete={() => setIsLoading(false)} />}
      
      {showContent && <Header />}

      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-x-hidden transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <AnimatedBaseballs />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;