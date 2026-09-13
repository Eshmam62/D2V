"use client";


export default function Footer() {
  return (
    <footer className="w-full bg-[#070b14] min-h-[88px] sm:min-h-[96px] py-7 sm:py-8 px-6 sm:px-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
      {/* Left Copyright Text */}
      <p className="text-slate-400 text-sm sm:text-base font-normal tracking-wide">
        © 2026 Dream2Venture Startup Investment Program. All rights reserved.
      </p>

      {/* Right Navigation Links & Profile */}
      <div className="flex items-center gap-8 text-sm sm:text-base font-medium text-slate-300">
        <a href="/privacy" className="hover:text-white transition-colors duration-200">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-white transition-colors duration-200">
          Terms of Service
        </a>
        <a href="/contact" className="hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>
    </footer>
  );
}
