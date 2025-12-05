import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="bg-faith-yellow text-faith-black py-4 overflow-hidden border-y-4 border-faith-black">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="whitespace-nowrap font-mono text-3xl font-bold uppercase"
      >
        FAIL FORWARD FAST /// RECOVER STRONGER /// THRIVE SMARTER /// DATA IS FUEL ///
        FAIL FORWARD FAST /// RECOVER STRONGER /// THRIVE SMARTER /// DATA IS FUEL ///
      </motion.div>
    </div>
  );
};

export default Marquee;
