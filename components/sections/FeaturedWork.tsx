'use client';

import Link from 'next/link';

export const projects = [
  {
    id: "ds-tour-travels",
    title: "DS Tour & Travels",
    year: 2025,
    category: "TRAVEL • TOURISM • TRANSPORT",
    metric: "Reliable travel experiences crafted for every journey.",
  },
  {
    id: "velora",
    title: "Velora",
    year: 2025,
    category: "LUXURY STAYS • HOSPITALITY • RESORTS",
    metric: "A refined escape where architecture, nature, and luxury exist in perfect harmony.",
  },
  {
    id: "brandx",
    title: "BrandX",
    year: 2025,
    category: "BRANDING • WEB DESIGN • CREATIVE STUDIO",
    metric: "Crafting bold digital identities that leave a lasting impression.",
  },
  {
    id: "ridgeview-realty",
    title: "Ridgeview Realty",
    year: 2025,
    category: "AI Automation",
    metric: "Cut average response time from 6 hours to under 2 minutes",
  },
  {
    id: "solace-wellness-studio",
    title: "Solace Wellness Studio",
    year: 2025,
    category: "Full Rebrand & Website",
    metric: "40% increase in booking form submissions within 60 days",
  },
];

export const FeaturedWork = () => {
  return (
    <section className="py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-[#0E0F0C]">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="group">
              <div className="aspect-[4/3] bg-[#D4D5CF] rounded-2xl mb-4 group-hover:bg-[#8A8B85] transition-colors"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-[#0E0F0C]">{project.title}</h3>
                  <p className="text-[#4D4E48]">{project.year} · {project.category}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform text-[#4D4E48]">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
              <p className="mt-4 text-[#3D4A2A] font-medium">{project.metric}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
