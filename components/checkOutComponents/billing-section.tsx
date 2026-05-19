"use client"
import type React from "react"
import { FormData, FormErrors } from "./check-out-form"

interface BillingSectionProps {
  formData: FormData
  errors: FormErrors
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BillingSection({ formData, errors, onChange }: BillingSectionProps) {
  return (
    <div>
      <h6 className="text-[var(--main-orange)] mb-6">BILLING DETAILS</h6>
      <div className="space-y-6">

        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-900">Name</label>
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Alasai Wared"
            className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-900">Email Address</label>
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="alexei@mail.com"
            className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-gray-900">Phone Number</label>
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="+1 202-555-0136"
            className={`w-full px-4 py-3 border rounded bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

      </div>
    </div>
  )
}