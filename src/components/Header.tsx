'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollY.on('change', () => {
      if (!hasEntered) return;
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 180);
    });
  }, [scrollY, hasEntered]);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{
        y: !hasEntered ? 0 : isScrolling ? -120 : 0,
        opacity: !hasEntered ? 1 : isScrolling ? 0 : 1,
      }}
      transition={
        !hasEntered
          ? { delay: 5.0, duration: 1.1, ease: [0.16, 1, 0.3, 1] }
          : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
      }
      className="fixed top-0 left-8 sm:left-12 lg:left-16 z-50 origin-top pointer-events-auto"
    >
      {/* Permanent Card Container */}
      <div className="w-[155px] sm:w-[175px] h-[68px] sm:h-[76px] bg-[#f1ebe6] backdrop-blur-sm px-2 pt-1 pb-2 rounded-b-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-white/60 flex items-center justify-center relative">
        {/* Inner subtle top glow */}
        <div className="absolute top-0 inset-x-3 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        <Link className="flex items-center justify-center" href="/">
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Dream 2 Venture Logo" 
            className="h-[52px] sm:h-[58px] w-auto max-w-[145px] sm:max-w-[165px] object-contain drop-shadow-md select-none"
          />
        </Link>
      </div>
    </motion.header>
  );
}
