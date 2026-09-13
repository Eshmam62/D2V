"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhoCanApply() {
  const criteria = [
    { title: "Undergraduate Students", desc: "Currently pursuing a bachelor's degree" },
    { title: "Graduate Students", desc: "Pursuing a master's degree" },
    { title: "Postgraduate Students", desc: "Pursuing MPhil / PhD or equivalent" },
    { title: "From Public & Private Universities", desc: "Across Bangladesh" },
    { title: "Engineering & Technology Students", desc: "From any engineering or tech background" },
    { title: "Students from Any Discipline", desc: "All academic disciplines are welcome" }
  ];

  const floatingTags = [
    { label: "Smart Manufacturing", top: "8%", left: "4%", duration: 3.5, delay: 0 },
    { label: "AI & Software", top: "12%", right: "2%", duration: 4.2, delay: 0.7 },
    { label: "FinTech", top: "35%", left: "-4%", duration: 3.8, delay: 1.4 },
    { label: "Robotics & Automation", top: "45%", right: "-4%", duration: 4.6, delay: 0.3 },
    { label: "Renewable Energy", top: "65%", left: "0%", duration: 3.9, delay: 1.1 },
    { label: "Other Innovative Ideas", top: "85%", right: "5%", duration: 4.1, delay: 0.5 },
    { label: "HealthTech", top: "88%", left: "10%", duration: 3.6, delay: 1.6 },
    { label: "AgriTech", top: "20%", left: "30%", duration: 4.5, delay: 0.8 },
    { label: "EdTech", top: "75%", left: "35%", duration: 3.7, delay: 1.2 }
  ];

  return (
    <section className="pt-2 md:pt-4 pb-16 px-4 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10 overflow-visible">
      
      {/* Left Column */}
      <div className="w-full lg:w-1/2 space-y-6 lg:pr-4">
        <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-900 font-semibold text-xs md:text-sm tracking-wide uppercase shadow-sm">
          <UserCheck className="w-4 h-4 text-slate-900"/>
          <span>WHO CAN APPLY?</span>
        </div>
        </ScrollReveal>
        
        <div className="space-y-4">
          {criteria.map((item, idx) => (
            <ScrollReveal 
              key={idx}
              delay={idx * 0.1}
              className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 border border-transparent hover:border-slate-100 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CheckCircle2 className="text-purple-600 mt-0.5 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-300 relative z-10" size={20} />
              <div className="relative z-10">
                <h4 className="font-bold text-slate-900 leading-tight transition-colors duration-300 group-hover:text-purple-700">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-violet-50/80 via-indigo-50/60 to-purple-50/80 border border-indigo-200/80 border-l-4 border-l-indigo-600 shadow-sm shadow-indigo-500/5 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/10"
        >
          <div className="p-2.5 rounded-xl bg-indigo-100/80 text-indigo-600 flex-shrink-0 shadow-inner">
            <Zap className="w-5 h-5 text-indigo-600 fill-indigo-500/20"/>
          </div>
          <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">
            No matter what you study, if you have an idea worth building — <span className="font-bold text-indigo-600">you can apply.</span>
          </p>
        </ScrollReveal>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center -mt-4 md:-mt-8">
        
        <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Orbital Rings */}
        <div className="absolute w-[360px] md:w-[460px] h-[360px] md:h-[460px] border border-slate-200/60 rounded-full" />
        <div className="absolute w-[460px] md:w-[560px] h-[460px] md:h-[560px] border border-slate-200/60 rounded-full" />
        
        {/* Floating Tags */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {floatingTags.map((tag, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [-8, 8, -8] }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { delay: idx * 0.1 + 0.3, duration: 0.5 },
                scale: { delay: idx * 0.1 + 0.3, duration: 0.5 },
                y: {
                  duration: tag.duration,
                  delay: tag.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ top: tag.top, left: tag.left, right: tag.right }}
              className="absolute bg-white/90 backdrop-blur-sm border border-slate-200/60 shadow-sm px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded-full text-[9px] sm:text-xs md:text-sm font-semibold text-slate-700 pointer-events-auto hover:border-purple-300 hover:text-purple-700 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] hover:brightness-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {tag.label}
            </motion.div>
          ))}
        </div>

        {/* Central Brain Video */}
        <div className="relative z-10 w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-50">
          <video 
            src="/brain.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        </div>

        {/* Bottom Tag */}
        <div className="mt-0 md:mt-6 text-center px-4 z-20 relative">
          <div className="inline-block bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-full px-4 py-2 md:px-6 md:py-2.5 shadow-sm">
            <p className="text-xs md:text-sm italic text-slate-700 font-serif">
              Great ideas can come from anywhere. We help turn them into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
