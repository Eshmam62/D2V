"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="px-6 relative z-10 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 py-16 md:py-24 bg-white rounded-2xl my-12 shadow-sm border border-slate-100"
      >
        <h3 className="font-poppins text-[12px] tracking-[0.25em] font-semibold uppercase text-slate-900 mb-8 text-center">
          OUR MISSION & PURPOSE
        </h3>
        
        <div className="font-serif text-xl md:text-2xl leading-relaxed text-slate-800 space-y-8 text-center md:text-left">
          <p>
            <span className="float-left text-6xl md:text-7xl font-serif font-bold text-slate-900 pr-3 pt-1 leading-none select-none">
              I
            </span>
            n 2026, TECHMAK was launched as a premier China-Bangladesh Joint Venture initiative with a singular mission: to bridge the gap between brilliant student ideas and market-ready enterprise. Every year, thousands of groundbreaking concepts die quietly inside university labs due to a lack of seed capital, technical infrastructure, and execution guidance. We exist to change that paradigm permanently.
          </p>
          
          <p>
            We are an elite network of tech veterans, international investors, and industry mentors operating across Bangladesh and global innovation hubs. We don&apos;t just write seed checks—we partner with you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
