import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-6 w-full bg-primary-button hover:shadow-lg text-white-text font-medium py-3 rounded-full transition ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
