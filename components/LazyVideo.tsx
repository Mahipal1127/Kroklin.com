'use client';

import { useEffect, useRef, useState } from 'react';

type LazyVideoProps = {
  src: string;
  className?: string;
  /** Distance from the viewport at which loading begins. */
  rootMargin?: string;
};

/**
 * Loads and autoplays a muted looping video only once it scrolls near the
 * viewport, and pauses it when it scrolls away. The <source> is attached
 * lazily so nothing is downloaded on initial page load — critical on mobile,
 * where eagerly fetching several large clips saturates the connection and
 * stalls the rest of the page.
 */
export function LazyVideo({ src, className, rootMargin = '200px' }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNear, setIsNear] = useState(false);

  // Attach the source only when the element approaches the viewport.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || isNear) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNear, rootMargin]);

  // Once the source is attached, play/pause based on actual visibility so
  // off-screen clips don't burn CPU/battery.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !isNear) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNear]);

  return (
    <video
      ref={videoRef}
      src={isNear ? src : undefined}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}
