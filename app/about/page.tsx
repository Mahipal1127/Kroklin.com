'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { OurPrinciples, ClosingCTA } from '@/components/sections';

export default function AboutPage() {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <div>
      {/* Top Tagline */}
      <Reveal>
        <section className="pt-20 pb-05">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <p className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.25em] text-[#0E0F0C]">
              WE ARE KROKLIN
            </p>
          </div>
        </section>
      </Reveal>

      {/* Main Headline */}
      <Reveal delay={0.1}>
        <section className="pb-24 md:pb-40">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-3xl md:text-5xl lg:text-[4.5rem] font-bold uppercase tracking-tight leading-[1.1] text-[#0E0F0C]">
              A TECHNOLOGY PARTNER FOR BUSINESSES READY TO BUILD, GROW, AND INNOVATE.
            </h1>
            <div className="mt-10 max-w-2xl mx-auto">
              <p className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl font-semibold text-[#0E0F0C] mb-4">
                Thoughtfully designed. Expertly engineered.
              </p>
              <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                We combine strategy, design, and development to create digital products that make a lasting impact.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Two-Column Content */}
      <Reveal delay={0.2}>
        <section className="pb-24 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 lg:gap-16 items-start">
              {/* Left Column - Heading */}
              <div>
                <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-[#0E0F0C] leading-snug">
                  Digital growth<br />builds business
                </h2>
              </div>

              {/* Vertical Divider (desktop only) */}
              <div className="hidden lg:block w-px bg-[#D4D5CF] self-stretch"></div>

              {/* Right Column - Paragraphs */}
              <div className="space-y-6">
                <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                  For years, strong digital presence has shaped businesses, turning them into market leaders. We are a guide for businesses aspiring to that level of growth and credibility.
                </p>
                <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                  We have the knowledge, passion, and commitment to build brands and digital systems that become the standard for what comes next.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Trusted & Supported By Badges */}
      <Reveal delay={0.3}>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-center font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.2em] text-[#8A8B85] mb-10">
              TRUSTED & SUPPORTED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center">
                <Image
                  src="/istart.png"
                  alt="iStart"
                  width={144}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center">
                <Image
                  src="/msme.png"
                  alt="MSME"
                  width={144}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

        {/* Why Kroklin Section */}
      <Reveal delay={0.4}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-14">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E0F0C] uppercase md:w-1/3 shrink-0">
                Why Kroklin?
              </h2>
              <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed max-w-md">
                We don&apos;t just build products; we build partnerships that drive real results and lasting impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", title: "Strategy First", description: "We understand your business before we build." },
                { num: "02", title: "Exceptional Quality", description: "Every detail is carefully designed and engineered." },
                { num: "03", title: "Future-Ready Solutions", description: "Built to adapt, scale, and grow with your business." },
                { num: "04", title: "Long-Term Partnership", description: "We're invested in your success long after launch." },
              ].map((item, idx) => {
                const isActive = activeCard === idx;
                return (
                  <div
                    key={item.num}
                    onMouseEnter={() => setActiveCard(idx)}
                    className={`group rounded-xl p-6 flex flex-col justify-between min-h-[320px] transition-colors duration-300 cursor-default border ${
                      isActive ? "bg-white border-[#E5E5E0] shadow-sm" : "bg-[#F5F5F2] border-transparent"
                    }`}
                  >
                    <div>
                      <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? "text-[#3D4A2A]" : "text-[#9A9B95]"}`}>
                        {item.num}
                      </span>
                      <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg md:text-xl text-[#0E0F0C] mt-3">
                        {item.title}
                      </h3>
                      <p
                        className={`text-[#8A8B85] text-sm leading-relaxed transition-all duration-300 ${
                          isActive ? "opacity-100 mt-6" : "opacity-0 mt-0 h-0 overflow-hidden"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm text-[#3D4A2A] text-xl leading-none">
                        +
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Meet Us Section */}
      <Reveal delay={0.5}>
        <section className="py-24 bg-[#F5F5F2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E0F0C] uppercase mb-14">
              Meet Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Mahipal Singh */}
              <div className="text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-[#D4D5CF] rounded-full mb-6 mx-auto flex items-center justify-center">
                  <span className="text-[#8A8B85] text-sm font-[family-name:var(--font-poppins)]">
                    Photo
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl md:text-2xl text-[#0E0F0C]">
                  Mahipal Singh
                </h3>
                <p className="text-[#4D4E48] text-base md:text-lg mt-2">
                  Founder &amp; CEO
                </p>
              </div>
              {/* Yuvraj Singh */}
              <div className="text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-[#D4D5CF] rounded-full mb-6 mx-auto flex items-center justify-center">
                  <span className="text-[#8A8B85] text-sm font-[family-name:var(--font-poppins)]">
                    Photo
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl md:text-2xl text-[#0E0F0C]">
                  Yuvraj Singh
                </h3>
                <p className="text-[#4D4E48] text-base md:text-lg mt-2">
                  Co-Founder &amp; CMO
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

        <Reveal delay={0.6}>
          <OurPrinciples />
        </Reveal>

      {/* Location */}
      <Reveal delay={0.7}>
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <p className="text-[#8A8B85] text-lg">
              Based in Jodhpur, Rajasthan · Working worldwide
            </p>
          </div>
        </section>
      </Reveal>

      <ClosingCTA />
    </div>
  );
}
