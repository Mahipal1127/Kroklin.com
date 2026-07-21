'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '../Reveal';
import { UnderConstructionPopup } from '../UnderConstructionPopup';
import { useState } from 'react';

export const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <UnderConstructionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          {/* Header + Stat Cell */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div>
                <h2 className="font-bold uppercase text-[#0E0F0C] text-[26px] tracking-tight mb-4">PROJECTS</h2>
                <p className="text-[#4D4E48] text-sm mb-6">See our selected projects</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="border border-[#D4D5CF] p-4 inline-block">
                <div className="font-bold text-4xl text-white mix-blend-difference">100+</div>
                <div className="text-xs text-[#4D4E48] mt-3 leading-tight">
                  COMPREHENSIVE BRANDING,<br />
                  DIGITAL MARKETING, WEB AND<br />
                  PACKAGING.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Project Card A - DS Tour & Travels */}
          <Reveal delay={0.1}>
            <Link
              href="https://dstourandtravels.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4A2A] aspect-[3/4]"
            >
              <div className="flex flex-col items-center gap-2 p-6">
                <h3 className="font-semibold text-xs text-[#0E0F0C] uppercase tracking-wider">DS Tour & Travels</h3>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">Reliable travel experiences crafted for every journey.</p>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">TRAVEL • TOURISM • TRANSPORT</p>
              </div>
              <div className="flex-1 flex items-center justify-center p-6 relative">
                <Image
                  src="/p1.png"
                  alt="DS Tour & Travels"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </Reveal>

          {/* Project Card B - Velora */}
          <Reveal delay={0.15}>
            <Link
              href="https://velora-farmstay.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4A2A] aspect-[3/4]"
            >
              <div className="flex flex-col items-center gap-2 p-6">
                <h3 className="font-semibold text-xs text-[#0E0F0C] uppercase tracking-wider">Velora</h3>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">A refined escape where architecture, nature, and luxury exist in perfect harmony.</p>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">LUXURY STAYS • HOSPITALITY • RESORTS</p>
              </div>
              <div className="flex-1 flex items-center justify-center p-6 relative">
                <Image
                  src="/p2.png"
                  alt="Velora"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </Reveal>

          {/* Row 2 */}
          {/* Project Card C - BrandX */}
          <Reveal delay={0.2} className="lg:row-span-2">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-white flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4A2A] w-full text-left"
            >
              <div className="flex flex-col items-center gap-2 p-6">
                <h3 className="font-semibold text-xs text-[#0E0F0C] uppercase tracking-wider">BrandX</h3>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">Crafting bold digital identities that leave a lasting impression.</p>
                <p className="text-[10px] text-[#8A8B85] uppercase tracking-wider">BRANDING • WEB DESIGN • CREATIVE STUDIO</p>
              </div>
              <div className="flex-1 flex items-end justify-center p-6 relative">
                <Image
                  src="/p3.png"
                  alt="BrandX"
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          </Reveal>

          {/* See More Cell */}
          <Reveal delay={0.25} className="lg:row-span-2">
            <Link href="/work" className="bg-white flex items-center justify-center p-6 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D4A2A] group aspect-[3/4]">
              <div className="w-48 h-48 border border-[#D4D5CF] rounded-full flex flex-col items-center justify-center group-hover:border-[#3D4A2A] transition-colors">
                <span className="text-[#4D4E48] text-xs uppercase tracking-wider mb-2">See more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#3D4A2A] transition-colors">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </Reveal>

          {/* Empty Cell (only desktop) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};
