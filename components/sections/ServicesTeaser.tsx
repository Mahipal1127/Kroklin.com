'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Website Development",
  "Video Editing",
  "Branding",
  "Custom Development",
  "Website Maintenance & Support",
];

const testimonials = [
  {
    text: "For years, our website struggled to showcase our work effectively and attract the right clients. Within just 30 days of launching the new site with Kroklin, we generated $100k in new sales and receive 2-3 qualified inquiries every week.",
    name: "Andrew Tynes",
    role: "Owner, Mammoth Murals"
  }
];

export const ServicesTeaser = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (testimonialRef.current) {
        gsap.from(testimonialRef.current, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        });
      }

      if (itemsRef.current.filter(Boolean).length > 0) {
        gsap.from(itemsRef.current.filter(Boolean), {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-20 md:py-32 bg-[#0E0F0C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Testimonial Column */}
          <div ref={testimonialRef} className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Navigation Bar */}
              <div className="flex items-center justify-between mb-4 border-b border-[#4D4E48] pb-3">
                <div className="flex items-center gap-2">
                  <button className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                  </button>
                  <button className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
                <div className="text-[#8A8B85] font-[family-name:var(--font-poppins)] text-xs">01/01</div>
              </div>

              {/* Testimonial Label */}
              <div className="text-[#8A8B85] font-[family-name:var(--font-poppins)] text-[10px] uppercase tracking-widest mb-4">(Real client stories)</div>

              {/* Testimonial Text */}
              <blockquote className="text-[#FAFAF7] font-[family-name:var(--font-poppins)] text-sm md:text-base leading-relaxed mb-6">
                "{testimonials[0].text}"
              </blockquote>

              {/* Testimonial Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3D4A2A] flex items-center justify-center text-[#FAFAF7] font-bold text-xs">
                  AT
                </div>
                <div>
                  <div className="text-[#FAFAF7] font-[family-name:var(--font-poppins)] font-semibold text-sm">{testimonials[0].name}</div>
                  <div className="text-[#8A8B85] font-[family-name:var(--font-poppins)] text-xs">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#3D4A2A]"></div>
                <h3 className="text-[#8A8B85] text-sm md:text-base font-[family-name:var(--font-poppins)] uppercase tracking-widest">What we can help with</h3>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              {services.map((service, idx) => (
                <div key={idx} ref={(el) => { itemsRef.current[idx] = el; }}>
                  <h2 className="font-[family-name:var(--font-mileast)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#8A8B85] hover:text-[#FAFAF7] transition-colors duration-300 cursor-pointer leading-tight">
                    {service}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
