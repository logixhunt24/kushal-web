import React from 'react';
import { Zap, CircleDollarSign, ShieldCheck, Smartphone, Check } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "One-Click Matchmaking",
      description: "No bidding calls. Tell us what you need and get matched with a top provider in under 60 seconds."
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-primary" />,
      title: "Upfront Pricing Assurance",
      description: "Fixed rates for standard bookings. View prices before you book with cash-free checkout."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Strict Double-Vetting",
      description: "Every professional is background checked, insured, and monitored by active rating reviews."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Unified Mobile Platform",
      description: "Direct chat transcripts, map tracking, invoice history, and reschedule tools built in."
    }
  ];

  return (
    <section id="solution" className="section-padding bg-gray-50/30 border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 inline-block">
              The KushalApp Solution
            </span>
            <h2 className="section-title text-brand-text">
              The smart way to get things done.
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.65]">
              We built KushalApp to bridge the trust gap. By organizing pricing, screening providers, and providing secure checkout tools, we make hiring home services stress-free.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Insured up to $5,000 for peace of mind",
                "Direct cashless billing protocols",
                "Fully certified and vetted providers"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-full bg-purple-50 text-primary flex items-center justify-center shrink-0 border border-purple-100">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-semibold text-gray-700 text-[15px]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grid of Solution Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((sol, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(80,0,140,0.06)] hover:border-purple-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {sol.icon}
                </div>
                <h3 className="font-extrabold text-[16px] sm:text-[18px] text-brand-text mb-2 leading-snug">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-sm leading-[1.6]">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
