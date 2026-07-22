'use client';

import { useState } from 'react';

const whyKroklinItems = [
  { num: "01", title: "Strategy First", description: "We understand your business before we build." },
  { num: "02", title: "Exceptional Quality", description: "Every detail is carefully designed and engineered." },
  { num: "03", title: "Future-Ready Solutions", description: "Built to adapt, scale, and grow with your business." },
  { num: "04", title: "Long-Term Partnership", description: "We're invested in your success long after launch." },
];

export const WhyKroklin = () => {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {whyKroklinItems.map((item, idx) => {
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
  );
};
