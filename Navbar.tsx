"use client";

import { useState, useEffect } from "react";
import { IconSparkles, IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Promo", href: "#promo" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-8xl mx-auto px-5 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <IconSparkles size={18} className="text-white" />
          </div>
          <span
            className={`font-playfair font-bold text-xl tracking-wide transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Dmarlen
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-dmsans font-medium text-sm tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-text-main" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Booking Sekarang
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 rounded-lg transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-soft-pink shadow-xl">
          <div className="px-5 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-dmsans font-medium text-text-main hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center text-sm"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
