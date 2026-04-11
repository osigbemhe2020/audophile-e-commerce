import Image from "next/image";

interface PhotoGridProps {
  img1: string;
  img2: string;
  img3: string;
}

const PhotoGrid = ({ img1, img2, img3 }: PhotoGridProps) => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 maxh-[50vh]">
        {/* Left Column: Two Images Stacked */}
        <div className="grid grid-rows-2 gap-6 h-full">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={img1}
              alt="Product gallery image 1"
              className="w-full h-full object-cover"
              width={300}
              height={100}
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={img2}
              alt="Product gallery image 2"
              className="w-full h-full object-cover"
              width={300}
              height={100}
            />
          </div>
        </div>

        {/* Right Column: Single Large Image */}
        <div className="rounded-lg overflow-hidden h-full">
          <Image
            src={img3}
            alt="Product gallery image 3"
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
