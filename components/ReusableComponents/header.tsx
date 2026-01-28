'use client'

import Navbar from "../ReusableComponents/navbar"
import { createPortal } from 'react-dom';
import { useState } from "react"
import CartModal from "../modals/CartModal"

const Header = ({title}: {title: string}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className='h-[35vh] bg-black py-[32px] px-[165px]'>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <div className="flex items-center justify-center h-full mt-[-10px]">
        <h2 className="text-white text-center">{title}</h2>
      </div>
      {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body // Renders directly into body
      )}
    </div>
  )
}

export default Header