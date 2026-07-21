'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const headingText = "Ready to grow your business?";

export const ClosingCTA = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const chars = headingRef.current.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.from(chars, {
        x: 120,
        opacity: 0,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-[#0E0F0C] text-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 ref={headingRef} className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl font-bold tracking-tighter mb-8">
          {headingText.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}>
              {char}
            </span>
          ))}
        </h2>
        <p className="text-xl text-[#8A8B85] mb-10">Let's build something together.</p>
        <Link href="/contact" className="inline-flex items-center gap-3 bg-[#FAFAF7] text-[#0E0F0C] px-8 py-4 rounded-full hover:bg-[#D4D5CF] transition-colors font-semibold">
          Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};
