import React from 'react';
import { Search, CalendarDays, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-7 h-7 text-primary" />,
      title: "Choose Your Service",
      description: "Search from hundreds of household chores, appliance repairs, or custom tasks with upfront pricing."
    },
    {
      num: "02",
      icon: <CalendarDays className="w-7 h-7 text-primary" />,
      title: "Schedule Your Slot",
      description: "Select a date and timeframe that fits your routine. Give matching instructions and check out cash-free."
    },
    {
      num: "03",
      icon: <CheckCircle2 className="w-7 h-7 text-primary" />,
      title: "Relax & Watch progress",
      description: "Get matched with a vetted local provider. Monitor arrival status on a map and approve payments after job completion."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Easy Onboarding
          </span>
          <h2 className="section-title mb-4">
            How KushalApp Works
          </h2>
          <p className="section-subtitle">
            Hiring top-tier local experts is quick and simple. Just follow our intuitive booking workflow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto items-stretch">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-purple-100" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group bg-white border border-gray-100 p-8 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(80,0,140,0.04)] hover:border-purple-100 transition-all duration-300 relative"
            >
              {/* Step circle container */}
              <div className="relative w-24 h-24 rounded-full bg-purple-50/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Numeric badge */}
                <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-primary text-white text-[13px] font-extrabold flex items-center justify-center border-4 border-white shadow-md">
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-brand-text mb-3 group-hover:text-primary transition-colors leading-snug">
                {step.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
