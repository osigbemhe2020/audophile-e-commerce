"use client"
import type React from "react"
import { FormData, FormErrors } from "./check-out-form"

interface ShippingSectionProps {
  formData: FormData
  errors: FormErrors
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ShippingSection({ formData, errors, onChange }: ShippingSectionProps) {
  return (
    <div>
      <h6 className="text-[var(--main-orange)] mb-6">SHIPPING INFO</h6>
      <div className="space-y-6">

        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-900">Address</label>
            {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
          </div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChange}
            placeholder="1137 Williams Avenue"
            className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-900">ZIP Code</label>
              {errors.zipCode && <span className="text-red-500 text-xs">{errors.zipCode}</span>}
            </div>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={onChange}
              placeholder="10001"
              className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-900">City</label>
              {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
            </div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChange}
              placeholder="New York"
              className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-900">Country</label>
            {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
          </div>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={onChange}
            placeholder="United States"
            className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

      </div>
    </div>
  )
}