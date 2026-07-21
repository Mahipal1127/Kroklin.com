'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const fillGroupRef = useRef<SVGGElement>(null);
  const waveRef1 = useRef<SVGPathElement>(null);
  const waveRef2 = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create timeline
    const tl = gsap.timeline();

    // First, animate the fill up
    tl.fromTo(
      fillGroupRef.current,
      { y: 200 },
      { y: 0, duration: 2, ease: 'power2.inOut' }
    );

    // Animate waves continuously while loading
    const waveTl1 = gsap.to(waveRef1.current, {
      attr: {
        d: 'M0,15 Q20,5 40,15 T80,15 T120,15 T160,15 T200,15 V220 H0 Z'
      },
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    const waveTl2 = gsap.to(waveRef2.current, {
      attr: {
        d: 'M0,25 Q20,15 40,25 T80,25 T120,25 T160,25 T200,25 V220 H0 Z'
      },
      duration: 1.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.15
    });

    // Hide preloader after animation
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setLoading(false);
        waveTl1.kill();
        waveTl2.kill();
      },
    });
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAFAF7]"
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <defs>
            <clipPath id="kClip">
              <text
                x="100"
                y="170"
                style={{ fontFamily: 'var(--font-ahsing), sans-serif' }}
                fontSize="160"
                textAnchor="middle"
                fill="black"
              >
                K
              </text>
            </clipPath>
          </defs>
          
          {/* Outlined K (gray border, no fill) */}
          <text
            x="100"
            y="170"
            style={{ fontFamily: 'var(--font-ahsing), sans-serif' }}
            fontSize="160"
            textAnchor="middle"
            fill="none"
            stroke="#e4e4e4ff"
            strokeWidth="3"
          >
            K
          </text>
          
          {/* Liquid fill layer with waves */}
          <g clipPath="url(#kClip)">
            <g ref={fillGroupRef}>
              {/* Base liquid */}
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="#3D4A2A"
                opacity="0.95"
              />
              {/* Wave 1 (darker, closer) */}
              <path
                ref={waveRef1}
                d="M0,20 Q20,10 40,20 T80,20 T120,20 T160,20 T200,20 V220 H0 Z"
                fill="#2D3A1A"
                opacity="0.4"
              />
              {/* Wave 2 (lighter, further) */}
              <path
                ref={waveRef2}
                d="M0,30 Q20,20 40,30 T80,30 T120,30 T160,30 T200,30 V220 H0 Z"
                fill="#4D5A3A"
                opacity="0.3"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
