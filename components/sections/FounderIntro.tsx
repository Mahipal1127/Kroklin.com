'use client';

import { motion } from 'framer-motion';

export const FounderIntro = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 rounded-2xl p-8">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold text-xl">
            MV
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Mara Voss, Founder, BrandX. 6 years, 40+ brands built, 5 industry design awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
