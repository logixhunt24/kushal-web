import React from 'react';
import * as Icons from 'lucide-react';
import { stats } from '../../data/stats';

const StatIcon = ({ name, className }) => {
  const IconComponent = Icons[name] || Icons.TrendingUp;
  return <IconComponent className={className} />;
};

export default function Statistics() {
  return (
    <section id="statistics" className="section-padding bg-gray-50/30 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            KushalApp by the Numbers
          </span>
          <h2 className="section-title mb-4">
            Setting the standard for quality help
          </h2>
          <p className="section-subtitle">
            We bridge the gap between skilled local service providers and households looking for premium, guaranteed tasks.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="card-premium flex flex-col items-center text-center p-8 group hover:-translate-y-2 hover:border-purple-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <StatIcon name={stat.iconName} className="w-6.5 h-6.5" />
              </div>
              
              <div className="text-[36px] sm:text-[40px] lg:text-[48px] font-extrabold text-brand-text mb-2 tracking-tight leading-none">
                {stat.value}
              </div>
              
              <div className="text-[16px] font-bold text-gray-800 mb-1">
                {stat.label}
              </div>

              <div className="text-sm text-gray-500">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
