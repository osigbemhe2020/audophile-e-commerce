'use client'

import Navbar from "../ReusableComponents/navbar"
import { createPortal } from 'react-dom';
import { useState } from "react"
import CartModal from "../modals/CartModal"


const SmallHeader = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="bg-black py-[32px] px-[165px]">
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
         {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body // Renders directly into body
      )}
    </div>
  )
}

export default SmallHeader