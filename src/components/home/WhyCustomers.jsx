import React from 'react';
import { ShieldCheck, Heart, Headphones, Lock, Check } from 'lucide-react';

export default function WhyCustomers() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "100% Vetted Identity",
      desc: "Every provider passes criminal audits, credential checks, and interviews."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      title: "$5,000 Safety Shield",
      desc: "Every job is covered up to $5,000 for damages under the Kushal Guarantee."
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      title: "Cash-Free Escrow Protection",
      desc: "Your funds are held securely and released only when you mark the task complete."
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-600" />,
      title: "24/7 Customer Success",
      desc: "A dedicated human happiness agent is always available to handle booking concerns."
    }
  ];

  return (
    <section id="why-customers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Headline & Metrics Grid */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-2 inline-block">
              For Our Customers
            </span>
            <h2 className="section-title mb-6">
              Hassle-free bookings, backed by security.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-[1.65] mb-8">
              Letting someone into your home requires absolute trust. That is why we engineer standard background checks, transaction shields, and support agents directly into the app core.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((b, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-text mb-1 text-[15px] sm:text-base leading-snug">{b.title}</h4>
                    <p className="text-gray-500 text-xs leading-[1.6]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium checklist box */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-purple-50 to-indigo-50/70 border border-purple-100/40 p-8 rounded-[20px] shadow-xl shadow-purple-600/5 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200/30 rounded-full blur-2xl -z-10" />
              
              <h3 className="text-xl font-extrabold text-brand-text mb-6 flex items-center gap-2.5 leading-snug">
                <ShieldCheck className="w-6.5 h-6.5 text-primary" />
                The Kushal Trust pledge
              </h3>

              <div className="space-y-4">
                {[
                  "Identity check credential vetting",
                  "Insured service guarantees up to $5,000",
                  "Verified, non-manipulated reviews",
                  "Secure digital escrow release checkout",
                  "No pre-payment or dispatch fees"
                ].map((pledge, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-5.5 h-5.5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-gray-700 font-bold">{pledge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
