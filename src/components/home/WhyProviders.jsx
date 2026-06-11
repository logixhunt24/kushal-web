import React from 'react';
import { Briefcase, Coins, Calendar, TrendingUp, ArrowRight, Check } from 'lucide-react';

export default function WhyProviders() {
  const benefits = [
    {
      icon: <Coins className="w-6.5 h-6.5 text-primary-light" />,
      title: "Zero Commission Fees",
      desc: "Unlike competitor directories, we do not charge for click leads or bidding. Keep 100% of your earnings."
    },
    {
      icon: <Calendar className="w-6.5 h-6.5 text-primary-light" />,
      title: "Flexible Pricing Autonomy",
      desc: "You set your service hourly charges, travel boundaries, and daily availability. Be your own boss."
    },
    {
      icon: <Briefcase className="w-6.5 h-6.5 text-primary-light" />,
      title: "Enhanced Client Visibility",
      desc: "Get automatically matched with active customers matching your specialty without marketing costs."
    },
    {
      icon: <TrendingUp className="w-6.5 h-6.5 text-primary-light" />,
      title: "Accelerated Business Growth",
      desc: "Accumulate verified reviews, display certificates, and earn premium badges to charge more over time."
    }
  ];

  return (
    <section id="why-providers" className="section-padding bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Glow highlight background */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-purple-900/10 rounded-full blur-[130px] -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Earnings Card Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-gray-900/70 border border-gray-800 p-8 rounded-[20px] shadow-2xl relative">
              <div className="flex justify-between items-center mb-8 border-b border-gray-800/80 pb-5">
                <div>
                  <h4 className="text-white font-extrabold text-lg">Partner Earnings</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Average weekly provider cashout</p>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 text-xs font-bold px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-wider shrink-0">
                  Zero commission
                </span>
              </div>

              <div className="space-y-5">
                {[
                  { title: "Home Cleaners", val: "$900 - $1,500 / wk" },
                  { title: "Electricians", val: "$1,300 - $2,400 / wk" },
                  { title: "Plumbers", val: "$1,200 - $2,200 / wk" },
                  { title: "Smart Home Tech", val: "$850 - $1,400 / wk" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-850 pb-4 last:border-b-0 last:pb-0">
                    <span className="text-[14px] font-semibold text-gray-400">{item.title}</span>
                    <span className="text-[14px] font-extrabold text-white">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
                ★ 4.9 Average across 5,000+ local providers
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Benefits */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-primary-light bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 mb-2 inline-block">
              For Service Providers
            </span>
            <h2 className="section-title text-white">
              Turn your local expertise <br />
              into high daily earnings.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-[1.65]">
              Whether you are an independent cleaner, plumber, electrician, or smart home installer, KushalApp links you with active paying clients. No upfront bid tokens required.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 pb-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 text-primary-light">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white mb-1.5 text-[15px] sm:text-base leading-snug">{b.title}</h4>
                    <p className="text-gray-400 text-xs leading-[1.6]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a href="#download" className="primary-btn flex items-center gap-2 bg-primary-light hover:bg-purple-500 border-none shadow-lg shadow-purple-600/15 py-4 px-8 text-sm">
                Apply as a Partner
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
              <span className="text-xs text-gray-500 font-semibold">Onboarding review completes in 48 hours</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
