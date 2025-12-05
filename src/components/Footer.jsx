import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-32 pb-8 px-6 md:px-12 border-t border-white/10 overflow-hidden font-sans">
      
      {/* =========================================
          SECTION 1: THE "AWWWARDS" CTA
      ========================================= */}
      <div className="max-w-7xl mx-auto mb-40 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          {/* Left: Headline */}
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-white">
                EVOLVE?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-xl">
              Join the circle. Real stories of struggle, strategy, and AI-powered resilience delivered to your inbox.
            </p>
          </div>

          {/* Right: Interactive Form (UPDATED) */}
          <div className="w-full md:w-auto flex-shrink-0">
            <form className="flex flex-col gap-6 relative group w-full md:w-[450px]">
              
              {/* Field 1: Name */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-transparent border-b-2 border-white/20 py-4 w-full text-lg focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder:text-white/20 font-mono"
                />
              </div>

              {/* Field 2: Phone */}
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-transparent border-b-2 border-white/20 py-4 w-full text-lg focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder:text-white/20 font-mono"
                />
              </div>

              {/* Field 3: Email (With Submit Button) */}
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b-2 border-white/20 py-4 w-full text-lg focus:outline-none focus:border-yellow-500 transition-colors duration-500 placeholder:text-white/20 font-mono pr-12"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-500 hover:text-white transition-colors duration-300"
                >
                  <ArrowRight size={32} />
                </button>
              </div>

              <span className="text-xs font-mono text-white/30 uppercase tracking-widest mt-2">
                * FAIL FORWARD FAST.
              </span>
            </form>
          </div>

        </div>
      </div>

      {/* =========================================
          SECTION 2: BRUTALIST FOOTER DATA
      ========================================= */}
      
      {/* 1. MASSIVE LOGO */}
      <div className="border-b border-white/10 pb-8 mb-16">
        <h1 className="text-[13vw] md:text-[14.5vw] leading-[0.8] font-bold tracking-tighter text-center md:text-left -ml-2 md:-ml-4 select-none text-white/10 hover:text-white/100 transition-colors duration-700 cursor-default">
          FAITH [ai]
        </h1>
      </div>

      {/* 2. DATA GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 max-w-[98%] mx-auto">
        
        {/* Column 1: Contact Info & Map (UPDATED) */}
        <div className="md:col-span-4 space-y-8 font-mono text-sm md:text-base text-white/70">
          <div className="group">
            <span className="block text-yellow-500 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors">HQ Location</span>
            <p className="text-white mb-4">Clark Pampanga, Philippines</p>
          </div>
          
          <div className="group pt-4">
            <span className="block text-yellow-500 text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Direct Line</span>
            <a href="mailto:hello@faithph.ai" className="block text-white hover:text-yellow-500 transition-colors mb-1">
              hello@faithph.ai
            </a>
            <p>(045) 281 0554</p>
            <p>+63 968 860 2011</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Column 2: Navigation */}
        <div className="md:col-span-3">
          <span className="block text-yellow-500 font-mono text-xs uppercase tracking-widest mb-6">
            Menu
          </span>
          <nav className="flex flex-col gap-3 text-lg md:text-xl font-bold tracking-tight">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="group flex items-center gap-3 hover:text-yellow-500 transition-colors duration-300 w-fit"
              >
                <span className="h-[2px] w-0 bg-yellow-500 group-hover:w-6 transition-all duration-300"></span>
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Socials */}
        <div className="md:col-span-3">
          <span className="block text-yellow-500 font-mono text-xs uppercase tracking-widest mb-6">
            Socials
          </span>
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {['Instagram', 'Facebook', 'LinkedIn', 'Twitter/X'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 w-fit text-white/60 hover:text-white"
              >
                {social}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 3. CREDITS / BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-white/10 pt-8 gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500">
        
        <div className="font-mono text-xs text-white/60">
          &copy; {new Date().getFullYear()} FAITH [ai]. All rights reserved.
        </div>

        <div className="font-mono text-xs text-white/60 uppercase tracking-wider flex items-center gap-2">
          <span>Site by:</span>
          <span className="text-white font-bold bg-white/10 px-2 py-1 rounded hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
            MERDEGIA
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;