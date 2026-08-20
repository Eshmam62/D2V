'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sunriseSlowEase = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const [phase, setPhase] = useState<'hidden' | 'wave' | 'content'>('hidden');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;

    if (time >= 3.0 && phase === 'hidden') {
      setPhase('wave');
    }

    if (time >= 3.7 && phase !== 'content') {
      setPhase('content');
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-[72%_center] sm:object-center brightness-[0.85] md:brightness-90"
          src="/heros.mp4"
        />
        <div className="absolute inset-0 bg-black/20 sm:bg-black/30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:hidden pointer-events-none" />
      </div>

      {/* Speech Bubble */}
      {phase !== 'hidden' && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: sunriseSlowEase }}
          className="absolute top-[31%] right-[40%] sm:right-[41%] md:right-[42%] lg:right-[43%] z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          <span className="text-xl animate-bounce">👋</span>
          <span className="text-sm font-semibold tracking-wide text-white">Hi, Founder!</span>
          <div className="absolute -bottom-2 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black/85" />
        </motion.div>
      )}

      {/* Main Content (Larger Text Scale) */}
      <div className="relative z-10 w-full h-full min-h-screen max-w-7xl mx-auto px-6 sm:px-12 lg:pl-20 lg:pr-6 flex flex-col justify-end pb-24 pt-0 sm:justify-center sm:pb-0 lg:py-20 text-left">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          {phase === 'content' && (
            <motion.div
              initial={{ opacity: 0, y: 100, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.8, ease: sunriseSlowEase }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Scaled-up Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-black text-white leading-[1.14] tracking-tight">
                Transform Your <br />
                Vision Into a <br />
                Market Leader
              </h1>

              {/* Scaled-up Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed max-w-sm sm:max-w-md font-normal">
                We back bold founders with early-stage capital, hands-on mentorship, and the technology network required to build category-defining ventures.
              </p>

              {/* 3D Interactive Button Navigating to Registration Page */}
              <div className="relative inline-block group z-30 pointer-events-auto pt-2 sm:pt-4">
                <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transform translate-y-1.5 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)] pointer-events-none" />

                <Link className="relative z-10 flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:-translate-x-0.5 group-active:translate-y-0 cursor-pointer select-none" href="/registration">
                  <span>Pitch Your Idea</span>
                  <span className="text-lg inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
