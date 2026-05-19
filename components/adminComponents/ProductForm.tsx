"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface Category {
  _id: string
  name: string
}

interface ProductFormProps {
  categories: Category[]
  initialData?: any // ✅ for edit mode
  productId?: string // ✅ for edit mode
}

export default function ProductForm({ categories, initialData, productId }: ProductFormProps) {
  const router = useRouter()
  const isEditMode = !!productId

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    shortName: initialData?.shortName || "",
    slug: initialData?.slug || "",
    categoryId: initialData?.category?._ref || "",
    price: initialData?.price || "",
    isNew: initialData?.isNew || false,
    description: initialData?.description || "",
    features: initialData?.features || "",
    inTheBox: initialData?.inTheBox?.join("\n") || "", // ✅ array to multiline string
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  // ✅ Auto generate slug from name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    setFormData((prev) => ({ ...prev, name, slug }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // ✅ Convert inTheBox multiline string back to array
    const inTheBox = formData.inTheBox
      .split("\n")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "")

    const payload = {
      ...formData,
      price: Number(formData.price),
      inTheBox,
    }

    try {
      const url = isEditMode
        ? `/api/admin/products/${productId}`
        : "/api/admin/products"

      const method = isEditMode ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to save product")

      router.push("/admin/products")
      router.refresh()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 border border-gray-200">
      {error && (
        <div className="bg-red-50 text-red-500 px-4 py-3 rounded border border-red-200">
          {error}
        </div>
      )}

      {/* Name + Short Name */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
            required
            placeholder="XX99 Mark II Headphones"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="shortName"
            value={formData.shortName}
            onChange={handleChange}
            required
            placeholder="XX99 MK II"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Slug <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
          placeholder="xx99-mark-ii-headphones"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <p className="text-xs text-gray-400 mt-1">Auto-generated from name. You can edit it.</p>
      </div>

      {/* Category + Price */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min={0}
            placeholder="2999"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Is New */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isNew"
          id="isNew"
          checked={formData.isNew}
          onChange={handleChange}
          className="w-4 h-4 accent-orange-500"
        />
        <label htmlFor="isNew" className="text-sm font-medium text-gray-700">
          Mark as New Product
        </label>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Short product description..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Features */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features <span className="text-red-500">*</span>
        </label>
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Detailed product features..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* In The Box */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          In The Box <span className="text-red-500">*</span>
        </label>
        <textarea
          name="inTheBox"
          value={formData.inTheBox}
          onChange={handleChange}
          required
          rows={4}
          placeholder={"1x Headphone Unit\n1x Replacement Earcups\n1x 3.5mm Cable"}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <p className="text-xs text-gray-400 mt-1">One item per line.</p>
      </div>

      {/* Images note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
        <p className="text-sm text-yellow-700">
          <strong>Images</strong> — upload main image and gallery images directly via{" "}
          <a
            href="https://sanity.io/manage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Sanity Studio
          </a>{" "}
          after creating the product here.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition disabled:opacity-50"
        >
          {isSubmitting
            ? isEditMode ? "Saving..." : "Creating..."
            : isEditMode ? "Save Changes" : "Create Product"
          }
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/products")}
          className="bg-gray-100 text-gray-800 px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}