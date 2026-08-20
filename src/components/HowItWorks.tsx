'use client';

import React from 'react';

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#eae4e0] overflow-hidden py-0 md:py-0">

      {/* ========================================================================= */}
      {/* 1. DESKTOP / TABLET VIEW (md and up) - Full Bleed Background Overlay      */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative w-full min-h-[700px] lg:min-h-screen items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#eae4e0] via-[#eae4e0]/60 to-transparent pointer-events-none z-10" />
          <img
            src="/staircase-journey.png"
            alt="5 Steps Journey"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bottom Seamless Fade to WhatWeOffer (Pure White) */}
        <div className="absolute bottom-0 inset-x-0 h-28 md:h-36 bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none z-10" />

        {/* Text Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-md lg:max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1222] border border-white/10 shadow-sm">
              <span className="text-amber-400 text-xs">✨</span>
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                HOW IT WORKS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              5 Simple Steps <br />
              to Real Impact
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium leading-relaxed max-w-md lg:max-w-lg">
              From your idea to a thriving venture — we&apos;re with you at every step of the journey.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW (< md) - Stacked Top Text + Full Visible Graphic           */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col gap-6 px-5 w-full">
        {/* Mobile Header Text */}
        <div className="max-w-md lg:max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1222] border border-white/10 shadow-sm">
            <span className="text-amber-400 text-xs">✨</span>
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            5 Simple Steps <br />
            to Real Impact
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium leading-relaxed max-w-md lg:max-w-lg">
            From your idea to a thriving venture — we&apos;re with you at every step of the journey.
          </p>
        </div>

        {/* Mobile Full Illustration (Zero Cropping - 100% Complete View) */}
        <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 bg-slate-50">
          <img
            src="/staircase-journey.png"
            alt="5 Steps Journey"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

    </section>
  );
}
