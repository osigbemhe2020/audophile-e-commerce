import xx99MarkTwo from "@/assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99MarkOne from "@/assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59 from "@/assets/shared/desktop/image-xx59-headphones.jpg";
import zx9 from "@/assets/shared/desktop/image-zx9-speaker.jpg";
import zx7 from "@/assets/shared/desktop/image-zx7-speaker.jpg";
import yx1 from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";

const Products = [
    {
        category: "Headphones",
        items: [
            {
                name: "XX99 MARK II HEADPHONES",
                slug: "xx99-mark-two-headphones",
                description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
                isNew: true,
                image: xx99MarkTwo
            },
            {
                name: "XX99 MARK I HEADPHONES",
                slug: "xx99-mark-i-headphones",
                description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction.",
                isNew: false,
                image: xx99MarkOne
            },
            {
                name: "XX59 HEADPHONES",
                slug: "xx59-headphones",
                description: "High-quality headphones for immersive audio experience across all your devices.",
                isNew: false,
                image: xx59
            }
        ]
    },
    {
        category: "Speakers",
        items: [
            {
                name: "ZX9 SPEAKER",
                slug: "zx9-speaker",
                description: "Upgrade your sound system with the all new ZX9 active speaker. The ultimate bookshelf speakers for pristine audio.",
                isNew: true,
                image: zx9
            },
            {
                name: "ZX7 SPEAKER",
                slug: "zx7-speaker",
                description: "Stream high-quality sound wirelessly with the ZX7 speaker. Powerful audio performance in a sleek design.",
                isNew: false,
                image: zx7
            }
        ]
    },
    {
        category: "Earphones",
        items: [
            {
                name: "YX1 WIRELESS EARPHONES",
                slug: "yx1-wireless-earphones",
                description: "Tailor your listening experience with bespoke dynamic drivers and powerful wireless technology.",
                isNew: true,
                image: yx1
            }
        ]
    }
];

export default Products;