"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FocusAreas from "@/components/FocusAreas";
import WhoCanApply from "@/components/WhoCanApply";
import WhatWeOffer from "@/components/WhatWeOffer";
import Footer from "@/components/Footer";
import FloatingRegistration from "@/components/FloatingRegistration";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-slate-900 relative overflow-x-hidden flex flex-col">
      {/* Global Continuous Background Lighting */}
      <div className="fixed left-[-10%] top-[10%] w-[600px] h-[600px] bg-sky-300/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed right-[-10%] top-[40%] w-[600px] h-[600px] bg-purple-300/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed left-[20%] bottom-[10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Header />
      <HeroSection />
      <div className="bg-white min-h-screen w-full">
        <HowItWorks />
        <WhatWeOffer />
        <FocusAreas />
        <WhoCanApply />
      </div>
      <Footer />

      {/* Floating Registration Widget */}
      <FloatingRegistration />
    </main>
  );
}
