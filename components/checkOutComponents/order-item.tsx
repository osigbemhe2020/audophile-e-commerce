import Image from "next/image";
import type { StaticImageData } from "next/image";

interface OrderItemProps {
  item: {
    id: number
    name: string
    price: number
    quantity: number
    image: StaticImageData
  }
}

export default function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
          <Image 
            src={item.image} 
            alt={item.name}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{item.name}</p>
          <p className="text-gray-600 text-sm">$ {item.price.toLocaleString()}</p>
        </div>
      </div>
      <p className="font-bold text-gray-600">x{item.quantity}</p>
    </div>
  )
}
