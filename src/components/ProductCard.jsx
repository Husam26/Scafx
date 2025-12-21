import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({
  title,
  category,
  image,
  specs = {},
  id,
}) {
  return (
    <motion.div
      // Smooth entrance animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full w-full"
    >
      {/* Image Section */}
      <div className="relative h-[260px] overflow-hidden">
        {/* Animated Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e19]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Floating Badge (Top Left) */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-[#0b0e19] text-[10px] font-black px-3 py-1 rounded-full shadow-sm tracking-tighter uppercase border border-gray-200">
            REF: {id}
          </span>
        </div>

        {/* Category Badge (Bottom Left - visible on hover) */}
        <div className="absolute bottom-4 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-8 h-[1px] bg-red-600"></span>
            {category}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Small Category Label (Visible when not hovering) */}
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-2 group-hover:opacity-0 transition-opacity">
          {category}
        </p>

        <h3 className="text-2xl font-bold text-[#0b0e19] mb-6 leading-[1.1] tracking-tight group-hover:text-red-600 transition-colors">
          {title}
        </h3>

        {/* Refined Specs Grid */}
        <div className="grid grid-cols-1 gap-3 mb-8">
          {Object.entries(specs)
            .slice(0, 3)
            .map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between border-b border-gray-50 pb-2"
              >
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  {key}
                </span>
                <span className="text-xs font-semibold text-gray-800">
                  {value}
                </span>
              </div>
            ))}
        </div>

        {/* Premium Button Interaction */}
        <Link
          to={`/products/${id}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth", // "smooth" chahiye ho to change kar sakte ho
            });
          }}
          className="mt-auto group/btn relative flex items-center justify-center gap-3 bg-[#0b0e19] text-white px-6 py-4 rounded-xl text-sm font-bold overflow-hidden transition-all duration-300 active:scale-95"
        >
          {/* Button Slide Background */}
          <div className="absolute inset-0 bg-red-600 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />

          <span className="relative z-10">Technical Specifications</span>
          <ArrowRight
            size={18}
            className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Subtle Bottom Accent (Border line that glows on hover) */}
      <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}
