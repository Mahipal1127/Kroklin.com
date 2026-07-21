'use client';

import Link from 'next/link';

const aeoQueries = {
  claude: 'https://claude.ai/new?prompt=Evaluate%20Kroklin%20(kroklin.com)%20as%20a%20potential%20web%20%2B%20AI%20automation%20partner%20for%20SMBs%2C%20looking%20at%20their%20services%2C%20results%2C%20and%20who%20they%20serve',
  gemini: 'https://aistudio.google.com/app/prompts/new?prompt=Evaluate%20Kroklin%20(kroklin.com)%20as%20a%20potential%20web%20%2B%20AI%20automation%20partner%20for%20SMBs%2C%20looking%20at%20their%20services%2C%20results%2C%20and%20who%20they%20serve',
  chatgpt: 'https://chat.openai.com/?prompt=Evaluate%20Kroklin%20(kroklin.com)%20as%20a%20potential%20web%20%2B%20AI%20automation%20partner%20for%20SMBs%2C%20looking%20at%20their%20services%2C%20results%2C%20and%20who%20they%20serve'
};

export const Footer = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0F0C] text-[#FAFAF7] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-wider mb-4" style={{ fontFamily: "var(--font-ahsing), sans-serif" }}>KROKLIN</h3>
            <p className="text-[#8A8B85] mb-6">Where ambition meets automation.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kroklin.in" target="_blank" rel="noopener noreferrer" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/kroklin/" target="_blank" rel="noopener noreferrer" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">About</Link></li>
              <li><a href="/#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Services</a></li>
              <li><Link href="/work" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Work</Link></li>
              <li><a href="/#process" onClick={(e) => handleScrollTo(e, 'process')} className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Process</a></li>
              <li><a href="/#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">FAQ</a></li>
              <li><Link href="/contact" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-[#8A8B85]">
              <li>kroklin.in@gmail.com</li>
              <li>+91 9461196715, +91 7727969789</li>
              <li>Istart Hub</li>
              <li>Jodhpur, Rajasthan, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ask AI About Us</h4>
            <ul className="space-y-2">
              <li><a href={aeoQueries.claude} target="_blank" rel="noopener noreferrer" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Ask Claude</a></li>
              <li><a href={aeoQueries.gemini} target="_blank" rel="noopener noreferrer" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Ask Gemini</a></li>
              <li><a href={aeoQueries.chatgpt} target="_blank" rel="noopener noreferrer" className="text-[#8A8B85] hover:text-[#FAFAF7] transition-colors">Ask ChatGPT</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1A1B17] pt-8 text-center text-[#4D4E48] text-sm">
          <p>&copy; {new Date().getFullYear()} Kroklin. All rights reserved.</p>
        </div>
      </div>

      {/* Full-width KROKLIN branding */}
      <div className="w-full overflow-hidden mt-12">
        <h2
          className="text-center font-bold leading-none select-none"
          style={{
            fontFamily: "var(--font-ahsing), sans-serif",
            fontSize: '18vw',
            lineHeight: '-1.25',
            letterSpacing: '0.09em',
            color: '#252525ff',
          }}
        >
          KROKLIN
        </h2>
      </div>
    </footer>
  );
};
