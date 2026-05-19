"use client"

import { useState } from "react"
import BillingSection from "./billing-section"
import ShippingSection from "./shipping-section"
import PaymentSection from "./payment-section"

export interface FormData {
  // Billing
  name: string
  email: string
  phone: string
  // Shipping
  address: string
  zipCode: string
  city: string
  country: string
  // Payment
  paymentMethod: string
  moneyNumber: string
  emoneyPin: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  address?: string
  zipCode?: string
  city?: string
  country?: string
  moneyNumber?: string
  emoneyPin?: string
}

interface CheckoutFormProps {
  onSubmit: () => void
  onValidationChange?: (isValid: boolean) => void
}

export default function CheckoutForm({ onSubmit, onValidationChange }: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "emoney",
    moneyNumber: "",
    emoneyPin: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    // Billing validation
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"

    // Shipping validation
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.country.trim()) newErrors.country = "Country is required"

    // Payment validation
    if (formData.paymentMethod === "emoney") {
      if (!formData.moneyNumber.trim()) newErrors.moneyNumber = "e-Money number is required"
      if (!formData.emoneyPin.trim()) newErrors.emoneyPin = "e-Money PIN is required"
    }

    setErrors(newErrors)
    const isValid = Object.keys(newErrors).length === 0
    onValidationChange?.(isValid)
    return isValid
  }

  const handleSubmit = () => {
    if (validate()) {
      onSubmit() // only opens modal if form is valid
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 space-y-8">
      <div>
        <h3>Checkout</h3>
      </div>

      <BillingSection
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />
      <ShippingSection
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />
      <PaymentSection
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        className="button-main w-full"
      >
        Continue & Pay
      </button>
    </div>
  )
}