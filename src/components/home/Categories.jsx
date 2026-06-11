import React from 'react';
import * as Icons from 'lucide-react';
import { categories } from '../../data/categories';

const CategoryIcon = ({ name, className }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
};

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Our Offerings
          </span>
          <h2 className="section-title mb-4">
            Explore Service Categories
          </h2>
          <p className="section-subtitle">
            Find checked local professionals equipped with the right skills and tools for your household tasks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(80,0,140,0.06)] hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-[16px] bg-purple-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <CategoryIcon name={category.iconName} className="w-6.5 h-6.5" />
                </div>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3.5 py-2 rounded-full border border-gray-200/20">
                  {category.servicesCount} Active Pros
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-brand-text mb-3 group-hover:text-primary transition-colors leading-snug">
                {category.name}
              </h3>

              <p className="text-gray-500 text-sm leading-[1.6] mb-5">
                {category.description}
              </p>

              <div className="text-xs font-extrabold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all uppercase tracking-wider">
                Explore Services <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
