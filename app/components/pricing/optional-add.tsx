import React from 'react';

const OptionalAddOns = () => {
    const addOns = [
        { name: 'Extra Landing Page', price: '$450' },
        { name: 'Multilingual Store Setup', price: '$1250' },
        { name: 'Subscription Integration', price: '$750' },
        { name: 'Custom B2B Pricing', price: '$1200' },
        { name: 'Performance/SEO Audit', price: '$650' },
        { name: 'Headless Storefront', price: '$8000+' },
    ];

    return (
        <div className="py-10 bg-[#f8f8f87d]">
            <div className="container group hover:text-white hover:bg-gradient-to-r hover:from-[#9B17D0] hover:to-[#C53B08] transition-all duration-300 max-w-6xl mx-auto border border-[#DDDDDD] p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="md:text-6xl text-3xl font-bricola tracking-tighter text-center mb-4">
                    Optional Add-Ons
                </h2>
                <p className="text-center group-hover:text-white text-[#6A6A86] font-poppins mb-6">Small enhancements. Big results.</p>
                <div className="overflow-x-auto group-hover:text-white font-poppins max-w-4xl mx-auto">
                    <table className="w-full text-center border-collapse group-hover:text-white">
                        <thead>
                            <tr className="bg-gray-50 group-hover:text-white group-hover:bg-transparent">
                                <th className="p-4 font-semibold text-gray-600">Add-On</th>
                                <th className="p-4 font-semibold text-gray-600">Starting From</th>
                            </tr>
                        </thead>
                        <tbody className='group-hover:text-white'>
                            {addOns.map((addOn, index) => (
                                <tr
                                    key={addOn.name}
                                    className={index < addOns.length - 1 ? ' border-b border-[#d3d0ea]' : ''}
                                >
                                    <td className="p-4 group-hover:text-white text-[#66637B]">{addOn.name}</td>
                                    <td className="p-4 group-hover:text-white text-[#66637B]">{addOn.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OptionalAddOns;