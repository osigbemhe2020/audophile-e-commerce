import Products from "@/lib/productsData";
import ProductList from "@/components/ProductsComponents/ProductList";
import Header from "@/components/ReusableComponents/header";
import ProductCat from "@/components/ReusableComponents/productCat";
import { client } from "@/sanity/lib/client";
import { allCategoryQuery } from "@/sanity/lib/queries";


type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  // Get data from Sanity
  const sanityCategories = await client.fetch(allCategoryQuery);
  const sanityCategory = sanityCategories.find((c: any) => c.slug === category);
  
  console.log('category products >>>>', sanityCategory.products)
  
  // Get data from local products data
  const localCategory = Products.find(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  
  // Use Sanity data if available, otherwise fallback to local
  const categoryData = sanityCategory || localCategory;
  
  if (!categoryData) {
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
      <Header title={sanityCategory?.name || localCategory?.category || ''} />
      <div className="mx-6 md:mx-10 my-[80px] bg-[#FFFFFF]">
      <ProductList products={localCategory?.items || sanityCategory?.products || []} />
      </div>
      <ProductCat/>
    </div>
  );
}
