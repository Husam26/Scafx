export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1635]/90 via-[#0c1635]/70 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-6 grid md:grid-cols-2">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
            Premium Industrial Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building Higher <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              With Safety.
            </span>
          </h1>

          {/* Animated Text */}
          <div className="relative h-24 overflow-hidden text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg border-l-4 border-red-600 pl-6">
            <p className="text-slide slide-1 pl-2">
              Engineered scaffolding systems and access solutions designed for
              extreme durability and global safety compliance.
            </p>

            <p className="text-slide slide-2 pl-2">
              Optimizing performance and reliability in challenging
              environments.
            </p>

            <p className="text-slide slide-3 pl-2">
              Built to withstand extreme weather and heavy-duty usage for global
              projects.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/products"
              className="bg-red-600 text-white px-10 py-4 text-center rounded-sm font-bold uppercase tracking-wider hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-1"
            >
              Our Products
            </a>

            <a
              href="/contact"
              className="bg-white text-[#0c1635] px-10 py-4 text-center rounded-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-[#0c1635]" />

      {/* Styles */}
      <style>
        {`
    @keyframes slideSequence {
      0% {
        opacity: 0;
        transform: translateX(-40px);
      }
      10% {
        opacity: 1;
        transform: translateX(0);
      }
      30% {
        opacity: 1;
        transform: translateX(0);
      }
      40% {
        opacity: 0;
        transform: translateX(40px);
      }
      100% {
        opacity: 0;
      }
    }

    .text-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0; /* 🔥 MOST IMPORTANT FIX */
      animation: slideSequence 9s ease-in-out infinite;
      animation-fill-mode: both;
    }

    /* Negative delays prevent initial overlap */
    .slide-1 {
      animation-delay: 0s;
    }

    .slide-2 {
      animation-delay: -3s;
    }

    .slide-3 {
      animation-delay: -6s;
    }
  `}
      </style>
    </section>
  );
}
