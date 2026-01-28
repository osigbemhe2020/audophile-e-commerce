import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import CartProducts from "@/lib/mockCartData";

interface CartItemProps {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

interface CartModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const CartItem = ({
  id,
  shortName,
  price,
  quantity,
  image,
  onIncrement,
  onDecrement,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={shortName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm uppercase text-[var(--main-black)]">
            {shortName}
          </span>
          <span className="text-base font-bold text-[var(--main-grey)]">
            $ {price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-[var(--main-grey)] p-2 rounded">
        <button
          onClick={() => onDecrement(id)}
          className="border-none p-2 rounded cursor-pointer hover:opacity-80"
          aria-label="Decrease quantity"
        >
          <Minus size={12} />
        </button>
        <span className="w-8 text-center text-base font-bold text-[var(--main-black)]">
          {quantity}
        </span>
        <button
          onClick={() => onIncrement(id)}
          className="border-none p-2 rounded cursor-pointer hover:opacity-80"
          aria-label="Increase quantity"
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
};

const CartModal = ({ onClose }: CartModalProps) => {
  const [products, setProducts] = useState(CartProducts);

  const handleIncrement = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemoveAll = () => {
    setProducts([]);
  };

  const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <>
      {/* Overlay - clicks here will close the modal */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div 
        className="fixed top-0 right-0 h-full flex items-start justify-end p-6 pt-24 z-[51] pointer-events-none"
      >
        {/* Modal Content - clicks here won't close the modal */}
        <div 
          className="bg-white p-6 rounded-lg shadow-lg pointer-events-auto max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold uppercase text-[var(--main-black)]">
              Cart ({totalItems})
            </h3>
            <button
              onClick={handleRemoveAll}
              className="text-sm underline hover:text-orange-500 transition-colors duration-200"
            >
              Remove all
            </button>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-6 mb-8">
            {products.length === 0 ? (
              <p className="text-center py-8 text-[var(--main-grey)]">
                Your cart is empty
              </p>
            ) : (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  {...product}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              ))
            )}
          </div>

          {/* Total */}
          {products.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm uppercase text-[var(--main-grey)]">
                  Total
                </span>
                <span className="text-lg font-bold text-[var(--main-black)]">
                  $ {totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="btn-primary w-full">
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