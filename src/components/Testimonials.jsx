import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    name: "Lloyd Trinidad",
    quote: "Such a fun and insightful session with Coach Faith. Ang daming aha moments! Everything was practical and relevant. Appreciate how generous she is in sharing her expertise.",
    role: "Attendee",
  },
  {
    name: "Alex Duran",
    quote: "Today's training is an eye-opener. Learned how AI/technology can help us understand our clients better, create relevant solutions, and provide a smoother experience.",
    role: "Attendee",
  },
  {
    name: "Eunice Camille Labayo",
    quote: "Sobrang helpful ng AI training namin today. Our speaker explained everything in a simple, practical, and engaging way. Mas naintindihan ko how AI can help in our daily work.",
    role: "Attendee",
  },
  {
    name: "Jayson Monteclaro Jogno",
    quote: "I highly recommend Faith Failing Forward Fast to anyone looking to expand their digital skillset. The session was well structured, highly informative and engaging.",
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
  
  // Tighter spacing calculation
  const topOffset = `calc(5vh + ${index * 10}px)`;

  return (
    <div 
      ref={container} 
      // Reduced height slightly to account for fewer cards to scroll through
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
              <span className="text-[#FFC800] font-mono text-xs uppercase tracking-[0.2em]">Review</span>
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
          // Dynamic scale based on array length
          const targetScale = 1 - ((testimonials.length - index) * 0.04);
          
          return (
            <Card 
              key={index} 
              index={index} 
              item={item} 
              progress={scrollYProgress}
              // With 4 items, range steps are 0, 0.25, 0.5, 0.75 - fits perfectly
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