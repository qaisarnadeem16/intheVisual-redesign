import React from 'react';
import Image from 'next/image';
import Section from '../shared/section';
import SubHeading from '../shared/common/sub-heading';
import CustomLink from '../shared/common/custom-link';
import { CallIcon } from '@/app/svg';

export default function HeroSection() {
    const partners = [
        '/assets/partners/p1.png',
        '/assets/partners/p2.png',
        '/assets/partners/p3.png',
        '/assets/partners/p4.png',
        '/assets/partners/p5.png',
        '/assets/partners/p1.png',
        '/assets/partners/p2.png',
        '/assets/partners/p3.png',
        '/assets/partners/p4.png',
        '/assets/partners/p5.png',
        '/assets/partners/p1.png',
        '/assets/partners/p2.png',
        '/assets/partners/p3.png',
        '/assets/partners/p4.png',
        '/assets/partners/p5.png',
    ]
    return (
        <Section className="">
            {/* Header Section */}
            <header className=" py-10 lg:py-20 text-center ">
                <div className="space-y-6 mx-auto">
                    <div className="flex gap-4 items-center flex-wrap justify-center mb-4 lg:border rounded-full max-w-xl mx-auto border-borderColor py-2 px-5 ">
                        <Image src={'/assets/heroimg1.svg'} alt='' width={20} height={20} className='w-32 lg:border-r pr-4 border-borderColor' unoptimized />

                        Trusted by 1,500+ Clients for seamless designs 🔥
                    </div>
                    <h1 className="text-5xl lg:text-[80px] lg:leading-[80px] font-normal font-bricola text-secondary mb-4">
                        <span className="relative inline-block">
                            Transform
                            <span
                                className="absolute left-0 bottom-0 h-1 w-full rounded-full"
                                // style={{
                                //     background:
                                //         "linear-gradient(90deg, #9B17D0 0%, #C53B08 100%)",
                                // }}
                            />
                            <svg width="339" height="9" viewBox="0 0 339 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19925 7.00001C55.3236 4.48688 196.67 0.214548 337.062 3.23031" stroke="url(#paint0_linear_109_422)" stroke-width="3" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_109_422" x1="337.062" y1="2.19305" x2="336.924" y2="11.805" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8723C" />
                                        <stop offset="0.495359" stop-color="#9997F5" />
                                        <stop offset="1" stop-color="#504CEC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span> Your <br /> Shopify Store
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <SubHeading className='text-[#6A6A86] font-poppins'>
                            Dedicated Shopify experts helping businesses create stunning, high-converting online stores through custom design, development, and seamless migration.
                        </SubHeading>
                    </div>
                    <div className="flex justify-center gap-2 md:gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
                            Let's Get Started
                        </button>

                        <CustomLink href="#contact">
                            <CallIcon /> Book A Call
                        </CustomLink>
                    </div>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="max-w-6xl mx-auto px-4 py-12">
                <Image src={'/assets/hero.png'} alt='' width={20} height={20} className='w-full ' unoptimized />

            </main>


            <div className="py-10">
                <div className="max-w-4xl mx-auto pb-10">
                    <SubHeading >
                        partnered with exceptional brands and agencies worldwide
                    </SubHeading>
                </div>
                <div className="relative ">
                    <div className="slider py-5">
                        <div className="slide-track">
                            {partners.map((company, i) => (
                                <div key={i} className="">
                                    <Image src={company} alt="" width={20} height={20} unoptimized className="md:w-full w-3/4 md:px-16 px-0 " />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}