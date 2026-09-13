'use client';

import React, { useState, useEffect } from 'react';

interface FloatingRegistrationProps {
  onClick?: () => void;
}

export const FloatingRegistration: React.FC<FloatingRegistrationProps> = ({ onClick }) => {
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = 350;
      setIsOverLight(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <style jsx>{`
        /* পুরো কার্ডটি মসৃণভাবে ছোট গোল ব্যাজ হবে এবং আবার বড় হবে */
        @keyframes cardMorph {
          0%, 25% {
            width: 195px;
          }
          45%, 70% {
            width: 54px;
          }
          88%, 100% {
            width: 195px;
          }
        }

        /* কার্ড ছোট হওয়ার সাথে সাথে টেক্সটটি ভেতরে ফেড ও হাইড হয়ে যাবে */
        @keyframes textMorph {
          0%, 20% {
            opacity: 1;
            max-width: 140px;
            transform: translateX(0px);
          }
          40%, 75% {
            opacity: 0;
            max-width: 0px;
            transform: translateX(10px);
          }
          85%, 100% {
            opacity: 1;
            max-width: 140px;
            transform: translateX(0px);
          }
        }
      `}</style>

      <button
        onClick={onClick}
        aria-label="Open Registration Form"
        className={`relative overflow-hidden flex items-center h-14 rounded-full border-2 p-1.5 transition-colors duration-300 shadow-xl cursor-pointer ${
          isOverLight
            ? 'bg-slate-100 text-slate-900 border-slate-300 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] hover:bg-slate-200'
            : 'bg-[#090b10] text-white border-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.25)] hover:border-amber-400'
        }`}
        style={{
          animation: 'cardMorph 5s ease-in-out infinite',
        }}
      >
        {/* রোবট আইকন ব্যাজ */}
        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#0d131f] border border-amber-500/60 shadow-md">
          <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
            {/* অ্যান্টেনা */}
            <line x1="50" y1="22" x2="50" y2="12" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="9" r="4" fill="#f59e0b" />

            {/* রোবটের মাথা */}
            <rect x="22" y="22" width="56" height="42" rx="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
            <rect x="30" y="30" width="40" height="26" rx="8" fill="#090d16" />

            {/* চোখ */}
            <circle cx="42" cy="43" r="6" fill="#38bdf8" />
            <circle cx="44" cy="41" r="2" fill="#ffffff" />
            <circle cx="58" cy="43" r="6" fill="#38bdf8" />
            <circle cx="60" cy="41" r="2" fill="#ffffff" />

            {/* হাসি */}
            <path d="M 45 49 Q 50 53 55 49" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

            {/* শরীর */}
            <rect x="34" y="68" width="32" height="22" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="50" cy="79" r="3" fill="#f43f5e" />
          </svg>
        </div>

        {/* রেজিস্টার টেক্সট (অটোমেটিক সঙ্কুচিত ও প্রসারিত হবে) */}
        <span
          className="overflow-hidden whitespace-nowrap font-serif font-bold text-sm tracking-wide pl-2.5 pr-3"
          style={{
            animation: 'textMorph 5s ease-in-out infinite',
          }}
        >
          Register Now
        </span>
      </button>
    </div>
  );
};

export default FloatingRegistration;
