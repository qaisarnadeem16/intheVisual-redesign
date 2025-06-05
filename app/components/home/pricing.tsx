// components/PricingSection.tsx
import React from 'react';

const pricingPlans = [
    {
        title: 'Essential',
        price: '$19',
        frequency: '/Single',
        description: 'Perfect for small businesses getting started',
        features: [
            'Shopify theme',
            'Mobile responsive',
            '5 custom page Designs',
            'Basic SEO setup',
            '30 days of support',
        ],
        highlighted: false,
    },
    {
        title: 'Professional',
        price: '$54',
        frequency: '/Half',
        description: 'For established businesses seeking growth',
        features: [
            'Custom Shopify theme',
            'Advanced responsive',
            '10 custom page',
            'Advanced SEO',
            'Custom checkout',
            '60 days of support',
        ],
        highlighted: false,
    },
    {
        title: 'Enterprise',
        price: '$89',
        frequency: '/Full',
        description: 'For large businesses with complex needs',
        features: [
            'Fully custom Shopify',
            'Premium responsive',
            'Unlimited custom page',
            'Custom app',
            'ERP/CRM integrations',
        ],
        highlighted: true,
    },
];

const PricingSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-[44px] lg:text-6xl tracking-tight font-bricola font-normal">Simple, Transparent Pricing</h2>
                <p className="md:text-base font-poppins py-6">Choose the package that best fits your business needs and goals.</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {pricingPlans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`p-[1px] rounded-2xl group  transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-[#9B17D0] to-[#C53B08]' : 'bg-transparent'} hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08]`} // Applied hover gradient to all cards
                    >
                        <div
                            className={`relative rounded-2xl p-6 h-full transition-transform group-hover:scale-105 bg-white shadow ${plan.highlighted ? 'bg-gradient-to-tr from-purple-50 to-pink-50' : ''} group-hover:bg-gradient-to-r group-hover:from-[#e7c6f4] group-hover:to-[#edc5b6]`} // Consistent hover gradient for inner div
                        >
                            {plan.highlighted && (
                                <div className="absolute top-3 right-3 my-2 bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="text-3xl font-bold text-gray-900">
                                {plan.price} <span className="text-base font-medium">{plan.frequency}</span>
                            </div>
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">{plan.title}</h3>
                            <p className="text-lg mt-2">{plan.description}</p>

                            <ul className="mt-6 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 items-center text-sm text-gray-700">
                                        <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.2936 0.113281C7.27756 0.113281 0.779236 6.6116 0.779236 14.6277C0.779236 22.6438 7.27756 29.1421 15.2936 29.1421C23.3097 29.1421 29.8081 22.6438 29.8081 14.6277C29.7987 6.61547 23.3059 0.122613 15.2936 0.113281Z" fill="#504CEC" />
                                            <path d="M23.6723 10.0312L15.3931 21.2666C15.1956 21.5285 14.9012 21.7002 14.5759 21.743C14.2507 21.7857 13.9219 21.696 13.6634 21.494L7.75122 16.7671C7.2295 16.3496 7.14502 15.5882 7.56253 15.0665C7.98003 14.5448 8.74142 14.4603 9.26313 14.8778L14.1932 18.8221L21.725 8.60033C21.9719 8.22972 22.4026 8.02481 22.846 8.06697C23.2893 8.10913 23.6737 8.39153 23.8464 8.80205C24.0191 9.21257 23.9522 9.68478 23.6723 10.0312Z" fill="white" />
                                        </svg>
                                        <div className="text-lg">
                                            {feature}
                                        </div>
                                    </div>
                                ))}
                            </ul>

                            <div className="pt-6">
                                <button className='bg-[#504CEC] text-white hover:bg-blue-900 hover:transition-all hover:duration-300 hover:scale-105 rounded-full px-5 py-2'>Choose Plan</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;