import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mockData';

const ScrollingTicker = () => {
  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="bg-[#1b0732] py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -33.33 * services.length * 10],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {duplicatedServices.map((service, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-[#f9a826] font-semibold"
          >
            <span className="text-2xl mr-3 text-[#f9a826]">-</span>
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;