import AdsOne from "./adsOne";
import ProductTwo from "./productTwo";
import ProductShowcase from "./product-showcase";

export default function Ads() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="h-8"></div>
        </div>
      </header>

      {/* Top Product Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Headphones */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-20 h-20 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">HEADPHONES</h3>
            <p className="text-xs text-gray-500 mt-1">SHOP</p>
          </div>

          {/* Speakers */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-20 h-20 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">SPEAKERS</h3>
            <p className="text-xs text-gray-500 mt-1">SHOP</p>
          </div>

          {/* Earphones */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-20 h-20 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900">EARPHONES</h3>
            <p className="text-xs text-gray-500 mt-1">SHOP</p>
          </div>
        </div>
      </section>

      {/* ZX9 Speaker Banner */}
      <AdsOne />

      {/* ZX7 Speaker Section */}
      <ProductTwo />

      {/* YX1 Earphones Section */}
      <ProductShowcase />
    </div>
  );
}