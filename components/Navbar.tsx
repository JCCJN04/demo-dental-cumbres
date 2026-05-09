"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#por-que-nosotros", label: "Nosotros" },
    { href: "#testimonios", label: "Reseñas" },
    { href: "#ubicacion", label: "Ubicación" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
          : "bg-[#f9f9f9]/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-20 max-w-[1200px] mx-auto h-[68px]">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-[20px] font-bold text-[#002428] hover:opacity-80 transition-opacity"
        >
          Sonrisa Integral
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 text-[15px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#414849] hover:text-[#002428] transition-colors duration-150 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+528112345678"
            className="text-[14px] text-[#414849] hover:text-[#002428] transition-colors font-medium"
          >
            (81) 1234-5678
          </a>
          <a
            href="#contacto"
            className="bg-[#002428] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-85 transition-opacity active:scale-95"
          >
            Agendar cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#002428] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e8e8] px-5 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#414849] hover:text-[#002428] text-[15px] font-medium py-2.5 border-b border-[#f3f3f3] last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-[#002428] text-white px-6 py-3 rounded-full text-[15px] font-semibold text-center mt-3 hover:opacity-85 transition-opacity"
          >
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  );
}
