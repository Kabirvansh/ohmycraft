// components/CategoryCard.tsx
import Image from "next/image";

type Props = { title: string; imgSrc: string };

export default function CategoryCard({ title, imgSrc }: Props) {
  return (
    <div className="bg-beige rounded-lg overflow-hidden shadow-card hover:shadow-cardHover transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={imgSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-brown-dark">{title}</h3>
      </div>
    </div>
  );
}
