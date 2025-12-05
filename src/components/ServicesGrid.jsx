import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

// --- DATA: SERVICES ---
const Services = [
  { 
    title: "Corporate AI Literacy", 
    id: "01",
    video: "/training.mp4", 
    desc: "Help your team work smarter. We train your workforce to use AI tools safely, turning fear of replacement into a capability for growth." 
  },
  { 
    title: "Business Strategy Roadmap", 
    id: "02",
    video: "/ai.mp4",
    desc: "Don't just guess—have a plan. We audit your current operations and map out exactly where AI can save you time and drive revenue." 
  },
  { 
    title: "Prompt Engineering", 
    id: "03",
    video: "/prompting.mp4", 
    desc: "Master the art of speaking to AI to get precise, high-quality work done in seconds rather than hours." 
  },
  { 
    title: "Sales & Marketing", 
    id: "04",
    video: "/startup.mp4",
    desc: "Automate the busy work—like lead gen and emails—so you can focus on the human connection needed to close deals." 
  },
  { 
    title: "Personal Branding", 
    id: "05",
    video: "/business.mp4",
    desc: "Build a resilient personal brand that feels human and genuine, ensuring you stand out in an automated world." 
  },
  { 
    title: "Custom Consulting", 
    id: "06",
    video: "/finance.mp4",
    desc: "We build the exact custom solution you need to fix your unique operational challenges." 
  },
];

// --- DATA: HOW IT WORKS ---
const ProcessSteps = [
  {
    icon: Calendar,
    title: "Discovery",
    desc: "We listen first. A deep-dive conversation to understand your human bottlenecks."
  },
  {
    icon: Cpu,
    title: "Immersion",
    desc: "We deploy the curriculum. Your team learns to integrate AI into daily life."
  },
  {
    icon: CheckCircle2,
    title: "Integration",
    desc: "We help you install frameworks that finish reports in minutes, not hours."
  },
  {
    icon: TrendingUp,
    title: "Leadership",
    desc: "Work less, earn more. Effort turns into income, giving you your time back."
  }
];

const Card = ({ service, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2; 
      videoRef.current.muted = false; 
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => { console.log("Audio play prevented", error); });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
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
      className="group relative flex flex-col justify-between p-10 bg-neutral-900/40 rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-yellow-500/30 transition-all duration-500"
      style={{ minHeight: '450px' }}
    >
      {/* Soft Background Video/Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {service.video && (
          <video
            ref={videoRef}
            src={service.video}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-in-out grayscale"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/70 font-serif leading-relaxed text-base transition-all duration-300">
          {service.desc}
        </p>

        <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-sm font-medium text-yellow-500">Explore</span>
          <ArrowRight className="w-4 h-4 text-yellow-500" />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="bg-neutral-950 text-white overflow-hidden selection:bg-yellow-500/30">
      
      {/* NOISE TEXTURE OVERLAY (Adds organic feel) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
      />

      {/* =========================================
          SECTION 1: SERVICES (The Resilience Stack)
      ========================================= */}
      <section className="py-32 px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <span className="text-sm font-medium text-white/60 tracking-wide uppercase">Our Capabilities</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-white"
              >
                The Resilience <br/>
                <span className="text-yellow-500 font-serif italic">Stack.</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="md:max-w-sm text-white/60 text-lg font-serif leading-relaxed text-right"
            >
              We don't just teach tools. We build the infrastructure for spiritual and technical endurance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Services.map((service, index) => (
              <Card key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: PROCESS + THE 10X RESULT
      ========================================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900/50 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="text-center mb-24">
             <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-yellow-500 mb-6">
                The Process
             </span>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Deployment Protocol</h2>
          </div>

          {/* PROCESS STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 mb-16">
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
                <div className="w-16 h-16 rounded-2xl bg-neutral-800/50 border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg group hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/50 text-sm font-serif leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* =========================================
              THE RESULT (10x CARD)
          ========================================= */}
          
          {/* Downward Connector */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 60, opacity: 1 }}
              viewport={{ once: true }}
              className="w-[1px] bg-gradient-to-b from-white/10 to-yellow-500/50"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-[2rem] bg-neutral-900 border border-white/5 p-12 md:p-16 text-center overflow-hidden shadow-2xl">
              
              {/* Background ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
            

                <div className="mb-8">
                  <h3 className="text-8xl md:text-9xl font-bold text-white tracking-tighter leading-none">
                    10x
                  </h3>
                  <p className="text-xl md:text-2xl text-yellow-500/80 font-serif italic mt-2">
                    Productivity Boost
                  </p>
                </div>

                <p className="text-lg md:text-xl text-white/70 font-serif leading-relaxed max-w-2xl mx-auto">
                  "Faith | Failing Forward Fast doesn't just teach tech. <br className="hidden md:block" />
                  <span className="text-white border-b border-yellow-500/30">We teach you how to reclaim your life.</span>"
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ServicesGrid;