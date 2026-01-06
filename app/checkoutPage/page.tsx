"use client"

import CheckoutForm from "@/components/checkOutComponents/check-out-form"
import OrderSummary  from "@/components/checkOutComponents/order-summary"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        {/* Right Column - Summary */}
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
