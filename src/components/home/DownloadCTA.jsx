import React from 'react';
import { Smartphone, Download, Award, Shield } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="bg-gradient-to-tr from-purple-900 via-purple-950 to-indigo-950 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle grid patterns */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Heading and info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full text-purple-200 font-bold text-xs uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                Available for iOS & Android
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Get high-quality help, <br />
                right in your pocket.
              </h2>
              
              <p className="text-purple-200 text-base leading-relaxed max-w-xl">
                Download the free KushalApp mobile application to schedule local tasks, securely chat with verified experts, and release payments with the Kushal safety guarantee.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {/* Simulated App Store Button */}
                <a
                  href="#"
                  className="bg-black border border-white/15 px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-colors"
                >
                  <span className="text-xl">🍏</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-white/50 leading-none">Download on the</p>
                    <p className="text-xs font-bold leading-tight">App Store</p>
                  </div>
                </a>

                {/* Simulated Play Store Button */}
                <a
                  href="#"
                  className="bg-black border border-white/15 px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-colors"
                >
                  <span className="text-xl">🤖</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase text-white/50 leading-none">Get it on</p>
                    <p className="text-xs font-bold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Simulated QR code scanner card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm max-w-xs w-full text-center flex flex-col items-center shadow-xl">
                
                {/* Simulated QR Code graphic */}
                <div className="w-40 h-40 bg-white p-3 rounded-xl mb-5 shadow-inner flex items-center justify-center relative">
                  {/* Outer boundaries check */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
                  
                  {/* Generated mini CSS squares simulating QR code details */}
                  <div className="grid grid-cols-5 gap-2 w-32 h-32 opacity-90">
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                    
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-transparent" />
                    <div className="bg-gray-900 rounded-sm" />
                    <div className="bg-gray-900 rounded-sm" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                  <Download className="w-3.5 h-3.5" />
                  <span>Scan to download app instantly</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
