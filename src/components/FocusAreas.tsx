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
  Lightbulb,
  HeartPulse,
  Wind,
  Landmark,
  Sprout
} from 'lucide-react';

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

const NODES = [
  { label: 'Smart Manufacturing', icon: Factory, pos: 'top-[4%] left-[10%]', duration: 4.2, delay: 0 },
  { label: 'AI & Software', icon: Cpu, pos: 'top-[8%] right-[6%]', duration: 4.8, delay: 0.6 },
  { label: 'Robotics & Automation', icon: Bot, pos: 'top-[38%] -right-[6%]', duration: 3.8, delay: 1.2 },
  { label: 'Other Innovative Ideas', icon: Lightbulb, pos: 'bottom-[12%] right-[2%]', duration: 5.0, delay: 0.4 },
  { label: 'EdTech', icon: GraduationCap, pos: 'bottom-[0%] left-[42%]', duration: 4.5, delay: 0.8 },
  { label: 'HealthTech', icon: HeartPulse, pos: 'bottom-[8%] left-[18%]', duration: 3.9, delay: 1.5 },
  { label: 'Renewable Energy', icon: Wind, pos: 'bottom-[35%] -left-[4%]', duration: 4.7, delay: 0.3 },
  { label: 'FinTech', icon: Landmark, pos: 'top-[36%] -left-[6%]', duration: 4.1, delay: 1.0 },
  { label: 'AgriTech', icon: Sprout, pos: 'top-[16%] left-[18%]', duration: 4.4, delay: 0.7 },
];

export default function FocusAreas() {
  return (
    <section className="relative w-full py-20 bg-[#FDFBF7] text-slate-900 overflow-hidden select-none">

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#C5943A]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5943A] uppercase">
              Focus Areas (But Not Limited To)
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-slate-950 tracking-tight leading-[1.15]">
            If you have a bold idea, <br />
            you belong <span className="text-[#C5943A]">here.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 italic font-normal pt-1">
            We welcome students from all backgrounds and disciplines. Your idea has the power to create real impact.
          </p>
        </div>

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
                  <div key={index} className="relative flex items-center gap-4 group">
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
                  </div>
                );
              })}
            </div>



          </div>

          {/* Right Column: Orbital Brain Diagram */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">

            {/* Visual Orbit Canvas */}
            <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">

              {/* Concentric Golden Orbit Rings */}
              <div className="absolute inset-4 rounded-full border border-[#E8DEC8]/80 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-dashed border-[#D6AA56]/60 pointer-events-none" />
              <div className="absolute inset-28 rounded-full border border-[#E8DEC8] pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full bg-[#FAF3E0]/50 blur-xl pointer-events-none" />

              {/* Central 3D / Animated Brain Video */}
              <div className="relative z-10 w-52 sm:w-64 h-52 sm:h-64 rounded-full overflow-hidden flex items-center justify-center drop-shadow-[0_20px_40px_rgba(197,148,58,0.25)] border-2 border-[#E8DEC8]/80 bg-white/40 backdrop-blur-sm">
                <video
                  src="/brain.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Floating Pill Nodes */}
              {NODES.map((node, i) => {
                const NodeIcon = node.icon;
                return (
                  <motion.div
                    key={i}
                    className={`absolute ${node.pos} z-20`}
                    animate={{
                      y: [-5, 6, -5],
                      x: [-3, 3, -3],
                    }}
                    transition={{
                      duration: node.duration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: node.delay,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 30 }}
                  >
                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[#E8DEC8] shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-[#C5943A] hover:shadow-[0_12px_28px_rgba(197,148,58,0.18)] transition-all cursor-pointer select-none">
                      <div className="text-[#C5943A]">
                        <NodeIcon size={17} strokeWidth={2.2}/>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>



          </div>

        </div>

        {/* Unified Bottom Split-Banner in Deep Navy Blue */}
        <div className="w-full max-w-5xl mx-auto mt-14 rounded-2xl sm:rounded-3xl bg-white shadow-[0_15px_40px_rgba(9,17,32,0.08)] border border-slate-200/80 flex flex-col md:flex-row overflow-hidden items-stretch">
          
          {/* Left Slanted Navy Blue Gradient Section */}
          <div 
            className="relative flex-1 bg-gradient-to-r from-[#091120] via-[#0F1E36] to-[#1E3A5F] text-white px-6 sm:px-8 py-5 flex items-center gap-4 md:pr-12"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0 100%)'
            }}
          >
            {/* Flash Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-white text-[#091120] flex items-center justify-center flex-shrink-0 shadow-md">
              <Zap className="fill-[#091120] text-[#091120]" size={22}/>
            </div>

            {/* Text */}
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
              No matter what you study, if you have an idea worth building —{' '}
              <span className="font-bold text-white">you can apply.</span>
            </p>
          </div>

          {/* Right Clean White Section */}
          <div className="flex-1 bg-white px-6 sm:px-8 py-5 flex items-center gap-4 md:-ml-3">
            {/* Star Icon Badge (Navy Blue) */}
            <div className="w-12 h-12 rounded-full bg-[#091120] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Star className="text-white stroke-[2.2]" size={20}/>
            </div>

            {/* Text */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Great ideas can come from anywhere. <br className="hidden sm:inline" />
              We help{' '}
              <span className="font-bold text-[#091120]">
                turn them into reality.
              </span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
