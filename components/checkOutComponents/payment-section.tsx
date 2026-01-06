"use client"

import type React from "react"

import { useState } from "react"

interface PaymentSectionProps {
  paymentMethod: string
  setPaymentMethod: (method: string) => void
}

export default function PaymentSection({ paymentMethod, setPaymentMethod }: PaymentSectionProps) {
  const [paymentData, setPaymentData] = useState({
    moneyNumber: "",
    emoneyPin: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      
      <h6 className="text-[var(--main-orange)] mb-6">PAYMENT DETAILS</h6>
      <div className="space-y-6">
        {/* Payment Method */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-4">Payment Method</p>
          <div className="space-y-3">
            {/* e-Money Option */}
            <label
              className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-orange-500 transition-colors"
              style={{ borderColor: paymentMethod === "emoney" ? "var(--main-orange)" : "#D1D5DB" }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="emoney"
                checked={paymentMethod === "emoney"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-[var(--main-orange)] accent-[var(--main-orange)]"
              />
              <div className="flex items-center ml-3">
                <div className="w-5 h-5 rounded-full bg-[var(--main-orange)] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="ml-3 font-medium text-gray-900">e-Money</span>
              </div>
            </label>

            {/* Cash on Delivery Option */}
            <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-orange-500 transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 accent-gray-300"
              />
              <span className="ml-3 font-medium text-gray-900">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* e-Money Fields */}
        {paymentMethod === "emoney" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Money Number</label>
              <input
                type="text"
                name="moneyNumber"
                value={paymentData.moneyNumber}
                onChange={handleChange}
                placeholder="238521993"
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">e-Money PIN</label>
              <input
                type="text"
                name="emoneyPin"
                value={paymentData.emoneyPin}
                onChange={handleChange}
                placeholder="6891"
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
