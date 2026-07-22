'use client';

import { useEffect, useRef, useState } from 'react';

type LazyVideoProps = {
  src: string;
  className?: string;
  /** Distance from the viewport at which loading begins. */
  rootMargin?: string;
  /** Poster image URL to show while video loads */
  poster?: string;
};

/**
 * Loads and autoplays a muted looping video only once it scrolls near the
 * viewport, and pauses it when it scrolls away. The <source> is attached
 * lazily so nothing is downloaded on initial page load — critical on mobile,
 * where eagerly fetching several large clips saturates the connection and
 * stalls the rest of the page.
 */
export function LazyVideo({ src, className, rootMargin = '100px', poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!isLoaded) {
              el.src = src;
              setIsLoaded(true);
            }
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { rootMargin, threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, rootMargin, isLoaded]);

  return (
    <div className="w-full h-full bg-[#1A1B17]">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        className={className}
      />
    </div>
  );
}
