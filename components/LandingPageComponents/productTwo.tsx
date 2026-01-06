import Image from "next/image";
import speakerImage from "@/assets/shared/desktop/image-zx7-speaker.jpg";

const Index = () => {
  return (
      <section className="bg-hero-bg">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-product-text text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
                ZX7 SPEAKER
              </h1>
              <button className="p-4 text-white bg-black">
                SEE PRODUCT
              </button>
            </div>

            {/* Product Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={speakerImage} 
                alt="ZX7 Speaker - Professional studio monitor" 
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

  );
};

export default Index;
