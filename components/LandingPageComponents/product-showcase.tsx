import Image from "next/image";
import earphonesImage from "@/assets/home/desktop/image-earphones-yx1.jpg";

const ProductShowcase = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg overflow-hidden">
        {/* Left: Product Image with Dark Background */}
        <div className="bg-black rounded-lg flex items-center justify-center p-12">
          <Image
            src={earphonesImage}
            alt="YX1 Wireless Earphones"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right: Product Info with Light Background */}
        <div className="bg-muted rounded-lg flex flex-col justify-center p-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
            YX1 EARPHONES
          </h2>
         <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors font-semibold text-sm w-fit">
              SEE PRODUCT
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;