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
                slug: "xx99-mark-ii-headphones",
                description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                isNew: true,
                image: xx99MarkTwo
            },
            {
                name: "XX99 MARK I HEADPHONES",
                slug: "xx99-mark-i-headphones",
                description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                isNew: false,
                image: xx99MarkOne
            },
            {
                name: "XX59 HEADPHONES",
                slug: "xx59-headphones",
                description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
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
                description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                isNew: true,
                image: zx9
            },
            {
                name: "ZX7 SPEAKER",
                slug: "zx7-speaker",
                description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
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
                description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                isNew: true,
                image: yx1
            }
        ]
    }
];

export default Products;