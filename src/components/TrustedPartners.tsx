'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

const partners = [
  {
    name: 'Morgan',
    type: 'image-only',
    logo: '/morgan-logo.png',
    className: 'h-6 sm:h-7 w-auto max-w-[130px] brightness-0 object-contain',
  },
  {
    name: 'Assure',
    type: 'custom-assure',
    logo: '/assure-logo.png',
  },
  {
    name: 'Techmak Technology',
    type: 'custom-techmak',
    logo: '/tachmak-logo.png',
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative w-full py-6 sm:py-8 bg-white/95 border-b border-slate-100 overflow-hidden">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-[0.25em] uppercase text-center mb-6">
            SPONSORED BY
          </h3>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Left Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex w-max items-center gap-5 animate-marquee-smooth py-2">
            {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-300 shrink-0 w-auto h-[64px] mr-5 select-none"
              >
                {partner.type === 'image-only' && (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={partner.className}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}

                {partner.type === 'custom-assure' && (
                  <div className="flex items-center gap-3.5 w-full h-full pr-1">
                    {/* Official Assure Group Vector Logo (Uncropped & Zero Background Patch) */}
                    <svg
                      viewBox="0 0 170 110"
                      className="h-10 sm:h-11 w-auto flex-shrink-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Header: Since 2007 & Registered R */}
                      <text x="5" y="16" fill="#1e293b" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="500">Since 2007</text>
                      <text x="160" y="16" fill="#1e293b" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="bold">®</text>

                      {/* Green Solid Rectangle */}
                      <rect x="2" y="24" width="166" height="66" rx="2" fill="#008836" />

                      {/* ASSURE text */}
                      <text
                        x="85"
                        y="62"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontFamily="'Times New Roman', Georgia, serif"
                        fontWeight="900"
                        fontSize="36"
                        letterSpacing="1"
                      >
                        ASSURE
                      </text>

                      {/* G R O U P text */}
                      <text
                        x="85"
                        y="81"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                        fontWeight="bold"
                        fontSize="11"
                        letterSpacing="10"
                      >
                        GROUP
                      </text>

                      {/* Footer: ISO Certified text */}
                      <text
                        x="85"
                        y="104"
                        textAnchor="middle"
                        fill="#1e293b"
                        fontFamily="ui-sans-serif, system-ui, sans-serif"
                        fontWeight="600"
                        fontSize="10"
                        letterSpacing="0.2"
                      >
                        ISO 9001: 2015 QMS Certified
                      </text>
                    </svg>

                    {/* Partner Typography */}
                    <div className="flex flex-col text-left justify-center leading-none">
                      <span className="font-serif font-black text-sm sm:text-base tracking-wider text-[#008836]">
                        ASSURE
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-0.5">
                        GROUP
                      </span>
                    </div>
                  </div>
                )}

                {partner.type === 'custom-techmak' && (
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 overflow-hidden flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt="Techmak"
                        className="w-full h-full object-contain scale-[1.7] contrast-150"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex flex-col text-left leading-none">
                      <span className="text-sm font-black text-[#0284c7] tracking-wider">TECHMAK</span>
                      <span className="text-[8px] font-bold text-slate-600 tracking-widest uppercase">TECHNOLOGY</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none" />
        </div>
      </ScrollReveal>

      <style jsx global>{`
        @keyframes marqueeSmooth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-smooth {
          animation: marqueeSmooth 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
