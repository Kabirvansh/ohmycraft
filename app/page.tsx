// app/page.tsx
import Header from "@/components/Header";
import Hero     from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";


export default function HomePage() {
  // For now, hardcode your featured categories
  const featured = [
    { id: 1, title: "Shawls & Stoles", img: "/images/pashmina.png" },
    { id: 2, title: "Paper Maché", img: "/images/paper-mache.png" },
    { id: 3, title: "Dry Fruits", img: "/images/dry-fruits.png" },
    { id: 4, title: "Kashmiri Wazwaan", img: "/images/wazwan.png" },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto bg-[#dac095] min-h-screen px-4 sm:px-6 lg:px-8">
        <Hero />
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map(cat => (
              <CategoryCard key={cat.id} title={cat.title} imgSrc={cat.img} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
