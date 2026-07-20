"use client";

import React, { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 border-t-4 border-yellow-600 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4 tracking-wide">AVM CONSTRUCTION</h3>
            <p className="text-slate-400 mb-6 max-w-sm">
              We Build Today... You Live Tomorrow. Delivering quality construction and elegant interiors across Vriddhachalam and Andimadam.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-500 text-yellow-950 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/20 active:scale-95 focus:ring-2 focus:ring-yellow-500 outline-none"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Quick Links / Contact */}
          <div>
            <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-sm">Direct Contact</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a href="tel:+916381428400" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <span className="bg-slate-800 p-2 rounded-full group-hover:bg-slate-700 transition-colors">📞</span>
                  <span>+91 63814 28400</span>
                </a>
              </li>
              <li>
                <a href="mailto:avmbuilders99@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <span className="bg-slate-800 p-2 rounded-full group-hover:bg-slate-700 transition-colors">✉️</span>
                  <span>avmbuilders99@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-yellow-500 font-bold mb-4 uppercase tracking-wider text-sm">Visit Us</h4>
            <a 
              href="https://www.google.com/maps/place/Hotel+MGR+bhavan/@11.4818055,79.3092686,15.17z/data=!4m9!1m2!2m1!1sNo+23,+Eganathar+Nagar,+Pennadam+Road,+Vriddhachalam+-+606001!3m5!1s0x3bab352a1a7479fd:0xc982a15d129444f4!8m2!3d11.4905842!4d79.3221778!16s%2Fg%2F11j1xr_scd?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <span className="bg-slate-800 p-2 rounded-full mt-1 group-hover:bg-slate-700 transition-colors">📍</span>
              <div>
                <p className="leading-relaxed">
                  No 23, Eganathar Nagar,<br />
                  Pennadam Road,<br />
                  Vriddhachalam - 606001
                </p>
                <p className="mt-2 text-yellow-600 text-sm font-semibold group-hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  Open in Maps 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} AVM Construction. All rights reserved.</p>
          <p>M. Aanandharaman B.E. (Registered Engineer Grade II)</p>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  );
}
