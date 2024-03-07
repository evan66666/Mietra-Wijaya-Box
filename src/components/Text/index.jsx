import React from "react";

const sizes = {
  xs: "text-[11px] font-normal leading-[13px]",
  lg: "text-xl font-medium leading-[150%]",
  s: "text-sm font-normal leading-[150%]",
  xl: "text-2xl font-medium leading-[150%]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-indigo-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
