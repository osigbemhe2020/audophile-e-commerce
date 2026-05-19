import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { allProductsQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import DeleteButton from "@/components/adminComponents/DeleteButton"

export default async function AdminProductsPage() {
  const products = await client.fetch(allProductsQuery);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products ({products.length})</h2>
        <Link
          href="/admin/products/new"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm"
        >
          + Add New Product
        </Link>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Product</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Category</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Price</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product: any) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {product.mainImage && (
                      <img
                        src={urlFor(product.mainImage).width(48).height(48).url()}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-gray-500 text-xs">{product.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {product.category?.name || "—"}
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  ${product.price?.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {product.isNew ? (
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                      Regular
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/products/${product._id}/edit`}
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Edit
                    </Link>
                    <DeleteButton productId={product._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}