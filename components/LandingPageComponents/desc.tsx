import Image from "next/image"

import descImage from "@/assets/shared/desktop/image-best-gear.jpg"



export default function Desc() {

  return (

      <div className="max-w-7xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse gap-8 md:flex-row items-center md:gap-8 lg:gap-[125px]">
          {/* Right Image - On Top for Mobile */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0 md:order-2">
            <div className="relative w-[300px] h-[320px] md:w-[400px] md:h-[440px] lg:w-[540px] lg:h-[560px] max-w-md overflow-hidden rounded-lg">
              <Image
                src={descImage}
                alt="Man with headphones on phone call"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left md:order-1">
            <h2 className="text-black mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold">
              BRINGING YOU THE

              <br />

              <span className="text-orange-500">BEST</span> AUDIO GEAR

            </h2>



            <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-prose mx-auto md:mx-0">

              Located at the heart of New York City, AudioStyle is the premier store for high-end headphones, earphones,

              speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you

              to browse and experience the audio equipment yourself. You will also get to meet some of the fantastic

              people who make AudioStyle the best place to buy your portable audio equipment.

            </p>

          </div>

        </div>

      </div>

 

  )

}

