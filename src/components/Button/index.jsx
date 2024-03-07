import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[21px]",
};
const variants = {
  fill: {
    indigo_900: "bg-indigo-900 shadow-xs text-amber-300",
    amber_600: "bg-amber-600 text-indigo-900",
  },
};
const sizes = {
  sm: "h-[80px] px-[31px] text-base",
  xs: "h-[42px] px-6 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "amber_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-base ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_900", "amber_600"]),
};

export { Button };
