import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#0c1635] h-64 w-full relative flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-wide">
          Get in Touch
        </h1>
      </motion.div>

      <div className="container mx-auto px-6 -mt-20 pb-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid md:grid-cols-5 bg-white shadow-2xl rounded-lg overflow-hidden min-h-[600px]"
        >

          {/* LEFT INFO */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 bg-[#1a202c] text-white p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600 rounded-full opacity-10"></div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Need a custom quote or have a technical query? Our engineering team is ready to assist you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    label: "Headquarters",
                    value: "Industrial Zone 4, Dubai, UAE",
                    icon: "📍",
                  },
                  {
                    label: "Phone",
                    value: "+971 55 555 5555",
                    sub: "Mon–Sat, 8am – 6pm",
                    icon: "📞",
                  },
                  {
                    label: "Email",
                    value: "projects@scafx.com",
                    icon: "✉️",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm text-red-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm uppercase tracking-wider text-gray-300">
                        {item.label}
                      </p>
                      <p className="text-white mt-1">{item.value}</p>
                      {item.sub && (
                        <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-12">
              © ScafX Engineering. Response time: &lt; 24 Hrs.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 p-10 bg-white"
          >
            <h3 className="text-2xl font-bold text-[#0c1635] mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <motion.form
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="space-y-6"
            >
              {[
                "Full Name",
                "Email Address",
              ].map((label, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500 transition-all"
                  />
                </motion.div>
              ))}

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Subject / Project Type
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500">
                  <option>General Inquiry</option>
                  <option>Request for Quotation</option>
                  <option>Industrial Scaffolding</option>
                  <option>Ladders & Towers</option>
                </select>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-red-500"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-600 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#0c1635] transition-colors shadow-lg shadow-red-500/30"
              >
                Send Message
              </motion.button>
              {/* EXTRA CONTACT SERVICES (PDF MATCH) */}
<section className="bg-gray-100 py-20">
  <div className="container mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-3 gap-8"
    >

      {/* REQUEST QUOTATION */}
      <div className="bg-white p-8 shadow-lg border border-gray-200 hover:border-red-500 transition">
        <h4 className="text-lg font-bold text-[#0c1635] mb-2">
          Request Quotations
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Get precise and customized aluminum access system quotes for your
          industrial projects.
        </p>
      </div>

      {/* ON SITE DEMO */}
      <div className="bg-white p-8 shadow-lg border border-gray-200 hover:border-red-500 transition">
        <h4 className="text-lg font-bold text-[#0c1635] mb-2">
          Arrange On-Site Demos
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Experience our scaffolding and access solutions directly at your
          project location.
        </p>
      </div>

      {/* SUPPORT */}
      <div className="bg-white p-8 shadow-lg border border-gray-200 hover:border-red-500 transition">
        <h4 className="text-lg font-bold text-[#0c1635] mb-2">
          24-Hour Spare-Part Support
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Immediate technical and spare-part assistance to ensure continuous
          operations.
        </p>
      </div>

    </motion.div>

    {/* INVITING PARTNERS */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-16 bg-white p-10 shadow-xl border border-gray-200"
    >
      <h3 className="text-2xl font-bold text-[#0c1635] mb-4">
        Inviting Partners
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
        <li>Contractors</li>
        <li>Rental Companies</li>
        <li>Authorized Dealers</li>
      </ul>
    </motion.div>

  </div>
</section>

            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
