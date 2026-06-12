import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Clean, accessible animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
};

export default function ProfessionalBenefits() {
  const features = [
    {
      icon: <BadgeDollarSign size={24} />,
      title: "Keep 100% of Your Money",
      description: "We charge zero commission. Everything you earn from your clients goes directly into your pocket.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Set Your Own Prices",
      description: "You are in control. Choose your own rates based on your work experience and skills.",
    },
    {
      icon: <Users size={24} />,
      title: "Talk Directly with Clients",
      description: "No middleman. Chat and negotiate directly with your customers to agree on the best deal.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Get Found More Easily",
      description: "Boost your local business visibility with featured job listings and direct customer phone calls.",
    },
  ];

  return (
    <section 
      className="relative overflow-hidden select-none"
      style={{
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        backgroundColor: "var(--kushal-white3)"
      }}
    >
      {/* Background visual accents using solid brand matching parameters */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none opacity-30"
        style={{ background: "rgba(var(--kushal-base-rgb), 0.12)" }}
      />

      <div 
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {/* Dynamic Modern Layout: Sticky Header Column paired with Content List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Main Value Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4 border"
              style={{
                borderRadius: "var(--kushal-radius)",
                background: `rgba(var(--kushal-base-rgb), 0.06)`,
                color: "var(--kushal-base)",
                borderColor: `rgba(var(--kushal-base-rgb), 0.12)`,
              }}
            >
              For Service Providers
            </span>

            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-5"
              style={{
                fontFamily: "var(--kushal-heading-font)",
                color: "var(--kushal-heading)",
                lineHeight: "1.15"
              }}
            >
              Grow Your Business Without{" "}
              <span style={{ color: "var(--kushal-base)" }}>
                Paying Commission
              </span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed font-medium mb-8"
              style={{
                fontFamily: "var(--kushal-secondary-font)",
                color: "var(--kushal-text)",
              }}
            >
              Our platform helps local professionals find more work, communicate freely, and run their business with total honesty. Expand your reach and connect directly with users near you.
            </p>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "var(--kushal-shadow-md)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 font-bold transition-all duration-200 w-full sm:w-auto justify-center"
              style={{
                backgroundColor: "var(--kushal-base)",
                color: "var(--kushal-white)",
                borderRadius: "calc(var(--kushal-radius) - 2px)",
                fontFamily: "var(--kushal-secondary-font)"
              }}
            >
              Join as a Provider
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
              />
            </motion.button>
          </div>

          {/* RIGHT COLUMN: Feature Matrix Display */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="lg:col-span-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 4, 
                  borderColor: "rgba(var(--kushal-base-rgb), 0.25)",
                  boxShadow: "var(--kushal-shadow-sm)"
                }}
                className="p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 transition-all duration-200"
                style={{
                  backgroundColor: "var(--kushal-white)",
                  borderColor: "var(--kushal-border-color)",
                  borderRadius: "var(--kushal-radius)",
                }}
              >
                {/* Clean minimalist icon placeholder */}
                <div
                  className="w-12 h-12 shrink-0 flex items-center justify-center"
                  style={{
                    backgroundColor: `rgba(var(--kushal-base-rgb), 0.08)`,
                    color: "var(--kushal-base)",
                    borderRadius: "calc(var(--kushal-radius) - 4px)"
                  }}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h3
                    className="text-base sm:text-lg font-bold tracking-tight"
                    style={{
                      fontFamily: "var(--kushal-heading-font)",
                      color: "var(--kushal-heading)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      fontFamily: "var(--kushal-secondary-font)",
                      color: "var(--kushal-text)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}