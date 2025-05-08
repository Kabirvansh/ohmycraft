// pages/page.tsx
"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import ShawlsPage from "@/components/ShawlsPage";
import PaperMachePage from "@/components/PaperMachePage";
import DryFruitsPage from "@/components/DryFruitsPage";
import WazwaanPage from "@/components/WazwaanPage";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  const featured = [
    { id: 1, title: "Shawls & Stoles", img: "/images/pashmina.png" },
    { id: 2, title: "Paper Maché", img: "/images/paper-mache.png" },
    { id: 3, title: "Dry Fruits", img: "/images/dry-fruits.png" },
    { id: 4, title: "Kashmiri Wazwaan", img: "/images/wazwan.png" },
  ];

  let CategoryComponent = null;
  if (activeCategory === "Shawls & Stoles") CategoryComponent = <ShawlsPage onBack={() => setActiveCategory(null)} />;
  else if (activeCategory === "Paper Maché") CategoryComponent = <PaperMachePage onBack={() => setActiveCategory(null)} />;
  else if (activeCategory === "Dry Fruits") CategoryComponent = <DryFruitsPage onBack={() => setActiveCategory(null)} />;
  else if (activeCategory === "Kashmiri Wazwaan") CategoryComponent = <WazwaanPage onBack={() => setActiveCategory(null)} />;

  return (
    <>
      <Header setActiveCategory={setActiveCategory} />
      <div className="pt-[100px]">
        {CategoryComponent ? (
          CategoryComponent
        ) : (
          <>
            <div className="bg-beige w-full">
              <Hero />
            </div>
            <main className="bg-[#dac095] min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
              <section className="mt-16">
                <h2 className="text-3xl font-semibold text-center mb-8">Featured Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {featured.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.title)}
                      className="cursor-pointer"
                    >
                      <CategoryCard title={cat.title} imgSrc={cat.img} />
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}