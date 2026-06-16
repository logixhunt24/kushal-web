import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Rocket,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const basicFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProfessionalBenefits() {
  const features = [
    {
      icon: <BadgeDollarSign size={28} className="w-7 h-7" />,
      title: "No Commission Model",
      description:
        "Keep 100% of your hard-earned payouts. Absolutely zero platform deduction cuts or surprise fees.",
    },
    {
      icon: <ShieldCheck size={28} className="w-7 h-7" />,
      title: "Flexible Pricing System",
      description:
        "Set your own hourly or project rates and negotiate or scope directly with your clients.",
    },
    {
      icon: <Users size={28} className="w-7 h-7" />,
      title: "Professional Visibility",
      description:
        "Secure prioritized organic exposure and secure authentic booking leads from your region.",
    },
    {
      icon: <Sparkles size={28} className="w-7 h-7" />,
      title: "Emerging Young Talent",
      description:
        "Showcase your portfolio baseline and start receiving live neighborhood client inquiries instantly.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[var(--kushal-white2)] select-none">
      {}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.2) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.2) 0%, transparent 70%)`,
        }}
      />

      {}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--kushal-base) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={basicFadeUp}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border transition-transform hover:scale-105"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.08)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.15)`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Why Professionals
            Partner With Us
          </span>

          <h2
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{
              fontFamily: "var(--kushal-font)",
              color: "var(--kushal-heading)",
            }}
          >
            Our Unique Solution for
            <span
              className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
              style={{
                color: "var(--kushal-base)",
                fontFamily: "var(--kushal-script-font)",
              }}
            >
              {" "}
              Service Professionals
            </span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed text-neutral-600 font-medium max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--kushal-secondary-font)",
              color: "var(--kushal-text)",
            }}
          >
            Engineered for absolute operational transparency, zero hidden
            margins, and uncapped local scale. Empowering every vendor with the
            autonomy they deserve.
          </p>
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-20"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-full p-6 sm:p-8 rounded-3xl bg-[var(--kushal-white)] border border-neutral-200/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(var(--kushal-base-rgb),0.12)] flex flex-col justify-between overflow-hidden"
            >
              {}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6 inline-block">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[6deg] shadow-md group-hover:shadow-[0_10px_20px_-5px_rgba(var(--kushal-base-rgb),0.3)]"
                    style={{
                      background: "var(--kushal-base)",
                      color: "var(--kushal-white)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold tracking-tight mb-3 text-neutral-900"
                  style={{
                    fontFamily: "var(--kushal-font)",
                    color: "var(--kushal-heading)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-neutral-500 font-medium"
                  style={{
                    fontFamily: "var(--kushal-secondary-font)",
                    color: "var(--kushal-text)",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {}
              <div
                className="absolute bottom-4 right-6 text-6xl font-black opacity-[0.04] group-hover:opacity-[0.09] group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                style={{ color: "var(--kushal-base)" }}
              >
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {[
            { value: "10,000+", label: "Active Experts" },
            { value: "50,000+", label: "Happy Bookings" },
            { value: "100%", label: "Zero Commission" },
            { value: "24/7", label: "Live Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="text-center p-5 sm:p-6 rounded-2xl bg-[var(--kushal-white)] border border-neutral-200/40 shadow-xs hover:shadow-md flex flex-col justify-center items-center"
            >
              <div
                className="text-2xl sm:text-3xl font-black tracking-tight"
                style={{
                  fontFamily: "var(--kushal-font)",
                  color: "var(--kushal-heading)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm font-semibold text-neutral-400 mt-1"
                style={{
                  fontFamily: "var(--kushal-secondary-font)",
                  color: "var(--kushal-text)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={basicFadeUp}
          className="relative overflow-hidden rounded-[2rem] p-[1px] shadow-[0_20px_40px_-15px_rgba(var(--kushal-base-rgb),0.2)]"
          style={{
            background: `linear-gradient(135deg, var(--kushal-base), var(--kushal-primary))`,
          }}
        >
          <div className="rounded-[1.95rem] px-6 py-10 sm:p-10 lg:p-12 bg-white/95 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center lg:text-left max-w-2xl">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4 border"
                style={{
                  background: `rgba(var(--kushal-base-rgb), 0.06)`,
                  borderColor: `rgba(var(--kushal-base-rgb), 0.1)`,
                }}
              >
                <Rocket
                  size={13}
                  className="animate-bounce"
                  style={{ color: "var(--kushal-base)" }}
                />
                <span
                  className="text-[11px] font-bold tracking-wider uppercase"
                  style={{ color: "var(--kushal-base)" }}
                >
                  Join Today
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black tracking-tight mb-2.5"
                style={{
                  fontFamily: "var(--kushal-font)",
                  color: "var(--kushal-heading)",
                }}
              >
                Empowering Every Local Professional
              </h3>
              <p
                className="text-sm sm:text-base text-neutral-500 font-medium leading-relaxed"
                style={{
                  fontFamily: "var(--kushal-secondary-font)",
                  color: "var(--kushal-text)",
                }}
              >
                From specialized trade veterans to emerging freelance creators,
                our platform provides equal visibility and direct customer
                interactions.
              </p>
            </div>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.kushal.app&pcampaignid=web_share"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
              style={{
                background: "var(--kushal-base)",
                color: "var(--kushal-white)",
              }}
            >
              Join as a Professional
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
              />
            </motion.a>
          </div>
        </motion.div>

        {}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={basicFadeUp}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              { text: "No Hidden Fees" },
              { text: "Instant Client Payouts" },
              { text: "Dedicated Dispatch Support" },
              { text: "Free Registration Period" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 group cursor-default"
              >
                <CheckCircle
                  size={14}
                  className="transition-transform group-hover:scale-110"
                  style={{ color: "var(--kushal-base)" }}
                />
                <span
                  className="text-xs sm:text-sm font-bold text-neutral-500 group-hover:text-neutral-800 transition-colors"
                  style={{
                    fontFamily: "var(--kushal-secondary-font)",
                    color: "var(--kushal-text)",
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
