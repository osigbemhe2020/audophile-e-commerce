"use client"

import OrderItem  from "./order-item"
import OrderTotals from "./orders-total"
import CartProducts from "@/lib/mockCartData"

interface OrderSummaryProps {
  onCheckout?: () => void;
}

export default function OrderSummary({ onCheckout }: OrderSummaryProps) {
  const items = CartProducts.map(product => ({
    id: parseInt(product.id),
    name: product.shortName,
    price: product.price,
    quantity: product.quantity,
    image: product.image
  }))

  const subtotal = CartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const shipping = 50
  const vat = Math.round(subtotal * 0.2) // 20% VAT
  const grandTotal = subtotal + shipping + vat

  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-8">
      <h3 className="mb-8">SUMMARY</h3>

      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      <OrderTotals subtotal={subtotal} shipping={shipping} vat={vat} grandTotal={grandTotal} />

      <button 
        onClick={onCheckout}
        className="w-full mt-8 bg-[var(--main-orange)] hover:bg-[var(--main-orange-hover)] text-white font-semibold py-4 px-6 rounded text-sm tracking-wider transition-colors"
      >
        CONTINUE & PAY
      </button>
    </div>
  )
}
