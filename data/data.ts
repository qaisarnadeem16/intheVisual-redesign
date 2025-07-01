import { StaticImageData } from 'next/image';
import bakery from '/public/assets/bakery.png';
import knockout from '/public/assets/knockout.png';
import kinetik from '/public/assets/kinetik.png';
// import medallion from '/public/assets/medallion.png';
// import bamboo from '/public/assets/bamboo.png';
// import lodge from '/public/assets/lodge.png';
// import porsche from '/public/assets/porsche.png';

export interface Story {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  slug: string;
}

export const stories: Story[] = [
  {
    title: "Bare Naked Bakery’s",
    description:
      "We revamped Bare Naked Bakery’s Shopify store by combining a sleek new design with an interactive custom product customizer. Customers can now explore products more easily, personalize their orders visually, and enjoy a smoother, more engaging shopping experience. The result? Increased time on site—and a clear boost in custom cake sales.",
    imageSrc: bakery,
    imageAlt: "Bare Naked Bakery",
    slug: "bare-naked-bakery",
  },
  {
    title: "Knockout Fight Gear",
    description:
      "We helped Knockout Fight Gear transform their Shopify store with a bold new design and an intuitive custom product customizer. From selecting sizes to live pricing updates, customers now enjoy a smooth, branded shopping experience tailored to athletes. The result? Higher engagement, better conversions, and stronger brand loyalty.",
    imageSrc: knockout,
    imageAlt: "Knockout Fight Gear",
    slug: "knockout-fight-gear",
  },
  {
    title: "Kinetik AdrenalinK’s",
    description:
      "We helped Kinetik AdrenalinK launch a bold, performance-driven Shopify store complete with personalized product pages tailored to gender and category. The new site not only improved mobile UX and visual storytelling but also boosted conversions and order value through custom apparel personalization.",
    imageSrc: kinetik,
    imageAlt: "Kinetik AdrenalinK",
    slug: "kinetik-adrenalinx",
  },
  // {
  //   title: "Bamboo Organizer",
  //   description:
  //     "We created a high-quality 3D animation for a sustainable bamboo organizer, highlighting its eco-friendly appeal and durability. Tailored for Amazon, the animation showcased the product in a realistic setting, driving client satisfaction and additional project commissions.",
  //   imageSrc: bakery,
  //   imageAlt: "Bamboo Organizer",
  //   slug: "bamboo-organizer",
  // },
  // {
  //   title: "Ancient Dome Lodge Animation",
  //   description:
  //     "We crafted a realistic 3D animation visualizing the construction of an ancient Dome Lodge, blending historical authenticity with cinematic realism. Set in a natural forest, the animation captivated viewers with its detail and storytelling, earning high client praise.",
  //   imageSrc: bakery,
  //   imageAlt: "Ancient Dome Lodge",
  //   slug: "ancient-dome-lodge-animation",
  // },
  // {
  //   title: "Realistic Cinematic Animation",
  //   description:
  //     "We delivered photorealistic 3D renders and a cinematic animation of the Porsche GT3 RS for Instagram. Using Blender and Unreal Engine 5, we created high-impact visuals that showcased luxury and performance, driving engagement across promotional channels.",
  //   imageSrc: bakery,
  //   imageAlt: "Porsche GT3 RS",
  //   slug: "realistic-cinematic-animation",
  // },
];



// data/wordpressFeatures.ts

export const wordpressFeatures = [
  {
    icon: '🖥️',
    text: 'Custom, scalable WordPress solutions',
  },
  {
    icon: '🛡️',
    text: 'Secure, fast-loading sites',
  },
  {
    icon: '📱',
    text: 'Fully mobile-responsive',
  },
  {
    icon: '📊',
    text: 'SEO & Analytics ready',
  },
  {
    icon: '🔄',
    text: 'Easy to manage backend',
  },
  {
    icon: '🧩',
    text: 'Plugin integrations & eCommerce options',
  },
];


export const wordPressSuccessStory = [
  {
    title: "Medallion Rug",
    description:
      "We unified Medallion Rug Gallery’s two websites into a single, performance-optimized WordPress/WooCommerce platform. With advanced filtering and a 'Request for Price' flow, customers enjoy a seamless luxury shopping experience. The result? Faster load times and increased inquiries.",
    imageSrc: bakery,
    imageAlt: "Medallion Rug",
    slug: "medallion-rug",
  },
]


export const threeDSuccessStories = [
  {
    title: "Dome Lodge Construction Animation",
    description:
      "We created a hyper-realistic 3D animation showcasing the ancient construction process of a Dome Lodge using only wood and natural materials. With forest environments, cloth and smoke simulations, and synced voiceover, the result brought history to life in a cinematic format.",
    imageSrc: bakery,
    imageAlt: "Dome Lodge Construction Animation",
    slug: "ancient-dome-lodge-animation",
  },
  {
    title: "RS Cinematic Animation",
    description:
      "We delivered high-end 3D renders of the Porsche GT3 RS and Audi Tron using Unreal Engine 5, and crafted a cinematic animation of the Porsche in Blender for Instagram. The photoreal quality and luxury detailing made the visuals perfect for high-impact automotive promotions.",
    imageSrc: bakery,
    imageAlt: "Dome Lodge Construction Animation",
    slug: "realistic-cinematic-animation",
  },
  {
    title: " Bamboo Product 3D Animation for Amazon",
    description:
      "To highlight a bamboo product’s durability and eco-appeal, we designed, textured, and animated it in Blender, placing it within a natural 3D environment. The final render, enhanced in After Effects, helped boost the brand’s Amazon presence—and led to more animation orders from the client.",
    imageSrc: bakery,
    imageAlt: " Bamboo Product 3D Animation for Amazon",
    slug: "bamboo-organizer",
  },
]


export const threeDFeatures = [
  {
    text: 'Rotate, explode, or assemble your product in 3D',
  },
  {
    text: 'Stylized or realistic movement with full rigging',
  },
  {
    text: ' Bring floorplans, rooms, and real estate to life',
  },
  {
    text: 'Simplify how-it-works with step-by-step clarity',
  },
  {
    text: 'Eye-catching motion built for engagement',
  },
  {
    text: 'Add story, emotion, and clarity',
  },
];


export const threeDplans = [
  {
    name: 'Basic Product Spin',
    price: '$349',
    features: [
      '360° model animation',
      'camera rotation',
      'lighting',
      // 'Priority Support: ✗',
    ],
  },
  {
    name: 'Promo Animation',
    price: '$999+',
    features: [
      '20-30 sec animated vedio',
      'with effects and music',
      // 'plugin integration',
      // 'blog & forms',
      // 'Priority Support: ✓',
    ],
    popular: true,
  },
  {
    name: 'Full Explainer',
    price: '$1,499+',
    features: [
      'Script',
      'animation',
      'voiceover',
      ' and background sound',
      // 'Priority Support: ✓',
    ],
  },
  {
    name: 'Character Animation',
    price: '$1,299+',
    features: [
      'Rigging',
      'motion',
      'expressions',
      'walk cycles',
      // 'Priority Support: ✓',
    ],
  },
  {
    name: 'Walkthrough/Flythrough',
    price: '$1,799+',
    features: [
      'Real estate or product tour',
      'with full camera path',
      // 'expressions',
      // 'walk cycles',
      // 'Priority Support: ✓',
    ],
  },
];