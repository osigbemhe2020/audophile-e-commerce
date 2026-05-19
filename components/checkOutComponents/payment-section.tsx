"use client"
import type React from "react"
import { FormData, FormErrors } from "./check-out-form"

interface PaymentSectionProps {
  formData: FormData
  errors: FormErrors
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PaymentSection({ formData, errors, onChange }: PaymentSectionProps) {
  return (
    <div>
      <h6 className="text-[var(--main-orange)] mb-6">PAYMENT DETAILS</h6>
      <div className="space-y-6">

        <div>
          <p className="text-sm font-medium text-gray-900 mb-4">Payment Method</p>
          <div className="space-y-3">
            <label
              className="flex items-center p-4 border-2 rounded cursor-pointer hover:border-orange-500 transition-colors"
              style={{ borderColor: formData.paymentMethod === "emoney" ? "var(--main-orange)" : "#D1D5DB" }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="emoney"
                checked={formData.paymentMethod === "emoney"}
                onChange={onChange}
                className="w-4 h-4 accent-[var(--main-orange)]"
              />
              <span className="ml-3 font-medium text-gray-900">e-Money</span>
            </label>

            <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-orange-500 transition-colors"
              style={{ borderColor: formData.paymentMethod === "cash" ? "var(--main-orange)" : "#D1D5DB" }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === "cash"}
                onChange={onChange}
                className="w-4 h-4 accent-gray-300"
              />
              <span className="ml-3 font-medium text-gray-900">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {formData.paymentMethod === "emoney" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">e-Money Number</label>
                {errors.moneyNumber && <span className="text-red-500 text-xs">{errors.moneyNumber}</span>}
              </div>
              <input
                type="text"
                name="moneyNumber"
                value={formData.moneyNumber}
                onChange={onChange}
                placeholder="238521993"
                className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.moneyNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">e-Money PIN</label>
                {errors.emoneyPin && <span className="text-red-500 text-xs">{errors.emoneyPin}</span>}
              </div>
              <input
                type="text"
                name="emoneyPin"
                value={formData.emoneyPin}
                onChange={onChange}
                placeholder="6891"
                className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.emoneyPin ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}