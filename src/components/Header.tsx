'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide smoothly when scrolling down past top threshold
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setIsVisible(false);
      } else {
        // Show immediately when scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Re-appear automatically when scrolling stops
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } backdrop-blur-md border-b border-white/20`}
      style={{
        background: `linear-gradient(90deg, 
          rgba(224, 242, 254, 0.95) 0%, 
          rgba(235, 245, 255, 0.8) 180px, 
          rgba(255, 255, 255, 0.3) 350px, 
          rgba(255, 255, 255, 0.05) 100%
        )`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <Link className="relative inline-block focus:outline-none group" href="/">
          {/* D2V Logo */}
          <img
            src="/logo.png"
            alt="Dream2Venture Logo"
            className="h-14 sm:h-16 md:h-[72px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>
        
        {pathname === '/registration' && (
          <Link 
            href="/" 
            className="text-slate-600 hover:text-blue-600 font-semibold text-sm md:text-base flex items-center gap-1.5 transition-all hover:-translate-x-1"
          >
            <span aria-hidden="true">&larr;</span> Back to Home
          </Link>
        )}
      </div>
    </header>
  );
}
