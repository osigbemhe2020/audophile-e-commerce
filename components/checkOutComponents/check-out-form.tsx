"use client"

import { useState } from "react"
import BillingSection  from "./billing-section"
import ShippingSection  from "./shipping-section"
import PaymentSection  from "./payment-section"

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("emoney")

  return (
    <div className="bg-white rounded-lg p-8 space-y-8">
      <div>
        <h3>Checkout</h3>
      </div>

      <BillingSection />
      <ShippingSection />
      <PaymentSection paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
    </div>
  )
}
