import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function KushalFooter() {
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Providers", href: "/providers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socials = [
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H7v3h2v9h3v-9h4.5l1-3H12V6c0-.5.5-1 1-1h3V2h-4c-2.5 0-4 1.5-4 4v2z" />
        </svg>
      ),
      href: "https://www.facebook.com/profile.php?id=61587933372141",
      label: "Facebook",
    },
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
      href: "https://www.youtube.com/@Kushal_App",
      label: "Youtube",
    },
    {
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.1c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.5-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.5-2.2-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.5 1.3-.1 1.6-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4.1.7c-.8.3-1.4.7-2 1.4-.7.6-1.1 1.2-1.4 2-.3.7-.5 1.6-.6 2.9C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.6 2.9.3.8.7 1.4 1.4 2 .6.7 1.2 1.1 2 1.4.7.3 1.6.5 2.9.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.4-.7 2-1.4.7-.6 1.1-1.2 1.4-2 .3-.7.5-1.6.6-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-.4-1.4-1.4-.6-.7-1.2-1.1-2-1.4-.7-.3-1.6-.5-2.9-.6C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4z" />
        </svg>
      ),
      href: "https://www.instagram.com/kushalserviceapp?igsh=MWZlc2Q0YTdxZnpxOA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden py-12 select-none px-4 sm:px-6 lg:px-8 border-t border-purple-950/40"
      style={{
        backgroundColor: "#120b24",
        fontFamily: "var(--kushal-font)",
      }}
    >
      {}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] rounded-full blur-[100px] opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(var(--kushal-base-rgb), 0.35) 0%, transparent 85%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1140px]">
        {}
        <div className="grid gap-8 md:grid-cols-12 items-start pb-10 border-b border-purple-950/30">
          {}
          <div className="md:col-span-5 space-y-4">
            {}
            <div className=" h-22 flex items-center justify-start overflow-hidden">
              <img
                src="/KUSHLAPP_LOGO_WHITE_COLOR_HORIZONTAL.png"
                alt="KushalApp Logo"
                className="h-full w-auto object-contain select-none pointer-events-none"
              />
            </div>

            <p
              className="text-sm font-medium leading-relaxed max-w-sm text-neutral-300/85"
              style={{ fontFamily: "var(--kushal-secondary-font)" }}
            >
              The unified, on-demand marketplace simplifying local service
              discovery, secure communication, and automated escrow payment
              milestones.
            </p>

            <div className="flex gap-2 pt-0.5">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  target="_blank"
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-8.5 h-8.5 rounded-xl flex items-center justify-center border border-purple-900/50 text-neutral-300/70 transition-colors"
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:ml-auto space-y-3">
            <h5 className="text-[11px] font-black tracking-widest uppercase text-neutral-100/60">
              Menu
            </h5>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-0.5 group text-neutral-300/80 hover:text-white transition-colors duration-150"
                    style={{ fontFamily: "var(--kushal-secondary-font)" }}
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150 text-neutral-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="md:col-span-4 md:ml-auto space-y-3">
            <h5 className="text-[11px] font-black tracking-widest uppercase text-neutral-100/60">
              Contact Details
            </h5>
            <div
              className="space-y-3 text-sm font-semibold text-neutral-300/80"
              style={{ fontFamily: "var(--kushal-secondary-font)" }}
            >
              <div className="flex items-start gap-2.5 group cursor-pointer">
                <MapPin
                  size={15}
                  className="mt-0.5 text-neutral-400 group-hover:text-white transition-colors shrink-0"
                />
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  India
                </span>
              </div>
              {}
              <div className="flex items-center gap-2.5 group cursor-pointer">
                <Mail
                  size={15}
                  className="text-neutral-400 group-hover:text-white transition-colors shrink-0"
                />
                <span className="group-hover:text-white transition-colors">
                  support@kushalapp.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="pt-6 flex justify-center items-center text-[13px] font-medium text-neutral-400/60">
          <p
            style={{ fontFamily: "var(--kushal-secondary-font)" }}
            className="text-center tracking-wide"
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
