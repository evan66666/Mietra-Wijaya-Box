import React from "react";

const sizes = {
  xl: "text-[40px] font-bold leading-[135%]",
  s: "text-2xl font-bold",
  md: "text-[32px] font-bold leading-[140%]",
  xs: "text-base font-bold",
  lg: "text-4xl font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-ubuntu ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
