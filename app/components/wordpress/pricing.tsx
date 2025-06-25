import React from 'react';

const TickIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
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
);

const PricingSection = () => {
    const plans = [
        {
            name: 'Basic Site',
            price: '$599',
            features: [
                'Up to 5 pages',
                'template customization',
                'mobile-friendly',
                // 'Priority Support: ✗',
            ],
        },
        {
            name: 'Professional Build',
            price: '$1,299',
            features: [
                '10+ pages',
                'SEO setup',
                'plugin integration',
                'blog & forms',
                // 'Priority Support: ✓',
            ],
            popular: true,
        },
        {
            name: 'Custom Enterprise',
            price: '$2,199+',
            features: [
                'Custom UI/UX',
                'advanced backend setup', 
                'ecommerce or membership-ready',
                // 'Priority Support: ✓',
            ],
        },
    ];

    return (
        <section className="py-16 px-4 bg-white text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="md:text-6xl text-4xl font-bricola mb-12">Pricing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 h-full transition-all duration-300 ease-in-out ${plan.popular ? 'bg-gradient-to-l from-[#e7c6f4] to-[#edc5b6]' : 'bg-white shadow-md'
                                } hover:shadow-lg hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#e7c6f4] hover:to-[#edc5b6]`}
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold">{plan.price}</h3>
                                <p className="text-lg font-medium">{plan.name}</p>
                                {/* {plan.popular && (
                                    <span className="inline-block bg-purple-200 text-purple-800 text-sm font-medium px-2 py-1 rounded mt-2">
                                        MOST POPULAR
                                    </span>
                                )} */}
                            </div>

                            <ul className="text-left mb-6 space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex capitalize items-start gap-2">
                                        <TickIcon />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
