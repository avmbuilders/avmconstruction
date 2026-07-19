import React from "react";

export default function Hero() {
  return (
    <header className="relative bg-slate-950 text-white py-24 md:py-32 px-4 overflow-hidden border-b-4 border-yellow-600">
      {/* Background Pattern & Gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-slate-900 to-slate-950"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-yellow-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-slate-500/10 rounded-full blur-3xl transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10 w-full">
        
        {/* Main Headings */}
        <div className="mb-12 animate-[fade-in-up_1s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 break-words w-full">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-sm">
              AVM CONSTRUCTION
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-light text-slate-300 tracking-wide max-w-3xl mx-auto drop-shadow-md">
            We Build Today... <span className="font-semibold text-white">You Live Tomorrow</span>
          </p>
        </div>

        {/* Builder Profile Card */}
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-slate-800/30 shadow-2xl backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-yellow-500/20">
          <div className="bg-slate-900/90 py-8 px-10 rounded-xl border border-slate-700/50">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2 tracking-wide drop-shadow-sm">
              M. Aanandharaman <span className="text-xl text-yellow-200">B.E.</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-600/50 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-300 tracking-widest text-xs font-bold uppercase mb-3 bg-slate-800 inline-block px-3 py-1 rounded-full border border-slate-700">
              Registered Engineer Grade II
            </p>
            <p className="text-lg text-slate-400 font-medium">
              Civil Engineer <span className="text-yellow-600 mx-2">|</span> Interior Designer
            </p>
          </div>
        </div>
        
      </div>
    </header>
  );
}
