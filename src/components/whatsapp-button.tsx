'use client';

import React from 'react';

export function WhatsAppButton() {
  const phoneNumber = '213561719100';
  const defaultMessage = "Bonjour Château d'art, je souhaite me renseigner sur vos collections.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Assistance WhatsApp"
      className="group fixed bottom-6 right-6 z-50 h-13 w-13 md:h-14 md:w-14 pointer-events-none"
    >
      {/* The label is visual-only so nearby page content remains selectable. */}
      <span
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#18181B] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
        aria-hidden="true"
      >
        Discuter avec nous
      </span>

      {/* WhatsApp Floating Button: only this circle receives pointer events */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Château d'art sur WhatsApp"
        className="group relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_14px_35px_rgba(37,211,102,0.7)] group-active:scale-95 cursor-pointer pointer-events-auto"
      >
        {/* Soft Ambient Light Halo (Breathing effect matching screenshot) */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/40 blur-md -z-10 group-hover:bg-[#25D366]/60 group-hover:blur-lg transition-all duration-500 animate-whatsapp-halo"
          aria-hidden="true"
        />

        {/* Outer Ripple Wave on hover */}
        <span
          className="pointer-events-none absolute -inset-1 rounded-full border border-[#25D366]/50 opacity-0 group-hover:opacity-100 animate-ping -z-10 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* User's Uploaded WhatsApp PNG Icon */}
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-12 h-12 md:w-13 md:h-13 object-contain select-none pointer-events-none transition-transform duration-300 group-hover:rotate-6 brightness-0 invert drop-shadow-xs"
          draggable={false}
        />
      </a>
    </aside>
  );
}
