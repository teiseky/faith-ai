import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const navLinks = ['About', 'Services', 'Insights', 'Contacts'];
  const [isVisible, setIsVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar only if scrolling up
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      
      // Add background when past hero section (approximately 100vh)
      setHasBackground(currentScrollY > window.innerHeight * 0.8);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white transition-all duration-300 ${
      hasBackground ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      {/* 2. Logo Icon - Moved right with more spacing and bigger */}
      <a href="#" className="block ml-8">
        <img 
          src="icon.png" 
          alt="FAITH Logo"
          className="w-24 h-24 object-contain"
        />
      </a>

      {/* 3. Navigation Links (Desktop) - Positioned to the left near CTA */}
      <div className="hidden md:flex items-center gap-8 ml-auto mr-12">
        {navLinks.map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="group relative font-mono text-xs md:text-sm font-bold tracking-widest uppercase text-white hover:text-yellow-400 transition-colors duration-300"
          >
            {/* 4. Industrial Hover Effect: Bracket Reveal */}
            <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-400 translate-x-2 group-hover:translate-x-0">
              [
            </span>
            {item}
            <span className="absolute -right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-yellow-400 -translate-x-2 group-hover:translate-x-0">
              ]
            </span>
          </a>
        ))}
      </div>

      {/* 1. CTA Button */}
      <button className="flex items-center gap-3 bg-white text-black px-5 py-3 font-mono text-xs md:text-sm font-bold tracking-wider uppercase hover:bg-yellow-400 transition-colors duration-300 group">
        Get in touch
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </nav>
  );
};

export default Navbar;