"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#dac095] flex items-center justify-between py-2 sm:py-4 px-4 sm:px-6 lg:px-16 relative">
      {/* Logo */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold underline"
        style={{ fontFamily: "'Arima Madurai'", color: "#3e1f00" }}
      >
        oh&apos;mycraft
      </h1>

      {/* Mobile controls: menu, cart, user */}
      <div className="flex items-center sm:hidden space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="p-1"
        >
          <Menu size={24} />
        </button>
        <ShoppingCart size={24} />
        <User size={24} />
      </div>

      {/* Desktop nav + icons */}
      <nav className="hidden sm:flex items-center space-x-6 text-base sm:text-lg text-[#3e1f00]" style={{ fontFamily: "'Arima Madurai'" }}>
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About</Link>
        <ShoppingCart size={24} />
        <User size={24} />
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#dac095] shadow-lg sm:hidden">
          <ul className="flex flex-col p-4 space-y-2 text-[#3e1f00]" style={{ fontFamily: "'Arima Madurai'" }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
