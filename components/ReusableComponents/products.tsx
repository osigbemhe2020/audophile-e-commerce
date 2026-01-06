import Image from "next/image"
import productImage from '@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Product Image */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-stone-100 rounded-lg p-12 w-full max-w-md aspect-square flex items-center justify-center">
              <Image
                src={productImage}
                alt="XX99 Mark II Headphones"
                width={300}
                height={300}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">New Product</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
                XX99 Mark II Headphones
              </h1>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground max-w-md">
              The new XX99 Mark II headphone is the pinnacle of pristine audio. It redefines your premium headphone
              experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>

            <div className="pt-4">
              <button className="button-main">
                See Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
