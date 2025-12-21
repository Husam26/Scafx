import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = ["All", "Scaffolding", "Ladders", "Access", "Safety"];

  const productList = [
    {
      id: "AT-100",
      title: "Aluminum Scaffolding Towers",
      category: "Scaffolding",
      image: "/products/aluminum-tower.png",
      specs: {
        material: "Aluminum 6061-T6",
        variants: "Multiple heights & widths",
        load: "Heavy Duty",
      },
    },
    {
      id: "NT-210",
      title: "Narrow Frame Scaffolding Towers",
      category: "Scaffolding",
      image: "/products/narrow-frame.png",
      specs: {
        material: "Lightweight Aluminum",
        variants: "Compact widths",
        load: "Industrial Rated",
      },
    },
    {
      id: "FT-330",
      title: "Hinged & Foldable Indoor Towers",
      category: "Scaffolding",
      image: "/products/foldable-tower.png",
      specs: {
        material: "Aluminum Alloy",
        variants: "Foldable / Hinged",
        use: "Indoor Maintenance",
      },
    },
    {
      id: "PA-410",
      title: "Podium & Cantilever Access Systems",
      category: "Access",
      image: "/products/podium.png",
      specs: {
        material: "Aluminum",
        variants: "Podium / Cantilever",
        use: "Elevated Access",
      },
    },
    {
      id: "MB-520",
      title: "Modular Bridge Scaffolding",
      category: "Access",
      image: "/products/bridge.png",
      specs: {
        material: "Engineered Aluminum",
        variants: "Modular Span Lengths",
        use: "Crossing & Bridging",
      },
    },
    {
      id: "ST-610",
      title: "Custom Staircase Towers",
      category: "Access",
      image: "/products/staircase.png",
      specs: {
        material: "Custom Alloy",
        variants: "Project Specific",
      },
    },
    {
      id: "WL-710",
      title: "Aluminum Wall Ladders",
      category: "Ladders",
      image: "/products/wall-ladder.png",
      specs: {
        material: "Aluminum",
        variants: "Different Heights",
        cert: "Industrial Grade",
      },
    },
    {
      id: "CL-730",
      title: "Caged Safety Ladders",
      category: "Ladders",
      image: "/products/caged-ladder.png",
      specs: {
        material: "Aluminum / Galvanized Steel",
        variants: "With Safety Cage",
      },
    },
    {
      id: "ML-750",
      title: "Mobile Platform Ladders",
      category: "Ladders",
      image: "/products/platform-ladder.png",
      specs: {
        material: "Aluminum",
        variants: "Wheeled / Lockable",
        use: "Warehouse & Maintenance",
      },
    },
    {
      id: "SF-810",
      title: "Full Body Safety Harness",
      category: "Safety",
      image: "/products/safety-harness.png",
      specs: {
        material: "Polyester Webbing",
        variants: "Single / Double Lanyard",
        cert: "EN 361 / OSHA",
      },
    },
    {
      id: "EP-830",
      title: "Temporary Edge Protection System",
      category: "Safety",
      image: "/products/edge-protection.webp",
      specs: {
        material: "Steel / Aluminum",
        variants: "Modular Panels",
        use: "Fall Protection",
      },
    },
    {
      id: "GR-850",
      title: "Guardrail & Toe Board Set",
      category: "Safety",
      image: "/products/guardrail.jpg",
      specs: {
        material: "Galvanized Steel",
        variants: "Adjustable Lengths",
        use: "Perimeter Safety",
      },
    },
  ];

  const filtered =
    activeTab === "All"
      ? productList
      : productList.filter((p) => p.category === activeTab);

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans">

      {/* HERO */}
      <header className="py-32 bg-[#0b0e19] text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            ENGINEERED <span className="text-red-600">SYSTEMS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-xl">
            Precision-grade access solutions for industrial environments.
          </p>
        </div>
      </header>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">

          <span className="text-sm font-bold uppercase text-gray-600">
            {activeTab}
          </span>

          {/* Mobile Button */}
          <button
            onClick={() => setShowMobileFilter(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold"
          >
            <Filter size={16} />
            Filter
          </button>

          {/* Desktop Pills */}
          <div className="hidden md:flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-6 py-2 rounded-full font-bold text-sm
                  ${activeTab === cat ? "text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-red-600 rounded-full"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE FILTER BOTTOM SHEET */}
      <AnimatePresence>
        {showMobileFilter && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilter(false)}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0.2 }}
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />

              <h3 className="text-lg font-bold mb-4">Select Category</h3>

              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat);
                      setShowMobileFilter(false);
                    }}
                    className={`h-12 rounded-xl font-semibold
                      ${activeTab === cat ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PRODUCTS GRID */}
      <div className="container mx-auto px-6 py-20">
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <ProductCard {...p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-[#0b0e19] rounded-3xl p-16 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">
            Looking for a custom build?
          </h3>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Bespoke aluminum access systems engineered for complex projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white transition"
          >
            Start Consultation <ChevronRight />
          </a>
        </div>
      </section>

    </div>
  );
}
