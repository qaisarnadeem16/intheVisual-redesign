// components/WhyChoose.js
import React from "react";
import shopify from '/public/assets/shopify.png';
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
    icon: shopify,
  },
  {
    title: "Review & Grow",
    description:
      "Moving from another platform? Our migration specialists ensure a smooth transition without data loss, downtime, or SEO penalties.",
    icon: shopify,
  },
];

const ChooseUS = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Why Choose In The Visual</h2>
        <p className="text-gray-600 text-lg mb-12">
          we combine design expertise with technical knowledge to create Shopify stores that look
          amazing and drive results.
        </p>

        {/* Cards with Images and Text Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Card with Image */}
              <div
                className="bg-gradient-to-bl from-[#ebc8ba] via-[#b9b8e1] to-[#cecdef] rounded-2xl p-6 shadow w-full h-64 flex items-center justify-center relative"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="h-auto w-auto"
                />
              </div>
              {/* Text Below Card */}
              <div className="mt-4 text-start">
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