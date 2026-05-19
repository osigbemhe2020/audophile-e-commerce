"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/store/CartStore"
import { createPortal } from "react-dom"
import CartModal from "../modals/CartModal"
import type { StaticImageData } from "next/image"
import ProductDetails from "./products-details"
import FeaturesSection from "./features-section"
import InTheBoxSection from "./in-box-section"

type ProductProps = {
  _id: string;
  productName: string;
  shortName: string;
  slug: string;
  features: string;
  inTheBox: string[];
  mainImage: StaticImageData | string;
  price: number;
};

export default function ProductPage({ _id, productName, shortName, slug, features, inTheBox, mainImage, price }: ProductProps) {
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { addToCart } = useCartStore()

  const handleAddToCart = () => {
    const imageSrc =
      typeof mainImage === "string"
        ? mainImage
        : (mainImage as StaticImageData).src;

    // ✅ Just add to Zustand — persisted to localStorage automatically
    addToCart({
      id: slug,
      name: productName,
      shortName: shortName, // ✅ uses real shortName from Sanity
      price,
      quantity,
      image: imageSrc,
    });

    setIsCartOpen(true); // ✅ opens modal instantly
  };

  const incrementQuantity = () => setQuantity((q) => q + 1)
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

  return (
    <main className="w-full px-8 md:px-8 lg:px-[165px] bg-white">
      <div className="mt-[20px] md:mt-[20px] lg:mt-[79px]">
        <Link href="./" className="text-sm">Go Back</Link>
      </div>

      <section className="mt-[20px] md:mt-[40px] lg:mt-[56px] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="flex items-start justify-start rounded-lg">
            <Image
              src={mainImage}
              alt={productName}
              width={540}
              height={560}
              className="object-contain h-[400px] md:h-[560px]"
            />
          </div>
          <div className="flex h-full items-center justify-center">
            <ProductDetails
              pname={productName}
              quantity={quantity}
              price={price}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12">
          <FeaturesSection features={features} />
          <InTheBoxSection items={inTheBox} />
        </div>
      </section>

      {isCartOpen && createPortal(
        <CartModal onClose={() => setIsCartOpen(false)} />,
        document.body
      )}
    </main>
  )
}