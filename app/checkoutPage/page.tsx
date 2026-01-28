"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import CheckoutForm from "@/components/checkOutComponents/check-out-form"
import OrderSummary  from "@/components/checkOutComponents/order-summary"
import ThankYouModal from "@/components/modals/ThanksModal"
import CartProducts from "@/lib/mockCartData"

export default function CheckoutPage() {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleCheckout = () => {
    setIsThankYouOpen(true);
  };

  const grandTotal = CartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        {/* Right Column - Summary */}
        <div className="lg:col-span-1">
          <OrderSummary onCheckout={handleCheckout} />
        </div>
      </div>

      {/* Thank You Modal */}
      {isThankYouOpen && createPortal(
        <ThankYouModal 
          isOpen={isThankYouOpen} 
          onClose={() => setIsThankYouOpen(false)}
          items={CartProducts}
          grandTotal={grandTotal}
        />,
        document.body
      )}
    </div>
  )
}
