'use client';
import { useRouter } from "next/navigation";
import SpeakerImg from "@/assets/home/desktop/image-speaker-zx7.jpg";

const Index = () => {
  const router = useRouter();
  return (
      <section>
        <div 
          className="relative bg-gray-300 mx-auto my-8 h-[320px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SpeakerImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="h-full flex items-center ">
            <div className="text-left ml-25  space-y-8">
              <h4 className="text-black">
                ZX7 SPEAKER
              </h4>
              <button 
                className="py-4 px-8 text-black font-semibold text-[13px] bg-transparent border border-black hover:bg-gray-900 hover:text-white transition-colors"
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
