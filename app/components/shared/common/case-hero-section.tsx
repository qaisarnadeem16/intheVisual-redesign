import Image from 'next/image'
import React from 'react'
import casehero from '/public/assets/casehero.png'
import Section from './section'

const CaseHeroSection = () => {
    return (
        <div className='bg-gradient-to-bl py-10 from-[#ebc8ba] via-[#d3d3eb] to-[#bbbad5]'>
            <Section>
                <div className="grid grid-cols-1  gap-10 max-w-6xl mx-auto py-8 items-center md:grid-cols-2 ">
                    <div className="md:order-1 order-2">
                        <p className='font-bricola text-4xl md:text-6xl'>What We Do — And Why It Matters!</p>
                        <p className={`text-base py-3 font-poppins font-normal text-[#6A6A86]`}>We transform Shopify stores with sleek, modern designs and powerful custom product customizers. By making product exploration intuitive and personalization visual, we create shopping experiences that are both engaging and effortless. The impact? Customers spend more time on-site and convert more often—especially when it comes to custom orders.</p>
                    </div>
                    <div className="md:order-2 order-1">
                        <Image src={casehero} alt='casehero' className='contain' />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default CaseHeroSection