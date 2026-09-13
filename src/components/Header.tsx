'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVideoFinished = () => {
      setIsVisible(true);
    };

    window.addEventListener('hero-video-finished', handleVideoFinished);

    // Fallback just in case event already fired
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => {
      window.removeEventListener('hero-video-finished', handleVideoFinished);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header 
      className={`fixed top-5 sm:top-6 left-14 sm:left-20 z-50 transform transition-all duration-[1200ms] ${isVisible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <Link className="flex items-center justify-center my-3 w-auto group" href="/">
        <BrandLogo size="md" className="group-hover:scale-105" />
      </Link>
    </header>
  );
}
