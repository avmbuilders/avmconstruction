"use client";

import React from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-yellow-500">Contact Us for a Quote</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <p className="text-slate-600 mb-8 text-center text-lg">
            We'd love to hear about your project! Reach out to us directly through any of the channels below to discuss requirements and get a personalized quote.
          </p>
          
          <div className="space-y-6">
            <a href="tel:+916381428400" className="flex items-center gap-4 group p-4 rounded-xl border border-slate-100 hover:border-yellow-500 hover:bg-yellow-50 transition-all">
              <div className="bg-slate-900 p-3 rounded-full group-hover:bg-yellow-500 transition-colors">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-0.5">Call Us Directly</p>
                <p className="text-lg font-bold text-slate-900">+91 63814 28400</p>
              </div>
            </a>

            <a href="mailto:avmbuilders99@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl border border-slate-100 hover:border-yellow-500 hover:bg-yellow-50 transition-all">
              <div className="bg-slate-900 p-3 rounded-full group-hover:bg-yellow-500 transition-colors">
                <span className="text-xl">✉️</span>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-0.5">Send an Email</p>
                <p className="text-lg font-bold text-slate-900 break-all">avmbuilders99@gmail.com</p>
              </div>
            </a>

              <a 
                href="https://www.google.com/maps/place/Hotel+MGR+bhavan/@11.4818055,79.3092686,15.17z/data=!4m9!1m2!2m1!1sNo+23,+Eganathar+Nagar,+Pennadam+Road,+Vriddhachalam+-+606001!3m5!1s0x3bab352a1a7479fd:0xc982a15d129444f4!8m2!3d11.4905842!4d79.3221778!16s%2Fg%2F11j1xr_scd?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-yellow-300 hover:shadow-md transition-all group"
              >
                <div className="bg-white p-3 rounded-full shadow-sm text-xl group-hover:scale-110 transition-transform">📍</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    No 23, Eganathar Nagar,<br />
                    Pennadam Road,<br />
                    Vriddhachalam - 606001
                  </p>
                  <p className="mt-2 text-yellow-600 text-xs font-semibold group-hover:text-yellow-500 flex items-center gap-1 transition-colors">
                    Open in Maps 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
