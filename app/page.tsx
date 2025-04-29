import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";

export default function HomePage() {
  const featured = [
    { id: 1, title: "Shawls & Stoles", img: "/images/pashmina.png" },
    { id: 2, title: "Paper Maché", img: "/images/paper-mache.png" },
    { id: 3, title: "Dry Fruits", img: "/images/dry-fruits.png" },
    { id: 4, title: "Kashmiri Wazwaan", img: "/images/wazwan.png" },
  ];

  return (
    <>
      <Header />

      {/* Full-width Hero Section */}
      <div className="bg-beige w-full">
        <Hero />
      </div>

      {/* Featured Categories */}
      <main className="bg-[#dac095] min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Featured Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {featured.map((cat) => (
              <CategoryCard key={cat.id} title={cat.title} imgSrc={cat.img} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
