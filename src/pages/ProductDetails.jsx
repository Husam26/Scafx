import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Send,
  CheckCircle2,
  Cpu,
  Box,
} from "lucide-react";
import productsData from "../data/ProductData.jsx";
import { generateDatasheet } from "../utils/generateDatasheet.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState("specs");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-mono tracking-tighter">
        [ ERROR: PRODUCT_NOT_FOUND ]
      </div>
    );
  }

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-red-100">
      {/* Subtle Technical Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0c1635 1px, transparent 1px)`,
          size: "30px 30px",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">
          <span className="hover:text-red-600 cursor-pointer">Catalog</span>
          <ChevronRight size={12} />
          <span className="text-[#0c1635] font-bold">{product.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="relative bg-white border border-slate-200 rounded-xl p-4 shadow-2xl shadow-slate-200/50 group overflow-hidden">
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-[#0c1635] text-white text-[10px] font-mono px-3 py-1 uppercase tracking-[0.2em]">
                  Premium Grade
                </span>
              </div>
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={product.image}
                alt={product.title}
                className="w-full h-[600px] object-contain rounded-lg"
              />
            </div>

            {/* Technical Metadata Footer */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-1 bg-slate-200 rounded-full overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: i * 0.2, duration: 1 }}
                    className="h-full bg-red-600"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: DETAILS SECTION */}
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeIn}
                className="text-5xl font-black text-[#0c1635] mb-6 tracking-tight uppercase"
              >
                {product.title}
              </motion.h1>

              <motion.div variants={fadeIn} className="relative mb-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
                <p className="text-gray-600 text-lg leading-relaxed pl-6 italic">
                  {product.description}
                </p>
              </motion.div>

              {/* TABS CONTROLLER */}
              <div className="mb-8">
                <div className="flex gap-8 border-b border-slate-200 mb-8">
                  {["specs", "dimensions"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative pb-4 text-xs font-mono uppercase tracking-[0.2em] transition-all ${
                        activeTab === tab
                          ? "text-red-600 font-bold"
                          : "text-gray-400 hover:text-[#0c1635]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {tab === "specs" ? (
                          <Cpu size={14} />
                        ) : (
                          <Box size={14} />
                        )}
                        {tab}
                      </span>
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    <table className="w-full text-left">
                      <tbody>
                        {Object.entries(
                          activeTab === "specs"
                            ? product.specs
                            : product.dimensions
                        ).map(([key, value], index) => (
                          <tr
                            key={key}
                            className={`group transition-colors ${
                              index % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                            } hover:bg-red-50/30`}
                          >
                            <td className="py-4 px-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest border-r border-slate-100">
                              {key}
                            </td>
                            <td className="py-4 px-6 font-bold text-[#0c1635] text-sm">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </AnimatePresence>
                {/* ENGINEERING NOTE */}
                <motion.div
                  variants={fadeIn}
                  className="mt-6 p-4 bg-slate-50 border-l-4 border-red-600 rounded-md"
                >
                  <p className="text-xs font-mono text-slate-600 leading-relaxed">
                    <span className="font-bold text-[#0c1635] uppercase tracking-widest">
                      Engineering Note:
                    </span>{" "}
                    For precise dimensions, load ratings, and available
                    configurations, please contact our engineering team.
                    Specifications may vary based on project requirements.
                  </p>
                </motion.div>
              </div>

              {/* KEY FEATURES */}
              <motion.div variants={fadeIn} className="mb-12">
                <h3 className="text-[10px] font-mono font-bold uppercase text-gray-400 mb-6 tracking-[0.3em] flex items-center gap-2">
                  <div className="w-8 h-px bg-gray-300" /> Engineering
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((f, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-red-600 shrink-0"
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CALL TO ACTION */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={handleClick}
                  className="group relative flex-1 bg-[#0c1635] text-white py-5 rounded-lg font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-red-600 shadow-xl shadow-slate-900/20"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={18} /> Request Technical Quote
                  </span>
                </button>

                <button
                  onClick={() => generateDatasheet(product)}
                  className="group flex-1 border-2 border-[#0c1635] text-[#0c1635] py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-[#0c1635] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <FileText size={18} className="group-hover:animate-bounce" />
                  Download Datasheet
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
