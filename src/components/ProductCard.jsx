import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ProductCard({ title, category, image, specs, id }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg border hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col w-[280px] min-h-[470px]">
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-md">
          {id}
        </span>
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-[#0b0e19]">
        <p className="text-[11px] font-bold text-red-600 uppercase tracking-widest">
          {category}
        </p>

        <h3 className="text-xl font-extrabold mt-1 mb-5 leading-snug group-hover:text-red-600 transition-colors">
          {title}
        </h3>

        <ul className="mb-6 text-sm text-gray-700 space-y-2">
          <li>
            <CheckCircle size={14} className="inline text-red-600 mr-2" />
            Material: {specs.material}
          </li>
          <li>
            <CheckCircle size={14} className="inline text-red-600 mr-2" />
            Load: {specs.load}
          </li>
          {specs.height && (
            <li>
              <CheckCircle size={14} className="inline text-red-600 mr-2" />
              Height: {specs.height}
            </li>
          )}
        </ul>

        <button className="mt-auto flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#0b0e19] transition-all duration-300">
          View Specs <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
