'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NextSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftTextRef.current && rightTextRef.current && containerRef.current && paragraphRef.current) {
        // Animate the text parts
        gsap.fromTo(leftTextRef.current, 
          { x: -600, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: 1,
            },
          }
        );

        gsap.fromTo(rightTextRef.current, 
          { x: 600, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: 1,
            },
          }
        );

        // Animate the paragraph
        gsap.fromTo(paragraphRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-between bg-[#0E0F0C] overflow-hidden py-12"
    >
      {/* Spacer to push content down */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <span
              ref={leftTextRef}
              className="font-[family-name:var(--font-mileast)] text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAFAF7]"
            >
              We build
            </span>
            <span
            ref={rightTextRef}
            className="font-[family-name:var(--font-mileast)] text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAFAF7]"
          >
            what comes next.
          </span>
          </div>
        </div>
      </div>
      {/* Paragraph at bottom */}
      <div className="max-w-5xl mx-auto px-4">
        <p
          ref={paragraphRef}
          className="font-[family-name:var(--font-poppins)] text-sm md:text-lg lg:text-xl text-[#8A8B85] max-w-3xl mx-auto leading-relaxed text-center"
        >
          Your digital presence is often the first impression your business makes. We design and build experiences that reflect your credibility, earn trust instantly, and turn visitors into customers.
        </p>
      </div>
    </section>
  );
};
