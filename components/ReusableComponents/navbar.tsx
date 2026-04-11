"use client" 

import { useSession, signOut} from "next-auth/react" 
import { ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

interface NavbarProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Navbar({ isCartOpen, setIsCartOpen }: NavbarProps) {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
   const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideTrigger = dropdownRef.current?.contains(target);
      const clickedInsideMenu = dropdownMenuRef.current?.contains(target); // ← added

      if (!clickedInsideTrigger && !clickedInsideMenu) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async () => {
  console.log("Signing out...");
  await signOut({ redirect: true, callbackUrl: "/" });
  setIsDropdownOpen(false);
};


  const AccountDropdown = () => (
    <div 
      ref={dropdownMenuRef}
      className="fixed bg-white shadow-md rounded-md w-48 z-50"
      style={{
        top: `${dropdownPosition.top}px`,
        right: `${dropdownPosition.right}px`
      }}
    >
      {session ? (
        <>
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
            <p className="text-xs text-gray-500">{session.user?.email}</p>
          </div>
          <button 
            onClick={async () => {
              console.log("Logging out...");
              await handleSignOut();
            }}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link 
            href="/signin" 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => setIsDropdownOpen(false)}
          >
            Sign In
          </Link>
        </>
      )}
    </div>
  );
  
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
          <div className="flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <User 
                size={24} 
                className="text-white cursor-pointer hover:text-orange-500 transition" 
                onClick={handleUserClick}
              />
              {isDropdownOpen && createPortal(<AccountDropdown />, document.body)}
            </div>
            <div onClick={() => setIsCartOpen(!isCartOpen)}><ShoppingCart size={24} className="text-white cursor-pointer hover:text-orange-500 transition" /></div>
          </div>
        
      </div>
    </nav>
  )
}
