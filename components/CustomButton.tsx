import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const CustomButton: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles =
    "flex justify-center items-center text-white font-bold  py-2 px-4 rounded-lg mt-5 transition duration-500 ease-in-out";
  const typeStyles = clsx({
    "bg-purple-900 text-white hover:bg-purple-700": variant === "primary",
    "bg-purple-950 text-purple-50 hover:bg-purple-700 border-[1px] border-purple-700": variant === "secondary",
  });

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(baseStyles, typeStyles, className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, typeStyles, className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
