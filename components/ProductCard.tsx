// components/ProductCard.tsx
import Image from "next/image";

type Props = {
  title: string;
  price: number;
  description: string;
  imageUrl?: string;
};

export default function ProductCard({ title, price, description, imageUrl }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-card p-4 space-y-2">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover rounded" />
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-lg font-bold text-brown-dark">₹ {price.toFixed(2)}</p>
    </div>
  );
}
