import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <Hero />
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      
      {/* 3. BACKGROUND VIDEO: Waves, Black & White */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover grayscale brightness-75 scale-105"
        >
          {/* Using local wave video */}
          <source src="wave.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* 2. PLACEMENT: Bottom Left */}
      <div className="relative z-20 flex-grow flex flex-col justify-end pb-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-end justify-between w-full">
          
          {/* Left Content Block */}
          <motion.div 
            className="max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. FONT SIZE: Bigger Headline (approx 100px on desktop) & Yellow Accent */}
            <h1 className="font-bold leading-[0.9] tracking-tight mb-8 uppercase">
              <div className="overflow-hidden">
                {/* Made font bigger */}
                <motion.span variants={itemVariants} className="block text-[64px] md:text-[80px]">We believe</motion.span>
              </div>
              <div className="overflow-hidden">
                {/* Made font bigger */}
                <motion.span variants={itemVariants} className="block text-[64px] md:text-[80px] text-yellow-400">Failure isn{`'`}t</motion.span>
              </div>
              <div className="overflow-hidden">
                {/* Made font bigger */}
                <motion.span variants={itemVariants} className="block text-[64px] md:text-[80px]">the end.</motion.span>
              </div>
            </h1>

            {/* 1. FONT SIZE: 19px Body Text - Shortened Content */}
            <motion.div variants={itemVariants} className="max-w-lg">
              <p className="text-[16px] md:text-[19px] leading-relaxed text-white/90 font-light">
                Turn failure into fuel. We help leaders adapt faster and rise stronger through AI-driven strategy and resilience.
              </p>
            </motion.div>

            {/* 1. FONT SIZE: 14px Button - Added Yellow Hover Accent */}
            <motion.div variants={buttonVariants} className="mt-1.5">
              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest border-b border-yellow-400 pb-2 text-yellow-400 hover:text-white hover:border-white transition-colors"
              >
                JOIN THE MOVEMENT 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-100 animate-bounce hidden md:block">
        <Mouse size={36} className="text-yellow-400" />
      </div>

    </section>
  );
};

export default App;