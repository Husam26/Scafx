import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      
      {/* Stats / Trust Strip */}
      <div className="bg-[#0c1635] py-10 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-wrap justify-around text-center gap-8">
            <div>
                <h3 className="text-4xl font-bold text-white">15+</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Projects Completed</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-white">100%</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">Safety Certified</p>
            </div>
        </div>
      </div>

      {/* Why Choose ScafX Section */}
      <section className="container mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c1635] mt-2 mb-6">
            Engineering Excellence
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            ScafX stands as the benchmark for reliability. We don't just supply equipment; 
            we deliver safety, stability, and engineered precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-red-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
               {/* Background Icon Effect */}
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
            </div>
            <div className="w-14 h-14 bg-red-100 text-red-600 flex items-center justify-center rounded-lg mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0c1635] mb-4">Certified Safety</h3>
            <p className="text-gray-600 leading-relaxed">
              Global safety standards compliant. Every joint and frame is tested 
              to withstand extreme industrial loads.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-red-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
            </div>
            <div className="w-14 h-14 bg-blue-100 text-[#0c1635] flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#0c1635] group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0c1635] mb-4">Premium Alloys</h3>
            <p className="text-gray-600 leading-relaxed">
              Constructed using aerospace-grade aluminium alloys for corrosion resistance 
              and superior load-bearing capacity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-red-600 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3l7.5 15h-15L12 5z"/></svg>
            </div>
            <div className="w-14 h-14 bg-gray-200 text-gray-800 flex items-center justify-center rounded-lg mb-6 group-hover:bg-gray-800 group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0c1635] mb-4">Tailored Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Complex site? Our engineers design custom access setups for 
              industrial plants and high-rise construction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Industrial Look */}
      <section className="relative py-24 px-6 bg-[#1a202c]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            From warehouses to skyscrapers, we provide the backbone for your construction success. 
            Get a custom quote within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-12 py-4 rounded-sm text-lg font-bold uppercase tracking-widest hover:bg-red-700 hover:scale-105 transition-transform shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}