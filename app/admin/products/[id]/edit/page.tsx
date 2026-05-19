import { client } from "@/sanity/lib/client"
import ProductForm from "@/components/adminComponents/ProductForm"

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const [product, categories] = await Promise.all([
    client.fetch(`*[_type == "product" && _id == $id][0]{
      _id,
      name,
      shortName,
      "slug": slug.current,
      "category": category->{_id, name},
      price,
      isNew,
      description,
      features,
      inTheBox,
      mainImage,
      gallery
    }`, { id }),
    client.fetch(`*[_type == "category"]{ _id, name }`)
  ])

  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Edit Product</h2>
        <p className="text-gray-500 mt-1">Editing: <strong>{product.name}</strong></p>
      </div>
      <ProductForm
        categories={categories}
        initialData={product}
        productId={id}
      />
    </div>
  )
}