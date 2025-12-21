import React, { useState, useEffect } from "react";
import { Plus, ArrowUpRight, Layers } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  const projects = [
    { id: "PRJ-01", title: "Refinery Scaffolding", location: "Sector 4", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
    { id: "PRJ-02", title: "High-Rise Logistics", location: "Downtown Site", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1172&auto=format&fit=crop" },
    { id: "PRJ-03", title: "Safety Inspection", location: "Unit 12B", img: "https://plus.unsplash.com/premium_photo-1664300750264-1f0e461554a3?q=80&w=1170&auto=format&fit=crop" },
    { id: "PRJ-04", title: "Structural Welding", location: "Offshore Platform", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" },
    { id: "PRJ-05", title: "Warehouse Access", location: "Logistics Hub", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
    { id: "PRJ-06", title: "Heavy Machinery", location: "Plant B", img: "https://plus.unsplash.com/premium_photo-1682141670000-1504b9eda6c3?q=80&w=1172&auto=format&fit=crop" },
    { id: "PRJ-07", title: "Modular Assembly", location: "Zone 9", img: "https://uploads.audi-mediacenter.com/system/production/media/111199/images/a108daac22c54a662350a384ac4c53fb80ff76a6/A223992_web_1920.jpg" },
    { id: "PRJ-08", title: "Site Surveying", location: "Expansion Area", img: "https://images.unsplash.com/photo-1654643353343-27b4e11b10d6?w=600&auto=format&fit=crop&q=60" },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 font-sans">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <Layers size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Project Portfolio
              </span>
            </div>
            <h2 className="text-4xl font-black text-[#0c1635] uppercase tracking-tight">
              Site <span className="text-slate-400">Archives</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-mono mt-4 md:mt-0">
            TOTAL RECORDS: <span className="text-[#0c1635] font-bold">0{projects.length}</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => {
            const heightClass = ["h-52", "h-56", "h-60"][idx % 3];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.img)}
                className={`group relative ${heightClass} overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <img
                  src={item.img}
                  alt={`${item.title} - ${item.location}`}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-red-600/90 p-3 rounded-full text-white shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="absolute bottom-0 w-full p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    {item.location}
                  </p>
                  <h3 className="text-white text-sm font-bold">{item.title}</h3>
                  <div className="w-0 group-hover:w-12 h-[2px] bg-red-600 mt-2 transition-all duration-500" />
                </div>

                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-red-600/50 transition-colors pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center border-t border-slate-200 pt-8">
          <button className="text-xs font-bold text-slate-400 hover:text-[#0c1635] tracking-widest uppercase flex items-center gap-2 mx-auto group">
            <Plus size={14} className="group-hover:rotate-90 transition-transform" />
            Load More Records
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected project view"
            className="max-h-[80vh] max-w-full rounded-xl shadow-2xl"
          />
          <p className="mt-6 text-xs text-slate-300 font-mono">
            Click anywhere to close
          </p>
        </div>
      )}
    </section>
  );
}
