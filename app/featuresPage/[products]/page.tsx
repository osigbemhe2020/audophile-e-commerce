import Features from "@/lib/featuresData";
import ProductPage from "@/components/FeaturesComponents/product-page";
import PhotoGrid from "@/components/FeaturesComponents/photogrid";
import ProductCat from "@/components/ReusableComponents/productCat";
import Desc from "@/components/LandingPageComponents/desc";
import Footer from "@/components/ReusableComponents/footer";
import SmallHeader from "@/components/ReusableComponents/smallHeader";
import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Props = {
  params: Promise<{
    products: string;
  }>;
};

type Product = {
  _id?: string;
  slug?: string;
  name?: string;
  shortName?: string;
  features?: string;
  inTheBox?: string[];
  mainImage?: SanityImageSource;
  price?: number;
  gallery?: SanityImageSource[];
};

const NoProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">Product Not Found</h1>
      <p className="mt-2 text-gray-500">
        Sorry, we couldn't find that product.
      </p>
    </div>
  );
};

export default async function FeaturePage({ params }: Props) {
  const { products } = await params;

  const sanityProducts = await client.fetch<Product[]>(allProductsQuery);
  const sanityProduct = sanityProducts.find((p: Product) => p.slug === products);

  const localFeature = Features.find((p) => p.slug === products);

  const productData = sanityProduct || localFeature;

  if (!productData) {
    return <NoProduct />;
  }

  return (
    <section>
      <SmallHeader />
      <div className="">
        <ProductPage
          _id={sanityProduct?._id || ''}
          productName={sanityProduct?.name || 'Unknown Product'}
          shortName={sanityProduct?.shortName || sanityProduct?.name || 'Unknown Product'}
          slug={sanityProduct?.slug || ''}
          features={sanityProduct?.features || ''}
          inTheBox={sanityProduct?.inTheBox || localFeature?.inthebox || []}
          mainImage={sanityProduct?.mainImage ? urlFor(sanityProduct.mainImage).url() : ''}
          price={sanityProduct?.price || 0}
        />
        <PhotoGrid
          img1={sanityProduct?.gallery?.[0] ? urlFor(sanityProduct.gallery[0]).url() : ''}
          img2={sanityProduct?.gallery?.[1] ? urlFor(sanityProduct.gallery[1]).url() : ''}
          img3={sanityProduct?.gallery?.[2] ? urlFor(sanityProduct.gallery[2]).url() : ''}
        />
      </div>
      <ProductCat />
      <Desc />
      <Footer />
    </section>
  );
}