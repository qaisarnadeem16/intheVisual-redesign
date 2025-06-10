import React from 'react';

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
    <div className="py-10 bg-[#f8f8f87d]">
      <div className="container max-w-6xl mx-auto border border-[#DDDDDD] p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="md:text-6xl text-3xl max-w-3xl mx-auto font-bricola text-center mb-6">
          Updated Ongoing Maintenance Plans Pricing
        </h2>
        <div className="overflow-x-auto font-poppins">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 font-semibold font-poppins">Plan</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="p-4 font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-gray-600 text-[#66637B]">Price</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-gray-800 text-[#66637B]">
                    {plan.price}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Hours</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.hours}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Includes</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.includes}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-[#d3d0ea]">
                <td className="p-4 font-medium text-[#66637B]">Priority Support</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-4 text-[#66637B]">
                    {plan.prioritySupport ? (
                      <span className="text-white bg-green-600 px-2 text-sm py-1 rounded-md">✔</span>
                    ) : (
                      <span className="text-red-500">✘</span>
                    )}
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

export default MaintenancePlans;