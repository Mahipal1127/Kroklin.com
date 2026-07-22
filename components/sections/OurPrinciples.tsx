'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Purpose Before Features",
    description: "Every decision we make is guided by one question: Does this create real value for your business? We build with purpose, not unnecessary complexity."
  },
  {
    title: "Quality Without Compromise",
    description: "We don't rush projects or cut corners. Every detail—from strategy and design to development—is crafted with precision and care."
  },
  {
    title: "Built Around People",
    description: "Technology is only meaningful when it serves people. We create intuitive, accessible, and user-focused digital experiences that businesses and their customers enjoy using."
  },
  {
    title: "Long-Term Thinking",
    description: "We're not here to deliver a project and disappear. We build scalable solutions that support your business today and continue to grow with it tomorrow."
  }
];

export const OurPrinciples = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current.filter(Boolean).length > 0) {
        gsap.from(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
          <div className="md:w-1/3 shrink-0">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E0F0C] uppercase">
              Our Principles
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              ref={(el) => { itemsRef.current[idx] = el; }}
              className="p-8 border border-[#D4D5CF] rounded-2xl bg-white"
            >
              <div className="text-[#3D4A2A] font-[family-name:var(--font-poppins)] font-bold text-sm uppercase tracking-widest mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl md:text-2xl text-[#0E0F0C] mb-4">
                {principle.title}
              </h3>
              <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
