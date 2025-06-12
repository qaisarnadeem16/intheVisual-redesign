import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Section from './common/section';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';


interface CustomLinkProps {
    label: string;
    href: string;
    className?: string;
    textColor?: string;
    iconColor?: string;
    transitionDuration?: number;
}

const CustomLink: React.FC<CustomLinkProps> = ({
    label,
    href,
    className = '',
    textColor = 'text-gray-600',
    iconColor = 'text-gray-600',
    transitionDuration = 200,
}) => {
    return (
        <Link
            className={`group ${textColor} hover:text-blue-900 transition-colors duration-${transitionDuration} ${className}`}
            href={href}
        >
            <span className="inline-flex items-center gap-1">
                {label}
                <GoArrowUpRight
                    className={`${iconColor} group-hover:opacity-100 opacity-0 text-blue-900 transition-opacity duration-${transitionDuration}`}
                />
            </span>
        </Link>
    );
};

const Footer: React.FC = () => {
 
    const quickLinks = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About Us', href: '/about' },
        { id: 3, label: 'FAQs', href: '/faqs' },
        { id: 4, label: 'Contact Us', href: '/contact' },
    ];

    const contactInfo = {
        address: '1942 Broadway St. STE 314C Boulder CO 80302 US',
        phone: '+923472779429',
        email: 'salesinquiry@inthevisual.org',
    };

    const termsPolicies = [
        { id: 1, label: 'Privacy Policy', href: '/privacy' },
        { id: 2, label: 'Terms and Conditions', href: '/terms' },
        { id: 3, label: 'Safety', href: '/safety' },
    ];

    return (
        <footer className="bg-gray-50 py-8 font-poppins">
            <Section className=" px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-start">
                        <div className="w-32 mb-4">
                            <Link href="/">
                                <Image
                                    src={'/assets/logo.svg'}
                                    alt="Logo"
                                    unoptimized
                                    priority
                                    width={64}
                                    height={64}
                                    className="hover:scale-105 w-3/4 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                        <p className="text-sm font-medium font-poppins">
                            Create Your In <br /> The Visual Experience
                        </p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">Follow us on:</p>
                            <div className="flex space-x-3 mt-2">
                                <Link target="_blank" href="https://www.facebook.com/share/19rpZnYtv2/?mibextid=wwXIfr" aria-label="Facebook">
                                    <FaFacebookF className="text-gray-600 hover:text-blue-900 transition" />
                                </Link>
                                <Link target="_blank" href="https://www.instagram.com/in_the_visual?igsh=dGpibjJubHljYTky" aria-label="Instagram">
                                    <FaInstagram className="text-gray-600 hover:text-blue-900 transition" />
                                </Link>
                                <Link target="_blank" href="https://www.linkedin.com/company/inthevisualcommerce/posts/?feedView=all" aria-label="LinkedIn">
                                    <FaLinkedinIn className="text-gray-600 hover:text-blue-900 transition" />
                                </Link>
                                {/* <Link target="_blank" href="https://youtube.com" aria-label="YouTube">
                                    <FaYoutube className="text-gray-600 hover:text-blue-900 transition" />
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <CustomLink
                                        label={link.label}
                                        href={link.href}
                                        className="text-sm"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><strong>Address:</strong> {contactInfo.address}</li>
                            <li>
                                <strong>Phone:</strong>{' '}
                                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-900 transition">
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-900 transition">
                                    {contactInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">TERMS AND POLICIES</h3>
                        <ul className="space-y-2">
                            {termsPolicies.map((item) => (
                                <li key={item.id}>
                                    <CustomLink
                                        label={item.label}
                                        href={item.href}
                                        className="text-sm"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;