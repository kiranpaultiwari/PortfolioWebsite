import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0a0c] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-['Clash_Grotesk:Semibold',_sans-serif] text-white text-2xl md:text-4xl font-semibold tracking-tight">
          SMIT.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-white text-lg font-['Clash_Grotesk:Regular',_sans-serif]">
          <a href="#" className="hover:text-[#ebff57] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#ebff57] transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-[#ebff57] transition-colors">
            Our Service
          </a>
          <a href="#portfolio" className="hover:text-[#ebff57] transition-colors">
            Portfolio
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-[#ebff57] text-[#0a0a0c] px-8 py-3 rounded-full font-medium hover:bg-[#d9ed4e] transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10 absolute top-20 left-0 w-full p-6 flex flex-col gap-6 text-center">
          <a
            href="#"
            className="text-white text-xl py-2 hover:text-[#ebff57]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-xl py-2 hover:text-[#ebff57]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white text-xl py-2 hover:text-[#ebff57]"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Service
          </a>
          <a
            href="#portfolio"
            className="text-white text-xl py-2 hover:text-[#ebff57]"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <button className="bg-[#ebff57] text-[#0a0a0c] px-8 py-3 rounded-full font-medium w-full">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
