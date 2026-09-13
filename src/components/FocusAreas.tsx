'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  UserCheck,
  Building2,
  Cog,
  Users,
  Zap,
  Star,
  Cpu,
  Factory,
  Bot,
  Landmark,
  Sprout,
  Sparkles,
  Video,
  Scissors,
  Layers,
  ShieldCheck,
  Lightbulb,
  CreditCard
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ELIGIBILITY = [
  {
    title: 'Undergraduate Students',
    desc: "Currently pursuing a bachelor's degree",
    icon: GraduationCap,
  },
  {
    title: 'Graduate Students',
    desc: "Pursuing a master's degree",
    icon: BookOpen,
  },
  {
    title: 'Postgraduate Students',
    desc: 'Pursuing MPhil / PhD or equivalent',
    icon: UserCheck,
  },
  {
    title: 'From Public & Private Universities',
    desc: 'Across Bangladesh',
    icon: Building2,
  },
  {
    title: 'Engineering & Technology Students',
    desc: 'From any engineering or tech background',
    icon: Cog,
  },
  {
    title: 'Students from Any Discipline',
    desc: 'All academic disciplines are welcome',
    icon: Users,
  },
];

const orbitPills = [
  {
    id: 1,
    label: 'Fashion & Lifestyle',
    icon: <Scissors className="w-4 h-4 text-[#d97706]"/>,
    top: '15%',
    left: '30%',
    animClass: 'animate-float-1',
  },
  {
    id: 2,
    label: 'IoT & Smart Devices',
    icon: <Cpu className="w-4 h-4 text-[#d97706]"/>,
    top: '25%',
    left: '36%',
    animClass: 'animate-float-2',
  },
  {
    id: 3,
    label: 'AI & Machine Learning',
    icon: <Sparkles className="w-4 h-4 text-[#d97706]"/>,
    top: '18%',
    left: '72%',
    animClass: 'animate-float-3',
  },
  {
    id: 4,
    label: 'Robotics & Automation',
    icon: <Bot className="w-4 h-4 text-[#d97706]"/>,
    top: '42%',
    left: '76%',
    animClass: 'animate-float-1',
  },
  {
    id: 5,
    label: 'Fintech & Digital Payments',
    icon: <CreditCard className="w-4 h-4 text-[#d97706]"/>,
    top: '40%',
    left: '24%',
    animClass: 'animate-float-2',
  },
  {
    id: 6,
    label: 'Renewable Energy & Power',
    icon: <Zap className="w-4 h-4 text-[#d97706]"/>,
    top: '58%',
    left: '28%',
    animClass: 'animate-float-3',
  },
  {
    id: 7,
    label: 'Agriculture & AgriTech',
    icon: <Sprout className="w-4 h-4 text-[#d97706]"/>,
    top: '76%',
    left: '42%',
    animClass: 'animate-float-1',
  },
  {
    id: 8,
    label: 'Film, VFX & Media',
    icon: <Video className="w-4 h-4 text-[#d97706]"/>,
    top: '84%',
    left: '54%',
    animClass: 'animate-float-2',
  },
  {
    id: 9,
    label: 'Industrial Automation',
    icon: <Layers className="w-4 h-4 text-[#d97706]"/>,
    top: '72%',
    left: '72%',
    animClass: 'animate-float-3',
  },
];

export default function FocusAreas() {
  return (
    <section className="relative w-full py-20 bg-[#FDFBF7] text-slate-900 overflow-hidden select-none">
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

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

        {/* Top Header */}
        <ScrollReveal>
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="relative rounded-3xl bg-[#f8fafc] border-0 border-none shadow-[0_20px_50px_rgba(15,23,42,0.06)] p-8 sm:p-12 text-center transition-all duration-300">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-amber-500/70 rounded-full" />
              <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-[#d97706] uppercase">
                FOCUS AREAS (BUT NOT LIMITED TO)
              </span>
              <span className="h-[2px] w-8 bg-amber-500/70 rounded-full" />
            </div>

            {/* Main Title with Solid Colors */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.2]">
              If you have a bold idea, <br className="hidden sm:block" />
              you belong <span className="text-[#2563eb]">here</span><span className="text-[#d97706]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-slate-600 italic text-base sm:text-lg max-w-2xl mx-auto">
              We welcome students from all backgrounds and disciplines. Your idea has the power to <span className="font-semibold text-[#2563eb] not-italic">create real <span className="text-[#d97706]">impact.</span></span>
            </p>
          </div>
        </div>
        </ScrollReveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Who Can Apply Timeline */}
          <div className="lg:col-span-5 space-y-6">

            {/* Who Can Apply Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111827] text-white shadow-md mb-2">
              <Users className="text-[#D6AA56]" size={16} />
              <span className="text-xs font-black tracking-widest uppercase">
                Who Can Apply?
              </span>
            </div>

            {/* Timeline Steps */}
            <div className="relative pl-6 space-y-6">
              {/* Vertical Connecting Line */}
              <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-[#E8DEC8]" />

              {ELIGIBILITY.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal key={index} delay={0.1 * index} className="relative flex items-center gap-4 group">
                    {/* Left Node Dot */}
                    <div className="absolute -left-[14px] w-2.5 h-2.5 rounded-full bg-[#C5943A] border-2 border-white shadow-sm z-10" />

                    {/* Circular Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-white border border-[#E8DEC8] flex items-center justify-center text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex-shrink-0 z-10 group-hover:scale-105 transition-transform">
                      <IconComponent className="text-slate-800 stroke-[1.8]" size={20} />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>



          </div>

          {/* Right Column: Orbital Brain Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center overflow-hidden">
            <ScrollReveal delay={0.3}>
              <div
                className="relative flex-shrink-0 flex items-center justify-center select-none"
                style={{ width: '760px', height: '760px' }}
              >
                {/* Orbital Circles */}
                <div className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-[#e6decb] pointer-events-none" />
                <div className="absolute w-[66%] h-[66%] rounded-full border border-[#ece4d5] pointer-events-none" />
                <div className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-[#ece4d5] pointer-events-none" />

                {/* Central Brain Video - Transparent Multiply Blend */}
                <div
                  className="relative z-10 flex items-center justify-center pointer-events-none"
                  style={{ width: '230px', height: '230px', mixBlendMode: 'multiply' }}
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

                {/* Distributed Orbit Badges */}
                {orbitPills.map((badge) => (
                  <div
                    key={badge.id}
                    style={{
                      position: 'absolute',
                      top: badge.top,
                      left: badge.left,
                    }}
                    className={`absolute z-20 ${badge.animClass} flex items-center gap-2.5 px-4 py-2 bg-white/95 backdrop-blur-md rounded-2xl border border-[#f0eae1] shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap`}
                  >
                    <div className="flex items-center justify-center text-[#d97706]">
                      {badge.icon}
                    </div>
                    <span className="text-[13px] font-serif font-semibold text-[#1e293b]">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Unified Bottom Split-Banner in Deep Navy Blue */}
        <ScrollReveal>
        <div className="w-full max-w-5xl mx-auto mt-14 rounded-3xl bg-slate-50/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border-2 border-slate-300 flex flex-col md:flex-row overflow-hidden items-stretch transition-all duration-300">

          {/* Left Slanted Navy Blue Gradient Section */}
          <div
            className="relative flex-1 bg-gradient-to-r from-[#091120] via-[#0F1E36] to-[#1E3A5F] text-white px-6 sm:px-8 py-5 flex items-center gap-4 md:pr-12"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0 100%)'
            }}
          >
            {/* Flash Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-white text-[#091120] flex items-center justify-center flex-shrink-0 shadow-md">
              <Zap className="fill-[#091120] text-[#091120]" size={22} />
            </div>

            {/* Text */}
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
              No matter what you study, if you have an idea worth building —{' '}
              <span className="font-bold text-white">you can apply.</span>
            </p>
          </div>

          {/* Right Clean White Section */}
          <div className="flex-1 bg-transparent px-6 sm:px-8 py-5 flex items-center gap-4 md:-ml-3">
            {/* Star Icon Badge (Navy Blue) */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a1128] text-white flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-slate-600 text-sm font-normal">Great ideas can come from anywhere.</p>
              <p className="text-slate-900 text-base font-normal">
                We help <span className="font-bold text-slate-950">turn them into reality.</span>
              </p>
            </div>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
