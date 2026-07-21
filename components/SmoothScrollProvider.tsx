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
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on('scroll', updateScrollTrigger);

    // ScrollTrigger reads element positions synchronously on creation, but on
    // first load the layout is not yet stable: custom fonts (next/font) and
    // images (project cards, brand logos) still change element heights after
    // hydration, and the preloader overlay delays the real paint. If we don't
    // re-measure, the initial `from` states (and their transforms) stay applied
    // against stale positions until the first scroll forces an update — which is
    // what caused the page to appear shifted/overflowing until the user scrolled.
    // Refresh once now and again whenever the layout settles.
    ScrollTrigger.refresh();

    const refresh = () => ScrollTrigger.refresh();

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);

    return () => {
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
