import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0c1635] text-white pt-16 pb-8 border-t-4 border-red-600">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-wider mb-4 uppercase">
            Scaf<span className="text-red-500">X</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Leading provider of industrial scaffolding and access solutions. 
            Built on trust, engineered for safety.
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-6 space-x-4">
            <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="/products" className="hover:text-red-500 transition">Products & Services</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-200">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
               <span>📍</span> 123 Industrial Estate, Tech City, India
            </li>
            <li className="flex items-center gap-3">
               <span>📞</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
               <span>✉️</span> sales@scafx.com
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
           <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-200">Legal</h3>
           <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Safety Compliance</a></li>
           </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ScafX Industries. All Rights Reserved. Designed with precision.
        </p>
      </div>
    </footer>
  );
}
