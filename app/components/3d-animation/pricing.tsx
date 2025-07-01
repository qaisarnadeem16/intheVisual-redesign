'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { threeDplans } from '@/data/data'

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
)

const PricingSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <section className="py-16 px-4 bg-white text-center">
            <div className="max-w-6xl mx-auto overflow-hidden">
                <h2 className="md:text-6xl  text-4xl font-bricola mb-12">Pricing</h2>
                <Slider {...settings}>
                    {threeDplans.map((plan, index) => (
                        <div key={index} className="px-4  py-4 h-full">
                            <div
                                className={`rounded-2xl h-96 p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] ${plan.popular
                                    ? 'bg-gradient-to-l from-[#e7c6f4] to-[#edc5b6]'
                                    : 'bg-white shadow-md hover:bg-gradient-to-r hover:from-[#e7c6f4] hover:to-[#edc5b6]'
                                    }`}
                            >
                                <div className="mb-4">
                                    <h3 className="text-2xl font-semibold">
                                        Package <span className="text-2xl font-medium">{plan.price}</span>
                                    </h3>
                                    <p className="text-lg font-medium">{plan.name}</p>
                                    <p className="text-left py-2 font-medium">What's Included</p>
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
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default PricingSection
