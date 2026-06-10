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
import type { SanityImageSource } from "@sanity/image-url/lib/types"; // also fix this import

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

    // Get data from Sanity
    const sanityProducts = await client.fetch<Product[]>(allProductsQuery);
    const sanityProduct = sanityProducts.find((p: Product) => p.slug === products);

    // Get images from local features data
    const localFeature = Features.find((p) => p.slug === products);

    console.log('Sanity product>>>>>', sanityProduct);
    

    // Use Sanity data if available, otherwise fallback to local
    const productData = sanityProduct || localFeature;

    if (!productData) {
      return <NoProduct />;
    }

    return (
      <section>
        <SmallHeader/>
        <div className="">
        <ProductPage
          _id={sanityProduct?._id || ''}
          productName={sanityProduct?.name || 'Unknown Product'}
          shortName={sanityProduct?.shortName || sanityProduct?.name || 'Unknown Product'} // ✅ add this
          slug={sanityProduct?.slug || ''}
          features={sanityProduct?.features || ''}
          inTheBox={sanityProduct?.inTheBox || localFeature?.inthebox || []}
          mainImage={urlFor(sanityProduct?.mainImage).url() || ''}
          price={sanityProduct?.price || 0}
        />
        <PhotoGrid
          img1={ urlFor(sanityProduct?.gallery?.[0]).url() || ''} // Fallback images
          img2={ urlFor(sanityProduct?.gallery?.[1]).url() || ''}
          img3={ urlFor(sanityProduct?.gallery?.[2]).url() || ''}
        />
        </div>
        <ProductCat/>
        <Desc/>
        <Footer/>
      </section>
    );
}