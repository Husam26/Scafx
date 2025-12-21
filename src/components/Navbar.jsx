import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo4.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Products", "Gallery", "Contact"];

  return (
    <header className="bg-gradient-to-r from-[#0c1635] to-[#1a2a5e] text-white shadow-xl fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-extrabold tracking-wider uppercase cursor-pointer">
            Scaf<span className="text-red-500">XS</span>
          </h1>
        </Link>

        {/* Toggle Icon */}
        <div
          className="cursor-pointer w-10 h-10 flex flex-col justify-center items-center gap-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all duration-500 ease-in-out ${
              open ? "translate-y-1 rotate-45 bg-red-500" : ""
            }`}
          ></span>
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all duration-500 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all duration-500 ease-in-out ${
              open ? "-translate-y-1 -rotate-45 bg-red-500" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0c1635]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-10 text-2xl font-semibold tracking-wide transform transition-all duration-700 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="relative group text-white transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-1rem)",
            }}
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </header>
  );
}
