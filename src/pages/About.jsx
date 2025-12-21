import React from "react";
import GulfLogisticsNetwork from "../components/GulfLogisticsNetwork";

export default function About() {
  return (
    <div className="bg-white text-slate-700 min-h-screen font-sans selection:bg-red-500/20 selection:text-red-700">
      
      {/* 1. HERO */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-[#0c1635]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
            alt="Industrial Construction Scaffolding"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-[#0c1635]/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span className="text-xs font-mono tracking-widest uppercase text-white">
              Est. 2024 • ScafXS Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering Safe <br />
            Scaffolding Systems.
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white leading-relaxed opacity-90">
            ScafXS is a premium industrial scaffolding company delivering
            certified aluminum access systems for construction, infrastructure,
            oil & gas, and heavy engineering projects worldwide.
          </p>
        </div>
      </section>

      {/* 2. MISSION */}
      <section className="py-24 px-6 relative bg-gray-200">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-red-600 font-mono text-sm tracking-widest mb-4">
                01 / OUR MISSION
              </h2>

              <h3 className="text-4xl font-semibold text-[#0c1635] mb-8">
                Precision-engineered access solutions for modern construction.
              </h3>

              <div className="space-y-8 text-gray-600 leading-relaxed">
                <p>
                  At ScafXS, we design and manufacture advanced scaffolding and
                  access systems focused on safety, durability, and engineering
                  accuracy.
                </p>
                <p>
                  Every system is digitally modeled, load-tested, and
                  manufactured using aerospace-grade aluminum.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Material", value: "7075-T6 Aluminum" },
                  { label: "Compliance", value: "ISO 9001:2015" },
                  { label: "Safety Factor", value: "4:1 Ratio" },
                  { label: "Support", value: "24/7 On-Site Assistance" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-gray-200 pl-4 hover:border-red-500 transition-colors"
                  >
                    <p className="text-xs text-gray-400 font-mono uppercase mb-1">
                      {stat.label}
                    </p>
                    <p className="text-lg text-[#0c1635] font-medium">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"
                alt="Industrial Scaffolding"
                className="w-full h-[600px] object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h2 className="text-red-600 font-mono text-sm tracking-widest mb-2">
              02 / CORE VALUES
            </h2>
            <h3 className="text-3xl font-bold text-[#0c1635]">
              Engineered for Excellence
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Safety",
                desc: "Every system is tested beyond standards.",
              },
              {
                title: "Innovation",
                desc: "Lightweight systems engineered using 3D tools.",
              },
              {
                title: "Reliability",
                desc: "Dependable delivery and regional support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-gray-200 rounded-sm hover:border-red-500/40 shadow-sm hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-[#0c1635] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GULF LOGISTICS NETWORK (NEW) */}
      <GulfLogisticsNetwork />

    </div>
  );
}
