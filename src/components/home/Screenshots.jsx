import React from 'react';
import { Search, Star, MessageSquare, Shield, CheckCircle, Smartphone } from 'lucide-react';

export default function Screenshots() {
  return (
    <section id="screenshots" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Application Preview
          </span>
          <h2 className="section-title mb-4">
            Experience the KushalApp Mobile App
          </h2>
          <p className="section-subtitle">
            Take a look inside our unified customer dashboard designed for secure matching, live status tracking, and protected payouts.
          </p>
        </div>

        {/* Overlapping Layered Mobile Screens Showcase */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 max-w-5xl mx-auto pt-8 pb-8">
          
          {/* Left Screen: tilted slightly left */}
          <div className="flex flex-col items-center lg:translate-x-10 lg:rotate-[-6deg] lg:scale-[0.95] z-10 transition-transform duration-300 hover:rotate-0 hover:scale-100 hover:z-30 group">
            <div className="w-[240px] h-[480px] border-8 border-gray-800 rounded-[2.25rem] bg-gray-900 shadow-xl relative overflow-hidden flex flex-col justify-between mb-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-900" />
              </div>
              
              <div className="flex-1 w-full pt-4 rounded-[1.75rem] overflow-hidden bg-gray-50 p-4 flex flex-col justify-between text-brand-text">
                <div>
                  <div className="flex justify-between items-center mb-4 text-gray-400 text-[10px] font-bold">
                    <span>9:41 AM</span>
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-extrabold text-sm mb-1">Book a Helper</h4>
                  <p className="text-[10px] text-gray-500 mb-4">Find verified local pros instantly</p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-center gap-2 mb-4 shadow-sm">
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[10px] text-gray-400 font-semibold">Search cleaning, repairs...</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 flex flex-col justify-between h-16">
                      <span className="text-xl">🧹</span>
                      <span className="text-[9px] font-bold text-primary">Cleaning</span>
                    </div>
                    <div className="bg-sky-50 border border-sky-100 rounded-lg p-3 flex flex-col justify-between h-16">
                      <span className="text-xl">⚡</span>
                      <span className="text-[9px] font-bold text-sky-850">Electrician</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-150 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
                  <div>
                    <p className="text-[9px] font-bold">Standard Cleaning</p>
                    <p className="text-[8px] text-gray-400">$69 Flat Rate</p>
                  </div>
                  <button className="bg-primary text-white text-[8px] font-bold px-2.5 py-1.5 rounded-md">Book</button>
                </div>
              </div>
              <div className="h-4 w-full flex items-center justify-center"><div className="w-20 h-1 bg-gray-700 rounded-full" /></div>
            </div>
            <h3 className="font-extrabold text-[15px] text-brand-text">Discover Services</h3>
          </div>

          {/* Center Screen: straight, slightly larger, highlighted */}
          <div className="flex flex-col items-center z-20 lg:scale-[1.05] transition-transform duration-350 hover:scale-[1.08] group">
            <div className="w-[240px] h-[480px] border-8 border-gray-900 rounded-[2.25rem] bg-gray-950 shadow-2xl relative overflow-hidden flex flex-col justify-between mb-4 ring-4 ring-primary/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-800" />
              </div>
              
              <div className="flex-1 w-full pt-4 rounded-[1.75rem] overflow-hidden bg-white p-4 flex flex-col justify-between text-brand-text">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-gray-400">9:43 AM</span>
                    <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">Active Match</span>
                  </div>
                  
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-primary flex items-center justify-center text-[11px] font-bold">
                      MK
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold">Mark Kowalski</p>
                      <p className="text-[8px] text-gray-400">Certified Electrician</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-100 p-2.5 rounded-lg max-w-[85%]">
                      <p className="text-[9px] text-gray-700 leading-normal">Hi there! I am heading over to your address. Do I need to bring specific parts?</p>
                    </div>
                    <div className="bg-primary text-white p-2.5 rounded-lg max-w-[85%] ml-auto text-right">
                      <p className="text-[9px] leading-normal">Yes, please bring a replacement socket plate for the living room outlet.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2 flex items-center justify-between text-[9.5px] text-gray-400">
                  <span>Ask Mark a question...</span>
                  <MessageSquare className="w-4.5 h-4.5 text-gray-400" />
                </div>
              </div>
              <div className="h-4 w-full flex items-center justify-center"><div className="w-20 h-1 bg-gray-800 rounded-full" /></div>
            </div>
            <h3 className="font-extrabold text-[15px] text-primary">Real-Time Chat</h3>
          </div>

          {/* Right Screen: tilted slightly right */}
          <div className="flex flex-col items-center lg:-translate-x-10 lg:rotate-[6deg] lg:scale-[0.95] z-10 transition-transform duration-300 hover:rotate-0 hover:scale-100 hover:z-30 group">
            <div className="w-[240px] h-[480px] border-8 border-gray-800 rounded-[2.25rem] bg-gray-900 shadow-xl relative overflow-hidden flex flex-col justify-between mb-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-900" />
              </div>
              
              <div className="flex-1 w-full pt-4 rounded-[1.75rem] overflow-hidden bg-gray-950 p-4 flex flex-col justify-between text-white">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-white/50">9:50 AM</span>
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-2 text-emerald-400">
                      <CheckCircle className="w-5.5 h-5.5" />
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Job Completed</p>
                    <h4 className="text-xl font-extrabold mt-1">$99.00</h4>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-lg p-3 space-y-2 text-[9px]">
                    <div className="flex justify-between text-white/60">
                      <span>Standard Deep Cleaning</span>
                      <span className="text-white font-semibold">$89.00</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Platform Escrow fee</span>
                      <span className="text-white font-semibold">$10.00</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white">
                      <span>Total Invoice</span>
                      <span>$99.00</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-[10px] font-extrabold transition-all shadow-lg shadow-emerald-500/15 cursor-pointer">
                  Release Escrow Funds
                </button>
              </div>
              <div className="h-4 w-full flex items-center justify-center"><div className="w-20 h-1 bg-gray-700 rounded-full" /></div>
            </div>
            <h3 className="font-extrabold text-[15px] text-brand-text">Escrow Settlement</h3>
          </div>

        </div>
      </div>
    </section>
  );
}
