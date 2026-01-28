// import xx99MarkTwo from "@/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
// import xx99MarkTwoGrid1 from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
// import xx99MarkTwoGrid2 from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
// import xx99MarkTwoGrid3 from "@/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import xx99MarkOne from "@/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99MarkOneGrid1 from "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
import xx99MarkOneGrid2 from "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
import xx99MarkOneGrid3 from "@/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
import xx59 from "@/assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59Grid1 from "@/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
import xx59Grid2 from "@/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
import xx59Grid3 from "@/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
import zx9 from "@/assets/product-zx9-speaker/desktop/image-product.jpg";
import zx9Grid1 from "@/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
import zx9Grid2 from "@/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
import zx9Grid3 from "@/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
import zx7 from "@/assets/product-zx7-speaker/desktop/image-product.jpg";
import zx7Grid1 from "@/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
import zx7Grid2 from "@/assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
import zx7Grid3 from "@/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
import yx1 from "@/assets/product-yx1-earphones/desktop/image-product.jpg";
import yx1Grid1 from "@/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
import yx1Grid2 from "@/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
import yx1Grid3 from "@/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
import { StaticImageData } from "next/image";

type FeatureItem = {
  name: string;
  slug: string;
  mainImage: StaticImageData;
  gridImages: StaticImageData[];
  features: string;
  inthebox: string[];
};

const Features: FeatureItem[] = [
  {
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-i-headphones",
    mainImage: xx99MarkOne,
    gridImages: [xx99MarkOneGrid1, xx99MarkOneGrid2, xx99MarkOneGrid3],
    features:
      "Avoid your personal touch with you, and your professional experience is a great place to help you achieve the best possible needs of your team.",
    inthebox: [
      "Headphone Unit",
      "Replacement Earcups",
      "User Manual",
      "3.5mm 5m Audio Cable",
      "Travel Bag",
    ],
  },
  {
    name: "XX59 Headphones",
    slug: "xx59-headphones",
    mainImage: xx59,
    gridImages: [xx59Grid1, xx59Grid2, xx59Grid3],
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. It's compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inthebox: [
      "Headphone Unit",
      "Replacement Earcups",
      "User Manual",
      "3.5mm 3m Audio Cable",
    ],
  },
  {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    mainImage: zx9,
    gridImages: [zx9Grid1, zx9Grid2, zx9Grid3],
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, and analog inputs for easy switching. Improved Bluetooth technology offers near lossless audio quality at up to 328ft range. Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a high-excursion woofer.",
    inthebox: [
      "Speaker Unit",
      "Speaker Grille",
      "User Manual",
      "3.5mm 10m Audio Cable",
      "10m Optical Cable",
    ],
  },
  {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    mainImage: zx7,
    gridImages: [zx7Grid1, zx7Grid2, zx7Grid3],
    features:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    inthebox: [
      "Speaker Unit",
      "User Manual",
      "3.5mm 5m Audio Cable",
      "Power Cable",
    ],
  },
  {
    name: "YX1 Wireless Earphones",
    slug: "yx1-wireless-earphones",
    mainImage: yx1,
    gridImages: [yx1Grid1, yx1Grid2, yx1Grid3],
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case giving you uninterrupted play time.",
    inthebox: [
      "Earphone Unit",
      "Multi-size Earplugs",
      "User Manual",
      "USB-C Charging Cable",
      "Travel Pouch",
    ],
  },
];

export default Features;
