import React from "react";
import shopify from '/public/assets/shopify.png';
import grow from '/public/assets/grow.png';
import requirement from '/public/assets/requirement.png';
import Image from "next/image";

const cardData = [
  {
    title: "Expert Shopify Development",
    description:
      "Our developers specialize exclusively in Shopify, ensuring your store leverages the platform's full potential with clean, efficient code and optimized performance.",
    icon: shopify,
  },
  {
    title: "Request your requirements",
    description:
      "We create bespoke designs that reflect your brand identity, enhance user experience, and convert visitors into customers with strategic visual elements.",
    icon: requirement,
  },
  {
    title: "Review & Grow",
    description:
      "Moving from another platform? Our migration specialists ensure a smooth transition without data loss, downtime, or SEO penalties.",
    icon: grow,
  },
];

const ChooseUS = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">

        <div className="md:py-10">
          <h2 className="text-5xl lg:text-6xl tracking-tight font-bricola font-normal">Why Choose In The Visual</h2>
          <p className="max-w-xl py-6 mx-auto font-poppins">
            we combine design expertise with technical knowledge to create Shopify stores that look
            amazing and drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 items-center">

              <div
                className="bg-gradient-to-bl  from-[#ebc8ba] via-[#b9b8e1] to-[#cecdef] rounded-2xl p-6 shadow w-full h-60 flex items-center justify-center relative"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="h-28 w-28"
                />
              </div>

              <div className="mt-4 pl-2 text-start">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUS;