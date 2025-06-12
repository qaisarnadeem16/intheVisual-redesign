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

export const stories: Story[]  = [
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
    //   title: "Medallion Rug",
    //   description:
    //     "We unified Medallion Rug Gallery’s two websites into a single, performance-optimized WordPress/WooCommerce platform. With advanced filtering and a 'Request for Price' flow, customers enjoy a seamless luxury shopping experience. The result? Faster load times and increased inquiries.",
    //   imageSrc: bakery,
    //   imageAlt: "Medallion Rug",
    //   slug: "medallion-rug",
    // },
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