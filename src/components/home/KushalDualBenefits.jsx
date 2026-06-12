import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  CalendarDays,
  CreditCard,
  MapPin,
  Star,
  Layers,
  User,
  Briefcase,
  ArrowRight
} from "lucide-react";

// Animation Variants
const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 14 }
  }
};

export default function KushalDualBenefits() {
  // Toggle state between 'user' and 'provider'
  const [activeTab, setActiveTab] = useState("user");

  const benefitData = {
    user: [
      {
        icon: <ShieldCheck size={22} />,
        title: "Trusted Professionals",
        desc: "Get access to fully verified, high-quality local experts near you.",
        tag: "100% Verified"
      },
      {
        icon: <CalendarDays size={22} />,
        title: "Easy Booking",
        desc: "Book any domestic or digital service effortlessly in just a few taps.",
        tag: "Instant Setup"
      },
      {
        icon: <CreditCard size={22} />,
        title: "Secure Payments",
        desc: "Enjoy perfectly safe transactions with protected escrow checkouts.",
        tag: "Safe & Fast"
      },
      {
        icon: <MapPin size={22} />,
        title: "Real-Time Tracking",
        desc: "Track your assigned service professional live on the map as they arrive.",
        tag: "Live Map"
      },
      {
        icon: <Star size={22} />,
        title: "Ratings & Reviews",
        desc: "Read transparent feedback to make informed choices for your project.",
        tag: "Top Rated"
      },
      {
        icon: <Layers size={22} />,
        title: "All Services in One App",
        desc: "Access an incredibly diverse selection of categories all under one platform.",
        tag: "Massive Variety"
      }
    ],
    provider: [
      {
        icon: <Briefcase size={22} />,
        title: "Grow Your Reputation",
        desc: "Showcase your professional skills, qualifications, and premium experience.",
        tag: "Business Boost"
      },
      {
        icon: <CalendarDays size={22} />,
        title: "Smart Scheduling",
        desc: "Manage your incoming appointments efficiently to completely avoid empty gaps.",
        tag: "Full Control"
      },
      {
        icon: <CreditCard size={22} />,
        title: "Guaranteed Payouts",
        desc: "Receive your hard-earned payments directly into your pocket safely and fast.",
        tag: "Zero Risk"
      },
      {
        icon: <ShieldCheck size={22} />,
        title: "Build Total Trust",
        desc: "Easily update your live service milestone logs to maximize transparency.",
        tag: "Clear Logs"
      },
      {
        icon: <Star size={22} />,
        title: "Attract More Clients",
        desc: "Collect high-value stellar ratings to establish your local marketplace authority.",
        tag: "Get Premium"
      },
      {
        icon: <Layers size={22} />,
        title: "Expand Your Reach",
        desc: "Offer multiple skill packages to scale up your daily earnings dynamically.",
        tag: "Scale Quickly"
      }
    ]
  };

  return (
    <section
      className="relative overflow-hidden w-full select-none"
      style={{
        backgroundColor: "var(--kushal-white3)",
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        fontFamily: "var(--kushal-font)"
      }}
    >
      {/* Immersive Lavender / Accent Ambient Backdrop Flares */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[5%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{ background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.15) 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-20"
          style={{ background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.18) 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ maxWidth: "var(--container-width)" }}>
        
        {/* ========================================================
           CENTERED HEADER CONTENT ROW (EXACT MATCHED LAYOUT STYLE)
           ======================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textFadeUpVariants}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          {/* Tag Badge Pill */}
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border transition-transform hover:scale-105"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.08)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.15)`
            }}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Platform Ecosystem
          </span>

          {/* Unified Title Block with Script Subtitle Variable Accent */}
          <h2
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{ fontFamily: "var(--kushal-font)", color: "var(--kushal-heading)" }}
          >
            Benefits for Users &
            <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{ color: "var(--kushal-base)", fontFamily: "var(--kushal-script-font)" }}
            >
              Service Providers
            </span>
          </h2>

          {/* Centered Descriptive Blurb */}
          <p
            className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--kushal-secondary-font)",
              color: "var(--kushal-text)"
            }}
          >
            KushalApp brings convenience, trust, and growth for everyone using the platform. Explore how our digital tools streamline interactions for both customers and local experts.
          </p>
        </motion.div>

        {/* ========================================================
           SEGMENTED ANIMATED TAB TOGGLE SWITCH
           ======================================================== */}
        <div className="flex justify-center mb-12 md:mb-16 relative z-20">
          <div className="flex p-1.5 bg-neutral-200/60 backdrop-blur-md border border-neutral-300/40 rounded-2xl w-full max-w-[340px] sm:max-w-[400px]">
            
            {/* User Tab Trigger */}
            <button
              onClick={() => setActiveTab("user")}
              className="relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 focus:outline-hidden z-10"
              style={{ color: activeTab === "user" ? "var(--kushal-white)" : "var(--kushal-heading)" }}
            >
              {activeTab === "user" && (
                <motion.div
                  layoutId="activeBenefitTab"
                  className="absolute inset-0 z-[-1] rounded-xl shadow-md"
                  style={{ backgroundColor: "var(--kushal-base)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <User size={16} />
              For Our Users
            </button>

            {/* Provider Tab Trigger */}
            <button
              onClick={() => setActiveTab("provider")}
              className="relative flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 focus:outline-hidden z-10"
              style={{ color: activeTab === "provider" ? "var(--kushal-white)" : "var(--kushal-heading)" }}
            >
              {activeTab === "provider" && (
                <motion.div
                  layoutId="activeBenefitTab"
                  className="absolute inset-0 z-[-1] rounded-xl shadow-md"
                  style={{ backgroundColor: "var(--kushal-base)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Briefcase size={16} />
              For Providers
            </button>

          </div>
        </div>

        {/* ========================================================
           DYNAMIC GRID CARD AREA WITH STAGGER ANIMATIONS
           ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            {benefitData[activeTab].map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "var(--kushal-shadow-md)",
                  borderColor: "rgba(var(--kushal-base-rgb), 0.25)"
                }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 border h-full transition-all duration-300"
                style={{
                  backgroundColor: "var(--kushal-white)",
                  borderColor: "var(--kushal-border-color)",
                  borderRadius: "var(--kushal-radius)",
                  boxShadow: "var(--kushal-shadow-sm)"
                }}
              >
                <div>
                  {/* Icon Block with subtle color background */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className="w-12 h-12 flex items-center justify-center border border-neutral-100 shadow-3xs transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: "var(--kushal-white3)",
                        color: "var(--kushal-base)",
                        borderRadius: "calc(var(--kushal-radius) - 6px)"
                      }}
                    >
                      {benefit.icon}
                    </div>

                    {/* Inline micro indicator pill */}
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: "rgba(var(--kushal-base-rgb), 0.05)",
                        color: "var(--kushal-base)"
                      }}
                    >
                      {benefit.tag}
                    </span>
                  </div>

                  {/* Benefit Title Header */}
                  <h3
                    className="text-lg font-bold tracking-tight mb-2.5 transition-colors duration-200 group-hover:text-[var(--kushal-base)]"
                    style={{ fontFamily: "var(--kushal-heading-font)", color: "var(--kushal-heading)" }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Accessible Plain English Description */}
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      fontFamily: "var(--kushal-secondary-font)",
                      color: "var(--kushal-text)"
                    }}
                  >
                    {benefit.desc}
                  </p>
                </div>

                {/* Micro Action Visual Anchor Line */}
                <div className="w-full h-[2px] bg-neutral-100 rounded-full mt-6 overflow-hidden relative">
                  <div
                    className="h-full w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                    style={{ backgroundColor: "var(--kushal-base)" }}
                  />
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}