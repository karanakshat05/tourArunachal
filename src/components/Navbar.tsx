"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-md shadow-md border-b border-white/30"
          : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-teal-800 tracking-wide">
          Travel Arunachal
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex space-x-10 font-semibold">
          <Link href="/" className="text-gray-800 hover:text-teal-600 transition">
            Home
          </Link>
          <Link href="#adventures" className="text-gray-800 hover:text-teal-600 transition">
            Adventures
          </Link>
          <Link href="#hotel-booking" className="text-gray-800 hover:text-teal-600 transition">
            Hotels
          </Link>
          <Link href="#transport-booking" className="text-gray-800 hover:text-teal-600 transition">
            Ride & Roam
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-teal-600 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
