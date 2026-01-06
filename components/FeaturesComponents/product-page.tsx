"use client"

import { useState } from "react"
import Link from "next/link"
import ProductImage from "./product-image"
import ProductDetails from "./products-details"
import FeaturesSection from "./features-section"
import InTheBoxSection from "./in-box-section"

type ProductProps = {
  productName: string;
  features: string;
  inTheBox: string[];
};

export default function ProductPage({ productName, features, inTheBox }: ProductProps) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Handle add to cart logic here
    console.log(`Added ${quantity} item(s) to cart`)
  }

  const incrementQuantity = () => setQuantity((q) => q + 1)
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

  return (
    <main className="min-h-screen bg-background">
      {/* Header with Go Back Link */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
          Go Back
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Image */}
          <ProductImage />

          {/* Product Details */}
          <ProductDetails
            pname={productName}
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* Features and In The Box Sections */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FeaturesSection features={features} />
          <InTheBoxSection items={inTheBox} />
        </div>
      </section>
    </main>
  )
}
