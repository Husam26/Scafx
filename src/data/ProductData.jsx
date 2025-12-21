const productsData = [
  {
    id: "AT-100",
    title: "Aluminum Scaffolding Towers",
    category: "Scaffolding",
    image: "/products/aluminum-tower.png",
    description:
      "Modular aluminum scaffolding towers engineered for industrial maintenance, construction, and MEP access with multiple working heights and widths.",
    specs: {
      material: "Aluminum 6061-T6",
      load: "250 kg per platform",
      compliance: "EN 1004 / OSHA",
      finish: "Anodized / Mill Finish",
    },
    dimensions: {
      platformWidth: "0.75m / 1.35m",
      workingHeights: "4m / 6m / 8m / 10m / 12m",
      baseSize: "1.8m x 1.35m",
    },
    variants: {
      models: "Single Width / Double Width",
      heightModules: "2m modular frames",
    },
    features: [
      "Tool-free modular assembly",
      "Lockable heavy-duty castor wheels",
      "Guard rails & toe boards included",
      "Indoor & outdoor compatible",
    ],
  },

  {
    id: "NT-210",
    title: "Narrow Frame Scaffolding Towers",
    category: "Scaffolding",
    image: "/products/narrow-frame.png",
    description:
      "Compact narrow-frame aluminum towers designed for corridors, elevators, and confined industrial spaces.",
    specs: {
      material: "Lightweight Aluminum",
      load: "200 kg",
      compliance: "EN 1004",
    },
    dimensions: {
      platformWidth: "0.60m",
      workingHeights: "4m / 6m / 8m",
      baseSize: "1.5m x 0.75m",
    },
    variants: {
      models: "Indoor / Outdoor",
    },
    features: [
      "Ideal for narrow access areas",
      "Quick locking frame system",
      "Non-marking castors",
    ],
  },

  {
    id: "FT-330",
    title: "Hinged & Foldable Indoor Towers",
    category: "Scaffolding",
    image: "/products/foldable-tower.png",
    description:
      "Foldable aluminum access towers for indoor maintenance with ultra-fast setup and compact storage.",
    specs: {
      material: "Aluminum Alloy",
      load: "150 kg",
      usage: "Indoor Only",
    },
    dimensions: {
      foldedSize: "2.0m x 0.75m",
      workingHeights: "3m / 4.5m / 6m",
    },
    variants: {
      models: "Hinged / One-touch fold",
    },
    features: [
      "One-person setup",
      "Fits through standard doors",
      "Lightweight & portable",
    ],
  },

  {
    id: "PA-410",
    title: "Podium & Cantilever Access Systems",
    category: "Access",
    image: "/products/podium.png",
    description:
      "Podium steps and cantilever platforms offering safe elevated access for maintenance and installation work.",
    specs: {
      material: "Aluminum",
      load: "150 kg",
      compliance: "EN 131",
    },
    dimensions: {
      platformHeight: "1.0m / 1.5m / 2.0m",
      platformSize: "600mm x 600mm",
    },
    variants: {
      types: "Podium / Cantilever",
    },
    features: [
      "Handrails & guardrails included",
      "Anti-slip platform",
      "Compact footprint",
    ],
  },

  {
    id: "MB-520",
    title: "Modular Bridge Scaffolding",
    category: "Access",
    image: "/products/bridge.png",
    description:
      "Engineered aluminum bridge scaffolding systems designed to cross machinery, pipelines, and obstacles safely.",
    specs: {
      material: "Structural Aluminum",
      load: "Up to 500 kg",
      compliance: "Project Specific",
    },
    dimensions: {
      spanLengths: "2m / 3m / 4m / Custom",
      walkwayWidth: "750mm",
    },
    variants: {
      configurations: "Single span / Multi-span",
    },
    features: [
      "Custom engineered designs",
      "High load capacity",
      "Quick installation",
    ],
  },

  {
    id: "ST-610",
    title: "Custom Staircase Towers",
    category: "Access",
    image: "/products/staircase.png",
    description:
      "Custom-built aluminum staircase towers for safe and ergonomic access across industrial facilities.",
    specs: {
      material: "Custom Aluminum Alloy",
      load: "300 kg",
      compliance: "Project Based",
    },
    dimensions: {
      stairWidth: "800mm / Custom",
      riseHeight: "As per site requirement",
    },
    variants: {
      configurations: "Temporary / Semi-Permanent",
    },
    features: [
      "Non-slip stair treads",
      "Handrails both sides",
      "Designed as per site layout",
    ],
  },

  {
    id: "WL-710",
    title: "Aluminum Wall Ladders",
    category: "Ladders",
    image: "/products/wall-ladder.png",
    description:
      "Fixed aluminum wall ladders available in multiple heights for industrial plants and facilities.",
    specs: {
      material: "Aluminum",
      load: "150 kg",
      compliance: "EN 131",
    },
    dimensions: {
      heights: "2m / 3m / 4m / 5m / 6m",
      rungSpacing: "300mm",
    },
    variants: {
      models: "With cage / Without cage",
    },
    features: [
      "Corrosion resistant",
      "Optional safety cage",
      "Wall mounting brackets included",
    ],
  },

  {
    id: "SS-820",
    title: "Self-Supporting Stair Systems",
    category: "Access",
    image: "/products/self-stair.png",
    description:
      "Freestanding aluminum stair systems suitable for both temporary and permanent industrial access.",
    specs: {
      material: "Structural Aluminum",
      load: "300 kg",
      compliance: "EN / OSHA",
    },
    dimensions: {
      stairAngle: "38° – 45°",
      platformHeight: "1.5m / 2m / 3m",
    },
    variants: {
      models: "Modular / Fixed",
    },
    features: [
      "No wall support required",
      "Heavy-duty base structure",
      "Easy relocation",
    ],
  },
  {
  id: "CL-730",
  title: "Caged Safety Ladders",
  category: "Ladders",
  image: "/products/caged-ladder.png",
  description:
    "Vertical aluminum safety ladders with integrated fall-protection cage, designed for permanent access to rooftops, tanks, silos, and industrial structures.",
  specs: {
    material: "Aluminum 6061-T6",
    load: "150 kg",
    compliance: "EN ISO 14122-4 / OSHA",
    finish: "Anodized / Powder Coated",
  },
  dimensions: {
    ladderHeight: "3m / 4m / 5m / 6m / 8m / Custom",
    rungSpacing: "280 mm",
    cageDiameter: "700 mm",
  },
  variants: {
    models: "Rear exit / Side exit / Platform exit",
  },
  features: [
    "Integrated fall-protection safety cage",
    "Anti-slip rungs",
    "Wall mounting brackets included",
    "Suitable for permanent outdoor installation",
  ],
},
{
  id: "ML-750",
  title: "Mobile Platform Ladders",
  category: "Ladders",
  image: "/products/platform-ladder.png",
  description:
    "Heavy-duty mobile platform ladders offering stable elevated access with guardrails and lockable wheels.",
  specs: {
    material: "Aluminum",
    load: "200 kg",
    compliance: "EN 131-2",
  },
  dimensions: {
    platformHeight: "1.0m / 1.5m / 2.0m / 2.5m",
    platformSize: "600mm x 800mm",
  },
  variants: {
    models: "Fixed handrail / Folding handrail",
  },
  features: [
    "Anti-slip wide platform",
    "360° guardrails",
    "Lockable industrial castors",
    "Easy mobility and repositioning",
  ],
},

{
  id: "SF-810",
  title: "Full Body Safety Harness",
  category: "Safety",
  image: "/products/safety-harness.png",
  description:
    "Industrial full body safety harness designed for fall arrest, positioning, and rescue operations at height.",
  specs: {
    material: "Polyester Webbing",
    load: "140 kg",
    compliance: "EN 361 / EN 358",
  },
  dimensions: {
    sizeRange: "M / L / XL",
    adjustablePoints: "Chest, Shoulder, Leg straps",
  },
  variants: {
    models: "Single lanyard / Double lanyard",
  },
  features: [
    "Shock absorbing lanyard",
    "High-strength steel D-rings",
    "Quick-adjust buckles",
    "Ergonomic padded support",
  ],
},

{
  id: "EP-830",
  title: "Temporary Edge Protection System",
  category: "Safety",
  image: "/products/edge-protection.webp",
  description:
    "Modular temporary edge protection system for slab edges, rooftops, and elevated platforms during construction.",
  specs: {
    material: "Galvanized Steel / Aluminum",
    load: "As per EN 13374",
    compliance: "EN 13374 Class A/B/C",
  },
  dimensions: {
    postHeight: "1.1m",
    railLength: "1.3m / 2.6m",
  },
  variants: {
    types: "Clamp fit / Base plate",
  },
  features: [
    "Quick installation without drilling",
    "Modular reusable system",
    "High visibility safety finish",
  ],
},

{
  id: "GR-850",
  title: "Guardrail & Toe Board Set",
  category: "Safety",
  image: "/products/guardrail.jpg",
  description:
    "Temporary and semi-permanent guardrail systems with toe boards for fall prevention at elevated work areas.",
  specs: {
    material: "Galvanized Steel / Aluminum",
    load: "Heavy Duty",
    compliance: "EN 13374 / OSHA",
  },
  dimensions: {
    guardrailHeight: "1.1m",
    toeBoardHeight: "150 mm",
  },
  variants: {
    configurations: "Single rail / Double rail",
  },
  features: [
    "Prevents tools and materials falling",
    "Fast clamp-on installation",
    "Compatible with edge protection posts",
  ],
},



];

export default productsData;
