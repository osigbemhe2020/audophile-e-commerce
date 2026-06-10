import { groq } from "next-sanity";

export const allProductsQuery = groq`
*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  features,
  description,
  inTheBox,
  price,
  isNew,
  mainImage,
  gallery
}
`;

export const allCategoryQuery = groq`
*[_type == "category"]{
  _id,
  name,
  "slug": slug.current,
  description,
  "products": *[_type == "product" && references(^._id)]{
    _id,
    name,
    shortName,
    "slug": slug.current,
    price,
    description,
    isNew,
    mainImage{
      asset->{
        url
      }
    }
  }
}
`;

export const userQuery = groq`
*[_type == "user" && githubId == $githubId][0]{
  _id,
  name,
  email,
  githubId,
  cart[]{
    product->{
      _id,
      name,
      price,
      "slug": slug.current,
      mainImage{
        asset->{
          url
        }
      }
    },
    quantity
  }
}
`;