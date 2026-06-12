import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';
import teamBg from '../assets/img/kushalapp_team.png';
import homeBg from '../assets/img/kushalapp_mockup_homescreen.jpeg';
import featuresBg from '../assets/img/kushalapp_team.png';
import providersBg from '../assets/img/kushalapp_team.png';
import contactBg from '../assets/img/kushalapp_team.png';

const heroVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 }
  }
};

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) return null;

  const terminalSegment = pathSegments[pathSegments.length - 1];
  const pageTitle = terminalSegment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  // Map pathname to background image
  const bgMap = {
    '/': homeBg,
    '/about': teamBg,
    '/features': featuresBg,
    '/providers': providersBg,
    '/contact': contactBg
  };
  const bgImage = bgMap[pathname] || homeBg;

  const crumbs = pathSegments.map((segment, index) => {
    const to = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return { name, to };
  });

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="relative overflow-hidden w-full pt-50 pb-34 select-none px-4 flex flex-col items-center justify-center border-b z-10"
      style={{ borderColor: "var(--kushal-border-color)" }}
    >
      {/* ========================================================
          BACKGROUND LAYER STACK
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* 1. Base Color */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: "var(--kushal-white2)" }} />

        {/* 2. Image */}
        <img 
          src={bgImage} 
          alt="Background Texture" 
          className="w-full h-full object-cover absolute inset-0 z-1" 
        />

        {/* 3. NEW: Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-2" />

        
      </div>

      {/* ========================================================
          CONTENT
          ======================================================== */}
      <div className="relative z-10 w-full flex flex-col items-center text-center" style={{ maxWidth: "var(--container-width)" }}>
        
        <motion.h1 
          variants={itemVariants}
          className="font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 !text-white"
          style={{ fontFamily: 'var(--kushal-script-font)' }}
        >
          {pageTitle}
          <span style={{ color: "var(--kushal-primary)" }}>.</span>
        </motion.h1>

        {/* Updated Nav Pill for Dark Theme */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center justify-center p-2 border border-white/10 bg-black/30 backdrop-blur-md max-w-full overflow-x-auto no-scrollbar"
          style={{ 
            borderRadius: "var(--kushal-radius)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        >
          <ol className="flex items-center flex-nowrap whitespace-nowrap gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold tracking-tight text-white">
            <li>
              <Link to="/">
                <motion.div whileHover={{ color: 'var(--kushal-primary)' }} className="p-2.5">
                  <Home size={16} />
                </motion.div>
              </Link>
            </li>
            <AnimatePresence mode="popLayout">
              {crumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.to}>
                  <li className="opacity-50"><ChevronRight size={14} /></li>
                  <li>
                    {idx === crumbs.length - 1 ? (
                      <span className="px-3 py-1.5 rounded-lg bg-white/20 text-white font-black">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.to} className="px-3 py-1.5 hover:text-yellow-400 transition">{crumb.name}</Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </AnimatePresence>
          </ol>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Breadcrumb;