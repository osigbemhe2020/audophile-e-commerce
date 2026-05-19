import { client } from "@/sanity/lib/client"
import ProductForm from "@/components/adminComponents/ProductForm"

export default async function NewProductPage() {
  const categories = await client.fetch(`*[_type == "category"]{ _id, name }`);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Add New Product</h2>
        <p className="text-gray-500 mt-1">Fill in the details below to create a new product</p>
      </div>
      <ProductForm categories={categories} />
    </div>
  )
}