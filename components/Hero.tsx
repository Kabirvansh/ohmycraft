import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-beige w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-8 lg:px-16 flex flex-col items-center lg:flex-row gap-6 py-12">
      {/* Image */}
      <div className="w-full md:w-2/3 flex justify-center overflow-visible">
        <div className="relative w-full aspect-[16/9] filter drop-shadow-[0_4px_100px_rgba(0,0,0,0.95)]">
          <Image
            src="/images/hero.png"
            alt="Kashmiri handicrafts"
            fill
            className="object-contain shadow-hero"
            priority
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/3 px-4 lg:px-0 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight">
          Artistry from the<br />valley of Kashmir
        </h2>
        <p className="mt-2 text-lg md:text-xl text-brown-dark leading-snug">
          Handcrafted wonders woven with tradition and love
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <button className="px-10 py-4 bg-[#3e1f00] text-white rounded-[15px] shadow-lg hover:shadow-xl transition">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
}
