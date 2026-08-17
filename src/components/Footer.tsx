"use client";

import React from "react";
import { MessageCircle, Briefcase, Code, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-10 px-6 md:px-12 text-slate-300 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        <div className="flex flex-col">
          <p className="text-xs md:text-sm text-slate-400 font-normal">
            © 2026 Dream2Venture Startup Investment Program. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full md:w-auto">
          <div className="flex items-center gap-6 text-xs md:text-sm font-medium text-slate-300">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
