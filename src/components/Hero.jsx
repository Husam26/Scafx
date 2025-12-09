export default function Hero() {
  return (
    <section
  className="h-screen bg-cover bg-center relative flex items-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay FIXED */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0c1635]/90 via-[#0c1635]/70 to-transparent z-[1]"></div>

  {/* Content ABOVE overlay */}
  <div className="relative z-[2] container mx-auto px-6 grid md:grid-cols-2">
    <div className="max-w-2xl text-white">
      <div className="inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
        Premium Industrial Solutions
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        Building Higher <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
          With Safety.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg border-l-4 border-red-600 pl-6">
        Engineered scaffolding systems and access solutions designed for 
        extreme durability and global safety compliance.
      </p>

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

  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-[#0c1635]"></div>
</section>

  );
}