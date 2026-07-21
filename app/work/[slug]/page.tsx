'use client';

import { Reveal } from '@/components/Reveal';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';

// Project data matching homepage
const projects = [
  {
    id: 'ds-tour-travels',
    title: 'DS Tour & Travels',
    description: 'Reliable travel experiences crafted for every journey.',
    tags: ['TRAVEL', 'TOURISM', 'TRANSPORT'],
    image: '/p1.png'
  },
  {
    id: 'velora',
    title: 'Velora',
    description: 'A refined escape where architecture, nature, and luxury exist in perfect harmony.',
    tags: ['LUXURY STAYS', 'HOSPITALITY', 'RESORTS'],
    image: '/p2.png'
  },
  {
    id: 'brandx',
    title: 'BrandX',
    description: 'Crafting bold digital identities that leave a lasting impression.',
    tags: ['BRANDING', 'WEB DESIGN', 'CREATIVE STUDIO'],
    image: '/p3.png'
  }
];

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find(p => p.id === slug);
  if (!project) return notFound();

  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <Reveal>
        <section className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.25em] text-[#8A8B85] mb-4">
              PROJECT
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tight text-[#0E0F0C] mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-[#3D4A2A] text-xs font-[family-name:var(--font-poppins)] uppercase tracking-widest">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured Image */}
      <Reveal delay={0.1}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="aspect-[16/9] bg-[#D4D5CF] border border-[#D4D5CF] overflow-hidden relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>

      {/* Content */}
      <Reveal delay={0.2}>
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="space-y-10">
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl uppercase tracking-widest text-[#0E0F0C] mb-4">
                  OVERVIEW
                </h3>
                <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl uppercase tracking-widest text-[#0E0F0C] mb-4">
                  CHALLENGE
                </h3>
                <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                  Placeholder challenge description. This will be updated with real client challenges as we complete projects.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl uppercase tracking-widest text-[#0E0F0C] mb-4">
                  APPROACH
                </h3>
                <p className="text-[#4D4E48] text-base md:text-lg leading-relaxed">
                  Placeholder approach description. This will explain our process for solving the client's problem.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-xl uppercase tracking-widest text-[#0E0F0C] mb-4">
                  RESULT
                </h3>
                <p className="text-[#3D4A2A] text-base md:text-lg leading-relaxed font-semibold">
                  Successful project delivery with measurable impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
