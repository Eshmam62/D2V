'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ApplicationForm from '@/components/ApplicationForm';
import BrandLogo from '@/components/BrandLogo';

export default function PitchIdeaPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden pt-6 sm:pt-8 pb-12 px-6">

      {/* Background Ambient Glow Orbs */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top-Left D2V Brand Logo */}
      <div className="fixed top-5 sm:top-6 left-14 sm:left-20 z-50 pointer-events-auto">
        <Link className="flex items-center justify-center w-auto group" href="/">
          <BrandLogo size="md" className="group-hover:scale-105" />
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP BAR ACTIONS (Back to Home Button Pinned to Top Right)              */}
      {/* ========================================================================= */}
      <div className="fixed top-5 sm:top-6 right-14 sm:right-20 z-50 pointer-events-auto">
        <Link className="flex items-center gap-2.5 bg-[#070b12] border-2 border-amber-400 rounded-[20px] sm:rounded-[22px] px-5 py-2.5 sm:px-6 sm:py-3 shadow-[0_0_28px_rgba(251,191,36,0.35)] hover:shadow-[0_0_38px_rgba(251,191,36,0.55)] hover:scale-105 transition-all duration-300 text-amber-400 font-bold text-sm sm:text-base tracking-wide" href="/">
          <span className="text-lg leading-none">&larr;</span> Back to Home
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 3. HEADING & FORM CONTENT                                                 */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 mt-2 sm:mt-4 mb-5">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Pitch Your <span className="text-[#6366f1]">Idea</span> 🚀
        </h1>
        <p className="text-sm sm:text-base text-slate-400 font-normal">
          Share your idea with us and let&apos;s turn it into real impact.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2" />
      </div>

      {/* Form Card Container */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(99,102,241,0.2)] border border-slate-100 text-slate-900">
        <ApplicationForm />
      </div>

    </main>
  );
}
