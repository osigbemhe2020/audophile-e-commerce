'use client'
import heroImage from "@/assets/home/desktop/image-hero.jpg"
import Navbar from "../ReusableComponents/navbar"
import CartModal from "../modals/CartModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createPortal } from "react-dom"
import useResponsive from "@/hooks/useResponsive"


export default function Hero() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const { isMobile, isTablet } = useResponsive();
  return (
    <div
  className="relative min-h-screen py-[32px] px-[24px] sm:px-[50px] md:px-[100px] 
  lg:px-[165px] bg-cover md:bg-right bg-center"
  style={{
    backgroundImage: `url(${heroImage.src})`,
  }}
>  <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} isMobile={isMobile} isTablet={isTablet} />
      
          <div className="space-y-6 mt-[109px] lg:mt-[109px] md:mt-[80px] sm:mt-[60px] text-center lg:text-left">
            <div className="overline text-white">NEW PRODUCT</div>

            <h1 className="text-white text-4xl lg:text-5xl md:text-4xl sm:text-3xl">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>

            <p className="text-white/75 max-w-[350px] mx-auto lg:mx-0 text-sm lg:text-base md:text-sm sm:text-xs">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>

            <button className="button-main mt-1" onClick={() => router.push("/featuresPage/xx99-mark-ii-headphones")}>
              SEE PRODUCT
            </button>
          </div>
      {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body // Renders directly into body
      )}
    </div>
  )
}
