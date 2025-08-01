// src/components/Button.tsx
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  className,
  variant = "primary",
  ...restProps
}: ButtonProps) {
  const baseStyles = "inline-flex h-fit w-fit rounded-full border px-4 py-2 outline-none ring-yellow-300 transition-colors focus:ring-2";
  
  const variantStyles = {
    primary: "border-blue-100/20 bg-blue-200/10 text-blue-200 hover:border-yellow-200/40 hover:bg-yellow-200/10 hover:text-yellow-300",
    secondary: "border-gray-300/20 bg-gray-200/10 text-gray-200 hover:border-gray-100/40 hover:bg-gray-100/10 hover:text-gray-100"
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className,
      )}
      {...restProps}
    />
  );
}
