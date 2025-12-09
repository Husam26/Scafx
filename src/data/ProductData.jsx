const productsData = [
  {
    id: "SC-101",
    title: "ProStep Aluminium Ladder",
    category: "Ladders",
    image: "https://images.pexels.com/photos/30446403/pexels-photo-30446403.jpeg",
    description:
      "Premium industrial-grade aluminium ladder engineered for lightweight durability and safe elevation tasks.",
    specs: {
      material: "Alloy 6061",
      load: "150 kg",
      height: "2m – 6m",
      weight: "8.5 kg",
      finish: "Anodized Scratch-Resistant",
      cert: "ISO 9001",
      safety: "Anti-slip steps, stabilizer bar",
    },
    dimensions: {
      folded: "2m x 45cm",
      extended: "6m max height",
      stepWidth: "75mm Anti-slip",
    },
    features: [
      "High-tensile aluminium construction",
      "Slip-proof rubber feet",
      "Industrial stabilizer bar",
      "Lightweight portability",
    ],
  },

  {
    id: "SC-204",
    title: "Mobile Scaffolding Tower",
    category: "Scaffolding",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJmJPGXZmh4tifObhC37uUOb3frDK27kyEji4thjiGcACxz_sMJTlHcWV41EzHNlO4EXphNE7e",
    description:
      "High-stability modular scaffolding tower for industrial construction tasks with maximum safety.",
    specs: {
      material: "Galvanized Steel",
      load: "450 kg",
      height: "Up to 12m",
      cert: "OSHA Approved",
      finish: "Rust-Proof Zinc Coat",
    },
    dimensions: {
      base: "2.5m x 1.3m",
      platform: "Wide Anti-slip",
      sections: "Modular 2m Sections",
    },
    features: [
      "Heavy-duty steel framework",
      "Lockable wheels for mobility",
      "Wide work platform",
      "Weather-resistant structure",
    ],
  },

  {
    id: "SF-900",
    title: "Safety Harness Kit",
    category: "Safety",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuxQaquuQijx9Ryhoy-SLqcoSl5yLaPrPwch2uNUSZ0sBv6upfqz2Dr05W507_FAdkS3dkNXe2",
    description:
      "Full-body fall protection harness designed for high-altitude safety compliance and industrial work.",
    specs: {
      material: "Polyester Web",
      load: "140 kg",
      cert: "EN 361",
      hooks: "Steel D-Ring, Double Lanyard",
    },
    dimensions: {
      beltLength: "Adjustable",
      shoulderStrap: "Reinforced",
    },
    features: [
      "Shock-absorbing energy lanyard",
      "Adjustable chest/shoulder straps",
      "High-strength metal anchors",
    ],
  },

  {
    id: "SC-305",
    title: "Cuplock System",
    category: "Scaffolding",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8XbPBSF_-GCXVOe5j1GHF8KsG5xVr8dBeA&s",
    description:
      "Universal cuplock scaffolding system for heavy-duty modular support structures.",
    specs: {
      material: "High-Tensile Steel",
      load: "Heavy Duty",
      height: "Modular Additional Sections",
      finish: "Painted / Galvanized",
    },
    dimensions: {
      standards: "48.3mm x 3.2mm",
      ledgers: "48.3mm x 3.2mm",
    },
    features: [
      "Fast locking mechanism",
      "Universal system compatibility",
      "Corrosion-resistant build",
    ],
  },

  {
    id: "AC-112",
    title: "Industrial Platform",
    category: "Access",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    description:
      "Fiberglass industrial access platform with adjustable height and enhanced operator safety.",
    specs: {
      material: "Fiberglass",
      load: "150 kg",
      height: "Adjustable",
      finish: "Non-Conductive",
    },
    dimensions: {
      platformSize: "Wide Grip 75cm",
      heightRange: "1.5m – 3m",
    },
    features: [
      "Electric-safe fiberglass body",
      "Slip-resistant platform",
      "Foldable structure",
    ],
  },

  {
    id: "CS-001",
    title: "Custom Access Bridge",
    category: "Access",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80",
    description:
      "Custom engineered access bridges for industrial plant movement, heavy equipment, and elevation tasks.",
    specs: {
      material: "Custom Alloy",
      load: "Variable (Project-based)",
      cert: "Depends on Project",
    },
    dimensions: {
      length: "As per project",
      width: "Custom",
    },
    features: [
      "Built for client requirements",
      "Heavy load capacity",
      "Enhanced structural stability",
    ],
  },
];

export default productsData;
