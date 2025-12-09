import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo4.jpg"; // Save your uploaded logo here

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "About", "Products", "Gallery", "Contact"];

  return (
    <header className="bg-gradient-to-r from-[0c163#5] to-[#1a2a5e] text-white shadow-xl fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-3">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-extrabold tracking-wider uppercase cursor-pointer">
            Scaf<span className="text-red-500">X</span>
          </h1>
        </Link>

        {/* Toggle Icon */}
        <div
          className="cursor-pointer w-10 h-10 flex flex-col justify-center items-center gap-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-3 h-3 rounded-full bg-blue-400 transition-all ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0c1635]/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 text-2xl font-semibold tracking-wide transform transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className={`text-white transform transition-all duration-300 ease-out hover:text-blue-400 hover:scale-110 hover:-translate-y-1`}
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-1.5rem)",
              transitionDelay: `${index * 100}ms`, // staggered animation
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}
