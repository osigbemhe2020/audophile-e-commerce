"use client"

interface ProductDetailsProps {
  pname : string
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  onAddToCart: () => void
}

export default function ProductDetails({ pname, quantity, onIncrement, onDecrement, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
         {pname}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The
          stylish yet durable sennheiser wireless headsets is a brilliant companion at home or on the move.
        </p>
      </div>

      <div className="text-3xl font-bold">$ 899</div>

      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-border rounded-lg overflow-hidden bg-secondary">
          <button
            onClick={onDecrement}
            className="px-4 py-3 text-foreground hover:bg-accent transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <div className="px-6 py-3 min-w-16 text-center font-medium border-l border-r border-border">{quantity}</div>
          <button
            onClick={onIncrement}
            className="px-4 py-3 text-foreground hover:bg-accent transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="button-main"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
