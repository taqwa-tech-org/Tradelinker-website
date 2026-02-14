'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GlobalPartners: React.FC = () => {
  // Generate image paths with correct extensions
  const getImagePath = (num: number): string => {
    const webpImages = [1, 4, 38, 39, 44, 61, 50, 63, 70, 74];
    const jpgImages = [14, 18, 20, 24, 27, 32, 36, 33, 42, 59, 68, 69, 71, 72, 75, 76, 82, 83];
    
    let ext = 'png'; // default
    if (webpImages.includes(num)) {
      ext = 'webp';
    } else if (jpgImages.includes(num)) {
      ext = 'jpg';
    }
    
    return `/images/company logo/${num}.${ext}`;
  };

  // All available logo numbers (1-83, excluding missing ones if any)
  const allLogos = Array.from({ length: 83 }, (_, i) => i + 1);
  
  // Split into two rows more evenly
  const midPoint = Math.ceil(allLogos.length / 2);
  const firstRowLogos = allLogos.slice(0, midPoint);
  const secondRowLogos = allLogos.slice(midPoint);

  return (
    <div className="w-full py-18 md:py-16 lg:py-25 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Our Clients
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Trusted by leading companies worldwide to deliver exceptional results and drive innovation across industries.
        </p>
      </div>

      {/* First Row - Right to Left */}
      <div className="relative mb-8 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -2520],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
              ease: "linear",
            },
          }}
        >
          {[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map((num, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={getImagePath(num)}
                  alt={`Client ${num}`}
                  fill
                  sizes="160px"
                  className="object-contain hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                  onError={(e) => {
                    console.error(`Failed to load image: ${getImagePath(num)}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Left to Right */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [-2520, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
              ease: "linear",
            },
          }}
        >
          {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((num, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={getImagePath(num)}
                  alt={`Client ${num}`}
                  fill
                  sizes="160px"
                  className="object-contain hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-100"
                  onError={(e) => {
                    console.error(`Failed to load image: ${getImagePath(num)}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalPartners;