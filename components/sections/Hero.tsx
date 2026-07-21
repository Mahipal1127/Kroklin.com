'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-[calc(100dvh-80px)] flex flex-col justify-between py-2">
      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 pt-24">
        <motion.p 
          className="font-[family-name:var(--font-poppins)] font-bold text-xl md:text-2xl text-[#4D4E48] text-center whitespace-pre-line"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {`We build the systems and presence 
that let your business finally run 
the way you imagined it.

For founders juggling it all whose growth has outgrown 
what one person can manage.`}
        </motion.p>
      </div>
      <div className="w-full overflow-hidden">
        <motion.h1 
          className="font-black text-[#0E0F0C] w-full"
          style={{ 
            fontFamily: "var(--font-ahsing), sans-serif",
            fontSize: '22vw', 
            lineHeight: '1.09', 
            letterSpacing: '0.04em', 
            textAlign: 'center' 
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          KROKLIN
        </motion.h1>
      </div>
    </section>
  );
};
