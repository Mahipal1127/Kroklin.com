'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "BrandX didn't just redesign our logo, they rebuilt how we talk about ourselves. Our conversion rate on the new site doubled in six weeks.",
    name: "Priya Nandan",
    role: "Founder, Solace Wellness",
  },
  {
    quote: "Fast, sharp, and completely unafraid to push back on our first-draft instincts. That's exactly what we needed.",
    name: "Tom Ferreira",
    role: "Marketing Lead, Anchor & Co",
  },
  {
    quote: "A team that treats your brand like their own.",
    name: "Fernweh Coffee",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tighter mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-2xl">
              <p className="text-lg text-gray-700 mb-6">{testimonial.quote}</p>
              {testimonial.name && (
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  {testimonial.role && <p className="text-gray-500 text-sm">{testimonial.role}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
