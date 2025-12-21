"use client";

import { motion } from "framer-motion";
import { FileText, ShieldCheck, Truck, Globe2, Zap } from "lucide-react";

const features = [
  {
    title: "Customs Documentation",
    desc: "Complete cross-border compliance handled centrally from our Ajman headquarters.",
    icon: <FileText className="text-blue-500" size={24} />,
  },
  {
    title: "Regional Warranty",
    desc: "Unified after-sales support across the Gulf region, ensuring zero project downtime.",
    icon: <ShieldCheck className="text-blue-500" size={24} />,
  },
  {
    title: "Freight Consolidation",
    desc: "Reduced lead times through optimized logistics routing and bulk freight handling.",
    icon: <Truck className="text-blue-500" size={24} />,
  },
];

export default function GulfLogisticsNetwork() {
  return (
    <section className="bg-[#0e1b42]/85 py-24 px-6 overflow-hidden relative">
      
      {/* Softer Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Globe2 size={14} />
            GCC Distribution Network
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Seamless <span className="text-blue-400">Gulf Logistics</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl text-lg leading-relaxed"
          >
            Connecting our Ajman industrial hub to the entire GCC region with
            centralized engineering, logistics, and compliance support.
          </motion.p>
        </div>

        {/* Map Section (Clean – No Points) */}
        <div className="relative max-w-5xl mx-auto aspect-[16/9] mb-24">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b1535]">
            
            <img
              src="/gulf-map.png"
              alt="Gulf Region Coverage Map"
              className="w-full h-full object-cover opacity-55 contrast-110"
            />

            {/* Soft Overlay Grid */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(#60a5fa 0.5px, transparent 0.5px)",
                backgroundSize: "26px 26px",
              }}
            ></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-400/40 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Status */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">
              Network Status:
              <span className="text-green-400 ml-1">Active</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
