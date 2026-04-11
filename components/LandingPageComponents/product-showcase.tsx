'use client';
import Image from "next/image";
import earphonesImage from "@/assets/home/desktop/image-earphones-yx1.jpg";
import { useRouter } from "next/navigation";

const ProductShowcase = () => {
  const router = useRouter();
  return (
    <section className="container mx-auto  py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[320px] md:h-auto rounded-lg overflow-hidden">
        {/* Left: Product Image with Dark Background */}

        <Image
            src={earphonesImage}
            alt="YX1 Wireless Earphones"
            className=" object-cover"
            width={640}
            height={320}
        />

        {/* Right: Product Info with Light Background */}
        <div className="bg-gray-200 rounded-lg flex flex-col justify-center p-12 space-y-8">
          <div className="ml-8 space-y-8">
          <h4 className="text-black">
            YX1 EARPHONES
          </h4>
         <button 
         onClick={() => router.push("/featuresPage/yx1-wireless-earphones")}
         className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors font-semibold text-sm w-fit">
              SEE PRODUCT
            </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;