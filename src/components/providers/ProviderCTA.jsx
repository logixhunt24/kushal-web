import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProviderCTA() {
  return (
    <section 
      className="relative overflow-hidden w-full select-none px-4 sm:px-6 lg:px-8"
      style={{ 
        paddingTop: 'var(--section-space)', 
        paddingBottom: 'var(--section-space)', 
        backgroundColor: 'var(--kushal-white3)' 
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border backdrop-blur-md p-8 md:p-16 rounded-[var(--kushal-radius)] text-center shadow-lg"
          style={{ 
            backgroundColor: 'var(--kushal-white)', 
            borderColor: 'var(--kushal-border-color)' 
          }}
        >
          {/* Pill Tag - Matches ProfessionalBenefits style */}
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-8 border backdrop-blur-md"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.06)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.12)`,
            }}
          >
            <Sparkles size={13} className="animate-pulse" /> Launch Your Career
          </span>

          {/* Headline */}
          <h2 
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8"
            style={{ color: 'var(--kushal-heading)', fontFamily: 'var(--kushal-font)' }}
          >
            Start Growing Your <br/>
           
            <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{ color: "var(--kushal-base)", fontFamily: "var(--kushal-script-font)" }}
            >
              Service Business Today
            </span>
          </h2>

          {/* Subtext */}
          <p 
            className="text-base sm:text-lg leading-relaxed font-medium  mx-auto mb-12"
            style={{ color: 'var(--kushal-text)', fontFamily: 'var(--kushal-secondary-font)' }}
          >
            Download the Provider App and connect directly with clients, set your own pricing, and grow your income with zero commission deductions.
          </p>

          {/* Action Row */}
          <div className="flex flex-col items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "var(--kushal-shadow-md)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 font-black text-lg rounded-[calc(var(--kushal-radius)-2px)] flex items-center gap-3 transition-all"
              style={{ backgroundColor: 'var(--kushal-base)', color: 'var(--kushal-white)' }}
            >
              <Download size={20} /> Download Provider App
            </motion.button>

            {/* Trust Tags */}
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--kushal-text)' }}>
              {['100% Free Registration', 'No Commission', 'Full Control'].map((text, i) => (
                <span key={i} className="flex items-center gap-2 opacity-70">
                  <CheckCircle2 size={14} style={{ color: 'var(--kushal-base)' }} /> {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}