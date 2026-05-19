'use client';
import { useRouter } from "next/navigation";
import SpeakerImg from "@/assets/home/desktop/image-speaker-zx7.jpg";

const Index = () => {
  const router = useRouter();
  return (
      <section className="container mx-auto px-4 md:px-8 lg:px-12">
        <div 
          className="relative bg-gray-300 mx-auto my-8 h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${SpeakerImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="h-full flex items-center px-6 md:px-8 lg:px-12">
            <div className="text-left space-y-4 md:space-y-6 lg:space-y-8">
              <h4 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                ZX7 SPEAKER
              </h4>
              <button 
                className="py-3 px-6 md:py-4 md:px-8 text-black font-semibold text-xs md:text-[13px] bg-transparent border border-black hover:bg-gray-900 hover:text-white transition-colors"
                onClick={() => router.push("/featuresPage/zx7-speaker")}
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Index;
