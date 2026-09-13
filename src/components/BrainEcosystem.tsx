'use client';

import React from 'react';
import {
  Sparkles,
  Bot,
  Layers,
  Sprout,
  Zap,
  Video,
  CreditCard,
  Scissors,
  Cpu,
} from 'lucide-react';

const orbitBadges = [
  {
    id: 1,
    label: 'Fashion & Lifestyle',
    icon: <Scissors className="w-4 h-4 text-[#d97706]"/>,
    top: '11%',
    left: '26%',
    animClass: 'animate-float-1',
  },
  {
    id: 2,
    label: 'IoT & Smart Devices',
    icon: <Cpu className="w-4 h-4 text-[#d97706]"/>,
    top: '23%',
    left: '32%',
    animClass: 'animate-float-2',
  },
  {
    id: 3,
    label: 'AI & Machine Learning',
    icon: <Sparkles className="w-4 h-4 text-[#d97706]"/>,
    top: '16%',
    left: '76%',
    animClass: 'animate-float-3',
  },
  {
    id: 4,
    label: 'Robotics & Automation',
    icon: <Bot className="w-4 h-4 text-[#d97706]"/>,
    top: '41%',
    left: '81%',
    animClass: 'animate-float-1',
  },
  {
    id: 5,
    label: 'Fintech & Digital Payments',
    icon: <CreditCard className="w-4 h-4 text-[#d97706]"/>,
    top: '39%',
    left: '19%',
    animClass: 'animate-float-2',
  },
  {
    id: 6,
    label: 'Renewable Energy & Power',
    icon: <Zap className="w-4 h-4 text-[#d97706]"/>,
    top: '59%',
    left: '24%',
    animClass: 'animate-float-3',
  },
  {
    id: 7,
    label: 'Agriculture & AgriTech',
    icon: <Sprout className="w-4 h-4 text-[#d97706]"/>,
    top: '80%',
    left: '39%',
    animClass: 'animate-float-1',
  },
  {
    id: 8,
    label: 'Film, VFX & Media',
    icon: <Video className="w-4 h-4 text-[#d97706]"/>,
    top: '88%',
    left: '55%',
    animClass: 'animate-float-2',
  },
  {
    id: 9,
    label: 'Industrial Automation',
    icon: <Layers className="w-4 h-4 text-[#d97706]"/>,
    top: '77%',
    left: '76%',
    animClass: 'animate-float-3',
  },
];

export default function BrainEcosystem() {
  return (
    <section className="relative w-full bg-[#faf7f2] py-16 flex items-center justify-center overflow-hidden">
      {/* Floating Keyframes Inline Style */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-7px) rotate(0.5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(7px) rotate(-0.5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateX(5px) translateY(-5px); }
        }
        .animate-float-1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float2 4.6s ease-in-out infinite 0.5s;
        }
        .animate-float-3 {
          animation: float3 5.2s ease-in-out infinite 1s;
        }
        .animate-float-1:hover, .animate-float-2:hover, .animate-float-3:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-[640px] sm:w-[750px] aspect-square flex-shrink-0 flex items-center justify-center select-none">
        
        {/* Orbital Circles */}
        <div className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-[#e6decb] pointer-events-none" />
        <div className="absolute w-[74%] h-[74%] rounded-full border border-[#ece4d5] pointer-events-none" />
        <div className="absolute w-[56%] h-[56%] rounded-full border border-dashed border-[#ece4d5] pointer-events-none" />

        {/* Central Brain Video - Transparent Multiply Blend */}
        <div 
          className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center pointer-events-none"
          style={{ mixBlendMode: 'multiply' }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ mixBlendMode: 'multiply' }}
            className="w-full h-full object-contain filter contrast-125 brightness-105"
          >
            <source src="/brain.mp4" type="video/mp4" />
            <source src="/assets/brain.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Orbit Badges */}
        {orbitBadges.map((badge) => (
          <div
            key={badge.id}
            style={{ top: badge.top, left: badge.left }}
            className={`absolute z-20 ${badge.animClass} flex items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-md rounded-2xl border border-[#f0eae1] shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap`}
          >
            <div className="flex items-center justify-center text-[#d97706]">
              {badge.icon}
            </div>
            <span className="text-xs sm:text-[13px] font-serif font-semibold text-[#1e293b]">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
