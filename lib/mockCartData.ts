
// mockCartData.ts
import cartImage1 from "@/assets/cart/image-xx99-mark-two-headphones.jpg"
import cartImage2 from "@/assets/cart/image-xx59-headphones.jpg"
import cartImage3 from "@/assets/cart/image-yx1-earphones.jpg"
import { StaticImageData } from "next/image";
import Features from "./featuresData";

export interface CartProduct {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: StaticImageData | string;
}
const CartProducts: CartProduct[] = [
  {
    id: Features[0].slug,
    name: "XX99 Mark II Headphones",
    shortName: "XX99 MK II",
    price: Features[0].price,
    quantity: 1,
    image: cartImage1,
  },
  {
    id: Features[2].slug,
    name: "XX59 Headphones",
    shortName: "XX59",
    price: Features[2].price,
    quantity: 2,
    image: cartImage2,
  },
  {
    id: Features[5].slug,
    name: "YX1 Wireless Earphones",
    shortName: "YX1",
    price: Features[5].price,
    quantity: 1,
    image: cartImage3,
  },
];

export default CartProducts;
