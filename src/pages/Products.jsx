// pages/Products.jsx
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Scaffolding", "Ladders", "Access", "Safety"];

  const productList = [
    {
      id: "SC-101",
      title: "ProStep Aluminium Ladder",
      category: "Ladders",
      image: "https://images.pexels.com/photos/30446403/pexels-photo-30446403.jpeg",
      specs: { material: "Alloy 6061", load: "150 kg", height: "2m – 6m", cert: "ISO 9001" }
    },
    {
      id: "SC-204",
      title: "Mobile Scaffolding Tower",
      category: "Scaffolding",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmJPGXZmh4tifObhC37uUOb3frDK27kyEji4thjiGcACxz_sMJTlHcWV41EzHNlO4EXphNE7e",
      specs: { material: "Galvanized Steel", load: "450 kg", height: "12m Max", cert: "OSHA Approved" }
    },
    {
      id: "SF-900",
      title: "Safety Harness Kit",
      category: "Safety",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuxQaquuQijx9Ryhoy-SLqcoSl5yLaPrPwch2uNUSZ0sBv6upfqz2Dr05W507_FAdkS3dkNXe2",
      specs: { material: "Polyester Web", load: "140 kg", cert: "EN 361" }
    },
    {
      id: "SC-305",
      title: "Cuplock System",
      category: "Scaffolding",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8XbPBSF_-GCXVOe5j1GHF8KsG5xVr8dBeA&s",
      specs: { material: "High-Tensile Steel", load: "Heavy Duty", height: "Modular" }
    },
    {
      id: "AC-112",
      title: "Industrial Platform",
      category: "Access",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
      specs: { material: "Fiberglass", load: "150 kg", height: "Adjustable" }
    },
    {
      id: "CS-001",
      title: "Custom Access Bridge",
      category: "Access",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80",
      specs: { material: "Custom Alloy", load: "Variable", cert: "Project Dependent" }
    }
  ];

  const filtered = activeTab === "All" ? productList : productList.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#f1f2f5] text-black min-h-screen">

      {/* Header */}
      <header className="py-28 text-center bg-gradient-to-br from-[#1e2237] to-[#0b0e19] text-white relative">
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide relative z-10">
          Our <span className="text-red-600">Product Range</span>
        </h1>
        <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-base sm:text-lg relative z-10">
          Industrial access, scaffolding & safety products engineered for global
          compliance & extreme environments.
        </p>
      </header>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-12 z-[10] relative px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full border text-sm font-medium transition 
              ${activeTab === cat 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 pb-32">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0b0e19] to-[#1e2237] text-white py-24 text-center px-6">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">Need Custom Access Fabrication?</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          Precision-built custom structures for heavy-duty industrial environments.
        </p>
        <a
          href="/contact"
          className="bg-red-600 px-10 sm:px-14 py-4 sm:py-5 inline-block rounded-lg font-bold text-lg sm:text-xl tracking-wide shadow-2xl hover:scale-105 hover:bg-red-500 transition-all duration-300"
        >
          Contact Engineering Team
        </a>
      </section>
    </div>
  );
}
