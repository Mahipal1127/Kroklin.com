'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lenisRef } from './ScrollToTop';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  // Suppress scroll-spy while a click-triggered scroll animation is running,
  // so the pill goes straight to the target instead of flashing through
  // every section it passes over.
  const suppressSpyRef = useRef(false);
  // Mirror of activeHash for reading current value inside async callbacks
  // without re-subscribing effects.
  const activeHashRef = useRef('');

  const navLinks = [
    { href: '/', label: 'Home', hash: null },
    { href: '/#services', label: 'Services', hash: 'services' },
    { href: '/work', label: 'Works', hash: null },
    { href: '/#process', label: 'Process', hash: 'process' },
    { href: '/about', label: 'About', hash: null },
    { href: '/contact', label: 'Contact', hash: null }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string | null) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        if (hash) {
          activeHashRef.current = hash;
          setActiveHash(hash);
          window.history.replaceState(null, '', `#${hash}`);
        }
        // Drive the scroll through Lenis (not native scrollIntoView) so the two
        // don't fight; suppress the spy until Lenis reports completion.
        const lenis = lenisRef.current;
        if (lenis) {
          suppressSpyRef.current = true;
          lenis.scrollTo(el, {
            offset: -80,
            onComplete: () => { suppressSpyRef.current = false; },
          });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string, hash: string | null) => {
    if (pathname !== '/') {
      return pathname === href;
    }
    // We're on home page
    if (hash) {
      return activeHash === hash;
    }
    // Only Home link is active here, but only if there's no activeHash!
    return href === '/' && activeHash === '';
  };

  // Effects
  useEffect(() => {
    if (pathname === '/') {
      // On home page: get initial hash
      const initialHash = window.location.hash.replace('#', '');
      activeHashRef.current = initialHash;
      setActiveHash(initialHash);

      const handleHashChange = () => {
        const h = window.location.hash.replace('#', '');
        activeHashRef.current = h;
        setActiveHash(h);
      };
      window.addEventListener('hashchange', handleHashChange);

      let ticking = false;
      const computeActive = () => {
        ticking = false;
        if (suppressSpyRef.current) return;
        const sections = ['services', 'process'];
        const scrollY = window.scrollY + 120;
        let current = '';
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el && el.offsetTop <= scrollY) {
            current = sectionId;
          }
        }
        // computeActive runs inside rAF (not render), so these side effects are
        // safe here — but they must NOT live inside a setState updater, which
        // React runs during render.
        if (activeHashRef.current !== current) {
          activeHashRef.current = current;
          window.history.replaceState(null, '', current ? `#${current}` : '/');
          setActiveHash(current);
        }
      };
      const handleScroll = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(computeActive);
        }
      };
      computeActive();

      const lenis = lenisRef.current;
      if (lenis) {
        lenis.on('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll, { passive: true });
      }

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        if (lenis) {
          lenis.off('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    } else {
      // Not on home page
      activeHashRef.current = '';
      setActiveHash('');
    }
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 z-10" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            activeHashRef.current = '';
            setActiveHash('');
            window.history.replaceState(null, '', '/');
          }}
        >
          <div className="flex items-center justify-center">
            {/* Stylized "K" logo */}
            <span
              style={{ fontFamily: 'Ahsing, sans-serif' }}
              className="text-4xl text-[#3D4A2A] font-bold leading-none"
            >
              K
            </span>
          </div>
        </Link>

        {/* Center Navigation Links - New Button Style */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center bg-[#1A1B17] p-1 rounded-lg border border-[#4D4E48]">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.hash);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.hash)}
                className={`
                  relative font-[family-name:var(--font-general-sans)] text-sm font-medium
                  px-6 py-2 rounded-md transition-colors duration-200
                  ${active ? 'text-[#0E0F0C]' : 'text-[#8A8B85] hover:text-[#FAFAF7]'}
                `}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-md shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Section - CTA */}
        <div className="flex items-center gap-4 z-10">
          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 font-[family-name:var(--font-general-sans)] text-xs font-semibold tracking-wider uppercase text-[#FAFAF7] bg-[#3D4A2A] px-6 py-2 rounded-md hover:bg-[#2D3A1A] transition-all"
          >
            Get Started
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0E0F0C] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FAFAF7] border-b border-[#D4D5CF] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.hash)}
                  className={`
                    block font-[family-name:var(--font-general-sans)] text-lg font-medium
                    py-2 transition-all duration-200
                    ${isActive(link.href, link.hash)
                      ? 'text-[#3D4A2A]'
                      : 'text-[#0E0F0C]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 font-[family-name:var(--font-general-sans)] text-sm font-semibold tracking-wider uppercase text-[#FAFAF7] bg-[#3D4A2A] px-6 py-3 rounded-md hover:bg-[#2D3A1A] transition-all mt-4"
              >
                Get Started
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
