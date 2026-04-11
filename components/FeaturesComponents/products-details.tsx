"use client"

interface ProductDetailsProps {
  pname : string
  quantity: number
  price:number;
  onIncrement: () => void
  onDecrement: () => void
  onAddToCart: () => void
  isAddingToCart?: boolean // ✅ new prop
}

export default function ProductDetails({ pname, quantity, price, onIncrement, onDecrement, onAddToCart, isAddingToCart}: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-[480px]">
        <p className="text-[var(--main-orange)] overline mb-4">
                  New Product
        </p>
        <h2 className=" font-bold tracking-tighter ">
         {pname}
        </h2>
        <p className="my-8 leading-relaxed">
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
          stylish yet durable sennheiser wireless headsets is a brilliant companion at home or on the move.
        </p>
      </div>

      <div className="text-3xl font-bold">$ {price}</div>

      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center min-h-[50px]  rounded-lg overflow-hidden bg-gray-100">
          <button
            onClick={onDecrement}
            className="px-4 py-3 border-0 "
            aria-label="Decrease quantity"
          >
            −
          </button>
          <div className="px-6 py-3 min-w-16 text-center font-medium ">{quantity}</div>
          <button
            onClick={onIncrement}
            className="px-4 py-3 "
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          disabled={isAddingToCart}
          className="button-main disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isAddingToCart ? "ADDING..." : "ADD TO CART"}
        </button>
      </div>
    </div>
  )
}
