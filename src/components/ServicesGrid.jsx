import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Calendar, Users, Trophy } from 'lucide-react';

// --- DATA: SERVICES ---
const Services = [
  { 
    title: "Corporate AI Literacy Training", 
    id: "01",
    video: "/training.mp4", 
    desc: "Help your team work smarter, not harder. We train your workforce to use AI tools safely and confidently, turning fear of replacement into a capability for growth." 
  },
  { 
    title: "AI Business and Strategy Roadmap", 
    id: "02",
    video: "/ai.mp4",
    desc: "Don't just guess—have a plan. We audit your current operations and map out exactly where AI can save you time, cut costs, and drive revenue." 
  },
  { 
    title: "Prompt Engineering", 
    id: "03",
    video: "/prompting.mp4", 
    desc: "Stop struggling with bad results. Master the art of speaking to AI to get precise, high-quality work done in seconds rather than hours." 
  },
  { 
    title: "AI Sales & Marketing Masterclass", 
    id: "04",
    video: "/startup.mp4",
    desc: "Grow your business without burning out. We show you how to automate the busy work—like lead gen and emails—so you can focus on closing deals." 
  },
  { 
    title: "Personal Branding & Self-Mastery", 
    id: "05",
    video: "/business.mp4",
    desc: "Don't sound like a robot. We help you build a resilient personal brand that feels human and genuine, ensuring you stand out in an automated world." 
  },
  { 
    title: "AI Consulting Services", 
    id: "06",
    video: "/finance.mp4",
    desc: "Have a specific bottleneck? We don't do one-size-fits-all. We build the exact custom solution you need to fix your unique operational challenges." 
  },
];

// --- DATA: PROCESS STEPS (Updated Language) ---
const ProcessSteps = [
  {
    title: "Reach Out",
    desc: "Send us a message to get started. We'll review your needs and get back to you immediately.",
    icon: Send
  },
  {
    title: "We Schedule",
    desc: "We'll set up a time to talk about your specific challenges and lock in your consultation or seminar.",
    icon: Calendar
  },
  {
    title: "Attend Session",
    desc: "Join us for a focused training or consulting session where we dive deep into the solutions.",
    icon: Users
  },
  {
    title: "Learn AI & Win",
    desc: "Master the tools, save hours of work, and get ahead of the competition.",
    icon: Trophy
  }
];

const Card = ({ service, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Set volume low to avoid startling
      videoRef.current.volume = 0.2; 
      videoRef.current.muted = false; 
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio play prevented until user interaction:", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between p-8 md:p-12 border-r border-b border-white/10 bg-neutral-950 overflow-hidden cursor-pointer"
      style={{ minHeight: '500px' }}
    >
      {/* --- VIDEO BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {service.video && (
          <video
            ref={videoRef}
            src={service.video}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-700 ease-in-out group-hover:grayscale-0 grayscale-[50%]"
          />
        )}
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950/80 to-neutral-950/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* --- GRID BORDERS --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-10" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-white/10 z-10" />

      {/* Hover Line Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          {/* ID Number: Retained visible on hover */}
          <span className="font-mono text-lg text-white/30 group-hover:text-yellow-500 transition-colors duration-300">
            /{service.id}
          </span>
        </div>

        {/* Title: Moves down on hover */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight transition-transform duration-500 ease-in-out drop-shadow-md group-hover:translate-y-[15rem]">
          {service.title}
        </h3>

        {/* Description: Fades out on hover */}
        <p className="text-white/60 font-light leading-relaxed text-sm md:text-base pr-4 transition-all duration-300 group-hover:opacity-0 group-hover:blur-sm group-hover:-translate-y-2">
          {service.desc}
        </p>
      </div>

      {/* Bottom Action - Always visible */}
      <div className="relative z-20 mt-12 flex items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">View Program</span>
        <ArrowRight className="w-4 h-4 text-yellow-500" />
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <>
      {/* =========================================
          SECTION 1: SERVICES GRID
      ========================================= */}
      <section className="bg-neutral-950 text-white py-32 px-4 md:px-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-[2px] w-6 bg-yellow-500"></span>
                <span className="font-mono text-sm tracking-[0.2em] text-white/70 uppercase">Our Capabilities</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter"
              >
                The Resilience <br/>
                <span className="text-yellow-500">Stack.</span>
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="md:max-w-xs text-white/60 font-light leading-relaxed text-right"
            >
              We don't just teach tools. We build the infrastructure for spiritual and technical endurance in the age of AI.
            </motion.p>
          </div>

          {/* Minimalist Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/10">
            {Services.map((service, index) => (
              <Card key={index} service={service} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: PROCESS + THE 10X RESULT
      ========================================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900/30 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="text-center mb-24">
             <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-yellow-500 mb-6">
                The Process
             </span>
             <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">How It Works</h2>
          </div>

          {/* PROCESS STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10 mb-20">
            {ProcessSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                 {/* Connection Line (Desktop) */}
                {i < ProcessSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}

                {/* Icon Bubble */}
                <div className="w-16 h-16 rounded-2xl bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group hover:scale-110 transition-transform duration-300 hover:border-yellow-500/50">
                  <step.icon className="w-6 h-6 text-white group-hover:text-yellow-500 transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-white/50 text-sm font-serif leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* =========================================
              THE RESULT (10x CARD)
          ========================================= */}
          
          {/* Downward Connector */}
          <div className="flex justify-center mb-0 relative z-20">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[1px] bg-gradient-to-b from-white/10 to-yellow-500"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="relative rounded-[2.5rem] bg-neutral-900 border border-white/5 p-12 md:p-20 text-center overflow-hidden shadow-2xl group hover:border-white/10 transition-colors duration-500">
              
              {/* Background ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-yellow-500/15 transition-colors duration-700" />
              
              {/* Subtle Grid Texture in Card */}
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

              <div className="relative z-10 flex flex-col items-center">
                {/* --- REMOVED THE OUTCOME BADGE HERE --- */}

                <div className="mb-10 mt-6">
                  <h3 className="text-8xl md:text-9xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl">
                    10x
                  </h3>
                  <p className="text-xl md:text-2xl text-yellow-500/90 font-serif italic mt-4">
                    Productivity Boost
                  </p>
                </div>

                <div className="h-[1px] w-24 bg-white/10 mb-10" />

                <p className="text-lg md:text-2xl text-white/80 font-serif leading-relaxed max-w-2xl mx-auto">
                  "Faith | Failing Forward Fast doesn't just teach tech. <br className="hidden md:block" />
                  <span className="text-white decoration-yellow-500/30 underline decoration-1 underline-offset-4">We teach you how to reclaim your life.</span>"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;