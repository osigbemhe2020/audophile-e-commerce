import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-[#979797] bg-transparent">
      <div className="max-w-7xl mx-auto pb-[30px] flex items-center justify-between">
        <div className="text-white text-[18px] font-[800] ">audiophile</div>

        <div className="w-[429px]">
          <ul className="flex  gap-8 text-gray-400 text-sm font-medium tracking-wide">
            <li>
              <Link href="/" className=" text-white hover:text-[var(--main-orange)] transition">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/productsPage/headphones" className=" text-white hover:text-[var(--main-orange)] transition">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link href="/productsPage/speakers" className=" text-white hover:text-[var(--main-orange)] transition">
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link href="/productsPage/earphones" className=" text-white hover:text-[var(--main-orange)] transition">
                EARPHONES
              </Link>
            </li>
          </ul>
          </div>
          <div><ShoppingCart size={24} className="text-white cursor-pointer hover:text-orange-500 transition" /></div>
        
      </div>
    </nav>
  )
}
