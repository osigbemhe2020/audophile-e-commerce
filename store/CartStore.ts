import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartActions {
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
  clearCart: () => void;
  addToCart: (product: CartProduct) => void;
  setCart: (products: CartProduct[]) => void;
}

interface CartStore extends CartActions {
  cartProducts: CartProduct[];
  getTotalItems: () => number;
  calculateTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartProducts: [],

      addToCart: (newProduct: CartProduct) => {
        set((state) => {
          const existingIndex = state.cartProducts.findIndex(
            (item) => item.id === newProduct.id
          );
          if (existingIndex !== -1) {
            const updatedCart = [...state.cartProducts];
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              quantity: updatedCart[existingIndex].quantity + newProduct.quantity,
            };
            return { cartProducts: updatedCart };
          }
          return { cartProducts: [...state.cartProducts, newProduct] };
        });
      },

      handleIncrement: (id: string) => {
        set((state) => ({
          cartProducts: state.cartProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }));
      },

      handleDecrement: (id: string) => {
        set((state) => ({
          cartProducts: state.cartProducts
            .map((product) =>
              product.id === id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
            .filter((product) => product.quantity > 0),
        }));
      },

      clearCart: () => set({ cartProducts: [] }),

      setCart: (products: CartProduct[]) => set({ cartProducts: products }),

      getTotalItems: () => {
        return get().cartProducts.reduce(
          (acc, product) => acc + product.quantity,
          0
        );
      },

      calculateTotal: () => {
        return get().cartProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);