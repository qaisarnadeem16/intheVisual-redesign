import React from 'react'
import Section from '../shared/section'
import Heading from '../shared/common/heading'
import Image from 'next/image'
import transform from '/public/assets/transform.png'

const Transform = () => {
    return (
        <div className="bg-gray py-10">
            <Section className=''>
                <div className=''>
                    <h1 className='text-4xl font-bold text-center py-16'>See the Transformation</h1>
                    <Image src={transform} alt='transform' className='cover' />

                    <div className="pb-6 relative">
                        <div className="h-[10px] rounded-full max-w-md mx-auto bg-[#D1D5DB]"></div>
                        <div className="absolute top-0 bottom-6 left-3 right-0 flex items-center justify-center">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.16095" y="0.241211" width="27.6786" height="27.6786" rx="13.8393" fill="url(#paint0_linear_109_396)" />
                                <defs>
                                    <linearGradient id="paint0_linear_109_396" x1="0.16095" y1="14.0805" x2="27.8395" y2="14.0805" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9B17D0" />
                                        <stop offset="1" stop-color="#C53B08" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto py-5 flex justify-between">
                        <button className='hover:bg-slate-400 hover:text-white py-1 px-4 rounded-md hover:transition-all hover:duration-300 hover:scale-105'>Before</button>
                        <button className='hover:bg-slate-400 hover:text-white py-1 px-4 rounded-md hover:transition-all hover:duration-300 hover:scale-105'>After</button>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Transform