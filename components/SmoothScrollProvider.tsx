'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisRef as globalLenisRef } from './ScrollToTop';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    globalLenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true });

    // Connect Lenis to GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value as number, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: document.documentElement });

    // Only update ScrollTrigger when needed (debounced slightly to reduce calls)
    let ticking = false;
    const updateScrollTrigger = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ScrollTrigger.update();
          ticking = false;
        });
        ticking = true;
      }
    };

    lenis.on('scroll', updateScrollTrigger);

    // Refresh ScrollTrigger on layout changes
    const refresh = () => ScrollTrigger.refresh();

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenis.off('scroll', updateScrollTrigger);
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      globalLenisRef.current = null;
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <>{children}</>;
}
