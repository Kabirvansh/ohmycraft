// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-6 py-12 overflow-visible">
      {/* Text */}
      {/* <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-semibold text-brown-dark leading-tight">
          Artistry from the<br />valley of Kashmir
        </h2>
        <p className="text-lg text-brown-light leading-relaxed">
          Handcrafted wonders<br />woven with tradition and love
        </p>
        <button className="mt-4 px-8 py-4 bg-brown text-white rounded-full shadow">
          Shop Collection
        </button>
      </div> */}

      {/* Image */}
      <div className="flex-1 flex justify-center lg:justify-end overflow-visible">
        {/* Scale image down slightly for balanced framing */}
        <div className="relative w-[120%] sm:w-[115%] md:w-[110%] lg:w-[105%] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] 
                        translate-x-[8%] sm:translate-x-[6%] md:translate-x-[4%] lg:translate-x-[2%] overflow-visible">
          <Image
            src="/images/hero.png"
            alt="Kashmiri handicrafts"
            fill
            className="object-cover object-center shadow-hero"
            priority
          />
        </div>
      </div>
    </section>
  );
}
