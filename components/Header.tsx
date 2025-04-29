// components/Header.tsx
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#dac095] flex items-center justify-between py-2 sm:py-4 px-4 sm:px-6 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold underline" style={{ fontFamily: "'Arima Madurai'", color: "#3e1f00" }}>
        oh'mycraft
      </h1>
      <div className="flex items-center space-x-4 sm:space-x-6 pr-4 sm:pr-6 text-base sm:text-lg" style={{ fontFamily: "'Arima Madurai'", color: "#3e1f00"}}>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
        </nav>
        <ShoppingCart size={24} />
        <User size={24} />
      </div>
    </header>
  );
}
