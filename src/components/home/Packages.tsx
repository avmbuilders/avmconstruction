"use client";

import React, { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";

export default function Packages() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-slate-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-slate-900">
            Our Pricing Packages
          </h2>
          <div className="w-20 h-1.5 bg-yellow-600 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Transparent pricing tailored to fit your vision and budget. Choose the perfect tier for your dream project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-stretch">
          {/* Base */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-slate-200 cursor-pointer group">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white text-center py-6 px-4">
              <h3 className="font-bold tracking-widest text-sm text-slate-300 uppercase">BASE PRICE</h3>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold text-yellow-400">₹2,299</span>
                <span className="text-sm font-medium text-slate-400">/ sq.ft.</span>
              </div>
            </div>
            <ul className="p-8 space-y-4 text-slate-600 flex-grow text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 mt-0.5">✓</span>
                <span>Solid & dependable build quality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 mt-0.5">✓</span>
                <span>Industry-standard, durable materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 mt-0.5">✓</span>
                <span>Highly cost-effective solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 mt-0.5">✓</span>
                <span>Transparent & on-time execution</span>
              </li>
            </ul>
            <div className="p-6 pt-0 mt-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-bold transition-all duration-300 hover:bg-slate-800 hover:border-slate-800 hover:text-white hover:shadow-lg active:scale-95 focus:ring-2 focus:ring-slate-400 outline-none"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Standard (Highlighted) */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform md:-translate-y-6 border-2 border-yellow-500 flex flex-col h-full relative transition-all duration-300 hover:-translate-y-8 hover:shadow-yellow-500/20 cursor-pointer group">
            <div className="absolute top-0 w-full text-center py-1 bg-yellow-500 text-yellow-950 text-xs font-bold tracking-widest uppercase">
              Most Popular
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center py-8 px-4 mt-6">
              <h3 className="font-bold tracking-widest text-sm text-yellow-500 uppercase">STANDARD PRICE</h3>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-white">₹2,399</span>
                <span className="text-sm font-medium text-slate-400">/ sq.ft.</span>
              </div>
            </div>
            <ul className="p-8 space-y-4 text-slate-700 flex-grow text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5">✓</span>
                <span>Superior craftsmanship & detailing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5">✓</span>
                <span>High-grade construction materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5">✓</span>
                <span>Contemporary architectural designs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5">✓</span>
                <span>Strictly adhered project timelines</span>
              </li>
            </ul>
            <div className="p-6 pt-0 mt-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 rounded-lg bg-yellow-500 text-yellow-950 font-bold transition-all duration-300 hover:bg-slate-900 hover:text-yellow-500 hover:shadow-xl hover:shadow-slate-900/30 active:scale-95 focus:ring-2 focus:ring-yellow-500 outline-none"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-900/30 cursor-pointer group">
            <div className="absolute top-4 right-4 z-10 animate-bounce">
              <span className="text-yellow-500 text-3xl drop-shadow-md">👑</span>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-950 text-white text-center py-6 px-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <h3 className="font-bold tracking-widest text-sm text-red-200 uppercase relative z-10">PREMIUM PRICE</h3>
              <div className="mt-3 flex items-baseline justify-center gap-1 relative z-10">
                <span className="text-4xl font-extrabold text-yellow-400">₹2,549</span>
                <span className="text-sm font-medium text-red-300">/ sq.ft.</span>
              </div>
            </div>
            <ul className="p-8 space-y-4 text-slate-600 flex-grow text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5">✓</span>
                <span>Flawless & luxurious finishes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5">✓</span>
                <span>Ultra-premium imported materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5">✓</span>
                <span>Bespoke interior & exterior styling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-800 mt-0.5">✓</span>
                <span>Uncompromised quality & satisfaction</span>
              </li>
            </ul>
            <div className="p-6 pt-0 mt-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 rounded-lg border-2 border-red-900 text-red-900 font-bold transition-all duration-300 hover:bg-red-900 hover:text-white hover:shadow-lg active:scale-95 focus:ring-2 focus:ring-red-400 outline-none"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
