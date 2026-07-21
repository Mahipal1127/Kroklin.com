'use client';

import { Reveal } from '../Reveal';
import { LazyVideo } from '../LazyVideo';

const journeySteps = [
  {
    id: 1,
    label: "STEP — 01",
    title: "Discover",
    description: "We understand your business, goals, and challenges to build the right solution from the start.",
    videoSrc: "/F1.mp4"
  },
  {
    id: 2,
    label: "STEP — 02",
    title: "Design",
    description: "We plan, design, and refine every detail to create a seamless digital experience.",
    videoSrc: "/F2.mp4"
  },
  {
    id: 3,
    label: "STEP — 03",
    title: "Develop",
    description: "We build your website, software, or digital solution with performance, quality, and scalability in mind.",
    videoSrc: "/F3.mp4"
  },
  {
    id: 4,
    label: "STEP — 04",
    title: "Launch & Support",
    description: "We launch your project with confidence and continue supporting your business as it grows.",
    videoSrc: "/F4.mp4"
  }
];

export const ProjectJourney = () => {
  return (
    <section id="process" className="py-20 bg-[#0E0F0C]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <Reveal>
          <h1 className="font-[family-name:var(--font-poppins)] font-bold uppercase tracking-tighter text-[clamp(2rem,8vw,5rem)] text-[#FAFAF7] mb-20 leading-none">
            PROJECT JOURNEY
          </h1>
        </Reveal>

        {/* Steps */}
        <div className="flex flex-col">
          {journeySteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column - Text */}
                <div className="lg:col-span-5">
                  <p className="text-[#6B7A57] text-sm uppercase tracking-wider mb-4 font-[family-name:var(--font-general-sans)]">
                    {step.label}
                  </p>
                  <h2 className="font-[family-name:var(--font-poppins)] font-bold text-3xl md:text-4xl text-[#FAFAF7] mb-6 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-[#8A8B85] leading-relaxed font-[family-name:var(--font-poppins)]">
                    {step.description}
                  </p>
                </div>
                
                {/* Right Column - Video */}
                <div className="lg:col-span-7">
                  <div className="aspect-video bg-[#1A1B17] relative overflow-hidden border border-[#2A2B26]">
                    <LazyVideo
                      src={step.videoSrc}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
