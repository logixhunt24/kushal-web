import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Tag, Zap } from "lucide-react";
import teamImg from "../../assets/img/kushalapp_team.png"; // Update path

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Excellence",
    desc: "Every provider on our platform is background-checked and rated by real customers.",
  },
  {
    icon: Tag,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. What you see is exactly what you pay.",
  },
  {
    icon: Zap,
    title: "Instant Reliability",
    desc: "Book in seconds and get matched with available pros near you, instantly.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--kushal-white3)",
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ backgroundColor: "rgba(var(--kushal-base-rgb), 0.06)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"
        style={{ backgroundColor: "rgba(var(--kushal-base-rgb), 0.05)" }}
      />

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "var(--container-width)" }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Visual/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative mx-auto max-w-md lg:max-w-none w-full"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={teamImg}
                alt="KushalApp Team"
                className="w-full h-[340px] sm:h-[420px] lg:h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Caption on image */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <p className="text-white font-bold text-sm sm:text-base tracking-wide">
                  Trusted by thousands across the country
                </p>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-dashed opacity-40 hidden sm:block"
              style={{ borderColor: "var(--kushal-base)" }}
            />

            {/* Floating mini badge */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-4 -left-4 sm:-left-6 z-20 px-4 py-2.5 rounded-2xl shadow-xl border border-white flex items-center gap-2"
              style={{ backgroundColor: "var(--kushal-white)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(var(--kushal-base-rgb), 0.12)",
                  color: "var(--kushal-base)",
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <p
                  className="text-sm font-black leading-none"
                  style={{ color: "var(--kushal-heading)" }}
                >
                  10K+
                </p>
                <p
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--kushal-text)" }}
                >
                  Happy clients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Narrative Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(var(--kushal-base-rgb), 0.1)",
                color: "var(--kushal-base)",
              }}
            >
              <Sparkles size={14} /> Our Story
            </span>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
              style={{ color: "var(--kushal-heading)" }}
            >
              Built for{" "}
              <span
                style={{
                  color: "var(--kushal-base)",
                  fontFamily: "var(--kushal-script-font)",
                }}
              >
                Service
              </span>
              , <br className="hidden sm:block" />
              Designed for{" "}
              <span
                style={{
                  color: "var(--kushal-base)",
                  fontFamily: "var(--kushal-script-font)",
                }}
              >
                People
              </span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl"
              style={{ color: "var(--kushal-text)" }}
            >
              KushalApp was born out of a simple necessity: to remove the
              friction between high-quality service providers and the people who
              need them. We believe in transparency, speed, and building a
              community where trust is the primary currency.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="group p-5 rounded-2xl border bg-white/60 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg"
                  style={{ borderColor: "rgba(var(--kushal-base-rgb), 0.12)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{
                      backgroundColor: "rgba(var(--kushal-base-rgb), 0.1)",
                      color: "var(--kushal-base)",
                    }}
                  >
                    <feature.icon size={20} />
                  </div>
                  <h4
                    className="font-black text-sm sm:text-base mb-1"
                    style={{ color: "var(--kushal-heading)" }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: "var(--kushal-text)" }}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
