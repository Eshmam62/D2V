'use client';

import React, { useState, useEffect } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switches to ash background when scrolling down past the dark hero area
      const heroThreshold = typeof window !== 'undefined' ? window.innerHeight * 0.85 : 350;
      setIsOverLight(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16 md:h-20',
  };

  const padClasses = {
    sm: 'px-4 py-1.5',
    md: 'px-6 py-2.5 sm:px-7 sm:py-3',
    lg: 'px-8 py-3.5 sm:px-9 sm:py-4',
  };

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full transition-all duration-300 select-none ${
        isOverLight
          ? 'bg-slate-100/95 border border-slate-300 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] backdrop-blur-md'
          : 'bg-white border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]'
      } ${padClasses[size]} ${className}`}
    >
      <img
        src="/footerlogo.png"
        alt="Dream 2 Venture"
        className={`${sizeClasses[size]} w-auto object-contain block`}
      />
    </div>
  );
};

export default BrandLogo;
