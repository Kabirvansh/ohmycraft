// components/Header.tsx
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#dac095] flex items-center justify-between py-4">
      <h1 className="text-4xl font-bold pl-6 underline" style={{ fontFamily: "'Arima Madurai'", color: "#3e1f00" }}>
        oh'mycraft
      </h1>
      <div className="flex items-center space-x-6 pr-6 text-lg" style={{ fontFamily: "'Arima Madurai'", color: "#3e1f00"}}>
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
