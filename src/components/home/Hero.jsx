import React from 'react';
import { Search, Star, ShieldCheck, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-[100px] lg:pt-48 lg:pb-[120px] overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-transparent">
      {/* Background blobs for premium depth */}
      <div className="absolute top-0 right-0 w-[45%] h-[55%] bg-purple-200/20 blur-[130px] rounded-full -z-10 translate-x-[20%] -translate-y-[10%]" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-indigo-100/30 blur-[120px] rounded-full -z-10 -translate-x-[10%] translate-y-[10%]" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-purple-100 px-4 py-2 rounded-full text-purple-900 font-bold text-xs sm:text-sm mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Trusted by 20,000+ happy households</span>
          </div>

          <h1 className="text-brand-text text-[36px] md:text-[52px] lg:text-[68px] font-extrabold leading-[1.1] tracking-tight mb-6">
            Find Vetted Local <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Service Pros
            </span> on Demand
          </h1>
          
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.625] mb-8 max-w-xl">
            Book background-verified professionals instantly with upfront flat-rate pricing, 24/7 service guarantees, and secure escrow checkout protection.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="#download"
              className="primary-btn flex items-center justify-center gap-2 py-4 px-8 text-[15px] font-bold shadow-lg shadow-purple-900/10 hover:shadow-xl"
            >
              Book a Service
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
            
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 py-4 px-8 rounded-full font-bold text-[15px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Play className="w-4 h-4 fill-gray-400 text-gray-400" />
              Watch How It Works
            </a>
          </div>

          {/* Core Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-gray-700">100% Vetted Pros</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="font-semibold text-gray-700">4.9★ Average Rating</span>
            </div>
          </div>

        </div>

        {/* Right: Premium CSS Mockup Graphic */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[440px]">
          
          {/* Main Visual: Glass Card Graphic */}
          <div className="w-[85%] aspect-[4/5] bg-gradient-to-tr from-purple-900 to-indigo-950 rounded-[28px] p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between text-white select-none border border-white/10">
            
            {/* Visual Abstract Design */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,26,177,0.45),transparent)]" />
            
            {/* Top Bar of Sim App */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <div>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">KushalApp Booking</p>
                <h3 className="text-white font-extrabold text-base">Select Service</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                VETTED ACTIVE
              </div>
            </div>

            {/* Middle: Sim Services selection */}
            <div className="space-y-3 z-10 my-4 flex-1 flex flex-col justify-center">
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white text-lg">
                  🧹
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Full Home Cleaning</h4>
                  <p className="text-white/60 text-xs">Standard & Deep Cleaning</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="font-extrabold text-sm text-purple-300">$99</p>
                  <p className="text-white/40 text-[10px]">Flat Rate</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-lg">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Electrical Troubleshooting</h4>
                  <p className="text-white/60 text-xs">Certified Technicians</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="font-extrabold text-sm text-emerald-300">$45</p>
                  <p className="text-white/40 text-[10px]">Fixed Rate</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between z-10 text-xs">
              <span className="text-white/60">Average arrival under 45 mins</span>
              <span className="text-purple-300 font-bold flex items-center gap-1">Book Now →</span>
            </div>
          </div>

          {/* Floating Card 1: Vetted Pro notification */}
          <div className="absolute top-[12%] -left-[5%] bg-white border border-gray-100 p-4 rounded-2xl shadow-xl shadow-gray-200/80 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Matched Expert</p>
              <p className="text-[14px] text-brand-text font-extrabold">David K. (Plumber)</p>
            </div>
          </div>

          {/* Floating Card 2: Rating */}
          <div className="absolute bottom-[12%] -right-[5%] bg-white border border-gray-100 p-4 rounded-2xl shadow-xl shadow-gray-200/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Customer score</p>
              <p className="text-[14px] text-brand-text font-extrabold">4.9/5 Avg Stars</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
