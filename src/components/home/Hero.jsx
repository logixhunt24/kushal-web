import React from 'react';
import { motion } from "framer-motion";
import {
  Search,
  Star,
  MapPin,
  Zap,
  Users,
  ShieldCheck,
  CreditCard,
  BadgePercent,
  Check,
  ChevronRight,
  Bell,
  Wrench,
  Droplets,
  Sparkles,
  Brush,
  Truck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

// ========================================================
// DESIGN SYSTEM CONSTANTS & APPLICATION VARIABLES
// ========================================================
const CONFIG = {
  appName: "KushalApp",
  fontCdn: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
  appStoreUrl: "#",
  providerUrl: "#",
  ratingValue: "4.9/5",
  ratingSub: "Loved by 10,000+ active Indian households",
  initials: ["A", "P", "S", "R", "M"],
  avatarColors: [
    "from-rose-400 to-pink-500",
    "from-amber-400 to-orange-500",
    "from-emerald-400 to-teal-500",
    "from-sky-400 to-indigo-500",
    "from-fuchsia-400 to-purple-600",
  ],
};

const CATEGORIES = [
  { icon: Zap, label: "Electrical", tone: "bg-amber-500/10 text-amber-600" },
  { icon: Droplets, label: "Plumbing", tone: "bg-sky-500/10 text-sky-600" },
  { icon: Sparkles, label: "Beauty", tone: "bg-pink-500/10 text-pink-600" },
  { icon: Brush, label: "Cleaning", tone: "bg-emerald-500/10 text-emerald-600" },
  { icon: Truck, label: "Delivery", tone: "bg-orange-500/10 text-orange-600" },
  { icon: Smartphone, label: "Digital", tone: "bg-violet-500/10 text-violet-600" },
];

const TRUST_PARAMS = [
  { icon: ShieldCheck, text: "Verified Experts" },
  { icon: CreditCard, text: "Secure Escrows" },
  { icon: BadgePercent, text: "Zero Provider Commission" },
];

const BEAUTY_SERVICES = [
  { name: "Hair Stylist Specialist", price: "₹499", rating: "4.9" },
  { name: "Bridal Makeup Artist", price: "₹1,299", rating: "4.8" },
  { name: "Deep Spa Therapist", price: "₹899", rating: "4.9" },
  { name: "Premium Nail Artist", price: "₹399", rating: "4.7" },
];

// ========================================================
// FRAMER MOTION ORCHESTRATION TIMELINES
// ========================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const heroElementVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 }
  }
};

const phoneContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
  }
};

const phoneVariants = (baseRotate, yOffset) => ({
  hidden: { opacity: 0, y: 60, rotate: 0 },
  visible: {
    opacity: 1,
    y: yOffset,
    rotate: baseRotate,
    transition: { type: "spring", stiffness: 50, damping: 18 }
  }
});

const floatingCardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 12, delay: 1.2 }
  }
};

// ========================================================
// SUB-COMPONENTS & VIEWPORTS
// ========================================================
function PhoneFrame({ children, className = "", animationClass = "" }) {
  return (
    <div className={`relative w-[210px] min-[400px]:w-[230px] h-[430px] min-[400px]:h-[470px] rounded-[2.4rem] bg-neutral-900 p-[6px] shadow-[0_30px_70px_-15px_rgba(80,0,140,0.3)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_40px_90px_-10px_rgba(123,31,162,0.45)] hover:rotate-0 z-10 ${className} ${animationClass}`}>
      <div className="absolute left-1/2 top-2.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-neutral-50/95 backdrop-blur-xs select-none">
        {children}
      </div>
    </div>
  );
}

function ScreenHome() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-8 pb-3 text-left">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-neutral-400">Good Morning 👋</p>
          <p className="text-[13px] font-bold text-neutral-800">Shrii</p>
        </div>
        <div className="relative grid h-7 w-7 place-items-center rounded-full bg-neutral-50 ring-1 ring-black/5">
          <Bell className="h-3.5 w-3.5 text-neutral-700" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-purple-600" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-1.5 ring-1 ring-neutral-200/60">
        <Search className="h-3 w-3 text-neutral-400" />
        <span className="text-[10px] text-neutral-400 font-medium">Search services…</span>
      </div>
      <p className="mt-4 text-[10px] font-bold tracking-wider uppercase text-neutral-400">Categories</p>
      <div className="mt-1.5 grid grid-cols-3 gap-1.5">
        {CATEGORIES.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-1 rounded-xl bg-white py-2 ring-1 ring-black/5 transition-colors hover:bg-neutral-50 cursor-pointer">
            <div className={`grid h-7 w-7 place-items-center rounded-lg ${c.tone}`}>
              <c.icon className="h-3.5 w-3.5" />
            </div>
            <span className="text-[8.5px] font-bold text-neutral-700">{c.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-bold tracking-wider uppercase text-neutral-400">Featured Offer</p>
      <div className="mt-1.5 rounded-xl bg-gradient-to-br from-[#50008C] to-[#7B1FA2] p-3 text-white shadow-md shadow-purple-900/10">
        <p className="text-[8px] font-bold tracking-wider uppercase opacity-75">Today's standard</p>
        <p className="text-[11px] font-extrabold leading-tight mt-0.5">Deep Home Cleaning</p>
        <p className="mt-1 text-[9px] font-medium bg-white/20 inline-block px-1.5 py-0.5 rounded">Starts at ₹499 · 4.9★</p>
      </div>
      <div className="mt-2 flex gap-1.5">
        <div className="flex-1 rounded-xl bg-neutral-50 p-2 ring-1 ring-black/5">
          <Wrench className="h-3.5 w-3.5 text-[#50008C]" />
          <p className="mt-1 text-[9.5px] font-bold text-neutral-800">Repair</p>
          <p className="text-[8px] font-medium text-neutral-400">From ₹199</p>
        </div>
        <div className="flex-1 rounded-xl bg-neutral-50 p-2 ring-1 ring-black/5">
          <Sparkles className="h-3.5 w-3.5 text-[#50008C]" />
          <p className="mt-1 text-[9.5px] font-bold text-neutral-800">Spa Wellness</p>
          <p className="text-[8px] font-medium text-neutral-400">From ₹799</p>
        </div>
      </div>
    </div>
  );
}

function ScreenCategories() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-8 pb-3 text-left">
      <div className="flex items-center gap-1.5">
        <ChevronRight className="h-4 w-4 rotate-180 text-neutral-800 stroke-[2.5]" />
        <p className="text-[13px] font-extrabold text-neutral-800">Beauty Services</p>
      </div>
      <p className="mt-0.5 text-[9.5px] font-medium text-neutral-400">28 certified professionals near you</p>
      <div className="mt-2.5 flex gap-1 overflow-hidden">
        {["All", "Top ", "Nearby", "Offers"].map((t, i) => (
          <span key={t} className={`rounded-full px-2.5 py-1 text-[8.5px] font-bold tracking-wide transition-colors cursor-pointer ${i === 0 ? "bg-[#50008C] text-white" : "bg-neutral-50 text-neutral-600 ring-1 ring-neutral-200"}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {BEAUTY_SERVICES.map((it) => (
          <div key={it.name} className="flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-neutral-100 hover:ring-purple-200 shadow-xs transition-all duration-300">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-purple-50 text-[#50008C]">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-bold text-neutral-800">{it.name}</p>
              <div className="mt-0.5 flex items-center gap-1">
                <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                <span className="text-[8.5px] font-bold text-neutral-600">{it.rating}</span>
                <span className="text-[8.5px] text-neutral-300">|</span>
                <span className="text-[8.5px] font-bold text-[#50008C]">{it.price}</span>
              </div>
            </div>
            <button className="rounded-lg bg-[#50008C] px-2.5 py-1 text-[8.5px] font-extrabold text-white tracking-wide active:scale-95 transition-transform">
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenBooking() {
  return (
    <div className="flex h-full flex-col items-center bg-white px-4 pt-9 pb-3 text-center">
      <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#50008C] to-[#7B1FA2] shadow-lg shadow-purple-500/20">
        <Check className="h-8 w-8 text-white stroke-[3]" />
        <span className="absolute inset-0 animate-ping rounded-full bg-[#50008C]/20" />
      </div>
      <p className="mt-4 text-[14px] font-extrabold text-neutral-800">Booking Confirmed</p>
      <p className="text-[9.5px] font-medium text-neutral-400 mt-0.5">Your dynamic routing assignment is ready</p>
      <div className="mt-4 w-full rounded-xl bg-neutral-50 p-2.5 ring-1 ring-neutral-200/50 text-left">
        <p className="text-[8px] font-bold uppercase tracking-wider text-neutral-400">Assigned Expert</p>
        <div className="mt-1 flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[10px] font-bold text-white">RV</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-bold text-neutral-800">Rahul Verma</p>
            <div className="flex items-center gap-1">
              <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
              <span className="text-[8.5px] font-bold text-neutral-500">4.9 · Expert Electrician</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full rounded-xl bg-neutral-50 p-2.5 ring-1 ring-neutral-200/50 text-left">
        <div className="flex items-center justify-between">
          <span className="text-[8.5px] font-bold text-neutral-400 uppercase tracking-wider">Estimated Transit</span>
          <span className="text-[11px] font-extrabold text-[#50008C]">22 min</span>
        </div>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-neutral-200/70">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#50008C] to-amber-400 animate-[pulse_1.5s_infinite]" />
        </div>
      </div>
      <button className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl bg-neutral-900 py-2.5 text-[10px] font-bold text-white tracking-wide active:scale-95 transition-transform shadow-md">
        <MapPin className="h-3 w-3 text-purple-400" /> Track Expert Live
      </button>
    </div>
  );
}

function FloatingCard({ icon: Icon, title, subtitle, className = "", iconClass = "bg-[#50008C] text-white" }) {
  return (
    <motion.div
      variants={floatingCardVariants}
      className={`absolute z-30 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-2.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] select-none ${className} animate-float-slow`}
    >
      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl shadow-xs ${iconClass}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-[12.5px] font-extrabold leading-tight text-neutral-900 tracking-tight">{title}</p>
        {subtitle && <p className="text-[9.5px] font-semibold text-neutral-500 mt-0.5">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

// ========================================================
// PRIMARY CORE HERO EXPORT
// ========================================================
export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden  pt-[120px] md:pt-[140px] pb-[80px] font-sans"
      style={{ backgroundColor: "var(--kushal-white3)" }}
    >
      <link href={CONFIG.fontCdn} rel="stylesheet" />

      {/* Modern Backdrop Ambient Radial Matrix Flares */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#50008C]/10 blur-[130px] animate-[pulse_10s_infinite_alternate]" />
        <div className="absolute top-1/4 -right-40 h-[550px] w-[550px] rounded-full bg-amber-400/10 blur-[140px] animate-[pulse_8s_infinite_alternate_2s]" />
        <div className="absolute -bottom-20 left-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-[110px]" />
        
        {/* Fine Linear Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right, #50008C 1px, transparent 1px), linear-gradient(to bottom, #50008C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-[50px] lg:gap-[40px] xl:gap-[80px] px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
        
        {/* ========================================================
           LEFT WORKSPACE: CONTENT ACCUMULATORS (STAGGERED LOAD)
           ======================================================== */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative text-left flex flex-col items-start z-20 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
        >
          {/* Tag Badge Capsule */}
          <motion.div variants={heroElementVariants} className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-50/80 px-4 py-1.5 shadow-xs backdrop-blur-xs transition-transform hover:scale-105 cursor-default">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-extrabold tracking-wider text-[#50008C] uppercase">
              SERVICE MARKETPLACE
            </span>
          </motion.div>

          {/* Dynamic Core Typography Header Block */}
          <motion.h1 variants={heroElementVariants} className="mt-5 text-[40px] sm:text-[44px] md:text-[62px] xl:text-[50px] font-black leading-[1.08] tracking-tight text-neutral-900">
            Book Trusted Services <br />
            <span className="bg-gradient-to-r from-[#50008C] via-[#9C27B0] to-[#50008C] bg-clip-text text-transparent bg-[size:200%_auto] animate-[pulse_6s_infinite]">
              Anytime, Anywhere
            </span> <br />
            <span className="text-[28px] sm:text-[38px] md:text-[44px] font-medium text-neutral-400 block sm:inline mr-2">with</span>
            <span 
              className="text-[#50008C] text-[52px] sm:text-[68px] md:text-[76px] font-normal tracking-wide inline-block transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              {CONFIG.appName}
            </span>
          </motion.h1>

          {/* Descriptive Slat */}
          <motion.p variants={heroElementVariants} className="mt-6 max-w-lg text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-neutral-600 font-medium">
            KushalApp connects you with verified professionals for home maintenance,
            beauty, repair, delivery, and digital services — all in one powerful, safe,
            and ultra-responsive ecosystem.
          </motion.p>

          {/* Store CTAs Buttons Panel */}
          <motion.div variants={heroElementVariants} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              href={CONFIG.appStoreUrl}
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-neutral-950 px-6 py-4 text-white shadow-xl shadow-neutral-950/10 transition-all duration-300 hover:scale-[1.03] hover:bg-[#50008C] hover:shadow-purple-700/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M3.6 2.3a1 1 0 00-.6.9v17.6a1 1 0 00.6.9l10.3-9.7L3.6 2.3zm11.3 10.6l2.7 2.6-11.4 6.5 8.7-9.1zm0-1.8L6.2 2l11.4 6.5-2.7 2.6zm6 1.6l-2.6 1.5-3-2.8 3-2.8 2.6 1.5a1.4 1.4 0 010 2.6z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[9px] font-bold opacity-75 tracking-wider uppercase">Get it on</span>
                <span className="block text-[14px] font-black tracking-tight">Google Play</span>
              </span>
            </a>
            <a
              href={CONFIG.providerUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-neutral-200 bg-white px-6 py-4 text-[14px] font-bold text-neutral-800 shadow-xs transition-all duration-300 hover:scale-[1.03] hover:border-neutral-950 hover:bg-neutral-50"
            >
              Become a Service Provider
              <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-900" />
            </a>
          </motion.div>

          {/* Secure Trust Parameter Inline Slat */}
          <motion.div variants={heroElementVariants} className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-neutral-200/60 pt-6 w-full">
            {TRUST_PARAMS.map((b) => (
              <div key={b.text} className="flex items-center gap-2 group">
                <div className="p-1 rounded-md bg-purple-50 group-hover:bg-purple-100 transition-colors">
                  <b.icon className="h-3.5 w-3.5 text-[#50008C]" />
                </div>
                <span className="text-[12px] font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">{b.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust Metrics Complex Container */}
          <motion.div variants={heroElementVariants} className="mt-8 flex items-center gap-3 bg-white/40 backdrop-blur-xs p-2 rounded-2xl ring-1 ring-neutral-200/40">
            <div className="flex -space-x-2.5">
              {CONFIG.initials.map((n, i) => (
                <div
                  key={i}
                  className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${CONFIG.avatarColors[i]} text-[11px] font-bold text-white ring-2 ring-white shadow-xs`}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-[12.5px] font-black text-neutral-900">{CONFIG.ratingValue}</span>
              </div>
              <p className="text-[11px] font-medium text-neutral-500 mt-0.5">
                Loved by <span className="font-bold text-neutral-800">10,000+</span> active Indian households
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================
           RIGHT INTERLOCK VIEWPORT SHOWCASE: TRIPLE MOCKUPS (ONLOAD SPLIT)
           ======================================================== */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={phoneContainerVariants}
          className="relative mx-auto flex h-[490px] min-[400px]:h-[540px] md:h-[580px] w-full max-w-[500px] sm:max-w-[560px] lg:max-w-none items-center justify-center mt-6 lg:mt-0 px-2"
        >
          {/* Radial Technical Lighting Glow */}
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#50008C]/20 via-purple-400/10 to-amber-300/15 blur-3xl pointer-events-none" />

          {/* Device Module A - Left-leaning Category Deck */}
          <motion.div 
            variants={phoneVariants(-9, "-50%")} 
            className="absolute left-0 min-[400px]:left-2 sm:left-6 top-1/2 origin-center z-10"
          >
            <PhoneFrame className="scale-[0.80] sm:scale-[0.84]" animationClass="animate-float-slow">
              <ScreenCategories />
            </PhoneFrame>
          </motion.div>

          {/* Device Module B - Right-leaning Live Status View */}
          <motion.div 
            variants={phoneVariants(9, "-50%")} 
            className="absolute right-0 min-[400px]:right-2 sm:right-6 top-1/2 origin-center z-10"
          >
            <PhoneFrame className="scale-[0.80] sm:scale-[0.84]" animationClass="animate-float-delayed">
              <ScreenBooking />
            </PhoneFrame>
          </motion.div>

          {/* Device Module C - Center-staged Application Viewport */}
          <motion.div 
            variants={phoneVariants(0, "-50%")} 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 z-20 transform scale-[0.92] sm:scale-[1]"
          >
            <PhoneFrame>
              <ScreenHome />
            </PhoneFrame>
          </motion.div>

          {/* Overlay Glassmorphic Metric Tags */}
          <FloatingCard icon={Users} title="500+ Experts" subtitle="Across 40+ Hubs" className="left-[-15px] sm:left-[-10px] top-[4%] hidden sm:flex" iconClass="bg-[#50008C] text-white" />
          <FloatingCard icon={Star} title="4.9 Rated" subtitle="Premium Services" className="right-[-15px] sm:right-[-10px] top-[10%] hidden sm:flex" iconClass="bg-amber-100 text-amber-700" />
          <FloatingCard icon={MapPin} title="Pan-India Access" className="left-[-25px] sm:left-[-20px] bottom-[10%] hidden sm:flex" iconClass="bg-emerald-50 text-emerald-600" />
          <FloatingCard icon={Zap} title="Instant Routing" subtitle="Confirmed in Seconds" className="right-[-25px] sm:right-[-20px] bottom-[6%] hidden sm:flex" iconClass="bg-purple-100 text-[#50008C]" />
        </motion.div>

      </div>

      {/* Global CSS Inject Layer for Hardware Floating Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: floatY 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatY 6s ease-in-out infinite;
          animation-delay: -3s;
        }
      `}} />
    </section>
  );
}