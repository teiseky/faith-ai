import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesGrid from './components/ServicesGrid';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App = () => {
  const containerRef = useRef(null);
  
  // Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-faith-black text-faith-white font-sans min-h-screen selection:bg-faith-yellow selection:text-faith-black overflow-x-hidden">
      <Navbar />
      <Hero containerRef={containerRef} />
      <About containerRef={containerRef} />
      <ServicesGrid />
      <Team />
      <Testimonials />
      <Marquee />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;