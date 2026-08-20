'use client';

import React from 'react';

const PARTNERS = [
  {
    id: 1,
    name: 'Google Cloud',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
  },
  {
    id: 3,
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
];

export default function TrustedPartners() {
  const trackItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full pt-10 pb-6 md:pt-14 md:pb-8 bg-[#eae4e0] overflow-hidden">

      {/* Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-sm sm:text-base font-black tracking-[0.25em] text-slate-800 uppercase">
          Our Trusted Partners
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative z-10 w-full flex overflow-hidden flex-nowrap">
        {/* Soft edge blur masks matched to #eae4e0 */}
        <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#eae4e0] via-[#eae4e0]/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#eae4e0] via-[#eae4e0]/85 to-transparent z-10 pointer-events-none" />

        {/* Primary Track */}
        <div className="flex flex-shrink-0 animate-marquee-smooth items-center select-none">
          {trackItems.map((partner, index) => (
            <div
              key={`track-1-${partner.id}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3 mr-12 rounded-2xl bg-white border border-slate-200/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:scale-105 cursor-pointer flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-sm"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Secondary Track */}
        <div className="flex flex-shrink-0 animate-marquee-smooth items-center select-none" aria-hidden="true">
          {trackItems.map((partner, index) => (
            <div
              key={`track-2-${partner.id}-${index}`}
              className="flex items-center gap-3.5 px-6 py-3 mr-12 rounded-2xl bg-white border border-slate-200/40 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:scale-105 cursor-pointer flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-sm"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Removed Bottom Overlay for Flat Color Match */}

      <style jsx global>{`
        @keyframes marqueeSmooth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee-smooth {
          animation: marqueeSmooth 26s linear infinite;
        }
      `}</style>
    </section>
  );
}
