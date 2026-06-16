import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Users, Zap, Award } from "lucide-react";

const CONFIG = {
  badge: "Our Mission",
  titlePrefix: "Redefining Service",
  titleHighlight: "Experiences",
  subtitle:
    "We believe that access to professional services should be as simple as a tap. By combining cutting-edge technology with verified expertise, KushalApp is building a future where your needs are met with precision and care.",

  pillars: [
    {
      icon: Target,
      title: "Precision Driven",
      description:
        "Our algorithms match you with the exact expertise required, eliminating guesswork and ensuring quality at every step.",
      gradient: "from-purple-600/10 to-violet-600/5",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "We nurture a platform where professional service providers grow their business while seekers find reliable support.",
      gradient: "from-amber-500/10 to-yellow-500/5",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Efficiency is our core. From booking to completion, we streamline every workflow to save you time and energy.",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every professional undergoes rigorous vetting. If it's on KushalApp, it meets the highest industry standards.",
      gradient: "from-blue-500/10 to-sky-500/5",
    },
  ],
};

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden w-full select-none px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--kushal-white2)",
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        fontFamily: "var(--kushal-font)",
      }}
    >
      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {/* Header Section - Matches your style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textFadeUpVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border"
            style={{
              background: `rgba(var(--kushal-base-rgb), 0.08)`,
              color: "var(--kushal-base)",
              borderColor: `rgba(var(--kushal-base-rgb), 0.15)`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            {CONFIG.badge}
          </span>

          <h2
            className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6"
            style={{ color: "var(--kushal-heading)" }}
          >
            {CONFIG.titlePrefix}
            <span
              className="block mt-1"
              style={{
                color: "var(--kushal-base)",
                fontFamily: "var(--kushal-script-font)",
              }}
            ></span>
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

          <p
            className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
            style={{ color: "var(--kushal-text)" }}
          >
            {CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Feature Grid - Re-purposed for Mission Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionContainerVariants}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {CONFIG.pillars.map((card, index) => {
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
                className="group relative flex flex-col p-6 border h-full transition-all duration-300"
                style={{
                  backgroundColor: "var(--kushal-white)",
                  borderColor: "var(--kushal-border-color)",
                  borderRadius: "var(--kushal-radius)",
                  boxShadow: "var(--kushal-shadow-sm)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-5 border border-neutral-100"
                    style={{
                      backgroundColor: "var(--kushal-white3)",
                      color: "var(--kushal-base)",
                      borderRadius: "calc(var(--kushal-radius) - 8px)",
                    }}
                  >
                    <TargetIcon size={20} />
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "var(--kushal-heading)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-medium leading-relaxed"
                    style={{ color: "var(--kushal-text)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
