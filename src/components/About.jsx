import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);

  // Content for the scroll text
  const content = [
    { text: "FAITH [ai]", highlight: true },
    { text: " is a purpose-driven community that helps entrepreneurs embrace Artificial Intelligence as an ally." },
    { break: true },
    { text: "In the old world, failure was the end. In the AI era, failure is feedback. It's the training data required for the next iteration of your success." }
  ];

  // Updated Features: Images updated to local public folder assets
  const features = [
    {
      img: "/about1.jpg", 
      title: "DATA-DRIVEN RESILIENCE",
      desc: "Turn setbacks into raw data for your competitive advantage."
    },
    {
      img: "/about2.jpg",
      title: "AI AS YOUR ALLY",
      desc: "Amplify human potential by automating the mundane."
    },
    {
      img: "/about3.jpg",
      title: "PURPOSEFUL GROWTH",
      desc: "Aligning powerful innovation with your core mission."
    },
    {
      img: "/about4.jpg",
      title: "STRENGTH IN NUMBERS",
      desc: "A collective building the stamina for an unpredictable future."
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
            AI + Purpose = <br />
            <span className="text-yellow-400">Unstoppable</span>
          </h2>
        </div>

        {/* Right Column - Scroll Effect Text */}
        <div className="md:col-span-7 relative">
          <ScrollRevealParagraph content={content} />
          {/* Quote Section */}
          <div className="font-mono text-sm md:text-base border-l-2 border-yellow-400 pl-6 mt-16 opacity-80 max-w-md text-white/80">
            Through <span className="underline">workshops</span>, <span className="underline">consulting</span>, and <span className="underline">storytelling</span>, we guide founders to turn setbacks into stepping stones.
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