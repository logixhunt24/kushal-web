import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone,
  SmartphoneNfc,
  Layers,
  Pointer,
  CheckCircle2
} from 'lucide-react';

import mockupImg from '../../assets/img/kushalapp_mockup_homescreen.jpeg';
import mockupImg1 from '../../assets/img/kushalapp_mockup_2.jpeg';
import mockupImg5 from '../../assets/img/kushalapp_mockup_splashscreen.jpeg';
import mockupImg2 from '../../assets/img/kushalapp_mockup_splashscreen1.jpeg';
import mockupImg3 from '../../assets/img/kushalapp_mockup_splashscreen2.jpeg';
import mockupImg4 from '../../assets/img/kushalapp_mockup_splashscreen3.jpeg';

const CONFIG = {
  // 2. ASSIGN THE IMPORTED VARIABLE TO YOUR SCREENS
  screens: [
    { id: 1,  img: mockupImg },
    { id: 2, img: mockupImg1},
    { id: 3,  img: mockupImg2 },
    { id: 4,  img: mockupImg3 },
    { id: 5,  img: mockupImg4 },
    { id: 6, img: mockupImg5 },
  ]
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AppScreenshotShowcase() {
  const duplicatedScreens = [...CONFIG.screens, ...CONFIG.screens, ...CONFIG.screens];

  return (
    <section 
      className="relative overflow-hidden w-full select-none"
      style={{ 
        backgroundColor: 'var(--kushal-white3)',
        paddingTop: 'var(--section-space)',
        paddingBottom: 'var(--section-space)',
        fontFamily: 'var(--kushal-font)'
      }}
    >
      {/* Ambient Background Blur Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-25"
          style={{ background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.15) 0%, transparent 70%)` }} 
        />
        <div 
          className="absolute bottom-[-5%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-30"
          style={{ background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.18) 0%, transparent 70%)` }} 
        />
      </div>

      <div className="relative z-10 w-full">
        
        {/* ========================================================
           HEADER CONTENT ROW
           ======================================================== */}
        <div className="px-4 sm:px-6 lg:px-8 mx-auto" style={{ maxWidth: 'var(--container-width)' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textFadeUpVariants}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <span 
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border"
              style={{ 
                background: `rgba(var(--kushal-base-rgb), 0.08)`, 
                color: 'var(--kushal-base)',
                borderColor: `rgba(var(--kushal-base-rgb), 0.15)`
              }}
            >
              <Smartphone size={13} className="animate-pulse" />
              App Preview
            </span>

            <h2 
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{ fontFamily: 'var(--kushal-font)', color: 'var(--kushal-heading)' }}
            >
              Explore Our Beautiful{" "}
              <span 
                className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
                style={{ color: 'var(--kushal-base)', fontFamily: 'var(--kushal-script-font)' }}
              >
                App Interface
              </span>
            </h2>

            <p 
              className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'var(--kushal-secondary-font)', 
                color: 'var(--kushal-text)' 
              }}
            >
              Take a look inside! Our app is designed to be simple, clean, and easy to use for managing your business anytime, anywhere.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
           AUTOMATIC LOOPING CAROUSEL WITH LOCAL IMAGES
           ======================================================== */}
        <div className="relative w-full overflow-hidden py-6 flex before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-20 before:bg-gradient-to-r before:from-[var(--kushal-white3)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-20 after:bg-gradient-to-l after:from-[var(--kushal-white3)] after:to-transparent">
          
          <motion.div 
            className="flex gap-6 shrink-0 px-4"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            whileHover={{ transition: { playState: "paused" } }}
          >
            {duplicatedScreens.map((screen, idx) => (
              <div
                key={idx}
                className="relative w-[260px] sm:w-[290px] h-[530px] sm:h-[580px] p-2.5 flex flex-col justify-between border-4 border-neutral-900 bg-neutral-900 transition-all duration-300 shadow-xl group hover:scale-[1.02]"
                style={{ 
                  borderRadius: '36px',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)'
                }}
              >
                {/* Mobile Phone Ear Speaker Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-neutral-900 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-8 h-1 bg-neutral-800 rounded-full mb-1" />
                </div>

                {/* Main Screenshot Window Container */}
                <div 
                  className="relative w-full h-full overflow-hidden flex flex-col justify-between p-5 bg-neutral-800 text-white"
                  style={{ borderRadius: '26px' }}
                >
                  {/* 2. LOCAL SCREENSHOT IMAGE USED HERE */}
                  <img 
                    src={screen.img} 
                    alt={screen.label}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback visual layout if image fails to load or path is incorrect
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Mock Status Bar - Placed safely over image layout */}
                  <div className="flex justify-between items-center text-[10px] font-bold opacity-90 z-10 bg-neutral-900/10 backdrop-blur-xs px-2 py-0.5 rounded-full">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* Fallback Text: Only visible if image fails or path is completely empty */}
                  <div className="my-auto flex flex-col items-center text-center px-2 z-5 opacity-40 pointer-events-none">
                    <h4 className="text-sm font-bold tracking-tight">{screen.label}</h4>
                  </div>

                 

                  {/* Glass Glossy Overlay Flare Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ========================================================
           BOTTOM FEATURES INFO ANCHOR BAR
           ======================================================== */}
        <div className="px-4 sm:px-6 lg:px-8 mx-auto mt-10" style={{ maxWidth: 'var(--container-width)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: SmartphoneNfc, text: "Smooth Navigation" },
              { icon: Layers, text: "Modern Design Layout" },
              { icon: Pointer, text: "One-Tap Scheduling" },
              { icon: CheckCircle2, text: "Instant Safe Updates" },
            ].map((item, key) => {
              const SubIcon = item.icon;
              return (
                <div 
                  key={key} 
                  className="flex items-center gap-2.5 justify-center p-3 border border-neutral-200/60 bg-white/50 backdrop-blur-xs rounded-xl"
                  style={{ borderRadius: 'calc(var(--kushal-radius) - 4px)' }}
                >
                  <SubIcon size={15} style={{ color: 'var(--kushal-base)' }} />
                  <span className="text-xs font-bold text-neutral-700">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}