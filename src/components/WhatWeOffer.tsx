'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface OfferCard {
  id: number;
  number: string;
  title: string;
  color: string;
  items: string[];
  image: string;
}

const CARDS: OfferCard[] = [
  {
    id: 1,
    number: '01',
    title: 'DIGITAL & AI',
    color: '#2563eb',
    items: [
      'AI & Machine Learning',
      'Software & SaaS',
      'Fintech & Digital Payments',
      'Cybersecurity',
      'Data & Analytics',
    ],
    image: '/card1.jpeg',
  },
  {
    id: 2,
    number: '02',
    title: 'HARDWARE & ENGINEERING',
    color: '#0891b2',
    items: [
      'IoT & Smart Devices',
      'EV & Mobility Technology',
      'Robotics & Automation',
      'Embedded Electronics',
      'Hardware Prototyping',
    ],
    image: '/card2.jpeg',
  },
  {
    id: 3,
    number: '03',
    title: 'INDUSTRIAL & INFRASTRUCTURE',
    color: '#ea580c',
    items: [
      'Industrial Automation',
      'Security & Surveillance Tech',
      'Renewable Energy & Power',
      'Construction & Smart Building',
      'Water & Waste Management',
    ],
    image: '/card3.jpeg',
  },
  {
    id: 4,
    number: '04',
    title: 'CREATIVE, FILM & MEDIA',
    color: '#9333ea',
    items: [
      'Film Production & OTT',
      'TVC & Commercials',
      'Scriptwriting & Content',
      'Animation, VFX & 3D CGI',
      'Videography & Photography',
    ],
    image: '/card4.jpeg',
  },
  {
    id: 5,
    number: '05',
    title: 'FASHION, DESIGN & LIFESTYLE',
    color: '#db2777',
    items: [
      'Fashion & Apparel Design',
      'Product & Industrial Design',
      'Apparel & Textile Innovation',
      'Sustainable Lifestyle Goods',
      'Brand Identity & Merchandising',
    ],
    image: '/card5.jpeg',
  },
  {
    id: 6,
    number: '06',
    title: 'SOCIAL CONSUMER & OTHER',
    color: '#059669',
    items: [
      'E-Commerce & Marketplace',
      'Food & Beverage Innovation',
      'Agriculture & Agritech',
      'Logistics & Supply Chain',
      'Travel & Hospitality Tech',
    ],
    image: '/card6.jpeg',
  },
];

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.25,
    },
  }),
};

export default function WhatWeOffer() {
  const [[activeIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    const nextIndex = activeIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < CARDS.length) {
      setPage([nextIndex, newDirection]);
    }
  };

  const currentCard = CARDS[activeIndex];

  return (
    <section className="relative w-full bg-[#f8fafc] text-slate-900 font-sans py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/90 text-blue-700 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>WHAT WE OFFER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-blue-600">
              to Turn Ideas into Impact
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
            We provide end-to-end support across Innovation, Investment, and Industry to help student ideas become real-world ventures.
          </p>

          <div className="pt-2 flex items-center gap-2">
            {CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex
                  ? 'w-9 bg-blue-600 shadow-sm'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to ${card.title}`}
              />
            ))}
            <span className="ml-3 text-xs sm:text-sm font-bold text-slate-500 font-mono">
              {currentCard.number} / 06
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex items-center justify-center lg:justify-end gap-4 sm:gap-6 w-full">

          <div className="flex flex-col gap-3 shrink-0 z-20">
            <button
              onClick={() => paginate(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous Card"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border transition-all duration-200 shadow-md ${activeIndex === 0
                ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                : 'bg-white text-slate-800 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                }`}
            >
              <ChevronUp className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={activeIndex === CARDS.length - 1}
              aria-label="Next Card"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border transition-all duration-200 shadow-md ${activeIndex === CARDS.length - 1
                ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
                : 'bg-white text-slate-800 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                }`}
            >
              <ChevronDown className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          <div className="relative w-full max-w-[480px] sm:max-w-[500px] h-[490px] sm:h-[510px] rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] overflow-hidden">
            <AnimatePresence custom="{direction}" mode="wait">
              <motion.div
                key={currentCard.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full bg-white flex flex-col justify-between select-none"
              >
                <div className="p-6 sm:p-7 relative z-10 flex flex-col justify-between bg-white">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span
                      className="text-xs sm:text-sm font-black tracking-widest uppercase font-sans"
                      style={{ color: currentCard.color }}
                    >
                      {currentCard.title}
                    </span>
                    <span
                      className="text-2xl sm:text-3xl font-black font-mono tracking-tight"
                      style={{ color: currentCard.color }}
                    >
                      {currentCard.number}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {currentCard.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: currentCard.color }}
                        />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden bg-slate-50 border-t border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/80 z-10" />
                  <img
                    src={currentCard.image}
                    alt={currentCard.title}
                    className="w-full h-full object-cover object-center select-none pointer-events-none"
                  />
                </div>

                <div className="w-full h-2 shrink-0" style={{ backgroundColor: currentCard.color }} />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
