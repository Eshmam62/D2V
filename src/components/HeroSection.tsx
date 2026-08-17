"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 25, mass: 0.8 },
    },
  };

  return (
    <section className="min-h-screen w-full bg-white flex flex-col justify-between pt-20 pb-6 px-4 md:px-12 relative overflow-hidden font-poppins">

      {/* Main Hero Split Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-2 lg:gap-6 items-center max-w-7xl mx-auto px-4 md:px-6 w-full z-20 mt-4 md:mt-8">

        {/* LEFT COLUMN */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-7 text-left space-y-1 md:space-y-2 pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl mb-2">
            Have an Idea Big <br />
            Enough to <span className="text-blue-600">Change</span> <br />
            <span className="text-blue-600">Everything?</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-slate-600 max-w-xl mt-2 mb-4 md:mb-6 leading-relaxed">
            You spark the bold vision. We provide the seed capital, expert guidance, and tech ecosystem to make it real.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/registration"
              className="bg-white text-slate-900 hover:bg-blue-500 hover:text-white font-bold py-2.5 md:py-3.5 px-6 md:px-8 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer text-sm md:text-base"
            >
              Pitch Your Idea &rarr;
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col items-center justify-center min-h-[200px] md:min-h-[350px]">
          {/* Center Floating Image with Speech Bubble */}
          <div className="relative w-full max-w-xs flex flex-col items-center justify-center mt-2 pt-6 md:pt-10">

            {/* Speech Bubble (Upper Left) pointing towards raised hand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute top-2 left-2 sm:left-4 md:top-24 md:-left-24 lg:-left-28 z-20 pointer-events-none transition-all duration-300"
            >
              <div className="relative bg-white text-slate-900 px-3.5 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center whitespace-nowrap">
                <span className="font-medium text-xs md:text-sm text-slate-800 tracking-tight">
                  &quot;Hi, Young Innovator! 👋&quot;
                </span>

                {/* Desktop Arrow Pointer towards Mascot */}
                <div className="absolute hidden md:block -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-white drop-shadow-sm" />

                {/* Mobile Arrow Pointer */}
                <div className="absolute md:hidden -bottom-1.5 left-6 w-0 h-0 border-x-[5px] border-x-transparent border-t-[6px] border-t-white drop-shadow-sm" />
              </div>
            </motion.div>

            {/* Ambient Radial Glow */}
            <div className="absolute left-[-5%] top-[20%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-600/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute right-[-5%] bottom-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-indigo-600/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* 1. Rocket Badge (Top / Upper-Center) */}
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} className="absolute -top-6 left-[62%] sm:left-[64%] z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-none">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </motion.div>

            {/* 2. Growth Arrow Badge (Upper-Right) */}
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-6 -right-2 sm:-right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-none">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </motion.div>

            {/* 3. Blue Accent Dots */}
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-20 right-4 sm:right-6 z-10 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-sm pointer-events-none"></motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-12 -left-2 w-2 h-2 bg-blue-500/80 rounded-full shadow-sm -z-10 pointer-events-none"></motion.div>

            {/* 4. Target Badge (Lower-Right) */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute bottom-16 -right-2 sm:-right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-orange-100 shadow-md flex items-center justify-center pointer-events-none">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
            </motion.div>

            {/* Floating Cartoon Image */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative inline-flex justify-center">
                {/* White backing layer to fill transparent eye/teeth/shirt holes */}
                <div className="absolute inset-0 bg-white rounded-full scale-90 blur-[1px] -z-10" />
                <img
                  src="/startweb.png"
                  alt="3D Innovator Character"
                  className="max-h-[280px] md:max-h-[380px] w-auto object-contain mx-auto relative z-10"
                  style={{ mixBlendMode: 'normal', filter: 'none' }}
                />
              </div>
            </motion.div>

            {/* 3D Pedestal Platform */}
            <div className="absolute -bottom-1 md:-bottom-3 left-1/2 -translate-x-1/2 w-[140px] md:w-[260px] flex flex-col items-center -z-10">
              <div className="w-full h-5 md:h-8 bg-gradient-to-b from-white via-purple-50 to-purple-100/80 border border-purple-200/90 rounded-[100%] shadow-xl shadow-purple-500/15"></div>
              <div className="w-[85%] h-4 md:h-6 bg-gradient-to-b from-white via-indigo-50 to-purple-200/90 border border-purple-300/70 rounded-[100%] -mt-2 md:-mt-3 shadow-md"></div>
              <div className="w-[65%] h-2.5 md:h-4 bg-gradient-to-b from-purple-100 to-indigo-300/80 rounded-[100%] -mt-1.5 md:-mt-2 shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Layout block for Features & Indicator */}
      <div className="w-full flex flex-col items-center justify-end z-20 mt-auto">

        {/* Bottom Horizontal Feature Bar (4 Columns) */}
        <div className="w-full max-w-6xl mx-auto bg-[#111C3A]/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 md:mb-6 shadow-xl">
          <div className="flex flex-col gap-1.5">
            <div className="bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 p-1.5 rounded-lg inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9">
              🌱
            </div>
            <div>
              <div className="text-white font-semibold text-[11px] md:text-sm">Seed Funding</div>
              <div className="text-slate-400 text-[9px] md:text-[11px]">Up to $100K for bold ideas</div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 p-1.5 rounded-lg inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9">
              👥
            </div>
            <div>
              <div className="text-white font-semibold text-[11px] md:text-sm">Expert Guidance</div>
              <div className="text-slate-400 text-[9px] md:text-[11px]">Mentorship from industry leaders</div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 p-1.5 rounded-lg inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9">
              ⚙️
            </div>
            <div>
              <div className="text-white font-semibold text-[11px] md:text-sm">Tech Ecosystem</div>
              <div className="text-slate-400 text-[9px] md:text-[11px]">Resources, tools & network access</div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 p-1.5 rounded-lg inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9">
              🌍
            </div>
            <div>
              <div className="text-white font-semibold text-[11px] md:text-sm">Global Impact</div>
              <div className="text-slate-400 text-[9px] md:text-[11px]">Building solutions for a better tomorrow</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
