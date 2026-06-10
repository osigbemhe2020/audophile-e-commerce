"use client" 

import { useSession, signOut} from "next-auth/react" 
import { ShoppingCart, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { useCartStore } from "@/store/CartStore"
import { saveCartToSanity, fetchCartFromSanity} from "@/lib/cartApi"

interface NavbarProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobile?: boolean;
  isTablet?: boolean;
}

export default function Navbar({ isCartOpen, setIsCartOpen, isMobile, isTablet }: NavbarProps) {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const { cartProducts, clearCart, setCart } = useCartStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideTrigger = dropdownRef.current?.contains(target);
      const clickedInsideMenu = dropdownMenuRef.current?.contains(target);

      if (!clickedInsideTrigger && !clickedInsideMenu) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleMobileMenuClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      
      if (mobileMenu && !mobileMenu.contains(target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleMobileMenuClickOutside);
      return () => document.removeEventListener('mousedown', handleMobileMenuClickOutside);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
  const syncOnLogin = async () => {
    if (!session?.user?.id) return;

    const lastUserId = localStorage.getItem("last-user-id");

    // ✅ Only sync if this is a fresh login
    if (lastUserId === session.user.id) return; // ← already synced, skip

    const sanityCart = await fetchCartFromSanity(session.user.id);
    setCart(sanityCart);
    localStorage.setItem("last-user-id", session.user.id);
  };

  syncOnLogin();
}, [session?.user?.id]);

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

  // ✅ On logout — save cart to Sanity first
  const handleSignOut = async () => {
  if (session?.user?.id) {
    // ✅ Save cart to Sanity first
    await saveCartToSanity(session.user.id, cartProducts);
    console.log("✅ Cart saved to Sanity");
  }
  // ✅ Clear local cart after saving to Sanity
  clearCart();
  // ✅ Clear last user id
  localStorage.removeItem("last-user-id");
  
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
            onClick={handleSignOut}
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
      <div className="max-w-7xl mx-auto pb-[30px] flex items-center justify-between px-4 md:px-8">
        {/* Mobile/Tablet: Hamburger menu on left */}
        {(isMobile || isTablet) && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white cursor-pointer hover:text-orange-500 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        <div className="text-white text-[18px] font-[800]">audiophile</div>

        {/* Desktop Navigation */}
        {!isMobile && !isTablet && (
          <div className="w-[429px]">
            <ul className="flex gap-8 text-gray-400 text-sm font-medium tracking-wide">
              <li>
                <Link href="/" className="text-white hover:text-[var(--main-orange)] transition">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/productsPage/headphones" className="text-white hover:text-[var(--main-orange)] transition">
                  HEADPHONES
                </Link>
              </li>
              <li>
                <Link href="/productsPage/speakers" className="text-white hover:text-[var(--main-orange)] transition">
                  SPEAKERS
                </Link>
              </li>
              <li>
                <Link href="/productsPage/earphones" className="text-white hover:text-[var(--main-orange)] transition">
                  EARPHONES
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Desktop: User and Cart icons */}
          {!isMobile && !isTablet && (
            <>
              <div className="relative" ref={dropdownRef}>
                <User 
                  size={24} 
                  className="text-white cursor-pointer hover:text-orange-500 transition" 
                  onClick={handleUserClick}
                />
                {isDropdownOpen && createPortal(<AccountDropdown />, document.body)}
              </div>
              <div onClick={() => setIsCartOpen(!isCartOpen)}>
                <ShoppingCart size={24} className="text-white cursor-pointer hover:text-orange-500 transition" />
              </div>
            </>
          )}

          {/* Mobile/Tablet: Cart and User icons */}
          {(isMobile || isTablet) && (
            <>
              <div onClick={() => setIsCartOpen(!isCartOpen)}>
                <ShoppingCart size={24} className="text-white cursor-pointer hover:text-orange-500 transition" />
              </div>
              <div className="relative" ref={dropdownRef}>
                <User 
                  size={24} 
                  className="text-white cursor-pointer hover:text-orange-500 transition" 
                  onClick={handleUserClick}
                />
                {isDropdownOpen && createPortal(<AccountDropdown />, document.body)}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {(isMobile || isTablet) && isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 z-50 min-h-screen" data-mobile-menu>
          <div className="flex flex-col p-4 pt-20 space-y-4">
            <Link 
              href="/" 
              className="text-white hover:text-[var(--main-orange)] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/productsPage/headphones" 
              className="text-white hover:text-[var(--main-orange)] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HEADPHONES
            </Link>
            <Link 
              href="/productsPage/speakers" 
              className="text-white hover:text-[var(--main-orange)] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SPEAKERS
            </Link>
            <Link 
              href="/productsPage/earphones" 
              className="text-white hover:text-[var(--main-orange)] transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EARPHONES
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}