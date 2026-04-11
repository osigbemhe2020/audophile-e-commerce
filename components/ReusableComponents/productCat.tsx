'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Headphones from '@/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import Speaker from '@/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import Earphones from '@/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

const ProductCat = () => {
  const router = useRouter();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Headphones */}
        <div 
          className="flex flex-col items-center cursor-pointer group" 
          onClick={() => router.push("/productsPage/headphones")}
        >
          <div className="relative w-full h-32 mb-4">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-100 rounded-lg" />
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <Image
                src={Headphones}
                alt="Headphones"
                width={150}
                height={150}
                className="w-32 h-auto object-contain relative z-10"
              />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Headphones</h3>
          <p className="text-xs text-gray-500 mt-1 group-hover:text-orange-500 transition-colors">
            SHOP →
          </p>
        </div>

        {/* Speakers */}
        <div 
          className="flex flex-col items-center cursor-pointer group" 
          onClick={() => router.push("/productsPage/speakers")}
        >
          <div className="relative w-full h-32 mb-4">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-100 rounded-lg" />
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <Image
                src={Speaker}
                alt="Speakers"
                width={150}
                height={150}
                className="w-32 h-auto object-contain relative z-10"
              />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Speakers</h3>
          <p className="text-xs text-gray-500 mt-1 group-hover:text-orange-500 transition-colors">
            SHOP →
          </p>
        </div>

        {/* Earphones */}
        <div 
          className="flex flex-col items-center cursor-pointer group" 
          onClick={() => router.push("/productsPage/earphones")}
        >
          <div className="relative w-full h-32 mb-4">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gray-100 rounded-lg" />
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <Image
                src={Earphones}
                alt="Earphones"
                width={150}
                height={150}
                className="w-32 h-auto object-contain relative z-10"
              />
            </div>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Earphones</h3>
          <p className="text-xs text-gray-500 mt-1 group-hover:text-orange-500 transition-colors">
            SHOP →
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductCat