// components/Header.tsx
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">oh’mycraft</h1>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <ShoppingCart size={24} />
        <User size={24} />
      </div>
    </header>
  );
}
