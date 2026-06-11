import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const menuItems = ['Home', 'About Us', 'Features', 'Providers', 'Contact Us'];

  // Handle clicks outside the sidebar panel to close gracefully
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Accessibility: Handle Escape key down events to drop panel focus
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Smooth UI Context Layering: Lock structural body scroll without shifting layouts
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Handle dynamic screen resizing to close panel gracefully when transitioning past threshold
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && isOpen) {
        // Keeps sidebar open on desktop but updates state context if layout rules apply
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-6 pb-3 font-['Montserrat',sans-serif]">
      <div className="w-full max-w-[1480px] mx-auto px-5 md:px-8 lg:px-10">
        
        {/* Main Floating Navigation Bar Strip */}
        <nav className="bg-[var(--kushal-white)] rounded-[var(--kushal-radius)] shadow-[var(--kushal-shadow-md)] flex items-center justify-between px-6 h-20 relative transition-all duration-300 border border-[var(--kushal-border-color)]">
          
           {/* High-End Branding Frame with Public Image Logo */}
          <a href="#" className="group flex items-center h-15 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)] rounded-xl transition-transform duration-200 active:scale-98">
            <img 
              src="/KUSHLAPP_LOGO_THEME_COLOR_HORIZONTAL.png" 
              alt="KushalApp Logo" 
              className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
              draggable="false"
            />
          </a>

          {/* Desktop Exclusive Main Horizontal Links Menu (>=1024px) */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {menuItems.map((item, index) => (
              <li key={item} className="relative flex items-center">
                <button
                  onClick={() => setActiveItem(item)}
                  className={`text-[15px] font-semibold px-5 py-2.5 rounded-[14px] flex items-center gap-2.5 transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]
                    ${activeItem === item 
                      ? 'bg-[var(--kushal-base)] text-[var(--kushal-white)] shadow-[var(--kushal-shadow-sm)]' 
                      : 'text-[var(--kushal-text)] hover:bg-[var(--kushal-white3)] hover:text-[var(--kushal-base)]'
                    }`}
                >
                  <span className='logo-text'>{item}</span>
                  {index < menuItems.length - 1 && (
                    <span className={`text-[11px] font-bold pointer-events-none ${activeItem === item ? 'text-[var(--kushal-primary)]' : 'text-[var(--kushal-gray)] opacity-30'}`}>•</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Fixed Interactive Control Interface Cluster */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden lg:inline-flex bg-[var(--kushal-primary)] text-[var(--kushal-black2)] rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[var(--kushal-shadow-lg)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]">
              Download App
            </a>
            
            {/* Stable Hamburger Control Target (Never transforms or flies away) */}
            <button 
              ref={toggleBtnRef}
              onClick={() => setIsOpen(true)}
              className="w-11 h-11 rounded-xl bg-[var(--kushal-base)] text-[var(--kushal-white)] flex flex-col items-center justify-center gap-[5px] border-none cursor-pointer transition-all duration-300 hover:bg-[var(--kushal-black2)] hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-primary)]"
              aria-expanded={isOpen}
              aria-controls="premium-brand-panel"
              aria-label="Open Navigation Panel"
            >
              <span className="h-[2px] bg-current rounded-full w-5" />
              <span className="h-[2px] bg-current rounded-full w-4" />
              <span className="h-[2px] bg-current rounded-full w-5" />
            </button>
          </div>
        </nav>

        {/* Global Structural Backdrop Layer (With Blur Animation) */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ease-in-out
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Premium Offcanvas Brand Panel Sidebar Frame */}
        <div 
          id="premium-brand-panel"
          ref={sidebarRef}
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 right-0 h-screen bg-[var(--kushal-white)] border-l border-[var(--kushal-border-color)] shadow-2xl z-[101] flex flex-col justify-between transition-transform duration-300 ease-in-out overflow-hidden
            w-full sm:w-[340px] lg:w-[380px]
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Subtle Dynamic Geometric Ambient Background Decor */}
          <div className="absolute top-[-5%] right-[-5%] w-64 h-64 rounded-full bg-[rgba(80,0,140,0.04)] blur-[60px] pointer-events-none" />
          <div className="absolute bottom-[25%] left-[-15%] w-48 h-48 rounded-full bg-[rgba(245,200,53,0.03)] blur-[50px] pointer-events-none" />

          {/* Section A: Sidebar Header Bar Component (Strictly Fixed Height/Position) */}
          <div className="p-5 md:p-6 flex items-center justify-between border-b border-[var(--kushal-border-color)] relative bg-[var(--kushal-white)]/90 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
              
              <div>
                 {/* High-End Branding Frame with Public Image Logo */}
          <a href="#" className="group flex items-center h-10 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)] rounded-xl transition-transform duration-200 active:scale-98">
            <img 
              src="/KUSHLAPP_LOGO_THEME_COLOR_HORIZONTAL.png" 
              alt="KushalApp Logo" 
              className="h-full w-auto object-contain transition-opacity group-hover:opacity-90"
              draggable="false"
            />
          </a>
              </div>
            </div>
            
            {/* Integrated Internal Panel Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--kushal-text)] hover:text-[var(--kushal-heading)] hover:bg-[var(--kushal-white3)] border border-[var(--kushal-border-color)] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]"
              aria-label="Close navigation panel"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Section B: Inner Scroll Container for Information Modules */}
          <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5 md:space-y-6 scrollbar-thin relative z-10">
            
            {/* 1. Mobile-Exclusive Navigation Cluster Stack (Strictly Hidden on Desktop Screen Viewports) */}
            <nav className="block lg:hidden space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-[var(--kushal-gray)] uppercase block mb-1">Navigation</span>
              <ul className="space-y-1 list-none m-0 p-0 font-primary">
                {menuItems.map((item, idx) => (
                  <li 
                    key={item}
                    className="transition-all duration-300 transform"
                    style={{ 
                      transform: isOpen ? 'translateX(0)' : 'translateX(16px)', 
                      opacity: isOpen ? 1 : 0,
                      transitionDelay: `${idx * 25}ms` 
                    }}
                  >
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left font-bold px-4 py-3 rounded-[12px] border-none cursor-pointer transition-all duration-200 outline-none flex items-center justify-between group
                        ${activeItem === item 
                          ? 'bg-[var(--kushal-white4)] text-[var(--kushal-base)] shadow-sm' 
                          : 'text-[var(--kushal-text)] hover:bg-[var(--kushal-white3)]'}`}
                    >
                      <span className="text-sm">{item}</span>
                      <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--kushal-base)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-[1px] bg-[var(--kushal-border-color)] opacity-60 pt-3" />
            </nav>

            {/* 2. Contact Card Component Block */}
            <div 
              className="space-y-2 transition-all duration-300 transform delay-100"
              style={{ transform: isOpen ? 'translateY(0)' : 'translateY(12px)', opacity: isOpen ? 1 : 0 }}
            >
              <span className="text-[10px] font-bold tracking-widest text-[var(--kushal-gray)] uppercase block">Get In Touch</span>
              <div className="bg-[var(--kushal-white3)] border border-[var(--kushal-border-color)] p-4 rounded-[var(--kushal-radius)] space-y-3 shadow-sm transition-all duration-200 hover:border-[var(--kushal-base)]/20">
                <a href="mailto:contact@kushalapp.com" className="flex items-center gap-3 group outline-none">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[var(--kushal-border-color)] flex items-center justify-center text-[var(--kushal-base)] group-hover:bg-[var(--kushal-base)] group-hover:text-white transition-all duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span className="text-xs font-semibold text-[var(--kushal-text)] group-hover:text-[var(--kushal-heading)] transition-colors duration-200">contact@kushalapp.com</span>
                </a>
                <a href="tel:+910000000000" className="flex items-center gap-3 group outline-none">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[var(--kushal-border-color)] flex items-center justify-center text-[var(--kushal-base)] group-hover:bg-[var(--kushal-base)] group-hover:text-white transition-all duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-xs font-semibold text-[var(--kushal-text)] group-hover:text-[var(--kushal-heading)] transition-colors duration-200">+91 XXXXX XXXXX</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[var(--kushal-border-color)] flex items-center justify-center text-[var(--kushal-base)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span className="text-xs font-semibold text-[var(--kushal-text)]">India</span>
                </div>
              </div>
            </div>

            {/* 3. Follow Us Social Segment Block */}
            <div 
              className="space-y-2 transition-all duration-300 transform delay-150"
              style={{ transform: isOpen ? 'translateY(0)' : 'translateY(12px)', opacity: isOpen ? 1 : 0 }}
            >
              <span className="text-[10px] font-bold tracking-widest text-[var(--kushal-gray)] uppercase block">Follow Us</span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
                  { name: 'Instagram', icon: <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></g> },
                  { name: 'LinkedIn', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/> },
                  { name: 'Twitter', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/> }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-8.5 h-8.5 rounded-full border border-[var(--kushal-border-color)] flex items-center justify-center text-[var(--kushal-text)] bg-white hover:bg-[var(--kushal-base)] hover:text-white hover:border-[var(--kushal-base)] hover:scale-110 transition-all duration-200 relative group outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {social.icon}
                    </svg>
                    <span className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[var(--kushal-black2)] text-white text-[9px] font-bold px-2 py-0.5 rounded opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 whitespace-nowrap shadow-md">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Section C: Highly Optimized Ultra-Compact Bottom Fixed CTA and Footer Box */}
          <div className="p-5 md:p-6 border-t border-[var(--kushal-border-color)] bg-[var(--kushal-white)]/95 backdrop-blur-md relative z-10 space-y-4">
            
            {/* Height-Optimized Download Section (Strictly constrained within 150px - 180px target parameters) */}
            <div 
              className="bg-[var(--kushal-white3)] border border-[var(--kushal-border-color)] p-4 rounded-[var(--kushal-radius)] shadow-sm transition-all duration-300 transform delay-200"
              style={{ transform: isOpen ? 'translateY(0)' : 'translateY(12px)', opacity: isOpen ? 1 : 0 }}
            >
              <div className="mb-3 flex flex-col justify-between items-center gap-0.5">
                <h5 className="text-[var(--kushal-heading)] font-black text-xs">Download KushalApp</h5>
                <p className="text-[11px] text-[var(--kushal-text)]">Book trusted services anytime.</p>
              </div>
              
              {/* Dual Linear CTA Grid Stack (44px Optimized Button Height Boundary) */}
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="h-11 bg-[var(--kushal-base)] text-white rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span>Google Play</span>
                </a>
                <a href="#" className="h-11 border border-[var(--kushal-border-color)] text-[var(--kushal-heading)] bg-white rounded-xl text-xs font-bold inline-flex items-center justify-center transition-all duration-200 hover:border-[var(--kushal-base)] hover:text-[var(--kushal-base)] hover:-translate-y-0.5 active:translate-y-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--kushal-base)]">
                  <span>Join as Provider</span>
                </a>
              </div>
            </div>

            {/* Premium Micro-SaaS Subtle Footer */}
            <div className="text-center text-[10px] text-[var(--kushal-gray)] font-medium tracking-wide leading-none pt-1">
              <div>&copy; 2026 KushalApp</div>
              <div className="text-[9px] opacity-70 mt-1">Trusted Services Marketplace</div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}