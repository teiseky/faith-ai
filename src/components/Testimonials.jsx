import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    name: "Lloyd Trinidad",
    quote: "Such a fun and insightful session with Coach Faith. Ang daming aha moments! Everything was practical and relevant. Appreciate how generous she is in sharing her expertise.",
    role: "Attendee",
  },
  {
    name: "Clark Macasio",
    quote: "Learned so much from our session with Coach Faith! Very generous in sharing, and majority of the learnings are very innovative, useful and fresh to us!",
    role: "Attendee",
  },
  {
    name: "Alex Duran",
    quote: "Today's training from the team is an eye-opener. Learned how AI/technology can help us understand our clients better, create more relevant solutions, and provide a smoother experience throughout their financial journey.",
    role: "Attendee",
  },
  {
    name: "Eunice Camille Labayo",
    quote: "Sobrang helpful ng AI training namin today. Our speaker explained everything in a simple, practical, and engaging way. Mas naintindihan ko how AI can help in our daily work. Thank you Ms. Faith for sharing your expertise.",
    role: "Attendee",
  },
  {
    name: "Jennylyn Querubin",
    quote: "Thank you Ms Faith and team! Grabe, ang dami kong natutunan! Thank you po sa super helpful tips on how to maximize AI para maging smarter, faster and more productive.",
    role: "Attendee",
  },
  {
    name: "Jayson Monteclaro Jogno",
    quote: "I highly recommend Faith Failing Forward Fast to anyone looking to expand their digital skillset. The session that I attended was well structured, highly informative and engaging especially its hands-on approach.",
    role: "Attendee",
  }
];

const Card = ({ item, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  // FIX: Tighter spacing calculation
  // 1. Changed base from 10vh to 5vh (moves stack higher)
  // 2. We keep index * 10px to maintain the visible "lip" of the card
  const topOffset = `calc(5vh + ${index * 10}px)`;

  return (
    <div 
      ref={container} 
      // FIX: Reduced height from 80vh to 65vh
      // This reduces the scroll distance required to reach the next card
      className="h-[65vh] flex items-start justify-center sticky"
      style={{ top: topOffset }}
    >
      <motion.div 
        style={{ 
          scale,
        }}
        className="relative flex flex-col h-[400px] w-full max-w-3xl rounded-xl p-10 bg-[#0F0F0F] border border-white/10 origin-top shadow-2xl shadow-black"
      >
        {/* Decorative Quote Icon */}
        <span className="text-8xl absolute top-6 right-8 text-[#FFC800] opacity-10 font-serif leading-none">
          &rdquo;
        </span>

        {/* Content Container */}
        <div className="flex flex-col h-full justify-between relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-[#FFC800]"></span>
              <span className="text-[#FFC800] font-mono text-xs uppercase tracking-[0.2em]"></span>
            </div>
            
            <p className="text-xl md:text-2xl font-medium text-neutral-200 leading-relaxed tracking-tight">
              {item.quote}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FFC800] to-neutral-800 flex items-center justify-center text-black font-bold text-base shrink-0">
              {item.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">
                {item.name}
              </h4>
              <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    // Reduced padding-bottom slightly
    <section className="bg-[#050505] relative z-10 pt-24 pb-32">
      
      {/* Introduction Area */}
      <div className="max-w-6xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
          What the community is <span className="text-[#FFC800]">saying.</span>
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto">
          Real feedback from our training sessions and workshops.
        </p>
      </div>

      {/* Stacking Cards Container */}
      <div ref={container} className="px-6">
        {testimonials.map((item, index) => {
          // FIX: Reduced scale factor from 0.05 to 0.04
          // This keeps the cards visually closer together in the 3D space
          const targetScale = 1 - ((testimonials.length - index) * 0.04);
          
          return (
            <Card 
              key={index} 
              index={index} 
              item={item} 
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;