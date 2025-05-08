"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";

type HeaderProps = {
  setActiveCategory: (category: string | null) => void;
};

export default function Header({ setActiveCategory }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#dac095] py-2 sm:py-4 px-4 sm:px-6 lg:px-16 h-[100px] shadow-md">
      {/* Left Side: Mobile Controls & Desktop Nav */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-4 sm:space-x-6 text-[#3e1f00]">
        {/* Mobile Controls */}
        <div className="flex sm:hidden space-x-4">
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

        {/* Desktop Nav */}
        <nav
          className="hidden sm:flex items-center space-x-6 text-base sm:text-lg"
          style={{ fontFamily: "'Arima Madurai'" }}
        >
          <button onClick={() => setActiveCategory(null)}>Home</button>

          <div className="relative group">
            <button className="cursor-pointer">Categories</button>
            <div className="absolute left-0 mt-2 bg-[#dac095] border border-[#3e1f00] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 w-[220px]">
            <ul className="py-3 px-6 space-y-2 text-base text-[#3e1f00] font-medium">

                <li>
                  <button onClick={() => setActiveCategory("Shawls & Stoles")}>
                    Shawls & Stoles
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveCategory("Paper Maché")}>
                    Paper Maché
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveCategory("Dry Fruits")}>
                    Dry Fruits
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveCategory("Kashmiri Wazwaan")}>
                    Kashmiri Wazwaan
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/about">About</Link>
        </nav>
      </div>

      {/* Centered Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/logo.png"
            alt="Oh'mycraft logo"
            width={200}
            height={120}
            priority
          />
        </Link>
      </div>

      {/* Right Side: Desktop Icons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center space-x-4 text-[#3e1f00]">
        <ShoppingCart size={24} />
        <User size={24} />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#dac095] shadow-lg sm:hidden z-10">
          <ul
            className="flex flex-col p-4 space-y-2 text-[#3e1f00]"
            style={{ fontFamily: "'Arima Madurai'" }}
          >
            <li>
              <button onClick={() => { setActiveCategory(null); setMenuOpen(false); }}>
                Home
              </button>
            </li>

            <li>
              <details>
                <summary className="cursor-pointer">Categories</summary>
                <ul className="pl-4 space-y-1 mt-2">
                  <li>
                    <button onClick={() => { setActiveCategory("Shawls & Stoles"); setMenuOpen(false); }}>
                      Shawls & Stoles
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setActiveCategory("Paper Maché"); setMenuOpen(false); }}>
                      Paper Maché
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setActiveCategory("Dry Fruits"); setMenuOpen(false); }}>
                      Dry Fruits
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setActiveCategory("Kashmiri Wazwaan"); setMenuOpen(false); }}>
                      Kashmiri Wazwaan
                    </button>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
