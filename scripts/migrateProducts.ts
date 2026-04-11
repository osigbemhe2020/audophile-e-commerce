import "dotenv/config";

import { writeClient } from "@/sanity/lib/writeClient";
import  { Products , Features} from "@/lib/sanityData";  

async function uploadCategories() {
  for (const category of Products) {
    const doc = {
      _type: "category",
      name: category.category,
      slug: {
        _type: "slug",
        current: category.category.toLowerCase(),
      },
    };

    await writeClient.createIfNotExists({
      _id: `category-${category.category}`,
      ...doc,
    });

    console.log("Created category:", category.category);
  }
}

async function uploadProducts() {
  for (const category of Products) {
    for (const item of category.items) {
      const feature = Features.find((f) => f.slug === item.slug);

      const doc = {
        _type: "product",
        name: item.name,
        slug: {
          _type: "slug",
          current: item.slug,
        },
        description: item.description,
        isNew: item.isNew,
        price: feature?.price,
      };

     await writeClient.createIfNotExists({
        _id: `product-${item.slug}`,
        ...doc,
      });

      console.log("Created product:", item.name);
    }
  }
}

async function migrate() {
  await uploadCategories();
  await uploadProducts();
}

migrate();