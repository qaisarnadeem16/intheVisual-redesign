"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CustomLink from "./common/custom-link";

// Define type for menu items
type MenuItem = {
    label: string;
    url: string;
};

const Navbar = () => {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isActive = (path: string) =>
        pathname === path
            ? "font-medium text-black"
            : "text-[#51555E]";

    const menuItems: MenuItem[] = [
        { label: "Home", url: "/" },
        // { label: "Services", url: "/services" },
        // { label: "Portfolio", url: "/portfolio" },
        { label: "Pricing", url: "/pricing" },
        // { label: "About Us", url: "/about-us" },
        // { label: "Contact Us", url: "/contact-us" },
    ];

    return (
        <div className="w-full  z-20">
            <nav className="max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-24 py-2 flex justify-between items-center font-poppins">
                <div className="flex items-center justify-between w-full py-1">
                    {/* Logo */}
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

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-3">
                        {menuItems.map((item, i) => (
                            <Link
                                href={item.url}
                                key={i}
                                className={`py-2 px-2 text-base font-[400] hover:scale-105 transition duration-300 ${isActive(item.url)}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <CustomLink href="#contact">
                            Get Started
                        </CustomLink>


                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="xl:hidden text-primary"
                    >
                        <Menu
                            className={`transition-transform duration-300 ${isModalOpen ? "rotate-180" : ""}`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute left-0 top-20 bg-white xl:hidden w-full z-40  shadow-lg transition-all ease-in-out duration-500 transform ${isModalOpen
                        ? "translate-y-0 opacity-100 bg-black"
                        : "-translate-y-[110vh] opacity-40"
                        }`}
                >
                    <div className="p-5">
                        <div className="flex flex-col justify-start items-start gap-4">
                            {menuItems.map((item, i) => (
                                <Link
                                    href={item.url}
                                    key={i}
                                    className={`py-2 px-2 text-base font-[400] hover:scale-105 transition duration-300 ${isActive(item.url)}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <CustomLink href="#contact">
                                Get Started
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
