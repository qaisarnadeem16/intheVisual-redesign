import React from 'react'
import CustomLink from '../shared/common/custom-link'
import { CallIcon } from '@/app/svg'

const HeroSection = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto text-center space-y-7 py-10'>
                <p className="font-bricola text-center text-3xl md:text-7xl">
                    Custom Shopify Websites Designed to Grow Your Brand
                </p>
                <p className='text-[#6A6A86] text-base'>Trusted by growth-focused DTC brands across the US, UK & Europe.</p>
                <div className="md:flex justify-center gap-2 space-y-4 md:space-y-0 py-8 md:gap-4">
                    <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
                        Let's Get Started
                    </button>

                    <CustomLink href="#contact">
                        <CallIcon /> Book A Discovery Call
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}

export default HeroSection