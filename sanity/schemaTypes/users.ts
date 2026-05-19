export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "githubId",
      title: "GitHub ID",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cart",
      title: "Cart",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
          ],
          preview: {
            select: {
              title: "product.name",
              subtitle: "quantity",
              media: "product.mainImage",
            },
            prepare({ title, subtitle, media }: { title: string; subtitle: number; media: any }) {
              return {
                title: title || "Unknown Product",
                subtitle: subtitle ? `Qty: ${subtitle}` : "No quantity set",
                media,
              };
            },
          },
        },
      ],
    },

    // ✅ New field for Zustand/localStorage cart sync
    {
      name: "localCart",
      title: "Local Cart",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", type: "string", title: "Product ID" },
            { name: "name", type: "string", title: "Name" },
            { name: "shortName", type: "string", title: "Short Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "image", type: "string", title: "Image URL" },
          ],
        },
      ],
    },
  ],
};