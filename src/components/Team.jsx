import React, { useEffect, useRef, useState } from 'react';

const Team = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Helper for staggered animation classes
  const getTransitionClass = (delay = '0ms') =>
    `transition-all duration-1000 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-12 filter blur-sm'
    }`;

  // Warmer, non-neon yellow
  const accentColor = "text-[#FFC800]";
  const accentBg = "bg-[#FFC800]";

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#050505] relative z-10 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div
        className={`absolute top-0 right-0 w-[600px] h-[600px] ${accentBg} rounded-full blur-[150px] opacity-5 pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-5' : 'opacity-0'}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] opacity-[0.02] pointer-events-none transition-opacity duration-[2000ms] ${isVisible ? 'opacity-[0.02]' : 'opacity-0'}`}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <div className={`flex items-center gap-3 mb-12 ${getTransitionClass('0ms')}`}>
          <span className={`h-[2px] w-8 ${accentBg}`}></span>
          <span className={`${accentColor} font-mono text-xs uppercase tracking-[0.2em]`}>The Visionary</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image & Quote */}
          <div className={`relative z-10 group max-w-md mx-auto lg:mx-0 w-full perspective-1000 ${getTransitionClass('200ms')}`} style={{ transitionDelay: '200ms' }}>
            
            {/* Image Container - Shadow Removed */}
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 w-full rounded-sm">
              <div className={`absolute inset-0 ${accentBg} mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-0`} />
              <img
                src="faith.png"
                alt="Faith Natividad"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-105 relative z-0"
              />

              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                 <span className={`absolute top-4 left-4 text-5xl ${accentColor} opacity-30 font-serif leading-none select-none`}>
                  &ldquo;
                </span>
                <blockquote className="relative z-10 pl-6 pt-1">
                  <p className="text-white/90 font-medium text-lg leading-relaxed italic font-serif">
                    "Every setback has analytics. Every mistake has meaning. Failing Forward Fast means learning before life repeats the lesson."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Links Section - Updated */}
            <div className="flex items-center mt-6 px-2 relative z-30">
              <a
                href="https://www.linkedin.com/in/faithnatividad/"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-3 text-white transition-colors cursor-pointer"
              >
                <span className="text-xs font-mono uppercase tracking-widest border-b border-white/30 group-hover/link:border-[#FFC800] pb-1 transition-all">
                  LinkedIn Profile
                </span>
                {/* Arrow Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-[#FFC800] transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Content */}
          <div className="flex flex-col justify-center h-full pt-4 relative z-20">
            <div className={`${getTransitionClass('400ms')}`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-4 cursor-default">
                FAITH<br />
                {/* Permanent Color Gradient (No Hover Required) */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC800] to-white">
                  NATIVIDAD.
                </span>
              </h2>
              <div className={`${accentColor} font-mono text-sm tracking-[0.25em] mb-8 border-b border-white/10 pb-4 inline-block`}>
                FOUNDER & CEO
              </div>
            </div>

            <div className={`space-y-6 text-neutral-400 text-base leading-relaxed pl-2 ${getTransitionClass('600ms')}`} style={{ transitionDelay: '600ms' }}>
              <p>
                <span className="text-white font-semibold">A journey of resilience.</span> Faith's nearly 20-year career evolution—from a dedicated employee to a pioneering leader—demonstrates an adaptability that defines the modern era.
              </p>

              <p>
                With deep expertise spanning diverse industries including recruitment, outsourcing, real estate, and corporate training, Faith brings a versatile strategic acumen to <span className="text-white font-medium">Faith AI</span>. Her ascent to leadership is a testament to her entrepreneurial drive and unwavering dedication.
              </p>

              <p>
                Beyond her pivotal role at the agency, Faith is a voice for the future. She actively participates in local and international speaking engagements, sharing insights with a global audience.
              </p>
            </div>

            {/* Stats Row */}
            <div className={`mt-12 flex flex-wrap gap-8 md:gap-12 border-t border-white/5 pt-8 ${getTransitionClass('800ms')}`} style={{ transitionDelay: '800ms' }}>
               <div className="group flex flex-col hover:-translate-y-1 transition-transform duration-300">
                 <span className="text-3xl font-bold text-white group-hover:text-[#FFC800] transition-colors">20+</span>
                 <span className="text-[10px] font-mono text-neutral-500 uppercase mt-2 tracking-wider">Years Experience</span>
               </div>

               <div className="group flex flex-col hover:-translate-y-1 transition-transform duration-300">
                 <span className="text-3xl font-bold text-white group-hover:text-[#FFC800] transition-colors">Global</span>
                 <span className="text-[10px] font-mono text-neutral-500 uppercase mt-2 tracking-wider">Keynote Speaker</span>
               </div>

               <div className="group flex flex-col hover:-translate-y-1 transition-transform duration-300">
                 <span className="text-3xl font-bold text-white group-hover:text-[#FFC800] transition-colors">Founder</span>
                 <span className="text-[10px] font-mono text-neutral-500 uppercase mt-2 tracking-wider">Faith AI</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;