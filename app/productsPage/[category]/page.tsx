import Products from "@/lib/productsData";
import ProductList from "@/components/ProductsComponents/ProductList";
import Header from "@/components/ReusableComponents/header";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  // Match category ignoring case
  const productCategory = Products.find(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  

  if (!productCategory) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
        <p className="mt-2 text-gray-500">
          Sorry, we couldnt find that product category.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <Header title={productCategory.category} />
      <div className="px-6 md:px-20 py-16">
      <ProductList products={productCategory.items} />
      </div>
    </div>
  );
}
