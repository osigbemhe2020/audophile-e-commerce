

type FeatureItem = {
  name: string;
  slug: string;
  price: number;
  features: string;
  inthebox: string[];
};

export const Features: FeatureItem[] = [
  {
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-ii-headphones",
    price: 2999,
    features:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    inthebox: [
      "Headphone Unit",
      "Replacement Earcups",
      "User Manual",
      "3.5mm 5m Audio Cable",
      "Travel Bag",
    ],
  },
  {
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-i-headphones",
    price: 1750,
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
    price: 899,
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
    price: 4500,
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
    price: 3500,
    
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
    price: 599,
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

export const Products = [
    {
        category: "Headphones",
        items: [
            {
                name: "XX99 MARK II HEADPHONES",
                slug: "xx99-mark-ii-headphones",
                description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                isNew: true,
            },
            {
                name: "XX99 MARK I HEADPHONES",
                slug: "xx99-mark-i-headphones",
                description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                isNew: false,
            },
            {
                name: "XX59 HEADPHONES",
                slug: "xx59-headphones",
                description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                isNew: false,
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
            },
            {
                name: "ZX7 SPEAKER",
                slug: "zx7-speaker",
                description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
                isNew: false,
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
            }
        ]
    }
];

