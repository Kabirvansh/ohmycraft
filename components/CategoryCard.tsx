// components/CategoryCard.tsx
import Image from "next/image";

type Props = { title: string; imgSrc: string };

export default function CategoryCard({ title, imgSrc }: Props) {
  return (
    <div className="bg-beige rounded-b-lg overflow-hidden shadow-card hover:shadow-cardHover transition-shadow">
      {/* Frame */}
      <div className="relative w-full h-64 bg-[#3e1f00] rounded-lg overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-brown-dark">{title}</h3>
      </div>
    </div>
  );
}
