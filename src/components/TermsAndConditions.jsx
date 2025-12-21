"use client";

import { motion } from "framer-motion";
import { 
  Scale, 
  Handshake, 
  ShieldAlert, 
  Gavel, 
  Copyright, 
  Package, 
  Mail,
  ChevronRight 
} from "lucide-react";

const sections = [
  { id: "overview", title: "Overview", icon: <Handshake size={20} /> },
  { id: "usage", title: "Website Usage", icon: <Scale size={20} /> },
  { id: "products", title: "Products & Services", icon: <Package size={20} /> },
  { id: "ip", title: "Intellectual Property", icon: <Copyright size={20} /> },
  { id: "liability", title: "Limitation of Liability", icon: <ShieldAlert size={20} /> },
  { id: "law", title: "Governing Law", icon: <Gavel size={20} /> },
];

export default function TermsAndConditions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-800">
      {/* --- Premium Engineering Header --- */}
      <div className="relative bg-[#0c1635] py-28 px-6 overflow-hidden">
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold tracking-[0.2em] text-xs uppercase">
            <div className="w-8 h-[1px] bg-blue-400"></div>
            Legal Framework
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            Terms <span className="text-blue-500">&</span> <br /> 
            Conditions
          </h1>
          <p className="mt-8 text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
            Please review the governing rules and operational standards for interacting with 
            <span className="text-white font-medium"> ScafXS Engineering’s</span> digital infrastructure and services.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- Navigation Sidebar --- */}
          <aside className="lg:w-1/3 order-2 lg:order-1">
            <div className="sticky top-10 space-y-4 pt-20">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-bold text-[#0c1635] uppercase tracking-wider mb-6">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center justify-between group p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-3 text-slate-500 group-hover:text-blue-600 font-medium transition-colors">
                        <span className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {section.icon}
                        </span>
                        <span className="text-sm">{section.title}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Support Micro-card */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-900/20">
                <h4 className="font-bold mb-2">Need Clarification?</h4>
                <p className="text-blue-100 text-xs leading-relaxed mb-4">
                  Our legal and support teams are available for any technical or contractual inquiries.
                </p>
                <a href="mailto:info@scafxs.com" className="text-xs font-bold underline decoration-blue-300 underline-offset-4 hover:text-white transition-colors">
                  Contact Compliance →
                </a>
              </div>
            </div>
          </aside>

          {/* --- Main Legal Content --- */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 order-1 lg:order-2 space-y-6 pt-20"
          >
            {[
              {
                id: "overview",
                title: "Overview",
                content: "These Terms govern your use of the ScafXS Engineering website and services. By accessing this website, you agree to comply with these Terms. These conditions represent a legally binding agreement between the user and ScafXS Engineering. If you do not agree to these terms, please refrain from using the platform.",
              },
              {
                id: "usage",
                title: "Use of Website",
                content: "Users are granted a non-exclusive, non-transferable, revocable license to access our platform strictly in accordance with these terms. You agree to use this website for lawful purposes only and not to engage in any activity that may harm ScafXS Engineering, its infrastructure, users, or third-party affiliates.",
              },
              {
                id: "products",
                title: "Products & Engineering Services",
                content: "All engineering solutions, scaffolding designs, and technical products provided by ScafXS are subject to availability and may be modified or discontinued without notice. Any formal quotations provided via the web portal are non-binding budgetary estimates unless converted into a signed service agreement.",
              },
              {
                id: "ip",
                title: "Intellectual Property Rights",
                content: "The ScafXS Engineering name, logo, technical blueprints, and website content are the exclusive property of ScafXS Engineering. Unauthorized reproduction, redistribution, or data-mining of our proprietary designs and text is strictly prohibited under international copyright laws.",
              },
              {
                id: "liability",
                title: "Limitation of Liability",
                content: "To the maximum extent permitted by law, ScafXS Engineering shall not be liable for any direct, indirect, or consequential damages (including loss of profits or project delays) arising from the use or inability to use the information provided on this website.",
              },
              {
                id: "law",
                title: "Governing Law & Jurisdiction",
                content: "These Terms are governed by and construed in accordance with the federal laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the UAE Courts.",
              },
            ].map((item) => (
              <motion.section 
                key={item.id} 
                id={item.id} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    {sections.find(s => s.id === item.id)?.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#0c1635]">
                    {item.title}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                  {item.content}
                </p>
              </motion.section>
            ))}

            {/* --- Footer Status --- */}
            <div className="pt-12 pb-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Document Active: 2025 Release
              </div>
              <p className="text-xs text-slate-400">
                Last Updated: 18 December 2025 • ScafXS Engineering Legal Dept.
              </p>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}