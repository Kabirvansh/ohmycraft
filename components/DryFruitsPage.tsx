// components/DryFruitsPage.tsx
"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ProductCard from "./ProductCard";

export default function DryFruitsPage({ onBack }: { onBack: () => void }) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const q = query(collection(db, "products"), where("category", "==", "Dry Fruits"));
      const snapshot = await getDocs(q);
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }

    fetchProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#dac095] container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 min-h-screen pt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Dry Fruits</h2>
        <button className="text-brown hover:underline" onClick={onBack}>← Back to home</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
