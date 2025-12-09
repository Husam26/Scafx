export default function About() {
  return (
    <div className="bg-white">
      {/* 1. Hero / Header Section */}
      <section className="bg-[#0c1635] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/2">
           {/* Abstract Gear/Construction Pattern */}
           <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor"><path d="M100 0L200 100L100 200L0 100Z" /></svg>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6">
            Building Trust on <br/> Every Level.
          </h1>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-sm"></div>
        </div>
      </section>

      {/* 2. Main Content - Split Layout */}
      <section className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with "Industrial Frame" Effect */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/10 rounded-sm transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
            <div className="absolute -inset-4 border-2 border-[#0c1635]/20 rounded-sm transform -translate-x-2 -translate-y-2"></div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80" 
              className="relative rounded-sm shadow-2xl z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              alt="Industrial Site"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-[#0c1635] mb-6 border-l-4 border-red-600 pl-4">
              Engineering Safety & <br/> Performance
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ScafX isn't just a supplier; we are your strategic partner in construction access. 
              Born from a need for <span className="font-semibold text-[#0c1635]">stricter safety standards</span> in the industry, 
              we combine modern engineering with heavy-duty materials to create access solutions 
              that protect workers and accelerate project timelines.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "ISO Certified Manufacturing Processes",
                "High-Tensile Aluminium Alloys",
                "Custom Engineering for Complex Sites",
                "24/7 Technical Support & On-site Consulting"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Stats / Vision Strip */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-8 border-t-4 border-red-600 shadow-lg">
                <h4 className="text-xl font-bold text-[#0c1635] mb-3">Our Mission</h4>
                <p className="text-gray-600 text-sm">To redefine industrial access through innovation, ensuring every worker returns home safely every day.</p>
             </div>
             <div className="bg-white p-8 border-t-4 border-[#0c1635] shadow-lg">
                <h4 className="text-xl font-bold text-[#0c1635] mb-3">Our Vision</h4>
                <p className="text-gray-600 text-sm">To become the global benchmark for scaffolding engineering and safety compliance across all sectors.</p>
             </div>
             <div className="bg-white p-8 border-t-4 border-red-600 shadow-lg">
                <h4 className="text-xl font-bold text-[#0c1635] mb-3">Our Promise</h4>
                <p className="text-gray-600 text-sm">Uncompromising quality. If it doesn't meet our rigorous safety tests, it doesn't leave our factory.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}