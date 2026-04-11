'use client'
import heroImage from "@/assets/home/desktop/image-hero.jpg"
import Navbar from "../ReusableComponents/navbar"
import CartModal from "../modals/CartModal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createPortal } from "react-dom"


export default function Hero() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  return (
    <div
  className="relative min-h-screen py-[32px] px-[165px]  bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage.src})`,
  }}
>  <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      
          <div className="space-y-6 mt-[109px]">
            <div className="overline text-white">NEW PRODUCT</div>

            <h1 className="text-white">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>

            <p className="text-white/75 max-w-[350px]">
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
