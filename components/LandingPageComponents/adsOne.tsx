'use client';
import Image from "next/image";
import speakerOneImage from "@/assets/home/desktop/image-speaker-zx9.png";
import pattern from "@/assets/home/desktop/pattern-circles.svg";
import { useRouter } from "next/navigation";

export default function AdsOne() {
  const router = useRouter();
  return (
    <section className=" relative w-full h-auto min-h-[400px] md:h-[500px] lg:h-[560px] px-6 md:px-12 lg:px-[96px] py-8 md:py-12 rounded-lg bg-[var(--main-orange)] flex flex-col md:flex-row items-center justify-center overflow-hidden">

      {/* === Pattern Background === */}
      <div 
        className="absolute inset-0 "
        style={{ backgroundImage: `url(${pattern.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* === Speaker Image === */}
      <div className="relative z-10 flex-shrink-0 w-[200px] h-[240px] md:w-[300px] md:h-[360px] lg:w-[410px] lg:h-[490px] translate-y-8 md:translate-y-12 lg:translate-y-16">
        <Image
          src={speakerOneImage}
          alt="ZX9 Speaker"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* === Text Content === */}
      <div className="flex flex-col items-center md:items-start justify-center text-white z-20 mt-8 md:mt-0 md:ml-8 lg:ml-[200px] text-center md:text-left px-4">
        <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold leading-tight md:leading-[58px] tracking-[1px] md:tracking-[2px]">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-xs md:max-w-sm">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button 
          onClick={() => router.push("/featuresPage/zx9-speaker")}
          className="bg-black hover:bg-black/90 text-white font-semibold px-6 py-3 md:px-8 md:py-6 text-xs md:text-sm uppercase">
          See Product
        </button>
      </div>
    </section>
  );
}