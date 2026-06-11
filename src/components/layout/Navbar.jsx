import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-customers' },
    { name: 'For Providers', href: '#why-providers' },
    { name: 'App Preview', href: '#screenshots' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-purple-600/10 group-hover:scale-105 transition-all duration-300">
            <Shield className="w-5.5 h-5.5 fill-white/10" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-brand-text">
            Kushal<span className="text-primary">App</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-primary font-semibold text-[15px] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#why-providers"
            className="text-gray-700 hover:text-primary font-bold text-[15px] transition-colors duration-200"
          >
            Become a Partner
          </a>
          <a
            href="#download"
            className="primary-btn flex items-center gap-2 text-[14px] py-3.5 px-6 shadow-md shadow-purple-900/10 hover:shadow-lg"
          >
            Get App
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-brand-text" /> : <Menu className="w-6 h-6 text-brand-text" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 md:hidden border-t border-gray-100 flex flex-col ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 gap-6 h-[calc(100vh-72px)] justify-between bg-white">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-800 hover:text-primary transition-colors border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <a
              href="#why-providers"
              onClick={() => setIsOpen(false)}
              className="text-center font-bold text-gray-700 py-3.5 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              Become a Partner
            </a>
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="primary-btn text-center flex items-center justify-center gap-2 py-4 rounded-2xl"
            >
              Download App
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
