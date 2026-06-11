import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { services } from '../../data/services';

const ServiceIcon = ({ name, className }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'cleaning', label: 'Cleaning' },
    { id: 'repairs', label: 'Maintenance' },
    { id: 'appliances', label: 'Appliances' },
    { id: 'personal-care', label: 'Personal Care' },
    { id: 'smart-home', label: 'Tech Help' }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="section-padding bg-gray-50/30 border-y border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Featured Bookings
          </span>
          <h2 className="section-title mb-4">
            Our Most Demanded Services
          </h2>
          <p className="section-subtitle">
            Skip the bidding and call tag games. Instantly book standard flat-rate services with top local experts.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-purple-600/15'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(80,0,140,0.06)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ServiceIcon name={service.iconName} className="w-5.5 h-5.5" />
                  </div>
                  {service.popular && (
                    <span className="bg-amber-50 text-amber-800 border border-amber-100 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md">
                      Best Seller
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-[16px] sm:text-[18px] text-brand-text mb-2 group-hover:text-primary transition-colors leading-snug">
                  {service.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-[1.6]">
                  {service.description}
                </p>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Icons.Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-sm text-brand-text">{service.rating}</span>
                    <span className="text-gray-400 text-xs">({service.reviews})</span>
                  </div>
                  <span className="font-extrabold text-[16px] text-brand-text">{service.price}</span>
                </div>
                
                <button className="w-full bg-white hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Explore CTA */}
        <div className="text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-bold text-[15px] group border-b border-primary hover:border-primary-light pb-0.5 transition-all"
          >
            Explore All 150+ Services 
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
