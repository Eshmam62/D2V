'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoEnded) {
        setVideoEnded(true);
        window.dispatchEvent(new CustomEvent('hero-video-finished'));
      }
    }, 8000); // 8-second fallback

    return () => clearTimeout(timer);
  }, [videoEnded]);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#030712] text-white overflow-hidden flex items-center z-0">

      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          src="/heros1.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setVideoEnded(true);
            window.dispatchEvent(new CustomEvent('hero-video-finished'));
          }}
          className="w-full h-full object-cover object-[72%_center] sm:object-[75%_center] brightness-110 contrast-105"
        />
        {/* Light subtle left-side shade for text readability only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent pointer-events-none" />
      </div>





      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-28 sm:pt-20 pb-16 flex flex-col justify-center">
        <div
          className={`max-w-xl lg:max-w-2xl space-y-6 transform transition-all duration-1000 ease-out ${videoEnded
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-12 pointer-events-none'
            }`}
        >

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12]">
            Transform Your <br />
            Vision Into a <br />
            <span className="text-[#2563eb] drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Market <span className="text-[#f59e0b]">Leader</span>
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal max-w-lg">
            We back bold founders with early-stage capital, hands-on mentorship, and the technology network required to build category-defining ventures.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <Link
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-white text-slate-950 font-bold text-sm sm:text-base border-none shadow-none hover:bg-[#f59e0b] hover:text-black transition-colors duration-200 select-none cursor-pointer"
              href="/registration"
            >
              <span className="text-inherit transition-colors duration-200">Pitch Your Idea</span>
              <span className="text-lg leading-none text-inherit transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Persistent Audio Mute Button - Bottom Left */}
      <div className="fixed sm:absolute bottom-6 left-6 sm:bottom-8 sm:left-14 z-40 pointer-events-auto">
        <button
          onClick={toggleAudio}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          className="p-3.5 rounded-2xl bg-[#0a0f1d]/85 hover:bg-[#111827] border border-slate-700/80 text-slate-300 hover:text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          {isMuted ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 4.663 12 5.109 12 6v12c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 4.663 12 5.109 12 6v12c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
