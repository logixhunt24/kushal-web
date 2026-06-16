import React from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Download, CheckCircle } from "lucide-react";
import mockupImg from "../assets/img/kushalapp_mockup_homescreen.jpeg";

const basicFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageFloat = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.2 },
  },
};

export default function DownloadCTA({
  bgColor = "var(--kushal-white2)",
  cardBgColor = "var(--kushal-white)",
}) {
  const values = [
    "On-Demand Booking Marketplace",
    "Encrypted Automation Framework",
    "Real-Time Provider Live Tracking",
  ];

  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.kushal.app&pcampaignid=web_share";

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 select-none px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      {}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.25) 0%, transparent 75%)`,
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(var(--kushal-primary-rgb), 0.2) 0%, transparent 75%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        {}
        <div
          className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/40 p-8 sm:p-12 lg:p-16 shadow-[0_30px_70px_-20px_rgba(var(--kushal-base-rgb),0.1)] transition-colors duration-300"
          style={{ backgroundColor: cardBgColor }}
        >
          {}
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50/50 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-center">
            {}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={basicFadeUp}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {}
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-6 border backdrop-blur-md"
                style={{
                  background: `rgba(var(--kushal-base-rgb), 0.06)`,
                  color: "var(--kushal-base)",
                  borderColor: `rgba(var(--kushal-base-rgb), 0.12)`,
                }}
              >
                <Smartphone size={13} className="animate-pulse" /> Mobile
                Experience Available
              </span>

              {}
              <h2
                className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight mb-6 leading-[1.1]"
                style={{
                  fontFamily: "var(--kushal-font)",
                  color: "var(--kushal-heading)",
                }}
              >
                Download the{" "}
                <span
                  className="block mt-1 transform -rotate-1 hover:rotate-1 transition-transform duration-300 select-none"
                  style={{
                    color: "var(--kushal-base)",
                    fontFamily: "var(--kushal-script-font)",
                  }}
                >
                  KushalApp Now!
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
                Book trusted services, manage custom timelines, and automate
                your escrow payments seamlessly. KushalApp streamlines the
                marketplace lifecycle for both home users and active
                professionals.
              </p>

              {}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-y-3 gap-x-5 mb-10 text-neutral-600 font-semibold text-xs sm:text-sm">
                {values.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <CheckCircle
                      size={15}
                      style={{ color: "var(--kushal-base)" }}
                      className="shrink-0"
                    />
                    <span
                      style={{ fontFamily: "var(--kushal-secondary-font)" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-900 text-white rounded-xl font-bold shadow-md hover:bg-black transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M5,3.14V20.86c0,0.5,0.22,0.82,0.61,0.92l10-10L5.34,2.23A1,1,0,0,0,5,3.14M16.32,12.5l3.22-1.84a1,1,0,0,0,0-1.74L16.32,7.08,15.26,11.5M5.61,1.22a1,1,0,0,1,1-.08l10.46,6L13.84,10.42M13.84,11.16l3.24,3.24-10.46,6a1,1,0,0,1-1-.08Z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                      Get it on
                    </div>
                    <div className="text-sm font-bold -mt-0.5">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageFloat}
              className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4"
            >
              {}
              <div className="absolute w-80 h-80 border border-neutral-100 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-96 h-96 border border-dashed border-neutral-200/40 rounded-full -z-10" />

              {}
              <div className="relative w-[250px] h-[520px] bg-neutral-950 rounded-[3rem] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-[5px] border-neutral-800 ring-1 ring-neutral-700/50">
                {}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-4.5 bg-neutral-950 rounded-full z-30 flex items-center justify-center border border-neutral-900/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900/80 ml-auto mr-2" />
                </div>

                {}
                <div className="w-full h-full rounded-[2.6rem] overflow-hidden relative z-20 bg-neutral-900 shadow-inner">
                  {}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />

                  <img
                    src={mockupImg}
                    alt="KushalApp Mobile Homescreen Interface"
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                </div>
              </div>

              {}
              <div
                className="hidden xl:flex absolute bottom-4 right-[-30px] p-3.5 border border-neutral-200/50 rounded-2xl shadow-xl flex-col items-center gap-1.5 backdrop-blur-md transition-transform hover:scale-105"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.96)" }}
              >
                <div
                  className="p-2 rounded-xl flex items-center justify-center border border-neutral-100"
                  style={{ backgroundColor: "var(--kushal-white3)" }}
                >
                  {}
                  <QRCodeSVG
                    value={playStoreUrl}
                    size={80}
                    level="M"
                    fgColor="var(--kushal-heading)"
                    bgColor="transparent"
                  />
                </div>
                <span className="text-[9px] font-black text-neutral-400 uppercase tracking-wider inline-flex items-center gap-1">
                  <Download size={9} /> Scan to Install
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
