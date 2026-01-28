
interface CartProduct {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
}
const CartProducts: CartProduct[] = [
  {
    id: "1",
    name: "XX99 Mark II Headphones",
    shortName: "XX99 MK II",
    price: 2999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "XX59 Headphones",
    shortName: "XX59",
    price: 899,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "YX1 Wireless Earphones",
    shortName: "YX1",
    price: 599,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop",
  },
];

export default CartProducts;
