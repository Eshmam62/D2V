'use client';

import React from 'react';
import { UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FloatingRegistrationProps {
  onOpen?: () => void;
}

export default function FloatingRegistration({ onOpen }: FloatingRegistrationProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 1. If an onOpen prop is passed
    if (onOpen) {
      onOpen();
      return;
    }

    // 2. Dispatch custom event for modal listeners
    window.dispatchEvent(new CustomEvent('open-registration'));

    // 3. Fallback: Smooth scroll to registration section if present on page
    const registrationSection = 
      document.getElementById('registration') || 
      document.getElementById('apply') || 
      document.getElementById('registration-form') ||
      document.getElementById('apply-section') ||
      document.querySelector('[data-registration-section]');

    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 4. If no section is found on the current page, navigate to the registration page
      router.push('/registration');
    }
  };

  return (
    <aside aria-label="Floating Registration Widget" className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        aria-label="Open Registration Form"
        className="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full cursor-pointer"
      >
        {/* Hover Tooltip Label */}
        <div className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold tracking-wide whitespace-nowrap shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden sm:flex items-center gap-1.5 border border-white/10">
          <span>Register Now</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Circular Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/35 border-2 border-white/80 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-active:scale-95">
          <UserPlus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6"/>

          {/* Active Live Green Dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
          </span>
        </div>
      </button>
    </aside>
  );
}
