// app/page.tsx
import Header from "@/components/Header";
import Hero     from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";


export default function HomePage() {
  // For now, hardcode your featured categories
  const featured = [
    { id: 1, title: "Pashmina Shawls", img: "/images/pashmina.jpg" },
    { id: 2, title: "Paper Maché", img: "/images/paper-mache.jpg" },
    { id: 3, title: "Dry Fruits", img: "/images/dry-fruits.jpg" },
    { id: 4, title: "Kashmiri Wazwaan", img: "/images/wazwan.jpg" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#dac095] min-h-screen px-4 md:px-8 lg:px-16">
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
    </>
  );
}
