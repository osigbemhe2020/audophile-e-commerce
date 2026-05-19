'use client';
import Image from "next/image";
import earphonesImage from "@/assets/home/desktop/image-earphones-yx1.jpg";
import { useRouter } from "next/navigation";

const ProductShowcase = () => {
  const router = useRouter();
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 rounded-lg overflow-hidden">
        {/* Left: Product Image with Dark Background */}
        <div className="relative h-[200px] md:h-[280px] lg:h-[320px]">
          <Image
              src={earphonesImage}
              alt="YX1 Wireless Earphones"
              className="object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
          />
        </div>

        {/* Right: Product Info with Light Background */}
        <div className="bg-gray-200 rounded-lg flex flex-col justify-center p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
              YX1 EARPHONES
            </h4>
            <button 
            onClick={() => router.push("/featuresPage/yx1-wireless-earphones")}
            className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded hover:bg-gray-900 hover:text-white transition-colors font-semibold text-sm md:text-base w-fit">
                SEE PRODUCT
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;