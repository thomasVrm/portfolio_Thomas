"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#exp" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0f17]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-blue-500 text-lg">+</span>
            <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              Thomas Vromman
            </span>
          </a>

          {/* Nav Items - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Availability badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-400">Disponible</span>
            </div>
            </div>
          </div>
        </div>
    </nav>
  );
}
