import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBaseballs from './components/AnimatedBaseballs';
import BaseballSwingLoader from './components/BaseballSwingLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay content appearance for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <BaseballSwingLoader onComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-x-hidden transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <AnimatedBaseballs />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;