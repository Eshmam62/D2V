"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Lightbulb, PenTool, Briefcase, UploadCloud, ArrowRight, Lock } from "lucide-react";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    startupName: '',
    ideaDescription: '',
    problemSolved: '',
    category: '',
    stage: '',
    beneficiaries: '',
    supportNeeded: [] as string[],
    fundingNeeded: '',
    file: null as File | null,
  });

  const categories = ["AI & Technology", "Education", "Healthcare", "FinTech", "AgriTech", "Cybersecurity", "Environment", "Other"];
  const stages = [
    { label: "Idea", icon: <Lightbulb className="w-4 h-4 mb-1" /> },
    { label: "Prototype", icon: <PenTool className="w-4 h-4 mb-1" /> },
    { label: "MVP", icon: <Rocket className="w-4 h-4 mb-1" /> },
    { label: "Existing Business", icon: <Briefcase className="w-4 h-4 mb-1" /> }
  ];
  const supportOptions = ["Funding", "Mentorship", "Technology", "Marketing"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        university: '',
        startupName: '',
        ideaDescription: '',
        problemSolved: '',
        category: '',
        stage: '',
        beneficiaries: '',
        supportNeeded: [],
        fundingNeeded: '',
        file: null,
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="apply-section" className="w-full flex flex-col items-center pt-32 md:pt-40 pb-16 px-4 md:px-10 bg-transparent relative z-10">

      {/* Centered Headers */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-3">
          Pitch Your Idea 🚀
        </h2>
        <p className="text-sm md:text-base text-slate-600 font-lora mt-3">
          Share your idea with us and let's turn it into real impact.
        </p>
      </div>

      {/* Centered Application Form */}
      <div className="w-full max-w-[850px] mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-2xl shadow-blue-900/10 w-full h-auto overflow-visible flex flex-col">

          <form onSubmit={handleSubmit} className="flex flex-col w-full relative z-10">

            {/* Form Fields Area */}
            <div className="w-full space-y-5 pb-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-slate-700 block">Full Name</label>
                  <input type="text" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} placeholder="Jane Doe" className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-slate-700 block">Email Address</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-slate-700 block">University / Institution</label>
                  <input type="text" required value={formData.university} onChange={e => setFormData({ ...formData, university: e.target.value })} placeholder="e.g. Stanford University" className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-semibold text-slate-700 block">Idea / Startup Name</label>
                  <input type="text" required value={formData.startupName} onChange={e => setFormData({ ...formData, startupName: e.target.value })} placeholder="Project / Startup Name" className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-semibold text-slate-700 block">What is your idea?</label>
                <textarea required rows={4} value={formData.ideaDescription} onChange={e => setFormData({ ...formData, ideaDescription: e.target.value })} placeholder="Briefly describe your idea and what you're building..." className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none transition-all placeholder:text-slate-400"></textarea>
              </div>

              <div className="space-y-1.5">
                <label className="text-[14px] font-semibold text-slate-700 block">What problem does it solve?</label>
                <textarea required rows={4} value={formData.problemSolved} onChange={e => setFormData({ ...formData, problemSolved: e.target.value })} placeholder="Explain the problem you're solving..." className="w-full bg-slate-50 border border-slate-200 text-[15px] rounded-lg px-3.5 py-3.5 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none resize-none transition-all placeholder:text-slate-400"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-semibold text-slate-700 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(c => (
                    <button type="button" key={c} onClick={() => setFormData({ ...formData, category: c })} className={`px-4 py-2 text-[14px] font-medium rounded-full border transition-colors ${formData.category === c ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-semibold text-slate-700 block">Current Stage</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {stages.map(s => (
                    <button type="button" key={s.label} onClick={() => setFormData({ ...formData, stage: s.label })} className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-colors gap-1.5 ${formData.stage === s.label ? 'bg-blue-50 border-blue-600 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {s.icon}
                      <span className="text-[14px] font-medium text-center leading-tight">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pb-4">
                <label className="text-[14px] font-semibold text-slate-700 block">Upload Pitch Deck / Supporting File <span className="text-slate-400 font-normal">(Optional)</span></label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors p-8 flex flex-col items-center justify-center cursor-pointer text-center relative group">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <UploadCloud className="w-6 h-6 text-slate-400 mb-2 group-hover:text-blue-500 transition-colors" />
                  <span className="text-[15px] font-medium text-blue-600">Upload a file <span className="text-slate-500">or drag and drop</span></span>
                  <span className="text-[13px] text-slate-400 mt-1">PDF, PPTX, DOCX up to 100MB</span>
                </div>
              </div>
            </div>

            {/* Fixed Footer Area within Card */}
            <div className="pt-6 border-t border-slate-100 bg-white mt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden ${isSubmitted ? "cursor-default hover:translate-y-0 hover:shadow-lg" : "disabled:opacity-70 disabled:cursor-not-allowed"
                  }`}
              >
                <span className={`flex items-center gap-2 transition-opacity duration-300 text-sm md:text-[15px] ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                  {isSubmitted ? "Application Sent ✓" : (
                    <>
                      Submit Your Idea <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>

                <AnimatePresence>
                  {isSubmitting && !isSubmitted && (
                    <motion.div
                      initial={{ y: 0, x: "-50%", opacity: 1, scale: 1, rotate: 0 }}
                      animate={{ y: -350, x: "-50%", opacity: 0, scale: 1.6, rotate: -10 }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-1/2 z-50 pointer-events-none"
                    >
                      <Rocket className="w-6 h-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] md:text-[12px] text-slate-500 font-medium">
                <span className="text-slate-400">🔒</span>
                <span>Your information will be kept confidential and used only to evaluate your idea.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
