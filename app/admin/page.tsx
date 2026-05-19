import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { allProductsQuery } from "@/sanity/lib/queries"

export default async function AdminDashboard() {
  const products = await client.fetch(allProductsQuery);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Welcome back 👋</h2>
        <p className="text-gray-500 mt-1">Manage your store from here</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-3xl font-bold mt-1">{products.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-500">New Products</p>
          <p className="text-3xl font-bold mt-1">
            {products.filter((p: any) => p.isNew).length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <p className="text-sm text-gray-500">Total Value</p>
          <p className="text-3xl font-bold mt-1">
            ${products.reduce((acc: number, p: any) => acc + p.price, 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold mb-4">Quick Actions</h3>
        <div className="flex gap-4">
          <Link
            href="/admin/products/new"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm"
          >
            + Add New Product
          </Link>
          <Link
            href="/admin/products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  )
}