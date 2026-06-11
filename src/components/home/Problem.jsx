import React from 'react';
import { PhoneOff, EyeOff, ShieldAlert, CalendarX } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <PhoneOff className="w-6.5 h-6.5 text-red-600" />,
      title: "Endless Cold Calls",
      description: "Hours wasted calling directories, leaving voicemails, and dealing with professionals who never answer or are fully booked."
    },
    {
      icon: <EyeOff className="w-6.5 h-6.5 text-red-600" />,
      title: "Hidden Cost markups",
      description: "Zero pricing transparency. Receiving surprise dispatch fees, random surcharges, and negotiations after the work is done."
    },
    {
      icon: <ShieldAlert className="w-6.5 h-6.5 text-red-600" />,
      title: "Unvetted Safety Risks",
      description: "Letting strangers inside your household without identity check checks, background verification, or insurance protection."
    },
    {
      icon: <CalendarX className="w-6.5 h-6.5 text-red-600" />,
      title: "Manual Scheduling Chaos",
      description: "Juggling checks, cash, calendars, and messages across multiple channels with no direct platform tracking."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-red-600 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100/60 mb-4 inline-block">
            The Traditional Pain Points
          </span>
          <h2 className="section-title text-brand-text mb-4">
            Why is hiring help still a headache?
          </h2>
          <p className="section-subtitle">
            Traditional directories and marketplace apps leave you vulnerable to hidden charges, unvetted providers, and hours of coordination.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(220,38,38,0.04)] hover:border-red-100 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top border accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {problem.icon}
              </div>
              
              <h3 className="text-[18px] font-extrabold text-brand-text mb-3 leading-snug">
                {problem.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-[1.6] font-medium">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
