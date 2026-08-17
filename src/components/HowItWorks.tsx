'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, ClipboardCheck, Handshake, TrendingUp, Sparkles } from 'lucide-react';

const MOBILE_STEPS = [
  {
    number: '01',
    title: 'APPLY',
    desc: 'Submit your idea or project online in just a few minutes.',
    icon: Lightbulb,
    color: '#ea580c',
    bg: 'bg-orange-50/80',
    border: 'border-orange-200/80',
  },
  {
    number: '02',
    title: 'SUBMIT',
    desc: 'Pitch your concept and share your prototype or business plan.',
    icon: Users,
    color: '#7c3aed',
    bg: 'bg-purple-50/80',
    border: 'border-purple-200/80',
  },
  {
    number: '03',
    title: 'EVALUATION',
    desc: "Our experts review and assess your idea's potential and feasibility.",
    icon: ClipboardCheck,
    color: '#0284c7',
    bg: 'bg-sky-50/80',
    border: 'border-sky-200/80',
  },
  {
    number: '04',
    title: 'SUPPORT & INVEST',
    desc: 'Get mentorship, resources and investment to turn your idea into reality.',
    icon: Handshake,
    color: '#059669',
    bg: 'bg-emerald-50/80',
    border: 'border-emerald-200/80',
  },
  {
    number: '05',
    title: 'GROW',
    desc: 'Scale your venture with industry partnerships and guidance.',
    icon: TrendingUp,
    color: '#1d4ed8',
    bg: 'bg-blue-50/80',
    border: 'border-blue-200/80',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#f8fafc] py-0 my-0 overflow-hidden select-none font-sans">
      
      {/* 1. Mobile Heading Flow (< lg screens) */}
      <div className="flex flex-col items-start max-w-xl mx-auto pt-10 px-4 sm:px-6 lg:hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-400/60 bg-white text-blue-700 text-xs font-bold tracking-wider uppercase shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600"/>
          <span>HOW IT WORKS</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          5 Simple Steps to <br />
          <span className="text-slate-900">Real Impact</span>
        </h2>

        <p className="text-xs sm:text-base text-slate-600 mt-2.5 leading-relaxed font-medium">
          From your idea to a thriving venture — we&apos;re with you at every step of the journey.
        </p>
      </div>

      {/* 2. Full-Width Feathered 3D Visual Canvas */}
      <div className="w-full relative flex items-center justify-center">
        <div className="relative w-full aspect-[1536/1024] bg-[#f8fafc] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]">
          
          {/* Base 3D Staircase Render */}
          <img
            src="/3d-design.png"
            alt="5 Simple Steps to Real Impact"
            className="w-full h-full object-cover select-none pointer-events-none block"
          />

          {/* Stepping Character - Responsive positioning for mobile vs desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="absolute top-[43%] left-[8%] w-[20%] lg:top-[41.5%] lg:left-[17.5%] lg:w-[22.5%] min-w-[120px] lg:min-w-[160px] z-30 pointer-events-none select-none flex flex-col items-start"
          >
            <img
              src="/character.png"
              alt="Innovator stepping onto Step 01"
              className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]"
            />
            {/* Ground Contact Shadow under left foot */}
            <div className="w-[50%] h-2.5 bg-slate-900/35 rounded-full blur-sm -mt-2 ml-1" />
          </motion.div>

          {/* Desktop-Only Left Wall Content (>= lg screens) */}
          <div className="hidden lg:flex absolute top-[10%] left-[5%] w-[28%] max-w-md flex-col items-start z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/60 bg-white/80 backdrop-blur-md text-blue-700 text-xs font-bold tracking-wider uppercase shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600"/>
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              5 Simple Steps <br />
              <span className="text-slate-900">to Real Impact</span>
            </h2>

            <p className="text-sm xl:text-base text-slate-600 mt-4 leading-relaxed font-medium">
              From your idea to a thriving venture — we&apos;re with you at every step of the journey.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Mobile-Only Clean Step-by-Step Cards (< lg screens) */}
      <div className="block lg:hidden px-4 sm:px-6 pb-12 pt-4 max-w-xl mx-auto space-y-3">
        {MOBILE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className={`flex items-start gap-3.5 p-4 rounded-2xl bg-white border ${step.border} shadow-sm`}
            >
              {/* Step Number & Icon */}
              <div
                className={`w-11 h-11 rounded-xl shrink-0 flex flex-col items-center justify-center ${step.bg}`}
              >
                <span className="text-xs font-black font-mono leading-none mb-0.5" style={{ color: step.color }}>
                  {step.number}
                </span>
                <Icon className="w-4 h-4" color={step.color} />
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold tracking-wider uppercase" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
