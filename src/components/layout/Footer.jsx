import React from 'react';
import { Shield, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 border-t border-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-purple-600/20 group-hover:scale-105 transition-all duration-300">
                <Shield className="w-5 h-5 fill-purple-200/30" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Kushal<span className="text-primary-light">App</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Connecting you with top-rated, background-checked local professionals for cleaning, handyperson, beauty, tech help, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-400" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-400" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-400" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.093 1.503 4.218 4.218.044.968.052 1.322.052 3.752 0 2.43-.008 2.784-.052 3.752-.124 2.73-1.503 4.093-4.218 4.218-.968.044-1.322.052-3.752.052-2.43 0-2.784-.008-3.752-.052-2.73-.124-4.093-1.503-4.218-4.218-.044-.968-.052-1.322-.052-3.752 0-2.43.008-2.784.052-3.752.124-2.73 1.503-4.093 4.218-4.218.968-.044 1.322-.052 3.752-.052zm-1.04 14.887c-2.695 0-4.887-2.192-4.887-4.887s2.192-4.887 4.887-4.887 4.887 2.192 4.887 4.887-2.192 4.887-4.887 4.887zm0-8.232c-1.848 0-3.345 1.497-3.345 3.345 0 1.848 1.497 3.345 3.345 3.345 1.848 0 3.345-1.497 3.345-3.345 0-1.848-1.497-3.345-3.345-3.345zm4.869-1.282c0-.666-.54-1.206-1.206-1.206-.666 0-1.206.54-1.206 1.206 0 .666.54 1.206 1.206 1.206.666 0 1.206-.54 1.206-1.206z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 hover:bg-primary hover:text-white transition-all flex items-center justify-center text-gray-400" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Popular Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="hover:text-primary-light text-[15px] transition-colors">Home Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-light text-[15px] transition-colors">AC Repair & Servicing</a></li>
              <li><a href="#services" className="hover:text-primary-light text-[15px] transition-colors">Plumbing Maintenance</a></li>
              <li><a href="#services" className="hover:text-primary-light text-[15px] transition-colors">Smart Home Tech Setup</a></li>
              <li><a href="#services" className="hover:text-primary-light text-[15px] transition-colors">Women's Salon Service</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-primary-light text-[15px] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-light text-[15px] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-light text-[15px] transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-primary-light text-[15px] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary-light text-[15px] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest service offers, tips, and updates direct to your inbox.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-900 text-white pl-4 pr-12 py-3 rounded-xl border border-gray-800 focus:outline-none focus:border-primary-light text-sm transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-10 bg-primary hover:bg-primary-light text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} KushalApp Technologies Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
