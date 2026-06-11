import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all'
    ? testimonials
    : testimonials.filter(item => item.type === filter);

  return (
    <section id="testimonials" className="section-padding bg-gray-50/30 border-y border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="section-title mb-4">
            Hear from our community
          </h2>
          <p className="section-subtitle">
            See how households secure reliable services and skilled providers double their earnings using the platform.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'customer', 'provider'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                filter === type
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {type === 'all' ? 'All Reviews' : type === 'customer' ? 'Customers' : 'Service Partners'}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredReviews.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(80,0,140,0.06)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(t.rating)
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-gray-400 ml-2">{t.rating} rating</span>
                </div>

                <p className="text-gray-600 text-[15px] italic leading-[1.65] mb-8">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm ${t.avatarColor} shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-text">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-1.5 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
