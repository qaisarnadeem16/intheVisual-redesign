import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={`text-5xl lg:text-[80px] lg:leading-[80px] font-normal font-bricola text-secondary mb-4   ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
