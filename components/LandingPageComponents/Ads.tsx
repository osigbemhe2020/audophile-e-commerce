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
      <ProductCat/>
      
      {/* ZX9 Speaker Banner */}
      <AdsOne />

      {/* ZX7 Speaker Section */}
      <ProductTwo />

      {/* YX1 Earphones Section */}
      <ProductShowcase />
    </div>
  );
}