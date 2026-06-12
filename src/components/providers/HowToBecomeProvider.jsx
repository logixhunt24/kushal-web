import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Briefcase, Handshake, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up as a service provider by submitting your basic details and complete your profile verification to get started."
  },
  {
    icon: Briefcase,
    step: "02",
    title: "Add Services & Set Pricing",
    description: "List your services, define your pricing, and showcase your skills. You control how much you charge with no platform interference."
  },
  {
    icon: Handshake,
    step: "03",
    title: "Connect with Clients & Earn",
    description: "Receive direct inquiries, negotiate transparently with customers, and grow your income with our zero commission model."
  }
];

export default function HowToBecomeProvider() {
  return (
    <section 
      className="relative overflow-hidden w-full select-none px-4 sm:px-6 lg:px-8"
      style={{ 
        paddingTop: 'var(--section-space)', 
        paddingBottom: 'var(--section-space)', 
        backgroundColor: 'var(--kushal-white2)' 
      }}
    >
      <div className="relative z-10 max-w-[var(--container-width)] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 border backdrop-blur-md"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.06)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.12)`,
            }}
          >
            <Sparkles size={13} className="animate-pulse" /> Easy Onboarding
          </span>
          <h2 
            className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tight "
            style={{ color: 'var(--kushal-heading)', fontFamily: 'var(--kushal-font)' }}
          >
            Start Earning in <br/>
            <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{ color: "var(--kushal-base)", fontFamily: "var(--kushal-script-font)" }}
            >
             3 Simple Steps
            </span>
            
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2 }}
                className="relative p-8 border rounded-[var(--kushal-radius)] group transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--kushal-white)', 
                  borderColor: 'var(--kushal-border-color)' 
                }}
              >
                {/* Step Number */}
                <span className="text-5xl font-black opacity-10 mb-4 block" style={{ color: 'var(--kushal-base)' }}>
                  {item.step}
                </span>
                
                {/* Icon */}
                <div 
                  className="w-12 h-12 flex items-center justify-center mb-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(var(--kushal-base-rgb), 0.08)', color: 'var(--kushal-base)' }}
                >
                  <Icon size={24} />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--kushal-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--kushal-text)' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}