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
    <div className="space-y-[80px]">
      {products.map((product, index) => {
        // Check if the index is odd to alternate layout
        const isReversed = index % 2 === 1;
        
        return (
          <div 
            key={index} 
            className="max-w-[1100px] mx-auto p-8 grid grid-cols-2 gap-[125px] rounded-lg"
          >
            {/* Image - will be first on even indexes, second on odd indexes */}
            <div className={`flex items-center justify-center ${isReversed ? 'order-2' : 'order-1'}`}>
              <Image 
                src={product.image} 
                alt={product.name}
                width={540}
                height={560}
                style={{ objectFit: 'contain' }}
                priority={index === 0}
              />
            </div>
            
            {/* Text content - will be second on even indexes, first on odd indexes */}
            <div className={`max-w-[450px] space-y-4 flex flex-col justify-center ${isReversed ? 'order-1' : 'order-2'}`}>
              {product.isNew && (
                <p className="text-[var(--main-orange)] overline mb-4">
                  New Product
                </p>
              )}
              <h2 className="text-2xl text-black font-bold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button 
                className="button-main mt-3" 
                onClick={() => handleClick(product)}
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}