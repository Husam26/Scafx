"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Layers, ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

// Animation Variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after navigation
  };
  return (
    <div className="bg-white font-sans overflow-hidden">
      <Hero />

      {/* --- Premium Stats Strip --- */}
      <section className="relative bg-[#0c1635] py-12 border-b border-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-center items-center gap-12 text-center"
          >
            {[
              { value: "15+", label: "Years of Engineering Excellence" },
              { value: "500+", label: "Industrial Systems Delivered" },
              { value: "100%", label: "Certified Safety Compliance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-default"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white transition-colors duration-500 group-hover:text-red-500">
                  {stat.value}
                </h3>
                <div className="h-1 w-10 bg-red-600 mx-auto my-3 rounded-full group-hover:w-16 transition-all duration-500" />
                <p className="text-gray-300 text-sm md:text-base font-semibold uppercase tracking-[0.15em] whitespace-nowrap">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Why Choose ScafXS (Premium Grid) --- */}
      <section className="relative py-32 px-6 bg-gray-50">
        {/* Technical Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0c1635 1px, transparent 1px), linear-gradient(90deg, #0c1635 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
              The ScafXS Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c1635] leading-tight mb-6">
              Engineering{" "}
              <span className="text-gray-400 italic font-serif">Beyond</span>{" "}
              Standards
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don’t just manufacture aluminum systems — we design certified
              access solutions engineered for extreme loads, complex geometries,
              and mission-critical industrial environments worldwide.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Safety-First Engineering",
                desc: "Designed to exceed ISO & EN certifications with self-locking mechanisms that eliminate on-site risk.",
              },
              {
                icon: Layers,
                title: "Aerospace-Grade Aluminum",
                desc: "Built using T6-6061 alloy, delivering steel-level strength with unmatched portability and corrosion resistance.",
              },
              {
                icon: Ruler,
                title: "Precision Modular Systems",
                desc: "Engineered to millimeter-accurate specifications for refineries, plants, and complex industrial layouts.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white p-1 hover:z-20 transition-all duration-300"
              >
                <div className="relative h-full bg-white p-8 md:p-10 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c1635] to-[#1a2b5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-red-600 transition-colors duration-500" />

                  {/* Icon */}
                  <div className="relative w-14 h-14 mb-8 flex items-center justify-center rounded-lg bg-gray-50 text-[#0c1635] group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#0c1635] mb-4 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.desc}
                    </p>

                    <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white transition-all duration-500 delay-100">
                      <span>Technical Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Modern CTA Section --- */}
      <section className="relative py-28 overflow-hidden">
        {/* Dotted Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1635]/100 via-[#0c1635]/70 to-[#0c1635]/90"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Elevate Safety?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Partner with ScafXS for certified, future-ready scaffolding systems
            trusted across industrial, infrastructure, and energy projects
            worldwide.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleClick}
              className="group relative inline-flex w-fit px-6 py-3 bg-red-600 text-white text-sm md:text-base font-bold uppercase tracking-wide overflow-hidden transition-all hover:bg-red-700"
            >
              <span className="relative z-10 group-hover:mr-2 transition-all">
                Request Quote
              </span>
              <span className="absolute right-0 top-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
