// order-summary.tsx
"use client"

import OrderItem  from "./order-item"
import OrderTotals from "./orders-total"
import { useCartStore } from "@/store/CartStore"

interface OrderSummaryProps {
  onSubmit?: () => void;
  isFormValid?: boolean;
}

export default function OrderSummary({ onSubmit, isFormValid }: OrderSummaryProps) {
  const { cartProducts, calculateTotal } = useCartStore();
  
  const subtotal = calculateTotal();
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2); // 20% VAT
  const grandTotal = subtotal + shipping + vat;

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit?.() // ✅ only opens modal if form is valid
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-8">
      <h3 className="mb-8">SUMMARY</h3>

      <div className="space-y-6 mb-8">
        {cartProducts.map((product) => (
          <OrderItem key={product.id} item={{
            id: parseInt(product.id),
            name: product.shortName,
            price: product.price,
            quantity: product.quantity,
            image: product.image
          }} />
        ))}
      </div>

      <OrderTotals subtotal={subtotal} shipping={shipping} vat={vat} grandTotal={grandTotal} />

      <button 
         onClick={handleSubmit}
        className="w-full mt-8 bg-[var(--main-orange)] hover:bg-[var(--main-orange-hover)] text-white font-semibold py-4 px-6 rounded text-sm tracking-wider transition-colors"
      >
        CONTINUE & PAY
      </button>
    </div>
  )
}
