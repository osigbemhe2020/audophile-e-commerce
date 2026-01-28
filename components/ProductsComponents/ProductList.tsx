'use client';

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  name: string;
  slug: string;
  description: string;
  isNew: boolean;
  image: StaticImageData;
};

export default function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();
  const handleClick = (product: Product) => {
    router.push(`/featuresPage/${product.slug}`);
  };
  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 max-w-5xl mx-auto p-8 grid grid-cols-2 gap-8 rounded-lg">
          <div className="flex items-center justify-center">
            <Image 
              src={product.image} 
              alt={product.name}
              width={400}
              height={400}
              style={{ objectFit: 'contain' }}
              priority={index === 0}
            />
          </div>
          <div className="max-w-[450px]">
          {product.isNew && (
            <p className="text-orange-500 uppercase tracking-widest mb-2">
              New Product
            </p>
          )}
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <button className="button-main mt-3" onClick={() => handleClick(product)}>
            SEE PRODUCT
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
