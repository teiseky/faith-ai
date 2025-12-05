import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);

  // UX WRITING UPDATE:
  // Focus: Clear definition of Consulting + AI Utility + Motivational Resilience
  const content = [
    { text: "FAITH [ai]", highlight: true },
    { text: " is a strategic consultancy that bridges the gap between human purpose and artificial intelligence." },
    { break: true },
    { text: "We don't just motivate; we operationalize. In our framework, failure isn't fatal—it's just " },
    { text: "data", highlight: true },
    { text: ". It is the essential feedback loop required to build a business that cannot be stopped." }
  ];

  // UX WRITING UPDATE:
  // Focus: Specific deliverables (Workflows, Roadmaps, Community)
  const features = [
    {
      img: "/about1.jpg", 
      title: "FAILING FORWARD",
      desc: "We teach you to treat setbacks as high-speed learning. Rapid iteration, not perfection, is the goal."
    },
    {
      img: "/about2.jpg",
      title: "AI INTEGRATION",
      desc: "Stop drowning in tasks. We implement custom AI workflows that scale your operations and reclaim your time."
    },
    {
      img: "/about3.jpg",
      title: "BUSINESS STRATEGY",
      desc: "Clear, actionable roadmaps. We align your core mission with market data to drive profitable growth."
    },
    {
      img: "/about4.jpg",
      title: "THE COLLECTIVE",
      desc: "Entrepreneurship is lonely. Join a network of founders using technology to amplify their impact."
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 md:px-20 bg-black text-white overflow-hidden flex flex-col justify-center"
      id="about"
    >

      <div className="grid md:grid-cols-12 gap-16 items-center relative z-10 mb-32">
        {/* Left Column - Headline */}
        <div className="md:col-span-5">
          <div className="font-mono text-xs md:text-sm text-white/70 tracking-widest uppercase mb-6">
             About Faith [ai]
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight leading-none">
            Strategy. <br />
            Resilience. <br />
            <span className="text-yellow-400">Scale.</span>
          </h2>
        </div>

        {/* Right Column - Scroll Effect Text */}
        <div className="md:col-span-7 relative">
          <ScrollRevealParagraph content={content} />
          {/* Quote Section - Updated for clarity */}
          <div className="font-mono text-sm md:text-base border-l-2 border-yellow-400 pl-6 mt-16 opacity-80 max-w-md text-white/80">
            We guide founders through <span className="underline text-yellow-400">Consulting</span>, <span className="underline text-yellow-400">AI Implementation</span>, and <span className="underline text-yellow-400">Community Support</span>.
          </div>
        </div>
      </div>

      {/* EXPANDING HOVER CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10 w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[550px] w-full overflow-hidden border border-white/10 cursor-pointer"
          >
            {/* Background Image - Scales on Hover */}
            <img
              src={feature.img}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            {/* Gradient Overlay - Always present but stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500" />

            {/* Content Container - Pinned to bottom */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              
              {/* Title */}
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-yellow-400 mb-2">
                {feature.title}
              </h3>

              {/* Description - Hidden initially (height 0 / opacity 0), Expands on hover */}
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out delay-75">
                <p className="text-white/80 font-light leading-relaxed pb-2">
                  {feature.desc}
                </p>
                {/* Decorative line to show expansion */}
                <div className="w-12 h-[2px] bg-yellow-400 mt-4"></div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

// --- Helper Components ---

const ScrollRevealParagraph = ({ content }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.1"]
  });

  let words = [];
  content.forEach(segment => {
    if (segment.break) {
      words.push({ isBreak: true });
    } else {
      segment.text.split(" ").forEach(word => {
        words.push({ text: word, highlight: segment.highlight });
      });
    }
  });

  return (
    <p ref={element} className="flex flex-wrap leading-relaxed tracking-wide text-2xl md:text-4xl">
      {words.map((wordObj, i) => {
        if (wordObj.isBreak) return <span key={i} className="basis-full h-8" />;
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress} highlight={wordObj.highlight}>
            {wordObj.text}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress, highlight }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-2 lg:mr-3">
      <motion.span style={{ opacity }} className={highlight ? "font-bold text-yellow-400" : ""}>
        {children}
      </motion.span>
    </span>
  );
};

export default About;