'use client';

import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What does Kroklin do?',
    answer: 'Kroklin helps businesses grow through professional web development, custom software, branding, video production, and website maintenance. We create digital solutions that are tailored to your business goals.'
  },
  {
    id: 2,
    question: 'How much does a website cost?',
    answer: 'Website pricing depends on your requirements, features, and project complexity. After understanding your business needs, we provide a transparent, customized quotation.'
  },
  {
    id: 3,
    question: 'How long does it take to build a website?',
    answer: 'Most business websites are completed within 2–6 weeks, while larger e-commerce or custom web applications may take longer depending on the project scope.'
  },
  {
    id: 4,
    question: 'Do you build custom websites or use templates?',
    answer: 'We primarily develop custom websites designed specifically for your business. If a project benefits from a trusted framework, we use it without compromising quality or performance.'
  },
  {
    id: 5,
    question: 'Is SEO included with website development?',
    answer: 'Yes. Every website includes technical SEO fundamentals such as fast loading speed, mobile responsiveness, clean code structure, and search engine optimization best practices.'
  },
  {
    id: 6,
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We can redesign outdated websites, improve user experience, optimize performance, and align your website with your current business goals and brand identity.'
  },
  {
    id: 7,
    question: 'What is custom software development?',
    answer: 'Custom software development involves building business-specific applications such as CRM systems, dashboards, POS systems, internal tools, and workflow management software tailored to your operations.'
  },
  {
    id: 8,
    question: 'What industries does Kroklin work with?',
    answer: 'We work with startups, small and medium-sized businesses, e-commerce brands, healthcare providers, educational institutions, hospitality businesses, and growing enterprises across various industries.'
  },
  {
    id: 9,
    question: 'Do you provide website maintenance after launch?',
    answer: 'Yes. We offer ongoing maintenance plans that include updates, security monitoring, backups, bug fixes, performance optimization, and technical support.'
  },
  {
    id: 10,
    question: 'How do we get started?',
    answer: 'Simply contact us through our website or book a discovery call. We\'ll understand your business, discuss your goals, recommend the best solution, and provide a customized proposal.'
  }
];

export const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#0E0F0C]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-20">
              <p className="text-[#8A8B85] text-sm uppercase tracking-wider mb-4">FAQs</p>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#FAFAF7] leading-tight">
                Here's what you need to know before starting with us.
              </h2>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#2A2B26] border-t border-[#2A2B26]">
              {faqData.map((faq) => (
                <div key={faq.id} className="group">
                  <button 
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full py-6 text-left flex justify-between items-center focus:outline-none focus:ring-0"
                  >
                    <span className="font-medium text-lg text-[#FAFAF7] group-hover:text-[#8A8B85] transition-colors">
                      {faq.question}
                    </span>
                    <div className={`w-5 h-5 flex items-center justify-center transition-transform ${openId === faq.id ? 'rotate-45' : ''}`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#FAFAF7" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    <p className="text-[#8A8B85] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
