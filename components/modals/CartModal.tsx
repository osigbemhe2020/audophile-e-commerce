"use client"
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/CartStore";

interface CartModalProps {
  onClose: () => void;
}

interface CartItemProps {
  id: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string | StaticImageData;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

const CartItem = ({ id, shortName, price, quantity, image, onIncrement, onDecrement }: CartItemProps) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
        <Image src={image} alt={shortName} width={64} height={64} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm uppercase text-[var(--main-black)]">{shortName}</span>
        <span className="text-base font-bold text-[var(--main-grey)]">$ {price.toLocaleString()}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 bg-[var(--main-grey)] p-2 rounded">
      <button onClick={() => onDecrement(id)} className="border-none p-2 rounded cursor-pointer hover:opacity-80" aria-label="Decrease quantity">
        <Minus size={12} />
      </button>
      <span className="w-8 text-center text-base font-bold text-[var(--main-black)]">{quantity}</span>
      <button onClick={() => onIncrement(id)} className="border-none p-2 rounded cursor-pointer hover:opacity-80" aria-label="Increase quantity">
        <Plus size={12} />
      </button>
    </div>
  </div>
);

const CartModal = ({ onClose }: CartModalProps) => {
  const {
    cartProducts,
    handleIncrement,
    handleDecrement,
    clearCart,
    getTotalItems,
    calculateTotal,
  } = useCartStore();
  const router = useRouter();

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full flex items-start justify-end p-6 pt-24 z-[51] pointer-events-none">
        <div
          className="bg-white p-6 rounded-lg shadow-lg pointer-events-auto max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold uppercase text-[var(--main-black)]">
              Cart ({getTotalItems()})
            </h3>
            <button
              onClick={clearCart}
              className="text-sm underline hover:text-orange-500 transition-colors duration-200"
            >
              Remove all
            </button>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6 mb-8">
            {cartProducts.length === 0 ? (
              <p className="text-center py-8 text-[var(--main-grey)]">
                Your cart is empty
              </p>
            ) : (
              cartProducts.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  shortName={item.shortName}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              ))
            )}
          </div>

          {/* Total + Checkout */}
          {cartProducts.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm uppercase text-[var(--main-grey)]">Total</span>
                <span className="text-lg font-bold text-[var(--main-black)]">
                  $ {calculateTotal().toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => router.push("/checkoutPage")}
                className="btn-primary w-full"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;