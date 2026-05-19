'use client'

import Navbar from "../ReusableComponents/navbar"
import { createPortal } from 'react-dom';
import { useState } from "react"
import CartModal from "../modals/CartModal"
import useResponsive from "@/hooks/useResponsive"


const SmallHeader = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { isMobile, isTablet } = useResponsive();
  return (
    <div className="bg-black py-[20px] md:py-[32px] px-4 md:px-8 lg:px-[165px]">
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} isMobile={isMobile} isTablet={isTablet} />
         {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body // Renders directly into body
      )}
    </div>
  )
}

export default SmallHeader