import { wordpressFeatures } from '@/data/data';
import React from 'react';
import Section from '../shared/common/section';
import { CheckCircle } from 'lucide-react';
import CustomLink from '../shared/common/custom-link';
import Image from 'next/image';

const WordPressFeaturesSection = () => {
    return (
        <Section className="py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-[28px] text-center lg:text-6xl py-4 md:tracking-wider md:leading-normal font-bricola font-normal">
                Why Choose inthevisual  <br /> for WordPress
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center lg:py-10 py-5 lg:px-10">
                <div className=" mx-auto lg:w-4/5 w-full">

                    <p className="text-base sm:text-lg text-gray-600 mb-3">
                        Switch from WooCommerce, Wix, Magento, or any other platform with zero stress.
                    </p>

                    <ul className="text-left max-w-2xl mx-auto space-y-4 mb-10">
                        {wordpressFeatures.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="text-primary w-5 h-5 mt-1" />
                                <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                            </li>
                        ))}
                    </ul>


                    <CustomLink href="#contact">
                        Start Your Migration
                    </CustomLink>
                </div>

                <Image src={'/assets/600x600.png'} alt='' className='w-4/5 mx-auto rounded' unoptimized width={100} height={100} />
            </div>

        </Section>
    );
};

export default WordPressFeaturesSection;