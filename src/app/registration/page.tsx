'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ApplicationForm from '@/components/ApplicationForm';

export default function PitchIdeaPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden py-10 sm:py-16 px-4 sm:px-8">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 1. HANGING LOGO BADGE (Attached to Top Edge - Exactly like Homepage)       */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-6 sm:left-12 lg:left-16 z-30">
        <Link className="inline-block bg-white px-5 py-3 sm:px-7 sm:py-4 rounded-b-2xl sm:rounded-b-3xl shadow-[0_12px_35px_rgba(0,0,0,0.22)] border-x border-b border-slate-100 transition-transform duration-300 hover:translate-y-0.5" href="/">
          <img 
            src="/logo.png" 
            alt="Dream 2 Venture" 
            className="h-8 sm:h-11 w-auto object-contain" 
          />
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP BAR ACTIONS (Back to Home Button Pinned to Top Right)              */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto flex justify-end items-center mb-8 sm:mb-12">
        <Link className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all text-xs sm:text-sm font-semibold shadow-md active:scale-95 cursor-pointer" href="/">
          <ArrowLeft size={15} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 3. HEADING & FORM CONTENT                                                 */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 mb-10 pt-4">
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
