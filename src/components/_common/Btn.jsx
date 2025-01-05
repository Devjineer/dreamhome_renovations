import React from "react";

const getBtnVariant = (variant) => {
  switch (variant) {
    case "tea":
      return "bg-white text-tea";
    case "secondary":
      return "bg-tea text-white";
    default:
      return "bg-charcoal text-white";
  }
};

const Btn = ({ text, containerStyle, handleClick, variant, loadingIcon, ...props}) => {
  return (
    <button
      className={`${containerStyle} ${getBtnVariant(variant)}`}
      onClick={handleClick}
      {...props}
    >
      {text}
      {loadingIcon && loadingIcon}
    </button>
  );
};

export default Btn;
