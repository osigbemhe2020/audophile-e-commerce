import Image from "next/image";
import lifestyleImage1 from "@/assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import lifestyleImage2 from "@/assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import lifestyleImage3 from "@/assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

const PhotoGrid = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 maxh-[50vh]">
        {/* Left Column: Two Images Stacked */}
        <div className="grid grid-rows-2 gap-6 h-full">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={lifestyleImage1}
              alt="Person enjoying music with headphones"
              className="w-full h-full object-cover"
              width={500}
              height={300}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={lifestyleImage2}
              alt="Premium headphones with devices"
              className="w-full h-full object-cover"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Right Column: Single Large Image */}
        <div className="rounded-lg overflow-hidden h-full">
          <Image
            src={lifestyleImage3}
            alt="Hand holding white headphones"
            className="w-full h-full object-cover"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
