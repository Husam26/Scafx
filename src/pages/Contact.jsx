export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-[#0c1635] h-64 w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-wide">
          Get in Touch
        </h1>
      </div>

      <div className="container mx-auto px-6 -mt-20 pb-20 relative z-20">
        <div className="grid md:grid-cols-5 bg-white shadow-2xl rounded-lg overflow-hidden min-h-[600px]">
          
          {/* Left Side: Contact Info (Dark Theme) */}
          <div className="md:col-span-2 bg-[#1a202c] text-white p-10 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative Circle */}
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600 rounded-full opacity-10"></div>
             
             <div>
               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
               <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                 Need a custom quote or have a technical query? Our engineering team is ready to assist you.
               </p>

               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm text-red-500">
                     📍
                   </div>
                   <div>
                     <p className="font-semibold text-sm uppercase tracking-wider text-gray-300">Headquarters</p>
                     <p className="text-white mt-1">Industrial Zone 4, Dubai, UAE</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm text-red-500">
                     📞
                   </div>
                   <div>
                     <p className="font-semibold text-sm uppercase tracking-wider text-gray-300">Phone</p>
                     <p className="text-white mt-1">+971 55 555 5555</p>
                     <p className="text-gray-400 text-xs mt-1">Mon-Sat, 8am - 6pm</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm text-red-500">
                     ✉️
                   </div>
                   <div>
                     <p className="font-semibold text-sm uppercase tracking-wider text-gray-300">Email</p>
                     <p className="text-white mt-1">projects@scafx.com</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-12">
                <p className="text-gray-500 text-xs">© ScafX Engineering. Response time: &lt; 24 Hrs.</p>
             </div>
          </div>

          {/* Right Side: Form (Light Theme) */}
          <div className="md:col-span-3 p-10 bg-white">
            <h3 className="text-2xl font-bold text-[#0c1635] mb-2">Send us a Message</h3>
            <p className="text-gray-500 text-sm mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Subject / Project Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all text-gray-600">
                  <option>General Inquiry</option>
                  <option>Request for Quotation</option>
                  <option>Industrial Scaffolding</option>
                  <option>Ladders & Towers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#0c1635] transition-colors duration-300 w-full md:w-auto shadow-lg shadow-red-500/30">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}