"use client"

import OrderItem  from "./order-item"
import OrderTotals from "./orders-total"

export default function OrderSummary() {
  const items = [
    { id: 1, name: "XX99 MK II", price: 2999, quantity: 1, image: "👂" },
    { id: 2, name: "XX59", price: 899, quantity: 2, image: "👂" },
    { id: 3, name: "YX1", price: 599, quantity: 1, image: "🎧" },
  ]

  const subtotal = 5396
  const shipping = 50
  const vat = 1079
  const grandTotal = 5446

  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-8">
      <h3 className="mb-8">SUMMARY</h3>

      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      <OrderTotals subtotal={subtotal} shipping={shipping} vat={vat} grandTotal={grandTotal} />

      <button className="w-full mt-8 bg-[var(--main-orange)] hover:bg-[var(--main-orange-hover)] text-white font-semibold py-4 px-6 rounded text-sm tracking-wider transition-colors">
        CONTINUE & PAY
      </button>
    </div>
  )
}
