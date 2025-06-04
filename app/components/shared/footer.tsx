import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Section from './common/section';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { BuildingIcon, FooterPhone, MailIcon } from '@/public/website-assets/website-svg';

interface CustomLinkProps {
    label: string;
    href: string;
    className?: string; // Optional custom class for additional styling
    textColor?: string; // Optional custom text color
    iconColor?: string; // Optional custom icon color
    transitionDuration?: number;
}

const CustomLink: React.FC<CustomLinkProps> = ({
    label,
    href,
    className = '',
    textColor = 'text-gray-400',
    iconColor = 'text-gray-400',
    transitionDuration = 200,
}) => {
    return (
        <Link
            className={`group ${textColor} hover:text-white transition ${className}`}
            href={href}
        >
            <span className="inline-flex items-center gap-2">

                <GoArrowUpRight
                    className={`${iconColor} group-hover:opacity-100 opacity-0 text-white transition-opacity duration-${transitionDuration}`}
                />
                {label}

            </span>
        </Link>
    );
};

const Footer: React.FC = () => {
    // Arrays for navigation links
    const mainLinks = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About', href: '/about' },
        { id: 3, label: 'Blog', href: '/blog' },
        { id: 4, label: 'Support', href: '/support' },
    ];

    const apiLinks = [
        { id: 1, label: 'API Portal', href: '/api-portal' },
        { id: 2, label: 'Integration Docs', href: '/integration-docs' },
    ];

    const productLinks = [
        { id: 1, label: 'DrayPortal', href: '/drayportal' },
        { id: 2, label: 'DrayList', href: '/draylist' },
        { id: 3, label: 'DraySearch', href: '/draysearch' },
        { id: 4, label: 'DrayBoard', href: '/drayboard' },
        { id: 5, label: 'DrayRates', href: '/drayrates' },
        { id: 6, label: 'DrayTrends', href: '/draytrends' },
        { id: 7, label: 'Tariffs', href: '/tariffs' },
        { id: 8, label: 'DrayResources', href: '/drayresources' },
    ];

    // Contact information
    const contact = {
        phone: '(626) 444-4444',
        address: '8333 Wilshire Boulevard Suite 425, Beverly Hills, CA 90211',
        email: 'inquiry@draymatch.com',
    };

    return (
        <footer className="bg-no-repeat bg-contain bg-[#061022] text-[#A0A6AF] bg-top  pt-10  sm:px-4 lg:px-8"
            style={{
                backgroundImage: ` url('/website-assets/footerbg.png')`
            }}>
            <Section className="">
                <div className="flex flex-col gap-5 w-full">
                    <div className=" mx-auto flex border-b lg:pb-10 pb-5 border-[#1E2940] w-full flex-col items-center justify-center gap-5">
                        {/* Logo and Name */}
                        <Image
                            src="/website-assets/footerLogo.svg" // Replace with actual logo path
                            alt="DrayMatch Logo"
                            width={40}
                            height={40}
                            className="mr-2 w-40"
                        />

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-6 lg:mb-0">
                            <Link className='bg-[#131E32] p-2 rounded-full' href="https://facebook.com" aria-label="Facebook">
                                <FaFacebookF className="text-gray-400 hover:text-white transition" />
                            </Link>
                            <Link className='bg-[#131E32] p-2 rounded-full' href="https://instagram.com" aria-label="Instagram">
                                <FaInstagram className="text-gray-400 hover:text-white transition" />
                            </Link>
                            <Link className='bg-[#131E32] p-2 rounded-full' href="https://linkedin.com" aria-label="LinkedIn">
                                <FaLinkedinIn className="text-gray-400 hover:text-white transition" />
                            </Link>
                            <Link className='bg-[#131E32] p-2 rounded-full' href="https://youtube.com" aria-label="YouTube">
                                <FaYoutube className="text-gray-400 hover:text-white transition" />
                            </Link>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex flex-col lg:py-10 py-5 w-full border-b lg:pb-10 pb-5 border-[#1E2940] justify-center items-center gap-6 lg:gap-10 mb-6 lg:mb-0">
                        {/* Main Links */}
                        <div className="flex gap-4 flex-wrap items-center lg:justify-center ">
                            <div className="flex gap-5 lg:pr-10 lg:gap-10 items-center ">
                                {mainLinks.map((link) => (
                                    <CustomLink
                                        key={link.id}
                                        label={link.label}
                                        href={link.href}
                                        className=" "
                                    />
                                ))}
                            </div>

                            {/* API Links */}
                            <div className="lg:border-l lg:pl-10 flex items-center gap-5 lg:gap-10 s">
                                {apiLinks.map((link) => (
                                    <CustomLink
                                        key={link.id}
                                        label={link.label}
                                        href={link.href}
                                        className=" "
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="flex  items-center lg:gap-5 gap-4 flex-wrap ">
                            {productLinks.map((link) => (
                                <CustomLink
                                    key={link.id}
                                    label={link.label}
                                    href={link.href}
                                    className=" "
                                />
                            ))}
                        </div>
                    </div>

                    {/* Contact and Copyright */}
                    <div className="flex flex-col items-center w-full justify-between text-sm gap-6">

                        <div className="flex flex-wrap w-full justify-between text-sm items-center gap-4">
                            <div className='flex gap-2 items-center'><FooterPhone/> {contact.phone}</div>
                            <div className='flex gap-2 items-center'><BuildingIcon /> {contact.address}</div>
                            <Link className='flex gap-2 items-center'  href={`mailto:${contact.email}`}  >
                                <MailIcon />   {contact.email}
                            </Link>
                        </div>
                        <div>
                            <p className='text-[#5D6169]'>© {new Date().getFullYear()} DrayMatch. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </footer >
    );
};

export default Footer;