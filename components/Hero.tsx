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

     <div className="absolute top-50 left-4 sm:left-6 md:left-8 lg:left-16 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-brown-dark leading-tight">
          Artistry from the<br />valley of Kashmir
        </h2>
        <p className="mt-1 text-lg md:text-xl text-brown-dark leading-snug">
          Handcrafted wonders woven with tradition and love
        </p>
        <div className="flex justify-start mt-8 ml-20">
          <button className="px-10 py-4 bg-[#3e1f00] text-white rounded-[15px] shadow-lg hover:shadow-xl transition">
            Shop Collection
          </button>
        </div>
      </div>


      {/* Image */}
      <div className="flex-1 flex justify-center lg:justify-end overflow-visible">
        {/* Use object-contain to avoid cropping, and adjust container size */}
        <div className="relative w-full sm:w-11/12 md:w-3/4 lg:w-2/3 aspect-[16/9] overflow-visible filter drop-shadow-[0_4px_100px_rgba(0,0,0,0.95)]">
          <Image
            src="/images/hero.png"
            alt="Kashmiri handicrafts"
            fill
            className="object-contain shadow-hero"
            priority
          />
        </div>
      </div>
      
    </section>
  );
}
