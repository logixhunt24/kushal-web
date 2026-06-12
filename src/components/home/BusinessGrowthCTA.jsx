import React from 'react';
import { motion } from "framer-motion";
import { 
  DollarSign, 
  Sliders, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";

// Animation presets for stagger layout effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

const textFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function BusinessGrowthCTA() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Zero Commission Model",
      description: "Keep 100% of your hard-earned payouts. No hidden platform deductibles, ever.",
      badge: "100% Earnings"
    },
    {
      icon: <Sliders className="w-6 h-6" />,
      title: "Autonomous Pricing",
      description: "Set your own pricing scales directly based on your skills, experience, and current market demands.",
      badge: "Full Control"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Client Chat",
      description: "Communicate directly with clients for perfectly transparent contract negotiations.",
      badge: "Transparent"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Amplified Visibility",
      description: "Boost your professional profile organically through premium featured listings and strategic call-based access.",
      badge: "High Growth"
    }
  ];

  return (
    <section 
      className="relative overflow-hidden select-none px-4 sm:px-6 lg:px-8"
      style={{ 
        paddingTop: 'var(--section-space)', 
        paddingBottom: 'var(--section-space)',
        backgroundColor: 'var(--kushal-white)'
      }}
    >
      
      {/* Structural Ambient Background Blurs */}
      <div 
        className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20 -z-10"
        style={{ background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.3) 0%, transparent 70%)` }} 
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25 -z-10"
        style={{ background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.25) 0%, transparent 75%)` }} 
      />

      <div 
        className="mx-auto w-full"
        style={{ maxWidth: 'var(--container-width)' }}
      >
        
        {/* ========================================================
           HEADER REGION
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-black tracking-widest uppercase mb-4 border"
            style={{ 
              borderRadius: 'var(--kushal-radius)',
              background: `rgba(var(--kushal-base-rgb), 0.05)`, 
              color: 'var(--kushal-base)',
              borderColor: `rgba(var(--kushal-base-rgb), 0.1)`,
              fontFamily: 'var(--kushal-secondary-font)'
            }}
          >
            Empowering Service Professionals
          </motion.span>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textFadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-6"
            style={{ fontFamily: 'var(--kushal-heading-font)', color: 'var(--kushal-heading)' }}
          >
            Grow Your Business Without <br className="hidden sm:inline" />
            <span 
              className="px-2"
              style={{ color: 'var(--kushal-base)', fontFamily: 'var(--kushal-script-font)', fontWeight: 'normal' }}
            >
              Paying Commission
            </span>
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textFadeUp}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
            style={{ fontFamily: 'var(--kushal-secondary-font)', color: 'var(--kushal-text)' }}
          >
            Our platform is built to empower professionals with full control over their services, pricing, and client communication. Expand your reach, connect directly with customers, and build with transparency.
          </motion.p>
        </div>

        {/* ========================================================
           GRID CARDS REGION
           ======================================================== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: 'var(--kushal-shadow-lg)',
                transition: { duration: 0.2, ease: "easeInOut" } 
              }}
              className="group relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--kushal-white2)',
                borderColor: 'var(--kushal-border-color)',
                borderRadius: 'var(--kushal-radius)',
                boxShadow: 'var(--kushal-shadow-sm)'
              }}
            >
              {/* Card Inner Active Border Glow Highlight */}
              <div 
                className="absolute inset-0 border border-transparent group-hover:border-[var(--kushal-base)]/20 pointer-events-none transition-colors duration-300" 
                style={{ borderRadius: 'var(--kushal-radius)' }}
              />
              
              <div>
                {/* Upper row: icon and contextual pill tag */}
                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="w-12 h-12 flex items-center justify-center text-white shadow-sm transform transition-transform group-hover:rotate-6 duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--kushal-base), var(--kushal-primary))',
                      borderRadius: 'calc(var(--kushal-radius) - 4px)'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span 
                    className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border group-hover:text-[var(--kushal-base)] group-hover:border-[var(--kushal-base)]/20 transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--kushal-white)',
                      borderColor: 'var(--kushal-border-color)',
                      color: 'var(--kushal-gray)',
                      borderRadius: 'calc(var(--kushal-radius) - 8px)',
                      fontFamily: 'var(--kushal-secondary-font)'
                    }}
                  >
                    {feature.badge}
                  </span>
                </div>

                {/* Main Copy Content */}
                <h3 
                  className="text-lg sm:text-xl font-bold tracking-tight mb-3 transition-colors duration-200 group-hover:text-[var(--kushal-base)]"
                  style={{ fontFamily: 'var(--kushal-heading-font)', color: 'var(--kushal-heading)' }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed font-medium"
                  style={{ fontFamily: 'var(--kushal-secondary-font)', color: 'var(--kushal-text)' }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Decorative Subtle Chevron Arrow Hint */}
              <div 
                className="mt-6 pt-4 border-t flex items-center text-[var(--kushal-base)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                style={{ borderColor: 'var(--kushal-border-color)' }}
              >
                <span className="text-xs font-bold mr-1" style={{ fontFamily: 'var(--kushal-secondary-font)' }}>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ========================================================
           BOTTOM CALL TO ACTION HINT
           ======================================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button 
            className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.99]"
            style={{ 
              background: 'linear-gradient(135deg, var(--kushal-base), var(--kushal-primary))',
              borderRadius: 'calc(var(--kushal-radius) - 4px)',
              boxShadow: 'var(--kushal-shadow-md)',
              fontFamily: 'var(--kushal-secondary-font)',
              transition: 'var(--kushal-transition)'
            }}
          >
            Start Growing Today <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}