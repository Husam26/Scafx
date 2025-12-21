"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, Globe, Lock, UserCheck, FileText } from "lucide-react";

const sections = [
  { id: "purpose", title: "1. Purpose", icon: <FileText size={18} /> },
  { id: "collection", title: "2. Information", icon: <Globe size={18} /> },
  { id: "usage", title: "3. Usage", icon: <UserCheck size={18} /> },
  { id: "security", title: "4. Security", icon: <Lock size={18} /> },
  { id: "rights", title: "5. Your Rights", icon: <ShieldCheck size={18} /> },
  { id: "contact", title: "6. Contact", icon: <Mail size={18} /> },
];

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans text-slate-900">
      {/* Hero Section - Minimalist & Bold */}
      <div className="relative overflow-hidden bg-[#0c1635] py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Legal Transparency
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
            How ScafXS Engineering handles your data with integrity and advanced security.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation - The "Smart" Element */}
          <aside className="lg:w-1/4 sticky top-10 h-fit hidden lg:block">
            <nav className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Jump to Section</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-[#0c1635] hover:bg-slate-100 rounded-xl transition-all duration-200 group"
                >
                  <span className="text-slate-300 group-hover:text-blue-600 transition-colors">
                    {section.icon}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-3/4 space-y-12"
          >
            <motion.section variants={itemVariants} className="prose prose-slate">
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                At <strong className="text-[#0c1635] font-semibold">ScafXS Engineering</strong>, we prioritize your privacy. 
                This Policy outlines our commitment to protecting the personal data of our users 
                within the regulatory framework of the United Arab Emirates.
              </p>
            </motion.section>

            {/* Smart Section Card */}
            {[
              {
                id: "purpose",
                title: "Purpose of This Policy",
                content: "This Policy helps you understand how we handle personal data collected through our website, inquiries, quotations, and support services. By using our website, you consent to this Policy.",
              },
              {
                id: "collection",
                title: "Information We Collect",
                list: [
                  "Personal details such as name, email address, and phone number",
                  "Business or project-related information you submit",
                  "Technical data collected via cookies and advanced analytics tools",
                ],
              },
              {
                id: "usage",
                title: "How We Use Your Information",
                list: [
                  "To respond to inquiries and quotation requests",
                  "To provide engineering support and services",
                  "To improve our website and customer experience",
                ],
              },
              {
                id: "security",
                title: "Data Protection & Security",
                content: "We implement enterprise-grade technical and organizational safeguards to protect your personal data. Our systems are monitored to prevent unauthorized access and ensure data integrity.",
              },
              {
                id: "rights",
                title: "Your Rights",
                content: "As a user, you hold the right to request access, correction, or deletion of your personal data. We are committed to honoring these requests in a timely manner.",
              },
            ].map((item) => (
              <motion.section 
                key={item.id} 
                id={item.id} 
                variants={itemVariants}
                className="group border-l-2 border-slate-100 hover:border-blue-600 pl-8 transition-colors duration-300"
              >
                <h2 className="text-2xl font-bold text-[#0c1635] mb-4 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h2>
                {item.content && <p className="text-slate-600 leading-relaxed">{item.content}</p>}
                {item.list && (
                  <ul className="space-y-3 mt-4">
                    {item.list.map((li, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}

            {/* Contact Card */}
            <motion.section 
              id="contact" 
              variants={itemVariants}
              className="bg-[#0c1635] rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-slate-300 mb-6 font-light">
                  If you have questions regarding this Privacy Policy or our data practices, 
                  our compliance team is here to help.
                </p>
                <a 
                  href="mailto:info@scafxs.com" 
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm"
                >
                  <Mail size={20} className="text-blue-400" />
                  <span className="font-medium text-white">info@scafxs.com</span>
                </a>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                <ShieldCheck size={200} />
              </div>
            </motion.section>

            <footer className="pt-10 border-t border-slate-200">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                Last Updated: 06 December 2024 • © ScafXS Engineering
              </p>
            </footer>
          </motion.main>
        </div>
      </div>
    </div>
  );
}