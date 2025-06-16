import React from 'react';
import CustomLink from '../shared/common/custom-link';

const MaintenancePlans = () => {
  const plans = [
    {
      name: 'Launch',
      price: '$800/month',
      hours: '5',
      includes: 'Bug fixes, theme tweaks',
      prioritySupport: false,
    },
    {
      name: 'Growth',
      price: '$1500/month',
      hours: '10',
      includes: 'New sections, app mgmt',
      prioritySupport: true,
    },
    {
      name: 'Pro',
      price: '$2500/month',
      hours: '20',
      includes: 'Full performance + CRO',
      prioritySupport: true,
    },
  ];

  return (
    <div className="py-10 bg-gray-100/50">
      <div className="container max-w-6xl group hover:text-white hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08] transition-all duration-300 mx-auto border border-gray-300 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="md:text-6xl text-3xl max-w-3xl mx-auto font-bricola text-center mb-6 text-gray-900">
          Updated Ongoing Maintenance Plans Pricing
        </h2>
        <div className="overflow-x-auto font-poppins">
          <table className="w-full text-left border-collapse ">
            <thead>
              <tr className="bg-gray-50 group-hover:bg-transparent">
                <th className="p-4 font-semibold text-gray-600 group-hover:text-white">Plan</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 font-semibold text-gray-600 group-hover:text-white">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300 group-hover:border-gray-200">
                <td className="p-4 font-medium text-[#66637B] group-hover:text-white">Price</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B] group-hover:text-white">
                    {plan.price}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-300 group-hover:border-gray-200">
                <td className="p-4 font-medium text-[#66637B] group-hover:text-white">Hours</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B] group-hover:text-white">
                    {plan.hours}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-300 group-hover:border-gray-200">
                <td className="p-4 font-medium text-[#66637B] group-hover:text-white">Includes</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B] group-hover:text-white">
                    {plan.includes}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-gray-300 group-hover:border-gray-200">
                <td className="p-4 font-medium text-[#66637B] group-hover:text-white">Priority Support</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B] group-hover:text-white">
                    {plan.prioritySupport ? (
                      <span className="text-white bg-green-600 px-2 text-sm py-1 rounded-md">✔</span>
                    ) : (
                      <span className="text-red-500 group-hover:text-white">✘</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex group justify-end py-5">
          <CustomLink href='/'>Get Started</CustomLink>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePlans;