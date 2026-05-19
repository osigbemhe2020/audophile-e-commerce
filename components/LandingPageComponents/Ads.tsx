'use client';
import AdsOne from "./adsOne";
import ProductTwo from "./productTwo";
import ProductShowcase from "./product-showcase"
import ProductCat from "../ReusableComponents/productCat";

export default function Ads() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="h-8"></div>
        </div>
      </header>
      
      <div className="  mx-auto px-4 md:px-8 lg:px-12">
        <ProductCat/>
        
        {/* ZX9 Speaker Banner */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <AdsOne />
        </div>

        {/* ZX7 Speaker Section */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <ProductTwo />
        </div>

        {/* YX1 Earphones Section */}
        <div className="mt-20 md:mt-24 lg:mt-28">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
}