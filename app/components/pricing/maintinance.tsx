import React from 'react';
import Link from 'next/link';
import Section from '../shared/common/section';

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
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '$2500/month',
      hours: '20',
      includes: 'Full performance + CRO',
      prioritySupport: true,
      highlighted: false,
    },
  ];

  const featuresList = (plan: any) => [
    `Hours: ${plan.hours}`,
    `Includes: ${plan.includes}`,
    `Priority Support: ${plan.prioritySupport ? '✔' : '✘'}`,
  ];

  return (
    <div className="py-16 bg-gray-100">
      <Section>
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl md:text-6xl leading-tight font-bricola max-w-3xl mx-auto text-center text-gray-900 mb-8">
            Updated Ongoing Maintenance Plans Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-[1px] rounded-2xl group  transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-[#9B17D0] to-[#C53B08]' : 'bg-transparent'} hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08]`}
              >
                <div
                  className={`relative rounded-2xl p-6 h-full transition-transform group-hover:scale-105 bg-white shadow ${plan.highlighted ? 'bg-gradient-to-l from-[#e7c6f4] to-[#edc5b6]' : ''} group-hover:bg-gradient-to-r group-hover:from-[#e7c6f4] group-hover:to-[#edc5b6]`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-3 right-3 bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                  <h3 className="text-xl font-semibold mt-4 text-gray-800">{plan.name}</h3>
                  <ul className="mt-6 space-y-3">
                    {featuresList(plan).map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.2936 0.113281C7.27756 0.113281 0.779236 6.6116 0.779236 14.6277C0.779236 22.6438 7.27756 29.1421 15.2936 29.1421C23.3097 29.1421 29.8081 22.6438 29.8081 14.6277C29.7987 6.61547 23.3059 0.122613 15.2936 0.113281Z"
                            fill="#504CEC"
                          />
                          <path
                            d="M23.6723 10.0312L15.3931 21.2666C15.1956 21.5285 14.9012 21.7002 14.5759 21.743C14.2507 21.7857 13.9219 21.696 13.6634 21.494L7.75122 16.7671C7.2295 16.3496 7.14502 15.5882 7.56253 15.0665C7.98003 14.5448 8.74142 14.4603 9.26313 14.8778L14.1932 18.8221L21.725 8.60033C21.9719 8.22972 22.4026 8.02481 22.846 8.06697C23.2893 8.10913 23.6737 8.39153 23.8464 8.80205C24.0191 9.21257 23.9522 9.68478 23.6723 10.0312Z"
                            fill="white"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/pricing">
                      <button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 rounded-full px-5 py-2">
                        Choose Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MaintenancePlans;