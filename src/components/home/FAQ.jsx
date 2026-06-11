import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faq';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-primary bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100/60 mb-4 inline-block">
            Support center
          </span>
          <h2 className="section-title mb-4">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Need help booking a pro or managing earnings? Review these standard support answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-purple-100 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-purple-50/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className="w-5.5 h-5.5 text-primary shrink-0" />
                    <span className="font-extrabold text-brand-text text-[15px] sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5.5 h-5.5 text-gray-400 shrink-0 transition-transform duration-350 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`} />
                </button>

                {/* Smooth Animated Height Drawer */}
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-gray-500 text-sm sm:text-base leading-[1.65] bg-gray-50/40 font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
