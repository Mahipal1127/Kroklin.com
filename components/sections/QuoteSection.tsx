'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const QuoteSection = () => {
  const quote = "Building Digital Experiences That Drive Business Growth".split(" ");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-32 px-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
        {quote.map((word, index) => {
          const start = index / quote.length;
          const end = start + 1 / quote.length;
          
          const opacity = useTransform(
            scrollYProgress,
            [start - 0.1, start, end, end + 0.1],
            [0.3, 0.3, 1, 1]
          );
          
          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["#8A8B85", "#0E0F0C"]
          );

          return (
            <motion.span
              key={index}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-poppins)]"
              style={{ 
                opacity, 
                color
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};
