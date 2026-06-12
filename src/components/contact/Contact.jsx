import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Send } from 'lucide-react';

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function SupportContact() {
  return (
    <section className="py-24 px-6 relative w-full" style={{ backgroundColor: 'var(--kushal-white3)' }}>
      <div className="max-w-[var(--container-width)] mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 border shadow-lg"
          style={{ 
            backgroundColor: 'var(--kushal-white)', 
            borderColor: 'var(--kushal-border-color)',
            borderRadius: 'var(--kushal-radius)'
          }}
        >
          {/* Left Side: Animated Text */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border w-fit" 
                  style={{ borderColor: 'rgba(var(--kushal-base-rgb), 0.2)', color: 'var(--kushal-base)' }}>
              <Sparkles size={12} /> KushalApp Support
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--kushal-heading)' }}>
              We’re Here to <br/> 
              <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{ color: "var(--kushal-base)", fontFamily: "var(--kushal-script-font)" }}
            >
              Help You
            </span>
            </h2>
            
            <p className="text-gray-500 font-medium mb-10 leading-relaxed max-w-md">
              Whether you're booking a service, managing your provider account, or have a business inquiry — our team is ready to assist you. Reach out and we’ll get back to you as soon as possible.
            </p>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 font-bold text-sm cursor-pointer" style={{ color: 'var(--kushal-heading)' }}>
              <Mail size={20} className="text-[var(--kushal-base)]" /> support@kushalapp.com
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Form */}
          <motion.div variants={itemVariants} className="p-8 md:p-10 rounded-[calc(var(--kushal-radius)-8px)]" 
               style={{ backgroundColor: 'var(--kushal-base)' }}>
            <form className="space-y-5">
              {['This inquiry is regarding', 'Your Name', 'Your Email Address'].map((label, i) => (
                <div key={i}>
                  <label className="block text-xs font-bold text-white/80 mb-2 uppercase tracking-widest">{label}</label>
                  {label === 'This inquiry is regarding' ? (
                    <select className="w-full p-4 rounded-xl border-none bg-white/10 text-white focus:ring-2 focus:ring-white outline-none">
                      <option className="text-black">Select your inquiry...</option>
                      <option className="text-black">Booking a Service</option>
                      <option className="text-black">Service Provider Registration</option>
                    </select>
                  ) : (
                    <input type="text" className="w-full p-4 rounded-xl border-none bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white outline-none" placeholder={`Enter ${label.toLowerCase()}`} />
                  )}
                </div>
              ))}
              
              <div>
                <label className="block text-xs font-bold text-white/80 mb-2 uppercase tracking-widest">Your Message</label>
                <textarea rows={3} className="w-full p-4 rounded-xl border-none bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white outline-none" placeholder="How can we help?" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-[var(--kushal-base)] font-black rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}