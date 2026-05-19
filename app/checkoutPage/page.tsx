"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import CheckoutForm from "@/components/checkOutComponents/check-out-form"
import OrderSummary from "@/components/checkOutComponents/order-summary"
import ThankYouModal from "@/components/modals/ThanksModal"
import { useCartStore } from "@/store/CartStore"
import { useSession } from "next-auth/react"
import { saveCartToSanity } from "@/lib/cartApi"

export default function CheckoutPage() {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { calculateTotal, cartProducts, clearCart } = useCartStore();
  const { data: session } = useSession();

  // ✅ Capture cart values before clearing
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderItems, setOrderItems] = useState<any[]>([]);

  const handleCheckout = async () => {
    if (!isFormValid) return;
    
    // ✅ Save cart values FIRST before clearing
    setOrderTotal(calculateTotal());
    setOrderItems([...cartProducts]);

    // ✅ Then clear Sanity cart
    if (session?.user?.id) {
      await saveCartToSanity(session.user.id, []);
    }

    // ✅ Then clear local cart
    clearCart();

    // ✅ Then open modal — orderTotal and orderItems are already saved
    setIsThankYouOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm onSubmit={handleCheckout} onValidationChange={setIsFormValid} />
        </div>
        <div className="lg:col-span-1">
          <OrderSummary onSubmit={handleCheckout} isFormValid={isFormValid} />
        </div>
      </div>

      {isThankYouOpen && createPortal(
        <ThankYouModal
          isOpen={isThankYouOpen}
          onClose={() => setIsThankYouOpen(false)}
          grandTotal={orderTotal}   // ✅ use saved value
          items={orderItems}         // ✅ use saved value
        />,
        document.body
      )}
    </div>
  )
}