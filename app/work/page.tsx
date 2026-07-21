'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { UnderConstructionPopup } from '@/components/UnderConstructionPopup';
import { useState } from 'react';

// Project data matching homepage
const projects = [
  {
    id: 'ds-tour-travels',
    title: 'DS Tour & Travels',
    description: 'Reliable travel experiences crafted for every journey.',
    tags: ['TRAVEL', 'TOURISM', 'TRANSPORT'],
    image: '/p1.png',
    link: 'https://dstourandtravels.in/',
    isExternal: true,
    isUnderConstruction: false
  },
  {
    id: 'velora',
    title: 'Velora',
    description: 'A refined escape where architecture, nature, and luxury exist in perfect harmony.',
    tags: ['LUXURY STAYS', 'HOSPITALITY', 'RESORTS'],
    image: '/p2.png',
    link: 'https://velora-farmstay.netlify.app/',
    isExternal: true,
    isUnderConstruction: false
  },
  {
    id: 'brandx',
    title: 'BrandX',
    description: 'Crafting bold digital identities that leave a lasting impression.',
    tags: ['BRANDING', 'WEB DESIGN', 'CREATIVE STUDIO'],
    image: '/p3.png',
    link: '',
    isExternal: false,
    isUnderConstruction: true
  }
];

export default function WorkPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="py-20 bg-[#FAFAF7]">
      <UnderConstructionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <Reveal>
          <div className="mb-20">
            <p className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.25em] text-[#8A8B85] mb-4">
              OUR WORK
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-5xl lg:text-[5rem] font-bold tracking-tight text-[#0E0F0C]">
              Selected Projects
            </h1>
            <p className="text-[#4D4E48] text-base md:text-lg max-w-2xl mt-6">
              A curated selection of our work that showcases our commitment to quality, purpose, and long-term thinking.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              {project.isUnderConstruction ? (
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="group flex flex-col text-left w-full"
                >
                  {/* Project Image */}
                  <div className="w-full aspect-[3/4] bg-[#D4D5CF] rounded-none border border-[#D4D5CF] overflow-hidden relative mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <p className="text-[#3D4A2A] text-xs font-[family-name:var(--font-poppins)] uppercase tracking-widest mb-3">
                      {project.tags.join(' • ')}
                    </p>
                    <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold tracking-tight text-[#0E0F0C] mb-4">
                      {project.title}
                    </h2>
                    <p className="text-[#4D4E48] text-base leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#0E0F0C] font-[family-name:var(--font-poppins)] text-sm uppercase tracking-wider group-hover:text-[#3D4A2A] transition-colors">
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
                  {/* Project Image */}
                  <div className="w-full aspect-[3/4] bg-[#D4D5CF] rounded-none border border-[#D4D5CF] overflow-hidden relative mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <p className="text-[#3D4A2A] text-xs font-[family-name:var(--font-poppins)] uppercase tracking-widest mb-3">
                      {project.tags.join(' • ')}
                    </p>
                    <h2 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold tracking-tight text-[#0E0F0C] mb-4">
                      {project.title}
                    </h2>
                    <p className="text-[#4D4E48] text-base leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#0E0F0C] font-[family-name:var(--font-poppins)] text-sm uppercase tracking-wider group-hover:text-[#3D4A2A] transition-colors">
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
