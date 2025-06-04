import React from "react";

interface Props {
  children:  React.ReactNode;
  className?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={`text-gray1 font-[300] text-center font-poppins  xl:text-base text-sm lg:leading-[20px] 5xl:leading-[24px] ${className}`}
    >
      {children}
    </h3>
  );
};

export default SubHeading;
