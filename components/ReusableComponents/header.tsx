'use client'

import Navbar from "../ReusableComponents/navbar"
import { createPortal } from 'react-dom';
import { useState } from "react"
import CartModal from "../modals/CartModal"
import useResponsive from "@/hooks/useResponsive"

const Header = ({title}: {title: string}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  return (
    <div className='h-[35vh] bg-black py-[20px] md:py-[32px] px-4 md:px-8 lg:px-[165px]'>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} isMobile={isMobile} isTablet={isTablet} />
      <div className="flex items-center justify-center h-full mt-[-10px]">
        <h2 className="text-white text-center text-xl md:text-2xl lg:text-3xl">{title}</h2>
      </div>
      {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body // Renders directly into body
      )}
    </div>
  )
}

export default Header