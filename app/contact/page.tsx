'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Top Banner */}
        <Reveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#FAFAF7] border border-[#D4D5CF] rounded-full px-6 py-2">
              <span className="w-2 h-2 rounded-full bg-[#3D4A2A]"></span>
              <span className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-widest text-[#4D4E48]">
                Available for new projects
              </span>
            </div>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.1}>
          <div className="text-center mb-20">
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#0E0F0C] mb-6">
              Let's build something meaningful.
            </h1>
            <p className="text-[#4D4E48] text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Tell us about your idea, and we'll help bring it to life.
            </p>
            <Link
              href="#contact-form"
              className="text-[#3D4A2A] font-semibold hover:underline text-lg"
            >
              Contact us. We will answer all your questions.
            </Link>
          </div>
        </Reveal>

        {/* Two Column Layout */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

            {/* Left Column - Contact Info */}
            <div className="space-y-10">
              {/* Profile Card */}
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-full bg-[#3D4A2A] flex items-center justify-center text-white font-bold text-lg font-[family-name:var(--font-poppins)]">
                  Y
                </div>
                <div>
                  <p className="font-semibold text-xl text-[#0E0F0C]">Yuvraj Singh</p>
                  <p className="text-[#8A8B85] text-sm">CMO</p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[#8A8B85] text-xs uppercase tracking-widest mb-1 font-[family-name:var(--font-poppins)]">Phone</p>
                <p className="text-[#0E0F0C] text-lg">+91 9461196715, +91 7727969789</p>
              </div>

              {/* Email */}
              <div className="mt-3">
                <p className="text-[#8A8B85] text-xs uppercase tracking-widest mb-1 font-[family-name:var(--font-poppins)]">E-mail</p>
                <p className="text-[#0E0F0C] text-lg">kroklin.in@gmail.com</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="contact-form">
              <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#0E0F0C] mb-8">
                Fill in the form
              </h2>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[#8A8B85] text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-poppins)]">
                    First name and last name
                  </label>
                  <input
                    type="text"
                    className="w-full px-0 py-3 border-b border-[#D4D5CF] focus:outline-none focus:border-[#3D4A2A] bg-transparent text-[#0E0F0C] placeholder-[#D4D5CF] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#8A8B85] text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-poppins)]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-0 py-3 border-b border-[#D4D5CF] focus:outline-none focus:border-[#3D4A2A] bg-transparent text-[#0E0F0C] placeholder-[#D4D5CF] transition-colors"
                    placeholder="+91 12345 67890"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#8A8B85] text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-poppins)]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-0 py-3 border-b border-[#D4D5CF] focus:outline-none focus:border-[#3D4A2A] bg-transparent text-[#0E0F0C] placeholder-[#D4D5CF] transition-colors"
                    placeholder="name@domain.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#8A8B85] text-xs uppercase tracking-widest mb-2 font-[family-name:var(--font-poppins)]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-0 py-3 border-b border-[#D4D5CF] focus:outline-none focus:border-[#3D4A2A] bg-transparent text-[#0E0F0C] placeholder-[#D4D5CF] transition-colors resize-none"
                    placeholder="Write a few words about your project and the scope of work you are interested in."
                  ></textarea>
                </div>

                {/* Privacy Note */}
                <p className="text-[#8A8B85] text-xs leading-relaxed">
                  By clicking the Submit button, you agree to the terms of our Privacy Policy.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#0E0F0C] text-white px-8 py-4 rounded-md hover:bg-[#1A1B17] transition-colors font-semibold text-sm"
                >
                  Send a message
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        {/* Footer Section */}
        <Reveal delay={0.3}>
          <div className="border-t border-[#D4D5CF] pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              {/* Left - Address */}
              <div>
                <p className="font-semibold text-[#0E0F0C] mb-2">Kroklin</p>
                <p className="text-[#4D4E48] text-sm leading-relaxed mb-3">
                  Istart Hub<br />
                  Jodhpur, Rajasthan<br />
                  India
                </p>
                <a
                  href="https://maps.google.com/?q=Istart+Hub+Jodhpur+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3D4A2A] text-sm hover:underline"
                >
                  See on Google Maps
                </a>
              </div>

              {/* Right - Time + Tagline */}
              <div className="md:text-right">
                <p className="text-[#8A8B85] text-sm mb-3">
                  Current time in India {currentTime}
                </p>
                <p className="font-[family-name:var(--font-poppins)] font-bold text-[#0E0F0C] uppercase tracking-tight">
                  We design in India but for global brands
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
