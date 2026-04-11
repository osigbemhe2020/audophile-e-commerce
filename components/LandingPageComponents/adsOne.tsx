'use client';
import Image from "next/image";
import speakerOneImage from "@/assets/home/desktop/image-speaker-zx9.png";
import pattern from "@/assets/home/desktop/pattern-circles.svg";
import { useRouter } from "next/navigation";

export default function AdsOne() {
  const router = useRouter();
  return (
    <section className="relative w-full h-[560px] px-[96px] rounded-lg bg-[var(--main-orange)] flex items-center overflow-hidden">

      {/* === Pattern Background === */}
      <div 
        className="absolute inset-0 "
        style={{ backgroundImage: `url(${pattern.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}
      />

      {/* === Speaker Image === */}
      <div className="relative z-10 flex-shrink-0 w-[410px] h-[490px] translate-y-16">
        <Image
          src={speakerOneImage}
          alt="ZX9 Speaker"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* === Text Content === */}
      <div className="flex flex-col items-start justify-center text-white ml-[200px] z-20">
        <h1 className="text-[52px] font-bold leading-[58px] tracking-[2px]">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-base leading-relaxed mb-8 max-w-sm">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button 
          onClick={() => router.push("/featuresPage/zx9-speaker")}
          className="bg-black hover:bg-black/90 text-white font-semibold px-8 py-6 text-sm uppercase">
          See Product
        </button>
      </div>
    </section>
  );
}