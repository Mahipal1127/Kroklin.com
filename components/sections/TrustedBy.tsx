'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

// Brand logos
const brands = [
  { src: "/l1.png", alt: "Brand 1" },
  { src: "/l2.png", alt: "Brand 2" },
  { src: "/l3.png", alt: "Brand 3" },
  { src: "/l4.png", alt: "Brand 4" },
  { src: "/l5.png", alt: "Brand 5" },
];

export const TrustedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    const animation = gsap.to(container, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="py-12 border-t border-b border-[#D4D5CF] overflow-hidden">
      <div className="px-4">
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-[#0E0F0C] mb-8">
          Brands we've helped
        </h2>
        <div className="overflow-hidden">
          <div 
            ref={containerRef} 
            className="flex gap-16 md:gap-24 items-center"
          >
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center w-24 h-16 md:w-32 md:h-20 flex-shrink-0"
              >
                <Image 
                  src={brand.src} 
                  alt={brand.alt} 
                  width={128}
                  height={80}
                  className="object-contain h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
