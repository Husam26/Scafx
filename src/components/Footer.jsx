"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b1221] text-white pt-20 overflow-hidden font-sans">
      {/* --- Aesthetic Background Elements --- */}
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b1221] via-red-600 to-[#0b1221]"></div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* 1. Brand & Value Prop (Span 4 columns) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6 text-white">
                SCAF<span className="text-red-600">XS</span>
              </h2>
              <p className="text-gray-400 text-sm leading-7 mb-8 pr-4 border-l-2 border-red-600/30 pl-4">
                designs and delivers certified aluminum access systems
                engineered for extreme industrial environments, setting new
                benchmarks in safety, precision, and structural performance.
              </p>

              {/* Premium Social Buttons */}
              <div className="flex space-x-3">
                {[
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaLinkedinIn, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-sm bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 2. Solutions (Span 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 mb-6">
              Solutions
            </h3>
            <ul className="space-y-4">
              {[
                "Industrial Access",
                "Mobile Scaffolding",
                "Custom Fabrication",
                "Safety Inspections",
              ].map((item, i) => (
                <li key={i}>
                  <div className="group flex items-center text-gray-400 text-sm cursor-default">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company (Span 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 mb-6">
              Company
            </h3>

            <ul className="space-y-4">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Projects", path: "/gallery" }, // or "/gallery"
                { label: "Our Products", path: "/products" },
                { label: "Contact Support", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1 h-1 bg-red-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info (Span 4 columns) */}
          <div className="md:col-span-4 bg-gray-900/50 p-6 border border-gray-800 rounded-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">
              Headquarters
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="p-2 bg-gray-800 rounded text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">
                  Al Bahya Al Jurf , UAE
                  <br />
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="p-2 bg-gray-800 rounded text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="p-2 bg-gray-800 rounded text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <span className="group-hover:text-white transition-colors">
                  sales@scafxs.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} ScafXS Industries.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-600 text-xs hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)} // ← simple scroll to top
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-600 text-xs hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)} // ← simple scroll to top
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
              <ShieldCheck size={14} className="text-green-500" />
              <span className="text-[10px] text-gray-300 font-medium tracking-wide">
                ENGINEERED FOR SAFETY
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-red-600 text-white flex items-center justify-center hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-red-600/20"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
