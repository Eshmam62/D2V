'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { 
  Bot, 
  Layers, 
  CreditCard, 
  ShieldCheck, 
  BarChart3, 
  Cpu, 
  ArrowUp, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, Observer);

const OFFERS = [
  {
    id: '01',
    category: 'DIGITAL & AI',
    points: [
      { text: 'AI & Machine Learning', icon: Bot },
      { text: 'Software & SaaS', icon: Layers },
      { text: 'Fintech & Digital Payments', icon: CreditCard },
      { text: 'Cybersecurity', icon: ShieldCheck },
      { text: 'Data & Analytics', icon: BarChart3 },
    ],
    image: '/card1.jpeg',
  },
  {
    id: '02',
    category: 'HARDWARE & ENGINEERING',
    points: [
      { text: 'IoT & Smart Devices', icon: Cpu },
      { text: 'EV & Mobility Technology', icon: Layers },
      { text: 'Robotics & Automation', icon: Bot },
    ],
    image: '/card2.jpeg',
  },
  {
    id: '03',
    category: 'INDUSTRIAL & INFRASTRUCTURE',
    points: [
      { text: 'Industrial Automation', icon: Cpu },
      { text: 'Security & Surveillance Tech', icon: ShieldCheck },
      { text: 'Renewable Energy & Power', icon: Layers },
      { text: 'Construction & Smart Building', icon: Cpu },
      { text: 'Water & Waste Management', icon: ShieldCheck },
    ],
    image: '/card3.jpeg',
  },
  {
    id: '04',
    category: 'CREATIVE, FILM & MEDIA',
    points: [
      { text: 'Film Production', icon: Layers },
      { text: 'TVC & Commercials', icon: Bot },
      { text: 'Script Writing & Content Development', icon: ShieldCheck },
      { text: 'Animation, VFX & 3D', icon: Cpu },
      { text: 'Videography & Photography', icon: BarChart3 },
    ],
    image: '/card4.jpeg',
  },
  {
    id: '05',
    category: 'FASHION, DESIGN & LIFESTYLE',
    points: [
      { text: 'Fashion Design', icon: Layers },
      { text: 'Product Design', icon: Cpu },
      { text: 'Apparel & Textile Innovation', icon: Layers },
    ],
    image: '/card5.jpeg',
  },
  {
    id: '06',
    category: 'SOCIAL CONSUMER & OTHER',
    points: [
      { text: 'E-Commerce & Marketplace', icon: CreditCard },
      { text: 'Food & Beverage', icon: Layers },
      { text: 'Agriculture & Agritech', icon: Cpu },
      { text: 'Tourism & Travel', icon: ShieldCheck },
    ],
    image: '/card6.jpeg',
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    y: direction >= 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 26 },
      opacity: { duration: 0.22 },
    },
  },
  exit: (direction: number) => ({
    y: direction >= 0 ? -50 : 50,
    opacity: 0,
    scale: 0.97,
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 26 },
      opacity: { duration: 0.18 },
    },
  }),
};

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);

  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const isAnimatingRef = useRef(false);
  const touchStartY = useRef(0);

  // Keyboard Navigation Controller
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      // Check if the section is currently visible in the viewport
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4;

      if (!isInView) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeIndexRef.current < OFFERS.length - 1) {
          e.preventDefault();
          setDirection(1);
          setActiveIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          setDirection(-1);
          setActiveIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Desktop Pinning Controller (Active only on screens >= 1024px)
  useEffect(() => {
    // Ensure native body scrolling is always enabled
    document.body.style.overflow = '';

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    if (!section || !pinContainer) return;

    const mm = gsap.matchMedia();

    // Desktop / Laptop View (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        pin: pinContainer,
        start: 'top top',
        end: '+=2000',
        scrub: 0.5,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          let newIndex = 0;

          if (progress < 0.16) {
            newIndex = 0;
          } else if (progress < 0.33) {
            newIndex = 1;
          } else if (progress < 0.50) {
            newIndex = 2;
          } else if (progress < 0.67) {
            newIndex = 3;
          } else if (progress < 0.84) {
            newIndex = 4;
          } else {
            newIndex = 5;
          }

          setActiveIndex((prev) => {
            if (prev !== newIndex) {
              setDirection(newIndex > prev ? 1 : -1);
              return newIndex;
            }
            return prev;
          });
        },
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      mm.revert();
      document.body.style.overflow = '';
    };
  }, []);

  const current = OFFERS[activeIndex];

  const handleNext = () => {
    if (activeIndex < OFFERS.length - 1) {
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Card Touch Swipe Gestures for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 40) {
      if (deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-white select-none py-8 sm:py-16 lg:py-0">
      
      {/* Container */}
      <div 
        ref={pinContainerRef}
        className="w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-white px-4 sm:px-8 py-6 lg:py-0"
      >
        {/* Background Dot Matrix */}
        <div 
          className="absolute top-12 right-1/4 w-72 h-44 opacity-25 pointer-events-none z-0 hidden sm:block"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center">
          
          {/* Left Vertical Sidebar (Desktop only) */}
          <aside className="hidden xl:flex flex-col items-center justify-between w-20 bg-[#070e1b] rounded-3xl py-8 px-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-800/80 flex-shrink-0">
            <div className="text-center">
              <span className="block text-2xl font-black text-[#d6aa56] tracking-tight">{current.id}</span>
              <span className="text-xs font-bold text-slate-500 tracking-wider">/ 06</span>
            </div>

            <div className="flex flex-col items-center my-8">
              <div className="w-[2px] h-28 bg-slate-800 relative rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-[#d6aa56] absolute top-0 left-0 rounded-full"
                  animate={{ height: `${((activeIndex + 1) / 6) * 100}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 my-6">
              <button 
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous Offer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#d6aa56] hover:bg-slate-800 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowUp size="{16}"/>
              </button>
              <button 
                onClick={handleNext}
                disabled={activeIndex === OFFERS.length - 1}
                aria-label="Next Offer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#d6aa56] hover:bg-slate-800 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowDown size="{16}"/>
              </button>
            </div>

            <div className="flex flex-col gap-4 text-slate-500 pt-4">
              <span className="text-xs font-bold text-slate-600">D2V</span>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-between py-1">
            
            {/* Top Navigation Control */}
            <div className="flex justify-end items-center gap-3 mb-3 sm:mb-6">
              <span className="text-xs font-bold text-slate-400 lg:hidden">
                {current.id} / 06
              </span>
              <button 
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous Slide"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size="{18}"/>
              </button>
              <button 
                onClick={handleNext}
                disabled={activeIndex === OFFERS.length - 1}
                aria-label="Next Slide"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-900 flex items-center justify-center text-white hover:bg-[#c5943a] hover:border-[#c5943a] transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size="{18}"/>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Text Column */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black border border-white/15 shadow-sm">
                  <span className="text-amber-400 text-xs sm:text-sm">✨</span>
                  <span className="text-[11px] sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
                    What We Offer
                  </span>
                </div>

                <h2 className="text-2xl sm:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.18] sm:leading-[1.12]">
                  Everything You <br className="hidden sm:inline" />
                  Need to Turn <br />
                  <span className="text-[#4552bf]">Ideas</span> into{' '}
                  <span className="text-[#c5943a]">Impact</span>
                </h2>

                <div className="w-12 h-[3px] bg-[#c5943a] rounded-full" />

                <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-md font-normal">
                  We provide end-to-end support across Innovation, Investment, and Industry to help student ideas become real-world ventures.
                </p>

                {/* Progress Indicator Dots */}
                <div className="flex items-center gap-2 pt-1 sm:pt-4">
                  {OFFERS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > activeIndex ? 1 : -1);
                        setActiveIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeIndex === i ? 'w-7 sm:w-8 bg-[#c5943a]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Morphing Card (Touch Swipe Enabled) */}
              <div 
                className="lg:col-span-6 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[420px] lg:min-h-[460px]"
                  >
                    {/* Top Left Fixed Chip Badge */}
                    <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#c5943a] text-white flex items-center justify-center rounded-br-2xl shadow-sm z-20 pointer-events-none">
                      <Cpu className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.2}/>
                    </div>

                    {/* Left Content Column */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 pt-12 sm:pt-14 flex flex-col justify-center">
                      <div>
                        <span className="text-3xl lg:text-4xl font-black text-[#d6aa56] block tracking-tight mb-2">
                          {current.id}
                        </span>
                        
                        <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight mb-6 uppercase">
                          {current.category}
                        </h3>

                        <ul className="space-y-3.5 lg:space-y-4">
                          {current.points.map((point, i) => {
                            const IconComp = point.icon;
                            return (
                              <li key={i} className="flex items-center gap-3.5 text-xs lg:text-sm font-semibold text-slate-700">
                                <span className="w-7 h-7 rounded-full bg-[#070e1b] text-[#d6aa56] flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <IconComp className="w-3.5 h-3.5 lg:w-4 lg:h-4"/>
                                </span>
                                <span>{point.text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Full-Height Image with Curve Mask */}
                    <div className="relative w-full md:w-[48%] min-h-[220px] md:min-h-full bg-slate-950 overflow-hidden self-stretch">
                      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                        <svg 
                          viewBox="0 0 100 100" 
                          preserveAspectRatio="none" 
                          className="w-full h-full text-white fill-current"
                          style={{ width: '40px', position: 'absolute', left: 0, top: 0, bottom: 0 }}
                        >
                          <path d="M0 0 C 35 30, 35 70, 0 100 Z" />
                        </svg>
                      </div>

                      <img 
                        src={current.image} 
                        alt={current.category} 
                        className="w-full h-full object-cover object-center"
                      />

                      <div className="absolute bottom-0 right-0 bg-[#d6aa56] text-slate-950 font-black text-xs px-5 py-2 rounded-tl-2xl shadow-md z-10">
                        {current.id} / 06
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
