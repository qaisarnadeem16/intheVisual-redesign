import React from 'react';

const PricingSummary = () => {
  const plans = [
    {
      name: 'Launch',
      price: '$2,200 / €1,750 / £2,000',
      bestFor: 'Startups & solo brands',
      pages: 'Up to 5',
      products: 'Up to 15',
      design: '3 pages',
      customFeatures: 'X',
      appsSetup: '1',
      seo: 'Basic',
      support: '7 days',
      delivery: '2-3 weeks',
    },
    {
      name: 'Growth',
      price: '$4,200 / €3,300 / £3,800',
      bestFor: 'DTC brands scaling ops',
      pages: 'Up to 10',
      products: '40',
      design: '6 pages',
      customFeatures: '1 module',
      appsSetup: '3',
      seo: 'Enhanced',
      support: '14 days',
      delivery: '3-4 weeks',
    },
    {
      name: 'Scale',
      price: '$7,400 / €5,800 / £6,600',
      bestFor: 'High-traffic eComm brands',
      pages: 'Unlimited',
      products: '100',
      design: 'Full UI',
      customFeatures: 'Multiple + JS',
      appsSetup: '5 standard',
      seo: 'Advanced',
      support: '30 days',
      delivery: '5-6 weeks',
    },
    {
      name: 'Shopify Plus',
      price: '$14,000+ / €11,000+ / £12,500+',
      bestFor: 'Enterprise or B2B',
      pages: 'Unlimited + regions',
      products: 'Unlimited',
      design: 'Full UI + mobile variants',
      customFeatures: 'Advanced + checkout',
      appsSetup: 'All + custom',
      seo: 'Plus SEO best practices',
      support: '45 days',
      delivery: '6-8 weeks',
    },
  ];

  return (
    <div className="py-16 bg-[#f8f8f87d]">
      <div className="container max-w-6xl border border-[#DDDDDD] mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="md:text-6xl text-3xl max-w-5xl py-6 mx-auto font-bricola text-center text-black mb-6">
          Updated Pricing Summary For Shopify Packages (Small Agency)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full font-poppins text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 font-semibold font-poppins">Plan</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 font-semibold font-poppins">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Price</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.price}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Best For</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.bestFor}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Pages</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.pages}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Products</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.products}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Design</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.design}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Custom Features</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.customFeatures}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Apps Setup</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.appsSetup}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">SEO</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.seo}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Support</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.support}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Delivery</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.delivery}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;