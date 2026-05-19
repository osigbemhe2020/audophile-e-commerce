import { writeClient } from "@/sanity/lib/writeClient";
import { client } from "@/sanity/lib/client";
import { CartProduct } from "@/store/CartStore";

// ✅ Save local cart to Sanity (called on logout)
export const saveCartToSanity = async (githubId: string, cartProducts: CartProduct[]) => {
  try {
    const user = await client.fetch(
      `*[_type == "user" && githubId == $githubId][0]`,
      { githubId }
    );

    if (!user) throw new Error("User not found");

    const sanityCart = cartProducts.map((item) => ({
      _key: item.id,
      productId: item.id,
      name: item.name,
      shortName: item.shortName,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }));

    await writeClient.patch(user._id).set({ localCart: sanityCart }).commit();
    console.log("✅ Cart saved to Sanity");
  } catch (error) {
    console.error("❌ saveCartToSanity error:", error);
  }
};

// ✅ Fetch cloud cart from Sanity (called on login)
export const fetchCartFromSanity = async (githubId: string): Promise<CartProduct[]> => {
  try {
    const user = await client.fetch(
      `*[_type == "user" && githubId == $githubId][0]{
        localCart[]{
          productId,
          name,
          shortName,
          price,
          quantity,
          image
        }
      }`,
      { githubId }
    );

    if (!user?.localCart) return [];

    const cartProducts: CartProduct[] = user.localCart.map((item: any) => ({
      id: item.productId,
      name: item.name,
      shortName: item.shortName,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }));

    console.log("✅ Cart fetched from Sanity:", cartProducts);
    return cartProducts;
  } catch (error) {
    console.error("❌ fetchCartFromSanity error:", error);
    return [];
  }
};

// ✅ Merge local cart and Sanity cart
// If same item exists in both — take the higher quantity
export const mergeCarts = (localCart: CartProduct[], sanityCart: CartProduct[]): CartProduct[] => {
  const merged = [...localCart];

  sanityCart.forEach((sanityItem) => {
    const existingIndex = merged.findIndex((item) => item.id === sanityItem.id);

    if (existingIndex !== -1) {
      // Item exists in both — take higher quantity
      merged[existingIndex] = {
        ...merged[existingIndex],
        quantity: Math.max(merged[existingIndex].quantity, sanityItem.quantity),
      };
    } else {
      // Item only in Sanity — add it to merged
      merged.push(sanityItem);
    }
  });

  return merged;
};