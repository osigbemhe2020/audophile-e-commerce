import Image from "next/image"
import descImage from "@/assets/shared/desktop/image-best-gear.jpg"

export default function Desc() {
  return (
    
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex items-center gap-[125px]">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className=" mb-8 ">
              BRINGING YOU THE
              <br />
              <span className="text-orange-500">BEST</span> AUDIO GEAR
            </h2>

            <p className="text-gray-700 leading-relaxed text-base">
              Located at the heart of New York City, AudioStyle is the premier store for high-end headphones, earphones,
              speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
              to browse and experience the audio equipment yourself. You'll also get to meet some of the fantastic
              people who make AudioStyle the best place to buy your portable audio equipment.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-[540px] h-[560px] max-w-md overflow-hidden rounded-lg">
              <Image
                src={descImage}
                alt="Man with headphones on phone call"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
 
  )
}
