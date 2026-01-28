import Features from "@/lib/featuresData";
import ProductPage from "@/components/FeaturesComponents/product-page";

type Props = {
  params: Promise<{
    products: string;
  }>;
};

const NoProduct = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-2 text-gray-500">
          Sorry, we couldnt find that product.
        </p>
      </div>
  )
}

export default async function FeaturePage({ params }: Props) {
    const { products } = await params;

    const productName = Features.find(
  (p) => {
    return p.slug === products;
  }
);
    return productName ? (
      <ProductPage
        productName={productName.name}
        features={productName.features}
        inTheBox={productName.inthebox}
        mainImage={productName.mainImage}
        gridImages={productName.gridImages}
      />
    ) : (
      <NoProduct />
    );
}