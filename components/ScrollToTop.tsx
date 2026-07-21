'use client';

import { useLayoutEffect } from 'react';
import type Lenis from 'lenis';

export const lenisRef: { current: Lenis | null } = { current: null };

export const ScrollToTop = () => {
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    // Run immediately, then again after paint to override restored scroll state.
    scrollToTop();

    const frameId = window.requestAnimationFrame(() => {
      scrollToTop();
    });

    const handleLoad = () => {
      scrollToTop();
    };

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};
