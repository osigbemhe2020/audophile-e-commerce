'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  name: string;
  slug: string;
  description: string;
  isNew: boolean;
  image?: string;           // ✅ local data format
  mainImage?: {             // ✅ Sanity data format
    asset: {
      url: string;
    };
  };
};

export default function ProductList({ products }: { products: Product[] }) {
  const router = useRouter();

  const handleClick = (product: Product) => {
    router.push(`/featuresPage/${product.slug}`);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 space-y-12 md:space-y-16 lg:space-y-20">
      {products.map((product, index) => {
        const isReversed = index % 2 === 1;

        // ✅ Handle both local and Sanity image formats
        const imageSrc = product.mainImage?.asset?.url || product.image || '';

        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 rounded-lg"
          >
            <div className={`flex items-center justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative w-full max-w-[300px] md:max-w-[400px] h-[200px] md:h-[280px] lg:h-[320px]">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  // ✅ Fallback if no image
                  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400 text-sm">No image</p>
                  </div>
                )}
              </div>
            </div>

            <div className={`max-w-full md:max-w-[450px] space-y-4 md:space-y-6 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
              {product.isNew && (
                <p className="text-[var(--main-orange)] overline mb-4 text-sm md:text-base">
                  New Product
                </p>
              )}
              <h2 className="text-xl md:text-2xl text-black font-bold">{product.name}</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{product.description}</p>
              <button
                className="button-main mt-3 text-sm md:text-base"
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