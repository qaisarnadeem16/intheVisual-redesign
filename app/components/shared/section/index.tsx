import React, { ReactNode } from "react";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`5xl:max-w-[1600px]  w-full xl:px-24 lg:px-16 mx-auto px-5 py-5 ${className || ""
        }`}
    >
      {children}
    </div>
  );
};

export default Section;
