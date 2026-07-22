'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, shouldReduceMotion]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
