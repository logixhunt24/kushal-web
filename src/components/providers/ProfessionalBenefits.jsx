import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Sparkles,
  ArrowRight,
  Smartphone,
} from "lucide-react";

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
      description:
        "We charge zero commission. Everything you earn from your clients goes directly into your pocket.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Set Your Own Prices",
      description:
        "You are in control. Choose your own rates based on your work experience and skills.",
    },
    {
      icon: <Users size={24} />,
      title: "Talk Directly with Clients",
      description:
        "No middleman. Chat and negotiate directly with your customers to agree on the best deal.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Get Found More Easily",
      description:
        "Boost your local business visibility with featured job listings and direct customer phone calls.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden select-none"
      style={{
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        backgroundColor: "var(--kushal-white3)",
      }}
    >
      {}
      <div
        className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none opacity-30"
        style={{ background: "rgba(var(--kushal-base-rgb), 0.12)" }}
      />

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {}
          <div className="lg:col-span-5 lg:sticky lg:top-8 text-center lg:text-left">
            {}
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 border backdrop-blur-md"
              style={{
                background: `rgba(var(--kushal-base-rgb), 0.06)`,
                color: "var(--kushal-base)",
                borderColor: `rgba(var(--kushal-base-rgb), 0.12)`,
              }}
            >
              <Smartphone size={13} className="animate-pulse" /> For Service
              Providers
            </span>

            {}
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-[1.1]"
              style={{
                fontFamily: "var(--kushal-font)",
                color: "var(--kushal-heading)",
              }}
            >
              Grow Your Business Without{" "}
              <span
                className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
                style={{
                  color: "var(--kushal-base)",
                  fontFamily: "var(--kushal-script-font)",
                }}
              >
                Paying Commission
              </span>
            </h2>

            {}
            <p
              className="text-base sm:text-lg leading-relaxed text-neutral-500 font-medium max-w-xl mx-auto lg:mx-0 mb-8"
              style={{
                fontFamily: "var(--kushal-secondary-font)",
                color: "var(--kushal-text)",
              }}
            >
              Our platform helps local professionals find more work, communicate
              freely, and run their business with total honesty. Expand your
              reach and connect directly with users near you.
            </p>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.kushalapp.partner&pcampaignid=web_share"
              target="_blank"
              whileHover={{ scale: 1.02, boxShadow: "var(--kushal-shadow-md)" }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 font-bold transition-all duration-200 w-full sm:w-auto justify-center"
              style={{
                backgroundColor: "var(--kushal-base)",
                color: "var(--kushal-white)",
                borderRadius: "calc(var(--kushal-radius) - 2px)",
                fontFamily: "var(--kushal-secondary-font)",
              }}
            >
              Join as a Provider
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
              />
            </motion.a>
          </div>

          {}
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
                  boxShadow: "var(--kushal-shadow-sm)",
                }}
                className="p-5 sm:p-6 border flex flex-col sm:flex-row items-start gap-4 transition-all duration-200"
                style={{
                  backgroundColor: "var(--kushal-white)",
                  borderColor: "var(--kushal-border-color)",
                  borderRadius: "var(--kushal-radius)",
                }}
              >
                {}
                <div
                  className="w-12 h-12 shrink-0 flex items-center justify-center"
                  style={{
                    backgroundColor: `rgba(var(--kushal-base-rgb), 0.08)`,
                    color: "var(--kushal-base)",
                    borderRadius: "calc(var(--kushal-radius) - 4px)",
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
