import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarDays,
  MapPin,
  CreditCard,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const CONFIG = {
  badge: "Why Choose KushalApp",
  titlePrefix: "Your Trusted",
  titleHighlight: "Service Marketplace",
  subtitle:
    "KushalApp connects you with verified professionals across home maintenance, beauty & wellness, repairs, delivery, and digital services. Easily browse, book, and pay securely for all your service needs in one seamless platform.",

  features: [
    {
      icon: ShieldCheck,
      badge: "Verified Credentials",
      title: "Trusted Professionals",
      description:
        "Access fully vetted service experts possessing certified background clearances, transparent metrics, and authentic user ratings.",
      gradient: "from-purple-600/10 to-violet-600/5",
    },
    {
      icon: CalendarDays,
      badge: "Instant Allocation",
      title: "Convenient Scheduling",
      description:
        "Coordinate single-click professional structural bookings built purely around your daily operational workflow variations.",
      gradient: "from-amber-500/10 to-yellow-500/5",
    },
    {
      icon: MapPin,
      badge: "Dynamic Routing",
      title: "Real-Time Tracking",
      description:
        "Monitor assigned service personnel transiting directly toward your registered residential or technical coordinate zones live.",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: CreditCard,
      badge: "Encrypted Gateways",
      title: "Secure Online Payments",
      description:
        "Execute decentralized, fully protected escrow checkouts. Safe operations built into modern end-to-end framework layers.",
      gradient: "from-blue-500/10 to-sky-500/5",
    },
  ],
};

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardGridVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export default function KushalFeatures() {
  return (
    <section
      className="relative overflow-hidden w-full select-none px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--kushal-white3)",
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        fontFamily: "var(--kushal-font)",
      }}
    >
      {}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.15) 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] left-[2%] w-[400px] h-[400px] rounded-full blur-[110px] opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.18) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textFadeUpVariants}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          {}
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border transition-transform hover:scale-105"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.08)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.15)`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            {CONFIG.badge}
          </span>

          {}
          <h2
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{
              fontFamily: "var(--kushal-font)",
              color: "var(--kushal-heading)",
            }}
          >
            {CONFIG.titlePrefix}
            <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{
                color: "var(--kushal-base)",
                fontFamily: "var(--kushal-script-font)",
              }}
            >
              {CONFIG.titleHighlight}
            </span>
          </h2>

          {}
          <p
            className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--kushal-secondary-font)",
              color: "var(--kushal-text)",
            }}
          >
            {CONFIG.subtitle}
          </p>
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionContainerVariants}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {CONFIG.features.map((card, index) => {
            const TargetIcon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardGridVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "var(--kushal-shadow-md)",
                  borderColor: "rgba(var(--kushal-base-rgb), 0.15)",
                }}
                className="group relative flex flex-col justify-between p-6 border h-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "var(--kushal-white)",
                  borderColor: "var(--kushal-border-color)",
                  borderRadius: "var(--kushal-radius)",
                  boxShadow: "var(--kushal-shadow-sm)",
                }}
              >
                {}
                <div
                  style={{
                    borderRadius: "var(--kushal-radius)",
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 w-full text-left">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className="w-11 h-11 flex items-center justify-center border border-neutral-100 shadow-3xs transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: "var(--kushal-white3)",
                        color: "var(--kushal-base)",
                        borderRadius: "calc(var(--kushal-radius) - 8px)",
                      }}
                    >
                      <TargetIcon size={20} className="stroke-[2]" />
                    </div>

                    <span
                      className="text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: "var(--kushal-white4)",
                        color: "var(--kushal-base)",
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold tracking-tight mb-2 flex items-center justify-between transition-colors duration-200 group-hover:text-[var(--kushal-base)]"
                    style={{
                      fontFamily: "var(--kushal-heading-font)",
                      color: "var(--kushal-heading)",
                    }}
                  >
                    {card.title}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-50 transition-opacity"
                    />
                  </h3>

                  <p
                    className="text-xs sm:text-sm leading-relaxed font-medium"
                    style={{
                      fontFamily: "var(--kushal-secondary-font)",
                      color: "var(--kushal-text)",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {}
                <div className="w-full h-[3px] bg-neutral-100 rounded-full mt-6 overflow-hidden relative z-10">
                  <div
                    className="h-full w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                    style={{ backgroundColor: "var(--kushal-primary)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
