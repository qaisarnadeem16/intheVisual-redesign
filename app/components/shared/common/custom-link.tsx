import Link from "next/link";
import React from "react";

interface LinkWithIconProps {
  href: string;
  children?: React.ReactNode;  // Fix type here
  className?: string;
}

const CustomLink: React.FC<LinkWithIconProps> = ({
  href,
  children,    // Destructure children here
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full bg-gradient-to-r from-[#9B17D0] to-[#C53B08] p-[1px] transition duration-300 hover:scale-100 ${className}`}
    >
      <span className="bg-white rounded-full px-6 py-3 text-black font-medium flex items-center gap-2 hover:bg-transparent hover:text-white transition">
        {children}
      </span>
    </Link>
  );
};

export default CustomLink;
