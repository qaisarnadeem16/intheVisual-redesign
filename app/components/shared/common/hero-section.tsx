'use client'
import React from 'react';
import Image from 'next/image';
import Section from './section';
import SubHeading from './sub-heading';
import CustomLink from './custom-link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CallIcon } from '@/app/svg';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    title2: string;
    title3: string;
    buttonText: string;
    buttonLink?: string;
}

export default function HeroSection({
    title,
    subtitle,
    buttonText,
    buttonLink = '#',
    title2,
    title3
}: HeroSectionProps) {
    const partners = [
        '/assets/partners/barnlight.webp',
        '/assets/partners/knockout.webp',
        '/assets/partners/sport.webp',
        '/assets/partners/kwikgoal.webp',
        '/assets/partners/pkgpal.webp',
        '/assets/partners/pleaser.webp',
        '/assets/partners/msp.webp',
        '/assets/partners/crew.webp',
        '/assets/partners/danpex.webp',
        '/assets/partners/equifit.webp',
        '/assets/partners/gold.webp',
        '/assets/partners/self.webp',
        '/assets/partners/reggel.webp',
        '/assets/partners/print.webp',
        '/assets/partners/splash.webp',
        '/assets/partners/kinetic.webp',
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Section>
            {/* Header */}
            <header className="py-10 lg:py-20 text-center">
                <div className="space-y-6 mx-auto">
                    <div className="flex gap-4 items-center flex-wrap justify-center mb-4 lg:border rounded-full max-w-xl mx-auto border-borderColor py-2 px-5">
                        <Image src="/assets/heroimg1.svg" alt="" width={20} height={20} className="w-32 lg:border-r pr-4 border-borderColor" unoptimized />
                        Trusted by 1,500+ Clients for seamless designs 🔥
                    </div>

                    <h1 className="text-5xl lg:text-[80px] lg:leading-[80px] font-normal font-bricola text-secondary mb-4">
                        <span className="relative inline-block">
                            {title}
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
                        </span> {title2} <br /> {title3}
                    </h1>

                    <div className="max-w-3xl mx-auto">
                        <SubHeading className="text-[#6A6A86] font-poppins">{subtitle}</SubHeading>
                    </div>

                    <div className="flex justify-center gap-2 md:gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
                            {buttonText}
                        </button>
                        <CustomLink href="#contact">
                            <CallIcon /> Book A Call
                        </CustomLink>
                    </div>
                </div>
            </header>

            {/* Main Image */}
            <main className="max-w-6xl mx-auto px-4 py-12">
                <Image src="/assets/hero.png" alt="Hero Image" width={20} height={20} className="w-full" unoptimized />
            </main>

            {/* Partners Slider */}
            <div className="py-10">
                <div className="max-w-4xl mx-auto">
                    <SubHeading className="!text-black font-poppins font-medium">
                        Companies with exceptional brands and agencies worldwide
                    </SubHeading>
                </div>
                <div className="overflow-hidden">
                    <Slider {...settings}>
                        {partners.map((company, i) => (
                            <div key={i}>
                                <Image src={company} alt={`Partner ${i}`} height={100} width={100} unoptimized className="md:w-full !flex justify-center items-center md:px-10 px-0" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Section>
    );
}
