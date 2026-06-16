import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, Quote, CheckCircle2 } from "lucide-react";

// Animation configurations
const textFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CONFIG = {
  // Row 1 Testimonials: Focused on Users & Customers (Moves Left)
  row1: [
    {
      id: 1,
      name: "Anjali Sharma",
      role: "Regular KushalApp Customer",
      rating: 4.9,
      text: "Finding a verified local electrician on KushalApp was seamless. I loved tracking their arrival live on the map, and the transparent ratings made making an informed choice so simple!",
      initials: "AS",
      badge: "Verified User",
    },
    {
      id: 2,
      name: "Rohan Malhotra",
      role: "Homeowner",
      rating: 4.8,
      text: "The sheer variety of domestic and digital service categories here is incredible. Booking takes just a few taps, and knowing my payment sits securely in escrow gives total peace of mind.",
      initials: "RM",
      badge: "Verified User",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "App User",
      rating: 4.7,
      text: "Fast scheduling, transparent reviews, and zero hidden costs. KushalApp completely eliminates the headache of searching for reliable, premium local assistance.",
      initials: "PP",
      badge: "Verified User",
    },
  ],
  // Row 2 Testimonials: Focused on Service Providers & Professionals (Moves Right)
  row2: [
    {
      id: 4,
      name: "Amit Kumar",
      role: "Verified Professional Plumber",
      rating: 4.9,
      text: "KushalApp provided an amazing platform to showcase my business skills and build a rock-solid reputation. My incoming appointments are fully optimized, leaving zero empty calendar slots.",
      initials: "AK",
      badge: "Top Provider",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Digital Freelancer & Expert",
      rating: 4.8,
      text: "The guaranteed payout system is perfect. I update my service milestone logs right inside the app, and secure payments clear into my wallet without any delays or risk.",
      initials: "VS",
      badge: "Top Provider",
    },
    {
      id: 6,
      name: "Deepak Raj",
      role: "App Appliance Technician",
      rating: 4.7,
      text: "Onboarding verification was strict, but it ensures premium clients. I've easily expanded my local reach, maximized my working hours, and grown my business revenue faster than ever.",
      initials: "DR",
      badge: "Top Provider",
    },
  ],
};

export default function KushalTestimonials() {
  // Triple the arrays to guarantee seamless looping transitions with no blank spots
  const duplicatedRow1 = [...CONFIG.row1, ...CONFIG.row1, ...CONFIG.row1];
  const duplicatedRow2 = [...CONFIG.row2, ...CONFIG.row2, ...CONFIG.row2];

  // Helper component to render stars precisely
  const RenderStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex items-center gap-1 my-2">
        <span className="text-xs font-bold mr-1 text-amber-400">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            className={`${i < fullStars ? "fill-amber-400 text-amber-400" : "text-purple-950"} shrink-0`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden w-full select-none"
      style={{
        backgroundColor: "var(--kushal-white2)",
        paddingTop: "var(--section-space)",
        paddingBottom: "var(--section-space)",
        fontFamily: "var(--kushal-font)",
      }}
    >
      {/* Ambient Radial Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.18) 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.18) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* ========================================================
           CENTERED HEADER CONTENT ROW (EXACT KUSHALAPP STYLE)
           ======================================================== */}
        <div
          className="px-4 sm:px-6 lg:px-8 mx-auto"
          style={{ maxWidth: "var(--container-width)" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textFadeUpVariants}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            {/* Tag Badge Pill */}
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md border transition-transform hover:scale-105"
              style={{
                background: `rgba(var(--kushal-base-rgb), 0.08)`,
                color: "var(--kushal-base)",
                borderColor: `rgba(var(--kushal-base-rgb), 0.15)`,
              }}
            >
              <MessageSquare size={13} className="animate-pulse" />
              User Reviews
            </span>

            {/* Unified Title Block */}
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
              style={{
                fontFamily: "var(--kushal-font)",
                color: "var(--kushal-heading)",
              }}
            >
              What Our Community{" "}
              <span
                className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
                style={{
                  color: "var(--kushal-base)",
                  fontFamily: "var(--kushal-script-font)",
                }}
              >
                Says About Us
              </span>
            </h2>

            {/* Centered Descriptive Blurb */}
            <p
              className="text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--kushal-secondary-font)",
                color: "var(--kushal-text)",
              }}
            >
              Real experiences from verified users and service providers
              navigating our ecosystem daily. See how KushalApp streamlines
              growth and convenience.
            </p>
          </motion.div>
        </div>

        {/* ========================================================
           ROW 1: CONTINUOUSLY MOVING LEFT (Customers / Users)
           ======================================================== */}
        <div className="relative w-full overflow-hidden py-4 flex before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-[var(--kushal-white2)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-[var(--kushal-white2)] after:to-transparent">
          <motion.div
            className="flex gap-6 shrink-0 px-4"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 32,
              repeat: Infinity,
            }}
            whileHover={{ transition: { playState: "paused" } }}
          >
            {duplicatedRow1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[360px] sm:w-[430px] shrink-0 p-6 sm:p-7 flex flex-col justify-between border relative group transition-all duration-300 shadow-xl border-purple-950/40"
                style={{
                  borderRadius: "var(--kushal-radius)",
                  backgroundColor: "#140E24", // Dark Purple Theme Matched Card Base
                }}
              >
                <div>
                  {/* Testimonial Author Info block */}
                  <div className="flex items-center gap-4 pb-4 border-b border-purple-900/30">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white select-none border border-purple-800/30"
                      style={{ backgroundColor: "var(--kushal-base)" }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm !text-white tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-purple-300/70 font-medium">
                        {item.role}
                      </p>
                    </div>
                    <span className="ml-auto text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm bg-purple-500/10 text-purple-300 border border-purple-500/20 self-start flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-emerald-400" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Rating Stars Layout row */}
                  <RenderStars rating={item.rating} />

                  {/* Testimonial body content */}
                  <p className="text-sm leading-relaxed text-purple-100/85 font-medium mt-3">
                    "{item.text}"
                  </p>
                </div>

                {/* Accent glow strip on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-[85%] transition-all duration-300 rounded-full shadow-[0_0_12px_rgba(var(--kushal-base-rgb),0.6)]"
                  style={{ backgroundColor: "var(--kushal-base)" }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ========================================================
           ROW 2: CONTINUOUSLY MOVING RIGHT (Providers / Experts)
           ======================================================== */}
        <div className="relative w-full overflow-hidden py-4 mt-5 flex before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-[var(--kushal-white2)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-[var(--kushal-white2)] after:to-transparent">
          <motion.div
            className="flex gap-6 shrink-0 px-4"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            whileHover={{ transition: { playState: "paused" } }}
          >
            {duplicatedRow2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[360px] sm:w-[430px] shrink-0 p-6 sm:p-7 flex flex-col justify-between border relative group transition-all duration-300 shadow-xl border-purple-950/40"
                style={{
                  borderRadius: "var(--kushal-radius)",
                  backgroundColor: "#140E24", // Dark Purple Theme Matched Card Base
                }}
              >
                <div>
                  {/* Testimonial Author Info block */}
                  <div className="flex items-center gap-4 pb-4 border-b border-purple-900/30">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-purple-950 select-none border border-purple-300/20 bg-purple-100">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm !text-white tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-purple-300/70 font-medium">
                        {item.role}
                      </p>
                    </div>
                    <span className="ml-auto text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-sm bg-purple-400/10 text-purple-300 border border-purple-400/20 self-start flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-amber-400" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Rating Stars Layout row */}
                  <RenderStars rating={item.rating} />

                  {/* Testimonial body content */}
                  <p className="text-sm leading-relaxed text-purple-100/85 font-medium mt-3">
                    "{item.text}"
                  </p>
                </div>

                {/* Accent glow strip on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-[85%] transition-all duration-300 rounded-full shadow-[0_0_12px_rgba(var(--kushal-base-rgb),0.6)]"
                  style={{ backgroundColor: "var(--kushal-base)" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
